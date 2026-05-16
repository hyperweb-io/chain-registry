import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'amitis',
  chainType: 'cosmos',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Amitis Network',
  chainId: 'amitis-network',
  bech32Prefix: 'amitis',
  daemonName: 'amisd',
  nodeHome: '$HOME/.amitis',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uamts',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uamts'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/amitis-network/amitis-network',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    consensus: {
      type: 'cometbft',
      version: '0.38.11'
    },
    genesis: {
      genesisUrl: 'https://rpc.amitis.network/genesis'
    }
  },
  description: 'Amitis Network is a cooperative Layer 1 blockchain built on the Cosmos SDK. Our philosophy is friendship through shared prosperity — the network returns 80% of transaction fees directly to users at the protocol level, making it one of the most user-aligned blockchains in the Cosmos ecosystem. Amitis features 21 fixed validator slots, a native DEX, and native liquid staking built directly into the protocol.',
  apis: {
    rpc: [{
        address: 'https://rpc.amitis.network',
        provider: 'Amitis Network'
      }],
    rest: [{
        address: 'https://rest.amitis.network',
        provider: 'Amitis Network'
      }]
  },
  explorers: [],
  keywords: [
    'cosmos',
    'fee-rebate',
    'dex',
    'cooperative',
    'layer1'
  ]
};
export default info;