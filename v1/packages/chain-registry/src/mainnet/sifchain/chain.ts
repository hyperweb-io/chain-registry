import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'sifchain',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://sifchain.finance/',
  pretty_name: 'Sifchain',
  chain_type: 'cosmos',
  chain_id: 'sifchain-1',
  bech32_prefix: 'sif',
  daemon_name: 'sifnoded',
  node_home: '$HOME/.sifnoded',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'rowan',
        low_gas_price: 1000000000000,
        average_gas_price: 1500000000000,
        high_gas_price: 2000000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'rowan'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/Sifchain/sifnode.git',
    recommended_version: 'v1.2.0-beta',
    compatible_versions: ['v1.2.0-beta'],
    binaries: {
      "linux/amd64": 'https://github.com/Sifchain/sifnode/releases/download/v1.2.0-beta/sifnoded-v1.2.0-beta-linux-amd64.tar.gz'
    },
    genesis: {
      genesis_url: 'https://github.com/Sifchain/networks/blob/master/betanet/sifchain-1/genesis.json.gz?raw=true'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://sifchain-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://sifchain-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://sifchain_mainnet_rpc.chain.whenmoonwhenlambo.money:443',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://sifchain-rpc.polkachu.com:443',
        provider: 'Polkachu'
      }
    ],
    rest: [
      {
        address: 'https://sifchain-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://sifchain-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://sifchain-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://sifchain.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://sifchain_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    grpc: [
      {
        address: 'sifchain-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'sifchain-grpc.polkachu.com:13290',
        provider: 'Polkachu'
      },
      {
        address: 'sifchain-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/sifchain',
      tx_page: 'https://ping.pub/sifchain/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/sifchain',
      tx_page: 'https://atomscan.com/sifchain/transactions/${txHash}',
      account_page: 'https://atomscan.com/sifchain/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/sifchain',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=sifchain&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=sifchain&addr=${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Sifchain',
      tx_page: 'https://explorer.stavr.tech/Sifchain/tx/${txHash}',
      account_page: 'https://explorer.stavr.tech/Sifchain/accounts/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/sifchain',
      tx_page: 'https://explorer.whenmoonwhenlambo.money/sifchain/tx/${txHash}',
      account_page: 'https://explorer.whenmoonwhenlambo.money/sifchain/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
    }],
  snapshots: [{
      url: 'https://polkachu.com/tendermint_snapshots/sifchain',
      type: 'pruned',
      compression: 'lz4',
      checksum_available: false,
      provider: 'Polkachu'
    }]
};
export default info;