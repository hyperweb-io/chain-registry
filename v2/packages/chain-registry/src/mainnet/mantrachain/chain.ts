import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'mantrachain',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'MANTRA',
  chainType: 'cosmos',
  chainId: 'mantra-1',
  bech32Prefix: 'mantra',
  daemonName: 'mantrachaind',
  nodeHome: '$HOME/.mantrachain',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uom',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.01,
        averageGasPrice: 0.01,
        highGasPrice: 0.03
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uom'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/MANTRA-Chain/mantrachain',
    recommendedVersion: 'v3.0.1',
    compatibleVersions: ['v3.0.0', 'v3.0.1'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.17'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.12',
      repo: 'https://github.com/MANTRA-Chain/cosmos-sdk',
      tag: 'v0.50.12-v2-mantra-1'
    },
    cosmwasm: {
      version: 'v0.54.0',
      enabled: true
    },
    ibc: {
      type: 'go',
      version: 'v8.7.0'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/MANTRA-Chain/mantrachain/refs/heads/main/networks/mantra-1/genesis.json'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.mantrachain.io',
        provider: 'MANTRACHAIN'
      },
      {
        address: 'https://rpc-mantra.r93axnodes.cloud:443',
        provider: 'r93AX Nodes'
      },
      {
        address: 'https://mantrachain-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://mantra-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://mantra-mainnet-rpc.itrocket.net:443',
        provider: 'ITRocket'
      },
      {
        address: 'https://mantra.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥'
      }
    ],
    rest: [
      {
        address: 'https://api.mantrachain.io',
        provider: 'MANTRACHAIN'
      },
      {
        address: 'https://api-mantra.r93axnodes.cloud:443',
        provider: 'r93AX Nodes'
      },
      {
        address: 'https://mantrachain-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://mantra-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://mantra-mainnet-api.itrocket.net',
        provider: 'ITRocket'
      },
      {
        address: 'https://mantra.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.mantrachain.io',
        provider: 'MANTRACHAIN'
      },
      {
        address: 'grpc-mantra.r93axnodes.cloud:443',
        provider: 'r93AX Nodes'
      },
      {
        address: 'mantrachain-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'mantra-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'mantra-mainnet-grpc.itrocket.net:443',
        provider: 'ITRocket'
      },
      {
        address: 'mantra.grpc.m.stavr.tech:3601',
        provider: '🔥STAVR🔥'
      }
    ]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg'
  },
  explorers: [{
      kind: 'ITRocket',
      url: 'https://mainnet.itrocket.net/mantra',
      txPage: 'https://mainnet.itrocket.net/mantra/transaction/${txHash}',
      accountPage: 'https://mainnet.itrocket.net/mantra/account/${accountAddress}'
    }, {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Mantra-Mainnet',
      txPage: 'https://explorer.stavr.tech/Mantra-Mainnet/transaction/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Mantra-Mainnet/account/${accountAddress}'
    }],
  keywords: [
    'rwa',
    'wasm',
    'staking'
  ],
  images: [{
      imageSync: {
        chainName: 'mantrachain',
        baseDenom: 'uom'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg',
      theme: {
        circle: true,
        primaryColorHex: '#fba0c1'
      }
    }]
};
export default info;