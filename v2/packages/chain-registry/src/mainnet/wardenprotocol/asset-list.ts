import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'wardenprotocol',
  assets: [{
      description: 'Warden is the Global Agent Network—an open platform that gives AI Agents identity, trust, payments, and instant access to millions of users.',
      extendedDescription: 'Warden is building the Global Agent Network, the foundation of the Agent economy. Through its full-stack platform—Warden Studio, Warden Chain, and Warden Agent Hub—developers can create and deploy AI Agents with onchain identity, trust, and monetization, while users access them through Warden, the \'Everything App\' for crypto.',
      denomUnits: [{
          denom: 'award',
          exponent: 0
        }, {
          denom: 'ward',
          exponent: 18
        }],
      base: 'award',
      name: 'Warden',
      display: 'ward',
      symbol: 'WARD',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.svg'
      },
      coingeckoId: 'warden-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.svg'
        }],
      socials: {
        website: 'https://wardenprotocol.org/',
        twitter: 'https://twitter.com/wardenprotocol'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;