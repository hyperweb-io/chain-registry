import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'qubeticstestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Qubetics Testnet',
  chainType: 'cosmos',
  chainId: 'qubetics_9029-1',
  bech32Prefix: 'qubetics',
  daemonName: 'qubeticsd',
  nodeHome: '$HOME/.tmp-qubeticsd',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'tics',
        lowGasPrice: 20000000000,
        averageGasPrice: 25000000000,
        highGasPrice: 40000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'tics'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Qubetics/qubetics-chain',
    recommendedVersion: 'v0.0.1',
    compatibleVersions: ['v0.0.1'],
    consensus: {
      type: 'cometbft',
      version: '0.37'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/Qubetics/qubetics-testnet-script/refs/heads/main/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.47'
    },
    ibc: {
      type: 'go',
      version: 'v7.6.0'
    }
  },
  apis: {
    rpc: [{
        address: 'https://tendermint-testnet.qubetics.work/',
        provider: 'qubetics'
      }],
    rest: [{
        address: 'https://swagger-testnet.qubetics.work/',
        provider: 'qubetics'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'Qubetics Explorer',
      url: 'https://testnet.qubetics.work/dashboard',
      txPage: 'https://testnet.qubetics.work/tx/${txHash}'
    }]
};
export default info;