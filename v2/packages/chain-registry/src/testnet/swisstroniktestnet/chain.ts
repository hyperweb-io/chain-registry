import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'swisstroniktestnet',
  chainType: 'cosmos',
  chainId: 'swisstronik_1291-1',
  prettyName: 'Swisstronik Testnet',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'swtr',
  daemonName: 'swisstronikd',
  nodeHome: '$HOME/.swisstronik',
  keyAlgos: ['secp256k1'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'aswtr',
        fixedMinGasPrice: 7
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'aswtr'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/SigmaGmbH/swisstronik-chain',
    recommendedVersion: 'v1.0.2',
    compatibleVersions: ['v1.0.2'],
    binaries: {
      "linux/amd64": 'https://github.com/SigmaGmbH/swisstronik-chain/releases/download/testnet-v1.0.2/swisstronik_1.0.2_amd64.deb.zip'
    },
    consensus: {
      type: 'cometbft',
      version: '0.37'
    },
    genesis: {
      genesisUrl: 'https://rpc.testnet.swisstronik.com/genesis'
    },
    sdk: {
      type: 'cosmos',
      version: '0.47'
    },
    ibc: {
      type: 'go',
      version: 'v7.2.0'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.testnet.swisstronik.com',
        provider: 'Swisstronik'
      },
      {
        address: 'https://testnet-swisstronik-rpc.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://rpc.swisstronik.comunitynode.my.id',
        provider: 'ComunityNode'
      }
    ],
    rest: [
      {
        address: 'https://api.testnet.swisstronik.com',
        provider: 'Swisstronik'
      },
      {
        address: 'https://testnet-swisstronik-api.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://rest.swisstronik.comunitynode.my.id/',
        provider: 'Comunitynode'
      }
    ],
    grpc: [{
        address: 'testnet-swisstronik-grpc.genznodes.dev:20090',
        provider: 'genznodes'
      }],
    evmHttpJsonrpc: [
      {
        address: 'https://json-rpc.testnet.swisstronik.com',
        provider: 'Swisstronik'
      },
      {
        address: 'https://testnet-swisstronik-rpc-evm.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://evm.swisstronik.comunitynode.my.id',
        provider: 'comunitynode'
      }
    ]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://explorer-cosmos.testnet.swisstronik.com/swisstronik',
      txPage: 'https://explorer-cosmos.testnet.swisstronik.com/swisstronik/tx/${txHash}'
    }]
};
export default info;