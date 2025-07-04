import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'noistestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://nois.network',
  pretty_name: 'Nois',
  chain_type: 'cosmos',
  chain_id: 'nois-testnet-005',
  bech32_prefix: 'nois',
  daemon_name: 'noisd',
  node_home: '$HOME/.noisd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'unois',
        fixed_min_gas_price: 0,
        low_gas_price: 0.05,
        average_gas_price: 0.05,
        high_gas_price: 0.1
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'unois'
      }],
    lock_duration: {
      time: '1814400s'
    }
  },
  codebase: {
    git_repo: 'https://github.com/noislabs/noisd',
    recommended_version: 'v1.0.1',
    compatible_versions: ['v1.0.1'],
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    genesis: {
      name: 'v1',
      genesis_url: 'https://raw.githubusercontent.com/noislabs/networks/nois-testnet-005/nois-testnet-005/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.45'
    },
    cosmwasm: {
      version: '0.30',
      enabled: true
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
      theme: {
        primary_color_hex: '#0C0914'
      }
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png'
  },
  apis: {
    rpc: [
      {
        address: 'https://nois-testnet-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc.nois.mcbnode.online:443',
        provider: 'mcbnode'
      },
      {
        address: 'https://nois-testnet.rpc.kjnodes.com:443',
        provider: 'kjnodes'
      },
      {
        address: 'https://tnois-rpc.systemd.run:443',
        provider: 'systemd'
      }
    ],
    grpc: [{
        address: 'tnois-grpc.systemd.run:443',
        provider: 'systemd'
      }, {
        address: 'http://nois.grpc.t.stavr.tech:191',
        provider: '🔥STAVR🔥'
      }],
    rest: [
      {
        address: 'https://api.nois.mcbnode.online',
        provider: 'mcbnode'
      },
      {
        address: 'https://nois3.api.t.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://tnois-api.systemd.run:443',
        provider: 'systemd'
      }
    ]
  },
  explorers: [{
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Nois-Testnet',
      tx_page: 'https://explorer.stavr.tech/Nois-Testnet/tx/${txHash}',
      account_page: 'https://explorer.stavr.tech/Nois-Testnet/account/${accountAddress}'
    }, {
      kind: 'explorers.guru',
      url: 'https://testnet.nois.explorers.guru',
      tx_page: 'https://testnet.nois.explorers.guru/transaction/${txHash}',
      account_page: 'https://testnet.nois.explorers.guru/account/${accountAddress}'
    }],
  keywords: [
    'nois',
    'randomness',
    'drand',
    'wasm'
  ]
};
export default info;