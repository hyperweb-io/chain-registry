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
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
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
      }],
    lockDuration: {
      time: '691200s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/MANTRA-Chain/mantrachain',
    recommendedVersion: 'v6.1.1',
    compatibleVersions: ['v6.1.0', 'v6.1.1'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.19'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.53.4',
      repo: 'https://github.com/MANTRA-Chain/cosmos-sdk',
      tag: 'v0.53.4-mantra'
    },
    cosmwasm: {
      version: 'v0.61.1',
      enabled: true
    },
    ibc: {
      type: 'go',
      version: 'v10.4.0'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/MANTRA-Chain/net/refs/heads/main/mantra-1/genesis.json'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.mantrachain.io',
        provider: 'MANTRACHAIN'
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
        address: 'mantra-mainnet-grpc.itrocket.net:443',
        provider: 'ITRocket'
      },
      {
        address: 'mantra.grpc.m.stavr.tech:3601',
        provider: '🔥STAVR🔥'
      }
    ],
    evmHttpJsonrpc: [{
        address: 'https://evm.mantrachain.io',
        provider: 'MANTRACHAIN'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg'
  },
  explorers: [
    {
      kind: 'Chainroot',
      url: 'https://explorer.chainroot.io/mantra',
      txPage: 'https://explorer.chainroot.io/mantra/transactions/${txHash}',
      accountPage: 'https://explorer.chainroot.io/mantra/accounts/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/mantra',
      txPage: 'https://mintscan.io/mantra/txs/${txHash}',
      accountPage: 'https://mintscan.io/mantra/account/${accountAddress}'
    },
    {
      kind: 'ITRocket',
      url: 'https://mainnet.itrocket.net/mantra',
      txPage: 'https://mainnet.itrocket.net/mantra/transaction/${txHash}',
      accountPage: 'https://mainnet.itrocket.net/mantra/account/${accountAddress}'
    },
    {
      kind: 'mantrascan',
      url: 'https://mantrascan.io/mainnet',
      txPage: 'https://mantrascan.io/mainnet/tx/${txHash}',
      accountPage: 'https://mantrascan.io/mainnet/address/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Mantra-Mainnet',
      txPage: 'https://explorer.stavr.tech/Mantra-Mainnet/transaction/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Mantra-Mainnet/account/${accountAddress}'
    }
  ],
  keywords: [
    'rwa',
    'wasm',
    'evm',
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
        circle: true
      }
    }]
};
export default info;