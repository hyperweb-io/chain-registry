import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'celestia',
  chain_type: 'cosmos',
  chain_id: 'celestia',
  pretty_name: 'Celestia',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://celestia.org/',
  bech32_prefix: 'celestia',
  daemon_name: 'celestia-appd',
  node_home: '$HOME/.celestia-app',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'utia',
        fixed_min_gas_price: 0.002,
        low_gas_price: 0.01,
        average_gas_price: 0.02,
        high_gas_price: 0.1
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'utia'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/celestiaorg/celestia-app',
    recommended_version: 'v9.0.6',
    compatible_versions: ['v9.0.6'],
    binaries: {
      "linux/amd64": 'https://github.com/celestiaorg/celestia-app/releases/download/v9.0.6/celestia-app_Linux_x86_64.tar.gz',
      "linux/arm64": 'https://github.com/celestiaorg/celestia-app/releases/download/v9.0.6/celestia-app_Linux_arm64.tar.gz',
      "darwin/amd64": 'https://github.com/celestiaorg/celestia-app/releases/download/v9.0.6/celestia-app_Darwin_x86_64.tar.gz',
      "darwin/arm64": 'https://github.com/celestiaorg/celestia-app/releases/download/v9.0.6/celestia-app_Darwin_arm64.tar.gz'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.40.8',
      repo: 'https://github.com/celestiaorg/celestia-core',
      tag: 'v0.40.8'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/celestiaorg/networks/master/celestia/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/celestiaorg/cosmos-sdk',
      version: 'v0.52.8',
      tag: 'v0.52.8'
    },
    ibc: {
      type: 'go',
      repo: 'https://github.com/celestiaorg/ibc-go',
      version: 'v8.7.2',
      tag: 'v8.7.2'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
  },
  description: 'Celestia is a modular data availability network that securely scales with the number of users, making it easy for anyone to launch their own blockchain.',
  apis: {
    rpc: [
      {
        address: 'https://celestia.rpc.uquad.org:443',
        provider: 'QUAD'
      },
      {
        address: 'https://public-celestia-rpc.numia.xyz',
        provider: 'Numia'
      },
      {
        address: 'https://rpc.lunaroasis.net',
        provider: 'Lunar Oasis'
      },
      {
        address: 'https://rpc.celestia.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/celestia',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://celestia.rpc.interchain.validao.xyz',
        provider: 'ValiDAO'
      },
      {
        address: 'https://celestia-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://celestia.rpc.stakin-nodes.com',
        provider: 'Stakin'
      },
      {
        address: 'https://celestia.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://rpc-celestia.mzonder.com',
        provider: 'MZONDER'
      },
      {
        address: 'https://celestia-rpc.enigma-validator.com',
        provider: 'Enigma'
      },
      {
        address: 'https://rpc-celestia.theamsolutions.info',
        provider: 'AM Solutions'
      },
      {
        address: 'https://celestia-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake | Delegate for StakeDrops'
      },
      {
        address: 'https://rpc.celestia.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://rpc.freshstaking.com/celestia',
        provider: 'FreshSTAKING'
      },
      {
        address: 'https://rpc.celestia-app.bronbro.io',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://celestia-rpc.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://rpc.celestia.citizenweb3.com',
        provider: 'Citizen Web3'
      },
      {
        address: 'https://celestia-mainnet-rpc.itrocket.net',
        provider: 'itrocket'
      },
      {
        address: 'https://rpc.celestia.mainnet.dteam.tech:443',
        provider: 'DTEAM'
      },
      {
        address: 'https://celestia-rpc.stakeandrelax.net',
        provider: 'Stake&Relax Validator 🦥'
      },
      {
        address: 'https://rpc.celestia.node75.org',
        provider: 'Pro-Nodes75'
      },
      {
        address: 'https://rpc.archive.celestia.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://celestia-rpc.polkachu.com:443',
        provider: 'Polkachu'
      },
      {
        address: 'https://celestia.cumulo.org.es',
        provider: 'Cumulo'
      },
      {
        address: 'https://celestia-rpc.cogwheel.zone',
        provider: 'Cogwheel ⚙️'
      }
    ],
    rest: [
      {
        address: 'https://celestia.rpc.uquad.org:443',
        provider: 'QUAD'
      },
      {
        address: 'https://public-celestia-lcd.numia.xyz',
        provider: 'Numia'
      },
      {
        address: 'https://api.lunaroasis.net',
        provider: 'Lunar Oasis'
      },
      {
        address: 'https://api.celestia.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://rest.lavenderfive.com:443/celestia',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://celestia.rest.interchain.validao.xyz',
        provider: 'ValiDAO'
      },
      {
        address: 'https://celestia-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://celestia.rest.stakin-nodes.com',
        provider: 'Stakin'
      },
      {
        address: 'https://celestia.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://api-celestia.mzonder.com',
        provider: 'MZONDER'
      },
      {
        address: 'https://celestia-lcd.enigma-validator.com',
        provider: 'Enigma'
      },
      {
        address: 'https://rest-celestia.theamsolutions.info',
        provider: 'AM Solutions'
      },
      {
        address: 'https://api.celestia.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://celestia-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake | Delegate for StakeDrops'
      },
      {
        address: 'https://celestia.api.cumulo.org.es',
        provider: 'Cumulo'
      },
      {
        address: 'https://lcd.celestia-app.bronbro.io',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://celestia-api.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://celestia-mainnet-api.itrocket.net',
        provider: 'itrocket'
      },
      {
        address: 'https://api.celestia.mainnet.dteam.tech:443',
        provider: 'DTEAM'
      },
      {
        address: 'https://celestia-api.stakeandrelax.net',
        provider: 'Stake&Relax Validator 🦥'
      },
      {
        address: 'https://api.celestia.node75.org',
        provider: 'Pro-Nodes75'
      },
      {
        address: 'https://api.archive.celestia.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://celestia-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://celestia-api.cogwheel.zone',
        provider: 'Cogwheel ⚙️'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.celestia.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'celestia-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake | Delegate for StakeDrops'
      },
      {
        address: 'celestia.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'celestia.grpc.interchain.validao.xyz:443',
        provider: 'ValiDAO'
      },
      {
        address: 'celestia-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'celestia.grpc.stakin-nodes.com:443',
        provider: 'Stakin'
      },
      {
        address: 'celestia.grpc.kjnodes.com:443',
        provider: 'kjnodes'
      },
      {
        address: 'grpc-celestia.mzonder.com:443',
        provider: 'MZONDER'
      },
      {
        address: 'grpc-celestia.theamsolutions.info:443',
        provider: 'AM Solutions'
      },
      {
        address: 'grpc.celestia.validatus.com:443',
        provider: 'Validatus'
      },
      {
        address: 'grpc.celestia-app.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'celestia-grpc.noders.services:11090',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'celestia-mainnet-grpc.itrocket.net:443',
        provider: 'itrocket'
      },
      {
        address: 'http://celestia-grpc.stakeandrelax.net:11690',
        provider: 'Stake&Relax Validator 🦥'
      },
      {
        address: 'grpc.celestia.node75.org:9220',
        provider: 'Pro-Nodes75'
      },
      {
        address: 'grpc.archive.celestia.validatus.com:2125',
        provider: 'Validatus'
      },
      {
        address: 'celestia-grpc.polkachu.com:11690',
        provider: 'Polkachu'
      },
      {
        address: 'https://celestia.grpc.cumulo.org.es',
        provider: 'Cumulo'
      },
      {
        address: 'celestia-grpc.cogwheel.zone:443',
        provider: 'Cogwheel ⚙️'
      }
    ],
    wss: [{
        address: 'wss://celestia.cumulo.org.es/websocket',
        provider: 'Cumulo'
      }, {
        address: 'wss://celestia-rpc.cogwheel.zone/websocket',
        provider: 'Cogwheel ⚙️'
      }]
  },
  explorers: [
    {
      kind: 'Nodes.Guru',
      url: 'https://celestia.explorers.guru/',
      tx_page: 'https://celestia.explorers.guru/transaction/${txHash}',
      account_page: 'https://celestia.explorers.guru/account/${accountAddress}'
    },
    {
      kind: 'CelestiaHub [Noders]',
      url: 'https://celestiahub.org/explorer/dashboard',
      tx_page: 'https://celestiahub.org/explorer/transactions/${txHash}',
      account_page: 'https://celestiahub.org/explorer/accounts/${accountAddress}'
    },
    {
      kind: 'Mintscan',
      url: 'https://mintscan.io/celestia',
      tx_page: 'https://mintscan.io/celestia/txs/${txHash}',
      account_page: 'https://mintscan.io/celestia/address/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/celestia',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=celestia&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=celestia&addr=${accountAddress}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/celestia/',
      tx_page: 'https://explorer.nodestake.org/celestia/txs/${txHash}',
      account_page: 'https://explorer.nodestake.org/celestia/account/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/celestia',
      tx_page: 'https://stakeflow.io/celestia/transactions/${txHash}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/celestia',
      tx_page: 'https://explorer.tcnetwork.io/celestia/transaction/${txHash}',
      account_page: 'https://explorer.tcnetwork.io/celestia/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Celestia-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Celestia-Mainnet/transaction/${txHash}',
      account_page: 'https://explorer.stavr.tech/Celestia-Mainnet/account/${accountAddress}'
    },
    {
      kind: 'AM Solutions',
      url: 'https://explorer.theamsolutions.info/celestia-main',
      tx_page: 'https://explorer.theamsolutions.info/celestia-main/transaction/${txHash}',
      account_page: 'https://explorer.theamsolutions.info/celestia-main/account/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/celestia',
      tx_page: 'https://ezstaking.app/celestia/txs/${txHash}',
      account_page: 'https://ezstaking.app/celestia/account/${accountAddress}'
    },
    {
      kind: 'itrocket',
      url: 'https://mainnet.itrocket.net/celestia',
      tx_page: 'https://mainnet.itrocket.net/celestia/transaction/${txHash}',
      account_page: 'https://mainnet.itrocket.net/celestia/account/${accountAddress}'
    },
    {
      kind: 'DTEAM | Explorer',
      url: 'https://explorer.mainnet.dteam.tech/celestia',
      tx_page: 'https://explorer.mainnet.dteam.tech/celestia/transaction/${txHash}',
      account_page: 'https://explorer.mainnet.dteam.tech/celestia/account/${accountAddress}'
    },
    {
      kind: 'Relaxed Explorer 🦥',
      url: 'https://explorer.stakeandrelax.net/celestia',
      tx_page: 'https://explorer.stakeandrelax.net/celestia/transaction/${txHash}',
      account_page: 'https://explorer.stakeandrelax.net/celestia/account/${accountAddress}'
    },
    {
      kind: 'Valopers',
      url: 'https://celestia.valopers.com/',
      tx_page: 'https://celestia.valopers.com/transactions/${txHash}',
      account_page: 'https://celestia.valopers.com/account/${accountAddress}'
    },
    {
      kind: 'moon-runners',
      url: 'https://moon-runners.net/celestia/mainnet',
      tx_page: 'https://moon-runners.net/celestia/mainnet/finder?search=${txHash}',
      account_page: 'https://moon-runners.net/celestia/mainnet/finder?search=${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
    }],
  snapshots: [{
      url: 'https://polkachu.com/tendermint_snapshots/celestia',
      type: 'pruned',
      compression: 'lz4',
      checksum_available: false,
      provider: 'Polkachu'
    }]
};
export default info;