import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'axelartestnet',
  assets: [
    {
      description: 'The native token of Axelar',
      denomUnits: [{
          denom: 'uaxl',
          exponent: 0
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'uaxl',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'uaxl'
          },
          provider: 'Axelar'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      coingeckoId: 'axelar',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Circle\'s stablecoin on Axelar',
      denomUnits: [{
          denom: 'uausdc',
          exponent: 0
        }, {
          denom: 'ausdc',
          exponent: 6
        }],
      base: 'uausdc',
      name: 'USD Coin',
      display: 'ausdc',
      symbol: 'aUSDC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereumtestnet',
            baseDenom: '0x254d06f33bDc5b8ee05b2ea472107E300226659A'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereumtestnet',
            baseDenom: '0x254d06f33bDc5b8ee05b2ea472107E300226659A'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Wrapped Ether on Axelar',
      denomUnits: [{
          denom: 'eth-wei',
          exponent: 0
        }, {
          denom: 'weth',
          exponent: 18
        }],
      base: 'eth-wei',
      name: 'Wrapped Ether',
      display: 'weth',
      symbol: 'axlWETH',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereumtestnet',
            baseDenom: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereumtestnet',
            baseDenom: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Wrapped Moonbeam on Axelar',
      denomUnits: [{
          denom: 'wglmr-wei',
          exponent: 0
        }, {
          denom: 'wglmr',
          exponent: 18
        }],
      base: 'wglmr-wei',
      name: 'Wrapped Moonbeam',
      display: 'wglmr',
      symbol: 'WDEV',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'moonbeamtestnet',
            baseDenom: '0x1436aE0dF0A8663F18c0Ec51d7e2E46591730715'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'moonbeamtestnet',
            baseDenom: '0x1436aE0dF0A8663F18c0Ec51d7e2E46591730715'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Wrapped Matic on Axelar',
      denomUnits: [{
          denom: 'wmatic-wei',
          exponent: 0
        }, {
          denom: 'wmatic',
          exponent: 18
        }],
      base: 'wmatic-wei',
      name: 'Wrapped Matic',
      display: 'wmatic',
      symbol: 'WMATIC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'polygontestnet',
            baseDenom: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'polygontestnet',
            baseDenom: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Wrapped BNB on Axelar',
      denomUnits: [{
          denom: 'wbnb-wei',
          exponent: 0
        }, {
          denom: 'wbnb',
          exponent: 18
        }],
      base: 'wbnb-wei',
      name: 'Wrapped BNB',
      display: 'wbnb',
      symbol: 'WBNB',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'binancesmartchaintestnet',
            baseDenom: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'binancesmartchaintestnet',
            baseDenom: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Wrapped AVAX on Axelar.',
      denomUnits: [{
          denom: 'wavax-wei',
          exponent: 0
        }, {
          denom: 'avax',
          exponent: 18
        }],
      base: 'wavax-wei',
      name: 'Wrapped AVAX',
      display: 'avax',
      symbol: 'WAVAX',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'avalanchetestnet',
            baseDenom: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'avalanchetestnet',
            baseDenom: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Wrapped FTM on Axelar.',
      denomUnits: [{
          denom: 'wftm-wei',
          exponent: 0
        }, {
          denom: 'ftm',
          exponent: 18
        }],
      base: 'wftm-wei',
      name: 'Wrapped FTM',
      display: 'ftm',
      symbol: 'WFTM',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'fantomtestnet',
            baseDenom: '0x812666209b90344Ec8e528375298ab9045c2Bd08'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'fantomtestnet',
            baseDenom: '0x812666209b90344Ec8e528375298ab9045c2Bd08'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'ADAM Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/005F5CE5A688F0673C896F32E670F83AB818E8D3A96F987A877CF3A7430C2253',
          exponent: 0
        }, {
          denom: 'adam',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/005F5CE5A688F0673C896F32E670F83AB818E8D3A96F987A877CF3A7430C2253',
      name: 'ADAM',
      display: 'adam',
      symbol: 'ADAM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uadam',
            channelId: 'channel-6'
          },
          chain: {
            channelId: 'channel-594',
            path: 'transfer/channel-594/factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uadam'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uadam'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
      }
    },
    {
      description: 'SNOOP Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/074B3B7B88AFD65707CF016455C9E24D1E05226CB733870AA3FD198C173EBE30',
          exponent: 0
        }, {
          denom: 'snoop',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/074B3B7B88AFD65707CF016455C9E24D1E05226CB733870AA3FD198C173EBE30',
      name: 'SNOOP',
      display: 'snoop',
      symbol: 'SNOOP',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1rme50egv6kwxq5skm60s0n7hd6ynuf33p5g87e/usnoop',
            channelId: 'channel-6'
          },
          chain: {
            channelId: 'channel-594',
            path: 'transfer/channel-594/factory/manifest1rme50egv6kwxq5skm60s0n7hd6ynuf33p5g87e/usnoop'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1rme50egv6kwxq5skm60s0n7hd6ynuf33p5g87e/usnoop'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
      }
    },
    {
      description: 'TACO Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/13142566F3D6C9BD33F42962929378F8479710E863AB74C1BB4247053ADFD4A0',
          exponent: 0
        }, {
          denom: 'taco',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/13142566F3D6C9BD33F42962929378F8479710E863AB74C1BB4247053ADFD4A0',
      name: 'TACO',
      display: 'taco',
      symbol: 'TACO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/utaco',
            channelId: 'channel-6'
          },
          chain: {
            channelId: 'channel-594',
            path: 'transfer/channel-594/factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/utaco'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/utaco'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
      }
    },
    {
      description: 'DANCINGPENGUIN Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/20AB09D9296F97112E44E3E9D5F92E1AFB1B7ED76008FF3E9974473985E12ACA',
          exponent: 0
        }, {
          denom: 'dancingpenguin',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/20AB09D9296F97112E44E3E9D5F92E1AFB1B7ED76008FF3E9974473985E12ACA',
      name: 'DANCINGPENGUIN',
      display: 'dancingpenguin',
      symbol: 'DANCINGPENGUIN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/udancingpenguin',
            channelId: 'channel-6'
          },
          chain: {
            channelId: 'channel-594',
            path: 'transfer/channel-594/factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/udancingpenguin'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/udancingpenguin'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
      }
    },
    {
      description: 'CUTE Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/236B1550CAF803837218C0E44EA8055EDF1D634CC171D60791FC598E48D20977',
          exponent: 0
        }, {
          denom: 'cute',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/236B1550CAF803837218C0E44EA8055EDF1D634CC171D60791FC598E48D20977',
      name: 'CUTE',
      display: 'cute',
      symbol: 'CUTE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/ucute',
            channelId: 'channel-6'
          },
          chain: {
            channelId: 'channel-594',
            path: 'transfer/channel-594/factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/ucute'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/ucute'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
      }
    },
    {
      description: 'ASDASDASD Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/2940C9733B3E81E4914A9EE22C9D444AE0039D0C4BCE75F3B9ABACC293E93AF6',
          exponent: 0
        }, {
          denom: 'asdasdasd',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/2940C9733B3E81E4914A9EE22C9D444AE0039D0C4BCE75F3B9ABACC293E93AF6',
      name: 'ASDASDASD',
      display: 'asdasdasd',
      symbol: 'ASDASDASD',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uasdasdasd',
            channelId: 'channel-6'
          },
          chain: {
            channelId: 'channel-594',
            path: 'transfer/channel-594/factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uasdasdasd'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uasdasdasd'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
      }
    },
    {
      description: 'UMEGA Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/3E55458BB86CB338A22C150D917D192BFFBF7BFE37F6AA80EA2EB7B11846C6D1',
          exponent: 0
        }, {
          denom: 'umega',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/3E55458BB86CB338A22C150D917D192BFFBF7BFE37F6AA80EA2EB7B11846C6D1',
      name: 'UMEGA',
      display: 'umega',
      symbol: 'UMEGA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1czvrq3ufn045q5k50tjl4qu8kcmagve9ghty3c/uumega',
            channelId: 'channel-6'
          },
          chain: {
            channelId: 'channel-594',
            path: 'transfer/channel-594/factory/manifest1czvrq3ufn045q5k50tjl4qu8kcmagve9ghty3c/uumega'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1czvrq3ufn045q5k50tjl4qu8kcmagve9ghty3c/uumega'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
      }
    },
    {
      description: 'WMVT Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/48FEAC3670B7F5F4064990611BE0BC0BF8E1A270839599D6FFADB29381632B81',
          exponent: 0
        }, {
          denom: 'wmvt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/48FEAC3670B7F5F4064990611BE0BC0BF8E1A270839599D6FFADB29381632B81',
      name: 'WMVT',
      display: 'wmvt',
      symbol: 'WMVT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uwmvt',
            channelId: 'channel-6'
          },
          chain: {
            channelId: 'channel-594',
            path: 'transfer/channel-594/factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uwmvt'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uwmvt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
      }
    },
    {
      description: 'DRIPPY Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/5F2BDDD68BD357FC76514CD0E44228899C2ADAF2580886A4ACC38B2BAF8E9F6A',
          exponent: 0
        }, {
          denom: 'drippy',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/5F2BDDD68BD357FC76514CD0E44228899C2ADAF2580886A4ACC38B2BAF8E9F6A',
      name: 'DRIPPY',
      display: 'drippy',
      symbol: 'DRIPPY',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/udrippy',
            channelId: 'channel-6'
          },
          chain: {
            channelId: 'channel-594',
            path: 'transfer/channel-594/factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/udrippy'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/udrippy'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
      }
    },
    {
      description: 'GAS Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/5FD9768DA0B68C4B2EE28A57496C2B03F149BF58E0A4DC8DEEFD3F8EDE7634F5',
          exponent: 0
        }, {
          denom: 'gas',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/5FD9768DA0B68C4B2EE28A57496C2B03F149BF58E0A4DC8DEEFD3F8EDE7634F5',
      name: 'GAS',
      display: 'gas',
      symbol: 'GAS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/ugas',
            channelId: 'channel-6'
          },
          chain: {
            channelId: 'channel-594',
            path: 'transfer/channel-594/factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/ugas'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/ugas'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
      }
    },
    {
      description: 'GOZER Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/6561010EA61B8C9B2984417926379FFC45FFBC5BF9560D84DE4B164B4502AA32',
          exponent: 0
        }, {
          denom: 'gozer',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/6561010EA61B8C9B2984417926379FFC45FFBC5BF9560D84DE4B164B4502AA32',
      name: 'GOZER',
      display: 'gozer',
      symbol: 'GOZER',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/ugozer',
            channelId: 'channel-6'
          },
          chain: {
            channelId: 'channel-594',
            path: 'transfer/channel-594/factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/ugozer'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/ugozer'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
      }
    },
    {
      description: 'SIMPLE Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/65E7A9F142C7C5BCD7551AF2311B3137FC5CBFF693DCADC15FCC9AEF12A778F7',
          exponent: 0
        }, {
          denom: 'simple',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/65E7A9F142C7C5BCD7551AF2311B3137FC5CBFF693DCADC15FCC9AEF12A778F7',
      name: 'SIMPLE',
      display: 'simple',
      symbol: 'SIMPLE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/usimple',
            channelId: 'channel-6'
          },
          chain: {
            channelId: 'channel-594',
            path: 'transfer/channel-594/factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/usimple'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/usimple'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
      }
    },
    {
      description: 'TIMMY Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/7902BAE3A32BF67C5713C35A1610127D331008F3C54AF37FA35AC46045E86744',
          exponent: 0
        }, {
          denom: 'timmy',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/7902BAE3A32BF67C5713C35A1610127D331008F3C54AF37FA35AC46045E86744',
      name: 'TIMMY',
      display: 'timmy',
      symbol: 'TIMMY',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1c799jddmlz7segvg6jrw6w2k6svwafganjdznard3tc74n7td7rqdqe6ks/utimmy',
            channelId: 'channel-6'
          },
          chain: {
            channelId: 'channel-594',
            path: 'transfer/channel-594/factory/manifest1c799jddmlz7segvg6jrw6w2k6svwafganjdznard3tc74n7td7rqdqe6ks/utimmy'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1c799jddmlz7segvg6jrw6w2k6svwafganjdznard3tc74n7td7rqdqe6ks/utimmy'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
      }
    },
    {
      description: 'AGA Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/81F5BD52ADAB15EE8E9E0ECA7F7214A51AC4A06F4A2837261F2604F31A1649DA',
          exponent: 0
        }, {
          denom: 'aga',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/81F5BD52ADAB15EE8E9E0ECA7F7214A51AC4A06F4A2837261F2604F31A1649DA',
      name: 'AGA',
      display: 'aga',
      symbol: 'AGA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uaga',
            channelId: 'channel-6'
          },
          chain: {
            channelId: 'channel-594',
            path: 'transfer/channel-594/factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uaga'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uaga'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
      }
    },
    {
      description: 'MFX Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/FBB845E40F35378F2CDD02E0A8E9A42DECDBE1067F3E5CB08DBCF616B029569C',
          exponent: 0
        }, {
          denom: 'mfx',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/FBB845E40F35378F2CDD02E0A8E9A42DECDBE1067F3E5CB08DBCF616B029569C',
      name: 'MFX',
      display: 'mfx',
      symbol: 'MFX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'umfx',
            channelId: 'channel-6'
          },
          chain: {
            channelId: 'channel-594',
            path: 'transfer/channel-594/umfx'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'umfx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
      }
    },
    {
      description: 'FUNZIE Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/8F0FD15E8A195360783298BF16A64463AB2F1F793946213F475549C637E91C18',
          exponent: 0
        }, {
          denom: 'funzie',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/8F0FD15E8A195360783298BF16A64463AB2F1F793946213F475549C637E91C18',
      name: 'FUNZIE',
      display: 'funzie',
      symbol: 'FUNZIE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1rme50egv6kwxq5skm60s0n7hd6ynuf33p5g87e/ufunzie',
            channelId: 'channel-6'
          },
          chain: {
            channelId: 'channel-594',
            path: 'transfer/channel-594/factory/manifest1rme50egv6kwxq5skm60s0n7hd6ynuf33p5g87e/ufunzie'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1rme50egv6kwxq5skm60s0n7hd6ynuf33p5g87e/ufunzie'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
      }
    },
    {
      description: 'SPOOF Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/CFE74816F2A422812BAEFC344A61536B408C61E7B506CB9D2AD061A459EE48C6',
          exponent: 0
        }, {
          denom: 'spoof',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/CFE74816F2A422812BAEFC344A61536B408C61E7B506CB9D2AD061A459EE48C6',
      name: 'SPOOF',
      display: 'spoof',
      symbol: 'SPOOF',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uspoof',
            channelId: 'channel-6'
          },
          chain: {
            channelId: 'channel-594',
            path: 'transfer/channel-594/factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uspoof'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uspoof'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
      }
    }
  ]
};
export default info;