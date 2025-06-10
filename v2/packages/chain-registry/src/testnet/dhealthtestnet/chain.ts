import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'dhealthtestnet',
  chainType: 'cosmos',
  chainId: 'dhealth-testnet-2',
  prettyName: 'dHealth Testnet',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'tdh02',
  daemonName: 'dhealth-testnetd',
  nodeHome: '$HOME/.dhealth-testnet',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'utdhp',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.025,
        averageGasPrice: 0.03,
        highGasPrice: 0.035
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'utdhp'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/dhealthproject/dhealth-testnet',
    recommendedVersion: 'v2.1.1',
    compatibleVersions: ['v2.1.1'],
    consensus: {
      type: 'cometbft',
      version: 'v0.37.2'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/dhealthproject/mainnet/main/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/cosmos/cosmos-sdk',
      version: 'v0.47.4'
    },
    cosmwasm: {
      version: 'v0.41.0',
      path: '$HOME/.dhealth/wasm',
      enabled: true
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc-testnet.dhealth.dev',
        provider: 'dHealth'
      }],
    rest: [{
        address: 'https://lcd-testnet.dhealth.dev',
        provider: 'dHealth'
      }],
    grpc: [{
        address: 'rpc-testnet.dhealth.dev:9090',
        provider: 'dHealth'
      }]
  },
  explorers: []
};
export default info;