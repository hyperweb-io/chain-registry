import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'coreum',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.coreum.com',
  prettyName: 'Coreum',
  chainType: 'cosmos',
  chainId: 'coreum-mainnet-1',
  bech32Prefix: 'core',
  daemonName: 'cored',
  nodeHome: '$HOME/.core/coreum-mainnet-1',
  keyAlgos: ['secp256k1'],
  slip44: 990,
  fees: {
    feeTokens: [{
        denom: 'ucore',
        fixedMinGasPrice: 0.03125,
        lowGasPrice: 0.0625,
        averageGasPrice: 0.0625,
        highGasPrice: 62.5
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ucore'
      }],
    lockDuration: {
      time: '168h'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/CoreumFoundation/coreum',
    recommendedVersion: 'v4.1.2',
    compatibleVersions: ['v4.1.2'],
    binaries: {
      "linux/amd64": 'https://github.com/CoreumFoundation/coreum/releases/download/v4.1.2/cored-linux-amd64?checksum=sha256:872b1eb6f2a77651401c7555b6b54eb2599e5de614acfcebeffce4384e7ab97a',
      "linux/arm64": 'https://github.com/CoreumFoundation/coreum/releases/download/v4.1.2/cored-linux-arm64?checksum=sha256:0be2851639208dee0803b7a4a43c847770a5961afcd66644ead32e78f530f5ca'
    },
    consensus: {
      type: 'cometbft',
      version: '0.38'
    },
    genesis: {
      name: 'v1',
      genesisUrl: 'https://raw.githubusercontent.com/CoreumFoundation/coreum/master/genesis/coreum-mainnet-1.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.47'
    },
    cosmwasm: {
      version: '0.45',
      enabled: true
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
      theme: {
        primaryColorHex: '#25d695'
      }
    }, {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg',
      theme: {
        primaryColorHex: '#24d494'
      }
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png'
  },
  apis: {
    rpc: [
      {
        address: 'https://full-node.mainnet-1.coreum.dev:26657',
        provider: 'Coreum Foundation'
      },
      {
        address: 'https://full-node-californium.mainnet-1.coreum.dev:26657',
        provider: 'Coreum Foundation'
      },
      {
        address: 'https://full-node-curium.mainnet-1.coreum.dev:26657',
        provider: 'Coreum Foundation'
      },
      {
        address: 'https://full-node-uranium.mainnet-1.coreum.dev:26657',
        provider: 'Coreum Foundation'
      },
      {
        address: 'https://rpc-coreum.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://coreum.rpc.silknodes.io',
        provider: 'Silk Nodes'
      },
      {
        address: 'https://coreum-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rpc.m.core.solonation.io',
        provider: '#SoloNation'
      },
      {
        address: 'https://coreum-rpc.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://coreum-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/coreum/rpc',
        provider: 'Stakewolle'
      },
      {
        address: 'https://coreum-rpc.chainroot.io',
        provider: 'Chainroot'
      }
    ],
    grpc: [
      {
        address: 'https://full-node.mainnet-1.coreum.dev:9090',
        provider: 'Coreum Foundation'
      },
      {
        address: 'https://full-node-californium.mainnet-1.coreum.dev:9090',
        provider: 'Coreum Foundation'
      },
      {
        address: 'https://full-node-curium.mainnet-1.coreum.dev:9090',
        provider: 'Coreum Foundation'
      },
      {
        address: 'https://full-node-uranium.mainnet-1.coreum.dev:9090',
        provider: 'Coreum Foundation'
      },
      {
        address: 'https://grpc.coreum.nodexcapital.com:444',
        provider: 'NodeX Validator'
      },
      {
        address: 'coreum-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'coreum-grpc.genznodes.dev:35090',
        provider: 'genznodes'
      },
      {
        address: 'coreum-grpc.chainroot.io:443',
        provider: 'Chainroot'
      }
    ],
    rest: [
      {
        address: 'https://rest-coreum.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://coreum.api.silknodes.io',
        provider: 'Silk Nodes'
      },
      {
        address: 'https://full-node.mainnet-1.coreum.dev:1317',
        provider: 'Coreum'
      },
      {
        address: 'https://coreum-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://api.m.core.solonation.io',
        provider: '#SoloNation'
      },
      {
        address: 'https://coreum-api.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://coreum-api.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/coreum/rest',
        provider: 'Stakewolle'
      },
      {
        address: 'https://coreum-api.chainroot.io',
        provider: 'Chainroot'
      }
    ]
  },
  explorers: [
    {
      kind: 'Coreum',
      url: 'https://explorer.coreum.com/coreum',
      txPage: 'https://explorer.coreum.com/coreum/transactions/${txHash}',
      accountPage: 'https://explorer.coreum.com/coreum/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/coreum',
      txPage: 'https://www.mintscan.io/coreum/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/coreum/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/coreum',
      txPage: 'https://staking-explorer.com/transaction.php?chain=coreum&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=coreum&addr=${accountAddress}'
    },
    {
      kind: 'NODEXPLORER',
      url: 'https://explorer.nodexcapital.com/coreum',
      txPage: 'https://explorer.nodexcapital.com/coreum/txs/${txHash}',
      accountPage: 'https://explorer.nodexcapital.com/coreum/account/${accountAddress}'
    },
    {
      kind: 'Silk Nodes',
      url: 'https://explorer.silknodes.io/coreum',
      txPage: 'https://explorer.silknodes.io/coreum/tx/${txHash}',
      accountPage: 'https://explorer.silknodes.io/coreum/account/${accountAddress}'
    },
    {
      kind: '#SoloNation',
      url: 'https://explorer.solonation.io/core-main',
      txPage: 'https://explorer.solonation.io/core-main/tx/${txHash}',
      accountPage: 'https://explorer.solonation.io/core-main/account/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/coreum',
      txPage: 'https://explorer.tcnetwork.io/coreum/transaction/${txHash}',
      accountPage: 'https://explorer.tcnetwork.io/coreum/account/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/coreum',
      txPage: 'https://ezstaking.app/coreum/txs/${txHash}',
      accountPage: 'https://ezstaking.app/coreum/account/${accountAddress}'
    },
    {
      kind: 'Chainroot',
      url: 'https://explorer.chainroot.io/coreum',
      txPage: 'https://explorer.chainroot.io/coreum/transactions/${txHash}',
      accountPage: 'https://explorer.chainroot.io/coreum/accounts/${accountAddress}'
    }
  ],
  keywords: [
    'dex',
    'staking',
    'wasm',
    'assets',
    'nft',
    'XRPL'
  ]
};
export default info;