import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'nvnmchain',
  chainType: 'cosmos',
  chainId: 'nvnm-1',
  prettyName: 'NVNM Chain',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://nvnmchain.io',
  bech32Prefix: 'nvnm',
  daemonName: 'nvnmchaind',
  nodeHome: '$HOME/.nvnmchain',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'ibc/93575DF9D4BC5B2C85D967DE020E5DEA1863FDD108AD509A36DA6C83E3398227',
        fixedMinGasPrice: 40000000000,
        lowGasPrice: 40000000000,
        averageGasPrice: 80000000000,
        highGasPrice: 120000000000
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/NVNM-Chain/nvnmchain',
    recommendedVersion: 'v1.2.0',
    compatibleVersions: ['v1.2.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.23'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.53.6',
      repo: 'https://github.com/MANTRA-Chain/cosmos-sdk',
      tag: 'v0.53.8-v8-mantra-1'
    },
    ibc: {
      type: 'go',
      version: 'v10.5.1'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/NVNM-Chain/net/refs/heads/main/nvnm-1/genesis.json'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.nvnmchain.io',
        provider: 'NVNM Chain'
      }],
    rest: [{
        address: 'https://api.nvnmchain.io',
        provider: 'NVNM Chain'
      }],
    grpc: [{
        address: 'grpc.nvnmchain.io:443',
        provider: 'NVNM Chain'
      }],
    evmHttpJsonrpc: [{
        address: 'https://evm.nvnmchain.io',
        provider: 'NVNM Chain'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://explorer.nvnmchain.io/NVNM%20Mainnet',
      txPage: 'https://explorer.nvnmchain.io/NVNM%20Mainnet/tx/${txHash}',
      accountPage: 'https://explorer.nvnmchain.io/NVNM%20Mainnet/account/${accountAddress}'
    }, {
      kind: 'blockscout',
      url: 'https://evm.explorer.nvnmchain.io',
      txPage: 'https://evm.explorer.nvnmchain.io/tx/${txHash}',
      accountPage: 'https://evm.explorer.nvnmchain.io/address/${accountAddress}'
    }],
  keywords: [
    'ai',
    'evm',
    'anchoring'
  ],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nvnmchain/images/nvnm-token-primary.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nvnmchain/images/nvnm-token-primary.svg'
  },
  images: [{
      imageSync: {
        chainName: 'nvnmchain',
        baseDenom: 'anvnm'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nvnmchain/images/nvnm-token-primary.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nvnmchain/images/nvnm-token-primary.svg',
      theme: {
        circle: true
      }
    }]
};
export default info;