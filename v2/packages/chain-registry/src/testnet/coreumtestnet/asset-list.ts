import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'coreumtestnet',
  assets: [{
      description: 'The native token of Coreum',
      denomUnits: [{
          denom: 'utestcore',
          exponent: 0
        }, {
          denom: 'testcore',
          exponent: 6
        }],
      base: 'utestcore',
      name: 'Coreum',
      display: 'testcore',
      symbol: 'TESTCORE',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'coreum',
            baseDenom: 'ucore'
          },
          provider: 'Coreum'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
      },
      coingeckoId: 'coreum',
      keywords: [
        'dex',
        'staking',
        'wasm',
        'assets',
        'nft',
        'XRPL'
      ],
      images: [{
          imageSync: {
            chainName: 'coreum',
            baseDenom: 'ucore'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;