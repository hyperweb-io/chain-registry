import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'blockmaze',
  assets: [{
      description: 'The native EVM, governance and staking token of Blockmaze.',
      denomUnits: [{
          denom: 'Rho18',
          exponent: 0
        }, {
          denom: 'bmz',
          exponent: 18
        }],
      typeAsset: 'sdk.coin',
      base: 'Rho18',
      name: 'Blockmaze',
      display: 'bmz',
      symbol: 'BMZ',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/blockmaze/images/bmz.png'
        }],
      socials: {
        website: 'https://blockmaze.com',
        x: 'https://x.com/BlockmazeRWA'
      }
    }]
};
export default info;