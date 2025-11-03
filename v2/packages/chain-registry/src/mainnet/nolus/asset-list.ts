import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'nolus',
  assets: [
    {
      description: 'The native token of Nolus chain',
      denomUnits: [{
          denom: 'unls',
          exponent: 0
        }, {
          denom: 'nls',
          exponent: 6
        }],
      base: 'unls',
      name: 'Nolus',
      display: 'nls',
      symbol: 'NLS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
      },
      coingeckoId: 'nolus',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
        }],
      socials: {
        website: 'https://nolus.io/',
        x: 'https://x.com/NolusProtocol'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'axlUSDC transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denomUnits: [{
          denom: 'ibc/7FBDBEEEBA9C50C4BCDF7BF438EAB99E64360833D240B32655C96E319559E911',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/7FBDBEEEBA9C50C4BCDF7BF438EAB99E64360833D240B32655C96E319559E911',
      name: 'axlUSDC',
      display: 'usdc',
      symbol: 'axlUSDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858',
            channelId: 'channel-783'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-208/uusdc'
          }
        }],
      images: [
        {
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.svg'
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
      },
      coingeckoId: 'axlusdc'
    },
    {
      description: 'Noble USDC transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denomUnits: [{
          denom: 'ibc/F5FABF52B54E65064B57BF6DBD8E5FAD22CEE9F4B8A57ADBB20CCD0173AA72A4',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/F5FABF52B54E65064B57BF6DBD8E5FAD22CEE9F4B8A57ADBB20CCD0173AA72A4',
      name: 'USDC',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4',
            channelId: 'channel-783'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-750/uusdc'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'noble',
            baseDenom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          theme: {
            circle: true
          }
        }],
      coingeckoId: 'usd-coin'
    },
    {
      description: 'OSMO transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denomUnits: [{
          denom: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'uosmo',
            channelId: 'channel-783'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/uosmo'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'uosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      coingeckoId: 'osmosis'
    },
    {
      description: 'stOSMO transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denomUnits: [{
          denom: 'ibc/AF5559D128329B6C753F15481BEC26E533B847A471074703FA4903E7E6F61BA1',
          exponent: 0,
          aliases: ['stuosmo']
        }, {
          denom: 'stosmo',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/AF5559D128329B6C753F15481BEC26E533B847A471074703FA4903E7E6F61BA1',
      name: 'Osmosis',
      display: 'stosmo',
      symbol: 'stOSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC',
            channelId: 'channel-783'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-326/stuosmo'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
      },
      coingeckoId: 'stride-staked-osmo'
    },
    {
      description: 'ATOM transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denomUnits: [{
          denom: 'ibc/6CDD4663F2F09CD62285E2D45891FC149A3568E316CE3EBBE201A71A78A69388',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/6CDD4663F2F09CD62285E2D45891FC149A3568E316CE3EBBE201A71A78A69388',
      name: 'Atom',
      display: 'atom',
      symbol: 'ATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
            channelId: 'channel-783'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-0/uatom'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      coingeckoId: 'cosmos'
    },
    {
      description: 'stATOM transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denomUnits: [{
          denom: 'ibc/FCFF8B19C61677F3B78E2A5AE3B4A34A8D23858D16905F253B8438B3AFD07FF8',
          exponent: 0,
          aliases: ['ustatom']
        }, {
          denom: 'statom',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/FCFF8B19C61677F3B78E2A5AE3B4A34A8D23858D16905F253B8438B3AFD07FF8',
      name: 'stATOM',
      display: 'statom',
      symbol: 'stATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901',
            channelId: 'channel-783'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-326/stuatom'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
      },
      coingeckoId: 'stride-staked-atom'
    },
    {
      description: 'WETH transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denomUnits: [{
          denom: 'ibc/A7C4A3FB19E88ABE60416125F9189DA680800F4CDD14E3C10C874E022BEFF04C',
          exponent: 0,
          aliases: ['weth-wei']
        }, {
          denom: 'weth',
          exponent: 18,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/A7C4A3FB19E88ABE60416125F9189DA680800F4CDD14E3C10C874E022BEFF04C',
      name: 'WETH',
      display: 'weth',
      symbol: 'WETH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5',
            channelId: 'channel-783'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-208/weth-wei'
          }
        }],
      images: [
        {
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png'
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/eth.axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/eth.axl.svg'
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
      },
      coingeckoId: 'axlweth'
    },
    {
      description: 'WBTC transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denomUnits: [{
          denom: 'ibc/84E70F4A34FB2DE135FD3A04FDDF53B7DA4206080AA785C8BAB7F8B26299A221',
          exponent: 0,
          aliases: ['wbtc-satoshi']
        }, {
          denom: 'wbtc',
          exponent: 8,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/84E70F4A34FB2DE135FD3A04FDDF53B7DA4206080AA785C8BAB7F8B26299A221',
      name: 'WBTC',
      display: 'wbtc',
      symbol: 'WBTC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F',
            channelId: 'channel-783'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-208/wbtc-satoshi'
          }
        }],
      images: [
        {
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png'
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.svg'
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
      },
      coingeckoId: 'axlwbtc'
    },
    {
      description: 'AKT transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denomUnits: [{
          denom: 'ibc/ADC63C00000CA75F909D2BE3ACB5A9980BED3A73B92746E0FCE6C67414055459',
          exponent: 0,
          aliases: ['uakt']
        }, {
          denom: 'akt',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/ADC63C00000CA75F909D2BE3ACB5A9980BED3A73B92746E0FCE6C67414055459',
      name: 'AKT',
      display: 'akt',
      symbol: 'AKT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4',
            channelId: 'channel-783'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-1/uakt'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
      },
      coingeckoId: 'akash-network'
    },
    {
      description: 'AXL transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denomUnits: [{
          denom: 'ibc/1B03A71B8E6F6EF424411DC9326A8E0D25D096E4D2616425CFAF2AF06F0FE717',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/1B03A71B8E6F6EF424411DC9326A8E0D25D096E4D2616425CFAF2AF06F0FE717',
      name: 'AXL',
      display: 'axl',
      symbol: 'AXL',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E',
            channelId: 'channel-783'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-208/uaxl'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      coingeckoId: 'axelar'
    },
    {
      description: 'JUNO transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denomUnits: [{
          denom: 'ibc/4F3E83AB35529435E4BFEA001F5D935E7250133347C4E1010A9C77149EF0394C',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/4F3E83AB35529435E4BFEA001F5D935E7250133347C4E1010A9C77149EF0394C',
      name: 'JUNO',
      display: 'juno',
      symbol: 'JUNO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED',
            channelId: 'channel-783'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-42/ujuno'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
      },
      coingeckoId: 'juno-network'
    },
    {
      description: 'EVMOS transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denomUnits: [{
          denom: 'ibc/A59A9C955F1AB8B76671B00C1A0482C64A6590352944BB5880E5122358F7E1CE',
          exponent: 0,
          aliases: ['aevmos']
        }, {
          denom: 'evmos',
          exponent: 18,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/A59A9C955F1AB8B76671B00C1A0482C64A6590352944BB5880E5122358F7E1CE',
      name: 'EVMOS',
      display: 'evmos',
      symbol: 'EVMOS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A',
            channelId: 'channel-783'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-204/aevmos'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
      },
      coingeckoId: 'evmos'
    },
    {
      description: 'stkATOM transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denomUnits: [{
          denom: 'ibc/DAAD372DB7DD45BBCFA4DDD40CA9793E9D265D1530083AB41A8A0C53C3EBE865',
          exponent: 0,
          aliases: ['stk/uatom']
        }, {
          denom: 'stk/atom',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/DAAD372DB7DD45BBCFA4DDD40CA9793E9D265D1530083AB41A8A0C53C3EBE865',
      name: 'stkATOM',
      display: 'stk/atom',
      symbol: 'stkATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC',
            channelId: 'channel-783'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-4/stk/uatom'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
      },
      coingeckoId: 'stkatom'
    },
    {
      description: 'SCRT transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denomUnits: [{
          denom: 'ibc/EA00FFF0335B07B5CD1530B7EB3D2C710620AE5B168C71AFF7B50532D690E107',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/EA00FFF0335B07B5CD1530B7EB3D2C710620AE5B168C71AFF7B50532D690E107',
      name: 'SCRT',
      display: 'scrt',
      symbol: 'SCRT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A',
            channelId: 'channel-783'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-88/uscrt'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png'
      },
      coingeckoId: 'secret'
    },
    {
      description: 'CRO transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denomUnits: [{
          denom: 'ibc/E1BCC0F7B932E654B1A930F72B76C0678D55095387E2A4D8F00E941A8F82EE48',
          exponent: 0,
          aliases: ['basecro']
        }, {
          denom: 'cro',
          exponent: 8,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/E1BCC0F7B932E654B1A930F72B76C0678D55095387E2A4D8F00E941A8F82EE48',
      name: 'CRO',
      display: 'cro',
      symbol: 'CRO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1',
            channelId: 'channel-783'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-5/basecro'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
      },
      coingeckoId: 'crypto-com-chain'
    },
    {
      description: 'STARS transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denomUnits: [{
          denom: 'ibc/11E3CF372E065ACB1A39C531A3C7E7E03F60B5D0653AD2139D31128ACD2772B5',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/11E3CF372E065ACB1A39C531A3C7E7E03F60B5D0653AD2139D31128ACD2772B5',
      name: 'STARS',
      display: 'stars',
      symbol: 'STARS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4',
            channelId: 'channel-783'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-75/ustars'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
      },
      coingeckoId: 'stargaze'
    },
    {
      description: 'TIA transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denomUnits: [{
          denom: 'ibc/6C349F0EB135C5FA99301758F35B87DB88403D690E5E314AB080401FEE4066E5',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/6C349F0EB135C5FA99301758F35B87DB88403D690E5E314AB080401FEE4066E5',
      name: 'TIA',
      display: 'tia',
      symbol: 'TIA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877',
            channelId: 'channel-783'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-6994/utia'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      },
      coingeckoId: 'celestia'
    },
    {
      description: 'STRD transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denomUnits: [{
          denom: 'ibc/04CA9067228BB51F1C39A506DA00DF07E1496D8308DD21E8EF66AD6169FA722B',
          exponent: 0,
          aliases: ['ustrd']
        }, {
          denom: 'strd',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/04CA9067228BB51F1C39A506DA00DF07E1496D8308DD21E8EF66AD6169FA722B',
      name: 'STRD',
      display: 'strd',
      symbol: 'STRD',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4',
            channelId: 'channel-783'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-326/ustrd'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
      },
      coingeckoId: 'stride'
    },
    {
      description: 'CUDOS transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denomUnits: [{
          denom: 'ibc/BB9810E7FE8836311126F15BE0B20E7463189751840F8C3FEF3AC8F87D8AB7C8',
          exponent: 0,
          aliases: ['acudos']
        }, {
          denom: 'cudos',
          exponent: 18,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/BB9810E7FE8836311126F15BE0B20E7463189751840F8C3FEF3AC8F87D8AB7C8',
      name: 'CUDOS',
      display: 'cudos',
      symbol: 'CUDOS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'ibc/E09ED39F390EC51FA9F3F69BEA08B5BBE6A48B3057B2B1C3467FAAE9E58B021B',
            channelId: 'channel-783'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-298/acudos'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'ibc/E09ED39F390EC51FA9F3F69BEA08B5BBE6A48B3057B2B1C3467FAAE9E58B021B'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg'
      },
      coingeckoId: 'cudos'
    },
    {
      description: 'Alloyed BTC transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denomUnits: [{
          denom: 'ibc/E45CFCB959F4F6D1065B7033EE49A88E606E6AD82E75725219B3D68B0FA89987',
          exponent: 0
        }, {
          denom: 'allBTC',
          exponent: 8,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/E45CFCB959F4F6D1065B7033EE49A88E606E6AD82E75725219B3D68B0FA89987',
      name: 'Alloyed BTC',
      display: 'allBTC',
      symbol: 'BTC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo1z6r6qdknhgsc0zeracktgpcxf43j6sekq07nw8sxduc9lg0qjjlqfu25e3/alloyed/allBTC',
            channelId: 'channel-783'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/factory/osmo1z6r6qdknhgsc0zeracktgpcxf43j6sekq07nw8sxduc9lg0qjjlqfu25e3/alloyed/allBTC'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo1z6r6qdknhgsc0zeracktgpcxf43j6sekq07nw8sxduc9lg0qjjlqfu25e3/alloyed/allBTC'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.svg',
          theme: {
            circle: true
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.svg'
      }
    },
    {
      description: 'Alloyed SOL transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denomUnits: [{
          denom: 'ibc/762E1E45658845A12E214A91C3C05FDFC5951D60404FAADA225A369A96DCD9A9',
          exponent: 0
        }, {
          denom: 'allSOL',
          exponent: 9,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/762E1E45658845A12E214A91C3C05FDFC5951D60404FAADA225A369A96DCD9A9',
      name: 'Alloyed SOL',
      display: 'allSOL',
      symbol: 'SOL',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo1n3n75av8awcnw4jl62n3l48e6e4sxqmaf97w5ua6ddu4s475q5qq9udvx4/alloyed/allSOL',
            channelId: 'channel-783'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/factory/osmo1n3n75av8awcnw4jl62n3l48e6e4sxqmaf97w5ua6ddu4s475q5qq9udvx4/alloyed/allSOL'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo1n3n75av8awcnw4jl62n3l48e6e4sxqmaf97w5ua6ddu4s475q5qq9udvx4/alloyed/allSOL'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.svg',
          theme: {
            circle: true
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.svg'
      }
    },
    {
      description: 'OM transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denomUnits: [{
          denom: 'ibc/B92B80E837E4B1665024B7674D382AF07FE5D8D89797A0FEAF5356C8F173425C',
          exponent: 0,
          aliases: ['uom']
        }, {
          denom: 'om',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/B92B80E837E4B1665024B7674D382AF07FE5D8D89797A0FEAF5356C8F173425C',
      name: 'Mantra OM',
      display: 'om',
      symbol: 'OM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'ibc/164807F6226F91990F358C6467EEE8B162E437BDCD3DADEC3F0CE20693720795',
            channelId: 'channel-783'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-85077/uom'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'ibc/164807F6226F91990F358C6467EEE8B162E437BDCD3DADEC3F0CE20693720795'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg',
          theme: {
            circle: true
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg'
      },
      coingeckoId: 'mantra-dao'
    },
    {
      description: 'NIL transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denomUnits: [{
          denom: 'ibc/56AD715B6EBE187ACE16DA331CCFFE41655B42373FBE4A43748DEE16A95EE895',
          exponent: 0,
          aliases: ['unil']
        }, {
          denom: 'nil',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/56AD715B6EBE187ACE16DA331CCFFE41655B42373FBE4A43748DEE16A95EE895',
      name: 'NIL',
      display: 'nil',
      symbol: 'NIL',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'ibc/D37860EB1D2669F34B47A7BC48885853D5AB23642EF958CDEA35EB6074087064',
            channelId: 'channel-783'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-783/transfer/channel-98416/unil'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'ibc/D37860EB1D2669F34B47A7BC48885853D5AB23642EF958CDEA35EB6074087064'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nillion/images/nil.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nillion/images/nil.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nillion/images/nil.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nillion/images/nil.svg'
      },
      coingeckoId: 'nillion'
    },
    {
      description: 'XION transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denomUnits: [{
          denom: 'ibc/B8E95841C22213AC4E3EF000CB9D1D3B06FFAA1784FCE1169C6E92982BCC89B4',
          exponent: 0,
          aliases: ['uxion']
        }, {
          denom: 'xion',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/B8E95841C22213AC4E3EF000CB9D1D3B06FFAA1784FCE1169C6E92982BCC89B4',
      name: 'XION',
      display: 'xion',
      symbol: 'XION',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'ibc/2E3784772E70F7B3A638BA88F65C8BE125D3CDB6E28C6AABC51098C94F5E16A5',
            channelId: 'channel-783'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-783/transfer/channel-89321/uxion'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'ibc/2E3784772E70F7B3A638BA88F65C8BE125D3CDB6E28C6AABC51098C94F5E16A5'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
      },
      coingeckoId: 'xion-2'
    },
    {
      description: 'Alloyed ETH transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denomUnits: [{
          denom: 'ibc/7879B1CBBD2E07347002334792368E65C11A7D1629297D04B6A2155F557E02D4',
          exponent: 0
        }, {
          denom: 'allETH',
          exponent: 18,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/7879B1CBBD2E07347002334792368E65C11A7D1629297D04B6A2155F557E02D4',
      name: 'Alloyed ETH',
      display: 'allETH',
      symbol: 'ETH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo1k6c8jln7ejuqwtqmay3yvzrg3kueaczl96pk067ldg8u835w0yhsw27twm/alloyed/allETH',
            channelId: 'channel-783'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/factory/osmo1k6c8jln7ejuqwtqmay3yvzrg3kueaczl96pk067ldg8u835w0yhsw27twm/alloyed/allETH'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo1k6c8jln7ejuqwtqmay3yvzrg3kueaczl96pk067ldg8u835w0yhsw27twm/alloyed/allETH'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
      }
    },
    {
      description: 'BABY transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denomUnits: [{
          denom: 'ibc/BE816110CD184D1DEE3BB03B1D5C509512A4C0A14445DC4A3D22A67E68ECE212',
          exponent: 0,
          aliases: ['ubbn']
        }, {
          denom: 'baby',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/BE816110CD184D1DEE3BB03B1D5C509512A4C0A14445DC4A3D22A67E68ECE212',
      name: 'BABY',
      display: 'baby',
      symbol: 'BABY',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'ibc/EC3A4ACBA1CFBEE698472D3563B70985AEA5A7144C319B61B3EBDFB57B5E1535',
            channelId: 'channel-783'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-101635/ubbn'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'ibc/EC3A4ACBA1CFBEE698472D3563B70985AEA5A7144C319B61B3EBDFB57B5E1535'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/logo.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/logo.svg'
      }
    },
    {
      description: 'dNTRN transferred from the Neutron mainnet that is supported on the Nolus chain',
      denomUnits: [{
          denom: 'ibc/2DA920A297BE3FD54A8793F69CC9CBC6B331FFD0FAB500A96637218BA7D5C64E',
          exponent: 0
        }, {
          denom: 'dNTRN',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/2DA920A297BE3FD54A8793F69CC9CBC6B331FFD0FAB500A96637218BA7D5C64E',
      name: 'dNTRN',
      display: 'dNTRN',
      symbol: 'dNTRN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1frc0p5czd9uaaymdkug2njz7dc7j65jxukp9apmt9260a8egujkspms2t2/udntrn',
            channelId: 'channel-44'
          },
          chain: {
            channelId: 'channel-3839',
            path: 'transfer/channel-3839/factory/neutron1frc0p5czd9uaaymdkug2njz7dc7j65jxukp9apmt9260a8egujkspms2t2/udntrn'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1frc0p5czd9uaaymdkug2njz7dc7j65jxukp9apmt9260a8egujkspms2t2/udntrn'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/dNTRN.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/dNTRN.svg'
      }
    },
    {
      description: 'NTRN transferred from the Neutron mainnet that is supported on the Nolus chain',
      denomUnits: [{
          denom: 'ibc/3D6BC6E049CAEB905AC97031A42800588C58FB471EBDC7A3530FFCD0C3DC9E09',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/3D6BC6E049CAEB905AC97031A42800588C58FB471EBDC7A3530FFCD0C3DC9E09',
      name: 'NTRN',
      display: 'ntrn',
      symbol: 'NTRN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'untrn',
            channelId: 'channel-44'
          },
          chain: {
            channelId: 'channel-3839',
            path: 'transfer/channel-3839/untrn'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'neutron',
            baseDenom: 'untrn'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg',
          theme: {
            circle: true
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
      },
      coingeckoId: 'neutron-3'
    },
    {
      description: 'DYDX transferred from the Neutron mainnet that is supported on the Nolus chain',
      denomUnits: [{
          denom: 'ibc/6DF8CF5C976851D152E2C7270B0AB25C4F9D64C0A46513A68D6CBB2662A98DF4',
          exponent: 0,
          aliases: ['adydx']
        }, {
          denom: 'dydx',
          exponent: 18,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/6DF8CF5C976851D152E2C7270B0AB25C4F9D64C0A46513A68D6CBB2662A98DF4',
      name: 'DYDX',
      display: 'dydx',
      symbol: 'DYDX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130',
            channelId: 'channel-44'
          },
          chain: {
            channelId: 'channel-3839',
            path: 'transfer/channel-3839/transfer/channel-48/adydx'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'neutron',
            baseDenom: 'ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
      },
      coingeckoId: 'dydx-chain'
    },
    {
      description: 'dATOM transferred from the Neutron mainnet that is supported on the Nolus chain',
      denomUnits: [{
          denom: 'ibc/EB08474FFC49B6BB2F03F7D9B08697138F4DA53347CA1AB718C8BCFBB58C1B2B',
          exponent: 0,
          aliases: ['udatom']
        }, {
          denom: 'dATOM',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/EB08474FFC49B6BB2F03F7D9B08697138F4DA53347CA1AB718C8BCFBB58C1B2B',
      name: 'dATOM',
      display: 'dATOM',
      symbol: 'dATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1k6hr0f83e7un2wjf29cspk7j69jrnskk65k3ek2nj9dztrlzpj6q00rtsa/udatom',
            channelId: 'channel-44'
          },
          chain: {
            channelId: 'channel-3839',
            path: 'transfer/channel-3839/factory/neutron1k6hr0f83e7un2wjf29cspk7j69jrnskk65k3ek2nj9dztrlzpj6q00rtsa/udatom'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1k6hr0f83e7un2wjf29cspk7j69jrnskk65k3ek2nj9dztrlzpj6q00rtsa/udatom'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/dATOM.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/dATOM.svg'
      },
      coingeckoId: 'drop-staked-atom'
    },
    {
      description: 'Noble USDC transferred from the Neutron mainnet that is supported on the Nolus chain',
      denomUnits: [{
          denom: 'ibc/18161D8EFBD00FF5B7683EF8E923B8913453567FBE3FB6672D75712B0DEB6682',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/18161D8EFBD00FF5B7683EF8E923B8913453567FBE3FB6672D75712B0DEB6682',
      name: 'USDC',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'ibc/B559A80D62249C8AA07A380E2A2BEA6E5CA9A6F079C912C3A9E9B494105E4F81',
            channelId: 'channel-44'
          },
          chain: {
            channelId: 'channel-3839',
            path: 'transfer/channel-3839/transfer/channel-30/uusdc'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'noble',
            baseDenom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          theme: {
            circle: true
          }
        }],
      coingeckoId: 'usd-coin'
    }
  ]
};
export default info;