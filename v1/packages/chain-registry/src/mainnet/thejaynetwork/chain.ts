import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'thejaynetwork',
  chain_type: 'cosmos',
  chain_id: 'thejaynetwork',
  pretty_name: 'The Jay Network',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://jaynwk.gt.tc',
  bech32_prefix: 'yjay',
  daemon_name: 'jaynd',
  node_home: '$HOME/.jayn',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ujay',
        fixed_min_gas_price: 0.0025,
        low_gas_price: 0.0025,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ujay'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/bbtccore/thejaynetwork',
    recommended_version: 'v1.0.0',
    compatible_versions: ['v1.0.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.19'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.53.6'
    },
    ibc: {
      type: 'go',
      version: 'v10.4.0'
    },
    binaries: {
      "linux/amd64": 'https://github.com/bbtccore/thejaynetwork/releases/download/v1.0.0/jaynd-linux-amd64',
      "linux/arm64": 'https://github.com/bbtccore/thejaynetwork/releases/download/v1.0.0/jaynd-linux-arm64'
    },
    genesis: {
      name: 'v1',
      genesis_url: 'https://raw.githubusercontent.com/bbtccore/thejaynetwork/master/genesis/genesis.json'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/thejaynetwork/images/thejaynetwork.png'
  },
  description: 'The Jay Network is a Cosmos SDK-based blockchain providing fast, secure, and scalable infrastructure for decentralized applications.',
  apis: {
    rpc: [{
        address: 'https://jayscan.duckdns.org/rpc',
        provider: 'Jay Network'
      }, {
        address: 'http://34.67.101.201:26657',
        provider: 'Jay Network (direct)'
      }],
    rest: [{
        address: 'https://jayscan.duckdns.org/api',
        provider: 'Jay Network'
      }, {
        address: 'http://34.67.101.201:1317',
        provider: 'Jay Network (direct)'
      }],
    grpc: [{
        address: '34.67.101.201:9090',
        provider: 'Jay Network'
      }, {
        address: '34.171.203.84:9090',
        provider: 'Jay Network'
      }]
  },
  explorers: [{
      kind: 'Jayscan',
      url: 'https://jayscan.duckdns.org',
      tx_page: 'https://jayscan.duckdns.org/?tx=${txHash}',
      account_page: 'https://jayscan.duckdns.org/?account=${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/thejaynetwork/images/thejaynetwork.png'
    }]
};
export default info;