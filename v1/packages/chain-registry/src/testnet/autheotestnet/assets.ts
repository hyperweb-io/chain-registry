import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'autheotestnet',
  assets: [{
      description: 'Native token of Autheo Chain',
      denom_units: [{
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
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/autheotestnet/images/autheo_logo.png'
      },
      socials: {
        website: 'https://autheo.com'
      },
      type_asset: 'sdk.coin'
    }]
};
export default info;