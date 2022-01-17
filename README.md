# 🖇 Eth-Hooks Overview

Commonly used Ethereum hooks.

Used by 🏗 [scaffold-eth](https://github.com/scaffold-eth/scaffold-eth) and 🏭 [scaffold-eth-typescript](https://github.com/scaffold-eth/scaffold-eth-typescript)

Used by ⚙ [eth-components](https://github.com/scaffold-eth/eth-components)

Created by 🏰 [BuidlGuidl.eth](https://BuidlGuidl.com)

## Authors

[@shravansunder](https://github.com/ShravanSunder)

# Quickstart

## Install

```sh
yarn add eth-hooks
```

## Setting up the context for eth-hooks

Add the contexts to your app

```ts
<ContractsAppContext>
  <EthersAppContext>
    <YourMainPage />
  </EthersAppContext>
</ContractsAppContext>
```

> You can see an example of providers in scaffold-eth-typescript [app.tsx](https://github.com/scaffold-eth/scaffold-eth-typescript/blob/next/packages/vite-app-ts/src/App.tsx)

## Using the ethersAppContext & hooks

An example of using the context

```ts
const ethersContext = useEthersContext();
// you now have access to signer, provider, account (address), etc...  See IEthersContext for details
```

An example of using a hook

```typescript
// ---------------------
// 🏦 get your balance
// ---------------------
// This instance uses the provider from the context in useBalance internally
const [yourLocalBalance, update, status] = useBalance(ethersContext.account ?? '');
Z;
```

An example of overriding the provider from the context

```ts
// get an adaptor from a provider or signer
const [mainnetAdaptor] = useEthersAdaptorFromProviderOrSigners(exampleMainnetProvider);
// pass in the override variable
const [yourMainnetBalance] = useBalance(ethersContext.account, mergeDefaultUpdateOptions(), {
  adaptorEnabled: true,
  adaptor: mainnetAdaptor,
});
```

An example of changing an update interval

```ts
// normally the hooks update every block
const [yourLocalBalance, update, status] = useBalance(ethersContext.account);
// you can change the update schedule to every 10 blocks, the default is every 1 block:
const [yourLocalBalance, update, status] = useBalance(ethersContext.account, { blockNumberInterval: 10 });
// you can change the update schedule to every polling, min is 10000ms
const [yourLocalBalance, update, status] = useBalance(ethersContext.account, {
  refetchInterval: 100000,
  blockNumberInterval: undefined,
});
// you can use advanced react-query update options
const [yourLocalBalance, update, status] = useBalance(ethersContext.account, {
  blockNumberInterval: 1,
  query: { refetchOnWindowFocus: true },
});
```

> Check out examples in scaffold-eth-typescript in [useScaffoldHooksExamples.tsx](https://github.com/scaffold-eth/scaffold-eth-typescript/blob/next/packages/vite-app-ts/src/components/main/hooks/useScaffoldHooksExamples.tsx)

## Setup and use contarctAppContext

### Generating contract types

The first thing you'll have to do is generate your contrac types for hardhat and external contracts. Add `eth-sdk` or `typechain` to generate that to a folder such as `generated/contract-types`. Pull [scaffold-eth-typescript](https://github.com/scaffold-eth/scaffold-eth-typescript) for an example of this.

#### An example on to use eth-sdk

scaffold-eth-typescript uses `eth-sdk` to generate types and abi for external contracts using. See the excellent documentation there for this at [eth-sdk github](https://github.com/dethcrypto/eth-sdk). 📝 Note that this would a dev dependency on your project.

- a config of `{contractNames: address}` [externalContractConfig.ts](https://github.com/scaffold-eth/scaffold-eth-typescript/blob/next/packages/vite-app-ts/src/config/externalContractsConfig.ts)
- a config for [eth-sdk-config.ts](https://github.com/scaffold-eth/scaffold-eth-typescript/blob/next/packages/vite-app-ts/scripts/eth-sdk-config.ts.bak)
- and calling the `eth-sdk` with the folder of your config file as a parameter e.g. `yarn eth-sdk -p ./src/generated`

### Using the contractsContextFactory

You'll have to create a config that returns a config of your contracts. This would be hetrogenous key value pair. each value is generated by the helper functions in eth-hooks.

For example:

```ts
// a function that generates the config. Note that your types have to exist already!
export const contractConnectorConfig = () => {
  try {
    const result = {
      // 🙋🏽‍♂️ Add your hadrdhat contracts here
      YourContract: createConnectorForHardhatContract(
        'YourContract',
        hardhatContracts.YourContract__factory,
        hardhatContractsJson
      ),

      // 🙋🏽‍♂️ Add your external contracts here, make sure to define the address in `externalContractsConfig.ts`
      DAI: createConnectorForExternalContract('DAI', externalContracts.DAI__factory, externalContractsAddressMap),
      UNI: createConnectorForExternalContract('UNI', externalContracts.UNI__factory, externalContractsAddressMap),

      // 🙋🏽‍♂️ Add your external abi here (unverified contracts)`
      // DAI: createConnectorForExternalAbi('DAI', { 1: {address: 'xxxx'}}, abi),
    } as const;

    return result;
  } catch (e) {
    console.error(
      '❌ contractConnectorConfig: ERROR with loading contracts please run `yarn contracts:build or yarn contracts:rebuild`.  Then run `yarn deploy`!',
      e
    );
  }

  return undefined;
};

// create a type from the return value of the function above
export type TAppConnectorList = NonNullable<ReturnType<typeof contractConnectorConfig>>;
```

Use `contractContextFactory` to create your hooks and context in your app from the above configuration. You could just copy the blow and use it.

```ts
// you're passing in function `contractConnectorConfig` from above into the factory.  You then have to use the type we defined to type the factory outputs.
export const {
  ContractsAppContext,
  useAppContractsActions,
  useAppContracts,
  useLoadAppContracts,
  useConnectAppContracts,
} = contractsContextFactory<
  /* the contractNames (keys) in config output */
  keyof TAppConnectorList,
  /* the type of the config output  */
  TAppConnectorList,
  /* A type that infers the value of each contractName: contract pair*/
  TTypedContract<keyof TAppConnectorList, TAppConnectorList>
>(contractConnectorConfig);
```

> See scaffold-eth-typescript [contractContext.tsx](https://github.com/scaffold-eth/scaffold-eth-typescript/blob/next/packages/vite-app-ts/src/config/contractContext.ts) and [contractConnectorConfig.ts](https://github.com/scaffold-eth/scaffold-eth-typescript/blob/next/packages/vite-app-ts/src/config/contractConnectorConfig.ts) for full examples on how to do this.

# API Documentation

Check out [the documentation here!](https://scaffold-eth.github.io/eth-hooks/)

The documentation are also available on [scaffold-eth's gitbook](https://docs.scaffoldeth.io/scaffold-eth-libraries/v/eth-hooks-v3/)
