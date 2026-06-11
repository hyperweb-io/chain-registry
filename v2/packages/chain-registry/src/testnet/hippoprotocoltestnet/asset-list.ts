import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'hippoprotocoltestnet',
  assets: [{
      description: 'The native token of Hippo Protocol.',
      denomUnits: [{
          denom: 'ahp',
          exponent: 0
        }, {
          denom: 'hp',
          exponent: 18
        }],
      typeAsset: 'sdk.coin',
      base: 'ahp',
      name: 'Hippo',
      display: 'hp',
      symbol: 'HP',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'hippoprotocol',
            baseDenom: 'ahp'
          },
          provider: 'Hippo Protocol'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/hippoprotocol/images/logo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/hippoprotocol/images/logo.svg'
        }],
      socials: {
        website: 'https://hippoprotocol.ai/',
        x: 'https://x.com/Hippo_Protocol'
      }
    }]
};
export default info;