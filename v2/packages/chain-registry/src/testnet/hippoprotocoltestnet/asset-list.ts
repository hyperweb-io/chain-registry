import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'hippoprotocoltestnet',
  assets: [{
      description: 'The native token of Hippo Protocol.',
      denomUnits: [{
          denom: 'ahp',
          exponent: 0
        }],
      typeAsset: 'sdk.coin',
      base: 'ahp',
      name: 'Hippo',
      display: 'ahp',
      symbol: 'HP',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/hippoprotocol/images/logo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/hippoprotocol/images/logo.svg'
        }],
      coingeckoId: 'hippo-protocol',
      socials: {
        website: 'https://hippoprotocol.ai/',
        twitter: 'https://x.com/Hippo_Protocol'
      }
    }]
};
export default info;