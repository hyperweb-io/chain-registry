import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'zigchain',
  assets: [{
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
    }, {
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
    }]
};
export default info;