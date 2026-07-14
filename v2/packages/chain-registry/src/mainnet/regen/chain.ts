import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'regen',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.regen.network/',
  prettyName: 'Regen',
  chainType: 'cosmos',
  chainId: 'regen-1',
  bech32Prefix: 'regen',
  daemonName: 'regen',
  nodeHome: '$HOME/.regen',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uregen',
        lowGasPrice: 0.015,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uregen'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/regen-network/regen-ledger',
    recommendedVersion: 'v5.0.0',
    compatibleVersions: ['v5.0.0'],
    binaries: {
      "linux/amd64": 'https://github.com/regen-network/regen-ledger/releases/download/v5.0.0/regen-ledger_5.0.0_linux_amd64.zip',
      "linux/arm64": 'https://github.com/regen-network/regen-ledger/releases/download/v5.0.0/regen-ledger_5.0.0_linux_arm64.zip',
      "darwin/amd64": 'https://github.com/regen-network/regen-ledger/releases/download/v5.0.0/regen-ledger_5.0.0_darwin_amd64.zip',
      "darwin/arm64": 'https://github.com/regen-network/regen-ledger/releases/download/v5.0.0/regen-ledger_5.0.0_darwin_arm64.zip'
    },
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/regen-network/mainnet/main/regen-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.46'
    },
    ibc: {
      type: 'go',
      version: '5.2',
      icsEnabled: ['ics20-1', 'ics27-1']
    }
  },
  description: 'Regen Network, a platform to originate and invest in high-integrity carbon and biodiversity credits from ecological regeneration projects.',
  apis: {
    rpc: [
      {
        address: 'https://rpc-regen.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'http://public-rpc.regen.vitwit.com:26657',
        provider: 'vitwit'
      },
      {
        address: 'https://regen.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://regen.stakesystems.io:2053',
        provider: 'stakesystems'
      },
      {
        address: 'http://rpc.regen.forbole.com:80',
        provider: 'forbole'
      },
      {
        address: 'https://regen-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://regen-rpc.easy2stake.com',
        provider: 'Easy 2 Stake'
      },
      {
        address: 'https://regen-rpc.theamsolutions.info',
        provider: 'AM Solutions'
      },
      {
        address: 'https://regen-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://regen-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://regen-rpc.polkachu.com:443',
        provider: 'Polkachu'
      }
    ],
    rest: [
      {
        address: 'http://public-rpc.regen.vitwit.com:1317',
        provider: 'vitwit'
      },
      {
        address: 'https://regen.stakesystems.io',
        provider: 'stakesystems'
      },
      {
        address: 'https://regen.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://regen-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rest-regen.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://regen-lcd.easy2stake.com',
        provider: 'Easy 2 Stake'
      },
      {
        address: 'https://regen-api.theamsolutions.info',
        provider: 'AM Solutions'
      },
      {
        address: 'https://regen-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://regen-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://regen-api.polkachu.com',
        provider: 'Polkachu'
      }
    ],
    grpc: [
      {
        address: 'regen-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'regen.grpc.m.stavr.tech:124',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'regen-grpc.w3coins.io:22790',
        provider: 'w3coins'
      },
      {
        address: 'regen-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'regen-grpc.polkachu.com:22790',
        provider: 'Polkachu'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/regen',
      txPage: 'https://ezstaking.app/regen/txs/${txHash}',
      accountPage: 'https://ezstaking.app/regen/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/regen',
      txPage: 'https://staking-explorer.com/transaction.php?chain=regen&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=regen&addr=${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Regen-Mainnet',
      txPage: 'https://explorer.stavr.tech/Regen-Mainnet/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/regen',
      txPage: 'https://ping.pub/regen/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/regen-network',
      txPage: 'https://atomscan.com/regen-network/transactions/${txHash}',
      accountPage: 'https://atomscan.com/regen-network/accounts/${accountAddress}'
    },
    {
      kind: 'Valopers',
      url: 'https://regen.valopers.com/',
      txPage: 'https://regen.valopers.com/transactions/${txHash}',
      accountPage: 'https://regen.valopers.com/account/${accountAddress}'
    }
  ],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg'
    }],
  snapshots: [{
      url: 'https://polkachu.com/tendermint_snapshots/regen',
      type: 'pruned',
      compression: 'lz4',
      checksumAvailable: false,
      provider: 'Polkachu'
    }]
};
export default info;