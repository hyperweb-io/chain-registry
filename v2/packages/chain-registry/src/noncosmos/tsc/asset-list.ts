import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'tsc',
  assets: [{
      description: 'The native token of the TSC chain.',
      denomUnits: [{
          denom: 'aTSC',
          exponent: 0
        }, {
          denom: 'TSC',
          exponent: 18
        }],
      typeAsset: 'sdk.coin',
      base: 'aTSC',
      name: 'TSC',
      display: 'TSC',
      symbol: 'TSC',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tsc/images/tsc.png'
        }]
    }]
};
export default info;