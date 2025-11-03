import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'terratestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://www.terra-Classic.money/',
  prettyName: 'Terra Classic Testnet',
  chainType: 'cosmos',
  chainId: 'rebel-2',
  daemonName: 'terrad',
  nodeHome: '$HOME/.terra',
  bech32Prefix: 'terra',
  slip44: 330,
  fees: {
    feeTokens: [{
        denom: 'uluna',
        lowGasPrice: 28.325,
        averageGasPrice: 28.325,
        highGasPrice: 50
      }, {
        denom: 'uusd',
        lowGasPrice: 0.75,
        averageGasPrice: 0.75,
        highGasPrice: 0.75
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uluna'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/classic-terra/core',
    recommendedVersion: 'v3.5.0',
    compatibleVersions: ['v3.5.0'],
    tag: 'v3.5.0',
    binaries: {
      "linux/arm64": 'https://github.com/classic-terra/core/releases/download/v3.5.0/terra_3.5.0_Linux_arm64.tar.gz',
      "linux/amd64": 'https://github.com/classic-terra/core/releases/download/v3.5.0/terra_3.5.0_Linux_x86_64.tar.gz'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/cosmos/cosmos-sdk',
      version: 'v0.47.17',
      tag: 'v0.47.17'
    },
    consensus: {
      type: 'cometbft',
      version: '0.37.15'
    },
    cosmwasm: {
      version: '0.46.0',
      enabled: true
    },
    ibc: {
      type: 'go',
      repo: 'https://github.com/cosmos/ibc-go',
      version: 'v7.10.0',
      tag: 'v7.10.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rebel-rpc.luncgoblins.com',
        provider: 'LuncGoblinsg'
      }],
    rest: [{
        address: 'https://rebel-lcd.luncgoblins.com',
        provider: 'LuncGoblins'
      }],
    grpc: []
  },
  explorers: [],
  keywords: ['testnet'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg'
    }]
};
export default info;