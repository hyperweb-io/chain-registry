import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'zerone',
  assets: [{
      description: 'The native staking and governance token of Zerone',
      denomUnits: [
        {
          denom: 'uzrn',
          exponent: 0,
          aliases: ['microzrn']
        },
        {
          denom: 'mzrn',
          exponent: 3,
          aliases: ['millizrn']
        },
        {
          denom: 'zrn',
          exponent: 6
        }
      ],
      typeAsset: 'sdk.coin',
      base: 'uzrn',
      name: 'Zerone',
      display: 'zrn',
      symbol: 'ZRN',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zerone/images/zrn.svg',
          theme: {
            circle: false
          }
        }],
      keywords: [
        'ai',
        'agents',
        'knowledge',
        'provenance'
      ],
      socials: {
        website: 'https://zerone.ai/',
        github: 'https://github.com/cambridgetcg/zerone-core'
      }
    }]
};
export default info;