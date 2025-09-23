import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'composabletestnet',
  assets: [{
      description: 'The native staking and governance token of the Composable testnet.',
      denomUnits: [{
          denom: 'ppica',
          exponent: 0
        }, {
          denom: 'pica',
          exponent: 12
        }],
      base: 'ppica',
      name: 'Pica',
      display: 'pica',
      symbol: 'PICA',
      typeAsset: 'sdk.coin'
    }]
};
export default info;