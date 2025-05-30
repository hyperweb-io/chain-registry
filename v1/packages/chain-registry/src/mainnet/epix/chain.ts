import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'epix',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://epix.zone/',
  pretty_name: 'Epix',
  chain_type: 'cosmos',
  chain_id: 'epix_1916-1',
  bech32_prefix: 'epix',
  daemon_name: 'epixd',
  node_home: '$HOME/.epixd',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'aepix',
        fixed_min_gas_price: 1000000000000,
        low_gas_price: 1000000000000,
        average_gas_price: 2000000000000,
        high_gas_price: 3000000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'aepix'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/EpixZone/Epix',
    recommended_version: 'v1.0.0',
    compatible_versions: ['v1.0.0'],
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/EpixZone/Epix/refs/heads/main/Networks/Mainnet/epix_1916-0/genesis.json'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/epix/images/epix.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/epix/images/epix.svg'
  },
  apis: {
    rpc: [{
        address: 'https://epix.rpc.silknodes.io/',
        provider: 'Silk Nodes'
      }],
    rest: [{
        address: 'https://epix.api.silknodes.io',
        provider: 'Silk Nodes'
      }],
    grpc: [{
        address: 'https://epix.grpc.silknodes.io:443',
        provider: 'Silk Nodes'
      }],
    "evm-http-jsonrpc": [{
        address: 'https://epix.emvrpc.silknodes.io/',
        provider: 'Silk Nodes'
      }]
  },
  explorers: [{
      kind: 'Silk Nodes Explorer',
      url: 'https://explorer.silknodes.io/epix',
      tx_page: 'https://explorer.silknodes.io/osmosis/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/epix/images/epix.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/epix/images/epix.svg',
      theme: {
        primary_color_hex: '#69e9f5'
      }
    }]
};
export default info;