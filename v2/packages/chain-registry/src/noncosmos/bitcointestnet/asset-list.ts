import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../../assetlist.schema.json',
  chainName: 'bitcointestnet',
  assets: [{
      description: 'The testnet version of Bitcoin.',
      denomUnits: [{
          denom: 'sat',
          exponent: 0
        }, {
          denom: 'btc',
          exponent: 8
        }],
      typeAsset: 'bitcoin-like',
      base: 'sat',
      name: 'Bitcoin',
      display: 'btc',
      symbol: 'BTC',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'Bitcoin'
        }],
      images: [{
          imageSync: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.png',
          theme: {
            circle: true
          }
        }],
      coingeckoId: 'bitcoin'
    }]
};
export default info;