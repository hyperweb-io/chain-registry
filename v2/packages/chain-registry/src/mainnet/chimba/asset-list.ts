import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'chimba',
  assets: [{
      description: 'The first blokchain in colombia',
      denomUnits: [{
          denom: 'ucmba',
          exponent: 0
        }, {
          denom: 'chimba',
          exponent: 6
        }],
      base: 'ucmba',
      name: 'Chimba',
      display: 'chimba',
      symbol: 'CMBA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.svg',
          theme: {
            primaryColorHex: '#5454a4'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;