import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'kopi',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://app.kopi.money',
  pretty_name: 'Kopi',
  chain_type: 'cosmos',
  chain_id: 'luwak-1',
  daemon_name: 'kopid',
  node_home: '$HOME/.kopid',
  bech32_prefix: 'kopi',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ukopi',
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.03
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ukopi'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/kopi-money/kopi',
    recommended_version: 'v0.6.5.1',
    genesis: {
      genesis_url: 'https://data.kopi.money/genesis.json'
    }
  },
  logo_URIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/kopi.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.kopi.money',
        provider: 'Kopi Foundation'
      },
      {
        address: 'https://rpc.kopi.chaintools.tech',
        provider: 'Chaintools'
      },
      {
        address: 'https://kopi-rpc.cosmoscan.com',
        provider: 'Cosmoscan'
      },
      {
        address: 'https://kopi-rpc.stakerhouse.com',
        provider: 'Stakerhouse'
      },
      {
        address: 'https://kopi-rpc.moonbridge.org',
        provider: 'Moonbridge'
      },
      {
        address: 'https://rpc-kopid.vinjan.xyz/',
        provider: 'Vinjan'
      },
      {
        address: 'https://kopi-mainnet-rpc.bonynode.online',
        provider: 'Bony'
      },
      {
        address: 'https://kopi-rpc.bluestake.net:443',
        provider: 'Bluestake'
      },
      {
        address: 'https://rpc-kopi.sychonix.com',
        provider: 'Sychonix'
      },
      {
        address: 'https://kopi-rpc.node9x.com/',
        provider: 'Node9x'
      },
      {
        address: 'https://kopi.rpc.nodeshub.online/',
        provider: 'NodesHub'
      },
      {
        address: 'https://kopi-rpc.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc.kopi.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://kopi-rpc.node39.top:443',
        provider: 'Node39'
      },
      {
        address: 'https://kopi.rpc.quasarstaking.ai:443',
        provider: 'Quasar'
      }
    ],
    rest: [
      {
        address: 'https://rest.kopi.money',
        provider: 'Kopi Foundation'
      },
      {
        address: 'https://api.kopi.chaintools.tech',
        provider: 'Chaintools'
      },
      {
        address: 'https://kopi-rest.cosmoscan.com',
        provider: 'Cosmoscan'
      },
      {
        address: 'https://kopi-rest.stakerhouse.com',
        provider: 'Stakerhouse'
      },
      {
        address: 'https://kopi-api.moonbridge.org',
        provider: 'Moonbridge'
      },
      {
        address: 'https://api-kopid.vinjan.xyz/',
        provider: 'Vinjan'
      },
      {
        address: 'https://kopi-mainnet-api.bonynode.online',
        provider: 'Bony'
      },
      {
        address: 'https://kopi-api.bluestake.net',
        provider: 'Bluestake'
      },
      {
        address: 'https://api-kopi.sychonix.com',
        provider: 'Sychonix'
      },
      {
        address: 'https://kopi.api.nodeshub.online/',
        provider: 'NodesHub'
      },
      {
        address: 'https://kopi-api.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://api.kopi.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://kopi-api.node39.top:443',
        provider: 'Node39'
      },
      {
        address: 'https://kopi.api.quasarstaking.ai:443',
        provider: 'Quasar'
      }
    ],
    grpc: [
      {
        address: 'https://kopi.grpc.nodeshub.online/',
        provider: 'Nodes Hub'
      },
      {
        address: 'kopi-mainnet-grpc.bonynode.online:443',
        provider: 'Bony'
      },
      {
        address: 'kopi-grpc.stakerhouse.com:443',
        provider: 'Stakerhouse'
      },
      {
        address: 'kopi-grpc.moonbridge.org:443',
        provider: 'Moonbridge'
      },
      {
        address: 'kopi-grpc.node9x.com:443',
        provider: 'Node9x'
      },
      {
        address: 'kopi-grpc.polkachu.com:27690',
        provider: 'Polkachu'
      },
      {
        address: 'https://grpc.kopi.nodestake.org:443',
        provider: 'NodeStake'
      },
      {
        address: 'https://kopi-grpc.node39.top:15090',
        provider: 'Node39'
      },
      {
        address: 'kopi.grpc.quasarstaking.ai:80',
        provider: 'Quasar'
      }
    ]
  },
  explorers: [
    {
      kind: 'Kopi Foundation Explorer',
      url: 'https://explorer.kopi.money/',
      tx_page: 'https://explorer.kopi.money/luwak-1/tx/${txHash}',
      account_page: 'https://explorer.kopi.money/luwak-1/account/${accountAddress}'
    },
    {
      kind: 'CzCryptoman Explorer',
      url: 'https://explorer.czcryptoman.com/kopi-mainnet',
      tx_page: 'https://explorer.czcryptoman.com/kopi-mainnet/tx/${txHash}',
      account_page: 'https://explorer.czcryptoman.com/kopi-mainnet/account/${accountAddress}'
    },
    {
      kind: 'Sychonix Explorer',
      url: 'https://explorer.sychonix.com/kopi-mainnet',
      tx_page: 'https://explorer.sychonix.com/kopi-mainnet/tx/${txHash}',
      account_page: 'https://explorer.sychonix.com/kopi-mainnet/account/${accountAddress}'
    },
    {
      kind: 'Nodeshub Explorer',
      url: 'https://explorer.nodeshub.online/Kopi',
      tx_page: 'https://explorer.nodeshub.online/Kopi/txs/${txHash}',
      account_page: 'https://explorer.nodeshub.online/Kopi/account/${accountAddress}'
    },
    {
      kind: 'Bony Explorer',
      url: 'https://explorer.bonynode.online/kopi/',
      tx_page: 'https://explorer.bonynode.online/kopi/txs/${txHash}',
      account_page: 'https://explorer.bonynode.online/kopi/account/${accountAddress}'
    },
    {
      kind: 'Moonbridge Explorer',
      url: 'https://explorer.moonbridge.org/kopi',
      tx_page: 'https://explorer.moonbridge.org/kopi/txs/${txHash}',
      account_page: 'https://explorer.moonbridge.org/kopi/account/${accountAddress}'
    },
    {
      kind: 'Cosmoscan Explorer',
      url: 'https://cosmoscan.com/kopi',
      tx_page: 'https://cosmoscan.com/kopi/txs/${txHash}',
      account_page: 'https://cosmoscan.com/kopi/account/${accountAddress}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.org/kopi/',
      tx_page: 'https://explorer.nodestake.org/kopi/txs/${txHash}',
      account_page: 'https://explorer.nodestake.org/kopi/account/${accountAddress}'
    },
    {
      kind: 'Node39 Explorer',
      url: 'https://explorer.node39.top/kopi/',
      tx_page: 'https://explorer.node39.top/kopi/txs/${txHash}',
      account_page: 'https://explorer.node39.top/kopi/account/${accountAddress}'
    }
  ],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/kopi.svg'
    }]
};
export default info;