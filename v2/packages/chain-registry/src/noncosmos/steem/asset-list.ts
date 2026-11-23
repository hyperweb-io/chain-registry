import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'steem',
  assets: [{
      description: 'The native token of the Steem blockchain.',
      denomUnits: [{
          denom: '@@000000021',
          exponent: 0
        }, {
          denom: 'steem',
          exponent: 3
        }],
      typeAsset: 'unknown',
      base: '@@000000021',
      name: 'Steem',
      display: 'steem',
      symbol: 'STEEM',
      coingeckoId: 'steem',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/steem/images/steem.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/steem/images/steem.svg'
        }],
      socials: {
        website: 'https://steem.com/',
        x: 'https://x.com/steemit'
      }
    }, {
      description: 'Steem Dollars, the debt token of the Steem blockchain, convertible to STEEM at the witness price feed.',
      denomUnits: [{
          denom: '@@000000013',
          exponent: 0
        }, {
          denom: 'sbd',
          exponent: 3
        }],
      typeAsset: 'unknown',
      base: '@@000000013',
      name: 'Steem Dollars',
      display: 'sbd',
      symbol: 'SBD',
      coingeckoId: 'steem-dollars',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/steem/images/sbd.png'
        }],
      socials: {
        website: 'https://steem.com/',
        x: 'https://x.com/steemit'
      }
    }]
};
export default info;