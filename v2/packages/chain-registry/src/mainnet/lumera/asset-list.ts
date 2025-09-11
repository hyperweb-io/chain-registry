import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'lumera',
  assets: [{
      denomUnits: [{
          denom: 'ulume',
          exponent: 0,
          aliases: ['microlume']
        }, {
          denom: 'LUME',
          exponent: 6,
          aliases: ['lume']
        }],
      base: 'ulume',
      display: 'LUME',
      name: 'lume',
      symbol: 'LUME',
      typeAsset: 'sdk.coin',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumera/images/lumera.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumera/images/lumera.png'
        }],
      socials: {
        github: 'https://github.com/LumeraProtocol/lumera',
        discord: 'https://discord.gg/lumeraprotocol',
        telegram: 'https://t.me/lumeraprotocol',
        website: 'https://lumera.io'
      }
    }, {
      denomUnits: [{
          denom: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
      name: 'Osmosis OSMO Token',
      display: 'osmo',
      symbol: 'OSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'uosmo',
            channelId: 'channel-106313'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/uosmo'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'uosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      keywords: [
        'dex',
        'ibc',
        'osmosis'
      ]
    }]
};
export default info;