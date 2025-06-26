import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'safrochaintestnet',
  assets: [{
      description: 'The native token of Safrochain testnet used for staking, governance, and fees.',
      denomUnits: [
        {
          denom: 'saf',
          exponent: 0,
          aliases: ['microsaf']
        },
        {
          denom: 'kuta',
          exponent: 3,
          aliases: ['millisaf']
        },
        {
          denom: 'hela',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'saf',
      name: 'Safrochain',
      display: 'hela',
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