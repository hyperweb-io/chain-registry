import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'gnodi',
  assets: [{
      description: 'The native token of gnodi',
      denomUnits: [{
          denom: 'uGNOD',
          exponent: 0
        }, {
          denom: 'GNOD',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'uGNOD',
      name: 'GNOD',
      display: 'GNOD',
      symbol: 'GNOD',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gnodi/images/gnod.png'
        }]
    }]
};
export default info;