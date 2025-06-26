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
    tag: 'v19.0.2',
    recommended_version: 'v19.0.2',
    language: {
      type: 'go',
      version: 'v1.23'
    },
    binaries: {
      "darwin/amd64": 'https://github.com/burnt-labs/xion/releases/download/v19.0.2/xiond_19.0.2_darwin_amd64.tar.gz?checksum=sha256:edda13aec2274f1eceb933874a885d055b14acbbe0de21ba61ed9c25c64813d6',
      "darwin/arm64": 'https://github.com/burnt-labs/xion/releases/download/v19.0.2/xiond_19.0.2_darwin_arm64.tar.gz?checksum=sha256:7b94d2fdf1baa1d3dff4f947858a2bac684257be27f8bf179fb973ee8dd4fdb8',
      "linux/amd64": 'https://github.com/burnt-labs/xion/releases/download/v19.0.2/xiond_19.0.2_linux_amd64.tar.gz?checksum=sha256:6072ce81d08f77f98e2d2ae7726007eca18579ea2b1690b5f76b4df782690dcb',
      "linux/arm64": 'https://github.com/burnt-labs/xion/releases/download/v19.0.2/xiond_19.0.2_linux_arm64.tar.gz?checksum=sha256:0a55360653b596da5ace43c3b4a3fef6c9785bfe0e73405f591768b449af0e70'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.53.0'
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
      version: 'v8.7.0'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/burnt-labs/xion-mainnet-1/main/config/genesis.json'
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
      kind: 'Chainroot',
      url: 'https://explorer.chainroot.io/xion',
      tx_page: 'https://explorer.chainroot.io/xion/transactions/${txHash}',
      account_page: 'https://explorer.chainroot.io/xion/accounts/${accountAddress}'
    },
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