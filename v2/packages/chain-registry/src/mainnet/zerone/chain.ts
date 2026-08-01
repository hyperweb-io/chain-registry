import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'zerone',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://zerone.ai/',
  prettyName: 'Zerone',
  chainType: 'cosmos',
  chainId: 'zerone-1',
  bech32Prefix: 'zrn',
  bech32Config: {
    bech32PrefixAccAddr: 'zrn',
    bech32PrefixAccPub: 'zrnpub',
    bech32PrefixValAddr: 'zrnvaloper',
    bech32PrefixValPub: 'zrnvaloperpub',
    bech32PrefixConsAddr: 'zrnvalcons',
    bech32PrefixConsPub: 'zrnvalconspub'
  },
  daemonName: 'zeroned',
  nodeHome: '$HOME/.zeroned',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uzrn',
        fixedMinGasPrice: 0.025,
        lowGasPrice: 0.025,
        averageGasPrice: 1,
        highGasPrice: 1.2,
        gasCosts: {
          cosmosSend: 200000
        }
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uzrn'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/cambridgetcg/zerone-core',
    language: {
      type: 'go',
      version: '1.24.0'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.15',
      repo: 'https://github.com/cosmos/cosmos-sdk'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.20',
      repo: 'https://github.com/cometbft/cometbft'
    },
    genesis: {
      name: 'zerone-1',
      genesisUrl: 'https://raw.githubusercontent.com/cambridgetcg/zerone-core/main/deploy/mainnet/artifacts/genesis.json'
    }
  },
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zerone/images/zrn.svg',
      theme: {
        circle: false
      }
    }],
  description: 'Zerone is a Cosmos SDK blockchain that records challenged agent work, knowledge, and provenance. ZRN is its native staking, governance, and fee token.',
  apis: {
    rpc: [{
        address: 'http://169.155.55.44:26657',
        provider: 'Zerone'
      }]
  },
  explorers: [{
      kind: 'Zerone Dashboard',
      url: 'https://zerone.ai/'
    }],
  keywords: [
    'ai',
    'agents',
    'knowledge',
    'provenance',
    'proof-of-truth'
  ]
};
export default info;