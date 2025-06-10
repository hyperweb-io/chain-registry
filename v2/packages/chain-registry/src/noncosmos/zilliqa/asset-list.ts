import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'zilliqa',
  assets: [{
      typeAsset: 'evm-base',
      denomUnits: [{
          denom: 'wei',
          exponent: 0
        }],
      base: 'wei',
      display: 'wei',
      name: 'Ether',
      symbol: 'ETH'
    }]
};
export default info;