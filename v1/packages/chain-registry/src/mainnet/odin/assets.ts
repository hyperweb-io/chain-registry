import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'odin',
  assets: [
    {
      description: 'ODIN is the Staking and governance token for ODIN Protocol',
      denom_units: [{
          denom: 'loki',
          exponent: 0
        }, {
          denom: 'odin',
          exponent: 6
        }],
      base: 'loki',
      name: 'ODIN',
      display: 'odin',
      symbol: 'ODIN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
      },
      coingecko_id: 'odin-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
        }],
      socials: {
        website: 'https://odinprotocol.io/',
        twitter: 'https://twitter.com/odinprotocol'
      },
      type_asset: 'sdk.coin'
    },
    {
      description: 'GEO token for ODIN Protocol',
      denom_units: [{
          denom: 'mGeo',
          exponent: 0
        }, {
          denom: 'geo',
          exponent: 6
        }],
      base: 'mGeo',
      name: 'GEO',
      display: 'geo',
      symbol: 'GEO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg',
          theme: {
            primary_color_hex: '#c3ebf3'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'DOKI the last Dragon',
      denom_units: [{
          denom: 'udoki',
          exponent: 0
        }, {
          denom: 'doki',
          exponent: 6
        }],
      base: 'udoki',
      name: 'DOKI',
      display: 'doki',
      symbol: 'DOKI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/doki_Logo.png'
      },
      coingecko_id: 'doki',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/doki_Logo.png',
          theme: {
            primary_color_hex: '#2e2d2a'
          }
        }],
      socials: {
        website: 'https://dokicoin.io/',
        twitter: 'https://twitter.com/doki_coin'
      },
      type_asset: 'sdk.coin'
    },
    {
      description: 'Myrkur the leader of OLD Order',
      denom_units: [{
          denom: 'umyrk',
          exponent: 0
        }, {
          denom: 'myrk',
          exponent: 6
        }],
      base: 'umyrk',
      name: 'MYRK',
      display: 'myrk',
      symbol: 'MYRK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/MYRK_Logo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/MYRK_Logo.png',
          theme: {
            primary_color_hex: '#0a0707'
          }
        }],
      socials: {
        twitter: 'https://twitter.com/myrkweilds'
      },
      type_asset: 'sdk.coin'
    },
    {
      description: 'O9W token for ODIN Protocol',
      denom_units: [{
          denom: 'mO9W',
          exponent: 0
        }, {
          denom: 'O9W',
          exponent: 6
        }],
      base: 'mO9W',
      name: 'O9W',
      display: 'O9W',
      symbol: 'O9W',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      socials: {
        website: 'https://www.odin9worlds.io/',
        twitter: 'https://twitter.com/odin9worlds'
      },
      type_asset: 'sdk.coin'
    }
  ]
};
export default info;