import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'provenancetestnet',
  assets: [{
      description: 'Hash is the staking token of the Provenance Blockchain',
      denomUnits: [{
          denom: 'nhash',
          exponent: 0
        }, {
          denom: 'hash',
          exponent: 9
        }],
      base: 'nhash',
      name: 'Hash',
      display: 'hash',
      symbol: 'HASH',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'provenance',
            baseDenom: 'nhash'
          },
          provider: 'Provenance'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
      },
      images: [{
          imageSync: {
            chainName: 'provenance',
            baseDenom: 'nhash'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
        }],
      typeAsset: 'sdk.coin',
      coingeckoId: 'hash-2'
    }]
};
export default info;