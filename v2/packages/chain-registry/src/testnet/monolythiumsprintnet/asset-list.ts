import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'monolythiumsprintnet',
  assets: [{
      description: 'The native staking and gas token of Monolythium Sprintnet.',
      denomUnits: [{
          denom: 'alyth',
          exponent: 0
        }, {
          denom: 'lyth',
          exponent: 18
        }],
      typeAsset: 'sdk.coin',
      base: 'alyth',
      name: 'Monolythium Sprintnet',
      display: 'lyth',
      symbol: 'LYTH',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/monolythiumsprintnet/images/lyth.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/monolythiumsprintnet/images/lyth.png'
        }]
    }]
};
export default info;