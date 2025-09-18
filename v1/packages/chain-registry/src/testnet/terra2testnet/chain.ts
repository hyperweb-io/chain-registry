import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'terra2testnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://www.terra.money/',
  pretty_name: 'Terra 2.0',
  chain_type: 'cosmos',
  chain_id: 'pisco-1',
  daemon_name: 'terrad',
  node_home: '$HOME/.terra',
  bech32_prefix: 'terra',
  slip44: 330,
  fees: {
    fee_tokens: [{
        denom: 'uluna',
        fixed_min_gas_price: 0.0125,
        low_gas_price: 0.0125,
        average_gas_price: 0.015,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uluna'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/terra-money/core/',
    recommended_version: 'v2.4.0-rc5',
    compatible_versions: ['v2.4.0-rc4', 'v2.4.0-rc5'],
    genesis: {
      name: 'v2.0',
      genesis_url: 'https://tfl-pisco-1.s3.amazonaws.com/genesis.json'
    },
    tag: 'v2.4.0-rc5',
    binaries: {
      "linux/amd64": 'https://github.com/terra-money/core/releases/download/v2.4.0-rc5/terra_2.4.0-rc5_Linux_x86_64.tar.gz?checksum=sha256:c61c9c4ae8a0bcb9d7f9fc2197d84ba8b75b558c2cee3438ae2142eb97e0d771'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.46.11'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.34.27'
    },
    cosmwasm: {
      version: 'v0.30.0',
      enabled: true
    },
    ibc: {
      type: 'go',
      version: 'v6.1.1'
    }
  },
  apis: {
    rpc: [{
        address: 'https://pisco-rpc.terra.dev:443',
        provider: 'Terraform Labs'
      }, {
        address: 'https://terra-testnet-rpc.polkachu.com:443',
        provider: 'Polkachu'
      }],
    rest: [{
        address: 'https://pisco-lcd.terra.dev:443',
        provider: 'Terraform Labs'
      }, {
        address: 'https://terra-testnet-api.polkachu.com:443',
        provider: 'Polkachu'
      }],
    grpc: [{
        address: 'terra-testnet-grpc.polkachu.com:11790',
        provider: 'Polkachu'
      }]
  },
  explorers: [{
      kind: 'finder',
      url: 'http://finder.terra.money/testnet/',
      tx_page: 'https://finder.terra.money/testnet/tx/${txHash}'
    }]
};
export default info;