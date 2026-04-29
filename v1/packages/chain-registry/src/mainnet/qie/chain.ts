import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'qie',
  status: 'live',
  website: 'https://qie.digital',
  network_type: 'mainnet',
  pretty_name: 'QIE',
  chain_type: 'cosmos',
  chain_id: 'qie_1990-1',
  bech32_prefix: 'qie',
  daemon_name: 'qied',
  node_home: '$HOME/.qied',
  key_algos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'aqie',
        fixed_min_gas_price: 0,
        low_gas_price: 20000000000,
        average_gas_price: 25000000000,
        high_gas_price: 40000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'aqie'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/qieadmin/qie',
    recommended_version: 'v1.0.0',
    genesis: {
      genesis_url: 'https://github.com/qieadmin/qie/raw/main/genesis.json'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.qie.digital',
        provider: 'QIE Foundation'
      }, {
        address: 'https://tendermint.qie.digital',
        provider: 'QIE Foundation'
      }],
    rest: [{
        address: 'https://api.qie.digital',
        provider: 'QIE Foundation'
      }],
    grpc: [{
        address: 'grpc.qie.digital:443',
        provider: 'QIE Foundation'
      }],
    "evm-http-jsonrpc": [{
        address: 'https://rpc1mainnet.qie.digital',
        provider: 'QIE Foundation'
      }, {
        address: 'https://rpc2mainnet.qie.digital',
        provider: 'QIE Foundation'
      }]
  },
  explorers: [{
      kind: 'qie-explorer',
      url: 'https://mainnet.qie.digital',
      tx_page: 'https://mainnet.qie.digital/tx/${txHash}',
      account_page: 'https://mainnet.qie.digital/address/${accountAddress}'
    }],
  keywords: ['evm'],
  extra_codecs: ['ethermint'],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qie/images/qie.png'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qie/images/qie.png'
    }]
};
export default info;