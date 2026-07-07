import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'qorechaintestnet',
  chainType: 'cosmos',
  chainId: 'qorechain-diana',
  prettyName: 'QoreChain Testnet',
  website: 'https://www.qorechain.io',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'qor',
  daemonName: 'qorechaind',
  nodeHome: '$HOME/.qorechaind',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  description: 'Public test network for QoreChain, a quantum-safe Layer 1. Transactions are signed with a hybrid post-quantum scheme (ML-DSA-87 plus classical secp256k1), enforced by default, with SHAKE-256 as the default hash. Accounts use standard secp256k1 keys (coin type 118). QoreChain also runs EVM (chain id 9800) and SVM execution over a single unified 20-byte account shared across all VMs.',
  fees: {
    feeTokens: [{
        denom: 'uqor',
        fixedMinGasPrice: 0.1,
        lowGasPrice: 0.1,
        averageGasPrice: 0.15,
        highGasPrice: 0.25
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uqor'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/qorechain/qorechain-core',
    recommendedVersion: 'v3.1.82',
    compatibleVersions: ['v3.1.82'],
    consensus: {
      type: 'cometbft',
      version: '0.38.19'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qorechain/images/qorechain.png'
  },
  images: [{
      imageSync: {
        chainName: 'qorechain'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qorechain/images/qorechain.png'
    }],
  apis: {
    rpc: [{
        address: 'https://rpc-testnet.qore.host',
        provider: 'QoreChain'
      }],
    rest: [{
        address: 'https://api-testnet.qore.host',
        provider: 'QoreChain'
      }],
    wss: [{
        address: 'wss://rpc-testnet.qore.host/websocket',
        provider: 'QoreChain'
      }],
    evmHttpJsonrpc: [{
        address: 'https://evm-testnet.qore.host',
        provider: 'QoreChain'
      }]
  },
  keywords: [
    'testnet',
    'quantum-safe',
    'post-quantum',
    'pqc',
    'evm',
    'svm'
  ]
};
export default info;