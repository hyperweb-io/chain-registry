import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'initia',
  chain_id: 'interwoven-1',
  chain_type: 'cosmos',
  website: 'https://initia.xyz',
  pretty_name: 'Initia',
  status: 'live',
  network_type: 'mainnet',
  bech32_prefix: 'init',
  daemon_name: 'initiad',
  node_home: '$HOME/.initia',
  key_algos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'uinit',
        fixed_min_gas_price: 0.015,
        low_gas_price: 0.015,
        average_gas_price: 0.015,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uinit'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/initia-labs/initia',
    recommended_version: 'v1.0.0-rc.1',
    compatible_versions: ['v1.0.0-rc.1'],
    binaries: {
      "linux/amd64": 'https://github.com/initia-labs/initia/releases/download/v1.0.0-rc.1/initia_v1.0.0-rc.1_Linux_x86_64.tar.gz',
      "linux/arm64": 'https://github.com/initia-labs/initia/releases/download/v1.0.0-rc.1/initia_v1.0.0-rc.1_Linux_aarch64.tar.gz',
      "darwin/amd64": 'https://github.com/initia-labs/initia/releases/download/v1.0.0-rc.1/initia_v1.0.0-rc.1_Darwin_x86_64.tar.gz',
      "darwin/arm64": 'https://github.com/initia-labs/initia/releases/download/v1.0.0-rc.1/initia_v1.0.0-rc.1_Darwin_aarch64.tar.gz'
    },
    genesis: {
      genesis_url: 'https://storage.googleapis.com/init-common-genesis/interwoven-1/genesis.json'
    }
  },
  description: 'Initia L1 is a Layer 1 blockchain designed to serve as the coordination layer and central hub for all Initia rollups. This layer provides essential services to Rollups, including: Network Security, Governance, Liquidity Solutions, Bridging and Interoperability.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.initia.xyz',
        provider: 'Initia Labs'
      },
      {
        address: 'https://initia.rpc.quasarstaking.ai:443',
        provider: 'Quasar'
      },
      {
        address: 'https://initia-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ],
    rest: [
      {
        address: 'https://rest.initia.xyz',
        provider: 'Initia Labs'
      },
      {
        address: 'https://initia.api.quasarstaking.ai:443',
        provider: 'Quasar'
      },
      {
        address: 'https://initia-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ],
    grpc: [
      {
        address: 'grpc.initia.xyz:443',
        provider: 'Initia Labs'
      },
      {
        address: 'initia.grpc.quasarstaking.ai:80',
        provider: 'Quasar'
      },
      {
        address: 'initia-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ]
  },
  explorers: [{
      kind: 'initia scan',
      url: 'https://scan.initia.xyz/interwoven-1',
      tx_page: 'https://scan.initia.xyz/interwoven-1/txs/${txHash}',
      account_page: 'https://scan.initia.xyz/interwoven-1/accounts/${accountAddress}'
    }],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/initia/images/INIT.svg',
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/initia/images/INIT.png',
      theme: {
        circle: true
      }
    }],
  logo_URIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/initia/images/INIT.svg',
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/initia/images/INIT.png'
  }
};
export default info;