import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'bitcanna',
  assets: [{
      description: 'The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.',
      denomUnits: [{
          denom: 'ubcna',
          exponent: 0
        }, {
          denom: 'bcna',
          exponent: 6
        }],
      base: 'ubcna',
      display: 'bcna',
      name: 'BitCanna',
      symbol: 'BCNA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
      },
      coingeckoId: 'bitcanna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg',
          theme: {
            primaryColorHex: '#3cc494'
          }
        }],
      socials: {
        website: 'http://www.bitcanna.io/',
        twitter: 'https://twitter.com/BitCannaGlobal'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;