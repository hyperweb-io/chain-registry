import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'cifer',
  assets: [{
      description: 'Cifer Blockchain Network Built for Decentralized Machine Learning.',
      denomUnits: [{
          denom: 'ucif',
          exponent: 0
        }, {
          denom: 'cif',
          exponent: 6
        }],
      base: 'ucif',
      name: 'Cifer',
      display: 'cif',
      symbol: 'CIF',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg',
          theme: {
            primaryColorHex: '#5F53C8'
          }
        }],
      socials: {
        website: 'http://cifer.ai',
        twitter: 'https://x.com/cifer_ai',
        github: 'https://github.com/CiferAI'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;