import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'outbedevnet',
  chainType: 'cosmos',
  status: 'live',
  website: 'https://www.outbe.com',
  networkType: 'devnet',
  prettyName: 'outbe-node',
  chainId: 'outbe-devnet-1',
  bech32Prefix: 'outbe',
  daemonName: 'outbe-noded',
  nodeHome: '$HOME/.outbe-node',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'unit',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'unit'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/outbe/outbe-node',
    recommendedVersion: 'v0.0.1-wasm',
    compatibleVersions: ['v0.0.1-wasm'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.17'
    },
    genesis: {
      name: 'v1',
      genesisUrl: 'https://github.com/outbe/outbe-node/networks/raw/main/genesis.json'
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/outbedevnet/images/outbe.png',
      theme: {
        primaryColorHex: '#FF2D00'
      }
    }],
  apis: {
    rpc: [{
        address: 'https://rpc.dev.outbe.net:26657',
        provider: 'Outbe DevNet'
      }],
    rest: [{
        address: 'https://rpc.dev.outbe.net:1317',
        provider: 'Outbe DevNet'
      }]
  },
  explorers: [],
  keywords: ['cosmos']
};
export default info;