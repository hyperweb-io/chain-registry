import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'axelartestnet',
  assets: [
    {
      description: 'Agoric is a smart contract platform that uses JavaScript to enable developers to build secure and scalable decentralized applications (dApps) easily.',
      denom_units: [{
          denom: 'ibc/452A877FB580D5FA3B55F3DDCE9A9B07E9E8C6B85CA1211175EC4A9D90D9FBE8',
          exponent: 0,
          aliases: ['ubld']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      base: 'ibc/452A877FB580D5FA3B55F3DDCE9A9B07E9E8C6B85CA1211175EC4A9D90D9FBE8',
      name: 'Agoric',
      display: 'bld',
      symbol: 'BLD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
      },
      coingecko_id: 'agoric',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
        }],
      socials: {
        website: 'https://agoric.com/',
        twitter: 'https://twitter.com/agoric'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-315',
            base_denom: 'ubld',
            chain_name: 'agoricdevnet'
          },
          chain: {
            channel_id: 'channel-623'
          }
        }]
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [{
          denom: 'ibc/52E1640C94C33A9D028DB79855C83F4C739F594ADA15CD6E3B6F3D6A1354FC6A',
          exponent: 0,
          aliases: ['uist']
        }, {
          denom: 'ist',
          exponent: 6
        }],
      base: 'ibc/52E1640C94C33A9D028DB79855C83F4C739F594ADA15CD6E3B6F3D6A1354FC6A',
      name: 'Inter Stable Token',
      display: 'ist',
      symbol: 'IST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
      },
      coingecko_id: 'inter-stable-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-315',
            base_denom: 'uist',
            chain_name: 'agoricdevnet'
          },
          chain: {
            channel_id: 'channel-623'
          }
        }]
    },
    {
      description: 'Agoric is a smart contract platform that uses JavaScript to enable developers to build secure and scalable decentralized applications (dApps) easily.',
      denom_units: [{
          denom: 'ibc/452A877FB580D5FA3B55F3DDCE9A9B07E9E8C6B85CA1211175EC4A9D90D9FBE8',
          exponent: 0,
          aliases: ['ubld']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      base: 'ibc/452A877FB580D5FA3B55F3DDCE9A9B07E9E8C6B85CA1211175EC4A9D90D9FBE8',
      name: 'Agoric',
      display: 'bld',
      symbol: 'BLD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
      },
      coingecko_id: 'agoric',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
        }],
      socials: {
        website: 'https://agoric.com/',
        twitter: 'https://twitter.com/agoric'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-315',
            base_denom: 'ubld',
            chain_name: 'agoricdevnet'
          },
          chain: {
            channel_id: 'channel-623'
          }
        }]
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [{
          denom: 'ibc/52E1640C94C33A9D028DB79855C83F4C739F594ADA15CD6E3B6F3D6A1354FC6A',
          exponent: 0,
          aliases: ['uist']
        }, {
          denom: 'ist',
          exponent: 6
        }],
      base: 'ibc/52E1640C94C33A9D028DB79855C83F4C739F594ADA15CD6E3B6F3D6A1354FC6A',
      name: 'Inter Stable Token',
      display: 'ist',
      symbol: 'IST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
      },
      coingecko_id: 'inter-stable-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-315',
            base_denom: 'uist',
            chain_name: 'agoricdevnet'
          },
          chain: {
            channel_id: 'channel-623'
          }
        }]
    },
    {
      description: 'The native staking token of Babylon.',
      denom_units: [{
          denom: 'ibc/19142C352B3DB3B2C6CCE8B9EDCC8D4D8EF9E4A1335E54A69DE5F4ECFBBD8A36',
          exponent: 0,
          aliases: ['ubbn']
        }, {
          denom: 'BABY',
          exponent: 6
        }],
      base: 'ibc/19142C352B3DB3B2C6CCE8B9EDCC8D4D8EF9E4A1335E54A69DE5F4ECFBBD8A36',
      name: 'Babylon Testnet',
      display: 'BABY',
      symbol: 'BABY',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'ubbn',
            chain_name: 'babylontestnet'
          },
          chain: {
            channel_id: 'channel-598'
          }
        }]
    },
    {
      description: 'The native token of Lava',
      denom_units: [{
          denom: 'ibc/40BDF4D1CFC245BA82B7F75833B27E7BEDE1ED37D061085E9ED629B6AE67699A',
          exponent: 0,
          aliases: ['ulava']
        }, {
          denom: 'lava',
          exponent: 6
        }],
      base: 'ibc/40BDF4D1CFC245BA82B7F75833B27E7BEDE1ED37D061085E9ED629B6AE67699A',
      name: 'LAVA',
      display: 'lava',
      symbol: 'LAVA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.svg'
      },
      keywords: ['rpc', 'api'],
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'ulava',
            chain_name: 'lavatestnet'
          },
          chain: {
            channel_id: 'channel-444'
          }
        }]
    },
    {
      description: 'Manifest testnet native token',
      denom_units: [{
          denom: 'ibc/FBB845E40F35378F2CDD02E0A8E9A42DECDBE1067F3E5CB08DBCF616B029569C',
          exponent: 0,
          aliases: ['umfx']
        }, {
          denom: 'mfx',
          exponent: 6
        }],
      base: 'ibc/FBB845E40F35378F2CDD02E0A8E9A42DECDBE1067F3E5CB08DBCF616B029569C',
      name: 'Manifest Testnet Token',
      display: 'mfx',
      symbol: 'MFX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
        }],
      type_asset: 'sdk.coin',
      socials: {
        website: 'https://manifestai.org/',
        twitter: 'https://x.com/ManifestAIs/'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'umfx',
            chain_name: 'manifesttestnet'
          },
          chain: {
            channel_id: 'channel-594'
          }
        }]
    },
    {
      description: 'Proof of Authority token for the Manifest testnet',
      denom_units: [{
          denom: 'ibc/C6CF685B912065AE7ABE933C5E42F28CE2890E7FA4CF996A7DF95028227CF2E3',
          exponent: 0,
          aliases: ['upoa']
        }, {
          denom: 'poa',
          exponent: 6
        }],
      base: 'ibc/C6CF685B912065AE7ABE933C5E42F28CE2890E7FA4CF996A7DF95028227CF2E3',
      name: 'Manifest Testnet Token',
      display: 'poa',
      symbol: 'POA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'upoa',
            chain_name: 'manifesttestnet'
          },
          chain: {
            channel_id: 'channel-594'
          }
        }]
    },
    {
      deprecated: true,
      description: 'PSTAKE Liquid-Staked ATOM',
      denom_units: [{
          denom: 'ibc/276AF99E795A64D76465F6E3BC6CEE3BB7AC69D80C528E9800CFA8C65A2BFB5E',
          exponent: 0,
          aliases: ['stk/uatom']
        }, {
          denom: 'stkatom',
          exponent: 6,
          aliases: ['stk/atom']
        }],
      base: 'ibc/276AF99E795A64D76465F6E3BC6CEE3BB7AC69D80C528E9800CFA8C65A2BFB5E',
      name: 'PSTAKE staked ATOM',
      display: 'stkatom',
      symbol: 'stkATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'stk/uatom',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-261'
          }
        }]
    },
    {
      deprecated: true,
      description: 'PSTAKE Liquid-Staked OSMO',
      denom_units: [{
          denom: 'ibc/DBCFEE87798532E4D3D24DD93741C24432F20381523676D0B739982C5A326DC9',
          exponent: 0,
          aliases: ['stk/uosmo']
        }, {
          denom: 'stkosmo',
          exponent: 6,
          aliases: ['stk/osmo']
        }],
      base: 'ibc/DBCFEE87798532E4D3D24DD93741C24432F20381523676D0B739982C5A326DC9',
      name: 'PSTAKE staked OSMO',
      display: 'stkosmo',
      symbol: 'stkOSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'stk/uosmo',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-261'
          }
        }]
    },
    {
      deprecated: true,
      description: 'PSTAKE Liquid-Staked DV4TNT',
      denom_units: [{
          denom: 'ibc/425522C90E4C979EF022675E21E301FA295C55B2492FA0E29C634089DE11565F',
          exponent: 0,
          aliases: ['stk/adv4tnt']
        }, {
          denom: 'stkdv4tnt',
          exponent: 18,
          aliases: ['stk/dv4tnt']
        }],
      base: 'ibc/425522C90E4C979EF022675E21E301FA295C55B2492FA0E29C634089DE11565F',
      name: 'PSTAKE staked DV4TNT',
      display: 'stkdv4tnt',
      symbol: 'stkDV4TNT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'stk/adv4tnt',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-261'
          }
        }]
    },
    {
      description: 'The native token of Prysm',
      denom_units: [{
          denom: 'ibc/20CF27E1AB2A80B296A52E90E8F6D72EA5636AB25509B281E1A0BBA3FDF9447E',
          exponent: 0,
          aliases: ['uprysm']
        }, {
          denom: 'prysm',
          exponent: 6
        }],
      base: 'ibc/20CF27E1AB2A80B296A52E90E8F6D72EA5636AB25509B281E1A0BBA3FDF9447E',
      display: 'prysm',
      name: 'Prysm',
      symbol: 'PRYSM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/prysmdevnet/images/prysm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/prysmdevnet/images/prysm.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://www.prysm.network/',
        twitter: 'https://twitter.com/PrysmNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'uprysm',
            chain_name: 'prysmdevnet'
          },
          chain: {
            channel_id: 'channel-564'
          }
        }]
    },
    {
      description: 'The native token of Saga Testnet',
      denom_units: [{
          denom: 'ibc/82BB1EFF20BD5247B84B1BC14F24444E4A09ACB58EBA068786380844ECBACDE7',
          exponent: 0,
          aliases: ['utsaga']
        }, {
          denom: 'tsaga',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/82BB1EFF20BD5247B84B1BC14F24444E4A09ACB58EBA068786380844ECBACDE7',
      name: 'Saga',
      display: 'tsaga',
      symbol: 'TSAGA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'utsaga',
            chain_name: 'sagatestnet'
          },
          chain: {
            channel_id: 'channel-566'
          }
        }]
    },
    {
      description: 'The native token of the Titan network.',
      denom_units: [
        {
          denom: 'ibc/5D117E795758A846D84F90ED2CDBB092B5AF5BFDA5E16C70D7E78D41CD856DEA',
          exponent: 0,
          aliases: ['atkx']
        },
        {
          denom: 'utkx',
          exponent: 12,
          aliases: ['microtkx']
        },
        {
          denom: 'mtkx',
          exponent: 15,
          aliases: ['millitkx']
        },
        {
          denom: 'tkx',
          exponent: 18,
          aliases: []
        }
      ],
      base: 'ibc/5D117E795758A846D84F90ED2CDBB092B5AF5BFDA5E16C70D7E78D41CD856DEA',
      display: 'tkx',
      name: 'titan tkx',
      symbol: 'TKX',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png'
        }],
      keywords: ['staking'],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'atkx',
            chain_name: 'titantestnet'
          },
          chain: {
            channel_id: 'channel-537'
          }
        }]
    },
    {
      description: 'The native staking token of Babylon.',
      denom_units: [{
          denom: 'ibc/19142C352B3DB3B2C6CCE8B9EDCC8D4D8EF9E4A1335E54A69DE5F4ECFBBD8A36',
          exponent: 0,
          aliases: ['ubbn']
        }, {
          denom: 'BABY',
          exponent: 6
        }],
      base: 'ibc/19142C352B3DB3B2C6CCE8B9EDCC8D4D8EF9E4A1335E54A69DE5F4ECFBBD8A36',
      name: 'Babylon Testnet',
      display: 'BABY',
      symbol: 'BABY',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'ubbn',
            chain_name: 'babylontestnet'
          },
          chain: {
            channel_id: 'channel-598'
          }
        }]
    },
    {
      description: 'The native token of Lava',
      denom_units: [{
          denom: 'ibc/40BDF4D1CFC245BA82B7F75833B27E7BEDE1ED37D061085E9ED629B6AE67699A',
          exponent: 0,
          aliases: ['ulava']
        }, {
          denom: 'lava',
          exponent: 6
        }],
      base: 'ibc/40BDF4D1CFC245BA82B7F75833B27E7BEDE1ED37D061085E9ED629B6AE67699A',
      name: 'LAVA',
      display: 'lava',
      symbol: 'LAVA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.svg'
      },
      keywords: ['rpc', 'api'],
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'ulava',
            chain_name: 'lavatestnet'
          },
          chain: {
            channel_id: 'channel-444'
          }
        }]
    },
    {
      description: 'Manifest testnet native token',
      denom_units: [{
          denom: 'ibc/FBB845E40F35378F2CDD02E0A8E9A42DECDBE1067F3E5CB08DBCF616B029569C',
          exponent: 0,
          aliases: ['umfx']
        }, {
          denom: 'mfx',
          exponent: 6
        }],
      base: 'ibc/FBB845E40F35378F2CDD02E0A8E9A42DECDBE1067F3E5CB08DBCF616B029569C',
      name: 'Manifest Testnet Token',
      display: 'mfx',
      symbol: 'MFX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
        }],
      type_asset: 'sdk.coin',
      socials: {
        website: 'https://manifestai.org/',
        twitter: 'https://x.com/ManifestAIs/'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'umfx',
            chain_name: 'manifesttestnet'
          },
          chain: {
            channel_id: 'channel-594'
          }
        }]
    },
    {
      description: 'Proof of Authority token for the Manifest testnet',
      denom_units: [{
          denom: 'ibc/C6CF685B912065AE7ABE933C5E42F28CE2890E7FA4CF996A7DF95028227CF2E3',
          exponent: 0,
          aliases: ['upoa']
        }, {
          denom: 'poa',
          exponent: 6
        }],
      base: 'ibc/C6CF685B912065AE7ABE933C5E42F28CE2890E7FA4CF996A7DF95028227CF2E3',
      name: 'Manifest Testnet Token',
      display: 'poa',
      symbol: 'POA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'upoa',
            chain_name: 'manifesttestnet'
          },
          chain: {
            channel_id: 'channel-594'
          }
        }]
    },
    {
      deprecated: true,
      description: 'PSTAKE Liquid-Staked ATOM',
      denom_units: [{
          denom: 'ibc/276AF99E795A64D76465F6E3BC6CEE3BB7AC69D80C528E9800CFA8C65A2BFB5E',
          exponent: 0,
          aliases: ['stk/uatom']
        }, {
          denom: 'stkatom',
          exponent: 6,
          aliases: ['stk/atom']
        }],
      base: 'ibc/276AF99E795A64D76465F6E3BC6CEE3BB7AC69D80C528E9800CFA8C65A2BFB5E',
      name: 'PSTAKE staked ATOM',
      display: 'stkatom',
      symbol: 'stkATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'stk/uatom',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-261'
          }
        }]
    },
    {
      deprecated: true,
      description: 'PSTAKE Liquid-Staked OSMO',
      denom_units: [{
          denom: 'ibc/DBCFEE87798532E4D3D24DD93741C24432F20381523676D0B739982C5A326DC9',
          exponent: 0,
          aliases: ['stk/uosmo']
        }, {
          denom: 'stkosmo',
          exponent: 6,
          aliases: ['stk/osmo']
        }],
      base: 'ibc/DBCFEE87798532E4D3D24DD93741C24432F20381523676D0B739982C5A326DC9',
      name: 'PSTAKE staked OSMO',
      display: 'stkosmo',
      symbol: 'stkOSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'stk/uosmo',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-261'
          }
        }]
    },
    {
      deprecated: true,
      description: 'PSTAKE Liquid-Staked DV4TNT',
      denom_units: [{
          denom: 'ibc/425522C90E4C979EF022675E21E301FA295C55B2492FA0E29C634089DE11565F',
          exponent: 0,
          aliases: ['stk/adv4tnt']
        }, {
          denom: 'stkdv4tnt',
          exponent: 18,
          aliases: ['stk/dv4tnt']
        }],
      base: 'ibc/425522C90E4C979EF022675E21E301FA295C55B2492FA0E29C634089DE11565F',
      name: 'PSTAKE staked DV4TNT',
      display: 'stkdv4tnt',
      symbol: 'stkDV4TNT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'stk/adv4tnt',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-261'
          }
        }]
    },
    {
      description: 'The native token of Saga Testnet',
      denom_units: [{
          denom: 'ibc/82BB1EFF20BD5247B84B1BC14F24444E4A09ACB58EBA068786380844ECBACDE7',
          exponent: 0,
          aliases: ['utsaga']
        }, {
          denom: 'tsaga',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/82BB1EFF20BD5247B84B1BC14F24444E4A09ACB58EBA068786380844ECBACDE7',
      name: 'Saga',
      display: 'tsaga',
      symbol: 'TSAGA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'utsaga',
            chain_name: 'sagatestnet'
          },
          chain: {
            channel_id: 'channel-566'
          }
        }]
    },
    {
      description: 'The native token of the Titan network.',
      denom_units: [
        {
          denom: 'ibc/5D117E795758A846D84F90ED2CDBB092B5AF5BFDA5E16C70D7E78D41CD856DEA',
          exponent: 0,
          aliases: ['atkx']
        },
        {
          denom: 'utkx',
          exponent: 12,
          aliases: ['microtkx']
        },
        {
          denom: 'mtkx',
          exponent: 15,
          aliases: ['millitkx']
        },
        {
          denom: 'tkx',
          exponent: 18,
          aliases: []
        }
      ],
      base: 'ibc/5D117E795758A846D84F90ED2CDBB092B5AF5BFDA5E16C70D7E78D41CD856DEA',
      display: 'tkx',
      name: 'titan tkx',
      symbol: 'TKX',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png'
        }],
      keywords: ['staking'],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'atkx',
            chain_name: 'titantestnet'
          },
          chain: {
            channel_id: 'channel-537'
          }
        }]
    },
    {
      description: 'The native token of Prysm',
      denom_units: [{
          denom: 'ibc/20CF27E1AB2A80B296A52E90E8F6D72EA5636AB25509B281E1A0BBA3FDF9447E',
          exponent: 0,
          aliases: ['uprysm']
        }, {
          denom: 'prysm',
          exponent: 6
        }],
      base: 'ibc/20CF27E1AB2A80B296A52E90E8F6D72EA5636AB25509B281E1A0BBA3FDF9447E',
      display: 'prysm',
      name: 'Prysm',
      symbol: 'PRYSM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/prysmdevnet/images/prysm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/prysmdevnet/images/prysm.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://www.prysm.network/',
        twitter: 'https://twitter.com/PrysmNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'uprysm',
            chain_name: 'prysmdevnet'
          },
          chain: {
            channel_id: 'channel-564'
          }
        }]
    }
  ]
};
export default assets;
    