import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'mises',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://mises.site',
  pretty_name: 'Mises',
  chain_type: 'cosmos',
  chain_id: 'mainnet',
  bech32_prefix: 'mises',
  node_home: '$HOME/.misestm',
  daemon_name: 'misestmd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'umis',
        fixed_min_gas_price: 0
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'umis'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/mises-id/mises-tm',
    recommended_version: 'v1.0.4',
    compatible_versions: ['v1.0.4'],
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/mises-id/mainnet/master/genesis.json'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mises/images/mises.png'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.gw.mises.site:443',
        provider: 'Mises-1'
      }, {
        address: 'https://e2.mises.site:443',
        provider: 'Mises-3'
      }],
    rest: [],
    grpc: []
  },
  explorers: [{
      kind: 'Mises-GW Explorer',
      url: 'https://gw.mises.site',
      tx_page: 'https://gw.mises.site/tx/${txHash}'
    }, {
      kind: 'Jambulmerah ping.pub based',
      url: 'https://explorer.jambulmerah.dev/mises',
      tx_page: 'https://explorer.jambulmerah.dev/mises/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mises/images/mises.png',
      theme: {
        primary_color_hex: '#f5f5f8'
      }
    }]
};
export default info;