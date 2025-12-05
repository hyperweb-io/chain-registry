import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'nobletestnet',
  assets: [
    {
      description: 'Agoric is a smart contract platform that uses JavaScript to enable developers to build secure and scalable decentralized applications (dApps) easily.',
      denom_units: [{
          denom: 'ibc/B004A9200E85CD5B6B6D8FB6ADCD1288F36969E926A1D4418ABD2AEDFC52F43E',
          exponent: 0,
          aliases: ['ubld']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      base: 'ibc/B004A9200E85CD5B6B6D8FB6ADCD1288F36969E926A1D4418ABD2AEDFC52F43E',
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
        x: 'https://x.com/agoric'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'ubld',
            chain_name: 'agoricdevnet'
          },
          chain: {
            channel_id: 'channel-337'
          }
        }]
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [{
          denom: 'ibc/1F3137B63B5DEAD5D96E3F6FF7967DE0E880CF3BCFEE77B8DE5FBDC291D20055',
          exponent: 0,
          aliases: ['uist']
        }, {
          denom: 'ist',
          exponent: 6
        }],
      base: 'ibc/1F3137B63B5DEAD5D96E3F6FF7967DE0E880CF3BCFEE77B8DE5FBDC291D20055',
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
            channel_id: 'channel-11',
            base_denom: 'uist',
            chain_name: 'agoricdevnet'
          },
          chain: {
            channel_id: 'channel-337'
          }
        }]
    },
    {
      description: 'The native staking token of Babylon.',
      denom_units: [{
          denom: 'ibc/3400F6784977CE5662A5E2975A891E2A88FA54FBA8E88B774CEBB0AB70E613F5',
          exponent: 0,
          aliases: ['ubbn']
        }, {
          denom: 'BABY',
          exponent: 6
        }],
      base: 'ibc/3400F6784977CE5662A5E2975A891E2A88FA54FBA8E88B774CEBB0AB70E613F5',
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
            channel_id: 'channel-7',
            base_denom: 'ubbn',
            chain_name: 'babylontestnet'
          },
          chain: {
            channel_id: 'channel-329'
          }
        }]
    },
    {
      description: 'Eden token definition',
      denom_units: [
        {
          denom: 'ibc/A9C7A16BEEEE66019AD9A2693806C72521F502714B354324688D025F0DEF19F2',
          exponent: 0,
          aliases: ['ueden']
        },
        {
          denom: 'meden',
          exponent: 3,
          aliases: ['millieden']
        },
        {
          denom: 'eden',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/A9C7A16BEEEE66019AD9A2693806C72521F502714B354324688D025F0DEF19F2',
      name: 'Eden',
      display: 'eden',
      symbol: 'EDEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/eden.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/eden.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'ueden',
            chain_name: 'elystestnet'
          },
          chain: {
            channel_id: 'channel-19'
          }
        }]
    },
    {
      description: 'Int3face Testnet blockchain native token',
      denom_units: [{
          denom: 'ibc/2080D688BAED7DD8C59B4D336BB5E7BEEA24495D4AB05AF604AD24AEBF9C4153',
          exponent: 0,
          aliases: ['uint3']
        }, {
          denom: 'int3',
          exponent: 6
        }],
      base: 'ibc/2080D688BAED7DD8C59B4D336BB5E7BEEA24495D4AB05AF604AD24AEBF9C4153',
      name: 'Int3face Testnet Token',
      display: 'int3',
      symbol: 'INT3',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3.png'
        }],
      socials: {
        website: 'https://testnet.app.int3face.zone/',
        x: 'https://x.com/_Bitfrost_'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'uint3',
            chain_name: 'int3facetestnet'
          },
          chain: {
            channel_id: 'channel-537'
          }
        }]
    },
    {
      description: 'The native token of MANTRA',
      denom_units: [{
          denom: 'ibc/9E2286BF5BED9049BF64C660A4D662732E8EDC910FA4C7DCDDB61D8A5A289510',
          exponent: 0,
          aliases: ['amantra']
        }, {
          denom: 'mantra',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/9E2286BF5BED9049BF64C660A4D662732E8EDC910FA4C7DCDDB61D8A5A289510',
      name: 'MANTRA Chain Dukong',
      display: 'mantra',
      symbol: 'MANTRA',
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
        x: 'https://x.com/MANTRA_Chain'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'amantra',
            chain_name: 'mantrachaintestnet2'
          },
          chain: {
            channel_id: 'channel-237'
          }
        }]
    },
    {
      description: 'Agoric is a smart contract platform that uses JavaScript to enable developers to build secure and scalable decentralized applications (dApps) easily.',
      denom_units: [{
          denom: 'ibc/B004A9200E85CD5B6B6D8FB6ADCD1288F36969E926A1D4418ABD2AEDFC52F43E',
          exponent: 0,
          aliases: ['ubld']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      base: 'ibc/B004A9200E85CD5B6B6D8FB6ADCD1288F36969E926A1D4418ABD2AEDFC52F43E',
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
        x: 'https://x.com/agoric'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'ubld',
            chain_name: 'agoricdevnet'
          },
          chain: {
            channel_id: 'channel-337'
          }
        }]
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [{
          denom: 'ibc/1F3137B63B5DEAD5D96E3F6FF7967DE0E880CF3BCFEE77B8DE5FBDC291D20055',
          exponent: 0,
          aliases: ['uist']
        }, {
          denom: 'ist',
          exponent: 6
        }],
      base: 'ibc/1F3137B63B5DEAD5D96E3F6FF7967DE0E880CF3BCFEE77B8DE5FBDC291D20055',
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
            channel_id: 'channel-11',
            base_denom: 'uist',
            chain_name: 'agoricdevnet'
          },
          chain: {
            channel_id: 'channel-337'
          }
        }]
    },
    {
      description: 'The native staking token of Babylon.',
      denom_units: [{
          denom: 'ibc/3400F6784977CE5662A5E2975A891E2A88FA54FBA8E88B774CEBB0AB70E613F5',
          exponent: 0,
          aliases: ['ubbn']
        }, {
          denom: 'BABY',
          exponent: 6
        }],
      base: 'ibc/3400F6784977CE5662A5E2975A891E2A88FA54FBA8E88B774CEBB0AB70E613F5',
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
            channel_id: 'channel-7',
            base_denom: 'ubbn',
            chain_name: 'babylontestnet'
          },
          chain: {
            channel_id: 'channel-329'
          }
        }]
    },
    {
      description: 'Eden token definition',
      denom_units: [
        {
          denom: 'ibc/A9C7A16BEEEE66019AD9A2693806C72521F502714B354324688D025F0DEF19F2',
          exponent: 0,
          aliases: ['ueden']
        },
        {
          denom: 'meden',
          exponent: 3,
          aliases: ['millieden']
        },
        {
          denom: 'eden',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/A9C7A16BEEEE66019AD9A2693806C72521F502714B354324688D025F0DEF19F2',
      name: 'Eden',
      display: 'eden',
      symbol: 'EDEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/eden.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/eden.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'ueden',
            chain_name: 'elystestnet'
          },
          chain: {
            channel_id: 'channel-19'
          }
        }]
    },
    {
      description: 'Int3face Testnet blockchain native token',
      denom_units: [{
          denom: 'ibc/2080D688BAED7DD8C59B4D336BB5E7BEEA24495D4AB05AF604AD24AEBF9C4153',
          exponent: 0,
          aliases: ['uint3']
        }, {
          denom: 'int3',
          exponent: 6
        }],
      base: 'ibc/2080D688BAED7DD8C59B4D336BB5E7BEEA24495D4AB05AF604AD24AEBF9C4153',
      name: 'Int3face Testnet Token',
      display: 'int3',
      symbol: 'INT3',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3.png'
        }],
      socials: {
        website: 'https://testnet.app.int3face.zone/',
        x: 'https://x.com/_Bitfrost_'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'uint3',
            chain_name: 'int3facetestnet'
          },
          chain: {
            channel_id: 'channel-537'
          }
        }]
    },
    {
      description: 'The native token of MANTRA',
      denom_units: [{
          denom: 'ibc/9E2286BF5BED9049BF64C660A4D662732E8EDC910FA4C7DCDDB61D8A5A289510',
          exponent: 0,
          aliases: ['amantra']
        }, {
          denom: 'mantra',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/9E2286BF5BED9049BF64C660A4D662732E8EDC910FA4C7DCDDB61D8A5A289510',
      name: 'MANTRA Chain Dukong',
      display: 'mantra',
      symbol: 'MANTRA',
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
        x: 'https://x.com/MANTRA_Chain'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'amantra',
            chain_name: 'mantrachaintestnet2'
          },
          chain: {
            channel_id: 'channel-237'
          }
        }]
    },
    {
      description: 'The native token of Prysm',
      denom_units: [{
          denom: 'ibc/FF9995EBAD9CF69784B1061603FDA91CFBDFE7A096CF4D466D4A18B3A68CCD75',
          exponent: 0,
          aliases: ['uprysm']
        }, {
          denom: 'prysm',
          exponent: 6
        }],
      base: 'ibc/FF9995EBAD9CF69784B1061603FDA91CFBDFE7A096CF4D466D4A18B3A68CCD75',
      display: 'prysm',
      name: 'Prysm',
      symbol: 'PRYSM',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/prysmdevnet/images/prysm.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://www.prysm.network/',
        x: 'https://x.com/PrysmNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uprysm',
            chain_name: 'prysmdevnet'
          },
          chain: {
            channel_id: 'channel-222'
          }
        }]
    },
    {
      description: 'The native token of the Titan network.',
      denom_units: [
        {
          denom: 'ibc/F4A4713F419E8769A4094CC87A7B2408398B1CD144B6877F68A6A0877C691565',
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
      base: 'ibc/F4A4713F419E8769A4094CC87A7B2408398B1CD144B6877F68A6A0877C691565',
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
            channel_id: 'channel-7',
            base_denom: 'atkx',
            chain_name: 'titantestnet'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }]
    },
    {
      description: 'The native staking token of the Xion network.',
      denom_units: [{
          denom: 'ibc/7CD6EC852D30D46DF9CB62738D2851BB0CB27A185A887B38C5674DEE819D7780',
          exponent: 0,
          aliases: ['uxion']
        }, {
          denom: 'XION',
          exponent: 6,
          aliases: ['xion']
        }],
      base: 'ibc/7CD6EC852D30D46DF9CB62738D2851BB0CB27A185A887B38C5674DEE819D7780',
      display: 'XION',
      name: 'xion',
      symbol: 'XION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
        }],
      socials: {
        discord: 'https://discord.com/invite/burnt',
        github: 'https://github.com/burnt-labs',
        telegram: 'https://t.me/xion_announcements',
        website: 'https://xion.burnt.com',
        x: 'https://x.com/burnt_xion'
      },
      type_asset: 'sdk.coin',
      coingecko_id: 'xion-2',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'uxion',
            chain_name: 'xiontestnet2'
          },
          chain: {
            channel_id: 'channel-333'
          }
        }]
    },
    {
      description: 'The native token of the Titan network.',
      denom_units: [
        {
          denom: 'ibc/F4A4713F419E8769A4094CC87A7B2408398B1CD144B6877F68A6A0877C691565',
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
      base: 'ibc/F4A4713F419E8769A4094CC87A7B2408398B1CD144B6877F68A6A0877C691565',
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
            channel_id: 'channel-7',
            base_denom: 'atkx',
            chain_name: 'titantestnet'
          },
          chain: {
            channel_id: 'channel-208'
          }
        }]
    },
    {
      description: 'The native staking token of the Xion network.',
      denom_units: [{
          denom: 'ibc/7CD6EC852D30D46DF9CB62738D2851BB0CB27A185A887B38C5674DEE819D7780',
          exponent: 0,
          aliases: ['uxion']
        }, {
          denom: 'XION',
          exponent: 6,
          aliases: ['xion']
        }],
      base: 'ibc/7CD6EC852D30D46DF9CB62738D2851BB0CB27A185A887B38C5674DEE819D7780',
      display: 'XION',
      name: 'xion',
      symbol: 'XION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
        }],
      socials: {
        discord: 'https://discord.com/invite/burnt',
        github: 'https://github.com/burnt-labs',
        telegram: 'https://t.me/xion_announcements',
        website: 'https://xion.burnt.com',
        x: 'https://x.com/burnt_xion'
      },
      type_asset: 'sdk.coin',
      coingecko_id: 'xion-2',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'uxion',
            chain_name: 'xiontestnet2'
          },
          chain: {
            channel_id: 'channel-333'
          }
        }]
    },
    {
      description: 'The native token of Prysm',
      denom_units: [{
          denom: 'ibc/FF9995EBAD9CF69784B1061603FDA91CFBDFE7A096CF4D466D4A18B3A68CCD75',
          exponent: 0,
          aliases: ['uprysm']
        }, {
          denom: 'prysm',
          exponent: 6
        }],
      base: 'ibc/FF9995EBAD9CF69784B1061603FDA91CFBDFE7A096CF4D466D4A18B3A68CCD75',
      display: 'prysm',
      name: 'Prysm',
      symbol: 'PRYSM',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/prysmdevnet/images/prysm.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://www.prysm.network/',
        x: 'https://x.com/PrysmNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uprysm',
            chain_name: 'prysmdevnet'
          },
          chain: {
            channel_id: 'channel-222'
          }
        }]
    }
  ]
};
export default assets;
    