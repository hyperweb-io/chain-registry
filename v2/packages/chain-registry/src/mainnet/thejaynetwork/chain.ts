import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'thejaynetwork',
  chainType: 'cosmos',
  chainId: 'thejaynetwork',
  website: 'https://thejaynetwork.com',
  prettyName: 'The Jay Network',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'yjay',
  daemonName: 'jaynd',
  nodeHome: '$HOME/.jayn',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ujay',
        fixedMinGasPrice: 0.005,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ujay'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/bbtccore/thejaynetwork',
    recommendedVersion: 'v1.1.0',
    compatibleVersions: ['v1.1.0'],
    binaries: {
      "linux/amd64": 'https://github.com/bbtccore/thejaynetwork/releases/download/v1.1.0/jaynd-linux-amd64.tar.gz',
      "linux/arm64": 'https://github.com/bbtccore/thejaynetwork/releases/download/v1.1.0/jaynd-linux-arm64.tar.gz'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.21'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/bbtccore/thejaynetwork/master/genesis/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.53.6'
    },
    ibc: {
      type: 'go',
      version: 'v10.5.0'
    },
    cosmwasm: {
      version: 'v0.61.10',
      repo: 'https://github.com/CosmWasm/wasmd',
      tag: 'v0.61.10'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/thejaynetwork/images/jay.png'
  },
  description: 'The Jay Network is a Cosmos SDK-based blockchain with IBC interoperability, CosmWasm smart contracts, and cross-chain connectivity to Cosmos Hub, Celestia, and Injective.',
  apis: {
    rpc: [
      {
        address: 'https://thejaynetwork.com/rpc',
        provider: 'The Jay Network'
      },
      {
        address: 'http://152.53.195.74:26657',
        provider: 'The Jay Network (Sentry)'
      },
      {
        address: 'https://rpc-jay.onenov.xyz',
        provider: 'OneNov'
      }
    ],
    rest: [
      {
        address: 'https://thejaynetwork.com/rest',
        provider: 'The Jay Network'
      },
      {
        address: 'http://152.53.195.74:1317',
        provider: 'The Jay Network (Sentry)'
      },
      {
        address: 'https://api-jay.onenov.xyz',
        provider: 'OneNov'
      }
    ],
    grpc: [{
        address: '152.53.195.74:9090',
        provider: 'The Jay Network (Sentry)'
      }]
  },
  explorers: [{
      kind: 'JayScan',
      url: 'https://jayscan.thejaynetwork.com',
      txPage: 'https://jayscan.thejaynetwork.com/tx/${txHash}',
      accountPage: 'https://jayscan.thejaynetwork.com/account/${accountAddress}'
    }, {
      kind: 'Jay Network Explorer',
      url: 'https://jay-explorer.onenov.xyz',
      txPage: 'https://jay-explorer.onenov.xyz/transactions/${txHash}',
      accountPage: 'https://jay-explorer.onenov.xyz/accounts/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/thejaynetwork/images/jay.png'
    }]
};
export default info;