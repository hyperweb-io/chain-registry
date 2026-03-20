import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'coreumtestnet',
  assets: [{
      description: 'The native token of TX',
      denomUnits: [{
          denom: 'utestcore',
          exponent: 0
        }, {
          denom: 'testtx',
          exponent: 6
        }],
      base: 'utestcore',
      name: 'TX',
      display: 'testtx',
      symbol: 'TESTTX',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'coreum',
            baseDenom: 'ucore'
          },
          provider: 'TX'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/tx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/tx.svg'
      },
      coingeckoId: 'tx',
      keywords: [
        'L1',
        'RWA',
        'RWA Protocol',
        'RWA Marketplace',
        'tokenization'
      ],
      images: [{
          imageSync: {
            chainName: 'coreum',
            baseDenom: 'ucore'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/tx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/tx.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;