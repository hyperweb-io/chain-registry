import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'haqq',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://haqq.network/',
  prettyName: 'Haqq Network',
  chainType: 'cosmos',
  chainId: 'haqq_11235-1',
  bech32Prefix: 'haqq',
  nodeHome: '$HOME/.haqqd',
  daemonName: 'haqqd',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'aISLM',
        fixedMinGasPrice: 250000000,
        lowGasPrice: 20000000000,
        averageGasPrice: 25000000000,
        highGasPrice: 40000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'aISLM'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/haqq-network/haqq',
    recommendedVersion: 'v1.8.0',
    compatibleVersions: ['v1.8.0'],
    binaries: {
      "linux/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.8.0/haqq_1.8.0_linux_amd64.tar.gz',
      "linux/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.8.0/haqq_1.8.0_linux_arm64.tar.gz',
      "darwin/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.8.0/haqq_1.8.0_darwin_amd64.tar.gz',
      "darwin/arm64": 'https://github.com/haqq-network/haqq/releases/download/v1.8.0/haqq_1.8.0_darwin_arm64.tar.gz',
      "windows/amd64": 'https://github.com/haqq-network/haqq/releases/download/v1.8.0/haqq_1.8.0_windows_amd64.zip'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.37.9'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/haqq-network/mainnet/master/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/evmos/cosmos-sdk',
      version: 'v0.47.12',
      tag: 'v0.47.12-evmos.2'
    },
    ibc: {
      type: 'go',
      version: '7.4.0'
    },
    tag: 'v1.8.0'
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/haqq.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/haqq.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.tm.haqq.network',
        provider: 'Haqq'
      },
      {
        address: 'https://rpc.haqq.sh',
        provider: 'kioqq'
      },
      {
        address: 'https://rpc.haqq.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://haqq-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/haqq',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc-haqq.sr20de.xyz:443',
        provider: 'Sr20de'
      },
      {
        address: 'https://haqq-rpc.palamar.io',
        provider: 'Palamar'
      },
      {
        address: 'https://haqq-rpc.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://haqq.drpc.org',
        provider: 'dRPC'
      },
      {
        address: 'https://haqq.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      }
    ],
    rest: [
      {
        address: 'https://rest.cosmos.haqq.network',
        provider: 'Haqq'
      },
      {
        address: 'https://sdk.haqq.sh',
        provider: 'kioqq'
      },
      {
        address: 'https://api.haqq.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://haqq-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rest.lavenderfive.com:443/haqq',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://mainnet-haqq-api.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://api-haqq.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://haqq-api.palamar.io',
        provider: 'Palamar'
      },
      {
        address: 'https://haqq-api.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://haqq.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.cosmos.haqq.network',
        provider: 'Haqq'
      },
      {
        address: 'grpc.haqq.sh:443',
        provider: 'kioqq'
      },
      {
        address: 'haqq.grpc.nodersteam.com:9191',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://grpc.haqq.nodestake.org:443',
        provider: 'NodeStake'
      },
      {
        address: 'haqq-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'haqq.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'mainnet-haqq-grpc.konsortech.xyz:11090',
        provider: 'KonsorTech'
      },
      {
        address: 'https://grpc-haqq.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'haqq-grpc.palamar.io:443',
        provider: 'Palamar'
      },
      {
        address: 'haqq-grpc.noders.services:14090',
        provider: '[NODERS]TEAM'
      }
    ],
    evmHttpJsonrpc: [
      {
        address: 'https://rpc.eth.haqq.network',
        provider: 'Haqq'
      },
      {
        address: 'https://evm.haqq.sh',
        provider: 'kioqq'
      },
      {
        address: 'https://jsonrpc.haqq.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://haqq-evm.publicnode.com',
        provider: 'Allnodes.com ⚡️ Nodes & Staking'
      },
      {
        address: 'https://jsonrpc.lavenderfive.com:443/haqq',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://mainnet-haqq-evm.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://evm-haqq.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://haqq-jsonrpc.noders.services',
        provider: '[NODERS]TEAM'
      }
    ]
  },
  explorers: [
    {
      kind: 'Chainroot',
      url: 'https://explorer.chainroot.io/haqq',
      txPage: 'https://explorer.chainroot.io/haqq/transactions/${txHash}',
      accountPage: 'https://explorer.chainroot.io/haqq/accounts/${accountAddress}'
    },
    {
      kind: 'blockscout',
      url: 'https://explorer.haqq.network',
      txPage: 'https://explorer.haqq.network/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/haqq',
      txPage: 'https://ping.pub/haqq/tx/${txHash}'
    },
    {
      kind: 'explorers.guru',
      url: 'https://haqq.explorers.guru',
      txPage: 'https://haqq.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/haqq',
      txPage: 'https://staking-explorer.com/transaction.php?chain=haqq&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=haqq&addr=${accountAddress}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.org/haqq',
      txPage: 'https://explorer.nodestake.org/haqq/tx/${txHash}'
    },
    {
      kind: 'KonsorTech Explorer',
      url: 'https://explorer.konsortech.xyz/haqq',
      txPage: 'https://explorer.konsortech.xyz/haqq/tx/${txHash}'
    },
    {
      kind: 'Palamar Explorer',
      url: 'https://explorer.palamar.io/haqq',
      txPage: 'https://explorer.palamar.io/haqq/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/HAQQ-Mainnet',
      txPage: 'https://explorer.stavr.tech/HAQQ-Mainnet/tx/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/haqq.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/haqq.svg'
    }]
};
export default info;