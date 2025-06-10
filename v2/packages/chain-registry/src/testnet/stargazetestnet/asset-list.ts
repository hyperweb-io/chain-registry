import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'stargazetestnet',
  assets: [{
      description: 'The native token of Stargaze',
      denomUnits: [{
          denom: 'ustars',
          exponent: 0
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ustars',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'stargaze',
            baseDenom: 'ustars'
          },
          provider: 'Stargaze'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png'
      },
      coingeckoId: 'stargaze',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;