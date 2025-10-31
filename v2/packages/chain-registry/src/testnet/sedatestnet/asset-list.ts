import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'sedatestnet',
  assets: [{
      description: 'The testnet token of SEDA Chain.',
      extendedDescription: 'SEDA is a standard for modular data transport and querying. Any data type, for all networks.',
      denomUnits: [{
          denom: 'aseda',
          exponent: 0
        }, {
          denom: 'seda',
          exponent: 18
        }],
      base: 'aseda',
      name: 'Seda',
      display: 'seda',
      symbol: 'SEDA',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'seda',
            baseDenom: 'aseda'
          },
          provider: 'Seda'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.png'
      },
      images: [{
          imageSync: {
            chainName: 'seda',
            baseDenom: 'aseda'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.png'
        }],
      socials: {
        website: 'https://www.seda.xyz/',
        x: 'https://x.com/sedaprotocol'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;