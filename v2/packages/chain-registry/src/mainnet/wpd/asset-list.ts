import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'wpd',
  assets: [{
      description: 'PEACEISM ECOSYSTEM COINS',
      denomUnits: [{
          denom: 'pcsm',
          exponent: 0
        }, {
          denom: 'PCSM',
          exponent: 8
        }],
      typeAsset: 'sdk.coin',
      base: 'pcsm',
      name: 'PEACEISM ECOSYSTEM COINS',
      display: 'PCSM',
      symbol: 'PCSM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wpd/images/wpd.png'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wpd/images/wpd.png'
      },
      socials: {
        website: 'https://www.peaceism.io/'
      }
    }]
};
export default info;