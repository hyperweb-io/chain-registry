import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'thejaynetwork',
  assets: [{
      description: 'JAY is the native staking and governance token of The Jay Network.',
      denomUnits: [{
          denom: 'ujay',
          exponent: 0
        }, {
          denom: 'jay',
          exponent: 6
        }],
      base: 'ujay',
      name: 'Jay',
      display: 'jay',
      symbol: 'JAY',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/thejaynetwork/images/jay.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/thejaynetwork/images/jay.png'
        }],
      socials: {
        website: 'https://thejaynetwork.com'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;