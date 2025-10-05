import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'mun',
  website: 'https://mun.money',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Mun',
  chain_type: 'cosmos',
  chain_id: 'mun-1',
  bech32_prefix: 'mun',
  daemon_name: 'mund',
  node_home: '$HOME/.mun',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'umun',
        fixed_min_gas_price: 0.025
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'umun'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/munblockchain/mun-node',
    recommended_version: 'v1.0.0',
    compatible_versions: ['v1.0.0'],
    genesis: {
      genesis_url: 'https://mainnet1rpc.mun.money/genesis'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mun/images/mun.png'
  },
  apis: {
    rpc: [
      {
        address: 'https://mainnet1rpc.mun.money',
        provider: 'Mun'
      },
      {
        address: 'https://mainnet-mun-rpc.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://mun_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    rest: [
      {
        address: 'https://mainnet1.mun.money',
        provider: 'Mun'
      },
      {
        address: 'https://mainnet-mun-api.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://mun_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    grpc: []
  },
  explorers: [
    {
      url: 'https://explorer.mun.money/mun',
      tx_page: 'https://explorer.mun.money/mun/${txHash}'
    },
    {
      url: 'https://explorer.indonode.net/mun/staking',
      tx_page: 'https://explorer.indonode.net/mun/${txHash}'
    },
    {
      url: 'https://explorer.konsortech.xyz/mun/staking',
      tx_page: 'https://explorer.konsortech.xyz/mun/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/mun',
      tx_page: 'https://ping.pub/mun/${txHash}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/mun',
      tx_page: 'https://explorer.whenmoonwhenlambo.money/mun/tx/${txHash}',
      account_page: 'https://explorer.whenmoonwhenlambo.money/mun/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mun/images/mun.png'
    }]
};
export default info;