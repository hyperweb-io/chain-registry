import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'sunimatestnet',
  assets: [{
      description: 'The native staking and gas token of the Sunima Testnet.',
      denomUnits: [{
          denom: 'tsuna',
          exponent: 0
        }, {
          denom: 'tSUNA',
          exponent: 6
        }],
      base: 'tsuna',
      name: 'Sunima Testnet',
      display: 'tSUNA',
      symbol: 'tSUNA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/sunimatestnet/images/sunima.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/sunimatestnet/images/sunima.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;