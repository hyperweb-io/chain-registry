import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'gravitybridge',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.gravitybridge.net/',
  pretty_name: 'Gravity Bridge',
  chain_type: 'cosmos',
  chain_id: 'gravity-bridge-3',
  bech32_prefix: 'gravity',
  daemon_name: 'gravity',
  node_home: '$HOME/.gravity',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ugraviton',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0.035
      },
      {
        denom: 'gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        low_gas_price: 0.0002,
        average_gas_price: 0.0005,
        high_gas_price: 0.0008
      },
      {
        denom: 'gravity0xdAC17F958D2ee523a2206206994597C13D831ec7',
        low_gas_price: 0.0002,
        average_gas_price: 0.0005,
        high_gas_price: 0.0008
      }
    ]
  },
  staking: {
    staking_tokens: [{
        denom: 'ugraviton'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/Gravity-Bridge/Gravity-Bridge',
    recommended_version: 'v1.11.1',
    compatible_versions: ['v1.11.1'],
    binaries: {
      "linux/amd64": 'https://github.com/Gravity-Bridge/Gravity-Bridge/releases/download/v1.11.1/gravity-linux-amd64'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/Gravity-Bridge/Gravity-Docs/main/genesis.json'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png'
  },
  description: 'An open, decentralized bridge that unlocks the power of interoperability & liquidity between blockchain ecosystems.',
  apis: {
    rpc: [
      {
        address: 'https://gravitychain.io:26657',
        provider: 'althea'
      },
      {
        address: 'http://gravity-bridge-1-08.nodes.amhost.net:26657',
        provider: 'amhost'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/gravitybridge',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc.gravity.bh.rocks/',
        provider: 'BlockHunters 🎯'
      },
      {
        address: 'https://gravity-rpc.ramuchi.tech',
        provider: 'ramuchi.tech'
      },
      {
        address: 'https://rpc-gravity-bridge-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://gravity-rpc.staketab.org:443',
        provider: 'Staketab'
      },
      {
        address: 'https://gravity-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://rpc.g-bridge.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://rpc.gravity-bridge-3.gravity.aviaone.com:443',
        provider: 'AviaOne 🟢'
      },
      {
        address: 'https://rpc.gravity.citizenweb3.com',
        provider: 'Citizen Web3'
      },
      {
        address: 'https://gravity-rpc.polkachu.com:443',
        provider: 'Polkachu'
      }
    ],
    rest: [
      {
        address: 'https://gravitychain.io:1317',
        provider: 'althea'
      },
      {
        address: 'https://gravity-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rest.lavenderfive.com:443/gravitybridge',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://api.gravity.bh.rocks/',
        provider: 'BlockHunters 🎯'
      },
      {
        address: 'https://gravity-api.ramuchi.tech',
        provider: 'ramuchi.tech'
      },
      {
        address: 'https://api-gravity-bridge-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://gravity-rest.staketab.org',
        provider: 'Staketab'
      },
      {
        address: 'https://gravity-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://lcd.g-bridge.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://api.gravity-bridge-3.gravity.aviaone.com',
        provider: 'AviaOne 🟢'
      },
      {
        address: 'https://api.gravity.citizenweb3.com',
        provider: 'Citizen Web3'
      }
    ],
    grpc: [
      {
        address: 'gravity-bridge-1-08.nodes.amhost.net:9090',
        provider: 'amhost'
      },
      {
        address: 'gravity-grpc.polkachu.com:14290',
        provider: 'Polkachu'
      },
      {
        address: 'gravitybridge.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://gravity-grpc.ramuchi.tech:10090',
        provider: 'ramuchi.tech'
      },
      {
        address: 'grpc-gravity-bridge-01.stakeflow.io:1302',
        provider: 'Stakeflow'
      },
      {
        address: 'services.staketab.com:9017',
        provider: 'Staketab'
      },
      {
        address: 'gravity-grpc.w3coins.io:14290',
        provider: 'w3coins'
      },
      {
        address: 'https://grpc.g-bridge.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'grpc.gravity-bridge-3.gravity.aviaone.com:9200',
        provider: 'AviaOne 🟢'
      },
      {
        address: 'grpc.gravity.citizenweb3.com:443',
        provider: 'Citizen Web3'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/gravitybridge',
      tx_page: 'https://ezstaking.app/gravitybridge/txs/${txHash}',
      account_page: 'https://ezstaking.app/gravitybridge/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/gravity-bridge',
      tx_page: 'https://www.mintscan.io/gravity-bridge/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/gravity-bridge/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/gravity-bridge',
      tx_page: 'https://ping.pub/gravity-bridge/tx/${txHash}'
    },
    {
      kind: 'explorers.guru',
      url: 'https://gravity.explorers.guru',
      tx_page: 'https://gravity.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/gravity-bridge',
      tx_page: 'https://atomscan.com/gravity-bridge/transactions/${txHash}',
      account_page: 'https://atomscan.com/gravity-bridge/accounts/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/gravitybridge',
      tx_page: 'https://explorer.tcnetwork.io/gravitybridge/transaction/${txHash}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/gravity-bridge',
      account_page: 'https://stakeflow.io/gravity-bridge/accounts/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/GravityBridge',
      tx_page: 'https://explorer.stavr.tech/GravityBridge/tx/${txHash}',
      account_page: 'https://explorer.stavr.tech/GravityBridge/accounts/${accountAddress}'
    },
    {
      kind: 'AviaOne 🟢',
      url: 'https://mainnet.explorer.aviaone.com/gravity-bridge',
      tx_page: 'https://mainnet.explorer.aviaone.com/gravity-bridge/tx/${txHash}',
      account_page: 'https://mainnet.explorer.aviaone.com/gravity-bridge/accounts/${accountAddress}'
    },
    {
      kind: 'Validatorinfo',
      url: 'https://validatorinfo.com/networks/gravitybridge/overview',
      validator_page: 'https://validatorinfo.com/networks/gravitybridge/validators',
      proposal_page: 'https://validatorinfo.com/networks/gravitybridge/governance'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png'
    }],
  snapshots: [{
      url: 'https://polkachu.com/tendermint_snapshots/gravity',
      type: 'pruned',
      compression: 'lz4',
      checksum_available: false,
      provider: 'Polkachu'
    }]
};
export default info;