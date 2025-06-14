import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'impacthub',
  assets: [{
      description: 'The native token of the Internet of Impacts of inter-connected networks, powered by IXO Protocol blockchains.',
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
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
      },
      coingeckoId: 'ixo',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg',
          theme: {
            primaryColorHex: '#2c4484'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;