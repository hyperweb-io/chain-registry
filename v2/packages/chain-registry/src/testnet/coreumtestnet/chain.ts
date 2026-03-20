import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'coreumtestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://tx.org/',
  prettyName: 'TX',
  chainType: 'cosmos',
  chainId: 'coreum-testnet-1',
  bech32Prefix: 'testcore',
  daemonName: 'txd',
  nodeHome: '$HOME/.core/coreum-testnet-1',
  keyAlgos: ['secp256k1'],
  slip44: 990,
  fees: {
    feeTokens: [{
        denom: 'utestcore',
        fixedMinGasPrice: 0.03125,
        lowGasPrice: 0.0625,
        averageGasPrice: 0.0625,
        highGasPrice: 62.5
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'utestcore'
      }],
    lockDuration: {
      time: '168h'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/tokenize-x/tx-chain',
    recommendedVersion: 'v6.0.0',
    compatibleVersions: ['v6.0.0'],
    binaries: {
      "linux/amd64": 'https://github.com/tokenize-x/tx-chain/releases/download/v6.0.0/txd-linux-amd64?checksum=sha256:aa417cea9aaeca87ac7ad553a677486936f67304e7a9d62198c142e8de63ad7a',
      "linux/arm64": 'https://github.com/tokenize-x/tx-chain/releases/download/v6.0.0/txd-linux-arm64?checksum=sha256:c815d4a388d9d4d39c61dbb20c74c1bc3d5abf918e5b3a81316098831072aac2'
    },
    genesis: {
      name: 'v0',
      genesisUrl: 'https://raw.githubusercontent.com/CoreumFoundation/coreum/master/genesis/coreum-testnet-1.json'
    },
    consensus: {
      type: 'cometbft',
      version: '0.38'
    },
    sdk: {
      type: 'cosmos',
      version: '0.53.5'
    },
    cosmwasm: {
      version: '0.60.5',
      enabled: true
    },
    tag: 'v6.0.0'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/tx.png'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/tx.png'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.testnet-1.tx.org:443',
        provider: 'TX Foundation'
      }, {
        address: 'https://rpc-01.testnet-1.tx.org:443',
        provider: 'TX Foundation'
      }],
    grpc: [{
        address: 'https://grpc.testnet-1.tx.org:443',
        provider: 'TX Foundation'
      }, {
        address: 'https://gprc-01.testnet-1.tx.org:443',
        provider: 'TX Foundation'
      }],
    rest: [{
        address: 'https://rest.testnet-1.tx.org:443',
        provider: 'TX'
      }]
  },
  explorers: [{
      kind: 'TX',
      url: 'https://explorer.testnet-1.tx.org/tx',
      txPage: 'https://explorer.testnet-1.tx.org/tx/transactions/${txHash}',
      accountPage: 'https://explorer.testnet-1.tx.org/tx/account/${accountAddress}'
    }, {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/coreum-testnet',
      txPage: 'https://www.mintscan.io/coreum-testnet/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/coreum-testnet/accounts/${accountAddress}'
    }],
  keywords: [
    'L1',
    'RWA',
    'RWA Protocol',
    'RWA Marketplace',
    'tokenization'
  ]
};
export default info;