import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'babylon',
  assets: [{
      description: 'The native token of Babylon Genesis.',
      extendedDescription: 'Babylon Genesis enables Bitcoin tokens to be used as an economic security layer for Proof of Stake (PoS) systems without relying on bridges, wrapping, or third-party custody.',
      denomUnits: [{
          denom: 'ubbn',
          exponent: 0
        }, {
          denom: 'BABY',
          exponent: 6
        }],
      base: 'ubbn',
      name: 'Babylon',
      display: 'BABY',
      symbol: 'BABY',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/logo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/logo.svg'
        }],
      typeAsset: 'sdk.coin',
      socials: {
        website: 'https://babylonlabs.io/',
        twitter: 'https://x.com/babylonlabs_io'
      }
    }]
};
export default info;