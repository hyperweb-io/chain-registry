import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'hippoprotocol',
  status: 'live',
  website: 'https://hippoprotocol.ai/',
  networkType: 'mainnet',
  prettyName: 'Hippo Protocol',
  chainType: 'cosmos',
  chainId: 'hippo-protocol-1',
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
      genesisUrl: 'https://github.com/hippo-protocol/hippo-protocol-hub/blob/main/hippo-protocol-1/genesis.json'
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
    rpc: [
      {
        address: 'https://rpc.hippo-protocol.com/',
        provider: 'Hippo Protocol'
      },
      {
        address: 'https://hippo.rpc.nodeshub.online:443',
        provider: 'NodesHub'
      },
      {
        address: 'https://hippo-rpc.node39.top:443',
        provider: 'Node39'
      },
      {
        address: 'https://hippo-mainnet-rpc.shazoes.xyz',
        provider: 'Shazoes'
      }
    ],
    rest: [
      {
        address: 'https://api.hippo-protocol.com/',
        provider: 'Hippo Protocol'
      },
      {
        address: 'https://hippo.api.nodeshub.online',
        provider: 'NodesHub'
      },
      {
        address: 'https://hippo-api.node39.top:443',
        provider: 'Node39'
      },
      {
        address: 'https://hippo-mainnet-api.shazoes.xyz',
        provider: 'Shazoes'
      }
    ],
    grpc: [
      {
        address: 'ibc-grpc.hippo-protocol.com:443',
        provider: 'Hippo Protocol'
      },
      {
        address: 'hippo.grpc.nodeshub.online',
        provider: 'Nodes Hub'
      },
      {
        address: 'hippo-grpc.node39.top:443',
        provider: 'Node39'
      },
      {
        address: 'hippo-mainnet-grpc.shazoes.xyz:30290',
        provider: 'Shazoes'
      }
    ]
  },
  explorers: [{
      kind: 'Hippo River',
      url: 'https://river.hippoprotocol.ai/',
      txPage: 'https://river.hippoprotocol.ai/hippo-protocol/tx/${txHash}',
      accountPage: 'https://river.hippoprotocol.ai/hippo-protocol/account/${accountAddress}'
    }, {
      kind: 'Node39',
      url: 'https://explorer.node39.top/hippo',
      txPage: 'https://explorer.node39.top/hippo/tx/${txHash}',
      accountPage: 'https://explorer.node39.top/hippo/account/${accountAddress}'
    }],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/hippoprotocol/images/logo.svg'
    }],
  description: 'One Protocol. Every Patient. Infinite Possibility.'
};
export default info;