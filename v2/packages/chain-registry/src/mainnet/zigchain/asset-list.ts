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
    }]
};
export default info;