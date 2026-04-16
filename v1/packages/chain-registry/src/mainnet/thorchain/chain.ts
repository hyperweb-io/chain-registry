import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'thorchain',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://thorchain.org/',
  pretty_name: 'THORChain',
  chain_type: 'cosmos',
  chain_id: 'thorchain-1',
  bech32_prefix: 'thor',
  daemon_name: 'thornode',
  node_home: '$HOME/.thornode',
  slip44: 931,
  codebase: {
    git_repo: 'https://gitlab.com/thorchain/thornode',
    recommended_version: 'v3.9.0',
    compatible_versions: ['v3.9.0'],
    genesis: {
      genesis_url: 'https://storage.googleapis.com/public-snapshots-ninerealms/genesis/17562000.json'
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
      tx_page: 'https://thorchain.net/#/txs/${txHash}'
    },
    {
      kind: 'Runescan',
      url: 'https://runescan.io/',
      tx_page: 'https://runescan.io/txs/${txHash}'
    },
    {
      kind: 'THORChain Dashboard',
      url: 'https://thorchain.net/dashboard'
    }
  ]
};
export default info;