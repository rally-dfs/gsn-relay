import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Express, Request, Response } from 'express';
import { Server } from 'http';
import ow from 'ow';

import { PenalizerService } from './penalizer/PenalizerService';
import {
  AuditRequest,
  AuditRequestShape,
  AuditResponse,
  LoggerInterface,
  RelayTransactionRequestShape,
} from '@opengsn/common';
import { RelayServer } from './RelayServer';
import { toBN } from 'web3-utils';

export interface ParamsDictionary {
  [key: string]: string;
}

export class HttpServer {
  app: Express;
  private serverInstance?: Server;
  booted: boolean = false;

  constructor(
    private readonly port: number,
    readonly logger: LoggerInterface,
    readonly relayService?: RelayServer,
    readonly penalizerService?: PenalizerService
  ) {
    this.app = express();
    this.app.use(cors());

    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());

    if (this.relayService != null) {
      this.app.get('/health', this.healthCheckHandler.bind(this));
      this.app.get('/balances', this.balanceHandler.bind(this));
      this.app.get('/balancehealth', this.balanceHealthHandler.bind(this));
      // used to work before workspaces, needs research
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      this.app.post('/getaddr', this.pingHandler.bind(this));
      // used to work before workspaces, needs research
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      this.app.get('/getaddr', this.pingHandler.bind(this));
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      this.app.post('/stats', this.statsHandler.bind(this));
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      this.app.get('/stats', this.statsHandler.bind(this));
      // used to work before workspaces, needs research
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      this.app.post('/relay', this.relayHandler.bind(this));
      this.relayService.on('error', (e) => {
        console.error('httpServer:', e);
      });
    }

    if (this.penalizerService != null) {
      // used to work before workspaces, needs research
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      this.app.post('/audit', this.auditHandler.bind(this));
    }
  }

  start(): void {
    this.serverInstance = this.app.listen(this.port, () => {
      this.logger.info(`Listening on port ${this.port}`);
      this.relayService?.start();
    });
  }

  stop(): void {
    this.serverInstance?.close();
    this.logger.info('Http server stopped.\nShutting down relay...');
  }

  close(): void {
    this.logger.info('Stopping relay worker...');
    this.relayService?.stop();
    this.penalizerService?.stop();
  }

  async healthCheckHandler(req: Request, res: Response): Promise<void> {
    if (!this.booted) {
      const metaData = await this.relayService!.pingHandler();

      if (metaData.ready) {
        this.booted = true;
      } else {
        res.status(500).send('NOT ready');
        return;
      }
    }

    res.send('Ready');
  }

  async balanceHandler(req: Request, res: Response): Promise<void> {
    if (this.relayService == null) {
      throw new Error('RelayServer not initialized');
    }

    if (
      this.relayService.workerBalanceRequired.currentValue == null ||
      this.relayService.registrationManager.balanceRequired.currentValue == null
    ) {
      throw new Error('RelayServer balances not initialized');
    }

    const output = {
      workerBalance: this.relayService.workerBalanceRequired.currentValue.toString(),
      managerBalance: this.relayService.registrationManager.balanceRequired.currentValue.toString(),
      paymasterBalance: (await this.relayService.relayHubContract.balanceOf(this.relayService.config.paymasterAddress)).toString(),
    };

    res.send(output);
  }

  async balanceHealthHandler(req: Request, res: Response): Promise<void> {
    if (this.relayService == null) {
      throw new Error('RelayServer not initialized');
    }

    const paymasterBalance = await this.relayService.relayHubContract.balanceOf(this.relayService.config.paymasterAddress);

    if (paymasterBalance.lt(toBN(this.relayService.config.paymasterMinBalance))) {
      res.status(500).send('Manager balance is below target balance.');
      return;
    }

    res.send('Paymaster balance is above target balance.');
  }

  async pingHandler(req: Request, res: Response): Promise<void> {
    if (this.relayService == null) {
      throw new Error('RelayServer not initialized');
    }
    const paymaster = req.query.paymaster;
    if (!(paymaster == null || typeof paymaster === 'string')) {
      throw new Error('Paymaster address is not a valid string');
    }

    try {
      const pingResponse = await this.relayService.pingHandler(paymaster);
      res.send(pingResponse);
      this.logger.info(
        `address ${pingResponse.relayWorkerAddress} sent. ready: ${pingResponse.ready}`
      );
    } catch (e: any) {
      const message: string = e.message;
      res.send({ message });
      this.logger.error(`ping handler rejected: ${message}`);
    }
  }

  statsHandler(req: Request, res: Response): void {
    if (this.relayService == null) {
      throw new Error('RelayServer not initialized');
    }
    try {
      const statsResponse = this.relayService.statsHandler();
      res.send(statsResponse);
      this.logger.info('stats sent.');
    } catch (e: any) {
      const message: string = e.message;
      res.send({ message });
      this.logger.error(`stats handler rejected: ${message}`);
    }
  }

  async relayHandler(req: Request, res: Response): Promise<void> {
    if (this.relayService == null) {
      throw new Error('RelayServer not initialized');
    }
    try {
      ow(req.body, ow.object.exactShape(RelayTransactionRequestShape));
      const { signedTx, nonceGapFilled } =
        await this.relayService.createRelayTransaction(req.body);
      res.send({ signedTx, nonceGapFilled });
    } catch (e: any) {
      const error: string = e.message;
      res.send({ error });
      this.logger.error(`tx failed: ${error}`);
    }
  }

  async auditHandler(
    req: Request<ParamsDictionary, AuditResponse, AuditRequest>,
    res: Response<AuditResponse>
  ): Promise<void> {
    if (this.penalizerService == null) {
      throw new Error('PenalizerService not initialized');
    }
    try {
      ow(req.body, ow.object.exactShape(AuditRequestShape));
      let message = '';
      let penalizeResponse = await this.penalizerService.penalizeRepeatedNonce(
        req.body
      );
      message += penalizeResponse.message ?? '';
      if (penalizeResponse.commitTxHash == null) {
        penalizeResponse =
          await this.penalizerService.penalizeIllegalTransaction(req.body);
        message += penalizeResponse.message ?? '';
      }
      res.send({
        commitTxHash: penalizeResponse.commitTxHash,
        message,
      });
    } catch (e: any) {
      const message: string = e.message;
      res.send({ message });
      this.logger.error(`penalization failed: ${message}`);
    }
  }
}
