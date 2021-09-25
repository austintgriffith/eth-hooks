import { BigNumber, utils } from 'ethers';

export const fromGwei = (value: string | number): BigNumber => {
  return utils.parseUnits(value.toString(), 'gwei');
};

export const fromEther = (value: string | number): BigNumber => {
  return utils.parseEther(value.toString());
};
