import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'thejaynetwork',
  assets: [{
      description: 'The native staking and governance token of The Jay Network.',
      denomUnits: [{
          denom: 'ujay',
          exponent: 0
        }, {
          denom: 'jay',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'ujay',
      name: 'Jay Token',
      display: 'jay',
      symbol: 'JAY',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/thejaynetwork/images/thejaynetwork.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/thejaynetwork/images/thejaynetwork.png'
        }]
    }]
};
export default info;