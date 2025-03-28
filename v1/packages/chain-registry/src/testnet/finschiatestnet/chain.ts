import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'finschiatestnet',
  chain_type: 'cosmos',
  chain_id: 'ebony-2',
  website: 'https://www.finschia.io/',
  pretty_name: 'Ebony',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'tlink',
  daemon_name: 'fnsad',
  node_home: '$HOME/.finschia',
  key_algos: ['secp256k1'],
  slip44: 438,
  fees: {
    fee_tokens: [{
        denom: 'tcony',
        fixed_min_gas_price: 0.015,
        low_gas_price: 0.015,
        average_gas_price: 0.015,
        high_gas_price: 0.015
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'tcony'
      }],
    lock_duration: {
      time: '86400s'
    }
  },
  codebase: {
    git_repo: 'https://github.com/finschia/finschia',
    recommended_version: 'v2.0.1',
    compatible_versions: ['v2.0.0', 'v2.0.1'],
    binaries: {
      "linux/amd64": 'https://github.com/Finschia/finschia/releases/download/v2.0.1/fnsad-2.0.1-linux-amd64',
      "linux/arm64": 'https://github.com/Finschia/finschia/releases/download/v2.0.1/fnsad-2.0.1-linux-arm64',
      "darwin/amd64": 'https://github.com/Finschia/finschia/releases/download/v2.0.1/fnsad-2.0.1-darwin-amd64',
      "darwin/arm64": 'https://github.com/Finschia/finschia/releases/download/v2.0.1/fnsad-2.0.1-darwin-arm64'
    },
    genesis: {
      name: 'v2',
      genesis_url: 'https://vos.line-scdn.net/finschia-2-fileshare/ebony-prod-2/genesis-file.tgz'
    },
    language: {
      type: 'go',
      version: '1.20'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/Finschia/finschia-sdk',
      version: 'v0.48.1'
    },
    ibc: {
      type: 'go',
      version: 'v4.3.1',
      ics_enabled: ['ics20-1']
    },
    cosmwasm: {
      version: 'v0.2.0',
      path: '$HOME/.finschia/wasm/wasm',
      enabled: true,
      repo: 'https://github.com/Finschia/wasmd'
    }
  },
  apis: {
    rpc: [{
        address: 'https://ebony-rpc.finschia.io'
      }],
    rest: [{
        address: 'https://ebony-api.finschia.io'
      }],
    grpc: [{
        address: 'ebony-grpc.finschia.io:443'
      }]
  },
  explorers: [{
      kind: 'mintscan',
      url: 'https://www.mintscan.io/finschia-testnet',
      tx_page: 'https://www.mintscan.io/finschia-testnet/tx/${txHash}',
      account_page: 'https://www.mintscan.io/finschia-testnet/address/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.svg'
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.svg'
  }
};
export default info;