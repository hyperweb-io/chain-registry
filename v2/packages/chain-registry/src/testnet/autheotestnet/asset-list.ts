import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'autheotestnet',
  assets: [{
      description: 'Native token of Autheo Chain',
      denomUnits: [{
          denom: 'aauth',
          exponent: 0
        }, {
          denom: 'auth',
          exponent: 6
        }],
      base: 'aauth',
      name: 'Autheo Chain',
      display: 'auth',
      symbol: 'THEO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/autheotestnet/images/autheo_logo.png'
      },
      socials: {
        website: 'https://autheo.com'
      },
      typeAsset: 'sdk.coin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/autheotestnet/images/autheo_logo.png'
        }]
    }]
};
export default info;