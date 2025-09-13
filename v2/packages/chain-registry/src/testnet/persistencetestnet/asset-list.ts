import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'persistencetestnet',
  assets: [{
      description: 'The XPRT token is primarily a governance token for the Persistence chain.',
      denomUnits: [{
          denom: 'uxprt',
          exponent: 0
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      base: 'uxprt',
      name: 'Persistence',
      display: 'xprt',
      symbol: 'XPRT',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'persistence',
            baseDenom: 'uxprt'
          },
          provider: 'Persistence'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
      },
      coingeckoId: 'persistence',
      images: [{
          imageSync: {
            chainName: 'persistence',
            baseDenom: 'uxprt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg',
          theme: {
            circle: true
          }
        }],
      typeAsset: 'sdk.coin'
    }, {
      description: 'PSTAKE Liquid-Staked ATOM',
      denomUnits: [{
          denom: 'stk/uatom',
          exponent: 0,
          aliases: []
        }, {
          denom: 'stkatom',
          exponent: 6,
          aliases: ['stk/atom']
        }],
      base: 'stk/uatom',
      name: 'PSTAKE staked ATOM',
      display: 'stkatom',
      symbol: 'stkATOM',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;