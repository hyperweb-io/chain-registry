import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'babylon',
  assets: [{
      description: 'The native token of Babylon Genesis.',
      denomUnits: [{
          denom: 'ubbn',
          exponent: 0
        }, {
          denom: 'BABY',
          exponent: 6
        }],
      base: 'ubbn',
      name: 'Babylon',
      display: 'BABY',
      symbol: 'BABY',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/logo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/logo.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;