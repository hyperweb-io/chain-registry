import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'cosmoshubtestnet',
  assets: [
    {
      denom_units: [{
          denom: 'ibc/0171A118CC803DBD96B62593C957A8D663961DFE8E9E15AD47C252F6BB3CF308',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      base: 'ibc/0171A118CC803DBD96B62593C957A8D663961DFE8E9E15AD47C252F6BB3CF308',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'utia',
            chain_name: 'celestiatestnet3'
          },
          chain: {
            channel_id: 'channel-3152'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/0171A118CC803DBD96B62593C957A8D663961DFE8E9E15AD47C252F6BB3CF308',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      base: 'ibc/0171A118CC803DBD96B62593C957A8D663961DFE8E9E15AD47C252F6BB3CF308',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'utia',
            chain_name: 'celestiatestnet3'
          },
          chain: {
            channel_id: 'channel-3152'
          }
        }]
    },
    {
      description: 'Eden token definition',
      denom_units: [
        {
          denom: 'ibc/D62F9AC7E2AB0D54B4C5A45139673954CCAF1FA217F820D214CC22E85A6761B7',
          exponent: 0,
          aliases: ['ueden']
        },
        {
          denom: 'meden',
          exponent: 3,
          aliases: ['millieden']
        },
        {
          denom: 'eden',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/D62F9AC7E2AB0D54B4C5A45139673954CCAF1FA217F820D214CC22E85A6761B7',
      name: 'Eden',
      display: 'eden',
      symbol: 'EDEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/eden.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/eden.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'ueden',
            chain_name: 'elystestnet'
          },
          chain: {
            channel_id: 'channel-3302'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the testnet version of Empower.',
      denom_units: [{
          denom: 'ibc/C3D75AA5082B8EEC8E6DE916F0CA9C1C71978A6BB0FA5AAE3E5ABE81BAF57B42',
          exponent: 0,
          aliases: ['umpwr']
        }, {
          denom: 'mpwr',
          exponent: 6
        }],
      base: 'ibc/C3D75AA5082B8EEC8E6DE916F0CA9C1C71978A6BB0FA5AAE3E5ABE81BAF57B42',
      name: 'MPWR',
      display: 'mpwr',
      symbol: 'MPWR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/empowertestnet/images/mpwr.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/empowertestnet/images/mpwr.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'umpwr',
            chain_name: 'empowertestnet'
          },
          chain: {
            channel_id: 'channel-2765'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Harpoon testnet version of Kujira.',
      denom_units: [{
          denom: 'ibc/E1D1BDB7784D5784980CAA320583F8D3DDBA182E01F082B0CE9E761C53C7F59B',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/E1D1BDB7784D5784980CAA320583F8D3DDBA182E01F082B0CE9E761C53C7F59B',
      name: 'Kuji',
      display: 'kuji',
      symbol: 'KUJI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kujiratestnet/images/kuji.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kujiratestnet/images/kuji.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-51',
            base_denom: 'ukuji',
            chain_name: 'kujiratestnet'
          },
          chain: {
            channel_id: 'channel-4004'
          }
        }]
    },
    {
      deprecated: true,
      description: 'PSTAKE Liquid-Staked ATOM',
      denom_units: [{
          denom: 'ibc/BBFA165987773A8581F02DC0DBE362D3E373CCEFD6E7D151BD77FBBAB5D4886B',
          exponent: 0,
          aliases: ['stk/uatom']
        }, {
          denom: 'stkatom',
          exponent: 6,
          aliases: ['stk/atom']
        }],
      base: 'ibc/BBFA165987773A8581F02DC0DBE362D3E373CCEFD6E7D151BD77FBBAB5D4886B',
      name: 'PSTAKE staked ATOM',
      display: 'stkatom',
      symbol: 'stkATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'stk/uatom',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-2777'
          }
        }]
    },
    {
      deprecated: true,
      description: 'PSTAKE Liquid-Staked OSMO',
      denom_units: [{
          denom: 'ibc/A28CE926C10943BFF39CED2343503912D9FA238D256C35686518B0D824708259',
          exponent: 0,
          aliases: ['stk/uosmo']
        }, {
          denom: 'stkosmo',
          exponent: 6,
          aliases: ['stk/osmo']
        }],
      base: 'ibc/A28CE926C10943BFF39CED2343503912D9FA238D256C35686518B0D824708259',
      name: 'PSTAKE staked OSMO',
      display: 'stkosmo',
      symbol: 'stkOSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'stk/uosmo',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-2777'
          }
        }]
    },
    {
      deprecated: true,
      description: 'PSTAKE Liquid-Staked DV4TNT',
      denom_units: [{
          denom: 'ibc/13FEE46268FF7160702526D04414BE1EE225E9EACF228674094A01244921C217',
          exponent: 0,
          aliases: ['stk/adv4tnt']
        }, {
          denom: 'stkdv4tnt',
          exponent: 18,
          aliases: ['stk/dv4tnt']
        }],
      base: 'ibc/13FEE46268FF7160702526D04414BE1EE225E9EACF228674094A01244921C217',
      name: 'PSTAKE staked DV4TNT',
      display: 'stkdv4tnt',
      symbol: 'stkDV4TNT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'stk/adv4tnt',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-2777'
          }
        }]
    },
    {
      description: 'The native token of Prysm',
      denom_units: [{
          denom: 'ibc/713C1758420D08A892515AA68FA91976CBFD9E7BCCFE2CA6F4855165DA830D32',
          exponent: 0,
          aliases: ['uprysm']
        }, {
          denom: 'prysm',
          exponent: 6
        }],
      base: 'ibc/713C1758420D08A892515AA68FA91976CBFD9E7BCCFE2CA6F4855165DA830D32',
      display: 'prysm',
      name: 'Prysm',
      symbol: 'PRYSM',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/prysmdevnet/images/prysm.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://www.prysm.network/',
        twitter: 'https://twitter.com/PrysmNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'uprysm',
            chain_name: 'prysmdevnet'
          },
          chain: {
            channel_id: 'channel-4366'
          }
        }]
    },
    {
      description: 'The native token of Symphony',
      denom_units: [{
          denom: 'ibc/087EBD181D2DDD1D3C5F6CE1037D45E5B78A1E3B7A8495E2088CB218F881D7BB',
          exponent: 0,
          aliases: ['note']
        }, {
          denom: 'mld',
          exponent: 6,
          aliases: ['melody']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/087EBD181D2DDD1D3C5F6CE1037D45E5B78A1E3B7A8495E2088CB218F881D7BB',
      name: 'Melody',
      display: 'mld',
      symbol: 'MLD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/symphony/images/mld.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/symphony/images/mld.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'note',
            chain_name: 'symphonytestnet'
          },
          chain: {
            channel_id: 'channel-242'
          }
        }]
    },
    {
      description: 'Harmonized USD',
      denom_units: [{
          denom: 'ibc/5C2A73544972719FFBAA203655F4B0311F305052698731F4DC30B4DCE781A870',
          exponent: 0,
          aliases: ['uusd']
        }, {
          denom: 'husd',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/5C2A73544972719FFBAA203655F4B0311F305052698731F4DC30B4DCE781A870',
      name: 'Harmony USD',
      display: 'husd',
      symbol: 'HUSD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/symphony/images/husd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/symphony/images/husd.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uusd',
            chain_name: 'symphonytestnet'
          },
          chain: {
            channel_id: 'channel-242'
          }
        }]
    },
    {
      description: 'Harmonized HKD',
      denom_units: [{
          denom: 'ibc/420B21B560D528B229E38CAD83186895B7D3D075772531054076A101E4130CEF',
          exponent: 0,
          aliases: ['ukhd']
        }, {
          denom: 'hkhd',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/420B21B560D528B229E38CAD83186895B7D3D075772531054076A101E4130CEF',
      name: 'Harmony HKD',
      display: 'hkhd',
      symbol: 'HKHD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/symphony/images/hhkd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/symphony/images/hhkd.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ukhd',
            chain_name: 'symphonytestnet'
          },
          chain: {
            channel_id: 'channel-242'
          }
        }]
    },
    {
      description: 'Harmonized VND',
      denom_units: [{
          denom: 'ibc/15B4B2F848119431C6312B10BB146FFC6B718B7F7899B20001B0ACDDE0724AF5',
          exponent: 0,
          aliases: ['uvnd']
        }, {
          denom: 'hvnd',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/15B4B2F848119431C6312B10BB146FFC6B718B7F7899B20001B0ACDDE0724AF5',
      name: 'Harmony VND',
      display: 'hvnd',
      symbol: 'HVND',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/symphony/images/hvnd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/symphony/images/hvnd.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uvnd',
            chain_name: 'symphonytestnet'
          },
          chain: {
            channel_id: 'channel-242'
          }
        }]
    },
    {
      description: 'The native token of the Titan network.',
      denom_units: [
        {
          denom: 'ibc/E22F3B8BFBA78A27A20077EE0CFE05BC4AA5EB40459E0593A110CB449ACD1F5E',
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
          exponent: 18,
          aliases: []
        }
      ],
      base: 'ibc/E22F3B8BFBA78A27A20077EE0CFE05BC4AA5EB40459E0593A110CB449ACD1F5E',
      display: 'tkx',
      name: 'titan tkx',
      symbol: 'TKX',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png'
        }],
      keywords: ['staking'],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'atkx',
            chain_name: 'titantestnet'
          },
          chain: {
            channel_id: 'channel-3910'
          }
        }]
    },
    {
      description: 'Temporary staking token for Warden Protocol',
      denom_units: [{
          denom: 'ibc/73461D405A6A7E5137D1C621B268A08A7CE47EBE24CFB964639A3AFB62393D80',
          exponent: 0,
          aliases: ['wSTAKE']
        }],
      base: 'ibc/73461D405A6A7E5137D1C621B268A08A7CE47EBE24CFB964639A3AFB62393D80',
      name: 'wSTAKE',
      display: 'wSTAKE',
      symbol: 'wSTAKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'wSTAKE',
            chain_name: 'wardenprotocoltestnet'
          },
          chain: {
            channel_id: 'channel-373'
          }
        }]
    },
    {
      description: 'Eden token definition',
      denom_units: [
        {
          denom: 'ibc/D62F9AC7E2AB0D54B4C5A45139673954CCAF1FA217F820D214CC22E85A6761B7',
          exponent: 0,
          aliases: ['ueden']
        },
        {
          denom: 'meden',
          exponent: 3,
          aliases: ['millieden']
        },
        {
          denom: 'eden',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/D62F9AC7E2AB0D54B4C5A45139673954CCAF1FA217F820D214CC22E85A6761B7',
      name: 'Eden',
      display: 'eden',
      symbol: 'EDEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/eden.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/eden.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'ueden',
            chain_name: 'elystestnet'
          },
          chain: {
            channel_id: 'channel-3302'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the testnet version of Empower.',
      denom_units: [{
          denom: 'ibc/C3D75AA5082B8EEC8E6DE916F0CA9C1C71978A6BB0FA5AAE3E5ABE81BAF57B42',
          exponent: 0,
          aliases: ['umpwr']
        }, {
          denom: 'mpwr',
          exponent: 6
        }],
      base: 'ibc/C3D75AA5082B8EEC8E6DE916F0CA9C1C71978A6BB0FA5AAE3E5ABE81BAF57B42',
      name: 'MPWR',
      display: 'mpwr',
      symbol: 'MPWR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/empowertestnet/images/mpwr.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/empowertestnet/images/mpwr.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'umpwr',
            chain_name: 'empowertestnet'
          },
          chain: {
            channel_id: 'channel-2765'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Harpoon testnet version of Kujira.',
      denom_units: [{
          denom: 'ibc/E1D1BDB7784D5784980CAA320583F8D3DDBA182E01F082B0CE9E761C53C7F59B',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/E1D1BDB7784D5784980CAA320583F8D3DDBA182E01F082B0CE9E761C53C7F59B',
      name: 'Kuji',
      display: 'kuji',
      symbol: 'KUJI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kujiratestnet/images/kuji.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kujiratestnet/images/kuji.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-51',
            base_denom: 'ukuji',
            chain_name: 'kujiratestnet'
          },
          chain: {
            channel_id: 'channel-4004'
          }
        }]
    },
    {
      deprecated: true,
      description: 'PSTAKE Liquid-Staked ATOM',
      denom_units: [{
          denom: 'ibc/BBFA165987773A8581F02DC0DBE362D3E373CCEFD6E7D151BD77FBBAB5D4886B',
          exponent: 0,
          aliases: ['stk/uatom']
        }, {
          denom: 'stkatom',
          exponent: 6,
          aliases: ['stk/atom']
        }],
      base: 'ibc/BBFA165987773A8581F02DC0DBE362D3E373CCEFD6E7D151BD77FBBAB5D4886B',
      name: 'PSTAKE staked ATOM',
      display: 'stkatom',
      symbol: 'stkATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'stk/uatom',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-2777'
          }
        }]
    },
    {
      deprecated: true,
      description: 'PSTAKE Liquid-Staked OSMO',
      denom_units: [{
          denom: 'ibc/A28CE926C10943BFF39CED2343503912D9FA238D256C35686518B0D824708259',
          exponent: 0,
          aliases: ['stk/uosmo']
        }, {
          denom: 'stkosmo',
          exponent: 6,
          aliases: ['stk/osmo']
        }],
      base: 'ibc/A28CE926C10943BFF39CED2343503912D9FA238D256C35686518B0D824708259',
      name: 'PSTAKE staked OSMO',
      display: 'stkosmo',
      symbol: 'stkOSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'stk/uosmo',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-2777'
          }
        }]
    },
    {
      deprecated: true,
      description: 'PSTAKE Liquid-Staked DV4TNT',
      denom_units: [{
          denom: 'ibc/13FEE46268FF7160702526D04414BE1EE225E9EACF228674094A01244921C217',
          exponent: 0,
          aliases: ['stk/adv4tnt']
        }, {
          denom: 'stkdv4tnt',
          exponent: 18,
          aliases: ['stk/dv4tnt']
        }],
      base: 'ibc/13FEE46268FF7160702526D04414BE1EE225E9EACF228674094A01244921C217',
      name: 'PSTAKE staked DV4TNT',
      display: 'stkdv4tnt',
      symbol: 'stkDV4TNT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdv4tnt.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'stk/adv4tnt',
            chain_name: 'persistencetestnet2'
          },
          chain: {
            channel_id: 'channel-2777'
          }
        }]
    },
    {
      description: 'The native token of Symphony',
      denom_units: [{
          denom: 'ibc/087EBD181D2DDD1D3C5F6CE1037D45E5B78A1E3B7A8495E2088CB218F881D7BB',
          exponent: 0,
          aliases: ['note']
        }, {
          denom: 'mld',
          exponent: 6,
          aliases: ['melody']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/087EBD181D2DDD1D3C5F6CE1037D45E5B78A1E3B7A8495E2088CB218F881D7BB',
      name: 'Melody',
      display: 'mld',
      symbol: 'MLD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/symphony/images/mld.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/symphony/images/mld.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'note',
            chain_name: 'symphonytestnet'
          },
          chain: {
            channel_id: 'channel-242'
          }
        }]
    },
    {
      description: 'Harmonized USD',
      denom_units: [{
          denom: 'ibc/5C2A73544972719FFBAA203655F4B0311F305052698731F4DC30B4DCE781A870',
          exponent: 0,
          aliases: ['uusd']
        }, {
          denom: 'husd',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/5C2A73544972719FFBAA203655F4B0311F305052698731F4DC30B4DCE781A870',
      name: 'Harmony USD',
      display: 'husd',
      symbol: 'HUSD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/symphony/images/husd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/symphony/images/husd.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uusd',
            chain_name: 'symphonytestnet'
          },
          chain: {
            channel_id: 'channel-242'
          }
        }]
    },
    {
      description: 'Harmonized HKD',
      denom_units: [{
          denom: 'ibc/420B21B560D528B229E38CAD83186895B7D3D075772531054076A101E4130CEF',
          exponent: 0,
          aliases: ['ukhd']
        }, {
          denom: 'hkhd',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/420B21B560D528B229E38CAD83186895B7D3D075772531054076A101E4130CEF',
      name: 'Harmony HKD',
      display: 'hkhd',
      symbol: 'HKHD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/symphony/images/hhkd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/symphony/images/hhkd.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ukhd',
            chain_name: 'symphonytestnet'
          },
          chain: {
            channel_id: 'channel-242'
          }
        }]
    },
    {
      description: 'Harmonized VND',
      denom_units: [{
          denom: 'ibc/15B4B2F848119431C6312B10BB146FFC6B718B7F7899B20001B0ACDDE0724AF5',
          exponent: 0,
          aliases: ['uvnd']
        }, {
          denom: 'hvnd',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/15B4B2F848119431C6312B10BB146FFC6B718B7F7899B20001B0ACDDE0724AF5',
      name: 'Harmony VND',
      display: 'hvnd',
      symbol: 'HVND',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/symphony/images/hvnd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/symphony/images/hvnd.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uvnd',
            chain_name: 'symphonytestnet'
          },
          chain: {
            channel_id: 'channel-242'
          }
        }]
    },
    {
      description: 'The native token of the Titan network.',
      denom_units: [
        {
          denom: 'ibc/E22F3B8BFBA78A27A20077EE0CFE05BC4AA5EB40459E0593A110CB449ACD1F5E',
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
          exponent: 18,
          aliases: []
        }
      ],
      base: 'ibc/E22F3B8BFBA78A27A20077EE0CFE05BC4AA5EB40459E0593A110CB449ACD1F5E',
      display: 'tkx',
      name: 'titan tkx',
      symbol: 'TKX',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png'
        }],
      keywords: ['staking'],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'atkx',
            chain_name: 'titantestnet'
          },
          chain: {
            channel_id: 'channel-3910'
          }
        }]
    },
    {
      description: 'Temporary staking token for Warden Protocol',
      denom_units: [{
          denom: 'ibc/73461D405A6A7E5137D1C621B268A08A7CE47EBE24CFB964639A3AFB62393D80',
          exponent: 0,
          aliases: ['wSTAKE']
        }],
      base: 'ibc/73461D405A6A7E5137D1C621B268A08A7CE47EBE24CFB964639A3AFB62393D80',
      name: 'wSTAKE',
      display: 'wSTAKE',
      symbol: 'wSTAKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'wSTAKE',
            chain_name: 'wardenprotocoltestnet'
          },
          chain: {
            channel_id: 'channel-373'
          }
        }]
    },
    {
      description: 'The native token of Prysm',
      denom_units: [{
          denom: 'ibc/713C1758420D08A892515AA68FA91976CBFD9E7BCCFE2CA6F4855165DA830D32',
          exponent: 0,
          aliases: ['uprysm']
        }, {
          denom: 'prysm',
          exponent: 6
        }],
      base: 'ibc/713C1758420D08A892515AA68FA91976CBFD9E7BCCFE2CA6F4855165DA830D32',
      display: 'prysm',
      name: 'Prysm',
      symbol: 'PRYSM',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/prysmdevnet/images/prysm.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://www.prysm.network/',
        twitter: 'https://twitter.com/PrysmNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'uprysm',
            chain_name: 'prysmdevnet'
          },
          chain: {
            channel_id: 'channel-4366'
          }
        }]
    }
  ]
};
export default assets;
    