import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'mantrachaintestnet2',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'MANTRA Dukong Testnet',
  chainType: 'cosmos',
  chainId: 'mantra-dukong-1',
  bech32Prefix: 'mantra',
  daemonName: 'mantrachaind',
  nodeHome: '$HOME/.mantrachain',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'amantra',
        fixedMinGasPrice: 40000000000,
        lowGasPrice: 40000000000,
        averageGasPrice: 80000000000,
        highGasPrice: 120000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'amantra'
      }],
    lockDuration: {
      time: '691200s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/MANTRA-Chain/mantrachain',
    recommendedVersion: 'v7.0.0-rc2',
    compatibleVersions: ['v7.0.0-rc2'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.19'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.53.4',
      repo: 'https://github.com/MANTRA-Chain/cosmos-sdk',
      tag: 'v0.53.4-v7-mantra-2'
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
      genesisUrl: 'https://raw.githubusercontent.com/MANTRA-Chain/net/refs/heads/main/mantra-dukong-1/genesis.json'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.dukong.mantrachain.io',
        provider: 'MANTRACHAIN'
      }],
    rest: [{
        address: 'https://api.dukong.mantrachain.io',
        provider: 'MANTRACHAIN'
      }, {
        address: 'https://lcd-office.cosmostation.io/mantra-testnet/',
        provider: 'Cosmostation'
      }],
    grpc: [{
        address: 'https://grpc.dukong.mantrachain.io',
        provider: 'MANTRACHAIN'
      }, {
        address: 'grpc-office-mantra.cosmostation.io:443',
        provider: 'Cosmostation'
      }],
    evmHttpJsonrpc: [{
        address: 'https://evm.dukong.mantrachain.io',
        provider: 'MANTRACHAIN'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg'
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/mantra-testnet',
      txPage: 'https://mintscan.io/mantra-testnet/txs/${txHash}',
      accountPage: 'https://mintscan.io/mantra-testnet/account/${accountAddress}'
    },
    {
      kind: 'mantrascan',
      url: 'https://mantrascan.io/dukong',
      txPage: 'https://mantrascan.io/dukong/tx/${txHash}',
      accountPage: 'https://mantrascan.io/dukong/address/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.mantrachain.io',
      txPage: 'https://explorer.mantrachain.io/MANTRA-Dukong/tx/${txHash}',
      accountPage: 'https://explorer.mantrachain.io/MANTRA-Dukong/account/${accountAddress}'
    },
    {
      kind: 'mantrascan',
      url: 'https://mantrascan.io/dukong',
      txPage: 'https://mantrascan.io/dukong/tx/${txHash}',
      accountPage: 'https://mantrascan.io/dukong/address/${accountAddress}'
    }
  ],
  keywords: [
    'rwa',
    'wasm',
    'evm',
    'staking',
    'testnet'
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