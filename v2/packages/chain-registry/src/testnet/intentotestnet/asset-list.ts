import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'intentotestnet',
  assets: [{
      description: 'The native token of INTENTO',
      denomUnits: [{
          denom: 'uinto',
          exponent: 0
        }, {
          denom: 'into',
          exponent: 6
        }],
      base: 'uinto',
      name: 'Intento',
      display: 'into',
      symbol: 'INTO',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'intento',
            baseDenom: 'uinto'
          },
          provider: 'Intento'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/intento/images/into.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/intento/images/into.svg'
      },
      images: [{
          imageSync: {
            chainName: 'intento',
            baseDenom: 'uinto'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/intento/images/into.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/intento/images/into.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;