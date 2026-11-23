import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'wpdl2a',
  assets: [{
      denomUnits: [{
          denom: 'poatoken',
          exponent: 0
        }, {
          denom: 'POATOKEN',
          exponent: 8
        }],
      typeAsset: 'sdk.coin',
      base: 'poatoken',
      name: 'POATOKEN',
      display: 'POATOKEN',
      symbol: 'POATOKEN'
    }, {
      description: 'Community and social development. Basic needs, services, and governance.',
      denomUnits: [{
          denom: 'leea',
          exponent: 0
        }, {
          denom: 'LEEA',
          exponent: 8
        }],
      typeAsset: 'sdk.coin',
      base: 'leea',
      name: 'LEEA',
      display: 'LEEA',
      symbol: 'LEEA',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wpdl2a/images/leea.png'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wpdl2a/images/leea.png'
      },
      socials: {
        website: 'https://www.peaceism.io/'
      }
    }]
};
export default info;