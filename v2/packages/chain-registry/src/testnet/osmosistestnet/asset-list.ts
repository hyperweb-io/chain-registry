import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'osmosistestnet',
  assets: [
    {
      description: 'The native token of Osmosis',
      denomUnits: [{
          denom: 'uosmo',
          exponent: 0,
          aliases: []
        }, {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'sdk.coin',
      base: 'uosmo',
      name: 'Osmosis Testnet',
      display: 'osmo',
      symbol: 'OSMO',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'uosmo'
          },
          provider: 'Osmosis'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }],
      coingeckoId: 'osmosis',
      keywords: ['dex', 'staking']
    },
    {
      denomUnits: [{
          denom: 'uion',
          exponent: 0
        }, {
          denom: 'ion',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'uion',
      name: 'Ion',
      display: 'ion',
      symbol: 'ION',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'uion'
          },
          provider: 'Osmosis'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
        }],
      coingeckoId: 'ion',
      keywords: ['memecoin']
    },
    {
      description: 'The native staking and governance token of the Theta testnet version of the Cosmos Hub.',
      denomUnits: [{
          denom: 'ibc/9FF2B7A5F55038A7EE61F4FD6749D9A648B48E89830F2682B67B5DC158E2753C',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/9FF2B7A5F55038A7EE61F4FD6749D9A648B48E89830F2682B67B5DC158E2753C',
      name: 'Cosmos Hub Public Testnet',
      display: 'atom',
      symbol: 'ATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cosmoshubtestnet',
            baseDenom: 'uatom',
            channelId: 'channel-3306'
          },
          chain: {
            channelId: 'channel-4156',
            path: 'transfer/channel-4156/uatom'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      images: [{
          imageSync: {
            chainName: 'cosmoshubtestnet',
            baseDenom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }]
    },
    {
      description: 'Circle\'s stablecoin on Axelar',
      denomUnits: [{
          denom: 'ibc/2164BDB48DE5501430E71286448D87C6D2240EC0E078CF113CAB85E21A352BB0',
          exponent: 0
        }, {
          denom: 'ausdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/2164BDB48DE5501430E71286448D87C6D2240EC0E078CF113CAB85E21A352BB0',
      name: 'USD Coin (Axelar)',
      display: 'ausdc',
      symbol: 'aUSDC.axl',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereumtestnet',
            baseDenom: '0x254d06f33bDc5b8ee05b2ea472107E300226659A'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelartestnet',
            baseDenom: 'uausdc',
            channelId: 'channel-339'
          },
          chain: {
            channelId: 'channel-4170',
            path: 'transfer/channel-4170/uausdc'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereumtestnet',
            baseDenom: '0x254d06f33bDc5b8ee05b2ea472107E300226659A'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }]
    },
    {
      description: 'Wrapped Ether on Axelar',
      denomUnits: [{
          denom: 'ibc/1F42AC9631DBE03009219ECCFE151786F53A038DE9F7A07C709158514F1D5942',
          exponent: 0,
          aliases: ['eth-wei']
        }, {
          denom: 'weth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/1F42AC9631DBE03009219ECCFE151786F53A038DE9F7A07C709158514F1D5942',
      name: 'Wrapped Ether (Axelar)',
      display: 'weth',
      symbol: 'ETH',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chainName: 'ethereumtestnet',
            baseDenom: 'wei'
          },
          provider: 'Ethereum'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereumtestnet',
            baseDenom: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelartestnet',
            baseDenom: 'eth-wei',
            channelId: 'channel-339'
          },
          chain: {
            channelId: 'channel-4170',
            path: 'transfer/channel-4170/eth-wei'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereumtestnet',
            baseDenom: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denomUnits: [{
          denom: 'ibc/31D220286E6C224C0F72D890D0EB75A228D388089EF5C4D77212344F9EAF0183',
          exponent: 0,
          aliases: ['ujunox']
        }, {
          denom: 'junox',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/31D220286E6C224C0F72D890D0EB75A228D388089EF5C4D77212344F9EAF0183',
      name: 'Juno Testnet',
      display: 'junox',
      symbol: 'JUNOX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'junotestnet6',
            baseDenom: 'ujunox',
            channelId: 'channel-889'
          },
          chain: {
            channelId: 'channel-5498',
            path: 'transfer/channel-5498/ujunox'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.svg'
      },
      images: [{
          imageSync: {
            chainName: 'junotestnet',
            baseDenom: 'ujunox'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.svg'
        }],
      coingeckoId: 'juno-network'
    },
    {
      description: 'The native token of Mars Protocol',
      denomUnits: [{
          denom: 'ibc/66A7ADA623D33D0B66C6890FE3E1AF3D638D56CE2B56F8BDA210B2AA62016216',
          exponent: 0,
          aliases: ['umars']
        }, {
          denom: 'mars',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/66A7ADA623D33D0B66C6890FE3E1AF3D638D56CE2B56F8BDA210B2AA62016216',
      name: 'Mars Hub Testnet',
      display: 'mars',
      symbol: 'MARS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'marstestnet',
            baseDenom: 'umars',
            channelId: 'channel-28'
          },
          chain: {
            channelId: 'channel-5499',
            path: 'transfer/channel-5499/umars'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.svg'
      },
      images: [{
          imageSync: {
            chainName: 'marstestnet',
            baseDenom: 'umars'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.svg'
        }]
    },
    {
      description: 'USD Coin',
      denomUnits: [{
          denom: 'ibc/DE6792CF9E521F6AD6E9A4BDF6225C9571A3B74ACC0A529F92BC5122A39D2E58',
          exponent: 0,
          aliases: ['microusdc', 'uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/DE6792CF9E521F6AD6E9A4BDF6225C9571A3B74ACC0A529F92BC5122A39D2E58',
      name: 'USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'additional-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Circle'
        },
        {
          type: 'test-mintage',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdc'
          },
          provider: 'Circle'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'nobletestnet',
            baseDenom: 'uusdc',
            channelId: 'channel-22'
          },
          chain: {
            channelId: 'channel-4280',
            path: 'transfer/channel-4280/uusdc'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'nobletestnet',
            baseDenom: 'uusdc'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          theme: {
            circle: true,
            primaryColorHex: '#2775CA'
          }
        }],
      coingeckoId: 'usd-coin'
    },
    {
      description: 'Akash Token (AKT) is the Akash Network\'s native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.',
      denomUnits: [{
          denom: 'ibc/AD59D59CFB0E628E73C798415F823AB5B6257C2FE4BF67DBB5D6A677B2686E82',
          exponent: 0,
          aliases: ['uakt']
        }, {
          denom: 'akt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/AD59D59CFB0E628E73C798415F823AB5B6257C2FE4BF67DBB5D6A677B2686E82',
      name: 'Sandbox',
      display: 'akt',
      symbol: 'AKT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'akashtestnet',
            baseDenom: 'uakt',
            channelId: 'channel-6'
          },
          chain: {
            channelId: 'channel-4171',
            path: 'transfer/channel-4171/uakt'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
      },
      images: [{
          imageSync: {
            chainName: 'akashtestnet',
            baseDenom: 'uakt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
        }]
    },
    {
      description: 'The native utility token of the Kaon testnet version of KYVE.',
      denomUnits: [{
          denom: 'ibc/AB8AF05799E299FB5C5C80781DA35887F53E029745D20E5641233DB4E6B28515',
          exponent: 0,
          aliases: ['tkyve']
        }, {
          denom: 'kyve',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/AB8AF05799E299FB5C5C80781DA35887F53E029745D20E5641233DB4E6B28515',
      name: 'KYVE Kaon',
      display: 'kyve',
      symbol: 'KYVE',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'kyve',
            baseDenom: 'ukyve'
          },
          provider: 'Kyve'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'kyvetestnet',
            baseDenom: 'tkyve',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-10',
            path: 'transfer/channel-10/tkyve'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg',
          imageSync: {
            chainName: 'kyve',
            baseDenom: 'ukyve'
          },
          theme: {
            primaryColorHex: '#335350'
          }
        }],
      coingeckoId: 'kyve-network'
    },
    {
      description: 'QCK - native token of Quicksilver',
      denomUnits: [{
          denom: 'ibc/F37CF69589DE12342758382F8770C0852CD8D2E4519F55166EBDAF472AD667C9',
          exponent: 0,
          aliases: ['uqck']
        }, {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/F37CF69589DE12342758382F8770C0852CD8D2E4519F55166EBDAF472AD667C9',
      name: 'Quicksilver Testnet',
      display: 'qck',
      symbol: 'QCK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'quicksilvertestnet2',
            baseDenom: 'uqck',
            channelId: 'channel-20'
          },
          chain: {
            channelId: 'channel-13',
            path: 'transfer/channel-13/uqck'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
      },
      images: [{
          imageSync: {
            chainName: 'quicksilvertestnet2',
            baseDenom: 'uqck'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
        }],
      coingeckoId: 'quicksilver'
    },
    {
      description: 'The XPRT token is primarily a governance token for the Persistence chain.',
      denomUnits: [{
          denom: 'ibc/754C8533F8A418B03AD5F2C6AA19D4703CF78BBAB9E2E4DDD6212AAC2E502CA6',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/754C8533F8A418B03AD5F2C6AA19D4703CF78BBAB9E2E4DDD6212AAC2E502CA6',
      name: 'Persistence Testnet',
      display: 'xprt',
      symbol: 'XPRT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'persistencetestnet2',
            baseDenom: 'uxprt',
            channelId: 'channel-7'
          },
          chain: {
            channelId: 'channel-1037',
            path: 'transfer/channel-1037/uxprt'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
      },
      images: [{
          imageSync: {
            chainName: 'persistencetestnet2',
            baseDenom: 'uxprt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
        }],
      coingeckoId: 'persistence'
    },
    {
      description: 'The native token of Saga Testnet',
      denomUnits: [{
          denom: 'ibc/48384130079A5987378F5776775F8C29A02505273E777BBB99361F2BB5B577C9',
          exponent: 0,
          aliases: ['utsaga']
        }, {
          denom: 'tsaga',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/48384130079A5987378F5776775F8C29A02505273E777BBB99361F2BB5B577C9',
      name: 'Saga Testnet',
      display: 'tsaga',
      symbol: 'TSAGA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'sagatestnet',
            baseDenom: 'utsaga',
            channelId: 'channel-20'
          },
          chain: {
            channelId: 'channel-4946',
            path: 'transfer/channel-4946/utsaga'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg'
      },
      images: [{
          imageSync: {
            chainName: 'sagatestnet',
            baseDenom: 'utsaga'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg'
        }]
    },
    {
      description: 'The native token of IXO Chain',
      denomUnits: [{
          denom: 'ibc/88C815D69587CF0F05E96E5E2731EA56194D73C9A02A500095294D3A5DE68F16',
          exponent: 0,
          aliases: ['uixo']
        }, {
          denom: 'ixo',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/88C815D69587CF0F05E96E5E2731EA56194D73C9A02A500095294D3A5DE68F16',
      name: 'ixo',
      display: 'ixo',
      symbol: 'IXO',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'impacthub',
            baseDenom: 'uixo'
          },
          provider: 'impacthub'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'impacthubtestnet',
            baseDenom: 'uixo',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-1637',
            path: 'transfer/channel-1637/uixo'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
      },
      images: [{
          imageSync: {
            chainName: 'impacthub',
            baseDenom: 'uixo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg',
          theme: {
            primaryColorHex: '#2c4484'
          }
        }],
      coingeckoId: 'ixo'
    },
    {
      denomUnits: [{
          denom: 'factory/osmo1zlkzu72774ynac53necz46u4ycqtp36wedrar0/willyz',
          exponent: 0
        }, {
          denom: 'willyz',
          exponent: 6
        }],
      base: 'factory/osmo1zlkzu72774ynac53necz46u4ycqtp36wedrar0/willyz',
      name: 'Willyz',
      display: 'willyz',
      symbol: 'WILLYZ',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.svg'
      },
      keywords: ['memecoin'],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'TIMMY Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/1675C95A6F253E9FA7AFD2B4549A551F567FCB3FB7FF3978163E400FA0718D29',
          exponent: 0
        }, {
          denom: 'timmy',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/1675C95A6F253E9FA7AFD2B4549A551F567FCB3FB7FF3978163E400FA0718D29',
      name: 'TIMMY',
      display: 'timmy',
      symbol: 'TIMMY',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1c799jddmlz7segvg6jrw6w2k6svwafganjdznard3tc74n7td7rqdqe6ks/utimmy',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-10183',
            path: 'transfer/channel-10183/factory/manifest1c799jddmlz7segvg6jrw6w2k6svwafganjdznard3tc74n7td7rqdqe6ks/utimmy'
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
      description: 'SIMPLE Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/1BAC7171193B1FED44024C08E460D4CA59DCDCEF76C56340AF8057C0D8C49634',
          exponent: 0
        }, {
          denom: 'simple',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/1BAC7171193B1FED44024C08E460D4CA59DCDCEF76C56340AF8057C0D8C49634',
      name: 'SIMPLE',
      display: 'simple',
      symbol: 'SIMPLE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/usimple',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-10183',
            path: 'transfer/channel-10183/factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/usimple'
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
      description: 'AGA Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/1DE9DEEEB9EF636EF8F6B54A3F12655911908DA0039921D671E3282BBDF36D23',
          exponent: 0
        }, {
          denom: 'aga',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/1DE9DEEEB9EF636EF8F6B54A3F12655911908DA0039921D671E3282BBDF36D23',
      name: 'AGA',
      display: 'aga',
      symbol: 'AGA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uaga',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-10183',
            path: 'transfer/channel-10183/factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uaga'
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
      description: 'CUTE Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/3F779F3860A4794972D03865FE273EC81B24CF0CCAE223165776D8442B62A8B2',
          exponent: 0
        }, {
          denom: 'cute',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/3F779F3860A4794972D03865FE273EC81B24CF0CCAE223165776D8442B62A8B2',
      name: 'CUTE',
      display: 'cute',
      symbol: 'CUTE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/ucute',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-10183',
            path: 'transfer/channel-10183/factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/ucute'
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
      description: 'FUNZIE Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/708B876DB3632A7490D6477F365EABF1414E6F60F60CAEC1FB6F06760451ACBE',
          exponent: 0
        }, {
          denom: 'funzie',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/708B876DB3632A7490D6477F365EABF1414E6F60F60CAEC1FB6F06760451ACBE',
      name: 'FUNZIE',
      display: 'funzie',
      symbol: 'FUNZIE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1rme50egv6kwxq5skm60s0n7hd6ynuf33p5g87e/ufunzie',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-10183',
            path: 'transfer/channel-10183/factory/manifest1rme50egv6kwxq5skm60s0n7hd6ynuf33p5g87e/ufunzie'
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
      description: 'GOZER Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/77DA06A20632C7AB6396B40989FCFB942CD2D56E107F402C595F010455B76BE1',
          exponent: 0
        }, {
          denom: 'gozer',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/77DA06A20632C7AB6396B40989FCFB942CD2D56E107F402C595F010455B76BE1',
      name: 'GOZER',
      display: 'gozer',
      symbol: 'GOZER',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/ugozer',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-10183',
            path: 'transfer/channel-10183/factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/ugozer'
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
      description: 'DANCINGPENGUIN Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/7A4DD8299304AA9D4D86B06584C56EE08C26F6F7338F2CADC5D3A8D6895A3859',
          exponent: 0
        }, {
          denom: 'dancingpenguin',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/7A4DD8299304AA9D4D86B06584C56EE08C26F6F7338F2CADC5D3A8D6895A3859',
      name: 'DANCINGPENGUIN',
      display: 'dancingpenguin',
      symbol: 'DANCINGPENGUIN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/udancingpenguin',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-10183',
            path: 'transfer/channel-10183/factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/udancingpenguin'
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
      description: 'ADAM Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/A9B2FC600298D994291B87D6452663514C88AE078F56228B584862641B0E2D6C',
          exponent: 0
        }, {
          denom: 'adam',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/A9B2FC600298D994291B87D6452663514C88AE078F56228B584862641B0E2D6C',
      name: 'ADAM',
      display: 'adam',
      symbol: 'ADAM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uadam',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-10183',
            path: 'transfer/channel-10183/factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uadam'
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
      description: 'DRIPPY Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/AB89909B308854835AD98DEF0DE18D1B324A12A443335398945E485A9B69AE34',
          exponent: 0
        }, {
          denom: 'drippy',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/AB89909B308854835AD98DEF0DE18D1B324A12A443335398945E485A9B69AE34',
      name: 'DRIPPY',
      display: 'drippy',
      symbol: 'DRIPPY',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/udrippy',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-10183',
            path: 'transfer/channel-10183/factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/udrippy'
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
          denom: 'ibc/AF2EFBAABB4A14F6E50D83D550698FE33CC2565B7DB1CA480CAF07C7557D8277',
          exponent: 0
        }, {
          denom: 'gas',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/AF2EFBAABB4A14F6E50D83D550698FE33CC2565B7DB1CA480CAF07C7557D8277',
      name: 'GAS',
      display: 'gas',
      symbol: 'GAS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/ugas',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-10183',
            path: 'transfer/channel-10183/factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/ugas'
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
      description: 'MFX Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/71C8E0B309E2F2A4C66F85E7C34C4415A3D26E489DBDF3FFF4EDCBE15B229B14',
          exponent: 0
        }, {
          denom: 'mfx',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/71C8E0B309E2F2A4C66F85E7C34C4415A3D26E489DBDF3FFF4EDCBE15B229B14',
      name: 'MFX',
      display: 'mfx',
      symbol: 'MFX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'umfx',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-10183',
            path: 'transfer/channel-10183/umfx'
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
      description: 'TACO Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/D926A833F572447AC30E189FD1629560E679CF73170C180681B9FE29FB3BA2B6',
          exponent: 0
        }, {
          denom: 'taco',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/D926A833F572447AC30E189FD1629560E679CF73170C180681B9FE29FB3BA2B6',
      name: 'TACO',
      display: 'taco',
      symbol: 'TACO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/utaco',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-10183',
            path: 'transfer/channel-10183/factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/utaco'
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
      description: 'UMEGA Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/E09C607844E95C9338079729100E026CA5FA357DD41AFEA17FA5889535299009',
          exponent: 0
        }, {
          denom: 'umega',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/E09C607844E95C9338079729100E026CA5FA357DD41AFEA17FA5889535299009',
      name: 'UMEGA',
      display: 'umega',
      symbol: 'UMEGA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1czvrq3ufn045q5k50tjl4qu8kcmagve9ghty3c/uumega',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-10183',
            path: 'transfer/channel-10183/factory/manifest1czvrq3ufn045q5k50tjl4qu8kcmagve9ghty3c/uumega'
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
          denom: 'ibc/E58506AA351C65F86C8DCD019C57682BA7489D2277C978D5977DFA8FE4B808E6',
          exponent: 0
        }, {
          denom: 'wmvt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/E58506AA351C65F86C8DCD019C57682BA7489D2277C978D5977DFA8FE4B808E6',
      name: 'WMVT',
      display: 'wmvt',
      symbol: 'WMVT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uwmvt',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-10183',
            path: 'transfer/channel-10183/factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uwmvt'
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
      description: 'SPOOF Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/E96950EBFD6690785604A4B835C8FCA238927E96C2ABCF6F51725DA872699E33',
          exponent: 0
        }, {
          denom: 'spoof',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/E96950EBFD6690785604A4B835C8FCA238927E96C2ABCF6F51725DA872699E33',
      name: 'SPOOF',
      display: 'spoof',
      symbol: 'SPOOF',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uspoof',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-10183',
            path: 'transfer/channel-10183/factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uspoof'
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
    },
    {
      description: 'ASDASDASD Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/EAF2ADEA5251B1FC527B407FD36BE64B572ACE19BCC325544604C5E8DE8C605E',
          exponent: 0
        }, {
          denom: 'asdasdasd',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/EAF2ADEA5251B1FC527B407FD36BE64B572ACE19BCC325544604C5E8DE8C605E',
      name: 'ASDASDASD',
      display: 'asdasdasd',
      symbol: 'ASDASDASD',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uasdasdasd',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-10183',
            path: 'transfer/channel-10183/factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uasdasdasd'
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
      description: 'SNOOP Token on Manifest Ledger Testnet',
      denomUnits: [{
          denom: 'ibc/F5C09D41BEA7D1E30AE6CB0D303E9DF5C4D0A16859329973FEAD94A1DA279643',
          exponent: 0
        }, {
          denom: 'snoop',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F5C09D41BEA7D1E30AE6CB0D303E9DF5C4D0A16859329973FEAD94A1DA279643',
      name: 'SNOOP',
      display: 'snoop',
      symbol: 'SNOOP',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'factory/manifest1rme50egv6kwxq5skm60s0n7hd6ynuf33p5g87e/usnoop',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-10183',
            path: 'transfer/channel-10183/factory/manifest1rme50egv6kwxq5skm60s0n7hd6ynuf33p5g87e/usnoop'
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
    }
  ]
};
export default info;