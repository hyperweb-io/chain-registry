import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'coss',
  assets: [
    {
      description: 'The native staking and governance token of the COSS.',
      denomUnits: [{
          denom: 'ucgas',
          exponent: 0
        }, {
          denom: 'cgas',
          exponent: 6
        }],
      base: 'ucgas',
      name: 'CGAS',
      display: 'cgas',
      symbol: 'CGAS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/cgas.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/cgas.png'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The inscription token of the COSS.',
      denomUnits: [{
          denom: 'ucoss',
          exponent: 0
        }, {
          denom: 'coss',
          exponent: 6
        }],
      base: 'ucoss',
      name: 'COSS',
      display: 'coss',
      symbol: 'COSS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/coss.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/coss.png'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The inscription token of the CIAS.',
      denomUnits: [{
          denom: 'ucias',
          exponent: 0
        }, {
          denom: 'cias',
          exponent: 6
        }],
      base: 'ucias',
      name: 'CIAS',
      display: 'cias',
      symbol: 'CIAS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/cias.png'
      },
      coingeckoId: 'cias',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coss/images/cias.png'
        }],
      typeAsset: 'sdk.coin'
    }
  ]
};
export default info;