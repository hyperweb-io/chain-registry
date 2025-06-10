import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'pockettestnet',
  assets: [{
      description: 'The native token of Pocket Network',
      denomUnits: [{
          denom: 'upokt',
          exponent: 0
        }, {
          denom: 'pokt',
          exponent: 6
        }],
      base: 'upokt',
      name: 'POKT',
      display: 'pokt',
      symbol: 'POKT',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pocket/images/pokt-icon.svg'
      },
      keywords: ['rpc', 'api'],
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pocket/images/pokt-icon.svg'
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pocket/images/pokt-icon.png'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;