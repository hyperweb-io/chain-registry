import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'qorechaintestnet',
  assets: [{
      description: 'Testnet QOR, the native staking, gas and governance token of the QoreChain test network (quantum-safe Layer 1 with hybrid post-quantum signing).',
      denomUnits: [{
          denom: 'uqor',
          exponent: 0
        }, {
          denom: 'qor',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'uqor',
      name: 'QoreChain',
      display: 'qor',
      symbol: 'QOR',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qorechain/images/qorechain.png'
      },
      images: [{
          imageSync: {
            chainName: 'qorechain',
            baseDenom: 'uqor'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qorechain/images/qorechain.png'
        }],
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'qorechain',
            baseDenom: 'uqor'
          },
          provider: 'QoreChain'
        }]
    }]
};
export default info;