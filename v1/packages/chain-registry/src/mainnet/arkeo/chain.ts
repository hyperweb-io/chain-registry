import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'arkeo',
  status: 'live',
  website: 'https://arkeo.network/',
  network_type: 'mainnet',
  chain_type: 'cosmos',
  pretty_name: 'Arkeo',
  chain_id: 'arkeo-main-v1',
  bech32_prefix: 'arkeo',
  daemon_name: 'arkeod',
  node_home: '$HOME/.arkeo',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uarkeo',
        fixed_min_gas_price: 0.001,
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uarkeo'
      }],
    lock_duration: {
      time: '1209600s'
    }
  },
  codebase: {
    git_repo: 'https://github.com/arkeonetwork/arkeo',
    genesis: {
      name: 'v1',
      genesis_url: 'https://github.com/arkeonetwork/arkeo/blob/master/networks/mainnet/arkeo-main-v1/genesis.mainnet.json.gz'
    },
    recommended_version: 'v1.0.9',
    compatible_versions: ['v1.0.9'],
    binaries: {
      "linux/amd64": 'https://github.com/arkeonetwork/arkeo/releases/download/v1.0.9/arkeod_1.0.9_linux_amd64.zip',
      "darwin/arm64": 'https://github.com/arkeonetwork/arkeo/releases/download/v1.0.9/arkeod_1.0.9_darwin_arm64.zip',
      "darwin/amd64": 'https://github.com/arkeonetwork/arkeo/releases/download/v1.0.9/arkeod_1.0.9_darwin_amd64.zip'
    }
  },
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkeo/images/arkeo.svg',
      theme: {
        circle: true
      }
    }],
  apis: {
    rpc: [
      {
        address: 'https://rpc-seed.arkeo.network',
        provider: 'Arkeo'
      },
      {
        address: 'https://arkeo-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc.arkeo.roomit.xyz',
        provider: 'Roomit'
      },
      {
        address: 'https://arkeo_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://rpc.arkeo.nodestake.org',
        provider: 'NodeStake'
      }
    ],
    rest: [
      {
        address: 'https://rest-seed.arkeo.network',
        provider: 'Arkeo'
      },
      {
        address: 'https://arkeo-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://api.arkeo.roomit.xyz',
        provider: 'Roomit'
      },
      {
        address: 'https://arkeo_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://api.arkeo.nodestake.org',
        provider: 'NodeStake'
      }
    ],
    grpc: [{
        address: 'grpc.arkeo.roomit.xyz:8443',
        provider: 'Roomit'
      }, {
        address: 'https://grpc.arkeo.nodestake.org:443',
        provider: 'NodeStake'
      }]
  },
  explorers: [
    {
      kind: 'stakevillage',
      url: 'https://exp.stakevillage.net/arkeo-mainnet',
      tx_page: 'https://exp.stakevillage.net/arkeo-mainnet/tx/${txHash}',
      account_page: 'https://exp.stakevillage.net/arkeo-mainnet/account/${accountAddress}'
    },
    {
      kind: 'Valopers',
      url: 'https://arkeo.valopers.com/',
      tx_page: 'https://arkeo.valopers.com/transactions/${txHash}',
      account_page: 'https://arkeo.valopers.com/account/${accountAddress}'
    },
    {
      kind: 'Roomit',
      url: 'https://explorer.tendermint.roomit.xyz/arkeo-mainnet',
      tx_page: 'https://explorer.tendermint.roomit.xyz/arkeo-mainnet/transactions/${txHash}',
      account_page: 'https://explorer.tendermint.roomit.xyz/arkeo-mainnet/account/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/arkeo',
      tx_page: 'https://explorer.whenmoonwhenlambo.money/arkeo/tx/${txHash}',
      account_page: 'https://explorer.whenmoonwhenlambo.money/arkeo/account/${accountAddress}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/arkeo',
      tx_page: 'https://explorer.nodestake.org/arkeo/tx/${txHash}',
      account_page: 'https://explorer.nodestake.org/arkeo/account/${accountAddress}'
    }
  ],
  keywords: [
    'validator',
    'node',
    'api',
    'data',
    'oracle',
    'marketplace'
  ]
};
export default info;