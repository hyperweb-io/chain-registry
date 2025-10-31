import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'atomone',
  assets: [{
      description: 'The native staking and governance token of AtomOne',
      denomUnits: [{
          denom: 'uatone',
          exponent: 0
        }, {
          denom: 'atone',
          exponent: 6
        }],
      base: 'uatone',
      name: 'Atone',
      display: 'atone',
      symbol: 'ATONE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.svg'
        }],
      typeAsset: 'sdk.coin',
      socials: {
        website: 'https://atom.one',
        x: 'https://x.com/_atomone'
      },
      coingeckoId: 'atomone'
    }, {
      description: 'The fee token of AtomOne',
      denomUnits: [{
          denom: 'uphoton',
          exponent: 0
        }, {
          denom: 'photon',
          exponent: 6
        }],
      base: 'uphoton',
      name: 'Photon',
      display: 'photon',
      symbol: 'PHOTON',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/photon.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/photon.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/photon.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/photon.svg'
        }],
      typeAsset: 'sdk.coin',
      socials: {
        website: 'https://atom.one',
        x: 'https://x.com/_atomone'
      },
      coingeckoId: 'photon-2'
    }]
};
export default info;