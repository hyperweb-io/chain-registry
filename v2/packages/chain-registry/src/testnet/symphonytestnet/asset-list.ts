import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'symphonytestnet',
  assets: [
    {
      description: 'The native token of Symphony',
      denomUnits: [{
          denom: 'note',
          exponent: 0,
          aliases: []
        }, {
          denom: 'mld',
          exponent: 6,
          aliases: ['melody']
        }],
      typeAsset: 'sdk.coin',
      base: 'note',
      name: 'Melody',
      display: 'mld',
      symbol: 'MLD',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/symphony/images/mld.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/symphony/images/mld.png'
        }]
    },
    {
      description: 'Harmonized USD',
      denomUnits: [{
          denom: 'uusd',
          exponent: 0,
          aliases: ['microusd']
        }, {
          denom: 'husd',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'uusd',
      name: 'Harmony USD',
      display: 'husd',
      symbol: 'HUSD',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/symphony/images/husd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/symphony/images/husd.png'
        }]
    },
    {
      description: 'Harmonized HKD',
      denomUnits: [{
          denom: 'ukhd',
          exponent: 0,
          aliases: ['microhkd']
        }, {
          denom: 'hkhd',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'ukhd',
      name: 'Harmony HKD',
      display: 'hkhd',
      symbol: 'HKHD',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/symphony/images/hhkd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/symphony/images/hhkd.png'
        }]
    },
    {
      description: 'Harmonized VND',
      denomUnits: [{
          denom: 'uvnd',
          exponent: 0,
          aliases: ['microvnd']
        }, {
          denom: 'hvnd',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'uvnd',
      name: 'Harmony VND',
      display: 'hvnd',
      symbol: 'HVND',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/symphony/images/hvnd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/symphony/images/hvnd.png'
        }]
    }
  ]
};
export default info;