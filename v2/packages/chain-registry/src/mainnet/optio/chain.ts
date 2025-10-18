import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'optio',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.optio.community/',
  prettyName: 'Optio',
  chainType: 'cosmos',
  chainId: 'optio',
  bech32Prefix: 'optio',
  daemonName: 'optiod',
  nodeHome: '$HOME/.optio',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uOPT',
        fixedMinGasPrice: 1
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uOPT'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/OptioNetwork/optio',
    genesis: {
      name: 'v1',
      genesisUrl: 'https://raw.githubusercontent.com/OptioNetwork/mainnet/refs/heads/main/genesis.json'
    },
    recommendedVersion: '2.0.0',
    compatibleVersions: ['2.0.0'],
    consensus: {
      type: 'cometbft',
      version: '0.38.12',
      repo: 'https://github.com/cometbft/cometbft',
      tag: 'v0.38.12'
    },
    sdk: {
      type: 'cosmos',
      version: '0.50.12',
      repo: 'https://github.com/cosmos/cosmos-sdk',
      tag: 'v0.50.12'
    },
    ibc: {
      type: 'go',
      version: '8.5.1',
      repo: 'https://github.com/cosmos/ibc-go',
      tag: 'v8.5.1',
      icsEnabled: ['ics20-1']
    },
    language: {
      type: 'go',
      version: '1.23.1'
    },
    tag: 'v2.0.0'
  },
  images: [{
      imageSync: {
        chainName: 'optio',
        baseDenom: 'uOPT'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/optio/images/opt.png'
    }],
  description: 'Optio empowers people worldwide with decentralized tools for data ownership, fair rewards, and freedom of digital expression.',
  apis: {
    rpc: [{
        address: 'https://rpc.optio.zone:443',
        provider: 'Optio Team'
      }],
    rest: [{
        address: 'https://api.optio.zone:443',
        provider: 'Optio Team'
      }],
    grpc: [{
        address: 'grpc.optio.zone:443',
        provider: 'Optio Team'
      }]
  },
  explorers: [{
      kind: 'Big Dipper',
      url: 'https://optioscan.io',
      txPage: 'https://optioscan.io/optio/transactions',
      accountPage: 'https://optioscan.io/optio/accounts/${accountAddress}'
    }]
};
export default info;