/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { expect, use } from 'chai';
import * as sinonChai from 'sinon-chai';

import { useBlockNumberContext } from '~~/context';
import { hookTestHarness } from '~~/helpers/test-utils';
import { defaultBlockWaitOptions } from '~~/helpers/test-utils/constants';
import { mineBlock } from '~~/helpers/test-utils/eth';

use(sinonChai);

const TestHook = (): number | undefined => {
  return useBlockNumberContext();
};

describe('BlockNumberContext', function () {
  describe('Give that context is initalized', function () {
    let initialBlockNumber = 0;

    before(async () => {
      const harness = await hookTestHarness(() => TestHook());
      initialBlockNumber = await harness.mockProvider.getBlockNumber();
      console.log('initial block number', initialBlockNumber);
    });

    it('When the hook called without a new block arriving, useBlockNumberContext gets the current blockNumber', async () => {
      const harness = await hookTestHarness(() => TestHook());
      expect(harness.result.current).to.equal(undefined);
      expect(await harness.mockProvider.getBlockNumber()).to.exist;
      expect(initialBlockNumber).to.exist;
      expect(harness.result.all.length).equals(1);

      await harness.waitForValueToChange(() => harness.result.current, defaultBlockWaitOptions);
      expect(harness.result.current).to.equal(initialBlockNumber);

      expect(harness.result.all.length).equals(2);
    });

    it('When the a new block arrives, useBlockNumberContext updates to the latest value', async () => {
      const harness = await hookTestHarness(() => TestHook());
      expect(harness.result.all.length).equals(1);
      await harness.waitForValueToChange(() => harness.result.current, defaultBlockWaitOptions);
      expect(harness.result.all.length).equals(2);

      // mine a block
      await mineBlock(harness.mockProvider);
      expect(await harness.mockProvider.getBlockNumber()).to.equal(initialBlockNumber + 1);

      await harness.waitForValueToChange(() => harness.result.current, defaultBlockWaitOptions);
      expect(harness.result.current).equal(initialBlockNumber + 1);
      expect(harness.result.all.length).equals(3);

      // mine another block
      await mineBlock(harness.mockProvider);
      expect(await harness.mockProvider.getBlockNumber()).to.equal(initialBlockNumber + 2);

      await harness.waitForValueToChange(() => harness.result.current, defaultBlockWaitOptions);
      expect(harness.result.current).equal(initialBlockNumber + 2);

      expect(harness.result.all.length).equals(4);
    });
  });
});
