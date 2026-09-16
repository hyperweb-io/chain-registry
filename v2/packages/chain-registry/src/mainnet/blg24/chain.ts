import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'blg24',
  status: 'live',
  website: 'https://gold24coin.com',
  networkType: 'mainnet',
  chainType: 'cosmos',
  prettyName: 'BLG24',
  chainId: 'BLG24',
  bech32Prefix: 'blg24',
  daemonName: 'blg24',
  nodeHome: '$HOME/.blg24',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ug24',
        fixedMinGasPrice: 0.005,
        lowGasPrice: 0.005,
        averageGasPrice: 0.01,
        highGasPrice: 0.02
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ug24'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/VICTOR-1969/blg24',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    genesis: {
      genesisUrl: 'https://node.gold24coin.com/genesis'
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/blg24/images/g24.png'
    }],
  apis: {
    rpc: [{
        address: 'https://node.gold24coin.com',
        provider: 'BLG24'
      }],
    rest: [{
        address: 'https://api.gold24coin.com',
        provider: 'BLG24'
      }]
  },
  explorers: [{
      kind: 'blg24scan',
      url: 'https://blg24scan.com',
      blockPage: 'https://blg24scan.com/block.html?h=${blockHeight}'
    }]
};
export default info;