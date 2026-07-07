import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'qorechain',
  chainType: 'cosmos',
  chainId: 'qorechain-vladi',
  prettyName: 'QoreChain',
  website: 'https://www.qorechain.io',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'qor',
  daemonName: 'qorechaind',
  nodeHome: '$HOME/.qorechaind',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  description: 'QoreChain is a quantum-safe Layer 1. Every transaction is signed with a hybrid post-quantum scheme (ML-DSA-87, FIPS 204, plus classical secp256k1), enforced by default, with SHAKE-256 as the default hash. Accounts use standard secp256k1 keys (coin type 118) and the hybrid post-quantum signature is carried alongside and verified on-chain. QoreChain also runs EVM (chain id 9801) and SVM execution over a single unified account: the 20-byte account is shared across VMs, so the bech32 address (qor1...) maps to the same bytes as the EVM 0x address, and the SVM address is those 20 bytes right-padded to 32 and base58-encoded. All VMs read one native bank balance (1 QOR = 1,000,000 uqor).',
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
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qorechain/images/qorechain.png'
    }],
  apis: {
    rpc: [{
        address: 'https://rpc.qore.host',
        provider: 'QoreChain'
      }],
    rest: [{
        address: 'https://api.qore.host',
        provider: 'QoreChain'
      }],
    wss: [{
        address: 'wss://rpc.qore.host/websocket',
        provider: 'QoreChain'
      }],
    evmHttpJsonrpc: [{
        address: 'https://evm.qore.host',
        provider: 'QoreChain'
      }]
  },
  explorers: [{
      kind: 'QoreChain Explorer',
      url: 'https://explore.qore.network',
      txPage: 'https://explore.qore.network/tx/${txHash}',
      accountPage: 'https://explore.qore.network/address/${accountAddress}'
    }],
  keywords: [
    'mainnet',
    'quantum-safe',
    'post-quantum',
    'pqc',
    'evm',
    'svm'
  ]
};
export default info;