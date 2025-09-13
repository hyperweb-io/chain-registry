import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'fetchhubtestnet',
  assets: [{
      description: 'The native staking and governance token of the Fetch Hub.',
      denomUnits: [{
          denom: 'atestfet',
          exponent: 0
        }, {
          denom: 'testfet',
          exponent: 18
        }],
      base: 'atestfet',
      name: 'fetch-ai',
      display: 'testfet',
      symbol: 'FET',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'fetchhub',
            baseDenom: 'afet'
          },
          provider: 'Bitcanna'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg'
      },
      coingeckoId: 'fetch-ai',
      images: [{
          imageSync: {
            chainName: 'fetchhub',
            baseDenom: 'afet'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;