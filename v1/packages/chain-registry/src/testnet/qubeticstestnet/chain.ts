import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'qubeticstestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Qubetics Testnet',
  chain_type: 'cosmos',
  chain_id: 'qubetics_9029-1',
  bech32_prefix: 'qubetics',
  daemon_name: 'qubeticsd',
  node_home: '$HOME/.tmp-qubeticsd',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'tics',
        low_gas_price: 20000000000,
        average_gas_price: 25000000000,
        high_gas_price: 40000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'tics'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/Qubetics/qubetics-chain',
    recommended_version: 'v0.0.1',
    compatible_versions: ['v0.0.1'],
    consensus: {
      type: 'cometbft',
      version: '0.37'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/Qubetics/qubetics-testnet-script/refs/heads/main/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.47'
    },
    ibc: {
      type: 'go',
      version: 'v7.6.0'
    }
  },
  apis: {
    rpc: [{
        address: 'https://tendermint-testnet.qubetics.work/',
        provider: 'qubetics'
      }],
    rest: [{
        address: 'https://swagger-testnet.qubetics.work/',
        provider: 'qubetics'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'Qubetics Explorer',
      url: 'https://testnet.qubetics.work/dashboard',
      tx_page: 'https://testnet.qubetics.work/tx/${txHash}'
    }]
};
export default info;