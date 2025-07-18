import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'hippoprotocoltestnet',
  status: 'live',
  website: 'https://hippoprotocol.ai/',
  network_type: 'testnet',
  pretty_name: 'Hippo Protocol Testnet',
  chain_type: 'cosmos',
  chain_id: 'hippo-protocol-testnet-1',
  bech32_prefix: 'hippo',
  slip44: 118,
  daemon_name: 'hippod',
  node_home: '$HOME/.hippod',
  key_algos: ['secp256k1'],
  fees: {
    fee_tokens: [{
        denom: 'ahp',
        low_gas_price: 4000000000000,
        average_gas_price: 5000000000000,
        high_gas_price: 10000000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ahp'
      }],
    lock_duration: {
      time: '1814400s'
    }
  },
  codebase: {
    git_repo: 'https://github.com/hippo-protocol/hippo-protocol',
    recommended_version: 'v1.0.0',
    compatible_versions: ['v1.0.0'],
    genesis: {
      genesis_url: 'https://github.com/hippo-protocol/hippo-protocol-hub/blob/main/hippo-protocol-testnet-1/genesis.json'
    },
    consensus: {
      type: 'cometbft',
      repo: 'https://github.com/cometbft/cometbft',
      version: 'v0.38.17',
      tag: 'v0.38.17'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/cosmos/cosmos-sdk',
      version: 'v0.50.13',
      tag: 'v0.50.13'
    },
    ibc: {
      type: 'go',
      repo: 'https://github.com/cosmos/ibc-go',
      version: 'v8.7.0',
      tag: 'v8.7.0'
    },
    language: {
      type: 'go',
      version: '1.23.0'
    }
  },
  logo_URIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/hippoprotocol/images/logo.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.testnet.hippo-protocol.com/',
        provider: 'Hippo Protocol'
      }],
    rest: [{
        address: 'https://api.testnet.hippo-protocol.com/',
        provider: 'Hippo Protocol'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'Hippo River Testnet',
      url: 'https://river-testnet.hippoprotocol.ai/',
      tx_page: 'https://river-testnet.hippoprotocol.ai/hippo-protocol/tx/${txHash}',
      account_page: 'https://river-testnet.hippoprotocol.ai/hippo-protocol/account/${accountAddress}'
    }],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/hippoprotocol/images/logo.svg'
    }],
  description: 'One Protocol. Every Patient. Infinite Possibility.'
};
export default info;