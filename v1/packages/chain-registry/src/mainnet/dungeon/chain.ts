import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'dungeon',
  status: 'live',
  network_type: 'mainnet',
  chain_type: 'cosmos',
  website: 'https://www.cryptodungeon.org',
  pretty_name: 'Dungeon Chain',
  chain_id: 'dungeon-1',
  bech32_prefix: 'dungeon',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'udgn',
        fixed_min_gas_price: 0.05,
        low_gas_price: 0.05,
        average_gas_price: 0.07,
        high_gas_price: 0.09
      }]
  },
  apis: {
    rpc: [
      {
        address: 'https://dungeon-wallet.rpc.quasarstaking.ai',
        provider: 'Quasar'
      },
      {
        address: 'https://rpc-dungeon-1.seraphim.zone',
        provider: 'Seraphim'
      },
      {
        address: 'https://dungeon_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://rpc.dungeon.chaintools.tech',
        provider: 'ChainTools'
      },
      {
        address: 'https://rpc.dungeongames.io',
        provider: 'Dungeon Games'
      }
    ],
    rest: [
      {
        address: 'https://dungeon-wallet.api.quasarstaking.ai',
        provider: 'Quasar'
      },
      {
        address: 'https://api-dungeon-1.seraphim.zone',
        provider: 'Seraphim'
      },
      {
        address: 'https://api-archive-dungeonchain.apeironnodes.com',
        provider: 'ApeironNodes (Archive)'
      },
      {
        address: 'https://dungeon_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://api.dungeon.chaintools.tech',
        provider: 'ChainTools'
      },
      {
        address: 'https://api.dungeongames.io',
        provider: 'Dungeon Games'
      }
    ],
    grpc: [{
        address: 'dungeon.grpc.quasarstaking.ai:80',
        provider: 'Quasar'
      }, {
        address: 'grpc.dungeon.chaintools.tech:443',
        provider: 'ChainTools'
      }]
  },
  explorers: [
    {
      kind: 'Ping.Pub',
      url: 'https://ping.pub/Dungeonchain',
      tx_page: 'https://ping.pub/Dungeonchain/tx/${txHash}',
      account_page: 'https://ping.pub/Dungeonchain/account/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/dungeon',
      tx_page: 'https://explorer.whenmoonwhenlambo.money/dungeon/tx/${txHash}',
      account_page: 'https://explorer.whenmoonwhenlambo.money/dungeon/account/${accountAddress}'
    },
    {
      kind: 'ChainTools',
      url: 'https://explorer.chaintools.tech/Dungeon',
      tx_page: 'https://explorer.chaintools.tech/Dungeon/tx/${txHash}',
      account_page: 'https://explorer.chaintools.tech/Dungeon/account/${accountAddress}'
    },
    {
      kind: 'Dungeon Games',
      url: 'https://explorer.dungeongames.io',
      tx_page: 'https://explorer.dungeongames.io/tx/${txHash}',
      account_page: 'https://explorer.dungeongames.io/account/${accountAddress}'
    }
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dungeon/images/DGN.png'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dungeon/images/DGN.png',
      theme: {
        circle: true
      }
    }]
};
export default info;