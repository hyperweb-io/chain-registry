import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'terra2',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.phoenix.money/',
  prettyName: 'Terra',
  chainType: 'cosmos',
  chainId: 'phoenix-1',
  daemonName: 'terrad',
  nodeHome: '$HOME/.terra',
  bech32Prefix: 'terra',
  slip44: 330,
  fees: {
    feeTokens: [{
        denom: 'uluna',
        fixedMinGasPrice: 0.015,
        lowGasPrice: 0.015,
        averageGasPrice: 0.015,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uluna'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/phoenix-directive/core/',
    recommendedVersion: 'v2.16.0',
    compatibleVersions: ['v2.16.0'],
    binaries: {
      "linux/arm64": 'https://github.com/phoenix-directive/core/releases/download/v2.16.0/terra_2.16.0_Linux_arm64.tar.gz',
      "linux/amd64": 'https://github.com/phoenix-directive/core/releases/download/v2.16.0/terra_2.16.0_Linux_x86_64.tar.gz'
    },
    genesis: {
      name: 'v2.0',
      genesisUrl: 'https://tfl-phoenix-1.s3.amazonaws.com/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
  },
  description: 'Fueled by a passionate community and deep developer talent pool, the Terra blockchain is built to enable the next generation of Web3 products and services.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.lavenderfive.com:443/terra2',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://terra-rpc.polkachu.com',
        provider: 'polkachu'
      },
      {
        address: 'https://terra-rpc.stakely.io:443/',
        provider: 'stakely'
      },
      {
        address: 'https://phoenix-rpc.terra.dev:443',
        provider: 'Terraform Labs'
      },
      {
        address: 'https://terra-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rpc-terra-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://rpc-archive-terra.r93axnodes.cloud:443',
        provider: 'r93AX Nodes'
      },
      {
        address: 'https://rpc-terra.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://terra-phoenix-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://rpc-terra.wildsage.io',
        provider: '🧙 WildSage Labs'
      },
      {
        address: 'https://terra.interstellar-lounge.org',
        provider: 'Interstellar Lounge 🍸'
      },
      {
        address: 'https://terra2.tdrsys.com:2053',
        provider: 'TdrSys'
      },
      {
        address: 'https://terra-rpc.cosmosrescue.dev:8443',
        provider: 'cosmosrescue'
      },
      {
        address: 'https://terra-rpc.chainroot.io',
        provider: 'Chainroot'
      }
    ],
    rest: [
      {
        address: 'https://lcd-terra.wildsage.io',
        provider: '🧙 WildSage Labs'
      },
      {
        address: 'https://phoenix-lcd.terra.dev:443',
        provider: 'Terraform Labs'
      },
      {
        address: 'https://api-terra.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://terra-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://api-archive-terra.r93axnodes.cloud:443',
        provider: 'r93AX Nodes'
      },
      {
        address: 'https://api-terra-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://terra-phoenix-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://terra-rest.interstellar-lounge.org',
        provider: 'Interstellar Lounge 🍸'
      },
      {
        address: 'https://terra2.tdrsys.com',
        provider: 'TdrSys'
      },
      {
        address: 'https://terra-api.cosmosrescue.dev:8443',
        provider: 'cosmosrescue'
      },
      {
        address: 'https://terra-api.chainroot.io',
        provider: 'Chainroot'
      }
    ],
    grpc: [
      {
        address: 'terra2.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'terra-grpc.polkachu.com:11790',
        provider: 'Polkachu'
      },
      {
        address: 'terra-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'terra-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'grpc-archive-terra.r93axnodes.cloud:443',
        provider: 'r93AX Nodes'
      },
      {
        address: 'grpc-terra.cosmos-spaces.cloud:2690',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'grpc-terra-01.stakeflow.io:1102',
        provider: 'Stakeflow'
      },
      {
        address: 'https://terra2.tdrsys.com:2083',
        provider: 'TdrSys'
      },
      {
        address: 'terra-grpc.chainroot.io:443',
        provider: 'Chainroot'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/terra',
      txPage: 'https://www.mintscan.io/terra/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/terra/accounts/${accountAddress}'
    },
    {
      kind: 'Chainscope',
      url: 'https://chainsco.pe/terra2',
      txPage: 'https://chainsco.pe/terra2/tx/${txHash}',
      accountPage: 'https://chainsco.pe/terra2/address/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/terra2',
      txPage: 'https://atomscan.com/terra2/transactions/${txHash}',
      accountPage: 'https://atomscan.com/terra2/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/terra2',
      txPage: 'https://staking-explorer.com/transaction.php?chain=terra2&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=terra2&addr=${accountAddress}'
    },
    {
      kind: 'finder',
      url: 'http://finder.terra.money/',
      txPage: 'https://finder.terra.money/mainnet/tx/${txHash}',
      accountPage: 'https://finder.terra.money/mainnet/address/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/terra',
      accountPage: 'https://stakeflow.io/terra/accounts/${accountAddress}'
    },
    {
      kind: 'Chainroot',
      url: 'https://explorer.chainroot.io/terra',
      txPage: 'https://explorer.chainroot.io/terra/transactions/${txHash}',
      accountPage: 'https://explorer.chainroot.io/terra/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
    }]
};
export default info;