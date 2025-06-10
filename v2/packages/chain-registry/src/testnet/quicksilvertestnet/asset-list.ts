import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'quicksilvertestnet',
  assets: [{
      description: 'QCK - native token of Quicksilver',
      denomUnits: [{
          denom: 'uqck',
          exponent: 0,
          aliases: []
        }, {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }],
      base: 'uqck',
      name: 'Quicksilver',
      display: 'qck',
      symbol: 'QCK',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'quicksilver',
            baseDenom: 'uqck'
          },
          provider: 'Quicksilver'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
      },
      coingeckoId: 'quicksilver',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;