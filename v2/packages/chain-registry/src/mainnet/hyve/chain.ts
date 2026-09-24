import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'hyve',
  chainType: 'cosmos',
  chainId: 'hyve_7847-1',
  prettyName: 'HyveChain',
  website: 'https://hyvechain.com',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'hyve',
  daemonName: 'hyved',
  nodeHome: '$HOME/.hyved',
  keyAlgos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'ahyve',
        fixedMinGasPrice: 10000000000,
        lowGasPrice: 10000000000,
        averageGasPrice: 15000000000,
        highGasPrice: 20000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ahyve'
      }]
  },
  codebase: {
    consensus: {
      type: 'cometbft',
      version: 'v0.38.18'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.53.4'
    },
    ibc: {
      type: 'go',
      version: 'v10.3.1'
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/hyve/images/hyve.png'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/hyve/images/hyve.png'
  },
  description: 'HyveChain is an EVM-compatible Cosmos SDK chain with a fixed supply and a native shielded-pool privacy layer. It settles both Ethereum-style transactions and Cosmos messages on one state machine, and connects to the Interchain over IBC.',
  apis: {
    rpc: [{
        address: 'https://tendermint.hyvechain.com',
        provider: 'HyveChain'
      }],
    rest: [{
        address: 'https://api.hyvechain.com',
        provider: 'HyveChain'
      }],
    grpc: [{
        address: 'grpc.hyvechain.com:443',
        provider: 'HyveChain'
      }],
    evmHttpJsonrpc: [{
        address: 'https://rpc.hyvechain.com',
        provider: 'HyveChain'
      }]
  },
  explorers: [{
      kind: 'HyveChain Explorer',
      url: 'https://explorer.hyvechain.com',
      txPage: 'https://explorer.hyvechain.com/tx/${txHash}',
      accountPage: 'https://explorer.hyvechain.com/address/${accountAddress}'
    }],
  keywords: [
    'evm',
    'privacy',
    'dex',
    'ibc'
  ]
};
export default info;