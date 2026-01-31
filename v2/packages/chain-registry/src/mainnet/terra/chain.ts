import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'terra',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.terra-classic.io/',
  prettyName: 'Terra Classic',
  chainType: 'cosmos',
  chainId: 'columbus-5',
  daemonName: 'terrad',
  nodeHome: '$HOME/.terra',
  bech32Prefix: 'terra',
  slip44: 330,
  fees: {
    feeTokens: [
      {
        denom: 'uluna',
        lowGasPrice: 28.325,
        averageGasPrice: 28.325,
        highGasPrice: 50
      },
      {
        denom: 'usdr',
        lowGasPrice: 0.52469,
        averageGasPrice: 0.52469,
        highGasPrice: 0.52469
      },
      {
        denom: 'uusd',
        lowGasPrice: 0.75,
        averageGasPrice: 0.75,
        highGasPrice: 0.75
      },
      {
        denom: 'ukrw',
        lowGasPrice: 850,
        averageGasPrice: 850,
        highGasPrice: 850
      },
      {
        denom: 'umnt',
        lowGasPrice: 2142.855,
        averageGasPrice: 2142.855,
        highGasPrice: 2142.855
      },
      {
        denom: 'ueur',
        lowGasPrice: 0.625,
        averageGasPrice: 0.625,
        highGasPrice: 0.625
      },
      {
        denom: 'ucny',
        lowGasPrice: 4.9,
        averageGasPrice: 4.9,
        highGasPrice: 4.9
      },
      {
        denom: 'ujpy',
        lowGasPrice: 81.85,
        averageGasPrice: 81.85,
        highGasPrice: 81.85
      },
      {
        denom: 'ugbp',
        lowGasPrice: 0.55,
        averageGasPrice: 0.55,
        highGasPrice: 0.55
      },
      {
        denom: 'uinr',
        lowGasPrice: 54.4,
        averageGasPrice: 54.4,
        highGasPrice: 54.4
      },
      {
        denom: 'ucad',
        lowGasPrice: 0.95,
        averageGasPrice: 0.95,
        highGasPrice: 0.95
      },
      {
        denom: 'uchf',
        lowGasPrice: 0.7,
        averageGasPrice: 0.7,
        highGasPrice: 0.7
      },
      {
        denom: 'uaud',
        lowGasPrice: 0.95,
        averageGasPrice: 0.95,
        highGasPrice: 0.95
      },
      {
        denom: 'usgd',
        lowGasPrice: 1,
        averageGasPrice: 1,
        highGasPrice: 1
      },
      {
        denom: 'uthb',
        lowGasPrice: 23.1,
        averageGasPrice: 23.1,
        highGasPrice: 23.1
      },
      {
        denom: 'usek',
        lowGasPrice: 6.25,
        averageGasPrice: 6.25,
        highGasPrice: 6.25
      },
      {
        denom: 'unok',
        lowGasPrice: 6.25,
        averageGasPrice: 6.25,
        highGasPrice: 6.25
      },
      {
        denom: 'udkk',
        lowGasPrice: 4.5,
        averageGasPrice: 4.5,
        highGasPrice: 4.5
      },
      {
        denom: 'uidr',
        lowGasPrice: 10900,
        averageGasPrice: 10900,
        highGasPrice: 10900
      },
      {
        denom: 'uphp',
        lowGasPrice: 38,
        averageGasPrice: 38,
        highGasPrice: 38
      },
      {
        denom: 'uhkd',
        lowGasPrice: 5.85,
        averageGasPrice: 5.85,
        highGasPrice: 5.85
      },
      {
        denom: 'umyr',
        lowGasPrice: 3,
        averageGasPrice: 3,
        highGasPrice: 3
      },
      {
        denom: 'utwd',
        lowGasPrice: 20,
        averageGasPrice: 20,
        highGasPrice: 20
      }
    ]
  },
  staking: {
    stakingTokens: [{
        denom: 'uluna'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/classic-terra/core',
    recommendedVersion: 'v3.5.0',
    compatibleVersions: ['v3.5.0'],
    genesis: {
      name: '1.0.5',
      genesisUrl: 'https://snapshots.hexxagon.io/cosmos/terra-classic/columbus-5/genesis.json'
    },
    tag: 'v3.5.0',
    binaries: {
      "linux/arm64": 'https://github.com/classic-terra/core/releases/download/v3.5.0/terra_3.5.0_Linux_arm64.tar.gz',
      "linux/amd64": 'https://github.com/classic-terra/core/releases/download/v3.5.0/terra_3.5.0_Linux_x86_64.tar.gz'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/cosmos/cosmos-sdk',
      version: 'v0.47.17',
      tag: 'v0.47.17'
    },
    consensus: {
      type: 'cometbft',
      version: '0.37.15'
    },
    cosmwasm: {
      version: '0.46.0',
      enabled: true
    },
    ibc: {
      type: 'go',
      repo: 'https://github.com/cosmos/ibc-go',
      version: 'v7.10.0',
      tag: 'v7.10.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://terra-classic-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rpc.terra-classic.hexxagon.io/',
        provider: 'Hexxagon'
      },
      {
        address: 'https://api-lunc-rpc.binodes.com',
        provider: 'BInodes'
      },
      {
        address: 'https://terraclassic-rpc-server-01.stakely.io',
        provider: 'Stakely'
      }
    ],
    rest: [
      {
        address: 'https://terra-classic-lcd.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://lcd.terra-classic.hexxagon.io/',
        provider: 'Hexxagon'
      },
      {
        address: 'https://terraclassic-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://api-lunc-lcd.binodes.com',
        provider: 'BInodes'
      }
    ],
    grpc: [
      {
        address: 'grpc.terra-classic.hexxagon.io/',
        provider: 'Hexxagon'
      },
      {
        address: 'terra-classic-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'api-lunc-grpc.binodes.com:443',
        provider: 'BInodes'
      }
    ]
  },
  explorers: [
    {
      kind: 'hexxagon-finder',
      url: 'https://finder.terra-classic.hexxagon.io/',
      txPage: 'https://finder.terra-classic.hexxagon.io/mainnet/tx/${txHash}',
      accountPage: 'https://finder.terra-classic.hexxagon.io/mainnet/address/${accountAddress}'
    },
    {
      kind: 'hexxagon2-finder',
      url: 'https://finder.terraclassic.community/',
      txPage: 'https://finder.terraclassic.community/mainnet/tx/${txHash}',
      accountPage: 'https://finder.terraclassic.community/mainnet/address/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/terra-luna',
      txPage: 'https://ping.pub/terra-luna/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/terra',
      txPage: 'https://atomscan.com/terra/transactions/${txHash}',
      accountPage: 'https://atomscan.com/terra/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/terra',
      txPage: 'https://staking-explorer.com/transaction.php?chain=terra&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=terra&addr=${accountAddress}'
    },
    {
      kind: 'moon-runners',
      url: 'https://moon-runners.net/terra/mainnet',
      txPage: 'https://moon-runners.net/terra/mainnet/finder?search=${txHash}',
      accountPage: 'https://moon-runners.net/terra/mainnet/finder?search=${accountAddress}'
    },
    {
      kind: 'terraport-finder',
      url: 'https://finder.terraport.finance/',
      txPage: 'https://finder.terraport.finance/mainnet/tx/${txHash}',
      accountPage: 'https://finder.terraport.finance/mainnet/address/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg'
    }]
};
export default info;