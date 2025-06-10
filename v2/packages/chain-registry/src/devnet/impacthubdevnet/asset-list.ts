import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'impacthubdevnet',
  assets: [{
      description: 'The native token of IXO Chain',
      denomUnits: [{
          denom: 'uixo',
          exponent: 0
        }, {
          denom: 'ixo',
          exponent: 6
        }],
      base: 'uixo',
      name: 'IXO',
      display: 'ixo',
      symbol: 'IXO',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'impacthub',
            baseDenom: 'uixo'
          },
          provider: 'impacthub'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/impacthubdevnet/images/ixo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/impacthubdevnet/images/ixo.svg'
      },
      coingeckoId: 'ixo',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/impacthubdevnet/images/ixo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/impacthubdevnet/images/ixo.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;