import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'qubeticstestnet',
  assets: [{
      description: 'The native EVM, governance and staking token of the Qubetics Chain',
      denomUnits: [{
          denom: 'tics',
          exponent: 0
        }, {
          denom: 'TICS',
          exponent: 18
        }],
      base: 'tics',
      name: 'Qubetics Testnet',
      display: 'TICS',
      symbol: 'TICS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/qubeticstestnet/images/qubetics.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/qubeticstestnet/images/qubetics.png'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;