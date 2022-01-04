import { useQuery } from 'react-query';

import { useBlockNumberContext } from '~~/context';
import { mergeDefaultHookOptions, providerKey } from '~~/functions';
import { useEthersUpdater } from '~~/hooks/useEthersUpdater';
import { const_blockNumberInterval100, TEthersSigner, THookOptions } from '~~/models';
import { keyNamespace } from '~~/models/constants';

const queryKey = { namespace: keyNamespace.signer, key: 'useSignerChainId' } as const;

/**
 * #### Summary
 * Get the address from the signer
 *
 * @category Hooks
 *
 * @param signer
 * @returns
 */
export const useSignerChainId = (
  signer: TEthersSigner | undefined,
  options: THookOptions = mergeDefaultHookOptions({ ...const_blockNumberInterval100 })
): [address: number | undefined, update: () => void] => {
  const keys = [{ ...queryKey, ...providerKey(signer) }] as const;
  const { data, refetch } = useQuery(
    keys,
    async (keys): Promise<number | undefined> => {
      // const { signer } = keys.queryKey[1];
      const chainId = await signer?.getChainId();
      return chainId;
    },
    {
      ...options.update.query,
    }
  );

  const blockNumber = useBlockNumberContext();
  useEthersUpdater(refetch, blockNumber, options);

  return [data, refetch];
};
