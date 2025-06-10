import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'sunrise',
  assets: [{
      description: 'The native token of the Sunrise network for staking. This token is non transferrable. This token can be retrieved by providing liquidity.',
      denomUnits: [{
          denom: 'uvrise',
          exponent: 0,
          aliases: ['microvRISE', 'microvrise']
        }, {
          denom: 'vrise',
          exponent: 6
        }],
      base: 'uvrise',
      name: 'Sunrise vRISE',
      display: 'vrise',
      symbol: 'vRISE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/vrise.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/vrise.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/vrise.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/vrise.png',
          theme: {
            primaryColorHex: '#a4b4c4'
          }
        }],
      socials: {
        website: 'https://sunriselayer.io/',
        twitter: 'https://twitter.com/SunriseLayer'
      },
      typeAsset: 'sdk.coin'
    }, {
      description: 'The native token of the Sunrise network for fees.',
      denomUnits: [{
          denom: 'urise',
          exponent: 0,
          aliases: ['microRISE', 'microrise']
        }, {
          denom: 'rise',
          exponent: 6
        }],
      base: 'urise',
      name: 'Sunrise RISE',
      display: 'rise',
      symbol: 'RISE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.png',
          theme: {
            primaryColorHex: '#ecbc64'
          }
        }],
      socials: {
        website: 'https://sunriselayer.io/',
        twitter: 'https://twitter.com/SunriseLayer'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;