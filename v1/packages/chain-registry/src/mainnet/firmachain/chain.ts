import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'firmachain',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://firmachain.org/',
  pretty_name: 'FIRMACHAIN',
  chain_type: 'cosmos',
  chain_id: 'colosseum-1',
  bech32_prefix: 'firma',
  slip44: 7777777,
  daemon_name: 'firmachaind',
  node_home: '$HOME/.firmachain',
  key_algos: ['secp256k1'],
  fees: {
    fee_tokens: [{
        denom: 'ufct',
        fixed_min_gas_price: 0.1,
        low_gas_price: 0.1,
        average_gas_price: 0.15,
        high_gas_price: 0.2
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ufct'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/firmachain/firmachain',
    recommended_version: 'v0.3.5-patch',
    compatible_versions: ['v0.3.5-patch'],
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/FirmaChain/mainnet/main/colosseum-1/genesis.json'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://lcd-mainnet.firmachain.dev:26657',
        provider: 'FirmaChain'
      },
      {
        address: 'https://firma.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc.firmachain.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/firmachain',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://firmachain-rpc.ramuchi.tech',
        provider: 'ramuchi.tech'
      },
      {
        address: 'https://firmachain.rpc.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅'
      },
      {
        address: 'https://firmachain_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    rest: [
      {
        address: 'https://lcd-mainnet.firmachain.dev:1317',
        provider: 'FirmaChain'
      },
      {
        address: 'https://firma.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api.firmachain.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://rest.lavenderfive.com:443/firmachain',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://firmachain-api.ramuchi.tech',
        provider: 'ramuchi.tech'
      },
      {
        address: 'https://firmachain.api.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅'
      },
      {
        address: 'https://firmachain_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    grpc: [
      {
        address: 'firmachain.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'firma.grpc.m.stavr.tech:2030',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://firmachain-grpc.ramuchi.tech:1390',
        provider: 'ramuchi.tech'
      },
      {
        address: 'firmachain.grpc.nodeshub.online',
        provider: 'Nodes Hub'
      }
    ]
  },
  explorers: [
    {
      kind: 'Chainroot',
      url: 'https://explorer.chainroot.io/firmachain',
      tx_page: 'https://explorer.chainroot.io/firmachain/transactions/${txHash}',
      account_page: 'https://explorer.chainroot.io/firmachain/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/firmachain',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=firmachain&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=firmachain&addr=${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/firmachain',
      tx_page: 'https://ezstaking.app/firmachain/txs/${txHash}',
      account_page: 'https://ezstaking.app/firmachain/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Firmachain-M',
      tx_page: 'https://explorer.stavr.tech/Firmachain-M/txs/${txHash}',
      account_page: 'https://explorer.stavr.tech/Firmachain-M/account/${accountAddress}'
    },
    {
      kind: 'bigdipper',
      url: 'https://explorer.firmachain.dev',
      tx_page: 'https://explorer.firmachain.dev/transactions/${txHash}'
    },
    {
      kind: 'explorer.ChainTools',
      url: 'https://explorer.chaintools.tech/firmachain',
      tx_page: 'https://explorer.chaintools.tech/firmachain/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/firmachain',
      tx_page: 'https://atomscan.com/firmachain/transactions/${txHash}',
      account_page: 'https://atomscan.com/firmachain/accounts/${accountAddress}'
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      url: 'https://explorer.nodeshub.online/firmachain/',
      tx_page: 'https://explorer.nodeshub.online/firmachain/tx/${txHash}',
      account_page: 'https://explorer.nodeshub.online/firmachain/accounts/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/firmachain',
      tx_page: 'https://explorer.whenmoonwhenlambo.money/firmachain/tx/${txHash}',
      account_page: 'https://explorer.whenmoonwhenlambo.money/firmachain/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.svg',
      theme: {
        primary_color_hex: '#1c1c1c'
      }
    }]
};
export default info;