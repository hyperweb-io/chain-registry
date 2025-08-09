import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'panacea',
  assets: [{
      description: 'Panacea is a public blockchain launched by MediBloc, which is the key infrastructure for reinventing the patient-centered healthcare data ecosystem',
      denomUnits: [{
          denom: 'umed',
          exponent: 0
        }, {
          denom: 'med',
          exponent: 6
        }],
      base: 'umed',
      name: 'MediBloc',
      display: 'med',
      symbol: 'MED',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg'
      },
      coingeckoId: 'medibloc',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;