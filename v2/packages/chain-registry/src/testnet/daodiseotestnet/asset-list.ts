import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'daodiseotestnet',
  assets: [{
      denomUnits: [{
          denom: 'uodis',
          exponent: 0
        }, {
          denom: 'ODIS',
          exponent: 6
        }],
      base: 'uodis',
      name: 'Odis',
      display: 'ODIS',
      symbol: 'ODIS',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/daodiseotestnet/images/odiseo.svg'
      },
      socials: {
        website: 'https://daodiseo.money',
        twitter: 'https://x.com/DaoDiseoMoney'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/daodiseotestnet/images/odiseo.svg',
          theme: {
            circle: true
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;