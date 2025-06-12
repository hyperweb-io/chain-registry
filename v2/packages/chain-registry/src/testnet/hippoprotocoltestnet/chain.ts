import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'hippoprotocoltestnet',
  status: 'live',
  website: 'https://hippoprotocol.ai/',
  networkType: 'testnet',
  prettyName: 'Hippo Protocol Testnet',
  chainType: 'cosmos',
  chainId: 'hippo-protocol-testnet-1',
  bech32Prefix: 'hippo',
  slip44: 118,
  daemonName: 'hippod',
  nodeHome: '$HOME/.hippod',
  keyAlgos: ['secp256k1'],
  fees: {
    feeTokens: [{
        denom: 'ahp',
        lowGasPrice: 4000000000000,
        averageGasPrice: 5000000000000,
        highGasPrice: 10000000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ahp'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/hippo-protocol/hippo-protocol',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    genesis: {
      genesisUrl: 'https://github.com/hippo-protocol/hippo-protocol-hub/blob/main/hippo-protocol-testnet-1/genesis.json'
    },
    consensus: {
      type: 'cometbft',
      repo: 'https://github.com/cometbft/cometbft',
      version: 'v0.38.17',
      tag: 'v0.38.17'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/cosmos/cosmos-sdk',
      version: 'v0.50.13',
      tag: 'v0.50.13'
    },
    ibc: {
      type: 'go',
      repo: 'https://github.com/cosmos/ibc-go',
      version: 'v8.7.0',
      tag: 'v8.7.0'
    },
    language: {
      type: 'go',
      version: '1.23.0'
    }
  },
  logoURIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/hippoprotocol/images/logo.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.testnet.hippo-protocol.com/',
        provider: 'Hippo Protocol'
      }],
    rest: [{
        address: 'https://api.testnet.hippo-protocol.com/',
        provider: 'Hippo Protocol'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'Hippo River Testnet',
      url: 'https://river-testnet.hippoprotocol.ai/',
      txPage: 'https://river-testnet.hippoprotocol.ai/hippo-protocol/tx/${txHash}',
      accountPage: 'https://river-testnet.hippoprotocol.ai/hippo-protocol/account/${accountAddress}'
    }],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/hippoprotocol/images/logo.svg'
    }],
  description: 'One Protocol. Every Patient. Infinite Possibility.'
};
export default info;