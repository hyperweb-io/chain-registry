import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'xion',
  chain_type: 'cosmos',
  chain_id: 'xion-mainnet-1',
  pretty_name: 'Xion',
  website: 'https://xion.burnt.com',
  network_type: 'mainnet',
  status: 'live',
  bech32_prefix: 'xion',
  bech32_config: {
    bech32PrefixAccAddr: 'xion',
    bech32PrefixAccPub: 'xionpub',
    bech32PrefixValAddr: 'xionvaloper',
    bech32PrefixValPub: 'xionvaloperpub',
    bech32PrefixConsAddr: 'xionvalcons',
    bech32PrefixConsPub: 'xionvalconspub'
  },
  daemon_name: 'xiond',
  node_home: '$HOME/.xiond',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uxion',
        fixed_min_gas_price: 0.001,
        low_gas_price: 0.001,
        average_gas_price: 0.001,
        high_gas_price: 0.01
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uxion'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/burnt-labs/xion',
    tag: 'v17.0.0',
    recommended_version: 'v17.0.0',
    language: {
      type: 'go',
      version: 'v1.23'
    },
    binaries: {
      "darwin/amd64": 'https://github.com/burnt-labs/xion/releases/download/v17.0.0/xiond_17.0.0_darwin_amd64.zip?checksum=sha256:f8fe47d8a9f831c91c233e6fc757d2c236364d805905df207aa197a53628e06b',
      "darwin/arm64": 'https://github.com/burnt-labs/xion/releases/download/v17.0.0/xiond_17.0.0_darwin_arm64.zip?checksum=sha256:fa15044d4faecf0370cd0efad5fd1095ee7b4bdeb2416cf7b9c18b9cd7422638',
      "linux/amd64": 'https://github.com/burnt-labs/xion/releases/download/v17.0.0/xiond_17.0.0_linux_amd64.zip?checksum=sha256:6ec3066e973334e019d66eee77f0557044eb9e7ab723626b66ec88ac11c90d29',
      "linux/arm64": 'https://github.com/burnt-labs/xion/releases/download/v17.0.0/xiond_17.0.0_linux_arm64.zip?checksum=sha256:4e85aa63362f983c86c504f1902d9b30c266449eb6c4263394d0b9616a65f086'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.12'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.17'
    },
    cosmwasm: {
      version: 'v0.54.0',
      enabled: true
    },
    ibc: {
      type: 'go',
      version: 'v8.6.1'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/burnt-labs/burnt-networks/main/mainnets/xion-mainnet-1/genesis.json'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.xion-mainnet-1.burnt.com:443',
        provider: '🔥BurntLabs🔥'
      },
      {
        address: 'https://xion-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc-burnt.imperator.co:443',
        provider: 'Imperator.co'
      },
      {
        address: 'https://xion-rpc.polkachu.com:443',
        provider: 'Polkachu'
      },
      {
        address: 'https://xion-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc.xion.nodestake.org:443',
        provider: 'NodeStake'
      },
      {
        address: 'https://xion-rpc.kingnodes.com:443',
        provider: 'kingnodes 👑'
      }
    ],
    rest: [
      {
        address: 'https://api.xion-mainnet-1.burnt.com',
        provider: '🔥BurntLabs🔥'
      },
      {
        address: 'https://xion-api.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://lcd-burnt.imperator.co',
        provider: 'Imperator.co'
      },
      {
        address: 'https://xion-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://xion-mainnet-lcd.autostake.com',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://api.xion.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://xion-rest.kingnodes.com',
        provider: 'kingnodes 👑'
      }
    ],
    grpc: [
      {
        address: 'grpc.xion-mainnet-1.burnt.com:443',
        provider: '🔥BurntLabs🔥'
      },
      {
        address: 'xion-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'xion-grpc.polkachu.com:22390',
        provider: 'Polkachu'
      },
      {
        address: 'xion-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc.xion.nodestake.org:443',
        provider: 'NodeStake'
      },
      {
        address: 'xion-grpc.kingnodes.com:443',
        provider: 'kingnodes 👑'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/xion',
      tx_page: 'https://www.mintscan.io/xion/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/xion/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.burnt.com/xion-mainnet-1',
      tx_page: 'https://explorer.burnt.com/xion-mainnet-1/tx/${txHash}',
      account_page: 'https://explorer.burnt.com/xion-mainnet-1/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/xion',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=xion&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=xion&addr=${accountAddress}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/xion',
      tx_page: 'https://explorer.nodestake.org/xion/tx/${txHash}',
      account_page: 'https://explorer.nodestake.org/xion/account/${accountAddress}'
    },
    {
      kind: 'Nodes.Guru',
      url: 'https://xion.explorers.guru',
      tx_page: 'https://xion.explorers.guru/transactions/${txHash}',
      account_page: 'https://xion.explorers.guru//account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt.png'
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt.png'
  },
  description: 'XION is the first walletless L1 blockchain purpose built for consumer adoption through chain abstraction.',
  keywords: [
    'xion',
    'burnt',
    'mainnet'
  ]
};
export default info;