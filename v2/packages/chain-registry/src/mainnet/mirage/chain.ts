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
        fixedMinGasPrice: 0.025,
        lowGasPrice: 0.025,
        averageGasPrice: 0.05,
        highGasPrice: 0.1
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'umirage'
      }]
  },
  codebase: {
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
    rpc: [
      {
        address: 'http://mirage.talk:26657',
        provider: 'Mirage'
      },
      {
        address: 'http://mirage.vote:26657',
        provider: 'Mirage'
      },
      {
        address: 'http://146.190.108.140:26657',
        provider: 'Mirage'
      },
      {
        address: 'http://139.59.9.96:26657',
        provider: 'Mirage'
      }
    ],
    grpc: [
      {
        address: 'mirage.talk:9090',
        provider: 'Mirage'
      },
      {
        address: 'mirage.vote:9090',
        provider: 'Mirage'
      },
      {
        address: '146.190.108.140:9090',
        provider: 'Mirage'
      },
      {
        address: '139.59.9.96:9090',
        provider: 'Mirage'
      }
    ]
  },
  explorers: [],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mirage/images/mirage.png'
    }]
};
export default info;