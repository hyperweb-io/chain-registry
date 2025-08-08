import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'outbedevnet',
  assets: [{
      description: 'The native token of outbe-node',
      denomUnits: [{
          denom: 'unit',
          exponent: 0
        }, {
          denom: 'coen',
          exponent: 18
        }],
      base: 'unit',
      name: 'coen',
      display: 'coen',
      symbol: 'COEN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/outbedevnet/images/outbe.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/outbedevnet/images/outbe.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/outbedevnet/images/outbe.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/outbedevnet/images/outbe.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;