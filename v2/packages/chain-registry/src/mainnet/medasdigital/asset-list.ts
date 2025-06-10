import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'medasdigital',
  assets: [{
      description: 'The native token of Medas Digital Network',
      denomUnits: [{
          denom: 'umedas',
          exponent: 0
        }, {
          denom: 'medas',
          exponent: 6
        }],
      base: 'umedas',
      name: 'Medas Digital',
      display: 'medas',
      symbol: 'MEDAS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.svg'
      },
      keywords: ['medas'],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.svg',
          theme: {
            primaryColorHex: '#147ccc'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;