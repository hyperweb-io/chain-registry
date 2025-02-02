import { AssetList } from '@chain-registry/types';
const testnet_assets: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'osmosistestnet',
  assets: [
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'uosmo',
          exponent: 0,
          aliases: []
        }, {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'sdk.coin',
      base: 'uosmo',
      name: 'Osmosis Testnet',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }],
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking']
    },
    {
      denom_units: [{
          denom: 'uion',
          exponent: 0
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'uion',
      name: 'Ion',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
        }],
      coingecko_id: 'ion',
      keywords: ['memecoin']
    },
    {
      description: 'The native staking and governance token of the Theta testnet version of the Cosmos Hub.',
      denom_units: [{
          denom: 'ibc/9FF2B7A5F55038A7EE61F4FD6749D9A648B48E89830F2682B67B5DC158E2753C',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/9FF2B7A5F55038A7EE61F4FD6749D9A648B48E89830F2682B67B5DC158E2753C',
      name: 'Cosmos Hub Public Testnet',
      display: 'atom',
      symbol: 'ATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'cosmoshubtestnet',
            base_denom: 'uatom',
            channel_id: 'channel-3306'
          },
          chain: {
            channel_id: 'channel-4156',
            path: 'transfer/channel-4156/uatom'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'cosmoshubtestnet',
            base_denom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }]
    },
    {
      description: 'Circle\'s stablecoin on Axelar',
      denom_units: [{
          denom: 'ibc/2164BDB48DE5501430E71286448D87C6D2240EC0E078CF113CAB85E21A352BB0',
          exponent: 0
        }, {
          denom: 'ausdc',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/2164BDB48DE5501430E71286448D87C6D2240EC0E078CF113CAB85E21A352BB0',
      name: 'USD Coin (Axelar)',
      display: 'ausdc',
      symbol: 'aUSDC.axl',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereumtestnet',
            base_denom: '0x254d06f33bDc5b8ee05b2ea472107E300226659A'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelartestnet',
            base_denom: 'uausdc',
            channel_id: 'channel-339'
          },
          chain: {
            channel_id: 'channel-4170',
            path: 'transfer/channel-4170/uausdc'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereumtestnet',
            base_denom: '0x254d06f33bDc5b8ee05b2ea472107E300226659A'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }]
    },
    {
      description: 'Wrapped Ether on Axelar',
      denom_units: [{
          denom: 'ibc/1F42AC9631DBE03009219ECCFE151786F53A038DE9F7A07C709158514F1D5942',
          exponent: 0,
          aliases: ['eth-wei']
        }, {
          denom: 'weth',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/1F42AC9631DBE03009219ECCFE151786F53A038DE9F7A07C709158514F1D5942',
      name: 'Wrapped Ether (Axelar)',
      display: 'weth',
      symbol: 'ETH',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'ethereumtestnet',
            base_denom: 'wei'
          },
          provider: 'Ethereum'
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereumtestnet',
            base_denom: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelartestnet',
            base_denom: 'eth-wei',
            channel_id: 'channel-339'
          },
          chain: {
            channel_id: 'channel-4170',
            path: 'transfer/channel-4170/eth-wei'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereumtestnet',
            base_denom: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/31D220286E6C224C0F72D890D0EB75A228D388089EF5C4D77212344F9EAF0183',
          exponent: 0,
          aliases: ['ujunox']
        }, {
          denom: 'junox',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/31D220286E6C224C0F72D890D0EB75A228D388089EF5C4D77212344F9EAF0183',
      name: 'Juno Testnet',
      display: 'junox',
      symbol: 'JUNOX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'junotestnet',
            base_denom: 'ujunox',
            channel_id: 'channel-889'
          },
          chain: {
            channel_id: 'channel-5498',
            path: 'transfer/channel-5498/ujunox'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'junotestnet',
            base_denom: 'ujunox'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.svg'
        }]
    },
    {
      description: 'The native token of Mars Protocol',
      denom_units: [{
          denom: 'ibc/66A7ADA623D33D0B66C6890FE3E1AF3D638D56CE2B56F8BDA210B2AA62016216',
          exponent: 0,
          aliases: ['umars']
        }, {
          denom: 'mars',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/66A7ADA623D33D0B66C6890FE3E1AF3D638D56CE2B56F8BDA210B2AA62016216',
      name: 'Mars Hub Testnet',
      display: 'mars',
      symbol: 'MARS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'marstestnet',
            base_denom: 'umars',
            channel_id: 'channel-28'
          },
          chain: {
            channel_id: 'channel-5499',
            path: 'transfer/channel-5499/umars'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'marstestnet',
            base_denom: 'umars'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.svg'
        }]
    },
    {
      description: 'USD Coin',
      denom_units: [{
          denom: 'ibc/DE6792CF9E521F6AD6E9A4BDF6225C9571A3B74ACC0A529F92BC5122A39D2E58',
          exponent: 0,
          aliases: ['microusdc', 'uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/DE6792CF9E521F6AD6E9A4BDF6225C9571A3B74ACC0A529F92BC5122A39D2E58',
      name: 'USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Circle'
        },
        {
          type: 'test-mintage',
          counterparty: {
            chain_name: 'noble',
            base_denom: 'uusdc'
          },
          provider: 'Circle'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'nobletestnet',
            base_denom: 'uusdc',
            channel_id: 'channel-22'
          },
          chain: {
            channel_id: 'channel-4280',
            path: 'transfer/channel-4280/uusdc'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'nobletestnet',
            base_denom: 'uusdc'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          theme: {
            circle: true,
            primary_color_hex: '#2775CA'
          }
        }]
    },
    {
      description: 'Akash Token (AKT) is the Akash Network\'s native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.',
      denom_units: [{
          denom: 'ibc/AD59D59CFB0E628E73C798415F823AB5B6257C2FE4BF67DBB5D6A677B2686E82',
          exponent: 0,
          aliases: ['uakt']
        }, {
          denom: 'akt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/AD59D59CFB0E628E73C798415F823AB5B6257C2FE4BF67DBB5D6A677B2686E82',
      name: 'Sandbox',
      display: 'akt',
      symbol: 'AKT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'akashtestnet',
            base_denom: 'uakt',
            channel_id: 'channel-6'
          },
          chain: {
            channel_id: 'channel-4171',
            path: 'transfer/channel-4171/uakt'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'akashtestnet',
            base_denom: 'uakt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
        }]
    },
    {
      description: 'The native utility token of the Kaon testnet version of KYVE.',
      denom_units: [{
          denom: 'ibc/AB8AF05799E299FB5C5C80781DA35887F53E029745D20E5641233DB4E6B28515',
          exponent: 0,
          aliases: ['tkyve']
        }, {
          denom: 'kyve',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/AB8AF05799E299FB5C5C80781DA35887F53E029745D20E5641233DB4E6B28515',
      name: 'KYVE Kaon',
      display: 'kyve',
      symbol: 'KYVE',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chain_name: 'kyve',
            base_denom: 'ukyve'
          },
          provider: 'Kyve'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'kyvetestnet',
            base_denom: 'tkyve',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-10',
            path: 'transfer/channel-10/tkyve'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg',
          image_sync: {
            chain_name: 'kyve',
            base_denom: 'ukyve'
          },
          theme: {
            primary_color_hex: '#335350'
          }
        }]
    },
    {
      description: 'QCK - native token of Quicksilver',
      denom_units: [{
          denom: 'ibc/F37CF69589DE12342758382F8770C0852CD8D2E4519F55166EBDAF472AD667C9',
          exponent: 0,
          aliases: ['uqck']
        }, {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/F37CF69589DE12342758382F8770C0852CD8D2E4519F55166EBDAF472AD667C9',
      name: 'Quicksilver Testnet',
      display: 'qck',
      symbol: 'QCK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'quicksilvertestnet',
            base_denom: 'uqck',
            channel_id: 'channel-20'
          },
          chain: {
            channel_id: 'channel-13',
            path: 'transfer/channel-13/uqck'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
      },
      images: [{
          image_sync: {
            chain_name: 'quicksilvertestnet',
            base_denom: 'uqck'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
        }]
    },
    {
      description: 'The native token of Chain4Energy',
      denom_units: [{
          denom: 'ibc/E3D323CB6F427C49E56F913C853A416F6B71BAA9B0164625AD0203266F92B3ED',
          exponent: 0,
          aliases: ['uc4e']
        }, {
          denom: 'c4e',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/E3D323CB6F427C49E56F913C853A416F6B71BAA9B0164625AD0203266F92B3ED',
      name: 'Chain4Energy Testnet',
      display: 'c4e',
      symbol: 'C4E',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'chain4energytestnet',
            base_denom: 'uc4e',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-111',
            path: 'transfer/channel-111/uc4e'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/chain4energytestnet/images/c4e.png'
      },
      images: [{
          image_sync: {
            chain_name: 'chain4energytestnet',
            base_denom: 'uc4e'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/chain4energytestnet/images/c4e.png'
        }]
    },
    {
      description: 'The XPRT token is primarily a governance token for the Persistence chain.',
      denom_units: [{
          denom: 'ibc/754C8533F8A418B03AD5F2C6AA19D4703CF78BBAB9E2E4DDD6212AAC2E502CA6',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/754C8533F8A418B03AD5F2C6AA19D4703CF78BBAB9E2E4DDD6212AAC2E502CA6',
      name: 'Persistence Testnet',
      display: 'xprt',
      symbol: 'XPRT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'persistencetestnet2',
            base_denom: 'uxprt',
            channel_id: 'channel-7'
          },
          chain: {
            channel_id: 'channel-1037',
            path: 'transfer/channel-1037/uxprt'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'persistencetestnet2',
            base_denom: 'uxprt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
        }]
    },
    {
      description: 'The native staking token of the Xion network.',
      denom_units: [{
          denom: 'ibc/3642669AD14386D3E38F43F30CFCA859B3E8A05BF6BD6A23DEBD2115AD1325E9',
          exponent: 0,
          aliases: ['microxion', 'uxion']
        }, {
          denom: 'XION',
          exponent: 6,
          aliases: ['xion']
        }],
      type_asset: 'ics20',
      base: 'ibc/3642669AD14386D3E38F43F30CFCA859B3E8A05BF6BD6A23DEBD2115AD1325E9',
      name: 'Xion Testnet',
      display: 'XION',
      symbol: 'XION',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'xiontestnet',
            base_denom: 'uxion',
            channel_id: 'channel-12'
          },
          chain: {
            channel_id: 'channel-4410',
            path: 'transfer/channel-4410/uxion'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
      },
      images: [{
          image_sync: {
            chain_name: 'xiontestnet',
            base_denom: 'uxion'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
        }]
    },
    {
      description: 'The native token of Saga Testnet',
      denom_units: [{
          denom: 'ibc/48384130079A5987378F5776775F8C29A02505273E777BBB99361F2BB5B577C9',
          exponent: 0,
          aliases: ['utsaga']
        }, {
          denom: 'tsaga',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/48384130079A5987378F5776775F8C29A02505273E777BBB99361F2BB5B577C9',
      name: 'Saga Testnet',
      display: 'tsaga',
      symbol: 'TSAGA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'sagatestnet',
            base_denom: 'utsaga',
            channel_id: 'channel-20'
          },
          chain: {
            channel_id: 'channel-4946',
            path: 'transfer/channel-4946/utsaga'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'sagatestnet',
            base_denom: 'utsaga'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg'
        }]
    },
    {
      description: 'The native token of IXO Chain',
      denom_units: [{
          denom: 'ibc/88C815D69587CF0F05E96E5E2731EA56194D73C9A02A500095294D3A5DE68F16',
          exponent: 0,
          aliases: ['uixo']
        }, {
          denom: 'ixo',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/88C815D69587CF0F05E96E5E2731EA56194D73C9A02A500095294D3A5DE68F16',
      name: 'ixo',
      display: 'ixo',
      symbol: 'IXO',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chain_name: 'impacthub',
            base_denom: 'uixo'
          },
          provider: 'impacthub'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'impacthubtestnet',
            base_denom: 'uixo',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-1637',
            path: 'transfer/channel-1637/uixo'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'impacthub',
            base_denom: 'uixo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg',
          theme: {
            primary_color_hex: '#2c4484'
          }
        }]
    },
    {
      denom_units: [{
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
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.svg'
      },
      keywords: ['memecoin'],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'The yield token for ATOM denominated vaults on Amulet Protocol',
      denom_units: [{
          denom: 'ibc/C86B92F7FCFC1993DAC4AB0D78D9BC080300354B823A57F12CD6E2FBB667214E',
          exponent: 0
        }, {
          denom: 'amATOM',
          exponent: 6
        }],
      base: 'ibc/C86B92F7FCFC1993DAC4AB0D78D9BC080300354B823A57F12CD6E2FBB667214E',
      name: 'amATOM (Testnet)',
      display: 'amATOM',
      symbol: 'amATOM',
      type_asset: 'ics20',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/amATOM.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/amATOM.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'neutrontestnet',
            base_denom: 'factory/neutron15lku24mqhvy4v4gryrqs4662n9v9q4ux9tayn89cmdzldjcgawushxvm76/amatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/amATOM.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/amATOM.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'neutrontestnet',
            base_denom: 'factory/neutron15lku24mqhvy4v4gryrqs4662n9v9q4ux9tayn89cmdzldjcgawushxvm76/amatom',
            channel_id: 'channel-787'
          },
          chain: {
            channel_id: 'channel-7884',
            path: 'transfer/channel-7884/factory/neutron15lku24mqhvy4v4gryrqs4662n9v9q4ux9tayn89cmdzldjcgawushxvm76/amatom'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Titan Chain',
      denom_units: [
        {
          denom: 'ibc/28EEF762052DB8C3D27A7BF625E9F86A1B3B689CC8D80C818CEDF2EB6CBA02A6',
          exponent: 0,
          aliases: ['atkx']
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
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/28EEF762052DB8C3D27A7BF625E9F86A1B3B689CC8D80C818CEDF2EB6CBA02A6',
      name: 'tkx',
      display: 'tkx',
      symbol: 'TKX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'titan',
            base_denom: 'atkx',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-5969',
            path: 'transfer/channel-5969/atkx'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png'
        }]
    },
    {
      description: 'Manifest Testnet Token',
      denom_units: [{
          denom: 'ibc/8402769A51AEE1CDF35223998D284E937EBF03F4A2CE43EC10BB028BB5AD29C8',
          exponent: 0,
          aliases: ['umfx']
        }, {
          denom: 'mfx',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/8402769A51AEE1CDF35223998D284E937EBF03F4A2CE43EC10BB028BB5AD29C8',
      name: 'Manifest Testnet',
      display: 'mfx',
      symbol: 'MFX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'manifesttestnet',
            base_denom: 'umfx',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-10016',
            path: 'transfer/channel-10016/umfx'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/mfx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/mfx.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'manifesttestnet',
            base_denom: 'umfx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/mfx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/mfx.svg'
        }]
    }
  ]
};
export default testnet_assets;
    