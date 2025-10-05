import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'echelon',
  assets: [{
      description: 'Echelon - a scalable EVM on Cosmos, built on Proof-of-Stake with fast-finality that prioritizes interoperability and novel economics',
      denomUnits: [{
          denom: 'aechelon',
          exponent: 0
        }, {
          denom: 'echelon',
          exponent: 18
        }],
      base: 'aechelon',
      name: 'Echelon',
      display: 'echelon',
      symbol: 'ECH',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/ech.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/ech.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/ech.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/ech.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;