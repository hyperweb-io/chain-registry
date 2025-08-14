import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'paxi',
  status: 'live',
  website: 'https://paxinet.io',
  network_type: 'mainnet',
  chain_type: 'cosmos',
  pretty_name: 'Paxi',
  chain_id: 'paxi-mainnet',
  bech32_prefix: 'paxi',
  daemon_name: 'paxid',
  node_home: '$HOME/.paxi',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'upaxi',
        fixed_min_gas_price: 0.05,
        low_gas_price: 0.05,
        average_gas_price: 0.1,
        high_gas_price: 0.25
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'upaxi'
      }],
    lock_duration: {
      time: '604800s'
    }
  },
  codebase: {
    git_repo: 'https://github.com/paxi-web3/paxi',
    genesis: {
      name: 'paxi-mainnet',
      genesis_url: 'https://mainnet-rpc.paxinet.io/genesis'
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/paxi/images/paxi.png',
      theme: {
        circle: false
      }
    }],
  apis: {
    rpc: [{
        address: 'https://mainnet-rpc.paxinet.io',
        provider: 'Paxi Foundation'
      }],
    rest: [{
        address: 'https://mainnet-lcd.paxinet.io',
        provider: 'Paxi Foundation'
      }],
    grpc: [{
        address: 'mainnet-rpc.paxinet.io:443',
        provider: 'Paxi Foundation'
      }]
  },
  explorers: [{
      kind: 'paxi-explorer',
      url: 'https://explorer.paxinet.io',
      tx_page: 'https://explorer.paxinet.io/tx/${txHash}',
      account_page: 'https://explorer.paxinet.io/address/${accountAddress}'
    }],
  keywords: [
    'ibc',
    'staking',
    'dex',
    'wasm'
  ]
};
export default info;