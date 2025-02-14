import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'kimanetworktestnet',
  status: 'live',
  website: 'https://www.kima.network/',
  networkType: 'testnet',
  prettyName: 'Kima Network Testnet',
  chainType: 'cosmos',
  chainId: 'kima_testnet',
  bech32Prefix: 'kima',
  daemonName: 'kimad',
  nodeHome: '$HOME/.kima',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uKIMA',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.0025,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uKIMA'
      }],
    lockDuration: {
      time: '259200s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/kima-finance/kima-blockchain/',
    genesis: {
      name: 'v1',
      genesisUrl: 'https://archive.sardis.kima.network/genesis.json'
    },
    recommendedVersion: 'v0.4.8'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.sardis.kima.network/',
        provider: 'Kima Network'
      }],
    grpc: [{
        address: 'https://grpc.sardis.kima.network',
        provider: 'Kima Network'
      }],
    rest: [{
        address: 'https://api.sardis.kima.network/',
        provider: 'Kima Network'
      }]
  },
  explorers: [{
      kind: 'Kima Network',
      url: 'https://explorer.sardis.kima.network/',
      txPage: 'https://explorer.sardis.kima.network/transactions/${txHash}'
    }]
};
export default info;