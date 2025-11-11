import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../../assetlist.schema.json',
  chainName: 'zcashtestnet',
  assets: [{
      description: 'The testnet version of Zcash.',
      denomUnits: [{
          denom: 'zatoshi',
          exponent: 0
        }, {
          denom: 'zec',
          exponent: 8
        }],
      typeAsset: 'bitcoin-like',
      base: 'zatoshi',
      name: 'Zcash',
      display: 'zec',
      symbol: 'ZEC',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'zcash',
            baseDenom: 'zatoshi'
          },
          provider: 'Zcash'
        }],
      images: [{
          imageSync: {
            chainName: 'zcash',
            baseDenom: 'zatoshi'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/zcash/images/zec.png',
          theme: {
            circle: true
          }
        }],
      coingeckoId: 'zcash'
    }]
};
export default info;