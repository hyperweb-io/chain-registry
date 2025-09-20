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
    compatibleVersions: ['v3.5.0']
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