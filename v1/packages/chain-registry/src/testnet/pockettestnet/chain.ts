import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'pockettestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://www.pokt.network/',
  pretty_name: 'Pocket Beta TestNet',
  chain_type: 'cosmos',
  chain_id: 'pocket-beta',
  bech32_prefix: 'pokt',
  daemon_name: 'pocketd',
  node_home: '$HOME/.pocket',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'upokt',
        fixed_min_gas_price: 0.001,
        low_gas_price: 0.001,
        average_gas_price: 0.002,
        high_gas_price: 0.0025
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'upokt'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/pokt-network/poktroll',
    recommended_version: 'v0.1.1',
    compatible_versions: ['v0.1.1'],
    binaries: {
      "linux/amd64": 'https://github.com/pokt-network/poktroll/releases/download/v0.1.1/pocket_linux_amd64.tar.gz',
      "linux/arm64": 'https://github.com/pokt-network/poktroll/releases/download/v0.1.1/pocket_linux_arm64.tar.gz',
      "darwin/amd64": 'https://github.com/pokt-network/poktroll/releases/download/v0.1.1/pocket_darwin_amd64.tar.gz',
      "darwin/arm64": 'https://github.com/pokt-network/poktroll/releases/download/v0.1.1/pocket_darwin_arm64.tar.gz'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.12'
    },
    genesis: {
      name: 'v0.1.1',
      genesis_url: 'https://github.com/pokt-network/pocket-network-genesis/blob/master/shannon/testnet/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.13'
    },
    ibc: {
      type: 'go'
    },
    cosmwasm: {
      enabled: false
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pocket/images/pokt-icon.png'
    }, {
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pocket/images/pokt-icon.svg'
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pocket/images/pokt-icon.png'
  },
  apis: {
    rpc: [{
        address: 'https://shannon-testnet-grove-rpc.beta.poktroll.com',
        provider: 'Grove'
      }],
    rest: [{
        address: 'https://shannon-testnet-grove-api.beta.poktroll.com',
        provider: 'Grove'
      }]
  },
  explorers: [{
      kind: '🔍 Pocket Explorer by Soothe 🔎',
      url: 'https://shannon-beta.trustsoothe.io',
      tx_page: 'https://shannon-beta.trustsoothe.io/tx/${txHash}',
      account_page: 'https://shannon-beta.trustsoothe.io/accounts/${accountAddress}'
    }, {
      kind: '🗺 Pocket Explorer by Stakenodes.org 🗺',
      url: 'https://shannon.beta.testnet.pokt.network',
      tx_page: 'https://shannon.beta.testnet.pokt.network/tx/${txHash}',
      account_page: 'https://shannon.beta.testnet.pokt.network/poktroll/account/${accountAddress}'
    }],
  keywords: [
    'rpc',
    'api',
    'modular',
    'data'
  ]
};
export default info;