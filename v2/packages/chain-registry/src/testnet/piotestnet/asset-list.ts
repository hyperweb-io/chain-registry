import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'piotestnet',
  assets: [{
      description: 'The native coin of PIO Testnet, used for fees, staking and mining rewards. Testnet coins have no monetary value.',
      denomUnits: [{
          denom: 'spio',
          exponent: 0
        }, {
          denom: 'tpio',
          exponent: 18
        }],
      base: 'spio',
      name: 'PIO Testnet',
      display: 'tpio',
      symbol: 'tPIO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/piotestnet/images/pio.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/piotestnet/images/pio.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/piotestnet/images/pio.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/piotestnet/images/pio.svg',
          theme: {
            darkMode: false
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;