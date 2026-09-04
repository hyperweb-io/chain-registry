import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'nvnmchaintestnet',
  chainType: 'cosmos',
  chainId: 'nvnm-testnet-1',
  prettyName: 'NVNM Chain Testnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://nvnmchain.io',
  bech32Prefix: 'nvnm',
  daemonName: 'nvnmchaind',
  nodeHome: '$HOME/.nvnmchain',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'ibc/00E24F149F01782E2C423BDB114C98D6C657DFC583124389192187BF8DC3A1AD',
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
      genesisUrl: 'https://raw.githubusercontent.com/NVNM-Chain/net/refs/heads/main/nvnm-testnet-1/genesis.json'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.testnet.nvnmchain.io',
        provider: 'NVNM Chain'
      }],
    rest: [{
        address: 'https://api.testnet.nvnmchain.io',
        provider: 'NVNM Chain'
      }],
    evmHttpJsonrpc: [{
        address: 'https://evm.testnet.nvnmchain.io',
        provider: 'NVNM Chain'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://explorer.nvnmchain.io/NVNM%20Testnet',
      txPage: 'https://explorer.nvnmchain.io/NVNM%20Testnet/tx/${txHash}',
      accountPage: 'https://explorer.nvnmchain.io/NVNM%20Testnet/account/${accountAddress}'
    }, {
      kind: 'blockscout',
      url: 'https://explorer.evm.testnet.nvnmchain.io',
      txPage: 'https://explorer.evm.testnet.nvnmchain.io/tx/${txHash}',
      accountPage: 'https://explorer.evm.testnet.nvnmchain.io/address/${accountAddress}'
    }],
  keywords: [
    'ai',
    'evm',
    'anchoring',
    'testnet'
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