import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'six',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'SIX Protocol',
  chainType: 'cosmos',
  chainId: 'sixnet',
  bech32Prefix: '6x',
  daemonName: 'sixd',
  nodeHome: '$HOME/.six',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'usix',
        fixedMinGasPrice: 1.25,
        lowGasPrice: 1.25,
        averageGasPrice: 1.5,
        highGasPrice: 1.75
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'usix'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/thesixnetwork/six-protocol',
    recommendedVersion: 'v3.3.0',
    compatibleVersions: ['v3.3.0'],
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    genesis: {
      genesisUrl: 'https://github.com/thesixnetwork/chain-info/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.45'
    }
  },
  apis: {
    rpc: [{
        address: 'https://sixnet-rpc.sixprotocol.net'
      }],
    rest: [{
        address: 'https://sixnet-api.sixprotocol.net'
      }]
  },
  explorers: [{
      kind: 'sixscan',
      url: 'https://sixscan.io/sixnet',
      txPage: 'https://sixscan.io/sixnet/tx/${txHash}'
    }],
  keywords: [
    'sixprotocol',
    'sixnetwork',
    'sixnet',
    'six'
  ]
};
export default info;