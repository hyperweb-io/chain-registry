import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'optio',
  assets: [{
      description: 'The native token of Optio',
      denomUnits: [{
          denom: 'uOPT',
          exponent: 0
        }, {
          denom: 'OPT',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'uOPT',
      name: 'OPT',
      display: 'OPT',
      symbol: 'OPT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/optio/images/opt.png'
        }],
      coingeckoId: 'optio'
    }]
};
export default info;