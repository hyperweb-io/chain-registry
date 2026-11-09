import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'dchat',
  chainType: 'cosmos',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://dchat.online',
  prettyName: 'DChat',
  chainId: 'messaging',
  bech32Prefix: 'dc',
  daemonName: 'messagingd',
  nodeHome: '$HOME/.messaging',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  description: 'DChat is an end-to-end encrypted messenger whose chain holds identities and payments. SHH is its native token.',
  fees: {
    feeTokens: [{
        denom: 'udchat',
        fixedMinGasPrice: 0.0001,
        lowGasPrice: 0.0025,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'udchat'
      }]
  },
  codebase: {
    consensus: {
      type: 'cometbft',
      version: '0.38.17'
    },
    sdk: {
      type: 'cosmos',
      version: '0.50.13'
    },
    ibc: {
      type: 'go',
      version: '8.7.0'
    }
  },
  apis: {
    rpc: [{
        address: 'https://dchat.online/rpc',
        provider: 'DChat'
      }],
    rest: [{
        address: 'https://dchat.online/rest',
        provider: 'DChat'
      }]
  },
  explorers: [{
      kind: 'dchat',
      url: 'https://dchat.online/explorer',
      txPage: 'https://dchat.online/explorer/tx/${txHash}'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dchat/images/shh.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dchat/images/shh.svg'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dchat/images/shh.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dchat/images/shh.svg',
      theme: {
        circle: true,
        darkMode: false
      }
    }]
};
export default info;