import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'planq',
  assets: [
    {
      description: 'The native EVM, governance and staking token of the Planq Network',
      extendedDescription: 'Planq is the very first cryptocurrency project to keep mobile platform usability at heart, taking a step away from dependency on desktop services. By focusing on easy accessibility and close integration of other blockchains via easy to use bridges, Planq will push Web 3 adoption in the mobile space to the next level.',
      denomUnits: [{
          denom: 'aplanq',
          exponent: 0
        }, {
          denom: 'planq',
          exponent: 18
        }],
      base: 'aplanq',
      name: 'Planq',
      display: 'planq',
      symbol: 'PLQ',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
      },
      coingeckoId: 'planq',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg',
          theme: {
            primaryColorHex: '#d4f3fb'
          }
        }],
      socials: {
        website: 'https://planq.network',
        twitter: 'https://twitter.com/planqfoundation'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The token of Source Protocol bridged from BSC.',
      denomUnits: [{
          denom: 'erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09',
          exponent: 0
        }, {
          denom: 'srcx',
          exponent: 9
        }],
      base: 'erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09',
      name: 'Source Token',
      display: 'srcx',
      symbol: 'SRCX',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'binancesmartchain',
            baseDenom: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae',
            contract: '0xC891aBa0b42818fb4c975Bf6461033c62BCE75ff'
          },
          chain: {
            contract: '0xC891aBa0b42818fb4c975Bf6461033c62BCE75ff'
          },
          provider: 'DeltaSwap.io'
        }],
      images: [{
          imageSync: {
            chainName: 'binancesmartchain',
            baseDenom: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png',
          theme: {
            primaryColorHex: '#7f22bc'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'nRide Token',
      extendedDescription: 'nRide is developing a uber-like ride-hailing protocol, leveraging cosmwasm smart-contracts for payment, driver registration and text-messaging between the rider and the driver, to create a trustless public transportation environment for any cab or taxi company to use.',
      denomUnits: [{
          denom: 'ibc/26B4B4BBF3C8D5DB1ADE993CCD865A7CC608B2BAEF20E0166F18B84E32184F63',
          exponent: 0,
          aliases: ['cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq', 'ibc/E750D31033DC1CF4A044C3AA0A8117401316DC918FBEBC4E3D34F91B09D5F54C']
        }, {
          denom: 'nride',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/26B4B4BBF3C8D5DB1ADE993CCD865A7CC608B2BAEF20E0166F18B84E32184F63',
      name: 'nRide Token',
      display: 'nride',
      symbol: 'NRIDE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'ibc/E750D31033DC1CF4A044C3AA0A8117401316DC918FBEBC4E3D34F91B09D5F54C',
            channelId: 'channel-492'
          },
          chain: {
            channelId: 'channel-1',
            path: 'transfer/channel-1/transfer/channel-169/cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg',
          theme: {
            primaryColorHex: '#050505'
          }
        }]
    }
  ]
};
export default info;