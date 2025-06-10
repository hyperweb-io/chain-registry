import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'xplatestnet',
  assets: [{
      description: 'The native staking token of XPLA.',
      denomUnits: [{
          denom: 'axpla',
          exponent: 0
        }, {
          denom: 'xpla',
          exponent: 18
        }],
      base: 'axpla',
      name: 'Xpla',
      display: 'xpla',
      symbol: 'XPLA',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'xpla',
            baseDenom: 'axpla'
          },
          provider: 'XPLA'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg'
      },
      coingeckoId: 'xpla',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg',
          theme: {
            primaryColorHex: '#04b4fc'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;