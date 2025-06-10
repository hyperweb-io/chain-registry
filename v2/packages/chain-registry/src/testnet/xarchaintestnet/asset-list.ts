import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'xarchaintestnet',
  assets: [{
      description: 'Xarchain Stake is the native cryptocurrency of the Arcana app chain (ceries), designed to orchestrate bridge-less interoperability between multiple blockchains',
      extendedDescription: 'Xarchain Stake powers the Arcana app chain by supporting network consensus through staking, ensuring security and trustless coordination across chains.',
      denomUnits: [{
          denom: 'stake',
          exponent: 0
        }],
      base: 'stake',
      name: 'XarchainSTAKE',
      display: 'stake',
      symbol: 'STAKE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/xarchaintestnet/images/arcana_logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/xarchaintestnet/images/arcana_logo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/xarchaintestnet/images/arcana_logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/xarchaintestnet/images/arcana_logo.svg',
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