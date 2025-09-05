import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'intento',
  assets: [
    {
      description: 'The native token of INTENTO',
      denomUnits: [{
          denom: 'uinto',
          exponent: 0
        }, {
          denom: 'into',
          exponent: 6
        }],
      base: 'uinto',
      name: 'Intento',
      display: 'into',
      symbol: 'INTO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/intento/images/into.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/intento/images/into.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/intento/images/into.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/intento/images/into.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The staking token of the Cosmos Hub',
      extendedDescription: 'ATOM secures the Cosmos Hub and is one of the most widely used IBC tokens. It can be used for staking, governance, and gas across the Cosmos ecosystem.',
      denomUnits: [{
          denom: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'ATOM',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
      name: 'Cosmos Hub',
      display: 'ATOM',
      symbol: 'ATOM',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom',
            channelId: 'channel-1492'
          },
          chain: {
            channelId: 'channel-1',
            path: 'transfer/channel-1/uatom'
          }
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
          imageSync: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      extendedDescription: 'OSMO is the staking and governance token of Osmosis, the leading interchain DEX. It is also widely used as an IBC gas token.',
      denomUnits: [{
          denom: 'ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'OSMO',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23',
      name: 'Osmosis',
      display: 'OSMO',
      symbol: 'OSMO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'uosmo',
            channelId: 'channel-106076'
          },
          chain: {
            channelId: 'channel-3',
            path: 'transfer/channel-3/uosmo'
          }
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'uosmo'
          }
        }]
    }
  ]
};
export default info;