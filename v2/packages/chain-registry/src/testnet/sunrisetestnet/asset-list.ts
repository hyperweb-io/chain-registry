import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'sunrisetestnet',
  assets: [
    {
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/vrise.png'
        }],
      socials: {
        website: 'https://sunriselayer.io/',
        x: 'https://x.com/SunriseLayer'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The native token of the Sunrise network.',
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.png'
        }],
      socials: {
        website: 'https://sunriselayer.io/',
        x: 'https://x.com/SunriseLayer'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The USD stable coin of the Sunrise network for fees.',
      denomUnits: [{
          denom: 'uusdrise',
          exponent: 0,
          aliases: ['microUSDrise', 'microusdrise']
        }, {
          denom: 'usdrise',
          exponent: 6
        }],
      base: 'uusdrise',
      name: 'Sunrise USDrise',
      display: 'usdrise',
      symbol: 'USDrise',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/usdrise.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/usdrise.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/usdrise.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/usdrise.png'
        }],
      socials: {
        website: 'https://sunriselayer.io/',
        x: 'https://x.com/SunriseLayer'
      },
      typeAsset: 'sdk.coin'
    }
  ]
};
export default info;