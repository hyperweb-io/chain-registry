import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'imversed',
  assets: [{
      description: 'The native EVM, governance and staking token of the Imversed',
      denom_units: [{
          denom: 'aimv',
          exponent: 0
        }, {
          denom: 'imv',
          exponent: 18
        }],
      base: 'aimv',
      name: 'IMV',
      display: 'imv',
      symbol: 'IMV',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg',
          theme: {
            primary_color_hex: '#4c54e4'
          }
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;