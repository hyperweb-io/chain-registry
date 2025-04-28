import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'lumera',
  chainType: 'cosmos',
  chainId: 'lumera-mainnet-1',
  prettyName: 'Lumera',
  website: 'https://lumera.protocol',
  networkType: 'mainnet',
  status: 'upcoming',
  bech32Prefix: 'lumera',
  bech32Config: {
    bech32PrefixAccAddr: 'lumera',
    bech32PrefixAccPub: 'lumerapub',
    bech32PrefixValAddr: 'lumeravaloper',
    bech32PrefixValPub: 'lumeravaloperpub',
    bech32PrefixConsAddr: 'lumeravalcons',
    bech32PrefixConsPub: 'lumeravalconspub'
  },
  daemonName: 'lumerad',
  nodeHome: '$HOME/.lumera',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ulume',
        fixedMinGasPrice: 0.025,
        lowGasPrice: 0.025,
        averageGasPrice: 0.025,
        highGasPrice: 0.025
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ulume'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/LumeraProtocol/lumera',
    tag: 'v1.0.0',
    recommendedVersion: 'v1.0.0',
    language: {
      type: 'go',
      version: 'v1.24'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.13'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.12'
    },
    cosmwasm: {
      version: 'v0.53.0',
      enabled: true
    },
    ibc: {
      type: 'go',
      version: 'v8.5.1'
    },
    genesis: {
      genesisUrl: 'https://github.com/LumeraProtocol/lumera-networks/tree/master/mainnet'
    }
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://portal.lumera.io/lumera-mainnet-1/',
      txPage: 'https://portal.lumera.io/lumera-mainnet-1/tx/${txHash}',
      accountPage: 'https://portal.lumera.io/lumera-mainnet-1/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumera/images/lumera.png'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumera/images/lumera.png'
  },
  keywords: [
    'lumera',
    'lume',
    'mainnet',
    'pastel'
  ]
};
export default info;