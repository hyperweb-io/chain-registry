import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'babylon',
  status: 'live',
  website: 'https://babylonlabs.io/',
  network_type: 'mainnet',
  pretty_name: 'Babylon Genesis',
  chain_type: 'cosmos',
  chain_id: 'bbn-1',
  bech32_prefix: 'bbn',
  slip44: 118,
  daemon_name: 'babylond',
  node_home: '$HOME/.babylond',
  key_algos: ['secp256k1'],
  fees: {
    fee_tokens: [{
        denom: 'ubbn',
        low_gas_price: 0.007,
        average_gas_price: 0.007,
        high_gas_price: 0.01
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ubbn'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/babylonlabs-io/babylon',
    recommended_version: 'v1.0.1',
    compatible_versions: ['v1.0.0', 'v1.0.1'],
    genesis: {
      genesis_url: 'https://github.com/babylonlabs-io/networks/blob/main/bbn-1/network-artifacts/genesis.json'
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
      ics_enabled: ['ics20-1']
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
  logo_URIs: {
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
      },
      {
        address: 'https://babylon-mainnet-rpc.shazoe.xyz',
        provider: 'Shazoe'
      },
      {
        address: 'https://babylon.rpc.nodeshub.online:443',
        provider: 'NodesHub'
      },
      {
        address: 'https://babylon-mainnet-rpc.shazoes.xyz',
        provider: 'Shazoes'
      },
      {
        address: 'https://rpc.babylon.validatus.com',
        provider: 'Validatus'
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
      },
      {
        address: 'https://babylon-mainnet-api.shazoe.xyz',
        provider: 'Shazoe'
      },
      {
        address: 'https://babylon.api.nodeshub.online',
        provider: 'NodesHub'
      },
      {
        address: 'https://babylon-mainnet-api.shazoes.xyz',
        provider: 'Shazoes'
      },
      {
        address: 'https://api.babylon.validatus.com',
        provider: 'Validatus'
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
      },
      {
        address: 'babylon-mainnet-grpc.shazoe.xyz:30190',
        provider: 'Shazoe'
      },
      {
        address: 'babylon.grpc.nodeshub.online',
        provider: 'NodesHub'
      },
      {
        address: 'babylon-mainnet-grpc.shazoes.xyz:30190',
        provider: 'Shazoes'
      },
      {
        address: 'grpc.babylon.validatus.com:443',
        provider: 'Validatus'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/babylon',
      tx_page: 'https://www.mintscan.io/babylon/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/babylon/accounts/${accountAddress}'
    },
    {
      kind: 'Nodes Guru',
      url: 'https://babylon.explorers.guru/',
      tx_page: 'https://babylon.explorers.guru/transaction/${txHash}',
      account_page: 'https://babylon.explorers.guru/account/${accountAddress}'
    },
    {
      kind: 'NodesHub',
      url: 'https://explorer.nodeshub.online/babylon/',
      tx_page: 'https://explorer.nodeshub.online/babylon/tx/${txHash}',
      account_page: 'https://explorer.nodeshub.online/babylon/accounts/${accountAddress}'
    }
  ],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/logo.svg'
    }],
  description: 'Babylon Genesis enables Bitcoin tokens to be used as an economic security layer for Proof of Stake (PoS) systems without relying on bridges, wrapping, or third-party custody.'
};
export default info;