import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'sourcetestnet',
  assets: [{
      description: 'The native token of SOURCE Chain',
      denomUnits: [{
          denom: 'usource',
          exponent: 0
        }, {
          denom: 'source',
          exponent: 6
        }],
      base: 'usource',
      name: 'Source Testnet',
      display: 'source',
      symbol: 'SOURCE',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'source',
            baseDenom: 'usource'
          },
          provider: 'Source'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg'
      },
      images: [{
          imageSync: {
            chainName: 'source',
            baseDenom: 'usource'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;