import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'seitestnet2',
  assets: [{
      description: 'The native staking and governance token of the Atlantic testnet version of Sei.',
      denomUnits: [{
          denom: 'usei',
          exponent: 0
        }, {
          denom: 'sei',
          exponent: 6
        }],
      base: 'usei',
      name: 'Sei',
      display: 'sei',
      symbol: 'SEI',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/seitestnet2/images/sei.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/seitestnet2/images/sei.png'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;