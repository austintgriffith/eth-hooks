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
  if (update.query.refetchInterval) {
    invariant(
      update.query.refetchInterval == null || update.query.refetchInterval >= 10000,
      'Invalid refetchInterval (polling), must be at least 10000ms or undefined (disabled)'
    );
    invariant(
      update.blockNumberInterval == null,
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

export const mergeDefaultUpdateOptions = (...overrides: DeepPartial<TUpdateOptions>[]): TUpdateOptions => {
  const defaultOptions: TUpdateOptions = defaultUpdateOptions();

  if (overrides?.length > 0) {
    return merge(defaultOptions, ...overrides);
  }

  return defaultOptions;
};

export const setContextOverride = (adaptor: TEthersAdaptor | undefined, enabled: boolean = true): TOverride => {
  return mergeDefaultOverride({ adaptor, adaptorEnabled: enabled });
};
