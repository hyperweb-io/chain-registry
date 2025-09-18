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
    },
    tag: 'v2.4.0-rc5',
    binaries: {
      "linux/amd64": 'https://github.com/terra-money/core/releases/download/v2.4.0-rc5/terra_2.4.0-rc5_Linux_x86_64.tar.gz?checksum=sha256:c61c9c4ae8a0bcb9d7f9fc2197d84ba8b75b558c2cee3438ae2142eb97e0d771'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.46.11'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.34.27'
    },
    cosmwasm: {
      version: 'v0.30.0',
      enabled: true
    },
    ibc: {
      type: 'go',
      version: 'v6.1.1'
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