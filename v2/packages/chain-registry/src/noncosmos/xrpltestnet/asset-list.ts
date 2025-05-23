import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../../assetlist.schema.json',
  chainName: 'xrpltestnet',
  assets: [{
      description: 'The testnet version of XRP.',
      denomUnits: [{
          denom: 'drop',
          exponent: 0
        }, {
          denom: 'xrp',
          exponent: 6
        }],
      typeAsset: 'unknown',
      base: 'drop',
      name: 'Ripple',
      display: 'xrp',
      symbol: 'XRP',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'xrpl',
            baseDenom: 'drop'
          },
          provider: 'Ripple'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.svg'
      },
      coingeckoId: 'ripple',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.png',
          theme: {
            circle: true,
            backgroundColorHex: '#000000'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.svg',
          theme: {
            circle: false,
            backgroundColorHex: '#00000000'
          }
        }]
    }]
};
export default info;