import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'airchainsvaranasitestnet',
  assets: [{
      description: 'The native staking token of Airchains Testnet.',
      denomUnits: [{
          denom: 'uamf',
          exponent: 0
        }, {
          denom: 'AMF',
          exponent: 6
        }],
      base: 'uamf',
      name: 'Airchains',
      display: 'AMF',
      symbol: 'AMF',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/airchainsvaranasitestnet/images/airchains-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/airchainsvaranasitestnet/images/airchains-logo.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;