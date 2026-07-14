import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'chihuahua',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://chihuahua.wtf/',
  pretty_name: 'Chihuahua',
  chain_type: 'cosmos',
  chain_id: 'chihuahua-1',
  bech32_prefix: 'chihuahua',
  daemon_name: 'chihuahuad',
  node_home: '$HOME/.chihuahuad',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uhuahua',
        fixed_min_gas_price: 0,
        low_gas_price: 500,
        average_gas_price: 1250,
        high_gas_price: 2000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uhuahua'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/ChihuahuaChain/chihuahua/',
    recommended_version: 'v7.0.2',
    compatible_versions: ['v7.0.2'],
    consensus: {
      type: 'cometbft',
      version: 'v0.37.4'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/ChihuahuaChain/chihuahua/main/mainnet/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.47.8'
    },
    ibc: {
      type: 'go',
      version: 'v7.4.0'
    },
    cosmwasm: {
      version: 'v0.41.0',
      path: '$HOME/.chihuahuad/data/wasm',
      enabled: true
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.chihuahua.wtf',
        provider: 'Chihuahua'
      },
      {
        address: 'https://chihua.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/chihuahua',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc.huahua.bh.rocks',
        provider: 'BlockHunters 🎯'
      },
      {
        address: 'https://chihuahua-rpc.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://rpc-chihuahua.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://chihuahua-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://chihuahua-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rpc.chihuahua.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://chihuahua.rpc.nodeshub.online:443',
        provider: 'NodesHub'
      },
      {
        address: 'https://chihuahua-rpc.chainroot.io',
        provider: 'Chainroot'
      },
      {
        address: 'https://chihuahua.api.pocket.network',
        provider: 'Pocket Network'
      },
      {
        address: 'https://chihuahua-rpc.polkachu.com:443',
        provider: 'Polkachu'
      }
    ],
    rest: [
      {
        address: 'https://api.chihuahua.wtf',
        provider: 'Chihuahua'
      },
      {
        address: 'https://chihua.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://chihuahua-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rest.lavenderfive.com:443/chihuahua',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://chihuahua-api.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://api-chihuahua.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://chihuahua-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://chihuahua-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://api.chihuahua.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://chihuahua.api.nodeshub.online:443',
        provider: 'NodesHub'
      },
      {
        address: 'https://chihuahua-api.chainroot.io',
        provider: 'Chainroot'
      },
      {
        address: 'https://chihuahua.api.pocket.network',
        provider: 'Pocket Network'
      }
    ],
    grpc: [
      {
        address: 'chihuahua-grpc.polkachu.com:12990',
        provider: 'Polkachu'
      },
      {
        address: 'chihuahua.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'chihua.grpc.m.stavr.tech:108',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'grpc-chihuahua.cosmos-spaces.cloud:2290',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'chihuahua-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'chihuahua-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'grpc.chihuahua.validatus.com:443',
        provider: 'Validatus'
      },
      {
        address: 'chihuahua.grpc.nodeshub.online',
        provider: 'Nodes Hub'
      },
      {
        address: 'chihuahua-grpc.chainroot.io:443',
        provider: 'Chainroot'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/chihuahua',
      tx_page: 'https://ping.pub/chihuahua/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Chihua-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Chihua-Mainnet/tx/${txHash}'
    },
    {
      kind: 'mintscan',
      url: 'https://mintscan.io/chihuahua',
      tx_page: 'https://mintscan.io/chihuahua/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/chihuahua/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/chihuahua',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=chihuahua&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=chihuahua&addr=${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/chihuahua',
      tx_page: 'https://atomscan.com/chihuahua/transactions/${txHash}',
      account_page: 'https://atomscan.com/chihuahua/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/chihuahua',
      tx_page: 'https://ezstaking.app/chihuahua/txs/${txHash}',
      account_page: 'https://ezstaking.app/chihuahua/account/${accountAddress}'
    },
    {
      kind: 'NodesHub',
      url: 'https://explorer.nodeshub.online/chihuahua/',
      tx_page: 'https://explorer.nodeshub.online/chihuahua/tx/${txHash}',
      account_page: 'https://explorer.nodeshub.online/chihuahua/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
    }],
  snapshots: [{
      url: 'https://polkachu.com/tendermint_snapshots/chihuahua',
      type: 'pruned',
      compression: 'lz4',
      checksum_available: false,
      provider: 'Polkachu'
    }]
};
export default info;