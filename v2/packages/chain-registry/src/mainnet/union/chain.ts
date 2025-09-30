import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'union',
  status: 'live',
  website: 'https://union.build/',
  networkType: 'mainnet',
  prettyName: 'Union',
  chainType: 'cosmos',
  chainId: 'union-1',
  bech32Prefix: 'union',
  daemonName: 'uniond',
  nodeHome: '$HOME/.union',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'au',
        fixedMinGasPrice: 100000000,
        lowGasPrice: 100000000,
        averageGasPrice: 100000000,
        highGasPrice: 200000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'au'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/unionlabs/union',
    recommendedVersion: 'v1.2.2',
    compatibleVersions: ['v1.2.2'],
    binaries: {
      "linux/amd64": 'https://github.com/unionlabs/union/releases/download/uniond%2Fv1.2.2/uniond-release-x86_64-linux',
      "linux/arm64": 'https://github.com/unionlabs/union/releases/download/uniond%2Fv1.2.2/uniond-release-aarch64-linux'
    },
    consensus: {
      type: 'cometbls',
      version: 'v1.0.1',
      repo: 'https://github.com/unionlabs/cometbls',
      tag: 'v1.0.1-cometbls'
    },
    genesis: {
      genesisUrl: 'https://rpc.union.build/genesis'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/unionlabs/cosmos-sdk',
      version: 'v0.50.13',
      tag: 'v0.50.13-cometblsv1'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/union/images/u.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/union/images/u.svg'
  },
  description: 'Union is the zero-knowledge (zk) interoperability network that functions as a settlement and liquidity layer for protocols and asset issuers.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.union.build',
        provider: 'Union'
      },
      {
        address: 'https://rpc-1.union.nodes.guru',
        provider: 'Nodes.Guru'
      },
      {
        address: 'https://rpc.lavenderfive.com/union',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://union-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://union-rpc.kingnodes.com',
        provider: 'Kingnodes 👑'
      },
      {
        address: 'https://union-rpc.stakeandrelax.net',
        provider: 'Stake&Relax'
      },
      {
        address: 'https://m-union-rpc.ruangnode.com:443',
        provider: 'ruangnode'
      }
    ],
    rest: [
      {
        address: 'https://rest.union.build',
        provider: 'Union'
      },
      {
        address: 'https://api-1.union.nodes.guru',
        provider: 'Nodes.Guru'
      },
      {
        address: 'https://rest.lavenderfive.com/union',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://union-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://union-rest.kingnodes.com',
        provider: 'Kingnodes 👑'
      },
      {
        address: 'https://union-api.stakeandrelax.net',
        provider: 'Stake&Relax'
      },
      {
        address: 'https://m-union-api.ruangnode.com:443',
        provider: 'ruangnode'
      }
    ],
    grpc: [
      {
        address: 'grpc.union.build:443',
        provider: 'Union'
      },
      {
        address: 'grpc-1.union.nodes.guru:443',
        provider: 'Nodes.Guru'
      },
      {
        address: 'union.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'union-grpc.polkachu.com:24690',
        provider: 'Polkachu'
      },
      {
        address: 'union-grpc.kingnodes.com:443',
        provider: 'Kingnodes 👑'
      },
      {
        address: 'union-grpc.stakeandrelax.net:24690',
        provider: 'Stake&Relax'
      },
      {
        address: 'm-union-grpc.ruangnode.com:14090',
        provider: 'ruangnode'
      }
    ]
  },
  explorers: [{
      kind: 'Ping.Pub',
      url: 'https://explorer.union.build/union',
      txPage: 'https://explorer.union.build/union/tx/${txHash}',
      accountPage: 'https://explorer.union.build/union/account/${accountAddress}'
    }, {
      kind: 'Ruangnode Explorer',
      url: 'https://explorer.ruangnode.com/dashboard/union',
      txPage: 'https://explorer.ruangnode.com/transactions/union?hash=${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/union/images/u.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/union/images/u.svg'
    }]
};
export default info;