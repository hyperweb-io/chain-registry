import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../../assetlist.schema.json',
  chainName: 'tontestnet',
  assets: [{
      description: 'The testnet version of Toncoin.',
      denomUnits: [{
          denom: 'nanoton',
          exponent: 0,
          aliases: ['nanoTon']
        }, {
          denom: 'ton',
          exponent: 9
        }],
      typeAsset: 'unknown',
      base: 'nanoton',
      name: 'Toncoin',
      display: 'ton',
      symbol: 'TON',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'ton',
            baseDenom: 'nanoton'
          },
          provider: 'Toncoin'
        }],
      coingeckoId: 'the-open-network',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/ton.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/ton.png',
          theme: {
            circle: true,
            primaryColorHex: '#0088CC',
            backgroundColorHex: '#0088CC'
          }
        }],
      socials: {
        website: 'https://ton.tg/',
        twitter: 'https://x.com/ton_blockchain'
      }
    }]
};
export default info;