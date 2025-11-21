import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'bitwaydevnet',
  status: 'live',
  networkType: 'devnet',
  website: 'https://devnet.bitway.com/',
  prettyName: 'BitwayDevnet',
  chainType: 'cosmos',
  chainId: 'bitway-devnet-1',
  bech32Prefix: 'bitway',
  daemonName: 'bitwayd',
  nodeHome: '$HOME/.bitway',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ubtw',
        fixedMinGasPrice: 0.0006,
        lowGasPrice: 0.0006,
        averageGasPrice: 0.0008,
        highGasPrice: 0.001
      }, {
        denom: 'sat',
        fixedMinGasPrice: 0.000001,
        lowGasPrice: 0.000001,
        averageGasPrice: 0.0000015,
        highGasPrice: 0.000002
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ubtw'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/bitwaylabs/bitway',
    recommendedVersion: 'v2.0.1',
    compatibleVersions: ['v2.0.1'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.12'
    },
    genesis: {
      genesisUrl: 'https://github.com/bitwaylabs/networks/raw/main/devnet/bitway-devnet-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.14'
    },
    ibc: {
      type: 'go',
      version: 'v8.5.3'
    },
    cosmwasm: {
      version: 'v0.53.0',
      enabled: true
    },
    tag: 'v2.0.1'
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitway/images/btw.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitway/images/btw.svg'
  },
  description: 'Devnet for Bitway',
  apis: {
    rpc: [{
        address: 'http://45.77.249.30:26657',
        provider: 'Bitway Labs'
      }],
    rest: [{
        address: 'http://45.77.249.30:1317',
        provider: 'Bitway Labs'
      }],
    grpc: [{
        address: '45.77.249.30:9090',
        provider: 'Bitway Labs'
      }]
  },
  explorers: [],
  images: [{
      imageSync: {
        chainName: 'bitway',
        baseDenom: 'ubtw'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitway/images/btw.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitway/images/btw.svg'
    }]
};
export default info;