import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'assetmantle',
  assets: [{
      description: 'The native token of AssetMantle',
      denomUnits: [{
          denom: 'umntl',
          exponent: 0
        }, {
          denom: 'mntl',
          exponent: 6
        }],
      base: 'umntl',
      name: 'AssetMantle',
      display: 'mntl',
      symbol: 'MNTL',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.svg'
      },
      coingeckoId: 'assetmantle',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.svg',
          theme: {
            primaryColorHex: '#fbab30'
          }
        }],
      socials: {
        website: 'https://www.assetmantle.one/',
        twitter: 'https://twitter.com/AssetMantle'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;