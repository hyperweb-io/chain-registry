import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'althea',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://althea.net/',
  prettyName: 'Althea',
  chainType: 'cosmos',
  chainId: 'althea_258432-1',
  bech32Prefix: 'althea',
  daemonName: 'althea',
  nodeHome: '$HOME/.althea',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'aalthea',
        fixedMinGasPrice: 100000000000,
        lowGasPrice: 100000000000,
        averageGasPrice: 100000000000,
        highGasPrice: 300000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'aalthea'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/althea/images/althea.png'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/althea/images/althea.png'
    }, {
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/althea/images/althea.svg'
    }],
  codebase: {
    gitRepo: 'https://github.com/AltheaFoundation/althea-L1',
    recommendedVersion: 'v1.5.1',
    compatibleVersions: ['v1.5.1'],
    binaries: {
      "linux/amd64": 'https://github.com/AltheaFoundation/althea-L1/releases/download/v1.5.1/althea-linux-amd64'
    },
    genesis: {
      genesisUrl: 'https://github.com/AltheaFoundation/althea-L1-docs/blob/main/althea-l1-mainnet-genesis.json'
    }
  },
  apis: {
    rest: [
      {
        address: 'https://nodes.chandrastation.com/api/althea/',
        provider: 'Chandra Station'
      },
      {
        address: 'https://althea.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rest.lavenderfive.com:443/althea',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://althea_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://api.althea.citizenweb3.com',
        provider: 'Citizen Web3'
      },
      {
        address: 'https://api.althea-archive.citizenweb3.com',
        provider: 'Citizen Web3'
      }
    ],
    rpc: [
      {
        address: 'https://nodes.chandrastation.com/rpc/althea/',
        provider: 'Chandra Station'
      },
      {
        address: 'https://althea.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/althea',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://althea_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://rpc.althea.citizenweb3.com',
        provider: 'Citizen Web3'
      },
      {
        address: 'https://rpc.althea-archive.citizenweb3.com',
        provider: 'Citizen Web3'
      }
    ],
    grpc: [
      {
        address: 'althea.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'grpc.althea.citizenweb3.com:443',
        provider: 'Citizen Web3'
      },
      {
        address: 'grpc.althea-archive.citizenweb3.com:443',
        provider: 'Citizen Web3'
      }
    ]
  },
  explorers: [
    {
      kind: 'Chainroot',
      url: 'https://explorer.chainroot.io/althea',
      txPage: 'https://explorer.chainroot.io/althea/transactions/${txHash}',
      accountPage: 'https://explorer.chainroot.io/althea/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/althea',
      txPage: 'https://staking-explorer.com/transaction.php?chain=althea&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=althea&addr=${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/althea',
      txPage: 'https://www.mintscan.io/althea/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/althea/accounts/${accountAddress}'
    },
    {
      kind: 'Valopers',
      url: 'https://althea.valopers.com/',
      txPage: 'https://althea.valopers.com/transactions/${txHash}',
      accountPage: 'https://althea.valopers.com/account/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/althea',
      txPage: 'https://explorer.whenmoonwhenlambo.money/althea/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/althea/account/${accountAddress}'
    },
    {
      kind: 'Validatorinfo',
      url: 'https://validatorinfo.com/networks/althea/overview',
      validatorPage: 'https://validatorinfo.com/networks/althea/validators',
      proposalPage: 'https://validatorinfo.com/networks/althea/governance'
    }
  ]
};
export default info;