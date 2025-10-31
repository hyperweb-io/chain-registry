import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'arkh',
  assets: [{
      description: 'The native token of Arkhadian',
      denomUnits: [{
          denom: 'arkh',
          exponent: 0
        }, {
          denom: 'ARKH',
          exponent: 6
        }],
      base: 'arkh',
      name: 'Arkh',
      display: 'ARKH',
      symbol: 'ARKH',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png'
        }],
      socials: {
        website: 'https://arkhadian.io/',
        x: 'https://x.com/ArkhadianSas'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;