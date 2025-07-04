import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'mun',
  assets: [{
      description: 'The native token of Mun',
      denomUnits: [{
          denom: 'umun',
          exponent: 0
        }, {
          denom: 'mun',
          exponent: 6
        }],
      base: 'umun',
      name: 'Mun',
      display: 'mun',
      symbol: 'MUN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mun/images/mun.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mun/images/mun.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mun/images/mun.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mun/images/mun.svg',
          theme: {
            primaryColorHex: '#f6ba32'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;