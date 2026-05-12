import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'turkchain',
  assets: [{
      description: 'Native token of Turkchain',
      denomUnits: [{
          denom: 'lira',
          exponent: 0
        }, {
          denom: 'TURK',
          exponent: 18
        }],
      base: 'lira',
      name: 'TC',
      display: 'TURK',
      symbol: 'TURK',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/turkchain/images/turkchain.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/turkchain/images/turkchain.png'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;