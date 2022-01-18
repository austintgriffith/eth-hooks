import { expect } from 'chai';
import { Signer } from 'ethers';

import { useTokenBalance } from '~~/hooks/erc';
import { getHardhatSigner, hookTestWrapper, wrapperTestSetupHelper } from '~~/helpers/test-utils/wrapper';
import { BasicERC20Contract } from '../test-files/__mocks__/generated/contract-types';
import { setupMockBasicERC20Contract } from '../test-files/__mocks__/setupMockContracts';
import { expectValidWallets } from '~~/helpers/test-utils/functions';
import { defaultBlockWaitOptions } from '~~/helpers/test-utils/constants';
import { mineBlock } from '~~/helpers/test-utils/eth';

describe('useTokenBalance', function () {
  describe('Given ERC20 address is deployed', function () {
    let contractSigner: Signer;
    let basicERC20Contract: BasicERC20Contract;

    beforeEach(async () => {
      const harness = await wrapperTestSetupHelper();
      contractSigner = await getHardhatSigner(harness.mockProvider, 1);
      basicERC20Contract = await setupMockBasicERC20Contract(contractSigner);
    });

    describe('Given no options', function () {
      it(`When the hook is called; then returns address's balance of given ERC20 token`, async () => {
        // Given
        const harness = await hookTestWrapper((address: string) => useTokenBalance(basicERC20Contract, address));
        const [wallet] = harness.mockProvider.getWallets();
        expectValidWallets(wallet);

        // When
        harness.rerender(wallet.address);
        await harness.waitForValueToChange(() => harness.result.current[0], defaultBlockWaitOptions);

        // Then
        const [result] = harness.result.current;
        expect(result).be.equal(0);
      });

      it('When wallet balances changes; then the hook returns the new balance', async () => {
        // Given
        const amountOfTokensTransferringToWallet = 200;
        const harness = await hookTestWrapper((address: string) => useTokenBalance(basicERC20Contract, address));
        const [wallet, walletOfERC20TokenSigner] = harness.mockProvider.getWallets();
        expectValidWallets(wallet, walletOfERC20TokenSigner);
        await basicERC20Contract.transfer(wallet.address, amountOfTokensTransferringToWallet, {
          from: walletOfERC20TokenSigner.address,
        });
        const walletsBalance = await basicERC20Contract.balanceOf(wallet.address);

        // When
        harness.rerender(wallet.address);
        await harness.waitForValueToChange(() => harness.result.current[0], defaultBlockWaitOptions);

        // Then
        const [result] = harness.result.current;
        expect(result).be.equal(walletsBalance).be.equal(amountOfTokensTransferringToWallet);
      });
    });

    // These tests test the functionality of useQuery and useEthersUpdater
    describe('Given options for updating', function () {
      it('When given options of block number interval to update; then the hook does not update until that amount of blocks has passed', async () => {
        // Given
        const initialAmountOfTokensInWallet = 0;
        const amountOfTokensTransferringToWallet = 150;
        const blockIntervalToUpdate = 4;
        const harness = await hookTestWrapper((address: string) =>
          useTokenBalance(basicERC20Contract, address, { blockNumberInterval: blockIntervalToUpdate })
        );
        const [wallet, walletOfERC20TokenSigner] = harness.mockProvider.getWallets();
        expectValidWallets(wallet, walletOfERC20TokenSigner);
        // -- start with 0 from useTokenBalance
        harness.rerender(wallet.address);
        await harness.waitForValueToChange(() => harness.result.current[0], defaultBlockWaitOptions);
        const [resultPreChange] = harness.result.current;
        expect(resultPreChange).be.equal(initialAmountOfTokensInWallet); // Just ensures test is set up correctly
        // -- transfer tokens to wallet
        await basicERC20Contract.transfer(wallet.address, amountOfTokensTransferringToWallet, {
          from: walletOfERC20TokenSigner.address,
        });
        const walletsBalance = await basicERC20Contract.balanceOf(wallet.address);
        // -- mine blocks up to block when update should occur
        let currentBlockNumber = await harness.mockProvider.getBlockNumber();
        while (currentBlockNumber < blockIntervalToUpdate) {
          await mineBlock(harness.mockProvider);
          currentBlockNumber = await harness.mockProvider.getBlockNumber();
          harness.rerender(wallet.address);
          await harness.waitForNextUpdate(defaultBlockWaitOptions);

          // -- ensures no update before correct block
          expect(harness.result.current[0]).be.equal(initialAmountOfTokensInWallet);
        }

        // -- mine final block
        await mineBlock(harness.mockProvider);

        // When
        harness.rerender(wallet.address);
        await harness.waitForValueToChange(() => harness.result.current[0], defaultBlockWaitOptions);

        // Then
        const [result] = harness.result.current;
        expect(result).be.equal(walletsBalance).be.equal(amountOfTokensTransferringToWallet);
      });
    });
  });
});
