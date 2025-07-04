import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'upticktestnet',
  assets: [{
      description: 'The native token of Uptick',
      denomUnits: [{
          denom: 'auptick',
          exponent: 0
        }, {
          denom: 'uptick',
          exponent: 18
        }],
      base: 'auptick',
      name: 'Uptick',
      display: 'uptick',
      symbol: 'UPTICK',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/upticktestnet/images/uptick.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/upticktestnet/images/uptick.png'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;