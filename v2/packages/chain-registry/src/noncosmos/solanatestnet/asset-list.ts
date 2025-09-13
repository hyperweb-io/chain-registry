import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../../assetlist.schema.json',
  chainName: 'solanatestnet',
  assets: [
    {
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
          imageSync: {
            chainName: 'solana',
            baseDenom: 'Lamport'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.svg',
          theme: {
            circle: true
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg',
          theme: {
            circle: false
          }
        }]
    },
    {
      typeAsset: 'erc20',
      address: 'So11111111111111111111111111111111111111112',
      denomUnits: [{
          denom: 'So11111111111111111111111111111111111111112',
          exponent: 0
        }, {
          denom: 'wsol',
          exponent: 9
        }],
      base: 'So11111111111111111111111111111111111111112',
      name: 'Wrapped SOL',
      display: 'wsol',
      symbol: 'WSOL',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chainName: 'solanatestnet',
            baseDenom: 'Lamport'
          },
          provider: 'Solana'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.svg'
      },
      coingeckoId: 'wrapped-solana',
      images: [{
          imageSync: {
            chainName: 'solanatestnet',
            baseDenom: 'Lamport'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.png',
          theme: {
            circle: true
          }
        }]
    },
    {
      description: 'The Meow token',
      typeAsset: 'erc20',
      address: 'HYGEZGU5kRh9vjw723wuyjUQGe654ByRQzQRP7PWxgMa',
      denomUnits: [{
          denom: 'HYGEZGU5kRh9vjw723wuyjUQGe654ByRQzQRP7PWxgMa',
          exponent: 0
        }, {
          denom: 'meow',
          exponent: 8
        }],
      base: 'HYGEZGU5kRh9vjw723wuyjUQGe654ByRQzQRP7PWxgMa',
      name: 'MEOW',
      display: 'meow',
      symbol: 'MEOW',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'BUhS5coXEt9hcxN3JSpGYUWSKbNo96RsKu52LcMo12rf'
          },
          provider: 'Solana'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/meow.png'
      },
      coingeckoId: 'meow',
      images: [{
          imageSync: {
            chainName: 'solana',
            baseDenom: 'BUhS5coXEt9hcxN3JSpGYUWSKbNo96RsKu52LcMo12rf'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/meow.png'
        }]
    },
    {
      description: 'The Oracler AI token',
      typeAsset: 'erc20',
      address: '3AoNjsp7M2k9tsaNpKjcBWC5JQi67BinysbVnrcPjKNt',
      denomUnits: [{
          denom: '3AoNjsp7M2k9tsaNpKjcBWC5JQi67BinysbVnrcPjKNt',
          exponent: 0
        }, {
          denom: 'oracler',
          exponent: 6
        }],
      base: '3AoNjsp7M2k9tsaNpKjcBWC5JQi67BinysbVnrcPjKNt',
      name: 'ORACLER',
      display: 'oracler',
      symbol: 'ORACLER',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/oracler.png'
      },
      coingeckoId: 'oracler-ai',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/oracler.png'
        }]
    }
  ]
};
export default info;