import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'bitbadges',
  assets: [{
      description: '$BADGE is the native in-app token for BitBadges.',
      extendedDescription: '$BADGE is the native in-app currency for the BitBadges app, blockchain, and ecosystem. It is intended to be used for both chain-native functionalities and also as an in-app currency for badge payments.',
      denomUnits: [{
          denom: 'ubadge',
          exponent: 0
        }, {
          denom: 'badge',
          exponent: 9
        }],
      base: 'ubadge',
      name: 'BitBadges',
      display: 'badge',
      symbol: 'BADGE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitbadges/images/badge_logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitbadges/images/badge_logo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitbadges/images/badge_logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitbadges/images/badge_logo.svg'
        }],
      socials: {
        website: 'https://bitbadges.io/',
        twitter: 'https://twitter.com/bitbadges_io'
      },
      typeAsset: 'sdk.coin'
    }, {
      description: 'The native staking denom for the BitBadges blockchain.',
      denomUnits: [{
          denom: 'ustake',
          exponent: 0
        }, {
          denom: 'stake',
          exponent: 9
        }],
      base: 'ustake',
      name: 'BitBadges Staking',
      display: 'stake',
      symbol: 'STAKE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitbadges/images/bitbadgeslogo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitbadges/images/bitbadgeslogo.png'
        }],
      socials: {
        website: 'https://bitbadges.io/',
        twitter: 'https://twitter.com/bitbadges_io'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;