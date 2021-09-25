import { Provider } from '@ethersproject/providers';
import { useCallback, useEffect, useRef } from 'react';

const DEBUG = false;

interface TOptions {
  /**
   * (number) :: if >0 use polling, else use instead of onBlock event.  the minimum polling time is 10s.
   */
  pollTime?: number;
  /**
   * (TEthersProvider)
   */
  provider?: Provider | undefined;
  /**
   * (boolean) :: invoke the callback after initialization
   */
  leadingTrigger?: boolean;
}

/**
 * A hook will invoke a callback regularly on the "block" event.
 * Alternatively, If a pollTime is provided, it will use that instead. The minumum polling time is 10s
 * - the hook will invoke the callback when the leadTrigger changes state to true as a leading invokation
 * @param callback (func) :: callback funciton, can have variable args
 * @param options (TOptions)
 * @param args varargs callback function arguments
 */
export const useOnRepetition = (
  callback: (..._args: any[]) => void | Promise<void>,
  options: TOptions,
  ...args: any[]
): void => {
  const isPolling = options?.pollTime != null && options.pollTime > 0;
  const readyForEvents = options?.provider && !isPolling;
  const readyForLeadTrigger = (readyForEvents || isPolling) && options?.leadingTrigger;
  const isFirstCall = useRef(true);

  // create a callback for the input function
  const callFunctionWithArgs = useCallback(() => {
    if (DEBUG) console.log('create callback');
    if (callback) {
      if (args && args.length > 0) {
        void callback(...args);
      } else {
        void callback();
      }
    }
  }, [callback, args]);

  // If event based, create a listener if we have a function & a provider
  const listener = useCallback(
    (_blockNumber: number): void => {
      if (DEBUG) console.log('listen block event', _blockNumber, ...args);
      if (readyForEvents) callFunctionWithArgs();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [callFunctionWithArgs, readyForEvents]
  );

  // connect a listener to the network to listen for changes
  useEffect(() => {
    if (options.provider && readyForEvents) {
      options.provider.addListener('block', listener);
      return (): void => {
        options?.provider?.removeListener('block', listener);
      };
    } else {
      return (): void => {
        /* do nothing */
      };
    }
  }, [options.provider, readyForEvents, listener]);

  // Set up the interval if its using polling
  useEffect(() => {
    const tick = (): void => {
      if (DEBUG) console.log('polling: call function');
      callFunctionWithArgs();
    };

    if (isPolling) {
      const safePollTime = (options?.pollTime ?? 0) > 10000 ? options.pollTime : 10000;
      const id = setInterval(tick, safePollTime);
      return (): void => {
        clearInterval(id);
      };
    }
  }, [options.pollTime, isPolling, callFunctionWithArgs]);

  // trigger a first call to populate data.  Only if leadingTrigger is true
  useEffect(() => {
    if (readyForLeadTrigger && callFunctionWithArgs != null && isFirstCall?.current === true) {
      isFirstCall.current = false;
      callFunctionWithArgs();
    }
  }, [callFunctionWithArgs, readyForLeadTrigger]);
};
