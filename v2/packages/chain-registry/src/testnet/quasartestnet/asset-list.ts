import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'quasartestnet',
  assets: [
    {
      description: 'The native token of Quasar',
      denomUnits: [{
          denom: 'uqsr',
          exponent: 0,
          aliases: []
        }, {
          denom: 'qsr',
          exponent: 6,
          aliases: []
        }],
      base: 'uqsr',
      name: 'Quasar',
      display: 'qsr',
      symbol: 'QSR',
      typeAsset: 'sdk.coin'
    },
    {
      denomUnits: [{
          denom: 'uayy',
          exponent: 0
        }, {
          denom: 'ayy',
          exponent: 6
        }],
      base: 'uayy',
      name: 'AYY',
      display: 'ayy',
      symbol: 'AYY',
      typeAsset: 'sdk.coin'
    },
    {
      denomUnits: [{
          denom: 'uoro',
          exponent: 0
        }, {
          denom: 'oro',
          exponent: 6
        }],
      base: 'uoro',
      name: 'oro',
      display: 'oro',
      symbol: 'ORO',
      typeAsset: 'sdk.coin'
    }
  ]
};
export default info;