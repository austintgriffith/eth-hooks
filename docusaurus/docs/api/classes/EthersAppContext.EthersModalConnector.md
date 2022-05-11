---
id: 'EthersAppContext.EthersModalConnector'
title: 'Class: EthersModalConnector'
sidebar_label: 'EthersModalConnector'
custom_edit_url: null
---

[EthersAppContext](../modules/EthersAppContext.md).EthersModalConnector

#### Summary

This is a connector for [web3-react](https://github.com/NoahZinsmeister/web3-react) that allows it to interface with [web3Modal](https://github.com/Web3Modal/web3modal).
The provider selected by user via web3modal is interfaced to the web3-react context.

##### ✨ Features

- This connector used with [useEthersContext](../modules/EthersAppContext.md#useetherscontext) allows the app and all the hooks to effortlessly access the current network, provider, signer, address information [IEthersContext](../interfaces/Models.IEthersContext.md)
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

[context/ethers-app/connectors/EthersModalConnector.ts:71](https://github.com/scaffold-eth/eth-hooks/blob/211463e/src/context/ethers-app/connectors/EthersModalConnector.ts#L71)

---

### \_providerBase

• `Protected` `Optional` **\_providerBase**: `any`

#### Defined in

[context/ethers-app/connectors/EthersModalConnector.ts:72](https://github.com/scaffold-eth/eth-hooks/blob/211463e/src/context/ethers-app/connectors/EthersModalConnector.ts#L72)

---

### \_ethersProvider

• `Protected` `Optional` **\_ethersProvider**: [`TEthersProvider`](../modules/Models.md#tethersprovider)

#### Defined in

[context/ethers-app/connectors/EthersModalConnector.ts:73](https://github.com/scaffold-eth/eth-hooks/blob/211463e/src/context/ethers-app/connectors/EthersModalConnector.ts#L73)

---

### \_web3Modal

• `Protected` `Optional` **\_web3Modal**: `Core`

#### Defined in

[context/ethers-app/connectors/EthersModalConnector.ts:74](https://github.com/scaffold-eth/eth-hooks/blob/211463e/src/context/ethers-app/connectors/EthersModalConnector.ts#L74)

---

### \_id

• `Protected` **\_id**: `undefined` \| `string`

#### Defined in

[context/ethers-app/connectors/EthersModalConnector.ts:75](https://github.com/scaffold-eth/eth-hooks/blob/211463e/src/context/ethers-app/connectors/EthersModalConnector.ts#L75)

---

### \_debug

• `Protected` **\_debug**: `boolean` = `false`

#### Defined in

[context/ethers-app/connectors/EthersModalConnector.ts:76](https://github.com/scaffold-eth/eth-hooks/blob/211463e/src/context/ethers-app/connectors/EthersModalConnector.ts#L76)

---

### \_config

• `Protected` **\_config**: `Readonly`<`TEthersModalConfig`\>

#### Defined in

[context/ethers-app/connectors/EthersModalConnector.ts:77](https://github.com/scaffold-eth/eth-hooks/blob/211463e/src/context/ethers-app/connectors/EthersModalConnector.ts#L77)

---

### \_signer

• `Protected` **\_signer**: `undefined` \| `Signer`

#### Defined in

[context/ethers-app/connectors/EthersModalConnector.ts:78](https://github.com/scaffold-eth/eth-hooks/blob/211463e/src/context/ethers-app/connectors/EthersModalConnector.ts#L78)

---

### \_theme

• `Protected` **\_theme**: `TWeb3ModalTheme` \| `ThemeColors`

#### Defined in

[context/ethers-app/connectors/EthersModalConnector.ts:79](https://github.com/scaffold-eth/eth-hooks/blob/211463e/src/context/ethers-app/connectors/EthersModalConnector.ts#L79)

---

### isModalOpening

▪ `Static` **isModalOpening**: `boolean` = `false`

#### Defined in

[context/ethers-app/connectors/EthersModalConnector.ts:80](https://github.com/scaffold-eth/eth-hooks/blob/211463e/src/context/ethers-app/connectors/EthersModalConnector.ts#L80)

## Accessors

### config

• `get` **config**(): `Readonly`<`TEthersModalConfig`\>

#### Returns

`Readonly`<`TEthersModalConfig`\>

#### Defined in

[context/ethers-app/connectors/EthersModalConnector.ts:82](https://github.com/scaffold-eth/eth-hooks/blob/211463e/src/context/ethers-app/connectors/EthersModalConnector.ts#L82)

## Methods

### hasCachedProvider

▸ **hasCachedProvider**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICommonModalConnector](../interfaces/EthersAppContext.ICommonModalConnector.md).[hasCachedProvider](../interfaces/EthersAppContext.ICommonModalConnector.md#hascachedprovider)

#### Defined in

[context/ethers-app/connectors/EthersModalConnector.ts:86](https://github.com/scaffold-eth/eth-hooks/blob/211463e/src/context/ethers-app/connectors/EthersModalConnector.ts#L86)

---

### log

▸ `Protected` **log**(...`args`): `void`

#### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[context/ethers-app/connectors/EthersModalConnector.ts:116](https://github.com/scaffold-eth/eth-hooks/blob/211463e/src/context/ethers-app/connectors/EthersModalConnector.ts#L116)

---

### loadWeb3Modal

▸ **loadWeb3Modal**(): `void`

#### Returns

`void`

#### Implementation of

[ICommonModalConnector](../interfaces/EthersAppContext.ICommonModalConnector.md).[loadWeb3Modal](../interfaces/EthersAppContext.ICommonModalConnector.md#loadweb3modal)

#### Defined in

[context/ethers-app/connectors/EthersModalConnector.ts:167](https://github.com/scaffold-eth/eth-hooks/blob/211463e/src/context/ethers-app/connectors/EthersModalConnector.ts#L167)

---

### activate

▸ **activate**(): `Promise`<`ConnectorUpdate`<`string` \| `number`\>\>

#### Summary

Inherits from AbstractConnector. This activates web3Modal and opens the modal.

##### ✏️ Notes

Once the user selects a provider

- this will activate the provider and attach the appropriate event listeners.
- get the account and signer
- gets the ethers compatable provider

##### ⚠️ Errors

- [UserClosedModalError](EthersAppContext.UserClosedModalError.md)
- [CouldNotActivateError](EthersAppContext.CouldNotActivateError.md)

#### Returns

`Promise`<`ConnectorUpdate`<`string` \| `number`\>\>

#### Overrides

AbstractConnector.activate

#### Defined in

[context/ethers-app/connectors/EthersModalConnector.ts:188](https://github.com/scaffold-eth/eth-hooks/blob/211463e/src/context/ethers-app/connectors/EthersModalConnector.ts#L188)

---

### deactivate

▸ **deactivate**(): `void`

#### Summary

Safely deactivates the current provider and removes all event listeners

#### Returns

`void`

#### Overrides

AbstractConnector.deactivate

#### Defined in

[context/ethers-app/connectors/EthersModalConnector.ts:261](https://github.com/scaffold-eth/eth-hooks/blob/211463e/src/context/ethers-app/connectors/EthersModalConnector.ts#L261)

---

### getProvider

▸ **getProvider**(): `Promise`<`undefined` \| [`TEthersProvider`](../modules/Models.md#tethersprovider)\>

#### Returns

`Promise`<`undefined` \| [`TEthersProvider`](../modules/Models.md#tethersprovider)\>

#### Overrides

AbstractConnector.getProvider

#### Defined in

[context/ethers-app/connectors/EthersModalConnector.ts:281](https://github.com/scaffold-eth/eth-hooks/blob/211463e/src/context/ethers-app/connectors/EthersModalConnector.ts#L281)

---

### getChainId

▸ **getChainId**(): `Promise`<`string` \| `number`\>

#### Returns

`Promise`<`string` \| `number`\>

#### Overrides

AbstractConnector.getChainId

#### Defined in

[context/ethers-app/connectors/EthersModalConnector.ts:285](https://github.com/scaffold-eth/eth-hooks/blob/211463e/src/context/ethers-app/connectors/EthersModalConnector.ts#L285)

---

### getAccount

▸ **getAccount**(): `Promise`<`null` \| `string`\>

#### Returns

`Promise`<`null` \| `string`\>

#### Overrides

AbstractConnector.getAccount

#### Defined in

[context/ethers-app/connectors/EthersModalConnector.ts:295](https://github.com/scaffold-eth/eth-hooks/blob/211463e/src/context/ethers-app/connectors/EthersModalConnector.ts#L295)

---

### getSigner

▸ **getSigner**(): `undefined` \| `Signer`

#### Returns

`undefined` \| `Signer`

#### Implementation of

[ICommonModalConnector](../interfaces/EthersAppContext.ICommonModalConnector.md).[getSigner](../interfaces/EthersAppContext.ICommonModalConnector.md#getsigner)

#### Defined in

[context/ethers-app/connectors/EthersModalConnector.ts:307](https://github.com/scaffold-eth/eth-hooks/blob/211463e/src/context/ethers-app/connectors/EthersModalConnector.ts#L307)

---

### getSignerFromAccount

▸ **getSignerFromAccount**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[context/ethers-app/connectors/EthersModalConnector.ts:311](https://github.com/scaffold-eth/eth-hooks/blob/211463e/src/context/ethers-app/connectors/EthersModalConnector.ts#L311)

---

### changeSigner

▸ **changeSigner**(`signer`): `Promise`<`void`\>

#### Summary

Change the current signer and account used by the connector

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `signer` | `Signer` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ICommonModalConnector](../interfaces/EthersAppContext.ICommonModalConnector.md).[changeSigner](../interfaces/EthersAppContext.ICommonModalConnector.md#changesigner)

#### Defined in

[context/ethers-app/connectors/EthersModalConnector.ts:322](https://github.com/scaffold-eth/eth-hooks/blob/211463e/src/context/ethers-app/connectors/EthersModalConnector.ts#L322)

---

### validState

▸ `Protected` **validState**(): `boolean`

#### Returns

`boolean`

#### Defined in

[context/ethers-app/connectors/EthersModalConnector.ts:333](https://github.com/scaffold-eth/eth-hooks/blob/211463e/src/context/ethers-app/connectors/EthersModalConnector.ts#L333)

---

### resetModal

▸ **resetModal**(): `void`

#### Summary

Resets the web3Modal and clears the cache

#### Returns

`void`

#### Implementation of

[ICommonModalConnector](../interfaces/EthersAppContext.ICommonModalConnector.md).[resetModal](../interfaces/EthersAppContext.ICommonModalConnector.md#resetmodal)

#### Defined in

[context/ethers-app/connectors/EthersModalConnector.ts:341](https://github.com/scaffold-eth/eth-hooks/blob/211463e/src/context/ethers-app/connectors/EthersModalConnector.ts#L341)

---

### setModalTheme

▸ **setModalTheme**(`theme`): `void`

#### Summary

Sets the web3modal theme: light | dark | ThemeColors

#### Parameters

| Name    | Type                               |
| :------ | :--------------------------------- |
| `theme` | `TWeb3ModalTheme` \| `ThemeColors` |

#### Returns

`void`

#### Implementation of

[ICommonModalConnector](../interfaces/EthersAppContext.ICommonModalConnector.md).[setModalTheme](../interfaces/EthersAppContext.ICommonModalConnector.md#setmodaltheme)

#### Defined in

[context/ethers-app/connectors/EthersModalConnector.ts:356](https://github.com/scaffold-eth/eth-hooks/blob/211463e/src/context/ethers-app/connectors/EthersModalConnector.ts#L356)

---

### checkValidCachedProvider

▸ **checkValidCachedProvider**(): `boolean`

#### Returns

`boolean`

#### Defined in

[context/ethers-app/connectors/EthersModalConnector.ts:360](https://github.com/scaffold-eth/eth-hooks/blob/211463e/src/context/ethers-app/connectors/EthersModalConnector.ts#L360)

## Constructors

### constructor

• **new EthersModalConnector**(`web3modalOptions`, `config?`, `id?`, `debug?`)

#### Parameters

| Name               | Type                       | Default value | Description                                                                                                                                                                                                                                                                                  |
| :----------------- | :------------------------- | :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `web3modalOptions` | `Partial`<`ICoreOptions`\> | `undefined`   | see [web3modal docs](https://github.com/Web3Modal/web3modal#provider-options) for details. You can also check the [scaffold-eth-typescript web3config](https://github.com/scaffold-eth/scaffold-eth-typescript/blob/next/packages/vite-app-ts/src/config/web3ModalConfig.ts) for an example. |
| `config`           | `TEthersModalConfig`       | `undefined`   | Configuration for EthersModalConnector                                                                                                                                                                                                                                                       |
| `id?`              | `string`                   | `undefined`   | allows you to connect directly to a specific provider. [See docs](https://github.com/Web3Modal/web3modal#connect-to-specific-provider)                                                                                                                                                       |
| `debug`            | `boolean`                  | `false`       | turn on debug logging                                                                                                                                                                                                                                                                        |

#### Overrides

AbstractConnector.constructor

#### Defined in

[context/ethers-app/connectors/EthersModalConnector.ts:96](https://github.com/scaffold-eth/eth-hooks/blob/211463e/src/context/ethers-app/connectors/EthersModalConnector.ts#L96)
