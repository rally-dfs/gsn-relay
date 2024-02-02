/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface PayableWithEmitContract
  extends Truffle.Contract<PayableWithEmitInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<PayableWithEmitInstance>;
}

export interface GasUsed {
  name: "GasUsed";
  args: {
    gasUsed: BN;
    success: boolean;
    0: BN;
    1: boolean;
  };
}

export interface Received {
  name: "Received";
  args: {
    sender: string;
    value: BN;
    gasleft: BN;
    0: string;
    1: BN;
    2: BN;
  };
}

type AllEvents = GasUsed | Received;

export interface PayableWithEmitInstance extends Truffle.ContractInstance {
  /**
   * :warning: **Warning** :warning: The Forwarder can have a full control over your Recipient. Only trust verified Forwarder.Method is not a required method to allow Recipients to trust multiple Forwarders. Not recommended yet.
   */
  getTrustedForwarder(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * :warning: **Warning** :warning: The Forwarder can have a full control over your Recipient. Only trust verified Forwarder.
   * @param forwarder The address of the Forwarder contract that is being used.
   */
  isTrustedForwarder(
    forwarder: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  doSend: {
    (target: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(target: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(
      target: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      target: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    /**
     * :warning: **Warning** :warning: The Forwarder can have a full control over your Recipient. Only trust verified Forwarder.Method is not a required method to allow Recipients to trust multiple Forwarders. Not recommended yet.
     */
    getTrustedForwarder(
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    /**
     * :warning: **Warning** :warning: The Forwarder can have a full control over your Recipient. Only trust verified Forwarder.
     * @param forwarder The address of the Forwarder contract that is being used.
     */
    isTrustedForwarder(
      forwarder: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    doSend: {
      (target: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        target: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        target: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        target: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };
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