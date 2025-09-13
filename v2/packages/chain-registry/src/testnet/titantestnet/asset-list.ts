import { AssetList } from '@chain-registry/types';
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
          denom: 'usdc.noble',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/7C0807A56073C4A27B0DE1C21BA3EB75DF75FD763F4AD37BC159917FC01145F0',
      name: 'USDC.noble',
      display: 'usdc.noble',
      symbol: 'USDC.noble',
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
            circle: true
          }
        }],
      coingeckoId: 'usd-coin'
    },
    {
      description: 'Wrapped Bitcoin (BTC) is BTC token bridged from Bitcoin to titan chain through Titan bridge',
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
          imageSync: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.svg',
          theme: {
            circle: true
          }
        }]
    },
    {
      description: 'Ethereum (ETH) is ETH token bridged from Sepolia to titan chain through Titan Power flow bridge',
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
          imageSync: {
            chainName: 'ethereumtestnet',
            baseDenom: 'wei'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
        }]
    },
    {
      description: 'USDC stablecoin on Titan. Bridge into titan chain from Ethereum to Titan through Titan Power flow bridge',
      denomUnits: [{
          denom: 'factory/titan16gyvmp43st00s220zypex4lgvwqc3ve8l4657rhxj8myeadswmkq75slkc/usdc',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/titan16gyvmp43st00s220zypex4lgvwqc3ve8l4657rhxj8myeadswmkq75slkc/usdc',
      name: 'USDC',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereumtestnet',
            baseDenom: '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238',
            contract: '0x63e4dAcAFbBf0a02d70e5b47506eebEDDe49b1c6'
          },
          provider: 'powerflow.asia, titanlab.io'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereumtestnet',
            baseDenom: '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          theme: {
            circle: true
          }
        }]
    },
    {
      description: 'SOL on Titan. Bridge into titan chain from Solana devnet to Titan through Titan Power flow bridge',
      denomUnits: [{
          denom: 'factory/titan16gyvmp43st00s220zypex4lgvwqc3ve8l4657rhxj8myeadswmkq75slkc/sol',
          exponent: 0,
          aliases: ['lamport']
        }, {
          denom: 'sol',
          exponent: 9
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/titan16gyvmp43st00s220zypex4lgvwqc3ve8l4657rhxj8myeadswmkq75slkc/sol',
      name: 'SOL',
      display: 'sol',
      symbol: 'SOL',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'solanatestnet',
            baseDenom: 'So11111111111111111111111111111111111111112',
            contract: 'EYREJzRmAXGFTZh1hhH4gtBr7mM7gqSY5bzPYszL2XtD'
          },
          provider: 'powerflow.asia, titanlab.io'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.svg'
      },
      images: [{
          imageSync: {
            chainName: 'solanatestnet',
            baseDenom: 'So11111111111111111111111111111111111111112'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.svg',
          theme: {
            circle: true
          }
        }]
    },
    {
      description: 'Meow on Titan. Bridge into titan chain from Solana devnet to Titan through Titan Power flow bridge',
      denomUnits: [{
          denom: 'factory/titan16gyvmp43st00s220zypex4lgvwqc3ve8l4657rhxj8myeadswmkq75slkc/meow',
          exponent: 0
        }, {
          denom: 'meow',
          exponent: 8
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/titan16gyvmp43st00s220zypex4lgvwqc3ve8l4657rhxj8myeadswmkq75slkc/meow',
      name: 'MEOW',
      display: 'meow',
      symbol: 'MEOW',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'solanatestnet',
            baseDenom: 'HYGEZGU5kRh9vjw723wuyjUQGe654ByRQzQRP7PWxgMa',
            contract: 'EYREJzRmAXGFTZh1hhH4gtBr7mM7gqSY5bzPYszL2XtD'
          },
          provider: 'powerflow.asia, titanlab.io'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/meow.png'
      },
      images: [{
          imageSync: {
            chainName: 'solanatestnet',
            baseDenom: 'HYGEZGU5kRh9vjw723wuyjUQGe654ByRQzQRP7PWxgMa'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/meow.png'
        }]
    }
  ]
};
export default info;