import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'tail',
  assets: [{
      description: 'The native token of TAIL Network',
      denomUnits: [{
          denom: 'utail',
          exponent: 0
        }, {
          denom: 'TAIL',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'utail',
      name: 'TAIL Network',
      display: 'TAIL',
      symbol: 'TAIL',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tail/images/logo-mark.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tail/images/logo-mark.png'
        }]
    }]
};
export default info;