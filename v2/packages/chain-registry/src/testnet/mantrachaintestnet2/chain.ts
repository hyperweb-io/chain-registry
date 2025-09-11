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
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uom',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
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
      genesisUrl: 'https://raw.githubusercontent.com/MANTRA-Chain/mantrachain/refs/heads/main/networks/mantra-dukong-1/genesis.json'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.dukong.mantrachain.io',
        provider: 'MANTRACHAIN'
      }, {
        address: 'https://mantra-testnet-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }],
    rest: [{
        address: 'https://api.dukong.mantrachain.io',
        provider: 'MANTRACHAIN'
      }, {
        address: 'https://mantra-testnet-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }],
    grpc: [{
        address: 'https://grpc.dukong.mantrachain.io',
        provider: 'MANTRACHAIN'
      }, {
        address: 'mantra-testnet-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }],
    evmHttpJsonrpc: [{
        address: 'https://evm.dukong.mantrachain.io',
        provider: 'MANTRACHAIN'
      }, {
        address: 'https://rpc.evm.mantra.testnet.cosmostation.io',
        provider: 'Cosmostation'
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