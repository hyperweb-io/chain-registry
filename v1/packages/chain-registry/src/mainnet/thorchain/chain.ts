import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'thorchain',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://thorchain.org/',
  pretty_name: 'THORChain',
  chain_type: 'cosmos',
  chain_id: 'thorchain-1',
  bech32_prefix: 'thor',
  daemon_name: 'thornode',
  node_home: '$HOME/.thornode',
  slip44: 931,
  codebase: {
    git_repo: 'https://gitlab.com/thorchain/thornode',
    recommended_version: 'v3.9.0',
    compatible_versions: ['v3.9.0'],
    genesis: {
      genesis_url: 'https://storage.googleapis.com/public-snapshots-ninerealms/genesis/17562000.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.53.0'
    },
    cosmwasm: {
      enabled: true
    }
  },
  apis: {
    rpc: [{
        address: 'https://thornode-mainnet-rpc.bryanlabs.net',
        provider: 'BryanLabs'
      }],
    grpc: [{
        address: 'thornode-mainnet-grpc.bryanlabs.net:443',
        provider: 'BryanLabs'
      }],
    rest: [{
        address: 'https://thornode-mainnet-rpc.bryanlabs.net',
        provider: 'BryanLabs'
      }],
    wss: [{
        address: 'wss://thornode-mainnet-rpc.bryanlabs.net/websocket',
        provider: 'BryanLabs'
      }]
  },
  explorers: [
    {
      kind: 'THORChain explorer',
      url: 'https://thorchain.net',
      tx_page: 'https://thorchain.net/#/txs/${txHash}'
    },
    {
      kind: 'Runescan',
      url: 'https://runescan.io/',
      tx_page: 'https://runescan.io/txs/${txHash}'
    },
    {
      kind: 'THORChain Dashboard',
      url: 'https://thorchain.net/dashboard'
    },
    {
      kind: 'Bryanlabs explorer',
      url: 'https://explore.bryanlabs.net/thorchain',
      tx_page: 'https://explore.bryanlabs.net/thorchain/#/txs/${txHash}'
    }
  ]
};
export default info;