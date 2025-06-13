import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'titan',
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
      coingeckoId: 'tokenize-xchange',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/titan/images/tkx.png',
          theme: {
            primaryColorHex: '#fc641c'
          }
        }],
      keywords: ['staking'],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/titan/images/tkx.png'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Noble USDC on Titan Chain.',
      denomUnits: [{
          denom: 'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
          exponent: 0
        }, {
          denom: 'usdc.noble',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
      name: 'USDC.noble',
      display: 'usdc.noble',
      symbol: 'USDC.noble',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Circle'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdc',
            channelId: 'channel-99'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/uusdc'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'noble',
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
      description: 'Wrapped Bitcoin (BTC) is BTC token bridged from Bitcoin to titan chain through Titan bridge https://titanearn.com/bridge',
      denomUnits: [{
          denom: 'factory/titan1eyfccmjm6732k7wp4p6gdjwhxjwsvje44j0hfx8nkgrm8fs7vqfsalaj2e/wbtc',
          exponent: 0,
          aliases: ['btc-satoshi']
        }, {
          denom: 'btc',
          exponent: 8
        }],
      typeAsset: 'sdk.coin',
      address: 'titan1eyfccmjm6732k7wp4p6gdjwhxjwsvje44j0hfx8nkgrm8fs7vqfsalaj2e',
      base: 'factory/titan1eyfccmjm6732k7wp4p6gdjwhxjwsvje44j0hfx8nkgrm8fs7vqfsalaj2e/wbtc',
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
        }],
      coingeckoId: 'bitcoin'
    },
    {
      description: 'Ethereum (ETH) is ETH token bridged from Ethereum to titan chain through Titan Power flow bridge',
      denomUnits: [{
          denom: 'factory/titan1pvrwmjuusn9wh34j7y520g8gumuy9xtl3gvprlljfdpwju3x7ucsgehpjy/eth',
          exponent: 0,
          aliases: ['wei']
        }, {
          denom: 'eth',
          exponent: 18
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/titan1pvrwmjuusn9wh34j7y520g8gumuy9xtl3gvprlljfdpwju3x7ucsgehpjy/eth',
      name: 'Ethereum',
      display: 'eth',
      symbol: 'ETH',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei',
            contract: '0x9be9c79f1d8bc09c5b9a6c312e360227ddb57230'
          },
          provider: 'powerflow.asia, titanlab.io'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
        }]
    },
    {
      description: 'Tether\'s USD stablecoin on Titan. Bridge into titan chain through Titan Power flow bridge',
      denomUnits: [{
          denom: 'factory/titan1pvrwmjuusn9wh34j7y520g8gumuy9xtl3gvprlljfdpwju3x7ucsgehpjy/usdt',
          exponent: 0,
          aliases: ['uusdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/titan1pvrwmjuusn9wh34j7y520g8gumuy9xtl3gvprlljfdpwju3x7ucsgehpjy/usdt',
      name: 'Tether',
      display: 'usdt',
      symbol: 'USDT',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7',
            contract: '0x9be9c79f1d8bc09c5b9a6c312e360227ddb57230'
          },
          provider: 'powerflow.asia, titanlab.io'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }]
    },
    {
      description: 'USDC stablecoin on Titan. Bridge into titan chain from Ethereum to Titan through Titan Power flow bridge',
      denomUnits: [{
          denom: 'factory/titan1pvrwmjuusn9wh34j7y520g8gumuy9xtl3gvprlljfdpwju3x7ucsgehpjy/usdc',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/titan1pvrwmjuusn9wh34j7y520g8gumuy9xtl3gvprlljfdpwju3x7ucsgehpjy/usdc',
      name: 'USDC',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
            contract: '0x9be9c79f1d8bc09c5b9a6c312e360227ddb57230'
          },
          provider: 'powerflow.asia, titanlab.io'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }]
    },
    {
      description: 'SOL on Titan. Bridge into titan chain from Solana to Titan through Titan Power flow bridge',
      denomUnits: [{
          denom: 'factory/titan1pvrwmjuusn9wh34j7y520g8gumuy9xtl3gvprlljfdpwju3x7ucsgehpjy/sol',
          exponent: 0,
          aliases: ['lamport']
        }, {
          denom: 'sol',
          exponent: 9
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/titan1pvrwmjuusn9wh34j7y520g8gumuy9xtl3gvprlljfdpwju3x7ucsgehpjy/sol',
      name: 'SOL',
      display: 'sol',
      symbol: 'SOL',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'So11111111111111111111111111111111111111112',
            contract: '3FCYJzQBTfZg8rbCpbVEvRPtJsGbhGzfQmJMAkcQ7bi6'
          },
          provider: 'powerflow.asia, titanlab.io'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.png'
        }]
    },
    {
      description: 'Meow on Titan. Bridge into titan chain from Solana to Titan through Titan Power flow bridge',
      denomUnits: [{
          denom: 'factory/titan1pvrwmjuusn9wh34j7y520g8gumuy9xtl3gvprlljfdpwju3x7ucsgehpjy/meow',
          exponent: 0
        }, {
          denom: 'meow',
          exponent: 8
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/titan1pvrwmjuusn9wh34j7y520g8gumuy9xtl3gvprlljfdpwju3x7ucsgehpjy/meow',
      name: 'MEOW',
      display: 'meow',
      symbol: 'MEOW',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'BUhS5coXEt9hcxN3JSpGYUWSKbNo96RsKu52LcMo12rf',
            contract: '3FCYJzQBTfZg8rbCpbVEvRPtJsGbhGzfQmJMAkcQ7bi6'
          },
          provider: 'powerflow.asia, titanlab.io'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/meow.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/meow.png'
        }]
    },
    {
      description: 'Oracler on Titan. Bridge into titan chain from Solana to Titan through Titan Power flow bridge',
      denomUnits: [{
          denom: 'factory/titan1pvrwmjuusn9wh34j7y520g8gumuy9xtl3gvprlljfdpwju3x7ucsgehpjy/oracler',
          exponent: 0
        }, {
          denom: 'oracler',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/titan1pvrwmjuusn9wh34j7y520g8gumuy9xtl3gvprlljfdpwju3x7ucsgehpjy/oracler',
      name: 'ORACLER',
      display: 'oracler',
      symbol: 'ORACLER',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: '5pPkhLEJDMFDHUuE1wW5os5YJeyNUDVmih1DKgMFpB38',
            contract: '3FCYJzQBTfZg8rbCpbVEvRPtJsGbhGzfQmJMAkcQ7bi6'
          },
          provider: 'powerflow.asia, titanlab.io'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/oracler.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/oracler.png'
        }]
    },
    {
      description: 'monKEYS on Titan. Bridge into titan chain from Solana to Titan through Titan Power flow bridge',
      denomUnits: [{
          denom: 'factory/titan1pvrwmjuusn9wh34j7y520g8gumuy9xtl3gvprlljfdpwju3x7ucsgehpjy/monkeys',
          exponent: 0
        }, {
          denom: 'monKEYS',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/titan1pvrwmjuusn9wh34j7y520g8gumuy9xtl3gvprlljfdpwju3x7ucsgehpjy/monkeys',
      name: 'monKEYS',
      display: 'monKEYS',
      symbol: 'MONKEYS',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: '7TSCoke2mSZzAtyuRmzANf9virrnyv4xSUeaxUrKkLqw',
            contract: '3FCYJzQBTfZg8rbCpbVEvRPtJsGbhGzfQmJMAkcQ7bi6'
          },
          provider: 'powerflow.asia, titanlab.io'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/monkeys.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/monkeys.png'
        }]
    }
  ]
};
export default info;