import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'cosmoshub',
  assets: [
    {
      description: 'ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.',
      extendedDescription: 'ATOM, the native cryptocurrency of the Cosmos network, is essential for achieving the project\'s goal of creating an \'Internet of Blockchains.\' Launched in 2019, Cosmos aims to solve the scalability, usability, and interoperability issues prevalent in existing blockchain ecosystems. The Cosmos Hub, the central blockchain of the network, uses ATOM for transaction fees, staking, and governance. By staking ATOM, users can earn rewards and participate in governance, influencing decisions on network upgrades and changes.\n\nCosmos leverages the Tendermint consensus algorithm to achieve high transaction throughput and fast finality. Its Inter-Blockchain Communication (IBC) protocol enables seamless data and value transfer between different blockchains, fostering a highly interconnected and collaborative ecosystem. The flexibility and scalability offered by Cosmos have attracted numerous projects, enhancing its utility and adoption. ATOM\'s role in securing the network and facilitating governance underscores its importance in the broader blockchain landscape.',
      denomUnits: [{
          denom: 'uatom',
          exponent: 0
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'uatom',
      name: 'Cosmos Hub Atom',
      display: 'atom',
      symbol: 'ATOM',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      coingeckoId: 'cosmos',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
          theme: {
            primaryColorHex: '#272d45'
          }
        }],
      socials: {
        website: 'https://cosmos.network',
        twitter: 'https://twitter.com/cosmoshub'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Tether USDt on the Cosmos Hub',
      denomUnits: [{
          denom: 'ibc/F04D72CF9B5D9C849BB278B691CDFA2241813327430EC9CDC83F8F4CA4CDC2B0',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F04D72CF9B5D9C849BB278B691CDFA2241813327430EC9CDC83F8F4CA4CDC2B0',
      name: 'Tether USDt',
      display: 'usdt',
      symbol: 'USDt',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kava',
            baseDenom: 'erc20/tether/usdt',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-277',
            path: 'transfer/channel-277/erc20/tether/usdt'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'kava',
            baseDenom: 'erc20/tether/usdt'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primaryColorHex: '#009393',
            backgroundColorHex: '#009393'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      coingeckoId: 'tether'
    },
    {
      description: 'FX on Cosmos Hub',
      denomUnits: [{
          denom: 'ibc/4925E6ABA571A44D2BE0286D2D29AF42A294D0FF2BB16490149A1B26EAD33729',
          exponent: 0,
          aliases: ['FX']
        }],
      typeAsset: 'ics20',
      base: 'ibc/4925E6ABA571A44D2BE0286D2D29AF42A294D0FF2BB16490149A1B26EAD33729',
      name: 'Function X',
      display: 'FX',
      symbol: 'FX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'fxcore',
            baseDenom: 'FX',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-585',
            path: 'transfer/channel-585/FX'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'fxcore',
            baseDenom: 'FX'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg',
          theme: {
            primaryColorHex: '#1c1c1c'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
      },
      coingeckoId: 'fx-coin'
    },
    {
      description: 'The token of Crowdpunk DAO',
      denomUnits: [{
          denom: 'ibc/74C4FE1EC3BDD66B02C691496371DDBB86DDE512C5BC072D76262C6C9B4B20D1',
          exponent: 0,
          aliases: ['erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F']
        }, {
          denom: 'crowdp',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/74C4FE1EC3BDD66B02C691496371DDBB86DDE512C5BC072D76262C6C9B4B20D1',
      name: 'Crowdpunk DAO',
      display: 'crowdp',
      symbol: 'CROWDP',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'evmos',
            baseDenom: 'erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-292',
            path: 'transfer/channel-292/erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.svg'
      },
      images: [{
          imageSync: {
            chainName: 'evmos',
            baseDenom: 'erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.svg',
          theme: {
            primaryColorHex: '#04fbfb'
          }
        }]
    },
    {
      description: 'Wrapped Bitcoin on the Cosmos Hub',
      denomUnits: [{
          denom: 'ibc/D742E8566B0B8CC8F569D950051C09CF57988A88F0E45574BFB3079D41DE6462',
          exponent: 0
        }, {
          denom: 'wbtc',
          exponent: 8
        }],
      typeAsset: 'ics20',
      base: 'ibc/D742E8566B0B8CC8F569D950051C09CF57988A88F0E45574BFB3079D41DE6462',
      name: 'Wrapped Bitcoin',
      display: 'wbtc',
      symbol: 'WBTC',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
            channelId: 'cosmoshub-0'
          },
          chain: {
            channelId: '08-wasm-1369',
            path: 'transfer/08-wasm-1369/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          provider: 'Eureka'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg',
          theme: {
            primaryColorHex: '#f39444'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
      }
    },
    {
      description: 'Lombard Staked Bitcoin on the Cosmos Hub',
      denomUnits: [{
          denom: 'ibc/DBD9E339E1B093A052D76BECFFDE8435EAC114CF2133346B4D691F3F2068C957',
          exponent: 0
        }, {
          denom: 'lbtc',
          exponent: 8
        }],
      typeAsset: 'ics20',
      base: 'ibc/DBD9E339E1B093A052D76BECFFDE8435EAC114CF2133346B4D691F3F2068C957',
      name: 'Lombard Staked Bitcoin',
      display: 'lbtc',
      symbol: 'LBTC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'lombardledger',
            baseDenom: 'uclbtc',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-1340',
            path: 'transfer/channel-1340/uclbtc'
          }
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/lbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/lbtc.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/lbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/lbtc.svg'
      },
      coingeckoId: 'lombard-staked-btc'
    },
    {
      description: 'SolvBTC on the Cosmos Hub',
      denomUnits: [{
          denom: 'ibc/0C4417F123459B47B6933939BF6F128C362B0C1F9EDA6A6EBC08860E4672AF7E',
          exponent: 0
        }, {
          denom: 'solvbtc',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/0C4417F123459B47B6933939BF6F128C362B0C1F9EDA6A6EBC08860E4672AF7E',
      name: 'SolvBTC',
      display: 'solvbtc',
      symbol: 'SolvBTC',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x7a56e1c57c7475ccf742a1832b028f0456652f97',
            channelId: 'cosmoshub-0'
          },
          chain: {
            channelId: '08-wasm-1369',
            path: 'transfer/08-wasm-1369/0x7a56e1c57c7475ccf742a1832b028f0456652f97'
          },
          provider: 'Eureka'
        }]
    },
    {
      description: 'SolvBTC.BBN on the Cosmos Hub',
      denomUnits: [{
          denom: 'ibc/486D45458E018B59D1F23ADD116D21A881D8DA3BC348B9E0E22354CA031C977E',
          exponent: 0
        }, {
          denom: 'xsolvbtc',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/486D45458E018B59D1F23ADD116D21A881D8DA3BC348B9E0E22354CA031C977E',
      name: 'xSolvBTC',
      display: 'xsolvbtc',
      symbol: 'xSolvBTC',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xd9d920aa40f578ab794426f5c90f6c731d159def',
            channelId: 'cosmoshub-0'
          },
          chain: {
            channelId: '08-wasm-1369',
            path: 'transfer/08-wasm-1369/0xd9d920aa40f578ab794426f5c90f6c731d159def'
          },
          provider: 'Eureka'
        }]
    },
    {
      description: 'PumpBTC on the Cosmos Hub',
      denomUnits: [{
          denom: 'ibc/9DA8B22BC0E6D76C2D621EF008168BC163B09A517697B14B68DE75382043152E',
          exponent: 0
        }, {
          denom: 'pumpbtc',
          exponent: 8
        }],
      typeAsset: 'ics20',
      base: 'ibc/9DA8B22BC0E6D76C2D621EF008168BC163B09A517697B14B68DE75382043152E',
      name: 'pumpBTC',
      display: 'pumpbtc',
      symbol: 'pumpBTC',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xf469fbd2abcd6b9de8e169d128226c0fc90a012e',
            channelId: 'cosmoshub-0'
          },
          chain: {
            channelId: '08-wasm-1369',
            path: 'transfer/08-wasm-1369/0xf469fbd2abcd6b9de8e169d128226c0fc90a012e'
          },
          provider: 'Eureka'
        }]
    },
    {
      description: 'UniBTC on the Cosmos Hub',
      denomUnits: [{
          denom: 'ibc/9EE1F80BA2AE01138A40D656BBB42D11B1720000D6F64FC5988E412B6EDB4F71',
          exponent: 0
        }, {
          denom: 'unibtc',
          exponent: 8
        }],
      typeAsset: 'ics20',
      base: 'ibc/9EE1F80BA2AE01138A40D656BBB42D11B1720000D6F64FC5988E412B6EDB4F71',
      name: 'UniBTC',
      display: 'unibtc',
      symbol: 'uniBTC',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x004e9c3ef86bc1ca1f0bb5c7662861ee93350568',
            channelId: 'cosmoshub-0'
          },
          chain: {
            channelId: '08-wasm-1369',
            path: 'transfer/08-wasm-1369/0x004e9c3ef86bc1ca1f0bb5c7662861ee93350568'
          },
          provider: 'Eureka'
        }]
    },
    {
      description: 'stBTC on the Cosmos Hub',
      denomUnits: [{
          denom: 'ibc/286A30F7F093357CE113A2E3B9A2E497F7A691CAFC624ABC615DE147DCE9FD17',
          exponent: 0
        }, {
          denom: 'stbtc',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/286A30F7F093357CE113A2E3B9A2E497F7A691CAFC624ABC615DE147DCE9FD17',
      name: 'stBTC',
      display: 'stbtc',
      symbol: 'stBTC',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xf6718b2701d4a6498ef77d7c152b2137ab28b8a3',
            channelId: 'cosmoshub-0'
          },
          chain: {
            channelId: '08-wasm-1369',
            path: 'transfer/08-wasm-1369/0xf6718b2701d4a6498ef77d7c152b2137ab28b8a3'
          },
          provider: 'Eureka'
        }]
    },
    {
      description: 'mBTC on the Cosmos Hub',
      denomUnits: [{
          denom: 'ibc/6583B66D1450B5A0E997C85A4048749ADCBD745562D62F3CC1CEE5D41B5814D1',
          exponent: 0
        }, {
          denom: 'mbtc',
          exponent: 8
        }],
      typeAsset: 'ics20',
      base: 'ibc/6583B66D1450B5A0E997C85A4048749ADCBD745562D62F3CC1CEE5D41B5814D1',
      name: 'mBTC',
      display: 'mbtc',
      symbol: 'mBTC',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xbdf245957992bfbc62b07e344128a1eec7b7ee3f',
            channelId: 'cosmoshub-0'
          },
          chain: {
            channelId: '08-wasm-1369',
            path: 'transfer/08-wasm-1369/0xbdf245957992bfbc62b07e344128a1eec7b7ee3f'
          },
          provider: 'Eureka'
        }]
    },
    {
      description: 'kBTC on the Cosmos Hub',
      denomUnits: [{
          denom: 'ibc/AE65FB498AFB35CC06301BEE6EA8063DC41CE04D80A8D167258B73D7A863DA8D',
          exponent: 0
        }, {
          denom: 'kbtc',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/AE65FB498AFB35CC06301BEE6EA8063DC41CE04D80A8D167258B73D7A863DA8D',
      name: 'kBTC',
      display: 'kbtc',
      symbol: 'kBTC',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x9356f6d95b8e109f4b7ce3e49d672967d3b48383',
            channelId: 'cosmoshub-0'
          },
          chain: {
            channelId: '08-wasm-1369',
            path: 'transfer/08-wasm-1369/0x9356f6d95b8e109f4b7ce3e49d672967d3b48383'
          },
          provider: 'Eureka'
        }]
    },
    {
      description: 'eBTC on the Cosmos Hub',
      denomUnits: [{
          denom: 'ibc/6F8F0E9D472BF053261F2DEBE521801B703372777F3923B48DAE55D4F1212B5F',
          exponent: 0
        }, {
          denom: 'ebtc',
          exponent: 8
        }],
      typeAsset: 'ics20',
      base: 'ibc/6F8F0E9D472BF053261F2DEBE521801B703372777F3923B48DAE55D4F1212B5F',
      name: 'eBTC',
      display: 'ebtc',
      symbol: 'eBTC',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x657e8c867d8b37dcc18fa4caead9c45eb088c642',
            channelId: 'cosmoshub-0'
          },
          chain: {
            channelId: '08-wasm-1369',
            path: 'transfer/08-wasm-1369/0x657e8c867d8b37dcc18fa4caead9c45eb088c642'
          },
          provider: 'Eureka'
        }]
    },
    {
      description: 'enzoBTC on the Cosmos Hub',
      denomUnits: [{
          denom: 'ibc/9CB24EF57DF00EFFCE3B52FC1225EDEDF98B31DB8C792B43C7E3D4AD9B3982CF',
          exponent: 0
        }, {
          denom: 'enzobtc',
          exponent: 8
        }],
      typeAsset: 'ics20',
      base: 'ibc/9CB24EF57DF00EFFCE3B52FC1225EDEDF98B31DB8C792B43C7E3D4AD9B3982CF',
      name: 'enzoBTC',
      display: 'enzobtc',
      symbol: 'enzoBTC',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x6a9a65b84843f5fd4ac9a0471c4fc11afffbce4a',
            channelId: 'cosmoshub-0'
          },
          chain: {
            channelId: '08-wasm-1369',
            path: 'transfer/08-wasm-1369/0x6a9a65b84843f5fd4ac9a0471c4fc11afffbce4a'
          },
          provider: 'Eureka'
        }]
    },
    {
      description: 'Tether USD on the Cosmos Hub',
      denomUnits: [{
          denom: 'ibc/E7E51FFF94A8B55BE84CEB0345E5CAF0A5DAEB374C6806CE908098B8996C7782',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/E7E51FFF94A8B55BE84CEB0345E5CAF0A5DAEB374C6806CE908098B8996C7782',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7',
            channelId: 'channel-0'
          },
          chain: {
            channelId: '08-wasm-1369',
            path: 'transfer/08-wasm-1369/0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Eureka'
        }],
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
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      description: 'Ether ETH on the Cosmos Hub',
      denomUnits: [{
          denom: 'ibc/C0B53D3D23827AE38058BED0BDCD554229278AF530A8D265FCF6DFF7C4B2ADFF',
          exponent: 0
        }, {
          denom: 'eth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/C0B53D3D23827AE38058BED0BDCD554229278AF530A8D265FCF6DFF7C4B2ADFF',
      name: 'Ethereum',
      display: 'eth',
      symbol: 'ETH',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            channelId: 'channel-0'
          },
          chain: {
            channelId: '08-wasm-1369',
            path: 'transfer/08-wasm-1369/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          provider: 'Eureka'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg',
          theme: {
            primaryColorHex: '#303030'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      description: 'sUSDS on the Cosmos Hub',
      denomUnits: [{
          denom: 'ibc/B9B561EB378C9EB8C13CAA11FCBC78E6B865A3C65707972F17B1052CFC39F473',
          exponent: 0
        }, {
          denom: 'susds',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/B9B561EB378C9EB8C13CAA11FCBC78E6B865A3C65707972F17B1052CFC39F473',
      name: 'Savings USDS',
      display: 'susds',
      symbol: 'sUSDS',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa3931d71877C0E7a3148CB7Eb4463524FEc27fbD',
            channelId: 'channel-0'
          },
          chain: {
            channelId: '08-wasm-1369',
            path: 'transfer/08-wasm-1369/0xa3931d71877c0e7a3148cb7eb4463524fec27fbd'
          },
          provider: 'Eureka'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xa3931d71877C0E7a3148CB7Eb4463524FEc27fbD'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/susds.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/susds.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/susds.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/susds.svg'
      }
    },
    {
      description: 'OPHIR is a Cosmos Treasury DAO',
      extendedDescription: 'The ancient city of gold',
      denomUnits: [{
          denom: 'ibc/B26F762ED6D20D0D5305FE1870A476EBCB95127C10199F3CB16E69D893E9F775',
          exponent: 0,
          aliases: ['transfer/channel-141/transfer/channel-642/factory/migaloo1t862qdu9mj5hr3j727247acypym3ej47axu22rrapm4tqlcpuseqltxwq5/ophir']
        }, {
          denom: 'OPHIR',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/B26F762ED6D20D0D5305FE1870A476EBCB95127C10199F3CB16E69D893E9F775',
      name: 'Ophir DAO',
      display: 'OPHIR',
      symbol: 'OPHIR',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'migaloo',
            baseDenom: 'factory/migaloo1t862qdu9mj5hr3j727247acypym3ej47axu22rrapm4tqlcpuseqltxwq5/ophir',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-642',
            path: 'transfer/channel-642/factory/migaloo1t862qdu9mj5hr3j727247acypym3ej47axu22rrapm4tqlcpuseqltxwq5/ophir'
          }
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'ibc/3AF2E322D4B54BB97EEE24760ED25B725842A9B62C759402AB8AADD75915FD14',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-141',
            path: 'transfer/channel-141/transfer/channel-642/factory/migaloo1t862qdu9mj5hr3j727247acypym3ej47axu22rrapm4tqlcpuseqltxwq5/ophir'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ophir.png'
      },
      socials: {
        website: 'https://www.ophirdao.com',
        twitter: 'https://x.com/OphirDAO'
      },
      keywords: ['dao']
    },
    {
      description: 'Midas mBTC on the Cosmos Hub',
      denomUnits: [{
          denom: 'ibc/62F1A800DCE1AA0FD47B3592DEBB7A8956A383A14A4F756E4881AEA927B21671',
          exponent: 0
        }, {
          denom: 'mBTC',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/62F1A800DCE1AA0FD47B3592DEBB7A8956A383A14A4F756E4881AEA927B21671',
      name: 'Midas BTC Yield Token',
      display: 'mBTC',
      symbol: 'mBTC.midas',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x007115416ab6c266329a03b09a8aa39ac2ef7d9d',
            channelId: 'channel-0'
          },
          chain: {
            channelId: '08-wasm-1369',
            path: 'transfer/08-wasm-1369/0x007115416ab6c266329a03b09a8aa39ac2ef7d9d'
          },
          provider: 'Eureka'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x007115416ab6c266329a03b09a8aa39ac2ef7d9d'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/midas-mbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/midas-mbtc.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/midas-mbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/midas-mbtc.svg'
      }
    },
    {
      description: 'Pax Gold on the Cosmos Hub',
      denomUnits: [{
          denom: 'ibc/09E95F57939E344EE36109AC41780B8A51F1FE0548A5203C5957674FF64C0F26',
          exponent: 0
        }, {
          denom: 'paxg',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/09E95F57939E344EE36109AC41780B8A51F1FE0548A5203C5957674FF64C0F26',
      name: 'Pax Gold',
      display: 'paxg',
      symbol: 'PAXG',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x45804880De22913dAFE09f4980848ECE6EcbAf78',
            channelId: 'channel-0'
          },
          chain: {
            channelId: '08-wasm-1369',
            path: 'transfer/08-wasm-1369/0x45804880de22913dafe09f4980848ece6ecbaf78'
          },
          provider: 'Eureka'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x45804880De22913dAFE09f4980848ECE6EcbAf78'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/paxg.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/paxg.png',
          theme: {
            circle: true,
            primaryColorHex: '#D8A24A',
            backgroundColorHex: '#D8A24A'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/paxg.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/paxg.svg'
      }
    }
  ]
};
export default info;