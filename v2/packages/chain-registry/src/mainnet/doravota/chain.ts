import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'doravota',
  chainType: 'cosmos',
  chainId: 'vota-ash',
  prettyName: 'Dora Vota',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'dora',
  daemonName: 'dorad',
  nodeHome: '$HOME/.dora',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'peaka',
        fixedMinGasPrice: 100000000000,
        lowGasPrice: 100000000000,
        averageGasPrice: 100000000000,
        highGasPrice: 100000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'peaka'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/dorafactory/doravota',
    recommendedVersion: 'v11.0.0',
    compatibleVersions: ['v11.0.0'],
    genesis: {
      genesisUrl: 'https://github.com/DoraFactory/doravota/blob/main/config/mainnet/genesis.json'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://vota-rpc.dorafactory.org/',
        provider: 'dorafactory'
      },
      {
        address: 'https://m-dora.rpc.utsa.tech',
        provider: 'lesnik | UTSA'
      },
      {
        address: 'https://dora-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://doravota-mainnet-rpc.itrocket.net:443',
        provider: 'ITRocket'
      }
    ],
    rest: [
      {
        address: 'https://vota-rest.dorafactory.org',
        provider: 'dorafactory'
      },
      {
        address: 'https://m-dora.api.utsa.tech',
        provider: 'lesnik | UTSA'
      },
      {
        address: 'https://dora-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://doravota-mainnet-api.itrocket.net',
        provider: 'ITRocket'
      }
    ],
    grpc: [
      {
        address: 'vota-grpc.dorafactory.org:443',
        provider: 'dorafactory'
      },
      {
        address: 'dora-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'doravota-mainnet-grpc.itrocket.net:443',
        provider: 'ITRocket'
      }
    ]
  },
  explorers: [
    {
      kind: 'Dora Vota Ping Pub',
      url: 'https://vota-explorer.dorafactory.org',
      txPage: 'https://vota-explorer.dorafactory.org/doravota/tx/${txHash}'
    },
    {
      kind: 'lesnik | UTSA Ping Pub',
      url: 'https://exp.utsa.tech/dora/staking',
      txPage: 'https://exp.utsa.tech/dora/tx/${txHash}'
    },
    {
      kind: 'ITRocket Ping Pub',
      url: 'https://mainnet.itrocket.net/doravota/staking',
      txPage: 'https://mainnet.itrocket.net/doravota/tx/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/doravota',
      txPage: 'https://staking-explorer.com/transaction.php?chain=doravota&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=doravota&addr=${accountAddress}'
    },
    {
      kind: 'Explorers',
      url: 'https://dora.explorers.guru',
      txPage: 'https://dora.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'Valopers',
      url: 'https://dora.valopers.com/',
      txPage: 'https://dora.valopers.com/transactions/${txHash}',
      accountPage: 'https://dora.valopers.com/account/${accountAddress}'
    }
  ]
};
export default info;