/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface IForwarderContract
  extends Truffle.Contract<IForwarderInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<IForwarderInstance>;
}

export interface DomainRegistered {
  name: "DomainRegistered";
  args: {
    domainSeparator: string;
    domainValue: string;
    0: string;
    1: string;
  };
}

export interface RequestTypeRegistered {
  name: "RequestTypeRegistered";
  args: {
    typeHash: string;
    typeStr: string;
    0: string;
    1: string;
  };
}

type AllEvents = DomainRegistered | RequestTypeRegistered;

export interface IForwarderInstance extends Truffle.ContractInstance {
  /**
   * Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.
   */
  supportsInterface(
    interfaceId: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  /**
   * @param from The address of a sender.
   */
  getNonce(from: string, txDetails?: Truffle.TransactionDetails): Promise<BN>;

  verify(
    forwardRequest: {
      from: string;
      to: string;
      value: number | BN | string;
      gas: number | BN | string;
      nonce: number | BN | string;
      data: string;
      validUntilTime: number | BN | string;
    },
    domainSeparator: string,
    requestTypeHash: string,
    suffixData: string,
    signature: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<void>;

  execute: {
    (
      forwardRequest: {
        from: string;
        to: string;
        value: number | BN | string;
        gas: number | BN | string;
        nonce: number | BN | string;
        data: string;
        validUntilTime: number | BN | string;
      },
      domainSeparator: string,
      requestTypeHash: string,
      suffixData: string,
      signature: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      forwardRequest: {
        from: string;
        to: string;
        value: number | BN | string;
        gas: number | BN | string;
        nonce: number | BN | string;
        data: string;
        validUntilTime: number | BN | string;
      },
      domainSeparator: string,
      requestTypeHash: string,
      suffixData: string,
      signature: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: boolean; 1: string }>;
    sendTransaction(
      forwardRequest: {
        from: string;
        to: string;
        value: number | BN | string;
        gas: number | BN | string;
        nonce: number | BN | string;
        data: string;
        validUntilTime: number | BN | string;
      },
      domainSeparator: string,
      requestTypeHash: string,
      suffixData: string,
      signature: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      forwardRequest: {
        from: string;
        to: string;
        value: number | BN | string;
        gas: number | BN | string;
        nonce: number | BN | string;
        data: string;
        validUntilTime: number | BN | string;
      },
      domainSeparator: string,
      requestTypeHash: string,
      suffixData: string,
      signature: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Register a new Request typehash.This is necessary for the Forwarder to be able to verify the signatures conforming to the ERC-712.
   * @param typeName The name of the request type.
   * @param typeSuffix Any extra data after the generic params. Must contain add at least one param. The generic ForwardRequest type is always registered by the constructor.
   */
  registerRequestType: {
    (
      typeName: string,
      typeSuffix: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      typeName: string,
      typeSuffix: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      typeName: string,
      typeSuffix: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      typeName: string,
      typeSuffix: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Register a new domain separator.This is necessary for the Forwarder to be able to verify the signatures conforming to the ERC-712.The domain separator must have the following fields: `name`, `version`, `chainId`, `verifyingContract`. The `chainId` is the current network's `chainId`, and the `verifyingContract` is this Forwarder's address. This method accepts the domain name and version to create and register the domain separator value.
   * @param name The domain's display name.
   * @param version The domain/protocol version.
   */
  registerDomainSeparator: {
    (
      name: string,
      version: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      name: string,
      version: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      name: string,
      version: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      name: string,
      version: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    /**
     * Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.
     */
    supportsInterface(
      interfaceId: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    /**
     * @param from The address of a sender.
     */
    getNonce(from: string, txDetails?: Truffle.TransactionDetails): Promise<BN>;

    verify(
      forwardRequest: {
        from: string;
        to: string;
        value: number | BN | string;
        gas: number | BN | string;
        nonce: number | BN | string;
        data: string;
        validUntilTime: number | BN | string;
      },
      domainSeparator: string,
      requestTypeHash: string,
      suffixData: string,
      signature: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;

    execute: {
      (
        forwardRequest: {
          from: string;
          to: string;
          value: number | BN | string;
          gas: number | BN | string;
          nonce: number | BN | string;
          data: string;
          validUntilTime: number | BN | string;
        },
        domainSeparator: string,
        requestTypeHash: string,
        suffixData: string,
        signature: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        forwardRequest: {
          from: string;
          to: string;
          value: number | BN | string;
          gas: number | BN | string;
          nonce: number | BN | string;
          data: string;
          validUntilTime: number | BN | string;
        },
        domainSeparator: string,
        requestTypeHash: string,
        suffixData: string,
        signature: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<{ 0: boolean; 1: string }>;
      sendTransaction(
        forwardRequest: {
          from: string;
          to: string;
          value: number | BN | string;
          gas: number | BN | string;
          nonce: number | BN | string;
          data: string;
          validUntilTime: number | BN | string;
        },
        domainSeparator: string,
        requestTypeHash: string,
        suffixData: string,
        signature: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        forwardRequest: {
          from: string;
          to: string;
          value: number | BN | string;
          gas: number | BN | string;
          nonce: number | BN | string;
          data: string;
          validUntilTime: number | BN | string;
        },
        domainSeparator: string,
        requestTypeHash: string,
        suffixData: string,
        signature: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Register a new Request typehash.This is necessary for the Forwarder to be able to verify the signatures conforming to the ERC-712.
     * @param typeName The name of the request type.
     * @param typeSuffix Any extra data after the generic params. Must contain add at least one param. The generic ForwardRequest type is always registered by the constructor.
     */
    registerRequestType: {
      (
        typeName: string,
        typeSuffix: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        typeName: string,
        typeSuffix: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        typeName: string,
        typeSuffix: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        typeName: string,
        typeSuffix: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Register a new domain separator.This is necessary for the Forwarder to be able to verify the signatures conforming to the ERC-712.The domain separator must have the following fields: `name`, `version`, `chainId`, `verifyingContract`. The `chainId` is the current network's `chainId`, and the `verifyingContract` is this Forwarder's address. This method accepts the domain name and version to create and register the domain separator value.
     * @param name The domain's display name.
     * @param version The domain/protocol version.
     */
    registerDomainSeparator: {
      (
        name: string,
        version: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        name: string,
        version: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        name: string,
        version: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        name: string,
        version: string,
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
