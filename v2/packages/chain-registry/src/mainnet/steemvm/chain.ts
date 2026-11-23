import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'steemvm',
  chainType: 'cosmos',
  chainId: 'SteemVM-Manaslu-81630',
  prettyName: 'SteemVM',
  website: 'https://svmapp.com',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'steem',
  daemonName: 'steemvmd',
  nodeHome: '$HOME/.steemvm',
  keyAlgos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'asteem',
        fixedMinGasPrice: 1000000000,
        lowGasPrice: 1000000000,
        averageGasPrice: 1250000000,
        highGasPrice: 1500000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'asteem'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/blazeapps007/SteemVirtualMachine-EVM',
    recommendedVersion: 'v0.0.8',
    compatibleVersions: ['v0.0.8'],
    consensus: {
      type: 'cometbft',
      version: 'v0.39.4'
    },
    language: {
      type: 'go',
      version: '1.26.9'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.54.4'
    },
    ibc: {
      type: 'go',
      version: 'v11.2.0',
      icsEnabled: ['ics20-1']
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/blazeapps007/SteemVirtualMachine-EVM/release/v0.0.8/Instructions/genesis.json'
    }
  },
  images: [{
      imageSync: {
        chainName: 'steemvm',
        baseDenom: 'asteem'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/steem/images/steem.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/steem/images/steem.svg'
    }],
  apis: {
    rpc: [{
        address: 'https://rpc.steemvmscan.com',
        provider: 'SteemVM'
      }],
    rest: [{
        address: 'https://api.steemvmscan.com',
        provider: 'SteemVM'
      }],
    evmHttpJsonrpc: [{
        address: 'https://evm.steemvmscan.com',
        provider: 'SteemVM'
      }]
  },
  explorers: [{
      kind: 'SVM Scan',
      url: 'https://steemvmscan.com',
      txPage: 'https://steemvmscan.com/tx/${txHash}',
      accountPage: 'https://steemvmscan.com/accounts/${accountAddress}'
    }, {
      kind: 'blockscout',
      url: 'https://evmscan.steemvmscan.com',
      txPage: 'https://evmscan.steemvmscan.com/tx/${txHash}',
      accountPage: 'https://evmscan.steemvmscan.com/address/${accountAddress}'
    }]
};
export default info;