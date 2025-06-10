import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'statesettestnet',
  assets: [{
      description: 'The native token of the Stateset Network',
      denomUnits: [{
          denom: 'ustate',
          exponent: 0,
          aliases: []
        }, {
          denom: 'state',
          exponent: 6,
          aliases: []
        }],
      base: 'ustate',
      name: 'Stateset',
      display: 'state',
      symbol: 'STATE',
      typeAsset: 'sdk.coin'
    }]
};
export default info;