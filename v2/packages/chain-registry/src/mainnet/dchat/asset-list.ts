import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'dchat',
  assets: [{
      description: 'Shh (SHH) is the native token of the DChat chain. It pays network fees, is staked to secure the chain and pays for DChat services.',
      denomUnits: [{
          denom: 'udchat',
          exponent: 0
        }, {
          denom: 'shh',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'udchat',
      name: 'Shh',
      display: 'shh',
      symbol: 'SHH',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dchat/images/shh.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dchat/images/shh.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dchat/images/shh.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dchat/images/shh.svg',
          theme: {
            circle: true,
            darkMode: false
          }
        }],
      socials: {
        website: 'https://dchat.online'
      }
    }]
};
export default info;