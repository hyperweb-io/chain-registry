import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'lavatestnet',
  status: 'live',
  pre_fork_chain_name: 'lavatestnet1',
  network_type: 'testnet',
  website: 'https://www.lavanet.xyz/',
  pretty_name: 'Lava Testnet',
  chain_type: 'cosmos',
  chain_id: 'lava-testnet-2',
  bech32_prefix: 'lava@',
  daemon_name: 'lavad',
  node_home: '$HOME/.lava',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ulava',
        fixed_min_gas_price: 0.000001,
        low_gas_price: 0.000001,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ulava'
      }],
    lock_duration: {
      time: '1209600s'
    }
  },
  codebase: {
    git_repo: 'https://github.com/lavanet/lava',
    recommended_version: 'v1.0.1',
    compatible_versions: ['v1.0.1'],
    binaries: {
      "linux/amd64": 'https://github.com/lavanet/lava/releases/download/v1.0.1/lavad-v1.0.1-linux-amd64'
    },
    consensus: {
      type: 'tendermint',
      version: '0.37'
    },
    genesis: {
      name: 'v0.21.1.2',
      genesis_url: 'https://raw.githubusercontent.com/lavanet/lava-config/main/testnet-2/genesis_json/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.47.7'
    },
    ibc: {
      type: 'go',
      version: '7.2.0',
      ics_enabled: ['ics20-1']
    },
    cosmwasm: {
      version: '0.30',
      enabled: false
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.png',
      theme: {
        primary_color_hex: '#D7001F'
      }
    }, {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.svg'
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.png'
  },
  apis: {
    rpc: [
      {
        address: 'https://lav1.tendermintrpc.lava.build:443',
        provider: 'Lava'
      },
      {
        address: 'http://lava.rpc.t.stavr.tech:198',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://lava-testnet-rpc.itrocket.net:443',
        provider: 'ITRocket'
      },
      {
        address: 'https://lava-testnet-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ],
    rest: [
      {
        address: 'https://lav1.lava.build/',
        provider: 'Lava'
      },
      {
        address: 'https://lava.api.t.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://lava-testnet-api.itrocket.net',
        provider: 'ITRocket'
      },
      {
        address: 'https://lava-testnet-api.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ]
  },
  explorers: [
    {
      kind: 'explorers.guru',
      url: 'https://lava.explorers.guru/',
      tx_page: 'https://lava.explorers.guru//transaction/${txHash}',
      account_page: 'https://lava.explorers.guru//account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Lava-Testnet',
      tx_page: 'https://explorer.stavr.tech/Lava-Testnet/tx/${txHash}',
      account_page: 'https://explorer.stavr.tech/Lava-Testnet/account/${accountAddress}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.org/lava-testnet',
      tx_page: 'https://explorer.nodestake.org/lava-testnet/tx/${txHash}',
      account_page: 'https://explorer.nodestake.org/lava-testnet/account/${accountAddress}'
    },
    {
      kind: 'ITRocket',
      url: 'https://testnet.itrocket.net/lava',
      tx_page: 'https://testnet.itrocket.net/lava/tx/${txHash}',
      account_page: 'https://testnet.itrocket.net/lava/account/${accountAddress}'
    }
  ],
  keywords: [
    'rpc',
    'api',
    'modular',
    'data'
  ]
};
export default info;