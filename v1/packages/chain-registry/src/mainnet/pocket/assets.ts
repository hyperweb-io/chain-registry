import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'pocket',
  assets: [{
      description: 'The native token of Pocket Network',
      denom_units: [{
          denom: 'upokt',
          exponent: 0
        }, {
          denom: 'pokt',
          exponent: 6
        }],
      base: 'upokt',
      name: 'POKT',
      display: 'pokt',
      symbol: 'POKT',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pocket/images/pokt-icon.svg'
      },
      keywords: ['rpc', 'api'],
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pocket/images/pokt-icon.svg'
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pocket/images/pokt-icon.png'
        }],
      socials: {
        website: 'https://pocket.network/',
        twitter: 'https://twitter.com/POKTnetwork'
      },
      type_asset: 'sdk.coin'
    }]
};
export default info;