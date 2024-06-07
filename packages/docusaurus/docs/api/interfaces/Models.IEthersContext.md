---
id: "Models.IEthersContext"
title: "Interface: IEthersContext"
sidebar_label: "IEthersContext"
custom_edit_url: null
---

[Models](../modules/Models.md).IEthersContext

#### Summary
The return type of [TCreateEthersModalConnector](../modules/Models.md#tcreateethersmodalconnector)
- ethers compatible provider [TEthersProvider](../modules/Models.md#tethersprovider)
- a callback to change the current signer
- the current account, chainId and signer
- callbacks to open the web3Modal, logout or change theme

## Hierarchy

- `Web3ReactContextInterface`<[`TEthersProvider`](../modules/Models.md#tethersprovider)\>

  ↳ **`IEthersContext`**

## Properties

### connector

• **connector**: `undefined` \| [`TEthersModalConnector`](../modules/EthersAppContext.md#tethersmodalconnector)

#### Overrides

Web3ReactContextInterface.connector

#### Defined in

[src/models/ethersAppContextTypes.ts:30](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/models/ethersAppContextTypes.ts#L30)

___

### provider

• **provider**: `undefined` \| [`TEthersProvider`](../modules/Models.md#tethersprovider)

#### Defined in

[src/models/ethersAppContextTypes.ts:31](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/models/ethersAppContextTypes.ts#L31)

___

### active

• **active**: `boolean`

#### Overrides

Web3ReactContextInterface.active

#### Defined in

[src/models/ethersAppContextTypes.ts:32](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/models/ethersAppContextTypes.ts#L32)

___

### signer

• **signer**: `undefined` \| [`TEthersSigner`](../modules/Models.md#tetherssigner)

#### Defined in

[src/models/ethersAppContextTypes.ts:33](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/models/ethersAppContextTypes.ts#L33)

___

### account

• **account**: `undefined` \| `string`

#### Overrides

Web3ReactContextInterface.account

#### Defined in

[src/models/ethersAppContextTypes.ts:34](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/models/ethersAppContextTypes.ts#L34)

___

### chainId

• **chainId**: `undefined` \| `number`

#### Overrides

Web3ReactContextInterface.chainId

#### Defined in

[src/models/ethersAppContextTypes.ts:35](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/models/ethersAppContextTypes.ts#L35)

___

### changeSigner

• **changeSigner**: `undefined` \| (`signer`: `Signer`) => `Promise`<`void`\>

#### Defined in

[src/models/ethersAppContextTypes.ts:36](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/models/ethersAppContextTypes.ts#L36)

___

### openModal

• **openModal**: (`ethersModalConnector`: [`TEthersModalConnector`](../modules/EthersAppContext.md#tethersmodalconnector), `onError?`: (`error`: `Error`) => `void`) => `void`

#### Type declaration

▸ (`ethersModalConnector`, `onError?`): `void`

Open web3 modal for login

##### Parameters

| Name | Type |
| :------ | :------ |
| `ethersModalConnector` | [`TEthersModalConnector`](../modules/EthersAppContext.md#tethersmodalconnector) |
| `onError?` | (`error`: `Error`) => `void` |

##### Returns

`void`

#### Defined in

[src/models/ethersAppContextTypes.ts:40](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/models/ethersAppContextTypes.ts#L40)

___

### disconnectModal

• **disconnectModal**: (`onSuccess?`: () => `void`) => `void`

#### Type declaration

▸ (`onSuccess?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `onSuccess?` | () => `void` |

##### Returns

`void`

#### Defined in

[src/models/ethersAppContextTypes.ts:41](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/models/ethersAppContextTypes.ts#L41)

___

### setModalTheme

• **setModalTheme**: `undefined` \| (`theme`: ``"light"`` \| ``"dark"``) => `void`

#### Defined in

[src/models/ethersAppContextTypes.ts:42](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/models/ethersAppContextTypes.ts#L42)
