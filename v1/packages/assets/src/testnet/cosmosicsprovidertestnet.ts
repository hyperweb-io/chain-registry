import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'cosmosicsprovidertestnet',
  assets: [
    {
      description: 'Agoric is a smart contract platform that uses JavaScript to enable developers to build secure and scalable decentralized applications (dApps) easily.',
      denom_units: [{
          denom: 'ibc/14F68F1D091D089FA4425BDBFB2166B40218979F7E065B6BE61188E93DD4DD30',
          exponent: 0,
          aliases: ['ubld']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      base: 'ibc/14F68F1D091D089FA4425BDBFB2166B40218979F7E065B6BE61188E93DD4DD30',
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
            channel_id: 'channel-25',
            base_denom: 'ubld',
            chain_name: 'agoricdevnet'
          },
          chain: {
            channel_id: 'channel-388'
          }
        }]
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [{
          denom: 'ibc/39D30592C127F8ECC23CECA303673CD8EE76225788BA88AE664F67148A5821E5',
          exponent: 0,
          aliases: ['uist']
        }, {
          denom: 'ist',
          exponent: 6
        }],
      base: 'ibc/39D30592C127F8ECC23CECA303673CD8EE76225788BA88AE664F67148A5821E5',
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
            channel_id: 'channel-25',
            base_denom: 'uist',
            chain_name: 'agoricdevnet'
          },
          chain: {
            channel_id: 'channel-388'
          }
        }]
    },
    {
      description: 'The native staking token of Babylon.',
      denom_units: [{
          denom: 'ibc/66D14DD6F6E1170CC4E17FB3FF485F83F6E2DC01DC4AB88399AD956920847EFF',
          exponent: 0,
          aliases: ['ubbn']
        }, {
          denom: 'BABY',
          exponent: 6
        }],
      base: 'ibc/66D14DD6F6E1170CC4E17FB3FF485F83F6E2DC01DC4AB88399AD956920847EFF',
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
            channel_id: 'channel-8',
            base_denom: 'ubbn',
            chain_name: 'babylontestnet'
          },
          chain: {
            channel_id: 'channel-347'
          }
        }]
    },
    {
      description: 'Agoric is a smart contract platform that uses JavaScript to enable developers to build secure and scalable decentralized applications (dApps) easily.',
      denom_units: [{
          denom: 'ibc/14F68F1D091D089FA4425BDBFB2166B40218979F7E065B6BE61188E93DD4DD30',
          exponent: 0,
          aliases: ['ubld']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      base: 'ibc/14F68F1D091D089FA4425BDBFB2166B40218979F7E065B6BE61188E93DD4DD30',
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
            channel_id: 'channel-25',
            base_denom: 'ubld',
            chain_name: 'agoricdevnet'
          },
          chain: {
            channel_id: 'channel-388'
          }
        }]
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [{
          denom: 'ibc/39D30592C127F8ECC23CECA303673CD8EE76225788BA88AE664F67148A5821E5',
          exponent: 0,
          aliases: ['uist']
        }, {
          denom: 'ist',
          exponent: 6
        }],
      base: 'ibc/39D30592C127F8ECC23CECA303673CD8EE76225788BA88AE664F67148A5821E5',
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
            channel_id: 'channel-25',
            base_denom: 'uist',
            chain_name: 'agoricdevnet'
          },
          chain: {
            channel_id: 'channel-388'
          }
        }]
    },
    {
      description: 'The native staking token of Babylon.',
      denom_units: [{
          denom: 'ibc/66D14DD6F6E1170CC4E17FB3FF485F83F6E2DC01DC4AB88399AD956920847EFF',
          exponent: 0,
          aliases: ['ubbn']
        }, {
          denom: 'BABY',
          exponent: 6
        }],
      base: 'ibc/66D14DD6F6E1170CC4E17FB3FF485F83F6E2DC01DC4AB88399AD956920847EFF',
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
            channel_id: 'channel-8',
            base_denom: 'ubbn',
            chain_name: 'babylontestnet'
          },
          chain: {
            channel_id: 'channel-347'
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
            circle: true
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Darkmatt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Darkmatt.svg',
          theme: {
            dark_mode: true,
            circle: true
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-WHT.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-WHT.svg',
          theme: {
            dark_mode: false,
            circle: true
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
      description: 'The native token of outbe-node',
      denom_units: [{
          denom: 'ibc/43AD599F4EACD7E21F84B194C329029DA9C4CED6015880386DBA074865CA3D11',
          exponent: 0,
          aliases: ['unit']
        }, {
          denom: 'coen',
          exponent: 18
        }],
      base: 'ibc/43AD599F4EACD7E21F84B194C329029DA9C4CED6015880386DBA074865CA3D11',
      name: 'coen',
      display: 'coen',
      symbol: 'COEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/outbedevnet/images/outbe.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/outbedevnet/images/outbe.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/outbedevnet/images/outbe.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/outbedevnet/images/outbe.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'unit',
            chain_name: 'outbedevnet'
          },
          chain: {
            channel_id: 'channel-500'
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.svg'
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
            circle: true
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Darkmatt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Darkmatt.svg',
          theme: {
            dark_mode: true,
            circle: true
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-WHT.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-WHT.svg',
          theme: {
            dark_mode: false,
            circle: true
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.svg'
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
      description: 'The native token of outbe-node',
      denom_units: [{
          denom: 'ibc/43AD599F4EACD7E21F84B194C329029DA9C4CED6015880386DBA074865CA3D11',
          exponent: 0,
          aliases: ['unit']
        }, {
          denom: 'coen',
          exponent: 18
        }],
      base: 'ibc/43AD599F4EACD7E21F84B194C329029DA9C4CED6015880386DBA074865CA3D11',
      name: 'coen',
      display: 'coen',
      symbol: 'COEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/outbedevnet/images/outbe.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/outbedevnet/images/outbe.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/outbedevnet/images/outbe.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/outbedevnet/images/outbe.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'unit',
            chain_name: 'outbedevnet'
          },
          chain: {
            channel_id: 'channel-500'
          }
        }]
    }
  ]
};
export default assets;
    