import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'steemvm',
  chain_type: 'cosmos',
  chain_id: 'SteemVM-Manaslu-81630',
  pretty_name: 'SteemVM',
  website: 'https://svmapp.com',
  status: 'live',
  network_type: 'mainnet',
  bech32_prefix: 'steem',
  daemon_name: 'steemvmd',
  node_home: '$HOME/.steemvm',
  key_algos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'asteem',
        fixed_min_gas_price: 1000000000,
        low_gas_price: 1000000000,
        average_gas_price: 1250000000,
        high_gas_price: 1500000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'asteem'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/blazeapps007/SteemVirtualMachine-EVM',
    recommended_version: 'v0.0.8',
    compatible_versions: ['v0.0.8'],
    consensus: {
      type: 'cometbft',
      version: 'v0.39.4'
    },
    language: {
      type: 'go',
      version: '1.26.9'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.54.4'
    },
    ibc: {
      type: 'go',
      version: 'v11.2.0',
      ics_enabled: ['ics20-1']
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/blazeapps007/SteemVirtualMachine-EVM/release/v0.0.8/Instructions/genesis.json'
    }
  },
  images: [{
      image_sync: {
        chain_name: 'steemvm',
        base_denom: 'asteem'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/steem/images/steem.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/steem/images/steem.svg'
    }],
  apis: {
    rpc: [{
        address: 'https://rpc.steemvmscan.com',
        provider: 'SteemVM'
      }],
    rest: [{
        address: 'https://api.steemvmscan.com',
        provider: 'SteemVM'
      }],
    "evm-http-jsonrpc": [{
        address: 'https://evm.steemvmscan.com',
        provider: 'SteemVM'
      }]
  },
  explorers: [{
      kind: 'SVM Scan',
      url: 'https://steemvmscan.com',
      tx_page: 'https://steemvmscan.com/tx/${txHash}',
      account_page: 'https://steemvmscan.com/accounts/${accountAddress}'
    }, {
      kind: 'blockscout',
      url: 'https://evmscan.steemvmscan.com',
      tx_page: 'https://evmscan.steemvmscan.com/tx/${txHash}',
      account_page: 'https://evmscan.steemvmscan.com/address/${accountAddress}'
    }]
};
export default info;