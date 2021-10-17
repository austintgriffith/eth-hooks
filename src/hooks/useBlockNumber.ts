import { useCallback, useState } from 'react';
import { useIsMounted } from 'usehooks-ts';

import { useOnRepetition } from '~~';
import { useEthersContext } from '~~/context';

/**
 * #### Summary
 * Get the current block number of the network.
 *
 * #### Notes
 * - ✋🏽 For app wide block number access use {@link BlockNumberContext} instead
 * - ⚠ Deprecated
 * - uses the current ethersProvider from context
 *
 * @category Hooks
 *
 * @param pollTime if > 0 uses polling, else it uses onBlock event
 * @returns block number
 */
export const useBlockNumber = (pollTime: number = 0): number => {
  const [blockNumber, setBlockNumber] = useState<number>(0);
  const isMounted = useIsMounted();
  const { ethersProvider } = useEthersContext();

  const getBlockNumber = useCallback(async (): Promise<void> => {
    const nextBlockNumber = await ethersProvider?.getBlockNumber();
    if (isMounted() && ethersProvider != null) {
      setBlockNumber((value) => {
        if (value !== nextBlockNumber) return nextBlockNumber ?? 0;
        return value;
      });
    }
  }, [ethersProvider, isMounted]);

  useOnRepetition(getBlockNumber, { provider: ethersProvider, pollTime });

  return blockNumber;
};
