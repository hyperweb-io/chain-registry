import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'composable',
  chain_type: 'cosmos',
  chain_id: 'centauri-1',
  website: 'https://www.picasso.xyz/',
  pretty_name: 'Picasso',
  status: 'live',
  network_type: 'mainnet',
  bech32_prefix: 'pica',
  daemon_name: 'picad',
  node_home: '$HOME/.banksy',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ppica',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ppica'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/composable/composable-cosmos',
    recommended_version: 'v6.5.3',
    compatible_versions: ['v6.5.3'],
    consensus: {
      type: 'cometbft',
      version: 'v0.37.2',
      repo: 'https://github.com/composablefi/cometbft',
      tag: 'v0.37.2-fixed-len-vote-time-tag'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/notional-labs/composable-networks/main/mainnet/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/rust-ninja/cosmos-sdk',
      version: 'v0.47.5',
      tag: 'v0.47.5-patch-validators-trim-tag'
    },
    ibc: {
      type: 'go',
      repo: 'https://github.com/notional-labs/ibc-go',
      version: 'v7.2.1',
      tag: 'v7.2.1-0.20231010040541-6cf43006971f'
    }
  },
  logo_URIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
  },
  description: 'Picasso is a DeFi infrastructure-focused Layer 1 protocol that leads the industry in building the trust-minimized interoperability solution -Cross-Ecosystem IBC. Complementary to the interoperability work, Picasso is building the first Generalized Restaking Layer starting with deployment on Solana, and expand support for all IBC connected ecosystems.',
  apis: {
    rpc: [
      {
        address: 'https://rpc-composable-ia.cosmosia.notional.ventures',
        provider: 'Notional'
      },
      {
        address: 'https://composable-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://picasso-rpc.cogwheel.zone:443',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/picasso',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://composable-rpc.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://picasso-rpc.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://composable.rpc.stakevillage.net:443',
        provider: 'Stake Village'
      },
      {
        address: 'https://picasso-rpc.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://rpc.centauri.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://picasso-rpc.moonbridge.org',
        provider: 'Moonbridge'
      },
      {
        address: 'https://rpc.composable.citizenweb3.com:443',
        provider: 'Citizen Web3'
      },
      {
        address: 'https://composable.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://composable_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    rest: [
      {
        address: 'https://api-composable-ia.cosmosia.notional.ventures',
        provider: 'Notional'
      },
      {
        address: 'https://composable-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://picasso-api.cogwheel.zone:443',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'https://rest.lavenderfive.com:443/picasso',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://composable-api.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://picasso-api.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://composable.api.stakevillage.net',
        provider: 'Stake Village'
      },
      {
        address: 'https://picasso-api.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://lcd.centauri.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://picasso-api.moonbridge.org',
        provider: 'Moonbridge'
      },
      {
        address: 'https://composable.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://composable_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    grpc: [
      {
        address: 'https://grpc-composable-ia.cosmosia.notional.ventures',
        provider: 'Notional'
      },
      {
        address: 'grpc.composable.nodestake.top:9090',
        provider: 'NodeStake'
      },
      {
        address: 'composable-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc-centauri.cosmos-spaces.cloud:1120',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://picasso-grpc.cogwheel.zone:443',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'picasso.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'composable-grpc.genznodes.dev:53090',
        provider: 'genznodes'
      },
      {
        address: 'picasso-grpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'grpc-composable.vinjan.xyz:36090',
        provider: 'vinjan'
      },
      {
        address: 'composable.grpc.skynodejs.net',
        provider: 'skynodejs'
      },
      {
        address: 'composable.grpc.stakevillage.net:16190',
        provider: 'Stake Village'
      },
      {
        address: 'picasso-rpc.stakeandrelax.net:22290',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'grpc.composable.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://grpc.centauri.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://picasso-grpc.moonbridge.org',
        provider: 'Moonbridge'
      },
      {
        address: 'composable.grpc.m.stavr.tech:9907',
        provider: '🔥STAVR🔥'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/composable',
      tx_page: 'https://ping.pub/composable/tx/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/composable',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=composable&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=composable&addr=${accountAddress}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/composable',
      tx_page: 'https://explorer.nodestake.top/composable/tx/${txHash}'
    },
    {
      kind: 'Stake Village',
      url: 'https://exp.stakevillage.net/composable',
      tx_page: 'https://exp.stakevillage.net/composable/tx/${txHash}',
      account_page: 'https://exp.stakevillage.net/composable/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Composable-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Composable-Mainnet/tx/${txHash}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/picasso',
      tx_page: 'https://mainnet.whispernode.com/picasso/tx/${txHash}',
      account_page: 'https://mainnet.whispernode.com/picasso/account/${accountAddress}'
    },
    {
      kind: 'Moonbridge',
      url: 'https://explorer.moonbridge.org/picasso',
      tx_page: 'https://explorer.moonbridge.org/picasso/tx/${txHash}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/picasso',
      tx_page: 'https://explorer.whenmoonwhenlambo.money/picasso/tx/${txHash}',
      account_page: 'https://explorer.whenmoonwhenlambo.money/picasso/account/${accountAddress}'
    }
  ],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
    }]
};
export default info;