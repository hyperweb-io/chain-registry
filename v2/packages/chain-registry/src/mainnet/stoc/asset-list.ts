import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'stoc',
  assets: [{
      description: 'STO Chain is an institutional-grade permissioned blockchain built specifically for regulated assets.',
      extendedDescription: 'STO Chain is a Cosmos-based blockchain network designed to enable the digitization, compliance, and cross-chain circulation of real assets such as real estate, stocks, and commodities through blockchain technology.',
      denomUnits: [{
          denom: 'ustoc',
          exponent: 0
        }, {
          denom: 'stoc',
          exponent: 6
        }],
      base: 'ustoc',
      name: 'STO Chain',
      display: 'stoc',
      symbol: 'STOC',
      typeAsset: 'sdk.coin',
      coingeckoId: 'sto-chain',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stoc/images/stoc-logo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stoc/images/stoc-logo.png'
        }]
    }]
};
export default info;