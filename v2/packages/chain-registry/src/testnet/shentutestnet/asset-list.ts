import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'shentutestnet',
  assets: [{
      description: 'The native token of Shentu',
      denomUnits: [{
          denom: 'uctk',
          exponent: 0
        }, {
          denom: 'ctk',
          exponent: 6
        }],
      base: 'uctk',
      name: 'Shentu',
      display: 'ctk',
      symbol: 'CTK',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg'
      },
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'shentu',
            baseDenom: 'uctk'
          },
          provider: 'Shentu'
        }],
      images: [{
          imageSync: {
            chainName: 'shentu',
            baseDenom: 'uctk'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;