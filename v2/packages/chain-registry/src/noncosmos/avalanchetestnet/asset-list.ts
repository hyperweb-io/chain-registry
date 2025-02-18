import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../../assetlist.schema.json',
  chainName: 'avalanchetestnet',
  assets: [
    {
      description: 'AVAX is the native token of Avalanche. It is a hard-capped, scarce asset that is used to pay for fees, secure the platform through staking, and provide a basic unit of account between the multiple subnets created on Avalanche.',
      denomUnits: [{
          denom: 'wei',
          exponent: 0
        }, {
          denom: 'avax',
          exponent: 18
        }],
      typeAsset: 'evm-base',
      base: 'wei',
      name: 'Avalanche',
      display: 'avax',
      symbol: 'AVAX',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'avalanche',
            baseDenom: 'wei'
          },
          provider: 'Avalanche'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.svg'
      },
      coingeckoId: 'avalanche-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.svg'
        }]
    },
    {
      description: 'The wrapped ERC-20 representation of AVAX, the native token of Avalanche.',
      typeAsset: 'erc20',
      address: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
      denomUnits: [{
          denom: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
          exponent: 0,
          aliases: ['wavax-wei']
        }, {
          denom: 'wavax',
          exponent: 18
        }],
      base: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
      name: 'Wrapped AVAX',
      display: 'wavax',
      symbol: 'WAVAX',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chainName: 'avalanchetestnet',
            baseDenom: 'wei'
          },
          provider: 'Avalanche'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
      },
      coingeckoId: 'wrapped-avax',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
        }]
    },
    {
      description: 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      typeAsset: 'erc20',
      address: '0x57F1c63497AEe0bE305B8852b354CEc793da43bB',
      denomUnits: [{
          denom: '0x57F1c63497AEe0bE305B8852b354CEc793da43bB',
          exponent: 0,
          aliases: ['uausdc']
        }, {
          denom: 'axlusdc',
          exponent: 6
        }],
      base: '0x57F1c63497AEe0bE305B8852b354CEc793da43bB',
      name: 'Axelar Wrapped USDC',
      display: 'axlusdc',
      symbol: 'axlUSDC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'axelartestnet',
            baseDenom: 'uausdc'
          },
          provider: 'Axelar'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'axelartestnet',
            baseDenom: 'uausdc'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }]
    },
    {
      description: 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      typeAsset: 'erc20',
      address: '0x5425890298aed601595a70ab815c96711a31bc65',
      denomUnits: [{
          denom: '0x5425890298aed601595a70ab815c96711a31bc65',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      base: '0x5425890298aed601595a70ab815c96711a31bc65',
      name: 'USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'avalanche',
            baseDenom: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E'
          },
          provider: 'Circle'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'avalanche',
            baseDenom: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          theme: {
            circle: true,
            primaryColorHex: '#2775CA'
          }
        }],
      coingeckoId: 'usd-coin'
    }
  ]
};
export default info;