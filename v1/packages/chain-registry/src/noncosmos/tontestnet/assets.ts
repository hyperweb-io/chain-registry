import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../../assetlist.schema.json',
  chain_name: 'tontestnet',
  assets: [{
      description: 'The testnet version of Toncoin.',
      denom_units: [{
          denom: 'nanoton',
          exponent: 0,
          aliases: ['nanoTon']
        }, {
          denom: 'ton',
          exponent: 9
        }],
      type_asset: 'unknown',
      base: 'nanoton',
      name: 'Toncoin',
      display: 'ton',
      symbol: 'TON',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chain_name: 'ton',
            base_denom: 'nanoton'
          },
          provider: 'Toncoin'
        }],
      coingecko_id: 'the-open-network',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/ton.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/ton.png',
          theme: {
            circle: true,
            primary_color_hex: '#0088CC',
            background_color_hex: '#0088CC'
          }
        }],
      socials: {
        website: 'https://ton.tg/',
        twitter: 'https://x.com/ton_blockchain'
      }
    }]
};
export default info;