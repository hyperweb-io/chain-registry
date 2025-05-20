import { Chain } from '@chain-registry/types';
const testnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'junotestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Juno Testnet',
  chain_type: 'cosmos',
  chain_id: 'uni-7',
  bech32_prefix: 'juno',
  daemon_name: 'junod',
  node_home: '$HOME/.juno',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ujunox',
        low_gas_price: 0.003,
        average_gas_price: 0.0045,
        high_gas_price: 0.006
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ujunox'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/CosmosContracts/juno',
    recommended_version: 'v27.0.0',
    compatible_versions: ['v27.0.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.37.8'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/CosmosContracts/testnets/main/uni-7/genesis.zip'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.47.15'
    },
    ibc: {
      type: 'go',
      version: 'v7.6.0'
    },
    cosmwasm: {
      version: 'v0.46',
      enabled: true
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://juno-testnet-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc-uni.junonetwork.io',
        provider: 'Juno Network'
      },
      {
        address: 'https://junotestnet-rpc.kleomedes.network',
        provider: 'Kleomedes'
      }
    ],
    rest: [
      {
        address: 'https://juno-testnet-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://lcd-uni.junonetwork.io',
        provider: 'Juno Network'
      },
      {
        address: 'https://junotestnet-api.kleomedes.network',
        provider: 'Kleomedes'
      }
    ],
    grpc: [{
        address: 'juno-testnet-grpc.polkachu.com:12690',
        provider: 'Polkachu'
      }, {
        address: 'junotestnet.gprc.kleomedes.network',
        provider: 'Kleomedes'
      }]
  },
  explorers: [{
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Juno-Testnet',
      tx_page: 'https://explorer.stavr.tech/Juno-Testnet/txs/${txHash}',
      account_page: 'https://explorer.stavr.tech/Juno-Testnet/account/${accountAddress}'
    }, {
      kind: 'Stake Hub by Kleomedes',
      url: 'https://www.stake-hub.xyz/junotestnet'
    }]
};
export default testnet;
    