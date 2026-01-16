import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'mirage',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Mirage',
  chainType: 'cosmos',
  chainId: 'mirage-1',
  bech32Prefix: 'mirage',
  daemonName: 'miraged',
  nodeHome: '$HOME/.mirage/main',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'umirage',
        fixedMinGasPrice: 5000,
        lowGasPrice: 5000,
        averageGasPrice: 7500,
        highGasPrice: 10000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'umirage'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/MirageFoundation/mirage-node',
    sdk: {
      type: 'cosmos',
      version: '0.53'
    },
    ibc: {
      type: 'go',
      version: '10.2.0'
    },
    consensus: {
      type: 'cometbft',
      version: '0.38.17'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mirage/images/mirage.png'
  },
  description: 'Mirage is what Reddit could have been if it never sold out. Free speech lives on-chain. True discourse. Decentralized. Unstoppable.',
  apis: {
    rpc: [{
        address: 'https://mirage.talk/chain/rpc',
        provider: 'Mirage Foundation'
      }, {
        address: 'https://mirage.vote/chain/rpc',
        provider: 'Mirage Foundation'
      }],
    rest: [{
        address: 'https://mirage.talk/chain/rest',
        provider: 'Mirage Foundation'
      }, {
        address: 'https://mirage.vote/chain/rest',
        provider: 'Mirage Foundation'
      }]
  },
  explorers: [],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mirage/images/mirage.png'
    }]
};
export default info;