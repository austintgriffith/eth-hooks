import { BaseContract, ethers } from 'ethers';
import warning from 'tiny-warning';

import { ethersAdaptorAsRequired, isValidEthersAdaptor } from '~~/functions';
import { connectToContractWithSigner } from '~~/functions/createTypechainContractConnector';
import { TEthersAdaptor, TTypechainContractConnector, TTypechainContractConnectorList } from '~~/models';

type TContractsByName<GContractNames extends string> = {
  [contractName in GContractNames]: { [chainId: number]: BaseContract };
};
type TContractsByChainId<GContractNames extends string> = {
  [chainId: number]: { [contractName in GContractNames]: BaseContract };
};

export class AppContractDefinitions<GContractNames extends string> {
  protected _contractConnectors: TTypechainContractConnectorList<GContractNames>;
  protected _contractsByName: TContractsByName<GContractNames>;
  protected _contractsByChainId: TContractsByChainId<GContractNames>;

  public get getAllContractsByName(): TContractsByName<GContractNames> {
    return this._contractsByName;
  }

  public get getAllContractsByChainId(): TContractsByName<GContractNames> {
    return this.getAllContractsByChainId;
  }

  public getContract<GContract extends BaseContract>(contractName: GContractNames, chainId: number): GContract {
    return this._contractsByName[contractName][chainId] as GContract;
  }

  public getContractInstances<GContract extends BaseContract>(
    contractName: GContractNames
  ): { [chainId: number]: GContract } {
    return this._contractsByName[contractName] as { [chainId: number]: GContract };
  }

  protected setContractsByChainId(): void {
    const contractsByChainId: TContractsByChainId<GContractNames> = {};
    Object.keys(this._contractsByName).forEach((name: string) => {
      const contractName = name as GContractNames;
      Object.keys(this.getAllContractsByName[contractName])
        .map(Number)
        .forEach((chainId: number) => {
          contractsByChainId[chainId][contractName] = this._contractsByName[contractName][chainId];
        });
    });

    this._contractsByChainId = this._contractsByChainId;
  }

  constructor(
    contractConnectors: Record<
      GContractNames,
      TTypechainContractConnector<GContractNames, BaseContract, ethers.utils.Interface>
    >
  ) {
    this._contractsByName = {} as TContractsByName<GContractNames>;
    this._contractsByChainId = {};
    this._contractConnectors = contractConnectors;
  }

  public static connectToAllContractsReducer = async <GContractNames extends string>(
    ethersAdaptor: TEthersAdaptor | undefined,
    appContractConnectorList: TTypechainContractConnectorList<GContractNames>
  ): Promise<AppContractDefinitions<GContractNames>> => {
    const result = new AppContractDefinitions<GContractNames>(appContractConnectorList);

    if (!ethersAdaptor) {
      return result;
    }

    await result.connectToAllContracts(ethersAdaptor);
    return result;
  };

  private connectToAllContracts = async (ethersAdaptor: TEthersAdaptor): Promise<void> => {
    if (!isValidEthersAdaptor(ethersAdaptor)) return;
    const { chainId, signer } = ethersAdaptorAsRequired(ethersAdaptor);

    for (const contractName in this._contractConnectors) {
      const connector = this._contractConnectors[contractName];
      if (chainId && connector.config[chainId] != null) {
        const contract = await connectToContractWithSigner(connector, signer);
        this._contractsByName[contractName][chainId] = contract;
      }
    }
    this.setContractsByChainId();
  };

  public static connectToContractReducer = async <GContractNames extends string>(
    definitions: AppContractDefinitions<GContractNames>,
    contractName: GContractNames,
    ethersAdaptor: TEthersAdaptor
  ): Promise<AppContractDefinitions<GContractNames>> => {
    const newDefinitions = definitions.clone();
    await newDefinitions.connectToContract(contractName, ethersAdaptor);
    return newDefinitions;
  };

  private connectToContract = async (contractName: GContractNames, ethersAdaptor: TEthersAdaptor): Promise<void> => {
    if (!isValidEthersAdaptor(ethersAdaptor)) return;
    const { chainId, signer } = ethersAdaptorAsRequired(ethersAdaptor);

    const contractConnector = this._contractConnectors[contractName];

    const contract = await connectToContractWithSigner(contractConnector, signer);
    this._contractsByName[contractConnector.contractName] = {};
    this._contractsByName[contractConnector.contractName][chainId] = contract;
    this.setContractsByChainId();
  };

  public getContractInstance = async (
    ethersAdaptor: TEthersAdaptor,
    contractName: GContractNames
  ): Promise<BaseContract | undefined> => {
    if (!isValidEthersAdaptor(ethersAdaptor)) return;
    const { chainId } = ethersAdaptorAsRequired(ethersAdaptor);

    if (this._contractsByName[contractName][chainId] != null) {
      return this._contractsByName[contractName][chainId];
    } else if (this._contractConnectors[contractName].config[chainId] != null) {
      await this.connectToContract(contractName, ethersAdaptor);
      return this._contractsByName[contractName][chainId];
    } else {
      warning(false, `There is no instance of Contract ${contractName} for chain ${chainId}`);
    }
    return undefined;
  };

  public static updateConnectorReducer = async <
    GContractNames extends string,
    GContract extends BaseContract,
    GContractInterface extends ethers.utils.Interface
  >(
    definitions: AppContractDefinitions<GContractNames>,
    contractName: GContractNames,
    connector: TTypechainContractConnector<GContractNames, GContract, GContractInterface>
  ): Promise<AppContractDefinitions<GContractNames>> => {
    const result = definitions.clone();
    await result.updateConnector(contractName, connector);
    return result;
  };

  public updateConnector = async <GContract extends BaseContract, GContractInterface extends ethers.utils.Interface>(
    contractName: GContractNames,
    connector: TTypechainContractConnector<GContractNames, GContract, GContractInterface>,
    ethersAdaptor?: TEthersAdaptor
  ): Promise<void> => {
    this._contractConnectors[contractName] = connector;
    if (ethersAdaptor) {
      await this.connectToContract(contractName, ethersAdaptor);
    }
  };

  public clone(): AppContractDefinitions<GContractNames> {
    const result = new AppContractDefinitions<GContractNames>({ ...this._contractConnectors });
    result._contractsByName = { ...this._contractsByName };
    result._contractsByChainId = { ...this._contractsByChainId };

    return result;
  }
}
