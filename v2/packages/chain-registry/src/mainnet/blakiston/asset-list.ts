import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'blakiston',
  assets: [{
      description: 'Talon (TLN) is the native staking and fee token of the Blakiston chain. Fixed supply of 2,100,000,000 TLN with 0% inflation.',
      denomUnits: [{
          denom: 'tln',
          exponent: 0
        }],
      typeAsset: 'sdk.coin',
      base: 'tln',
      name: 'Talon',
      display: 'tln',
      symbol: 'TLN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/blakiston/images/blakiston.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/blakiston/images/blakiston.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/blakiston/images/blakiston.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/blakiston/images/blakiston.svg',
          theme: {
            circle: true,
            darkMode: true
          }
        }],
      socials: {
        website: 'https://blakiston.org',
        x: 'https://x.com/BlakistonChain'
      }
    }]
};
export default info;