import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'intentotestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Intento Testnet',
  chainType: 'cosmos',
  chainId: 'intento-ics-test-1',
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
    recommendedVersion: 'v0.9.2-r1',
    compatibleVersions: ['v0.9.2-r1'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.17'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/trstlabs/networks/refs/heads/main/testnet/intento-ics-test-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.50.11'
    },
    ibc: {
      type: 'go',
      version: 'v8.7.0'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.intento.zone',
        provider: 'Intento'
      }],
    rest: [{
        address: 'https://lcd.intento.zone',
        provider: 'Intento'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'PingPub',
      url: 'https://explorer.intento.zone',
      txPage: 'https://explorer.intento.zone/intento-test/tx/${txHash}'
    }]
};
export default info;