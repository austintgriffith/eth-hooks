import { BaseContract, ethers } from 'ethers';
import { merge } from 'merge-anything';

import {
  TContractConnectorBase,
  TContractConnector,
  TContractConnectFunc,
  TExternalContractsAddressMap,
  TBasicContractDeployment,
  TContractDeploymentMap,
  TContractMapWithAbi,
  TDeployedHardhatContractsJson,
  deployedHardhatContractsJsonSchema,
  TBasicContract,
  TForgeDeploymentBroadcastCollection,
  forgeDeploymentBroadcastCollectionSchema,
  TForgeBroadcastJson,
  externalContractAddressMap,
} from '~~/models';

/**
 * #### Summary
 * This function is used to extract the contract data from hardhat deployment json files
 *
 * @internal
 * @category ContractAppContext
 * @param configJson {@link TDeployedHardhatContractsJson}
 * @returns
 */
const extractHardhatContracts = (configJson: TDeployedHardhatContractsJson): TContractMapWithAbi => {
  const parse = deployedHardhatContractsJsonSchema.safeParse(configJson);
  if (!parse.success) {
    console.error('Invalid deployment hardhat_contracts.json TDeployedHardhatContractsJson', parse.error);
  }

  const contractData: TContractMapWithAbi = {};
  for (const chainIdStr in configJson) {
    const chainId = parseInt(chainIdStr);
    if (chainId == null || isNaN(chainId)) continue;

    const deployedDataByNetwork = Object.values(configJson[chainId]).filter(
      (f) => parseInt(f?.chainId) === chainId
    )?.[0];
    if (deployedDataByNetwork?.chainId != null) {
      for (const contractName in deployedDataByNetwork.contracts) {
        const config: TBasicContractDeployment = {
          [chainId]: { address: deployedDataByNetwork.contracts[contractName].address, chainId },
        };

        const abi = deployedDataByNetwork.contracts[contractName].abi;
        if (abi && abi?.length > 0) {
          contractData[contractName] = merge(contractData[contractName] ?? {}, { abi: abi });
        }
        contractData[contractName] = merge({ ...contractData[contractName] }, { config });
      }
    }
  }

  return contractData;
};

/**
 * #### Summary
 * Extract externalContracts from TExternalContractsAddressMap
 * @param configJson
 * @returns
 */
const extractExternalContracts = (configJson: TExternalContractsAddressMap): TContractDeploymentMap => {
  const parse = externalContractAddressMap.safeParse(configJson);
  if (!parse.success) {
    console.error('Invalid TExternalContractsAddressMap', parse.error);
  }

  const contractData: TContractDeploymentMap = {};
  for (const chainIdStr in configJson) {
    const chainId = parseInt(chainIdStr);
    if (chainId == null || isNaN(chainId)) continue;

    for (const contractName in configJson[chainId]) {
      const config: TBasicContractDeployment = {
        [chainId]: { address: configJson[chainId][contractName], chainId: chainId },
      };
      contractData[contractName] = merge({ ...(contractData[contractName] ?? {}) }, { config });
    }
  }

  return contractData;
};

const extractForgeBroadcastContracts = (configJson: TForgeDeploymentBroadcastCollection): TContractDeploymentMap => {
  const parse = forgeDeploymentBroadcastCollectionSchema.safeParse(configJson);
  if (!parse.success) {
    console.error('Invalid forge boradcast json TForgeBroadcastJson', parse.error);
  }

  const contractData: TContractDeploymentMap = {};
  for (const chainIdStr in configJson) {
    const chainId = parseInt(chainIdStr);
    if (chainId == null || isNaN(chainId)) continue;

    for (const contractName in configJson[chainId]) {
      const contractDeployment = configJson[chainId].transactions
        .filter((f) => f.transactionType === 'CREATE')
        .map((m) => {
          const td: TBasicContract = {
            contractName: m.contractName,
            address: m.contractAddress,
          };
          return td;
        });

      const data = contractDeployment.filter((f) => f.contractName === contractName);
      if (data.length > 1) {
        console.error('Multiple contract deployments found for contract on the same chainId', contractName);
      }

      const config: TBasicContractDeployment = {
        [chainId]: { address: data[0].address, chainId: chainId },
      };

      contractData[contractName] = merge({ ...(contractData[contractName] ?? {}) }, { config });
    }
  }

  return contractData;
};

/**
 * ##### Summary
 * Creates a connector for any of your hardhat contracts
 *
 * @category ContractAppContext
 * @param contractName
 * @param typechainFactory
 * @param deployedHardhatContractJson
 * @returns
 */
export const createConnectorForHardhatContract = <GContractNames extends string, GBaseContract extends BaseContract>(
  contractName: GContractNames,
  typechainFactory: TContractConnectorBase<GBaseContract>,
  deployedHardhatContractJson: TDeployedHardhatContractsJson
): TContractConnector<GContractNames, GBaseContract> => {
  const info = extractHardhatContracts(deployedHardhatContractJson)[contractName];

  if (info == null || info.abi == null) {
    throw new Error(
      `Contract ${contractName} not found in deployed contracts (hardhat_config.json).  Check your hardhat deploy scripts and hardhat_config.json`
    );
  }

  return {
    contractName,
    connect: typechainFactory.connect,
    // createInterface: typechainFactory.createInterface,
    abi: (info?.abi ?? typechainFactory.abi ?? []) as Record<string, any>[],
    config: {
      ...info.config,
    },
  };
};

/**
 * ##### Summary
 * Creates a connector for any of your hardhat contracts
 *
 * @category ContractAppContext
 * @param contractName
 * @param typechainFactory
 * @param deployedHardhatContractJson
 * @returns
 */
export const createConnectorForForgeBroadcastContract = <
  GContractNames extends string,
  GBaseContract extends BaseContract
>(
  contractName: GContractNames,
  typechainFactory: TContractConnectorBase<GBaseContract>,
  forgeBroadcastJson: TForgeBroadcastJson
): TContractConnector<GContractNames, GBaseContract> => {
  const info = extractForgeBroadcastContracts(forgeBroadcastJson)[contractName];

  if (info == null || typechainFactory.abi == null) {
    throw new Error(
      `Contract ${contractName} not found in deployed contracts (hardhat_config.json).  Check your hardhat deploy scripts and hardhat_config.json`
    );
  }

  return {
    contractName,
    connect: typechainFactory.connect,
    // createInterface: typechainFactory.createInterface,
    abi: (typechainFactory.abi ?? []) as Record<string, any>[],
    config: {
      ...info.config,
    },
  };
};

/**
 * #### Summary
 * Creates a contract connector for any external contract
 *
 * ##### ✏️ Notes
 * - As an example you could use this for an external contract such as DAI
 *
 * @category ContractAppContext
 * @param contractName
 * @param typechainFactory
 * @param deployedContractJson
 * @returns
 */
export const createConnectorForExternalContract = <GContractNames extends string, GBaseContract extends BaseContract>(
  contractName: GContractNames,
  typechainFactory: TContractConnectorBase<GBaseContract>,
  deployedContractJson: TExternalContractsAddressMap
): TContractConnector<GContractNames, GBaseContract> => {
  const info = extractExternalContracts(deployedContractJson)[contractName];

  if (info == null) {
    throw new Error(
      `Contract ${contractName} not found in external contract map.  Check that contractName: address map is correct.  This is required by eth-sdk`
    );
  }

  return {
    contractName,
    connect: typechainFactory.connect,
    // : typechainFactory.createInterface,
    abi: typechainFactory.abi ?? [],
    config: {
      ...info.config,
    },
  };
};

/**
 * #### Summary
 * Create a contract connector from a ABI.
 *
 * ##### ✏️ Notes
 * - This can be used for unverified external contracts
 *
 * @category ContractAppContext
 * @param contractName
 * @param config
 * @param abi
 * @param connectFunc
 * @returns
 */
export const createConnectorForExternalAbi = <
  GContractNames extends string,
  GBaseContract extends BaseContract = BaseContract
>(
  contractName: GContractNames,
  config: TBasicContractDeployment,
  abi: Record<string, any>[],
  connectFunc: TContractConnectFunc<GBaseContract> | undefined = undefined
): TContractConnector<GContractNames, GBaseContract> => {
  if (connectFunc) {
    return {
      contractName,
      connect: connectFunc,
      abi: abi,
      config: { ...config },
    };
  } else {
    return {
      contractName,
      connect: (address: string, signerOrProvider: ethers.Signer | ethers.providers.Provider): GBaseContract => {
        return new BaseContract(address, abi, signerOrProvider) as GBaseContract;
      },
      abi: abi,
      config: { ...config },
    };
  }
};
