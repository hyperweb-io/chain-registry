import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'pockettestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://www.pokt.network/',
  prettyName: 'Pocket Beta TestNet',
  chainType: 'cosmos',
  chainId: 'pocket-beta',
  bech32Prefix: 'pokt',
  daemonName: 'pocketd',
  nodeHome: '$HOME/.pocket',
  keyAlgos: ['secp256k1'],
  slip44: 118,
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
      genesisUrl: 'https://github.com/pokt-network/pocket-network-genesis/blob/master/shannon/testnet/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.13'
    },
    ibc: {
      type: 'go'
    },
    cosmwasm: {
      enabled: false
    },
    tag: 'v0.1.1'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pocket/images/pokt-icon.png'
    }, {
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pocket/images/pokt-icon.svg'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pocket/images/pokt-icon.png'
  },
  apis: {
    rpc: [{
        address: 'https://shannon-testnet-grove-rpc.beta.poktroll.com',
        provider: 'Grove'
      }],
    rest: [{
        address: 'https://shannon-testnet-grove-api.beta.poktroll.com',
        provider: 'Grove'
      }]
  },
  explorers: [{
      kind: '🔍 Pocket Explorer by Soothe 🔎',
      url: 'https://shannon-beta.trustsoothe.io',
      txPage: 'https://shannon-beta.trustsoothe.io/tx/${txHash}',
      accountPage: 'https://shannon-beta.trustsoothe.io/accounts/${accountAddress}'
    }, {
      kind: '🗺 Pocket Explorer by Stakenodes.org 🗺',
      url: 'https://shannon.beta.testnet.pokt.network',
      txPage: 'https://shannon.beta.testnet.pokt.network/tx/${txHash}',
      accountPage: 'https://shannon.beta.testnet.pokt.network/poktroll/account/${accountAddress}'
    }],
  keywords: [
    'rpc',
    'api',
    'modular',
    'data'
  ]
};
export default info;