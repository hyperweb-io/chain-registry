import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'sovr',
  chain_type: 'cosmos',
  chain_id: 'sovr-1',
  pretty_name: 'Sovren',
  status: 'live',
  network_type: 'mainnet',
  bech32_prefix: 'sovr',
  daemon_name: 'sovrd',
  node_home: '$HOME/.sovr',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'usovr',
        fixed_min_gas_price: 0.001,
        low_gas_price: 0.025,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'usovr'
      }],
    lock_duration: {
      time: '1814400s'
    }
  },
  codebase: {
    git_repo: 'https://github.com/sovrn-tech/sovr-networks',
    recommended_version: 'v0.23.0',
    compatible_versions: ['v0.23.0'],
    sdk: {
      type: 'cosmos',
      version: 'v0.53.8'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.23'
    },
    ibc: {
      type: 'go',
      version: 'v10.5.0'
    },
    cosmwasm: {
      version: 'v0.60.7',
      enabled: true
    },
    genesis: {
      name: 'sovr-1',
      genesis_url: 'https://github.com/sovrn-tech/sovr-networks/raw/main/mainnet/genesis.json?checksum=sha256:04529695e7ccfe32fcf3bc8031c343056d27cbe4aa3b3046027e27065bb9a855'
    },
    tag: 'v0.23.0',
    binaries: {
      "linux/amd64": 'https://github.com/sovrn-tech/sovr-networks/releases/download/v0.23.0/sovrd-v0.23.0-linux-amd64'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.sovrchain.net',
        provider: 'sovren'
      }],
    rest: [{
        address: 'https://api.sovrchain.net',
        provider: 'sovren'
      }],
    grpc: [{
        address: 'grpc.sovrchain.net:443',
        provider: 'sovren'
      }]
  },
  explorers: [{
      kind: 'sovrscan',
      url: 'https://sovrscan.com',
      tx_page: 'https://sovrscan.com/transactions/${txHash}'
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sovr/images/sovr.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sovr/images/sovr.svg'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sovr/images/sovr.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sovr/images/sovr.svg'
    }],
  website: 'https://sovrentech.io'
};
export default info;