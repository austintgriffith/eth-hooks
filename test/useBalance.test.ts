import { expect } from 'chai';

import { hookTestHarness } from '~test-utils';
import { singleTimeout } from '~test-utils/constants/testConstants';
import { fromEther } from '~test-utils/functions/conversions';
import { useBalance } from '~~/useBalance';

describe('useBalance', function () {
  it('When the hook is called, then it returns the initial balance', async () => {
    const harness = await hookTestHarness((address: string) => useBalance(address));
    const [wallet, secondWallet] = harness.mockProvider.getWallets();
    harness.rerender(wallet.address);
    expect(wallet.address).be.not.empty;
    expect(secondWallet.address).be.not.empty;

    await harness.waitForNextUpdate({ timeout: singleTimeout });
    const balance = await wallet.getBalance();
    expect(harness.result.current).be.equal(balance);
  });

  it('When wallet balances changes, then the hook returns the new balance', async () => {
    const harness = await hookTestHarness((address: string) => useBalance(address));
    const [wallet, secondWallet] = harness.mockProvider.getWallets();
    harness.rerender(wallet.address);

    const oldBalance = await wallet.getBalance();

    const valueToSend = fromEther(1);
    // await expect(
    await wallet.sendTransaction({
      to: secondWallet.address,
      value: valueToSend,
    });
    // ).to.changeEtherBalances([wallet], [fromEther(-1)]); // commented out since the waffle chai matcher doesn't work with london hardform

    await harness.waitForNextUpdate({ timeout: singleTimeout });
    const newBalance = await wallet.getBalance();
    expect(harness.result.current).to.equal(newBalance);
    expect(harness.result.current).to.not.equal(oldBalance);
  });
});
