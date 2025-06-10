import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'secretnetworktestnet',
  assets: [{
      description: 'The native token of Secret Network',
      denomUnits: [{
          denom: 'uscrt',
          exponent: 0
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'uscrt',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'secretnetwork',
            baseDenom: 'uscrt'
          },
          provider: 'Secret Network'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
      },
      coingeckoId: 'secret',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;