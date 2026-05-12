import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'turkchain',
  status: 'live',
  network_type: 'mainnet',
  chain_type: 'cosmos',
  pretty_name: 'Turkchain',
  chain_id: '1919',
  description: 'Turkchain is a Cosmos SDK and EVM compatible blockchain focused on interoperability, DeFi and Web3 infrastructure.',
  website: 'https://turkscan.com',
  bech32_prefix: 'turk',
  daemon_name: 'turkchaind',
  node_home: '$HOME/.turkchain',
  slip44: 60,
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  fees: {
    fee_tokens: [{
        denom: 'lira',
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'lira'
      }]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/turkchain/images/turkchain.png'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/turkchain/images/turkchain.png'
    }],
  apis: {
    rpc: [{
        address: 'https://node.turkscan.com',
        provider: 'turkchain'
      }],
    rest: [{
        address: 'https://api.turkscan.com',
        provider: 'turkchain'
      }],
    "evm-http-jsonrpc": [{
        address: 'https://rpc.turkscan.com',
        provider: 'turkchain'
      }]
  },
  explorers: [{
      kind: 'blockscout',
      url: 'https://turkscan.com',
      tx_page: 'https://turkscan.com/tx/${txHash}',
      account_page: 'https://turkscan.com/address/${accountAddress}'
    }]
};
export default info;