import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'mises',
  assets: [{
      description: 'The native staking and gov token of the Mises Network.',
      denomUnits: [
        {
          denom: 'umis',
          exponent: 0,
          aliases: ['micromis']
        },
        {
          denom: 'mmis',
          exponent: 3,
          aliases: ['millimis']
        },
        {
          denom: 'mis',
          exponent: 6
        }
      ],
      base: 'umis',
      display: 'mis',
      name: 'mises network MIS',
      symbol: 'MIS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mises/images/mises.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mises/images/mises.png'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;