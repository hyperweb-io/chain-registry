import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'axone',
  assets: [{
      description: 'The native token of Axone.',
      extendedDescription: 'Axone is a layer-1 designed for collaborative AI training, governance and monetization at scale.',
      denomUnits: [{
          denom: 'uaxone',
          exponent: 0
        }, {
          denom: 'axone',
          exponent: 6
        }],
      base: 'uaxone',
      name: 'Axone',
      display: 'axone',
      symbol: 'AXONE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axone/images/chain.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axone/images/chain.png'
        }],
      typeAsset: 'sdk.coin',
      socials: {
        website: 'https://axone.xyz',
        twitter: 'https://x.com/axonexyz'
      }
    }]
};
export default info;