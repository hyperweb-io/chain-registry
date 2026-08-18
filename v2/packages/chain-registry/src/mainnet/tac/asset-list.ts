import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'tac',
  assets: [{
      description: 'The native staking and fee token of TAC.',
      denomUnits: [{
          denom: 'utac',
          exponent: 0
        }, {
          denom: 'tac',
          exponent: 18
        }],
      typeAsset: 'sdk.coin',
      base: 'utac',
      name: 'TAC Token',
      display: 'tac',
      symbol: 'TAC',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tac/images/tac.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tac/images/tac.svg'
        }],
      coingeckoId: 'tac',
      socials: {
        website: 'https://tac.build/',
        x: 'https://x.com/TacBuild'
      }
    }]
};
export default info;