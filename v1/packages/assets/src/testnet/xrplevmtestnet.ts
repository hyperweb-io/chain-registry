import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'xrplevmtestnet',
  assets: [
    {
      description: 'The native staking and governance token for the Cosmos ICS Provider Testnet.',
      denom_units: [{
          denom: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
      name: 'Cosmos',
      display: 'atom',
      symbol: 'ATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-374',
            base_denom: 'uatom',
            chain_name: 'cosmosicsprovidertestnet'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'Eden token definition',
      denom_units: [
        {
          denom: 'ibc/8072806541EC7FC4E6CD7C1AE89EDD6C7C9E6B6EF8EF04CF65E97CFADD480BE8',
          exponent: 0,
          aliases: ['ueden']
        },
        {
          denom: 'meden',
          exponent: 3,
          aliases: ['millieden']
        },
        {
          denom: 'eden',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/8072806541EC7FC4E6CD7C1AE89EDD6C7C9E6B6EF8EF04CF65E97CFADD480BE8',
      name: 'Eden',
      display: 'eden',
      symbol: 'EDEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/eden.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/eden.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'ueden',
            chain_name: 'elystestnet'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'The native staking and governance token for the Cosmos ICS Provider Testnet.',
      denom_units: [{
          denom: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
      name: 'Cosmos',
      display: 'atom',
      symbol: 'ATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-374',
            base_denom: 'uatom',
            chain_name: 'cosmosicsprovidertestnet'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'Eden token definition',
      denom_units: [
        {
          denom: 'ibc/8072806541EC7FC4E6CD7C1AE89EDD6C7C9E6B6EF8EF04CF65E97CFADD480BE8',
          exponent: 0,
          aliases: ['ueden']
        },
        {
          denom: 'meden',
          exponent: 3,
          aliases: ['millieden']
        },
        {
          denom: 'eden',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/8072806541EC7FC4E6CD7C1AE89EDD6C7C9E6B6EF8EF04CF65E97CFADD480BE8',
      name: 'Eden',
      display: 'eden',
      symbol: 'EDEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/eden.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/eden.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'ueden',
            chain_name: 'elystestnet'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    }
  ]
};
export default assets;
    