[eth-hooks - v3.4.0](../README.md) / TestUtils

# Module: TestUtils

Utilities to write tests with ethers, waffle and react hooks

## Table of contents

### Variables

- [const\_basicGasPrice](TestUtils.md#const_basicgasprice)
- [const\_DefaultTestChainId](TestUtils.md#const_defaulttestchainid)
- [defaultBlockWaitOptions](TestUtils.md#defaultblockwaitoptions)

### Functions

- [mineBlock](TestUtils.md#mineblock)
- [fromGwei](TestUtils.md#fromgwei)
- [fromEther](TestUtils.md#fromether)
- [getMockProvider](TestUtils.md#getmockprovider)
- [hookTestHarness](TestUtils.md#hooktestharness)
- [isActive](TestUtils.md#isactive)
- [waitForActivation](TestUtils.md#waitforactivation)
- [getHardhatAccount](TestUtils.md#gethardhataccount)
- [getHardhatSigner](TestUtils.md#gethardhatsigner)

### Type aliases

- [TTestHookResult](TestUtils.md#ttesthookresult)

## Variables

### const\_basicGasPrice

• **const\_basicGasPrice**: ``875000000``

#### Defined in

[src/helpers/test-utils/constants/testConstants.ts:3](https://github.com/scaffold-eth/eth-hooks/blob/2b71461/src/helpers/test-utils/constants/testConstants.ts#L3)

___

### const\_DefaultTestChainId

• **const\_DefaultTestChainId**: ``31337``

#### Defined in

[src/helpers/test-utils/constants/testConstants.ts:5](https://github.com/scaffold-eth/eth-hooks/blob/2b71461/src/helpers/test-utils/constants/testConstants.ts#L5)

___

### defaultBlockWaitOptions

• **defaultBlockWaitOptions**: `WaitOptions`

#### Defined in

[src/helpers/test-utils/constants/testConstants.ts:7](https://github.com/scaffold-eth/eth-hooks/blob/2b71461/src/helpers/test-utils/constants/testConstants.ts#L7)

## Functions

### mineBlock

▸ `Const` **mineBlock**(`mockProvider`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mockProvider` | `MockProvider` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/helpers/test-utils/eth/hardhatActions.ts:3](https://github.com/scaffold-eth/eth-hooks/blob/2b71461/src/helpers/test-utils/eth/hardhatActions.ts#L3)

___

### fromGwei

▸ `Const` **fromGwei**(`value`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` |

#### Returns

`BigNumber`

#### Defined in

[src/helpers/test-utils/functions/conversions.ts:3](https://github.com/scaffold-eth/eth-hooks/blob/2b71461/src/helpers/test-utils/functions/conversions.ts#L3)

___

### fromEther

▸ `Const` **fromEther**(`value`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` |

#### Returns

`BigNumber`

#### Defined in

[src/helpers/test-utils/functions/conversions.ts:7](https://github.com/scaffold-eth/eth-hooks/blob/2b71461/src/helpers/test-utils/functions/conversions.ts#L7)

___

### getMockProvider

▸ `Const` **getMockProvider**(): `MockProvider`

#### Returns

`MockProvider`

#### Defined in

[src/helpers/test-utils/harness/getMockProvider.ts:6](https://github.com/scaffold-eth/eth-hooks/blob/2b71461/src/helpers/test-utils/harness/getMockProvider.ts#L6)

___

### hookTestHarness

▸ `Const` **hookTestHarness**<`PropsT`, `ResultT`\>(`callbackToHook`): `Promise`<[`TTestHookResult`](TestUtils.md#ttesthookresult)<`PropsT`, `ResultT`\>\>

Created a test hook with a Web3Wrapper

**`see`** renderHook from @link testing-library/react-hooks

#### Type parameters

| Name |
| :------ |
| `PropsT` |
| `ResultT` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackToHook` | (`input`: `PropsT`) => `ResultT` | callback to init hook |

#### Returns

`Promise`<[`TTestHookResult`](TestUtils.md#ttesthookresult)<`PropsT`, `ResultT`\>\>

(TTestHookResult)

#### Defined in

[src/helpers/test-utils/harness/hookTestHarness.tsx:24](https://github.com/scaffold-eth/eth-hooks/blob/2b71461/src/helpers/test-utils/harness/hookTestHarness.tsx#L24)

___

### isActive

▸ `Const` **isActive**(`connector`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `connector` | `MockConnector` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/helpers/test-utils/harness/mockHelpers.ts:6](https://github.com/scaffold-eth/eth-hooks/blob/2b71461/src/helpers/test-utils/harness/mockHelpers.ts#L6)

___

### waitForActivation

▸ `Const` **waitForActivation**(`callback`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `Promise`<`boolean`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/helpers/test-utils/harness/mockHelpers.ts:15](https://github.com/scaffold-eth/eth-hooks/blob/2b71461/src/helpers/test-utils/harness/mockHelpers.ts#L15)

___

### getHardhatAccount

▸ `Const` **getHardhatAccount**(`provider`, `hardhatAccountIndex`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `MockProvider` |
| `hardhatAccountIndex` | `number` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/helpers/test-utils/harness/mockHelpers.ts:26](https://github.com/scaffold-eth/eth-hooks/blob/2b71461/src/helpers/test-utils/harness/mockHelpers.ts#L26)

___

### getHardhatSigner

▸ `Const` **getHardhatSigner**(`provider`, `hardhatAccountIndex`): `Promise`<`Signer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `MockProvider` |
| `hardhatAccountIndex` | `number` |

#### Returns

`Promise`<`Signer`\>

#### Defined in

[src/helpers/test-utils/harness/mockHelpers.ts:36](https://github.com/scaffold-eth/eth-hooks/blob/2b71461/src/helpers/test-utils/harness/mockHelpers.ts#L36)

## Type aliases

### TTestHookResult

Ƭ **TTestHookResult**<`PropsT`, `TResult`\>: `RenderHookResult`<`PropsT`, `TResult`, `Renderer`<`PropsT`\>\> & { `mockProvider`: `MockProvider`  }

#### Type parameters

| Name |
| :------ |
| `PropsT` |
| `TResult` |

#### Defined in

[src/helpers/test-utils/harness/hookTestHarness.tsx:12](https://github.com/scaffold-eth/eth-hooks/blob/2b71461/src/helpers/test-utils/harness/hookTestHarness.tsx#L12)
