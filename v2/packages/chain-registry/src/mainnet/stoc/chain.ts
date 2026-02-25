import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'stoc',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.stochain.io/',
  prettyName: 'STO Chain',
  chainType: 'cosmos',
  chainId: 'stoc',
  bech32Prefix: 'stoc',
  daemonName: 'stocd',
  nodeHome: '$HOME/.stoc',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ustoc',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.01,
        averageGasPrice: 0.015,
        highGasPrice: 0.02
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ustoc'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/stochainassociation/stoc-blockchain-mainnet',
    recommendedVersion: 'latest-a2d23f37',
    compatibleVersions: ['latest-a2d23f37'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.19'
    },
    genesis: {
      genesisUrl: 'https://rpc-stoc-mainnet.stochainscan.io/genesis'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.53.3'
    }
  },
  description: 'STO Chain is a Cosmos-based blockchain network designed to enable the digitization, compliance, and cross-chain circulation of real assets such as real estate, stocks, and commodities through blockchain technology.',
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stoc/images/stoc-logo.png'
  },
  apis: {
    rpc: [{
        address: 'https://rpc-stoc-mainnet.stochainscan.io/',
        provider: 'STO Chain'
      }],
    rest: [{
        address: 'https://api-stoc-mainnet.stochainscan.io/',
        provider: 'STO Chain'
      }],
    grpc: [{
        address: 'grpc-stoc-mainnet.stochainscan.io:443',
        provider: 'STO Chain'
      }]
  },
  explorers: [{
      kind: 'stochainscan',
      url: 'https://stochainscan.io/en',
      txPage: 'https://stochainscan.io/en/transaction/${txHash}',
      accountPage: 'https://stochainscan.io/en/address/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stoc/images/stoc-logo.png'
    }]
};
export default info;