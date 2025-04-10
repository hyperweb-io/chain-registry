import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'titantestnet',
  assets: [
    {
      description: 'The native token of the Titan network.',
      denomUnits: [
        {
          denom: 'atkx',
          exponent: 0,
          aliases: ['attotkx']
        },
        {
          denom: 'utkx',
          exponent: 12,
          aliases: ['microtkx']
        },
        {
          denom: 'mtkx',
          exponent: 15,
          aliases: ['millitkx']
        },
        {
          denom: 'tkx',
          exponent: 18,
          aliases: []
        }
      ],
      base: 'atkx',
      display: 'tkx',
      name: 'titan tkx',
      symbol: 'TKX',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png'
        }],
      keywords: ['staking'],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      denomUnits: [{
          denom: 'ibc/7C0807A56073C4A27B0DE1C21BA3EB75DF75FD763F4AD37BC159917FC01145F0',
          exponent: 0,
          aliases: ['microusdc', 'uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/7C0807A56073C4A27B0DE1C21BA3EB75DF75FD763F4AD37BC159917FC01145F0',
      name: 'USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'nobletestnet',
            baseDenom: 'uusdc'
          },
          provider: 'Circle'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'nobletestnet',
            baseDenom: 'uusdc',
            channelId: 'channel-208'
          },
          chain: {
            channelId: 'channel-7',
            path: 'transfer/channel-7/uusdc'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'nobletestnet',
            baseDenom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          theme: {
            circle: true,
            primaryColorHex: '#2775CA'
          }
        }],
      coingeckoId: 'usd-coin'
    },
    {
      description: 'Wrapped Bitcoin (BTC) is BTC token bridged from Bitcoin to titan chain through Titan bridge https://dev.titanearn.com/bridge',
      denomUnits: [{
          denom: 'factory/titan14jwu2vsu4xuefce0xjyk2t58awth4v42lvwxslqe6vszac66y4tqe4sjm5/w-btc',
          exponent: 0,
          aliases: ['btc-satoshi']
        }, {
          denom: 'btc',
          exponent: 8
        }],
      typeAsset: 'sdk.coin',
      address: 'titan14jwu2vsu4xuefce0xjyk2t58awth4v42lvwxslqe6vszac66y4tqe4sjm5',
      base: 'factory/titan14jwu2vsu4xuefce0xjyk2t58awth4v42lvwxslqe6vszac66y4tqe4sjm5/w-btc',
      name: 'Bitcoin',
      display: 'btc',
      symbol: 'BTC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'BitGo, Titanlab.io'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.svg',
          theme: {
            primaryColorHex: '#f39444'
          }
        }]
    },
    {
      description: 'Ethereum (ETH) is ETH token bridged from Sepolia to titan chain through Titan Power flow bridge https://dev.powerflow.asia/bridge',
      denomUnits: [{
          denom: 'factory/titan16gyvmp43st00s220zypex4lgvwqc3ve8l4657rhxj8myeadswmkq75slkc/eth',
          exponent: 0,
          aliases: ['wei']
        }, {
          denom: 'eth',
          exponent: 18
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/titan16gyvmp43st00s220zypex4lgvwqc3ve8l4657rhxj8myeadswmkq75slkc/eth',
      name: 'Ethereum',
      display: 'eth',
      symbol: 'ETH',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereumtestnet',
            baseDenom: 'wei',
            contract: '0x63e4dAcAFbBf0a02d70e5b47506eebEDDe49b1c6'
          },
          chain: {
            contract: 'titan16gyvmp43st00s220zypex4lgvwqc3ve8l4657rhxj8myeadswmkq75slkc'
          },
          provider: 'powerflow.asia, titanlab.io'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
        }]
    }
  ]
};
export default info;