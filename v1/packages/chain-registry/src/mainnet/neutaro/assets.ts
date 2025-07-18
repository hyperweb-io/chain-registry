import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'neutaro',
  assets: [{
      description: 'The native token of Neutaro',
      extended_description: 'Neutaro (NTMPI) serves as the governance token for Timpi (www.timpi.io), a technology pioneer poised to shake up the industry through Decentralization, Web3, and AI.',
      denom_units: [{
          denom: 'uneutaro',
          exponent: 0
        }, {
          denom: 'neutaro',
          exponent: 6
        }],
      base: 'uneutaro',
      name: 'Neutaro',
      display: 'neutaro',
      symbol: 'NTMPI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/ntmpi.png'
      },
      coingecko_id: 'neutaro',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/ntmpi.png'
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.svg',
          theme: {
            primary_color_hex: '#cbfb06'
          }
        }],
      socials: {
        website: 'https://neutaro.com/',
        twitter: 'https://twitter.com/Timpi_TheNewWay'
      },
      type_asset: 'sdk.coin'
    }]
};
export default info;