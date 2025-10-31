import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'source',
  assets: [
    {
      description: 'Axelar is a decentralized interoperability network connecting multiple blockchain ecosystems, enabling seamless cross-chain communication and value transfer.',
      denom_units: [{
          denom: 'ibc/9463E39D230614B313B487836D13A392BD1731928713D4C8427A083627048DB3',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/9463E39D230614B313B487836D13A392BD1731928713D4C8427A083627048DB3',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      coingecko_id: 'axelar',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
        }],
      socials: {
        website: 'https://axelar.network/',
        x: 'https://x.com/axelarnetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-160',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'The native utility token of the KYVE network.',
      denom_units: [{
          denom: 'ibc/81DD1BA0AE960255C9BBB3557F9ADA47CBBA628796E462AAEC803F2943724B1F',
          exponent: 0,
          aliases: ['ukyve']
        }, {
          denom: 'kyve',
          exponent: 6
        }],
      base: 'ibc/81DD1BA0AE960255C9BBB3557F9ADA47CBBA628796E462AAEC803F2943724B1F',
      name: 'KYVE',
      display: 'kyve',
      symbol: 'KYVE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg'
      },
      coingecko_id: 'kyve-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg'
        }],
      socials: {
        website: 'https://www.kyve.network/',
        x: 'https://x.com/KYVENetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'ukyve',
            chain_name: 'kyve'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
      name: 'Osmosis',
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
      keywords: ['dex', 'staking'],
      socials: {
        website: 'https://osmosis.zone',
        x: 'https://x.com/osmosiszone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8945',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16',
      name: 'Ion DAO',
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
      keywords: ['memecoin', 'defi'],
      socials: {
        website: 'https://ion.wtf',
        x: 'https://x.com/_IONDAO'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8945',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Planq Network',
      denom_units: [{
          denom: 'ibc/F0A06D765AE0B260AA2655BFEE907E56A1B29008905F92A8796EA2A86D5E2CE9',
          exponent: 0,
          aliases: ['aplanq']
        }, {
          denom: 'planq',
          exponent: 18
        }],
      base: 'ibc/F0A06D765AE0B260AA2655BFEE907E56A1B29008905F92A8796EA2A86D5E2CE9',
      name: 'Planq',
      display: 'planq',
      symbol: 'PLQ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
      },
      coingecko_id: 'planq',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
        }],
      socials: {
        website: 'https://planq.network',
        x: 'https://x.com/planqfoundation'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-61',
            base_denom: 'aplanq',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'The token of Source Protocol bridged from BSC.',
      denom_units: [{
          denom: 'ibc/FC5A7360EEED0713AE3E83E9D55A69AF873056A172AC495890ACE4582FF9685A',
          exponent: 0,
          aliases: ['erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09']
        }, {
          denom: 'srcx',
          exponent: 9
        }],
      base: 'ibc/FC5A7360EEED0713AE3E83E9D55A69AF873056A172AC495890ACE4582FF9685A',
      name: 'Source Token',
      display: 'srcx',
      symbol: 'SRCX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-61',
            base_denom: 'erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'binancesmartchain',
            base_denom: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png'
      },
      type_asset: 'sdk.coin'
    },
    {
      description: 'The token of Anubis.',
      denom_units: [{
          denom: 'ibc/47F5BB8DA5F115EFF95437B4B29C874EE17DBF88A2B0240E06E079F0C6ACAB4D',
          exponent: 0,
          aliases: ['erc20/0xF630B96760B91f6FCbE8b3C24f2786AcA3D03648']
        }, {
          denom: 'anubi',
          exponent: 18
        }],
      base: 'ibc/47F5BB8DA5F115EFF95437B4B29C874EE17DBF88A2B0240E06E079F0C6ACAB4D',
      name: 'Anubis',
      display: 'anubi',
      symbol: 'ANUBI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/anubis.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/anubis.png'
        }],
      socials: {
        x: 'https://x.com/Anubis_Phy'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-61',
            base_denom: 'erc20/0xF630B96760B91f6FCbE8b3C24f2786AcA3D03648',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'The token of Astonic.',
      denom_units: [{
          denom: 'ibc/D9240C2B47993B9E7A9BE2132A6B69FA4A118A331968C669D47D0BFC28A82BF9',
          exponent: 0,
          aliases: ['erc20/0x8F4d86ABa1b47832C46f11e0fFD0F7aDa4498345']
        }, {
          denom: 'astonic',
          exponent: 18
        }],
      base: 'ibc/D9240C2B47993B9E7A9BE2132A6B69FA4A118A331968C669D47D0BFC28A82BF9',
      name: 'Astonic',
      display: 'astonic',
      symbol: 'ATC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/atc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/atc.svg'
        }],
      socials: {
        telegram: 'https://t.me/astonic_io',
        x: 'https://x.com/astonic_xyz'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-61',
            base_denom: 'erc20/0x8F4d86ABa1b47832C46f11e0fFD0F7aDa4498345',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'Astonic USD (aUSD) is a stable asset pegged to the US Dollar.',
      denom_units: [{
          denom: 'ibc/F184983D20F95B2A2FD6FF9458BD21726A95ECAA4AAD18AA7ECDDBD7524754D6',
          exponent: 0,
          aliases: ['erc20/0xA2871B267a7d888F830251F6B4D9d3DFf184995a']
        }, {
          denom: 'ausd',
          exponent: 18
        }],
      base: 'ibc/F184983D20F95B2A2FD6FF9458BD21726A95ECAA4AAD18AA7ECDDBD7524754D6',
      name: 'Astonic USD',
      display: 'ausd',
      symbol: 'aUSD',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-61',
            base_denom: 'erc20/0xA2871B267a7d888F830251F6B4D9d3DFf184995a',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/ausd.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/ausd.svg'
        }],
      socials: {
        telegram: 'https://t.me/astonic_io',
        x: 'https://x.com/astonic_xyz'
      },
      type_asset: 'sdk.coin'
    },
    {
      description: 'Astonic EUR (aEUR) is a stable asset pegged to the Euro.',
      denom_units: [{
          denom: 'ibc/7DEA9248FAD6C57062C3339E6226FE63ACD44CAA04C046DA92D61106E1963075',
          exponent: 0,
          aliases: ['erc20/0xd5be2932FEbD73019ba1d5d97DFC35E1Ab09E501']
        }, {
          denom: 'aeur',
          exponent: 18
        }],
      base: 'ibc/7DEA9248FAD6C57062C3339E6226FE63ACD44CAA04C046DA92D61106E1963075',
      name: 'Astonic EUR',
      display: 'aeur',
      symbol: 'aEUR',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-61',
            base_denom: 'erc20/0xd5be2932FEbD73019ba1d5d97DFC35E1Ab09E501',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/aeur.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/aeur.svg'
        }],
      socials: {
        telegram: 'https://t.me/astonic_io',
        x: 'https://x.com/astonic_xyz'
      },
      type_asset: 'sdk.coin'
    },
    {
      description: 'Astonic BRL (aBRL) is a stable asset pegged to the Brazilian Real.',
      denom_units: [{
          denom: 'ibc/FDFE844A243190F78AA9DBFE35F75F50DC964B87396FF564A5D831627C2D0DDE',
          exponent: 0,
          aliases: ['erc20/0x240642C6f69878A0b199065f25EDf82023BC59ce']
        }, {
          denom: 'abrl',
          exponent: 18
        }],
      base: 'ibc/FDFE844A243190F78AA9DBFE35F75F50DC964B87396FF564A5D831627C2D0DDE',
      name: 'Astonic BRL',
      display: 'abrl',
      symbol: 'aBRL',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-61',
            base_denom: 'erc20/0x240642C6f69878A0b199065f25EDf82023BC59ce',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/abrl.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/abrl.svg'
        }],
      socials: {
        telegram: 'https://t.me/astonic_io',
        x: 'https://x.com/astonic_xyz'
      },
      type_asset: 'sdk.coin'
    },
    {
      description: 'Axelar is a decentralized interoperability network connecting multiple blockchain ecosystems, enabling seamless cross-chain communication and value transfer.',
      denom_units: [{
          denom: 'ibc/9463E39D230614B313B487836D13A392BD1731928713D4C8427A083627048DB3',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/9463E39D230614B313B487836D13A392BD1731928713D4C8427A083627048DB3',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      coingecko_id: 'axelar',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
        }],
      socials: {
        website: 'https://axelar.network/',
        x: 'https://x.com/axelarnetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-160',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'The native utility token of the KYVE network.',
      denom_units: [{
          denom: 'ibc/81DD1BA0AE960255C9BBB3557F9ADA47CBBA628796E462AAEC803F2943724B1F',
          exponent: 0,
          aliases: ['ukyve']
        }, {
          denom: 'kyve',
          exponent: 6
        }],
      base: 'ibc/81DD1BA0AE960255C9BBB3557F9ADA47CBBA628796E462AAEC803F2943724B1F',
      name: 'KYVE',
      display: 'kyve',
      symbol: 'KYVE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg'
      },
      coingecko_id: 'kyve-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg'
        }],
      socials: {
        website: 'https://www.kyve.network/',
        x: 'https://x.com/KYVENetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'ukyve',
            chain_name: 'kyve'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
      name: 'Osmosis',
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
      keywords: ['dex', 'staking'],
      socials: {
        website: 'https://osmosis.zone',
        x: 'https://x.com/osmosiszone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8945',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16',
      name: 'Ion DAO',
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
      keywords: ['memecoin', 'defi'],
      socials: {
        website: 'https://ion.wtf',
        x: 'https://x.com/_IONDAO'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8945',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Planq Network',
      denom_units: [{
          denom: 'ibc/F0A06D765AE0B260AA2655BFEE907E56A1B29008905F92A8796EA2A86D5E2CE9',
          exponent: 0,
          aliases: ['aplanq']
        }, {
          denom: 'planq',
          exponent: 18
        }],
      base: 'ibc/F0A06D765AE0B260AA2655BFEE907E56A1B29008905F92A8796EA2A86D5E2CE9',
      name: 'Planq',
      display: 'planq',
      symbol: 'PLQ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
      },
      coingecko_id: 'planq',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
        }],
      socials: {
        website: 'https://planq.network',
        x: 'https://x.com/planqfoundation'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-61',
            base_denom: 'aplanq',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'The token of Source Protocol bridged from BSC.',
      denom_units: [{
          denom: 'ibc/FC5A7360EEED0713AE3E83E9D55A69AF873056A172AC495890ACE4582FF9685A',
          exponent: 0,
          aliases: ['erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09']
        }, {
          denom: 'srcx',
          exponent: 9
        }],
      base: 'ibc/FC5A7360EEED0713AE3E83E9D55A69AF873056A172AC495890ACE4582FF9685A',
      name: 'Source Token',
      display: 'srcx',
      symbol: 'SRCX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-61',
            base_denom: 'erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'binancesmartchain',
            base_denom: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png'
      },
      type_asset: 'sdk.coin'
    },
    {
      description: 'The token of Anubis.',
      denom_units: [{
          denom: 'ibc/47F5BB8DA5F115EFF95437B4B29C874EE17DBF88A2B0240E06E079F0C6ACAB4D',
          exponent: 0,
          aliases: ['erc20/0xF630B96760B91f6FCbE8b3C24f2786AcA3D03648']
        }, {
          denom: 'anubi',
          exponent: 18
        }],
      base: 'ibc/47F5BB8DA5F115EFF95437B4B29C874EE17DBF88A2B0240E06E079F0C6ACAB4D',
      name: 'Anubis',
      display: 'anubi',
      symbol: 'ANUBI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/anubis.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/anubis.png'
        }],
      socials: {
        x: 'https://x.com/Anubis_Phy'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-61',
            base_denom: 'erc20/0xF630B96760B91f6FCbE8b3C24f2786AcA3D03648',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'The token of Astonic.',
      denom_units: [{
          denom: 'ibc/D9240C2B47993B9E7A9BE2132A6B69FA4A118A331968C669D47D0BFC28A82BF9',
          exponent: 0,
          aliases: ['erc20/0x8F4d86ABa1b47832C46f11e0fFD0F7aDa4498345']
        }, {
          denom: 'astonic',
          exponent: 18
        }],
      base: 'ibc/D9240C2B47993B9E7A9BE2132A6B69FA4A118A331968C669D47D0BFC28A82BF9',
      name: 'Astonic',
      display: 'astonic',
      symbol: 'ATC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/atc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/atc.svg'
        }],
      socials: {
        telegram: 'https://t.me/astonic_io',
        x: 'https://x.com/astonic_xyz'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-61',
            base_denom: 'erc20/0x8F4d86ABa1b47832C46f11e0fFD0F7aDa4498345',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'Astonic USD (aUSD) is a stable asset pegged to the US Dollar.',
      denom_units: [{
          denom: 'ibc/F184983D20F95B2A2FD6FF9458BD21726A95ECAA4AAD18AA7ECDDBD7524754D6',
          exponent: 0,
          aliases: ['erc20/0xA2871B267a7d888F830251F6B4D9d3DFf184995a']
        }, {
          denom: 'ausd',
          exponent: 18
        }],
      base: 'ibc/F184983D20F95B2A2FD6FF9458BD21726A95ECAA4AAD18AA7ECDDBD7524754D6',
      name: 'Astonic USD',
      display: 'ausd',
      symbol: 'aUSD',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-61',
            base_denom: 'erc20/0xA2871B267a7d888F830251F6B4D9d3DFf184995a',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/ausd.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/ausd.svg'
        }],
      socials: {
        telegram: 'https://t.me/astonic_io',
        x: 'https://x.com/astonic_xyz'
      },
      type_asset: 'sdk.coin'
    },
    {
      description: 'Astonic EUR (aEUR) is a stable asset pegged to the Euro.',
      denom_units: [{
          denom: 'ibc/7DEA9248FAD6C57062C3339E6226FE63ACD44CAA04C046DA92D61106E1963075',
          exponent: 0,
          aliases: ['erc20/0xd5be2932FEbD73019ba1d5d97DFC35E1Ab09E501']
        }, {
          denom: 'aeur',
          exponent: 18
        }],
      base: 'ibc/7DEA9248FAD6C57062C3339E6226FE63ACD44CAA04C046DA92D61106E1963075',
      name: 'Astonic EUR',
      display: 'aeur',
      symbol: 'aEUR',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-61',
            base_denom: 'erc20/0xd5be2932FEbD73019ba1d5d97DFC35E1Ab09E501',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/aeur.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/aeur.svg'
        }],
      socials: {
        telegram: 'https://t.me/astonic_io',
        x: 'https://x.com/astonic_xyz'
      },
      type_asset: 'sdk.coin'
    },
    {
      description: 'Astonic BRL (aBRL) is a stable asset pegged to the Brazilian Real.',
      denom_units: [{
          denom: 'ibc/FDFE844A243190F78AA9DBFE35F75F50DC964B87396FF564A5D831627C2D0DDE',
          exponent: 0,
          aliases: ['erc20/0x240642C6f69878A0b199065f25EDf82023BC59ce']
        }, {
          denom: 'abrl',
          exponent: 18
        }],
      base: 'ibc/FDFE844A243190F78AA9DBFE35F75F50DC964B87396FF564A5D831627C2D0DDE',
      name: 'Astonic BRL',
      display: 'abrl',
      symbol: 'aBRL',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-61',
            base_denom: 'erc20/0x240642C6f69878A0b199065f25EDf82023BC59ce',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/abrl.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/abrl.svg'
        }],
      socials: {
        telegram: 'https://t.me/astonic_io',
        x: 'https://x.com/astonic_xyz'
      },
      type_asset: 'sdk.coin'
    }
  ]
};
export default assets;
    