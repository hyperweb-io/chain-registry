import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'starname',
  assets: [{
      description: 'IOV coin is the token for the Starname (IOV) Asset Name Service',
      denomUnits: [{
          denom: 'uiov',
          exponent: 0
        }, {
          denom: 'iov',
          exponent: 6
        }],
      base: 'uiov',
      name: 'Starname',
      display: 'iov',
      symbol: 'IOV',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg'
        }],
      socials: {
        website: 'https://app.starname.me/',
        x: 'https://x.com/starname_me'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;