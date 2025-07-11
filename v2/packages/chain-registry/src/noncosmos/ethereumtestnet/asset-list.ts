import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../../assetlist.schema.json',
  chainName: 'ethereumtestnet',
  assets: [
    {
      description: 'Ether is the native fee token of the Ethereum network.',
      denomUnits: [
        {
          denom: 'wei',
          exponent: 0
        },
        {
          denom: 'gwei',
          exponent: 9
        },
        {
          denom: 'eth',
          exponent: 18,
          aliases: ['ether']
        }
      ],
      typeAsset: 'evm-base',
      base: 'wei',
      name: 'Ether',
      display: 'eth',
      symbol: 'ETH',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Ethereum'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
      },
      coingeckoId: 'ethereum',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
        }]
    },
    {
      description: 'wETH is \'wrapped ETH\'',
      typeAsset: 'erc20',
      address: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
      denomUnits: [{
          denom: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
          exponent: 0,
          aliases: ['weth-wei']
        }, {
          denom: 'weth',
          exponent: 18
        }],
      base: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
      name: 'Wrapped Ether',
      display: 'weth',
      symbol: 'WETH',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chainName: 'ethereumtestnet',
            baseDenom: 'wei'
          },
          provider: 'Ethereum'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
      },
      coingeckoId: 'weth',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }]
    },
    {
      description: 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      typeAsset: 'erc20',
      address: '0x254d06f33bDc5b8ee05b2ea472107E300226659A',
      denomUnits: [{
          denom: '0x254d06f33bDc5b8ee05b2ea472107E300226659A',
          exponent: 0,
          aliases: ['uausdc']
        }, {
          denom: 'ausdc',
          exponent: 6
        }],
      base: '0x254d06f33bDc5b8ee05b2ea472107E300226659A',
      name: 'Axelar Wrapped aUSDC',
      display: 'ausdc',
      symbol: 'aUSDC',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chainName: 'ethereumtestnet',
            baseDenom: '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238'
          },
          provider: 'Axelar'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }]
    },
    {
      typeAsset: 'erc20',
      address: '0xaA8E23Fb1079EA71e0a56F48a2aA51851D8433D0',
      denomUnits: [{
          denom: '0xaA8E23Fb1079EA71e0a56F48a2aA51851D8433D0',
          exponent: 0,
          aliases: ['uusdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      base: '0xaA8E23Fb1079EA71e0a56F48a2aA51851D8433D0',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Tether'
        }],
      coingeckoId: 'tether',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primaryColorHex: '#009393',
            backgroundColorHex: '#009393'
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt_logomark.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt_logomark.svg',
          theme: {
            circle: false,
            primaryColorHex: '#50AF95',
            backgroundColorHex: '#00000000'
          }
        }]
    },
    {
      description: 'USDC (USD Coin) is a stablecoin fully backed by US dollars, providing a transparent and regulated digital dollar solution.',
      extendedDescription: 'USD Coin (USDC) was launched in 2018 as a joint effort between Coinbase and Circle. USDC is a fully reserved stablecoin, meaning each token is backed 1:1 by US dollars held in reserve. This structure is designed to provide transparency and trust, reinforced by regular audits from reputable third-party firms. Initially built on the Ethereum blockchain, USDC has expanded to support multiple blockchain networks, including Algorand, Solana, and more. It is widely used in DeFi protocols, as collateral, and for international transactions, offering a stable and compliant digital dollar solution.',
      typeAsset: 'erc20',
      address: '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238',
      denomUnits: [{
          denom: '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238',
          exponent: 0
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      base: '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238',
      name: 'USDC',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Ethereum'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      coingeckoId: 'usd-coin',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          theme: {
            circle: true,
            primaryColorHex: '#2775CA'
          }
        }]
    }
  ]
};
export default info;