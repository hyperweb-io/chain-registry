import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../../assetlist.schema.json',
  chainName: 'bitcoincashtestnet',
  assets: [{
      description: 'The testnet version of Bitcoin Cash.',
      denomUnits: [{
          denom: 'sat',
          exponent: 0
        }, {
          denom: 'bch',
          exponent: 8
        }],
      typeAsset: 'bitcoin-like',
      base: 'sat',
      name: 'Bitcoin Cash',
      display: 'bch',
      symbol: 'BCH',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'bitcoincash',
            baseDenom: 'sat'
          },
          provider: 'Bitcoin Cash'
        }],
      images: [{
          imageSync: {
            chainName: 'bitcoincash',
            baseDenom: 'sat'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoincash/images/bch.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoincash/images/bch.png',
          theme: {
            primaryColorHex: '#f4941c',
            backgroundColorHex: '#f4941c',
            circle: true
          }
        }],
      coingeckoId: 'bitcoin-cash'
    }]
};
export default info;