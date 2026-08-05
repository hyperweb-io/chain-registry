import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'xpla',
  assets: [{
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
    }, {
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
    }]
};
export default info;