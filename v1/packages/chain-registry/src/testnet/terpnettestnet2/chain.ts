import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'terpnettestnet2',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Terp-Network',
  chain_type: 'cosmos',
  chain_id: '90u-2',
  bech32_prefix: 'terp',
  daemon_name: 'terpd',
  node_home: '$HOME/.terp',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uthiolx',
        fixed_min_gas_price: 0.5,
        low_gas_price: 0.75,
        average_gas_price: 1,
        high_gas_price: 1.25
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uterpx'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/terpnetwork/terp-core',
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/terpnetwork/test-net/master/90u-2/genesis.json'
    },
    recommended_version: 'v4.1.testnet',
    compatible_versions: ['v4.1.testnet'],
    consensus: {
      type: 'cometbft',
      version: '0.37.2'
    },
    binaries: {
      "linux/amd64": 'https://github.com/terpnetwork/terp-core/releases/download/v4.1.testnet/terpd-linux-amd64',
      "linux/arm64": 'https://github.com/terpnetwork/terp-core/releases/download/v4.1.testnet/terpd-linux-arm64'
    }
  },
  apis: {
    rpc: [{
        address: 'https://terp-testnet-rpc.itrocket.net:443/',
        provider: 'itrocket'
      }],
    rest: [{
        address: 'https://terp-testnet-api.itrocket.net:443/',
        provider: 'itrocket'
      }],
    grpc: [{
        address: 'terp-testnet-grpc.itrocket.net/',
        provider: 'itrocket'
      }]
  },
  explorers: [{
      kind: 'Ping Pub',
      url: 'https://explorer.nodestake.top/terp-testnet',
      tx_page: 'https://explorer.nodestake.top/terp-testnet/tx/${txHash}'
    }, {
      kind: 'NODEXPLORER',
      url: 'https://explorer.nodexcapital.com',
      tx_page: 'https://explorer.nodexcapital.com/terp/tx/${txHash}',
      account_page: 'https://explorer.nodexcapital.com/terp/account/{$accountAddress}'
    }]
};
export default info;