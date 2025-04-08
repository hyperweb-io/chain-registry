import { AssetList } from '@chain-registry/v2-types';
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
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/intentotestnet/images/into.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/intentotestnet/images/into.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/intentotestnet/images/into.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/intentotestnet/images/into.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;