import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'kiichain',
  assets: [{
      description: 'The native token of KiiChain',
      denomUnits: [{
          denom: 'akii',
          exponent: 0
        }, {
          denom: 'kii',
          exponent: 18
        }],
      base: 'akii',
      name: 'Kii',
      display: 'kii',
      symbol: 'KII',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kiichain/images/kii.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kiichain/images/kii.png'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;