import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'stafihub',
  chain_type: 'cosmos',
  chain_id: 'stafihub-1',
  website: 'https://stafihub.io/',
  pretty_name: 'StaFi Hub',
  status: 'live',
  network_type: 'mainnet',
  bech32_prefix: 'stafi',
  daemon_name: 'stafihubd',
  node_home: '$HOME/.stafihub',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ufis',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ufis'
      }],
    lock_duration: {
      time: '1209600s'
    }
  },
  codebase: {
    git_repo: 'https://github.com/stafihub/stafihub',
    recommended_version: 'v0.5.0',
    compatible_versions: ['v0.5.0'],
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/stafihub/network/main/mainnets/stafihub-1(dragonberry)/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.46'
    },
    ibc: {
      type: 'go',
      version: '5.2.1',
      ics_enabled: ['ics20-1']
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://public-rpc1.stafihub.io:443',
        provider: 'StaFiHub'
      },
      {
        address: 'https://public-rpc2.stafihub.io:443',
        provider: 'StaFiHub'
      },
      {
        address: 'https://rpc.stafihub.nodestake.org:443',
        provider: 'NodeStake'
      }
    ],
    rest: [
      {
        address: 'https://public-rest-rpc1.stafihub.io',
        provider: 'StaFiHub'
      },
      {
        address: 'https://public-rest-rpc2.stafihub.io',
        provider: 'StaFiHub'
      },
      {
        address: 'https://api.stafihub.nodestake.org',
        provider: 'NodeStake'
      }
    ],
    grpc: [
      {
        address: 'public-grpc-rpc1.stafihub.io:443',
        provider: 'StaFiHub'
      },
      {
        address: 'public-grpc-rpc2.stafihub.io:443',
        provider: 'StaFiHub'
      },
      {
        address: 'grpc.stafihub.nodestake.org:443',
        provider: 'NodeStake'
      },
      {
        address: 'stafihub.nodejumper.io:9090',
        provider: 'NODEJUMPER'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/stafi',
      tx_page: 'https://www.mintscan.io/stafi/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/stafi/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/stafihub',
      tx_page: 'https://ezstaking.app/stafihub/txs/${txHash}',
      account_page: 'https://ezstaking.app/stafihub/account/${accountAddress}'
    },
    {
      kind: 'ping-pub',
      url: 'https://ping.pub/stafihub',
      tx_page: 'https://ping.pub/stafihub/tx/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/stafihub',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=stafihub&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=stafihub&addr=${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/stafihub',
      tx_page: 'https://atomscan.com/stafihub/transactions/${txHash}',
      account_page: 'https://atomscan.com/stafihub/accounts/${accountAddress}'
    }
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/stafihub-chain-logo.png'
  },
  keywords: ['liquid staking'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/stafihub-chain-logo.png',
      theme: {
        primary_color_hex: '#100d10'
      }
    }]
};
export default info;