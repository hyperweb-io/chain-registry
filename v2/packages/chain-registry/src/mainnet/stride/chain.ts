import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'stride',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://stride.zone/',
  prettyName: 'Stride',
  chainType: 'cosmos',
  chainId: 'stride-1',
  bech32Prefix: 'stride',
  daemonName: 'strided',
  nodeHome: '$HOME/.stride',
  keyAlgos: ['ed25519'],
  slip44: 118,
  fees: {
    feeTokens: [
      {
        denom: 'ustrd',
        fixedMinGasPrice: 0.0005,
        lowGasPrice: 0.005,
        averageGasPrice: 0.005,
        highGasPrice: 0.05
      },
      {
        denom: 'stuatom',
        fixedMinGasPrice: 0.0001,
        lowGasPrice: 0.0001,
        averageGasPrice: 0.0002,
        highGasPrice: 0.0005
      },
      {
        denom: 'stuosmo',
        fixedMinGasPrice: 0.001,
        lowGasPrice: 0.001,
        averageGasPrice: 0.002,
        highGasPrice: 0.004
      },
      {
        denom: 'stustars',
        fixedMinGasPrice: 1,
        lowGasPrice: 1,
        averageGasPrice: 1.1,
        highGasPrice: 1.2
      },
      {
        denom: 'stujuno',
        fixedMinGasPrice: 0.075,
        lowGasPrice: 0.075,
        averageGasPrice: 0.1,
        highGasPrice: 0.125
      },
      {
        denom: 'stuluna',
        fixedMinGasPrice: 0.0125,
        lowGasPrice: 0.0125,
        averageGasPrice: 0.015,
        highGasPrice: 0.04
      },
      {
        denom: 'staevmos',
        fixedMinGasPrice: 250000000,
        lowGasPrice: 20000000000,
        averageGasPrice: 25000000000,
        highGasPrice: 40000000000
      },
      {
        denom: 'stinj',
        fixedMinGasPrice: 500000000,
        lowGasPrice: 500000000,
        averageGasPrice: 700000000,
        highGasPrice: 900000000
      },
      {
        denom: 'stucmdx',
        fixedMinGasPrice: 0.02,
        lowGasPrice: 0.02,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      },
      {
        denom: 'stuumee',
        fixedMinGasPrice: 0.1,
        lowGasPrice: 0.1,
        averageGasPrice: 0.12,
        highGasPrice: 0.2
      },
      {
        denom: 'stutia',
        fixedMinGasPrice: 0.002,
        lowGasPrice: 0.01,
        averageGasPrice: 0.02,
        highGasPrice: 0.1
      },
      {
        denom: 'stadydx',
        fixedMinGasPrice: 15000000000,
        lowGasPrice: 15000000000,
        averageGasPrice: 15000000000,
        highGasPrice: 20000000000
      },
      {
        denom: 'stadym',
        fixedMinGasPrice: 15000000000,
        lowGasPrice: 15000000000,
        averageGasPrice: 15000000000,
        highGasPrice: 20000000000
      },
      {
        denom: 'stusaga',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.01,
        averageGasPrice: 0.015,
        highGasPrice: 0.03
      },
      {
        denom: 'ibc/BF3B4F53F3694B66E13C23107C84B6485BD2B96296BB7EC680EA77BBA75B4801',
        fixedMinGasPrice: 0.002,
        lowGasPrice: 0.01,
        averageGasPrice: 0.02,
        highGasPrice: 0.1
      }
    ]
  },
  staking: {
    stakingTokens: [{
        denom: 'ustrd'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Stride-Labs/stride',
    recommendedVersion: 'v24.0.0',
    compatibleVersions: ['v24.0.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.37.4'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/Stride-Labs/mainnet/main/mainnet/genesis.json',
      icsCcvUrl: 'https://raw.githubusercontent.com/Stride-Labs/mainnet/main/ics-instructions/ccv.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/Stride-Labs/cosmos-sdk',
      version: 'v0.47.10',
      tag: 'v0.47.10-stride-distribution-fix-0-mempool-verbose-error-1'
    },
    ibc: {
      type: 'go',
      version: '7.4.0'
    },
    tag: 'v24.0.0'
  },
  description: 'Stride is a blockchain that provides liquidity for staked tokens. Using Stride, you can earn both taking and DeFi yields across the Cosmos IBC ecosystem.',
  apis: {
    rpc: [
      {
        address: 'https://stride.rpc.uquad.org:443',
        provider: 'QUAD'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/stride',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://stride-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://stride-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://stride-rpc.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/stride/rpc',
        provider: 'Stakewolle'
      },
      {
        address: 'https://rpc.stride.citizenweb3.com',
        provider: 'Citizen Web3'
      },
      {
        address: 'https://stride-rpc.polkachu.com:443',
        provider: 'Polkachu'
      }
    ],
    rest: [
      {
        address: 'https://stride.rpc.uquad.org:443',
        provider: 'QUAD'
      },
      {
        address: 'https://rest.lavenderfive.com:443/stride',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://stride-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://stride-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://stride-api.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/stride/rest',
        provider: 'Stakewolle'
      },
      {
        address: 'https://api.stride.citizenweb3.com',
        provider: 'Citizen Web3'
      },
      {
        address: 'https://stride-api.polkachu.com',
        provider: 'Polkachu'
      }
    ],
    grpc: [
      {
        address: 'stride-grpc.polkachu.com:12290',
        provider: 'Polkachu'
      },
      {
        address: 'stride.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'stride-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'stride-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'stride-grpc.stakeandrelax.net:12290',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://grpc.stride.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'grpc.stride.citizenweb3.com:443',
        provider: 'Citizen Web3'
      }
    ]
  },
  explorers: [
    {
      kind: 'BccNodes',
      url: 'https://explorer.bccnodes.com/stride-M',
      txPage: 'https://explorer.bccnodes.com/stride-M/tx/${txHash}',
      accountPage: 'https://explorer.bccnodes.com/stride-M/account/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/stride',
      txPage: 'https://ezstaking.app/stride/txs/${txHash}',
      accountPage: 'https://ezstaking.app/stride/account/${accountAddress}'
    },
    {
      kind: 'Apollo',
      url: 'https://apollo.chandrastation.com/stride',
      txPage: 'https://apollo.chandrastation.com/stride/tx/${txHash}',
      accountPage: 'https://apollo.chandrastation.com/stride/account/${accountAddress}'
    },
    {
      kind: 'Stride Ping Pub',
      url: 'https://explorer.stride.zone/stride',
      txPage: 'https://explorer.stride.zone/stride/tx/${txHash}',
      accountPage: 'https://explorer.stride.zone/stride/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/stride',
      txPage: 'https://explorer.stavr.tech/stride/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/stride/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/stride',
      txPage: 'https://www.mintscan.io/stride/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/stride/accounts/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/stride',
      txPage: 'https://atomscan.com/stride/transactions/${txHash}',
      accountPage: 'https://atomscan.com/stride/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/stride',
      txPage: 'https://staking-explorer.com/transaction.php?chain=stride&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=stride&addr=${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/stride',
      accountPage: 'https://stakeflow.io/stride/accounts/${accountAddress}'
    },
    {
      kind: 'Stake-Take',
      url: 'https://explorer.stake-take.com/stride',
      txPage: 'https://explorer.stake-take.com/stride/tx/${txHash}',
      accountPage: 'https://explorer.stake-take.com/stride/account/${accountAddress}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/stride',
      txPage: 'https://mainnet.whispernode.com/stride/tx/${txHash}',
      accountPage: 'https://mainnet.whispernode.com/stride/account/${accountAddress}'
    },
    {
      kind: 'Validatorinfo',
      url: 'https://validatorinfo.com/networks/stride/overview',
      validatorPage: 'https://validatorinfo.com/networks/stride/validators',
      proposalPage: 'https://validatorinfo.com/networks/stride/governance'
    }
  ],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
  },
  images: [{
      imageSync: {
        chainName: 'stride',
        baseDenom: 'ustrd'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
    }],
  snapshots: [{
      url: 'https://polkachu.com/tendermint_snapshots/stride',
      type: 'pruned',
      compression: 'lz4',
      checksumAvailable: false,
      provider: 'Polkachu'
    }]
};
export default info;