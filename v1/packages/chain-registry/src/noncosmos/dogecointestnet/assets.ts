import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../../assetlist.schema.json',
  chain_name: 'dogecointestnet',
  assets: [{
      description: 'The testnet version of Dogecoin.',
      denom_units: [{
          denom: 'shibe',
          exponent: 0
        }, {
          denom: 'doge',
          exponent: 8
        }],
      type_asset: 'bitcoin-like',
      base: 'shibe',
      name: 'Dogecoin',
      display: 'doge',
      symbol: 'DOGE',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chain_name: 'dogecoin',
            base_denom: 'shibe'
          },
          provider: 'Dogecoin'
        }],
      images: [{
          image_sync: {
            chain_name: 'dogecoin',
            base_denom: 'shibe'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/dogecoin/images/doge.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/dogecoin/images/doge.png',
          theme: {
            primary_color_hex: '#f4941c',
            background_color_hex: '#f4941c',
            circle: true
          }
        }],
      coingecko_id: 'dogecoin'
    }]
};
export default info;