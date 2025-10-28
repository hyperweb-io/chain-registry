import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'zigchain',
  assets: [
    {
      description: 'The native token of ZIGChain',
      extendedDescription: 'ZIGChain (ZIG) is a Layer 1 blockchain focused on unlocking financial opportunities for everyone - regardless of their income, location, or level of knowledge.',
      denomUnits: [
        {
          denom: 'uzig',
          exponent: 0,
          aliases: ['microzig']
        },
        {
          denom: 'mzig',
          exponent: 3,
          aliases: ['millizig']
        },
        {
          denom: 'zig',
          exponent: 6
        }
      ],
      typeAsset: 'sdk.coin',
      base: 'uzig',
      name: 'ZIG',
      display: 'zig',
      symbol: 'ZIG',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xb2617246d0c6c0087f18703d576831899ca94f01'
          },
          provider: 'ZIGChain'
        }],
      coingeckoId: 'zignaly',
      keywords: [
        'zigchain',
        'rwa',
        'wealth generation infrastructure',
        'wasm'
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/zigchain.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/zigchain.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/zigchain.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/zigchain.svg'
        }],
      socials: {
        website: 'https://zigchain.com/',
        twitter: 'https://x.com/zigchain',
        telegram: 'https://t.me/ZignalyHQ',
        discord: 'https://discord.zignaly.com',
        medium: 'https://medium.com/zignaly'
      }
    },
    {
      description: 'Staked Zig Token by Valdora Finance - Decentralized staking with stZIG',
      denomUnits: [{
          denom: 'coin.zig109f7g2rzl2aqee7z6gffn8kfe9cpqx0mjkk7ethmx8m2hq4xpe9snmaam2.stzig',
          exponent: 0
        }, {
          denom: 'stzig',
          exponent: 6
        }],
      base: 'coin.zig109f7g2rzl2aqee7z6gffn8kfe9cpqx0mjkk7ethmx8m2hq4xpe9snmaam2.stzig',
      name: 'Staked Zig',
      display: 'stzig',
      symbol: 'STZIG',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/stzig.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/stzig.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/stzig.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/stzig.svg'
        }],
      typeAsset: 'sdk.coin',
      socials: {
        website: 'https://valdora.finance',
        twitter: 'https://x.com/Valdora_finance',
        telegram: 'https://t.me/ValdoraWarriors',
        discord: 'http://discord.gg/valdora'
      }
    },
    {
      description: 'Noble USDC on ZIGChain',
      denomUnits: [{
          denom: 'ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4',
          exponent: 0,
          aliases: ['microusdc', 'uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4',
      name: 'Noble USDC',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'additional-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Circle'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdc',
            channelId: 'channel-175'
          },
          chain: {
            channelId: 'channel-3',
            path: 'transfer/channel-3/uusdc'
          }
        }
      ],
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
      description: 'Cosmos Hub Atom on ZIGChain',
      denomUnits: [{
          denom: 'ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0',
      name: 'Cosmos Hub Atom',
      display: 'atom',
      symbol: 'ATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom',
            channelId: 'channel-1555'
          },
          chain: {
            channelId: 'channel-4',
            path: 'transfer/channel-4/uatom'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      images: [{
          imageSync: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }],
      coingeckoId: 'cosmos'
    },
    {
      description: 'ZIG bridged via Axelar on ZIGChain',
      denomUnits: [{
          denom: 'ibc/9BEE293E6559ED860CC702685996F394D4991D6DFFD60A19ABC3723E6F34788A',
          exponent: 0,
          aliases: ['weizig.axl']
        }, {
          denom: 'zig.axl',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/9BEE293E6559ED860CC702685996F394D4991D6DFFD60A19ABC3723E6F34788A',
      name: 'ZIG (Axelar)',
      display: 'zig.axl',
      symbol: 'ZIG.axl',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'unit-zig',
            channelId: 'channel-182'
          },
          chain: {
            channelId: 'channel-1',
            path: 'transfer/channel-1/unit-zig'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/zigchain.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/zigchain.svg'
      },
      images: [{
          imageSync: {
            chainName: 'zigchain',
            baseDenom: 'uzig'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/zigchain.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/zigchain.svg'
        }]
    }
  ]
};
export default info;