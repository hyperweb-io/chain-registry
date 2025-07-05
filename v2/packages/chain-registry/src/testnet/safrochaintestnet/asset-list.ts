import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'safrochaintestnet',
  assets: [{
      description: 'The native token of Safrochain testnet used for staking, governance, and gas fees.',
      denomUnits: [{
          denom: 'usaf',
          exponent: 0,
          aliases: ['microsaf']
        }, {
          denom: 'saf',
          exponent: 6
        }],
      base: 'usaf',
      name: 'Safrochain',
      display: 'saf',
      symbol: 'SAF',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/safrochaintestnet/images/saf.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/safrochaintestnet/images/saf.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/safrochaintestnet/images/saf.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/safrochaintestnet/images/saf.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;