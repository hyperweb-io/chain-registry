import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'luxa',
  assets: [{
      description: 'The native sovereign currency and governance token of the LUXA Layer 1 blockchain.',
      denomUnits: [{
          denom: 'uluxa',
          exponent: 0
        }, {
          denom: 'LUXA',
          exponent: 6
        }],
      base: 'uluxa',
      name: 'LUXA',
      display: 'LUXA',
      symbol: 'LUXA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/luxa/images/luxa.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/luxa/images/luxa.png',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://luxaecosystem.xyz',
        x: 'https://x.com/luxaecosystem'
      },
      typeAsset: 'sdk.coin'
    }, {
      description: 'The utility and energy token of the LUXA Network ecosystem.',
      denomUnits: [{
          denom: 'ushard',
          exponent: 0
        }, {
          denom: 'SHARD',
          exponent: 6,
          aliases: ['shard', 'shards']
        }],
      base: 'ushard',
      name: 'LUXA Shard',
      display: 'SHARD',
      symbol: 'SHARD',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/luxa/images/ushard.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/luxa/images/ushard.png',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://luxaecosystem.xyz',
        x: 'https://x.com/luxaecosystem'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;