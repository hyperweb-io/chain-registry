import { AssetList } from '@chain-registry/types';
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
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chainName: 'airchainstestnet',
            baseDenom: 'amf'
          },
          provider: 'Airchains'
        }],
      images: [{
          imageSync: {
            chainName: 'airchainstestnet',
            baseDenom: 'amf'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/airchainstestnet/images/airchains-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/airchainstestnet/images/airchains-logo.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;