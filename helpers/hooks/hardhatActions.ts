import { MockProvider } from 'ethereum-waffle';

export const mineBlock = async (mockProvider: MockProvider): Promise<void> => {
  await mockProvider.send('evm_increaseTime', [3600]);
  await mockProvider.send('evm_mine', []);
};
