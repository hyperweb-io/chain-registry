import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'comdex',
  assets: [
    {
      description: 'Native Token of Comdex Protocol',
      denomUnits: [{
          denom: 'ucmdx',
          exponent: 0
        }, {
          denom: 'cmdx',
          exponent: 6
        }],
      base: 'ucmdx',
      name: 'Comdex',
      display: 'cmdx',
      symbol: 'CMDX',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
      },
      coingeckoId: 'comdex',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Governance Token of Harbor protocol on Comdex network',
      denomUnits: [{
          denom: 'uharbor',
          exponent: 0
        }, {
          denom: 'harbor',
          exponent: 6
        }],
      base: 'uharbor',
      name: 'Harbor',
      display: 'harbor',
      symbol: 'HARBOR',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Stable Token of Harbor protocol on Comdex network',
      denomUnits: [{
          denom: 'ucmst',
          exponent: 0
        }, {
          denom: 'cmst',
          exponent: 6
        }],
      base: 'ucmst',
      name: 'CMST',
      display: 'cmst',
      symbol: 'CMST',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
      },
      coingeckoId: 'composite',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
        }],
      typeAsset: 'sdk.coin'
    }
  ]
};
export default info;