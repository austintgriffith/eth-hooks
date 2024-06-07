---
id: "ContractAppContext"
title: "Module: ContractAppContext"
sidebar_label: "ContractAppContext"
sidebar_position: 0
custom_edit_url: null
---

A context for your react app with [contractsContextFactory](ContractAppContext.md#contractscontextfactory) that provides you access to load, connect and use typed contracts through your app.

See [the ContractAppContext docs](../../main/context/ContractAppContext) for detailed explanation and examples.

## ContractAppContext

### createConnectorForHardhatContract

▸ **createConnectorForHardhatContract**<`GContractNames`, `GBaseContract`\>(`contractName`, `typechainFactory`, `deployedHardhatContractJson`): `Readonly`<{ `contractName`: `GContractNames` ; `config`: [`TBasicContractDataConfig`](Models.md#tbasiccontractdataconfig)  } & `Readonly`<{ `connect`: [`TContractConnectFunc`](Models.md#tcontractconnectfunc)<`GBaseContract`\> ; `abi`: readonly `Record`<`string`, `any`\>[]  }\>\>

##### Summary
Creates a connector for any of your hardhat contracts

#### Type parameters

| Name | Type |
| :------ | :------ |
| `GContractNames` | extends `string` |
| `GBaseContract` | extends `BaseContract`<`GBaseContract`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractName` | `GContractNames` |
| `typechainFactory` | `Readonly`<{ `connect`: [`TContractConnectFunc`](Models.md#tcontractconnectfunc)<`GBaseContract`\> ; `abi`: readonly `Record`<`string`, `any`\>[]  }\> |
| `deployedHardhatContractJson` | [`TDeployedHardhatContractsJson`](Models.md#tdeployedhardhatcontractsjson) |

#### Returns

`Readonly`<{ `contractName`: `GContractNames` ; `config`: [`TBasicContractDataConfig`](Models.md#tbasiccontractdataconfig)  } & `Readonly`<{ `connect`: [`TContractConnectFunc`](Models.md#tcontractconnectfunc)<`GBaseContract`\> ; `abi`: readonly `Record`<`string`, `any`\>[]  }\>\>

#### Defined in

[src/context/contracts-app/contractConnectors.ts:76](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/context/contracts-app/contractConnectors.ts#L76)

___

### createConnectorForExternalContract

▸ **createConnectorForExternalContract**<`GContractNames`, `GBaseContract`\>(`contractName`, `typechainFactory`, `deployedContractJson`): `Readonly`<{ `contractName`: `GContractNames` ; `config`: [`TBasicContractDataConfig`](Models.md#tbasiccontractdataconfig)  } & `Readonly`<{ `connect`: [`TContractConnectFunc`](Models.md#tcontractconnectfunc)<`GBaseContract`\> ; `abi`: readonly `Record`<`string`, `any`\>[]  }\>\>

#### Summary
Creates a contract connector for any external contract

##### ✏️ Notes
- As an example you could use this for an external contract such as DAI

#### Type parameters

| Name | Type |
| :------ | :------ |
| `GContractNames` | extends `string` |
| `GBaseContract` | extends `BaseContract`<`GBaseContract`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractName` | `GContractNames` |
| `typechainFactory` | `Readonly`<{ `connect`: [`TContractConnectFunc`](Models.md#tcontractconnectfunc)<`GBaseContract`\> ; `abi`: readonly `Record`<`string`, `any`\>[]  }\> |
| `deployedContractJson` | [`TExternalContractsAddressMap`](Models.md#texternalcontractsaddressmap) |

#### Returns

`Readonly`<{ `contractName`: `GContractNames` ; `config`: [`TBasicContractDataConfig`](Models.md#tbasiccontractdataconfig)  } & `Readonly`<{ `connect`: [`TContractConnectFunc`](Models.md#tcontractconnectfunc)<`GBaseContract`\> ; `abi`: readonly `Record`<`string`, `any`\>[]  }\>\>

#### Defined in

[src/context/contracts-app/contractConnectors.ts:113](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/context/contracts-app/contractConnectors.ts#L113)

___

### createConnectorForExternalAbi

▸ **createConnectorForExternalAbi**<`GContractNames`, `GBaseContract`\>(`contractName`, `config`, `abi`, `connectFunc?`): `Readonly`<{ `contractName`: `GContractNames` ; `config`: [`TBasicContractDataConfig`](Models.md#tbasiccontractdataconfig)  } & `Readonly`<{ `connect`: [`TContractConnectFunc`](Models.md#tcontractconnectfunc)<`GBaseContract`\> ; `abi`: readonly `Record`<`string`, `any`\>[]  }\>\>

#### Summary
Create a contract connector from a ABI.

##### ✏️ Notes
- This can be used for unverified external contracts

#### Type parameters

| Name | Type |
| :------ | :------ |
| `GContractNames` | extends `string` |
| `GBaseContract` | extends `BaseContract`<`GBaseContract`\> = `BaseContract` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `contractName` | `GContractNames` | `undefined` |
| `config` | [`TBasicContractDataConfig`](Models.md#tbasiccontractdataconfig) | `undefined` |
| `abi` | `Record`<`string`, `any`\>[] | `undefined` |
| `connectFunc` | `undefined` \| [`TContractConnectFunc`](Models.md#tcontractconnectfunc)<`GBaseContract`\> | `undefined` |

#### Returns

`Readonly`<{ `contractName`: `GContractNames` ; `config`: [`TBasicContractDataConfig`](Models.md#tbasiccontractdataconfig)  } & `Readonly`<{ `connect`: [`TContractConnectFunc`](Models.md#tcontractconnectfunc)<`GBaseContract`\> ; `abi`: readonly `Record`<`string`, `any`\>[]  }\>\>

#### Defined in

[src/context/contracts-app/contractConnectors.ts:151](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/context/contracts-app/contractConnectors.ts#L151)

___

### TContractsContextProps

Ƭ **TContractsContextProps**: `Object`

#### Summary
Props for the ContractContext generated by the contractContextFactory

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ethersContextKey?` | `string` |

#### Defined in

[src/context/contracts-app/contractsContextFactory.tsx:33](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/context/contracts-app/contractsContextFactory.tsx#L33)

___

### contractsContextFactory

▸ **contractsContextFactory**<`GContractNames`, `GAppConnectorList`\>(`loadAppContractConnectors`): `Object`

#### Summary
This is the factory function that creates the ContractContext and returns the hooks you can use to access typed contracts through out your app.

##### ✏️ Notes
- you must define the generic GContractNames if you want type narrowing for the hooks: e.g. `contractsContextFactory<keyof TAppConnectorList, TAppConnectorList>(getAppContractsConfig);`, where getAppContractsConfig is a function that returns Record of contract names and connectors.
- See [this for an example](https://github.com/scaffold-eth/scaffold-eth-typescript/blob/release/packages/vite-app-ts/src/config/appContracts.config.ts) for an example of how to use this.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GContractNames` | extends `string` | A type that represents the names of the contracts you want to access.  Should be `keyof ReturnType<loadAppContractConnectors>`, where `loadAppContractConnectors` is the function that returns the contract connectors config. |
| `GAppConnectorList` | extends [`TConnectorList`](Models.md#tconnectorlist)<`GContractNames`, [`TBaseContractExtended`](Models.md#tbasecontractextended)<`GContractNames`\>\> | A type are the list of contracts and their connectors.  Should be `ReturnType<loadAppContractConnectors>`, where `loadAppContractConnectors` is the function that returns the contract connectors config. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `loadAppContractConnectors` | () => `undefined` \| `GAppConnectorList` | A function that returns a list of app contract connectors. See [this for an example](https://github.com/scaffold-eth/scaffold-eth-typescript/blob/release/packages/vite-app-ts/src/config/appContracts.config.ts) |

#### Returns

`Object`

A context for contracts, hook to access contracts, hook to load contracts, hook to connect to contracts in a network

| Name | Type |
| :------ | :------ |
| `useAppContracts` | <GContractName\>(`contractName`: `GContractName`, `chainId`: `undefined` \| `number`) => `undefined` \| [`TTypedContract`](Models.md#ttypedcontract)<`GContractName`, `GAppConnectorList`\> |
| `useLoadAppContracts` | () => `void` |
| `useConnectAppContracts` | (`adaptor`: `undefined` \| [`TEthersAdaptor`](Models.md#tethersadaptor)) => `void` |
| `useContractsAppStore` | `UseBoundStore`<`StoreApi`<`TContractsAppStore`<`GContractNames`, `GAppConnectorList`, `ReturnType`<`GAppConnectorList`[`Extract`<`GContractNames`, `string`\>][``"connect"``]\>, [`TAppContractsContext`](Models.md#tappcontractscontext)<`GContractNames`, `ReturnType`<`GAppConnectorList`[`Extract`<`GContractNames`, `string`\>][``"connect"``]\>\>\>\>\> |

#### Defined in

[src/context/contracts-app/contractsContextFactory.tsx:71](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/context/contracts-app/contractsContextFactory.tsx#L71)
