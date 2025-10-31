import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'rizon',
  assets: [{
      description: 'Native token of Rizon Chain',
      denomUnits: [{
          denom: 'uatolo',
          exponent: 0
        }, {
          denom: 'atolo',
          exponent: 6
        }],
      base: 'uatolo',
      name: 'Rizon Chain',
      display: 'atolo',
      symbol: 'ATOLO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg'
        }],
      socials: {
        website: 'https://rizon.world/',
        x: 'https://x.com/hdac_rizon'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;