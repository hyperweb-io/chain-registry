import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'xpla',
  assets: [
    {
      description: 'The native staking token of XPLA.',
      denomUnits: [{
          denom: 'axpla',
          exponent: 0
        }, {
          denom: 'xpla',
          exponent: 18
        }],
      base: 'axpla',
      name: 'Xpla',
      display: 'xpla',
      symbol: 'XPLA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg'
      },
      coingeckoId: 'xpla',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'IUP is a game-focused token that transforms users’ time, effort, and experience into rewards and real value.',
      denomUnits: [{
          denom: 'cw20:xpla10804823gxas3d9g8knrutvzkkz92m2ctvsafnan8zw6cqa6sd47qfdg9k8',
          exponent: 0
        }, {
          denom: 'iup',
          exponent: 6
        }],
      typeAsset: 'cw20',
      address: 'xpla10804823gxas3d9g8knrutvzkkz92m2ctvsafnan8zw6cqa6sd47qfdg9k8',
      base: 'cw20:xpla10804823gxas3d9g8knrutvzkkz92m2ctvsafnan8zw6cqa6sd47qfdg9k8',
      name: 'iUP',
      display: 'iup',
      symbol: 'iUP',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/iup.png'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/iup.png'
      }
    },
    {
      description: 'USD Coin issued natively on Injective by Circle',
      denomUnits: [{
          denom: 'ibc/AF463B6FC78E0E6068C37DF909C6B5859067BFEDA858A14218A5397794EACF48',
          exponent: 0
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      base: 'ibc/AF463B6FC78E0E6068C37DF909C6B5859067BFEDA858A14218A5397794EACF48',
      name: 'Injective USDC',
      display: 'usdc',
      symbol: 'USDC.inj',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'ibc/E107DB3E8AABB49C87CB737A1ABBFDBA9803ECAE05E295D8D7A0B1A7FE83706C',
            channelId: 'channel-533'
          },
          chain: {
            channelId: 'channel-6',
            path: 'transfer/channel-6/transfer/channel-220/erc20:0xa00C59fF5a080D2b954d0c75e46E22a0c371235a'
          }
        }],
      typeAsset: 'ics20',
      images: [{
          imageSync: {
            chainName: 'cosmoshub',
            baseDenom: 'ibc/E107DB3E8AABB49C87CB737A1ABBFDBA9803ECAE05E295D8D7A0B1A7FE83706C'
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