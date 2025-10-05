import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'archwaytestnet',
  chainType: 'cosmos',
  chainId: 'constantine-3',
  prettyName: 'Archway Testnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://archway.io',
  bech32Prefix: 'archway',
  daemonName: 'archwayd',
  nodeHome: '$HOME/.archway',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'aconst',
        lowGasPrice: 1000000000000,
        averageGasPrice: 1500000000000,
        highGasPrice: 2000000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'aconst'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/archway-network/archway'
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.constantine.archway.io',
        provider: 'Archway'
      }, {
        address: 'https://archway-testnet-rpc.polkachu.com',
        provider: 'Polkachu'
      }],
    rest: [{
        address: 'https://api.constantine.archway.io',
        provider: 'Archway'
      }]
  },
  explorers: [{
      kind: 'archwayscan',
      url: 'https://testnet.archway.explorers.guru',
      txPage: 'https://testnet.archway.explorers.guru/transaction/${txHash}'
    }],
  images: [{
      imageSync: {
        chainName: 'archway'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
    }]
};
export default info;