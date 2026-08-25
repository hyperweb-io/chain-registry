import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'celestiatestnet4',
  assets: [{
      denomUnits: [{
          denom: 'utia',
          exponent: 0
        }, {
          denom: 'tia',
          exponent: 6
        }],
      base: 'utia',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'celestia',
            baseDenom: 'utia'
          },
          provider: 'Celestia'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      },
      images: [{
          imageSync: {
            chainName: 'celestia',
            baseDenom: 'utia'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;