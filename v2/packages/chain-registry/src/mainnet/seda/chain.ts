import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'seda',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.seda.xyz/',
  prettyName: 'SEDA',
  chainType: 'cosmos',
  chainId: 'seda-1',
  bech32Prefix: 'seda',
  daemonName: 'sedad',
  nodeHome: '$HOME/.sedad',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'aseda',
        fixedMinGasPrice: 10000000000,
        lowGasPrice: 10000000000,
        averageGasPrice: 10000000000,
        highGasPrice: 14000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'aseda'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/sedaprotocol/seda-chain',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    binaries: {
      "linux/amd64": 'https://github.com/sedaprotocol/seda-chain/releases/download/v1.0.0/sedad-amd64',
      "linux/arm64": 'https://github.com/sedaprotocol/seda-chain/releases/download/v1.0.0/sedad-arm64'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/sedaprotocol/seda-networks/main/mainnet/genesis.json'
    },
    language: {
      type: 'go',
      version: '1.23.5'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.17'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.14'
    },
    cosmwasm: {
      version: 'v0.53.3',
      repo: 'https://github.com/CosmWasm/wasmd',
      enabled: true
    },
    ibc: {
      type: 'go',
      version: 'v8.7.0'
    },
    tag: 'v1.0.0'
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.png'
  },
  description: 'SEDA is a standard for modular data transport and querying. Any data type, for all networks.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.mainnet.seda.xyz/',
        provider: 'SEDA'
      },
      {
        address: 'https://seda-rpc.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://seda.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/seda',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://seda-rpc.kleomedes.network/',
        provider: 'Kleomedes'
      },
      {
        address: 'https://seda.ibs.team:443/rpc',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://rpc.seda.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://seda_mainnet_rpc.chain.whenmoonwhenlambo.money:443',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://seda-rpc.node39.top:443',
        provider: 'Node39.TOP'
      },
      {
        address: 'https://seda-rpc.cosmos-apis.com:443',
        provider: 'RHINO 🦏'
      },
      {
        address: 'https://seda.rpc.cumulo.org.es',
        provider: 'Cumulo'
      },
      {
        address: 'https://rpc.seda.tcnetwork.io',
        provider: 'TC Network'
      },
      {
        address: 'https://seda-rpc.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://rpc.cros-nest.com/seda',
        provider: 'Crosnest'
      }
    ],
    rest: [
      {
        address: 'https://lcd.mainnet.seda.xyz/',
        provider: 'SEDA'
      },
      {
        address: 'https://seda-api.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://seda.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://rest.lavenderfive.com:443/seda',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://seda-api.kleomedes.network/',
        provider: 'Kleomedes'
      },
      {
        address: 'https://seda.ibs.team:443/api',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://lcd.seda.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://seda_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://seda-api.node39.top:443',
        provider: 'Node39.TOP'
      },
      {
        address: 'https://seda-rest.cosmos-apis.com:443',
        provider: 'RHINO 🦏'
      },
      {
        address: 'https://seda.api.cumulo.org.es',
        provider: 'Cumulo'
      },
      {
        address: 'https://rest.seda.tcnetwork.io',
        provider: 'TC Network'
      },
      {
        address: 'https://seda-api.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://rest.cros-nest.com/seda',
        provider: 'Crosnest'
      }
    ],
    grpc: [
      {
        address: 'seda-grpc.polkachu.com:25890',
        provider: 'Polkachu'
      },
      {
        address: 'seda.grpc.kjnodes.com:443',
        provider: 'kjnodes'
      },
      {
        address: 'seda.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://grpc.seda.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'seda-grpc.cosmos-apis.com:443',
        provider: 'RHINO 🦏'
      },
      {
        address: 'seda.grpc.cumulo.org.es:443',
        provider: 'Cumulo'
      },
      {
        address: 'http://seda-grpc.stakeandrelax.net:25890',
        provider: 'Stake&Relax 🦥'
      }
    ]
  },
  explorers: [
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/seda',
      txPage: 'https://explorer.tcnetwork.io/seda/transaction/${txHash}'
    },
    {
      kind: 'sedaexplorer',
      url: 'https://explorer.seda.xyz/',
      txPage: 'https://explorer.seda.xyz/txs/${txHash}',
      accountPage: 'https://explorer.seda.xyz/account/${accountAddress}'
    },
    {
      kind: 'explorers.guru',
      url: 'https://seda.explorers.guru',
      txPage: 'https://seda.explorers.guru/transaction/${txHash}',
      accountPage: 'https://seda.explorers.guru/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/seda',
      txPage: 'https://staking-explorer.com/transaction.php?chain=seda&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=seda&addr=${accountAddress}'
    },
    {
      kind: 'Apple juice 🧃',
      url: 'https://explorer.256x25.tech/seda-mainnet',
      txPage: 'https://explorer.256x25.tech/seda-mainnet/tx/${txHash}',
      accountPage: 'https://explorer.256x25.tech/seda-mainnet/account/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/seda',
      txPage: 'https://explorer.whenmoonwhenlambo.money/seda/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/seda/account/${accountAddress}'
    },
    {
      kind: 'Node39.TOP',
      url: 'https://explorer.node39.top/Seda',
      txPage: 'https://explorer.node39.top/Seda/tx/${txHash}',
      accountPage: 'https://explorer.node39.top/Seda/account/${accountAddress}'
    },
    {
      kind: 'Stake&Relax 🦥 explorer',
      url: 'https://explorer.stakeandrelax.net/seda',
      txPage: 'https://explorer.stakeandrelax.net/seda/tx/${txHash}',
      accountPage: 'https://explorer.stakeandrelax.net/seda/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.png'
    }]
};
export default info;