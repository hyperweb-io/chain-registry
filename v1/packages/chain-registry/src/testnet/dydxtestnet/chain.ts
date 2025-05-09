import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'dydxtestnet',
  status: 'live',
  website: 'https://dydx.trade/',
  network_type: 'testnet',
  pretty_name: 'dYdX Protocol',
  chain_type: 'cosmos',
  chain_id: 'dydx-testnet-4',
  bech32_prefix: 'dydx',
  daemon_name: 'dydxprotocold',
  node_home: '$HOME/.dydxprotocol',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'adv4tnt',
        fixed_min_gas_price: 12500000000,
        low_gas_price: 12500000000,
        average_gas_price: 12500000000,
        high_gas_price: 20000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'adv4tnt'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/dydxprotocol/v4-chain/',
    recommended_version: 'v2.0.0',
    compatible_versions: ['v2.0.0'],
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/dydxprotocol/v4-testnets/main/dydx-testnet-4/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.47.4'
    },
    cosmwasm: {
      enabled: false
    }
  },
  description: 'Our goal is to build open source code that can power a first class product and trading experience.',
  apis: {
    rpc: [
      {
        address: 'https://dydx-rpc-testnet.enigma-validator.com',
        provider: 'Enigma'
      },
      {
        address: 'https://testnet-dydx-rpc.lavenderfive.com',
        provider: 'Lavender Five'
      },
      {
        address: 'https://test-dydx-rpc.kingnodes.com',
        provider: 'kingnodes 👑'
      },
      {
        address: 'https://dydx-testnet-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://dydx-testnet-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    rest: [
      {
        address: 'https://dydx-lcd-testnet.enigma-validator.com',
        provider: 'Enigma'
      },
      {
        address: 'https://testnet-dydx-api.lavenderfive.com',
        provider: 'Lavender Five'
      },
      {
        address: 'https://dydx-testnet-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://dydx-testnet-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    grpc: [
      {
        address: 'https://testnet-dydx-rpc.lavenderfive.com',
        provider: 'Lavender Five'
      },
      {
        address: 'https://dydx-testnet-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'dydx-testnet-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ]
  },
  explorers: [{
      kind: 'mintscan',
      url: 'https://www.mintscan.io/dydx-testnet',
      tx_page: 'https://www.mintscan.io/dydx-testnet/txs/${txHash}',
      account_page: 'https://www.mintscan.io/dydx-testnet/account/${accountAddress}'
    }, {
      kind: 'Valopers',
      url: 'https://testnet.dydx.valopers.com/',
      tx_page: 'https://testnet.dydx.valopers.com/transactions/${txHash}',
      account_page: 'https://testnet.dydx.valopers.com/account/${accountAddress}'
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
  },
  images: [{
      image_sync: {
        chain_name: 'dydx'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg',
      theme: {
        primary_color_hex: '#21212f'
      }
    }]
};
export default info;