import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'impacthubdevnet',
  assets: [{
      description: 'The native token of IXO Chain',
      denom_units: [{
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
            chain_name: 'impacthub',
            base_denom: 'uixo'
          },
          provider: 'impacthub'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/impacthubdevnet/images/ixo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/impacthubdevnet/images/ixo.svg'
      },
      coingecko_id: 'ixo',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/impacthubdevnet/images/ixo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/impacthubdevnet/images/ixo.svg'
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;