import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'seitestnet',
  assets: [{
      description: 'The native staking and governance token of the Atlantic testnet version of Sei.',
      denom_units: [{
          denom: 'usei',
          exponent: 0
        }, {
          denom: 'sei',
          exponent: 6
        }],
      base: 'usei',
      name: 'Sei',
      display: 'sei',
      symbol: 'SEI',
      type_asset: 'sdk.coin'
    }]
};
export default info;