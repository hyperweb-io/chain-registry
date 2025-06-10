import { AssetList, Chain, IBCData } from '@chain-registry/types';
import { getAssetLists } from '@chain-registry/utils';

import { ChainRegistryFetcher } from './fetcher';

export interface ChainInfoOptions {
  chainName: string;
  fetcher: ChainRegistryFetcher;
}

export class ChainInfo {
  chainName: string;
  fetcher: ChainRegistryFetcher;

  protected _chain: Chain;
  protected _assetList: AssetList;
  protected _assetLists: AssetList[];
  protected _ibcData: IBCData[] = [];

  constructor(options: ChainInfoOptions) {
    this.chainName = options.chainName;
    this.fetcher = options.fetcher;

    this.refresh();
  }

  refresh() {
    this._assetList = this.fetcher.getChainAssetList(this.chainName);
    this._ibcData = this.fetcher.getChainIbcData(this.chainName);
    this._chain = this.fetcher.getChain(this.chainName);

    const supportedChains = this._ibcData.reduce((m, v) => {
      if (!m.includes(v.chain1.chainName)) m.push(v.chain1.chainName);
      if (!m.includes(v.chain1.chainName)) m.push(v.chain1.chainName);
      return m;
    }, []);

    this._assetLists = this.fetcher.assetLists.filter((list) =>
      supportedChains.includes(list.chainName)
    );
  }

  get chain() {
    return this._chain;
  }
  get nativeAssetList() {
    return this._assetList;
  }
  get assetLists() {
    return getAssetLists(this.chainName, this._ibcData, this._assetLists);
  }
}
