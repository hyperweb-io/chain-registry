import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'akash',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://akash.network/',
  pretty_name: 'Akash',
  chain_type: 'cosmos',
  chain_id: 'akashnet-2',
  bech32_prefix: 'akash',
  daemon_name: 'akash',
  node_home: '$HOME/.akash',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uakt',
        fixed_min_gas_price: 0.025,
        low_gas_price: 0.025,
        average_gas_price: 0.025,
        high_gas_price: 0.025
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uakt'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/akash-network/node/',
    recommended_version: 'v0.38.1',
    compatible_versions: ['v0.38.0', 'v0.38.1'],
    binaries: {
      "linux/amd64": 'https://github.com/akash-network/node/releases/download/v0.38.1/akash_linux_amd64.zip',
      "linux/arm64": 'https://github.com/akash-network/node/releases/download/v0.38.1/akash_linux_arm64.zip'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.34.27',
      repo: 'https://github.com/akash-network/cometbft',
      tag: 'v0.34.27-akash'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/akash-network/net/master/mainnet/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.45.16'
    },
    ibc: {
      type: 'go',
      version: 'v4.6.0'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
  },
  description: 'Akash is open-source Supercloud that lets users buy and sell computing resources securely and efficiently. Purpose-built for public utility.',
  apis: {
    rpc: [
      {
        address: 'https://rpc-akash.ecostake.com:443',
        provider: 'ecostake'
      },
      {
        address: 'https://akash-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://akash-rpc.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://akash-mainnet-rpc.cosmonautstakes.com:443',
        provider: 'Cosmonaut Stakes'
      },
      {
        address: 'https://akash-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://akash-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://akash.rpc.arcturian.tech/',
        provider: 'Arcturian Tech'
      },
      {
        address: 'https://akash.api.pocket.network',
        provider: 'Pocket Network'
      }
    ],
    rest: [
      {
        address: 'https://rest-akash.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://akash-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://akash.c29r3.xyz:443/api',
        provider: 'c29r3'
      },
      {
        address: 'https://akash-api.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://api-akash-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://akash-mainnet-rest.cosmonautstakes.com:443',
        provider: 'Cosmonaut Stakes'
      },
      {
        address: 'https://akash-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://akash-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://akash-api.validatornode.com',
        provider: 'ValidatorNode'
      },
      {
        address: 'https://akash.api.arcturian.tech',
        provider: 'Arcturian Tech'
      },
      {
        address: 'https://akash.api.pocket.network',
        provider: 'Pocket Network'
      }
    ],
    grpc: [{
        address: 'akash.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      }, {
        address: 'akash-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }]
  },
  explorers: [
    {
      kind: 'Chainroot',
      url: 'https://explorer.chainroot.io/akash',
      tx_page: 'https://explorer.chainroot.io/akash/transactions/${txHash}',
      account_page: 'https://explorer.chainroot.io/akash/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/akash',
      tx_page: 'https://ezstaking.app/akash/txs/${txHash}',
      account_page: 'https://ezstaking.app/akash/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/akash',
      tx_page: 'https://ping.pub/akash-network/tx/${txHash}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/akash',
      tx_page: 'https://www.mintscan.io/akash/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/akash/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/akash',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=akash&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=akash&addr=${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/akash',
      tx_page: 'https://atomscan.com/akash/transactions/${txHash}',
      account_page: 'https://atomscan.com/akash/accounts/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/akash',
      account_page: 'https://stakeflow.io/akash/accounts/${accountAddress}'
    },
    {
      kind: 'Decloud Nodes Lab',
      url: 'https://explorer.declab.pro/Akash',
      tx_page: 'https://explorer.declab.pro/Akash/tx/${txHash}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/akash',
      tx_page: 'https://mainnet.whispernode.com/akash/tx/${txHash}',
      account_page: 'https://mainnet.whispernode.com/akash/account/${accountAddress}'
    },
    {
      kind: 'Arcturian Tech',
      url: 'https://explorer.arcturian.tech',
      tx_page: 'https://explorer.arcturian.tech/akash/tx/${txHash}'
    },
    {
      kind: 'Valopers',
      url: 'https://akash.valopers.com/',
      tx_page: 'https://akash.valopers.com/transactions/${txHash}',
      account_page: 'https://akash.valopers.com/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
    }]
};
export default info;