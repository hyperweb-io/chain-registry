import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'statemine',
  assets: [{
      denomUnits: [{
          denom: '130',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'substrate',
      base: '130',
      name: 'Statemine',
      display: 'usdt',
      symbol: 'USDT',
      coingeckoId: 'tether',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Tether'
        }]
    }]
};
export default info;