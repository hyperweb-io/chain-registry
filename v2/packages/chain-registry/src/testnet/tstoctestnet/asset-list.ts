import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'tstoctestnet',
  assets: [{
      description: 'STO Chain Testnet is an institutional-grade permissioned blockchain built specifically for regulated assets.',
      extendedDescription: 'STO Chain Testnet is a Cosmos-based blockchain network designed to enable the digitization, compliance, and cross-chain circulation of real assets such as real estate, stocks, and commodities through blockchain technology.',
      denomUnits: [{
          denom: 'utstoc',
          exponent: 0
        }, {
          denom: 'tstoc',
          exponent: 6
        }],
      base: 'utstoc',
      name: 'STO Chain Testnet',
      display: 'tstoc',
      symbol: 'TSTOC',
      typeAsset: 'sdk.coin',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'stoc',
            baseDenom: 'ustoc'
          },
          provider: 'STO Chain'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stoc/images/stoc-logo.png'
      },
      images: [{
          imageSync: {
            chainName: 'stoc',
            baseDenom: 'ustoc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stoc/images/stoc-logo.png'
        }]
    }]
};
export default info;