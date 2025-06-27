import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'buycex',
  assets: [{
      typeAsset: 'sdk.coin',
      description: 'Buycex is the native token of the BuyCex Infinity Chain.',
      denomUnits: [{
          denom: 'ubcx',
          exponent: 0
        }, {
          denom: 'BCX',
          exponent: 18
        }],
      base: 'ubcx',
      name: 'Buycex',
      display: 'BCX',
      symbol: 'BCX',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/buycex/images/bcx.png'
      },
      keywords: [
        'native',
        'staking',
        'utility'
      ]
    }]
};
export default info;