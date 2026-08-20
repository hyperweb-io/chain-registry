import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'sovr',
  assets: [{
      description: 'SOVR is the sole unit of account of the Sovren Layer 1: staking, governance, gas, and service payments.',
      denomUnits: [{
          denom: 'usovr',
          exponent: 0
        }, {
          denom: 'sovr',
          exponent: 6,
          aliases: ['SOVR']
        }],
      typeAsset: 'sdk.coin',
      base: 'usovr',
      display: 'sovr',
      name: 'Sovren',
      symbol: 'SOVR',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sovr/images/sovr.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sovr/images/sovr.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sovr/images/sovr.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sovr/images/sovr.svg'
        }],
      socials: {
        website: 'https://sovrentech.io',
        x: 'https://x.com/sovrentech'
      }
    }]
};
export default info;