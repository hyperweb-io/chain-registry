import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../../assetlist.schema.json',
  chainName: 'litecointestnet',
  assets: [{
      description: 'The testnet version of Litecoin.',
      denomUnits: [{
          denom: 'litoshi',
          exponent: 0
        }, {
          denom: 'ltc',
          exponent: 8
        }],
      typeAsset: 'bitcoin-like',
      base: 'litoshi',
      name: 'Litecoin',
      display: 'ltc',
      symbol: 'LTC',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'litecoin',
            baseDenom: 'litoshi'
          },
          provider: 'Litecoin'
        }],
      images: [{
          imageSync: {
            chainName: 'litecoin',
            baseDenom: 'litoshi'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/litecoin/images/ltc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/litecoin/images/ltc.png',
          theme: {
            primaryColorHex: '#f4941c',
            backgroundColorHex: '#f4941c',
            circle: true
          }
        }],
      coingeckoId: 'litecoin'
    }]
};
export default info;