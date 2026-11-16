import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'blakiston',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://blakiston.org',
  prettyName: 'Blakiston',
  chainType: 'cosmos',
  chainId: 'blakiston',
  bech32Prefix: 'bs9',
  daemonName: 'blakistond',
  nodeHome: '$HOME/.blakiston',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'tln',
        fixedMinGasPrice: 0.0005,
        lowGasPrice: 0.0005,
        averageGasPrice: 0.0006,
        highGasPrice: 0.0008
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'tln'
      }]
  },
  codebase: {
    recommendedVersion: 'v1.1.0',
    compatibleVersions: ['v1.1.0'],
    sdk: {
      type: 'cosmos',
      version: 'v0.50.10'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.12'
    },
    cosmwasm: {
      version: 'v0.51.0',
      enabled: true
    },
    ibc: {
      type: 'go',
      version: 'v8.5.1',
      icsEnabled: ['ics20-1']
    },
    genesis: {
      genesisUrl: 'https://dl.blakiston.org/genesis.json'
    }
  },
  description: 'Blakiston is a Cosmos SDK Layer 1 for real-world money: offline payments, on-chain gold and silver priced by a native oracle, and proof-of-existence for documents. Fixed supply of 2,100,000,000 TLN with 0% inflation.',
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/blakiston/images/blakiston.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/blakiston/images/blakiston.svg'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/blakiston/images/blakiston.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/blakiston/images/blakiston.svg',
      theme: {
        circle: true,
        darkMode: true
      }
    }],
  apis: {
    rpc: [{
        address: 'https://rpc.blakiston.org',
        provider: 'Blakiston'
      }],
    rest: [{
        address: 'https://api.blakiston.org',
        provider: 'Blakiston'
      }]
  },
  explorers: [{
      kind: 'Blakiston Explorer',
      url: 'https://blakiston.org',
      txPage: 'https://blakiston.org/tx/${txHash}'
    }]
};
export default info;