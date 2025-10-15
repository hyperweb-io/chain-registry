import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'chimbatestnet',
  assets: [{
      description: 'The first blockchain in colombia',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;