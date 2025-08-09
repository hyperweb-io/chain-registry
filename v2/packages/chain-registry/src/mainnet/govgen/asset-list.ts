import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'govgen',
  assets: [{
      description: 'The native staking and governance token of GovGen',
      denomUnits: [{
          denom: 'ugovgen',
          exponent: 0
        }, {
          denom: 'govgen',
          exponent: 6
        }],
      base: 'ugovgen',
      name: 'GovGen',
      display: 'govgen',
      symbol: 'GOVGEN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/govgen/images/govgen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/govgen/images/govgen.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/govgen/images/govgen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/govgen/images/govgen.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;