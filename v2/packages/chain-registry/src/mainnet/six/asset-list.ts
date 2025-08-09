import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'six',
  assets: [{
      description: 'The native staking token of the SIX Protocol.',
      denomUnits: [{
          denom: 'usix',
          exponent: 0
        }, {
          denom: 'six',
          exponent: 6
        }],
      base: 'usix',
      name: 'Six token',
      display: 'six',
      symbol: 'SIX',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/six/images/six.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/six/images/six.png'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;