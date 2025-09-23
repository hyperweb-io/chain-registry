import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'iopntestnet',
  assets: [{
      description: 'Native token of Iopn Chain',
      denomUnits: [{
          denom: 'gwei',
          exponent: 0
        }, {
          denom: 'opn',
          exponent: 9
        }],
      base: 'gwei',
      name: 'Iopn Chain',
      display: 'opn',
      symbol: 'OPN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/iopntestnet/images/iopn_white_bg_99x99.png'
      },
      socials: {
        website: 'https://iopn.tech'
      },
      typeAsset: 'sdk.coin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/iopntestnet/images/iopn_white_bg_99x99.png'
        }]
    }]
};
export default info;