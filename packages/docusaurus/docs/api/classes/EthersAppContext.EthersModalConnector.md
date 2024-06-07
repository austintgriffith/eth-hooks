---
id: "EthersAppContext.EthersModalConnector"
title: "Class: EthersModalConnector"
sidebar_label: "EthersModalConnector"
custom_edit_url: null
---

[EthersAppContext](../modules/EthersAppContext.md).EthersModalConnector

#### Summary
This is a connector for [web3-react](https://github.com/NoahZinsmeister/web3-react) that allows it to interface with [web3Modal](https://github.com/Web3Modal/web3modal).
The provider selected by user via web3modal is interfaced to the web3-react context.

##### ✨ Features
- This connector used with [useEthersContext](../modules/EthersAppContext.md#useetherscontext) allows the app and all the hooks to effortlessly access the current network, provider, signer, address information IEthersContext
- The connector centralizes and takes care of management of the web3 interaction and provides a consistent exprience for your app.

##### ✏️ Notes
- inherits from web3-react class AbstractConnector

## Hierarchy

- `AbstractConnector`

  ↳ **`EthersModalConnector`**

## Implements

- [`ICommonModalConnector`](../interfaces/EthersAppContext.ICommonModalConnector.md)

## Properties

### \_options

• `Protected` **\_options**: `Partial`<`ICoreOptions`\>

#### Defined in

[src/context/ethers-app/connectors/EthersModalConnector.ts:72](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L72)

___

### \_providerBase

• `Protected` `Optional` **\_providerBase**: `any`

#### Defined in

[src/context/ethers-app/connectors/EthersModalConnector.ts:73](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L73)

___

### \_ethersProvider

• `Protected` `Optional` **\_ethersProvider**: [`TEthersProvider`](../modules/Models.md#tethersprovider)

#### Defined in

[src/context/ethers-app/connectors/EthersModalConnector.ts:74](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L74)

___

### \_web3Modal

• `Protected` `Optional` **\_web3Modal**: `Core`

#### Defined in

[src/context/ethers-app/connectors/EthersModalConnector.ts:75](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L75)

___

### \_id

• `Protected` **\_id**: `undefined` \| `string`

#### Defined in

[src/context/ethers-app/connectors/EthersModalConnector.ts:76](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L76)

___

### \_debug

• `Protected` **\_debug**: `boolean` = `false`

#### Defined in

[src/context/ethers-app/connectors/EthersModalConnector.ts:77](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L77)

___

### \_config

• `Protected` **\_config**: `Readonly`<`TEthersModalConfig`\>

#### Defined in

[src/context/ethers-app/connectors/EthersModalConnector.ts:78](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L78)

___

### \_signer

• `Protected` **\_signer**: `undefined` \| `Signer`

#### Defined in

[src/context/ethers-app/connectors/EthersModalConnector.ts:79](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L79)

___

### \_theme

• `Protected` **\_theme**: `TWeb3ModalTheme` \| `ThemeColors`

#### Defined in

[src/context/ethers-app/connectors/EthersModalConnector.ts:80](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L80)

___

### isModalOpening

▪ `Static` **isModalOpening**: `boolean` = `false`

#### Defined in

[src/context/ethers-app/connectors/EthersModalConnector.ts:81](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L81)

## Accessors

### config

• `get` **config**(): `Readonly`<`TEthersModalConfig`\>

#### Returns

`Readonly`<`TEthersModalConfig`\>

#### Defined in

[src/context/ethers-app/connectors/EthersModalConnector.ts:83](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L83)

## Methods

### hasCachedProvider

▸ **hasCachedProvider**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICommonModalConnector](../interfaces/EthersAppContext.ICommonModalConnector.md).[hasCachedProvider](../interfaces/EthersAppContext.ICommonModalConnector.md#hascachedprovider)

#### Defined in

[src/context/ethers-app/connectors/EthersModalConnector.ts:87](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L87)

___

### log

▸ `Protected` **log**(...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[src/context/ethers-app/connectors/EthersModalConnector.ts:117](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L117)

___

### loadWeb3Modal

▸ **loadWeb3Modal**(): `void`

#### Returns

`void`

#### Implementation of

ICommonModalConnector.loadWeb3Modal

#### Defined in

[src/context/ethers-app/connectors/EthersModalConnector.ts:167](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L167)

___

### activate

▸ **activate**(): `Promise`<`ConnectorUpdate`<`string` \| `number`\>\>

#### Summary
Inherits from AbstractConnector.  This activates web3Modal and opens the modal.

##### ✏️ Notes
Once the user selects a provider
- this will activate the provider and attach the appropriate event listeners.
- get the account and signer
- gets the ethers compatible provider

##### ⚠️ Errors
- [UserClosedModalError](EthersAppContext.UserClosedModalError.md)
- [CouldNotActivateError](EthersAppContext.CouldNotActivateError.md)

#### Returns

`Promise`<`ConnectorUpdate`<`string` \| `number`\>\>

#### Overrides

AbstractConnector.activate

#### Defined in

[src/context/ethers-app/connectors/EthersModalConnector.ts:189](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L189)

___

### deactivate

▸ **deactivate**(): `void`

#### Summary
Safely deactivates the current provider and removes all event listeners

#### Returns

`void`

#### Overrides

AbstractConnector.deactivate

#### Defined in

[src/context/ethers-app/connectors/EthersModalConnector.ts:262](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L262)

___

### getProvider

▸ **getProvider**(): `Promise`<`undefined` \| [`TEthersProvider`](../modules/Models.md#tethersprovider)\>

#### Returns

`Promise`<`undefined` \| [`TEthersProvider`](../modules/Models.md#tethersprovider)\>

#### Overrides

AbstractConnector.getProvider

#### Defined in

[src/context/ethers-app/connectors/EthersModalConnector.ts:282](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L282)

___

### getChainId

▸ **getChainId**(): `Promise`<`string` \| `number`\>

#### Returns

`Promise`<`string` \| `number`\>

#### Overrides

AbstractConnector.getChainId

#### Defined in

[src/context/ethers-app/connectors/EthersModalConnector.ts:286](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L286)

___

### getAccount

▸ **getAccount**(): `Promise`<``null`` \| `string`\>

#### Returns

`Promise`<``null`` \| `string`\>

#### Overrides

AbstractConnector.getAccount

#### Defined in

[src/context/ethers-app/connectors/EthersModalConnector.ts:296](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L296)

___

### getSigner

▸ **getSigner**(): `undefined` \| `Signer`

#### Returns

`undefined` \| `Signer`

#### Implementation of

ICommonModalConnector.getSigner

#### Defined in

[src/context/ethers-app/connectors/EthersModalConnector.ts:308](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L308)

___

### getSignerFromAccount

▸ **getSignerFromAccount**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/context/ethers-app/connectors/EthersModalConnector.ts:312](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L312)

___

### changeSigner

▸ **changeSigner**(`signer`): `Promise`<`void`\>

#### Summary
Change the current signer and account used by the connector

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ICommonModalConnector](../interfaces/EthersAppContext.ICommonModalConnector.md).[changeSigner](../interfaces/EthersAppContext.ICommonModalConnector.md#changesigner)

#### Defined in

[src/context/ethers-app/connectors/EthersModalConnector.ts:323](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L323)

___

### validState

▸ `Protected` **validState**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/context/ethers-app/connectors/EthersModalConnector.ts:334](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L334)

___

### resetModal

▸ **resetModal**(): `void`

#### Summary
Resets the web3Modal and clears the cache

#### Returns

`void`

#### Implementation of

[ICommonModalConnector](../interfaces/EthersAppContext.ICommonModalConnector.md).[resetModal](../interfaces/EthersAppContext.ICommonModalConnector.md#resetmodal)

#### Defined in

[src/context/ethers-app/connectors/EthersModalConnector.ts:342](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L342)

___

### setModalTheme

▸ **setModalTheme**(`theme`): `void`

#### Summary
Sets the web3modal theme: light | dark | ThemeColors

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `TWeb3ModalTheme` \| `ThemeColors` |

#### Returns

`void`

#### Implementation of

[ICommonModalConnector](../interfaces/EthersAppContext.ICommonModalConnector.md).[setModalTheme](../interfaces/EthersAppContext.ICommonModalConnector.md#setmodaltheme)

#### Defined in

[src/context/ethers-app/connectors/EthersModalConnector.ts:357](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L357)

___

### checkValidCachedProvider

▸ **checkValidCachedProvider**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/context/ethers-app/connectors/EthersModalConnector.ts:361](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L361)

## Constructors

### constructor

• **new EthersModalConnector**(`web3modalOptions`, `config?`, `id?`, `debug?`)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `web3modalOptions` | `Partial`<`ICoreOptions`\> | `undefined` | see [web3modal docs](https://github.com/Web3Modal/web3modal#provider-options) for details.  You can also check the [scaffold-eth-typescript web3config](https://github.com/scaffold-eth/scaffold-eth-typescript/blob/next/packages/vite-app-ts/src/config/web3ModalConfig.ts) for an example. |
| `config` | `TEthersModalConfig` | `undefined` | Configuration for EthersModalConnector |
| `id?` | `string` | `undefined` | allows you to connect directly to a specific provider.  [See docs](https://github.com/Web3Modal/web3modal#connect-to-specific-provider) |
| `debug` | `boolean` | `false` | turn on debug logging |

#### Overrides

AbstractConnector.constructor

#### Defined in

[src/context/ethers-app/connectors/EthersModalConnector.ts:97](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/context/ethers-app/connectors/EthersModalConnector.ts#L97)
