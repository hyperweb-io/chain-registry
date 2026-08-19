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
    recommendedVersion: '2.0.2',
    compatibleVersions: [
      '2.0.0',
      '2.0.1',
      '2.0.2'
    ],
    consensus: {
      type: 'cometbft',
      version: '0.38.21',
      repo: 'https://github.com/cometbft/cometbft',
      tag: 'v0.38.21'
    },
    sdk: {
      type: 'cosmos',
      version: '0.53.5',
      repo: 'https://github.com/cosmos/cosmos-sdk',
      tag: 'v0.53.5-0.20251030204916-768cb210885c'
    },
    ibc: {
      type: 'go',
      version: '10.3.1',
      repo: 'https://github.com/cosmos/ibc-go',
      tag: 'v10.3.1-0.20250909102629-ed3b125c7b6f',
      icsEnabled: ['ics20-1']
    },
    language: {
      type: 'go',
      version: '1.24.0'
    },
    tag: 'v2.0.2'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gnodi/images/gnod.png'
    }],
  description: 'The Gnodi Blockchain is a community-governed, decentralized infrastructure that empowers individuals to own their digital identity and data. Guided by principles of autonomy, transparency, and equity, it bridges today\'s internet with a fair, participatory digital future.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.gnodi.zone:443',
        provider: 'Gnodi Team'
      },
      {
        address: 'https://rpc.gnodipowered.com',
        provider: 'Gnodi Powered',
        archive: true
      },
      {
        address: 'https://rpc-gnodi.vinjan-inc.com',
        provider: 'Vinjan.Inc'
      }
    ],
    rest: [
      {
        address: 'https://api.gnodi.zone:443',
        provider: 'Gnodi Team'
      },
      {
        address: 'https://api.gnodipowered.com',
        provider: 'Gnodi Powered',
        archive: true
      },
      {
        address: 'https://api-gnodi.vinjan-inc.com',
        provider: 'Vinjan.Inc'
      }
    ],
    grpc: [{
        address: 'grpc.gnodi.zone:443',
        provider: 'Gnodi Team'
      }, {
        address: 'grpc-native.gnodipowered.com:443',
        provider: 'Gnodi Powered',
        archive: true
      }],
    wss: [{
        address: 'wss://rpc.gnodipowered.com/websocket',
        provider: 'Gnodi Powered'
      }],
    evmHttpJsonrpc: [{
        address: 'https://evm.gnodipowered.com',
        provider: 'Gnodi Powered'
      }]
  },
  explorers: [
    {
      kind: 'Big Dipper',
      url: 'https://explore.gnodi.org/gnodi',
      txPage: 'https://explore.gnodi.org/gnodi/transactions',
      accountPage: 'https://explore.gnodi.org/gnodi/accounts/${accountAddress}'
    },
    {
      kind: 'Vinjan.Inc Explorer',
      url: 'https://explorer.vinjan-inc.com/gnodi',
      txPage: 'https://explorer.vinjan-inc.com/gnodi/tx/${txHash}',
      accountPage: 'https://explorer.vinjan-inc.com/gnodi/account/${accountAddress}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/gnodi',
      txPage: 'https://explorer.nodestake.org/gnodi/tx/${txHash}',
      accountPage: 'https://explorer.nodestake.org/gnodi/account/${accountAddress}'
    },
    {
      kind: 'GnodiScan',
      url: 'https://gnodiscanner.com',
      txPage: 'https://gnodiscanner.com/txs/${txHash}',
      accountPage: 'https://gnodiscanner.com/account/${accountAddress}',
      validatorPage: 'https://gnodiscanner.com/validators/${validatorAddress}',
      proposalPage: 'https://gnodiscanner.com/governance/${proposalId}',
      blockPage: 'https://gnodiscanner.com/blocks/${blockHeight}'
    },
    {
      kind: 'GnodiScan EVM',
      url: 'https://evm.gnodiscanner.com',
      txPage: 'https://evm.gnodiscanner.com/tx/${txHash}',
      accountPage: 'https://evm.gnodiscanner.com/address/${accountAddress}',
      blockPage: 'https://evm.gnodiscanner.com/block/${blockHeight}'
    }
  ]
};
export default info;