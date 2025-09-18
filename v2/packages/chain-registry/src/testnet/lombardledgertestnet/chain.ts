import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'lombardledgertestnet',
  chainType: 'cosmos',
  chainId: 'ledger-testnet-1',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'lom',
  daemonName: 'ledgerd',
  nodeHome: '$HOME/.ledgerd',
  keyAlgos: ['secp256k1'],
  prettyName: 'Lombard Ledger Testnet',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ulom',
        fixedMinGasPrice: 1,
        lowGasPrice: 1,
        averageGasPrice: 1,
        highGasPrice: 1
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
      genesisUrl: 'https://github.com/lombard-finance/ledger-testnets/blob/d9a6a4e1ca48bd6f9cbe5330d3e10eb157c38252/gastald/config/genesis.json'
    },
    compatibleVersions: ['v1.2.0'],
    binaries: {
      "linux/amd64": 'https://github.com/lombard-finance/ledger/releases/download/v1.2.0/ledgerd-v1.1.0-linux-amd64',
      "darwin/amd64": 'https://github.com/lombard-finance/ledger/releases/download/v1.2.0/ledgerd-v1.1.0-darwin-amd64',
      "darwin/arm64": 'https://github.com/lombard-finance/ledger/releases/download/v1.2.0/ledgerd-v1.1.0-darwin-arm64'
    }
  },
  apis: {
    rpc: [],
    rest: [],
    grpc: []
  },
  explorers: [{
      kind: 'Mintscan',
      url: 'https://www.mintscan.io/lombard-testnet',
      txPage: 'https://www.mintscan.io/lombard-testnet/tx/${txHash}'
    }]
};
export default info;