import { useWeb3React } from '@web3-react/core';
import { Web3ReactContextInterface } from '@web3-react/core/dist/types';

import { TEthersProvider } from '~~/models';

export type TEthersManager = Web3ReactContextInterface<TEthersProvider>;

/**
 * A wrapper around useWeb3React that we can extend as required
 * @returns TEthersManager
 */
export const useEthersProvider = (): TEthersManager => {
  const result = useWeb3React<TEthersProvider>();

  return { ...result };
};
