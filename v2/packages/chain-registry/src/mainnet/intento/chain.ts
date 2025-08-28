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
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uinto',
        fixedMinGasPrice: 0
      }]
  },
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