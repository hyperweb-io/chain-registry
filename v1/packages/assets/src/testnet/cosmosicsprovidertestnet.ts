import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'cosmosicsprovidertestnet',
  assets: [
    {
      description: 'The native token of MANTRA',
      denom_units: [{
          denom: 'ibc/21619233C9A7288683ECFC5056CA31BBA63A8769C38C1F4DC992EA533DCD8EDE',
          exponent: 0,
          aliases: ['uom']
        }, {
          denom: 'om',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/21619233C9A7288683ECFC5056CA31BBA63A8769C38C1F4DC992EA533DCD8EDE',
      name: 'MANTRA Chain Dukong',
      display: 'om',
      symbol: 'OM',
      keywords: [
        'rwa',
        'wasm',
        'staking',
        'testnet'
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg',
          theme: {
            circle: true,
            primary_color_hex: '#fba0c1'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Darkmatt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Darkmatt.svg',
          theme: {
            dark_mode: true,
            circle: true,
            primary_color_hex: '#342c2c'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-WHT.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-WHT.svg',
          theme: {
            dark_mode: false,
            circle: true,
            primary_color_hex: '#342c2c'
          }
        }
      ],
      socials: {
        website: 'https://www.mantrachain.io/',
        twitter: 'https://x.com/MANTRA_Chain'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'uom',
            chain_name: 'mantrachaintestnet2'
          },
          chain: {
            channel_id: 'channel-241'
          }
        }]
    },
    {
      description: 'The native token of XRPL EVM Testnet',
      denom_units: [{
          denom: 'ibc/68D1062C8B0F11B913FD9285553A7529C3C26D0C49FB64D135E255D9742F6A01',
          exponent: 0,
          aliases: ['axrp']
        }, {
          denom: 'XRP',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/68D1062C8B0F11B913FD9285553A7529C3C26D0C49FB64D135E255D9742F6A01',
      name: 'XRP',
      display: 'XRP',
      symbol: 'XRP',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      keywords: [
        'xrpl',
        'evm',
        'testnet',
        'sidechain',
        'ripple',
        'peersyst',
        'cosmos',
        'evmos',
        'axelar',
        'xrp',
        'xrplevm'
      ],
      socials: {
        website: 'https://xrplevm.org',
        twitter: 'https://twitter.com/Peersyst'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'axrp',
            chain_name: 'xrplevmtestnet'
          },
          chain: {
            channel_id: 'channel-374'
          }
        }]
    },
    {
      description: 'The native token of MANTRA',
      denom_units: [{
          denom: 'ibc/21619233C9A7288683ECFC5056CA31BBA63A8769C38C1F4DC992EA533DCD8EDE',
          exponent: 0,
          aliases: ['uom']
        }, {
          denom: 'om',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/21619233C9A7288683ECFC5056CA31BBA63A8769C38C1F4DC992EA533DCD8EDE',
      name: 'MANTRA Chain Dukong',
      display: 'om',
      symbol: 'OM',
      keywords: [
        'rwa',
        'wasm',
        'staking',
        'testnet'
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg',
          theme: {
            circle: true,
            primary_color_hex: '#fba0c1'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Darkmatt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Darkmatt.svg',
          theme: {
            dark_mode: true,
            circle: true,
            primary_color_hex: '#342c2c'
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-WHT.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-WHT.svg',
          theme: {
            dark_mode: false,
            circle: true,
            primary_color_hex: '#342c2c'
          }
        }
      ],
      socials: {
        website: 'https://www.mantrachain.io/',
        twitter: 'https://x.com/MANTRA_Chain'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'uom',
            chain_name: 'mantrachaintestnet2'
          },
          chain: {
            channel_id: 'channel-241'
          }
        }]
    },
    {
      description: 'The native token of XRPL EVM Testnet',
      denom_units: [{
          denom: 'ibc/68D1062C8B0F11B913FD9285553A7529C3C26D0C49FB64D135E255D9742F6A01',
          exponent: 0,
          aliases: ['axrp']
        }, {
          denom: 'XRP',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/68D1062C8B0F11B913FD9285553A7529C3C26D0C49FB64D135E255D9742F6A01',
      name: 'XRP',
      display: 'XRP',
      symbol: 'XRP',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      keywords: [
        'xrpl',
        'evm',
        'testnet',
        'sidechain',
        'ripple',
        'peersyst',
        'cosmos',
        'evmos',
        'axelar',
        'xrp',
        'xrplevm'
      ],
      socials: {
        website: 'https://xrplevm.org',
        twitter: 'https://twitter.com/Peersyst'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'axrp',
            chain_name: 'xrplevmtestnet'
          },
          chain: {
            channel_id: 'channel-374'
          }
        }]
    }
  ]
};
export default assets;
    