import { BigNumber } from 'ethers';
import { useState, useCallback, useEffect } from 'react';
import { useIsMounted } from 'usehooks-ts';

import { useEthersContext } from '~~/context';
import { useBlockNumberContext } from '~~/context/BlockNumberContext';
import { checkEthersOverride } from '~~/functions';
import { defaultOptions, THookOptions } from '~~/models';

const zero = BigNumber.from(0);
/**
 * #### Summary
 * Gets your balance in ETH for the given address.
 *
 * #### Notes
 * - updates triggered by {@link BlockNumberContext}
 * - uses the current provider {@link provider} from {@link useEthersContext}
 *
 * @category Hooks
 *
 * @param address
 * @param options
 * @returns current balance
 */
export const useBalance = (address: string | undefined, options: THookOptions = defaultOptions()): BigNumber => {
  const isMounted = useIsMounted();
  const ethersProvider = useEthersContext();
  const { provider } = checkEthersOverride(ethersProvider, options);

  const blockNumber = useBlockNumberContext();
  const [balance, setBalance] = useState<BigNumber>(zero);

  const callFunc = useCallback(async (): Promise<void> => {
    if (provider && address) {
      const newBalance = await provider.getBalance(address);
      if (isMounted()) {
        setBalance((value) => {
          if (value.toHexString() !== newBalance.toHexString()) return newBalance;
          return value;
        });
      }
    }
  }, [address, provider, isMounted]);

  useEffect(() => {
    void callFunc();
  }, [blockNumber, callFunc]);

  return balance ?? zero;
};
