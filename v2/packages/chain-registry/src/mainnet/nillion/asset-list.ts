import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'nillion',
  assets: [{
      description: 'NIL - the native token of Nillion',
      denomUnits: [{
          denom: 'unil',
          exponent: 0
        }, {
          denom: 'nil',
          exponent: 6
        }],
      base: 'unil',
      name: 'Nillion',
      display: 'nil',
      symbol: 'NIL',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nillion/images/nil.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nillion/images/nil.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;