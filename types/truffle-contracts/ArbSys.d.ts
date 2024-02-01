/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface ArbSysContract extends Truffle.Contract<ArbSysInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<ArbSysInstance>;
}

type AllEvents = never;

export interface ArbSysInstance extends Truffle.ContractInstance {
  /**
   * Get Arbitrum block number (distinct from L1 block number; Arbitrum genesis block has block number 0)
   */
  arbBlockNumber(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * get the caller's amount of available storage gas
   */
  getStorageGasAvailable(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  methods: {
    /**
     * Get Arbitrum block number (distinct from L1 block number; Arbitrum genesis block has block number 0)
     */
    arbBlockNumber(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * get the caller's amount of available storage gas
     */
    getStorageGasAvailable(txDetails?: Truffle.TransactionDetails): Promise<BN>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
