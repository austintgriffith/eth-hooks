// returns a function that when called will

import { useRef, useCallback, useEffect } from 'react';

// return `true` if the component is mounted
export const useMounted = (): (() => boolean) => {
  const mountedRef = useRef(false);
  const isMounted = useCallback(() => mountedRef.current, []);

  useEffect(() => {
    mountedRef.current = true;

    return (): void => {
      mountedRef.current = false;
    };
  }, []);

  return isMounted;
};
