import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'ggezchain',
  assets: [{
      description: 'The Governance Coin of the GGEZ1 Network.',
      denomUnits: [
        {
          denom: 'uggez1',
          exponent: 0
        },
        {
          denom: 'mggez1',
          exponent: 3
        },
        {
          denom: 'ggez1',
          exponent: 6
        }
      ],
      base: 'uggez1',
      name: 'GGEZ1',
      display: 'ggez1',
      symbol: 'GGEZ1',
      coingeckoId: 'ggez1',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ggezchain/images/ggez1.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ggezchain/images/ggez1.png'
        }],
      socials: {
        website: 'https://ggez.one',
        twitter: 'https://x.com/ggez_one'
      },
      typeAsset: 'sdk.coin'
    }, {
      description: 'The ReFi Coin of the GGEZ1 Network.',
      denomUnits: [
        {
          denom: 'uggz',
          exponent: 0
        },
        {
          denom: 'mggz',
          exponent: 3
        },
        {
          denom: 'ggz',
          exponent: 6
        }
      ],
      typeAsset: 'sdk.coin',
      base: 'uggz',
      name: 'GGZ',
      display: 'uggz',
      symbol: 'GGZ',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ggezchain/images/ggz.png'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ggezchain/images/ggz.png'
      },
      socials: {
        website: 'https://ggez.one',
        twitter: 'https://x.com/ggez_one'
      }
    }]
};
export default info;