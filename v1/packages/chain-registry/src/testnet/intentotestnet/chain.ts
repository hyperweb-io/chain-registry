import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'intentotestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Intento Testnet',
  chain_type: 'cosmos',
  chain_id: 'intento-ics-test-1',
  bech32_prefix: 'into',
  daemon_name: 'intentod',
  node_home: '$HOME/.intento',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uinto',
        fixed_min_gas_price: 0
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uinto'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/trstlabs/intento',
    recommended_version: 'v0.9.2-r1',
    compatible_versions: ['v0.9.2-r1'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.17'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/trstlabs/networks/refs/heads/main/testnet/intento-ics-test-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.50.11'
    },
    ibc: {
      type: 'go',
      version: 'v8.7.0'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.intento.zone',
        provider: 'Intento'
      }],
    rest: [{
        address: 'https://lcd.intento.zone',
        provider: 'Intento'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'PingPub',
      url: 'https://explorer.intento.zone',
      tx_page: 'https://explorer.intento.zone/intento-test/tx/${txHash}'
    }]
};
export default info;