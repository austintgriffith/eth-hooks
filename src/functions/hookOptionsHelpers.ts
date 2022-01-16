import { merge } from 'merge-anything';
import { invariant } from 'ts-invariant';

import { asEthersAdaptor } from './ethersHelpers';

import {
  TOverride,
  IEthersContext,
  TEthersAdaptor,
  defaultOverride,
  TUpdateOptions,
  defaultUpdateOptions,
  TQueryOptions,
} from '~~/models';
import { DeepPartial } from '~~/models/utilityTypes';

export const ethersOverride = (context: IEthersContext, options: TOverride): Readonly<TEthersAdaptor> => {
  // check if there is an override
  if (options.adaptorEnabled) {
    invariant(
      options.alternateContextKey == null,
      'You cannot use both contextOverride and contextKey at the same time'
    );

    return options.adaptor ?? {};
  }

  return asEthersAdaptor(context);
};

export const checkUpdateOptions = (context: IEthersContext, update: TUpdateOptions): void => {
  // check if there is an override
  if (update.refetchInterval) {
    invariant(
      update.refetchInterval == null || update.refetchInterval >= 10000,
      'Invalid refetchInterval (polling), must be at least 10000ms or undefined (disabled)'
    );
    invariant(
      update.blockNumberInterval === 1,
      'You cannot use both refetchInterval (polling) and blockNumberInterval at the same time'
    );
  } else {
    invariant(update.blockNumberInterval > 0, 'Invalid blockNumberInterval, must be greater than 0');
  }
};

export const mergeDefaultOverride = (...overrides: DeepPartial<TOverride>[]): TOverride => {
  const defaultOptions: TOverride = defaultOverride();

  if (overrides?.length > 0) {
    return merge(defaultOptions, ...overrides);
  }

  return defaultOptions;
};

export const mergeDefaultUpdateOptions = <GResult = any>(
  ...overrides: DeepPartial<TUpdateOptions<GResult>>[]
): TUpdateOptions<GResult> => {
  const defaultOptions: TUpdateOptions = defaultUpdateOptions();

  if (overrides?.length > 0) {
    return merge(defaultOptions, ...overrides);
  }

  return defaultOptions;
};

export const setContextOverride = (adaptor: TEthersAdaptor | undefined, enabled: boolean = true): TOverride => {
  return mergeDefaultOverride({ adaptor, adaptorEnabled: enabled });
};

export const processQueryOptions = <GResult>(
  options: TUpdateOptions<GResult>
): typeof options.query & { refetchInterval?: number } => {
  const queryOptions: TQueryOptions<GResult> & { refetchInterval?: number } = { ...options.query };

  if (options.refetchInterval) {
    queryOptions.enabled = true;
    queryOptions.refetchInterval = options.refetchInterval;
  }
  return queryOptions;
};
