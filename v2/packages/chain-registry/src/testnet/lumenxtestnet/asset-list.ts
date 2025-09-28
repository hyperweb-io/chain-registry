import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'lumenxtestnet',
  assets: [{
      description: 'The native token of Lumen Network',
      denomUnits: [{
          denom: 'ulumen',
          exponent: 0
        }, {
          denom: 'lumen',
          exponent: 6
        }],
      base: 'ulumen',
      name: 'LUMEN',
      display: 'lumen',
      symbol: 'LUMEN',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'lumenx',
            baseDenom: 'ulumen'
          },
          provider: 'LumenX'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg'
      },
      images: [{
          imageSync: {
            chainName: 'lumenx',
            baseDenom: 'ulumen'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;