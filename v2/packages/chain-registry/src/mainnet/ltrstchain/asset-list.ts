import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'ltrstchain',
  assets: [{
      description: 'The native token of LTRST Chain. Used for transaction fees, staking, and governance. The chain is purpose-built to host legal, financial, and medical AI-generated projects and tools with protocol-level privacy.',
      denomUnits: [
        {
          denom: 'ultrst',
          exponent: 0,
          aliases: ['microltrst']
        },
        {
          denom: 'mltrst',
          exponent: 3,
          aliases: ['milliltrst']
        },
        {
          denom: 'LTRST',
          exponent: 6
        }
      ],
      typeAsset: 'sdk.coin',
      base: 'ultrst',
      name: 'LTRST',
      display: 'LTRST',
      symbol: 'LTRST',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ltrstchain/images/ltrst.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ltrstchain/images/ltrst.png'
        }]
    }]
};
export default info;