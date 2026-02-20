import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'terpnetwork',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Terp-Network',
  chain_type: 'cosmos',
  chain_id: 'morocco-1',
  bech32_prefix: 'terp',
  slip44: 118,
  daemon_name: 'terp',
  node_home: '$HOME/.terp',
  codebase: {
    git_repo: 'https://github.com/terpnetwork/terp-core.git',
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/terpnetwork/networks/main/mainnet/morocco-1/genesis.json'
    },
    recommended_version: 'v5.0.3',
    compatible_versions: ['v5.0.2', 'v5.0.3'],
    consensus: {
      type: 'cometbft',
      version: '0.38.21'
    },
    binaries: {
      "linux/amd64": 'https://github.com/terpnetwork/terp-core/releases/download/v5.0.3/terpd-linux-amd64',
      "linux/arm64": 'https://github.com/terpnetwork/terp-core/releases/download/v5.0.3/terpd-linux-arm64'
    }
  },
  fees: {
    fee_tokens: [{
        denom: 'uthiol',
        fixed_min_gas_price: 0.05
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uterp'
      }]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/terp.png'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-mainnet.terp.network:443',
        provider: 'TerpNet Foundation'
      },
      {
        address: 'https://terp-mainnet-rpc.itrocket.net:443',
        provider: 'itrocket.net'
      },
      {
        address: 'https://terp.rpc.nodex.one:443',
        provider: 'nodex.one'
      }
    ],
    rest: [
      {
        address: 'https://api-mainnet.terp.network.io:443',
        provider: 'ZenChainLabs'
      },
      {
        address: 'https://terp-mainnet-api.itrocket.net:443',
        provider: 'itrocket.net'
      },
      {
        address: 'https://terp.api.nodex.one:443',
        provider: 'nodex.one'
      },
      {
        address: 'https://terp.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      }
    ],
    grpc: [
      {
        address: 'grpc-mainnet.terp.network.io:443',
        provider: 'TerpNet Foundation'
      },
      {
        address: 'https://grpc.terp.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'terp-mainnet-grpc.itrocket.net:13090',
        provider: 'itrocket.net'
      },
      {
        address: 'https://terp.grpc.nodex.one:443',
        provider: 'nodex.one'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/terp',
      tx_page: 'https://ping.pub/terp/tx/${txHash}',
      account_page: 'https://ping.pub/terp/account/{$accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.nodestake.top',
      tx_page: 'https://explorer.nodestake.top/terp/tx/${txHash}',
      account_page: 'https://explorer.nodestake.top/terp/account/{$accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Terp-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Terp-Mainnet/tx/${txHash}',
      account_page: 'https://explorer.stavr.tech/Terp-Mainnet/account/{$accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/terp.png'
    }]
};
export default info;