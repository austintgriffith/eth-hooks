import { Renderer, renderHook, RenderHookResult } from '@testing-library/react-hooks';
import { MockProvider } from 'ethereum-waffle';
import { FC } from 'react';

import { waitForActivation, isActive } from './mockHelpers';

import { CreateEthersModalConnector } from '~~/context';
import { getMockProvider } from '~~/helpers/test-utils/harness/getMockProvider';
import { MockAppWrapper } from '~~/helpers/test-utils/harness/wrapper/MockAppWrapper';
import { MockConnector } from '~~/helpers/test-utils/harness/wrapper/MockConnector';

type TTestHookResult<TProps, TResult> = RenderHookResult<TProps, TResult, Renderer<TProps>> & {
  mockProvider: MockProvider;
};

const mockProvider = getMockProvider();
const mockConnector = new MockConnector(mockProvider);

/**
 * Created a test hook with a Web3Wrapper
 * @param callbackToHook callback to init hook
 * @see renderHook from @link testing-library/react-hooks
 * @returns (TTestHookResult)
 */
export const hookTestHarness = async <TInput, ResultT>(
  callbackToHook: (input: TInput) => ResultT
): Promise<TTestHookResult<TInput, ResultT>> => {
  const createMockConnector: CreateEthersModalConnector = () => {
    return mockConnector;
  };

  const wrapper: FC = (props) => (
    <MockAppWrapper createMockConnector={createMockConnector}>{props.children}</MockAppWrapper>
  );

  const callbackWithErrorHandling = (input: TInput): ResultT => {
    try {
      return callbackToHook(input);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  const result = renderHook(callbackWithErrorHandling, { wrapper: wrapper });
  await waitForActivation(() => isActive(mockConnector));

  return {
    ...result,
    mockProvider: mockProvider,
  };
};
