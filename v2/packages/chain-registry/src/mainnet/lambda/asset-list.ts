import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'lambda',
  assets: [{
      description: 'The native token of Lambda',
      denomUnits: [{
          denom: 'ulamb',
          exponent: 0
        }, {
          denom: 'lamb',
          exponent: 18
        }],
      base: 'ulamb',
      name: 'Lambda',
      display: 'lamb',
      symbol: 'LAMB',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;