import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'tenet',
  assets: [{
      description: 'The native EVM, governance and staking token of the Tenet',
      denomUnits: [{
          denom: 'atenet',
          exponent: 0
        }, {
          denom: 'tenet',
          exponent: 18
        }],
      base: 'atenet',
      name: 'Tenet',
      display: 'tenet',
      symbol: 'TENET',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tenet/images/tenet.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;