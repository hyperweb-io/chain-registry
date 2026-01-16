import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'mirage',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Mirage',
  chain_type: 'cosmos',
  chain_id: 'mirage-1',
  bech32_prefix: 'mirage',
  daemon_name: 'miraged',
  node_home: '$HOME/.mirage/main',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'umirage',
        fixed_min_gas_price: 5000,
        low_gas_price: 5000,
        average_gas_price: 7500,
        high_gas_price: 10000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'umirage'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/MirageFoundation/mirage-node',
    sdk: {
      type: 'cosmos',
      version: '0.53'
    },
    ibc: {
      type: 'go',
      version: '10.2.0'
    },
    consensus: {
      type: 'cometbft',
      version: '0.38.17'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mirage/images/mirage.png'
  },
  description: 'Mirage is what Reddit could have been if it never sold out. Free speech lives on-chain. True discourse. Decentralized. Unstoppable.',
  apis: {
    rpc: [{
        address: 'https://mirage.talk/chain/rpc',
        provider: 'Mirage Foundation'
      }, {
        address: 'https://mirage.vote/chain/rpc',
        provider: 'Mirage Foundation'
      }],
    rest: [{
        address: 'https://mirage.talk/chain/rest',
        provider: 'Mirage Foundation'
      }, {
        address: 'https://mirage.vote/chain/rest',
        provider: 'Mirage Foundation'
      }]
  },
  explorers: [],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mirage/images/mirage.png'
    }]
};
export default info;