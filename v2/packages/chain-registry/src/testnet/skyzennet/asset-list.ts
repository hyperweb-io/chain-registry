import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'skyzennet',
  assets: [{
      description: 'The native utility token of Skyzen Network',
      denomUnits: [{
          denom: 'uskyz',
          exponent: 0
        }, {
          denom: 'skyz',
          exponent: 6
        }],
      base: 'uskyz',
      name: 'Skyzen',
      display: 'skyz',
      symbol: 'SKYZ',
      typeAsset: 'sdk.coin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/skyzennet/images/skyzen-main.png'
        }]
    }]
};
export default info;