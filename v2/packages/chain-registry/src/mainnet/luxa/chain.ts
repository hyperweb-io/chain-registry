import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'luxa',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://luxaecosystem.xyz',
  prettyName: 'LUXA Network',
  chainType: 'cosmos',
  chainId: 'luxa-1',
  bech32Prefix: 'luxa',
  daemonName: 'luxad',
  nodeHome: '$HOME/.luxa',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uluxa',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uluxa'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/luxaecosystem/luxa-chain',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    consensus: {
      type: 'cometbft',
      version: '0.38.12'
    },
    sdk: {
      type: 'cosmos',
      version: '0.50.10'
    },
    cosmwasm: {
      version: 'v0.50.0',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/luxa/images/luxa.png'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.luxaecosystem.xyz',
        provider: 'LUXA Ecosystem'
      }],
    rest: [{
        address: 'https://api.luxaecosystem.xyz',
        provider: 'LUXA Ecosystem'
      }]
  },
  explorers: [{
      kind: 'Ping.pub',
      url: 'https://explorer.luxaecosystem.xyz/luxa',
      txPage: 'https://explorer.luxaecosystem.xyz/luxa/tx/${txHash}',
      accountPage: 'https://explorer.luxaecosystem.xyz/luxa/account/${accountAddress}'
    }, {
      kind: 'LUXA Explorer',
      url: 'https://luxaecosystem.xyz/explorer.html',
      txPage: 'https://luxaecosystem.xyz/explorer.html?tx=${txHash}',
      accountPage: 'https://luxaecosystem.xyz/explorer.html?account=${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/luxa/images/luxa.png',
      theme: {
        circle: true
      }
    }]
};
export default info;