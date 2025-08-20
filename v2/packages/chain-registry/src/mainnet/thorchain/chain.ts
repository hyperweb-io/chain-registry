import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'thorchain',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://thorchain.org/',
  prettyName: 'THORChain',
  chainType: 'cosmos',
  chainId: 'thorchain-1',
  bech32Prefix: 'thor',
  daemonName: 'thornode',
  nodeHome: '$HOME/.thornode',
  slip44: 931,
  codebase: {
    gitRepo: 'https://gitlab.com/thorchain/thornode',
    recommendedVersion: 'v3.9.0',
    compatibleVersions: ['v3.9.0'],
    genesis: {
      genesisUrl: 'https://storage.googleapis.com/public-snapshots-ninerealms/genesis/17562000.json'
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
      txPage: 'https://thorchain.net/#/txs/${txHash}'
    },
    {
      kind: 'Runescan',
      url: 'https://runescan.io/',
      txPage: 'https://runescan.io/txs/${txHash}'
    },
    {
      kind: 'THORChain Dashboard',
      url: 'https://thorchain.net/dashboard'
    },
    {
      kind: 'Bryanlabs explorer',
      url: 'https://explore.bryanlabs.net/thorchain',
      txPage: 'https://explore.bryanlabs.net/thorchain/#/txs/${txHash}'
    }
  ]
};
export default info;