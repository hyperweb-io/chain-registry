import { Chain } from '@chain-registry/types';
const chain: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'juno',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.junonetwork.io/',
  pretty_name: 'Juno',
  chain_type: 'cosmos',
  chain_id: 'juno-1',
  bech32_prefix: 'juno',
  daemon_name: 'junod',
  node_home: '$HOME/.juno',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ujuno',
        fixed_min_gas_price: 0.075,
        low_gas_price: 0.075,
        average_gas_price: 0.1,
        high_gas_price: 0.125
      }, {
        denom: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
        fixed_min_gas_price: 0.003,
        low_gas_price: 0.003,
        average_gas_price: 0.0035,
        high_gas_price: 0.004
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ujuno'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/CosmosContracts/juno',
    recommended_version: 'v27.0.0',
    compatible_versions: ['v27.0.0'],
    binaries: {
      "linux/amd64": 'https://github.com/CosmosContracts/juno/releases/download/v27.0.0/junod'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.37.8'
    },
    genesis: {
      genesis_url: 'https://download.dimi.sh/juno-phoenix2-genesis.tar.gz'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.47.15'
    },
    ibc: {
      type: 'go',
      version: 'v7.6.0'
    },
    cosmwasm: {
      version: 'v0.46.0',
      enabled: true
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
  },
  description: 'Juno is a completely community owned and operated smart contract platform.',
  apis: {
    rpc: [
      {
        address: 'https://rpc-juno.itastakers.com',
        provider: 'itastakers'
      },
      {
        address: 'https://juno.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://juno-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/juno',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://juno-rpc.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://juno-rpc.stakeandrelax.net',
        provider: 'Stake&Relax Validator 🦥'
      },
      {
        address: 'https://rpc-juno-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://juno-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://juno-rpc.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://rpc.juno.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://juno-rpc.cogwheel.zone',
        provider: 'Cogwheel'
      },
      {
        address: 'https://juno.declab.pro:26610',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'https://juno-rpc.chainroot.io',
        provider: 'Chainroot'
      },
      {
        address: 'https://juno.api.pocket.network',
        provider: 'Pocket Network'
      }
    ],
    rest: [
      {
        address: 'https://rest.lavenderfive.com:443/juno',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://juno.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://juno-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://juno-api.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://juno-api.stakeandrelax.net',
        provider: 'Stake&Relax Validator 🦥'
      },
      {
        address: 'https://api-juno-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://juno-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://juno-api.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://api.juno.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://juno-api.cogwheel.zone',
        provider: 'Cogwheel'
      },
      {
        address: 'https://juno.declab.pro:443',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'https://juno-api.chainroot.io',
        provider: 'Chainroot'
      },
      {
        address: 'https://juno.api.pocket.network',
        provider: 'Pocket Network'
      }
    ],
    grpc: [
      {
        address: 'juno-grpc.polkachu.com:12690',
        provider: 'Polkachu'
      },
      {
        address: 'juno.grpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'juno-grpc.stakeandrelax.net:12690',
        provider: 'Stake&Relax Validator 🦥'
      },
      {
        address: 'juno.grpc.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'juno.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'grpc-juno-01.stakeflow.io:2302',
        provider: 'Stakeflow'
      },
      {
        address: 'juno-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'juno-grpc.cogwheel.zone:443',
        provider: 'Cogwheel'
      },
      {
        address: 'juno-grpc.chainroot.io:443',
        provider: 'Chainroot'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/juno',
      tx_page: 'https://ezstaking.app/juno/txs/${txHash}',
      account_page: 'https://ezstaking.app/juno/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/juno',
      tx_page: 'https://ping.pub/juno/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/juno',
      tx_page: 'https://explorer.stavr.tech/juno/transactions/${txHash}',
      account_page: 'https://explorer.stavr.tech/juno/accounts/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/juno',
      account_page: 'https://stakeflow.io/juno/accounts/${accountAddress}'
    },
    {
      kind: 'Decloud Nodes Lab',
      url: 'https://explorer.declab.pro/Juno',
      tx_page: 'https://explorer.declab.pro/Juno/tx/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/juno',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=juno&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=juno&addr=${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/juno',
      tx_page: 'https://atomscan.com/juno/transactions/${txHash}',
      account_page: 'https://atomscan.com/juno/accounts/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/juno',
      tx_page: 'https://explorer.tcnetwork.io/juno/transaction/${txHash}'
    },
    {
      kind: 'Stake Hub by Kleomedes',
      url: 'https://www.stake-hub.xyz/juno'
    },
    {
      kind: 'Valopers',
      url: 'https://juno.valopers.com/',
      tx_page: 'https://juno.valopers.com/transactions/${txHash}',
      account_page: 'https://juno.valopers.com/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
    }]
};
export default chain;
    