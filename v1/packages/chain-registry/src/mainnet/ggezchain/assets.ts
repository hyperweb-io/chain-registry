import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'ggezchain',
  assets: [{
      description: 'The Governance Coin of the GGEZ1 Network.',
      denom_units: [
        {
          denom: 'uggez1',
          exponent: 0
        },
        {
          denom: 'mggez1',
          exponent: 3
        },
        {
          denom: 'ggez1',
          exponent: 6
        }
      ],
      base: 'uggez1',
      name: 'GGEZ1',
      display: 'ggez1',
      symbol: 'GGEZ1',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ggezchain/images/ggez1.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ggezchain/images/ggez1.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ggezchain/images/ggez1.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ggezchain/images/ggez1.svg',
          theme: {
            primary_color_hex: '#039abf'
          }
        }],
      socials: {
        website: 'https://ggez.one',
        twitter: 'https://x.com/ggez_one'
      },
      type_asset: 'sdk.coin'
    }, {
      description: 'The ReFi Coin of the GGEZ1 Network.',
      denom_units: [
        {
          denom: 'uggz',
          exponent: 0
        },
        {
          denom: 'mggz',
          exponent: 3
        },
        {
          denom: 'ggz',
          exponent: 6
        }
      ],
      type_asset: 'sdk.coin',
      base: 'uggz',
      name: 'GGZ',
      display: 'uggz',
      symbol: 'GGZ',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ggezchain/images/ggz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ggezchain/images/ggz.svg',
          theme: {
            primary_color_hex: '#8400cd'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ggezchain/images/ggz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ggezchain/images/ggz.svg'
      },
      socials: {
        website: 'https://ggez.one',
        twitter: 'https://x.com/ggez_one'
      }
    }]
};
export default info;