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
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'zigchain',
            baseDenom: 'uzig'
          },
          provider: 'ZIGChain'
        }],
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
        }],
      typeAsset: 'sdk.coin',
      socials: {
        website: 'https://zigchain.com/',
        telegram: 'https://t.me/ZignalyHQ',
        discord: 'https://discord.com/invite/zignaly-the-better-way-to-invest-in-crypto-486954374845956097',
        medium: 'https://medium.com/zignaly',
        x: 'https://x.com/zigchain'
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
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'zigchain',
            baseDenom: 'coin.zig109f7g2rzl2aqee7z6gffn8kfe9cpqx0mjkk7ethmx8m2hq4xpe9snmaam2.stzig'
          },
          provider: 'ZIGChain'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/stzig.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/stzig.svg'
      },
      images: [{
          imageSync: {
            chainName: 'zigchain',
            baseDenom: 'coin.zig109f7g2rzl2aqee7z6gffn8kfe9cpqx0mjkk7ethmx8m2hq4xpe9snmaam2.stzig'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/stzig.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/stzig.svg'
        }],
      typeAsset: 'sdk.coin',
      socials: {
        website: 'https://dev.valdora.finance',
        telegram: 'https://t.me/ValdoraWarriors',
        discord: 'http://discord.gg/valdora',
        x: 'https://x.com/Valdora_finance'
      }
    },
    {
      description: 'Noble USDC on ZIGChain',
      denomUnits: [{
          denom: 'ibc/5260516290F7883EC893AADA09A6B8CEC790F2EEF3196F440037908749785BE8',
          exponent: 0,
          aliases: ['microusdc', 'uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/5260516290F7883EC893AADA09A6B8CEC790F2EEF3196F440037908749785BE8',
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
            channelId: 'channel-704'
          },
          chain: {
            channelId: 'channel-44',
            path: 'transfer/channel-44/uusdc'
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