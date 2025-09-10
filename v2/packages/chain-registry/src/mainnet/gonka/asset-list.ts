import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'gonka',
  assets: [{
      description: 'Coins for the Gonka network.',
      denomUnits: [
        {
          denom: 'ngonka',
          exponent: 0,
          aliases: ['nanogonka']
        },
        {
          denom: 'ugonka',
          exponent: 3,
          aliases: ['microgonka']
        },
        {
          denom: 'mgonka',
          exponent: 6,
          aliases: ['milligonka']
        },
        {
          denom: 'gonka',
          exponent: 9
        }
      ],
      base: 'ngonka',
      name: 'Gonka',
      display: 'gonka',
      symbol: 'GNK',
      typeAsset: 'sdk.coin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gonka/images/gonka_logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gonka/images/gonka_logo.svg'
        }]
    }]
};
export default info;