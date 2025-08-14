import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'paxi',
  assets: [{
      description: 'PAXI is the native token of the Paxi blockchain.',
      denomUnits: [{
          denom: 'upaxi',
          exponent: 0
        }, {
          denom: 'PAXI',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'upaxi',
      name: 'Paxi',
      display: 'PAXI',
      symbol: 'PAXI',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/paxi/images/paxi.png',
          theme: {
            circle: false
          }
        }],
      keywords: ['staking'],
      socials: {
        website: 'https://paxinet.io'
      }
    }]
};
export default info;