import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'hazinachain',
  assets: [{
      description: 'The native staking and governance token of HazinaChain',
      denomUnits: [{
          denom: 'uhzn',
          exponent: 0
        }, {
          denom: 'HZN',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'uhzn',
      name: 'Hazina',
      display: 'HZN',
      symbol: 'HZN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/hazinachain/images/hazinachain.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/hazinachain/images/hazinachain.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/hazinachain/images/hazinachain.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/hazinachain/images/hazinachain.svg'
        }]
    }]
};
export default info;