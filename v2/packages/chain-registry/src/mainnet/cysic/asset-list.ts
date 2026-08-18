import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'cysic',
  assets: [{
      description: 'The native utility, reward, and fee token of Cysic Network.',
      denomUnits: [{
          denom: 'CYS',
          exponent: 0
        }, {
          denom: 'cys',
          exponent: 18
        }],
      typeAsset: 'sdk.coin',
      base: 'CYS',
      name: 'Cysic',
      display: 'cys',
      symbol: 'CYS',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cysic/images/cysic.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cysic/images/cysic.svg'
        }],
      coingeckoId: 'cysic',
      socials: {
        website: 'https://cysic.xyz/',
        x: 'https://x.com/cysic_xyz'
      }
    }, {
      description: 'The staking and governance token of Cysic Network.',
      denomUnits: [{
          denom: 'CGT',
          exponent: 0
        }, {
          denom: 'cgt',
          exponent: 18
        }],
      typeAsset: 'sdk.coin',
      base: 'CGT',
      name: 'Cysic Governance Token',
      display: 'cgt',
      symbol: 'CGT',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cysic/images/cysic.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cysic/images/cysic.svg'
        }],
      socials: {
        website: 'https://cysic.xyz/',
        x: 'https://x.com/cysic_xyz'
      }
    }]
};
export default info;