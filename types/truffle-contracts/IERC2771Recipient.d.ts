/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface IERC2771RecipientContract
  extends Truffle.Contract<IERC2771RecipientInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<IERC2771RecipientInstance>;
}

type AllEvents = never;

export interface IERC2771RecipientInstance extends Truffle.ContractInstance {
  /**
   * :warning: **Warning** :warning: The Forwarder can have a full control over your Recipient. Only trust verified Forwarder.
   * @param forwarder The address of the Forwarder contract that is being used.
   */
  isTrustedForwarder(
    forwarder: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  methods: {
    /**
     * :warning: **Warning** :warning: The Forwarder can have a full control over your Recipient. Only trust verified Forwarder.
     * @param forwarder The address of the Forwarder contract that is being used.
     */
    isTrustedForwarder(
      forwarder: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
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
