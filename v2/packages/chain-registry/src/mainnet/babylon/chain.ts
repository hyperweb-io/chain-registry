import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'babylon',
  status: 'live',
  website: 'https://babylonlabs.io/',
  networkType: 'mainnet',
  prettyName: 'Babylon Genesis',
  chainType: 'cosmos',
  chainId: 'bbn-1',
  bech32Prefix: 'bbn',
  slip44: 118,
  daemonName: 'babylond',
  nodeHome: '$HOME/.babylond',
  keyAlgos: ['secp256k1'],
  fees: {
    feeTokens: [{
        denom: 'ubbn',
        lowGasPrice: 0.007,
        averageGasPrice: 0.007,
        highGasPrice: 0.01
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ubbn'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/babylonlabs-io/babylon',
    recommendedVersion: 'v1.0.1',
    compatibleVersions: ['v1.0.0', 'v1.0.1'],
    genesis: {
      genesisUrl: 'https://github.com/babylonlabs-io/networks/blob/main/bbn-1/network-artifacts/genesis.json'
    },
    consensus: {
      type: 'cometbft',
      repo: 'https://github.com/cometbft/cometbft',
      version: 'v0.38.17',
      tag: 'v0.38.17'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/cosmos/cosmos-sdk',
      version: 'v0.50.12',
      tag: 'v0.50.12'
    },
    ibc: {
      type: 'go',
      repo: 'https://github.com/cosmos/ibc-go',
      version: 'v8.7.0',
      tag: 'v8.7.0',
      icsEnabled: ['ics20-1']
    },
    cosmwasm: {
      version: 'v0.54.0',
      repo: 'https://github.com/CosmWasm/wasmd',
      tag: 'v0.54.0',
      enabled: true
    },
    language: {
      type: 'go',
      version: '1.23.1'
    }
  },
  logoURIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/logo.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://babylon.nodes.guru/rpc',
        provider: 'Nodes.Guru'
      },
      {
        address: 'https://babylon-archive.nodes.guru/rpc',
        provider: 'Nodes.Guru'
      },
      {
        address: 'https://babylon-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://babylon-archive-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://babylon-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://babylon-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://community.nuxian-node.ch:6797/babylon/trpc',
        provider: 'PRO Delegators'
      }
    ],
    rest: [
      {
        address: 'https://babylon.nodes.guru/api',
        provider: 'Nodes.Guru'
      },
      {
        address: 'https://babylon-archive.nodes.guru/api',
        provider: 'Nodes.Guru'
      },
      {
        address: 'https://babylon-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://babylon-archive-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://babylon-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://babylon-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://community.nuxian-node.ch:6797/babylon/crpc',
        provider: 'PRO Delegators'
      }
    ],
    grpc: [
      {
        address: 'babylon.nodes.guru:443/grpc',
        provider: 'Nodes.Guru'
      },
      {
        address: 'babylon-archive.nodes.guru:443/grpc',
        provider: 'Nodes.Guru'
      },
      {
        address: 'babylon-grpc.polkachu.com:20690',
        provider: 'Polkachu'
      },
      {
        address: 'babylon-archive-grpc.polkachu.com:20690',
        provider: 'Polkachu'
      },
      {
        address: 'babylon-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'babylon-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ]
  },
  explorers: [{
      kind: 'mintscan',
      url: 'https://www.mintscan.io/babylon',
      txPage: 'https://www.mintscan.io/babylon/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/babylon/accounts/${accountAddress}'
    }, {
      kind: 'Nodes Guru',
      url: 'https://babylon.explorers.guru/',
      txPage: 'https://babylon.explorers.guru/transaction/${txHash}',
      accountPage: 'https://babylon.explorers.guru/account/${accountAddress}'
    }],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/logo.svg'
    }],
  description: 'Babylon Genesis enables Bitcoin tokens to be used as an economic security layer for Proof of Stake (PoS) systems without relying on bridges, wrapping, or third-party custody.'
};
export default info;