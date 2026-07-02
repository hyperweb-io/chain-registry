import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'limonatatestnet',
  assets: [{
      description: 'LIMO is the native gas and staking token of Limonata, an EVM Layer-1 on the Cosmos SDK.',
      denomUnits: [{
          denom: 'aLIMO',
          exponent: 0
        }, {
          denom: 'LIMO',
          exponent: 18
        }],
      base: 'aLIMO',
      name: 'Limonata',
      display: 'LIMO',
      symbol: 'LIMO',
      typeAsset: 'sdk.coin',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/limonatatestnet/images/limonatatestnet.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/limonatatestnet/images/limonatatestnet.png'
        }]
    }]
};
export default info;