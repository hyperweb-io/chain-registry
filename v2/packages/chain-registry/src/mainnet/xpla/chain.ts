import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'xpla',
  status: 'live',
  website: 'https://conx.xyz',
  networkType: 'mainnet',
  prettyName: 'CONX',
  chainType: 'cosmos',
  chainId: 'dimension_37-1',
  bech32Prefix: 'xpla',
  daemonName: 'xplad',
  nodeHome: '$HOME/.xpla',
  keyAlgos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'axpla',
        fixedMinGasPrice: 10000000000000,
        lowGasPrice: 10000000000000,
        averageGasPrice: 10000000000000,
        highGasPrice: 10000000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'axpla'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/xpladev/xpla',
    recommendedVersion: 'v1.14.0',
    compatibleVersions: ['v1.14.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.21'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/xpladev/mainnet/main/dimension_37-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/xpladev/cosmos-sdk',
      version: 'v0.53.6',
      tag: 'v0.53.6-xpla-2'
    },
    ibc: {
      type: 'go',
      version: 'v10.5.0'
    },
    cosmwasm: {
      version: 'v0.60.9'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://dimension-rpc.xpla.dev',
        provider: 'Holdings'
      },
      {
        address: 'https://xpla.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/xpla',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://xpla-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://xpla-rpc.polkachu.com:443',
        provider: 'Polkachu'
      }
    ],
    rest: [
      {
        address: 'https://dimension-lcd.xpla.io',
        provider: 'ZenaAD'
      },
      {
        address: 'https://dimension-lcd.xpla.dev',
        provider: 'Holdings'
      },
      {
        address: 'https://xpla.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rest.lavenderfive.com:443/xpla',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://xpla-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://xpla-api.polkachu.com',
        provider: 'Polkachu'
      }
    ],
    grpc: [
      {
        address: 'xpla-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'xpla.grpc.m.stavr.tech:112',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'xpla-grpc.polkachu.com:20190',
        provider: 'Polkachu'
      }
    ],
    evmHttpJsonrpc: [{
        address: 'https://dimension-evm-rpc.xpla.dev',
        provider: 'Holdings'
      }, {
        address: 'https://xpla-evm-rpc.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }]
  },
  explorers: [
    {
      kind: 'explorer.conx',
      url: 'https://explorer.conx.xyz/mainnet',
      txPage: 'https://explorer.conx.xyz/mainnet/tx/${txHash}'
    },
    {
      kind: 'finder',
      url: 'https://finder.xpla.io',
      txPage: 'https://finder.xpla.io/mainnet/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Xpla-Mainnet',
      txPage: 'https://explorer.stavr.tech/Xpla-Mainnet/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Xpla-Mainnet/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/xpla',
      txPage: 'https://www.mintscan.io/xpla/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/xpla/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/xpla',
      txPage: 'https://staking-explorer.com/transaction.php?chain=xpla&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=xpla&addr=${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/xpla',
      txPage: 'https://ezstaking.app/xpla/txs/${txHash}',
      accountPage: 'https://ezstaking.app/xpla/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg'
    }],
  snapshots: [{
      url: 'https://polkachu.com/tendermint_snapshots/xpla',
      type: 'pruned',
      compression: 'lz4',
      checksumAvailable: false,
      provider: 'Polkachu'
    }]
};
export default info;