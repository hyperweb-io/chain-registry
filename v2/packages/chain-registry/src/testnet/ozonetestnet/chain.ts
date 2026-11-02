import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'ozonetestnet',
  status: 'live',
  website: 'https://ozonechain.com',
  networkType: 'testnet',
  prettyName: 'Ozone Testnet',
  chainType: 'cosmos',
  chainId: 'os_10120-1',
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
      genesisUrl: 'https://rpc-testnet.ozonescan.com/api/genesis'
    }
  },
  description: 'Ozone Chain testnet. tOZONE is used for gas on the EVM test network.',
  images: [{
      imageSync: {
        chainName: 'ozone',
        baseDenom: 'aphoton'
      },
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
        address: 'https://rpc-testnet.ozonescan.com/api',
        provider: 'OzoneScan'
      }],
    rest: [{
        address: 'https://rpc-testnet.ozonescan.com/cosmos-api',
        provider: 'OzoneScan'
      }],
    evmHttpJsonrpc: [{
        address: 'https://rpc-testnet.ozonescan.com',
        provider: 'OzoneScan'
      }]
  },
  explorers: [{
      kind: 'ozonescan',
      url: 'https://testnet.ozonescan.com'
    }],
  keywords: [
    'evm',
    'ethermint',
    'testnet'
  ]
};
export default info;