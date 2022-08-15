import { Provider } from '@ethersproject/providers';
import { BaseContract, Signer } from 'ethers';

import { TBasicContractDeployment } from '~~/models';

/**
 * A function that connects to a contract.  Used by {@link TContractConnectorBase}.  This is usually something generated by typechain and is used to connect to contract on the blockchain.
 */
export type TContractConnectFunc<GContract extends BaseContract> = (
  address: string,
  signerOrProvider: Signer | Provider
) => GContract;

/**
 * #### Summary
 * This types describes a base for a connnector.  A contract connector would be a a conception that is the minimum required to connect to a contract.  It has a connector function that returns a typed contract and abi that has contract information.
 */
export type TContractConnectorBase<GContract extends BaseContract> = Readonly<{
  connect: TContractConnectFunc<GContract>;
  abi: Readonly<Record<string, any>[]>;
}>;

/**
 * #### Summary
 * This type descripts a connector that has enough information to create a contract in a chain.  The contractName is required to use a group of connectors to create a connection of available contracts for the app.
 *
 * ##### ✏️ Notes
 * - The config would be a record of chain information that helps the factory create contracts for the app.
 * - based on {@link TContractConnectorBase} and uses {@link TBasicContractDeployment}
 */
export type TContractConnector<
  GContractNames extends string,
  GContract extends BaseContract
  // GContractInterface extends ethers.utils.Interface
> = Readonly<
  {
    contractName: GContractNames;
    config: TBasicContractDeployment;
  } & TContractConnectorBase<GContract>
>;

export type TBaseContractExtended<GContractNames extends string> = BaseContract & { contractName: GContractNames };

/**
 * #### Summary
 * A Record of typed connectors that can be used to create a contract.
 *
 * ##### ✏️ Notes
 * - used by {@link TAppContractsContext}
 */
export type TConnectorList<GContractNames extends string, GContracts extends TBaseContractExtended<GContractNames>> = {
  [contractName in GContractNames]: TContractConnector<GContractNames, GContracts>;
};

/**
 * #### Summary
 * A type that infers contract type `(extended from BaseContract)` based on connectors and contractName.  For example `DAI` from `{ DAI: { connect: ... } }`.  If the contractName is not found, it will return a BaseContract
 *
 * ##### ✏️ Notes
 * - used by {@link contractContextFactory}
 */
export type TTypedContract<
  GContractNames extends string,
  GAppContractConnectorList
> = GAppContractConnectorList extends {
  [key in GContractNames]: { connect: (address: any, signerOrProvider: any) => infer TypedContract };
}
  ? TypedContract
  : TBaseContractExtended<GContractNames>;

/**
 * #### Summary
 * A utility type for typed contracts by name and then by chain
 *
 * ##### ✏️ Notes
 * - used by {@link TAppContractsContext}
 */
export type TContractsByName<
  GContractNames extends string,
  GContracts extends TBaseContractExtended<GContractNames>
> = { [contractName in GContractNames]: { [chainId in number]: GContracts | undefined } };

/**
 * #### Summary
 * A utility type for typed contracts by chain and then by name
 *
 * ##### ✏️ Notes
 * - used by {@link TAppContractsContext}
 */
export type TContractsByChainId<
  GContractNames extends string,
  GContracts extends TBaseContractExtended<GContractNames>
> = {
  [chainId in number]: {
    [contractName in GContractNames]: GContracts | undefined;
  };
};

/**
 * Describes the current ContractsContext for the app used by the context created by {@link contractContextFactory}
 */
export type TAppContractsContext<
  GContractNames extends string,
  GContracts extends TBaseContractExtended<GContractNames>
> = {
  contractConnectors: TConnectorList<GContractNames, GContracts>;
  contractsByName: TContractsByName<GContractNames, GContracts>;
  contractsByChainId: TContractsByChainId<GContractNames, GContracts>;
};
