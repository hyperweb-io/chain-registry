import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'aaronetwork',
  status: 'live',
  network_type: 'mainnet',
  chain_type: 'cosmos',
  website: 'https://aaronetwork.xyz',
  pretty_name: 'Aaron Network',
  chain_id: 'aaronetwork',
  bech32_prefix: 'aaron',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uaaron',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0.001
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uaaron'
      }],
    lock_duration: {
      time: '86400s'
    }
  },
  codebase: {
    git_repo: 'https://github.com/aaronetwork/aaronetwork-chain',
    recommended_version: 'v1.0.0',
    compatible_versions: ['v1.0.0'],
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/aaronetwork/chain-genesis/refs/heads/main/genesis.json'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://mainnet-rpc.aaronetwork.xyz',
        provider: 'Aaron Network Foundation'
      },
      {
        address: 'https://aaronetwork_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://rpc-aaronetwork.sychonix.com/',
        provider: 'sychonix'
      },
      {
        address: 'https://rpc-aaronetwork.vinjan.xyz/',
        provider: 'Vinjan.Inc'
      },
      {
        address: 'https://rpc.aaronetwork.indonode.net',
        provider: 'Indonode'
      }
    ],
    rest: [
      {
        address: 'https://mainnet-api.aaronetwork.xyz',
        provider: 'Aaron Network Foundation'
      },
      {
        address: 'https://aaronetwork_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://api-aaronetwork.sychonix.com/',
        provider: 'sychonix'
      },
      {
        address: 'https://api-aaronetwork.vinjan.xyz',
        provider: 'Vinjan.Inc'
      },
      {
        address: 'https://api.aaronetwork.indonode.net',
        provider: 'Indonode'
      }
    ],
    grpc: [{
        address: 'grpc.aaronetwork.indonode.net:29090',
        provider: 'Indonode'
      }, {
        address: '63.250.41.78:9090',
        provider: 'Aaron Network'
      }]
  },
  explorers: [
    {
      kind: 'Ping.pub',
      url: 'https://ping.pub/Aaron%20Network',
      tx_page: 'https://ping.pub/Aaron%20Network/tx/${txHash}',
      account_page: 'https://ping.pub/Aaron%20Network/account/${accountAddress}'
    },
    {
      kind: 'Aaron Network',
      url: 'https://explorer.aaronetwork.xyz',
      tx_page: 'https://explorer.aaronetwork.xyz/hash/${txHash}',
      account_page: 'https://explorer.aaronetwork.xyz/address/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/aaronetwork',
      tx_page: 'https://explorer.whenmoonwhenlambo.money/aaronetwork/tx/${txHash}',
      account_page: 'https://explorer.whenmoonwhenlambo.money/aaronetwork/account/${accountAddress}'
    }
  ],
  keywords: [
    'social',
    'chat',
    'reputation',
    'score',
    'messaging'
  ]
};
export default info;