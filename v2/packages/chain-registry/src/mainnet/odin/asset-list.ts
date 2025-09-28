import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'odin',
  assets: [
    {
      description: 'ODIN is the Staking and governance token for ODIN Protocol',
      denomUnits: [{
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
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png'
        }],
      socials: {
        website: 'https://odinprotocol.io/',
        twitter: 'https://twitter.com/odinprotocol'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'GEO token for ODIN Protocol',
      denomUnits: [{
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
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'DOKI the last Dragon',
      denomUnits: [{
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
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/doki_Logo.png'
      },
      coingeckoId: 'doki',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/doki_Logo.png'
        }],
      socials: {
        website: 'https://dokicoin.io/',
        twitter: 'https://twitter.com/doki_coin'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Myrkur the leader of OLD Order',
      denomUnits: [{
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
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/MYRK_Logo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/MYRK_Logo.png'
        }],
      socials: {
        twitter: 'https://twitter.com/myrkweilds'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'O9W token for ODIN Protocol',
      denomUnits: [{
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
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg'
        }],
      socials: {
        website: 'https://www.odin9worlds.io/',
        twitter: 'https://twitter.com/odin9worlds'
      },
      typeAsset: 'sdk.coin'
    }
  ]
};
export default info;