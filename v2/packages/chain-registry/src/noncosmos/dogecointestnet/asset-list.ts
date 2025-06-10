import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../../assetlist.schema.json',
  chainName: 'dogecointestnet',
  assets: [{
      description: 'The testnet version of Dogecoin.',
      denomUnits: [{
          denom: 'shibe',
          exponent: 0
        }, {
          denom: 'doge',
          exponent: 8
        }],
      typeAsset: 'bitcoin-like',
      base: 'shibe',
      name: 'Dogecoin',
      display: 'doge',
      symbol: 'DOGE',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'dogecoin',
            baseDenom: 'shibe'
          },
          provider: 'Dogecoin'
        }],
      images: [{
          imageSync: {
            chainName: 'dogecoin',
            baseDenom: 'shibe'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/dogecoin/images/doge.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/dogecoin/images/doge.png',
          theme: {
            primaryColorHex: '#f4941c',
            backgroundColorHex: '#f4941c',
            circle: true
          }
        }],
      coingeckoId: 'dogecoin'
    }]
};
export default info;