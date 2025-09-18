import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'bitway',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://bitway.com/',
  pretty_name: 'Bitway',
  chain_type: 'cosmos',
  chain_id: 'bitway-1',
  bech32_prefix: 'bc',
  daemon_name: 'bitwayd',
  node_home: '$HOME/.bitway',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ubtw',
        fixed_min_gas_price: 0.0006,
        low_gas_price: 0.0006,
        average_gas_price: 0.0008,
        high_gas_price: 0.001
      }, {
        denom: 'sat',
        fixed_min_gas_price: 0.000001,
        low_gas_price: 0.000001,
        average_gas_price: 0.0000015,
        high_gas_price: 0.000002
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ubtw'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/bitwaylabs/bitway',
    recommended_version: 'v2.0.0',
    compatible_versions: ['v2.0.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.12'
    },
    genesis: {
      genesis_url: 'https://github.com/bitwaylabs/networks/raw/main/mainnet/bitway-1/genesis.tar.gz'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.14'
    },
    ibc: {
      type: 'go',
      version: 'v8.5.3'
    },
    cosmwasm: {
      version: 'v0.53.0',
      enabled: true
    },
    tag: 'v2.0.0'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitway/images/btw.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitway/images/btw.svg'
  },
  description: 'A fully Bitcoin-Compatible L1 blockchain for the BTCFi',
  apis: {
    rpc: [
      {
        address: 'https://rpc.bitway.com',
        provider: 'Bitway Labs'
      },
      {
        address: 'https://rpc.bitway.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://bitway-rpc.synergynodes.com/',
        provider: 'Synergy Nodes'
      },
      {
        address: 'https://bitway.publicnode.com/',
        provider: 'Allnodes'
      },
      {
        address: 'https://bitway.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://bitway-mainnet-rpc.itrocket.net',
        provider: 'ITRocket'
      },
      {
        address: 'https://bitway.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥'
      }
    ],
    rest: [
      {
        address: 'https://rest.bitway.com',
        provider: 'Bitway Labs'
      },
      {
        address: 'https://api.bitway.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://bitway-api.synergynodes.com',
        provider: 'Synergy Nodes'
      },
      {
        address: 'https://bitway-rest.publicnode.com',
        provider: 'Allnodes'
      },
      {
        address: 'https://bitway.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://bitway-mainnet-api.itrocket.net',
        provider: 'ITRocket'
      },
      {
        address: 'https://bitway.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      }
    ],
    grpc: [
      {
        address: 'grpc.bitway.com:443',
        provider: 'Bitway Labs'
      },
      {
        address: 'https://grpc.bitway.nodestake.org:443',
        provider: 'NodeStake'
      },
      {
        address: 'bitway-grpc.synergynodes.com:443',
        provider: 'Synergy Nodes'
      },
      {
        address: 'bitway-grpc.publicnode.com:443',
        provider: 'Allnodes'
      },
      {
        address: 'bitway.grpc.kjnodes.com:443',
        provider: 'kjnodes'
      },
      {
        address: 'bitway-mainnet-grpc.itrocket.net:443',
        provider: 'ITRocket'
      }
    ]
  },
  explorers: [
    {
      kind: 'Ping Pub',
      url: 'https://explorer.nodestake.org/bitway',
      tx_page: 'https://explorer.nodestake.org/bitway/tx/${txHash}',
      account_page: 'https://explorer.nodestake.org/bitway/account/${accountAddress}'
    },
    {
      kind: 'Ping Pub',
      url: 'https://cosmosrun.info/bitway',
      tx_page: 'https://cosmosrun.info/bitway/tx/${txHash}',
      account_page: 'https://cosmosrun.info/bitway/account/${accountAddress}'
    },
    {
      kind: 'Ping Pub',
      url: 'https://explorer.kjnodes.com/bitway',
      tx_page: 'https://explorer.kjnodes.com/bitway/tx/${txHash}',
      account_page: 'https://explorer.kjnodes.com/bitway/account/${accountAddress}'
    },
    {
      kind: 'Ping Pub',
      url: 'https://explorer.stavr.tech/Bitway-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Bitway-Mainnet/tx/${txHash}',
      account_page: 'https://explorer.stavr.tech/Bitway-Mainnet/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitway/images/btw.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitway/images/btw.svg'
    }]
};
export default info;