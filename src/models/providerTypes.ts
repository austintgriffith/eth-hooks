import { JsonRpcProvider, StaticJsonRpcProvider, Web3Provider, Provider } from '@ethersproject/providers';
import { ethers, Signer } from 'ethers';
/**
 * #### Summary
 * A union of various ethers providers for ease of use and maximum flexiblity
 *
 * #### Notes
 * Used by eth-hooks, eth-components and scaffold-eth-typescript
 *
 * @category Type Definition
 */
export type TEthersProvider = JsonRpcProvider | Web3Provider | StaticJsonRpcProvider;

/**
 * #### Summary
 * A union of various providers and signers in ethers to give maximum flexibility
 *
 * @category Type Definition
 */
export type TEthersProviderOrSigner = JsonRpcProvider | Web3Provider | StaticJsonRpcProvider | Signer;

/**
 * #### Summary
 * A union of abstract, non initalizable providers, used by some functions
 *
 * @category Type Definition
 */
export type TAbstractProvider = Provider;

/**
 * #### Summary
 * Essentially a provider and signer and network information for ease of use.
 *
 * @category Type Definition
 */
export type TEthersUser = {
  signer: Signer | undefined;
  provider: TEthersProvider | undefined;
  providerNetwork: ethers.providers.Network | undefined;
  address: string | undefined;
};
