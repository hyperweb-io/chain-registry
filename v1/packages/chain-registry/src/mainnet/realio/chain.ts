import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'realio',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://realio.network/',
  pretty_name: 'Realio Network',
  chain_type: 'cosmos',
  chain_id: 'realionetwork_3301-1',
  bech32_prefix: 'realio',
  node_home: '$HOME/.realio-network',
  daemon_name: 'realio-networkd',
  key_algos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'ario',
        fixed_min_gas_price: 1000000000,
        low_gas_price: 4000000000,
        average_gas_price: 5000000000,
        high_gas_price: 8000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ario'
      }, {
        denom: 'arst'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/realiotech/realio-network',
    recommended_version: 'v1.3.0',
    compatible_versions: ['v1.3.0'],
    binaries: {
      "linux/amd64": 'https://github.com/realiotech/realio-network/releases/download/v1.3.0/realio-network_Linux_x86_64.tar.gz',
      "linux/arm64": 'https://github.com/realiotech/realio-network/releases/download/v1.3.0/realio-network_Linux_arm64.tar.gz',
      "darwin/amd64": 'https://github.com/realiotech/realio-network/releases/download/v1.3.0/realio-network_Darwin_x86_64.tar.gz',
      "darwin/arm64": 'https://github.com/realiotech/realio-network/releases/download/v1.3.0/realio-network_Darwin_arm64.tar.gz',
      "windows/amd64": 'https://github.com/realiotech/realio-network/releases/download/v1.3.0/realio-network_Windows_x86_64.zip'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.12'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/realiotech/mainnet/main/realionetwork_3301-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50'
    },
    ibc: {
      type: 'go',
      version: 'v8.5.1'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png'
  },
  apis: {
    rpc: [
      {
        address: 'https://realio-rpc.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://realio.rpc.bccnodes.com/',
        provider: 'BccNodes'
      },
      {
        address: 'https://rpc-realio-network.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'http://realio.rpc.m.stavr.tech:21097',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc.realio.indonode.net',
        provider: 'Indonode'
      },
      {
        address: 'https://rpc-realio.vinjan.xyz',
        provider: 'vinjan'
      },
      {
        address: 'https://api-realio.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://realio.declab.pro:26622',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'https://realio-rpc.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://realio_rio_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://realio-rpc.moonbridge.org',
        provider: 'Moonbridge'
      }
    ],
    rest: [
      {
        address: 'https://realio-api.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://realio.lcd.bccnodes.com/',
        provider: 'BccNodes'
      },
      {
        address: 'https://api-realio-network.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'https://realio.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api.realio.indonode.net',
        provider: 'Indonode'
      },
      {
        address: 'https://api-realio.vinjan.xyz',
        provider: 'vinjan'
      },
      {
        address: 'https://rpc-realio.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://realio.declab.pro:443',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'https://realio-api.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://realio_rio_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://realio-api.moonbridge.org',
        provider: 'Moonbridge'
      }
    ],
    grpc: [
      {
        address: 'realio-grpc.genznodes.dev:30090',
        provider: 'genznodes'
      },
      {
        address: 'realio.grpc.bccnodes.com:10990',
        provider: 'BccNodes'
      },
      {
        address: 'http://realio.grpc.m.stavr.tech:9062',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://grpc-realio.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'https://grpc.realio.nodestake.org:443',
        provider: 'NodeStake'
      },
      {
        address: 'https://grpc-realio.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'realio.grpc.skynodejs.net',
        provider: 'skynodejs'
      },
      {
        address: 'https://realio.declab.pro:9015',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'realio-grpc.noders.services:22090',
        provider: '[NODERS]TEAM'
      }
    ],
    "evm-http-jsonrpc": [
      {
        address: 'https://realio-rpc-evm.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://jsonrpc.realio.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://evm-realio.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://realio-jsonrpc.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://realio_rio_mainnet_evm.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ]
  },
  explorers: [
    {
      kind: 'Chainroot',
      url: 'https://explorer.chainroot.io/realio',
      tx_page: 'https://explorer.chainroot.io/realio/transactions/${txHash}',
      account_page: 'https://explorer.chainroot.io/realio/accounts/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/realio-mainnet',
      tx_page: 'https://explorer.stavr.tech/realio-mainnet/tx/${txHash}',
      account_page: 'https://explorer.stavr.tech/realio-mainnet/account/{$accountAddress}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.org/realio',
      tx_page: 'https://explorer.nodestake.org/realio/tx/${txHash}',
      account_page: 'https://explorer.nodestake.org/realio/account/{$accountAddress}'
    },
    {
      kind: 'Sr20de Explorer',
      url: 'https://explorer.sr20de.xyz/Realio',
      tx_page: 'https://explorer.sr20de.xyz/Realio/tx/${txHash}',
      account_page: 'https://explorer.sr20de.xyz/Realio/account/{$accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/realio',
      tx_page: 'https://explorer.tcnetwork.io/realio/transaction/${txHash}',
      account_page: 'https://explorer.tcnetwork.io/realio/account/${accountAddress}'
    },
    {
      kind: 'Decloud Nodes Lab',
      url: 'https://explorer.declab.pro/realio',
      tx_page: 'https://explorer.declab.pro/realio/tx/${txHash}',
      account_page: 'https://explorer.declab.pro/realio/account/{$accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/realio',
      tx_page: 'https://explorer.whenmoonwhenlambo.money/realio/tx/${txHash}',
      account_page: 'https://explorer.whenmoonwhenlambo.money/realio/account/${accountAddress}'
    },
    {
      kind: 'Moonbridge',
      url: 'https://explorer.moonbridge.org/realio',
      tx_page: 'https://explorer.moonbridge.org/realio/tx/${txHash}',
      account_page: 'https://explorer.moonbridge.org/realio/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
      theme: {
        primary_color_hex: '#181818'
      }
    }]
};
export default info;