import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'dydx',
  status: 'live',
  website: 'https://dydx.trade/',
  network_type: 'mainnet',
  pretty_name: 'dYdX Protocol',
  chain_type: 'cosmos',
  chain_id: 'dydx-mainnet-1',
  bech32_prefix: 'dydx',
  daemon_name: 'dydxprotocold',
  node_home: '$HOME/.dydxprotocol',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'adydx',
        fixed_min_gas_price: 12500000000,
        low_gas_price: 12500000000,
        average_gas_price: 12500000000,
        high_gas_price: 20000000000
      }, {
        denom: 'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
        fixed_min_gas_price: 0.025,
        low_gas_price: 0.025,
        average_gas_price: 0.025,
        high_gas_price: 0.03
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'adydx'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/dydxprotocol/v4-chain/',
    recommended_version: 'protocol/v8.1.0',
    compatible_versions: ['protocol/v8.1.0'],
    binaries: {
      "linux/amd64": 'https://github.com/dydxprotocol/v4-chain/releases/download/protocol%2Fv8.1.0/dydxprotocold-v8.1.0-linux-amd64.tar.gz',
      "linux/arm64": 'https://github.com/dydxprotocol/v4-chain/releases/download/protocol%2Fv8.1.0/dydxprotocold-v8.1.0-linux-arm64.tar.gz'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.15',
      repo: 'https://github.com/dydxprotocol/cometbft',
      tag: 'v0.38.6-0.20250203202601-3ab07f44e83a'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/dydxopsdao/networks/main/dydx-mainnet-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/dydxprotocol/cosmos-sdk',
      version: 'v0.50.6',
      tag: 'v0.50.6-0.20250113155252-f00c500eaff3'
    },
    ibc: {
      type: 'go',
      version: 'v8.0.0'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
  },
  description: 'Our goal is to build open source code that can power a first class product and trading experience.',
  apis: {
    rpc: [
      {
        address: 'https://dydx-rpc.kingnodes.com:443',
        provider: 'Kingnodes 👑'
      },
      {
        address: 'https://dydx-dao-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://dydx-mainnet-full-rpc.public.blastapi.io',
        provider: 'Bware Labs'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/dydx',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://dydx-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc-dydx.ecostake.com:443',
        provider: 'ecostake'
      },
      {
        address: 'https://rpc-dydx.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://dydx-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rpc-dydx.cros-nest.com:443',
        provider: 'Crosnest'
      },
      {
        address: 'https://dydx-rpc.enigma-validator.com',
        provider: 'Enigma'
      },
      {
        address: 'https://community.nuxian-node.ch:6797/dydx/trpc',
        provider: 'PRO Delegators'
      },
      {
        address: 'https://dydx-rpc.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://dydx.interstellar-lounge.org',
        provider: 'Interstellar Lounge 🍸'
      }
    ],
    rest: [
      {
        address: 'https://community.nuxian-node.ch:6797/dydx/crpc',
        provider: 'PRO Delegators'
      },
      {
        address: 'https://dydx-dao-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://dydx-mainnet-full-lcd.public.blastapi.io',
        provider: 'Bware Labs'
      },
      {
        address: 'https://dydx-rest.kingnodes.com:443',
        provider: 'Kingnodes 👑'
      },
      {
        address: 'https://rest.lavenderfive.com:443/dydx',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://dydx-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rest-dydx.ecostake.com:443',
        provider: 'ecostake'
      },
      {
        address: 'https://api-dydx.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://dydx-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rest-dydx.cros-nest.com:443',
        provider: 'Crosnest'
      },
      {
        address: 'https://dydx-lcd.enigma-validator.com',
        provider: 'Enigma'
      },
      {
        address: 'https://dydx-api.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://dydx-rest.interstellar-lounge.org',
        provider: 'Interstellar Lounge 🍸'
      }
    ],
    grpc: [
      {
        address: 'dydx-dao-grpc-1.polkachu.com:23890',
        provider: 'Polkachu (1)'
      },
      {
        address: 'dydx-dao-grpc-2.polkachu.com:23890',
        provider: 'Polkachu (2)'
      },
      {
        address: 'dydx-dao-grpc-3.polkachu.com:23890',
        provider: 'Polkachu (3)'
      },
      {
        address: 'dydx-dao-grpc-4.polkachu.com:23890',
        provider: 'Polkachu (4)'
      },
      {
        address: 'dydx-dao-grpc-5.polkachu.com:23890',
        provider: 'Polkachu (5)'
      },
      {
        address: 'dydx-mainnet-full-grpc.public.blastapi.io:443',
        provider: 'Bware Labs'
      },
      {
        address: 'https://dydx-grpc.kingnodes.com:443',
        provider: 'Kingnodes 👑'
      },
      {
        address: 'dydx.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'dydx-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'dydx.grpc.kjnodes.com:443',
        provider: 'kjnodes'
      },
      {
        address: 'grpc-dydx.cosmos-spaces.cloud:4990',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'dydx-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'dydx-grpc.noders.services:37090',
        provider: '[NODERS]TEAM'
      }
    ]
  },
  explorers: [
    {
      kind: 'Chainroot',
      url: 'https://explorer.chainroot.io/dydx',
      tx_page: 'https://explorer.chainroot.io/dydx/transactions/${txHash}',
      account_page: 'https://explorer.chainroot.io/dydx/accounts/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/dydx',
      tx_page: 'https://www.mintscan.io/dydx/txs/${txHash}',
      account_page: 'https://www.mintscan.io/dydx/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/dydx',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=dydx&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=dydx&addr=${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/dydx',
      tx_page: 'https://ezstaking.app/dydx/txs/${txHash}',
      account_page: 'https://ezstaking.app/dydx/account/${accountAddress}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/dydx/',
      tx_page: 'https://explorer.nodestake.org/dydx/txs/${txHash}',
      account_page: 'https://explorer.nodestake.org/dydx/account/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/dydx',
      tx_page: 'https://explorer.tcnetwork.io/dydx/transaction/${txHash}',
      account_page: 'https://explorer.tcnetwork.io/dydx/account/${accountAddress}'
    },
    {
      kind: 'Valopers',
      url: 'https://dydx.valopers.com/',
      tx_page: 'https://dydx.valopers.com/transactions/${txHash}',
      account_page: 'https://dydx.valopers.com/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg',
      theme: {
        primary_color_hex: '#21212f'
      }
    }]
};
export default info;