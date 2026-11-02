import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'ozonetestnet',
  assets: [{
      description: 'The native EVM gas token of Ozone Chain testnet.',
      denomUnits: [{
          denom: 'aphoton',
          exponent: 0
        }, {
          denom: 'tozone',
          exponent: 18
        }],
      typeAsset: 'sdk.coin',
      base: 'aphoton',
      name: 'Ozone Testnet',
      display: 'tozone',
      symbol: 'tOZONE',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'ozone',
            baseDenom: 'aphoton'
          },
          provider: 'Ozone'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ozone/images/ozone.png'
      },
      images: [{
          imageSync: {
            chainName: 'ozone',
            baseDenom: 'aphoton'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ozone/images/ozone.png',
          theme: {
            circle: true
          }
        }]
    }]
};
export default info;