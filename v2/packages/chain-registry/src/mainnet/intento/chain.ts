import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'intento',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Intento',
  chainType: 'cosmos',
  chainId: 'intento-1',
  bech32Prefix: 'into',
  daemonName: 'intentod',
  nodeHome: '$HOME/.intento',
  keyAlgos: ['secp256k1'],
  fees: {
    feeTokens: [
      {
        denom: 'uinto',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.01,
        averageGasPrice: 0.02,
        highGasPrice: 0.03
      },
      {
        denom: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
        fixedMinGasPrice: 0.003,
        lowGasPrice: 0.003,
        averageGasPrice: 0.007,
        highGasPrice: 0.015
      },
      {
        denom: 'ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23',
        fixedMinGasPrice: 0.005,
        lowGasPrice: 0.005,
        averageGasPrice: 0.01,
        highGasPrice: 0.02
      }
    ]
  },
  slip44: 118,
  staking: {
    stakingTokens: [{
        denom: 'uinto'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/trstlabs/intento',
    recommendedVersion: 'v1.0.1',
    compatibleVersions: ['v1.0.1'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.17'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/trstlabs/networks/refs/heads/main/mainnet/intento-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.50.14'
    },
    ibc: {
      type: 'go',
      version: 'v8.7.0'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc-mainnet.intento.zone',
        provider: 'Intento'
      }],
    rest: [{
        address: 'https://lcd-mainnet.intento.zone',
        provider: 'Intento'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'PingPub',
      url: 'https://explorer.intento.zone',
      txPage: 'https://explorer.intento.zone/intento-mainnet/tx/${txHash}'
    }]
};
export default info;