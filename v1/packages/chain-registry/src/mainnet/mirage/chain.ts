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
        fixed_min_gas_price: 0.025,
        low_gas_price: 0.025,
        average_gas_price: 0.05,
        high_gas_price: 0.1
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
    rpc: [
      {
        address: 'http://mirage.talk:26657',
        provider: 'Mirage'
      },
      {
        address: 'http://mirage.vote:26657',
        provider: 'Mirage'
      },
      {
        address: 'http://146.190.108.140:26657',
        provider: 'Mirage'
      },
      {
        address: 'http://139.59.9.96:26657',
        provider: 'Mirage'
      }
    ],
    grpc: [
      {
        address: 'mirage.talk:9090',
        provider: 'Mirage'
      },
      {
        address: 'mirage.vote:9090',
        provider: 'Mirage'
      },
      {
        address: '146.190.108.140:9090',
        provider: 'Mirage'
      },
      {
        address: '139.59.9.96:9090',
        provider: 'Mirage'
      }
    ]
  },
  explorers: [],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mirage/images/mirage.png'
    }]
};
export default info;