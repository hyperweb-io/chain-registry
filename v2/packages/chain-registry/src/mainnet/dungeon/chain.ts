import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'dungeon',
  status: 'live',
  networkType: 'mainnet',
  chainType: 'cosmos',
  website: 'https://www.cryptodungeon.org',
  prettyName: 'Dungeon Chain',
  chainId: 'dungeon-1',
  bech32Prefix: 'dungeon',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'udgn',
        fixedMinGasPrice: 0.05,
        lowGasPrice: 0.05,
        averageGasPrice: 0.07,
        highGasPrice: 0.09
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
      }
    ],
    grpc: [{
        address: 'dungeon.grpc.quasarstaking.ai',
        provider: 'Quasar'
      }]
  },
  explorers: [{
      kind: 'Ping.Pub',
      url: 'https://ping.pub/Dungeonchain',
      txPage: 'https://ping.pub/Dungeonchain/tx/${txHash}',
      accountPage: 'https://ping.pub/Dungeonchain/account/${accountAddress}'
    }, {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/dungeon',
      txPage: 'https://explorer.whenmoonwhenlambo.money/dungeon/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/dungeon/account/${accountAddress}'
    }],
  logoURIs: {
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