import { Renderer, renderHook, RenderHookResult } from '@testing-library/react-hooks';
import { MockProvider } from 'ethereum-waffle';
import { FC } from 'react';

import { MockEthersWrapper } from '~helpers/test-harness/MockWeb3Provider';

type TTestHookResult<TProps, TResult> = RenderHookResult<TProps, TResult, Renderer<TProps>> & {
  mockProvider: MockProvider;
};

/**
 * Created a test hook with a Web3Wrapper
 * @param callback callback to init hook
 * @see renderHook from @link testing-library/react-hooks
 * @returns (TTestHookResult)
 */
export const renderTestHook = <TProps, TResult>(
  provider: MockProvider,
  callback: (props: TProps) => TResult
): TTestHookResult<TProps, TResult> => {
  const wrapper: FC = (props) => <MockEthersWrapper mockProvider={provider}>{props.children}</MockEthersWrapper>;
  const result = renderHook(callback, { wrapper: wrapper });
  return {
    ...result,
    mockProvider: provider,
  };
};
