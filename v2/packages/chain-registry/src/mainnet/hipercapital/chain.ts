import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'hipercapital',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Hipercapital Finance',
  chainType: 'cosmos',
  chainId: 'hipcf_7777-1',
  bech32Prefix: 'cosmos',
  daemonName: 'evmd',
  nodeHome: '$HOME/.evmd-mainnet',
  keyAlgos: ['ethsecp256k1'],
  slip44: 60,
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/hipercapital/images/hip.png'
  },
  fees: {
    feeTokens: [{
        denom: 'ahip',
        fixedMinGasPrice: 0,
        lowGasPrice: 1000000000,
        averageGasPrice: 5000000000,
        highGasPrice: 10000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ahip'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/hipercapital/evm',
    recommendedVersion: 'v0.7.0',
    consensus: {
      type: 'cometbft'
    },
    genesis: {
      genesisUrl: 'https://rpc-cosmos.hipercapitalfinance.com/genesis.json'
    },
    compatibleVersions: ['v0.7.0']
  },
  apis: {
    rpc: [{
        address: 'https://rpc-cosmos.hipercapitalfinance.com',
        provider: 'HiperCapital Finance'
      }],
    rest: [{
        address: 'https://api-cosmos.hipercapitalfinance.com',
        provider: 'HiperCapital Finance'
      }],
    evmHttpJsonrpc: [{
        address: 'https://evm-cosmos.hipercapitalfinance.com',
        provider: 'HiperCapital Finance'
      }]
  },
  explorers: [{
      kind: 'HiperCapital Explorer',
      url: 'https://explorer.hipercapitalfinance.com'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/hipercapital/images/hip.png'
    }],
  website: 'https://hipercapitalfinance.com'
};
export default info;