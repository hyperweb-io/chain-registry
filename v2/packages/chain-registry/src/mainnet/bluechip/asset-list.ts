import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'bluechip',
  assets: [{
      description: 'The native staking token of the Bluechip Chain.',
      denomUnits: [
        {
          denom: 'ubluechip',
          exponent: 0,
          aliases: ['microbluechip']
        },
        {
          denom: 'mbluechip',
          exponent: 3,
          aliases: ['millibluechip']
        },
        {
          denom: 'bluechip',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ubluechip',
      name: 'Bluechip',
      display: 'bluechip',
      symbol: 'BCP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluechip/images/bluechip.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluechip/images/bluechip.png'
        }],
      typeAsset: 'sdk.coin',
      keywords: [
        'staking',
        'defi',
        'creator-economy'
      ]
    }]
};
export default info;