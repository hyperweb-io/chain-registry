import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'xarchain',
  assets: [{
      description: 'Xarchain stXar is the native cryptocurrency of the Arcana app chain (ceries), designed to orchestrate bridge-less interoperability between multiple blockchains',
      extendedDescription: 'Xarchain stXar powers the Arcana app chain by supporting network consensus through staking, ensuring security and trustless coordination across chains.',
      denomUnits: [{
          denom: 'stxar',
          exponent: 0
        }],
      base: 'stxar',
      name: 'XarchainSTAKE',
      display: 'stxar',
      symbol: 'STXAR',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xarchain/images/arcana_logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xarchain/images/arcana_logo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xarchain/images/arcana_logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xarchain/images/arcana_logo.svg',
          theme: {
            primaryColorHex: '#000000'
          }
        }],
      socials: {
        website: 'https://arcana.network',
        twitter: 'https://x.com/ArcanaNetwork'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;