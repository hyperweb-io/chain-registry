import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'mantrachain',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'MANTRA',
  chain_type: 'cosmos',
  chain_id: 'mantra-1',
  bech32_prefix: 'mantra',
  daemon_name: 'mantrachaind',
  node_home: '$HOME/.mantrachain',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'amantra',
        fixed_min_gas_price: 40000000000,
        low_gas_price: 40000000000,
        average_gas_price: 80000000000,
        high_gas_price: 120000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'amantra'
      }],
    lock_duration: {
      time: '691200s'
    }
  },
  codebase: {
    git_repo: 'https://github.com/MANTRA-Chain/mantrachain',
    recommended_version: 'v7.0.0',
    compatible_versions: ['v7.0.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.21'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.53.4',
      repo: 'https://github.com/MANTRA-Chain/cosmos-sdk',
      tag: 'v0.53.4-v7-mantra-2'
    },
    cosmwasm: {
      version: 'v0.61.1',
      enabled: true
    },
    ibc: {
      type: 'go',
      version: 'v10.4.0'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/MANTRA-Chain/net/refs/heads/main/mantra-1/genesis.json'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.mantrachain.io',
        provider: 'MANTRACHAIN'
      },
      {
        address: 'https://mantra-mainnet-rpc.itrocket.net:443',
        provider: 'ITRocket'
      },
      {
        address: 'https://mantra.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥'
      }
    ],
    rest: [
      {
        address: 'https://api.mantrachain.io',
        provider: 'MANTRACHAIN'
      },
      {
        address: 'https://mantra-mainnet-api.itrocket.net',
        provider: 'ITRocket'
      },
      {
        address: 'https://mantra.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.mantrachain.io',
        provider: 'MANTRACHAIN'
      },
      {
        address: 'mantra-mainnet-grpc.itrocket.net:443',
        provider: 'ITRocket'
      },
      {
        address: 'mantra.grpc.m.stavr.tech:3601',
        provider: '🔥STAVR🔥'
      }
    ],
    "evm-http-jsonrpc": [{
        address: 'https://evm.mantrachain.io',
        provider: 'MANTRACHAIN'
      }]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg'
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/mantra',
      tx_page: 'https://mintscan.io/mantra/txs/${txHash}',
      account_page: 'https://mintscan.io/mantra/account/${accountAddress}'
    },
    {
      kind: 'ITRocket',
      url: 'https://mainnet.itrocket.net/mantra',
      tx_page: 'https://mainnet.itrocket.net/mantra/transaction/${txHash}',
      account_page: 'https://mainnet.itrocket.net/mantra/account/${accountAddress}'
    },
    {
      kind: 'mantrascan',
      url: 'https://mantrascan.io/mainnet',
      tx_page: 'https://mantrascan.io/mainnet/tx/${txHash}',
      account_page: 'https://mantrascan.io/mainnet/address/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Mantra-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Mantra-Mainnet/transaction/${txHash}',
      account_page: 'https://explorer.stavr.tech/Mantra-Mainnet/account/${accountAddress}'
    }
  ],
  keywords: [
    'rwa',
    'wasm',
    'evm',
    'staking'
  ],
  images: [{
      image_sync: {
        chain_name: 'mantrachain',
        base_denom: 'uom'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg',
      theme: {
        circle: true
      }
    }]
};
export default info;