import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'xion',
  assets: [
    {
      description: 'XION is the first walletless L1 blockchain purpose built for consumer adoption through chain abstraction.',
      extendedDescription: 'XION is the first walletless L1 blockchain purpose built for consumer adoption through chain abstraction. Utilizing protocol-level implementations related to abstracted accounts, signatures, fees, interoperability, and more, XION empowers developers to build secure, intuitive, and seamless user experiences.',
      denomUnits: [{
          denom: 'uxion',
          exponent: 0,
          aliases: ['microxion']
        }, {
          denom: 'XION',
          exponent: 6,
          aliases: ['xion']
        }],
      base: 'uxion',
      display: 'XION',
      name: 'xion',
      symbol: 'XION',
      coingeckoId: 'xion-2',
      typeAsset: 'sdk.coin',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
        }],
      socials: {
        discord: 'https://discord.com/invite/burnt',
        github: 'https://github.com/burnt-labs',
        telegram: 'https://t.me/xion_announcements',
        twitter: 'https://x.com/burnt_xion',
        website: 'https://xion.burnt.com'
      }
    },
    {
      description: 'Osmosis from Osmosis Chain',
      denomUnits: [{
          denom: 'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      base: 'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B',
      name: 'OSMO',
      display: 'osmo',
      symbol: 'OSMO',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }],
      keywords: ['dex', 'mm'],
      typeAsset: 'ics20',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'uosmo',
            channelId: 'channel-89321'
          },
          chain: {
            channelId: 'channel-1',
            path: 'transfer/channel-1/uosmo'
          }
        }],
      coingeckoId: 'osmosis'
    },
    {
      description: 'The native utility token of the KYVE network.',
      denomUnits: [{
          denom: 'ibc/056EA54C3D9B49B3C0418955A27980A91DD4F210914BFE240A1DB19E27895ECA',
          exponent: 0
        }, {
          denom: 'kyve',
          exponent: 6
        }],
      base: 'ibc/056EA54C3D9B49B3C0418955A27980A91DD4F210914BFE240A1DB19E27895ECA',
      name: 'KYVE',
      display: 'kyve',
      symbol: 'KYVE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg'
      },
      coingeckoId: 'kyve-network',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kyve',
            baseDenom: 'ukyve',
            channelId: 'channel-7'
          },
          chain: {
            channelId: 'channel-5',
            path: 'transfer/channel-5/ukyve'
          }
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg',
          theme: {
            primaryColorHex: '#335350'
          }
        }],
      socials: {
        website: 'https://www.kyve.network/',
        twitter: 'https://twitter.com/KYVENetwork'
      },
      typeAsset: 'ics20'
    },
    {
      description: 'IBC Axelar uusdc through axelar-dojo-1 transfer/channel-2',
      denomUnits: [{
          denom: 'ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'axlusdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4',
      name: 'Axelar Bridged USDC',
      display: 'axlusdc',
      symbol: 'AXLUSDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'uusdc',
            channelId: 'channel-161'
          },
          chain: {
            channelId: 'channel-3',
            path: 'transfer/channel-3/uusdc'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg',
          theme: {
            primaryColorHex: '#2474cc'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
      },
      coingeckoId: 'axlusdc'
    },
    {
      description: 'Axelar Network Token',
      denomUnits: [{
          denom: 'ibc/9463E39D230614B313B487836D13A392BD1731928713D4C8427A083627048DB3',
          exponent: 0,
          aliases: ['microaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/9463E39D230614B313B487836D13A392BD1731928713D4C8427A083627048DB3',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'uaxl',
            channelId: 'channel-161'
          },
          chain: {
            channelId: 'channel-3',
            path: 'transfer/channel-3/uaxl'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'uaxl'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg',
          theme: {
            primaryColorHex: '#040404'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      coingeckoId: 'axelar'
    },
    {
      denomUnits: [{
          denom: 'ibc/AAD7136DD626569C3DDE7C5F764968BB2E939875EFC568AE5712B62081850814',
          exponent: 0,
          aliases: ['weth-wei']
        }, {
          denom: 'weth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/AAD7136DD626569C3DDE7C5F764968BB2E939875EFC568AE5712B62081850814',
      name: 'Axelar Wrapped Ether',
      display: 'weth',
      symbol: 'axlWETH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'weth-wei',
            channelId: 'channel-161'
          },
          chain: {
            channelId: 'channel-3',
            path: 'transfer/channel-3/weth-wei'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'weth-wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png',
          theme: {
            primaryColorHex: '#3a3444'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png'
      },
      coingeckoId: 'axlweth'
    },
    {
      description: 'The native token of Elys Network',
      denomUnits: [
        {
          denom: 'ibc/DBE9697AC1044255A305A2034AD360B4152632BFBFB5785234731F60196B9645',
          exponent: 0,
          aliases: ['microelys']
        },
        {
          denom: 'melys',
          exponent: 3,
          aliases: ['millielys']
        },
        {
          denom: 'elys',
          exponent: 6,
          aliases: []
        }
      ],
      typeAsset: 'ics20',
      base: 'ibc/DBE9697AC1044255A305A2034AD360B4152632BFBFB5785234731F60196B9645',
      name: 'Elys Network',
      display: 'elys',
      symbol: 'ELYS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'elys',
            baseDenom: 'uelys',
            channelId: 'channel-8'
          },
          chain: {
            channelId: 'channel-9',
            path: 'transfer/channel-9/uelys'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/elys/images/elys.png'
      },
      coingeckoId: 'elys-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/elys/images/elys.png'
        }]
    },
    {
      description: 'Arbitrum from Axelar',
      denomUnits: [{
          denom: 'ibc/E706A0C6CACB374ADC2BCF6A74FE1B260840FC822E45DCB776DEA962A57FED30',
          exponent: 0
        }, {
          denom: 'arb',
          exponent: 18
        }],
      base: 'ibc/E706A0C6CACB374ADC2BCF6A74FE1B260840FC822E45DCB776DEA962A57FED30',
      name: 'Arbitrum',
      display: 'arb',
      symbol: 'axlARB',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'arb-wei',
            channelId: 'channel-161'
          },
          chain: {
            channelId: 'channel-3',
            path: 'transfer/channel-3/arb-wei'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg'
      },
      images: [{
          imageSync: {
            chainName: 'arbitrum',
            baseDenom: '0x912CE59144191C1204E64559FE8253a0e49E6548'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg',
          theme: {
            primaryColorHex: '#253545'
          }
        }],
      typeAsset: 'ics20'
    },
    {
      denomUnits: [{
          denom: 'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
      name: 'Noble USDC Token',
      display: 'usdc',
      symbol: 'USDC',
      coingeckoId: 'usd-coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdc',
            channelId: 'channel-113'
          },
          chain: {
            channelId: 'channel-2',
            path: 'transfer/channel-2/uusdc'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'noble',
            baseDenom: 'uusdc'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          theme: {
            circle: true,
            primaryColorHex: '#2775CA'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      }
    }
  ]
};
export default info;