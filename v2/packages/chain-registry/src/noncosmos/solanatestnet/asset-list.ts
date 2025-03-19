import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../../assetlist.schema.json',
  chainName: 'solanatestnet',
  assets: [{
      description: 'The testnet version of Solana.',
      denomUnits: [{
          denom: 'Lamport',
          exponent: 0
        }, {
          denom: 'SOL',
          exponent: 9
        }],
      typeAsset: 'svm-base',
      base: 'Lamport',
      name: 'Solana',
      display: 'SOL',
      symbol: 'SOL',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'Lamport'
          },
          provider: 'Solana'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.svg'
      },
      coingeckoId: 'solana',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.png',
          theme: {
            circle: true,
            backgroundColorHex: '#000000'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg',
          theme: {
            circle: false,
            backgroundColorHex: '#00000000'
          }
        }]
    }]
};
export default info;