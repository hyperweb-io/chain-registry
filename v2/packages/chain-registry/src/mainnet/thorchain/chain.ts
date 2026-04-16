import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'thorchain',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://thorchain.org/',
  prettyName: 'THORChain',
  chainType: 'cosmos',
  chainId: 'thorchain-1',
  bech32Prefix: 'thor',
  daemonName: 'thornode',
  nodeHome: '$HOME/.thornode',
  slip44: 931,
  codebase: {
    gitRepo: 'https://gitlab.com/thorchain/thornode',
    recommendedVersion: 'v3.9.0',
    compatibleVersions: ['v3.9.0'],
    genesis: {
      genesisUrl: 'https://storage.googleapis.com/public-snapshots-ninerealms/genesis/17562000.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.53.0'
    },
    cosmwasm: {
      enabled: true
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://gateway.liquify.com/chain/thorchain_rpc',
        provider: 'Liquify'
      },
      {
        address: 'https://rpc-thorchain.rorcual.xyz',
        provider: 'Rorcual'
      },
      {
        address: 'https://thorchain.ibs.team/rpc/',
        provider: 'IBS'
      }
    ],
    grpc: [{
        address: 'https://grpc-thorchain.rorcual.xyz',
        provider: 'Rorcual'
      }, {
        address: 'https://thorchain.ibs.team:443',
        provider: 'IBS'
      }],
    rest: [
      {
        address: 'https://gateway.liquify.com/chain/thorchain_api',
        provider: 'Liquify'
      },
      {
        address: 'https://api-thorchain.rorcual.xyz',
        provider: 'Rorcual'
      },
      {
        address: 'https://thorchain.ibs.team/api/',
        provider: 'IBS'
      }
    ]
  },
  explorers: [
    {
      kind: 'THORChain explorer',
      url: 'https://thorchain.net',
      txPage: 'https://thorchain.net/#/txs/${txHash}'
    },
    {
      kind: 'Runescan',
      url: 'https://runescan.io/',
      txPage: 'https://runescan.io/txs/${txHash}'
    },
    {
      kind: 'THORChain Dashboard',
      url: 'https://thorchain.net/dashboard'
    }
  ]
};
export default info;