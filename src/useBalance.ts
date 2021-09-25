import { Provider } from '@ethersproject/providers';
import { BigNumber } from 'ethers';
import { useState, useCallback } from 'react';

import { useMounted } from '~helpers/hooks/useMounted';
import { useOnRepetition } from '~~/useOnRepetition';

const zero = BigNumber.from(0);

/**
 * Gets your balance in ETH from given address and provider
 *   
 * ~ Features ~
  - Provide address and get balance corresponding to given address
  - Change provider to access balance on different chains (ex. mainnetProvider)
  - If no pollTime is passed, the balance will update on every new block
 * @param provider (ethers->Provider)
 * @param address (string)
 * @param pollTime (number) :: if >0 use polling, else use instead of onBlock event
 * @returns (Bignumber) ::  current balance
 */
export const useBalance = (provider: Provider | undefined, address: string, pollTime: number = 0): BigNumber => {
  const [balance, setBalance] = useState<BigNumber>(zero);
  const isMounted = useMounted();

  const pollBalance = useCallback(async (provider?: Provider, address?: string): Promise<void> => {
    if (provider && address) {
      const newBalance = await provider.getBalance(address);
      if (isMounted()) {
        setBalance((value) => {
          if (value._hex !== newBalance._hex) return newBalance;
          return value;
        });
      }
    }
  }, []);

  useOnRepetition(
    pollBalance,
    { pollTime, provider, leadingTrigger: address != null && address !== '' && provider != null },
    provider,
    address
  );
  return balance ?? zero;
};
