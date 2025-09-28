import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'zigchaintestnet',
  assets: [
    {
      description: 'The native token of ZIGChain',
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
      base: 'uzig',
      name: 'ZIG',
      display: 'zig',
      symbol: 'ZIG',
      coingeckoId: 'zignaly',
      keywords: [
        'zigchain',
        'zig',
        'staking',
        'delegating',
        'governance',
        'defi'
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zigchaintestnet/images/zigchain.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zigchaintestnet/images/zigchain.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zigchaintestnet/images/zigchain.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zigchaintestnet/images/zigchain.svg'
        }],
      typeAsset: 'sdk.coin',
      socials: {
        website: 'https://zigchain.com/',
        twitter: 'https://twitter.com/zigchain',
        telegram: 'https://t.me/ZignalyHQ',
        discord: 'https://discord.com/invite/zignaly-the-better-way-to-invest-in-crypto-486954374845956097',
        medium: 'https://medium.com/zignaly'
      }
    },
    {
      description: 'Staked Zig Token by Valdora Finance - Decentralized staking with stZIG',
      denomUnits: [{
          denom: 'coin.zig1q5cuxuekvjdsl3l2t87jv83gdwjryc4hmh8s90y7mwgpyfwkqutsy9tqak.stzig',
          exponent: 0
        }, {
          denom: 'stzig',
          exponent: 6
        }],
      base: 'coin.zig1q5cuxuekvjdsl3l2t87jv83gdwjryc4hmh8s90y7mwgpyfwkqutsy9tqak.stzig',
      name: 'Staked Zig',
      display: 'stzig',
      symbol: 'STZIG',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zigchaintestnet/images/stzig.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/zigchaintestnet/images/stzig.png'
        }],
      typeAsset: 'sdk.coin',
      socials: {
        website: 'https://dev.valdora.finance',
        twitter: 'https://x.com/Valdora_finance',
        telegram: 'https://t.me/ValdoraWarriors',
        discord: 'http://discord.gg/valdora'
      }
    },
    {
      description: 'Noble USDC on ZIGChain',
      denomUnits: [{
          denom: 'ibc/8E452E728A6598EEF051E63FFE49AF19004F5D2AA3F690413C2985660AAFD38F',
          exponent: 0,
          aliases: ['microusdc', 'uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/8E452E728A6598EEF051E63FFE49AF19004F5D2AA3F690413C2985660AAFD38F',
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
          type: 'test-mintage',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdc'
          },
          provider: 'Circle'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'nobletestnet',
            baseDenom: 'uusdc',
            channelId: 'channel-664'
          },
          chain: {
            channelId: 'channel-35',
            path: 'transfer/channel-35/uusdc'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'nobletestnet',
            baseDenom: 'uusdc'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          theme: {
            circle: true
          }
        }],
      coingeckoId: 'usd-coin'
    }
  ]
};
export default info;