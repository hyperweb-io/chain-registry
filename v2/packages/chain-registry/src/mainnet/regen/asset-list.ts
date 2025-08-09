import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'regen',
  assets: [{
      description: 'REGEN coin is the token for the Regen Network Platform',
      denomUnits: [{
          denom: 'uregen',
          exponent: 0
        }, {
          denom: 'regen',
          exponent: 6
        }],
      base: 'uregen',
      name: 'Regen Network',
      display: 'regen',
      symbol: 'REGEN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg'
      },
      coingeckoId: 'regen',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg'
        }],
      socials: {
        website: 'https://www.regen.network/',
        twitter: 'https://twitter.com/regen_network'
      },
      typeAsset: 'sdk.coin'
    }, {
      description: 'Nature Carbon Ton (NCT) is a carbon token standard backed 1:1 by carbon credits issued by Verra, a global leader in the voluntary carbon market. NCT credits on Regen Network have been tokenized by Toucan.earth.',
      denomUnits: [{
          denom: 'eco.uC.NCT',
          exponent: 0
        }, {
          denom: 'nct',
          exponent: 6
        }],
      base: 'eco.uC.NCT',
      name: 'Nature Carbon Ton',
      display: 'nct',
      symbol: 'NCT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg'
      },
      coingeckoId: 'toucan-protocol-nature-carbon-tonne',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;