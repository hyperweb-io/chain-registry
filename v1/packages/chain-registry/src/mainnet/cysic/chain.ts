import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'cysic',
  status: 'live',
  website: 'https://cysic.xyz/',
  network_type: 'mainnet',
  pretty_name: 'Cysic',
  chain_type: 'cosmos',
  chain_id: 'cysicmint_4399-1',
  bech32_prefix: 'cysic',
  daemon_name: 'cysicmintd',
  node_home: '$HOME/.cysicmint',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'CYS',
        fixed_min_gas_price: 250000000000,
        low_gas_price: 250000000000,
        average_gas_price: 250000000000,
        high_gas_price: 250000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'CGT'
      }],
    lock_duration: {
      time: '1814400s'
    }
  },
  codebase: {
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/cosmos/cosmos-sdk',
      version: 'v0.46.16'
    },
    consensus: {
      type: 'tendermint',
      version: 'v0.34.29'
    },
    ibc: {
      type: 'go',
      version: 'v6.1.0',
      ics_enabled: ['ics20-1']
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/cysic-labs/validator/main/mainnet/config/genesis.json'
    }
  },
  description: 'Cysic is an EVM-compatible Layer 1 and full-stack verifiable compute network for zero-knowledge proofs, AI workloads, and decentralized compute markets.',
  apis: {
    rpc: [{
        address: 'https://rpc.cysic.xyz',
        provider: 'Cysic'
      }, {
        address: 'https://rpc.cysic.nodestake.org',
        provider: 'NodeStake'
      }],
    rest: [{
        address: 'https://rest.cysic.xyz',
        provider: 'Cysic'
      }, {
        address: 'https://api.cysic.nodestake.org',
        provider: 'NodeStake'
      }]
  },
  explorers: [{
      kind: 'Cysic Explorer',
      url: 'https://explorer.cysic.xyz/'
    }],
  keywords: [
    'evm',
    'zk',
    'ai',
    'compute'
  ],
  logo_URIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cysic/images/cysic.svg'
  },
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cysic/images/cysic.svg'
    }]
};
export default info;