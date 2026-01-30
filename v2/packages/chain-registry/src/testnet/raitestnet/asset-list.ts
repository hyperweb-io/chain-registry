import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'raitestnet',
  assets: [{
      description: 'The native EVM, governance and staking token of the Republic AI Network',
      denomUnits: [{
          denom: 'arai',
          exponent: 0
        }, {
          denom: 'rai',
          exponent: 18
        }],
      base: 'arai',
      name: 'Republic AI Testnet',
      display: 'rai',
      symbol: 'RAI',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/raitestnet/images/rai.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/raitestnet/images/rai.png'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;