import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'gnodi',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://gnodiblockchain.org/',
  prettyName: 'Gnodi',
  chainType: 'cosmos',
  chainId: 'gnodi',
  bech32Prefix: 'gnodi',
  daemonName: 'gnodid',
  nodeHome: '$HOME/.gnodi',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uGNOD',
        fixedMinGasPrice: 1,
        lowGasPrice: 1,
        averageGasPrice: 1.5,
        highGasPrice: 2
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uGNOD'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/gnodi-network/gnodi',
    genesis: {
      name: 'v1',
      genesisUrl: 'https://raw.githubusercontent.com/gnodi-network/genesis-mainnet/refs/heads/main/genesis.json'
    },
    recommendedVersion: '1.0.1',
    compatibleVersions: ['1.0.1'],
    consensus: {
      type: 'cometbft',
      version: '0.38.17',
      repo: 'https://github.com/cometbft/cometbft',
      tag: 'v0.38.17'
    },
    sdk: {
      type: 'cosmos',
      version: '0.53.3',
      repo: 'https://github.com/cosmos/cosmos-sdk',
      tag: 'v0.53.3'
    },
    ibc: {
      type: 'go',
      version: '10.2.0',
      repo: 'https://github.com/cosmos/ibc-go',
      tag: 'v10.2.0',
      icsEnabled: ['ics20-1']
    },
    language: {
      type: 'go',
      version: '1.24.0'
    },
    tag: 'v1.0.1'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gnodi/images/gnod.png'
    }],
  description: 'The Gnodi Blockchain is a community-governed, decentralized infrastructure that empowers individuals to own their digital identity and data. Guided by principles of autonomy, transparency, and equity, it bridges today’s internet with a fair, participatory digital future.',
  apis: {
    rpc: [{
        address: 'https://rpc.gnodi.zone:443',
        provider: 'Gnodi Team'
      }],
    rest: [{
        address: 'https://api.gnodi.zone:443',
        provider: 'Gnodi Team'
      }],
    grpc: [{
        address: 'grpc.gnodi.zone:443',
        provider: 'Gnodi Team'
      }]
  },
  explorers: [{
      kind: 'Big Dipper',
      url: 'https://explore.gnodi.org/gnodi',
      txPage: 'https://explore.gnodi.org/gnodi/transactions',
      accountPage: 'https://explore.gnodi.org/gnodi/accounts/${accountAddress}'
    }]
};
export default info;