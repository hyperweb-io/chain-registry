import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'cysic',
  status: 'live',
  website: 'https://cysic.xyz/',
  networkType: 'mainnet',
  prettyName: 'Cysic',
  chainType: 'cosmos',
  chainId: 'cysicmint_4399-1',
  bech32Prefix: 'cysic',
  daemonName: 'cysicmintd',
  nodeHome: '$HOME/.cysicmint',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'CYS',
        fixedMinGasPrice: 250000000000,
        lowGasPrice: 250000000000,
        averageGasPrice: 250000000000,
        highGasPrice: 250000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'CGT'
      }],
    lockDuration: {
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
      icsEnabled: ['ics20-1']
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/cysic-labs/validator/main/mainnet/config/genesis.json'
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
  logoURIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cysic/images/cysic.svg'
  },
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cysic/images/cysic.svg'
    }]
};
export default info;