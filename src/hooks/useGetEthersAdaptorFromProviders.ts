import { Signer } from 'ethers';
import { useCallback, useEffect, useState } from 'react';

import { asyncSome } from '~~/functions/asyncSome';
import { parseProviderOrSigner } from '~~/functions/parseProviderOrSigner';
import { TEthersProvider } from '~~/models';
import { TEthersAdaptor } from '~~/models/ethersAppContextTypes';

/**
 * #### Summary
 * Gets the user {@link TEthersUser} from from the current provider or array of fallback providers
 *
 * #### Notes
 * - 🤚🏽 Consider using the context provider {@link ethersProvider}
 *
 * @category Hooks
 *
 * @param currentProvider
 * @param moreProviders
 * @returns
 */
export const useGetEthersAdaptorFromProviders = (
  currentProvider: TEthersProvider | undefined,
  ...moreProviders: TEthersProvider[]
): TEthersAdaptor | undefined => {
  const [signer, setSigner] = useState<Signer>();
  const [provider, setProvider] = useState<TEthersProvider>();
  const [chainId, setChainId] = useState<number>();
  const [account, setAccount] = useState<string>();

  const allProviders = [currentProvider, ...moreProviders].filter((f) => f != null) as TEthersProvider[];
  const providerDeps: string = allProviders
    .map((m) => {
      return `${m?.network?.name}_${m?.network?.chainId}_${m?.connection.url}`;
    })
    .reduce((acc, value) => {
      if (!acc) return value ?? '';
      return acc + value ?? '';
    }, '');

  const update = useCallback(
    async (): Promise<void> => {
      const foundSigner = await asyncSome(allProviders, async (provider) => {
        const result = await parseProviderOrSigner(provider);
        if (result) {
          setSigner(result.signer);
          setProvider(result.provider);
          setAccount(result.account);
          setChainId(result.chainId);
          return true;
        }
        return false;
      });

      if (!foundSigner && currentProvider != null) {
        setProvider(currentProvider);
        setSigner(undefined);
        setAccount(undefined);
        setChainId(undefined);
        setAccount(undefined);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [providerDeps]
  );

  useEffect(() => {
    void update();
  }, [update]);

  const result: TEthersAdaptor = {
    signer,
    provider,
    chainId,
    account,
  };
  if (result.account == null && provider == null && signer == null && chainId == null) {
    return undefined;
  }
  return result;
};
