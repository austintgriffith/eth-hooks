---
id: "Helpers"
title: "Module: Helpers"
sidebar_label: "Helpers"
sidebar_position: 0
custom_edit_url: null
---

Pure functions in eth-hooks

## Helpers

### asyncSome

▸ **asyncSome**<`T`\>(`arr`, `predicate`): `Promise`<`undefined` \| `T`\>

#### Summary
js .some function that can be used with async predicates

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `predicate` | (`item`: `T`) => `Promise`<`boolean`\> |

#### Returns

`Promise`<`undefined` \| `T`\>

#### Defined in

[src/functions/asyncHelpers.ts:11](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/functions/asyncHelpers.ts#L11)

___

### isEthersProvider

▸ **isEthersProvider**(`providerBase`): `boolean`

#### Summary
Is it a ethers compatible provider, used by EthersModalConnector and useEthersProvider

#### Parameters

| Name | Type |
| :------ | :------ |
| `providerBase` | `unknown` |

#### Returns

`boolean`

#### Defined in

[src/functions/ethersHelpers.ts:23](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/functions/ethersHelpers.ts#L23)

___

### parseProviderOrSigner

▸ **parseProviderOrSigner**(`providerOrSigner`): `Promise`<`undefined` \| `Readonly`<[`TEthersAdaptor`](Models.md#tethersadaptor)\>\>

#### Summary
Parse TEthersProviderOrSigner to TEthersUser
Get the TEthersUser from a provider or signer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `providerOrSigner` | `undefined` \| [`TEthersProviderOrSigner`](Models.md#tethersproviderorsigner) | TEthersProviderOrSigner |

#### Returns

`Promise`<`undefined` \| `Readonly`<[`TEthersAdaptor`](Models.md#tethersadaptor)\>\>

TProviderAndSigner

#### Defined in

[src/functions/parseProviderOrSigner.ts:62](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/functions/parseProviderOrSigner.ts#L62)

## Misc

### asyncForEach

▸ **asyncForEach**<`T`\>(`array`, `callback`): `Promise`<`void`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T`[] |
| `callback` | (`item`: `T`, `index`: `number`) => `Promise`<`void`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/functions/asyncHelpers.ts:18](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/functions/asyncHelpers.ts#L18)

___

### signerHasNetwork

▸ **signerHasNetwork**(`signer`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `undefined` \| `Signer` |

#### Returns

`boolean`

#### Defined in

[src/functions/ethersHelpers.ts:35](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/functions/ethersHelpers.ts#L35)

___

### asEthersAdaptor

▸ **asEthersAdaptor**(`ethersContext`): `Readonly`<[`TEthersAdaptor`](Models.md#tethersadaptor)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ethersContext` | [`IEthersContext`](../interfaces/Models.IEthersContext.md) |

#### Returns

`Readonly`<[`TEthersAdaptor`](Models.md#tethersadaptor)\>

#### Defined in

[src/functions/ethersHelpers.ts:42](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/functions/ethersHelpers.ts#L42)

___

### isValidEthersContext

▸ **isValidEthersContext**(`ethersContext`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ethersContext` | `undefined` \| [`IEthersContext`](../interfaces/Models.IEthersContext.md) |

#### Returns

`boolean`

#### Defined in

[src/functions/ethersHelpers.ts:51](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/functions/ethersHelpers.ts#L51)

___

### isValidEthersAdaptor

▸ **isValidEthersAdaptor**(`ethersAdaptor`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ethersAdaptor` | `undefined` \| [`TEthersAdaptor`](Models.md#tethersadaptor) |

#### Returns

`boolean`

#### Defined in

[src/functions/ethersHelpers.ts:63](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/functions/ethersHelpers.ts#L63)

___

### isAdaptorEqual

▸ **isAdaptorEqual**(`adaptor1`, `adaptor2`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `adaptor1` | `undefined` \| [`TEthersAdaptor`](Models.md#tethersadaptor) |
| `adaptor2` | `undefined` \| [`TEthersAdaptor`](Models.md#tethersadaptor) |

#### Returns

`boolean`

#### Defined in

[src/functions/ethersHelpers.ts:80](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/functions/ethersHelpers.ts#L80)

___

### ethersOverride

▸ **ethersOverride**(`context`, `options`): `Readonly`<[`TEthersAdaptor`](Models.md#tethersadaptor)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`IEthersContext`](../interfaces/Models.IEthersContext.md) |
| `options` | [`TOverride`](Models.md#toverride) |

#### Returns

`Readonly`<[`TEthersAdaptor`](Models.md#tethersadaptor)\>

#### Defined in

[src/functions/hookHelpers.ts:17](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/functions/hookHelpers.ts#L17)

___

### checkUpdateOptions

▸ **checkUpdateOptions**(`update`): `void`

#### Summary
Hook that will verify update options are valid

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `update` | [`TUpdateOptions`](Models.md#tupdateoptions)<`any`\> | Options for updating to be verified |

#### Returns

`void`

#### Defined in

[src/functions/hookHelpers.ts:37](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/functions/hookHelpers.ts#L37)

___

### mergeDefaultOverride

▸ **mergeDefaultOverride**(...`overrides`): [`TOverride`](Models.md#toverride)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...overrides` | [`DeepPartial`](Models.md#deeppartial)<[`TOverride`](Models.md#toverride)\>[] |

#### Returns

[`TOverride`](Models.md#toverride)

#### Defined in

[src/functions/hookHelpers.ts:55](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/functions/hookHelpers.ts#L55)

___

### mergeDefaultUpdateOptions

▸ **mergeDefaultUpdateOptions**<`GResult`\>(...`overrides`): [`TUpdateOptions`](Models.md#tupdateoptions)<`GResult`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `GResult` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...overrides` | [`DeepPartial`](Models.md#deeppartial)<[`TUpdateOptions`](Models.md#tupdateoptions)<`GResult`\>\>[] |

#### Returns

[`TUpdateOptions`](Models.md#tupdateoptions)<`GResult`\>

#### Defined in

[src/functions/hookHelpers.ts:65](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/functions/hookHelpers.ts#L65)

___

### setContextOverride

▸ **setContextOverride**(`adaptor`, `enabled?`): [`TOverride`](Models.md#toverride)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `adaptor` | `undefined` \| [`TEthersAdaptor`](Models.md#tethersadaptor) | `undefined` |
| `enabled` | `boolean` | `true` |

#### Returns

[`TOverride`](Models.md#toverride)

#### Defined in

[src/functions/hookHelpers.ts:83](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/functions/hookHelpers.ts#L83)

___

### processQueryOptions

▸ **processQueryOptions**<`GResult`\>(`options`): `Omit`<`QueryObserverOptions`<`GResult`, `any`, `GResult`, `GResult`, `QueryKey`\>, ``"refetchInterval"`` \| ``"notifyOnChangeProps"`` \| ``"notifyOnChangePropsExclusions"`` \| ``"useErrorBoundary"`` \| ``"refetchOnWindowFocus"`` \| ``"refetchOnMount"`` \| ``"refetchOnReconnect"``\> & { `refetchOnWindowFocus?`: `boolean` \| ``"always"`` ; `refetchOnMount?`: `boolean` \| ``"always"`` ; `refetchOnReconnect?`: `boolean` \| ``"always"``  } & { `refetchInterval?`: `number`  }

#### Type parameters

| Name |
| :------ |
| `GResult` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TUpdateOptions`](Models.md#tupdateoptions)<`GResult`\> |

#### Returns

`Omit`<`QueryObserverOptions`<`GResult`, `any`, `GResult`, `GResult`, `QueryKey`\>, ``"refetchInterval"`` \| ``"notifyOnChangeProps"`` \| ``"notifyOnChangePropsExclusions"`` \| ``"useErrorBoundary"`` \| ``"refetchOnWindowFocus"`` \| ``"refetchOnMount"`` \| ``"refetchOnReconnect"``\> & { `refetchOnWindowFocus?`: `boolean` \| ``"always"`` ; `refetchOnMount?`: `boolean` \| ``"always"`` ; `refetchOnReconnect?`: `boolean` \| ``"always"``  } & { `refetchInterval?`: `number`  }

#### Defined in

[src/functions/hookHelpers.ts:87](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/functions/hookHelpers.ts#L87)

___

### TRequiredKeys

Ƭ **TRequiredKeys**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |
| `key` | `string` |

#### Defined in

[src/functions/keyHelpers.ts:10](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/functions/keyHelpers.ts#L10)

___

### TKeyTypes

Ƭ **TKeyTypes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `provider?` | `string` |
| `adaptor?` | `string` |
| `contract?` | `string` |
| `contractFunc?` | `string` |

#### Defined in

[src/functions/keyHelpers.ts:15](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/functions/keyHelpers.ts#L15)

___

### providerKey

▸ **providerKey**(`providerOrSigner`): `Record`<``"signer"`` \| ``"provider"``, `string`\>

Get a react-query query key fo ethers provider

#### Parameters

| Name | Type |
| :------ | :------ |
| `providerOrSigner` | `undefined` \| [`TEthersProviderOrSigner`](Models.md#tethersproviderorsigner) |

#### Returns

`Record`<``"signer"`` \| ``"provider"``, `string`\>

#### Defined in

[src/functions/keyHelpers.ts:27](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/functions/keyHelpers.ts#L27)

___

### adaptorKey

▸ **adaptorKey**(`adaptor`): `Partial`<`Record`<``"provider"`` \| ``"adaptor"``, `string`\>\>

Get a react-query query key

#### Parameters

| Name | Type |
| :------ | :------ |
| `adaptor` | `undefined` \| [`TEthersAdaptor`](Models.md#tethersadaptor) |

#### Returns

`Partial`<`Record`<``"provider"`` \| ``"adaptor"``, `string`\>\>

#### Defined in

[src/functions/keyHelpers.ts:62](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/functions/keyHelpers.ts#L62)

___

### eventKey

▸ **eventKey**(`m`): `string`

Get a react-query query key

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `Event` \| [`TypedEvent`](Models.md#typedevent)<`Result`\> |

#### Returns

`string`

#### Defined in

[src/functions/keyHelpers.ts:79](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/functions/keyHelpers.ts#L79)

___

### contractKey

▸ **contractKey**(`contract`): `Partial`<`Record`<``"provider"`` \| ``"contract"``, `string`\>\>

Get a react-query query key

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `undefined` \| `BaseContract` |

#### Returns

`Partial`<`Record`<``"provider"`` \| ``"contract"``, `string`\>\>

#### Defined in

[src/functions/keyHelpers.ts:88](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/functions/keyHelpers.ts#L88)

___

### contractFuncKey

▸ **contractFuncKey**(`contract`, `func`): `Record`<``"contractFunc"``, `string`\>

Get a react-query query key

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `undefined` \| `BaseContract` |
| `func` | `undefined` \| (...`args`: `any`[]) => `Promise`<`any`\> |

#### Returns

`Record`<``"contractFunc"``, `string`\>

#### Defined in

[src/functions/keyHelpers.ts:115](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/functions/keyHelpers.ts#L115)

___

### invalidateCache

▸ **invalidateCache**(`queryClient`, `namespace`, `otherKeys?`, `variables?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryClient` | `QueryClient` |
| `namespace` | `string` |
| `otherKeys` | [`TKeyTypes`](Helpers.md#tkeytypes) & { `key?`: `string`  } |
| `variables` | `Record`<`string`, `any`\> |

#### Returns

`void`

#### Defined in

[src/functions/keyHelpers.ts:135](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/functions/keyHelpers.ts#L135)

___

### logQueryCache

▸ **logQueryCache**(`queryClient`, `namespace`, `otherKeys?`, `variables?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryClient` | `QueryClient` |
| `namespace` | `string` |
| `otherKeys` | [`TKeyTypes`](Helpers.md#tkeytypes) & { `key?`: `string`  } |
| `variables` | `Record`<`string`, `any`\> |

#### Returns

`void`

#### Defined in

[src/functions/keyHelpers.ts:144](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/functions/keyHelpers.ts#L144)

___

### isProvider

▸ **isProvider**(`providerOrSigner`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `providerOrSigner` | `undefined` \| [`TEthersProviderOrSigner`](Models.md#tethersproviderorsigner) |

#### Returns

`boolean`

#### Defined in

[src/functions/parseProviderOrSigner.ts:9](https://github.com/scaffold-eth/eth-hooks/blob/951f765/packages/eth-hooks/src/functions/parseProviderOrSigner.ts#L9)
