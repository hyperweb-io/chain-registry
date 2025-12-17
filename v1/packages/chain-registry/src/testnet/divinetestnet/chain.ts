import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'divinetestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Divine Testnet',
  chain_type: 'cosmos',
  chain_id: 'divine-testnet-1',
  bech32_prefix: 'divine',
  daemon_name: 'divined',
  node_home: '$HOME/.divine',
  slip44: 118,
  staking: {
    staking_tokens: [{
        denom: 'uDRC'
      }],
    lock_duration: {
      time: '2592000s'
    }
  },
  fees: {
    fee_tokens: [{
        denom: 'uDRC',
        low_gas_price: 0.0025,
        average_gas_price: 0.025,
        high_gas_price: 0.05
      }]
  },
  codebase: {
    git_repo: 'https://github.com/Divine-Ray-Coin/divinechain.git',
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/Divine-Ray-Coin/divinechain/refs/heads/main/genesis/genesis.json'
    },
    recommended_version: 'v1.0.0',
    compatible_versions: ['v1.0.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.17'
    },
    cosmwasm: {
      enabled: false
    },
    language: {
      type: 'go',
      version: '1.24.5'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.53.3'
    },
    ibc: {
      type: 'go',
      version: 'v10.2.0'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/divine/images/udrc.png'
  },
  description: 'Divine Ray Chain (DRC) powers a public-permissioned blockchain designed for conscious creators and community networks. DRC is the native asset used to secure the chain, enable transactions, reward participation, and support the emerging divine digital economy.',
  apis: {
    rpc: [
      {
        address: 'https://rpc-testnet-node1.divineray.ca:443',
        provider: 'divineRay'
      },
      {
        address: 'https://rpc-testnet-node2.divineray.ca:443',
        provider: 'divineRay'
      },
      {
        address: 'https://rpc-testnet-node3.divineray.ca:443',
        provider: 'divineRay'
      }
    ],
    rest: [
      {
        address: 'https://rest-testnet-node1.divineray.ca:443',
        provider: 'divineRay'
      },
      {
        address: 'https://rest-testnet-node2.divineray.ca:443',
        provider: 'divineRay'
      },
      {
        address: 'https://rest-testnet-node3.divineray.ca:443',
        provider: 'divineRay'
      }
    ],
    grpc: [
      {
        address: 'grpc-testnet-node1.divineray.ca:443',
        provider: 'divineRay'
      },
      {
        address: 'grpc-testnet-node2.divineray.ca:443',
        provider: 'divineRay'
      },
      {
        address: 'grpc-testnet-node3.divineray.ca:443',
        provider: 'divineRay'
      }
    ]
  },
  explorers: [],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/divine/images/udrc.png'
    }]
};
export default info;