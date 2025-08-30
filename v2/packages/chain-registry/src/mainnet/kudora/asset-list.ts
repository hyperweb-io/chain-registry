import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'kudora',
  assets: [{
      description: 'Kudora Native Token',
      denomUnits: [{
          denom: 'kud',
          exponent: 0
        }, {
          denom: 'Kudo',
          exponent: 18
        }],
      base: 'kud',
      name: 'Kudo',
      display: 'Kudo',
      symbol: 'KUD',
      keywords: ['kudora'],
      typeAsset: 'sdk.coin'
    }]
};
export default info;