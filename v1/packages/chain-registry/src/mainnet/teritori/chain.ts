import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'teritori',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://teritori.com/',
  pretty_name: 'Teritori',
  chain_type: 'cosmos',
  chain_id: 'teritori-1',
  daemon_name: 'teritorid',
  node_home: '$HOME/.teritorid',
  bech32_prefix: 'tori',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'utori',
        low_gas_price: 0,
        average_gas_price: 0.25,
        high_gas_price: 0.5
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'utori'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/TERITORI/teritori-chain',
    recommended_version: 'v2.0.6',
    compatible_versions: ['v2.0.6'],
    consensus: {
      type: 'cometbft',
      version: 'v0.37.2'
    },
    genesis: {
      genesis_url: 'https://github.com/TERITORI/teritori-chain/raw/mainnet/mainnet/teritori-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.47.6'
    },
    ibc: {
      type: 'go',
      version: 'v7.3.1'
    },
    cosmwasm: {
      version: 'v0.41.0',
      path: '$HOME/.teritorid/data/wasm',
      enabled: true
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/chain.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/chain.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://teritori-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://teritori.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc.teritori.silentvalidator.com/',
        provider: 'silent'
      },
      {
        address: 'https://teritori-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://teritori.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://rpc.tori.bh.rocks',
        provider: 'BlockHunters 🎯'
      },
      {
        address: 'https://teritori-rpc.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://m-teritori.rpc.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀'
      },
      {
        address: 'https://rpc-teritori.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://teritori-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc-teritori.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://teritori-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://teritori-rpc.bluestake.net:443',
        provider: 'BlueStake 🚀'
      },
      {
        address: 'https://teritori_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://teritori-rpc.chainroot.io',
        provider: 'Chainroot'
      }
    ],
    rest: [
      {
        address: 'https://teritori-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://teritori.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api.teritori.silentvalidator.com/',
        provider: 'silent'
      },
      {
        address: 'https://teritori-api.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://teritori.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://api.tori.bh.rocks',
        provider: 'BlockHunters 🎯'
      },
      {
        address: 'https://teritori-api.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://m-teritori.api.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀'
      },
      {
        address: 'https://api-teritori.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://teritori-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rest-teritori.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://teritori-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://teritori-api.bluestake.net',
        provider: 'BlueStake 🚀'
      },
      {
        address: 'https://teritori_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://teritori-api.chainroot.io',
        provider: 'Chainroot'
      }
    ],
    grpc: [
      {
        address: 'grpc.teritori.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'teritori.grpc.m.stavr.tech:6705',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'teritori-grpc.polkachu.com:15990',
        provider: 'Polkachu'
      },
      {
        address: 'teritori.grpc.silknodes.io:443',
        provider: 'Silk Nodes'
      },
      {
        address: 'teritori-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'teritori.grpc.kjnodes.com:11990',
        provider: 'kjnodes'
      },
      {
        address: 'teritori-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'teritori-grpc.chainroot.io:443',
        provider: 'Chainroot'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/teritori',
      tx_page: 'https://ezstaking.app/teritori/txs/${txHash}',
      account_page: 'https://ezstaking.app/teritori/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.teritori.com/teritori',
      tx_page: 'https://explorer.teritori.com/teritori/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/teritori-main',
      tx_page: 'https://explorer.stavr.tech/teritori-main/tx/${txHash}'
    },
    {
      kind: 'guru',
      url: 'https://teritori.explorers.guru/',
      tx_page: 'https://teritori.explorers.guru/transaction/${txHash}'
    },
    {
      kind: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀',
      url: 'https://exp.utsa.tech/teritori',
      tx_page: 'https://exp.utsa.tech/teritori/tx/${txHash}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/teritori',
      tx_page: 'https://www.mintscan.io/teritori/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/teritori/accounts/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/teritori',
      tx_page: 'https://explorer.tcnetwork.io/teritori/transaction/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/teritori',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=teritori&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=teritori&addr=${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/teritori',
      tx_page: 'https://atomscan.com/teritori/transactions/${txHash}',
      account_page: 'https://atomscan.com/teritori/accounts/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/teritori',
      tx_page: 'https://explorer.whenmoonwhenlambo.money/teritori/tx/${txHash}',
      account_page: 'https://explorer.whenmoonwhenlambo.money/teritori/account/${accountAddress}'
    },
    {
      kind: 'Chainroot',
      url: 'https://explorer.chainroot.io/teritori',
      tx_page: 'https://explorer.chainroot.io/teritori/transactions/${txHash}',
      account_page: 'https://explorer.chainroot.io/teritori/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/chain.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/chain.svg',
      theme: {
        primary_color_hex: '#44c5f1'
      }
    }]
};
export default info;