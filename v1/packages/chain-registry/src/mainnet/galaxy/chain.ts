import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'galaxy',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://galaxychain.zone/',
  pretty_name: 'Galaxy',
  chain_type: 'cosmos',
  chain_id: 'galaxy-1',
  bech32_prefix: 'galaxy',
  daemon_name: 'galaxyd',
  node_home: '$HOME/.galaxy',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uglx',
        low_gas_price: 0.025,
        average_gas_price: 0.025,
        high_gas_price: 0.035
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uglx'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/galaxies-labs/galaxy',
    recommended_version: 'v1.0.0',
    compatible_versions: ['v1.0.0'],
    binaries: {
      "linux/amd64": 'https://github.com/galaxies-labs/galaxy/releases/download/v1.0.0/galaxy_v1.0.0_linux_amd64.tar.gz',
      "darwin/amd64": 'https://github.com/galaxies-labs/galaxy/releases/download/v1.0.0/galaxy_v1.0.0_darwin_amd64.tar.gz'
    },
    genesis: {
      genesis_url: 'https://github.com/OrbisWorlds/networks/raw/main/galaxy-1/genesis.json'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg'
  },
  apis: {
    rpc: [],
    rest: [],
    grpc: []
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://explorer.postcapitalist.io/Galaxy',
      tx_page: 'https://explorer.postcapitalist.io/Galaxy/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg',
      theme: {
        primary_color_hex: '#5e3be6'
      }
    }]
};
export default info;