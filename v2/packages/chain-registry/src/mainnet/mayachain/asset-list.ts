import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'mayachain',
  assets: [{
      description: 'The native token of Maya Protocol',
      denomUnits: [{
          denom: 'cacao',
          exponent: 0
        }, {
          denom: 'CACAO',
          exponent: 10
        }],
      base: 'cacao',
      name: 'Cacao',
      display: 'CACAO',
      symbol: 'CACAO',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mayachain/images/cacao.svg'
        }],
      coingeckoId: 'cacao',
      keywords: ['dex'],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mayachain/images/cacao.svg'
      },
      typeAsset: 'sdk.coin'
    }, {
      description: 'The native revenue sharing token of Maya Protocol',
      denomUnits: [{
          denom: 'maya',
          exponent: 0
        }, {
          denom: 'MAYA',
          exponent: 4
        }],
      base: 'maya',
      name: 'Maya',
      display: 'MAYA',
      symbol: 'MAYA',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mayachain/images/maya.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mayachain/images/maya.svg'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;