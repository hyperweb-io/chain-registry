import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'xpex',
  assets: [{
      description: 'XPX, the native staking and fee token of XPEX Chain.',
      denomUnits: [{
          denom: 'uxpx',
          exponent: 0
        }, {
          denom: 'xpx',
          exponent: 6
        }],
      base: 'uxpx',
      name: 'XPEX',
      display: 'xpx',
      symbol: 'XPX',
      typeAsset: 'sdk.coin',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpex/images/xpx.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpex/images/xpx.png'
        }]
    }]
};
export default info;