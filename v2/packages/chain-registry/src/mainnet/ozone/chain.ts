import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'ozone',
  status: 'live',
  website: 'https://ozonechain.com',
  networkType: 'mainnet',
  prettyName: 'Ozone',
  chainType: 'cosmos',
  chainId: 'os_10121-1',
  bech32Prefix: 'ethm',
  daemonName: 'ozoned',
  nodeHome: '$HOME/.ethermintd',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'aphoton',
        fixedMinGasPrice: 0,
        lowGasPrice: 7,
        averageGasPrice: 7,
        highGasPrice: 10
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'aphoton'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/OA-Technology-Inc/Validator',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    tag: 'v1.0.0',
    binaries: {
      "linux/amd64": 'https://github.com/OA-Technology-Inc/Validator/raw/v1.0.0/ozoned'
    },
    consensus: {
      type: 'tendermint',
      version: '0.34.27'
    },
    genesis: {
      genesisUrl: 'https://cosmos.ozonescan.com/genesis'
    }
  },
  description: 'Ozone Chain is a public EVM-compatible blockchain built with Cosmos SDK and CometBFT. OZONE is used for gas, staking, and governance.',
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ozone/images/ozone.png',
      theme: {
        circle: true
      }
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ozone/images/ozone.png'
  },
  apis: {
    rpc: [{
        address: 'https://cosmos.ozonescan.com',
        provider: 'OzoneScan'
      }],
    rest: [{
        address: 'https://cosmos.ozonescan.com/api',
        provider: 'OzoneScan'
      }],
    evmHttpJsonrpc: [{
        address: 'https://chain.ozonescan.com',
        provider: 'OzoneScan'
      }]
  },
  explorers: [{
      kind: 'ozonescan',
      url: 'https://ozonescan.com'
    }],
  keywords: ['evm', 'ethermint']
};
export default info;