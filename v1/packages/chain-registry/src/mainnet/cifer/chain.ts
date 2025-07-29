import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'cifer',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://cifer.ai/',
  pretty_name: 'Cifer',
  chain_type: 'cosmos',
  chain_id: 'cifer-2',
  bech32_prefix: 'cife',
  daemon_name: 'ciferd',
  node_home: '$HOME/.ciferd',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ucif',
        fixed_min_gas_price: 0.0025,
        low_gas_price: 1,
        average_gas_price: 5,
        high_gas_price: 10
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ucif'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/cifer-ai/cifer',
    recommended_version: 'v2.0.0',
    compatible_versions: ['v2.0.0'],
    genesis: {
      genesis_url: 'https://rpc.cifer.ai/genesis'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.cifer.ai',
        provider: 'Cifer'
      }, {
        address: 'http://119.59.126.109:26657',
        provider: 'Cifer'
      }],
    rest: [{
        address: 'https://lcd.cifer.ai',
        provider: 'Cifer'
      }, {
        address: 'https://api.cifer.ai',
        provider: 'Cifer'
      }],
    grpc: [{
        address: 'http://119.59.126.109:9090',
        provider: 'Cifer'
      }]
  },
  explorers: [{
      url: 'https://www.cifscan.com/',
      tx_page: 'https://www.cifscan.com/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg',
      theme: {
        primary_color_hex: '#6358D7'
      }
    }]
};
export default info;