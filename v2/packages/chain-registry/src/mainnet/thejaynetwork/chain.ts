import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'thejaynetwork',
  chainType: 'cosmos',
  chainId: 'thejaynetwork',
  prettyName: 'The Jay Network',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://jaynwk.gt.tc',
  bech32Prefix: 'yjay',
  daemonName: 'jaynd',
  nodeHome: '$HOME/.jayn',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ujay',
        fixedMinGasPrice: 0.0025,
        lowGasPrice: 0.0025,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ujay'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/bbtccore/thejaynetwork',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
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
      genesisUrl: 'https://raw.githubusercontent.com/bbtccore/thejaynetwork/master/genesis/genesis.json'
    }
  },
  logoURIs: {
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
      txPage: 'https://jayscan.duckdns.org/?tx=${txHash}',
      accountPage: 'https://jayscan.duckdns.org/?account=${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/thejaynetwork/images/thejaynetwork.png'
    }]
};
export default info;