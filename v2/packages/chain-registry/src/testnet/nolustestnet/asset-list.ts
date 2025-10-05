import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'nolustestnet',
  assets: [{
      description: 'The native token of Nolus chain',
      denomUnits: [{
          denom: 'unls',
          exponent: 0
        }, {
          denom: 'nls',
          exponent: 6
        }],
      base: 'unls',
      name: 'Nolus',
      display: 'nls',
      symbol: 'NLS',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'nolus',
            baseDenom: 'unls'
          },
          provider: 'Nolus'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
      },
      images: [{
          imageSync: {
            chainName: 'nolus',
            baseDenom: 'unls'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;