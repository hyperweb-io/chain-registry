import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'babylon',
  assets: [
    {
      description: 'The native token of Babylon Genesis.',
      extendedDescription: 'Babylon Genesis enables Bitcoin tokens to be used as an economic security layer for Proof of Stake (PoS) systems without relying on bridges, wrapping, or third-party custody.',
      denomUnits: [{
          denom: 'ubbn',
          exponent: 0
        }, {
          denom: 'BABY',
          exponent: 6
        }],
      base: 'ubbn',
      name: 'BABY',
      display: 'BABY',
      symbol: 'BABY',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/logo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/logo.svg'
        }],
      coingeckoId: 'babylon',
      typeAsset: 'sdk.coin',
      socials: {
        website: 'https://babylonlabs.io/',
        x: 'https://x.com/babylonlabs_io'
      }
    },
    {
      denomUnits: [{
          denom: 'ibc/65D0BEC6DAD96C7F5043D1E54E54B6BB5D5B3AEC3FF6CEBB75B9E059F3580EA3',
          exponent: 0
        }, {
          denom: 'USDC',
          exponent: 6
        }],
      base: 'ibc/65D0BEC6DAD96C7F5043D1E54E54B6BB5D5B3AEC3FF6CEBB75B9E059F3580EA3',
      name: 'USDC',
      display: 'USDC',
      symbol: 'USDC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      coingeckoId: 'usd-coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdc',
            channelId: 'channel-132'
          },
          chain: {
            channelId: 'channel-1',
            path: 'transfer/channel-1/uusdc'
          }
        }],
      typeAsset: 'ics20',
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
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/C0E66D1C81D8AAF0E6896E05190FDFBC222367148F86AC3EA679C28327A763CD',
          exponent: 0
        }, {
          denom: 'AXL',
          exponent: 6
        }],
      base: 'ibc/C0E66D1C81D8AAF0E6896E05190FDFBC222367148F86AC3EA679C28327A763CD',
      name: 'AXL',
      display: 'AXL',
      symbol: 'AXL',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      coingeckoId: 'axelar',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'uaxl',
            channelId: 'channel-175'
          },
          chain: {
            channelId: 'channel-2',
            path: 'transfer/channel-2/uaxl'
          }
        }],
      typeAsset: 'ics20',
      images: [{
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'uaxl'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/4805A17C742D2325715167EA1167974821888307CC62066D6CFA2BD0F724821D',
          exponent: 0
        }, {
          denom: 'eBTC',
          exponent: 8
        }],
      base: 'ibc/4805A17C742D2325715167EA1167974821888307CC62066D6CFA2BD0F724821D',
      name: 'ether.fi BTC',
      display: 'eBTC',
      symbol: 'eBTC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eBTC.png'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'ibc/6F8F0E9D472BF053261F2DEBE521801B703372777F3923B48DAE55D4F1212B5F',
            channelId: 'channel-1341'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/08-wasm-1369/0x657e8c867d8b37dcc18fa4caead9c45eb088c642'
          }
        }],
      typeAsset: 'ics20',
      images: [{
          imageSync: {
            chainName: 'cosmoshub',
            baseDenom: 'ibc/6F8F0E9D472BF053261F2DEBE521801B703372777F3923B48DAE55D4F1212B5F'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eBTC.png'
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/49F46032AC74BE0BC972A87C5D031F7F65254E5AC59F09440B9435DF67787227',
          exponent: 0
        }, {
          denom: 'stBTC',
          exponent: 18
        }],
      base: 'ibc/49F46032AC74BE0BC972A87C5D031F7F65254E5AC59F09440B9435DF67787227',
      name: 'Lorenzo stBTC',
      display: 'stBTC',
      symbol: 'stBTC',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/stbtc.svg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'ibc/286A30F7F093357CE113A2E3B9A2E497F7A691CAFC624ABC615DE147DCE9FD17',
            channelId: 'channel-1341'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/08-wasm-1369/0xf6718b2701d4a6498ef77d7c152b2137ab28b8a3'
          }
        }],
      typeAsset: 'ics20',
      images: [{
          imageSync: {
            chainName: 'cosmoshub',
            baseDenom: 'ibc/286A30F7F093357CE113A2E3B9A2E497F7A691CAFC624ABC615DE147DCE9FD17'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/stbtc.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/67144554C6EE6D0FCF43CBA0DF18D821E2818FD1F320B93AB0349E741A0DC850',
          exponent: 0
        }, {
          denom: 'kBTC',
          exponent: 18
        }],
      base: 'ibc/67144554C6EE6D0FCF43CBA0DF18D821E2818FD1F320B93AB0349E741A0DC850',
      name: 'Kinza Babylon Staked BTC',
      display: 'kBTC',
      symbol: 'kBTC',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/kBTC.svg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'ibc/AE65FB498AFB35CC06301BEE6EA8063DC41CE04D80A8D167258B73D7A863DA8D',
            channelId: 'channel-1341'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/08-wasm-1369/0x9356f6d95b8e109f4b7ce3e49d672967d3b48383'
          }
        }],
      typeAsset: 'ics20',
      images: [{
          imageSync: {
            chainName: 'cosmoshub',
            baseDenom: 'ibc/AE65FB498AFB35CC06301BEE6EA8063DC41CE04D80A8D167258B73D7A863DA8D'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/kBTC.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/6E7CA61C5656D3F3007535F035386AEB8281833743CFCE0F069213331CEBBE1A',
          exponent: 0
        }, {
          denom: 'uniBTC',
          exponent: 8
        }],
      base: 'ibc/6E7CA61C5656D3F3007535F035386AEB8281833743CFCE0F069213331CEBBE1A',
      name: 'uniBTC',
      display: 'uniBTC',
      symbol: 'uniBTC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'ibc/9EE1F80BA2AE01138A40D656BBB42D11B1720000D6F64FC5988E412B6EDB4F71',
            channelId: 'channel-1341'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/08-wasm-1369/0x004e9c3ef86bc1ca1f0bb5c7662861ee93350568'
          }
        }],
      typeAsset: 'ics20',
      images: [{
          imageSync: {
            chainName: 'cosmoshub',
            baseDenom: 'ibc/9EE1F80BA2AE01138A40D656BBB42D11B1720000D6F64FC5988E412B6EDB4F71'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uniBTC_200px.png',
          theme: {
            circle: false
          }
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/F15348F47575AAFE2BEFF8369CBE3647AE9DC06909CDBF8C97E48ACF7055E459',
          exponent: 0
        }, {
          denom: 'mBTC',
          exponent: 8
        }],
      base: 'ibc/F15348F47575AAFE2BEFF8369CBE3647AE9DC06909CDBF8C97E48ACF7055E459',
      name: 'mBTC',
      display: 'mBTC',
      symbol: 'mBTC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'ibc/6583B66D1450B5A0E997C85A4048749ADCBD745562D62F3CC1CEE5D41B5814D1',
            channelId: 'channel-1341'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/08-wasm-1369/0xbdf245957992bfbc62b07e344128a1eec7b7ee3f'
          }
        }],
      typeAsset: 'ics20',
      images: [{
          imageSync: {
            chainName: 'cosmoshub',
            baseDenom: 'ibc/6583B66D1450B5A0E997C85A4048749ADCBD745562D62F3CC1CEE5D41B5814D1'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mbtc.png'
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/89EE10FCF78800B572BAAC7080AEFA301B5F3BBC51C5371E907EB129C5B900E7',
          exponent: 0
        }, {
          denom: 'LBTC',
          exponent: 8
        }],
      base: 'ibc/89EE10FCF78800B572BAAC7080AEFA301B5F3BBC51C5371E907EB129C5B900E7',
      name: 'LBTC',
      display: 'LBTC',
      symbol: 'LBTC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/lbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/lbtc.svg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'ibc/DBD9E339E1B093A052D76BECFFDE8435EAC114CF2133346B4D691F3F2068C957',
            channelId: 'channel-1341'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-1340/uclbtc'
          }
        }],
      typeAsset: 'ics20',
      images: [{
          imageSync: {
            chainName: 'cosmoshub',
            baseDenom: 'ibc/DBD9E339E1B093A052D76BECFFDE8435EAC114CF2133346B4D691F3F2068C957'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/lbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/lbtc.svg',
          theme: {
            circle: true
          }
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/954F25C3AA0DCF2917393FB89D778F95815B0568EB093C43BA0B24CBD99CBFFB',
          exponent: 0
        }, {
          denom: 'pumpBTC',
          exponent: 8
        }],
      base: 'ibc/954F25C3AA0DCF2917393FB89D778F95815B0568EB093C43BA0B24CBD99CBFFB',
      name: 'pumpBTC',
      display: 'pumpBTC',
      symbol: 'pumpBTC',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pumpBTC.svg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'ibc/9DA8B22BC0E6D76C2D621EF008168BC163B09A517697B14B68DE75382043152E',
            channelId: 'channel-1341'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/08-wasm-1369/0xf469fbd2abcd6b9de8e169d128226c0fc90a012e'
          }
        }],
      typeAsset: 'ics20',
      images: [{
          imageSync: {
            chainName: 'cosmoshub',
            baseDenom: 'ibc/9DA8B22BC0E6D76C2D621EF008168BC163B09A517697B14B68DE75382043152E'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pumpBTC.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/2CC08A10459B40B0251B8CB9C036C98BED1ABBD5F03772E371DCD0FFDA3EC7F3',
          exponent: 0
        }, {
          denom: 'SolvBTC',
          exponent: 18
        }],
      base: 'ibc/2CC08A10459B40B0251B8CB9C036C98BED1ABBD5F03772E371DCD0FFDA3EC7F3',
      name: 'SolvBTC',
      display: 'SolvBTC',
      symbol: 'SolvBTC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/solvBTC.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/solvBTC.svg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'ibc/0C4417F123459B47B6933939BF6F128C362B0C1F9EDA6A6EBC08860E4672AF7E',
            channelId: 'channel-1341'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/08-wasm-1369/0x7a56e1c57c7475ccf742a1832b028f0456652f97'
          }
        }],
      typeAsset: 'ics20',
      images: [{
          imageSync: {
            chainName: 'cosmoshub',
            baseDenom: 'ibc/0C4417F123459B47B6933939BF6F128C362B0C1F9EDA6A6EBC08860E4672AF7E'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/solvBTC.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/solvBTC.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/E06DD7851FC6E344788BD87B2E53384D676374FF0168CEFEDE072E4FB83037A1',
          exponent: 0
        }, {
          denom: 'xSolvBTC',
          exponent: 18
        }],
      base: 'ibc/E06DD7851FC6E344788BD87B2E53384D676374FF0168CEFEDE072E4FB83037A1',
      name: 'xSolvBTC',
      display: 'xSolvBTC',
      symbol: 'xSolvBTC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xSolvBTC.png'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'ibc/486D45458E018B59D1F23ADD116D21A881D8DA3BC348B9E0E22354CA031C977E',
            channelId: 'channel-1341'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/08-wasm-1369/0xd9d920aa40f578ab794426f5c90f6c731d159def'
          }
        }],
      typeAsset: 'ics20',
      images: [{
          imageSync: {
            chainName: 'cosmoshub',
            baseDenom: 'ibc/486D45458E018B59D1F23ADD116D21A881D8DA3BC348B9E0E22354CA031C977E'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xSolvBTC.png'
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/88386AC48152D48B34B082648DF836F975506F0B57DBBFC10A54213B1BF484CB',
          exponent: 0
        }, {
          denom: 'WBTC',
          exponent: 8
        }],
      base: 'ibc/88386AC48152D48B34B082648DF836F975506F0B57DBBFC10A54213B1BF484CB',
      name: 'Wrapped BTC',
      display: 'WBTC',
      symbol: 'WBTC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'ibc/D742E8566B0B8CC8F569D950051C09CF57988A88F0E45574BFB3079D41DE6462',
            channelId: 'channel-1341'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/08-wasm-1369/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          }
        }],
      typeAsset: 'ics20',
      images: [{
          imageSync: {
            chainName: 'cosmoshub',
            baseDenom: 'ibc/D742E8566B0B8CC8F569D950051C09CF57988A88F0E45574BFB3079D41DE6462'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/FAE7862FCB5DC95168C415A6EE63DA8C38389EA1EAFF51C82F446C80C879156E',
          exponent: 0
        }, {
          denom: 'enzobtc',
          exponent: 8
        }],
      base: 'ibc/FAE7862FCB5DC95168C415A6EE63DA8C38389EA1EAFF51C82F446C80C879156E',
      name: 'Lorenzo Wrapped Bitcoin',
      display: 'enzobtc',
      symbol: 'enzoBTC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'ibc/9CB24EF57DF00EFFCE3B52FC1225EDEDF98B31DB8C792B43C7E3D4AD9B3982CF',
            channelId: 'channel-1341'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/08-wasm-1369/0x6a9a65b84843f5fd4ac9a0471c4fc11afffbce4a'
          }
        }],
      typeAsset: 'ics20',
      images: [{
          imageSync: {
            chainName: 'cosmoshub',
            baseDenom: 'ibc/9CB24EF57DF00EFFCE3B52FC1225EDEDF98B31DB8C792B43C7E3D4AD9B3982CF'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/lorenzo-wrapped-bitcoin.png'
        }]
    },
    {
      description: 'Liquid staking token from Cube by SatLayer',
      denomUnits: [{
          denom: 'cw20:bbn17y5zvse30629t7r37xsdj73xsqp7qsdr7gpnh966wf5aslpn66rq5ekwsz',
          exponent: 0
        }, {
          denom: 'cBABY',
          exponent: 6
        }],
      address: 'bbn17y5zvse30629t7r37xsdj73xsqp7qsdr7gpnh966wf5aslpn66rq5ekwsz',
      base: 'cw20:bbn17y5zvse30629t7r37xsdj73xsqp7qsdr7gpnh966wf5aslpn66rq5ekwsz',
      name: 'Cube Baby',
      display: 'cBABY',
      symbol: 'cBABY',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/cbaby.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/cbaby.svg'
        }],
      coingeckoId: 'cube-staked-baby',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'babylon',
            baseDenom: 'ubbn'
          },
          provider: 'Cube by SatLayer'
        }],
      typeAsset: 'cw20',
      socials: {
        website: 'https://www.satlayer.xyz',
        github: 'https://github.com/satlayer',
        telegram: 'https://t.me/satlayerannouncements',
        discord: 'https://discord.com/invite/satlayer',
        x: 'https://x.com/satlayer'
      }
    },
    {
      base: 'cw20:bbn1s7jzz7cyuqmy5xpr07yepka5ngktexsferu2cr4xeww897ftj77sv30f5s',
      name: 'Babylon Escher LST',
      address: 'bbn1s7jzz7cyuqmy5xpr07yepka5ngktexsferu2cr4xeww897ftj77sv30f5s',
      symbol: 'eBABY',
      display: 'eBABY',
      typeAsset: 'cw20',
      denomUnits: [{
          denom: 'cw20:bbn1s7jzz7cyuqmy5xpr07yepka5ngktexsferu2cr4xeww897ftj77sv30f5s',
          exponent: 0
        }, {
          denom: 'eBABY',
          exponent: 6
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/eBABY.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/eBABY.svg'
        }],
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'babylon',
            baseDenom: 'ubbn'
          },
          provider: 'Escher'
        }]
    },
    {
      denomUnits: [{
          denom: 'cw20:bbn1fkz8dcvsqyfy3apfh8ufexdn4ag00w5jts99zjw9nkjue0zhs4ts6hfdz2',
          exponent: 0
        }, {
          denom: 'uniBTC',
          exponent: 8
        }],
      base: 'cw20:bbn1fkz8dcvsqyfy3apfh8ufexdn4ag00w5jts99zjw9nkjue0zhs4ts6hfdz2',
      address: 'bbn1fkz8dcvsqyfy3apfh8ufexdn4ag00w5jts99zjw9nkjue0zhs4ts6hfdz2',
      name: 'Universal BTC',
      display: 'uniBTC',
      symbol: 'uniBTC',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uniBTC.svg'
      },
      typeAsset: 'cw20',
      traces: [{
          type: 'ibc-bridge',
          provider: 'Union',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x004e9c3ef86bc1ca1f0bb5c7662861ee93350568',
            channelId: '1'
          },
          chain: {
            channelId: '3',
            path: '0'
          }
        }],
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uniBTC.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'cw20:bbn1z5gne4pe84tqerdrjta5sp966m98zgg5czqe4xu2yzxqfqv5tfkqed0jyy',
          exponent: 0
        }, {
          denom: 'LBTC',
          exponent: 8
        }],
      base: 'cw20:bbn1z5gne4pe84tqerdrjta5sp966m98zgg5czqe4xu2yzxqfqv5tfkqed0jyy',
      address: 'bbn1z5gne4pe84tqerdrjta5sp966m98zgg5czqe4xu2yzxqfqv5tfkqed0jyy',
      name: 'Lombard Staked Bitcoin',
      display: 'LBTC',
      symbol: 'LBTC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/lbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/lbtc.svg'
      },
      typeAsset: 'cw20',
      traces: [{
          type: 'ibc-bridge',
          provider: 'Union',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x8236a87084f8B84306f72007F36F2618A5634494',
            channelId: '1'
          },
          chain: {
            channelId: '3',
            path: '0'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x8236a87084f8B84306f72007F36F2618A5634494'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/lbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/lbtc.svg',
          theme: {
            circle: true
          }
        }]
    },
    {
      denomUnits: [{
          denom: 'cw20:bbn1tyvxlr8qjt7yx48lhhle7xzxfxkyqwzkaxey3jekrl0gql260jlqlxgfst',
          exponent: 0
        }, {
          denom: 'SolvBTC',
          exponent: 18
        }],
      base: 'cw20:bbn1tyvxlr8qjt7yx48lhhle7xzxfxkyqwzkaxey3jekrl0gql260jlqlxgfst',
      address: 'bbn1tyvxlr8qjt7yx48lhhle7xzxfxkyqwzkaxey3jekrl0gql260jlqlxgfst',
      name: 'Solv BTC',
      display: 'SolvBTC',
      symbol: 'SolvBTC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/solvBTC.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/solvBTC.svg'
      },
      typeAsset: 'cw20',
      traces: [{
          type: 'ibc-bridge',
          provider: 'Union',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x7a56e1c57c7475ccf742a1832b028f0456652f97',
            channelId: '1'
          },
          chain: {
            channelId: '3',
            path: '0'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x7a56e1c57c7475ccf742a1832b028f0456652f97'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/solvBTC.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/solvBTC.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'cw20:bbn1ccylwef8yfhafxpmtzq4ps24kxce9cfnz0wnkucsvf2rylfh0jzswhk5ks',
          exponent: 0
        }, {
          denom: 'stBTC',
          exponent: 18
        }],
      base: 'cw20:bbn1ccylwef8yfhafxpmtzq4ps24kxce9cfnz0wnkucsvf2rylfh0jzswhk5ks',
      address: 'bbn1ccylwef8yfhafxpmtzq4ps24kxce9cfnz0wnkucsvf2rylfh0jzswhk5ks',
      name: 'Lorenzo stBTC',
      display: 'stBTC',
      symbol: 'stBTC',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/stbtc.svg'
      },
      typeAsset: 'cw20',
      traces: [{
          type: 'ibc-bridge',
          provider: 'Union',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xf6718b2701d4a6498ef77d7c152b2137ab28b8a3',
            channelId: '1'
          },
          chain: {
            channelId: '3',
            path: '0'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xf6718b2701d4a6498ef77d7c152b2137ab28b8a3'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/stbtc.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'cw20:bbn1rgsgnu9hcssn97hprmavtt58vt3qg5y4qha4ky6q09urczsuzwlss60thh',
          exponent: 0
        }, {
          denom: 'eBTC',
          exponent: 8
        }],
      base: 'cw20:bbn1rgsgnu9hcssn97hprmavtt58vt3qg5y4qha4ky6q09urczsuzwlss60thh',
      address: 'bbn1rgsgnu9hcssn97hprmavtt58vt3qg5y4qha4ky6q09urczsuzwlss60thh',
      name: 'ether.fi BTC',
      display: 'eBTC',
      symbol: 'eBTC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eBTC.png'
      },
      typeAsset: 'cw20',
      traces: [{
          type: 'ibc-bridge',
          provider: 'Union',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x657e8c867d8b37dcc18fa4caead9c45eb088c642',
            channelId: '1'
          },
          chain: {
            channelId: '3',
            path: '0'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x657e8c867d8b37dcc18fa4caead9c45eb088c642'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eBTC.png'
        }]
    },
    {
      denomUnits: [{
          denom: 'cw20:bbn1j7yz208yls9v5vcgsekwaf096wk2ysyrdn0u747868v80fd05tjsalq9ll',
          exponent: 0
        }, {
          denom: 'mBTC',
          exponent: 8
        }],
      base: 'cw20:bbn1j7yz208yls9v5vcgsekwaf096wk2ysyrdn0u747868v80fd05tjsalq9ll',
      address: 'bbn1j7yz208yls9v5vcgsekwaf096wk2ysyrdn0u747868v80fd05tjsalq9ll',
      name: 'Liquid Staked BTC',
      display: 'mBTC',
      symbol: 'mBTC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mbtc.png'
      },
      typeAsset: 'cw20',
      traces: [{
          type: 'ibc-bridge',
          provider: 'Union',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xbdf245957992bfbc62b07e344128a1eec7b7ee3f',
            channelId: '1'
          },
          chain: {
            channelId: '3',
            path: '0'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xbdf245957992bfbc62b07e344128a1eec7b7ee3f'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mbtc.png'
        }]
    },
    {
      denomUnits: [{
          denom: 'cw20:bbn1jr0xpgy90hqmaafdq3jtapr2p63tv59s9hcced5j4qqgs5ed9x7sr3sv0d',
          exponent: 0
        }, {
          denom: 'pumpBTC',
          exponent: 8
        }],
      base: 'cw20:bbn1jr0xpgy90hqmaafdq3jtapr2p63tv59s9hcced5j4qqgs5ed9x7sr3sv0d',
      address: 'bbn1jr0xpgy90hqmaafdq3jtapr2p63tv59s9hcced5j4qqgs5ed9x7sr3sv0d',
      name: 'pumpBTC',
      display: 'pumpBTC',
      symbol: 'pumpBTC',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pumpBTC.svg'
      },
      typeAsset: 'cw20',
      traces: [{
          type: 'ibc-bridge',
          provider: 'Union',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xf469fbd2abcd6b9de8e169d128226c0fc90a012e',
            channelId: '1'
          },
          chain: {
            channelId: '3',
            path: '0'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xf469fbd2abcd6b9de8e169d128226c0fc90a012e'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pumpBTC.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'cw20:bbn1300se0vwue77hn6s8wph64ey6d55zaf48jrveg9wafsquncn3e4scssgvd',
          exponent: 0
        }, {
          denom: 'WETH',
          exponent: 18
        }],
      base: 'cw20:bbn1300se0vwue77hn6s8wph64ey6d55zaf48jrveg9wafsquncn3e4scssgvd',
      address: 'bbn1300se0vwue77hn6s8wph64ey6d55zaf48jrveg9wafsquncn3e4scssgvd',
      name: 'Wrapped Ether',
      display: 'WETH',
      symbol: 'WETH',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
      },
      typeAsset: 'cw20',
      traces: [{
          type: 'ibc-bridge',
          provider: 'Union',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            channelId: '1'
          },
          chain: {
            channelId: '3',
            path: '0'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'cw20:bbn1j2nchmpuhkq0yj93g84txe33j5lhw2y7p3anhqjhvamqxsev6rmsneu85x',
          exponent: 0
        }, {
          denom: 'satUniBTC.e',
          exponent: 8
        }],
      base: 'cw20:bbn1j2nchmpuhkq0yj93g84txe33j5lhw2y7p3anhqjhvamqxsev6rmsneu85x',
      address: 'bbn1j2nchmpuhkq0yj93g84txe33j5lhw2y7p3anhqjhvamqxsev6rmsneu85x',
      name: 'SatLayer uniBTC Bridged',
      display: 'satUniBTC.e',
      symbol: 'satUniBTC.e',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uniBTC.svg'
      },
      typeAsset: 'cw20',
      traces: [{
          type: 'ibc-bridge',
          provider: 'Union',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xF7De2B7afdb07AA5dD143180Ed758165821E076e',
            channelId: '1'
          },
          chain: {
            channelId: '3',
            path: '0'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xF7De2B7afdb07AA5dD143180Ed758165821E076e'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uniBTC.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'cw20:bbn1rl75n93kk075clrt72hqa7md6mwl78u28sghs380xuvlmksw6x3q07n2tc',
          exponent: 0
        }, {
          denom: 'satXSolvBTC.e',
          exponent: 18
        }],
      base: 'cw20:bbn1rl75n93kk075clrt72hqa7md6mwl78u28sghs380xuvlmksw6x3q07n2tc',
      address: 'bbn1rl75n93kk075clrt72hqa7md6mwl78u28sghs380xuvlmksw6x3q07n2tc',
      name: 'SatLayer xSatSolvBTC Bridged',
      display: 'satXSolvBTC.e',
      symbol: 'satXSolvBTC.e',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xSolvBTC.png'
      },
      typeAsset: 'cw20',
      traces: [{
          type: 'ibc-bridge',
          provider: 'Union',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x17140b69FfaDfF9e87BF1D86D99119ee10AD24ff',
            channelId: '1'
          },
          chain: {
            channelId: '3',
            path: '0'
          }
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xSolvBTC.png'
        }]
    },
    {
      denomUnits: [{
          denom: 'cw20:bbn1rluxqjaqsczmdaxl4kr0qa42pp78zszlmdrt248hel59z3fh8y9qrh4dvq',
          exponent: 0
        }, {
          denom: 'satLBTC.e',
          exponent: 8
        }],
      base: 'cw20:bbn1rluxqjaqsczmdaxl4kr0qa42pp78zszlmdrt248hel59z3fh8y9qrh4dvq',
      address: 'bbn1rluxqjaqsczmdaxl4kr0qa42pp78zszlmdrt248hel59z3fh8y9qrh4dvq',
      name: 'SatLayer LBTC Bridged',
      display: 'satLBTC.e',
      symbol: 'satLBTC.e',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/lbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/lbtc.svg'
      },
      typeAsset: 'cw20',
      traces: [{
          type: 'ibc-bridge',
          provider: 'Union',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x067e11Ac5471C853aea205B3C1933a5f6367152F',
            channelId: '1'
          },
          chain: {
            channelId: '3',
            path: '0'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x067e11Ac5471C853aea205B3C1933a5f6367152F'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/lbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/lbtc.svg',
          theme: {
            circle: true
          }
        }]
    },
    {
      denomUnits: [{
          denom: 'cw20:bbn13vejhl4x0arsq7wajcmlu5hx3phmxdcrp3s2jvy65ucyt9kfkh7qr2laaa',
          exponent: 0
        }, {
          denom: 'satFBTC.e',
          exponent: 8
        }],
      base: 'cw20:bbn13vejhl4x0arsq7wajcmlu5hx3phmxdcrp3s2jvy65ucyt9kfkh7qr2laaa',
      address: 'bbn13vejhl4x0arsq7wajcmlu5hx3phmxdcrp3s2jvy65ucyt9kfkh7qr2laaa',
      name: 'SatLayer FBTC Bridged',
      display: 'satFBTC.e',
      symbol: 'satFBTC.e',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/FBTC.png'
      },
      typeAsset: 'cw20',
      traces: [{
          type: 'ibc-bridge',
          provider: 'Union',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xe2C6755C10d0B61D8B11Dd2851AE8266Cea912DC',
            channelId: '1'
          },
          chain: {
            channelId: '3',
            path: '0'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xe2C6755C10d0B61D8B11Dd2851AE8266Cea912DC'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/FBTC.png'
        }]
    },
    {
      denomUnits: [{
          denom: 'cw20:bbn1m83xl7pshe9dt25ztlnlqfy8ksaxdp5e098fcl372fjdacpusdcqjp4zx3',
          exponent: 0
        }, {
          denom: 'satWBTC.e',
          exponent: 8
        }],
      base: 'cw20:bbn1m83xl7pshe9dt25ztlnlqfy8ksaxdp5e098fcl372fjdacpusdcqjp4zx3',
      address: 'bbn1m83xl7pshe9dt25ztlnlqfy8ksaxdp5e098fcl372fjdacpusdcqjp4zx3',
      name: 'SatLayer WBTC Bridged',
      display: 'satWBTC.e',
      symbol: 'satWBTC.e',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
      },
      typeAsset: 'cw20',
      traces: [{
          type: 'ibc-bridge',
          provider: 'Union',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x69223B5B36a785Ec08e5f685fd7961399982C566',
            channelId: '1'
          },
          chain: {
            channelId: '3',
            path: '0'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x69223B5B36a785Ec08e5f685fd7961399982C566'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'cw20:bbn1zwg6c8rzk8htpn67cj4vrq5y2qdhfgtzvslyy9574s4j8j5xynlqg0qzs2',
          exponent: 0
        }, {
          denom: 'satPumpBTC.e',
          exponent: 8
        }],
      base: 'cw20:bbn1zwg6c8rzk8htpn67cj4vrq5y2qdhfgtzvslyy9574s4j8j5xynlqg0qzs2',
      address: 'bbn1zwg6c8rzk8htpn67cj4vrq5y2qdhfgtzvslyy9574s4j8j5xynlqg0qzs2',
      name: 'SatLayer pumpBTC Bridged',
      display: 'satPumpBTC.e',
      symbol: 'satPumpBTC.e',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pumpBTC.svg'
      },
      typeAsset: 'cw20',
      traces: [{
          type: 'ibc-bridge',
          provider: 'Union',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x0c4dd69705D16d91bC9C0534Cc926966f23430c7',
            channelId: '1'
          },
          chain: {
            channelId: '3',
            path: '0'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x0c4dd69705D16d91bC9C0534Cc926966f23430c7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pumpBTC.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'cw20:bbn17awjw4g3a7wn5eruejf6hmshc8y06wpz6qu7ue32xygcueu55zqs33aq93',
          exponent: 0
        }, {
          denom: 'satStBTC.e',
          exponent: 18
        }],
      base: 'cw20:bbn17awjw4g3a7wn5eruejf6hmshc8y06wpz6qu7ue32xygcueu55zqs33aq93',
      address: 'bbn17awjw4g3a7wn5eruejf6hmshc8y06wpz6qu7ue32xygcueu55zqs33aq93',
      name: 'SatLayer stBTC Bridged',
      display: 'satStBTC.e',
      symbol: 'satStBTC.e',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/stbtc.svg'
      },
      typeAsset: 'cw20',
      traces: [{
          type: 'ibc-bridge',
          provider: 'Union',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xFF2858Cc8227aA45a51c8961598Edc2d44B5ee5b',
            channelId: '1'
          },
          chain: {
            channelId: '3',
            path: '0'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xFF2858Cc8227aA45a51c8961598Edc2d44B5ee5b'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/stbtc.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'cw20:bbn1p56nwhnh0klnjf9k5ug6nyu84hkee0l2lq8f9kml7zwq9xsrkfcs7ej73n',
          exponent: 0
        }, {
          denom: 'CoBTC',
          exponent: 8
        }],
      base: 'cw20:bbn1p56nwhnh0klnjf9k5ug6nyu84hkee0l2lq8f9kml7zwq9xsrkfcs7ej73n',
      address: 'bbn1p56nwhnh0klnjf9k5ug6nyu84hkee0l2lq8f9kml7zwq9xsrkfcs7ej73n',
      name: 'Coffer Bitcoin',
      display: 'CoBTC',
      symbol: 'CoBTC',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/CoBTC.svg'
      },
      typeAsset: 'cw20',
      traces: [{
          type: 'ibc-bridge',
          provider: 'Union',
          counterparty: {
            chainName: 'binancesmartchain',
            baseDenom: '0x918b3aa73e2D42D96CF64CBdB16838985992dAbc',
            channelId: '1'
          },
          chain: {
            channelId: '5',
            path: '0'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'binancesmartchain',
            baseDenom: '0x918b3aa73e2D42D96CF64CBdB16838985992dAbc'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/CoBTC.svg'
        }]
    },
    {
      description: 'MilkyWay\'s liquid staked BABY',
      denomUnits: [{
          denom: 'ibc/CD7ECDBBA538632B45915ED67C4932DDB318818C00C21489D3774E560E87E420',
          exponent: 0
        }, {
          denom: 'milkBABY',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/CD7ECDBBA538632B45915ED67C4932DDB318818C00C21489D3774E560E87E420',
      name: 'milkBABY',
      display: 'milkBABY',
      symbol: 'milkBABY',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'babylon',
            baseDenom: 'ubbn'
          },
          provider: 'MilkyWay'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'milkyway',
            baseDenom: 'factory/milk1qg5ega6dykkxc307y25pecuufrjkxkaggkkxh7nad0vhyhtuhw3ssgcye4/umilkBBN',
            channelId: 'channel-4'
          },
          chain: {
            channelId: 'channel-4',
            path: 'transfer/channel-4/factory/milk1qg5ega6dykkxc307y25pecuufrjkxkaggkkxh7nad0vhyhtuhw3ssgcye4/umilkBBN'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/milkyway/images/milkbaby.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/milkyway/images/milkbaby.svg'
      },
      images: [{
          imageSync: {
            chainName: 'milkyway',
            baseDenom: 'factory/milk1qg5ega6dykkxc307y25pecuufrjkxkaggkkxh7nad0vhyhtuhw3ssgcye4/umilkBBN'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/milkyway/images/milkbaby.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/milkyway/images/milkbaby.svg'
        }]
    }
  ]
};
export default info;