import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'secretnetwork',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://scrt.network/',
  pretty_name: 'Secret Network',
  chain_type: 'cosmos',
  chain_id: 'secret-4',
  bech32_prefix: 'secret',
  daemon_name: 'secretd',
  node_home: '$HOME/.secretd',
  key_algos: ['secp256k1'],
  slip44: 529,
  alternative_slip44s: [118],
  fees: {
    fee_tokens: [{
        denom: 'uscrt',
        fixed_min_gas_price: 0.05,
        low_gas_price: 0.05,
        average_gas_price: 0.1,
        high_gas_price: 0.25
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uscrt'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/scrtlabs/SecretNetwork',
    recommended_version: 'v1.12.1',
    compatible_versions: ['v1.12.1'],
    binaries: {
      "linux/amd64": 'https://github.com/scrtlabs/SecretNetwork/releases/download/v1.12.1/secretnetwork_1.12.1_mainnet_goleveldb_amd64.deb'
    },
    genesis: {
      genesis_url: 'https://github.com/scrtlabs/SecretNetwork/releases/download/v1.2.0/genesis.json'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
  },
  description: 'Secret Network is the first blockchain with customizable privacy. You get to choose what you share, with whom, and how. This protects users, and empowers developers to build a better Web3.',
  apis: {
    "grpc-web": [{
        address: 'https://grpc.mainnet.secretsaturn.net',
        provider: '🪐 𝕊ecret 𝕊aturn'
      }],
    rpc: [
      {
        address: 'https://scrt.public-rpc.com',
        provider: 'ANKR'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/secretnetwork',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://1rpc.io/scrt-rpc',
        provider: '1RPC - Automata Network'
      },
      {
        address: 'https://secretnetwork-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://rpc.mainnet.secretsaturn.net',
        provider: '🪐 𝕊ecret 𝕊aturn'
      },
      {
        address: 'https://rpc-secret.01node.com',
        provider: '01node'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/secretnetwork/rpc',
        provider: 'Stakewolle'
      }
    ],
    rest: [
      {
        address: 'https://rest.lavenderfive.com:443/secretnetwork',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'http://secretnetwork-mainnet-lcd.autostake.com:1317',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://1rpc.io/scrt-lcd',
        provider: '1RPC - Automata Network'
      },
      {
        address: 'https://secretnetwork-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://lcd.mainnet.secretsaturn.net',
        provider: '🪐 𝕊ecret 𝕊aturn'
      },
      {
        address: 'https://rest-secret.01node.com',
        provider: '01node'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/secretnetwork/rest',
        provider: 'Stakewolle'
      }
    ],
    grpc: [{
        address: 'secretnetwork.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      }, {
        address: 'secretnetwork-mainnet-grpc.autostake.com:9090',
        provider: 'AutoStake 🛡️ Slash Protected'
      }]
  },
  explorers: [
    {
      kind: 'Chainroot',
      url: 'https://explorer.chainroot.io/secret',
      tx_page: 'https://explorer.chainroot.io/secret/transactions/${txHash}',
      account_page: 'https://explorer.chainroot.io/secret/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/secretnetwork',
      tx_page: 'https://ezstaking.app/secretnetwork/txs/${txHash}',
      account_page: 'https://ezstaking.app/secretnetwork/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/secret',
      tx_page: 'https://ping.pub/secret/tx/${txHash}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/secret',
      tx_page: 'https://www.mintscan.io/secret/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/secret/accounts/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/secret-network',
      tx_page: 'https://atomscan.com/secret-network/transactions/${txHash}',
      account_page: 'https://atomscan.com/secret-network/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/secretnetwork',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=secretnetwork&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=secretnetwork&addr=${accountAddress}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/secret',
      tx_page: 'https://mainnet.whispernode.com/secret/tx/${txHash}',
      account_page: 'https://mainnet.whispernode.com/secret/account/${accountAddress}'
    },
    {
      kind: 'Valopers',
      url: 'https://secret.valopers.com/',
      tx_page: 'https://secret.valopers.com/transactions/${txHash}',
      account_page: 'https://secret.valopers.com/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg',
      theme: {
        primary_color_hex: '#040404'
      }
    }]
};
export default info;