import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'quasar',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.quasar.fi/',
  pretty_name: 'Quasar',
  chain_type: 'cosmos',
  chain_id: 'quasar-1',
  bech32_prefix: 'quasar',
  daemon_name: 'quasard',
  node_home: '$HOME/.quasarnode',
  key_algos: ['secp256k1'],
  slip44: 118,
  staking: {
    staking_tokens: [{
        denom: 'uqsr'
      }]
  },
  fees: {
    fee_tokens: [
      {
        denom: 'uqsr',
        fixed_min_gas_price: 0.1,
        low_gas_price: 0.1,
        average_gas_price: 0.25,
        high_gas_price: 0.3
      },
      {
        denom: 'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B',
        fixed_min_gas_price: 0.01,
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.03
      },
      {
        denom: 'ibc/FA0006F056DB6719B8C16C551FC392B62F5729978FC0B125AC9A432DBB2AA1A5',
        fixed_min_gas_price: 0.01,
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.03
      },
      {
        denom: 'ibc/FA7775734CC73176B7425910DE001A1D2AD9B6D9E93129A5D0750EAD13E4E63A',
        fixed_min_gas_price: 0.01,
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.03
      }
    ]
  },
  codebase: {
    git_repo: 'https://github.com/quasar-finance/quasar',
    recommended_version: 'v3.0.0',
    compatible_versions: ['v3.0.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.11'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/quasar-finance/networks/main/quasar-1/definitive-genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.9'
    },
    cosmwasm: {
      version: 'v0.53.0',
      enabled: true
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png'
  },
  description: 'Quasar is the first decentralized asset management (D.A.M.) platform enabled by IBC. A secure, permissionless, composable, and diversified interchain DeFi experience is finally here.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.lavenderfive.com:443/quasar',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://quasar-rpc.polkachu.com',
        provider: 'polkachu'
      },
      {
        address: 'https://quasar-rpc.enigma-validator.com',
        provider: 'Enigma'
      },
      {
        address: 'https://rpc-quasar.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://quasar-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://quasar.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://rpc-quasar.validavia.me',
        provider: 'Validavia'
      },
      {
        address: 'https://quasar-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://quasar-rpc.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://quasar-rpc.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://quasar-rpc.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://quasar-rpc.chainroot.io',
        provider: 'Chainroot'
      }
    ],
    rest: [
      {
        address: 'https://rest.lavenderfive.com:443/quasar',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://quasar-api.polkachu.com',
        provider: 'polkachu'
      },
      {
        address: 'https://api-quasar.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://quasar-lcd.enigma-validator.com',
        provider: 'Enigma'
      },
      {
        address: 'https://quasar-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://quasar.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://lcd-quasar.validavia.me',
        provider: 'Validavia'
      },
      {
        address: 'https://quasar-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://quasar-api.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://quasar-api.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://quasar-api.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://quasar-api.chainroot.io',
        provider: 'Chainroot'
      }
    ],
    grpc: [
      {
        address: 'quasar.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'quasar-grpc.polkachu.com:18290',
        provider: 'polkachu'
      },
      {
        address: 'grpc-quasar.cosmos-spaces.cloud:12890',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'quasar-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'quasar.grpc.kjnodes.com:14890',
        provider: 'kjnodes'
      },
      {
        address: 'quasar-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'quasar-grpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'quasar-grpc.stakeandrelax.net:18290',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'quasar-grpc.genznodes.dev:29090',
        provider: 'genznodes'
      },
      {
        address: 'quasar-grpc.chainroot.io:443',
        provider: 'Chainroot'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/quasar',
      tx_page: 'https://www.mintscan.io/quasar/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/quasar/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/quasar',
      tx_page: 'https://ezstaking.app/quasar/txs/${txHash}',
      account_page: 'https://ezstaking.app/quasar/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/quasar',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=quasar&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=quasar&addr=${accountAddress}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/quasar',
      tx_page: 'https://mainnet.whispernode.com/quasar/tx/${txHash}',
      account_page: 'https://mainnet.whispernode.com/quasar/account/${accountAddress}'
    },
    {
      kind: 'Chainroot',
      url: 'https://explorer.chainroot.io/quasar',
      tx_page: 'https://explorer.chainroot.io/quasar/transactions/${txHash}',
      account_page: 'https://explorer.chainroot.io/quasar/accounts/${accountAddress}'
    }
  ],
  keywords: ['mainnet'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png',
      theme: {
        primary_color_hex: '#a493e4'
      }
    }]
};
export default info;