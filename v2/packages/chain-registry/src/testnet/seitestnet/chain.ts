import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'seitestnet',
  chainType: 'cosmos',
  chainId: 'atlantic-1',
  prettyName: 'Sei Atlantic',
  status: 'live',
  networkType: 'testnet',
  website: 'https://www.sei.io/',
  bech32Prefix: 'sei',
  daemonName: 'seid',
  nodeHome: '$HOME/.sei',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'usei',
        fixedMinGasPrice: 0
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/sei-protocol/sei-chain',
    recommendedVersion: '1.0.6beta',
    compatibleVersions: ['1.0.6beta'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/sei-protocol/testnet/main/sei-incentivized-testnet/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
  },
  description: 'Sei is the fastest Layer 1 blockchain, designed to scale with the industry.',
  apis: {
    rpc: [],
    rest: []
  },
  explorers: [{
      kind: 'explorers.guru',
      url: 'https://sei.explorers.guru',
      txPage: 'https://sei.explorers.guru/transaction/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
    }]
};
export default info;