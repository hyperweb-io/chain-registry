import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'kimanetwork',
  status: 'live',
  website: 'https://www.kima.network/',
  networkType: 'mainnet',
  prettyName: 'Kima Network',
  chainType: 'cosmos',
  chainId: 'kima_network',
  bech32Prefix: 'kima',
  daemonName: 'kimad',
  nodeHome: '$HOME/.kima',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uKIMA',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.05
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uKIMA'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/kima-finance/kima-blockchain',
    genesis: {
      name: 'v1',
      genesisUrl: 'https://archive.kima.network/genesis.json'
    },
    recommendedVersion: 'v0.4.6'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kimanetwork/images/kima.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kimanetwork/images/kima.svg'
    }],
  apis: {
    wss: [{
        address: 'wss://rpc.kima.network/query',
        provider: 'Kima Network'
      }],
    rpc: [{
        address: 'https://rpc.kima.network/',
        provider: 'Kima Network'
      }],
    rest: [{
        address: 'https://api.kima.network',
        provider: 'Kima Network'
      }],
    grpc: [{
        address: 'https://grpc.kima.network',
        provider: 'Kima Network'
      }]
  },
  explorers: [{
      kind: 'Kima Network Explorer',
      url: 'https://explorer.kima.network/',
      txPage: 'https://explorer.kima.network/transactions/${txHash}'
    }]
};
export default info;