import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'tstoctestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://www.stochain.io/',
  prettyName: 'STO Chain Testnet',
  chainType: 'cosmos',
  chainId: 'tstoc',
  bech32Prefix: 'stoc',
  daemonName: 'stocd',
  nodeHome: '$HOME/.stoc',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'utstoc',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.01,
        averageGasPrice: 0.015,
        highGasPrice: 0.02
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'utstoc'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/stochainassociation/stoc-blockchain-mainnet',
    recommendedVersion: 'latest-2525d3e6',
    compatibleVersions: ['latest-2525d3e6'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.17'
    },
    genesis: {
      genesisUrl: 'https://rpc-stoc-testnet.stochainscan.io/genesis'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.53.0'
    }
  },
  description: 'STO Chain Testnet is a Cosmos-based blockchain network designed to enable the digitization, compliance, and cross-chain circulation of real assets such as real estate, stocks, and commodities through blockchain technology.',
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stoc/images/stoc-logo.png'
  },
  apis: {
    rpc: [{
        address: 'https://rpc-stoc-testnet.stochainscan.io/',
        provider: 'STO Chain'
      }],
    rest: [{
        address: 'https://api-stoc-testnet.stochainscan.io/',
        provider: 'STO Chain'
      }],
    grpc: [{
        address: 'grpc-stoc-testnet.stochainscan.io:443',
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
      imageSync: {
        chainName: 'stoc'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stoc/images/stoc-logo.png'
    }]
};
export default info;