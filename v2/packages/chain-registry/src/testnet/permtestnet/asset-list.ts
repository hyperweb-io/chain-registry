import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'permtestnet',
  assets: [{
      description: 'Perm A Permissioned Blockchain',
      denomUnits: [{
          denom: 'uperm',
          exponent: 0
        }, {
          denom: 'perm',
          exponent: 6
        }],
      base: 'uperm',
      name: 'Perm',
      display: 'perm',
      symbol: 'PERM',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/permtestnet/images/Perm.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/permtestnet/images/Perm.png'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;