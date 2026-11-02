import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'luxa',
  assets: [
    {
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
    },
    {
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
    },
    {
      description: 'Noble USDC transferred via IBC from Noble to LUXA Network.',
      denomUnits: [{
          denom: 'ibc/BFF0D3805B50D93E2FA5C0B2DDF7E0B30A631076CD80BC12A48C0E95404B4A41',
          exponent: 0,
          aliases: ['microusdc', 'uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/BFF0D3805B50D93E2FA5C0B2DDF7E0B30A631076CD80BC12A48C0E95404B4A41',
      name: 'USDC (Noble)',
      display: 'usdc',
      symbol: 'USDC.n',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdc',
            channelId: 'channel-640'
          },
          chain: {
            channelId: 'channel-4',
            path: 'transfer/channel-4/uusdc'
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