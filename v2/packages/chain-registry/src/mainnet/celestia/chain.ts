import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'celestia',
  chainType: 'cosmos',
  chainId: 'celestia',
  prettyName: 'Celestia',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://celestia.org/',
  bech32Prefix: 'celestia',
  daemonName: 'celestia-appd',
  nodeHome: '$HOME/.celestia-app',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'utia',
        fixedMinGasPrice: 0.002,
        lowGasPrice: 0.01,
        averageGasPrice: 0.02,
        highGasPrice: 0.1
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'utia'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/celestiaorg/celestia-app',
    recommendedVersion: 'v9.0.6',
    compatibleVersions: ['v9.0.6'],
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
      genesisUrl: 'https://raw.githubusercontent.com/celestiaorg/networks/master/celestia/genesis.json'
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
  logoURIs: {
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
      }
    ],
    wss: [{
        address: 'wss://celestia.cumulo.org.es/websocket',
        provider: 'Cumulo'
      }]
  },
  explorers: [
    {
      kind: 'Nodes.Guru',
      url: 'https://celestia.explorers.guru/',
      txPage: 'https://celestia.explorers.guru/transaction/${txHash}',
      accountPage: 'https://celestia.explorers.guru/account/${accountAddress}'
    },
    {
      kind: 'CelestiaHub [Noders]',
      url: 'https://celestiahub.org/explorer/dashboard',
      txPage: 'https://celestiahub.org/explorer/transactions/${txHash}',
      accountPage: 'https://celestiahub.org/explorer/accounts/${accountAddress}'
    },
    {
      kind: 'Mintscan',
      url: 'https://mintscan.io/celestia',
      txPage: 'https://mintscan.io/celestia/txs/${txHash}',
      accountPage: 'https://mintscan.io/celestia/address/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/celestia',
      txPage: 'https://staking-explorer.com/transaction.php?chain=celestia&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=celestia&addr=${accountAddress}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/celestia/',
      txPage: 'https://explorer.nodestake.org/celestia/txs/${txHash}',
      accountPage: 'https://explorer.nodestake.org/celestia/account/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/celestia',
      txPage: 'https://stakeflow.io/celestia/transactions/${txHash}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/celestia',
      txPage: 'https://explorer.tcnetwork.io/celestia/transaction/${txHash}',
      accountPage: 'https://explorer.tcnetwork.io/celestia/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Celestia-Mainnet',
      txPage: 'https://explorer.stavr.tech/Celestia-Mainnet/transaction/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Celestia-Mainnet/account/${accountAddress}'
    },
    {
      kind: 'AM Solutions',
      url: 'https://explorer.theamsolutions.info/celestia-main',
      txPage: 'https://explorer.theamsolutions.info/celestia-main/transaction/${txHash}',
      accountPage: 'https://explorer.theamsolutions.info/celestia-main/account/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/celestia',
      txPage: 'https://ezstaking.app/celestia/txs/${txHash}',
      accountPage: 'https://ezstaking.app/celestia/account/${accountAddress}'
    },
    {
      kind: 'itrocket',
      url: 'https://mainnet.itrocket.net/celestia',
      txPage: 'https://mainnet.itrocket.net/celestia/transaction/${txHash}',
      accountPage: 'https://mainnet.itrocket.net/celestia/account/${accountAddress}'
    },
    {
      kind: 'DTEAM | Explorer',
      url: 'https://explorer.mainnet.dteam.tech/celestia',
      txPage: 'https://explorer.mainnet.dteam.tech/celestia/transaction/${txHash}',
      accountPage: 'https://explorer.mainnet.dteam.tech/celestia/account/${accountAddress}'
    },
    {
      kind: 'Relaxed Explorer 🦥',
      url: 'https://explorer.stakeandrelax.net/celestia',
      txPage: 'https://explorer.stakeandrelax.net/celestia/transaction/${txHash}',
      accountPage: 'https://explorer.stakeandrelax.net/celestia/account/${accountAddress}'
    },
    {
      kind: 'Valopers',
      url: 'https://celestia.valopers.com/',
      txPage: 'https://celestia.valopers.com/transactions/${txHash}',
      accountPage: 'https://celestia.valopers.com/account/${accountAddress}'
    },
    {
      kind: 'moon-runners',
      url: 'https://moon-runners.net/celestia/mainnet',
      txPage: 'https://moon-runners.net/celestia/mainnet/finder?search=${txHash}',
      accountPage: 'https://moon-runners.net/celestia/mainnet/finder?search=${accountAddress}'
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
      checksumAvailable: false,
      provider: 'Polkachu'
    }]
};
export default info;