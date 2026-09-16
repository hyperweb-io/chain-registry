import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'blg24',
  assets: [{
      description: 'The native token of BLG24, a sovereign Layer 1 blockchain built on Cosmos SDK.',
      denomUnits: [{
          denom: 'ug24',
          exponent: 0
        }, {
          denom: 'g24',
          exponent: 6
        }],
      base: 'ug24',
      name: 'Gold24Coin',
      display: 'g24',
      symbol: 'G24',
      typeAsset: 'sdk.coin',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/blg24/images/g24.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/blg24/images/g24.png'
        }]
    }]
};
export default info;