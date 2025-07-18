import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'migaloo',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.whitewhale.money/',
  pretty_name: 'Migaloo',
  chain_type: 'cosmos',
  chain_id: 'migaloo-1',
  bech32_prefix: 'migaloo',
  daemon_name: 'migalood',
  node_home: '$HOME/.migalood',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uwhale',
        fixed_min_gas_price: 1,
        low_gas_price: 1,
        average_gas_price: 2,
        high_gas_price: 3
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uwhale'
      }]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.svg'
  },
  codebase: {
    git_repo: 'https://github.com/White-Whale-Defi-Platform/migaloo-chain',
    recommended_version: 'v4.1.3',
    compatible_versions: ['v4.1.3'],
    consensus: {
      type: 'cometbft',
      version: 'v0.37.4'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/White-Whale-Defi-Platform/migaloo-chain/release/v2.0.x/networks/mainnet/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.47.7'
    },
    ibc: {
      type: 'go',
      version: 'v7.3.0'
    },
    cosmwasm: {
      version: 'v0.45.0',
      enabled: true
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://migaloo-rpc.polkachu.com:443',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc-migaloo.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://migaloo-rpc.kleomedes.network:443',
        provider: 'Kleomedes'
      },
      {
        address: 'https://migaloo-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    rest: [
      {
        address: 'https://migaloo-api.polkachu.com:443',
        provider: 'Polkachu'
      },
      {
        address: 'https://api-migaloo.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://migaloo-api.kleomedes.network:443',
        provider: 'Kleomedes'
      },
      {
        address: 'https://migaloo-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    grpc: [
      {
        address: 'migaloo-grpc.polkachu.com:20790',
        provider: 'Polkachu'
      },
      {
        address: 'whitewhale-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc-migaloo.cosmos-spaces.cloud:4810',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'migaloo-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    "grpc-web": [{
        address: 'https://migaloo-grpc-web.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }]
  },
  explorers: [
    {
      kind: 'Chainroot',
      url: 'https://explorer.chainroot.io/migaloo',
      tx_page: 'https://explorer.chainroot.io/migaloo/transactions/${txHash}',
      account_page: 'https://explorer.chainroot.io/migaloo/accounts/${accountAddress}'
    },
    {
      kind: 'Migaloo Explorers Guru',
      url: 'https://migaloo.explorers.guru',
      tx_page: 'https://migaloo.explorers.guru/transaction/${txHash}',
      account_page: 'https://migaloo.explorers.guru/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/migaloo',
      tx_page: 'https://ping.pub/migaloo/tx/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/migaloo',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=migaloo&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=migaloo&addr=${accountAddress}'
    },
    {
      kind: 'Silk Nodes',
      url: 'https://explorer.silknodes.io/migaloo',
      tx_page: 'https://explorer.silknodes.io/migaloo/tx/${txHash}',
      account_page: 'https://explorer.silknodes.io/migaloo/account/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/migaloo',
      tx_page: 'https://atomscan.com/migaloo/transactions/${txHash}',
      account_page: 'https://atomscan.com/migaloo/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.svg',
      theme: {
        primary_color_hex: '#3ccc64'
      }
    }]
};
export default info;