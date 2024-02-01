/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface IPaymasterContract
  extends Truffle.Contract<IPaymasterInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<IPaymasterInstance>;
}

type AllEvents = never;

export interface IPaymasterInstance extends Truffle.ContractInstance {
  /**
   * Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.
   */
  supportsInterface(
    interfaceId: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  /**
   * Return the Gas Limits for Paymaster's functions and maximum msg.data length values for this Paymaster. This function allows different paymasters to have different properties without changes to the RelayHub.
   */
  getGasAndDataLimits(
    txDetails?: Truffle.TransactionDetails
  ): Promise<{
    acceptanceBudget: BN;
    preRelayedCallGasLimit: BN;
    postRelayedCallGasLimit: BN;
    calldataSizeLimit: BN;
  }>;

  /**
   * :warning: **Warning** :warning: using incorrect Forwarder may cause the Paymaster to agreeing to pay for invalid transactions.
   */
  getTrustedForwarder(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   */
  getRelayHub(txDetails?: Truffle.TransactionDetails): Promise<string>;

  preRelayedCall: {
    (
      relayRequest: {
        request: {
          from: string;
          to: string;
          value: number | BN | string;
          gas: number | BN | string;
          nonce: number | BN | string;
          data: string;
          validUntilTime: number | BN | string;
        };
        relayData: {
          maxFeePerGas: number | BN | string;
          maxPriorityFeePerGas: number | BN | string;
          transactionCalldataGasUsed: number | BN | string;
          relayWorker: string;
          paymaster: string;
          forwarder: string;
          paymasterData: string;
          clientId: number | BN | string;
        };
      },
      signature: string,
      approvalData: string,
      maxPossibleGas: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      relayRequest: {
        request: {
          from: string;
          to: string;
          value: number | BN | string;
          gas: number | BN | string;
          nonce: number | BN | string;
          data: string;
          validUntilTime: number | BN | string;
        };
        relayData: {
          maxFeePerGas: number | BN | string;
          maxPriorityFeePerGas: number | BN | string;
          transactionCalldataGasUsed: number | BN | string;
          relayWorker: string;
          paymaster: string;
          forwarder: string;
          paymasterData: string;
          clientId: number | BN | string;
        };
      },
      signature: string,
      approvalData: string,
      maxPossibleGas: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: string; 1: boolean }>;
    sendTransaction(
      relayRequest: {
        request: {
          from: string;
          to: string;
          value: number | BN | string;
          gas: number | BN | string;
          nonce: number | BN | string;
          data: string;
          validUntilTime: number | BN | string;
        };
        relayData: {
          maxFeePerGas: number | BN | string;
          maxPriorityFeePerGas: number | BN | string;
          transactionCalldataGasUsed: number | BN | string;
          relayWorker: string;
          paymaster: string;
          forwarder: string;
          paymasterData: string;
          clientId: number | BN | string;
        };
      },
      signature: string,
      approvalData: string,
      maxPossibleGas: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      relayRequest: {
        request: {
          from: string;
          to: string;
          value: number | BN | string;
          gas: number | BN | string;
          nonce: number | BN | string;
          data: string;
          validUntilTime: number | BN | string;
        };
        relayData: {
          maxFeePerGas: number | BN | string;
          maxPriorityFeePerGas: number | BN | string;
          transactionCalldataGasUsed: number | BN | string;
          relayWorker: string;
          paymaster: string;
          forwarder: string;
          paymasterData: string;
          clientId: number | BN | string;
        };
      },
      signature: string,
      approvalData: string,
      maxPossibleGas: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  postRelayedCall: {
    (
      context: string,
      success: boolean,
      gasUseWithoutPost: number | BN | string,
      relayData: {
        maxFeePerGas: number | BN | string;
        maxPriorityFeePerGas: number | BN | string;
        transactionCalldataGasUsed: number | BN | string;
        relayWorker: string;
        paymaster: string;
        forwarder: string;
        paymasterData: string;
        clientId: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      context: string,
      success: boolean,
      gasUseWithoutPost: number | BN | string,
      relayData: {
        maxFeePerGas: number | BN | string;
        maxPriorityFeePerGas: number | BN | string;
        transactionCalldataGasUsed: number | BN | string;
        relayWorker: string;
        paymaster: string;
        forwarder: string;
        paymasterData: string;
        clientId: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      context: string,
      success: boolean,
      gasUseWithoutPost: number | BN | string,
      relayData: {
        maxFeePerGas: number | BN | string;
        maxPriorityFeePerGas: number | BN | string;
        transactionCalldataGasUsed: number | BN | string;
        relayWorker: string;
        paymaster: string;
        forwarder: string;
        paymasterData: string;
        clientId: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      context: string,
      success: boolean,
      gasUseWithoutPost: number | BN | string,
      relayData: {
        maxFeePerGas: number | BN | string;
        maxPriorityFeePerGas: number | BN | string;
        transactionCalldataGasUsed: number | BN | string;
        relayWorker: string;
        paymaster: string;
        forwarder: string;
        paymasterData: string;
        clientId: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   */
  versionPaymaster(txDetails?: Truffle.TransactionDetails): Promise<string>;

  methods: {
    /**
     * Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.
     */
    supportsInterface(
      interfaceId: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    /**
     * Return the Gas Limits for Paymaster's functions and maximum msg.data length values for this Paymaster. This function allows different paymasters to have different properties without changes to the RelayHub.
     */
    getGasAndDataLimits(
      txDetails?: Truffle.TransactionDetails
    ): Promise<{
      acceptanceBudget: BN;
      preRelayedCallGasLimit: BN;
      postRelayedCallGasLimit: BN;
      calldataSizeLimit: BN;
    }>;

    /**
     * :warning: **Warning** :warning: using incorrect Forwarder may cause the Paymaster to agreeing to pay for invalid transactions.
     */
    getTrustedForwarder(
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    /**
     */
    getRelayHub(txDetails?: Truffle.TransactionDetails): Promise<string>;

    preRelayedCall: {
      (
        relayRequest: {
          request: {
            from: string;
            to: string;
            value: number | BN | string;
            gas: number | BN | string;
            nonce: number | BN | string;
            data: string;
            validUntilTime: number | BN | string;
          };
          relayData: {
            maxFeePerGas: number | BN | string;
            maxPriorityFeePerGas: number | BN | string;
            transactionCalldataGasUsed: number | BN | string;
            relayWorker: string;
            paymaster: string;
            forwarder: string;
            paymasterData: string;
            clientId: number | BN | string;
          };
        },
        signature: string,
        approvalData: string,
        maxPossibleGas: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        relayRequest: {
          request: {
            from: string;
            to: string;
            value: number | BN | string;
            gas: number | BN | string;
            nonce: number | BN | string;
            data: string;
            validUntilTime: number | BN | string;
          };
          relayData: {
            maxFeePerGas: number | BN | string;
            maxPriorityFeePerGas: number | BN | string;
            transactionCalldataGasUsed: number | BN | string;
            relayWorker: string;
            paymaster: string;
            forwarder: string;
            paymasterData: string;
            clientId: number | BN | string;
          };
        },
        signature: string,
        approvalData: string,
        maxPossibleGas: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<{ 0: string; 1: boolean }>;
      sendTransaction(
        relayRequest: {
          request: {
            from: string;
            to: string;
            value: number | BN | string;
            gas: number | BN | string;
            nonce: number | BN | string;
            data: string;
            validUntilTime: number | BN | string;
          };
          relayData: {
            maxFeePerGas: number | BN | string;
            maxPriorityFeePerGas: number | BN | string;
            transactionCalldataGasUsed: number | BN | string;
            relayWorker: string;
            paymaster: string;
            forwarder: string;
            paymasterData: string;
            clientId: number | BN | string;
          };
        },
        signature: string,
        approvalData: string,
        maxPossibleGas: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        relayRequest: {
          request: {
            from: string;
            to: string;
            value: number | BN | string;
            gas: number | BN | string;
            nonce: number | BN | string;
            data: string;
            validUntilTime: number | BN | string;
          };
          relayData: {
            maxFeePerGas: number | BN | string;
            maxPriorityFeePerGas: number | BN | string;
            transactionCalldataGasUsed: number | BN | string;
            relayWorker: string;
            paymaster: string;
            forwarder: string;
            paymasterData: string;
            clientId: number | BN | string;
          };
        },
        signature: string,
        approvalData: string,
        maxPossibleGas: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    postRelayedCall: {
      (
        context: string,
        success: boolean,
        gasUseWithoutPost: number | BN | string,
        relayData: {
          maxFeePerGas: number | BN | string;
          maxPriorityFeePerGas: number | BN | string;
          transactionCalldataGasUsed: number | BN | string;
          relayWorker: string;
          paymaster: string;
          forwarder: string;
          paymasterData: string;
          clientId: number | BN | string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        context: string,
        success: boolean,
        gasUseWithoutPost: number | BN | string,
        relayData: {
          maxFeePerGas: number | BN | string;
          maxPriorityFeePerGas: number | BN | string;
          transactionCalldataGasUsed: number | BN | string;
          relayWorker: string;
          paymaster: string;
          forwarder: string;
          paymasterData: string;
          clientId: number | BN | string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        context: string,
        success: boolean,
        gasUseWithoutPost: number | BN | string,
        relayData: {
          maxFeePerGas: number | BN | string;
          maxPriorityFeePerGas: number | BN | string;
          transactionCalldataGasUsed: number | BN | string;
          relayWorker: string;
          paymaster: string;
          forwarder: string;
          paymasterData: string;
          clientId: number | BN | string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        context: string,
        success: boolean,
        gasUseWithoutPost: number | BN | string,
        relayData: {
          maxFeePerGas: number | BN | string;
          maxPriorityFeePerGas: number | BN | string;
          transactionCalldataGasUsed: number | BN | string;
          relayWorker: string;
          paymaster: string;
          forwarder: string;
          paymasterData: string;
          clientId: number | BN | string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     */
    versionPaymaster(txDetails?: Truffle.TransactionDetails): Promise<string>;
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
