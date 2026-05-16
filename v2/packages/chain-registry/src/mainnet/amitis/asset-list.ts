import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'amitis',
  assets: [{
      description: 'The native token of the Amitis Network. AMTS powers the cooperative Layer 1 blockchain that returns 80% of transaction fees to users.',
      typeAsset: 'sdk.coin',
      denomUnits: [{
          denom: 'uamts',
          exponent: 0
        }, {
          denom: 'amts',
          exponent: 6
        }],
      base: 'uamts',
      name: 'Amitis',
      display: 'amts',
      symbol: 'AMTS',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/amitis/images/amts.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/amitis/images/amts.svg'
        }],
      keywords: [
        'native',
        'staking',
        'fee-rebate',
        'dex'
      ]
    }]
};
export default info;