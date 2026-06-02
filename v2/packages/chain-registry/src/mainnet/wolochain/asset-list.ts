import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'wolochain',
  assets: [{
      description: 'WOLO is the fixed-supply native token of WoloChain.',
      extendedDescription: 'WOLO powers AoE2WAR betting, staking, rewards, and settlement for Age of Empires II matches.',
      denomUnits: [{
          denom: 'uwolo',
          exponent: 0,
          aliases: ['microWOLO']
        }, {
          denom: 'wolo',
          exponent: 6
        }],
      base: 'uwolo',
      name: 'WOLO',
      display: 'wolo',
      symbol: 'WOLO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wolochain/images/wolo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wolochain/images/wolo.png',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://aoe2war.com'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;