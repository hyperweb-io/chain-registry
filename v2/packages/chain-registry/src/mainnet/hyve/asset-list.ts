import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'hyve',
  assets: [{
      description: 'The native staking, governance and gas token of HyveChain.',
      denomUnits: [{
          denom: 'ahyve',
          exponent: 0,
          aliases: ['attohyve']
        }, {
          denom: 'HYVE',
          exponent: 18
        }],
      base: 'ahyve',
      name: 'Hyve',
      display: 'HYVE',
      symbol: 'HYVE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/hyve/images/hyve.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/hyve/images/hyve.png'
        }],
      socials: {
        website: 'https://hyvechain.com'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;