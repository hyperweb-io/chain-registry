import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'lefeef',
  assets: [{
      description: 'A secure, scalable blockchain empowering seamless dApps and efficient token transactions.',
      denomUnits: [
        {
          denom: 'ulefeef',
          exponent: 0
        },
        {
          denom: 'mlefeef',
          exponent: 3
        },
        {
          denom: 'lefeef',
          exponent: 6
        }
      ],
      base: 'ulefeef',
      name: 'LEFEEF',
      display: 'lefeef',
      symbol: 'LEFEEF',
      socials: {
        website: 'https://lefeef.net',
        twitter: 'https://x.com/lefeef2024'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;