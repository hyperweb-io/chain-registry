import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'terra2testnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://www.terra.money/',
  prettyName: 'Terra 2.0',
  chainType: 'cosmos',
  chainId: 'pisco-1',
  daemonName: 'terrad',
  nodeHome: '$HOME/.terra',
  bech32Prefix: 'terra',
  slip44: 330,
  fees: {
    feeTokens: [{
        denom: 'uluna',
        fixedMinGasPrice: 0.0125,
        lowGasPrice: 0.0125,
        averageGasPrice: 0.015,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uluna'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/terra-money/core/',
    recommendedVersion: 'v2.4.0-rc5',
    compatibleVersions: ['v2.4.0-rc4', 'v2.4.0-rc5'],
    genesis: {
      name: 'v2.0',
      genesisUrl: 'https://tfl-pisco-1.s3.amazonaws.com/genesis.json'
    }
  },
  apis: {
    rpc: [{
        address: 'https://pisco-rpc.terra.dev:443',
        provider: 'Terraform Labs'
      }, {
        address: 'https://terra-testnet-rpc.polkachu.com:443',
        provider: 'Polkachu'
      }],
    rest: [{
        address: 'https://pisco-lcd.terra.dev:443',
        provider: 'Terraform Labs'
      }, {
        address: 'https://terra-testnet-api.polkachu.com:443',
        provider: 'Polkachu'
      }],
    grpc: [{
        address: 'terra-testnet-grpc.polkachu.com:11790',
        provider: 'Polkachu'
      }]
  },
  explorers: [{
      kind: 'finder',
      url: 'http://finder.terra.money/testnet/',
      txPage: 'https://finder.terra.money/testnet/tx/${txHash}'
    }]
};
export default info;