import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'celestiatestnet4',
  chainType: 'cosmos',
  chainId: 'mocha-5',
  preForkChainName: 'celestiatestnet3',
  prettyName: 'Mocha Testnet',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'celestia',
  daemonName: 'celestia-appd',
  nodeHome: '$HOME/.celestia-app',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'utia',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.01,
        averageGasPrice: 0.02,
        highGasPrice: 0.1
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'utia'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/celestiaorg/celestia-app',
    recommendedVersion: 'v9.0.6-mocha',
    compatibleVersions: ['v9.0.6-mocha'],
    binaries: {
      "linux/amd64": 'https://github.com/celestiaorg/celestia-app/releases/download/v9.0.6-mocha/celestia-app_Linux_x86_64.tar.gz',
      "linux/arm64": 'https://github.com/celestiaorg/celestia-app/releases/download/v9.0.6-mocha/celestia-app_Linux_arm64.tar.gz',
      "darwin/amd64": 'https://github.com/celestiaorg/celestia-app/releases/download/v9.0.6-mocha/celestia-app_Darwin_x86_64.tar.gz',
      "darwin/arm64": 'https://github.com/celestiaorg/celestia-app/releases/download/v9.0.6-mocha/celestia-app_Darwin_arm64.tar.gz'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.40.8',
      repo: 'https://github.com/celestiaorg/celestia-core',
      tag: 'v0.40.8'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/celestiaorg/networks/master/mocha-5/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/celestiaorg/cosmos-sdk',
      version: 'v0.52.8',
      tag: 'v0.52.8'
    },
    ibc: {
      type: 'go',
      repo: 'https://github.com/celestiaorg/ibc-go',
      version: 'v8.7.2',
      tag: 'v8.7.2'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-mocha.pops.one',
        provider: 'P-OPs'
      },
      {
        address: 'https://rpc-1.testnet.celestia.nodes.guru',
        provider: 'Nodes.Guru'
      },
      {
        address: 'https://rpc-2.testnet.celestia.nodes.guru',
        provider: 'Nodes.Guru'
      },
      {
        address: 'https://celestia-testnet-rpc.itrocket.net',
        provider: 'itrocket'
      }
    ],
    rest: [
      {
        address: 'https://api-mocha.pops.one',
        provider: 'P-OPs'
      },
      {
        address: 'https://api-1.testnet.celestia.nodes.guru',
        provider: 'Nodes.Guru'
      },
      {
        address: 'https://api-2.testnet.celestia.nodes.guru',
        provider: 'Nodes.Guru'
      },
      {
        address: 'https://celestia-testnet-api.itrocket.net',
        provider: 'itrocket'
      }
    ],
    grpc: [
      {
        address: 'grpc-mocha.pops.one:9090',
        provider: 'P-OPs'
      },
      {
        address: 'grpc-1.testnet.celestia.nodes.guru:10790',
        provider: 'Nodes.Guru'
      },
      {
        address: 'grpc-2.testnet.celestia.nodes.guru:10790',
        provider: 'Nodes.Guru'
      },
      {
        address: 'celestia-testnet-grpc.itrocket.net:443',
        provider: 'itrocket'
      }
    ]
  },
  explorers: [{
      kind: 'Valopers',
      url: 'https://testnet.celestia.valopers.com/',
      txPage: 'https://testnet.celestia.valopers.com/transactions/${txHash}',
      accountPage: 'https://testnet.celestia.valopers.com/account/${accountAddress}'
    }, {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.org/celestia-testnet',
      txPage: 'https://explorer.nodestake.org/celestia-testnet/tx/${txHash}'
    }]
};
export default info;