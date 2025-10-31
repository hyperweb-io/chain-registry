import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'qubetics',
  assets: [{
      description: 'The EVM, governance and staking token of the qubetics Chain',
      denomUnits: [{
          denom: 'tics',
          exponent: 0
        }, {
          denom: 'TICS',
          exponent: 18
        }],
      base: 'tics',
      name: 'Qubetics Mainnet',
      display: 'TICS',
      symbol: 'TICS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qubetics/images/qubetics.png'
      },
      coingeckoId: 'qubetics',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qubetics/images/qubetics.png'
        }],
      socials: {
        website: 'https://www.qubetics.com/',
        x: 'https://x.com/qubetics'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;