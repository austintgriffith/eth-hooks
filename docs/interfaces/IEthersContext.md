[eth-hooks - v3.2.0beta09](../README.md) / [Exports](../modules.md) / IEthersContext

# Interface: IEthersContext

## Hierarchy

- `Web3ReactContextInterface`<[`TEthersProvider`](../modules.md#tethersprovider)\>

  ↳ **`IEthersContext`**

## Table of contents

### Methods

- [activate](IEthersContext.md#activate)
- [setError](IEthersContext.md#seterror)
- [deactivate](IEthersContext.md#deactivate)
- [openModal](IEthersContext.md#openmodal)
- [disconnectModal](IEthersContext.md#disconnectmodal)

### Properties

- [library](IEthersContext.md#library)
- [chainId](IEthersContext.md#chainid)
- [error](IEthersContext.md#error)
- [connector](IEthersContext.md#connector)
- [ethersProvider](IEthersContext.md#ethersprovider)
- [active](IEthersContext.md#active)
- [signer](IEthersContext.md#signer)
- [account](IEthersContext.md#account)
- [changeAccount](IEthersContext.md#changeaccount)
- [setModalTheme](IEthersContext.md#setmodaltheme)

## Methods

### activate

▸ **activate**(`connector`, `onError?`, `throwErrors?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `connector` | `AbstractConnector` |
| `onError?` | (`error`: `Error`) => `void` |
| `throwErrors?` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Web3ReactContextInterface.activate

#### Defined in

node_modules/@web3-react/core/dist/types.d.ts:3

___

### setError

▸ **setError**(`error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |

#### Returns

`void`

#### Inherited from

Web3ReactContextInterface.setError

#### Defined in

node_modules/@web3-react/core/dist/types.d.ts:4

___

### deactivate

▸ **deactivate**(): `void`

#### Returns

`void`

#### Inherited from

Web3ReactContextInterface.deactivate

#### Defined in

node_modules/@web3-react/core/dist/types.d.ts:5

___

### openModal

▸ **openModal**(`ethersModalConnector`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ethersModalConnector` | [`EthersModalConnector`](../classes/EthersModalConnector.md) |

#### Returns

`void`

#### Defined in

[src/context/EthersAppContext.tsx:22](https://github.com/scaffold-eth/eth-hooks/blob/23917e9/src/context/EthersAppContext.tsx#L22)

___

### disconnectModal

▸ **disconnectModal**(): `void`

#### Returns

`void`

#### Defined in

[src/context/EthersAppContext.tsx:23](https://github.com/scaffold-eth/eth-hooks/blob/23917e9/src/context/EthersAppContext.tsx#L23)

## Properties

### library

• `Optional` **library**: [`TEthersProvider`](../modules.md#tethersprovider)

#### Inherited from

Web3ReactContextInterface.library

#### Defined in

node_modules/@web3-react/core/dist/types.d.ts:16

___

### chainId

• `Optional` **chainId**: `number`

#### Inherited from

Web3ReactContextInterface.chainId

#### Defined in

node_modules/@web3-react/core/dist/types.d.ts:17

___

### error

• `Optional` **error**: `Error`

#### Inherited from

Web3ReactContextInterface.error

#### Defined in

node_modules/@web3-react/core/dist/types.d.ts:20

___

### connector

• **connector**: `undefined` \| [`EthersModalConnector`](../classes/EthersModalConnector.md)

#### Overrides

Web3ReactContextInterface.connector

#### Defined in

[src/context/EthersAppContext.tsx:16](https://github.com/scaffold-eth/eth-hooks/blob/23917e9/src/context/EthersAppContext.tsx#L16)

___

### ethersProvider

• **ethersProvider**: `undefined` \| [`TEthersProvider`](../modules.md#tethersprovider)

#### Defined in

[src/context/EthersAppContext.tsx:17](https://github.com/scaffold-eth/eth-hooks/blob/23917e9/src/context/EthersAppContext.tsx#L17)

___

### active

• **active**: `boolean`

#### Overrides

Web3ReactContextInterface.active

#### Defined in

[src/context/EthersAppContext.tsx:18](https://github.com/scaffold-eth/eth-hooks/blob/23917e9/src/context/EthersAppContext.tsx#L18)

___

### signer

• **signer**: `undefined` \| `Signer`

#### Defined in

[src/context/EthersAppContext.tsx:19](https://github.com/scaffold-eth/eth-hooks/blob/23917e9/src/context/EthersAppContext.tsx#L19)

___

### account

• **account**: `undefined` \| `string`

#### Overrides

Web3ReactContextInterface.account

#### Defined in

[src/context/EthersAppContext.tsx:20](https://github.com/scaffold-eth/eth-hooks/blob/23917e9/src/context/EthersAppContext.tsx#L20)

___

### changeAccount

• **changeAccount**: `undefined` \| (`signer`: `Signer`) => `Promise`<`void`\>

#### Defined in

[src/context/EthersAppContext.tsx:21](https://github.com/scaffold-eth/eth-hooks/blob/23917e9/src/context/EthersAppContext.tsx#L21)

___

### setModalTheme

• **setModalTheme**: `undefined` \| (`theme`: ``"light"`` \| ``"dark"``) => `void`

#### Defined in

[src/context/EthersAppContext.tsx:24](https://github.com/scaffold-eth/eth-hooks/blob/23917e9/src/context/EthersAppContext.tsx#L24)
