/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface TestPaymasterVariableGasLimitsContract
  extends Truffle.Contract<TestPaymasterVariableGasLimitsInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<TestPaymasterVariableGasLimitsInstance>;
}

export interface OwnershipTransferred {
  name: "OwnershipTransferred";
  args: {
    previousOwner: string;
    newOwner: string;
    0: string;
    1: string;
  };
}

export interface SampleRecipientPostCall {
  name: "SampleRecipientPostCall";
  args: {
    success: boolean;
    actualCharge: BN;
    0: boolean;
    1: BN;
  };
}

export interface SampleRecipientPostCallWithValues {
  name: "SampleRecipientPostCallWithValues";
  args: {
    gasleft: BN;
    gasUseWithoutPost: BN;
    0: BN;
    1: BN;
  };
}

export interface SampleRecipientPreCall {
  name: "SampleRecipientPreCall";
  args: {};
}

export interface SampleRecipientPreCallWithValues {
  name: "SampleRecipientPreCallWithValues";
  args: {
    gasleft: BN;
    maxPossibleGas: BN;
    0: BN;
    1: BN;
  };
}

type AllEvents =
  | OwnershipTransferred
  | SampleRecipientPostCall
  | SampleRecipientPostCallWithValues
  | SampleRecipientPreCall
  | SampleRecipientPreCallWithValues;

export interface TestPaymasterVariableGasLimitsInstance
  extends Truffle.ContractInstance {
  CALLDATA_SIZE_LIMIT(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  FORWARDER_HUB_OVERHEAD(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  PAYMASTER_ACCEPTANCE_BUDGET(
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  POST_RELAYED_CALL_GAS_LIMIT(
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  PRE_RELAYED_CALL_GAS_LIMIT(
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  deposit: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

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
   */
  getRelayHub(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * :warning: **Warning** :warning: using incorrect Forwarder may cause the Paymaster to agreeing to pay for invalid transactions.
   */
  getTrustedForwarder(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * Returns the address of the current owner.
   */
  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

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

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  renounceOwnership: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  /**
   * The owner of the Paymaster can change the instance of the RelayHub this Paymaster works with. :warning: **Warning** :warning: The deposit on the previous RelayHub must be withdrawn first.
   */
  setRelayHub: {
    (hub: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(hub: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(
      hub: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      hub: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * The owner of the Paymaster can change the instance of the Forwarder this Paymaster works with.the Recipients must trust this Forwarder as well in order for the configuration to remain functional.
   */
  setTrustedForwarder: {
    (forwarder: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      forwarder: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      forwarder: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      forwarder: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.
   */
  supportsInterface(
    interfaceId: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership: {
    (newOwner: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  versionPaymaster(txDetails?: Truffle.TransactionDetails): Promise<string>;

  withdrawAll: {
    (destination: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      destination: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      destination: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      destination: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Withdraw deposit from the RelayHub.
   * @param amount The amount to be subtracted from the sender.
   * @param target The target to which the amount will be transferred.
   */
  withdrawRelayHubDepositTo: {
    (
      amount: number | BN | string,
      target: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      amount: number | BN | string,
      target: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      amount: number | BN | string,
      target: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      amount: number | BN | string,
      target: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    CALLDATA_SIZE_LIMIT(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    FORWARDER_HUB_OVERHEAD(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    PAYMASTER_ACCEPTANCE_BUDGET(
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    POST_RELAYED_CALL_GAS_LIMIT(
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    PRE_RELAYED_CALL_GAS_LIMIT(
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    deposit: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

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
     */
    getRelayHub(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * :warning: **Warning** :warning: using incorrect Forwarder may cause the Paymaster to agreeing to pay for invalid transactions.
     */
    getTrustedForwarder(
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    /**
     * Returns the address of the current owner.
     */
    owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

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

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    /**
     * The owner of the Paymaster can change the instance of the RelayHub this Paymaster works with. :warning: **Warning** :warning: The deposit on the previous RelayHub must be withdrawn first.
     */
    setRelayHub: {
      (hub: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(hub: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(
        hub: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        hub: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * The owner of the Paymaster can change the instance of the Forwarder this Paymaster works with.the Recipients must trust this Forwarder as well in order for the configuration to remain functional.
     */
    setTrustedForwarder: {
      (forwarder: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        forwarder: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        forwarder: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        forwarder: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.
     */
    supportsInterface(
      interfaceId: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership: {
      (newOwner: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    versionPaymaster(txDetails?: Truffle.TransactionDetails): Promise<string>;

    withdrawAll: {
      (destination: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        destination: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        destination: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        destination: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Withdraw deposit from the RelayHub.
     * @param amount The amount to be subtracted from the sender.
     * @param target The target to which the amount will be transferred.
     */
    withdrawRelayHubDepositTo: {
      (
        amount: number | BN | string,
        target: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        amount: number | BN | string,
        target: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        amount: number | BN | string,
        target: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        amount: number | BN | string,
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
