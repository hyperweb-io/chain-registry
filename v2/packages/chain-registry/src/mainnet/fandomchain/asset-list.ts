import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'fandomchain',
  assets: [{
      description: 'FANDOMCHAIN is the native token of the FANDOMCHAIN Network',
      denomUnits: [{
          denom: 'ufandomChain',
          exponent: 0
        }, {
          denom: 'FANDOMCHAIN',
          exponent: 9
        }],
      base: 'ufandomChain',
      name: 'FANDOMCHAIN',
      display: 'FANDOMCHAIN',
      symbol: 'FANDOMCHAIN',
      typeAsset: 'sdk.coin',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fandomchain/images/fandomchain.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fandomchain/images/fandomchain.png'
        }],
      socials: {
        website: 'https://fandom-chain-website.vercel.app'
      }
    }]
};
export default info;