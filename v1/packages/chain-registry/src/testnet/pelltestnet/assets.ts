import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'pelltestnet',
  assets: [{
      description: 'The native staking and governance token of the testnet version of Pell Network.',
      denom_units: [{
          denom: 'apell',
          exponent: 0
        }, {
          denom: 'pell',
          exponent: 18
        }],
      base: 'apell',
      name: 'PELL',
      display: 'pell',
      symbol: 'PELL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pelltestnet/images/pell.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pelltestnet/images/pell.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pelltestnet/images/pell.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pelltestnet/images/pell.svg'
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;