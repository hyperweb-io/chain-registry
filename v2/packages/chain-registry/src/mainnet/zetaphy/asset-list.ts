import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'zetaphy',
  assets: [{
      description: 'The native coin of ZETAPHY: fees, staking and governance.',
      denomUnits: [{
          denom: 'azetaphy',
          exponent: 0
        }, {
          denom: 'ztphy',
          exponent: 18
        }],
      typeAsset: 'sdk.coin',
      base: 'azetaphy',
      name: 'ZETAPHY',
      display: 'ztphy',
      symbol: 'ZTPHY',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zetaphy/images/zetaphy.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zetaphy/images/zetaphy.png'
        }],
      socials: {
        website: 'https://app.sawasdeecoin.com'
      }
    }]
};
export default info;