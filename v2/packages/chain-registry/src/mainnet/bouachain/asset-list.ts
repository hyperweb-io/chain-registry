import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'bouachain',
  assets: [{
      description: 'The native token of the Bouachain blockchain, used for transaction fees, staking, and governance.',
      denomUnits: [{
          denom: 'ubouacoin',
          exponent: 0
        }, {
          denom: 'bouacoin',
          exponent: 8
        }],
      base: 'ubouacoin',
      name: 'BOUACOIN',
      display: 'bouacoin',
      symbol: 'BOUA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bouachain/images/bouachain.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bouachain/images/bouachain.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bouachain/images/bouachain.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bouachain/images/bouachain.svg'
        }],
      socials: {
        website: 'https://Bouachain.com',
        github: 'https://github.com/bouachain',
        telegram: 'https://t.me/boua-chain',
        x: 'https://x.com/bouachain'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;