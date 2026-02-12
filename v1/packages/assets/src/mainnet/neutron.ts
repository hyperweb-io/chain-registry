import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'neutron',
  assets: [
    {
      description: 'The native token of Namada.',
      denom_units: [{
          denom: 'ibc/2C35FFA3B002EAF76FFCA2419CEE76F7F17F7572C41E7D35255EEED91C20662A',
          exponent: 0,
          aliases: ['unam']
        }, {
          denom: 'nam',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/2C35FFA3B002EAF76FFCA2419CEE76F7F17F7572C41E7D35255EEED91C20662A',
      name: 'Namada',
      display: 'nam',
      symbol: 'NAM',
      address: 'tnam1q9gr66cvu4hrzm0sd5kmlnjje82gs3xlfg3v6nu7',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/namada/images/namada.svg'
      },
      socials: {
        website: 'https://namada.net/',
        x: 'https://x.com/namada'
      },
      coingecko_id: 'namada',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/namada/images/namada.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'unam',
            chain_name: 'namada'
          },
          chain: {
            channel_id: 'channel-7024'
          }
        }]
    },
    {
      description: 'The native token of Penumbra.',
      denom_units: [{
          denom: 'ibc/2DC4028D9196E4FC82B6EA1633FF38F4161FD081AF6AE30249C2020FCFBCD4F8',
          exponent: 0,
          aliases: ['upenumbra']
        }, {
          denom: 'penumbra',
          exponent: 6
        }],
      type_asset: 'unknown',
      base: 'ibc/2DC4028D9196E4FC82B6EA1633FF38F4161FD081AF6AE30249C2020FCFBCD4F8',
      display: 'penumbra',
      symbol: 'UM',
      name: 'Penumbra',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/penumbra/images/um.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/penumbra/images/um.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://penumbra.zone/',
        x: 'https://x.com/penumbrazone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'upenumbra',
            chain_name: 'penumbra'
          },
          chain: {
            channel_id: 'channel-4886'
          }
        }]
    },
    {
      description: 'Agoric is a smart contract platform that uses JavaScript to enable developers to build secure and scalable decentralized applications (dApps) easily.',
      denom_units: [{
          denom: 'ibc/B074BCF31E5892A522FD48DDD5DD80C3953D4B43D59A6E4FD0DC6759685FD36C',
          exponent: 0,
          aliases: ['ubld']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      base: 'ibc/B074BCF31E5892A522FD48DDD5DD80C3953D4B43D59A6E4FD0DC6759685FD36C',
      name: 'Agoric',
      display: 'bld',
      symbol: 'BLD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
      },
      coingecko_id: 'agoric',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
        }],
      socials: {
        website: 'https://agoric.com/',
        x: 'https://x.com/agoric'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-146',
            base_denom: 'ubld',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-5789'
          }
        }]
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [{
          denom: 'ibc/4E39DA6487C8AA17276FAD2730C1DC84E0F716179962DA508FDAAC5FD598C323',
          exponent: 0,
          aliases: ['uist']
        }, {
          denom: 'ist',
          exponent: 6
        }],
      base: 'ibc/4E39DA6487C8AA17276FAD2730C1DC84E0F716179962DA508FDAAC5FD598C323',
      name: 'Inter Stable Token',
      display: 'ist',
      symbol: 'IST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
      },
      coingecko_id: 'inter-stable-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-146',
            base_denom: 'uist',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-5789'
          }
        }]
    },
    {
      description: 'Archway is a smart contract platform in the Cosmos ecosystem designed to reward developers by providing them with a share of transaction fees generated by their applications.',
      denom_units: [
        {
          denom: 'ibc/00230C58F1540708067850B3362C8A67A273FC52F0C7305B802D7255495C86FD',
          exponent: 0,
          aliases: ['aarch']
        },
        {
          denom: 'uarch',
          exponent: 12
        },
        {
          denom: 'arch',
          exponent: 18
        }
      ],
      base: 'ibc/00230C58F1540708067850B3362C8A67A273FC52F0C7305B802D7255495C86FD',
      name: 'Archway',
      display: 'arch',
      symbol: 'ARCH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.svg'
      },
      coingecko_id: 'archway',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.svg'
        }],
      socials: {
        website: 'https://archway.io/',
        x: 'https://x.com/archwayHQ'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-61',
            base_denom: 'aarch',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-41'
          }
        }]
    },
    {
      description: 'Architects Token',
      type_asset: 'cw20',
      address: 'archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu',
      denom_units: [{
          denom: 'ibc/FEFB9DB3AED86F6B1BFC010034DE0822DE0DC2806F80F79BB6DA6333539FB532',
          exponent: 0,
          aliases: ['archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu']
        }, {
          denom: 'TOKN',
          exponent: 18
        }],
      base: 'ibc/FEFB9DB3AED86F6B1BFC010034DE0822DE0DC2806F80F79BB6DA6333539FB532',
      name: 'Architects Token',
      display: 'TOKN',
      symbol: 'TOKN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/tokn.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/tokn.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-61',
            base_denom: 'archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-41'
          }
        }]
    },
    {
      description: 'Axelar is a decentralized interoperability network connecting multiple blockchain ecosystems, enabling seamless cross-chain communication and value transfer.',
      denom_units: [{
          denom: 'ibc/C0E66D1C81D8AAF0E6896E05190FDFBC222367148F86AC3EA679C28327A763CD',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/C0E66D1C81D8AAF0E6896E05190FDFBC222367148F86AC3EA679C28327A763CD',
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
            channel_id: 'channel-78',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The native token of Babylon Genesis.',
      denom_units: [{
          denom: 'ibc/42B08C3E209022A4D062EF96AEA94AEBD1C2C1F14398C421027F80D9FF4994FA',
          exponent: 0,
          aliases: ['ubbn']
        }, {
          denom: 'BABY',
          exponent: 6
        }],
      base: 'ibc/42B08C3E209022A4D062EF96AEA94AEBD1C2C1F14398C421027F80D9FF4994FA',
      name: 'BABY',
      display: 'BABY',
      symbol: 'BABY',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/logo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/logo.svg'
        }],
      coingecko_id: 'babylon',
      type_asset: 'sdk.coin',
      socials: {
        website: 'https://babylonlabs.io/',
        x: 'https://x.com/babylonlabs_io'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'ubbn',
            chain_name: 'babylon'
          },
          chain: {
            channel_id: 'channel-6980'
          }
        }]
    },
    {
      description: 'BitSong Native Token',
      denom_units: [{
          denom: 'ibc/53E1B5B1C060CF4B556E91020EACD272CD9160E996E598FC93D2436814050471',
          exponent: 0,
          aliases: ['ubtsg']
        }, {
          denom: 'btsg',
          exponent: 6
        }],
      base: 'ibc/53E1B5B1C060CF4B556E91020EACD272CD9160E996E598FC93D2436814050471',
      name: 'BitSong',
      display: 'btsg',
      symbol: 'BTSG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg'
      },
      type_asset: 'sdk.coin',
      coingecko_id: 'bitsong',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg'
        }],
      socials: {
        website: 'https://bitsong.io/',
        x: 'https://x.com/BitSongOfficial'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-39',
            base_denom: 'ubtsg',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-7232'
          }
        }]
    },
    {
      description: 'Celestia is a modular blockchain network focused on data availability, allowing developers to deploy their own customizable blockchains with ease.',
      denom_units: [{
          denom: 'ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      base: 'ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      coingecko_id: 'celestia',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
        }],
      socials: {
        website: 'https://celestia.org/',
        x: 'https://x.com/CelestiaOrg'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'utia',
            chain_name: 'celestia'
          },
          chain: {
            channel_id: 'channel-35'
          }
        }]
    },
    {
      description: 'Chihuahua is a community-driven blockchain project focused on creating a fun and engaging ecosystem with an emphasis on social interactions and community building.',
      denom_units: [{
          denom: 'ibc/BEF5C9D724E1EBB04FEE237CB5F602B22B0FFE8065F540FD8BC6F9E1A4B8573D',
          exponent: 0,
          aliases: ['uhuahua']
        }, {
          denom: 'huahua',
          exponent: 6
        }],
      base: 'ibc/BEF5C9D724E1EBB04FEE237CB5F602B22B0FFE8065F540FD8BC6F9E1A4B8573D',
      name: 'Chihuahua',
      display: 'huahua',
      symbol: 'HUAHUA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
      },
      coingecko_id: 'chihuahua-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-76',
            base_denom: 'uhuahua',
            chain_name: 'chihuahua'
          },
          chain: {
            channel_id: 'channel-51'
          }
        }]
    },
    {
      description: 'ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.',
      denom_units: [{
          denom: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
      name: 'Cosmos Hub Atom',
      display: 'atom',
      symbol: 'ATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      coingecko_id: 'cosmos',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }],
      socials: {
        website: 'https://cosmos.network',
        x: 'https://x.com/cosmoshub'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-569',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'Dragon Token is the native staking and governance token of Dungeon Chain, serving as the backbone of the ecosystem. Its primary roles include staking, where users stake Dragon Tokens to secure the network, enhance its functionality, and earn rewards in return; governance, granting token holders voting rights to influence key decisions such as game onboarding, protocol updates, and community-driven initiatives; and ecosystem growth, facilitating transactions, incentivizing developers, and promoting the creation of new interchain games. Dragon Token ensures a decentralized, fair, and community-driven ecosystem, fostering the evolution of blockchain-based gaming. It plays a crucial role in driving the growth of Dungeon Chain by empowering both developers and players to participate actively in the ecosystem\'s governance and success.',
      denom_units: [{
          denom: 'ibc/EF02A9A6573F45C96C8C6AA1BB0BCE257826899027468126277384D2767FB5AA',
          exponent: 0,
          aliases: ['udgn']
        }, {
          denom: 'DGN',
          exponent: 6
        }],
      base: 'ibc/EF02A9A6573F45C96C8C6AA1BB0BCE257826899027468126277384D2767FB5AA',
      name: 'Dragon Coin',
      display: 'DGN',
      coingecko_id: 'dragon-coin-2',
      symbol: 'DGN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dungeon/images/DGN.png'
      },
      socials: {
        website: 'https://www.cryptodungeon.org',
        x: 'https://x.com/cryptodungeonma'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dungeon/images/DGN.png',
          theme: {
            circle: true
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5309',
            base_denom: 'udgn',
            chain_name: 'dungeon'
          },
          chain: {
            channel_id: 'channel-7358'
          }
        }]
    },
    {
      description: 'DYDX is a decentralized trading platform focused on derivatives and perpetual contracts, offering a secure and efficient trading experience without intermediaries.',
      denom_units: [{
          denom: 'ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130',
          exponent: 0,
          aliases: ['adydx']
        }, {
          denom: 'dydx',
          exponent: 18
        }],
      base: 'ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130',
      name: 'dYdX',
      display: 'dydx',
      symbol: 'DYDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
      },
      coingecko_id: 'dydx-chain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://dydx.trade/',
        x: 'https://x.com/dYdX'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'adydx',
            chain_name: 'dydx'
          },
          chain: {
            channel_id: 'channel-48'
          }
        }]
    },
    {
      description: 'The native governance and staking token of the Dymension Hub',
      denom_units: [{
          denom: 'ibc/4A6A46D4263F2ED3DCE9CF866FE15E6903FB5E12D87EB8BDC1B6B1A1E2D397B4',
          exponent: 0,
          aliases: ['adym']
        }, {
          denom: 'dym',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/4A6A46D4263F2ED3DCE9CF866FE15E6903FB5E12D87EB8BDC1B6B1A1E2D397B4',
      name: 'Dymension',
      display: 'dym',
      symbol: 'DYM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
      },
      coingecko_id: 'dymension',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
        }],
      socials: {
        website: 'https://portal.dymension.xyz',
        x: 'https://x.com/dymension'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'adym',
            chain_name: 'dymension'
          },
          chain: {
            channel_id: 'channel-675'
          }
        }]
    },
    {
      description: 'The native token of Elys Network',
      denom_units: [
        {
          denom: 'ibc/28FC965E05DB1A4C0A6DE6B720F67AFF8CAB571FE262824976DDDFF49A4BAAF7',
          exponent: 0,
          aliases: ['uelys']
        },
        {
          denom: 'melys',
          exponent: 3,
          aliases: ['millielys']
        },
        {
          denom: 'elys',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/28FC965E05DB1A4C0A6DE6B720F67AFF8CAB571FE262824976DDDFF49A4BAAF7',
      name: 'Elys Network',
      display: 'elys',
      symbol: 'ELYS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/elys/images/elys.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/elys/images/elys.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'uelys',
            chain_name: 'elys'
          },
          chain: {
            channel_id: 'channel-6476'
          }
        }]
    },
    {
      description: 'Eden token definition',
      denom_units: [
        {
          denom: 'ibc/D3A7EBD9B281154B061A76C45729481AE0FE89ED072CD149ADC7065CCFB724EE',
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
      base: 'ibc/D3A7EBD9B281154B061A76C45729481AE0FE89ED072CD149ADC7065CCFB724EE',
      name: 'Eden',
      display: 'eden',
      symbol: 'EDEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/elys/images/eden.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/elys/images/eden.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'ueden',
            chain_name: 'elys'
          },
          chain: {
            channel_id: 'channel-6476'
          }
        }]
    },
    {
      description: 'Eden BOOST token definition',
      denom_units: [
        {
          denom: 'ibc/2A9CC7F90013D50DBBF4741F7BDC38004C3510D24228E264667A25DEB9DA668A',
          exponent: 0,
          aliases: ['uedenb']
        },
        {
          denom: 'medenb',
          exponent: 3,
          aliases: ['milliedenb']
        },
        {
          denom: 'edenb',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/2A9CC7F90013D50DBBF4741F7BDC38004C3510D24228E264667A25DEB9DA668A',
      name: 'Eden BOOST',
      display: 'edenb',
      symbol: 'EDENBOOST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/elys/images/eden-boost.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/elys/images/eden-boost.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'uedenb',
            chain_name: 'elys'
          },
          chain: {
            channel_id: 'channel-6476'
          }
        }]
    },
    {
      description: 'The native token of Initia',
      denom_units: [{
          denom: 'ibc/739368B97C6A578432701EEE54CF8BAE535F2EDD28BE051E05268BFA99229090',
          exponent: 0,
          aliases: ['uinit']
        }, {
          denom: 'INIT',
          exponent: 6
        }],
      base: 'ibc/739368B97C6A578432701EEE54CF8BAE535F2EDD28BE051E05268BFA99229090',
      display: 'INIT',
      name: 'Initia',
      symbol: 'INIT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/initia/images/INIT.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/initia/images/INIT.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://initia.xyz/',
        x: 'https://x.com/initiaFDN'
      },
      type_asset: 'sdk.coin',
      coingecko_id: 'initia',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-37',
            base_denom: 'uinit',
            chain_name: 'initia'
          },
          chain: {
            channel_id: 'channel-6885'
          }
        }]
    },
    {
      description: 'Injective is a decentralized exchange protocol that enables fast, secure, and fully decentralized trading of derivatives, futures, and spot markets.',
      denom_units: [{
          denom: 'ibc/69BEAFC2FDF0C6F0124520B0A06E432AD8490732DFC309337FA6C307124FDABC',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/69BEAFC2FDF0C6F0124520B0A06E432AD8490732DFC309337FA6C307124FDABC',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      },
      coingecko_id: 'injective-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
        }],
      socials: {
        website: 'https://injective.com/',
        x: 'https://x.com/Injective_'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-177',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-60'
          }
        }]
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'ibc/8010BF87E8AA8998B839CE1BE6653DB991C9CA980BB81268CD6850526510C847',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'ibc/8010BF87E8AA8998B839CE1BE6653DB991C9CA980BB81268CD6850526510C847',
      name: 'Ninpo',
      display: 'NINPO',
      symbol: 'NINPO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-177',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-60'
          }
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'ibc/E77A750A8F026250D68DB0CFD0057F6FFA46212CEE747BE349D4DADD6E72F1BA',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'ibc/E77A750A8F026250D68DB0CFD0057F6FFA46212CEE747BE349D4DADD6E72F1BA',
      name: 'Judo',
      display: 'JUDO',
      symbol: 'JUDO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-177',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-60'
          }
        }]
    },
    {
      description: 'A receipt token for lent INJ issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/769832841AA368E193938637DD6EE7BA1EE2ED975A32E9924BBD959D5886716E',
          exponent: 0,
          aliases: ['inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f']
        }, {
          denom: 'nINJ',
          exponent: 18
        }],
      base: 'ibc/769832841AA368E193938637DD6EE7BA1EE2ED975A32E9924BBD959D5886716E',
      name: 'Neptune Receipt INJ',
      display: 'nINJ',
      symbol: 'nINJ',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninj.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-177',
            base_denom: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-60'
          }
        }]
    },
    {
      description: 'A receipt token for lent ATOM issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/32781A37DF4BCD0F510A538C56CEB7E77B196050637FFB6A05D2ABCF767491F7',
          exponent: 0,
          aliases: ['inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780']
        }, {
          denom: 'nATOM',
          exponent: 6
        }],
      base: 'ibc/32781A37DF4BCD0F510A538C56CEB7E77B196050637FFB6A05D2ABCF767491F7',
      name: 'Neptune Receipt ATOM',
      display: 'nATOM',
      symbol: 'nATOM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/natom.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-177',
            base_denom: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-60'
          }
        }]
    },
    {
      description: 'A receipt token for lent WETH issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/526BAF0312504CDFA8D44E20371ECC1982C57BED8A79C740C50151C0B4BED2F3',
          exponent: 0,
          aliases: ['inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt']
        }, {
          denom: 'nWETH',
          exponent: 18
        }],
      base: 'ibc/526BAF0312504CDFA8D44E20371ECC1982C57BED8A79C740C50151C0B4BED2F3',
      name: 'Neptune Receipt WETH',
      display: 'nWETH',
      symbol: 'nWETH',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nweth.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-177',
            base_denom: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-60'
          }
        }]
    },
    {
      description: 'A receipt token for lent USDT issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/6CB0F576121A8A19B36E8D0DEEDBEB9B1B516FD6FA2CDABB8D03A2AAA1CAA98A',
          exponent: 0,
          aliases: ['inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s']
        }, {
          denom: 'nUSDT',
          exponent: 6
        }],
      base: 'ibc/6CB0F576121A8A19B36E8D0DEEDBEB9B1B516FD6FA2CDABB8D03A2AAA1CAA98A',
      name: 'Neptune Receipt USDT',
      display: 'nUSDT',
      symbol: 'nUSDT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nusdt.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-177',
            base_denom: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-60'
          }
        }]
    },
    {
      description: 'A receipt token for lent TIA issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/E7401DF22C6362E4E7FB4761CF909AB14E53B062280A26B945EAB27C261EADA0',
          exponent: 0,
          aliases: ['inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv']
        }, {
          denom: 'nTIA',
          exponent: 6
        }],
      base: 'ibc/E7401DF22C6362E4E7FB4761CF909AB14E53B062280A26B945EAB27C261EADA0',
      name: 'Neptune Receipt TIA',
      display: 'nTIA',
      symbol: 'nTIA',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ntia.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-177',
            base_denom: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-60'
          }
        }]
    },
    {
      description: 'Int3face blockchain native token',
      denom_units: [{
          denom: 'ibc/BEA8D1B409C69D97E20D4BAFBB7EE72580746EA068127C0B43C3B7991759D1B6',
          exponent: 0,
          aliases: ['uint3']
        }, {
          denom: 'int3',
          exponent: 6
        }],
      base: 'ibc/BEA8D1B409C69D97E20D4BAFBB7EE72580746EA068127C0B43C3B7991759D1B6',
      name: 'Int3face Token',
      display: 'int3',
      symbol: 'INT3',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3.png'
        }],
      socials: {
        website: 'https://int3face.zone/',
        x: 'https://x.com/_Bitfrost_'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uint3',
            chain_name: 'int3face'
          },
          chain: {
            channel_id: 'channel-6455'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/AB73A0D964FCE74EA9D7695553A1EA4B3D8E332571B049E8CC0ADEBFB4931503',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ibc/AB73A0D964FCE74EA9D7695553A1EA4B3D8E332571B049E8CC0ADEBFB4931503',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
      },
      coingecko_id: 'juno-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
        }],
      socials: {
        website: 'https://junonetwork.io/',
        x: 'https://x.com/JunoNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-548',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-4328'
          }
        }]
    },
    {
      description: 'Kava is a decentralized finance (DeFi) platform that provides a range of financial services, including lending, borrowing, and stablecoins, leveraging the Cosmos and Ethereum ecosystems.',
      denom_units: [{
          denom: 'ibc/A9FDC3F1C168CC2196CF00A09504AD42D4D8E0BF1C7FBBB4B3531FA16F633F6E',
          exponent: 0,
          aliases: ['ukava']
        }, {
          denom: 'kava',
          exponent: 6
        }],
      base: 'ibc/A9FDC3F1C168CC2196CF00A09504AD42D4D8E0BF1C7FBBB4B3531FA16F633F6E',
      name: 'Kava',
      display: 'kava',
      symbol: 'KAVA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
      },
      coingecko_id: 'kava',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
        }],
      socials: {
        website: 'https://www.kava.io/',
        x: 'https://x.com/KAVA_CHAIN'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-136',
            base_denom: 'ukava',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }]
    },
    {
      description: 'Governance token of Kava Lend Protocol',
      denom_units: [{
          denom: 'ibc/06CABAF35AA697F173DC9D1EF41A85C7EE7D79F8A92413333446E921EDC35F37',
          exponent: 0,
          aliases: ['hard']
        }, {
          denom: 'HARD',
          exponent: 6
        }],
      base: 'ibc/06CABAF35AA697F173DC9D1EF41A85C7EE7D79F8A92413333446E921EDC35F37',
      name: 'Kava Hard',
      display: 'HARD',
      symbol: 'HARD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
      },
      coingecko_id: 'kava-lend',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-136',
            base_denom: 'hard',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }]
    },
    {
      description: 'Governance token of Kava Swap Protocol',
      denom_units: [{
          denom: 'ibc/F69DEB50C318E0B5E19B6F422AEE3FA516801AB2EDFD9778D4BB0DF2FAB5A792',
          exponent: 0,
          aliases: ['swp']
        }, {
          denom: 'SWP',
          exponent: 6
        }],
      base: 'ibc/F69DEB50C318E0B5E19B6F422AEE3FA516801AB2EDFD9778D4BB0DF2FAB5A792',
      name: 'Kava Swap',
      display: 'SWP',
      symbol: 'SWP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
      },
      coingecko_id: 'kava-swap',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-136',
            base_denom: 'swp',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }]
    },
    {
      description: 'The native stablecoin of Kava',
      denom_units: [{
          denom: 'ibc/7D33F1856208DF4E2342D7A47F665674D99405DB64298B6924AA8C39FF59FE8F',
          exponent: 0,
          aliases: ['usdx']
        }, {
          denom: 'USDX',
          exponent: 6
        }],
      base: 'ibc/7D33F1856208DF4E2342D7A47F665674D99405DB64298B6924AA8C39FF59FE8F',
      name: 'Kava USDX',
      display: 'USDX',
      symbol: 'USDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
      },
      coingecko_id: 'usdx',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-136',
            base_denom: 'usdx',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/3307AC2A0415D33A463DBC954087539A4B2AB01DAC7C77155C072A2DD3073A94',
          exponent: 0,
          aliases: ['erc20/tether/usdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      base: 'ibc/3307AC2A0415D33A463DBC954087539A4B2AB01DAC7C77155C072A2DD3073A94',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      coingecko_id: 'tether',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-136',
            base_denom: 'erc20/tether/usdt',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      type_asset: 'sdk.coin'
    },
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      denom_units: [{
          denom: 'ibc/1053E271314D36FECBC915B51474F8B3962597CE88FF3E4A74795B0E3F367A8B',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/1053E271314D36FECBC915B51474F8B3962597CE88FF3E4A74795B0E3F367A8B',
      name: 'Kujira',
      display: 'kuji',
      symbol: 'KUJI',
      coingecko_id: 'kujira',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
        }],
      socials: {
        website: 'https://kujira.network/',
        x: 'https://x.com/TeamKujira'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'The native token of MANTRA',
      denom_units: [{
          denom: 'ibc/E714C2378FF5786A97E372CA491F9649319E278C8DD0F8BB42387AE26FA17B2B',
          exponent: 0,
          aliases: ['uom']
        }, {
          denom: 'om',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/E714C2378FF5786A97E372CA491F9649319E278C8DD0F8BB42387AE26FA17B2B',
      name: 'MANTRA Chain',
      display: 'om',
      symbol: 'OM',
      coingecko_id: 'mantra-dao',
      keywords: [
        'rwa',
        'wasm',
        'staking'
      ],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg',
          theme: {
            circle: true
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Darkmatt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Darkmatt.svg',
          theme: {
            dark_mode: true,
            circle: true
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-WHT.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-WHT.svg',
          theme: {
            dark_mode: false,
            circle: true
          }
        }
      ],
      socials: {
        website: 'https://www.mantrachain.io/',
        x: 'https://x.com/MANTRA_Chain'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'uom',
            chain_name: 'mantrachain'
          },
          chain: {
            channel_id: 'channel-6964'
          }
        }]
    },
    {
      description: 'Agoric is a smart contract platform that uses JavaScript to enable developers to build secure and scalable decentralized applications (dApps) easily.',
      denom_units: [{
          denom: 'ibc/B074BCF31E5892A522FD48DDD5DD80C3953D4B43D59A6E4FD0DC6759685FD36C',
          exponent: 0,
          aliases: ['ubld']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      base: 'ibc/B074BCF31E5892A522FD48DDD5DD80C3953D4B43D59A6E4FD0DC6759685FD36C',
      name: 'Agoric',
      display: 'bld',
      symbol: 'BLD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
      },
      coingecko_id: 'agoric',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
        }],
      socials: {
        website: 'https://agoric.com/',
        x: 'https://x.com/agoric'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-146',
            base_denom: 'ubld',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-5789'
          }
        }]
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [{
          denom: 'ibc/4E39DA6487C8AA17276FAD2730C1DC84E0F716179962DA508FDAAC5FD598C323',
          exponent: 0,
          aliases: ['uist']
        }, {
          denom: 'ist',
          exponent: 6
        }],
      base: 'ibc/4E39DA6487C8AA17276FAD2730C1DC84E0F716179962DA508FDAAC5FD598C323',
      name: 'Inter Stable Token',
      display: 'ist',
      symbol: 'IST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
      },
      coingecko_id: 'inter-stable-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-146',
            base_denom: 'uist',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-5789'
          }
        }]
    },
    {
      description: 'Archway is a smart contract platform in the Cosmos ecosystem designed to reward developers by providing them with a share of transaction fees generated by their applications.',
      denom_units: [
        {
          denom: 'ibc/00230C58F1540708067850B3362C8A67A273FC52F0C7305B802D7255495C86FD',
          exponent: 0,
          aliases: ['aarch']
        },
        {
          denom: 'uarch',
          exponent: 12
        },
        {
          denom: 'arch',
          exponent: 18
        }
      ],
      base: 'ibc/00230C58F1540708067850B3362C8A67A273FC52F0C7305B802D7255495C86FD',
      name: 'Archway',
      display: 'arch',
      symbol: 'ARCH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.svg'
      },
      coingecko_id: 'archway',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.svg'
        }],
      socials: {
        website: 'https://archway.io/',
        x: 'https://x.com/archwayHQ'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-61',
            base_denom: 'aarch',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-41'
          }
        }]
    },
    {
      description: 'Architects Token',
      type_asset: 'cw20',
      address: 'archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu',
      denom_units: [{
          denom: 'ibc/FEFB9DB3AED86F6B1BFC010034DE0822DE0DC2806F80F79BB6DA6333539FB532',
          exponent: 0,
          aliases: ['archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu']
        }, {
          denom: 'TOKN',
          exponent: 18
        }],
      base: 'ibc/FEFB9DB3AED86F6B1BFC010034DE0822DE0DC2806F80F79BB6DA6333539FB532',
      name: 'Architects Token',
      display: 'TOKN',
      symbol: 'TOKN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/tokn.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/tokn.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-61',
            base_denom: 'archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-41'
          }
        }]
    },
    {
      description: 'Axelar is a decentralized interoperability network connecting multiple blockchain ecosystems, enabling seamless cross-chain communication and value transfer.',
      denom_units: [{
          denom: 'ibc/C0E66D1C81D8AAF0E6896E05190FDFBC222367148F86AC3EA679C28327A763CD',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/C0E66D1C81D8AAF0E6896E05190FDFBC222367148F86AC3EA679C28327A763CD',
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
            channel_id: 'channel-78',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The native token of Babylon Genesis.',
      denom_units: [{
          denom: 'ibc/42B08C3E209022A4D062EF96AEA94AEBD1C2C1F14398C421027F80D9FF4994FA',
          exponent: 0,
          aliases: ['ubbn']
        }, {
          denom: 'BABY',
          exponent: 6
        }],
      base: 'ibc/42B08C3E209022A4D062EF96AEA94AEBD1C2C1F14398C421027F80D9FF4994FA',
      name: 'BABY',
      display: 'BABY',
      symbol: 'BABY',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/logo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/babylon/images/logo.svg'
        }],
      coingecko_id: 'babylon',
      type_asset: 'sdk.coin',
      socials: {
        website: 'https://babylonlabs.io/',
        x: 'https://x.com/babylonlabs_io'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'ubbn',
            chain_name: 'babylon'
          },
          chain: {
            channel_id: 'channel-6980'
          }
        }]
    },
    {
      description: 'BitSong Native Token',
      denom_units: [{
          denom: 'ibc/53E1B5B1C060CF4B556E91020EACD272CD9160E996E598FC93D2436814050471',
          exponent: 0,
          aliases: ['ubtsg']
        }, {
          denom: 'btsg',
          exponent: 6
        }],
      base: 'ibc/53E1B5B1C060CF4B556E91020EACD272CD9160E996E598FC93D2436814050471',
      name: 'BitSong',
      display: 'btsg',
      symbol: 'BTSG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg'
      },
      type_asset: 'sdk.coin',
      coingecko_id: 'bitsong',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg'
        }],
      socials: {
        website: 'https://bitsong.io/',
        x: 'https://x.com/BitSongOfficial'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-39',
            base_denom: 'ubtsg',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-7232'
          }
        }]
    },
    {
      description: 'Celestia is a modular blockchain network focused on data availability, allowing developers to deploy their own customizable blockchains with ease.',
      denom_units: [{
          denom: 'ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      base: 'ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      coingecko_id: 'celestia',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
        }],
      socials: {
        website: 'https://celestia.org/',
        x: 'https://x.com/CelestiaOrg'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'utia',
            chain_name: 'celestia'
          },
          chain: {
            channel_id: 'channel-35'
          }
        }]
    },
    {
      description: 'Chihuahua is a community-driven blockchain project focused on creating a fun and engaging ecosystem with an emphasis on social interactions and community building.',
      denom_units: [{
          denom: 'ibc/BEF5C9D724E1EBB04FEE237CB5F602B22B0FFE8065F540FD8BC6F9E1A4B8573D',
          exponent: 0,
          aliases: ['uhuahua']
        }, {
          denom: 'huahua',
          exponent: 6
        }],
      base: 'ibc/BEF5C9D724E1EBB04FEE237CB5F602B22B0FFE8065F540FD8BC6F9E1A4B8573D',
      name: 'Chihuahua',
      display: 'huahua',
      symbol: 'HUAHUA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
      },
      coingecko_id: 'chihuahua-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-76',
            base_denom: 'uhuahua',
            chain_name: 'chihuahua'
          },
          chain: {
            channel_id: 'channel-51'
          }
        }]
    },
    {
      description: 'ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.',
      denom_units: [{
          denom: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
      name: 'Cosmos Hub Atom',
      display: 'atom',
      symbol: 'ATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      coingecko_id: 'cosmos',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }],
      socials: {
        website: 'https://cosmos.network',
        x: 'https://x.com/cosmoshub'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-569',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'Dragon Token is the native staking and governance token of Dungeon Chain, serving as the backbone of the ecosystem. Its primary roles include staking, where users stake Dragon Tokens to secure the network, enhance its functionality, and earn rewards in return; governance, granting token holders voting rights to influence key decisions such as game onboarding, protocol updates, and community-driven initiatives; and ecosystem growth, facilitating transactions, incentivizing developers, and promoting the creation of new interchain games. Dragon Token ensures a decentralized, fair, and community-driven ecosystem, fostering the evolution of blockchain-based gaming. It plays a crucial role in driving the growth of Dungeon Chain by empowering both developers and players to participate actively in the ecosystem\'s governance and success.',
      denom_units: [{
          denom: 'ibc/EF02A9A6573F45C96C8C6AA1BB0BCE257826899027468126277384D2767FB5AA',
          exponent: 0,
          aliases: ['udgn']
        }, {
          denom: 'DGN',
          exponent: 6
        }],
      base: 'ibc/EF02A9A6573F45C96C8C6AA1BB0BCE257826899027468126277384D2767FB5AA',
      name: 'Dragon Coin',
      display: 'DGN',
      coingecko_id: 'dragon-coin-2',
      symbol: 'DGN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dungeon/images/DGN.png'
      },
      socials: {
        website: 'https://www.cryptodungeon.org',
        x: 'https://x.com/cryptodungeonma'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dungeon/images/DGN.png',
          theme: {
            circle: true
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5309',
            base_denom: 'udgn',
            chain_name: 'dungeon'
          },
          chain: {
            channel_id: 'channel-7358'
          }
        }]
    },
    {
      description: 'DYDX is a decentralized trading platform focused on derivatives and perpetual contracts, offering a secure and efficient trading experience without intermediaries.',
      denom_units: [{
          denom: 'ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130',
          exponent: 0,
          aliases: ['adydx']
        }, {
          denom: 'dydx',
          exponent: 18
        }],
      base: 'ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130',
      name: 'dYdX',
      display: 'dydx',
      symbol: 'DYDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
      },
      coingecko_id: 'dydx-chain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://dydx.trade/',
        x: 'https://x.com/dYdX'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'adydx',
            chain_name: 'dydx'
          },
          chain: {
            channel_id: 'channel-48'
          }
        }]
    },
    {
      description: 'The native governance and staking token of the Dymension Hub',
      denom_units: [{
          denom: 'ibc/4A6A46D4263F2ED3DCE9CF866FE15E6903FB5E12D87EB8BDC1B6B1A1E2D397B4',
          exponent: 0,
          aliases: ['adym']
        }, {
          denom: 'dym',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/4A6A46D4263F2ED3DCE9CF866FE15E6903FB5E12D87EB8BDC1B6B1A1E2D397B4',
      name: 'Dymension',
      display: 'dym',
      symbol: 'DYM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
      },
      coingecko_id: 'dymension',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
        }],
      socials: {
        website: 'https://portal.dymension.xyz',
        x: 'https://x.com/dymension'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'adym',
            chain_name: 'dymension'
          },
          chain: {
            channel_id: 'channel-675'
          }
        }]
    },
    {
      description: 'The native token of Elys Network',
      denom_units: [
        {
          denom: 'ibc/28FC965E05DB1A4C0A6DE6B720F67AFF8CAB571FE262824976DDDFF49A4BAAF7',
          exponent: 0,
          aliases: ['uelys']
        },
        {
          denom: 'melys',
          exponent: 3,
          aliases: ['millielys']
        },
        {
          denom: 'elys',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/28FC965E05DB1A4C0A6DE6B720F67AFF8CAB571FE262824976DDDFF49A4BAAF7',
      name: 'Elys Network',
      display: 'elys',
      symbol: 'ELYS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/elys/images/elys.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/elys/images/elys.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'uelys',
            chain_name: 'elys'
          },
          chain: {
            channel_id: 'channel-6476'
          }
        }]
    },
    {
      description: 'Eden token definition',
      denom_units: [
        {
          denom: 'ibc/D3A7EBD9B281154B061A76C45729481AE0FE89ED072CD149ADC7065CCFB724EE',
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
      base: 'ibc/D3A7EBD9B281154B061A76C45729481AE0FE89ED072CD149ADC7065CCFB724EE',
      name: 'Eden',
      display: 'eden',
      symbol: 'EDEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/elys/images/eden.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/elys/images/eden.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'ueden',
            chain_name: 'elys'
          },
          chain: {
            channel_id: 'channel-6476'
          }
        }]
    },
    {
      description: 'Eden BOOST token definition',
      denom_units: [
        {
          denom: 'ibc/2A9CC7F90013D50DBBF4741F7BDC38004C3510D24228E264667A25DEB9DA668A',
          exponent: 0,
          aliases: ['uedenb']
        },
        {
          denom: 'medenb',
          exponent: 3,
          aliases: ['milliedenb']
        },
        {
          denom: 'edenb',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/2A9CC7F90013D50DBBF4741F7BDC38004C3510D24228E264667A25DEB9DA668A',
      name: 'Eden BOOST',
      display: 'edenb',
      symbol: 'EDENBOOST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/elys/images/eden-boost.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/elys/images/eden-boost.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-16',
            base_denom: 'uedenb',
            chain_name: 'elys'
          },
          chain: {
            channel_id: 'channel-6476'
          }
        }]
    },
    {
      description: 'The native token of Initia',
      denom_units: [{
          denom: 'ibc/739368B97C6A578432701EEE54CF8BAE535F2EDD28BE051E05268BFA99229090',
          exponent: 0,
          aliases: ['uinit']
        }, {
          denom: 'INIT',
          exponent: 6
        }],
      base: 'ibc/739368B97C6A578432701EEE54CF8BAE535F2EDD28BE051E05268BFA99229090',
      display: 'INIT',
      name: 'Initia',
      symbol: 'INIT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/initia/images/INIT.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/initia/images/INIT.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://initia.xyz/',
        x: 'https://x.com/initiaFDN'
      },
      type_asset: 'sdk.coin',
      coingecko_id: 'initia',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-37',
            base_denom: 'uinit',
            chain_name: 'initia'
          },
          chain: {
            channel_id: 'channel-6885'
          }
        }]
    },
    {
      description: 'Injective is a decentralized exchange protocol that enables fast, secure, and fully decentralized trading of derivatives, futures, and spot markets.',
      denom_units: [{
          denom: 'ibc/69BEAFC2FDF0C6F0124520B0A06E432AD8490732DFC309337FA6C307124FDABC',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/69BEAFC2FDF0C6F0124520B0A06E432AD8490732DFC309337FA6C307124FDABC',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      },
      coingecko_id: 'injective-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
        }],
      socials: {
        website: 'https://injective.com/',
        x: 'https://x.com/Injective_'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-177',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-60'
          }
        }]
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'ibc/8010BF87E8AA8998B839CE1BE6653DB991C9CA980BB81268CD6850526510C847',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'ibc/8010BF87E8AA8998B839CE1BE6653DB991C9CA980BB81268CD6850526510C847',
      name: 'Ninpo',
      display: 'NINPO',
      symbol: 'NINPO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-177',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-60'
          }
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'ibc/E77A750A8F026250D68DB0CFD0057F6FFA46212CEE747BE349D4DADD6E72F1BA',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'ibc/E77A750A8F026250D68DB0CFD0057F6FFA46212CEE747BE349D4DADD6E72F1BA',
      name: 'Judo',
      display: 'JUDO',
      symbol: 'JUDO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-177',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-60'
          }
        }]
    },
    {
      description: 'A receipt token for lent INJ issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/769832841AA368E193938637DD6EE7BA1EE2ED975A32E9924BBD959D5886716E',
          exponent: 0,
          aliases: ['inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f']
        }, {
          denom: 'nINJ',
          exponent: 18
        }],
      base: 'ibc/769832841AA368E193938637DD6EE7BA1EE2ED975A32E9924BBD959D5886716E',
      name: 'Neptune Receipt INJ',
      display: 'nINJ',
      symbol: 'nINJ',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninj.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-177',
            base_denom: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-60'
          }
        }]
    },
    {
      description: 'A receipt token for lent ATOM issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/32781A37DF4BCD0F510A538C56CEB7E77B196050637FFB6A05D2ABCF767491F7',
          exponent: 0,
          aliases: ['inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780']
        }, {
          denom: 'nATOM',
          exponent: 6
        }],
      base: 'ibc/32781A37DF4BCD0F510A538C56CEB7E77B196050637FFB6A05D2ABCF767491F7',
      name: 'Neptune Receipt ATOM',
      display: 'nATOM',
      symbol: 'nATOM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/natom.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-177',
            base_denom: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-60'
          }
        }]
    },
    {
      description: 'A receipt token for lent WETH issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/526BAF0312504CDFA8D44E20371ECC1982C57BED8A79C740C50151C0B4BED2F3',
          exponent: 0,
          aliases: ['inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt']
        }, {
          denom: 'nWETH',
          exponent: 18
        }],
      base: 'ibc/526BAF0312504CDFA8D44E20371ECC1982C57BED8A79C740C50151C0B4BED2F3',
      name: 'Neptune Receipt WETH',
      display: 'nWETH',
      symbol: 'nWETH',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nweth.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-177',
            base_denom: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-60'
          }
        }]
    },
    {
      description: 'A receipt token for lent USDT issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/6CB0F576121A8A19B36E8D0DEEDBEB9B1B516FD6FA2CDABB8D03A2AAA1CAA98A',
          exponent: 0,
          aliases: ['inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s']
        }, {
          denom: 'nUSDT',
          exponent: 6
        }],
      base: 'ibc/6CB0F576121A8A19B36E8D0DEEDBEB9B1B516FD6FA2CDABB8D03A2AAA1CAA98A',
      name: 'Neptune Receipt USDT',
      display: 'nUSDT',
      symbol: 'nUSDT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nusdt.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-177',
            base_denom: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-60'
          }
        }]
    },
    {
      description: 'A receipt token for lent TIA issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/E7401DF22C6362E4E7FB4761CF909AB14E53B062280A26B945EAB27C261EADA0',
          exponent: 0,
          aliases: ['inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv']
        }, {
          denom: 'nTIA',
          exponent: 6
        }],
      base: 'ibc/E7401DF22C6362E4E7FB4761CF909AB14E53B062280A26B945EAB27C261EADA0',
      name: 'Neptune Receipt TIA',
      display: 'nTIA',
      symbol: 'nTIA',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ntia.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-177',
            base_denom: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-60'
          }
        }]
    },
    {
      description: 'Int3face blockchain native token',
      denom_units: [{
          denom: 'ibc/BEA8D1B409C69D97E20D4BAFBB7EE72580746EA068127C0B43C3B7991759D1B6',
          exponent: 0,
          aliases: ['uint3']
        }, {
          denom: 'int3',
          exponent: 6
        }],
      base: 'ibc/BEA8D1B409C69D97E20D4BAFBB7EE72580746EA068127C0B43C3B7991759D1B6',
      name: 'Int3face Token',
      display: 'int3',
      symbol: 'INT3',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3.png'
        }],
      socials: {
        website: 'https://int3face.zone/',
        x: 'https://x.com/_Bitfrost_'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uint3',
            chain_name: 'int3face'
          },
          chain: {
            channel_id: 'channel-6455'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/AB73A0D964FCE74EA9D7695553A1EA4B3D8E332571B049E8CC0ADEBFB4931503',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ibc/AB73A0D964FCE74EA9D7695553A1EA4B3D8E332571B049E8CC0ADEBFB4931503',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
      },
      coingecko_id: 'juno-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
        }],
      socials: {
        website: 'https://junonetwork.io/',
        x: 'https://x.com/JunoNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-548',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-4328'
          }
        }]
    },
    {
      description: 'Kava is a decentralized finance (DeFi) platform that provides a range of financial services, including lending, borrowing, and stablecoins, leveraging the Cosmos and Ethereum ecosystems.',
      denom_units: [{
          denom: 'ibc/A9FDC3F1C168CC2196CF00A09504AD42D4D8E0BF1C7FBBB4B3531FA16F633F6E',
          exponent: 0,
          aliases: ['ukava']
        }, {
          denom: 'kava',
          exponent: 6
        }],
      base: 'ibc/A9FDC3F1C168CC2196CF00A09504AD42D4D8E0BF1C7FBBB4B3531FA16F633F6E',
      name: 'Kava',
      display: 'kava',
      symbol: 'KAVA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
      },
      coingecko_id: 'kava',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
        }],
      socials: {
        website: 'https://www.kava.io/',
        x: 'https://x.com/KAVA_CHAIN'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-136',
            base_denom: 'ukava',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }]
    },
    {
      description: 'Governance token of Kava Lend Protocol',
      denom_units: [{
          denom: 'ibc/06CABAF35AA697F173DC9D1EF41A85C7EE7D79F8A92413333446E921EDC35F37',
          exponent: 0,
          aliases: ['hard']
        }, {
          denom: 'HARD',
          exponent: 6
        }],
      base: 'ibc/06CABAF35AA697F173DC9D1EF41A85C7EE7D79F8A92413333446E921EDC35F37',
      name: 'Kava Hard',
      display: 'HARD',
      symbol: 'HARD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
      },
      coingecko_id: 'kava-lend',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-136',
            base_denom: 'hard',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }]
    },
    {
      description: 'Governance token of Kava Swap Protocol',
      denom_units: [{
          denom: 'ibc/F69DEB50C318E0B5E19B6F422AEE3FA516801AB2EDFD9778D4BB0DF2FAB5A792',
          exponent: 0,
          aliases: ['swp']
        }, {
          denom: 'SWP',
          exponent: 6
        }],
      base: 'ibc/F69DEB50C318E0B5E19B6F422AEE3FA516801AB2EDFD9778D4BB0DF2FAB5A792',
      name: 'Kava Swap',
      display: 'SWP',
      symbol: 'SWP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
      },
      coingecko_id: 'kava-swap',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-136',
            base_denom: 'swp',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }]
    },
    {
      description: 'The native stablecoin of Kava',
      denom_units: [{
          denom: 'ibc/7D33F1856208DF4E2342D7A47F665674D99405DB64298B6924AA8C39FF59FE8F',
          exponent: 0,
          aliases: ['usdx']
        }, {
          denom: 'USDX',
          exponent: 6
        }],
      base: 'ibc/7D33F1856208DF4E2342D7A47F665674D99405DB64298B6924AA8C39FF59FE8F',
      name: 'Kava USDX',
      display: 'USDX',
      symbol: 'USDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
      },
      coingecko_id: 'usdx',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-136',
            base_denom: 'usdx',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/3307AC2A0415D33A463DBC954087539A4B2AB01DAC7C77155C072A2DD3073A94',
          exponent: 0,
          aliases: ['erc20/tether/usdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      base: 'ibc/3307AC2A0415D33A463DBC954087539A4B2AB01DAC7C77155C072A2DD3073A94',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      coingecko_id: 'tether',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-136',
            base_denom: 'erc20/tether/usdt',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      type_asset: 'sdk.coin'
    },
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      denom_units: [{
          denom: 'ibc/1053E271314D36FECBC915B51474F8B3962597CE88FF3E4A74795B0E3F367A8B',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/1053E271314D36FECBC915B51474F8B3962597CE88FF3E4A74795B0E3F367A8B',
      name: 'Kujira',
      display: 'kuji',
      symbol: 'KUJI',
      coingecko_id: 'kujira',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
        }],
      socials: {
        website: 'https://kujira.network/',
        x: 'https://x.com/TeamKujira'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'The native token of MANTRA',
      denom_units: [{
          denom: 'ibc/E714C2378FF5786A97E372CA491F9649319E278C8DD0F8BB42387AE26FA17B2B',
          exponent: 0,
          aliases: ['uom']
        }, {
          denom: 'om',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/E714C2378FF5786A97E372CA491F9649319E278C8DD0F8BB42387AE26FA17B2B',
      name: 'MANTRA Chain',
      display: 'om',
      symbol: 'OM',
      coingecko_id: 'mantra-dao',
      keywords: [
        'rwa',
        'wasm',
        'staking'
      ],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg',
          theme: {
            circle: true
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Darkmatt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Darkmatt.svg',
          theme: {
            dark_mode: true,
            circle: true
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-WHT.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-WHT.svg',
          theme: {
            dark_mode: false,
            circle: true
          }
        }
      ],
      socials: {
        website: 'https://www.mantrachain.io/',
        x: 'https://x.com/MANTRA_Chain'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'uom',
            chain_name: 'mantrachain'
          },
          chain: {
            channel_id: 'channel-6964'
          }
        }]
    },
    {
      description: 'The native token of Namada.',
      denom_units: [{
          denom: 'ibc/2C35FFA3B002EAF76FFCA2419CEE76F7F17F7572C41E7D35255EEED91C20662A',
          exponent: 0,
          aliases: ['unam']
        }, {
          denom: 'nam',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/2C35FFA3B002EAF76FFCA2419CEE76F7F17F7572C41E7D35255EEED91C20662A',
      name: 'Namada',
      display: 'nam',
      symbol: 'NAM',
      address: 'tnam1q9gr66cvu4hrzm0sd5kmlnjje82gs3xlfg3v6nu7',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/namada/images/namada.svg'
      },
      socials: {
        website: 'https://namada.net/',
        x: 'https://x.com/namada'
      },
      coingecko_id: 'namada',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/namada/images/namada.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'unam',
            chain_name: 'namada'
          },
          chain: {
            channel_id: 'channel-7024'
          }
        }]
    },
    {
      description: 'The permissioned staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/E43AFFB1D8AA31881458206EE2AA2CA8022093E15C7F807C9F3CEEF46A08B915',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/E43AFFB1D8AA31881458206EE2AA2CA8022093E15C7F807C9F3CEEF46A08B915',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'ustake',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-30'
          }
        }]
    },
    {
      description: 'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [{
          denom: 'ibc/17E2B6610FC9DF24D3AD8F1CBA03308B9FD284AB8123E5E485902E54369E985A',
          exponent: 0,
          aliases: ['ufrienzies']
        }, {
          denom: 'frienzies',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/17E2B6610FC9DF24D3AD8F1CBA03308B9FD284AB8123E5E485902E54369E985A',
      display: 'frienzies',
      name: 'Frienzies',
      symbol: 'FRNZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'ufrienzies',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-30'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/A0A081FFC6A13B8F502079F3A8420F5B4FC3007D9AA696E371B9A7B39B90EADF',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/A0A081FFC6A13B8F502079F3A8420F5B4FC3007D9AA696E371B9A7B39B90EADF',
      display: 'usdy',
      name: 'Ondo US Dollar Yield',
      symbol: 'USDY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.svg'
        }],
      coingecko_id: 'ondo-us-dollar-yield',
      socials: {
        website: 'https://ondo.finance/usdy',
        x: 'https://x.com/OndoFinance'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'ausdy',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-30'
          }
        }]
    },
    {
      description: 'USDN token',
      denom_units: [{
          denom: 'ibc/647A544ED631A846AFB787A9550422E782E913C46513011A48220AB13DC24D55',
          exponent: 0,
          aliases: ['uusdn']
        }, {
          denom: 'usdn',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/647A544ED631A846AFB787A9550422E782E913C46513011A48220AB13DC24D55',
      name: 'Noble Dollar',
      display: 'usdn',
      symbol: 'USDN',
      coingecko_id: 'noble-dollar-usdn',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDN.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDN.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDN.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDN.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'uusdn',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-30'
          }
        }]
    },
    {
      description: 'The native token of Nolus chain',
      denom_units: [{
          denom: 'ibc/6C9E6701AC217C0FC7D74B0F7A6265B9B4E3C3CDA6E80AADE5F950A8F52F9972',
          exponent: 0,
          aliases: ['unls']
        }, {
          denom: 'nls',
          exponent: 6
        }],
      base: 'ibc/6C9E6701AC217C0FC7D74B0F7A6265B9B4E3C3CDA6E80AADE5F950A8F52F9972',
      name: 'Nolus',
      display: 'nls',
      symbol: 'NLS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
      },
      coingecko_id: 'nolus',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
        }],
      socials: {
        website: 'https://nolus.io/',
        x: 'https://x.com/NolusProtocol'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3839',
            base_denom: 'unls',
            chain_name: 'nolus'
          },
          chain: {
            channel_id: 'channel-44'
          }
        }]
    },
    {
      description: 'Nomic\'s native token.',
      denom_units: [{
          denom: 'ibc/4F479350CB86D5E3AFA7F355DDE74EB1F25C2A8F0B3021A1641193B9F6D0A3AD',
          exponent: 0,
          aliases: ['unom']
        }, {
          denom: 'nom',
          exponent: 6
        }],
      base: 'ibc/4F479350CB86D5E3AFA7F355DDE74EB1F25C2A8F0B3021A1641193B9F6D0A3AD',
      name: 'Nomic',
      display: 'nom',
      symbol: 'NOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'unom',
            chain_name: 'nomic'
          },
          chain: {
            channel_id: 'channel-6478'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/376222D6D9DAE23092E29740E56B758580935A6D77C24C2ABD57A6A78A1F3955',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/376222D6D9DAE23092E29740E56B758580935A6D77C24C2ABD57A6A78A1F3955',
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
        x: 'https://x.com/osmosis'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-874',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/0433997003A2CFE10E483B93743BEC37F2F13B89854FD69599482E6DB8E6CE22',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/0433997003A2CFE10E483B93743BEC37F2F13B89854FD69599482E6DB8E6CE22',
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
            channel_id: 'channel-874',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'The native token of Penumbra.',
      denom_units: [{
          denom: 'ibc/2DC4028D9196E4FC82B6EA1633FF38F4161FD081AF6AE30249C2020FCFBCD4F8',
          exponent: 0,
          aliases: ['upenumbra']
        }, {
          denom: 'penumbra',
          exponent: 6
        }],
      type_asset: 'unknown',
      base: 'ibc/2DC4028D9196E4FC82B6EA1633FF38F4161FD081AF6AE30249C2020FCFBCD4F8',
      display: 'penumbra',
      symbol: 'UM',
      name: 'Penumbra',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/penumbra/images/um.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/penumbra/images/um.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://penumbra.zone/',
        x: 'https://x.com/penumbrazone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'upenumbra',
            chain_name: 'penumbra'
          },
          chain: {
            channel_id: 'channel-4886'
          }
        }]
    },
    {
      description: 'Persistence One is building a Bitcoin Cross-chain Swaps solution, enabling fast, zero-slippage secure swaps across Bitcoin Layer 2s.',
      denom_units: [{
          denom: 'ibc/B3881052DCC62E68955C71A49C5306717CFDE5B6526D39C89D1278DAE3284432',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      base: 'ibc/B3881052DCC62E68955C71A49C5306717CFDE5B6526D39C89D1278DAE3284432',
      name: 'Persistence',
      display: 'xprt',
      symbol: 'XPRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
      },
      coingecko_id: 'persistence',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://persistence.one/',
        x: 'https://x.com/PersistenceOne'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-136',
            base_denom: 'uxprt',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }]
    },
    {
      description: 'The native token of PRYZM',
      denom_units: [{
          denom: 'ibc/E67D49D7F361750487844054310EA5D787EDEC21F951CD8E605699097E65A3EC',
          exponent: 0,
          aliases: ['upryzm']
        }, {
          denom: 'pryzm',
          exponent: 6
        }],
      base: 'ibc/E67D49D7F361750487844054310EA5D787EDEC21F951CD8E605699097E65A3EC',
      name: 'Pryzm',
      display: 'pryzm',
      symbol: 'PRYZM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.svg'
        }],
      type_asset: 'sdk.coin',
      socials: {
        website: 'https://pryzm.zone/',
        x: 'https://x.com/Pryzm_Zone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'upryzm',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/7906C47FB3608D070131C0D4D09316BBCBF116755B3439F291D968EDAE675981',
          exponent: 0,
          aliases: ['p:uatom:30Sep2024']
        }, {
          denom: 'pATOM30Sep2024',
          exponent: 6
        }],
      base: 'ibc/7906C47FB3608D070131C0D4D09316BBCBF116755B3439F291D968EDAE675981',
      name: 'pAtom (30Sep2024)',
      display: 'pATOM30Sep2024',
      symbol: 'pATOM-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uatom:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/F36871374946FB454CF5B98860EBE038B9A73DDCB8493EAE30623E8A39B82D22',
          exponent: 0,
          aliases: ['p:uatom:31Dec2024']
        }, {
          denom: 'pATOM31Dec2024',
          exponent: 6
        }],
      base: 'ibc/F36871374946FB454CF5B98860EBE038B9A73DDCB8493EAE30623E8A39B82D22',
      name: 'pAtom (31Dec2024)',
      display: 'pATOM31Dec2024',
      symbol: 'pATOM-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uatom:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/B121C632F1970BD1E6AD0FADCD73A10174513F31EB5E12DC841C37EB01D4818A',
          exponent: 0,
          aliases: ['p:uatom:31Mar2025']
        }, {
          denom: 'pATOM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/B121C632F1970BD1E6AD0FADCD73A10174513F31EB5E12DC841C37EB01D4818A',
      name: 'pAtom (31Mar2025)',
      display: 'pATOM31Mar2025',
      symbol: 'pATOM-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uatom:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/744F1C72F065D3286ADF67D8BC2D411882268730195199A2FB23A02218C97C82',
          exponent: 0,
          aliases: ['p:uatom:30Jun2025']
        }, {
          denom: 'pATOM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/744F1C72F065D3286ADF67D8BC2D411882268730195199A2FB23A02218C97C82',
      name: 'pAtom (30Jun2025)',
      display: 'pATOM30Jun2025',
      symbol: 'pATOM-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uatom:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/A1679DD0A188CFE7CA4A3EAC3DFF8035B77A36EA245CD7189BA4E763C41AD1AF',
          exponent: 0,
          aliases: ['p:uatom:30Sep2025']
        }, {
          denom: 'pATOM30Sep2025',
          exponent: 6
        }],
      base: 'ibc/A1679DD0A188CFE7CA4A3EAC3DFF8035B77A36EA245CD7189BA4E763C41AD1AF',
      name: 'pAtom (30Sep2025)',
      display: 'pATOM30Sep2025',
      symbol: 'pATOM-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uatom:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/9FD85F92C1AE331F4A5F4D64A92860EEE9BDC9FD0F4FD46E97D62DDFDB88C4B4',
          exponent: 0,
          aliases: ['p:uatom:31Dec2025']
        }, {
          denom: 'pATOM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/9FD85F92C1AE331F4A5F4D64A92860EEE9BDC9FD0F4FD46E97D62DDFDB88C4B4',
      name: 'pAtom (31Dec2025)',
      display: 'pATOM31Dec2025',
      symbol: 'pATOM-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uatom:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/2E533B940C796E97DE15070587C5F102147C7BC827958D27089016B3D1E06118',
          exponent: 0,
          aliases: ['p:uatom:31Dec2026']
        }, {
          denom: 'pATOM31Dec2026',
          exponent: 6
        }],
      base: 'ibc/2E533B940C796E97DE15070587C5F102147C7BC827958D27089016B3D1E06118',
      name: 'pAtom (31Dec2026)',
      display: 'pATOM31Dec2026',
      symbol: 'pATOM-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uatom:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/7FC6AA40E11297966C395F37A01F6A3F374FE3CE4117896237EB4027B87FCA7F',
          exponent: 0,
          aliases: ['p:uosmo:30Sep2024']
        }, {
          denom: 'pOSMO30Sep2024',
          exponent: 6
        }],
      base: 'ibc/7FC6AA40E11297966C395F37A01F6A3F374FE3CE4117896237EB4027B87FCA7F',
      name: 'pOsmo (30Sep2024)',
      display: 'pOSMO30Sep2024',
      symbol: 'pOSMO-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uosmo:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/E1A49B2B001CEBE2AF0D4F5CA3281C4258EBB56FCCDBEBFDAA7B583BB76E239D',
          exponent: 0,
          aliases: ['p:uosmo:31Dec2024']
        }, {
          denom: 'pOSMO31Dec2024',
          exponent: 6
        }],
      base: 'ibc/E1A49B2B001CEBE2AF0D4F5CA3281C4258EBB56FCCDBEBFDAA7B583BB76E239D',
      name: 'pOsmo (31Dec2024)',
      display: 'pOSMO31Dec2024',
      symbol: 'pOSMO-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uosmo:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/EA022AF3D5ED64FECC523DA7A0DEC6206ADB8BD25369CBB65D803871BC9E7115',
          exponent: 0,
          aliases: ['p:uosmo:31Mar2025']
        }, {
          denom: 'pOSMO31Mar2025',
          exponent: 6
        }],
      base: 'ibc/EA022AF3D5ED64FECC523DA7A0DEC6206ADB8BD25369CBB65D803871BC9E7115',
      name: 'pOsmo (31Mar2025)',
      display: 'pOSMO31Mar2025',
      symbol: 'pOSMO-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uosmo:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/BB273622E72621A6C09F58DAEFB62A786619180E4BB0E9AFECE50EB67C7A5115',
          exponent: 0,
          aliases: ['p:uosmo:30Jun2025']
        }, {
          denom: 'pOSMO30Jun2025',
          exponent: 6
        }],
      base: 'ibc/BB273622E72621A6C09F58DAEFB62A786619180E4BB0E9AFECE50EB67C7A5115',
      name: 'pOsmo (30Jun2025)',
      display: 'pOSMO30Jun2025',
      symbol: 'pOSMO-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uosmo:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/F7BB2BA5090F143F9F2FD0B28A44C0B1CA1899A67DD3847CC10611C6AC737134',
          exponent: 0,
          aliases: ['p:uosmo:30Sep2025']
        }, {
          denom: 'pOSMO30Sep2025',
          exponent: 6
        }],
      base: 'ibc/F7BB2BA5090F143F9F2FD0B28A44C0B1CA1899A67DD3847CC10611C6AC737134',
      name: 'pOsmo (30Sep2025)',
      display: 'pOSMO30Sep2025',
      symbol: 'pOSMO-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uosmo:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/AB0D2405D425ABCDEBEF11FEDCEEDD273E96C150EDD0D81CC873DF22B1379D13',
          exponent: 0,
          aliases: ['p:uosmo:31Dec2025']
        }, {
          denom: 'pOSMO31Dec2025',
          exponent: 6
        }],
      base: 'ibc/AB0D2405D425ABCDEBEF11FEDCEEDD273E96C150EDD0D81CC873DF22B1379D13',
      name: 'pOsmo (31Dec2025)',
      display: 'pOSMO31Dec2025',
      symbol: 'pOSMO-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uosmo:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/2478BB4347AF1890333978255C500B17352FDE1D8F43D2B81956999F457151D2',
          exponent: 0,
          aliases: ['p:uosmo:31Dec2026']
        }, {
          denom: 'pOSMO31Dec2026',
          exponent: 6
        }],
      base: 'ibc/2478BB4347AF1890333978255C500B17352FDE1D8F43D2B81956999F457151D2',
      name: 'pOsmo (31Dec2026)',
      display: 'pOSMO31Dec2026',
      symbol: 'pOSMO-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uosmo:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/8EF206F4D464A803D74462C12B524AD2811407D402D52B5ED8647412EEE8C5A3',
          exponent: 0,
          aliases: ['p:inj:30Sep2024']
        }, {
          denom: 'pINJ30Sep2024',
          exponent: 18
        }],
      base: 'ibc/8EF206F4D464A803D74462C12B524AD2811407D402D52B5ED8647412EEE8C5A3',
      name: 'pInj (30Sep2024)',
      display: 'pINJ30Sep2024',
      symbol: 'pINJ-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:inj:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/8FEBBF7EAB54385A4AC31995D954719357A312CD61CC035B887E9A7F22E24368',
          exponent: 0,
          aliases: ['p:inj:31Dec2024']
        }, {
          denom: 'pINJ31Dec2024',
          exponent: 18
        }],
      base: 'ibc/8FEBBF7EAB54385A4AC31995D954719357A312CD61CC035B887E9A7F22E24368',
      name: 'pInj (31Dec2024)',
      display: 'pINJ31Dec2024',
      symbol: 'pINJ-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:inj:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/8929B944B697B4FE5023F0D738AE2F903D4BB184677B38BAF4534C0D2CE3A647',
          exponent: 0,
          aliases: ['p:inj:31Mar2025']
        }, {
          denom: 'pINJ31Mar2025',
          exponent: 18
        }],
      base: 'ibc/8929B944B697B4FE5023F0D738AE2F903D4BB184677B38BAF4534C0D2CE3A647',
      name: 'pInj (31Mar2025)',
      display: 'pINJ31Mar2025',
      symbol: 'pINJ-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:inj:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/3BFBCA7001B5BCD3CB7081DFEA482F850C67A032AF54134509B4B9C023409FA4',
          exponent: 0,
          aliases: ['p:inj:30Jun2025']
        }, {
          denom: 'pINJ30Jun2025',
          exponent: 18
        }],
      base: 'ibc/3BFBCA7001B5BCD3CB7081DFEA482F850C67A032AF54134509B4B9C023409FA4',
      name: 'pInj (30Jun2025)',
      display: 'pINJ30Jun2025',
      symbol: 'pINJ-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:inj:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/86249F2327D106685691DD1B9427866CE18AF77571C1451C63017DDFD22E855E',
          exponent: 0,
          aliases: ['p:inj:30Sep2025']
        }, {
          denom: 'pINJ30Sep2025',
          exponent: 18
        }],
      base: 'ibc/86249F2327D106685691DD1B9427866CE18AF77571C1451C63017DDFD22E855E',
      name: 'pInj (30Sep2025)',
      display: 'pINJ30Sep2025',
      symbol: 'pINJ-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:inj:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/66347D025091D38F214C43E8ED63B0418BCBFDBC1035D7CA08C5F5E76534DE6D',
          exponent: 0,
          aliases: ['p:inj:31Dec2025']
        }, {
          denom: 'pINJ31Dec2025',
          exponent: 18
        }],
      base: 'ibc/66347D025091D38F214C43E8ED63B0418BCBFDBC1035D7CA08C5F5E76534DE6D',
      name: 'pInj (31Dec2025)',
      display: 'pINJ31Dec2025',
      symbol: 'pINJ-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:inj:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/4B9E5F7B5D1CDA392E800A64557FF99267B169114786AE27265F0AB89156BFE5',
          exponent: 0,
          aliases: ['p:inj:31Dec2026']
        }, {
          denom: 'pINJ31Dec2026',
          exponent: 18
        }],
      base: 'ibc/4B9E5F7B5D1CDA392E800A64557FF99267B169114786AE27265F0AB89156BFE5',
      name: 'pInj (31Dec2026)',
      display: 'pINJ31Dec2026',
      symbol: 'pINJ-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:inj:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/3EAAFEFF7FA28BD246A312AA7C8087725B6E16FA8E54E20D016A36D317514A1B',
          exponent: 0,
          aliases: ['p:uluna:30Sep2024']
        }, {
          denom: 'pLUNA30Sep2024',
          exponent: 6
        }],
      base: 'ibc/3EAAFEFF7FA28BD246A312AA7C8087725B6E16FA8E54E20D016A36D317514A1B',
      name: 'pLuna (30Sep2024)',
      display: 'pLUNA30Sep2024',
      symbol: 'pLUNA-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uluna:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/FCE36AA01FE72DE7F7DA80A430250B8504EF4987383E8090285A8E4AA3895C94',
          exponent: 0,
          aliases: ['p:uluna:31Dec2024']
        }, {
          denom: 'pLUNA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/FCE36AA01FE72DE7F7DA80A430250B8504EF4987383E8090285A8E4AA3895C94',
      name: 'pLuna (31Dec2024)',
      display: 'pLUNA31Dec2024',
      symbol: 'pLUNA-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uluna:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/8DA5C485DD0920F7F709EEB04545CBD76E1B150AE54D49AB37F1A2E329FC9DDC',
          exponent: 0,
          aliases: ['p:uluna:31Mar2025']
        }, {
          denom: 'pLUNA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/8DA5C485DD0920F7F709EEB04545CBD76E1B150AE54D49AB37F1A2E329FC9DDC',
      name: 'pLuna (31Mar2025)',
      display: 'pLUNA31Mar2025',
      symbol: 'pLUNA-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uluna:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/EBFDEDAAF510C7E5C5082CA158637A26D2024841321D3C734CAB7B4E94A64CA6',
          exponent: 0,
          aliases: ['p:uluna:30Jun2025']
        }, {
          denom: 'pLUNA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/EBFDEDAAF510C7E5C5082CA158637A26D2024841321D3C734CAB7B4E94A64CA6',
      name: 'pLuna (30Jun2025)',
      display: 'pLUNA30Jun2025',
      symbol: 'pLUNA-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uluna:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/9D65BD86FB3A37A562C0C7C718BFAF41907944025DB811A53ABB7B529205325E',
          exponent: 0,
          aliases: ['p:uluna:30Sep2025']
        }, {
          denom: 'pLUNA30Sep2025',
          exponent: 6
        }],
      base: 'ibc/9D65BD86FB3A37A562C0C7C718BFAF41907944025DB811A53ABB7B529205325E',
      name: 'pLuna (30Sep2025)',
      display: 'pLUNA30Sep2025',
      symbol: 'pLUNA-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uluna:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/311A34DB74E817F73D3EA2464FD8A1FB2EC57208E1071B1D89712F60C7DFB4BC',
          exponent: 0,
          aliases: ['p:uluna:31Dec2025']
        }, {
          denom: 'pLUNA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/311A34DB74E817F73D3EA2464FD8A1FB2EC57208E1071B1D89712F60C7DFB4BC',
      name: 'pLuna (31Dec2025)',
      display: 'pLUNA31Dec2025',
      symbol: 'pLUNA-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uluna:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/50BDEFCC24FF96F72B464120A10AEA42E99A6FC2F3A32BAC72EC8CBD85F3728A',
          exponent: 0,
          aliases: ['p:uluna:31Dec2026']
        }, {
          denom: 'pLUNA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/50BDEFCC24FF96F72B464120A10AEA42E99A6FC2F3A32BAC72EC8CBD85F3728A',
      name: 'pLuna (31Dec2026)',
      display: 'pLUNA31Dec2026',
      symbol: 'pLUNA-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uluna:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/B0CE710BB88B020F100F8D837EB8EA8592CC22F565A784C042958680C5225900',
          exponent: 0,
          aliases: ['p:uauuu:30Sep2024']
        }, {
          denom: 'pAUUU30Sep2024',
          exponent: 6
        }],
      base: 'ibc/B0CE710BB88B020F100F8D837EB8EA8592CC22F565A784C042958680C5225900',
      name: 'pAuuu (30Sep2024)',
      display: 'pAUUU30Sep2024',
      symbol: 'pAUUU-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uauuu:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/793188818EE048028A2CCAF4ACD1684D25737280F0C9DFD4B7B44AD467B2FC26',
          exponent: 0,
          aliases: ['p:uauuu:31Dec2024']
        }, {
          denom: 'pAUUU31Dec2024',
          exponent: 6
        }],
      base: 'ibc/793188818EE048028A2CCAF4ACD1684D25737280F0C9DFD4B7B44AD467B2FC26',
      name: 'pAuuu (31Dec2024)',
      display: 'pAUUU31Dec2024',
      symbol: 'pAUUU-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uauuu:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/A7ED0773A24B90828587A35971EA9805BCAAC0952E4E28B2619359F15E55374B',
          exponent: 0,
          aliases: ['p:uauuu:30Jun2025']
        }, {
          denom: 'pAUUU30Jun2025',
          exponent: 6
        }],
      base: 'ibc/A7ED0773A24B90828587A35971EA9805BCAAC0952E4E28B2619359F15E55374B',
      name: 'pAuuu (30Jun2025)',
      display: 'pAUUU30Jun2025',
      symbol: 'pAUUU-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uauuu:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/F6F7567929696075CDE4EB2089F11D290DA007E9D1BCAB6FEDFFA5E703025537',
          exponent: 0,
          aliases: ['p:uauuu:31Dec2025']
        }, {
          denom: 'pAUUU31Dec2025',
          exponent: 6
        }],
      base: 'ibc/F6F7567929696075CDE4EB2089F11D290DA007E9D1BCAB6FEDFFA5E703025537',
      name: 'pAuuu (31Dec2025)',
      display: 'pAUUU31Dec2025',
      symbol: 'pAUUU-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uauuu:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/8ED00ABB49BFA4B65C4D3499A594B0052595969D5E85AFB51BC2DC0A611392BC',
          exponent: 0,
          aliases: ['p:uauuu:31Dec2026']
        }, {
          denom: 'pAUUU31Dec2026',
          exponent: 6
        }],
      base: 'ibc/8ED00ABB49BFA4B65C4D3499A594B0052595969D5E85AFB51BC2DC0A611392BC',
      name: 'pAuuu (31Dec2026)',
      display: 'pAUUU31Dec2026',
      symbol: 'pAUUU-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uauuu:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/2BB5606AB84D26B17607B43CF44A1C4F11DFF9D6BB19693D9CCFEFA99ABDB87F',
          exponent: 0,
          aliases: ['p:stutia:30Sep2024']
        }, {
          denom: 'pstTIA30Sep2024',
          exponent: 6
        }],
      base: 'ibc/2BB5606AB84D26B17607B43CF44A1C4F11DFF9D6BB19693D9CCFEFA99ABDB87F',
      name: 'pstTia (30Sep2024)',
      display: 'pstTIA30Sep2024',
      symbol: 'pstTIA-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:stutia:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/4875E15E5944C6A69D6B3CD2AC2C6E86082DC6880CF8048EB781D128F614AEBD',
          exponent: 0,
          aliases: ['p:stutia:31Dec2024']
        }, {
          denom: 'pstTIA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/4875E15E5944C6A69D6B3CD2AC2C6E86082DC6880CF8048EB781D128F614AEBD',
      name: 'pstTia (31Dec2024)',
      display: 'pstTIA31Dec2024',
      symbol: 'pstTIA-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:stutia:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/180F84B7FBFC1A3A88D4F95DED01D624250A67970E443E79D50A1A66CCBD35FA',
          exponent: 0,
          aliases: ['p:stutia:31Mar2025']
        }, {
          denom: 'pstTIA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/180F84B7FBFC1A3A88D4F95DED01D624250A67970E443E79D50A1A66CCBD35FA',
      name: 'pstTia (31Mar2025)',
      display: 'pstTIA31Mar2025',
      symbol: 'pstTIA-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:stutia:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/7ED67613EAA04800D81D192119F5433D09FE9F9FC8F62F235A4034A009A88858',
          exponent: 0,
          aliases: ['p:stutia:30Jun2025']
        }, {
          denom: 'pstTIA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/7ED67613EAA04800D81D192119F5433D09FE9F9FC8F62F235A4034A009A88858',
      name: 'pstTia (30Jun2025)',
      display: 'pstTIA30Jun2025',
      symbol: 'pstTIA-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:stutia:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/AC726C2701584C97967EBF7CECF70B6AC58DF837E41E20D7C911EE5B72300B84',
          exponent: 0,
          aliases: ['p:stutia:31Dec2025']
        }, {
          denom: 'pstTIA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/AC726C2701584C97967EBF7CECF70B6AC58DF837E41E20D7C911EE5B72300B84',
      name: 'pstTia (31Dec2025)',
      display: 'pstTIA31Dec2025',
      symbol: 'pstTIA-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:stutia:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/859D551CE0ED1CD7A91E92518C7F30172246A43ECEF8501DCF1E95E5A0FB3ACF',
          exponent: 0,
          aliases: ['p:stutia:31Dec2026']
        }, {
          denom: 'pstTIA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/859D551CE0ED1CD7A91E92518C7F30172246A43ECEF8501DCF1E95E5A0FB3ACF',
      name: 'pstTia (31Dec2026)',
      display: 'pstTIA31Dec2026',
      symbol: 'pstTIA-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:stutia:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/B31F4F9480097DF1525CFED602D96661E9D46F906E3FF21C14BFF5FD8F9AA268',
          exponent: 0,
          aliases: ['p:stadydx:30Sep2024']
        }, {
          denom: 'pstDYDX30Sep2024',
          exponent: 18
        }],
      base: 'ibc/B31F4F9480097DF1525CFED602D96661E9D46F906E3FF21C14BFF5FD8F9AA268',
      name: 'pstDydx (30Sep2024)',
      display: 'pstDYDX30Sep2024',
      symbol: 'pstDYDX-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:stadydx:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/5028FFAD0FB521E0D2A351698377A2BA8523E9971B0A48A18270439E0B50718A',
          exponent: 0,
          aliases: ['p:stadydx:31Dec2024']
        }, {
          denom: 'pstDYDX31Dec2024',
          exponent: 18
        }],
      base: 'ibc/5028FFAD0FB521E0D2A351698377A2BA8523E9971B0A48A18270439E0B50718A',
      name: 'pstDydx (31Dec2024)',
      display: 'pstDYDX31Dec2024',
      symbol: 'pstDYDX-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:stadydx:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/C89B6218E66AFD2D82E88A22CE01283D3D9518FFFDDA1C0E25EED72BA30B69A1',
          exponent: 0,
          aliases: ['p:stadydx:31Mar2025']
        }, {
          denom: 'pstDYDX31Mar2025',
          exponent: 18
        }],
      base: 'ibc/C89B6218E66AFD2D82E88A22CE01283D3D9518FFFDDA1C0E25EED72BA30B69A1',
      name: 'pstDydx (31Mar2025)',
      display: 'pstDYDX31Mar2025',
      symbol: 'pstDYDX-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:stadydx:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/F9207826BEE70C8B4982FB0B88393F0E919D81C1B0FF1043898AFB581726CCAA',
          exponent: 0,
          aliases: ['p:stadydx:30Jun2025']
        }, {
          denom: 'pstDYDX30Jun2025',
          exponent: 18
        }],
      base: 'ibc/F9207826BEE70C8B4982FB0B88393F0E919D81C1B0FF1043898AFB581726CCAA',
      name: 'pstDydx (30Jun2025)',
      display: 'pstDYDX30Jun2025',
      symbol: 'pstDYDX-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:stadydx:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/26DD3C1B83CBB9CB5A251622AEA148DAF8EDAA1783AC4BDC3189B499DF989715',
          exponent: 0,
          aliases: ['p:stadydx:31Dec2025']
        }, {
          denom: 'pstDYDX31Dec2025',
          exponent: 18
        }],
      base: 'ibc/26DD3C1B83CBB9CB5A251622AEA148DAF8EDAA1783AC4BDC3189B499DF989715',
      name: 'pstDydx (31Dec2025)',
      display: 'pstDYDX31Dec2025',
      symbol: 'pstDYDX-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:stadydx:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/A6C8BC244141FE94FECCDA131B08DAC712719E5C44ADDCEA348EB490C39D3E6D',
          exponent: 0,
          aliases: ['p:stadydx:31Dec2026']
        }, {
          denom: 'pstDYDX31Dec2026',
          exponent: 18
        }],
      base: 'ibc/A6C8BC244141FE94FECCDA131B08DAC712719E5C44ADDCEA348EB490C39D3E6D',
      name: 'pstDydx (31Dec2026)',
      display: 'pstDYDX31Dec2026',
      symbol: 'pstDYDX-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:stadydx:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/BC52BD4463DE970632DE7C324525ED8DDC8FD22BF19A65C984B80FF5EC30AABF',
          exponent: 0,
          aliases: ['p:udatom:31Dec2024']
        }, {
          denom: 'pdATOM31Dec2024',
          exponent: 6
        }],
      base: 'ibc/BC52BD4463DE970632DE7C324525ED8DDC8FD22BF19A65C984B80FF5EC30AABF',
      name: 'pdAtom (31Dec2024)',
      display: 'pdATOM31Dec2024',
      symbol: 'pdATOM-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:udatom:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/2D71D57545F3D462718C55EA04A8F339030131FC4921D3EFB957662C3098088E',
          exponent: 0,
          aliases: ['p:udatom:31Mar2025']
        }, {
          denom: 'pdATOM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/2D71D57545F3D462718C55EA04A8F339030131FC4921D3EFB957662C3098088E',
      name: 'pdAtom (31Mar2025)',
      display: 'pdATOM31Mar2025',
      symbol: 'pdATOM-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:udatom:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/A8872A1901A6A4DD7575CED4A1CF3EEBC51FD8C234871147C4C8E19162C8FA9C',
          exponent: 0,
          aliases: ['p:udatom:30Jun2025']
        }, {
          denom: 'pdATOM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/A8872A1901A6A4DD7575CED4A1CF3EEBC51FD8C234871147C4C8E19162C8FA9C',
      name: 'pdAtom (30Jun2025)',
      display: 'pdATOM30Jun2025',
      symbol: 'pdATOM-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:udatom:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/291E5E4134681794575927149ED8861C3E579D25A962061BF5AD11EBF7A69D80',
          exponent: 0,
          aliases: ['p:udatom:31Dec2025']
        }, {
          denom: 'pdATOM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/291E5E4134681794575927149ED8861C3E579D25A962061BF5AD11EBF7A69D80',
      name: 'pdAtom (31Dec2025)',
      display: 'pdATOM31Dec2025',
      symbol: 'pdATOM-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:udatom:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/CB3B0AA000288C5576F5352E16949273F7FBAA243BA6ADA07A625ED796CD0AB2',
          exponent: 0,
          aliases: ['p:udatom:31Dec2026']
        }, {
          denom: 'pdATOM31Dec2026',
          exponent: 6
        }],
      base: 'ibc/CB3B0AA000288C5576F5352E16949273F7FBAA243BA6ADA07A625ED796CD0AB2',
      name: 'pdAtom (31Dec2026)',
      display: 'pdATOM31Dec2026',
      symbol: 'pdATOM-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:udatom:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/DF4050B9251168C5863B2F38A47F7A25E41E29DCF81E13173D27298E2F046B6C',
          exponent: 0,
          aliases: ['p:utia:31Dec2024']
        }, {
          denom: 'pTIA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/DF4050B9251168C5863B2F38A47F7A25E41E29DCF81E13173D27298E2F046B6C',
      name: 'pTia (31Dec2024)',
      display: 'pTIA31Dec2024',
      symbol: 'pTIA-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:utia:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/FCBE19BF79E1FCC786C7DA660FB7EB13295962319F6A403917E65295CADF3794',
          exponent: 0,
          aliases: ['p:utia:31Mar2025']
        }, {
          denom: 'pTIA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/FCBE19BF79E1FCC786C7DA660FB7EB13295962319F6A403917E65295CADF3794',
      name: 'pTia (31Mar2025)',
      display: 'pTIA31Mar2025',
      symbol: 'pTIA-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:utia:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/E2168B93EAF9586CF87258BC1911082A47553D25B9B13E9E55A403BF56EC5207',
          exponent: 0,
          aliases: ['p:utia:30Jun2025']
        }, {
          denom: 'pTIA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/E2168B93EAF9586CF87258BC1911082A47553D25B9B13E9E55A403BF56EC5207',
      name: 'pTia (30Jun2025)',
      display: 'pTIA30Jun2025',
      symbol: 'pTIA-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:utia:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/C7BCF2DB4609EF8D3C308C8B44AA096CDD7C7E3492876FC7DA62F2CC07418AA9',
          exponent: 0,
          aliases: ['p:utia:30Sep2025']
        }, {
          denom: 'pTIA30Sep2025',
          exponent: 6
        }],
      base: 'ibc/C7BCF2DB4609EF8D3C308C8B44AA096CDD7C7E3492876FC7DA62F2CC07418AA9',
      name: 'pTia (30Sep2025)',
      display: 'pTIA30Sep2025',
      symbol: 'pTIA-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:utia:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/AD14F62088169B7CF8BBBA2266A841F716B296C8A3BEB71115B17ABAE63D7F9E',
          exponent: 0,
          aliases: ['p:utia:31Dec2025']
        }, {
          denom: 'pTIA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/AD14F62088169B7CF8BBBA2266A841F716B296C8A3BEB71115B17ABAE63D7F9E',
      name: 'pTia (31Dec2025)',
      display: 'pTIA31Dec2025',
      symbol: 'pTIA-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:utia:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/E0F2D01748C6F70B04DAC865BB00C0839E7C7A2F85F652A169D09DB63C53A07A',
          exponent: 0,
          aliases: ['p:utia:31Dec2026']
        }, {
          denom: 'pTIA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/E0F2D01748C6F70B04DAC865BB00C0839E7C7A2F85F652A169D09DB63C53A07A',
      name: 'pTia (31Dec2026)',
      display: 'pTIA31Dec2026',
      symbol: 'pTIA-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:utia:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/E8C1CB98D70302542EE71B35D7479033462E9956A715E7F48AFA9127062504D4',
          exponent: 0,
          aliases: ['p:ausdy:31Mar2025']
        }, {
          denom: 'pUSDY31Mar2025',
          exponent: 18
        }],
      base: 'ibc/E8C1CB98D70302542EE71B35D7479033462E9956A715E7F48AFA9127062504D4',
      name: 'pUsdy (31Mar2025)',
      display: 'pUSDY31Mar2025',
      symbol: 'pUSDY-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:ausdy:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/6418A98C0F01FE7316EF349ADBEAFA1AA51126FCB45110A0233C3D9C420C5693',
          exponent: 0,
          aliases: ['p:ausdy:30Jun2025']
        }, {
          denom: 'pUSDY30Jun2025',
          exponent: 18
        }],
      base: 'ibc/6418A98C0F01FE7316EF349ADBEAFA1AA51126FCB45110A0233C3D9C420C5693',
      name: 'pUsdy (30Jun2025)',
      display: 'pUSDY30Jun2025',
      symbol: 'pUSDY-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:ausdy:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/6CDC9E6D25DDCD7D72216FD182C29CF3BFCB9FCB5898F2E64AF3CA453C3659FF',
          exponent: 0,
          aliases: ['p:ausdy:30Sep2025']
        }, {
          denom: 'pUSDY30Sep2025',
          exponent: 18
        }],
      base: 'ibc/6CDC9E6D25DDCD7D72216FD182C29CF3BFCB9FCB5898F2E64AF3CA453C3659FF',
      name: 'pUsdy (30Sep2025)',
      display: 'pUSDY30Sep2025',
      symbol: 'pUSDY-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:ausdy:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/97725E4470CB14F483468DE3681B865DB5C9D97E343BE318B594F59CB65EB4CE',
          exponent: 0,
          aliases: ['p:ausdy:31Dec2025']
        }, {
          denom: 'pUSDY31Dec2025',
          exponent: 18
        }],
      base: 'ibc/97725E4470CB14F483468DE3681B865DB5C9D97E343BE318B594F59CB65EB4CE',
      name: 'pUsdy (31Dec2025)',
      display: 'pUSDY31Dec2025',
      symbol: 'pUSDY-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:ausdy:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/F040FB61DC0C3FA22E0D2863B1645741420246F8CB8010C8CDAD602CFAECB6ED',
          exponent: 0,
          aliases: ['p:ausdy:31Mar2026']
        }, {
          denom: 'pUSDY31Mar2026',
          exponent: 18
        }],
      base: 'ibc/F040FB61DC0C3FA22E0D2863B1645741420246F8CB8010C8CDAD602CFAECB6ED',
      name: 'pUsdy (31Mar2026)',
      display: 'pUSDY31Mar2026',
      symbol: 'pUSDY-31Mar2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:ausdy:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/0A5B37AA5A000BA72A5E18E1850E1C87A719333FB64E50957E338BAC40645B3A',
          exponent: 0,
          aliases: ['p:ausdy:30Jun2026']
        }, {
          denom: 'pUSDY30Jun2026',
          exponent: 18
        }],
      base: 'ibc/0A5B37AA5A000BA72A5E18E1850E1C87A719333FB64E50957E338BAC40645B3A',
      name: 'pUsdy (30Jun2026)',
      display: 'pUSDY30Jun2026',
      symbol: 'pUSDY-30Jun2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:ausdy:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/14AE2E60793DA1C1344EFB4E726BBECEEBE14CB43B1112CA8C9ED596F580676F',
          exponent: 0,
          aliases: ['p:upryzm:31Mar2025']
        }, {
          denom: 'pPRYZM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/14AE2E60793DA1C1344EFB4E726BBECEEBE14CB43B1112CA8C9ED596F580676F',
      name: 'pPryzm (31Mar2025)',
      display: 'pPRYZM31Mar2025',
      symbol: 'pPRYZM-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:upryzm:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/19C591A899376AC88D9EBA046CCC1D6B09518AE369625AE9B23AC15D45113483',
          exponent: 0,
          aliases: ['p:upryzm:30Jun2025']
        }, {
          denom: 'pPRYZM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/19C591A899376AC88D9EBA046CCC1D6B09518AE369625AE9B23AC15D45113483',
      name: 'pPryzm (30Jun2025)',
      display: 'pPRYZM30Jun2025',
      symbol: 'pPRYZM-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:upryzm:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/035FC22716E2434D514F195C10F4533BA0B35DA41555543EB45CB5B1F2CC9D0C',
          exponent: 0,
          aliases: ['p:upryzm:30Sep2025']
        }, {
          denom: 'pPRYZM30Sep2025',
          exponent: 6
        }],
      base: 'ibc/035FC22716E2434D514F195C10F4533BA0B35DA41555543EB45CB5B1F2CC9D0C',
      name: 'pPryzm (30Sep2025)',
      display: 'pPRYZM30Sep2025',
      symbol: 'pPRYZM-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:upryzm:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/2971F1B51EF1380A75C15F7BAF5F46D889B60C1CED59AA43B4149A0D654FC90B',
          exponent: 0,
          aliases: ['p:upryzm:31Dec2025']
        }, {
          denom: 'pPRYZM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/2971F1B51EF1380A75C15F7BAF5F46D889B60C1CED59AA43B4149A0D654FC90B',
      name: 'pPryzm (31Dec2025)',
      display: 'pPRYZM31Dec2025',
      symbol: 'pPRYZM-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:upryzm:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/24B77D3C9E9D9C4DF438ABD72C1BE844DB093D1D933F348B1333E4B901F7E78B',
          exponent: 0,
          aliases: ['p:upryzm:31Mar2026']
        }, {
          denom: 'pPRYZM31Mar2026',
          exponent: 6
        }],
      base: 'ibc/24B77D3C9E9D9C4DF438ABD72C1BE844DB093D1D933F348B1333E4B901F7E78B',
      name: 'pPryzm (31Mar2026)',
      display: 'pPRYZM31Mar2026',
      symbol: 'pPRYZM-31Mar2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:upryzm:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/24EFAD2EDE18C60E2AAB8736D527F2EE13D509F74C925B34ECA4C8706F0D4D7B',
          exponent: 0,
          aliases: ['p:upryzm:30Jun2026']
        }, {
          denom: 'pPRYZM30Jun2026',
          exponent: 6
        }],
      base: 'ibc/24EFAD2EDE18C60E2AAB8736D527F2EE13D509F74C925B34ECA4C8706F0D4D7B',
      name: 'pPryzm (30Jun2026)',
      display: 'pPRYZM30Jun2026',
      symbol: 'pPRYZM-30Jun2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:upryzm:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for sUSDS with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/5B4100AE8EB731C3E1BDC9A6D88EEC5FB0DB7008E4E463B435B42AF6FCC1D1FC',
          exponent: 0,
          aliases: ['p:asusds:30Jun2025']
        }, {
          denom: 'psUSDS30Jun2025',
          exponent: 18
        }],
      base: 'ibc/5B4100AE8EB731C3E1BDC9A6D88EEC5FB0DB7008E4E463B435B42AF6FCC1D1FC',
      name: 'psUsds (30Jun2025)',
      display: 'psUSDS30Jun2025',
      symbol: 'psUSDS-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:asusds:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for sUSDS with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/056A2B1BA87702B162FE6AF08ED152898D2954D5BF712442BB8EB7B96986FE1A',
          exponent: 0,
          aliases: ['p:asusds:30Sep2025']
        }, {
          denom: 'psUSDS30Sep2025',
          exponent: 18
        }],
      base: 'ibc/056A2B1BA87702B162FE6AF08ED152898D2954D5BF712442BB8EB7B96986FE1A',
      name: 'psUsds (30Sep2025)',
      display: 'psUSDS30Sep2025',
      symbol: 'psUSDS-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:asusds:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for sUSDS with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/480DB918F0B9C8CCA8FA3E89437F3F628CD1A88FE83900CF452037D38FB2F8BE',
          exponent: 0,
          aliases: ['p:asusds:31Dec2025']
        }, {
          denom: 'psUSDS31Dec2025',
          exponent: 18
        }],
      base: 'ibc/480DB918F0B9C8CCA8FA3E89437F3F628CD1A88FE83900CF452037D38FB2F8BE',
      name: 'psUsds (31Dec2025)',
      display: 'psUSDS31Dec2025',
      symbol: 'psUSDS-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:asusds:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for sUSDS with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/4F86DE0444D5F01C39419E0529462BA222BFCFF76F701B5795421189A56F656A',
          exponent: 0,
          aliases: ['p:asusds:31Mar2026']
        }, {
          denom: 'psUSDS31Mar2026',
          exponent: 18
        }],
      base: 'ibc/4F86DE0444D5F01C39419E0529462BA222BFCFF76F701B5795421189A56F656A',
      name: 'psUsds (31Mar2026)',
      display: 'psUSDS31Mar2026',
      symbol: 'psUSDS-31Mar2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:asusds:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for sUSDS with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/7E5FE427BBBF5374035181052DE780AE8A4F42E2F968C1CD4E730A17ADBD2FDB',
          exponent: 0,
          aliases: ['p:asusds:30Jun2026']
        }, {
          denom: 'psUSDS30Jun2026',
          exponent: 18
        }],
      base: 'ibc/7E5FE427BBBF5374035181052DE780AE8A4F42E2F968C1CD4E730A17ADBD2FDB',
      name: 'psUsds (30Jun2026)',
      display: 'psUSDS30Jun2026',
      symbol: 'psUSDS-30Jun2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:asusds:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for mBTC with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/77612007B421592D4D53F42D0FD71D96216F928483C9F47D2D3AAAF09AF6CE9B',
          exponent: 0,
          aliases: ['p:ambtc:30Sep2025']
        }, {
          denom: 'pmBTC30Sep2025',
          exponent: 18
        }],
      base: 'ibc/77612007B421592D4D53F42D0FD71D96216F928483C9F47D2D3AAAF09AF6CE9B',
      name: 'pmBTC (30Sep2025)',
      display: 'pmBTC30Sep2025',
      symbol: 'pmBTC-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pmBTC.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pmBTC.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pmBTC.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pmBTC.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:ambtc:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for mBTC with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/890F552E861BA4F0C9520BA55CA249DC8F2CD48B479A61D576588598AE8050FE',
          exponent: 0,
          aliases: ['p:ambtc:31Dec2025']
        }, {
          denom: 'pmBTC31Dec2025',
          exponent: 18
        }],
      base: 'ibc/890F552E861BA4F0C9520BA55CA249DC8F2CD48B479A61D576588598AE8050FE',
      name: 'pmBTC (31Dec2025)',
      display: 'pmBTC31Dec2025',
      symbol: 'pmBTC-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pmBTC.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pmBTC.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pmBTC.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pmBTC.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:ambtc:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for mBTC with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/8321AD47BA224466743DB3EBC6EB5C25D6C37F6DCAC44C646EB21B5939D42254',
          exponent: 0,
          aliases: ['p:ambtc:31Mar2026']
        }, {
          denom: 'pmBTC31Mar2026',
          exponent: 18
        }],
      base: 'ibc/8321AD47BA224466743DB3EBC6EB5C25D6C37F6DCAC44C646EB21B5939D42254',
      name: 'pmBTC (31Mar2026)',
      display: 'pmBTC31Mar2026',
      symbol: 'pmBTC-31Mar2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pmBTC.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pmBTC.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pmBTC.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pmBTC.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:ambtc:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for mBTC with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/EFC5988D566565349EF27F93D7620050CEF2A15ABAD0D69E413545C2B6A6181B',
          exponent: 0,
          aliases: ['p:ambtc:30Jun2026']
        }, {
          denom: 'pmBTC30Jun2026',
          exponent: 18
        }],
      base: 'ibc/EFC5988D566565349EF27F93D7620050CEF2A15ABAD0D69E413545C2B6A6181B',
      name: 'pmBTC (30Jun2026)',
      display: 'pmBTC30Jun2026',
      symbol: 'pmBTC-30Jun2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pmBTC.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pmBTC.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pmBTC.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pmBTC.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:ambtc:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/3BFA0B28E6E53FF48481996CEED90695D3C489A75D687AD8C11AC98D64D69AEC',
          exponent: 0,
          aliases: ['y:uatom:30Sep2024']
        }, {
          denom: 'yATOM30Sep2024',
          exponent: 6
        }],
      base: 'ibc/3BFA0B28E6E53FF48481996CEED90695D3C489A75D687AD8C11AC98D64D69AEC',
      name: 'yAtom (30Sep2024)',
      display: 'yATOM30Sep2024',
      symbol: 'yATOM-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uatom:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/620B8AAE42472D6FBA98046803CBD79A9FF23F15329D22A95727865EDAA3AD0A',
          exponent: 0,
          aliases: ['y:uatom:31Dec2024']
        }, {
          denom: 'yATOM31Dec2024',
          exponent: 6
        }],
      base: 'ibc/620B8AAE42472D6FBA98046803CBD79A9FF23F15329D22A95727865EDAA3AD0A',
      name: 'yAtom (31Dec2024)',
      display: 'yATOM31Dec2024',
      symbol: 'yATOM-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uatom:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/7D33A0D8A76858A170F685D82D9DE1714E5C24F5D465941A0A04FB09D2DF0FA2',
          exponent: 0,
          aliases: ['y:uatom:31Mar2025']
        }, {
          denom: 'yATOM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/7D33A0D8A76858A170F685D82D9DE1714E5C24F5D465941A0A04FB09D2DF0FA2',
      name: 'yAtom (31Mar2025)',
      display: 'yATOM31Mar2025',
      symbol: 'yATOM-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uatom:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/9E29726AD5DD1E84EC69767C6BC29020929CB8E6D2DC4EB6FCB9C9EFB9010E31',
          exponent: 0,
          aliases: ['y:uatom:30Jun2025']
        }, {
          denom: 'yATOM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/9E29726AD5DD1E84EC69767C6BC29020929CB8E6D2DC4EB6FCB9C9EFB9010E31',
      name: 'yAtom (30Jun2025)',
      display: 'yATOM30Jun2025',
      symbol: 'yATOM-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uatom:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/14A2C276796B1BEA219300185635F39A45B10672219740718C0DDF5CF1E8DE91',
          exponent: 0,
          aliases: ['y:uatom:30Sep2025']
        }, {
          denom: 'yATOM30Sep2025',
          exponent: 6
        }],
      base: 'ibc/14A2C276796B1BEA219300185635F39A45B10672219740718C0DDF5CF1E8DE91',
      name: 'yAtom (30Sep2025)',
      display: 'yATOM30Sep2025',
      symbol: 'yATOM-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uatom:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/0A1E478AAE80006AD9410D8A87030017919D59353EE9E27FB2B9242AF5654145',
          exponent: 0,
          aliases: ['y:uatom:31Dec2025']
        }, {
          denom: 'yATOM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/0A1E478AAE80006AD9410D8A87030017919D59353EE9E27FB2B9242AF5654145',
      name: 'yAtom (31Dec2025)',
      display: 'yATOM31Dec2025',
      symbol: 'yATOM-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uatom:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/7399B54407A785130792A0A938C2DCA93AB652EF60F22D5FA2B225DA5CDCB856',
          exponent: 0,
          aliases: ['y:uatom:31Dec2026']
        }, {
          denom: 'yATOM31Dec2026',
          exponent: 6
        }],
      base: 'ibc/7399B54407A785130792A0A938C2DCA93AB652EF60F22D5FA2B225DA5CDCB856',
      name: 'yAtom (31Dec2026)',
      display: 'yATOM31Dec2026',
      symbol: 'yATOM-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uatom:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/7460850991B5A6AA851F5E52E911A8C6AF981F8DC048ABF78736A8B0DE87793F',
          exponent: 0,
          aliases: ['y:uosmo:30Sep2024']
        }, {
          denom: 'yOSMO30Sep2024',
          exponent: 6
        }],
      base: 'ibc/7460850991B5A6AA851F5E52E911A8C6AF981F8DC048ABF78736A8B0DE87793F',
      name: 'yOsmo (30Sep2024)',
      display: 'yOSMO30Sep2024',
      symbol: 'yOSMO-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uosmo:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/F270A2C8A745353427D7FB42C2A83BBA7280043661D4624EF03C35758232D438',
          exponent: 0,
          aliases: ['y:uosmo:31Dec2024']
        }, {
          denom: 'yOSMO31Dec2024',
          exponent: 6
        }],
      base: 'ibc/F270A2C8A745353427D7FB42C2A83BBA7280043661D4624EF03C35758232D438',
      name: 'yOsmo (31Dec2024)',
      display: 'yOSMO31Dec2024',
      symbol: 'yOSMO-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uosmo:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/8AC42B33C9C524C10301517DDA6A9A54F83490D74F35FC856464F032A66EF1E3',
          exponent: 0,
          aliases: ['y:uosmo:31Mar2025']
        }, {
          denom: 'yOSMO31Mar2025',
          exponent: 6
        }],
      base: 'ibc/8AC42B33C9C524C10301517DDA6A9A54F83490D74F35FC856464F032A66EF1E3',
      name: 'yOsmo (31Mar2025)',
      display: 'yOSMO31Mar2025',
      symbol: 'yOSMO-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uosmo:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/86A42FB715EC79029618020DB38CEC2EB236F304EC95E0EF2249A8363FA570D5',
          exponent: 0,
          aliases: ['y:uosmo:30Jun2025']
        }, {
          denom: 'yOSMO30Jun2025',
          exponent: 6
        }],
      base: 'ibc/86A42FB715EC79029618020DB38CEC2EB236F304EC95E0EF2249A8363FA570D5',
      name: 'yOsmo (30Jun2025)',
      display: 'yOSMO30Jun2025',
      symbol: 'yOSMO-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uosmo:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/9E335FA59CC54EAE65F637A2E73E4806991087104B5E9AF3135292D149157B43',
          exponent: 0,
          aliases: ['y:uosmo:30Sep2025']
        }, {
          denom: 'yOSMO30Sep2025',
          exponent: 6
        }],
      base: 'ibc/9E335FA59CC54EAE65F637A2E73E4806991087104B5E9AF3135292D149157B43',
      name: 'yOsmo (30Sep2025)',
      display: 'yOSMO30Sep2025',
      symbol: 'yOSMO-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uosmo:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/3C359239D55309B23AD0FED776E161B4C03EFCD69568E847D2D24CD3D283252C',
          exponent: 0,
          aliases: ['y:uosmo:31Dec2025']
        }, {
          denom: 'yOSMO31Dec2025',
          exponent: 6
        }],
      base: 'ibc/3C359239D55309B23AD0FED776E161B4C03EFCD69568E847D2D24CD3D283252C',
      name: 'yOsmo (31Dec2025)',
      display: 'yOSMO31Dec2025',
      symbol: 'yOSMO-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uosmo:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/BA33A75124CF1116E047DD73E2CE3A680B01B97D90B1096387703B303D51EC0F',
          exponent: 0,
          aliases: ['y:uosmo:31Dec2026']
        }, {
          denom: 'yOSMO31Dec2026',
          exponent: 6
        }],
      base: 'ibc/BA33A75124CF1116E047DD73E2CE3A680B01B97D90B1096387703B303D51EC0F',
      name: 'yOsmo (31Dec2026)',
      display: 'yOSMO31Dec2026',
      symbol: 'yOSMO-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uosmo:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/27690FC955AA09922AAD1EC47A9E28B9AEC20E54D4E225E2301CC7AA9B6A03F9',
          exponent: 0,
          aliases: ['y:inj:30Sep2024']
        }, {
          denom: 'yINJ30Sep2024',
          exponent: 18
        }],
      base: 'ibc/27690FC955AA09922AAD1EC47A9E28B9AEC20E54D4E225E2301CC7AA9B6A03F9',
      name: 'yInj (30Sep2024)',
      display: 'yINJ30Sep2024',
      symbol: 'yINJ-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:inj:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/FFB8C6C3BF7CC7E0D2B8CC4464840281A8695DC4D538CFBFA196C980B597482E',
          exponent: 0,
          aliases: ['y:inj:31Dec2024']
        }, {
          denom: 'yINJ31Dec2024',
          exponent: 18
        }],
      base: 'ibc/FFB8C6C3BF7CC7E0D2B8CC4464840281A8695DC4D538CFBFA196C980B597482E',
      name: 'yInj (31Dec2024)',
      display: 'yINJ31Dec2024',
      symbol: 'yINJ-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:inj:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/8D15961B5C877AB9544AA0B2A7F01F05360760C3D7FF835DC5D7471A9C73E6BE',
          exponent: 0,
          aliases: ['y:inj:31Mar2025']
        }, {
          denom: 'yINJ31Mar2025',
          exponent: 18
        }],
      base: 'ibc/8D15961B5C877AB9544AA0B2A7F01F05360760C3D7FF835DC5D7471A9C73E6BE',
      name: 'yInj (31Mar2025)',
      display: 'yINJ31Mar2025',
      symbol: 'yINJ-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:inj:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/A3E3D87C9229DDA36A55D0947043B9D31CA437AFAA5E699A764DAAFB072CB0BB',
          exponent: 0,
          aliases: ['y:inj:30Jun2025']
        }, {
          denom: 'yINJ30Jun2025',
          exponent: 18
        }],
      base: 'ibc/A3E3D87C9229DDA36A55D0947043B9D31CA437AFAA5E699A764DAAFB072CB0BB',
      name: 'yInj (30Jun2025)',
      display: 'yINJ30Jun2025',
      symbol: 'yINJ-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:inj:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/70B194C202DD7EEBB1110138C0821D3A93D626CB6B9775BBA1D2C5106A35802D',
          exponent: 0,
          aliases: ['y:inj:30Sep2025']
        }, {
          denom: 'yINJ30Sep2025',
          exponent: 18
        }],
      base: 'ibc/70B194C202DD7EEBB1110138C0821D3A93D626CB6B9775BBA1D2C5106A35802D',
      name: 'yInj (30Sep2025)',
      display: 'yINJ30Sep2025',
      symbol: 'yINJ-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:inj:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/042F15E0588EAFA308A9EA26A4FA2B7BFAF95771A44D2AF7A3488C120946B0A3',
          exponent: 0,
          aliases: ['y:inj:31Dec2025']
        }, {
          denom: 'yINJ31Dec2025',
          exponent: 18
        }],
      base: 'ibc/042F15E0588EAFA308A9EA26A4FA2B7BFAF95771A44D2AF7A3488C120946B0A3',
      name: 'yInj (31Dec2025)',
      display: 'yINJ31Dec2025',
      symbol: 'yINJ-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:inj:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/48926A2B07E185D89AF0AEA113DE6BBBEC4515B7E2A3A6A8ED9C4ABB982ED19C',
          exponent: 0,
          aliases: ['y:inj:31Dec2026']
        }, {
          denom: 'yINJ31Dec2026',
          exponent: 18
        }],
      base: 'ibc/48926A2B07E185D89AF0AEA113DE6BBBEC4515B7E2A3A6A8ED9C4ABB982ED19C',
      name: 'yInj (31Dec2026)',
      display: 'yINJ31Dec2026',
      symbol: 'yINJ-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:inj:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/71F519134EA436DAC96380990DFCD0A5CBBD47914F23942E8C37F84510401FE8',
          exponent: 0,
          aliases: ['y:uluna:30Sep2024']
        }, {
          denom: 'yLUNA30Sep2024',
          exponent: 6
        }],
      base: 'ibc/71F519134EA436DAC96380990DFCD0A5CBBD47914F23942E8C37F84510401FE8',
      name: 'yLuna (30Sep2024)',
      display: 'yLUNA30Sep2024',
      symbol: 'yLUNA-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uluna:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/2712058BFBA04B5C497A41208DD5DBB1371B2F192A1804E09BC43465A54124E8',
          exponent: 0,
          aliases: ['y:uluna:31Dec2024']
        }, {
          denom: 'yLUNA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/2712058BFBA04B5C497A41208DD5DBB1371B2F192A1804E09BC43465A54124E8',
      name: 'yLuna (31Dec2024)',
      display: 'yLUNA31Dec2024',
      symbol: 'yLUNA-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uluna:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/BCF8B0B61502B28957362E44FA45290D2791E29292E37C61D4CD8E3B4D675161',
          exponent: 0,
          aliases: ['y:uluna:31Mar2025']
        }, {
          denom: 'yLUNA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/BCF8B0B61502B28957362E44FA45290D2791E29292E37C61D4CD8E3B4D675161',
      name: 'yLuna (31Mar2025)',
      display: 'yLUNA31Mar2025',
      symbol: 'yLUNA-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uluna:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/D280753D2127FD90937823659667C8085C2E23A9BB2C355DA53C2AD20A395992',
          exponent: 0,
          aliases: ['y:uluna:30Jun2025']
        }, {
          denom: 'yLUNA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/D280753D2127FD90937823659667C8085C2E23A9BB2C355DA53C2AD20A395992',
      name: 'yLuna (30Jun2025)',
      display: 'yLUNA30Jun2025',
      symbol: 'yLUNA-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uluna:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/1B899D42D7231632BE799EB204091877E143DD6FDFE8B27F3053F17654527F1B',
          exponent: 0,
          aliases: ['y:uluna:30Sep2025']
        }, {
          denom: 'yLUNA30Sep2025',
          exponent: 6
        }],
      base: 'ibc/1B899D42D7231632BE799EB204091877E143DD6FDFE8B27F3053F17654527F1B',
      name: 'yLuna (30Sep2025)',
      display: 'yLUNA30Sep2025',
      symbol: 'yLUNA-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uluna:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/66BB6306859CCE7744713A9420C8F1785EE54826AF7A7BFE691E50BA5259E793',
          exponent: 0,
          aliases: ['y:uluna:31Dec2025']
        }, {
          denom: 'yLUNA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/66BB6306859CCE7744713A9420C8F1785EE54826AF7A7BFE691E50BA5259E793',
      name: 'yLuna (31Dec2025)',
      display: 'yLUNA31Dec2025',
      symbol: 'yLUNA-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uluna:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/375A972A45A4AE87FEB39954973393A04745EFE5F3F988983ED77C4338A1AFAB',
          exponent: 0,
          aliases: ['y:uluna:31Dec2026']
        }, {
          denom: 'yLUNA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/375A972A45A4AE87FEB39954973393A04745EFE5F3F988983ED77C4338A1AFAB',
      name: 'yLuna (31Dec2026)',
      display: 'yLUNA31Dec2026',
      symbol: 'yLUNA-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uluna:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/CC53F9A762F206BD300520305CE2A33F53EDC511A43BB747D71B2EBD7F3E9FD8',
          exponent: 0,
          aliases: ['y:uauuu:30Sep2024']
        }, {
          denom: 'yAUUU30Sep2024',
          exponent: 6
        }],
      base: 'ibc/CC53F9A762F206BD300520305CE2A33F53EDC511A43BB747D71B2EBD7F3E9FD8',
      name: 'yAuuu (30Sep2024)',
      display: 'yAUUU30Sep2024',
      symbol: 'yAUUU-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uauuu:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/2567EF1879145E099ADC0CF09966443588075C1D1EB120D617A9E6C606CF9846',
          exponent: 0,
          aliases: ['y:uauuu:31Dec2024']
        }, {
          denom: 'yAUUU31Dec2024',
          exponent: 6
        }],
      base: 'ibc/2567EF1879145E099ADC0CF09966443588075C1D1EB120D617A9E6C606CF9846',
      name: 'yAuuu (31Dec2024)',
      display: 'yAUUU31Dec2024',
      symbol: 'yAUUU-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uauuu:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/C3BF55BE215AFC919F89AE59CE2232E36ED856A6D0DBC3A3A647EA99C199BCBE',
          exponent: 0,
          aliases: ['y:uauuu:30Jun2025']
        }, {
          denom: 'yAUUU30Jun2025',
          exponent: 6
        }],
      base: 'ibc/C3BF55BE215AFC919F89AE59CE2232E36ED856A6D0DBC3A3A647EA99C199BCBE',
      name: 'yAuuu (30Jun2025)',
      display: 'yAUUU30Jun2025',
      symbol: 'yAUUU-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uauuu:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/AEDA919BDFB855BA41195EF11FB0AC393716C696139F5D889CD9CF7686D34C62',
          exponent: 0,
          aliases: ['y:uauuu:31Dec2025']
        }, {
          denom: 'yAUUU31Dec2025',
          exponent: 6
        }],
      base: 'ibc/AEDA919BDFB855BA41195EF11FB0AC393716C696139F5D889CD9CF7686D34C62',
      name: 'yAuuu (31Dec2025)',
      display: 'yAUUU31Dec2025',
      symbol: 'yAUUU-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uauuu:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/4143884F9C8D1757FC955093C68A46E42DF912BEA241BE036986441CDFA5EE53',
          exponent: 0,
          aliases: ['y:uauuu:31Dec2026']
        }, {
          denom: 'yAUUU31Dec2026',
          exponent: 6
        }],
      base: 'ibc/4143884F9C8D1757FC955093C68A46E42DF912BEA241BE036986441CDFA5EE53',
      name: 'yAuuu (31Dec2026)',
      display: 'yAUUU31Dec2026',
      symbol: 'yAUUU-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uauuu:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/D744CBDAEC07BD19B408E57247DE938EC154C43964246C7979EE8068CA22A2D6',
          exponent: 0,
          aliases: ['y:stutia:30Sep2024']
        }, {
          denom: 'ystTIA30Sep2024',
          exponent: 6
        }],
      base: 'ibc/D744CBDAEC07BD19B408E57247DE938EC154C43964246C7979EE8068CA22A2D6',
      name: 'ystTia (30Sep2024)',
      display: 'ystTIA30Sep2024',
      symbol: 'ystTIA-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:stutia:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/F8EE7039C23931075CF30E4A15453172D3DBBE9F4D73740068BF56EDB2CBAF81',
          exponent: 0,
          aliases: ['y:stutia:31Dec2024']
        }, {
          denom: 'ystTIA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/F8EE7039C23931075CF30E4A15453172D3DBBE9F4D73740068BF56EDB2CBAF81',
      name: 'ystTia (31Dec2024)',
      display: 'ystTIA31Dec2024',
      symbol: 'ystTIA-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:stutia:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/1CB5970869F3473D111663DEAD3C0D231533A85E587211FD06844BBBCF94B174',
          exponent: 0,
          aliases: ['y:stutia:31Mar2025']
        }, {
          denom: 'ystTIA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/1CB5970869F3473D111663DEAD3C0D231533A85E587211FD06844BBBCF94B174',
      name: 'ystTia (31Mar2025)',
      display: 'ystTIA31Mar2025',
      symbol: 'ystTIA-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:stutia:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/46F5B1F0D228C331BA9FF81AED7103FA079AA21B62D0A5BBEB75572AF296299B',
          exponent: 0,
          aliases: ['y:stutia:30Jun2025']
        }, {
          denom: 'ystTIA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/46F5B1F0D228C331BA9FF81AED7103FA079AA21B62D0A5BBEB75572AF296299B',
      name: 'ystTia (30Jun2025)',
      display: 'ystTIA30Jun2025',
      symbol: 'ystTIA-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:stutia:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/0E7ADA540444269BB36E10F09549CAB979C4BF66246D90938786DE896BEEAA1A',
          exponent: 0,
          aliases: ['y:stutia:31Dec2025']
        }, {
          denom: 'ystTIA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/0E7ADA540444269BB36E10F09549CAB979C4BF66246D90938786DE896BEEAA1A',
      name: 'ystTia (31Dec2025)',
      display: 'ystTIA31Dec2025',
      symbol: 'ystTIA-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:stutia:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/2323B7C508E67D8BDFCB4A7C2301907DE96E9004A49326EC50409AF146E5E576',
          exponent: 0,
          aliases: ['y:stutia:31Dec2026']
        }, {
          denom: 'ystTIA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/2323B7C508E67D8BDFCB4A7C2301907DE96E9004A49326EC50409AF146E5E576',
      name: 'ystTia (31Dec2026)',
      display: 'ystTIA31Dec2026',
      symbol: 'ystTIA-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:stutia:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/2BAC8486094BD50917364AAB0B0B8337EB595D37473C32A0786E47564167B595',
          exponent: 0,
          aliases: ['y:stadydx:30Sep2024']
        }, {
          denom: 'ystDYDX30Sep2024',
          exponent: 18
        }],
      base: 'ibc/2BAC8486094BD50917364AAB0B0B8337EB595D37473C32A0786E47564167B595',
      name: 'ystDydx (30Sep2024)',
      display: 'ystDYDX30Sep2024',
      symbol: 'ystDYDX-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:stadydx:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/09B1411A90F145EF4742867332BED7AEEB854AF58AEE2165AF72CA3F0D89DAAB',
          exponent: 0,
          aliases: ['y:stadydx:31Dec2024']
        }, {
          denom: 'ystDYDX31Dec2024',
          exponent: 18
        }],
      base: 'ibc/09B1411A90F145EF4742867332BED7AEEB854AF58AEE2165AF72CA3F0D89DAAB',
      name: 'ystDydx (31Dec2024)',
      display: 'ystDYDX31Dec2024',
      symbol: 'ystDYDX-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:stadydx:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/A29931225B446AF3363AF534E866A01F35E3D324FF0778A5CF02EF44F005485C',
          exponent: 0,
          aliases: ['y:stadydx:31Mar2025']
        }, {
          denom: 'ystDYDX31Mar2025',
          exponent: 6
        }],
      base: 'ibc/A29931225B446AF3363AF534E866A01F35E3D324FF0778A5CF02EF44F005485C',
      name: 'ystDydx (31Mar2025)',
      display: 'ystDYDX31Mar2025',
      symbol: 'ystDYDX-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:stadydx:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/13FEDF8EFCD5220EB61762F50D20EF9CBB44960172FA380A088F180C413C4647',
          exponent: 0,
          aliases: ['y:stadydx:30Jun2025']
        }, {
          denom: 'ystDYDX30Jun2025',
          exponent: 6
        }],
      base: 'ibc/13FEDF8EFCD5220EB61762F50D20EF9CBB44960172FA380A088F180C413C4647',
      name: 'ystDydx (30Jun2025)',
      display: 'ystDYDX30Jun2025',
      symbol: 'ystDYDX-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:stadydx:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/FC0862A5864A7FF6230B5AA3F1BA6651F76C05607E9B86F7BDC842A8186B3627',
          exponent: 0,
          aliases: ['y:stadydx:31Dec2025']
        }, {
          denom: 'ystDYDX31Dec2025',
          exponent: 18
        }],
      base: 'ibc/FC0862A5864A7FF6230B5AA3F1BA6651F76C05607E9B86F7BDC842A8186B3627',
      name: 'ystDydx (31Dec2025)',
      display: 'ystDYDX31Dec2025',
      symbol: 'ystDYDX-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:stadydx:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/BF36E8FC358EDF00016A68B48198CD07E21B9080FDDCF27716907CB9FFA35926',
          exponent: 0,
          aliases: ['y:stadydx:31Dec2026']
        }, {
          denom: 'ystDYDX31Dec2026',
          exponent: 18
        }],
      base: 'ibc/BF36E8FC358EDF00016A68B48198CD07E21B9080FDDCF27716907CB9FFA35926',
      name: 'ystDydx (31Dec2026)',
      display: 'ystDYDX31Dec2026',
      symbol: 'ystDYDX-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:stadydx:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/E6A9907D3475A701DEC8202FFEB01FBE8C07676A44E3CF19EB3D679A81BCD53B',
          exponent: 0,
          aliases: ['y:udatom:31Dec2024']
        }, {
          denom: 'ydATOM31Dec2024',
          exponent: 6
        }],
      base: 'ibc/E6A9907D3475A701DEC8202FFEB01FBE8C07676A44E3CF19EB3D679A81BCD53B',
      name: 'ydAtom (31Dec2024)',
      display: 'ydATOM31Dec2024',
      symbol: 'ydATOM-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:udatom:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/0F7103ECC30CE18A815D7DD7E292498559422FDFB558EBE8B7D7EF1004CE2503',
          exponent: 0,
          aliases: ['y:udatom:31Mar2025']
        }, {
          denom: 'ydATOM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/0F7103ECC30CE18A815D7DD7E292498559422FDFB558EBE8B7D7EF1004CE2503',
      name: 'ydAtom (31Mar2025)',
      display: 'ydATOM31Mar2025',
      symbol: 'ydATOM-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:udatom:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/9FFC507077802B7E51AB23C60BDC2104811674046300BC6BB90B8E2F6D80285E',
          exponent: 0,
          aliases: ['y:udatom:30Jun2025']
        }, {
          denom: 'ydATOM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/9FFC507077802B7E51AB23C60BDC2104811674046300BC6BB90B8E2F6D80285E',
      name: 'ydAtom (30Jun2025)',
      display: 'ydATOM30Jun2025',
      symbol: 'ydATOM-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:udatom:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/CF6D5084BE9420D55B6B66C0BCFC8457A732B5BE7421DD3EB886AB698BE9D092',
          exponent: 0,
          aliases: ['y:udatom:31Dec2025']
        }, {
          denom: 'ydATOM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/CF6D5084BE9420D55B6B66C0BCFC8457A732B5BE7421DD3EB886AB698BE9D092',
      name: 'ydAtom (31Dec2025)',
      display: 'ydATOM31Dec2025',
      symbol: 'ydATOM-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:udatom:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/D41AFC643B418DDDBEAFEEC55651B3296DD423CA96D6CA627BB6EECC2C2C7AB8',
          exponent: 0,
          aliases: ['y:udatom:31Dec2026']
        }, {
          denom: 'ydATOM31Dec2026',
          exponent: 6
        }],
      base: 'ibc/D41AFC643B418DDDBEAFEEC55651B3296DD423CA96D6CA627BB6EECC2C2C7AB8',
      name: 'ydAtom (31Dec2026)',
      display: 'ydATOM31Dec2026',
      symbol: 'ydATOM-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:udatom:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/2DF82E761C9943ADB5D68A757D0B1318EC2FDB646CE9FABE8967FF97B024991D',
          exponent: 0,
          aliases: ['y:utia:31Dec2024']
        }, {
          denom: 'yTIA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/2DF82E761C9943ADB5D68A757D0B1318EC2FDB646CE9FABE8967FF97B024991D',
      name: 'yTia (31Dec2024)',
      display: 'yTIA31Dec2024',
      symbol: 'yTIA-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:utia:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/E323B4B55E11DAFDDB591D26691167DD076DD0689E61A0B0D381B753124911D4',
          exponent: 0,
          aliases: ['y:utia:31Mar2025']
        }, {
          denom: 'yTIA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/E323B4B55E11DAFDDB591D26691167DD076DD0689E61A0B0D381B753124911D4',
      name: 'yTia (31Mar2025)',
      display: 'yTIA31Mar2025',
      symbol: 'yTIA-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:utia:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/853A226D4B0D37E2A06F404DE323769BACF625F5369F49277C7FAF97CBE0337D',
          exponent: 0,
          aliases: ['y:utia:30Jun2025']
        }, {
          denom: 'yTIA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/853A226D4B0D37E2A06F404DE323769BACF625F5369F49277C7FAF97CBE0337D',
      name: 'yTia (30Jun2025)',
      display: 'yTIA30Jun2025',
      symbol: 'yTIA-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:utia:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/CB5C58AF9CF6FAAA208AD81A19DC25F70A4DA97B3D21381000BA059758A8A722',
          exponent: 0,
          aliases: ['y:utia:30Sep2025']
        }, {
          denom: 'yTIA30Sep2025',
          exponent: 6
        }],
      base: 'ibc/CB5C58AF9CF6FAAA208AD81A19DC25F70A4DA97B3D21381000BA059758A8A722',
      name: 'yTia (30Sep2025)',
      display: 'yTIA30Sep2025',
      symbol: 'yTIA-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:utia:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/60C92532FAAE6350D01887B20A4097A8067365704EEB52C570F31CDBE9E836B2',
          exponent: 0,
          aliases: ['y:utia:31Dec2025']
        }, {
          denom: 'yTIA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/60C92532FAAE6350D01887B20A4097A8067365704EEB52C570F31CDBE9E836B2',
      name: 'yTia (31Dec2025)',
      display: 'yTIA31Dec2025',
      symbol: 'yTIA-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:utia:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/7A2894A0D2A979767FB95DED01F47CE2E923491C69DBC7FB8A2D60F6FF4E4E62',
          exponent: 0,
          aliases: ['y:utia:31Dec2026']
        }, {
          denom: 'yTIA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/7A2894A0D2A979767FB95DED01F47CE2E923491C69DBC7FB8A2D60F6FF4E4E62',
      name: 'yTia (31Dec2026)',
      display: 'yTIA31Dec2026',
      symbol: 'yTIA-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:utia:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/313D726C7AFDFF969242DA709B12AE6E3AF31AC24963D6F8ED48719B5719AFDF',
          exponent: 0,
          aliases: ['y:ausdy:31Mar2025']
        }, {
          denom: 'yUSDY31Mar2025',
          exponent: 18
        }],
      base: 'ibc/313D726C7AFDFF969242DA709B12AE6E3AF31AC24963D6F8ED48719B5719AFDF',
      name: 'yUsdy (31Mar2025)',
      display: 'yUSDY31Mar2025',
      symbol: 'yUSDY-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:ausdy:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/7C094251F4D0D73B6B3FEA29E49AFAF3132B05603505B6CA03846A67D73515B7',
          exponent: 0,
          aliases: ['y:ausdy:30Jun2025']
        }, {
          denom: 'yUSDY30Jun2025',
          exponent: 18
        }],
      base: 'ibc/7C094251F4D0D73B6B3FEA29E49AFAF3132B05603505B6CA03846A67D73515B7',
      name: 'yUsdy (30Jun2025)',
      display: 'yUSDY30Jun2025',
      symbol: 'yUSDY-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:ausdy:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/49BE7379D8FD995E625766B8859C0B5961480243249796F8D3ED03352F00E7CB',
          exponent: 0,
          aliases: ['y:ausdy:30Sep2025']
        }, {
          denom: 'yUSDY30Sep2025',
          exponent: 18
        }],
      base: 'ibc/49BE7379D8FD995E625766B8859C0B5961480243249796F8D3ED03352F00E7CB',
      name: 'yUsdy (30Sep2025)',
      display: 'yUSDY30Sep2025',
      symbol: 'yUSDY-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:ausdy:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/6CB8BEB5B9324BEE53E23664E25C3DE5D2018BCFEAF446BEEBBE48A7D4D4AD67',
          exponent: 0,
          aliases: ['y:ausdy:31Dec2025']
        }, {
          denom: 'yUSDY31Dec2025',
          exponent: 18
        }],
      base: 'ibc/6CB8BEB5B9324BEE53E23664E25C3DE5D2018BCFEAF446BEEBBE48A7D4D4AD67',
      name: 'yUsdy (31Dec2025)',
      display: 'yUSDY31Dec2025',
      symbol: 'yUSDY-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:ausdy:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/C540474ED8E4D22157EFAAFC392E314CAA92266E9E2C992D425D80628DA0C7C7',
          exponent: 0,
          aliases: ['y:ausdy:31Mar2026']
        }, {
          denom: 'yUSDY31Mar2026',
          exponent: 18
        }],
      base: 'ibc/C540474ED8E4D22157EFAAFC392E314CAA92266E9E2C992D425D80628DA0C7C7',
      name: 'yUsdy (31Mar2026)',
      display: 'yUSDY31Mar2026',
      symbol: 'yUSDY-31Mar2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:ausdy:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/5C86B8E8B958378AE766B09CEFE9A40FF23AB0E4ABF39A7B198D00147B1D26E7',
          exponent: 0,
          aliases: ['y:ausdy:30Jun2026']
        }, {
          denom: 'yUSDY30Jun2026',
          exponent: 18
        }],
      base: 'ibc/5C86B8E8B958378AE766B09CEFE9A40FF23AB0E4ABF39A7B198D00147B1D26E7',
      name: 'yUsdy (30Jun2026)',
      display: 'yUSDY30Jun2026',
      symbol: 'yUSDY-30Jun2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:ausdy:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/CBB28480367EC153C6FE5E38A013B8F6241F44D6BB8F1C749EE38D9328F50CA7',
          exponent: 0,
          aliases: ['y:upryzm:31Mar2025']
        }, {
          denom: 'yPRYZM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/CBB28480367EC153C6FE5E38A013B8F6241F44D6BB8F1C749EE38D9328F50CA7',
      name: 'yPryzm (31Mar2025)',
      display: 'yPRYZM31Mar2025',
      symbol: 'yPRYZM-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:upryzm:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/DF0C79068F804EC29BEF625AED52D404290305121376A0F3733F6064A6DA04AA',
          exponent: 0,
          aliases: ['y:upryzm:30Jun2025']
        }, {
          denom: 'yPRYZM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/DF0C79068F804EC29BEF625AED52D404290305121376A0F3733F6064A6DA04AA',
      name: 'yPryzm (30Jun2025)',
      display: 'yPRYZM30Jun2025',
      symbol: 'yPRYZM-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:upryzm:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/385A3877BB1F6631E21733227D06EE262317211D31A5268E6AAAA229B8BC960C',
          exponent: 0,
          aliases: ['y:upryzm:30Sep2025']
        }, {
          denom: 'yPRYZM30Sep2025',
          exponent: 6
        }],
      base: 'ibc/385A3877BB1F6631E21733227D06EE262317211D31A5268E6AAAA229B8BC960C',
      name: 'yPryzm (30Sep2025)',
      display: 'yPRYZM30Sep2025',
      symbol: 'yPRYZM-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:upryzm:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/2C3FB0BCB9237278CBF035F5E2870D7D985710DE753A030068BC506FDCCA26CD',
          exponent: 0,
          aliases: ['y:upryzm:31Dec2025']
        }, {
          denom: 'yPRYZM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/2C3FB0BCB9237278CBF035F5E2870D7D985710DE753A030068BC506FDCCA26CD',
      name: 'yPryzm (31Dec2025)',
      display: 'yPRYZM31Dec2025',
      symbol: 'yPRYZM-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:upryzm:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/14547720A027B8716339382A37AF4DA38556CF04892E2D8FD7382E025234A79E',
          exponent: 0,
          aliases: ['y:upryzm:31Mar2026']
        }, {
          denom: 'yPRYZM31Mar2026',
          exponent: 6
        }],
      base: 'ibc/14547720A027B8716339382A37AF4DA38556CF04892E2D8FD7382E025234A79E',
      name: 'yPryzm (31Mar2026)',
      display: 'yPRYZM31Mar2026',
      symbol: 'yPRYZM-31Mar2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:upryzm:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/4517A25F0BEB8899AA8371D05D396C703BD9CF0F7749D4902E75B384BE521A44',
          exponent: 0,
          aliases: ['y:upryzm:30Jun2026']
        }, {
          denom: 'yPRYZM30Jun2026',
          exponent: 6
        }],
      base: 'ibc/4517A25F0BEB8899AA8371D05D396C703BD9CF0F7749D4902E75B384BE521A44',
      name: 'yPryzm (30Jun2026)',
      display: 'yPRYZM30Jun2026',
      symbol: 'yPRYZM-30Jun2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:upryzm:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for sUSDS with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/E87909E9D727FAF279C6E3E7400F0DC28CA40C6C4070627151D4BC06FE45B992',
          exponent: 0,
          aliases: ['y:asusds:30Jun2025']
        }, {
          denom: 'ysUSDS30Jun2025',
          exponent: 18
        }],
      base: 'ibc/E87909E9D727FAF279C6E3E7400F0DC28CA40C6C4070627151D4BC06FE45B992',
      name: 'ysUsds (30Jun2025)',
      display: 'ysUSDS30Jun2025',
      symbol: 'ysUSDS-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:asusds:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for sUSDS with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/5F70E1B59F683593AC7492F981D4BB105E10ADC18C50488B2DBE3187952A6994',
          exponent: 0,
          aliases: ['y:asusds:30Sep2025']
        }, {
          denom: 'ysUSDS30Sep2025',
          exponent: 18
        }],
      base: 'ibc/5F70E1B59F683593AC7492F981D4BB105E10ADC18C50488B2DBE3187952A6994',
      name: 'ysUsds (30Sep2025)',
      display: 'ysUSDS30Sep2025',
      symbol: 'ysUSDS-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:asusds:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for sUSDS with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/89CF081EFCD2389BFCD4BB00A57A859F7B0B1DADCB2CF18957A89E63DE2E0E84',
          exponent: 0,
          aliases: ['y:asusds:31Dec2025']
        }, {
          denom: 'ysUSDS31Dec2025',
          exponent: 18
        }],
      base: 'ibc/89CF081EFCD2389BFCD4BB00A57A859F7B0B1DADCB2CF18957A89E63DE2E0E84',
      name: 'ysUsds (31Dec2025)',
      display: 'ysUSDS31Dec2025',
      symbol: 'ysUSDS-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:asusds:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for sUSDS with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/3DFA0D1207564F77750F7434D12C99D5F5FEA54BF85F9C1E23514AA5CF2FC866',
          exponent: 0,
          aliases: ['y:asusds:31Mar2026']
        }, {
          denom: 'ysUSDS31Mar2026',
          exponent: 18
        }],
      base: 'ibc/3DFA0D1207564F77750F7434D12C99D5F5FEA54BF85F9C1E23514AA5CF2FC866',
      name: 'ysUsds (31Mar2026)',
      display: 'ysUSDS31Mar2026',
      symbol: 'ysUSDS-31Mar2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:asusds:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for sUSDS with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/4724FD3943590F3E0D1932F317756492077A76D0CD49A6FE304CA003244BE838',
          exponent: 0,
          aliases: ['y:asusds:30Jun2026']
        }, {
          denom: 'ysUSDS30Jun2026',
          exponent: 18
        }],
      base: 'ibc/4724FD3943590F3E0D1932F317756492077A76D0CD49A6FE304CA003244BE838',
      name: 'ysUsds (30Jun2026)',
      display: 'ysUSDS30Jun2026',
      symbol: 'ysUSDS-30Jun2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:asusds:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for mBTC with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/5C45CB5D8013A91DD5EDF18A0B118CAF3D817AB321F7D6C836CAF2A186807BC3',
          exponent: 0,
          aliases: ['y:ambtc:30Sep2025']
        }, {
          denom: 'ymBTC30Sep2025',
          exponent: 18
        }],
      base: 'ibc/5C45CB5D8013A91DD5EDF18A0B118CAF3D817AB321F7D6C836CAF2A186807BC3',
      name: 'ymBTC (30Sep2025)',
      display: 'ymBTC30Sep2025',
      symbol: 'ymBTC-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ymBTC.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ymBTC.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ymBTC.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ymBTC.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:ambtc:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for mBTC with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/8B7DEB45D2A49BCCF5B69659B810872D34F6869F4636822110F5135B2B673908',
          exponent: 0,
          aliases: ['y:ambtc:31Dec2025']
        }, {
          denom: 'ymBTC31Dec2025',
          exponent: 18
        }],
      base: 'ibc/8B7DEB45D2A49BCCF5B69659B810872D34F6869F4636822110F5135B2B673908',
      name: 'ymBTC (31Dec2025)',
      display: 'ymBTC31Dec2025',
      symbol: 'ymBTC-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ymBTC.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ymBTC.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ymBTC.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ymBTC.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:ambtc:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for mBTC with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/398411E5CD0A4B8EA0DE7C321A9AA5047B0A7793B7894986AB67E92D277752D7',
          exponent: 0,
          aliases: ['y:ambtc:31Mar2026']
        }, {
          denom: 'ymBTC31Mar2026',
          exponent: 18
        }],
      base: 'ibc/398411E5CD0A4B8EA0DE7C321A9AA5047B0A7793B7894986AB67E92D277752D7',
      name: 'ymBTC (31Mar2026)',
      display: 'ymBTC31Mar2026',
      symbol: 'ymBTC-31Mar2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ymBTC.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ymBTC.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ymBTC.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ymBTC.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:ambtc:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for mBTC with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/04BA7414EF960149B3B74C960206D1BE6F6E60E0A4F2948FBD068E5AE67C6051',
          exponent: 0,
          aliases: ['y:ambtc:30Jun2026']
        }, {
          denom: 'ymBTC30Jun2026',
          exponent: 18
        }],
      base: 'ibc/04BA7414EF960149B3B74C960206D1BE6F6E60E0A4F2948FBD068E5AE67C6051',
      name: 'ymBTC (30Jun2026)',
      display: 'ymBTC30Jun2026',
      symbol: 'ymBTC-30Jun2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ymBTC.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ymBTC.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ymBTC.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ymBTC.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:ambtc:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for USDC / USDC.axl pool',
      denom_units: [{
          denom: 'ibc/5D7DB05BE95798EB5700FE5A939BCC015D305EEB402EB40622C0BF53EC629B70',
          exponent: 0,
          aliases: ['lp:6:uusdc.axl-uusdc']
        }, {
          denom: 'lp:6:usdc.axl-usdc',
          exponent: 6
        }],
      base: 'ibc/5D7DB05BE95798EB5700FE5A939BCC015D305EEB402EB40622C0BF53EC629B70',
      name: 'USDC / USDC.axl LP',
      display: 'lp:6:usdc.axl-usdc',
      symbol: 'USDC-USDC.axl-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:6:uusdc.axl-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for ATOM Yield pool',
      denom_units: [{
          denom: 'ibc/E2385934A1E5B4E83684D98432D453F9B7016B7AA3D4B1CB9048BAE92A61EB14',
          exponent: 0,
          aliases: ['lp:0:uatom']
        }, {
          denom: 'lp:0:atom',
          exponent: 6
        }],
      base: 'ibc/E2385934A1E5B4E83684D98432D453F9B7016B7AA3D4B1CB9048BAE92A61EB14',
      name: 'ATOM Yield LP',
      display: 'lp:0:atom',
      symbol: 'ATOM-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:0:uatom',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for ATOM Boost pool',
      denom_units: [{
          denom: 'ibc/45ED94C46477792369B65CA2BCD62ADF595D70A5405EBB51AFA32D4CDCD73AD3',
          exponent: 0,
          aliases: ['lp:2:uatomypt-uatom']
        }, {
          denom: 'lp:2:atomypt-atom',
          exponent: 6
        }],
      base: 'ibc/45ED94C46477792369B65CA2BCD62ADF595D70A5405EBB51AFA32D4CDCD73AD3',
      name: 'ATOM Boost LP',
      display: 'lp:2:atomypt-atom',
      symbol: 'ATOM-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:2:uatomypt-uatom',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for ATOM / USDC pool',
      denom_units: [{
          denom: 'ibc/A48C7AFF8B2D2EFE0AF4236A15CB64DF46FE02DA071475C4A1E9970B20D508FB',
          exponent: 0,
          aliases: ['lp:3:uatom-uusdc']
        }, {
          denom: 'lp:3:atom-usdc',
          exponent: 6
        }],
      base: 'ibc/A48C7AFF8B2D2EFE0AF4236A15CB64DF46FE02DA071475C4A1E9970B20D508FB',
      name: 'ATOM / USDC LP',
      display: 'lp:3:atom-usdc',
      symbol: 'ATOM-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:3:uatom-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for INJ Yield pool',
      denom_units: [{
          denom: 'ibc/49840D0AD8FDB7D2292AA1D822BA458C8641291AA3A90B8615D47410F3246258',
          exponent: 0,
          aliases: ['lp:1:inj']
        }, {
          denom: 'lp:1:INJ',
          exponent: 18
        }],
      base: 'ibc/49840D0AD8FDB7D2292AA1D822BA458C8641291AA3A90B8615D47410F3246258',
      name: 'INJ Yield LP',
      display: 'lp:1:INJ',
      symbol: 'INJ-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:1:inj',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for INJ Boost pool',
      denom_units: [{
          denom: 'ibc/0CFEF324242A1EA9A5B9FAE6EF781FC98DA4089A99495ED7A85206DA48B5753A',
          exponent: 0,
          aliases: ['lp:4:injypt-inj']
        }, {
          denom: 'lp:4:INJypt-INJ',
          exponent: 18
        }],
      base: 'ibc/0CFEF324242A1EA9A5B9FAE6EF781FC98DA4089A99495ED7A85206DA48B5753A',
      name: 'INJ Boost LP',
      display: 'lp:4:INJypt-INJ',
      symbol: 'INJ-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:4:injypt-inj',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for INJ / USDC pool',
      denom_units: [{
          denom: 'ibc/250D59FF00967FA3294387D2775BF502951D80837F12CBB355669CED3C9FEA97',
          exponent: 0,
          aliases: ['lp:5:inj-uusdc']
        }, {
          denom: 'lp:5:INJ-usdc',
          exponent: 18
        }],
      base: 'ibc/250D59FF00967FA3294387D2775BF502951D80837F12CBB355669CED3C9FEA97',
      name: 'INJ / USDC LP',
      display: 'lp:5:INJ-usdc',
      symbol: 'INJ-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:5:inj-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for OSMO Yield pool',
      denom_units: [{
          denom: 'ibc/AB71A1158A893A668F5D4AC2340827DC46BCA905900D9B8735312EA12F92ED27',
          exponent: 0,
          aliases: ['lp:8:uosmo']
        }, {
          denom: 'lp:8:osmo',
          exponent: 6
        }],
      base: 'ibc/AB71A1158A893A668F5D4AC2340827DC46BCA905900D9B8735312EA12F92ED27',
      name: 'OSMO Yield LP',
      display: 'lp:8:osmo',
      symbol: 'OSMO-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:8:uosmo',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for OSMO Boost pool',
      denom_units: [{
          denom: 'ibc/81133677344E5C97E33246E13A6118B2FE6A7969BF6D072D7D1B2F91F54B8442',
          exponent: 0,
          aliases: ['lp:10:uosmoypt-uosmo']
        }, {
          denom: 'lp:10:osmoypt-osmo',
          exponent: 6
        }],
      base: 'ibc/81133677344E5C97E33246E13A6118B2FE6A7969BF6D072D7D1B2F91F54B8442',
      name: 'OSMO Boost LP',
      display: 'lp:10:osmoypt-osmo',
      symbol: 'OSMO-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:10:uosmoypt-uosmo',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for OSMO / USDC pool',
      denom_units: [{
          denom: 'ibc/B7B199DA3365F3D56FBDADDC183005AB285C74A3D918E0D507EA2A56E3D17C30',
          exponent: 0,
          aliases: ['lp:11:uosmo-uusdc']
        }, {
          denom: 'lp:11:osmo-usdc',
          exponent: 6
        }],
      base: 'ibc/B7B199DA3365F3D56FBDADDC183005AB285C74A3D918E0D507EA2A56E3D17C30',
      name: 'OSMO / USDC LP',
      display: 'lp:11:osmo-usdc',
      symbol: 'OSMO-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:11:uosmo-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for LUNA Yield pool',
      denom_units: [{
          denom: 'ibc/A42D667F6B5A708FA906E190E7587EC021DC5778BB124B87D7072D580666D389',
          exponent: 0,
          aliases: ['lp:9:uluna']
        }, {
          denom: 'lp:9:luna',
          exponent: 6
        }],
      base: 'ibc/A42D667F6B5A708FA906E190E7587EC021DC5778BB124B87D7072D580666D389',
      name: 'LUNA Yield LP',
      display: 'lp:9:luna',
      symbol: 'LUNA-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:9:uluna',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for LUNA Boost pool',
      denom_units: [{
          denom: 'ibc/90952C250AD206672989ABC07FECB2F154495712A8C9D82CE2442D4A2EB760B6',
          exponent: 0,
          aliases: ['lp:12:ulunaypt-uluna']
        }, {
          denom: 'lp:12:lunaypt-luna',
          exponent: 6
        }],
      base: 'ibc/90952C250AD206672989ABC07FECB2F154495712A8C9D82CE2442D4A2EB760B6',
      name: 'LUNA Boost LP',
      display: 'lp:12:lunaypt-luna',
      symbol: 'LUNA-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:12:ulunaypt-uluna',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for LUNA / USDC pool',
      denom_units: [{
          denom: 'ibc/EB4C16252E898642E0AB4E0051EE1C95AAC6FF213B07231FB7DE8A18D9FF7AF4',
          exponent: 0,
          aliases: ['lp:13:uluna-uusdc']
        }, {
          denom: 'lp:13:luna-usdc',
          exponent: 6
        }],
      base: 'ibc/EB4C16252E898642E0AB4E0051EE1C95AAC6FF213B07231FB7DE8A18D9FF7AF4',
      name: 'LUNA / USDC LP',
      display: 'lp:13:luna-usdc',
      symbol: 'LUNA-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:13:uluna-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for AUUU Yield pool',
      denom_units: [{
          denom: 'ibc/3B16157FA8EDA871F6FA20512A681F9DF0BA4F9960D98148188A5FA93776224F',
          exponent: 0,
          aliases: ['lp:14:uauuu']
        }, {
          denom: 'lp:14:auuu',
          exponent: 6
        }],
      base: 'ibc/3B16157FA8EDA871F6FA20512A681F9DF0BA4F9960D98148188A5FA93776224F',
      name: 'AUUU Yield LP',
      display: 'lp:14:auuu',
      symbol: 'AUUU-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:14:uauuu',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for AUUU Boost pool',
      denom_units: [{
          denom: 'ibc/A89A762DBF232AC3EE6A6D0D95D3BA751381290B43687160BF2C661F87C15B8C',
          exponent: 0,
          aliases: ['lp:17:uauuuypt-uauuu']
        }, {
          denom: 'lp:17:auuuypt-auuu',
          exponent: 6
        }],
      base: 'ibc/A89A762DBF232AC3EE6A6D0D95D3BA751381290B43687160BF2C661F87C15B8C',
      name: 'AUUU Boost LP',
      display: 'lp:17:auuuypt-auuu',
      symbol: 'AUUU-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:17:uauuuypt-uauuu',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for AUUU / USDC pool',
      denom_units: [{
          denom: 'ibc/F7D9126CEB9B3E53A807D96F61A6B16B1AB5A556E8F44438D6DF788989095964',
          exponent: 0,
          aliases: ['lp:7:uauuu-uusdc']
        }, {
          denom: 'lp:7:auuu-usdc',
          exponent: 6
        }],
      base: 'ibc/F7D9126CEB9B3E53A807D96F61A6B16B1AB5A556E8F44438D6DF788989095964',
      name: 'AUUU / USDC LP',
      display: 'lp:7:auuu-usdc',
      symbol: 'AUUU-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:7:uauuu-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for stDYDX Yield pool',
      denom_units: [{
          denom: 'ibc/74178CF77F8A3A6E909EA88C29D2267165208F811E2791672EC4DD78222B0D54',
          exponent: 0,
          aliases: ['lp:15:stadydx']
        }, {
          denom: 'lp:15:stdydx',
          exponent: 18
        }],
      base: 'ibc/74178CF77F8A3A6E909EA88C29D2267165208F811E2791672EC4DD78222B0D54',
      name: 'stDYDX Yield LP',
      display: 'lp:15:stdydx',
      symbol: 'stDYDX-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:15:stadydx',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for stDYDX Boost pool',
      denom_units: [{
          denom: 'ibc/59AE672BBEFE1262F881010268841EA0DE33FF6187DBEB47617795F7066427D0',
          exponent: 0,
          aliases: ['lp:18:stadydxypt-adydx']
        }, {
          denom: 'lp:18:stdydxypt-dydx',
          exponent: 18
        }],
      base: 'ibc/59AE672BBEFE1262F881010268841EA0DE33FF6187DBEB47617795F7066427D0',
      name: 'stDYDX Boost LP',
      display: 'lp:18:stdydxypt-dydx',
      symbol: 'stDYDX-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:18:stadydxypt-adydx',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for DYDX / USDC pool',
      denom_units: [{
          denom: 'ibc/96E7FB12D516E8D7FDC0DB01A1079021164C90F491C633EF77AD55DFDEE7FD6E',
          exponent: 0,
          aliases: ['lp:19:adydx-uusdc']
        }, {
          denom: 'lp:19:dydx-usdc',
          exponent: 18
        }],
      base: 'ibc/96E7FB12D516E8D7FDC0DB01A1079021164C90F491C633EF77AD55DFDEE7FD6E',
      name: 'DYDX / USDC LP',
      display: 'lp:19:dydx-usdc',
      symbol: 'DYDX-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:19:adydx-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for stTIA Yield pool',
      denom_units: [{
          denom: 'ibc/C6C0B4E65D4C635E153103217B1AF9CDCE898E1273EAC6F410E4E0360FCEAFA2',
          exponent: 0,
          aliases: ['lp:16:stutia']
        }, {
          denom: 'lp:16:sttia',
          exponent: 6
        }],
      base: 'ibc/C6C0B4E65D4C635E153103217B1AF9CDCE898E1273EAC6F410E4E0360FCEAFA2',
      name: 'stTIA Yield LP',
      display: 'lp:16:sttia',
      symbol: 'stTIA-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:16:stutia',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for stTIA Boost pool',
      denom_units: [{
          denom: 'ibc/DD0FC1F73672C58C1FCE61A2BF2A631F9CDFDA55C9BFC0F3C5722DE2251720B8',
          exponent: 0,
          aliases: ['lp:20:stutiaypt-utia']
        }, {
          denom: 'lp:20:sttiaypt-tia',
          exponent: 6
        }],
      base: 'ibc/DD0FC1F73672C58C1FCE61A2BF2A631F9CDFDA55C9BFC0F3C5722DE2251720B8',
      name: 'stTIA Boost LP',
      display: 'lp:20:sttiaypt-tia',
      symbol: 'stTIA-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:20:stutiaypt-utia',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for TIA Yield pool',
      denom_units: [{
          denom: 'ibc/58B0130A22A349ED2B675EE47B6F0D0C2183013E16CC54C31D87C6EC45D9CFE8',
          exponent: 0,
          aliases: ['lp:24:utia']
        }, {
          denom: 'lp:24:tia',
          exponent: 6
        }],
      base: 'ibc/58B0130A22A349ED2B675EE47B6F0D0C2183013E16CC54C31D87C6EC45D9CFE8',
      name: 'TIA Yield LP',
      display: 'lp:24:tia',
      symbol: 'TIA-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:24:utia',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for TIA Boost pool',
      denom_units: [{
          denom: 'ibc/A81720AF269A7E735CDB309D1CA8E487C3F71BDA33996E8579C850999EB94955',
          exponent: 0,
          aliases: ['lp:25:utiaypt-utia']
        }, {
          denom: 'lp:25:tiaypt-tia',
          exponent: 6
        }],
      base: 'ibc/A81720AF269A7E735CDB309D1CA8E487C3F71BDA33996E8579C850999EB94955',
      name: 'TIA Boost LP',
      display: 'lp:25:tiaypt-tia',
      symbol: 'TIA-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:25:utiaypt-utia',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for TIA / USDC pool',
      denom_units: [{
          denom: 'ibc/606F4A5DC042F65D53A1695CD076735FC8326A3B16EF60330CBE249ECE9E9544',
          exponent: 0,
          aliases: ['lp:21:utia-uusdc']
        }, {
          denom: 'lp:21:tia-usdc',
          exponent: 6
        }],
      base: 'ibc/606F4A5DC042F65D53A1695CD076735FC8326A3B16EF60330CBE249ECE9E9544',
      name: 'TIA / USDC LP',
      display: 'lp:21:tia-usdc',
      symbol: 'TIA-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:21:utia-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for dATOM Yield pool',
      denom_units: [{
          denom: 'ibc/95547AE6943D14B6AB769DDA8762D6C27097EDFCE42A069960C5148823E6F532',
          exponent: 0,
          aliases: ['lp:22:udatom']
        }, {
          denom: 'lp:22:datom',
          exponent: 6
        }],
      base: 'ibc/95547AE6943D14B6AB769DDA8762D6C27097EDFCE42A069960C5148823E6F532',
      name: 'dATOM Yield LP',
      display: 'lp:22:datom',
      symbol: 'dATOM-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:22:udatom',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for dATOM Boost pool',
      denom_units: [{
          denom: 'ibc/C918438DB31D6539E91A42AC7BDC3B6A424BE9DEAA4209D3A94CE86B588D8828',
          exponent: 0,
          aliases: ['lp:23:udatomypt-uatom']
        }, {
          denom: 'lp:23:datomypt-atom',
          exponent: 6
        }],
      base: 'ibc/C918438DB31D6539E91A42AC7BDC3B6A424BE9DEAA4209D3A94CE86B588D8828',
      name: 'dATOM Boost LP',
      display: 'lp:23:datomypt-atom',
      symbol: 'dATOM-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:23:udatomypt-uatom',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for USDY Yield pool',
      denom_units: [{
          denom: 'ibc/D071C4DA2A1FF48185B5C3047F55F0AD142D336DFBC5D09159401B93BB13806A',
          exponent: 0,
          aliases: ['lp:31:ausdy']
        }, {
          denom: 'lp:31:usdy',
          exponent: 18
        }],
      base: 'ibc/D071C4DA2A1FF48185B5C3047F55F0AD142D336DFBC5D09159401B93BB13806A',
      name: 'USDY Yield LP',
      display: 'lp:31:usdy',
      symbol: 'USDY-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:31:ausdy',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for USDY Boost pool',
      denom_units: [{
          denom: 'ibc/8AA0153C8FF6C88B55CD38EAEB1633FA7EE3F0463294296B7812FDEADCAAEBCF',
          exponent: 0,
          aliases: ['lp:32:ausdyypt-uusdc']
        }, {
          denom: 'lp:32:usdyypt-usdc',
          exponent: 18
        }],
      base: 'ibc/8AA0153C8FF6C88B55CD38EAEB1633FA7EE3F0463294296B7812FDEADCAAEBCF',
      name: 'USDY Boost LP',
      display: 'lp:32:usdyypt-usdc',
      symbol: 'USDY-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:32:ausdyypt-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for PRYZM Yield pool',
      denom_units: [{
          denom: 'ibc/BF626F161C4DC828677097AF57DBD15B31A78B723E12E91B30452F215304D874',
          exponent: 0,
          aliases: ['lp:33:upryzm']
        }, {
          denom: 'lp:33:pryzm',
          exponent: 6
        }],
      base: 'ibc/BF626F161C4DC828677097AF57DBD15B31A78B723E12E91B30452F215304D874',
      name: 'PRYZM Yield LP',
      display: 'lp:33:pryzm',
      symbol: 'PRYZM-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:33:upryzm',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for PRYZM Base pool',
      denom_units: [{
          denom: 'ibc/250FBB9FFE073E40AB4467343F49C3A4666945AFC7E3D9A0BB1A6679B22A9617',
          exponent: 0,
          aliases: ['lp:34:upryzmypt-upryzm']
        }, {
          denom: 'lp:34:pryzmypt-pryzm',
          exponent: 6
        }],
      base: 'ibc/250FBB9FFE073E40AB4467343F49C3A4666945AFC7E3D9A0BB1A6679B22A9617',
      name: 'PRYZM Base LP',
      display: 'lp:34:pryzmypt-pryzm',
      symbol: 'PRYZM-BASE-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:34:upryzmypt-upryzm',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for PRYZM / USDC pool',
      denom_units: [{
          denom: 'ibc/4F021DC910B3CFA86E72000886D9056940F706E538A126D1225DE8BE6F1893BF',
          exponent: 0,
          aliases: ['lp:35:upryzm-uusdc']
        }, {
          denom: 'lp:35:pryzm-usdc',
          exponent: 6
        }],
      base: 'ibc/4F021DC910B3CFA86E72000886D9056940F706E538A126D1225DE8BE6F1893BF',
      name: 'PRYZM / USDC LP',
      display: 'lp:35:pryzm-usdc',
      symbol: 'PRYZM-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:35:upryzm-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for sUSDS Yield pool',
      denom_units: [{
          denom: 'ibc/D85C6B77C9960CAB3DF3B6992ECD61B4E4653C292A1144FF2C80A50F18ECBD05',
          exponent: 0,
          aliases: ['lp:36:asusds']
        }, {
          denom: 'lp:36:susds',
          exponent: 18
        }],
      base: 'ibc/D85C6B77C9960CAB3DF3B6992ECD61B4E4653C292A1144FF2C80A50F18ECBD05',
      name: 'sUSDS Yield LP',
      display: 'lp:36:susds',
      symbol: 'sUSDS-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:36:asusds',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for sUSDS Boost pool',
      denom_units: [{
          denom: 'ibc/6BD9D402976CF2BB0C176D345CE53F78B504AED6AAA29E28F1E093F00668E8E6',
          exponent: 0,
          aliases: ['lp:37:asusdsypt-uusdc']
        }, {
          denom: 'lp:37:susdsypt-usdc',
          exponent: 18
        }],
      base: 'ibc/6BD9D402976CF2BB0C176D345CE53F78B504AED6AAA29E28F1E093F00668E8E6',
      name: 'sUSDS Boost LP',
      display: 'lp:37:susdsypt-usdc',
      symbol: 'sUSDS-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:37:asusdsypt-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for mBTC Yield pool',
      denom_units: [{
          denom: 'ibc/FB7ECB2F1339FE80FF73B8BBE5D45D5D2BEF8201359B48B1C97275450F5FC56F',
          exponent: 0,
          aliases: ['lp:38:ambtc']
        }, {
          denom: 'lp:38:mbtc',
          exponent: 18
        }],
      base: 'ibc/FB7ECB2F1339FE80FF73B8BBE5D45D5D2BEF8201359B48B1C97275450F5FC56F',
      name: 'mBTC Yield LP',
      display: 'lp:38:mbtc',
      symbol: 'mBTC-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:38:ambtc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for mBTC Boost pool',
      denom_units: [{
          denom: 'ibc/8D11F44051EDA738451B1294835AB80A2765158834D7F9C68696EB97028EB492',
          exponent: 0,
          aliases: ['lp:39:ambtcypt-wsat']
        }, {
          denom: 'lp:39:mbtcypt-wbtc',
          exponent: 18
        }],
      base: 'ibc/8D11F44051EDA738451B1294835AB80A2765158834D7F9C68696EB97028EB492',
      name: 'mBTC Boost LP',
      display: 'lp:39:mbtcypt-wbtc',
      symbol: 'mBTC-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:39:ambtcypt-wsat',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for WBTC / USDC pool',
      denom_units: [{
          denom: 'ibc/8D03601A3F9D58F55EA09BEBA2D0831494C21AD2427F5C20391BDA4B5694E3DC',
          exponent: 0,
          aliases: ['lp:40:wsat-uusdc']
        }, {
          denom: 'lp:40:wbtc-usdc',
          exponent: 18
        }],
      base: 'ibc/8D03601A3F9D58F55EA09BEBA2D0831494C21AD2427F5C20391BDA4B5694E3DC',
      name: 'WBTC / USDC LP',
      display: 'lp:40:wbtc-usdc',
      symbol: 'WBTC-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:40:wsat-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Saga is a blockchain platform focused on providing customizable blockchain solutions with a strong emphasis on security and scalability.',
      denom_units: [{
          denom: 'ibc/74B554DD3FF10F5D60E30175ADFB47E59F77F7C57024A8104A4F78CDC2EAD125',
          exponent: 0,
          aliases: ['usaga']
        }, {
          denom: 'saga',
          exponent: 6
        }],
      base: 'ibc/74B554DD3FF10F5D60E30175ADFB47E59F77F7C57024A8104A4F78CDC2EAD125',
      name: 'Saga',
      display: 'saga',
      symbol: 'SAGA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg'
      },
      coingecko_id: 'saga-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg',
          theme: {
            dark_mode: false
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.svg',
          theme: {
            dark_mode: true
          }
        }],
      socials: {
        website: 'https://www.saga.xyz/',
        x: 'https://x.com/Sagaxyz__'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'usaga',
            chain_name: 'saga'
          },
          chain: {
            channel_id: 'channel-2060'
          }
        }]
    },
    {
      description: 'Secret Network is a privacy-focused blockchain that enables private and secure smart contracts, protecting sensitive data.',
      denom_units: [{
          denom: 'ibc/15EA36C3AB87E3E5E41A61717B7A20F03CC2363840C1A837A487B8BFE176328E',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'ibc/15EA36C3AB87E3E5E41A61717B7A20F03CC2363840C1A837A487B8BFE176328E',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png'
      },
      coingecko_id: 'secret',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png'
        }],
      socials: {
        website: 'https://scrt.network/',
        x: 'https://x.com/SecretNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-144',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-1551'
          }
        }]
    },
    {
      description: 'Sei is a layer-1 blockchain optimized for trading, focusing on providing high throughput, low latency, and efficient execution for decentralized exchanges.',
      denom_units: [{
          denom: 'ibc/41646AADED0E33983922676F54BF2B8FD31DE06BB02C72949FD4F34081A41073',
          exponent: 0,
          aliases: ['usei']
        }, {
          denom: 'sei',
          exponent: 6
        }],
      base: 'ibc/41646AADED0E33983922676F54BF2B8FD31DE06BB02C72949FD4F34081A41073',
      name: 'Sei',
      display: 'sei',
      symbol: 'SEI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
      },
      coingecko_id: 'sei-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
        }],
      socials: {
        website: 'https://www.sei.io/',
        x: 'https://x.com/SeiNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-66',
            base_denom: 'usei',
            chain_name: 'sei'
          },
          chain: {
            channel_id: 'channel-2016'
          }
        }]
    },
    {
      description: 'OOZARU is a meme token on SEI Network inspired by the iconic transformation in the Dragon Ball series',
      denom_units: [{
          denom: 'ibc/4B4651AE181216ED6258A9B86DC6FF8FEB765DB9F90A38EE15A10E3F9EC33E88',
          exponent: 0,
          aliases: ['sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda']
        }, {
          denom: 'oozaru',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda',
      base: 'ibc/4B4651AE181216ED6258A9B86DC6FF8FEB765DB9F90A38EE15A10E3F9EC33E88',
      name: 'Oozaru',
      display: 'oozaru',
      symbol: 'OOZARU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oozaru.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oozaru.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-66',
            base_denom: 'sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda',
            chain_name: 'sei'
          },
          chain: {
            channel_id: 'channel-2016'
          }
        }]
    },
    {
      description: 'The native token of Side Chain.',
      denom_units: [{
          denom: 'ibc/589B02B56655FE2977D76D53ABA89BAFE270D86827D02FD5339AC7BD5FCB75EF',
          exponent: 0,
          aliases: ['uside']
        }, {
          denom: 'side',
          exponent: 6
        }],
      base: 'ibc/589B02B56655FE2977D76D53ABA89BAFE270D86827D02FD5339AC7BD5FCB75EF',
      name: 'Side Chain native token',
      display: 'side',
      symbol: 'SIDE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/side.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/side.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/side.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/side.svg'
        }],
      socials: {
        website: 'https://side.one',
        x: 'https://x.com/SideProtocol'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'uside',
            chain_name: 'sidechain'
          },
          chain: {
            channel_id: 'channel-6852'
          }
        }]
    },
    {
      description: 'Stargaze is a decentralized blockchain platform designed specifically for non-fungible tokens (NFTs), enabling creators to mint, trade, and interact with NFTs in a fully decentralized environment.',
      denom_units: [{
          denom: 'ibc/A139C0E0B5E87CBA8EAEEB12B9BEE13AC7C814CFBBFA87BBCADD67E31003466C',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ibc/A139C0E0B5E87CBA8EAEEB12B9BEE13AC7C814CFBBFA87BBCADD67E31003466C',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
      },
      coingecko_id: 'stargaze',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
        }],
      socials: {
        website: 'https://www.stargaze.zone/',
        x: 'https://x.com/StargazeZone'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-191',
            base_denom: 'ustars',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-18'
          }
        }]
    },
    {
      description: 'Stride is a liquid staking blockchain in the Cosmos ecosystem that allows users to stake any IBC-compatible tokens and receive stTokens in return, providing liquidity while earning staking rewards.',
      denom_units: [{
          denom: 'ibc/3552CECB7BCE1891DB6070D37EC6E954C972B1400141308FCD85FD148BD06DE5',
          exponent: 0,
          aliases: ['ustrd']
        }, {
          denom: 'strd',
          exponent: 6
        }],
      base: 'ibc/3552CECB7BCE1891DB6070D37EC6E954C972B1400141308FCD85FD148BD06DE5',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
      },
      coingecko_id: 'stride',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
        }],
      socials: {
        website: 'https://stride.zone/',
        x: 'https://x.com/stride_zone'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-123',
            base_denom: 'ustrd',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-8'
          }
        }]
    },
    {
      description: 'The native staking token of Terra Phoenix.',
      denom_units: [{
          denom: 'ibc/322C86EB54A505E28AFE380CED1721FA61E9580A7548A16B9DCF6E7C8CEE43D5',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'ibc/322C86EB54A505E28AFE380CED1721FA61E9580A7548A16B9DCF6E7C8CEE43D5',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      },
      coingecko_id: 'terra-luna-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
        }],
      socials: {
        website: 'https://www.phoenix.money/',
        x: 'https://x.com/phoenix_dir'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-229',
            base_denom: 'uluna',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-25'
          }
        }]
    },
    {
      description: 'The permissioned staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/E43AFFB1D8AA31881458206EE2AA2CA8022093E15C7F807C9F3CEEF46A08B915',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/E43AFFB1D8AA31881458206EE2AA2CA8022093E15C7F807C9F3CEEF46A08B915',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'ustake',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-30'
          }
        }]
    },
    {
      description: 'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [{
          denom: 'ibc/17E2B6610FC9DF24D3AD8F1CBA03308B9FD284AB8123E5E485902E54369E985A',
          exponent: 0,
          aliases: ['ufrienzies']
        }, {
          denom: 'frienzies',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/17E2B6610FC9DF24D3AD8F1CBA03308B9FD284AB8123E5E485902E54369E985A',
      display: 'frienzies',
      name: 'Frienzies',
      symbol: 'FRNZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'ufrienzies',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-30'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/A0A081FFC6A13B8F502079F3A8420F5B4FC3007D9AA696E371B9A7B39B90EADF',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/A0A081FFC6A13B8F502079F3A8420F5B4FC3007D9AA696E371B9A7B39B90EADF',
      display: 'usdy',
      name: 'Ondo US Dollar Yield',
      symbol: 'USDY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.svg'
        }],
      coingecko_id: 'ondo-us-dollar-yield',
      socials: {
        website: 'https://ondo.finance/usdy',
        x: 'https://x.com/OndoFinance'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'ausdy',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-30'
          }
        }]
    },
    {
      description: 'USDN token',
      denom_units: [{
          denom: 'ibc/647A544ED631A846AFB787A9550422E782E913C46513011A48220AB13DC24D55',
          exponent: 0,
          aliases: ['uusdn']
        }, {
          denom: 'usdn',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/647A544ED631A846AFB787A9550422E782E913C46513011A48220AB13DC24D55',
      name: 'Noble Dollar',
      display: 'usdn',
      symbol: 'USDN',
      coingecko_id: 'noble-dollar-usdn',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDN.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDN.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDN.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDN.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'uusdn',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-30'
          }
        }]
    },
    {
      description: 'The native token of Nolus chain',
      denom_units: [{
          denom: 'ibc/6C9E6701AC217C0FC7D74B0F7A6265B9B4E3C3CDA6E80AADE5F950A8F52F9972',
          exponent: 0,
          aliases: ['unls']
        }, {
          denom: 'nls',
          exponent: 6
        }],
      base: 'ibc/6C9E6701AC217C0FC7D74B0F7A6265B9B4E3C3CDA6E80AADE5F950A8F52F9972',
      name: 'Nolus',
      display: 'nls',
      symbol: 'NLS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
      },
      coingecko_id: 'nolus',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
        }],
      socials: {
        website: 'https://nolus.io/',
        x: 'https://x.com/NolusProtocol'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3839',
            base_denom: 'unls',
            chain_name: 'nolus'
          },
          chain: {
            channel_id: 'channel-44'
          }
        }]
    },
    {
      description: 'Nomic\'s native token.',
      denom_units: [{
          denom: 'ibc/4F479350CB86D5E3AFA7F355DDE74EB1F25C2A8F0B3021A1641193B9F6D0A3AD',
          exponent: 0,
          aliases: ['unom']
        }, {
          denom: 'nom',
          exponent: 6
        }],
      base: 'ibc/4F479350CB86D5E3AFA7F355DDE74EB1F25C2A8F0B3021A1641193B9F6D0A3AD',
      name: 'Nomic',
      display: 'nom',
      symbol: 'NOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'unom',
            chain_name: 'nomic'
          },
          chain: {
            channel_id: 'channel-6478'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/376222D6D9DAE23092E29740E56B758580935A6D77C24C2ABD57A6A78A1F3955',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/376222D6D9DAE23092E29740E56B758580935A6D77C24C2ABD57A6A78A1F3955',
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
        x: 'https://x.com/osmosis'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-874',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/0433997003A2CFE10E483B93743BEC37F2F13B89854FD69599482E6DB8E6CE22',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/0433997003A2CFE10E483B93743BEC37F2F13B89854FD69599482E6DB8E6CE22',
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
            channel_id: 'channel-874',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'Persistence One is building a Bitcoin Cross-chain Swaps solution, enabling fast, zero-slippage secure swaps across Bitcoin Layer 2s.',
      denom_units: [{
          denom: 'ibc/B3881052DCC62E68955C71A49C5306717CFDE5B6526D39C89D1278DAE3284432',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      base: 'ibc/B3881052DCC62E68955C71A49C5306717CFDE5B6526D39C89D1278DAE3284432',
      name: 'Persistence',
      display: 'xprt',
      symbol: 'XPRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
      },
      coingecko_id: 'persistence',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://persistence.one/',
        x: 'https://x.com/PersistenceOne'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-136',
            base_denom: 'uxprt',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }]
    },
    {
      description: 'The native token of PRYZM',
      denom_units: [{
          denom: 'ibc/E67D49D7F361750487844054310EA5D787EDEC21F951CD8E605699097E65A3EC',
          exponent: 0,
          aliases: ['upryzm']
        }, {
          denom: 'pryzm',
          exponent: 6
        }],
      base: 'ibc/E67D49D7F361750487844054310EA5D787EDEC21F951CD8E605699097E65A3EC',
      name: 'Pryzm',
      display: 'pryzm',
      symbol: 'PRYZM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.svg'
        }],
      type_asset: 'sdk.coin',
      socials: {
        website: 'https://pryzm.zone/',
        x: 'https://x.com/Pryzm_Zone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'upryzm',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/7906C47FB3608D070131C0D4D09316BBCBF116755B3439F291D968EDAE675981',
          exponent: 0,
          aliases: ['p:uatom:30Sep2024']
        }, {
          denom: 'pATOM30Sep2024',
          exponent: 6
        }],
      base: 'ibc/7906C47FB3608D070131C0D4D09316BBCBF116755B3439F291D968EDAE675981',
      name: 'pAtom (30Sep2024)',
      display: 'pATOM30Sep2024',
      symbol: 'pATOM-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uatom:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/F36871374946FB454CF5B98860EBE038B9A73DDCB8493EAE30623E8A39B82D22',
          exponent: 0,
          aliases: ['p:uatom:31Dec2024']
        }, {
          denom: 'pATOM31Dec2024',
          exponent: 6
        }],
      base: 'ibc/F36871374946FB454CF5B98860EBE038B9A73DDCB8493EAE30623E8A39B82D22',
      name: 'pAtom (31Dec2024)',
      display: 'pATOM31Dec2024',
      symbol: 'pATOM-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uatom:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/B121C632F1970BD1E6AD0FADCD73A10174513F31EB5E12DC841C37EB01D4818A',
          exponent: 0,
          aliases: ['p:uatom:31Mar2025']
        }, {
          denom: 'pATOM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/B121C632F1970BD1E6AD0FADCD73A10174513F31EB5E12DC841C37EB01D4818A',
      name: 'pAtom (31Mar2025)',
      display: 'pATOM31Mar2025',
      symbol: 'pATOM-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uatom:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/744F1C72F065D3286ADF67D8BC2D411882268730195199A2FB23A02218C97C82',
          exponent: 0,
          aliases: ['p:uatom:30Jun2025']
        }, {
          denom: 'pATOM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/744F1C72F065D3286ADF67D8BC2D411882268730195199A2FB23A02218C97C82',
      name: 'pAtom (30Jun2025)',
      display: 'pATOM30Jun2025',
      symbol: 'pATOM-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uatom:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/A1679DD0A188CFE7CA4A3EAC3DFF8035B77A36EA245CD7189BA4E763C41AD1AF',
          exponent: 0,
          aliases: ['p:uatom:30Sep2025']
        }, {
          denom: 'pATOM30Sep2025',
          exponent: 6
        }],
      base: 'ibc/A1679DD0A188CFE7CA4A3EAC3DFF8035B77A36EA245CD7189BA4E763C41AD1AF',
      name: 'pAtom (30Sep2025)',
      display: 'pATOM30Sep2025',
      symbol: 'pATOM-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uatom:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/9FD85F92C1AE331F4A5F4D64A92860EEE9BDC9FD0F4FD46E97D62DDFDB88C4B4',
          exponent: 0,
          aliases: ['p:uatom:31Dec2025']
        }, {
          denom: 'pATOM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/9FD85F92C1AE331F4A5F4D64A92860EEE9BDC9FD0F4FD46E97D62DDFDB88C4B4',
      name: 'pAtom (31Dec2025)',
      display: 'pATOM31Dec2025',
      symbol: 'pATOM-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uatom:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/2E533B940C796E97DE15070587C5F102147C7BC827958D27089016B3D1E06118',
          exponent: 0,
          aliases: ['p:uatom:31Dec2026']
        }, {
          denom: 'pATOM31Dec2026',
          exponent: 6
        }],
      base: 'ibc/2E533B940C796E97DE15070587C5F102147C7BC827958D27089016B3D1E06118',
      name: 'pAtom (31Dec2026)',
      display: 'pATOM31Dec2026',
      symbol: 'pATOM-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uatom:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/7FC6AA40E11297966C395F37A01F6A3F374FE3CE4117896237EB4027B87FCA7F',
          exponent: 0,
          aliases: ['p:uosmo:30Sep2024']
        }, {
          denom: 'pOSMO30Sep2024',
          exponent: 6
        }],
      base: 'ibc/7FC6AA40E11297966C395F37A01F6A3F374FE3CE4117896237EB4027B87FCA7F',
      name: 'pOsmo (30Sep2024)',
      display: 'pOSMO30Sep2024',
      symbol: 'pOSMO-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uosmo:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/E1A49B2B001CEBE2AF0D4F5CA3281C4258EBB56FCCDBEBFDAA7B583BB76E239D',
          exponent: 0,
          aliases: ['p:uosmo:31Dec2024']
        }, {
          denom: 'pOSMO31Dec2024',
          exponent: 6
        }],
      base: 'ibc/E1A49B2B001CEBE2AF0D4F5CA3281C4258EBB56FCCDBEBFDAA7B583BB76E239D',
      name: 'pOsmo (31Dec2024)',
      display: 'pOSMO31Dec2024',
      symbol: 'pOSMO-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uosmo:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/EA022AF3D5ED64FECC523DA7A0DEC6206ADB8BD25369CBB65D803871BC9E7115',
          exponent: 0,
          aliases: ['p:uosmo:31Mar2025']
        }, {
          denom: 'pOSMO31Mar2025',
          exponent: 6
        }],
      base: 'ibc/EA022AF3D5ED64FECC523DA7A0DEC6206ADB8BD25369CBB65D803871BC9E7115',
      name: 'pOsmo (31Mar2025)',
      display: 'pOSMO31Mar2025',
      symbol: 'pOSMO-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uosmo:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/BB273622E72621A6C09F58DAEFB62A786619180E4BB0E9AFECE50EB67C7A5115',
          exponent: 0,
          aliases: ['p:uosmo:30Jun2025']
        }, {
          denom: 'pOSMO30Jun2025',
          exponent: 6
        }],
      base: 'ibc/BB273622E72621A6C09F58DAEFB62A786619180E4BB0E9AFECE50EB67C7A5115',
      name: 'pOsmo (30Jun2025)',
      display: 'pOSMO30Jun2025',
      symbol: 'pOSMO-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uosmo:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/F7BB2BA5090F143F9F2FD0B28A44C0B1CA1899A67DD3847CC10611C6AC737134',
          exponent: 0,
          aliases: ['p:uosmo:30Sep2025']
        }, {
          denom: 'pOSMO30Sep2025',
          exponent: 6
        }],
      base: 'ibc/F7BB2BA5090F143F9F2FD0B28A44C0B1CA1899A67DD3847CC10611C6AC737134',
      name: 'pOsmo (30Sep2025)',
      display: 'pOSMO30Sep2025',
      symbol: 'pOSMO-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uosmo:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/AB0D2405D425ABCDEBEF11FEDCEEDD273E96C150EDD0D81CC873DF22B1379D13',
          exponent: 0,
          aliases: ['p:uosmo:31Dec2025']
        }, {
          denom: 'pOSMO31Dec2025',
          exponent: 6
        }],
      base: 'ibc/AB0D2405D425ABCDEBEF11FEDCEEDD273E96C150EDD0D81CC873DF22B1379D13',
      name: 'pOsmo (31Dec2025)',
      display: 'pOSMO31Dec2025',
      symbol: 'pOSMO-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uosmo:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/2478BB4347AF1890333978255C500B17352FDE1D8F43D2B81956999F457151D2',
          exponent: 0,
          aliases: ['p:uosmo:31Dec2026']
        }, {
          denom: 'pOSMO31Dec2026',
          exponent: 6
        }],
      base: 'ibc/2478BB4347AF1890333978255C500B17352FDE1D8F43D2B81956999F457151D2',
      name: 'pOsmo (31Dec2026)',
      display: 'pOSMO31Dec2026',
      symbol: 'pOSMO-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uosmo:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/8EF206F4D464A803D74462C12B524AD2811407D402D52B5ED8647412EEE8C5A3',
          exponent: 0,
          aliases: ['p:inj:30Sep2024']
        }, {
          denom: 'pINJ30Sep2024',
          exponent: 18
        }],
      base: 'ibc/8EF206F4D464A803D74462C12B524AD2811407D402D52B5ED8647412EEE8C5A3',
      name: 'pInj (30Sep2024)',
      display: 'pINJ30Sep2024',
      symbol: 'pINJ-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:inj:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/8FEBBF7EAB54385A4AC31995D954719357A312CD61CC035B887E9A7F22E24368',
          exponent: 0,
          aliases: ['p:inj:31Dec2024']
        }, {
          denom: 'pINJ31Dec2024',
          exponent: 18
        }],
      base: 'ibc/8FEBBF7EAB54385A4AC31995D954719357A312CD61CC035B887E9A7F22E24368',
      name: 'pInj (31Dec2024)',
      display: 'pINJ31Dec2024',
      symbol: 'pINJ-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:inj:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/8929B944B697B4FE5023F0D738AE2F903D4BB184677B38BAF4534C0D2CE3A647',
          exponent: 0,
          aliases: ['p:inj:31Mar2025']
        }, {
          denom: 'pINJ31Mar2025',
          exponent: 18
        }],
      base: 'ibc/8929B944B697B4FE5023F0D738AE2F903D4BB184677B38BAF4534C0D2CE3A647',
      name: 'pInj (31Mar2025)',
      display: 'pINJ31Mar2025',
      symbol: 'pINJ-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:inj:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/3BFBCA7001B5BCD3CB7081DFEA482F850C67A032AF54134509B4B9C023409FA4',
          exponent: 0,
          aliases: ['p:inj:30Jun2025']
        }, {
          denom: 'pINJ30Jun2025',
          exponent: 18
        }],
      base: 'ibc/3BFBCA7001B5BCD3CB7081DFEA482F850C67A032AF54134509B4B9C023409FA4',
      name: 'pInj (30Jun2025)',
      display: 'pINJ30Jun2025',
      symbol: 'pINJ-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:inj:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/86249F2327D106685691DD1B9427866CE18AF77571C1451C63017DDFD22E855E',
          exponent: 0,
          aliases: ['p:inj:30Sep2025']
        }, {
          denom: 'pINJ30Sep2025',
          exponent: 18
        }],
      base: 'ibc/86249F2327D106685691DD1B9427866CE18AF77571C1451C63017DDFD22E855E',
      name: 'pInj (30Sep2025)',
      display: 'pINJ30Sep2025',
      symbol: 'pINJ-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:inj:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/66347D025091D38F214C43E8ED63B0418BCBFDBC1035D7CA08C5F5E76534DE6D',
          exponent: 0,
          aliases: ['p:inj:31Dec2025']
        }, {
          denom: 'pINJ31Dec2025',
          exponent: 18
        }],
      base: 'ibc/66347D025091D38F214C43E8ED63B0418BCBFDBC1035D7CA08C5F5E76534DE6D',
      name: 'pInj (31Dec2025)',
      display: 'pINJ31Dec2025',
      symbol: 'pINJ-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:inj:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/4B9E5F7B5D1CDA392E800A64557FF99267B169114786AE27265F0AB89156BFE5',
          exponent: 0,
          aliases: ['p:inj:31Dec2026']
        }, {
          denom: 'pINJ31Dec2026',
          exponent: 18
        }],
      base: 'ibc/4B9E5F7B5D1CDA392E800A64557FF99267B169114786AE27265F0AB89156BFE5',
      name: 'pInj (31Dec2026)',
      display: 'pINJ31Dec2026',
      symbol: 'pINJ-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:inj:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/3EAAFEFF7FA28BD246A312AA7C8087725B6E16FA8E54E20D016A36D317514A1B',
          exponent: 0,
          aliases: ['p:uluna:30Sep2024']
        }, {
          denom: 'pLUNA30Sep2024',
          exponent: 6
        }],
      base: 'ibc/3EAAFEFF7FA28BD246A312AA7C8087725B6E16FA8E54E20D016A36D317514A1B',
      name: 'pLuna (30Sep2024)',
      display: 'pLUNA30Sep2024',
      symbol: 'pLUNA-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uluna:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/FCE36AA01FE72DE7F7DA80A430250B8504EF4987383E8090285A8E4AA3895C94',
          exponent: 0,
          aliases: ['p:uluna:31Dec2024']
        }, {
          denom: 'pLUNA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/FCE36AA01FE72DE7F7DA80A430250B8504EF4987383E8090285A8E4AA3895C94',
      name: 'pLuna (31Dec2024)',
      display: 'pLUNA31Dec2024',
      symbol: 'pLUNA-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uluna:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/8DA5C485DD0920F7F709EEB04545CBD76E1B150AE54D49AB37F1A2E329FC9DDC',
          exponent: 0,
          aliases: ['p:uluna:31Mar2025']
        }, {
          denom: 'pLUNA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/8DA5C485DD0920F7F709EEB04545CBD76E1B150AE54D49AB37F1A2E329FC9DDC',
      name: 'pLuna (31Mar2025)',
      display: 'pLUNA31Mar2025',
      symbol: 'pLUNA-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uluna:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/EBFDEDAAF510C7E5C5082CA158637A26D2024841321D3C734CAB7B4E94A64CA6',
          exponent: 0,
          aliases: ['p:uluna:30Jun2025']
        }, {
          denom: 'pLUNA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/EBFDEDAAF510C7E5C5082CA158637A26D2024841321D3C734CAB7B4E94A64CA6',
      name: 'pLuna (30Jun2025)',
      display: 'pLUNA30Jun2025',
      symbol: 'pLUNA-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uluna:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/9D65BD86FB3A37A562C0C7C718BFAF41907944025DB811A53ABB7B529205325E',
          exponent: 0,
          aliases: ['p:uluna:30Sep2025']
        }, {
          denom: 'pLUNA30Sep2025',
          exponent: 6
        }],
      base: 'ibc/9D65BD86FB3A37A562C0C7C718BFAF41907944025DB811A53ABB7B529205325E',
      name: 'pLuna (30Sep2025)',
      display: 'pLUNA30Sep2025',
      symbol: 'pLUNA-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uluna:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/311A34DB74E817F73D3EA2464FD8A1FB2EC57208E1071B1D89712F60C7DFB4BC',
          exponent: 0,
          aliases: ['p:uluna:31Dec2025']
        }, {
          denom: 'pLUNA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/311A34DB74E817F73D3EA2464FD8A1FB2EC57208E1071B1D89712F60C7DFB4BC',
      name: 'pLuna (31Dec2025)',
      display: 'pLUNA31Dec2025',
      symbol: 'pLUNA-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uluna:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/50BDEFCC24FF96F72B464120A10AEA42E99A6FC2F3A32BAC72EC8CBD85F3728A',
          exponent: 0,
          aliases: ['p:uluna:31Dec2026']
        }, {
          denom: 'pLUNA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/50BDEFCC24FF96F72B464120A10AEA42E99A6FC2F3A32BAC72EC8CBD85F3728A',
      name: 'pLuna (31Dec2026)',
      display: 'pLUNA31Dec2026',
      symbol: 'pLUNA-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uluna:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/B0CE710BB88B020F100F8D837EB8EA8592CC22F565A784C042958680C5225900',
          exponent: 0,
          aliases: ['p:uauuu:30Sep2024']
        }, {
          denom: 'pAUUU30Sep2024',
          exponent: 6
        }],
      base: 'ibc/B0CE710BB88B020F100F8D837EB8EA8592CC22F565A784C042958680C5225900',
      name: 'pAuuu (30Sep2024)',
      display: 'pAUUU30Sep2024',
      symbol: 'pAUUU-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uauuu:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/793188818EE048028A2CCAF4ACD1684D25737280F0C9DFD4B7B44AD467B2FC26',
          exponent: 0,
          aliases: ['p:uauuu:31Dec2024']
        }, {
          denom: 'pAUUU31Dec2024',
          exponent: 6
        }],
      base: 'ibc/793188818EE048028A2CCAF4ACD1684D25737280F0C9DFD4B7B44AD467B2FC26',
      name: 'pAuuu (31Dec2024)',
      display: 'pAUUU31Dec2024',
      symbol: 'pAUUU-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uauuu:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/A7ED0773A24B90828587A35971EA9805BCAAC0952E4E28B2619359F15E55374B',
          exponent: 0,
          aliases: ['p:uauuu:30Jun2025']
        }, {
          denom: 'pAUUU30Jun2025',
          exponent: 6
        }],
      base: 'ibc/A7ED0773A24B90828587A35971EA9805BCAAC0952E4E28B2619359F15E55374B',
      name: 'pAuuu (30Jun2025)',
      display: 'pAUUU30Jun2025',
      symbol: 'pAUUU-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uauuu:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/F6F7567929696075CDE4EB2089F11D290DA007E9D1BCAB6FEDFFA5E703025537',
          exponent: 0,
          aliases: ['p:uauuu:31Dec2025']
        }, {
          denom: 'pAUUU31Dec2025',
          exponent: 6
        }],
      base: 'ibc/F6F7567929696075CDE4EB2089F11D290DA007E9D1BCAB6FEDFFA5E703025537',
      name: 'pAuuu (31Dec2025)',
      display: 'pAUUU31Dec2025',
      symbol: 'pAUUU-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uauuu:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/8ED00ABB49BFA4B65C4D3499A594B0052595969D5E85AFB51BC2DC0A611392BC',
          exponent: 0,
          aliases: ['p:uauuu:31Dec2026']
        }, {
          denom: 'pAUUU31Dec2026',
          exponent: 6
        }],
      base: 'ibc/8ED00ABB49BFA4B65C4D3499A594B0052595969D5E85AFB51BC2DC0A611392BC',
      name: 'pAuuu (31Dec2026)',
      display: 'pAUUU31Dec2026',
      symbol: 'pAUUU-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:uauuu:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/2BB5606AB84D26B17607B43CF44A1C4F11DFF9D6BB19693D9CCFEFA99ABDB87F',
          exponent: 0,
          aliases: ['p:stutia:30Sep2024']
        }, {
          denom: 'pstTIA30Sep2024',
          exponent: 6
        }],
      base: 'ibc/2BB5606AB84D26B17607B43CF44A1C4F11DFF9D6BB19693D9CCFEFA99ABDB87F',
      name: 'pstTia (30Sep2024)',
      display: 'pstTIA30Sep2024',
      symbol: 'pstTIA-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:stutia:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/4875E15E5944C6A69D6B3CD2AC2C6E86082DC6880CF8048EB781D128F614AEBD',
          exponent: 0,
          aliases: ['p:stutia:31Dec2024']
        }, {
          denom: 'pstTIA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/4875E15E5944C6A69D6B3CD2AC2C6E86082DC6880CF8048EB781D128F614AEBD',
      name: 'pstTia (31Dec2024)',
      display: 'pstTIA31Dec2024',
      symbol: 'pstTIA-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:stutia:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/180F84B7FBFC1A3A88D4F95DED01D624250A67970E443E79D50A1A66CCBD35FA',
          exponent: 0,
          aliases: ['p:stutia:31Mar2025']
        }, {
          denom: 'pstTIA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/180F84B7FBFC1A3A88D4F95DED01D624250A67970E443E79D50A1A66CCBD35FA',
      name: 'pstTia (31Mar2025)',
      display: 'pstTIA31Mar2025',
      symbol: 'pstTIA-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:stutia:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/7ED67613EAA04800D81D192119F5433D09FE9F9FC8F62F235A4034A009A88858',
          exponent: 0,
          aliases: ['p:stutia:30Jun2025']
        }, {
          denom: 'pstTIA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/7ED67613EAA04800D81D192119F5433D09FE9F9FC8F62F235A4034A009A88858',
      name: 'pstTia (30Jun2025)',
      display: 'pstTIA30Jun2025',
      symbol: 'pstTIA-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:stutia:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/AC726C2701584C97967EBF7CECF70B6AC58DF837E41E20D7C911EE5B72300B84',
          exponent: 0,
          aliases: ['p:stutia:31Dec2025']
        }, {
          denom: 'pstTIA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/AC726C2701584C97967EBF7CECF70B6AC58DF837E41E20D7C911EE5B72300B84',
      name: 'pstTia (31Dec2025)',
      display: 'pstTIA31Dec2025',
      symbol: 'pstTIA-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:stutia:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/859D551CE0ED1CD7A91E92518C7F30172246A43ECEF8501DCF1E95E5A0FB3ACF',
          exponent: 0,
          aliases: ['p:stutia:31Dec2026']
        }, {
          denom: 'pstTIA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/859D551CE0ED1CD7A91E92518C7F30172246A43ECEF8501DCF1E95E5A0FB3ACF',
      name: 'pstTia (31Dec2026)',
      display: 'pstTIA31Dec2026',
      symbol: 'pstTIA-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:stutia:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/B31F4F9480097DF1525CFED602D96661E9D46F906E3FF21C14BFF5FD8F9AA268',
          exponent: 0,
          aliases: ['p:stadydx:30Sep2024']
        }, {
          denom: 'pstDYDX30Sep2024',
          exponent: 18
        }],
      base: 'ibc/B31F4F9480097DF1525CFED602D96661E9D46F906E3FF21C14BFF5FD8F9AA268',
      name: 'pstDydx (30Sep2024)',
      display: 'pstDYDX30Sep2024',
      symbol: 'pstDYDX-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:stadydx:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/5028FFAD0FB521E0D2A351698377A2BA8523E9971B0A48A18270439E0B50718A',
          exponent: 0,
          aliases: ['p:stadydx:31Dec2024']
        }, {
          denom: 'pstDYDX31Dec2024',
          exponent: 18
        }],
      base: 'ibc/5028FFAD0FB521E0D2A351698377A2BA8523E9971B0A48A18270439E0B50718A',
      name: 'pstDydx (31Dec2024)',
      display: 'pstDYDX31Dec2024',
      symbol: 'pstDYDX-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:stadydx:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/C89B6218E66AFD2D82E88A22CE01283D3D9518FFFDDA1C0E25EED72BA30B69A1',
          exponent: 0,
          aliases: ['p:stadydx:31Mar2025']
        }, {
          denom: 'pstDYDX31Mar2025',
          exponent: 18
        }],
      base: 'ibc/C89B6218E66AFD2D82E88A22CE01283D3D9518FFFDDA1C0E25EED72BA30B69A1',
      name: 'pstDydx (31Mar2025)',
      display: 'pstDYDX31Mar2025',
      symbol: 'pstDYDX-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:stadydx:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/F9207826BEE70C8B4982FB0B88393F0E919D81C1B0FF1043898AFB581726CCAA',
          exponent: 0,
          aliases: ['p:stadydx:30Jun2025']
        }, {
          denom: 'pstDYDX30Jun2025',
          exponent: 18
        }],
      base: 'ibc/F9207826BEE70C8B4982FB0B88393F0E919D81C1B0FF1043898AFB581726CCAA',
      name: 'pstDydx (30Jun2025)',
      display: 'pstDYDX30Jun2025',
      symbol: 'pstDYDX-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:stadydx:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/26DD3C1B83CBB9CB5A251622AEA148DAF8EDAA1783AC4BDC3189B499DF989715',
          exponent: 0,
          aliases: ['p:stadydx:31Dec2025']
        }, {
          denom: 'pstDYDX31Dec2025',
          exponent: 18
        }],
      base: 'ibc/26DD3C1B83CBB9CB5A251622AEA148DAF8EDAA1783AC4BDC3189B499DF989715',
      name: 'pstDydx (31Dec2025)',
      display: 'pstDYDX31Dec2025',
      symbol: 'pstDYDX-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:stadydx:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/A6C8BC244141FE94FECCDA131B08DAC712719E5C44ADDCEA348EB490C39D3E6D',
          exponent: 0,
          aliases: ['p:stadydx:31Dec2026']
        }, {
          denom: 'pstDYDX31Dec2026',
          exponent: 18
        }],
      base: 'ibc/A6C8BC244141FE94FECCDA131B08DAC712719E5C44ADDCEA348EB490C39D3E6D',
      name: 'pstDydx (31Dec2026)',
      display: 'pstDYDX31Dec2026',
      symbol: 'pstDYDX-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:stadydx:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/BC52BD4463DE970632DE7C324525ED8DDC8FD22BF19A65C984B80FF5EC30AABF',
          exponent: 0,
          aliases: ['p:udatom:31Dec2024']
        }, {
          denom: 'pdATOM31Dec2024',
          exponent: 6
        }],
      base: 'ibc/BC52BD4463DE970632DE7C324525ED8DDC8FD22BF19A65C984B80FF5EC30AABF',
      name: 'pdAtom (31Dec2024)',
      display: 'pdATOM31Dec2024',
      symbol: 'pdATOM-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:udatom:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/2D71D57545F3D462718C55EA04A8F339030131FC4921D3EFB957662C3098088E',
          exponent: 0,
          aliases: ['p:udatom:31Mar2025']
        }, {
          denom: 'pdATOM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/2D71D57545F3D462718C55EA04A8F339030131FC4921D3EFB957662C3098088E',
      name: 'pdAtom (31Mar2025)',
      display: 'pdATOM31Mar2025',
      symbol: 'pdATOM-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:udatom:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/A8872A1901A6A4DD7575CED4A1CF3EEBC51FD8C234871147C4C8E19162C8FA9C',
          exponent: 0,
          aliases: ['p:udatom:30Jun2025']
        }, {
          denom: 'pdATOM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/A8872A1901A6A4DD7575CED4A1CF3EEBC51FD8C234871147C4C8E19162C8FA9C',
      name: 'pdAtom (30Jun2025)',
      display: 'pdATOM30Jun2025',
      symbol: 'pdATOM-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:udatom:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/291E5E4134681794575927149ED8861C3E579D25A962061BF5AD11EBF7A69D80',
          exponent: 0,
          aliases: ['p:udatom:31Dec2025']
        }, {
          denom: 'pdATOM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/291E5E4134681794575927149ED8861C3E579D25A962061BF5AD11EBF7A69D80',
      name: 'pdAtom (31Dec2025)',
      display: 'pdATOM31Dec2025',
      symbol: 'pdATOM-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:udatom:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/CB3B0AA000288C5576F5352E16949273F7FBAA243BA6ADA07A625ED796CD0AB2',
          exponent: 0,
          aliases: ['p:udatom:31Dec2026']
        }, {
          denom: 'pdATOM31Dec2026',
          exponent: 6
        }],
      base: 'ibc/CB3B0AA000288C5576F5352E16949273F7FBAA243BA6ADA07A625ED796CD0AB2',
      name: 'pdAtom (31Dec2026)',
      display: 'pdATOM31Dec2026',
      symbol: 'pdATOM-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:udatom:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/DF4050B9251168C5863B2F38A47F7A25E41E29DCF81E13173D27298E2F046B6C',
          exponent: 0,
          aliases: ['p:utia:31Dec2024']
        }, {
          denom: 'pTIA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/DF4050B9251168C5863B2F38A47F7A25E41E29DCF81E13173D27298E2F046B6C',
      name: 'pTia (31Dec2024)',
      display: 'pTIA31Dec2024',
      symbol: 'pTIA-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:utia:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/FCBE19BF79E1FCC786C7DA660FB7EB13295962319F6A403917E65295CADF3794',
          exponent: 0,
          aliases: ['p:utia:31Mar2025']
        }, {
          denom: 'pTIA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/FCBE19BF79E1FCC786C7DA660FB7EB13295962319F6A403917E65295CADF3794',
      name: 'pTia (31Mar2025)',
      display: 'pTIA31Mar2025',
      symbol: 'pTIA-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:utia:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/E2168B93EAF9586CF87258BC1911082A47553D25B9B13E9E55A403BF56EC5207',
          exponent: 0,
          aliases: ['p:utia:30Jun2025']
        }, {
          denom: 'pTIA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/E2168B93EAF9586CF87258BC1911082A47553D25B9B13E9E55A403BF56EC5207',
      name: 'pTia (30Jun2025)',
      display: 'pTIA30Jun2025',
      symbol: 'pTIA-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:utia:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/C7BCF2DB4609EF8D3C308C8B44AA096CDD7C7E3492876FC7DA62F2CC07418AA9',
          exponent: 0,
          aliases: ['p:utia:30Sep2025']
        }, {
          denom: 'pTIA30Sep2025',
          exponent: 6
        }],
      base: 'ibc/C7BCF2DB4609EF8D3C308C8B44AA096CDD7C7E3492876FC7DA62F2CC07418AA9',
      name: 'pTia (30Sep2025)',
      display: 'pTIA30Sep2025',
      symbol: 'pTIA-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:utia:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/AD14F62088169B7CF8BBBA2266A841F716B296C8A3BEB71115B17ABAE63D7F9E',
          exponent: 0,
          aliases: ['p:utia:31Dec2025']
        }, {
          denom: 'pTIA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/AD14F62088169B7CF8BBBA2266A841F716B296C8A3BEB71115B17ABAE63D7F9E',
      name: 'pTia (31Dec2025)',
      display: 'pTIA31Dec2025',
      symbol: 'pTIA-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:utia:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/E0F2D01748C6F70B04DAC865BB00C0839E7C7A2F85F652A169D09DB63C53A07A',
          exponent: 0,
          aliases: ['p:utia:31Dec2026']
        }, {
          denom: 'pTIA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/E0F2D01748C6F70B04DAC865BB00C0839E7C7A2F85F652A169D09DB63C53A07A',
      name: 'pTia (31Dec2026)',
      display: 'pTIA31Dec2026',
      symbol: 'pTIA-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:utia:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/E8C1CB98D70302542EE71B35D7479033462E9956A715E7F48AFA9127062504D4',
          exponent: 0,
          aliases: ['p:ausdy:31Mar2025']
        }, {
          denom: 'pUSDY31Mar2025',
          exponent: 18
        }],
      base: 'ibc/E8C1CB98D70302542EE71B35D7479033462E9956A715E7F48AFA9127062504D4',
      name: 'pUsdy (31Mar2025)',
      display: 'pUSDY31Mar2025',
      symbol: 'pUSDY-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:ausdy:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/6418A98C0F01FE7316EF349ADBEAFA1AA51126FCB45110A0233C3D9C420C5693',
          exponent: 0,
          aliases: ['p:ausdy:30Jun2025']
        }, {
          denom: 'pUSDY30Jun2025',
          exponent: 18
        }],
      base: 'ibc/6418A98C0F01FE7316EF349ADBEAFA1AA51126FCB45110A0233C3D9C420C5693',
      name: 'pUsdy (30Jun2025)',
      display: 'pUSDY30Jun2025',
      symbol: 'pUSDY-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:ausdy:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/6CDC9E6D25DDCD7D72216FD182C29CF3BFCB9FCB5898F2E64AF3CA453C3659FF',
          exponent: 0,
          aliases: ['p:ausdy:30Sep2025']
        }, {
          denom: 'pUSDY30Sep2025',
          exponent: 18
        }],
      base: 'ibc/6CDC9E6D25DDCD7D72216FD182C29CF3BFCB9FCB5898F2E64AF3CA453C3659FF',
      name: 'pUsdy (30Sep2025)',
      display: 'pUSDY30Sep2025',
      symbol: 'pUSDY-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:ausdy:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/97725E4470CB14F483468DE3681B865DB5C9D97E343BE318B594F59CB65EB4CE',
          exponent: 0,
          aliases: ['p:ausdy:31Dec2025']
        }, {
          denom: 'pUSDY31Dec2025',
          exponent: 18
        }],
      base: 'ibc/97725E4470CB14F483468DE3681B865DB5C9D97E343BE318B594F59CB65EB4CE',
      name: 'pUsdy (31Dec2025)',
      display: 'pUSDY31Dec2025',
      symbol: 'pUSDY-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:ausdy:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/F040FB61DC0C3FA22E0D2863B1645741420246F8CB8010C8CDAD602CFAECB6ED',
          exponent: 0,
          aliases: ['p:ausdy:31Mar2026']
        }, {
          denom: 'pUSDY31Mar2026',
          exponent: 18
        }],
      base: 'ibc/F040FB61DC0C3FA22E0D2863B1645741420246F8CB8010C8CDAD602CFAECB6ED',
      name: 'pUsdy (31Mar2026)',
      display: 'pUSDY31Mar2026',
      symbol: 'pUSDY-31Mar2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:ausdy:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/0A5B37AA5A000BA72A5E18E1850E1C87A719333FB64E50957E338BAC40645B3A',
          exponent: 0,
          aliases: ['p:ausdy:30Jun2026']
        }, {
          denom: 'pUSDY30Jun2026',
          exponent: 18
        }],
      base: 'ibc/0A5B37AA5A000BA72A5E18E1850E1C87A719333FB64E50957E338BAC40645B3A',
      name: 'pUsdy (30Jun2026)',
      display: 'pUSDY30Jun2026',
      symbol: 'pUSDY-30Jun2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:ausdy:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/14AE2E60793DA1C1344EFB4E726BBECEEBE14CB43B1112CA8C9ED596F580676F',
          exponent: 0,
          aliases: ['p:upryzm:31Mar2025']
        }, {
          denom: 'pPRYZM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/14AE2E60793DA1C1344EFB4E726BBECEEBE14CB43B1112CA8C9ED596F580676F',
      name: 'pPryzm (31Mar2025)',
      display: 'pPRYZM31Mar2025',
      symbol: 'pPRYZM-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:upryzm:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/19C591A899376AC88D9EBA046CCC1D6B09518AE369625AE9B23AC15D45113483',
          exponent: 0,
          aliases: ['p:upryzm:30Jun2025']
        }, {
          denom: 'pPRYZM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/19C591A899376AC88D9EBA046CCC1D6B09518AE369625AE9B23AC15D45113483',
      name: 'pPryzm (30Jun2025)',
      display: 'pPRYZM30Jun2025',
      symbol: 'pPRYZM-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:upryzm:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/035FC22716E2434D514F195C10F4533BA0B35DA41555543EB45CB5B1F2CC9D0C',
          exponent: 0,
          aliases: ['p:upryzm:30Sep2025']
        }, {
          denom: 'pPRYZM30Sep2025',
          exponent: 6
        }],
      base: 'ibc/035FC22716E2434D514F195C10F4533BA0B35DA41555543EB45CB5B1F2CC9D0C',
      name: 'pPryzm (30Sep2025)',
      display: 'pPRYZM30Sep2025',
      symbol: 'pPRYZM-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:upryzm:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/2971F1B51EF1380A75C15F7BAF5F46D889B60C1CED59AA43B4149A0D654FC90B',
          exponent: 0,
          aliases: ['p:upryzm:31Dec2025']
        }, {
          denom: 'pPRYZM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/2971F1B51EF1380A75C15F7BAF5F46D889B60C1CED59AA43B4149A0D654FC90B',
      name: 'pPryzm (31Dec2025)',
      display: 'pPRYZM31Dec2025',
      symbol: 'pPRYZM-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:upryzm:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/24B77D3C9E9D9C4DF438ABD72C1BE844DB093D1D933F348B1333E4B901F7E78B',
          exponent: 0,
          aliases: ['p:upryzm:31Mar2026']
        }, {
          denom: 'pPRYZM31Mar2026',
          exponent: 6
        }],
      base: 'ibc/24B77D3C9E9D9C4DF438ABD72C1BE844DB093D1D933F348B1333E4B901F7E78B',
      name: 'pPryzm (31Mar2026)',
      display: 'pPRYZM31Mar2026',
      symbol: 'pPRYZM-31Mar2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:upryzm:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/24EFAD2EDE18C60E2AAB8736D527F2EE13D509F74C925B34ECA4C8706F0D4D7B',
          exponent: 0,
          aliases: ['p:upryzm:30Jun2026']
        }, {
          denom: 'pPRYZM30Jun2026',
          exponent: 6
        }],
      base: 'ibc/24EFAD2EDE18C60E2AAB8736D527F2EE13D509F74C925B34ECA4C8706F0D4D7B',
      name: 'pPryzm (30Jun2026)',
      display: 'pPRYZM30Jun2026',
      symbol: 'pPRYZM-30Jun2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pPryzm.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:upryzm:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for sUSDS with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/5B4100AE8EB731C3E1BDC9A6D88EEC5FB0DB7008E4E463B435B42AF6FCC1D1FC',
          exponent: 0,
          aliases: ['p:asusds:30Jun2025']
        }, {
          denom: 'psUSDS30Jun2025',
          exponent: 18
        }],
      base: 'ibc/5B4100AE8EB731C3E1BDC9A6D88EEC5FB0DB7008E4E463B435B42AF6FCC1D1FC',
      name: 'psUsds (30Jun2025)',
      display: 'psUSDS30Jun2025',
      symbol: 'psUSDS-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:asusds:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for sUSDS with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/056A2B1BA87702B162FE6AF08ED152898D2954D5BF712442BB8EB7B96986FE1A',
          exponent: 0,
          aliases: ['p:asusds:30Sep2025']
        }, {
          denom: 'psUSDS30Sep2025',
          exponent: 18
        }],
      base: 'ibc/056A2B1BA87702B162FE6AF08ED152898D2954D5BF712442BB8EB7B96986FE1A',
      name: 'psUsds (30Sep2025)',
      display: 'psUSDS30Sep2025',
      symbol: 'psUSDS-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:asusds:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for sUSDS with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/480DB918F0B9C8CCA8FA3E89437F3F628CD1A88FE83900CF452037D38FB2F8BE',
          exponent: 0,
          aliases: ['p:asusds:31Dec2025']
        }, {
          denom: 'psUSDS31Dec2025',
          exponent: 18
        }],
      base: 'ibc/480DB918F0B9C8CCA8FA3E89437F3F628CD1A88FE83900CF452037D38FB2F8BE',
      name: 'psUsds (31Dec2025)',
      display: 'psUSDS31Dec2025',
      symbol: 'psUSDS-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:asusds:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for sUSDS with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/4F86DE0444D5F01C39419E0529462BA222BFCFF76F701B5795421189A56F656A',
          exponent: 0,
          aliases: ['p:asusds:31Mar2026']
        }, {
          denom: 'psUSDS31Mar2026',
          exponent: 18
        }],
      base: 'ibc/4F86DE0444D5F01C39419E0529462BA222BFCFF76F701B5795421189A56F656A',
      name: 'psUsds (31Mar2026)',
      display: 'psUSDS31Mar2026',
      symbol: 'psUSDS-31Mar2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:asusds:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for sUSDS with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/7E5FE427BBBF5374035181052DE780AE8A4F42E2F968C1CD4E730A17ADBD2FDB',
          exponent: 0,
          aliases: ['p:asusds:30Jun2026']
        }, {
          denom: 'psUSDS30Jun2026',
          exponent: 18
        }],
      base: 'ibc/7E5FE427BBBF5374035181052DE780AE8A4F42E2F968C1CD4E730A17ADBD2FDB',
      name: 'psUsds (30Jun2026)',
      display: 'psUSDS30Jun2026',
      symbol: 'psUSDS-30Jun2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/psUsds.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:asusds:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for mBTC with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/77612007B421592D4D53F42D0FD71D96216F928483C9F47D2D3AAAF09AF6CE9B',
          exponent: 0,
          aliases: ['p:ambtc:30Sep2025']
        }, {
          denom: 'pmBTC30Sep2025',
          exponent: 18
        }],
      base: 'ibc/77612007B421592D4D53F42D0FD71D96216F928483C9F47D2D3AAAF09AF6CE9B',
      name: 'pmBTC (30Sep2025)',
      display: 'pmBTC30Sep2025',
      symbol: 'pmBTC-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pmBTC.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pmBTC.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pmBTC.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pmBTC.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:ambtc:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for mBTC with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/890F552E861BA4F0C9520BA55CA249DC8F2CD48B479A61D576588598AE8050FE',
          exponent: 0,
          aliases: ['p:ambtc:31Dec2025']
        }, {
          denom: 'pmBTC31Dec2025',
          exponent: 18
        }],
      base: 'ibc/890F552E861BA4F0C9520BA55CA249DC8F2CD48B479A61D576588598AE8050FE',
      name: 'pmBTC (31Dec2025)',
      display: 'pmBTC31Dec2025',
      symbol: 'pmBTC-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pmBTC.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pmBTC.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pmBTC.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pmBTC.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:ambtc:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for mBTC with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/8321AD47BA224466743DB3EBC6EB5C25D6C37F6DCAC44C646EB21B5939D42254',
          exponent: 0,
          aliases: ['p:ambtc:31Mar2026']
        }, {
          denom: 'pmBTC31Mar2026',
          exponent: 18
        }],
      base: 'ibc/8321AD47BA224466743DB3EBC6EB5C25D6C37F6DCAC44C646EB21B5939D42254',
      name: 'pmBTC (31Mar2026)',
      display: 'pmBTC31Mar2026',
      symbol: 'pmBTC-31Mar2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pmBTC.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pmBTC.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pmBTC.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pmBTC.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:ambtc:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for mBTC with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/EFC5988D566565349EF27F93D7620050CEF2A15ABAD0D69E413545C2B6A6181B',
          exponent: 0,
          aliases: ['p:ambtc:30Jun2026']
        }, {
          denom: 'pmBTC30Jun2026',
          exponent: 18
        }],
      base: 'ibc/EFC5988D566565349EF27F93D7620050CEF2A15ABAD0D69E413545C2B6A6181B',
      name: 'pmBTC (30Jun2026)',
      display: 'pmBTC30Jun2026',
      symbol: 'pmBTC-30Jun2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pmBTC.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pmBTC.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pmBTC.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pmBTC.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'p:ambtc:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/3BFA0B28E6E53FF48481996CEED90695D3C489A75D687AD8C11AC98D64D69AEC',
          exponent: 0,
          aliases: ['y:uatom:30Sep2024']
        }, {
          denom: 'yATOM30Sep2024',
          exponent: 6
        }],
      base: 'ibc/3BFA0B28E6E53FF48481996CEED90695D3C489A75D687AD8C11AC98D64D69AEC',
      name: 'yAtom (30Sep2024)',
      display: 'yATOM30Sep2024',
      symbol: 'yATOM-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uatom:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/620B8AAE42472D6FBA98046803CBD79A9FF23F15329D22A95727865EDAA3AD0A',
          exponent: 0,
          aliases: ['y:uatom:31Dec2024']
        }, {
          denom: 'yATOM31Dec2024',
          exponent: 6
        }],
      base: 'ibc/620B8AAE42472D6FBA98046803CBD79A9FF23F15329D22A95727865EDAA3AD0A',
      name: 'yAtom (31Dec2024)',
      display: 'yATOM31Dec2024',
      symbol: 'yATOM-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uatom:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/7D33A0D8A76858A170F685D82D9DE1714E5C24F5D465941A0A04FB09D2DF0FA2',
          exponent: 0,
          aliases: ['y:uatom:31Mar2025']
        }, {
          denom: 'yATOM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/7D33A0D8A76858A170F685D82D9DE1714E5C24F5D465941A0A04FB09D2DF0FA2',
      name: 'yAtom (31Mar2025)',
      display: 'yATOM31Mar2025',
      symbol: 'yATOM-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uatom:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/9E29726AD5DD1E84EC69767C6BC29020929CB8E6D2DC4EB6FCB9C9EFB9010E31',
          exponent: 0,
          aliases: ['y:uatom:30Jun2025']
        }, {
          denom: 'yATOM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/9E29726AD5DD1E84EC69767C6BC29020929CB8E6D2DC4EB6FCB9C9EFB9010E31',
      name: 'yAtom (30Jun2025)',
      display: 'yATOM30Jun2025',
      symbol: 'yATOM-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uatom:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/14A2C276796B1BEA219300185635F39A45B10672219740718C0DDF5CF1E8DE91',
          exponent: 0,
          aliases: ['y:uatom:30Sep2025']
        }, {
          denom: 'yATOM30Sep2025',
          exponent: 6
        }],
      base: 'ibc/14A2C276796B1BEA219300185635F39A45B10672219740718C0DDF5CF1E8DE91',
      name: 'yAtom (30Sep2025)',
      display: 'yATOM30Sep2025',
      symbol: 'yATOM-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uatom:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/0A1E478AAE80006AD9410D8A87030017919D59353EE9E27FB2B9242AF5654145',
          exponent: 0,
          aliases: ['y:uatom:31Dec2025']
        }, {
          denom: 'yATOM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/0A1E478AAE80006AD9410D8A87030017919D59353EE9E27FB2B9242AF5654145',
      name: 'yAtom (31Dec2025)',
      display: 'yATOM31Dec2025',
      symbol: 'yATOM-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uatom:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/7399B54407A785130792A0A938C2DCA93AB652EF60F22D5FA2B225DA5CDCB856',
          exponent: 0,
          aliases: ['y:uatom:31Dec2026']
        }, {
          denom: 'yATOM31Dec2026',
          exponent: 6
        }],
      base: 'ibc/7399B54407A785130792A0A938C2DCA93AB652EF60F22D5FA2B225DA5CDCB856',
      name: 'yAtom (31Dec2026)',
      display: 'yATOM31Dec2026',
      symbol: 'yATOM-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uatom:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/7460850991B5A6AA851F5E52E911A8C6AF981F8DC048ABF78736A8B0DE87793F',
          exponent: 0,
          aliases: ['y:uosmo:30Sep2024']
        }, {
          denom: 'yOSMO30Sep2024',
          exponent: 6
        }],
      base: 'ibc/7460850991B5A6AA851F5E52E911A8C6AF981F8DC048ABF78736A8B0DE87793F',
      name: 'yOsmo (30Sep2024)',
      display: 'yOSMO30Sep2024',
      symbol: 'yOSMO-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uosmo:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/F270A2C8A745353427D7FB42C2A83BBA7280043661D4624EF03C35758232D438',
          exponent: 0,
          aliases: ['y:uosmo:31Dec2024']
        }, {
          denom: 'yOSMO31Dec2024',
          exponent: 6
        }],
      base: 'ibc/F270A2C8A745353427D7FB42C2A83BBA7280043661D4624EF03C35758232D438',
      name: 'yOsmo (31Dec2024)',
      display: 'yOSMO31Dec2024',
      symbol: 'yOSMO-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uosmo:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/8AC42B33C9C524C10301517DDA6A9A54F83490D74F35FC856464F032A66EF1E3',
          exponent: 0,
          aliases: ['y:uosmo:31Mar2025']
        }, {
          denom: 'yOSMO31Mar2025',
          exponent: 6
        }],
      base: 'ibc/8AC42B33C9C524C10301517DDA6A9A54F83490D74F35FC856464F032A66EF1E3',
      name: 'yOsmo (31Mar2025)',
      display: 'yOSMO31Mar2025',
      symbol: 'yOSMO-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uosmo:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/86A42FB715EC79029618020DB38CEC2EB236F304EC95E0EF2249A8363FA570D5',
          exponent: 0,
          aliases: ['y:uosmo:30Jun2025']
        }, {
          denom: 'yOSMO30Jun2025',
          exponent: 6
        }],
      base: 'ibc/86A42FB715EC79029618020DB38CEC2EB236F304EC95E0EF2249A8363FA570D5',
      name: 'yOsmo (30Jun2025)',
      display: 'yOSMO30Jun2025',
      symbol: 'yOSMO-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uosmo:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/9E335FA59CC54EAE65F637A2E73E4806991087104B5E9AF3135292D149157B43',
          exponent: 0,
          aliases: ['y:uosmo:30Sep2025']
        }, {
          denom: 'yOSMO30Sep2025',
          exponent: 6
        }],
      base: 'ibc/9E335FA59CC54EAE65F637A2E73E4806991087104B5E9AF3135292D149157B43',
      name: 'yOsmo (30Sep2025)',
      display: 'yOSMO30Sep2025',
      symbol: 'yOSMO-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uosmo:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/3C359239D55309B23AD0FED776E161B4C03EFCD69568E847D2D24CD3D283252C',
          exponent: 0,
          aliases: ['y:uosmo:31Dec2025']
        }, {
          denom: 'yOSMO31Dec2025',
          exponent: 6
        }],
      base: 'ibc/3C359239D55309B23AD0FED776E161B4C03EFCD69568E847D2D24CD3D283252C',
      name: 'yOsmo (31Dec2025)',
      display: 'yOSMO31Dec2025',
      symbol: 'yOSMO-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uosmo:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/BA33A75124CF1116E047DD73E2CE3A680B01B97D90B1096387703B303D51EC0F',
          exponent: 0,
          aliases: ['y:uosmo:31Dec2026']
        }, {
          denom: 'yOSMO31Dec2026',
          exponent: 6
        }],
      base: 'ibc/BA33A75124CF1116E047DD73E2CE3A680B01B97D90B1096387703B303D51EC0F',
      name: 'yOsmo (31Dec2026)',
      display: 'yOSMO31Dec2026',
      symbol: 'yOSMO-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uosmo:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/27690FC955AA09922AAD1EC47A9E28B9AEC20E54D4E225E2301CC7AA9B6A03F9',
          exponent: 0,
          aliases: ['y:inj:30Sep2024']
        }, {
          denom: 'yINJ30Sep2024',
          exponent: 18
        }],
      base: 'ibc/27690FC955AA09922AAD1EC47A9E28B9AEC20E54D4E225E2301CC7AA9B6A03F9',
      name: 'yInj (30Sep2024)',
      display: 'yINJ30Sep2024',
      symbol: 'yINJ-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:inj:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/FFB8C6C3BF7CC7E0D2B8CC4464840281A8695DC4D538CFBFA196C980B597482E',
          exponent: 0,
          aliases: ['y:inj:31Dec2024']
        }, {
          denom: 'yINJ31Dec2024',
          exponent: 18
        }],
      base: 'ibc/FFB8C6C3BF7CC7E0D2B8CC4464840281A8695DC4D538CFBFA196C980B597482E',
      name: 'yInj (31Dec2024)',
      display: 'yINJ31Dec2024',
      symbol: 'yINJ-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:inj:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/8D15961B5C877AB9544AA0B2A7F01F05360760C3D7FF835DC5D7471A9C73E6BE',
          exponent: 0,
          aliases: ['y:inj:31Mar2025']
        }, {
          denom: 'yINJ31Mar2025',
          exponent: 18
        }],
      base: 'ibc/8D15961B5C877AB9544AA0B2A7F01F05360760C3D7FF835DC5D7471A9C73E6BE',
      name: 'yInj (31Mar2025)',
      display: 'yINJ31Mar2025',
      symbol: 'yINJ-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:inj:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/A3E3D87C9229DDA36A55D0947043B9D31CA437AFAA5E699A764DAAFB072CB0BB',
          exponent: 0,
          aliases: ['y:inj:30Jun2025']
        }, {
          denom: 'yINJ30Jun2025',
          exponent: 18
        }],
      base: 'ibc/A3E3D87C9229DDA36A55D0947043B9D31CA437AFAA5E699A764DAAFB072CB0BB',
      name: 'yInj (30Jun2025)',
      display: 'yINJ30Jun2025',
      symbol: 'yINJ-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:inj:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/70B194C202DD7EEBB1110138C0821D3A93D626CB6B9775BBA1D2C5106A35802D',
          exponent: 0,
          aliases: ['y:inj:30Sep2025']
        }, {
          denom: 'yINJ30Sep2025',
          exponent: 18
        }],
      base: 'ibc/70B194C202DD7EEBB1110138C0821D3A93D626CB6B9775BBA1D2C5106A35802D',
      name: 'yInj (30Sep2025)',
      display: 'yINJ30Sep2025',
      symbol: 'yINJ-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:inj:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/042F15E0588EAFA308A9EA26A4FA2B7BFAF95771A44D2AF7A3488C120946B0A3',
          exponent: 0,
          aliases: ['y:inj:31Dec2025']
        }, {
          denom: 'yINJ31Dec2025',
          exponent: 18
        }],
      base: 'ibc/042F15E0588EAFA308A9EA26A4FA2B7BFAF95771A44D2AF7A3488C120946B0A3',
      name: 'yInj (31Dec2025)',
      display: 'yINJ31Dec2025',
      symbol: 'yINJ-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:inj:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/48926A2B07E185D89AF0AEA113DE6BBBEC4515B7E2A3A6A8ED9C4ABB982ED19C',
          exponent: 0,
          aliases: ['y:inj:31Dec2026']
        }, {
          denom: 'yINJ31Dec2026',
          exponent: 18
        }],
      base: 'ibc/48926A2B07E185D89AF0AEA113DE6BBBEC4515B7E2A3A6A8ED9C4ABB982ED19C',
      name: 'yInj (31Dec2026)',
      display: 'yINJ31Dec2026',
      symbol: 'yINJ-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:inj:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/71F519134EA436DAC96380990DFCD0A5CBBD47914F23942E8C37F84510401FE8',
          exponent: 0,
          aliases: ['y:uluna:30Sep2024']
        }, {
          denom: 'yLUNA30Sep2024',
          exponent: 6
        }],
      base: 'ibc/71F519134EA436DAC96380990DFCD0A5CBBD47914F23942E8C37F84510401FE8',
      name: 'yLuna (30Sep2024)',
      display: 'yLUNA30Sep2024',
      symbol: 'yLUNA-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uluna:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/2712058BFBA04B5C497A41208DD5DBB1371B2F192A1804E09BC43465A54124E8',
          exponent: 0,
          aliases: ['y:uluna:31Dec2024']
        }, {
          denom: 'yLUNA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/2712058BFBA04B5C497A41208DD5DBB1371B2F192A1804E09BC43465A54124E8',
      name: 'yLuna (31Dec2024)',
      display: 'yLUNA31Dec2024',
      symbol: 'yLUNA-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uluna:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/BCF8B0B61502B28957362E44FA45290D2791E29292E37C61D4CD8E3B4D675161',
          exponent: 0,
          aliases: ['y:uluna:31Mar2025']
        }, {
          denom: 'yLUNA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/BCF8B0B61502B28957362E44FA45290D2791E29292E37C61D4CD8E3B4D675161',
      name: 'yLuna (31Mar2025)',
      display: 'yLUNA31Mar2025',
      symbol: 'yLUNA-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uluna:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/D280753D2127FD90937823659667C8085C2E23A9BB2C355DA53C2AD20A395992',
          exponent: 0,
          aliases: ['y:uluna:30Jun2025']
        }, {
          denom: 'yLUNA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/D280753D2127FD90937823659667C8085C2E23A9BB2C355DA53C2AD20A395992',
      name: 'yLuna (30Jun2025)',
      display: 'yLUNA30Jun2025',
      symbol: 'yLUNA-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uluna:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/1B899D42D7231632BE799EB204091877E143DD6FDFE8B27F3053F17654527F1B',
          exponent: 0,
          aliases: ['y:uluna:30Sep2025']
        }, {
          denom: 'yLUNA30Sep2025',
          exponent: 6
        }],
      base: 'ibc/1B899D42D7231632BE799EB204091877E143DD6FDFE8B27F3053F17654527F1B',
      name: 'yLuna (30Sep2025)',
      display: 'yLUNA30Sep2025',
      symbol: 'yLUNA-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uluna:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/66BB6306859CCE7744713A9420C8F1785EE54826AF7A7BFE691E50BA5259E793',
          exponent: 0,
          aliases: ['y:uluna:31Dec2025']
        }, {
          denom: 'yLUNA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/66BB6306859CCE7744713A9420C8F1785EE54826AF7A7BFE691E50BA5259E793',
      name: 'yLuna (31Dec2025)',
      display: 'yLUNA31Dec2025',
      symbol: 'yLUNA-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uluna:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/375A972A45A4AE87FEB39954973393A04745EFE5F3F988983ED77C4338A1AFAB',
          exponent: 0,
          aliases: ['y:uluna:31Dec2026']
        }, {
          denom: 'yLUNA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/375A972A45A4AE87FEB39954973393A04745EFE5F3F988983ED77C4338A1AFAB',
      name: 'yLuna (31Dec2026)',
      display: 'yLUNA31Dec2026',
      symbol: 'yLUNA-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uluna:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/CC53F9A762F206BD300520305CE2A33F53EDC511A43BB747D71B2EBD7F3E9FD8',
          exponent: 0,
          aliases: ['y:uauuu:30Sep2024']
        }, {
          denom: 'yAUUU30Sep2024',
          exponent: 6
        }],
      base: 'ibc/CC53F9A762F206BD300520305CE2A33F53EDC511A43BB747D71B2EBD7F3E9FD8',
      name: 'yAuuu (30Sep2024)',
      display: 'yAUUU30Sep2024',
      symbol: 'yAUUU-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uauuu:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/2567EF1879145E099ADC0CF09966443588075C1D1EB120D617A9E6C606CF9846',
          exponent: 0,
          aliases: ['y:uauuu:31Dec2024']
        }, {
          denom: 'yAUUU31Dec2024',
          exponent: 6
        }],
      base: 'ibc/2567EF1879145E099ADC0CF09966443588075C1D1EB120D617A9E6C606CF9846',
      name: 'yAuuu (31Dec2024)',
      display: 'yAUUU31Dec2024',
      symbol: 'yAUUU-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uauuu:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/C3BF55BE215AFC919F89AE59CE2232E36ED856A6D0DBC3A3A647EA99C199BCBE',
          exponent: 0,
          aliases: ['y:uauuu:30Jun2025']
        }, {
          denom: 'yAUUU30Jun2025',
          exponent: 6
        }],
      base: 'ibc/C3BF55BE215AFC919F89AE59CE2232E36ED856A6D0DBC3A3A647EA99C199BCBE',
      name: 'yAuuu (30Jun2025)',
      display: 'yAUUU30Jun2025',
      symbol: 'yAUUU-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uauuu:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/AEDA919BDFB855BA41195EF11FB0AC393716C696139F5D889CD9CF7686D34C62',
          exponent: 0,
          aliases: ['y:uauuu:31Dec2025']
        }, {
          denom: 'yAUUU31Dec2025',
          exponent: 6
        }],
      base: 'ibc/AEDA919BDFB855BA41195EF11FB0AC393716C696139F5D889CD9CF7686D34C62',
      name: 'yAuuu (31Dec2025)',
      display: 'yAUUU31Dec2025',
      symbol: 'yAUUU-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uauuu:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/4143884F9C8D1757FC955093C68A46E42DF912BEA241BE036986441CDFA5EE53',
          exponent: 0,
          aliases: ['y:uauuu:31Dec2026']
        }, {
          denom: 'yAUUU31Dec2026',
          exponent: 6
        }],
      base: 'ibc/4143884F9C8D1757FC955093C68A46E42DF912BEA241BE036986441CDFA5EE53',
      name: 'yAuuu (31Dec2026)',
      display: 'yAUUU31Dec2026',
      symbol: 'yAUUU-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:uauuu:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/D744CBDAEC07BD19B408E57247DE938EC154C43964246C7979EE8068CA22A2D6',
          exponent: 0,
          aliases: ['y:stutia:30Sep2024']
        }, {
          denom: 'ystTIA30Sep2024',
          exponent: 6
        }],
      base: 'ibc/D744CBDAEC07BD19B408E57247DE938EC154C43964246C7979EE8068CA22A2D6',
      name: 'ystTia (30Sep2024)',
      display: 'ystTIA30Sep2024',
      symbol: 'ystTIA-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:stutia:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/F8EE7039C23931075CF30E4A15453172D3DBBE9F4D73740068BF56EDB2CBAF81',
          exponent: 0,
          aliases: ['y:stutia:31Dec2024']
        }, {
          denom: 'ystTIA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/F8EE7039C23931075CF30E4A15453172D3DBBE9F4D73740068BF56EDB2CBAF81',
      name: 'ystTia (31Dec2024)',
      display: 'ystTIA31Dec2024',
      symbol: 'ystTIA-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:stutia:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/1CB5970869F3473D111663DEAD3C0D231533A85E587211FD06844BBBCF94B174',
          exponent: 0,
          aliases: ['y:stutia:31Mar2025']
        }, {
          denom: 'ystTIA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/1CB5970869F3473D111663DEAD3C0D231533A85E587211FD06844BBBCF94B174',
      name: 'ystTia (31Mar2025)',
      display: 'ystTIA31Mar2025',
      symbol: 'ystTIA-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:stutia:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/46F5B1F0D228C331BA9FF81AED7103FA079AA21B62D0A5BBEB75572AF296299B',
          exponent: 0,
          aliases: ['y:stutia:30Jun2025']
        }, {
          denom: 'ystTIA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/46F5B1F0D228C331BA9FF81AED7103FA079AA21B62D0A5BBEB75572AF296299B',
      name: 'ystTia (30Jun2025)',
      display: 'ystTIA30Jun2025',
      symbol: 'ystTIA-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:stutia:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/0E7ADA540444269BB36E10F09549CAB979C4BF66246D90938786DE896BEEAA1A',
          exponent: 0,
          aliases: ['y:stutia:31Dec2025']
        }, {
          denom: 'ystTIA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/0E7ADA540444269BB36E10F09549CAB979C4BF66246D90938786DE896BEEAA1A',
      name: 'ystTia (31Dec2025)',
      display: 'ystTIA31Dec2025',
      symbol: 'ystTIA-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:stutia:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/2323B7C508E67D8BDFCB4A7C2301907DE96E9004A49326EC50409AF146E5E576',
          exponent: 0,
          aliases: ['y:stutia:31Dec2026']
        }, {
          denom: 'ystTIA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/2323B7C508E67D8BDFCB4A7C2301907DE96E9004A49326EC50409AF146E5E576',
      name: 'ystTia (31Dec2026)',
      display: 'ystTIA31Dec2026',
      symbol: 'ystTIA-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:stutia:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/2BAC8486094BD50917364AAB0B0B8337EB595D37473C32A0786E47564167B595',
          exponent: 0,
          aliases: ['y:stadydx:30Sep2024']
        }, {
          denom: 'ystDYDX30Sep2024',
          exponent: 18
        }],
      base: 'ibc/2BAC8486094BD50917364AAB0B0B8337EB595D37473C32A0786E47564167B595',
      name: 'ystDydx (30Sep2024)',
      display: 'ystDYDX30Sep2024',
      symbol: 'ystDYDX-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:stadydx:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/09B1411A90F145EF4742867332BED7AEEB854AF58AEE2165AF72CA3F0D89DAAB',
          exponent: 0,
          aliases: ['y:stadydx:31Dec2024']
        }, {
          denom: 'ystDYDX31Dec2024',
          exponent: 18
        }],
      base: 'ibc/09B1411A90F145EF4742867332BED7AEEB854AF58AEE2165AF72CA3F0D89DAAB',
      name: 'ystDydx (31Dec2024)',
      display: 'ystDYDX31Dec2024',
      symbol: 'ystDYDX-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:stadydx:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/A29931225B446AF3363AF534E866A01F35E3D324FF0778A5CF02EF44F005485C',
          exponent: 0,
          aliases: ['y:stadydx:31Mar2025']
        }, {
          denom: 'ystDYDX31Mar2025',
          exponent: 6
        }],
      base: 'ibc/A29931225B446AF3363AF534E866A01F35E3D324FF0778A5CF02EF44F005485C',
      name: 'ystDydx (31Mar2025)',
      display: 'ystDYDX31Mar2025',
      symbol: 'ystDYDX-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:stadydx:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/13FEDF8EFCD5220EB61762F50D20EF9CBB44960172FA380A088F180C413C4647',
          exponent: 0,
          aliases: ['y:stadydx:30Jun2025']
        }, {
          denom: 'ystDYDX30Jun2025',
          exponent: 6
        }],
      base: 'ibc/13FEDF8EFCD5220EB61762F50D20EF9CBB44960172FA380A088F180C413C4647',
      name: 'ystDydx (30Jun2025)',
      display: 'ystDYDX30Jun2025',
      symbol: 'ystDYDX-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:stadydx:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/FC0862A5864A7FF6230B5AA3F1BA6651F76C05607E9B86F7BDC842A8186B3627',
          exponent: 0,
          aliases: ['y:stadydx:31Dec2025']
        }, {
          denom: 'ystDYDX31Dec2025',
          exponent: 18
        }],
      base: 'ibc/FC0862A5864A7FF6230B5AA3F1BA6651F76C05607E9B86F7BDC842A8186B3627',
      name: 'ystDydx (31Dec2025)',
      display: 'ystDYDX31Dec2025',
      symbol: 'ystDYDX-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:stadydx:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/BF36E8FC358EDF00016A68B48198CD07E21B9080FDDCF27716907CB9FFA35926',
          exponent: 0,
          aliases: ['y:stadydx:31Dec2026']
        }, {
          denom: 'ystDYDX31Dec2026',
          exponent: 18
        }],
      base: 'ibc/BF36E8FC358EDF00016A68B48198CD07E21B9080FDDCF27716907CB9FFA35926',
      name: 'ystDydx (31Dec2026)',
      display: 'ystDYDX31Dec2026',
      symbol: 'ystDYDX-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:stadydx:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/E6A9907D3475A701DEC8202FFEB01FBE8C07676A44E3CF19EB3D679A81BCD53B',
          exponent: 0,
          aliases: ['y:udatom:31Dec2024']
        }, {
          denom: 'ydATOM31Dec2024',
          exponent: 6
        }],
      base: 'ibc/E6A9907D3475A701DEC8202FFEB01FBE8C07676A44E3CF19EB3D679A81BCD53B',
      name: 'ydAtom (31Dec2024)',
      display: 'ydATOM31Dec2024',
      symbol: 'ydATOM-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:udatom:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/0F7103ECC30CE18A815D7DD7E292498559422FDFB558EBE8B7D7EF1004CE2503',
          exponent: 0,
          aliases: ['y:udatom:31Mar2025']
        }, {
          denom: 'ydATOM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/0F7103ECC30CE18A815D7DD7E292498559422FDFB558EBE8B7D7EF1004CE2503',
      name: 'ydAtom (31Mar2025)',
      display: 'ydATOM31Mar2025',
      symbol: 'ydATOM-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:udatom:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/9FFC507077802B7E51AB23C60BDC2104811674046300BC6BB90B8E2F6D80285E',
          exponent: 0,
          aliases: ['y:udatom:30Jun2025']
        }, {
          denom: 'ydATOM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/9FFC507077802B7E51AB23C60BDC2104811674046300BC6BB90B8E2F6D80285E',
      name: 'ydAtom (30Jun2025)',
      display: 'ydATOM30Jun2025',
      symbol: 'ydATOM-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:udatom:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/CF6D5084BE9420D55B6B66C0BCFC8457A732B5BE7421DD3EB886AB698BE9D092',
          exponent: 0,
          aliases: ['y:udatom:31Dec2025']
        }, {
          denom: 'ydATOM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/CF6D5084BE9420D55B6B66C0BCFC8457A732B5BE7421DD3EB886AB698BE9D092',
      name: 'ydAtom (31Dec2025)',
      display: 'ydATOM31Dec2025',
      symbol: 'ydATOM-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:udatom:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/D41AFC643B418DDDBEAFEEC55651B3296DD423CA96D6CA627BB6EECC2C2C7AB8',
          exponent: 0,
          aliases: ['y:udatom:31Dec2026']
        }, {
          denom: 'ydATOM31Dec2026',
          exponent: 6
        }],
      base: 'ibc/D41AFC643B418DDDBEAFEEC55651B3296DD423CA96D6CA627BB6EECC2C2C7AB8',
      name: 'ydAtom (31Dec2026)',
      display: 'ydATOM31Dec2026',
      symbol: 'ydATOM-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:udatom:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/2DF82E761C9943ADB5D68A757D0B1318EC2FDB646CE9FABE8967FF97B024991D',
          exponent: 0,
          aliases: ['y:utia:31Dec2024']
        }, {
          denom: 'yTIA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/2DF82E761C9943ADB5D68A757D0B1318EC2FDB646CE9FABE8967FF97B024991D',
      name: 'yTia (31Dec2024)',
      display: 'yTIA31Dec2024',
      symbol: 'yTIA-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:utia:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/E323B4B55E11DAFDDB591D26691167DD076DD0689E61A0B0D381B753124911D4',
          exponent: 0,
          aliases: ['y:utia:31Mar2025']
        }, {
          denom: 'yTIA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/E323B4B55E11DAFDDB591D26691167DD076DD0689E61A0B0D381B753124911D4',
      name: 'yTia (31Mar2025)',
      display: 'yTIA31Mar2025',
      symbol: 'yTIA-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:utia:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/853A226D4B0D37E2A06F404DE323769BACF625F5369F49277C7FAF97CBE0337D',
          exponent: 0,
          aliases: ['y:utia:30Jun2025']
        }, {
          denom: 'yTIA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/853A226D4B0D37E2A06F404DE323769BACF625F5369F49277C7FAF97CBE0337D',
      name: 'yTia (30Jun2025)',
      display: 'yTIA30Jun2025',
      symbol: 'yTIA-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:utia:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/CB5C58AF9CF6FAAA208AD81A19DC25F70A4DA97B3D21381000BA059758A8A722',
          exponent: 0,
          aliases: ['y:utia:30Sep2025']
        }, {
          denom: 'yTIA30Sep2025',
          exponent: 6
        }],
      base: 'ibc/CB5C58AF9CF6FAAA208AD81A19DC25F70A4DA97B3D21381000BA059758A8A722',
      name: 'yTia (30Sep2025)',
      display: 'yTIA30Sep2025',
      symbol: 'yTIA-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:utia:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/60C92532FAAE6350D01887B20A4097A8067365704EEB52C570F31CDBE9E836B2',
          exponent: 0,
          aliases: ['y:utia:31Dec2025']
        }, {
          denom: 'yTIA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/60C92532FAAE6350D01887B20A4097A8067365704EEB52C570F31CDBE9E836B2',
      name: 'yTia (31Dec2025)',
      display: 'yTIA31Dec2025',
      symbol: 'yTIA-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:utia:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/7A2894A0D2A979767FB95DED01F47CE2E923491C69DBC7FB8A2D60F6FF4E4E62',
          exponent: 0,
          aliases: ['y:utia:31Dec2026']
        }, {
          denom: 'yTIA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/7A2894A0D2A979767FB95DED01F47CE2E923491C69DBC7FB8A2D60F6FF4E4E62',
      name: 'yTia (31Dec2026)',
      display: 'yTIA31Dec2026',
      symbol: 'yTIA-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:utia:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/313D726C7AFDFF969242DA709B12AE6E3AF31AC24963D6F8ED48719B5719AFDF',
          exponent: 0,
          aliases: ['y:ausdy:31Mar2025']
        }, {
          denom: 'yUSDY31Mar2025',
          exponent: 18
        }],
      base: 'ibc/313D726C7AFDFF969242DA709B12AE6E3AF31AC24963D6F8ED48719B5719AFDF',
      name: 'yUsdy (31Mar2025)',
      display: 'yUSDY31Mar2025',
      symbol: 'yUSDY-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:ausdy:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/7C094251F4D0D73B6B3FEA29E49AFAF3132B05603505B6CA03846A67D73515B7',
          exponent: 0,
          aliases: ['y:ausdy:30Jun2025']
        }, {
          denom: 'yUSDY30Jun2025',
          exponent: 18
        }],
      base: 'ibc/7C094251F4D0D73B6B3FEA29E49AFAF3132B05603505B6CA03846A67D73515B7',
      name: 'yUsdy (30Jun2025)',
      display: 'yUSDY30Jun2025',
      symbol: 'yUSDY-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:ausdy:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/49BE7379D8FD995E625766B8859C0B5961480243249796F8D3ED03352F00E7CB',
          exponent: 0,
          aliases: ['y:ausdy:30Sep2025']
        }, {
          denom: 'yUSDY30Sep2025',
          exponent: 18
        }],
      base: 'ibc/49BE7379D8FD995E625766B8859C0B5961480243249796F8D3ED03352F00E7CB',
      name: 'yUsdy (30Sep2025)',
      display: 'yUSDY30Sep2025',
      symbol: 'yUSDY-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:ausdy:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/6CB8BEB5B9324BEE53E23664E25C3DE5D2018BCFEAF446BEEBBE48A7D4D4AD67',
          exponent: 0,
          aliases: ['y:ausdy:31Dec2025']
        }, {
          denom: 'yUSDY31Dec2025',
          exponent: 18
        }],
      base: 'ibc/6CB8BEB5B9324BEE53E23664E25C3DE5D2018BCFEAF446BEEBBE48A7D4D4AD67',
      name: 'yUsdy (31Dec2025)',
      display: 'yUSDY31Dec2025',
      symbol: 'yUSDY-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:ausdy:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/C540474ED8E4D22157EFAAFC392E314CAA92266E9E2C992D425D80628DA0C7C7',
          exponent: 0,
          aliases: ['y:ausdy:31Mar2026']
        }, {
          denom: 'yUSDY31Mar2026',
          exponent: 18
        }],
      base: 'ibc/C540474ED8E4D22157EFAAFC392E314CAA92266E9E2C992D425D80628DA0C7C7',
      name: 'yUsdy (31Mar2026)',
      display: 'yUSDY31Mar2026',
      symbol: 'yUSDY-31Mar2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:ausdy:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/5C86B8E8B958378AE766B09CEFE9A40FF23AB0E4ABF39A7B198D00147B1D26E7',
          exponent: 0,
          aliases: ['y:ausdy:30Jun2026']
        }, {
          denom: 'yUSDY30Jun2026',
          exponent: 18
        }],
      base: 'ibc/5C86B8E8B958378AE766B09CEFE9A40FF23AB0E4ABF39A7B198D00147B1D26E7',
      name: 'yUsdy (30Jun2026)',
      display: 'yUSDY30Jun2026',
      symbol: 'yUSDY-30Jun2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yUsdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:ausdy:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/CBB28480367EC153C6FE5E38A013B8F6241F44D6BB8F1C749EE38D9328F50CA7',
          exponent: 0,
          aliases: ['y:upryzm:31Mar2025']
        }, {
          denom: 'yPRYZM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/CBB28480367EC153C6FE5E38A013B8F6241F44D6BB8F1C749EE38D9328F50CA7',
      name: 'yPryzm (31Mar2025)',
      display: 'yPRYZM31Mar2025',
      symbol: 'yPRYZM-31Mar2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:upryzm:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/DF0C79068F804EC29BEF625AED52D404290305121376A0F3733F6064A6DA04AA',
          exponent: 0,
          aliases: ['y:upryzm:30Jun2025']
        }, {
          denom: 'yPRYZM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/DF0C79068F804EC29BEF625AED52D404290305121376A0F3733F6064A6DA04AA',
      name: 'yPryzm (30Jun2025)',
      display: 'yPRYZM30Jun2025',
      symbol: 'yPRYZM-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:upryzm:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/385A3877BB1F6631E21733227D06EE262317211D31A5268E6AAAA229B8BC960C',
          exponent: 0,
          aliases: ['y:upryzm:30Sep2025']
        }, {
          denom: 'yPRYZM30Sep2025',
          exponent: 6
        }],
      base: 'ibc/385A3877BB1F6631E21733227D06EE262317211D31A5268E6AAAA229B8BC960C',
      name: 'yPryzm (30Sep2025)',
      display: 'yPRYZM30Sep2025',
      symbol: 'yPRYZM-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:upryzm:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/2C3FB0BCB9237278CBF035F5E2870D7D985710DE753A030068BC506FDCCA26CD',
          exponent: 0,
          aliases: ['y:upryzm:31Dec2025']
        }, {
          denom: 'yPRYZM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/2C3FB0BCB9237278CBF035F5E2870D7D985710DE753A030068BC506FDCCA26CD',
      name: 'yPryzm (31Dec2025)',
      display: 'yPRYZM31Dec2025',
      symbol: 'yPRYZM-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:upryzm:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/14547720A027B8716339382A37AF4DA38556CF04892E2D8FD7382E025234A79E',
          exponent: 0,
          aliases: ['y:upryzm:31Mar2026']
        }, {
          denom: 'yPRYZM31Mar2026',
          exponent: 6
        }],
      base: 'ibc/14547720A027B8716339382A37AF4DA38556CF04892E2D8FD7382E025234A79E',
      name: 'yPryzm (31Mar2026)',
      display: 'yPRYZM31Mar2026',
      symbol: 'yPRYZM-31Mar2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:upryzm:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/4517A25F0BEB8899AA8371D05D396C703BD9CF0F7749D4902E75B384BE521A44',
          exponent: 0,
          aliases: ['y:upryzm:30Jun2026']
        }, {
          denom: 'yPRYZM30Jun2026',
          exponent: 6
        }],
      base: 'ibc/4517A25F0BEB8899AA8371D05D396C703BD9CF0F7749D4902E75B384BE521A44',
      name: 'yPryzm (30Jun2026)',
      display: 'yPRYZM30Jun2026',
      symbol: 'yPRYZM-30Jun2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yPryzm.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:upryzm:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for sUSDS with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/E87909E9D727FAF279C6E3E7400F0DC28CA40C6C4070627151D4BC06FE45B992',
          exponent: 0,
          aliases: ['y:asusds:30Jun2025']
        }, {
          denom: 'ysUSDS30Jun2025',
          exponent: 18
        }],
      base: 'ibc/E87909E9D727FAF279C6E3E7400F0DC28CA40C6C4070627151D4BC06FE45B992',
      name: 'ysUsds (30Jun2025)',
      display: 'ysUSDS30Jun2025',
      symbol: 'ysUSDS-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:asusds:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for sUSDS with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/5F70E1B59F683593AC7492F981D4BB105E10ADC18C50488B2DBE3187952A6994',
          exponent: 0,
          aliases: ['y:asusds:30Sep2025']
        }, {
          denom: 'ysUSDS30Sep2025',
          exponent: 18
        }],
      base: 'ibc/5F70E1B59F683593AC7492F981D4BB105E10ADC18C50488B2DBE3187952A6994',
      name: 'ysUsds (30Sep2025)',
      display: 'ysUSDS30Sep2025',
      symbol: 'ysUSDS-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:asusds:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for sUSDS with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/89CF081EFCD2389BFCD4BB00A57A859F7B0B1DADCB2CF18957A89E63DE2E0E84',
          exponent: 0,
          aliases: ['y:asusds:31Dec2025']
        }, {
          denom: 'ysUSDS31Dec2025',
          exponent: 18
        }],
      base: 'ibc/89CF081EFCD2389BFCD4BB00A57A859F7B0B1DADCB2CF18957A89E63DE2E0E84',
      name: 'ysUsds (31Dec2025)',
      display: 'ysUSDS31Dec2025',
      symbol: 'ysUSDS-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:asusds:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for sUSDS with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/3DFA0D1207564F77750F7434D12C99D5F5FEA54BF85F9C1E23514AA5CF2FC866',
          exponent: 0,
          aliases: ['y:asusds:31Mar2026']
        }, {
          denom: 'ysUSDS31Mar2026',
          exponent: 18
        }],
      base: 'ibc/3DFA0D1207564F77750F7434D12C99D5F5FEA54BF85F9C1E23514AA5CF2FC866',
      name: 'ysUsds (31Mar2026)',
      display: 'ysUSDS31Mar2026',
      symbol: 'ysUSDS-31Mar2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:asusds:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for sUSDS with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/4724FD3943590F3E0D1932F317756492077A76D0CD49A6FE304CA003244BE838',
          exponent: 0,
          aliases: ['y:asusds:30Jun2026']
        }, {
          denom: 'ysUSDS30Jun2026',
          exponent: 18
        }],
      base: 'ibc/4724FD3943590F3E0D1932F317756492077A76D0CD49A6FE304CA003244BE838',
      name: 'ysUsds (30Jun2026)',
      display: 'ysUSDS30Jun2026',
      symbol: 'ysUSDS-30Jun2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ysUsds.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:asusds:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for mBTC with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/5C45CB5D8013A91DD5EDF18A0B118CAF3D817AB321F7D6C836CAF2A186807BC3',
          exponent: 0,
          aliases: ['y:ambtc:30Sep2025']
        }, {
          denom: 'ymBTC30Sep2025',
          exponent: 18
        }],
      base: 'ibc/5C45CB5D8013A91DD5EDF18A0B118CAF3D817AB321F7D6C836CAF2A186807BC3',
      name: 'ymBTC (30Sep2025)',
      display: 'ymBTC30Sep2025',
      symbol: 'ymBTC-30Sep2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ymBTC.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ymBTC.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ymBTC.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ymBTC.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:ambtc:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for mBTC with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/8B7DEB45D2A49BCCF5B69659B810872D34F6869F4636822110F5135B2B673908',
          exponent: 0,
          aliases: ['y:ambtc:31Dec2025']
        }, {
          denom: 'ymBTC31Dec2025',
          exponent: 18
        }],
      base: 'ibc/8B7DEB45D2A49BCCF5B69659B810872D34F6869F4636822110F5135B2B673908',
      name: 'ymBTC (31Dec2025)',
      display: 'ymBTC31Dec2025',
      symbol: 'ymBTC-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ymBTC.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ymBTC.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ymBTC.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ymBTC.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:ambtc:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for mBTC with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/398411E5CD0A4B8EA0DE7C321A9AA5047B0A7793B7894986AB67E92D277752D7',
          exponent: 0,
          aliases: ['y:ambtc:31Mar2026']
        }, {
          denom: 'ymBTC31Mar2026',
          exponent: 18
        }],
      base: 'ibc/398411E5CD0A4B8EA0DE7C321A9AA5047B0A7793B7894986AB67E92D277752D7',
      name: 'ymBTC (31Mar2026)',
      display: 'ymBTC31Mar2026',
      symbol: 'ymBTC-31Mar2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ymBTC.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ymBTC.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ymBTC.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ymBTC.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:ambtc:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for mBTC with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/04BA7414EF960149B3B74C960206D1BE6F6E60E0A4F2948FBD068E5AE67C6051',
          exponent: 0,
          aliases: ['y:ambtc:30Jun2026']
        }, {
          denom: 'ymBTC30Jun2026',
          exponent: 18
        }],
      base: 'ibc/04BA7414EF960149B3B74C960206D1BE6F6E60E0A4F2948FBD068E5AE67C6051',
      name: 'ymBTC (30Jun2026)',
      display: 'ymBTC30Jun2026',
      symbol: 'ymBTC-30Jun2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ymBTC.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ymBTC.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ymBTC.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ymBTC.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'y:ambtc:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for USDC / USDC.axl pool',
      denom_units: [{
          denom: 'ibc/5D7DB05BE95798EB5700FE5A939BCC015D305EEB402EB40622C0BF53EC629B70',
          exponent: 0,
          aliases: ['lp:6:uusdc.axl-uusdc']
        }, {
          denom: 'lp:6:usdc.axl-usdc',
          exponent: 6
        }],
      base: 'ibc/5D7DB05BE95798EB5700FE5A939BCC015D305EEB402EB40622C0BF53EC629B70',
      name: 'USDC / USDC.axl LP',
      display: 'lp:6:usdc.axl-usdc',
      symbol: 'USDC-USDC.axl-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:6:uusdc.axl-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for ATOM Yield pool',
      denom_units: [{
          denom: 'ibc/E2385934A1E5B4E83684D98432D453F9B7016B7AA3D4B1CB9048BAE92A61EB14',
          exponent: 0,
          aliases: ['lp:0:uatom']
        }, {
          denom: 'lp:0:atom',
          exponent: 6
        }],
      base: 'ibc/E2385934A1E5B4E83684D98432D453F9B7016B7AA3D4B1CB9048BAE92A61EB14',
      name: 'ATOM Yield LP',
      display: 'lp:0:atom',
      symbol: 'ATOM-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:0:uatom',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for ATOM Boost pool',
      denom_units: [{
          denom: 'ibc/45ED94C46477792369B65CA2BCD62ADF595D70A5405EBB51AFA32D4CDCD73AD3',
          exponent: 0,
          aliases: ['lp:2:uatomypt-uatom']
        }, {
          denom: 'lp:2:atomypt-atom',
          exponent: 6
        }],
      base: 'ibc/45ED94C46477792369B65CA2BCD62ADF595D70A5405EBB51AFA32D4CDCD73AD3',
      name: 'ATOM Boost LP',
      display: 'lp:2:atomypt-atom',
      symbol: 'ATOM-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:2:uatomypt-uatom',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for ATOM / USDC pool',
      denom_units: [{
          denom: 'ibc/A48C7AFF8B2D2EFE0AF4236A15CB64DF46FE02DA071475C4A1E9970B20D508FB',
          exponent: 0,
          aliases: ['lp:3:uatom-uusdc']
        }, {
          denom: 'lp:3:atom-usdc',
          exponent: 6
        }],
      base: 'ibc/A48C7AFF8B2D2EFE0AF4236A15CB64DF46FE02DA071475C4A1E9970B20D508FB',
      name: 'ATOM / USDC LP',
      display: 'lp:3:atom-usdc',
      symbol: 'ATOM-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:3:uatom-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for INJ Yield pool',
      denom_units: [{
          denom: 'ibc/49840D0AD8FDB7D2292AA1D822BA458C8641291AA3A90B8615D47410F3246258',
          exponent: 0,
          aliases: ['lp:1:inj']
        }, {
          denom: 'lp:1:INJ',
          exponent: 18
        }],
      base: 'ibc/49840D0AD8FDB7D2292AA1D822BA458C8641291AA3A90B8615D47410F3246258',
      name: 'INJ Yield LP',
      display: 'lp:1:INJ',
      symbol: 'INJ-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:1:inj',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for INJ Boost pool',
      denom_units: [{
          denom: 'ibc/0CFEF324242A1EA9A5B9FAE6EF781FC98DA4089A99495ED7A85206DA48B5753A',
          exponent: 0,
          aliases: ['lp:4:injypt-inj']
        }, {
          denom: 'lp:4:INJypt-INJ',
          exponent: 18
        }],
      base: 'ibc/0CFEF324242A1EA9A5B9FAE6EF781FC98DA4089A99495ED7A85206DA48B5753A',
      name: 'INJ Boost LP',
      display: 'lp:4:INJypt-INJ',
      symbol: 'INJ-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:4:injypt-inj',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for INJ / USDC pool',
      denom_units: [{
          denom: 'ibc/250D59FF00967FA3294387D2775BF502951D80837F12CBB355669CED3C9FEA97',
          exponent: 0,
          aliases: ['lp:5:inj-uusdc']
        }, {
          denom: 'lp:5:INJ-usdc',
          exponent: 18
        }],
      base: 'ibc/250D59FF00967FA3294387D2775BF502951D80837F12CBB355669CED3C9FEA97',
      name: 'INJ / USDC LP',
      display: 'lp:5:INJ-usdc',
      symbol: 'INJ-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:5:inj-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for OSMO Yield pool',
      denom_units: [{
          denom: 'ibc/AB71A1158A893A668F5D4AC2340827DC46BCA905900D9B8735312EA12F92ED27',
          exponent: 0,
          aliases: ['lp:8:uosmo']
        }, {
          denom: 'lp:8:osmo',
          exponent: 6
        }],
      base: 'ibc/AB71A1158A893A668F5D4AC2340827DC46BCA905900D9B8735312EA12F92ED27',
      name: 'OSMO Yield LP',
      display: 'lp:8:osmo',
      symbol: 'OSMO-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:8:uosmo',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for OSMO Boost pool',
      denom_units: [{
          denom: 'ibc/81133677344E5C97E33246E13A6118B2FE6A7969BF6D072D7D1B2F91F54B8442',
          exponent: 0,
          aliases: ['lp:10:uosmoypt-uosmo']
        }, {
          denom: 'lp:10:osmoypt-osmo',
          exponent: 6
        }],
      base: 'ibc/81133677344E5C97E33246E13A6118B2FE6A7969BF6D072D7D1B2F91F54B8442',
      name: 'OSMO Boost LP',
      display: 'lp:10:osmoypt-osmo',
      symbol: 'OSMO-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:10:uosmoypt-uosmo',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for OSMO / USDC pool',
      denom_units: [{
          denom: 'ibc/B7B199DA3365F3D56FBDADDC183005AB285C74A3D918E0D507EA2A56E3D17C30',
          exponent: 0,
          aliases: ['lp:11:uosmo-uusdc']
        }, {
          denom: 'lp:11:osmo-usdc',
          exponent: 6
        }],
      base: 'ibc/B7B199DA3365F3D56FBDADDC183005AB285C74A3D918E0D507EA2A56E3D17C30',
      name: 'OSMO / USDC LP',
      display: 'lp:11:osmo-usdc',
      symbol: 'OSMO-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:11:uosmo-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for LUNA Yield pool',
      denom_units: [{
          denom: 'ibc/A42D667F6B5A708FA906E190E7587EC021DC5778BB124B87D7072D580666D389',
          exponent: 0,
          aliases: ['lp:9:uluna']
        }, {
          denom: 'lp:9:luna',
          exponent: 6
        }],
      base: 'ibc/A42D667F6B5A708FA906E190E7587EC021DC5778BB124B87D7072D580666D389',
      name: 'LUNA Yield LP',
      display: 'lp:9:luna',
      symbol: 'LUNA-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:9:uluna',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for LUNA Boost pool',
      denom_units: [{
          denom: 'ibc/90952C250AD206672989ABC07FECB2F154495712A8C9D82CE2442D4A2EB760B6',
          exponent: 0,
          aliases: ['lp:12:ulunaypt-uluna']
        }, {
          denom: 'lp:12:lunaypt-luna',
          exponent: 6
        }],
      base: 'ibc/90952C250AD206672989ABC07FECB2F154495712A8C9D82CE2442D4A2EB760B6',
      name: 'LUNA Boost LP',
      display: 'lp:12:lunaypt-luna',
      symbol: 'LUNA-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:12:ulunaypt-uluna',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for LUNA / USDC pool',
      denom_units: [{
          denom: 'ibc/EB4C16252E898642E0AB4E0051EE1C95AAC6FF213B07231FB7DE8A18D9FF7AF4',
          exponent: 0,
          aliases: ['lp:13:uluna-uusdc']
        }, {
          denom: 'lp:13:luna-usdc',
          exponent: 6
        }],
      base: 'ibc/EB4C16252E898642E0AB4E0051EE1C95AAC6FF213B07231FB7DE8A18D9FF7AF4',
      name: 'LUNA / USDC LP',
      display: 'lp:13:luna-usdc',
      symbol: 'LUNA-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:13:uluna-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for AUUU Yield pool',
      denom_units: [{
          denom: 'ibc/3B16157FA8EDA871F6FA20512A681F9DF0BA4F9960D98148188A5FA93776224F',
          exponent: 0,
          aliases: ['lp:14:uauuu']
        }, {
          denom: 'lp:14:auuu',
          exponent: 6
        }],
      base: 'ibc/3B16157FA8EDA871F6FA20512A681F9DF0BA4F9960D98148188A5FA93776224F',
      name: 'AUUU Yield LP',
      display: 'lp:14:auuu',
      symbol: 'AUUU-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:14:uauuu',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for AUUU Boost pool',
      denom_units: [{
          denom: 'ibc/A89A762DBF232AC3EE6A6D0D95D3BA751381290B43687160BF2C661F87C15B8C',
          exponent: 0,
          aliases: ['lp:17:uauuuypt-uauuu']
        }, {
          denom: 'lp:17:auuuypt-auuu',
          exponent: 6
        }],
      base: 'ibc/A89A762DBF232AC3EE6A6D0D95D3BA751381290B43687160BF2C661F87C15B8C',
      name: 'AUUU Boost LP',
      display: 'lp:17:auuuypt-auuu',
      symbol: 'AUUU-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:17:uauuuypt-uauuu',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for AUUU / USDC pool',
      denom_units: [{
          denom: 'ibc/F7D9126CEB9B3E53A807D96F61A6B16B1AB5A556E8F44438D6DF788989095964',
          exponent: 0,
          aliases: ['lp:7:uauuu-uusdc']
        }, {
          denom: 'lp:7:auuu-usdc',
          exponent: 6
        }],
      base: 'ibc/F7D9126CEB9B3E53A807D96F61A6B16B1AB5A556E8F44438D6DF788989095964',
      name: 'AUUU / USDC LP',
      display: 'lp:7:auuu-usdc',
      symbol: 'AUUU-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:7:uauuu-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for stDYDX Yield pool',
      denom_units: [{
          denom: 'ibc/74178CF77F8A3A6E909EA88C29D2267165208F811E2791672EC4DD78222B0D54',
          exponent: 0,
          aliases: ['lp:15:stadydx']
        }, {
          denom: 'lp:15:stdydx',
          exponent: 18
        }],
      base: 'ibc/74178CF77F8A3A6E909EA88C29D2267165208F811E2791672EC4DD78222B0D54',
      name: 'stDYDX Yield LP',
      display: 'lp:15:stdydx',
      symbol: 'stDYDX-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:15:stadydx',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for stDYDX Boost pool',
      denom_units: [{
          denom: 'ibc/59AE672BBEFE1262F881010268841EA0DE33FF6187DBEB47617795F7066427D0',
          exponent: 0,
          aliases: ['lp:18:stadydxypt-adydx']
        }, {
          denom: 'lp:18:stdydxypt-dydx',
          exponent: 18
        }],
      base: 'ibc/59AE672BBEFE1262F881010268841EA0DE33FF6187DBEB47617795F7066427D0',
      name: 'stDYDX Boost LP',
      display: 'lp:18:stdydxypt-dydx',
      symbol: 'stDYDX-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:18:stadydxypt-adydx',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for DYDX / USDC pool',
      denom_units: [{
          denom: 'ibc/96E7FB12D516E8D7FDC0DB01A1079021164C90F491C633EF77AD55DFDEE7FD6E',
          exponent: 0,
          aliases: ['lp:19:adydx-uusdc']
        }, {
          denom: 'lp:19:dydx-usdc',
          exponent: 18
        }],
      base: 'ibc/96E7FB12D516E8D7FDC0DB01A1079021164C90F491C633EF77AD55DFDEE7FD6E',
      name: 'DYDX / USDC LP',
      display: 'lp:19:dydx-usdc',
      symbol: 'DYDX-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:19:adydx-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for stTIA Yield pool',
      denom_units: [{
          denom: 'ibc/C6C0B4E65D4C635E153103217B1AF9CDCE898E1273EAC6F410E4E0360FCEAFA2',
          exponent: 0,
          aliases: ['lp:16:stutia']
        }, {
          denom: 'lp:16:sttia',
          exponent: 6
        }],
      base: 'ibc/C6C0B4E65D4C635E153103217B1AF9CDCE898E1273EAC6F410E4E0360FCEAFA2',
      name: 'stTIA Yield LP',
      display: 'lp:16:sttia',
      symbol: 'stTIA-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:16:stutia',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for stTIA Boost pool',
      denom_units: [{
          denom: 'ibc/DD0FC1F73672C58C1FCE61A2BF2A631F9CDFDA55C9BFC0F3C5722DE2251720B8',
          exponent: 0,
          aliases: ['lp:20:stutiaypt-utia']
        }, {
          denom: 'lp:20:sttiaypt-tia',
          exponent: 6
        }],
      base: 'ibc/DD0FC1F73672C58C1FCE61A2BF2A631F9CDFDA55C9BFC0F3C5722DE2251720B8',
      name: 'stTIA Boost LP',
      display: 'lp:20:sttiaypt-tia',
      symbol: 'stTIA-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:20:stutiaypt-utia',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for TIA Yield pool',
      denom_units: [{
          denom: 'ibc/58B0130A22A349ED2B675EE47B6F0D0C2183013E16CC54C31D87C6EC45D9CFE8',
          exponent: 0,
          aliases: ['lp:24:utia']
        }, {
          denom: 'lp:24:tia',
          exponent: 6
        }],
      base: 'ibc/58B0130A22A349ED2B675EE47B6F0D0C2183013E16CC54C31D87C6EC45D9CFE8',
      name: 'TIA Yield LP',
      display: 'lp:24:tia',
      symbol: 'TIA-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:24:utia',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for TIA Boost pool',
      denom_units: [{
          denom: 'ibc/A81720AF269A7E735CDB309D1CA8E487C3F71BDA33996E8579C850999EB94955',
          exponent: 0,
          aliases: ['lp:25:utiaypt-utia']
        }, {
          denom: 'lp:25:tiaypt-tia',
          exponent: 6
        }],
      base: 'ibc/A81720AF269A7E735CDB309D1CA8E487C3F71BDA33996E8579C850999EB94955',
      name: 'TIA Boost LP',
      display: 'lp:25:tiaypt-tia',
      symbol: 'TIA-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:25:utiaypt-utia',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for TIA / USDC pool',
      denom_units: [{
          denom: 'ibc/606F4A5DC042F65D53A1695CD076735FC8326A3B16EF60330CBE249ECE9E9544',
          exponent: 0,
          aliases: ['lp:21:utia-uusdc']
        }, {
          denom: 'lp:21:tia-usdc',
          exponent: 6
        }],
      base: 'ibc/606F4A5DC042F65D53A1695CD076735FC8326A3B16EF60330CBE249ECE9E9544',
      name: 'TIA / USDC LP',
      display: 'lp:21:tia-usdc',
      symbol: 'TIA-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:21:utia-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for dATOM Yield pool',
      denom_units: [{
          denom: 'ibc/95547AE6943D14B6AB769DDA8762D6C27097EDFCE42A069960C5148823E6F532',
          exponent: 0,
          aliases: ['lp:22:udatom']
        }, {
          denom: 'lp:22:datom',
          exponent: 6
        }],
      base: 'ibc/95547AE6943D14B6AB769DDA8762D6C27097EDFCE42A069960C5148823E6F532',
      name: 'dATOM Yield LP',
      display: 'lp:22:datom',
      symbol: 'dATOM-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:22:udatom',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for dATOM Boost pool',
      denom_units: [{
          denom: 'ibc/C918438DB31D6539E91A42AC7BDC3B6A424BE9DEAA4209D3A94CE86B588D8828',
          exponent: 0,
          aliases: ['lp:23:udatomypt-uatom']
        }, {
          denom: 'lp:23:datomypt-atom',
          exponent: 6
        }],
      base: 'ibc/C918438DB31D6539E91A42AC7BDC3B6A424BE9DEAA4209D3A94CE86B588D8828',
      name: 'dATOM Boost LP',
      display: 'lp:23:datomypt-atom',
      symbol: 'dATOM-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:23:udatomypt-uatom',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for USDY Yield pool',
      denom_units: [{
          denom: 'ibc/D071C4DA2A1FF48185B5C3047F55F0AD142D336DFBC5D09159401B93BB13806A',
          exponent: 0,
          aliases: ['lp:31:ausdy']
        }, {
          denom: 'lp:31:usdy',
          exponent: 18
        }],
      base: 'ibc/D071C4DA2A1FF48185B5C3047F55F0AD142D336DFBC5D09159401B93BB13806A',
      name: 'USDY Yield LP',
      display: 'lp:31:usdy',
      symbol: 'USDY-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:31:ausdy',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for USDY Boost pool',
      denom_units: [{
          denom: 'ibc/8AA0153C8FF6C88B55CD38EAEB1633FA7EE3F0463294296B7812FDEADCAAEBCF',
          exponent: 0,
          aliases: ['lp:32:ausdyypt-uusdc']
        }, {
          denom: 'lp:32:usdyypt-usdc',
          exponent: 18
        }],
      base: 'ibc/8AA0153C8FF6C88B55CD38EAEB1633FA7EE3F0463294296B7812FDEADCAAEBCF',
      name: 'USDY Boost LP',
      display: 'lp:32:usdyypt-usdc',
      symbol: 'USDY-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:32:ausdyypt-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for PRYZM Yield pool',
      denom_units: [{
          denom: 'ibc/BF626F161C4DC828677097AF57DBD15B31A78B723E12E91B30452F215304D874',
          exponent: 0,
          aliases: ['lp:33:upryzm']
        }, {
          denom: 'lp:33:pryzm',
          exponent: 6
        }],
      base: 'ibc/BF626F161C4DC828677097AF57DBD15B31A78B723E12E91B30452F215304D874',
      name: 'PRYZM Yield LP',
      display: 'lp:33:pryzm',
      symbol: 'PRYZM-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:33:upryzm',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for PRYZM Base pool',
      denom_units: [{
          denom: 'ibc/250FBB9FFE073E40AB4467343F49C3A4666945AFC7E3D9A0BB1A6679B22A9617',
          exponent: 0,
          aliases: ['lp:34:upryzmypt-upryzm']
        }, {
          denom: 'lp:34:pryzmypt-pryzm',
          exponent: 6
        }],
      base: 'ibc/250FBB9FFE073E40AB4467343F49C3A4666945AFC7E3D9A0BB1A6679B22A9617',
      name: 'PRYZM Base LP',
      display: 'lp:34:pryzmypt-pryzm',
      symbol: 'PRYZM-BASE-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:34:upryzmypt-upryzm',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for PRYZM / USDC pool',
      denom_units: [{
          denom: 'ibc/4F021DC910B3CFA86E72000886D9056940F706E538A126D1225DE8BE6F1893BF',
          exponent: 0,
          aliases: ['lp:35:upryzm-uusdc']
        }, {
          denom: 'lp:35:pryzm-usdc',
          exponent: 6
        }],
      base: 'ibc/4F021DC910B3CFA86E72000886D9056940F706E538A126D1225DE8BE6F1893BF',
      name: 'PRYZM / USDC LP',
      display: 'lp:35:pryzm-usdc',
      symbol: 'PRYZM-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:35:upryzm-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for sUSDS Yield pool',
      denom_units: [{
          denom: 'ibc/D85C6B77C9960CAB3DF3B6992ECD61B4E4653C292A1144FF2C80A50F18ECBD05',
          exponent: 0,
          aliases: ['lp:36:asusds']
        }, {
          denom: 'lp:36:susds',
          exponent: 18
        }],
      base: 'ibc/D85C6B77C9960CAB3DF3B6992ECD61B4E4653C292A1144FF2C80A50F18ECBD05',
      name: 'sUSDS Yield LP',
      display: 'lp:36:susds',
      symbol: 'sUSDS-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:36:asusds',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for sUSDS Boost pool',
      denom_units: [{
          denom: 'ibc/6BD9D402976CF2BB0C176D345CE53F78B504AED6AAA29E28F1E093F00668E8E6',
          exponent: 0,
          aliases: ['lp:37:asusdsypt-uusdc']
        }, {
          denom: 'lp:37:susdsypt-usdc',
          exponent: 18
        }],
      base: 'ibc/6BD9D402976CF2BB0C176D345CE53F78B504AED6AAA29E28F1E093F00668E8E6',
      name: 'sUSDS Boost LP',
      display: 'lp:37:susdsypt-usdc',
      symbol: 'sUSDS-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:37:asusdsypt-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for mBTC Yield pool',
      denom_units: [{
          denom: 'ibc/FB7ECB2F1339FE80FF73B8BBE5D45D5D2BEF8201359B48B1C97275450F5FC56F',
          exponent: 0,
          aliases: ['lp:38:ambtc']
        }, {
          denom: 'lp:38:mbtc',
          exponent: 18
        }],
      base: 'ibc/FB7ECB2F1339FE80FF73B8BBE5D45D5D2BEF8201359B48B1C97275450F5FC56F',
      name: 'mBTC Yield LP',
      display: 'lp:38:mbtc',
      symbol: 'mBTC-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:38:ambtc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for mBTC Boost pool',
      denom_units: [{
          denom: 'ibc/8D11F44051EDA738451B1294835AB80A2765158834D7F9C68696EB97028EB492',
          exponent: 0,
          aliases: ['lp:39:ambtcypt-wsat']
        }, {
          denom: 'lp:39:mbtcypt-wbtc',
          exponent: 18
        }],
      base: 'ibc/8D11F44051EDA738451B1294835AB80A2765158834D7F9C68696EB97028EB492',
      name: 'mBTC Boost LP',
      display: 'lp:39:mbtcypt-wbtc',
      symbol: 'mBTC-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:39:ambtcypt-wsat',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for WBTC / USDC pool',
      denom_units: [{
          denom: 'ibc/8D03601A3F9D58F55EA09BEBA2D0831494C21AD2427F5C20391BDA4B5694E3DC',
          exponent: 0,
          aliases: ['lp:40:wsat-uusdc']
        }, {
          denom: 'lp:40:wbtc-usdc',
          exponent: 18
        }],
      base: 'ibc/8D03601A3F9D58F55EA09BEBA2D0831494C21AD2427F5C20391BDA4B5694E3DC',
      name: 'WBTC / USDC LP',
      display: 'lp:40:wbtc-usdc',
      symbol: 'WBTC-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'lp:40:wsat-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-4329'
          }
        }]
    },
    {
      description: 'Saga is a blockchain platform focused on providing customizable blockchain solutions with a strong emphasis on security and scalability.',
      denom_units: [{
          denom: 'ibc/74B554DD3FF10F5D60E30175ADFB47E59F77F7C57024A8104A4F78CDC2EAD125',
          exponent: 0,
          aliases: ['usaga']
        }, {
          denom: 'saga',
          exponent: 6
        }],
      base: 'ibc/74B554DD3FF10F5D60E30175ADFB47E59F77F7C57024A8104A4F78CDC2EAD125',
      name: 'Saga',
      display: 'saga',
      symbol: 'SAGA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg'
      },
      coingecko_id: 'saga-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg',
          theme: {
            dark_mode: false
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.svg',
          theme: {
            dark_mode: true
          }
        }],
      socials: {
        website: 'https://www.saga.xyz/',
        x: 'https://x.com/Sagaxyz__'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'usaga',
            chain_name: 'saga'
          },
          chain: {
            channel_id: 'channel-2060'
          }
        }]
    },
    {
      description: 'Secret Network is a privacy-focused blockchain that enables private and secure smart contracts, protecting sensitive data.',
      denom_units: [{
          denom: 'ibc/15EA36C3AB87E3E5E41A61717B7A20F03CC2363840C1A837A487B8BFE176328E',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'ibc/15EA36C3AB87E3E5E41A61717B7A20F03CC2363840C1A837A487B8BFE176328E',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png'
      },
      coingecko_id: 'secret',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png'
        }],
      socials: {
        website: 'https://scrt.network/',
        x: 'https://x.com/SecretNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-144',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-1551'
          }
        }]
    },
    {
      description: 'Sei is a layer-1 blockchain optimized for trading, focusing on providing high throughput, low latency, and efficient execution for decentralized exchanges.',
      denom_units: [{
          denom: 'ibc/41646AADED0E33983922676F54BF2B8FD31DE06BB02C72949FD4F34081A41073',
          exponent: 0,
          aliases: ['usei']
        }, {
          denom: 'sei',
          exponent: 6
        }],
      base: 'ibc/41646AADED0E33983922676F54BF2B8FD31DE06BB02C72949FD4F34081A41073',
      name: 'Sei',
      display: 'sei',
      symbol: 'SEI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
      },
      coingecko_id: 'sei-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
        }],
      socials: {
        website: 'https://www.sei.io/',
        x: 'https://x.com/SeiNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-66',
            base_denom: 'usei',
            chain_name: 'sei'
          },
          chain: {
            channel_id: 'channel-2016'
          }
        }]
    },
    {
      description: 'OOZARU is a meme token on SEI Network inspired by the iconic transformation in the Dragon Ball series',
      denom_units: [{
          denom: 'ibc/4B4651AE181216ED6258A9B86DC6FF8FEB765DB9F90A38EE15A10E3F9EC33E88',
          exponent: 0,
          aliases: ['sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda']
        }, {
          denom: 'oozaru',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda',
      base: 'ibc/4B4651AE181216ED6258A9B86DC6FF8FEB765DB9F90A38EE15A10E3F9EC33E88',
      name: 'Oozaru',
      display: 'oozaru',
      symbol: 'OOZARU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oozaru.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oozaru.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-66',
            base_denom: 'sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda',
            chain_name: 'sei'
          },
          chain: {
            channel_id: 'channel-2016'
          }
        }]
    },
    {
      description: 'The native token of Side Chain.',
      denom_units: [{
          denom: 'ibc/589B02B56655FE2977D76D53ABA89BAFE270D86827D02FD5339AC7BD5FCB75EF',
          exponent: 0,
          aliases: ['uside']
        }, {
          denom: 'side',
          exponent: 6
        }],
      base: 'ibc/589B02B56655FE2977D76D53ABA89BAFE270D86827D02FD5339AC7BD5FCB75EF',
      name: 'Side Chain native token',
      display: 'side',
      symbol: 'SIDE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/side.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/side.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/side.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/side.svg'
        }],
      socials: {
        website: 'https://side.one',
        x: 'https://x.com/SideProtocol'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'uside',
            chain_name: 'sidechain'
          },
          chain: {
            channel_id: 'channel-6852'
          }
        }]
    },
    {
      description: 'Stargaze is a decentralized blockchain platform designed specifically for non-fungible tokens (NFTs), enabling creators to mint, trade, and interact with NFTs in a fully decentralized environment.',
      denom_units: [{
          denom: 'ibc/A139C0E0B5E87CBA8EAEEB12B9BEE13AC7C814CFBBFA87BBCADD67E31003466C',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ibc/A139C0E0B5E87CBA8EAEEB12B9BEE13AC7C814CFBBFA87BBCADD67E31003466C',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
      },
      coingecko_id: 'stargaze',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
        }],
      socials: {
        website: 'https://www.stargaze.zone/',
        x: 'https://x.com/StargazeZone'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-191',
            base_denom: 'ustars',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-18'
          }
        }]
    },
    {
      description: 'Stride is a liquid staking blockchain in the Cosmos ecosystem that allows users to stake any IBC-compatible tokens and receive stTokens in return, providing liquidity while earning staking rewards.',
      denom_units: [{
          denom: 'ibc/3552CECB7BCE1891DB6070D37EC6E954C972B1400141308FCD85FD148BD06DE5',
          exponent: 0,
          aliases: ['ustrd']
        }, {
          denom: 'strd',
          exponent: 6
        }],
      base: 'ibc/3552CECB7BCE1891DB6070D37EC6E954C972B1400141308FCD85FD148BD06DE5',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
      },
      coingecko_id: 'stride',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
        }],
      socials: {
        website: 'https://stride.zone/',
        x: 'https://x.com/stride_zone'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-123',
            base_denom: 'ustrd',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-8'
          }
        }]
    },
    {
      description: 'The native staking token of Terra Phoenix.',
      denom_units: [{
          denom: 'ibc/322C86EB54A505E28AFE380CED1721FA61E9580A7548A16B9DCF6E7C8CEE43D5',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'ibc/322C86EB54A505E28AFE380CED1721FA61E9580A7548A16B9DCF6E7C8CEE43D5',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      },
      coingecko_id: 'terra-luna-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
        }],
      socials: {
        website: 'https://www.phoenix.money/',
        x: 'https://x.com/phoenix_dir'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-229',
            base_denom: 'uluna',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-25'
          }
        }]
    },
    {
      description: 'Puppy',
      denom_units: [{
          denom: 'ibc/6B7CF9875980D4CB770DEA8E028B6E6FF1611C1B5F82A6BD3A29DBC4BA26A231',
          exponent: 0,
          aliases: ['cw20:chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef']
        }, {
          denom: 'puppy',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef',
      base: 'ibc/6B7CF9875980D4CB770DEA8E028B6E6FF1611C1B5F82A6BD3A29DBC4BA26A231',
      name: 'Puppy',
      display: 'puppy',
      symbol: 'PUPPY',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/puppyhuahua_logo.png'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/puppyhuahua_logo.png'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.chihuahua1jwkag4yvhyj9fuddtkygvavya8hmdjuzmgxwg9vp3lw9twv6lrcq9mgl52',
            channel_id: 'channel-77',
            base_denom: 'cw20:chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef',
            chain_name: 'chihuahua'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'BackBone Labs Liquid Staked HUAHUA',
      denom_units: [{
          denom: 'ibc/8CC818BC7D48241F5EDDCAB4C386FDE5CB4E05B5F1C5062937AC6064D0AED16B',
          exponent: 0,
          aliases: ['cw20:chihuahua1jz5n4aynhpxx7clf2m8hrv9dp5nz83k67fgaxhy4p9dfwl6zssrq3ymr6w']
        }, {
          denom: 'bHUAHUA',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'chihuahua1jz5n4aynhpxx7clf2m8hrv9dp5nz83k67fgaxhy4p9dfwl6zssrq3ymr6w',
      base: 'ibc/8CC818BC7D48241F5EDDCAB4C386FDE5CB4E05B5F1C5062937AC6064D0AED16B',
      name: 'BackBone Labs Liquid Staked HUAHUA',
      display: 'bHUAHUA',
      symbol: 'bHUAHUA',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.chihuahua1jwkag4yvhyj9fuddtkygvavya8hmdjuzmgxwg9vp3lw9twv6lrcq9mgl52',
            channel_id: 'channel-77',
            base_denom: 'cw20:chihuahua1jz5n4aynhpxx7clf2m8hrv9dp5nz83k67fgaxhy4p9dfwl6zssrq3ymr6w',
            chain_name: 'chihuahua'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-52'
          }
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/bhuahua.png'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/bhuahua.png'
      }
    },
    {
      description: 'Puppy',
      denom_units: [{
          denom: 'ibc/6B7CF9875980D4CB770DEA8E028B6E6FF1611C1B5F82A6BD3A29DBC4BA26A231',
          exponent: 0,
          aliases: ['cw20:chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef']
        }, {
          denom: 'puppy',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef',
      base: 'ibc/6B7CF9875980D4CB770DEA8E028B6E6FF1611C1B5F82A6BD3A29DBC4BA26A231',
      name: 'Puppy',
      display: 'puppy',
      symbol: 'PUPPY',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/puppyhuahua_logo.png'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/puppyhuahua_logo.png'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.chihuahua1jwkag4yvhyj9fuddtkygvavya8hmdjuzmgxwg9vp3lw9twv6lrcq9mgl52',
            channel_id: 'channel-77',
            base_denom: 'cw20:chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef',
            chain_name: 'chihuahua'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'BackBone Labs Liquid Staked HUAHUA',
      denom_units: [{
          denom: 'ibc/8CC818BC7D48241F5EDDCAB4C386FDE5CB4E05B5F1C5062937AC6064D0AED16B',
          exponent: 0,
          aliases: ['cw20:chihuahua1jz5n4aynhpxx7clf2m8hrv9dp5nz83k67fgaxhy4p9dfwl6zssrq3ymr6w']
        }, {
          denom: 'bHUAHUA',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'chihuahua1jz5n4aynhpxx7clf2m8hrv9dp5nz83k67fgaxhy4p9dfwl6zssrq3ymr6w',
      base: 'ibc/8CC818BC7D48241F5EDDCAB4C386FDE5CB4E05B5F1C5062937AC6064D0AED16B',
      name: 'BackBone Labs Liquid Staked HUAHUA',
      display: 'bHUAHUA',
      symbol: 'bHUAHUA',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.chihuahua1jwkag4yvhyj9fuddtkygvavya8hmdjuzmgxwg9vp3lw9twv6lrcq9mgl52',
            channel_id: 'channel-77',
            base_denom: 'cw20:chihuahua1jz5n4aynhpxx7clf2m8hrv9dp5nz83k67fgaxhy4p9dfwl6zssrq3ymr6w',
            chain_name: 'chihuahua'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-52'
          }
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/bhuahua.png'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/bhuahua.png'
      }
    },
    {
      description: 'The native token cw20 for SIENNA on Secret Network',
      denom_units: [{
          denom: 'ibc/F34BB6D8DC5B8EB308690D47C1E139A2B832B089575B145AC0030454528F9D04',
          exponent: 0,
          aliases: ['cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4']
        }, {
          denom: 'sienna',
          exponent: 18
        }],
      type_asset: 'snip20',
      address: 'secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
      base: 'ibc/F34BB6D8DC5B8EB308690D47C1E139A2B832B089575B145AC0030454528F9D04',
      name: 'SIENNA',
      display: 'sienna',
      symbol: 'SIENNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-151',
            base_denom: 'cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1950'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/72633314E3A5D6EC0F80D0D8D994F59613BF1CF3A104F407CB9AA4128EE2D3E3',
          exponent: 0,
          aliases: ['cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip20',
      address: 'secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
      base: 'ibc/72633314E3A5D6EC0F80D0D8D994F59613BF1CF3A104F407CB9AA4128EE2D3E3',
      name: 'Shade (old)',
      display: 'shd',
      symbol: 'SHD.old',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-151',
            base_denom: 'cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1950'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/B6643B477C69060B125279D9FF69EC20189E4D15DC24CF0457E0BAA9DD1A26AE',
          exponent: 0,
          aliases: ['cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip25',
      address: 'secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
      base: 'ibc/B6643B477C69060B125279D9FF69EC20189E4D15DC24CF0457E0BAA9DD1A26AE',
      name: 'Shade',
      display: 'shd',
      symbol: 'SHD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
      },
      coingecko_id: 'shade-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-151',
            base_denom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1950'
          }
        }]
    },
    {
      description: 'The native token cw20 for Silk on Secret Network',
      denom_units: [{
          denom: 'ibc/94D85D1AB75CB0BF9B6818EE317E86A83FA9C5D4140D06E71778B97C1FCAC79C',
          exponent: 0,
          aliases: ['cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd']
        }, {
          denom: 'silk',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
      base: 'ibc/94D85D1AB75CB0BF9B6818EE317E86A83FA9C5D4140D06E71778B97C1FCAC79C',
      name: 'Silk',
      display: 'silk',
      symbol: 'SILK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
      },
      coingecko_id: 'silk-bcec1136-561c-4706-a42c-8b67d0d7f7d2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-151',
            base_denom: 'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1950'
          }
        }]
    },
    {
      description: 'The native token cw20 for dSilk on Secret Network',
      denom_units: [{
          denom: 'ibc/2259287C1DB42AB8407C7FE06608B59D62BB85734EE462CB93D4BC348874D23A',
          exponent: 0,
          aliases: ['cw20:secret1apxywjp2h8vet54xzyfc96htlt9qqgrh7gawhw']
        }, {
          denom: 'dsilk',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret1apxywjp2h8vet54xzyfc96htlt9qqgrh7gawhw',
      base: 'ibc/2259287C1DB42AB8407C7FE06608B59D62BB85734EE462CB93D4BC348874D23A',
      name: 'dSilk',
      display: 'dsilk',
      symbol: 'dSILK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/dsilk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/dsilk.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/dsilk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/dsilk.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-151',
            base_denom: 'cw20:secret1apxywjp2h8vet54xzyfc96htlt9qqgrh7gawhw',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1950'
          }
        }]
    },
    {
      description: 'The native token cw20 for xSilk on Secret Network',
      denom_units: [{
          denom: 'ibc/2A00A2767FC48FED1A444AB4A8C40BFA40495F6576B0282F2B42CF653343E33E',
          exponent: 0,
          aliases: ['cw20:secret1lqt2u3ntzrkjev8z5m6ennu4n3zl3trx67ck82']
        }, {
          denom: 'xsilk',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret1lqt2u3ntzrkjev8z5m6ennu4n3zl3trx67ck82',
      base: 'ibc/2A00A2767FC48FED1A444AB4A8C40BFA40495F6576B0282F2B42CF653343E33E',
      name: 'xSilk',
      display: 'xsilk',
      symbol: 'xSILK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-151',
            base_denom: 'cw20:secret1lqt2u3ntzrkjev8z5m6ennu4n3zl3trx67ck82',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1950'
          }
        }]
    },
    {
      description: 'The native token cw20 for SCRT Staking Derivatives on Secret Network',
      denom_units: [{
          denom: 'ibc/83AB1D5C247BD3FFAD768B477CB2F4372F37C64D9588B1137C4DFF45B1492CBE',
          exponent: 0,
          aliases: ['cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4']
        }, {
          denom: 'stkd-scrt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
      base: 'ibc/83AB1D5C247BD3FFAD768B477CB2F4372F37C64D9588B1137C4DFF45B1492CBE',
      name: 'SCRT Staking Derivatives',
      display: 'stkd-scrt',
      symbol: 'stkd-SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg'
      },
      coingecko_id: 'stkd-scrt',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-151',
            base_denom: 'cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1950'
          }
        }]
    },
    {
      description: 'The native token cw20 for Button on Secret Network',
      denom_units: [{
          denom: 'ibc/0B0A4F4E2B2B5532F9B8EB470BBB7507F90A8FD627B2202D52588F875A415887',
          exponent: 0,
          aliases: ['cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt']
        }, {
          denom: 'butt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
      base: 'ibc/0B0A4F4E2B2B5532F9B8EB470BBB7507F90A8FD627B2202D52588F875A415887',
      name: 'Button',
      display: 'butt',
      symbol: 'BUTT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-151',
            base_denom: 'cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1950'
          }
        }]
    },
    {
      description: 'The native token cw20 for Alter on Secret Network',
      denom_units: [{
          denom: 'ibc/ACB8553B3FD1AE23F8EB6D80554334C949430BB73CD473EBEEC696CBD7901A1A',
          exponent: 0,
          aliases: ['cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej']
        }, {
          denom: 'alter',
          exponent: 6
        }],
      base: 'ibc/ACB8553B3FD1AE23F8EB6D80554334C949430BB73CD473EBEEC696CBD7901A1A',
      type_asset: 'snip20',
      address: 'secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
      name: 'Alter',
      display: 'alter',
      symbol: 'ALTER',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg'
        }],
      socials: {
        website: 'http://alter.network/',
        x: 'https://x.com/AlterDapp'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-151',
            base_denom: 'cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1950'
          }
        }]
    },
    {
      description: 'The native token cw20 for Amber on Secret Network',
      denom_units: [{
          denom: 'ibc/57EF51F97A2BBED1657A599DBC6BB6EB150D86828B59848BE3B4FCE7AAF67168',
          exponent: 0,
          aliases: ['cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852']
        }, {
          denom: 'amber',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
      base: 'ibc/57EF51F97A2BBED1657A599DBC6BB6EB150D86828B59848BE3B4FCE7AAF67168',
      name: 'Amber',
      display: 'amber',
      symbol: 'AMBER',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png'
        }],
      socials: {
        website: 'http://amber.money/',
        x: 'https://x.com/AmberDAO_'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-151',
            base_denom: 'cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1950'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shill on Secret Network',
      denom_units: [{
          denom: 'ibc/0D52AA0ADBB6DAFE82170221497F0F0BD05A819EB6FFF6551ED67BE7C88D4358',
          exponent: 0,
          aliases: ['cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse']
        }, {
          denom: 'shill',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
      base: 'ibc/0D52AA0ADBB6DAFE82170221497F0F0BD05A819EB6FFF6551ED67BE7C88D4358',
      name: 'Shill',
      display: 'shill',
      symbol: 'SHILL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-151',
            base_denom: 'cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1950'
          }
        }]
    },
    {
      description: 'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
      denom_units: [{
          denom: 'ibc/5751B8BCDA688FD0A8EC0B292EEF1CDEAB4B766B63EC632778B196D317C40C3A',
          exponent: 0,
          aliases: ['cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26']
        }, {
          denom: 'astro.cw20',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
      base: 'ibc/5751B8BCDA688FD0A8EC0B292EEF1CDEAB4B766B63EC632778B196D317C40C3A',
      name: 'Astroport CW20 Token',
      display: 'astro.cw20',
      symbol: 'ASTRO.cw20',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro-cw20.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro-cw20.svg'
        }, {
          image_sync: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.png'
        }],
      socials: {
        website: 'https://astroport.fi/',
        x: 'https://x.com/astroport_fi'
      },
      coingecko_id: 'astroport-fi'
    },
    {
      description: 'Dinheiros is the reserve currency of dioalma.protocol, an undivisible and rare token.',
      denom_units: [{
          denom: 'ibc/F2240EA389ADB06A20FDAE82928F2F206FD72002A569375B17C8AEDABC17D44B',
          exponent: 0,
          aliases: ['cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k']
        }],
      type_asset: 'cw20',
      address: 'terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
      base: 'ibc/F2240EA389ADB06A20FDAE82928F2F206FD72002A569375B17C8AEDABC17D44B',
      name: 'dinheiro',
      display: 'cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
      symbol: 'DINHEIROS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Dinheiros.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Dinheiros.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'Reis is the king of trading, high volume high liquidity, sibling of Dinheiros, Reis and Alem, a token of dioalma.protocol.',
      denom_units: [{
          denom: 'ibc/C26052FC87DA2180CF4E9D627C5A1D2FFD13A218942FBCB268A7B0672D9A08EA',
          exponent: 0,
          aliases: ['cw20:terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8']
        }, {
          denom: 'Reis',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8',
      base: 'ibc/C26052FC87DA2180CF4E9D627C5A1D2FFD13A218942FBCB268A7B0672D9A08EA',
      name: 'real',
      display: 'Reis',
      symbol: 'REIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Reis.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Reis.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'Escudos is the everyday currency of dioalma.protocol, good to send money back and forward.',
      denom_units: [{
          denom: 'ibc/25CD16BC15D251B629A54394A0070F772E19D7F30583612FF9EFDCE665D9C94D',
          exponent: 0,
          aliases: ['cw20:terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg']
        }, {
          denom: 'Escudos',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg',
      base: 'ibc/25CD16BC15D251B629A54394A0070F772E19D7F30583612FF9EFDCE665D9C94D',
      name: 'escudo',
      display: 'Escudos',
      symbol: 'ESCUDOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Escudos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Escudos.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'Alem is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/77A8D6320531A9803FEDA793AAAA7AAE884DCB607B30003497A4F064AF2F0BFE',
          exponent: 0,
          aliases: ['cw20:terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q']
        }, {
          denom: 'Alem',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q',
      base: 'ibc/77A8D6320531A9803FEDA793AAAA7AAE884DCB607B30003497A4F064AF2F0BFE',
      name: 'alentejo.money',
      display: 'Alem',
      symbol: 'ALEM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Alem.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Alem.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'almagem is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/343D39DE8AE532498C7E3C15EF34077B598BF2CB5F028E78703CC04F47D03FAB',
          exponent: 0,
          aliases: ['cw20:terra1en42e2vsvtdsvrcqg5s5e5e4djejjaed6fxmvtpweg3tu33h6k5qkg9c40']
        }, {
          denom: 'AMG',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1en42e2vsvtdsvrcqg5s5e5e4djejjaed6fxmvtpweg3tu33h6k5qkg9c40',
      base: 'ibc/343D39DE8AE532498C7E3C15EF34077B598BF2CB5F028E78703CC04F47D03FAB',
      name: 'almagem',
      display: 'AMG',
      symbol: 'AMG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/almagem.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/almagem.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1en42e2vsvtdsvrcqg5s5e5e4djejjaed6fxmvtpweg3tu33h6k5qkg9c40',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'arika is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/12BC1872477B237F42109B7F684C057A1E819B4CE3D59FD77C26AD0D79F9463F',
          exponent: 0,
          aliases: ['cw20:terra1ysd87nayjuelxj4wvp4wnp9as0mwszzkje6a9z6f3xx2903ghnsq4hm50y']
        }, {
          denom: 'ARK',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1ysd87nayjuelxj4wvp4wnp9as0mwszzkje6a9z6f3xx2903ghnsq4hm50y',
      base: 'ibc/12BC1872477B237F42109B7F684C057A1E819B4CE3D59FD77C26AD0D79F9463F',
      name: 'arika',
      display: 'ARK',
      symbol: 'ARK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/arika.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/arika.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1ysd87nayjuelxj4wvp4wnp9as0mwszzkje6a9z6f3xx2903ghnsq4hm50y',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'danu is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/65B8D62C0D72709BF3E41A7AE63814860AC6B9E37D2178197EC3DFD979C3CE2D',
          exponent: 0,
          aliases: ['cw20:terra1vj68f2ntauaj5dfvy5z4tq4we3hsyg363k63js5sae2t7th9aacqan89sr']
        }, {
          denom: 'DANU',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1vj68f2ntauaj5dfvy5z4tq4we3hsyg363k63js5sae2t7th9aacqan89sr',
      base: 'ibc/65B8D62C0D72709BF3E41A7AE63814860AC6B9E37D2178197EC3DFD979C3CE2D',
      name: 'danu',
      display: 'DANU',
      symbol: 'DANU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/danu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/danu.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1vj68f2ntauaj5dfvy5z4tq4we3hsyg363k63js5sae2t7th9aacqan89sr',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'torus is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/8315DD46F7055A61B82C5CC3FC47B78BEA8347B60F7AD5EC34EDDBF309E5BA74',
          exponent: 0,
          aliases: ['cw20:terra1swzpenwh39f8aa7qht34r05f8ew6k2vehvqt2aw4fjy0fgghhheqs9l6h7']
        }, {
          denom: 'TRS',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1swzpenwh39f8aa7qht34r05f8ew6k2vehvqt2aw4fjy0fgghhheqs9l6h7',
      base: 'ibc/8315DD46F7055A61B82C5CC3FC47B78BEA8347B60F7AD5EC34EDDBF309E5BA74',
      name: 'torus',
      display: 'TRS',
      symbol: 'TRS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/trs.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/trs.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1swzpenwh39f8aa7qht34r05f8ew6k2vehvqt2aw4fjy0fgghhheqs9l6h7',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'plasma is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/CB742D8220905E6692DDE7EBB2839DD4E548ED48C8F5BA160D9485AB58BE0FF5',
          exponent: 0,
          aliases: ['cw20:terra1mqs6mdx0ak7qvjzs6efhg65g4j5pzwpdkcgdsv5tpekln3qhggrq3qzvdp']
        }, {
          denom: 'PLASMA',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1mqs6mdx0ak7qvjzs6efhg65g4j5pzwpdkcgdsv5tpekln3qhggrq3qzvdp',
      base: 'ibc/CB742D8220905E6692DDE7EBB2839DD4E548ED48C8F5BA160D9485AB58BE0FF5',
      name: 'plasma',
      display: 'PLASMA',
      symbol: 'PLASMA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/plasma.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/plasma.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1mqs6mdx0ak7qvjzs6efhg65g4j5pzwpdkcgdsv5tpekln3qhggrq3qzvdp',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'dmt is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/F2685E4632D73841E4A9F9DD0E3E9CC55B0F62523D581E285F9DB0D045943375',
          exponent: 0,
          aliases: ['cw20:terra1xfkkgwxychgrnq0vcp82u32mecrzj8s64s03cxtmf46k6j2n2wssc7rzjf']
        }, {
          denom: 'DMT',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1xfkkgwxychgrnq0vcp82u32mecrzj8s64s03cxtmf46k6j2n2wssc7rzjf',
      base: 'ibc/F2685E4632D73841E4A9F9DD0E3E9CC55B0F62523D581E285F9DB0D045943375',
      name: 'dmt',
      display: 'DMT',
      symbol: 'DMT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/dmt.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/dmt.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1xfkkgwxychgrnq0vcp82u32mecrzj8s64s03cxtmf46k6j2n2wssc7rzjf',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'ERIS liquid staked LUNA.',
      type_asset: 'cw20',
      address: 'terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct',
      denom_units: [{
          denom: 'ibc/B1727E3EA658E1901C5DE4940224E0933D730B159B2734F05C3748E713C0BAA2',
          exponent: 0,
          aliases: ['cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct']
        }, {
          denom: 'ampluna',
          exponent: 6
        }],
      base: 'ibc/B1727E3EA658E1901C5DE4940224E0933D730B159B2734F05C3748E713C0BAA2',
      name: 'ERIS Amplified LUNA',
      display: 'ampluna',
      symbol: 'ampLUNA',
      coingecko_id: 'eris-amplified-luna',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampluna.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampluna.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'Lion DAO is a community DAO that lives on the Terra blockchain with the mission to reactivate the LUNAtic community and showcase Terra protocols & tooling',
      type_asset: 'cw20',
      address: 'terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
      denom_units: [{
          denom: 'ibc/0BF6931F388833D8611F821E62C7744A37E2525AE377F4A21DF1E1CF822925F4',
          exponent: 0,
          aliases: ['cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv']
        }, {
          denom: 'roar',
          exponent: 6
        }],
      base: 'ibc/0BF6931F388833D8611F821E62C7744A37E2525AE377F4A21DF1E1CF822925F4',
      name: 'Lion DAO',
      display: 'roar',
      symbol: 'ROAR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png'
      },
      coingecko_id: 'lion-dao',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'GEM DAO, building a decentralized, community-owned, low-supply store of value',
      type_asset: 'cw20',
      address: 'terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv',
      denom_units: [{
          denom: 'ibc/72EB483F35AB1DA36D027CE51A2D4887CCD63C2A69F43A030DF05FBE9C745D36',
          exponent: 0,
          aliases: ['cw20:terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv']
        }, {
          denom: 'gem',
          exponent: 6
        }],
      base: 'ibc/72EB483F35AB1DA36D027CE51A2D4887CCD63C2A69F43A030DF05FBE9C745D36',
      name: 'GEM DAO',
      display: 'gem',
      symbol: 'GEM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gem.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gem.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'Lion Cub DAO is a useless meme community DAO on Terra',
      type_asset: 'cw20',
      address: 'terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
      denom_units: [{
          denom: 'ibc/ABE05EAE3EDA06AE82B0205B126AD311D5D750548A2F820C60AB82FC24FB7766',
          exponent: 0,
          aliases: ['cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t']
        }, {
          denom: 'cub',
          exponent: 6
        }],
      base: 'ibc/ABE05EAE3EDA06AE82B0205B126AD311D5D750548A2F820C60AB82FC24FB7766',
      name: 'Lion Cub DAO',
      display: 'cub',
      symbol: 'CUB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'BLUE CUB DAO is a community DAO on Terra',
      type_asset: 'cw20',
      address: 'terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584',
      denom_units: [{
          denom: 'ibc/87F9D3A0DFD6E6551CD17FBA46566CF1B353CB0209E84B2EB998160DE6EF6400',
          exponent: 0,
          aliases: ['cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584']
        }, {
          denom: 'blue',
          exponent: 6
        }],
      base: 'ibc/87F9D3A0DFD6E6551CD17FBA46566CF1B353CB0209E84B2EB998160DE6EF6400',
      name: 'BLUE CUB DAO',
      display: 'blue',
      symbol: 'BLUE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'Liquidity token, NFT, HARVEST FOR VALUE',
      type_asset: 'cw20',
      address: 'terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn',
      denom_units: [{
          denom: 'ibc/86AA5A3887B02A0F34723E0041B79C98360739005833D79AE5A64314FF3714A4',
          exponent: 0,
          aliases: ['cw20:terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn']
        }, {
          denom: 'xxx',
          exponent: 10
        }],
      base: 'ibc/86AA5A3887B02A0F34723E0041B79C98360739005833D79AE5A64314FF3714A4',
      name: 'TheOnlyOne',
      display: 'xxx',
      symbol: 'xxx',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xxx3.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xxx3.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'Just a meme coin on Terra',
      type_asset: 'cw20',
      address: 'terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces',
      denom_units: [{
          denom: 'ibc/D4CEB12C36CD2BAB3686B911132D09DB8E6877AFE6BAC36B7B4DAA7B3204430A',
          exponent: 0,
          aliases: ['cw20:terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces']
        }, {
          denom: 'GUGU',
          exponent: 6
        }],
      base: 'ibc/D4CEB12C36CD2BAB3686B911132D09DB8E6877AFE6BAC36B7B4DAA7B3204430A',
      name: 'GUGU',
      display: 'GUGU',
      symbol: 'GUGU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gugu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gugu.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'BackBone Labs Liquid Staked LUNA',
      type_asset: 'cw20',
      address: 'terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
      denom_units: [{
          denom: 'ibc/A847ACCB987D74EBFE13322D970D95611B40E04800C262BE89E3576D45FEA0F2',
          exponent: 0,
          aliases: ['cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml']
        }, {
          denom: 'bLUNA',
          exponent: 6
        }],
      base: 'ibc/A847ACCB987D74EBFE13322D970D95611B40E04800C262BE89E3576D45FEA0F2',
      name: 'BackBone Labs Liquid Staked LUNA',
      display: 'bLUNA',
      symbol: 'bLUNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bLUNA.png'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bLUNA.png'
        }]
    },
    {
      description: 'Sayve is a revolutionary language learning app in the Web3 era that combines gamification, blockchain technology, and a Metaverse experience to motivate users to learn languages while earning rewards.',
      type_asset: 'cw20',
      address: 'terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3',
      denom_units: [{
          denom: 'ibc/8D22D4A2B74346C14A074842919B96BC645DD0E688D826ED94DC57C4C68D411B',
          exponent: 0,
          aliases: ['cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3']
        }, {
          denom: 'sayve',
          exponent: 6
        }],
      base: 'ibc/8D22D4A2B74346C14A074842919B96BC645DD0E688D826ED94DC57C4C68D411B',
      name: 'sayve',
      display: 'sayve',
      symbol: 'SAYVE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'Nico Dao Money',
      type_asset: 'cw20',
      address: 'terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3',
      denom_units: [{
          denom: 'ibc/E9DC83CFCF0D476E05F7746E7561EFF4AE7CB3843A8F33BFC3CD19B6C6522C78',
          exponent: 0,
          aliases: ['cw20:terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3']
        }, {
          denom: 'nico',
          exponent: 18
        }],
      base: 'ibc/E9DC83CFCF0D476E05F7746E7561EFF4AE7CB3843A8F33BFC3CD19B6C6522C78',
      name: 'nico',
      display: 'nico',
      symbol: 'NICO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/nicodao.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/nicodao.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'Sailing the Seas DAO is a community DAO built on Enterprise on Terra',
      type_asset: 'cw20',
      address: 'terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala',
      denom_units: [{
          denom: 'ibc/4DEC044190B0FA38B1F20D8895D060424D5A5C53643E5C3C3861BEB7A348FCD1',
          exponent: 0,
          aliases: ['cw20:terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala']
        }, {
          denom: 'seas',
          exponent: 6
        }],
      base: 'ibc/4DEC044190B0FA38B1F20D8895D060424D5A5C53643E5C3C3861BEB7A348FCD1',
      name: 'Sailing The SeaS DAO',
      display: 'seas',
      symbol: 'SEAS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/SEAS.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/SEAS.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'A community DAO built on Enterprise',
      type_asset: 'cw20',
      address: 'terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v',
      denom_units: [{
          denom: 'ibc/569D9D35E223352128F0115B89AEBFC1A74FEB495300937FE726D249214E0A61',
          exponent: 0,
          aliases: ['cw20:terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v']
        }, {
          denom: 'bitz',
          exponent: 6
        }],
      base: 'ibc/569D9D35E223352128F0115B89AEBFC1A74FEB495300937FE726D249214E0A61',
      name: 'BitzDAO',
      display: 'bitz',
      symbol: 'BITZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/BITZ.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/BITZ.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'SEUL DAO',
      type_asset: 'cw20',
      address: 'terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l',
      denom_units: [{
          denom: 'ibc/8E70FC3FDE1B9CCE5A888102747A8D546ED9A026DF268A385EBB79C92710D12F',
          exponent: 0,
          aliases: ['cw20:terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l']
        }, {
          denom: 'seul',
          exponent: 6
        }],
      base: 'ibc/8E70FC3FDE1B9CCE5A888102747A8D546ED9A026DF268A385EBB79C92710D12F',
      name: 'seul',
      display: 'seul',
      symbol: 'SEUL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/seul.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/seul.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'SEUL DAO',
      type_asset: 'cw20',
      address: 'terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5',
      denom_units: [{
          denom: 'ibc/9BCAC9FC15EC20EABA494C46DAA60248C34151D280284B662128ABB8DD56A3A5',
          exponent: 0,
          aliases: ['cw20:terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5']
        }, {
          denom: 'xseul',
          exponent: 6
        }],
      base: 'ibc/9BCAC9FC15EC20EABA494C46DAA60248C34151D280284B662128ABB8DD56A3A5',
      name: 'xseul',
      display: 'xseul',
      symbol: 'xSEUL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xseul.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xseul.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'ITO DAO',
      type_asset: 'cw20',
      address: 'terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s',
      denom_units: [{
          denom: 'ibc/FDE7D998A65434AA9918DBAB4B7F1AB746FF7144EB1686C8EA88966E55908327',
          exponent: 0,
          aliases: ['cw20:terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s']
        }, {
          denom: 'ito',
          exponent: 6
        }],
      base: 'ibc/FDE7D998A65434AA9918DBAB4B7F1AB746FF7144EB1686C8EA88966E55908327',
      name: 'ito',
      display: 'ito',
      symbol: 'ITO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/I.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/I.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'Chris Armani Token',
      type_asset: 'cw20',
      address: 'terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8',
      denom_units: [{
          denom: 'ibc/E33E511988520C16CCF710081975BD5E552A3684F3F3C240B4E57E19B59CD76D',
          exponent: 0,
          aliases: ['cw20:terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8']
        }, {
          denom: 'ARMANI',
          exponent: 6
        }],
      base: 'ibc/E33E511988520C16CCF710081975BD5E552A3684F3F3C240B4E57E19B59CD76D',
      name: 'ARMANI',
      display: 'ARMANI',
      symbol: 'ARMANI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/armani.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/armani.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'useless meme coin',
      type_asset: 'cw20',
      address: 'terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun',
      denom_units: [{
          denom: 'ibc/2368A9EC6FE3804C6D539E936C5501782AF6C836CEED753589FFCF907DFDDF94',
          exponent: 0,
          aliases: ['cw20:terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun']
        }, {
          denom: 'DROGO',
          exponent: 6
        }],
      base: 'ibc/2368A9EC6FE3804C6D539E936C5501782AF6C836CEED753589FFCF907DFDDF94',
      name: 'DROGO',
      display: 'DROGO',
      symbol: 'DROGO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/drogo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/drogo.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'ado the flower of night',
      type_asset: 'cw20',
      address: 'terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu',
      denom_units: [{
          denom: 'ibc/32730AF3F5D7A11BCA24AEF67604DD90D0A74539DADEFAF6D80C304940B8F790',
          exponent: 0,
          aliases: ['cw20:terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu']
        }, {
          denom: 'ADO',
          exponent: 6
        }],
      base: 'ibc/32730AF3F5D7A11BCA24AEF67604DD90D0A74539DADEFAF6D80C304940B8F790',
      name: 'ADO',
      display: 'ADO',
      symbol: 'ADO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ADO.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ADO.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'DNA DAO',
      type_asset: 'cw20',
      address: 'terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h',
      denom_units: [{
          denom: 'ibc/3D433C441AD822D671F6682A6D63AC9638B4419D897E6D81D26D7FC20AA7D4AE',
          exponent: 0,
          aliases: ['cw20:terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h']
        }, {
          denom: 'DNA',
          exponent: 6
        }],
      base: 'ibc/3D433C441AD822D671F6682A6D63AC9638B4419D897E6D81D26D7FC20AA7D4AE',
      name: 'DNA',
      display: 'DNA',
      symbol: 'DNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/DNA.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/DNA.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'Bitmos opens doors for BRC20 tokens to thrive alongside established players in the Cosmos Network, revolutionizing decentralized finance (DeFi) for all.',
      type_asset: 'cw20',
      address: 'terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq',
      denom_units: [{
          denom: 'ibc/F38B4F23EF6630EF7AD779E64CB1457C37768F909EBDBA17330916FC12286784',
          exponent: 0,
          aliases: ['cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq']
        }, {
          denom: 'bitmos',
          exponent: 6
        }],
      base: 'ibc/F38B4F23EF6630EF7AD779E64CB1457C37768F909EBDBA17330916FC12286784',
      name: 'Bitmos',
      display: 'bitmos',
      symbol: 'BMOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bitmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bitmos.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      type_asset: 'cw20',
      address: 'terra1eh8eq60cjy997w5dc3a6exfzanlaurupav8klx7m9u9ddfgh25mqjwl5vj',
      denom_units: [{
          denom: 'ibc/53F161D91D56728A92EB6023E78ADBF49CEBEF875A1EFDCCDC46127F65D59E36',
          exponent: 0,
          aliases: ['cw20:terra1eh8eq60cjy997w5dc3a6exfzanlaurupav8klx7m9u9ddfgh25mqjwl5vj']
        }, {
          denom: 'lads',
          exponent: 6
        }],
      base: 'ibc/53F161D91D56728A92EB6023E78ADBF49CEBEF875A1EFDCCDC46127F65D59E36',
      name: 'LADS',
      display: 'lads',
      symbol: 'LADS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/LADS.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/LADS.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1eh8eq60cjy997w5dc3a6exfzanlaurupav8klx7m9u9ddfgh25mqjwl5vj',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'ClonEliteFund invests in Cosmos ecosystem projects, focusing on scalability, security, and interoperability to maximize returns.',
      type_asset: 'cw20',
      address: 'terra164ssz60yvsxey0ku9mtcaegdeyxwzuwwqyrp238nvflwqve0pvxsra7fa2',
      denom_units: [{
          denom: 'ibc/E4AD82E96E989414B094A48BA4910EE3E6AD22BBE1FB09A39788BCA26D2D8082',
          exponent: 0,
          aliases: ['cw20:terra164ssz60yvsxey0ku9mtcaegdeyxwzuwwqyrp238nvflwqve0pvxsra7fa2']
        }, {
          denom: 'CLON',
          exponent: 6
        }],
      base: 'ibc/E4AD82E96E989414B094A48BA4910EE3E6AD22BBE1FB09A39788BCA26D2D8082',
      name: 'CLON',
      display: 'CLON',
      symbol: 'CLON',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/clon1.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/clon1.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra164ssz60yvsxey0ku9mtcaegdeyxwzuwwqyrp238nvflwqve0pvxsra7fa2',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'ERIS Arbitrage LUNA',
      type_asset: 'cw20',
      address: 'terra1se7rvuerys4kd2snt6vqswh9wugu49vhyzls8ymc02wl37g2p2ms5yz490',
      denom_units: [{
          denom: 'ibc/4628F57F4FD551A8D99F23C4AEA462864C2F38802B905413D6B1D0082FFEEDF3',
          exponent: 0,
          aliases: ['cw20:terra1se7rvuerys4kd2snt6vqswh9wugu49vhyzls8ymc02wl37g2p2ms5yz490']
        }, {
          denom: 'arbLUNA',
          exponent: 6
        }],
      base: 'ibc/4628F57F4FD551A8D99F23C4AEA462864C2F38802B905413D6B1D0082FFEEDF3',
      name: 'ERIS Arb LUNA',
      display: 'arbLUNA',
      symbol: 'arbLUNA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/arbluna.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/arbluna.svg'
        }],
      coingecko_id: 'eris-arbitrage-luna',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1se7rvuerys4kd2snt6vqswh9wugu49vhyzls8ymc02wl37g2p2ms5yz490',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'SOLID is the Terra native overcollateralized USD stablecoin, powered by SOLID',
      denom_units: [{
          denom: 'ibc/871BA8171A09382FEEAB0A04A1BE30158D45922C31078E0277A1F54F245C316B',
          exponent: 0,
          aliases: ['cw20:terra10aa3zdkrc7jwuf8ekl3zq7e7m42vmzqehcmu74e4egc7xkm5kr2s0muyst']
        }, {
          denom: 'solid',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra10aa3zdkrc7jwuf8ekl3zq7e7m42vmzqehcmu74e4egc7xkm5kr2s0muyst',
      base: 'ibc/871BA8171A09382FEEAB0A04A1BE30158D45922C31078E0277A1F54F245C316B',
      name: 'Solid',
      display: 'solid',
      symbol: 'SOLID',
      coingecko_id: 'solid-2',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/solid.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/solid.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/solid.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/solid.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra10aa3zdkrc7jwuf8ekl3zq7e7m42vmzqehcmu74e4egc7xkm5kr2s0muyst',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'CAPA is the governance token of SOLID ecosystem, powered by SOLID',
      denom_units: [{
          denom: 'ibc/0E8E33D1AA371B43721A0DCBD25356F7B696980D9B9F61E64B56B16B0B06EFFA',
          exponent: 0,
          aliases: ['cw20:terra1t4p3u8khpd7f8qzurwyafxt648dya6mp6vur3vaapswt6m24gkuqrfdhar']
        }, {
          denom: 'capa',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1t4p3u8khpd7f8qzurwyafxt648dya6mp6vur3vaapswt6m24gkuqrfdhar',
      base: 'ibc/0E8E33D1AA371B43721A0DCBD25356F7B696980D9B9F61E64B56B16B0B06EFFA',
      name: 'Capa',
      display: 'capa',
      symbol: 'CAPA',
      coingecko_id: 'capapult',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Capapult.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Capapult.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Capapult.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Capapult.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1t4p3u8khpd7f8qzurwyafxt648dya6mp6vur3vaapswt6m24gkuqrfdhar',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'The native token cw20 for SIENNA on Secret Network',
      denom_units: [{
          denom: 'ibc/F34BB6D8DC5B8EB308690D47C1E139A2B832B089575B145AC0030454528F9D04',
          exponent: 0,
          aliases: ['cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4']
        }, {
          denom: 'sienna',
          exponent: 18
        }],
      type_asset: 'snip20',
      address: 'secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
      base: 'ibc/F34BB6D8DC5B8EB308690D47C1E139A2B832B089575B145AC0030454528F9D04',
      name: 'SIENNA',
      display: 'sienna',
      symbol: 'SIENNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-151',
            base_denom: 'cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1950'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/72633314E3A5D6EC0F80D0D8D994F59613BF1CF3A104F407CB9AA4128EE2D3E3',
          exponent: 0,
          aliases: ['cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip20',
      address: 'secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
      base: 'ibc/72633314E3A5D6EC0F80D0D8D994F59613BF1CF3A104F407CB9AA4128EE2D3E3',
      name: 'Shade (old)',
      display: 'shd',
      symbol: 'SHD.old',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-151',
            base_denom: 'cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1950'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/B6643B477C69060B125279D9FF69EC20189E4D15DC24CF0457E0BAA9DD1A26AE',
          exponent: 0,
          aliases: ['cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip25',
      address: 'secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
      base: 'ibc/B6643B477C69060B125279D9FF69EC20189E4D15DC24CF0457E0BAA9DD1A26AE',
      name: 'Shade',
      display: 'shd',
      symbol: 'SHD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
      },
      coingecko_id: 'shade-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-151',
            base_denom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1950'
          }
        }]
    },
    {
      description: 'The native token cw20 for Silk on Secret Network',
      denom_units: [{
          denom: 'ibc/94D85D1AB75CB0BF9B6818EE317E86A83FA9C5D4140D06E71778B97C1FCAC79C',
          exponent: 0,
          aliases: ['cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd']
        }, {
          denom: 'silk',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
      base: 'ibc/94D85D1AB75CB0BF9B6818EE317E86A83FA9C5D4140D06E71778B97C1FCAC79C',
      name: 'Silk',
      display: 'silk',
      symbol: 'SILK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
      },
      coingecko_id: 'silk-bcec1136-561c-4706-a42c-8b67d0d7f7d2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-151',
            base_denom: 'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1950'
          }
        }]
    },
    {
      description: 'The native token cw20 for dSilk on Secret Network',
      denom_units: [{
          denom: 'ibc/2259287C1DB42AB8407C7FE06608B59D62BB85734EE462CB93D4BC348874D23A',
          exponent: 0,
          aliases: ['cw20:secret1apxywjp2h8vet54xzyfc96htlt9qqgrh7gawhw']
        }, {
          denom: 'dsilk',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret1apxywjp2h8vet54xzyfc96htlt9qqgrh7gawhw',
      base: 'ibc/2259287C1DB42AB8407C7FE06608B59D62BB85734EE462CB93D4BC348874D23A',
      name: 'dSilk',
      display: 'dsilk',
      symbol: 'dSILK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/dsilk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/dsilk.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/dsilk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/dsilk.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-151',
            base_denom: 'cw20:secret1apxywjp2h8vet54xzyfc96htlt9qqgrh7gawhw',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1950'
          }
        }]
    },
    {
      description: 'The native token cw20 for xSilk on Secret Network',
      denom_units: [{
          denom: 'ibc/2A00A2767FC48FED1A444AB4A8C40BFA40495F6576B0282F2B42CF653343E33E',
          exponent: 0,
          aliases: ['cw20:secret1lqt2u3ntzrkjev8z5m6ennu4n3zl3trx67ck82']
        }, {
          denom: 'xsilk',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret1lqt2u3ntzrkjev8z5m6ennu4n3zl3trx67ck82',
      base: 'ibc/2A00A2767FC48FED1A444AB4A8C40BFA40495F6576B0282F2B42CF653343E33E',
      name: 'xSilk',
      display: 'xsilk',
      symbol: 'xSILK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-151',
            base_denom: 'cw20:secret1lqt2u3ntzrkjev8z5m6ennu4n3zl3trx67ck82',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1950'
          }
        }]
    },
    {
      description: 'The native token cw20 for SCRT Staking Derivatives on Secret Network',
      denom_units: [{
          denom: 'ibc/83AB1D5C247BD3FFAD768B477CB2F4372F37C64D9588B1137C4DFF45B1492CBE',
          exponent: 0,
          aliases: ['cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4']
        }, {
          denom: 'stkd-scrt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
      base: 'ibc/83AB1D5C247BD3FFAD768B477CB2F4372F37C64D9588B1137C4DFF45B1492CBE',
      name: 'SCRT Staking Derivatives',
      display: 'stkd-scrt',
      symbol: 'stkd-SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg'
      },
      coingecko_id: 'stkd-scrt',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-151',
            base_denom: 'cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1950'
          }
        }]
    },
    {
      description: 'The native token cw20 for Button on Secret Network',
      denom_units: [{
          denom: 'ibc/0B0A4F4E2B2B5532F9B8EB470BBB7507F90A8FD627B2202D52588F875A415887',
          exponent: 0,
          aliases: ['cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt']
        }, {
          denom: 'butt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
      base: 'ibc/0B0A4F4E2B2B5532F9B8EB470BBB7507F90A8FD627B2202D52588F875A415887',
      name: 'Button',
      display: 'butt',
      symbol: 'BUTT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-151',
            base_denom: 'cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1950'
          }
        }]
    },
    {
      description: 'The native token cw20 for Alter on Secret Network',
      denom_units: [{
          denom: 'ibc/ACB8553B3FD1AE23F8EB6D80554334C949430BB73CD473EBEEC696CBD7901A1A',
          exponent: 0,
          aliases: ['cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej']
        }, {
          denom: 'alter',
          exponent: 6
        }],
      base: 'ibc/ACB8553B3FD1AE23F8EB6D80554334C949430BB73CD473EBEEC696CBD7901A1A',
      type_asset: 'snip20',
      address: 'secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
      name: 'Alter',
      display: 'alter',
      symbol: 'ALTER',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg'
        }],
      socials: {
        website: 'http://alter.network/',
        x: 'https://x.com/AlterDapp'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-151',
            base_denom: 'cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1950'
          }
        }]
    },
    {
      description: 'The native token cw20 for Amber on Secret Network',
      denom_units: [{
          denom: 'ibc/57EF51F97A2BBED1657A599DBC6BB6EB150D86828B59848BE3B4FCE7AAF67168',
          exponent: 0,
          aliases: ['cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852']
        }, {
          denom: 'amber',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
      base: 'ibc/57EF51F97A2BBED1657A599DBC6BB6EB150D86828B59848BE3B4FCE7AAF67168',
      name: 'Amber',
      display: 'amber',
      symbol: 'AMBER',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png'
        }],
      socials: {
        website: 'http://amber.money/',
        x: 'https://x.com/AmberDAO_'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-151',
            base_denom: 'cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1950'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shill on Secret Network',
      denom_units: [{
          denom: 'ibc/0D52AA0ADBB6DAFE82170221497F0F0BD05A819EB6FFF6551ED67BE7C88D4358',
          exponent: 0,
          aliases: ['cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse']
        }, {
          denom: 'shill',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
      base: 'ibc/0D52AA0ADBB6DAFE82170221497F0F0BD05A819EB6FFF6551ED67BE7C88D4358',
      name: 'Shill',
      display: 'shill',
      symbol: 'SHILL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-151',
            base_denom: 'cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1950'
          }
        }]
    },
    {
      description: 'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
      denom_units: [{
          denom: 'ibc/5751B8BCDA688FD0A8EC0B292EEF1CDEAB4B766B63EC632778B196D317C40C3A',
          exponent: 0,
          aliases: ['cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26']
        }, {
          denom: 'astro.cw20',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
      base: 'ibc/5751B8BCDA688FD0A8EC0B292EEF1CDEAB4B766B63EC632778B196D317C40C3A',
      name: 'Astroport CW20 Token',
      display: 'astro.cw20',
      symbol: 'ASTRO.cw20',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro-cw20.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro-cw20.svg'
        }, {
          image_sync: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.png'
        }],
      socials: {
        website: 'https://astroport.fi/',
        x: 'https://x.com/astroport_fi'
      },
      coingecko_id: 'astroport-fi'
    },
    {
      description: 'Dinheiros is the reserve currency of dioalma.protocol, an undivisible and rare token.',
      denom_units: [{
          denom: 'ibc/F2240EA389ADB06A20FDAE82928F2F206FD72002A569375B17C8AEDABC17D44B',
          exponent: 0,
          aliases: ['cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k']
        }],
      type_asset: 'cw20',
      address: 'terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
      base: 'ibc/F2240EA389ADB06A20FDAE82928F2F206FD72002A569375B17C8AEDABC17D44B',
      name: 'dinheiro',
      display: 'cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
      symbol: 'DINHEIROS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Dinheiros.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Dinheiros.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'Reis is the king of trading, high volume high liquidity, sibling of Dinheiros, Reis and Alem, a token of dioalma.protocol.',
      denom_units: [{
          denom: 'ibc/C26052FC87DA2180CF4E9D627C5A1D2FFD13A218942FBCB268A7B0672D9A08EA',
          exponent: 0,
          aliases: ['cw20:terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8']
        }, {
          denom: 'Reis',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8',
      base: 'ibc/C26052FC87DA2180CF4E9D627C5A1D2FFD13A218942FBCB268A7B0672D9A08EA',
      name: 'real',
      display: 'Reis',
      symbol: 'REIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Reis.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Reis.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'Escudos is the everyday currency of dioalma.protocol, good to send money back and forward.',
      denom_units: [{
          denom: 'ibc/25CD16BC15D251B629A54394A0070F772E19D7F30583612FF9EFDCE665D9C94D',
          exponent: 0,
          aliases: ['cw20:terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg']
        }, {
          denom: 'Escudos',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg',
      base: 'ibc/25CD16BC15D251B629A54394A0070F772E19D7F30583612FF9EFDCE665D9C94D',
      name: 'escudo',
      display: 'Escudos',
      symbol: 'ESCUDOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Escudos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Escudos.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'Alem is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/77A8D6320531A9803FEDA793AAAA7AAE884DCB607B30003497A4F064AF2F0BFE',
          exponent: 0,
          aliases: ['cw20:terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q']
        }, {
          denom: 'Alem',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q',
      base: 'ibc/77A8D6320531A9803FEDA793AAAA7AAE884DCB607B30003497A4F064AF2F0BFE',
      name: 'alentejo.money',
      display: 'Alem',
      symbol: 'ALEM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Alem.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Alem.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'almagem is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/343D39DE8AE532498C7E3C15EF34077B598BF2CB5F028E78703CC04F47D03FAB',
          exponent: 0,
          aliases: ['cw20:terra1en42e2vsvtdsvrcqg5s5e5e4djejjaed6fxmvtpweg3tu33h6k5qkg9c40']
        }, {
          denom: 'AMG',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1en42e2vsvtdsvrcqg5s5e5e4djejjaed6fxmvtpweg3tu33h6k5qkg9c40',
      base: 'ibc/343D39DE8AE532498C7E3C15EF34077B598BF2CB5F028E78703CC04F47D03FAB',
      name: 'almagem',
      display: 'AMG',
      symbol: 'AMG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/almagem.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/almagem.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1en42e2vsvtdsvrcqg5s5e5e4djejjaed6fxmvtpweg3tu33h6k5qkg9c40',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'arika is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/12BC1872477B237F42109B7F684C057A1E819B4CE3D59FD77C26AD0D79F9463F',
          exponent: 0,
          aliases: ['cw20:terra1ysd87nayjuelxj4wvp4wnp9as0mwszzkje6a9z6f3xx2903ghnsq4hm50y']
        }, {
          denom: 'ARK',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1ysd87nayjuelxj4wvp4wnp9as0mwszzkje6a9z6f3xx2903ghnsq4hm50y',
      base: 'ibc/12BC1872477B237F42109B7F684C057A1E819B4CE3D59FD77C26AD0D79F9463F',
      name: 'arika',
      display: 'ARK',
      symbol: 'ARK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/arika.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/arika.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1ysd87nayjuelxj4wvp4wnp9as0mwszzkje6a9z6f3xx2903ghnsq4hm50y',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'danu is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/65B8D62C0D72709BF3E41A7AE63814860AC6B9E37D2178197EC3DFD979C3CE2D',
          exponent: 0,
          aliases: ['cw20:terra1vj68f2ntauaj5dfvy5z4tq4we3hsyg363k63js5sae2t7th9aacqan89sr']
        }, {
          denom: 'DANU',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1vj68f2ntauaj5dfvy5z4tq4we3hsyg363k63js5sae2t7th9aacqan89sr',
      base: 'ibc/65B8D62C0D72709BF3E41A7AE63814860AC6B9E37D2178197EC3DFD979C3CE2D',
      name: 'danu',
      display: 'DANU',
      symbol: 'DANU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/danu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/danu.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1vj68f2ntauaj5dfvy5z4tq4we3hsyg363k63js5sae2t7th9aacqan89sr',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'torus is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/8315DD46F7055A61B82C5CC3FC47B78BEA8347B60F7AD5EC34EDDBF309E5BA74',
          exponent: 0,
          aliases: ['cw20:terra1swzpenwh39f8aa7qht34r05f8ew6k2vehvqt2aw4fjy0fgghhheqs9l6h7']
        }, {
          denom: 'TRS',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1swzpenwh39f8aa7qht34r05f8ew6k2vehvqt2aw4fjy0fgghhheqs9l6h7',
      base: 'ibc/8315DD46F7055A61B82C5CC3FC47B78BEA8347B60F7AD5EC34EDDBF309E5BA74',
      name: 'torus',
      display: 'TRS',
      symbol: 'TRS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/trs.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/trs.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1swzpenwh39f8aa7qht34r05f8ew6k2vehvqt2aw4fjy0fgghhheqs9l6h7',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'plasma is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/CB742D8220905E6692DDE7EBB2839DD4E548ED48C8F5BA160D9485AB58BE0FF5',
          exponent: 0,
          aliases: ['cw20:terra1mqs6mdx0ak7qvjzs6efhg65g4j5pzwpdkcgdsv5tpekln3qhggrq3qzvdp']
        }, {
          denom: 'PLASMA',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1mqs6mdx0ak7qvjzs6efhg65g4j5pzwpdkcgdsv5tpekln3qhggrq3qzvdp',
      base: 'ibc/CB742D8220905E6692DDE7EBB2839DD4E548ED48C8F5BA160D9485AB58BE0FF5',
      name: 'plasma',
      display: 'PLASMA',
      symbol: 'PLASMA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/plasma.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/plasma.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1mqs6mdx0ak7qvjzs6efhg65g4j5pzwpdkcgdsv5tpekln3qhggrq3qzvdp',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'dmt is one of the tokens of the seven families of dioalmaprotocol, alem almagem arika danu torus dmt plasma, all seven families use dinheiros reis and escudos, dioalma.protcol the currency of the seven seas.',
      denom_units: [{
          denom: 'ibc/F2685E4632D73841E4A9F9DD0E3E9CC55B0F62523D581E285F9DB0D045943375',
          exponent: 0,
          aliases: ['cw20:terra1xfkkgwxychgrnq0vcp82u32mecrzj8s64s03cxtmf46k6j2n2wssc7rzjf']
        }, {
          denom: 'DMT',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1xfkkgwxychgrnq0vcp82u32mecrzj8s64s03cxtmf46k6j2n2wssc7rzjf',
      base: 'ibc/F2685E4632D73841E4A9F9DD0E3E9CC55B0F62523D581E285F9DB0D045943375',
      name: 'dmt',
      display: 'DMT',
      symbol: 'DMT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/dmt.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/dmt.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1xfkkgwxychgrnq0vcp82u32mecrzj8s64s03cxtmf46k6j2n2wssc7rzjf',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'ERIS liquid staked LUNA.',
      type_asset: 'cw20',
      address: 'terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct',
      denom_units: [{
          denom: 'ibc/B1727E3EA658E1901C5DE4940224E0933D730B159B2734F05C3748E713C0BAA2',
          exponent: 0,
          aliases: ['cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct']
        }, {
          denom: 'ampluna',
          exponent: 6
        }],
      base: 'ibc/B1727E3EA658E1901C5DE4940224E0933D730B159B2734F05C3748E713C0BAA2',
      name: 'ERIS Amplified LUNA',
      display: 'ampluna',
      symbol: 'ampLUNA',
      coingecko_id: 'eris-amplified-luna',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampluna.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampluna.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'Lion DAO is a community DAO that lives on the Terra blockchain with the mission to reactivate the LUNAtic community and showcase Terra protocols & tooling',
      type_asset: 'cw20',
      address: 'terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
      denom_units: [{
          denom: 'ibc/0BF6931F388833D8611F821E62C7744A37E2525AE377F4A21DF1E1CF822925F4',
          exponent: 0,
          aliases: ['cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv']
        }, {
          denom: 'roar',
          exponent: 6
        }],
      base: 'ibc/0BF6931F388833D8611F821E62C7744A37E2525AE377F4A21DF1E1CF822925F4',
      name: 'Lion DAO',
      display: 'roar',
      symbol: 'ROAR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png'
      },
      coingecko_id: 'lion-dao',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'GEM DAO, building a decentralized, community-owned, low-supply store of value',
      type_asset: 'cw20',
      address: 'terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv',
      denom_units: [{
          denom: 'ibc/72EB483F35AB1DA36D027CE51A2D4887CCD63C2A69F43A030DF05FBE9C745D36',
          exponent: 0,
          aliases: ['cw20:terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv']
        }, {
          denom: 'gem',
          exponent: 6
        }],
      base: 'ibc/72EB483F35AB1DA36D027CE51A2D4887CCD63C2A69F43A030DF05FBE9C745D36',
      name: 'GEM DAO',
      display: 'gem',
      symbol: 'GEM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gem.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gem.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'Lion Cub DAO is a useless meme community DAO on Terra',
      type_asset: 'cw20',
      address: 'terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
      denom_units: [{
          denom: 'ibc/ABE05EAE3EDA06AE82B0205B126AD311D5D750548A2F820C60AB82FC24FB7766',
          exponent: 0,
          aliases: ['cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t']
        }, {
          denom: 'cub',
          exponent: 6
        }],
      base: 'ibc/ABE05EAE3EDA06AE82B0205B126AD311D5D750548A2F820C60AB82FC24FB7766',
      name: 'Lion Cub DAO',
      display: 'cub',
      symbol: 'CUB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'BLUE CUB DAO is a community DAO on Terra',
      type_asset: 'cw20',
      address: 'terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584',
      denom_units: [{
          denom: 'ibc/87F9D3A0DFD6E6551CD17FBA46566CF1B353CB0209E84B2EB998160DE6EF6400',
          exponent: 0,
          aliases: ['cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584']
        }, {
          denom: 'blue',
          exponent: 6
        }],
      base: 'ibc/87F9D3A0DFD6E6551CD17FBA46566CF1B353CB0209E84B2EB998160DE6EF6400',
      name: 'BLUE CUB DAO',
      display: 'blue',
      symbol: 'BLUE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'Liquidity token, NFT, HARVEST FOR VALUE',
      type_asset: 'cw20',
      address: 'terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn',
      denom_units: [{
          denom: 'ibc/86AA5A3887B02A0F34723E0041B79C98360739005833D79AE5A64314FF3714A4',
          exponent: 0,
          aliases: ['cw20:terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn']
        }, {
          denom: 'xxx',
          exponent: 10
        }],
      base: 'ibc/86AA5A3887B02A0F34723E0041B79C98360739005833D79AE5A64314FF3714A4',
      name: 'TheOnlyOne',
      display: 'xxx',
      symbol: 'xxx',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xxx3.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xxx3.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'Just a meme coin on Terra',
      type_asset: 'cw20',
      address: 'terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces',
      denom_units: [{
          denom: 'ibc/D4CEB12C36CD2BAB3686B911132D09DB8E6877AFE6BAC36B7B4DAA7B3204430A',
          exponent: 0,
          aliases: ['cw20:terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces']
        }, {
          denom: 'GUGU',
          exponent: 6
        }],
      base: 'ibc/D4CEB12C36CD2BAB3686B911132D09DB8E6877AFE6BAC36B7B4DAA7B3204430A',
      name: 'GUGU',
      display: 'GUGU',
      symbol: 'GUGU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gugu.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gugu.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra19nu4q2y0xe3vza6ve5ymup33uzm049pnrqq5ddeuulmrg279t57qstcces',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'BackBone Labs Liquid Staked LUNA',
      type_asset: 'cw20',
      address: 'terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
      denom_units: [{
          denom: 'ibc/A847ACCB987D74EBFE13322D970D95611B40E04800C262BE89E3576D45FEA0F2',
          exponent: 0,
          aliases: ['cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml']
        }, {
          denom: 'bLUNA',
          exponent: 6
        }],
      base: 'ibc/A847ACCB987D74EBFE13322D970D95611B40E04800C262BE89E3576D45FEA0F2',
      name: 'BackBone Labs Liquid Staked LUNA',
      display: 'bLUNA',
      symbol: 'bLUNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bLUNA.png'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bLUNA.png'
        }]
    },
    {
      description: 'Sayve is a revolutionary language learning app in the Web3 era that combines gamification, blockchain technology, and a Metaverse experience to motivate users to learn languages while earning rewards.',
      type_asset: 'cw20',
      address: 'terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3',
      denom_units: [{
          denom: 'ibc/8D22D4A2B74346C14A074842919B96BC645DD0E688D826ED94DC57C4C68D411B',
          exponent: 0,
          aliases: ['cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3']
        }, {
          denom: 'sayve',
          exponent: 6
        }],
      base: 'ibc/8D22D4A2B74346C14A074842919B96BC645DD0E688D826ED94DC57C4C68D411B',
      name: 'sayve',
      display: 'sayve',
      symbol: 'SAYVE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'Nico Dao Money',
      type_asset: 'cw20',
      address: 'terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3',
      denom_units: [{
          denom: 'ibc/E9DC83CFCF0D476E05F7746E7561EFF4AE7CB3843A8F33BFC3CD19B6C6522C78',
          exponent: 0,
          aliases: ['cw20:terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3']
        }, {
          denom: 'nico',
          exponent: 18
        }],
      base: 'ibc/E9DC83CFCF0D476E05F7746E7561EFF4AE7CB3843A8F33BFC3CD19B6C6522C78',
      name: 'nico',
      display: 'nico',
      symbol: 'NICO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/nicodao.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/nicodao.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1e0efrrrj8d55pflme3dmtyuj7klzcef5cfmz6r2jyqz77kk2jz3qa6drg3',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'Sailing the Seas DAO is a community DAO built on Enterprise on Terra',
      type_asset: 'cw20',
      address: 'terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala',
      denom_units: [{
          denom: 'ibc/4DEC044190B0FA38B1F20D8895D060424D5A5C53643E5C3C3861BEB7A348FCD1',
          exponent: 0,
          aliases: ['cw20:terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala']
        }, {
          denom: 'seas',
          exponent: 6
        }],
      base: 'ibc/4DEC044190B0FA38B1F20D8895D060424D5A5C53643E5C3C3861BEB7A348FCD1',
      name: 'Sailing The SeaS DAO',
      display: 'seas',
      symbol: 'SEAS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/SEAS.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/SEAS.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'A community DAO built on Enterprise',
      type_asset: 'cw20',
      address: 'terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v',
      denom_units: [{
          denom: 'ibc/569D9D35E223352128F0115B89AEBFC1A74FEB495300937FE726D249214E0A61',
          exponent: 0,
          aliases: ['cw20:terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v']
        }, {
          denom: 'bitz',
          exponent: 6
        }],
      base: 'ibc/569D9D35E223352128F0115B89AEBFC1A74FEB495300937FE726D249214E0A61',
      name: 'BitzDAO',
      display: 'bitz',
      symbol: 'BITZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/BITZ.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/BITZ.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra18vp5s0r7keezm35hdxsgw8zgfnyn8wejdkk893ag2kqncgpqxhjqwjpc0v',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'SEUL DAO',
      type_asset: 'cw20',
      address: 'terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l',
      denom_units: [{
          denom: 'ibc/8E70FC3FDE1B9CCE5A888102747A8D546ED9A026DF268A385EBB79C92710D12F',
          exponent: 0,
          aliases: ['cw20:terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l']
        }, {
          denom: 'seul',
          exponent: 6
        }],
      base: 'ibc/8E70FC3FDE1B9CCE5A888102747A8D546ED9A026DF268A385EBB79C92710D12F',
      name: 'seul',
      display: 'seul',
      symbol: 'SEUL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/seul.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/seul.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra13s5pxw5j2p4ssvzwvxd8l7h30vke8vjgtng75vqgv6p9vddfk3hskfka0l',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'SEUL DAO',
      type_asset: 'cw20',
      address: 'terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5',
      denom_units: [{
          denom: 'ibc/9BCAC9FC15EC20EABA494C46DAA60248C34151D280284B662128ABB8DD56A3A5',
          exponent: 0,
          aliases: ['cw20:terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5']
        }, {
          denom: 'xseul',
          exponent: 6
        }],
      base: 'ibc/9BCAC9FC15EC20EABA494C46DAA60248C34151D280284B662128ABB8DD56A3A5',
      name: 'xseul',
      display: 'xseul',
      symbol: 'xSEUL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xseul.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xseul.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1q328gl40az3cf9x67cgudn8e8w2az9vsmhtkwsgdu7a43rhy5caqc82yr5',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'ITO DAO',
      type_asset: 'cw20',
      address: 'terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s',
      denom_units: [{
          denom: 'ibc/FDE7D998A65434AA9918DBAB4B7F1AB746FF7144EB1686C8EA88966E55908327',
          exponent: 0,
          aliases: ['cw20:terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s']
        }, {
          denom: 'ito',
          exponent: 6
        }],
      base: 'ibc/FDE7D998A65434AA9918DBAB4B7F1AB746FF7144EB1686C8EA88966E55908327',
      name: 'ito',
      display: 'ito',
      symbol: 'ITO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/I.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/I.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1c77xqv746m7ghxayrge79dxr4kcezev8g6cnrfled4f3n4ufj0vs5gz28s',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'Chris Armani Token',
      type_asset: 'cw20',
      address: 'terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8',
      denom_units: [{
          denom: 'ibc/E33E511988520C16CCF710081975BD5E552A3684F3F3C240B4E57E19B59CD76D',
          exponent: 0,
          aliases: ['cw20:terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8']
        }, {
          denom: 'ARMANI',
          exponent: 6
        }],
      base: 'ibc/E33E511988520C16CCF710081975BD5E552A3684F3F3C240B4E57E19B59CD76D',
      name: 'ARMANI',
      display: 'ARMANI',
      symbol: 'ARMANI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/armani.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/armani.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1aa7stl3fytvave9xtcexgv0kne4k7ks068dcljkrfj37hy8q270sjadav8',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'useless meme coin',
      type_asset: 'cw20',
      address: 'terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun',
      denom_units: [{
          denom: 'ibc/2368A9EC6FE3804C6D539E936C5501782AF6C836CEED753589FFCF907DFDDF94',
          exponent: 0,
          aliases: ['cw20:terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun']
        }, {
          denom: 'DROGO',
          exponent: 6
        }],
      base: 'ibc/2368A9EC6FE3804C6D539E936C5501782AF6C836CEED753589FFCF907DFDDF94',
      name: 'DROGO',
      display: 'DROGO',
      symbol: 'DROGO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/drogo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/drogo.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1cl273523kmr2uwjhhznq54je69mted2u3ljffm8kp2ap4z3drdksftwqun',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'ado the flower of night',
      type_asset: 'cw20',
      address: 'terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu',
      denom_units: [{
          denom: 'ibc/32730AF3F5D7A11BCA24AEF67604DD90D0A74539DADEFAF6D80C304940B8F790',
          exponent: 0,
          aliases: ['cw20:terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu']
        }, {
          denom: 'ADO',
          exponent: 6
        }],
      base: 'ibc/32730AF3F5D7A11BCA24AEF67604DD90D0A74539DADEFAF6D80C304940B8F790',
      name: 'ADO',
      display: 'ADO',
      symbol: 'ADO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ADO.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ADO.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1w8xk6rtu40st6lvl3yv7ynw5urm2n686u9cchvrzltmnktzwdesqcwy0nu',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'DNA DAO',
      type_asset: 'cw20',
      address: 'terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h',
      denom_units: [{
          denom: 'ibc/3D433C441AD822D671F6682A6D63AC9638B4419D897E6D81D26D7FC20AA7D4AE',
          exponent: 0,
          aliases: ['cw20:terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h']
        }, {
          denom: 'DNA',
          exponent: 6
        }],
      base: 'ibc/3D433C441AD822D671F6682A6D63AC9638B4419D897E6D81D26D7FC20AA7D4AE',
      name: 'DNA',
      display: 'DNA',
      symbol: 'DNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/DNA.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/DNA.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1epka8wevu90rxlvt6g5x9veevd800a760vtuftc5kqdfmrh47qds9f0m8h',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'Bitmos opens doors for BRC20 tokens to thrive alongside established players in the Cosmos Network, revolutionizing decentralized finance (DeFi) for all.',
      type_asset: 'cw20',
      address: 'terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq',
      denom_units: [{
          denom: 'ibc/F38B4F23EF6630EF7AD779E64CB1457C37768F909EBDBA17330916FC12286784',
          exponent: 0,
          aliases: ['cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq']
        }, {
          denom: 'bitmos',
          exponent: 6
        }],
      base: 'ibc/F38B4F23EF6630EF7AD779E64CB1457C37768F909EBDBA17330916FC12286784',
      name: 'Bitmos',
      display: 'bitmos',
      symbol: 'BMOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bitmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bitmos.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      type_asset: 'cw20',
      address: 'terra1eh8eq60cjy997w5dc3a6exfzanlaurupav8klx7m9u9ddfgh25mqjwl5vj',
      denom_units: [{
          denom: 'ibc/53F161D91D56728A92EB6023E78ADBF49CEBEF875A1EFDCCDC46127F65D59E36',
          exponent: 0,
          aliases: ['cw20:terra1eh8eq60cjy997w5dc3a6exfzanlaurupav8klx7m9u9ddfgh25mqjwl5vj']
        }, {
          denom: 'lads',
          exponent: 6
        }],
      base: 'ibc/53F161D91D56728A92EB6023E78ADBF49CEBEF875A1EFDCCDC46127F65D59E36',
      name: 'LADS',
      display: 'lads',
      symbol: 'LADS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/LADS.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/LADS.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1eh8eq60cjy997w5dc3a6exfzanlaurupav8klx7m9u9ddfgh25mqjwl5vj',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'ClonEliteFund invests in Cosmos ecosystem projects, focusing on scalability, security, and interoperability to maximize returns.',
      type_asset: 'cw20',
      address: 'terra164ssz60yvsxey0ku9mtcaegdeyxwzuwwqyrp238nvflwqve0pvxsra7fa2',
      denom_units: [{
          denom: 'ibc/E4AD82E96E989414B094A48BA4910EE3E6AD22BBE1FB09A39788BCA26D2D8082',
          exponent: 0,
          aliases: ['cw20:terra164ssz60yvsxey0ku9mtcaegdeyxwzuwwqyrp238nvflwqve0pvxsra7fa2']
        }, {
          denom: 'CLON',
          exponent: 6
        }],
      base: 'ibc/E4AD82E96E989414B094A48BA4910EE3E6AD22BBE1FB09A39788BCA26D2D8082',
      name: 'CLON',
      display: 'CLON',
      symbol: 'CLON',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/clon1.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/clon1.png'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra164ssz60yvsxey0ku9mtcaegdeyxwzuwwqyrp238nvflwqve0pvxsra7fa2',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'ERIS Arbitrage LUNA',
      type_asset: 'cw20',
      address: 'terra1se7rvuerys4kd2snt6vqswh9wugu49vhyzls8ymc02wl37g2p2ms5yz490',
      denom_units: [{
          denom: 'ibc/4628F57F4FD551A8D99F23C4AEA462864C2F38802B905413D6B1D0082FFEEDF3',
          exponent: 0,
          aliases: ['cw20:terra1se7rvuerys4kd2snt6vqswh9wugu49vhyzls8ymc02wl37g2p2ms5yz490']
        }, {
          denom: 'arbLUNA',
          exponent: 6
        }],
      base: 'ibc/4628F57F4FD551A8D99F23C4AEA462864C2F38802B905413D6B1D0082FFEEDF3',
      name: 'ERIS Arb LUNA',
      display: 'arbLUNA',
      symbol: 'arbLUNA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/arbluna.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/arbluna.svg'
        }],
      coingecko_id: 'eris-arbitrage-luna',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1se7rvuerys4kd2snt6vqswh9wugu49vhyzls8ymc02wl37g2p2ms5yz490',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'SOLID is the Terra native overcollateralized USD stablecoin, powered by SOLID',
      denom_units: [{
          denom: 'ibc/871BA8171A09382FEEAB0A04A1BE30158D45922C31078E0277A1F54F245C316B',
          exponent: 0,
          aliases: ['cw20:terra10aa3zdkrc7jwuf8ekl3zq7e7m42vmzqehcmu74e4egc7xkm5kr2s0muyst']
        }, {
          denom: 'solid',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra10aa3zdkrc7jwuf8ekl3zq7e7m42vmzqehcmu74e4egc7xkm5kr2s0muyst',
      base: 'ibc/871BA8171A09382FEEAB0A04A1BE30158D45922C31078E0277A1F54F245C316B',
      name: 'Solid',
      display: 'solid',
      symbol: 'SOLID',
      coingecko_id: 'solid-2',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/solid.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/solid.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/solid.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/solid.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra10aa3zdkrc7jwuf8ekl3zq7e7m42vmzqehcmu74e4egc7xkm5kr2s0muyst',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'CAPA is the governance token of SOLID ecosystem, powered by SOLID',
      denom_units: [{
          denom: 'ibc/0E8E33D1AA371B43721A0DCBD25356F7B696980D9B9F61E64B56B16B0B06EFFA',
          exponent: 0,
          aliases: ['cw20:terra1t4p3u8khpd7f8qzurwyafxt648dya6mp6vur3vaapswt6m24gkuqrfdhar']
        }, {
          denom: 'capa',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'terra1t4p3u8khpd7f8qzurwyafxt648dya6mp6vur3vaapswt6m24gkuqrfdhar',
      base: 'ibc/0E8E33D1AA371B43721A0DCBD25356F7B696980D9B9F61E64B56B16B0B06EFFA',
      name: 'Capa',
      display: 'capa',
      symbol: 'CAPA',
      coingecko_id: 'capapult',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Capapult.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Capapult.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Capapult.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Capapult.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channel_id: 'channel-167',
            base_denom: 'cw20:terra1t4p3u8khpd7f8qzurwyafxt648dya6mp6vur3vaapswt6m24gkuqrfdhar',
            chain_name: 'terra2'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-5'
          }
        }]
    }
  ]
};
export default assets;
    