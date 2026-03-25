import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'xyra',
  status: 'live',
  website: 'https://www.xyra-mainnet.org',
  networkType: 'mainnet',
  chainType: 'cosmos',
  prettyName: 'Xyra Chain',
  chainId: 'xyra-2',
  bech32Prefix: 'xyra',
  daemonName: 'xyrad',
  nodeHome: '$HOME/.xyrad',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uXyrium',
        fixedMinGasPrice: 0.0025,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uXyrium'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/rizkimaryanto7-creator/xyra-chain',
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/rizkimaryanto7-creator/xyra-chain/master/genesis.json'
    },
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    consensus: {
      type: 'cometbft',
      version: '0.38'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/cosmos/cosmos-sdk',
      version: 'v0.50.0'
    },
    cosmwasm: {
      enabled: false
    },
    tag: 'v1.0.0'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xyra/images/xrc.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xyra/images/xrc.svg'
    }],
  apis: {
    rpc: [{
        address: 'https://rpc.xyra-mainnet.org',
        provider: 'Xyra-Labs'
      }],
    rest: [{
        address: 'https://api.xyra-mainnet.org',
        provider: 'Xyra-Labs'
      }],
    grpc: [{
        address: 'grpc.xyra-mainnet.org:443',
        provider: 'Xyra-Labs'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xyra/images/xrc.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xyra/images/xrc.svg'
  },
  keywords: ['layer1', 'pos'],
  explorers: [{
      kind: 'ping.pub',
      url: 'https://explorer.xyra-mainnet.org',
      txPage: 'https://explorer.xyra-mainnet.org/xyra/tx/${txHash}'
    }]
};
export default info;