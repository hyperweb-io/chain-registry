import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'steemvm',
  assets: [{
      description: 'STEEM bridged 1:1 from the Steem blockchain. The gas and staking token of SteemVM.',
      denomUnits: [{
          denom: 'asteem',
          exponent: 0
        }, {
          denom: 'steem',
          exponent: 18
        }],
      typeAsset: 'sdk.coin',
      base: 'asteem',
      name: 'Steem',
      display: 'steem',
      symbol: 'STEEM',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'steem',
            baseDenom: '@@000000021'
          },
          provider: 'SteemVM'
        }],
      images: [{
          imageSync: {
            chainName: 'steem',
            baseDenom: '@@000000021'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/steem/images/steem.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/steem/images/steem.svg'
        }]
    }, {
      description: 'SBD bridged 1:1 from the Steem blockchain.',
      denomUnits: [{
          denom: 'asbd',
          exponent: 0
        }, {
          denom: 'sbd',
          exponent: 18
        }],
      typeAsset: 'sdk.coin',
      base: 'asbd',
      name: 'Steem Dollars',
      display: 'sbd',
      symbol: 'SBD',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'steem',
            baseDenom: '@@000000013'
          },
          provider: 'SteemVM'
        }],
      images: [{
          imageSync: {
            chainName: 'steem',
            baseDenom: '@@000000013'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/steem/images/sbd.png'
        }]
    }]
};
export default info;