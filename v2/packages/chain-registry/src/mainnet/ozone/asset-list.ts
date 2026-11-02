import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'ozone',
  assets: [{
      description: 'The native EVM, governance and staking token of Ozone Chain.',
      denomUnits: [{
          denom: 'aphoton',
          exponent: 0
        }, {
          denom: 'ozone',
          exponent: 18
        }],
      typeAsset: 'sdk.coin',
      base: 'aphoton',
      name: 'Ozone',
      display: 'ozone',
      symbol: 'OZONE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ozone/images/ozone.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ozone/images/ozone.png',
          theme: {
            circle: true
          }
        }],
      coingeckoId: 'ozonechain',
      socials: {
        website: 'https://ozonechain.com',
        x: 'https://x.com/ozonechain'
      }
    }]
};
export default info;