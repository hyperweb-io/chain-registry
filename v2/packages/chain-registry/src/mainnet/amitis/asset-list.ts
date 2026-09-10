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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/amitis/images/amts.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/amitis/images/amts.png'
        }],
      keywords: [
        'native',
        'fee-rebate',
        'cooperative'
      ]
    }]
};
export default info;