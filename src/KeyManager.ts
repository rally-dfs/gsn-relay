// @ts-ignore
import EthereumHDKey from 'ethereumjs-wallet/dist/hdkey';

import fs from 'fs';
import ow from 'ow';
import { bufferToHex, PrefixedHexString } from 'ethereumjs-util';
import { TypedTransaction } from '@ethereumjs/tx';

export const KEYSTORE_FILENAME = 'keystore';

export interface SignedTransaction {
  rawTx: PrefixedHexString;
  signedEthJsTx: TypedTransaction;
}

export class KeyManager {
  private readonly hdkey: EthereumHDKey;
  private _privateKeys: Record<PrefixedHexString, Buffer> = {};
  private nonces: Record<string, number> = {};

  /**
   * @param count - # of addresses managed by this manager
   * @param workdir - read seed from keystore file where seed is stored
   */
  constructor(count: number, workdir: string) {
    ow(count, ow.number);

    if (!fs.existsSync(workdir)) {
      throw new Error(
        `workdir=${workdir} does not exist. You must create a directory with necessary keystore file`
      );
    }

    let genseed;
    const keyStorePath = workdir + '/' + KEYSTORE_FILENAME;

    if (!fs.existsSync(keyStorePath)) {
      throw new Error(`keystore file not found: ${keyStorePath}`);
    }

    genseed = JSON.parse(fs.readFileSync(keyStorePath).toString()).seed;

    this.hdkey = EthereumHDKey.fromMasterSeed(genseed);

    this.generateKeys(count);
  }

  generateKeys(count: number): void {
    this._privateKeys = {};
    this.nonces = {};
    for (let index = 0; index < count; index++) {
      const w = this.hdkey.deriveChild(index).getWallet();
      const address = bufferToHex(w.getAddress());
      this._privateKeys[address] = w.getPrivateKey();
      this.nonces[index] = 0;
    }
  }

  getAddress(index: number): PrefixedHexString {
    return this.getAddresses()[index];
  }

  getAddresses(): PrefixedHexString[] {
    return Object.keys(this._privateKeys);
  }

  isSigner(signer: string): boolean {
    return this._privateKeys[signer] != null;
  }

  signTransaction(signer: string, tx: TypedTransaction): SignedTransaction {
    ow(signer, ow.string);
    const privateKey = this._privateKeys[signer];
    if (privateKey === undefined) {
      throw new Error(`Can't sign: signer=${signer} is not managed`);
    }
    const signedEthJsTx = tx.sign(privateKey);
    signedEthJsTx.raw();
    const rawTx = '0x' + signedEthJsTx.serialize().toString('hex');
    return { rawTx, signedEthJsTx };
  }
}
