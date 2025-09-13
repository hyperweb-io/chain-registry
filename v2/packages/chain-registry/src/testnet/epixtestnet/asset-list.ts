import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'epixtestnet',
  assets: [{
      description: 'The EPIX coin, the lifeblood of the Epix network, providing the utility that powers every interaction and transaction within the ecosystem.',
      denomUnits: [{
          denom: 'aepix',
          exponent: 0
        }, {
          denom: 'epix',
          exponent: 18
        }],
      base: 'aepix',
      name: 'Epix Testnet',
      display: 'epix',
      symbol: 'TEPIX',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/epix/images/epix.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/epix/images/epix.svg'
      },
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'epix',
            baseDenom: 'aepix'
          },
          provider: 'Epix'
        }],
      images: [{
          imageSync: {
            chainName: 'epix',
            baseDenom: 'aepix'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/epix/images/epix.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/epix/images/epix.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;