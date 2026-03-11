import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'pocket',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://pocket.network/',
  prettyName: 'Pocket Network',
  chainType: 'cosmos',
  chainId: 'pocket',
  bech32Prefix: 'pokt',
  daemonName: 'pocketd',
  nodeHome: '$HOME/.pocket',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  description: 'Pocket Network is a decentralized infrastructure protocol that incentivizes a global network of node operators to provide reliable and cost-effective data access for applications across multiple platforms, including blockchains, AI services, and other APIs.',
  fees: {
    feeTokens: [{
        denom: 'upokt',
        fixedMinGasPrice: 0.001,
        lowGasPrice: 0.001,
        averageGasPrice: 0.002,
        highGasPrice: 0.0025
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'upokt'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/pokt-network/poktroll',
    recommendedVersion: 'v0.1.1',
    compatibleVersions: ['v0.1.1'],
    binaries: {
      "linux/amd64": 'https://github.com/pokt-network/poktroll/releases/download/v0.1.1/pocket_linux_amd64.tar.gz',
      "linux/arm64": 'https://github.com/pokt-network/poktroll/releases/download/v0.1.1/pocket_linux_arm64.tar.gz',
      "darwin/amd64": 'https://github.com/pokt-network/poktroll/releases/download/v0.1.1/pocket_darwin_amd64.tar.gz',
      "darwin/arm64": 'https://github.com/pokt-network/poktroll/releases/download/v0.1.1/pocket_darwin_arm64.tar.gz'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.12'
    },
    genesis: {
      name: 'v0.1.1',
      genesisUrl: 'https://raw.githubusercontent.com/pokt-network/pocket-network-genesis/refs/heads/master/shannon/mainnet/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.13'
    },
    ibc: {
      type: 'go',
      version: 'v8.7.0'
    },
    cosmwasm: {
      enabled: false
    },
    tag: 'v0.1.1'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pocket/images/pokt-icon.png',
      theme: {
        circle: true
      }
    }, {
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pocket/images/pokt-icon.svg',
      theme: {
        circle: true
      }
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pocket/images/pokt-icon.png'
  },
  apis: {
    rpc: [
      {
        address: 'https://sauron-rpc.infra.pocket.network:443',
        provider: 'Pocket Network'
      },
      {
        address: 'https://pocket.api.pocket.network:443',
        provider: 'Pocket Network'
      },
      {
        address: 'https://rpc-pocket.blockval.io:443',
        provider: 'Blockval'
      },
      {
        address: 'https://pocket-rpc.polkachu.com:443',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc.pocket.chaintools.tech:443',
        provider: 'ChainTools'
      }
    ],
    rest: [
      {
        address: 'https://sauron-api.infra.pocket.network:443',
        provider: 'Pocket Network'
      },
      {
        address: 'https://pocket.api.pocket.network:443',
        provider: 'Pocket Network'
      },
      {
        address: 'https://api-pocket.blockval.io:443',
        provider: 'Blockval'
      },
      {
        address: 'https://pocket-api.polkachu.com:443',
        provider: 'Polkachu'
      },
      {
        address: 'https://api.pocket.chaintools.tech:443',
        provider: 'ChainTools'
      }
    ]
  },
  explorers: [
    {
      kind: '🔍 Pocket Explorer by Soothe 🔎',
      url: 'https://shannon.trustsoothe.io',
      txPage: 'https://shannon.trustsoothe.io/tx/${txHash}',
      accountPage: 'https://shannon.trustsoothe.io/accounts/${accountAddress}'
    },
    {
      kind: '🗺 Pocket Explorer by Stakenodes.org 🗺',
      url: 'https://shannon.pokt.network',
      txPage: 'https://shannon.pokt.network/tx/${txHash}',
      accountPage: 'https://shannon.pokt.network/poktroll/account/${accountAddress}'
    },
    {
      kind: '🗺 Ping Pub fork Explorer by Blockval',
      url: 'https://explorer.blockval.io/pocket',
      txPage: 'https://explorer.blockval.io/pocket/tx/${txHash}',
      accountPage: 'https://explorer.blockval.io/pocket/account/${accountAddress}'
    }
  ],
  keywords: [
    'rpc',
    'api',
    'modular',
    'data'
  ]
};
export default info;