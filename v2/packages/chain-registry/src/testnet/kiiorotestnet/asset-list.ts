import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'kiiorotestnet',
  assets: [{
      description: 'The native token of Kii Testnet Oro',
      denomUnits: [{
          denom: 'akii',
          exponent: 0
        }, {
          denom: 'kii',
          exponent: 18
        }],
      base: 'akii',
      name: 'Kii',
      display: 'kii',
      symbol: 'KII',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kiiorotestnet/images/kii_oro.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kiiorotestnet/images/kii_oro.png'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;