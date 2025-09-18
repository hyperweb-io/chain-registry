import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'lombardledger',
  chainType: 'cosmos',
  chainId: 'ledger-mainnet-1',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'lom',
  daemonName: 'ledgerd',
  nodeHome: '$HOME/.ledgerd',
  keyAlgos: ['secp256k1'],
  prettyName: 'Lombard Ledger',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ulom',
        fixedMinGasPrice: 100,
        lowGasPrice: 100,
        averageGasPrice: 100,
        highGasPrice: 100
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ustake'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/lombard-finance/ledger',
    recommendedVersion: 'v1.2.0',
    genesis: {
      genesisUrl: 'https://github.com/lombard-finance/ledger-testnets/blob/441861abd12e5149663079c6e36db3064ec4745a/mainnet/config/genesis.json'
    },
    compatibleVersions: ['v1.2.0'],
    binaries: {
      "linux/amd64": 'https://github.com/lombard-finance/ledger/releases/download/v1.2.0/ledgerd-v1.2.0-linux-amd64',
      "darwin/amd64": 'https://github.com/lombard-finance/ledger/releases/download/v1.2.0/ledgerd-v1.2.0-darwin-amd64',
      "darwin/arm64": 'https://github.com/lombard-finance/ledger/releases/download/v1.2.0/ledgerd-v1.2.0-darwin-arm64'
    }
  },
  apis: {
    rpc: [],
    rest: [],
    grpc: []
  },
  explorers: [{
      kind: 'Mintscan',
      url: 'https://www.mintscan.io/lombard',
      txPage: 'https://www.mintscan.io/lombard/tx/${txHash}'
    }]
};
export default info;