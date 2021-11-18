[eth-hooks - v3.4.0](../README.md) / Helpers

# Module: Helpers

Pure functions and helpers with useful functionality

## Table of contents

### Helpers Functions

- [lazier](Helpers.md#lazier)

## Helpers Functions

### lazier

▸ `Const` **lazier**<`T`\>(`importFactory`, `importName`): `LazyExoticComponent`<`T`\>

### Summary
A function that modifies react lazy to allow for named exports

### Example
```typescript
const ExampleUI = lazier(() => import('./exampleui/ExampleUI'), 'ExampleUI');
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ComponentType`<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `importFactory` | () => `Promise`<`Object`\> | a callback that imports e.g. () => import('./exampleui/ExampleUI') |
| `importName` | `string` | the named export you want to import. |

#### Returns

`LazyExoticComponent`<`T`\>

#### Defined in

[src/helpers/lazier.ts:18](https://github.com/scaffold-eth/eth-hooks/blob/2b71461/src/helpers/lazier.ts#L18)
