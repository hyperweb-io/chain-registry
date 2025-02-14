import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'zigchaintestnet',
  assets: [{
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
    }]
};
export default info;