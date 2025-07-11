import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'sge',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'SGE',
  chain_type: 'cosmos',
  chain_id: 'sgenet-1',
  bech32_prefix: 'sge',
  daemon_name: 'sged',
  node_home: '$HOME/.sge',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'usge',
        fixed_min_gas_price: 0.001,
        low_gas_price: 0.1,
        average_gas_price: 0.25,
        high_gas_price: 0.5
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'usge'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/sge-network/sge',
    recommended_version: 'v1.7.2',
    compatible_versions: ['v1.7.2'],
    consensus: {
      type: 'cometbft',
      version: 'v0.37.5'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/sge-network/networks/master/mainnet/sgenet-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/sge-network/cosmos-sdk',
      version: 'v0.47.9',
      tag: 'v0.47.9-0.20240409081440-054c8c413d45'
    },
    ibc: {
      type: 'go',
      version: 'v7.4.0'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.lavenderfive.com:443/sge',
        provider: 'Lavenderfive'
      },
      {
        address: 'https://sge-rpc.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc.sge.nodestake.org/',
        provider: 'NodeStake'
      },
      {
        address: 'https://rpc.sge.roomit.xyz/',
        provider: 'Roomit'
      },
      {
        address: 'https://sge.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc-sge.nodeist.net/',
        provider: 'Nodeist'
      },
      {
        address: 'https://sge-rpc.ramuchi.tech',
        provider: 'ramuchi.tech'
      },
      {
        address: 'https://sge-rpc.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://rpc.sge.tcnetwork.io',
        provider: 'TC Network'
      },
      {
        address: 'https://sge-rpc.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://mainnet-sge-rpc.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://sge-rpc.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://sge_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    rest: [
      {
        address: 'https://rest.lavenderfive.com:443/sge',
        provider: 'Lavenderfive'
      },
      {
        address: 'https://sge-api.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://api.sge.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://api-sge.nodeist.net/',
        provider: 'Nodeist'
      },
      {
        address: 'https://sge.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://sge-api.ramuchi.tech/',
        provider: 'ramuchi.tech'
      },
      {
        address: 'https://sge-rest.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://rest.sge.tcnetwork.io',
        provider: 'TC Network'
      },
      {
        address: 'https://sge-api.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://mainnet-sge-api.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://sge-api.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://api.sge.roomit.xyz/',
        provider: 'Roomit'
      },
      {
        address: 'https://sge_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    grpc: [
      {
        address: 'sge.lavenderfive.com:443',
        provider: 'Lavenderfive'
      },
      {
        address: 'https://grpc.sge.nodestake.org:443',
        provider: 'Nodestake'
      },
      {
        address: 'https://grpc-sge.nodeist.net/',
        provider: 'Nodeist'
      },
      {
        address: 'https://sge-grpc.ramuchi.tech:443',
        provider: 'ramuchi.tech'
      },
      {
        address: 'http://sge.grpc.m.stavr.tech:543',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'sge-grpc.stakerhouse.com:443',
        provider: 'StakerHouse'
      },
      {
        address: 'https://sge-grpc.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'mainnet-sge.konsortech.xyz:22090',
        provider: 'KonsorTech'
      },
      {
        address: 'sge-grpc.genznodes.dev:5090',
        provider: 'genznodes'
      },
      {
        address: 'grpc.sge.roomit.xyz:8443',
        provider: 'Roomit'
      }
    ]
  },
  explorers: [
    {
      kind: 'Chainroot',
      url: 'https://explorer.chainroot.io/sge',
      tx_page: 'https://explorer.chainroot.io/sge/transactions/${txHash}',
      account_page: 'https://explorer.chainroot.io/sge/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://blockexplorer.sgenetwork.io/sge',
      tx_page: 'https://blockexplorer.sgenetwork.io/sge/tx/${txHash}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/sge',
      tx_page: 'https://explorer.nodestake.org/sge/tx/${txHash}'
    },
    {
      kind: 'stakerhouse',
      url: 'https://cosmotracker.com/sge',
      tx_page: 'https://cosmotracker.com/sge/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Sge-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Sge-Mainnet/transaction/${txHash}',
      account_page: 'https://explorer.stavr.tech/Sge-Mainnet/account/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/sge',
      tx_page: 'https://explorer.tcnetwork.io/sge/transaction/${txHash}',
      account_page: 'https://explorer.tcnetwork.io/sge/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/sge',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=sge&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=sge&addr=${accountAddress}'
    },
    {
      kind: 'KonsorTech',
      url: 'https://explorer.konsortech.xyz/sge',
      tx_page: 'https://explorer.konsortech.xyz/sge/tx/${txHash}',
      account_page: 'https://explorer.konsortech.xyz/sge/account/${accountAddress}'
    },
    {
      kind: 'Roomit',
      url: 'https://explorer.tendermint.roomit.xyz/sge-mainnet',
      tx_page: 'https://explorer.tendermint.roomit.xyz/sge-mainnet/tx/${txHash}',
      account_page: 'https://explorer.tendermint.roomit.xyz/sge-mainnet/account/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/sge',
      tx_page: 'https://explorer.whenmoonwhenlambo.money/sge/tx/${txHash}',
      account_page: 'https://explorer.whenmoonwhenlambo.money/sge/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg',
      theme: {
        primary_color_hex: '#b99952'
      }
    }]
};
export default info;