import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'xyra',
  assets: [{
      description: 'The native token of Xyra Chain',
      denomUnits: [{
          denom: 'uXyrium',
          exponent: 0,
          aliases: ['microxyrium']
        }, {
          denom: 'XYRIUM',
          exponent: 6
        }],
      base: 'uXyrium',
      display: 'XYRIUM',
      name: 'Xyra',
      symbol: 'XYR',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xyra/images/xrc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xyra/images/xrc.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xyra/images/xrc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xyra/images/xrc.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;