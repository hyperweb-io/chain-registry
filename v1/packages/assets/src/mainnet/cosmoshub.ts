import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'cosmoshub',
  assets: [
    {
      description: 'The native token of Namada.',
      denom_units: [{
          denom: 'ibc/0594B847BE2E5B592E0F726E4AC5B73CD1D12AB1D45466B5C798C88D5AD27142',
          exponent: 0,
          aliases: ['unam']
        }, {
          denom: 'nam',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/0594B847BE2E5B592E0F726E4AC5B73CD1D12AB1D45466B5C798C88D5AD27142',
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
            channel_id: 'channel-2',
            base_denom: 'unam',
            chain_name: 'namada'
          },
          chain: {
            channel_id: 'channel-1317'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Acrechain',
      denom_units: [{
          denom: 'ibc/1AA15279AD043C26508AF9FA8AD4A318A5688071397A350EA86807EDA7327720',
          exponent: 0,
          aliases: ['aacre']
        }, {
          denom: 'acre',
          exponent: 18
        }],
      base: 'ibc/1AA15279AD043C26508AF9FA8AD4A318A5688071397A350EA86807EDA7327720',
      name: 'Acre',
      display: 'acre',
      symbol: 'ACRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
        }],
      socials: {
        website: 'https://arable.finance/',
        x: 'https://x.com/ArableProtocol'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'aacre',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-457'
          }
        }]
    },
    {
      description: 'Overcollateralized stable coin for Arable derivatives v1',
      denom_units: [{
          denom: 'ibc/7ED89FB7AF5BB5791B424BAB0D17DAA793DD836D79C594DFEC690062D2EFB9E1',
          exponent: 0,
          aliases: ['erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c']
        }, {
          denom: 'arusd',
          exponent: 18
        }],
      base: 'ibc/7ED89FB7AF5BB5791B424BAB0D17DAA793DD836D79C594DFEC690062D2EFB9E1',
      name: 'Arable USD',
      display: 'arusd',
      symbol: 'arUSD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
        }],
      socials: {
        website: 'https://arable.finance/',
        x: 'https://x.com/ArableProtocol'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-457'
          }
        }]
    },
    {
      description: 'Ciento Exchange Token',
      denom_units: [{
          denom: 'ibc/6C0C37FF4AD97EFF12388662B6DCD471319D7733673315905FFC3E08BF5C6912',
          exponent: 0,
          aliases: ['erc20/0xAE6D3334989a22A65228732446731438672418F2']
        }, {
          denom: 'cnto',
          exponent: 18
        }],
      base: 'ibc/6C0C37FF4AD97EFF12388662B6DCD471319D7733673315905FFC3E08BF5C6912',
      name: 'Ciento Token',
      display: 'cnto',
      symbol: 'CNTO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'erc20/0xAE6D3334989a22A65228732446731438672418F2',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-457'
          }
        }]
    },
    {
      description: 'Agoric is a smart contract platform that uses JavaScript to enable developers to build secure and scalable decentralized applications (dApps) easily.',
      denom_units: [{
          denom: 'ibc/26D5710650B26F38CD59EDDC2E85830BC47BD727F23747EB41F350263F08DCF7',
          exponent: 0,
          aliases: ['ubld']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      base: 'ibc/26D5710650B26F38CD59EDDC2E85830BC47BD727F23747EB41F350263F08DCF7',
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
            channel_id: 'channel-5',
            base_denom: 'ubld',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-405'
          }
        }]
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [{
          denom: 'ibc/9EA9BCC30570DC3198317BB6B5561AB41DDC17AFC342087022C128C57EFE19BA',
          exponent: 0,
          aliases: ['uist']
        }, {
          denom: 'ist',
          exponent: 6
        }],
      base: 'ibc/9EA9BCC30570DC3198317BB6B5561AB41DDC17AFC342087022C128C57EFE19BA',
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
            channel_id: 'channel-5',
            base_denom: 'uist',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-405'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the AIOZ Network.',
      denom_units: [
        {
          denom: 'ibc/9DFC3B38276E617E802EC8E05C85368D36836368795CE16A2A37B9942E29573C',
          exponent: 0,
          aliases: ['attoaioz']
        },
        {
          denom: 'nanoaioz',
          exponent: 9
        },
        {
          denom: 'aioz',
          exponent: 18
        }
      ],
      base: 'ibc/9DFC3B38276E617E802EC8E05C85368D36836368795CE16A2A37B9942E29573C',
      name: 'AIOZ',
      display: 'aioz',
      symbol: 'AIOZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.svg'
      },
      coingecko_id: 'aioz-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.svg'
        }],
      socials: {
        website: 'https://aioz.network/',
        x: 'https://x.com/AIOZNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'attoaioz',
            chain_name: 'aioz'
          },
          chain: {
            channel_id: 'channel-567'
          }
        }]
    },
    {
      description: 'Akash Network is a decentralized cloud computing marketplace that connects users with unused computing resources, offering a cost-effective alternative to traditional cloud providers.',
      denom_units: [{
          denom: 'ibc/2181AAB0218EAC24BC9F86BD1364FBBFA3E6E3FCC25E88E3E68C15DC6E752D86',
          exponent: 0,
          aliases: ['uakt']
        }, {
          denom: 'akt',
          exponent: 6
        }],
      base: 'ibc/2181AAB0218EAC24BC9F86BD1364FBBFA3E6E3FCC25E88E3E68C15DC6E752D86',
      name: 'Akash Network',
      display: 'akt',
      symbol: 'AKT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
      },
      coingecko_id: 'akash-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
        }],
      socials: {
        website: 'https://akash.network/',
        x: 'https://x.com/akashnet'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-17',
            base_denom: 'uakt',
            chain_name: 'akash'
          },
          chain: {
            channel_id: 'channel-184'
          }
        }]
    },
    {
      description: 'Allora Token (ALLO) is the Allora Network\'s native utility token, used as the primary means to govern, secure the blockchain, and incentivize network participants.',
      denom_units: [{
          denom: 'ibc/D9E40E9047E09AAC6CDF9D133AC54C778B44A03690A91B9F5EDFF9F53C2A0977',
          exponent: 0,
          aliases: ['uallo']
        }, {
          denom: 'allo',
          exponent: 18
        }],
      base: 'ibc/D9E40E9047E09AAC6CDF9D133AC54C778B44A03690A91B9F5EDFF9F53C2A0977',
      name: 'Allora Network',
      display: 'allo',
      symbol: 'ALLO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/allora/images/allora.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/allora/images/allora.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/allora/images/allora.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/allora/images/allora.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'uallo',
            chain_name: 'allora'
          },
          chain: {
            channel_id: 'channel-1353'
          }
        }]
    },
    {
      description: 'Archway is a smart contract platform in the Cosmos ecosystem designed to reward developers by providing them with a share of transaction fees generated by their applications.',
      denom_units: [
        {
          denom: 'ibc/98D08BB74578514C9A97A76A3470A09FCC3698821581621A984110D820FF478A',
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
      base: 'ibc/98D08BB74578514C9A97A76A3470A09FCC3698821581621A984110D820FF478A',
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
            channel_id: 'channel-0',
            base_denom: 'aarch',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-623'
          }
        }]
    },
    {
      description: 'Architects Token',
      type_asset: 'cw20',
      address: 'archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu',
      denom_units: [{
          denom: 'ibc/557A8BE1D1A4FEFD7C8DCA98F54F704C9CD3EAB4628FF89D142A0687EEFAA2C3',
          exponent: 0,
          aliases: ['archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu']
        }, {
          denom: 'TOKN',
          exponent: 18
        }],
      base: 'ibc/557A8BE1D1A4FEFD7C8DCA98F54F704C9CD3EAB4628FF89D142A0687EEFAA2C3',
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
            channel_id: 'channel-0',
            base_denom: 'archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-623'
          }
        }]
    },
    {
      description: 'The native token of Aura Network',
      denom_units: [{
          denom: 'ibc/C0BDD2D3A69D64FB569741570890BBC1D2E3EF077A4E77FD23DEBE227B8419A8',
          exponent: 0,
          aliases: ['uaura']
        }, {
          denom: 'aura',
          exponent: 6
        }],
      base: 'ibc/C0BDD2D3A69D64FB569741570890BBC1D2E3EF077A4E77FD23DEBE227B8419A8',
      name: 'Aura',
      display: 'aura',
      symbol: 'AURA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg'
      },
      coingecko_id: 'aura-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'uaura',
            chain_name: 'aura'
          },
          chain: {
            channel_id: 'channel-646'
          }
        }]
    },
    {
      description: 'Axelar is a decentralized interoperability network connecting multiple blockchain ecosystems, enabling seamless cross-chain communication and value transfer.',
      denom_units: [{
          denom: 'ibc/6C2BB0FDAE0ABFF0E965BFFCADEB0D9590F4A011A9EE678413B2F2587F05CB8C',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/6C2BB0FDAE0ABFF0E965BFFCADEB0D9590F4A011A9EE678413B2F2587F05CB8C',
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
            channel_id: 'channel-2',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-293'
          }
        }]
    },
    {
      description: 'The native token of Babylon Genesis.',
      denom_units: [{
          denom: 'ibc/7017AD43F9A09EFE8760556753B019B1B5C2E965095DEC22B613F7B010DF91D6',
          exponent: 0,
          aliases: ['ubbn']
        }, {
          denom: 'BABY',
          exponent: 6
        }],
      base: 'ibc/7017AD43F9A09EFE8760556753B019B1B5C2E965095DEC22B613F7B010DF91D6',
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
            channel_id: 'channel-0',
            base_denom: 'ubbn',
            chain_name: 'babylon'
          },
          chain: {
            channel_id: 'channel-1341'
          }
        }]
    },
    {
      description: '$BADGE is the native in-app token for BitBadges.',
      denom_units: [{
          denom: 'ibc/E66E06D91E12D76D96DEA839941FD30F785D84CDD9B564A16BA1AC32C089A0FA',
          exponent: 0,
          aliases: ['ubadge']
        }, {
          denom: 'badge',
          exponent: 9
        }],
      base: 'ibc/E66E06D91E12D76D96DEA839941FD30F785D84CDD9B564A16BA1AC32C089A0FA',
      name: 'BitBadges',
      display: 'badge',
      symbol: 'BADGE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitbadges/images/badge_logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitbadges/images/badge_logo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitbadges/images/badge_logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitbadges/images/badge_logo.svg'
        }],
      socials: {
        website: 'https://bitbadges.io/',
        x: 'https://x.com/bitbadges_io'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'ubadge',
            chain_name: 'bitbadges'
          },
          chain: {
            channel_id: 'channel-1420'
          }
        }]
    },
    {
      description: 'The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.',
      denom_units: [{
          denom: 'ibc/ADBEC1A7AC2FEF73E06B066A1C94DAB6C27924EF7EA3F5A43378150009620284',
          exponent: 0,
          aliases: ['ubcna']
        }, {
          denom: 'bcna',
          exponent: 6
        }],
      base: 'ibc/ADBEC1A7AC2FEF73E06B066A1C94DAB6C27924EF7EA3F5A43378150009620284',
      display: 'bcna',
      name: 'BitCanna',
      symbol: 'BCNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
      },
      coingecko_id: 'bitcanna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
        }],
      socials: {
        website: 'http://www.bitcanna.io/',
        x: 'https://x.com/BitCannaGlobal'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'ubcna',
            chain_name: 'bitcanna'
          },
          chain: {
            channel_id: 'channel-232'
          }
        }]
    },
    {
      description: 'BitSong Native Token',
      denom_units: [{
          denom: 'ibc/E7D5E9D0E9BF8B7354929A817DD28D4D017E745F638954764AA88522A7A409EC',
          exponent: 0,
          aliases: ['ubtsg']
        }, {
          denom: 'btsg',
          exponent: 6
        }],
      base: 'ibc/E7D5E9D0E9BF8B7354929A817DD28D4D017E745F638954764AA88522A7A409EC',
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
            channel_id: 'channel-1',
            base_denom: 'ubtsg',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }]
    },
    {
      description: 'The staking token of Bostrom',
      denom_units: [{
          denom: 'ibc/03D28CFE7A878F122AB9727064E916B12FB88AFEC7CFF0DCBD1F9028399EB06F',
          exponent: 0,
          aliases: ['boot']
        }],
      base: 'ibc/03D28CFE7A878F122AB9727064E916B12FB88AFEC7CFF0DCBD1F9028399EB06F',
      name: 'Bostrom',
      display: 'boot',
      symbol: 'BOOT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg'
      },
      coingecko_id: 'bostrom',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'boot',
            chain_name: 'bostrom'
          },
          chain: {
            channel_id: 'channel-341'
          }
        }]
    },
    {
      description: 'The liquid staking token of Bostrom',
      denom_units: [{
          denom: 'ibc/E1E3344174D2A40CD8D35BB227348D4CD7DF15B19E9F71FAF8810D2039B838B7',
          exponent: 0,
          aliases: ['hydrogen']
        }],
      base: 'ibc/E1E3344174D2A40CD8D35BB227348D4CD7DF15B19E9F71FAF8810D2039B838B7',
      name: 'Bostrom Hydrogen',
      display: 'hydrogen',
      symbol: 'HYDROGEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'hydrogen',
            chain_name: 'bostrom'
          },
          chain: {
            channel_id: 'channel-341'
          }
        }]
    },
    {
      description: 'The resource token of Bostrom',
      denom_units: [{
          denom: 'ibc/6A196466D372F80D2FA582D6B6400CAAE08202B4F5839501BEA5C8B88F9C59A0',
          exponent: 0,
          aliases: ['milliampere']
        }, {
          denom: 'ampere',
          exponent: 3,
          aliases: ['ampere']
        }],
      base: 'ibc/6A196466D372F80D2FA582D6B6400CAAE08202B4F5839501BEA5C8B88F9C59A0',
      name: 'Bostrom Ampere',
      display: 'ampere',
      symbol: 'A',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'milliampere',
            chain_name: 'bostrom'
          },
          chain: {
            channel_id: 'channel-341'
          }
        }]
    },
    {
      description: 'The resource token of Bostrom',
      denom_units: [{
          denom: 'ibc/7129E2BFCA2543AE222CEEE5C8C9F688537DFC563DB69ED1E39EB3F73CB7C644',
          exponent: 0,
          aliases: ['millivolt']
        }, {
          denom: 'volt',
          exponent: 3,
          aliases: ['volt']
        }],
      base: 'ibc/7129E2BFCA2543AE222CEEE5C8C9F688537DFC563DB69ED1E39EB3F73CB7C644',
      name: 'Bostrom Volt',
      display: 'volt',
      symbol: 'V',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'millivolt',
            chain_name: 'bostrom'
          },
          chain: {
            channel_id: 'channel-341'
          }
        }]
    },
    {
      description: 'The staking token of Cyber',
      denom_units: [{
          denom: 'ibc/BF18EF7F331466EE322B497811B8D21F9744E1E77158DE07117D38A3791E8BD5',
          exponent: 0,
          aliases: ['tocyb']
        }],
      base: 'ibc/BF18EF7F331466EE322B497811B8D21F9744E1E77158DE07117D38A3791E8BD5',
      name: 'Bostrom Tocyb',
      display: 'tocyb',
      symbol: 'TOCYB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'tocyb',
            chain_name: 'bostrom'
          },
          chain: {
            channel_id: 'channel-341'
          }
        }]
    },
    {
      description: 'Canto is a Layer-1 blockchain built to deliver on the promise of DeFi',
      denom_units: [{
          denom: 'ibc/5567102708097100D5B3FC160F01F5031CBF82EC362EA46CFEE97A8316B39264',
          exponent: 0,
          aliases: ['acanto']
        }, {
          denom: 'canto',
          exponent: 18
        }],
      base: 'ibc/5567102708097100D5B3FC160F01F5031CBF82EC362EA46CFEE97A8316B39264',
      name: 'Canto',
      display: 'canto',
      symbol: 'CANTO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg'
      },
      coingecko_id: 'canto',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg'
        }],
      socials: {
        website: 'https://canto.io/',
        x: 'https://x.com/CantoPublic'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'acanto',
            chain_name: 'canto'
          },
          chain: {
            channel_id: 'channel-358'
          }
        }]
    },
    {
      description: 'The native governance token of Carbon',
      denom_units: [{
          denom: 'ibc/5D266BB6FA1D26B678DFE4D8255BBB6CBD23847FA6464CDC0CC15C2441D847C4',
          exponent: 0,
          aliases: ['swth']
        }, {
          denom: 'dswth',
          exponent: 8,
          aliases: ['SWTH']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/5D266BB6FA1D26B678DFE4D8255BBB6CBD23847FA6464CDC0CC15C2441D847C4',
      name: 'Carbon',
      display: 'dswth',
      symbol: 'SWTH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
      },
      coingecko_id: 'switcheo',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'swth',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-342'
          }
        }]
    },
    {
      description: 'The native stablecoin of Carbon',
      denom_units: [{
          denom: 'ibc/662F0E2BD31A7E120FE8F704211D262CB441DE101B5826D97B70F9FA96F65819',
          exponent: 0,
          aliases: ['usc']
        }, {
          denom: 'dusc',
          exponent: 8,
          aliases: ['USC']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/662F0E2BD31A7E120FE8F704211D262CB441DE101B5826D97B70F9FA96F65819',
      name: 'Carbon USD Coin',
      display: 'dusc',
      symbol: 'USC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'usc',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-342'
          }
        }]
    },
    {
      description: 'Grouped USD on Carbon',
      denom_units: [{
          denom: 'ibc/44CAB1CDACF74FFA6AD06F2559EF99C3A0240461C02075A4F10055011FBCC7BA',
          exponent: 0,
          aliases: ['cgt/1']
        }, {
          denom: 'usd',
          exponent: 18,
          aliases: ['USD']
        }],
      base: 'ibc/44CAB1CDACF74FFA6AD06F2559EF99C3A0240461C02075A4F10055011FBCC7BA',
      name: 'Carbon Grouped USD',
      display: 'usd',
      symbol: 'USD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'cgt/1',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-342'
          }
        }]
    },
    {
      description: 'The Next Generation of AI Infrastructure Built for Privacy, Performance, & Governance — By Design, At Scale',
      denom_units: [{
          denom: 'ibc/C7DE16F5065C5568C2A16C241069D76DA93F056172A40391EB682444AF40F048',
          exponent: 0,
          aliases: ['ucif']
        }, {
          denom: 'cif',
          exponent: 6
        }],
      base: 'ibc/C7DE16F5065C5568C2A16C241069D76DA93F056172A40391EB682444AF40F048',
      name: 'Cifer',
      display: 'cif',
      symbol: 'CIF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg'
        }],
      socials: {
        website: 'http://cifer.ai',
        github: 'https://github.com/CiferAI',
        x: 'https://x.com/cifer_ai'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ucif',
            chain_name: 'cifer'
          },
          chain: {
            channel_id: 'channel-831'
          }
        }]
    },
    {
      description: 'The native token of Coreum',
      denom_units: [{
          denom: 'ibc/F8215CF2CD97294057DBECAA45E3ABEB6012D25550750DA8EC56BEC73F0E522F',
          exponent: 0,
          aliases: ['ucore']
        }, {
          denom: 'core',
          exponent: 6
        }],
      base: 'ibc/F8215CF2CD97294057DBECAA45E3ABEB6012D25550750DA8EC56BEC73F0E522F',
      name: 'Coreum',
      display: 'core',
      symbol: 'COREUM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
      },
      coingecko_id: 'coreum',
      keywords: [
        'dex',
        'staking',
        'wasm',
        'assets',
        'nft',
        'XRPL'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
        }],
      socials: {
        website: 'https://www.coreum.com/',
        x: 'https://x.com/CoreumOfficial'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'ucore',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-660'
          }
        }]
    },
    {
      description: 'SARA is the utility native token of the Pulsara ecosystem. The burn or mint of the $SARA token will be decided by the community through proposals and voting.',
      denom_units: [{
          denom: 'ibc/99E5F322485732DFC667D55B5B80D9BB7C0FD2D4AF1E636F365451CD5E6993A6',
          exponent: 0,
          aliases: ['usara-core1r9gc0rnxnzpq33u82f44aufgdwvyxv4wyepyck98m9v2pxua6naqr8h03z']
        }, {
          denom: 'sara',
          exponent: 6
        }],
      base: 'ibc/99E5F322485732DFC667D55B5B80D9BB7C0FD2D4AF1E636F365451CD5E6993A6',
      name: 'Sara',
      display: 'sara',
      symbol: 'SARA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/sara.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/sara.svg'
      },
      coingecko_id: 'pulsara',
      keywords: [
        'dex',
        'staking',
        'assets'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/sara.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/sara.svg'
        }],
      socials: {
        website: 'https://www.pulsara.io',
        x: 'https://x.com/pulsara_io'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'usara-core1r9gc0rnxnzpq33u82f44aufgdwvyxv4wyepyck98m9v2pxua6naqr8h03z',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-660'
          }
        }]
    },
    {
      description: 'Liquid staking asset for COREUM, by Pulsara',
      denom_units: [{
          denom: 'ibc/46FEAB17476B9D02870FF02057621AB858C84FB972AB1894726AEBD97AC9992C',
          exponent: 0,
          aliases: ['ulicore-core13gza3msdh8hegqxhgezll9quucsr63s0gp43k274xwt66k4e8pmq5zpnm9']
        }, {
          denom: 'licore',
          exponent: 6
        }],
      base: 'ibc/46FEAB17476B9D02870FF02057621AB858C84FB972AB1894726AEBD97AC9992C',
      name: 'liCORE',
      display: 'licore',
      symbol: 'LICORE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/licore.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/licore.svg'
      },
      coingecko_id: 'licore',
      keywords: [
        'dex',
        'staking',
        'assets'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/licore.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/licore.svg'
        }],
      socials: {
        website: 'https://www.pulsara.io',
        x: 'https://x.com/pulsara_io'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'ulicore-core13gza3msdh8hegqxhgezll9quucsr63s0gp43k274xwt66k4e8pmq5zpnm9',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-660'
          }
        }]
    },
    {
      description: 'Rewards token designed to incentivize participation in Coreum Community DAO',
      denom_units: [{
          denom: 'ibc/A00617311B890966444673FC25D254EE1C3769ACD90EF8660C677E62B2C928F6',
          exponent: 0,
          aliases: ['uccd-core1hnwd78wappjmgygyzr9mwspm7uzytrkcp9pfvv']
        }, {
          denom: 'ccd',
          exponent: 6
        }],
      base: 'ibc/A00617311B890966444673FC25D254EE1C3769ACD90EF8660C677E62B2C928F6',
      name: 'Coreum Community DAO Token',
      display: 'ccd',
      symbol: 'CCD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/ccd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/ccd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/ccd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/ccd.svg'
        }],
      socials: {
        website: 'https://coreumcommunitydao.com/',
        x: 'https://x.com/Cor3_Community'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'uccd-core1hnwd78wappjmgygyzr9mwspm7uzytrkcp9pfvv',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-660'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Acrechain',
      denom_units: [{
          denom: 'ibc/1AA15279AD043C26508AF9FA8AD4A318A5688071397A350EA86807EDA7327720',
          exponent: 0,
          aliases: ['aacre']
        }, {
          denom: 'acre',
          exponent: 18
        }],
      base: 'ibc/1AA15279AD043C26508AF9FA8AD4A318A5688071397A350EA86807EDA7327720',
      name: 'Acre',
      display: 'acre',
      symbol: 'ACRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
        }],
      socials: {
        website: 'https://arable.finance/',
        x: 'https://x.com/ArableProtocol'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'aacre',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-457'
          }
        }]
    },
    {
      description: 'Overcollateralized stable coin for Arable derivatives v1',
      denom_units: [{
          denom: 'ibc/7ED89FB7AF5BB5791B424BAB0D17DAA793DD836D79C594DFEC690062D2EFB9E1',
          exponent: 0,
          aliases: ['erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c']
        }, {
          denom: 'arusd',
          exponent: 18
        }],
      base: 'ibc/7ED89FB7AF5BB5791B424BAB0D17DAA793DD836D79C594DFEC690062D2EFB9E1',
      name: 'Arable USD',
      display: 'arusd',
      symbol: 'arUSD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
        }],
      socials: {
        website: 'https://arable.finance/',
        x: 'https://x.com/ArableProtocol'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-457'
          }
        }]
    },
    {
      description: 'Ciento Exchange Token',
      denom_units: [{
          denom: 'ibc/6C0C37FF4AD97EFF12388662B6DCD471319D7733673315905FFC3E08BF5C6912',
          exponent: 0,
          aliases: ['erc20/0xAE6D3334989a22A65228732446731438672418F2']
        }, {
          denom: 'cnto',
          exponent: 18
        }],
      base: 'ibc/6C0C37FF4AD97EFF12388662B6DCD471319D7733673315905FFC3E08BF5C6912',
      name: 'Ciento Token',
      display: 'cnto',
      symbol: 'CNTO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'erc20/0xAE6D3334989a22A65228732446731438672418F2',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-457'
          }
        }]
    },
    {
      description: 'Agoric is a smart contract platform that uses JavaScript to enable developers to build secure and scalable decentralized applications (dApps) easily.',
      denom_units: [{
          denom: 'ibc/26D5710650B26F38CD59EDDC2E85830BC47BD727F23747EB41F350263F08DCF7',
          exponent: 0,
          aliases: ['ubld']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      base: 'ibc/26D5710650B26F38CD59EDDC2E85830BC47BD727F23747EB41F350263F08DCF7',
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
            channel_id: 'channel-5',
            base_denom: 'ubld',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-405'
          }
        }]
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [{
          denom: 'ibc/9EA9BCC30570DC3198317BB6B5561AB41DDC17AFC342087022C128C57EFE19BA',
          exponent: 0,
          aliases: ['uist']
        }, {
          denom: 'ist',
          exponent: 6
        }],
      base: 'ibc/9EA9BCC30570DC3198317BB6B5561AB41DDC17AFC342087022C128C57EFE19BA',
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
            channel_id: 'channel-5',
            base_denom: 'uist',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-405'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the AIOZ Network.',
      denom_units: [
        {
          denom: 'ibc/9DFC3B38276E617E802EC8E05C85368D36836368795CE16A2A37B9942E29573C',
          exponent: 0,
          aliases: ['attoaioz']
        },
        {
          denom: 'nanoaioz',
          exponent: 9
        },
        {
          denom: 'aioz',
          exponent: 18
        }
      ],
      base: 'ibc/9DFC3B38276E617E802EC8E05C85368D36836368795CE16A2A37B9942E29573C',
      name: 'AIOZ',
      display: 'aioz',
      symbol: 'AIOZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.svg'
      },
      coingecko_id: 'aioz-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.svg'
        }],
      socials: {
        website: 'https://aioz.network/',
        x: 'https://x.com/AIOZNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'attoaioz',
            chain_name: 'aioz'
          },
          chain: {
            channel_id: 'channel-567'
          }
        }]
    },
    {
      description: 'Akash Network is a decentralized cloud computing marketplace that connects users with unused computing resources, offering a cost-effective alternative to traditional cloud providers.',
      denom_units: [{
          denom: 'ibc/2181AAB0218EAC24BC9F86BD1364FBBFA3E6E3FCC25E88E3E68C15DC6E752D86',
          exponent: 0,
          aliases: ['uakt']
        }, {
          denom: 'akt',
          exponent: 6
        }],
      base: 'ibc/2181AAB0218EAC24BC9F86BD1364FBBFA3E6E3FCC25E88E3E68C15DC6E752D86',
      name: 'Akash Network',
      display: 'akt',
      symbol: 'AKT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
      },
      coingecko_id: 'akash-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
        }],
      socials: {
        website: 'https://akash.network/',
        x: 'https://x.com/akashnet'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-17',
            base_denom: 'uakt',
            chain_name: 'akash'
          },
          chain: {
            channel_id: 'channel-184'
          }
        }]
    },
    {
      description: 'Allora Token (ALLO) is the Allora Network\'s native utility token, used as the primary means to govern, secure the blockchain, and incentivize network participants.',
      denom_units: [{
          denom: 'ibc/D9E40E9047E09AAC6CDF9D133AC54C778B44A03690A91B9F5EDFF9F53C2A0977',
          exponent: 0,
          aliases: ['uallo']
        }, {
          denom: 'allo',
          exponent: 18
        }],
      base: 'ibc/D9E40E9047E09AAC6CDF9D133AC54C778B44A03690A91B9F5EDFF9F53C2A0977',
      name: 'Allora Network',
      display: 'allo',
      symbol: 'ALLO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/allora/images/allora.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/allora/images/allora.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/allora/images/allora.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/allora/images/allora.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'uallo',
            chain_name: 'allora'
          },
          chain: {
            channel_id: 'channel-1353'
          }
        }]
    },
    {
      description: 'Archway is a smart contract platform in the Cosmos ecosystem designed to reward developers by providing them with a share of transaction fees generated by their applications.',
      denom_units: [
        {
          denom: 'ibc/98D08BB74578514C9A97A76A3470A09FCC3698821581621A984110D820FF478A',
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
      base: 'ibc/98D08BB74578514C9A97A76A3470A09FCC3698821581621A984110D820FF478A',
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
            channel_id: 'channel-0',
            base_denom: 'aarch',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-623'
          }
        }]
    },
    {
      description: 'Architects Token',
      type_asset: 'cw20',
      address: 'archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu',
      denom_units: [{
          denom: 'ibc/557A8BE1D1A4FEFD7C8DCA98F54F704C9CD3EAB4628FF89D142A0687EEFAA2C3',
          exponent: 0,
          aliases: ['archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu']
        }, {
          denom: 'TOKN',
          exponent: 18
        }],
      base: 'ibc/557A8BE1D1A4FEFD7C8DCA98F54F704C9CD3EAB4628FF89D142A0687EEFAA2C3',
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
            channel_id: 'channel-0',
            base_denom: 'archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-623'
          }
        }]
    },
    {
      description: 'The native token of Aura Network',
      denom_units: [{
          denom: 'ibc/C0BDD2D3A69D64FB569741570890BBC1D2E3EF077A4E77FD23DEBE227B8419A8',
          exponent: 0,
          aliases: ['uaura']
        }, {
          denom: 'aura',
          exponent: 6
        }],
      base: 'ibc/C0BDD2D3A69D64FB569741570890BBC1D2E3EF077A4E77FD23DEBE227B8419A8',
      name: 'Aura',
      display: 'aura',
      symbol: 'AURA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg'
      },
      coingecko_id: 'aura-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'uaura',
            chain_name: 'aura'
          },
          chain: {
            channel_id: 'channel-646'
          }
        }]
    },
    {
      description: 'Axelar is a decentralized interoperability network connecting multiple blockchain ecosystems, enabling seamless cross-chain communication and value transfer.',
      denom_units: [{
          denom: 'ibc/6C2BB0FDAE0ABFF0E965BFFCADEB0D9590F4A011A9EE678413B2F2587F05CB8C',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/6C2BB0FDAE0ABFF0E965BFFCADEB0D9590F4A011A9EE678413B2F2587F05CB8C',
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
            channel_id: 'channel-2',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-293'
          }
        }]
    },
    {
      description: 'The native token of Babylon Genesis.',
      denom_units: [{
          denom: 'ibc/7017AD43F9A09EFE8760556753B019B1B5C2E965095DEC22B613F7B010DF91D6',
          exponent: 0,
          aliases: ['ubbn']
        }, {
          denom: 'BABY',
          exponent: 6
        }],
      base: 'ibc/7017AD43F9A09EFE8760556753B019B1B5C2E965095DEC22B613F7B010DF91D6',
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
            channel_id: 'channel-0',
            base_denom: 'ubbn',
            chain_name: 'babylon'
          },
          chain: {
            channel_id: 'channel-1341'
          }
        }]
    },
    {
      description: '$BADGE is the native in-app token for BitBadges.',
      denom_units: [{
          denom: 'ibc/E66E06D91E12D76D96DEA839941FD30F785D84CDD9B564A16BA1AC32C089A0FA',
          exponent: 0,
          aliases: ['ubadge']
        }, {
          denom: 'badge',
          exponent: 9
        }],
      base: 'ibc/E66E06D91E12D76D96DEA839941FD30F785D84CDD9B564A16BA1AC32C089A0FA',
      name: 'BitBadges',
      display: 'badge',
      symbol: 'BADGE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitbadges/images/badge_logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitbadges/images/badge_logo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitbadges/images/badge_logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitbadges/images/badge_logo.svg'
        }],
      socials: {
        website: 'https://bitbadges.io/',
        x: 'https://x.com/bitbadges_io'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'ubadge',
            chain_name: 'bitbadges'
          },
          chain: {
            channel_id: 'channel-1420'
          }
        }]
    },
    {
      description: 'The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.',
      denom_units: [{
          denom: 'ibc/ADBEC1A7AC2FEF73E06B066A1C94DAB6C27924EF7EA3F5A43378150009620284',
          exponent: 0,
          aliases: ['ubcna']
        }, {
          denom: 'bcna',
          exponent: 6
        }],
      base: 'ibc/ADBEC1A7AC2FEF73E06B066A1C94DAB6C27924EF7EA3F5A43378150009620284',
      display: 'bcna',
      name: 'BitCanna',
      symbol: 'BCNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
      },
      coingecko_id: 'bitcanna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
        }],
      socials: {
        website: 'http://www.bitcanna.io/',
        x: 'https://x.com/BitCannaGlobal'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'ubcna',
            chain_name: 'bitcanna'
          },
          chain: {
            channel_id: 'channel-232'
          }
        }]
    },
    {
      description: 'BitSong Native Token',
      denom_units: [{
          denom: 'ibc/E7D5E9D0E9BF8B7354929A817DD28D4D017E745F638954764AA88522A7A409EC',
          exponent: 0,
          aliases: ['ubtsg']
        }, {
          denom: 'btsg',
          exponent: 6
        }],
      base: 'ibc/E7D5E9D0E9BF8B7354929A817DD28D4D017E745F638954764AA88522A7A409EC',
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
            channel_id: 'channel-1',
            base_denom: 'ubtsg',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-229'
          }
        }]
    },
    {
      description: 'The staking token of Bostrom',
      denom_units: [{
          denom: 'ibc/03D28CFE7A878F122AB9727064E916B12FB88AFEC7CFF0DCBD1F9028399EB06F',
          exponent: 0,
          aliases: ['boot']
        }],
      base: 'ibc/03D28CFE7A878F122AB9727064E916B12FB88AFEC7CFF0DCBD1F9028399EB06F',
      name: 'Bostrom',
      display: 'boot',
      symbol: 'BOOT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg'
      },
      coingecko_id: 'bostrom',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'boot',
            chain_name: 'bostrom'
          },
          chain: {
            channel_id: 'channel-341'
          }
        }]
    },
    {
      description: 'The liquid staking token of Bostrom',
      denom_units: [{
          denom: 'ibc/E1E3344174D2A40CD8D35BB227348D4CD7DF15B19E9F71FAF8810D2039B838B7',
          exponent: 0,
          aliases: ['hydrogen']
        }],
      base: 'ibc/E1E3344174D2A40CD8D35BB227348D4CD7DF15B19E9F71FAF8810D2039B838B7',
      name: 'Bostrom Hydrogen',
      display: 'hydrogen',
      symbol: 'HYDROGEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'hydrogen',
            chain_name: 'bostrom'
          },
          chain: {
            channel_id: 'channel-341'
          }
        }]
    },
    {
      description: 'The resource token of Bostrom',
      denom_units: [{
          denom: 'ibc/6A196466D372F80D2FA582D6B6400CAAE08202B4F5839501BEA5C8B88F9C59A0',
          exponent: 0,
          aliases: ['milliampere']
        }, {
          denom: 'ampere',
          exponent: 3,
          aliases: ['ampere']
        }],
      base: 'ibc/6A196466D372F80D2FA582D6B6400CAAE08202B4F5839501BEA5C8B88F9C59A0',
      name: 'Bostrom Ampere',
      display: 'ampere',
      symbol: 'A',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'milliampere',
            chain_name: 'bostrom'
          },
          chain: {
            channel_id: 'channel-341'
          }
        }]
    },
    {
      description: 'The resource token of Bostrom',
      denom_units: [{
          denom: 'ibc/7129E2BFCA2543AE222CEEE5C8C9F688537DFC563DB69ED1E39EB3F73CB7C644',
          exponent: 0,
          aliases: ['millivolt']
        }, {
          denom: 'volt',
          exponent: 3,
          aliases: ['volt']
        }],
      base: 'ibc/7129E2BFCA2543AE222CEEE5C8C9F688537DFC563DB69ED1E39EB3F73CB7C644',
      name: 'Bostrom Volt',
      display: 'volt',
      symbol: 'V',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'millivolt',
            chain_name: 'bostrom'
          },
          chain: {
            channel_id: 'channel-341'
          }
        }]
    },
    {
      description: 'The staking token of Cyber',
      denom_units: [{
          denom: 'ibc/BF18EF7F331466EE322B497811B8D21F9744E1E77158DE07117D38A3791E8BD5',
          exponent: 0,
          aliases: ['tocyb']
        }],
      base: 'ibc/BF18EF7F331466EE322B497811B8D21F9744E1E77158DE07117D38A3791E8BD5',
      name: 'Bostrom Tocyb',
      display: 'tocyb',
      symbol: 'TOCYB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'tocyb',
            chain_name: 'bostrom'
          },
          chain: {
            channel_id: 'channel-341'
          }
        }]
    },
    {
      description: 'Canto is a Layer-1 blockchain built to deliver on the promise of DeFi',
      denom_units: [{
          denom: 'ibc/5567102708097100D5B3FC160F01F5031CBF82EC362EA46CFEE97A8316B39264',
          exponent: 0,
          aliases: ['acanto']
        }, {
          denom: 'canto',
          exponent: 18
        }],
      base: 'ibc/5567102708097100D5B3FC160F01F5031CBF82EC362EA46CFEE97A8316B39264',
      name: 'Canto',
      display: 'canto',
      symbol: 'CANTO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg'
      },
      coingecko_id: 'canto',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg'
        }],
      socials: {
        website: 'https://canto.io/',
        x: 'https://x.com/CantoPublic'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'acanto',
            chain_name: 'canto'
          },
          chain: {
            channel_id: 'channel-358'
          }
        }]
    },
    {
      description: 'The native governance token of Carbon',
      denom_units: [{
          denom: 'ibc/5D266BB6FA1D26B678DFE4D8255BBB6CBD23847FA6464CDC0CC15C2441D847C4',
          exponent: 0,
          aliases: ['swth']
        }, {
          denom: 'dswth',
          exponent: 8,
          aliases: ['SWTH']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/5D266BB6FA1D26B678DFE4D8255BBB6CBD23847FA6464CDC0CC15C2441D847C4',
      name: 'Carbon',
      display: 'dswth',
      symbol: 'SWTH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
      },
      coingecko_id: 'switcheo',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'swth',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-342'
          }
        }]
    },
    {
      description: 'The native stablecoin of Carbon',
      denom_units: [{
          denom: 'ibc/662F0E2BD31A7E120FE8F704211D262CB441DE101B5826D97B70F9FA96F65819',
          exponent: 0,
          aliases: ['usc']
        }, {
          denom: 'dusc',
          exponent: 8,
          aliases: ['USC']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/662F0E2BD31A7E120FE8F704211D262CB441DE101B5826D97B70F9FA96F65819',
      name: 'Carbon USD Coin',
      display: 'dusc',
      symbol: 'USC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'usc',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-342'
          }
        }]
    },
    {
      description: 'Grouped USD on Carbon',
      denom_units: [{
          denom: 'ibc/44CAB1CDACF74FFA6AD06F2559EF99C3A0240461C02075A4F10055011FBCC7BA',
          exponent: 0,
          aliases: ['cgt/1']
        }, {
          denom: 'usd',
          exponent: 18,
          aliases: ['USD']
        }],
      base: 'ibc/44CAB1CDACF74FFA6AD06F2559EF99C3A0240461C02075A4F10055011FBCC7BA',
      name: 'Carbon Grouped USD',
      display: 'usd',
      symbol: 'USD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'cgt/1',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-342'
          }
        }]
    },
    {
      description: 'The Next Generation of AI Infrastructure Built for Privacy, Performance, & Governance — By Design, At Scale',
      denom_units: [{
          denom: 'ibc/C7DE16F5065C5568C2A16C241069D76DA93F056172A40391EB682444AF40F048',
          exponent: 0,
          aliases: ['ucif']
        }, {
          denom: 'cif',
          exponent: 6
        }],
      base: 'ibc/C7DE16F5065C5568C2A16C241069D76DA93F056172A40391EB682444AF40F048',
      name: 'Cifer',
      display: 'cif',
      symbol: 'CIF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg'
        }],
      socials: {
        website: 'http://cifer.ai',
        github: 'https://github.com/CiferAI',
        x: 'https://x.com/cifer_ai'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ucif',
            chain_name: 'cifer'
          },
          chain: {
            channel_id: 'channel-831'
          }
        }]
    },
    {
      description: 'The native token of Coreum',
      denom_units: [{
          denom: 'ibc/F8215CF2CD97294057DBECAA45E3ABEB6012D25550750DA8EC56BEC73F0E522F',
          exponent: 0,
          aliases: ['ucore']
        }, {
          denom: 'core',
          exponent: 6
        }],
      base: 'ibc/F8215CF2CD97294057DBECAA45E3ABEB6012D25550750DA8EC56BEC73F0E522F',
      name: 'Coreum',
      display: 'core',
      symbol: 'COREUM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
      },
      coingecko_id: 'coreum',
      keywords: [
        'dex',
        'staking',
        'wasm',
        'assets',
        'nft',
        'XRPL'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
        }],
      socials: {
        website: 'https://www.coreum.com/',
        x: 'https://x.com/CoreumOfficial'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'ucore',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-660'
          }
        }]
    },
    {
      description: 'SARA is the utility native token of the Pulsara ecosystem. The burn or mint of the $SARA token will be decided by the community through proposals and voting.',
      denom_units: [{
          denom: 'ibc/99E5F322485732DFC667D55B5B80D9BB7C0FD2D4AF1E636F365451CD5E6993A6',
          exponent: 0,
          aliases: ['usara-core1r9gc0rnxnzpq33u82f44aufgdwvyxv4wyepyck98m9v2pxua6naqr8h03z']
        }, {
          denom: 'sara',
          exponent: 6
        }],
      base: 'ibc/99E5F322485732DFC667D55B5B80D9BB7C0FD2D4AF1E636F365451CD5E6993A6',
      name: 'Sara',
      display: 'sara',
      symbol: 'SARA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/sara.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/sara.svg'
      },
      coingecko_id: 'pulsara',
      keywords: [
        'dex',
        'staking',
        'assets'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/sara.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/sara.svg'
        }],
      socials: {
        website: 'https://www.pulsara.io',
        x: 'https://x.com/pulsara_io'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'usara-core1r9gc0rnxnzpq33u82f44aufgdwvyxv4wyepyck98m9v2pxua6naqr8h03z',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-660'
          }
        }]
    },
    {
      description: 'Liquid staking asset for COREUM, by Pulsara',
      denom_units: [{
          denom: 'ibc/46FEAB17476B9D02870FF02057621AB858C84FB972AB1894726AEBD97AC9992C',
          exponent: 0,
          aliases: ['ulicore-core13gza3msdh8hegqxhgezll9quucsr63s0gp43k274xwt66k4e8pmq5zpnm9']
        }, {
          denom: 'licore',
          exponent: 6
        }],
      base: 'ibc/46FEAB17476B9D02870FF02057621AB858C84FB972AB1894726AEBD97AC9992C',
      name: 'liCORE',
      display: 'licore',
      symbol: 'LICORE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/licore.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/licore.svg'
      },
      coingecko_id: 'licore',
      keywords: [
        'dex',
        'staking',
        'assets'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/licore.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/licore.svg'
        }],
      socials: {
        website: 'https://www.pulsara.io',
        x: 'https://x.com/pulsara_io'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'ulicore-core13gza3msdh8hegqxhgezll9quucsr63s0gp43k274xwt66k4e8pmq5zpnm9',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-660'
          }
        }]
    },
    {
      description: 'Rewards token designed to incentivize participation in Coreum Community DAO',
      denom_units: [{
          denom: 'ibc/A00617311B890966444673FC25D254EE1C3769ACD90EF8660C677E62B2C928F6',
          exponent: 0,
          aliases: ['uccd-core1hnwd78wappjmgygyzr9mwspm7uzytrkcp9pfvv']
        }, {
          denom: 'ccd',
          exponent: 6
        }],
      base: 'ibc/A00617311B890966444673FC25D254EE1C3769ACD90EF8660C677E62B2C928F6',
      name: 'Coreum Community DAO Token',
      display: 'ccd',
      symbol: 'CCD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/ccd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/ccd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/ccd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/ccd.svg'
        }],
      socials: {
        website: 'https://coreumcommunitydao.com/',
        x: 'https://x.com/Cor3_Community'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'uccd-core1hnwd78wappjmgygyzr9mwspm7uzytrkcp9pfvv',
            chain_name: 'coreum'
          },
          chain: {
            channel_id: 'channel-660'
          }
        }]
    },
    {
      description: 'The native token of Crescent',
      denom_units: [{
          denom: 'ibc/3F18D520CE791A40357D061FAD657CED6B21D023F229EAF131D7FE7CE6F488BD',
          exponent: 0,
          aliases: ['ucre']
        }, {
          denom: 'cre',
          exponent: 6
        }],
      base: 'ibc/3F18D520CE791A40357D061FAD657CED6B21D023F229EAF131D7FE7CE6F488BD',
      name: 'Crescent',
      display: 'cre',
      symbol: 'CRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ucre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-326'
          }
        }]
    },
    {
      description: 'The bonded token of Crescent',
      denom_units: [{
          denom: 'ibc/835EE9D00C35D72128F195B50F8A89EB83E5011C43EA0AA00D16348E2208FEBB',
          exponent: 0,
          aliases: ['ubcre']
        }, {
          denom: 'bcre',
          exponent: 6
        }],
      base: 'ibc/835EE9D00C35D72128F195B50F8A89EB83E5011C43EA0AA00D16348E2208FEBB',
      name: 'Bonded Crescent',
      display: 'bcre',
      symbol: 'bCRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ubcre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-326'
          }
        }]
    },
    {
      description: 'CRO is the native token of the Crypto.org Chain, referred to as Native CRO.',
      denom_units: [{
          denom: 'ibc/C932ADFE2B4216397A4F17458B6E4468499B86C3BC8116180F85D799D6F5CC1B',
          exponent: 0,
          aliases: ['basecro']
        }, {
          denom: 'cro',
          exponent: 8
        }],
      base: 'ibc/C932ADFE2B4216397A4F17458B6E4468499B86C3BC8116180F85D799D6F5CC1B',
      name: 'Cronos',
      display: 'cro',
      symbol: 'CRO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
      },
      coingecko_id: 'crypto-com-chain',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro_white.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro_white.png',
          theme: {
            dark_mode: true
          }
        }
      ],
      socials: {
        website: 'https://cronos.org/',
        x: 'https://x.com/cronos_chain'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-27',
            base_denom: 'basecro',
            chain_name: 'cryptoorgchain'
          },
          chain: {
            channel_id: 'channel-187'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Theta testnet version of the Dora Vota.',
      denom_units: [{
          denom: 'ibc/AB556501A8873E00928AD9A75245D6178747111913D292ABB269D268950CB8B7',
          exponent: 0,
          aliases: ['peaka']
        }, {
          denom: 'DORA',
          exponent: 18
        }],
      base: 'ibc/AB556501A8873E00928AD9A75245D6178747111913D292ABB269D268950CB8B7',
      name: 'Dora Vota',
      display: 'DORA',
      symbol: 'DORA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/doravota.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'peaka',
            chain_name: 'doravota'
          },
          chain: {
            channel_id: 'channel-750'
          }
        }]
    },
    {
      description: 'Dragon Token is the native staking and governance token of Dungeon Chain, serving as the backbone of the ecosystem. Its primary roles include staking, where users stake Dragon Tokens to secure the network, enhance its functionality, and earn rewards in return; governance, granting token holders voting rights to influence key decisions such as game onboarding, protocol updates, and community-driven initiatives; and ecosystem growth, facilitating transactions, incentivizing developers, and promoting the creation of new interchain games. Dragon Token ensures a decentralized, fair, and community-driven ecosystem, fostering the evolution of blockchain-based gaming. It plays a crucial role in driving the growth of Dungeon Chain by empowering both developers and players to participate actively in the ecosystem\'s governance and success.',
      denom_units: [{
          denom: 'ibc/0F8D3C0F081E126A4E275703DA67165DA5353C81F45E945140D0F961B9F7692A',
          exponent: 0,
          aliases: ['udgn']
        }, {
          denom: 'DGN',
          exponent: 6
        }],
      base: 'ibc/0F8D3C0F081E126A4E275703DA67165DA5353C81F45E945140D0F961B9F7692A',
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
            channel_id: 'channel-5308',
            base_denom: 'udgn',
            chain_name: 'dungeon'
          },
          chain: {
            channel_id: 'channel-1560'
          }
        }]
    },
    {
      description: 'The native governance and staking token of the Dymension Hub',
      denom_units: [{
          denom: 'ibc/49ACCECDED4A6A2B5DD683FA048235F4F66B65F58CD558C9A441195502191D01',
          exponent: 0,
          aliases: ['adym']
        }, {
          denom: 'dym',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/49ACCECDED4A6A2B5DD683FA048235F4F66B65F58CD558C9A441195502191D01',
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
            channel_id: 'channel-1',
            base_denom: 'adym',
            chain_name: 'dymension'
          },
          chain: {
            channel_id: 'channel-794'
          }
        }]
    },
    {
      description: 'The native token of Elys Network',
      denom_units: [
        {
          denom: 'ibc/0872AF0D1B0F6F23BA67631F9A4AFF633F289EE7B390478D7BA4F064A5135162',
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
      base: 'ibc/0872AF0D1B0F6F23BA67631F9A4AFF633F289EE7B390478D7BA4F064A5135162',
      name: 'Elys Network',
      display: 'elys',
      symbol: 'ELYS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/elys/images/elys.png'
      },
      coingecko_id: 'elys-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/elys/images/elys.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uelys',
            chain_name: 'elys'
          },
          chain: {
            channel_id: 'channel-1266'
          }
        }]
    },
    {
      description: 'Eden token definition',
      denom_units: [
        {
          denom: 'ibc/22B6BC43434DE9470B3A8EBC049E67362CAF7F523BE103203405546E6E4AF565',
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
      base: 'ibc/22B6BC43434DE9470B3A8EBC049E67362CAF7F523BE103203405546E6E4AF565',
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
            channel_id: 'channel-1',
            base_denom: 'ueden',
            chain_name: 'elys'
          },
          chain: {
            channel_id: 'channel-1266'
          }
        }]
    },
    {
      description: 'Eden BOOST token definition',
      denom_units: [
        {
          denom: 'ibc/F0280DA924768646FA39E7C08FA6935B4C5A313C3C5BA611095350CE8B45C742',
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
      base: 'ibc/F0280DA924768646FA39E7C08FA6935B4C5A313C3C5BA611095350CE8B45C742',
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
            channel_id: 'channel-1',
            base_denom: 'uedenb',
            chain_name: 'elys'
          },
          chain: {
            channel_id: 'channel-1266'
          }
        }]
    },
    {
      description: 'e-Money NGM staking token. In addition to earning staking rewards the token is bought back and burned based on e-Money stablecoin inflation.',
      denom_units: [{
          denom: 'ibc/E070CE91CC4BD15AEC9B5788C0826755AAD35052A3037E9AC62BE70B4C9A7DBB',
          exponent: 0,
          aliases: ['ungm']
        }, {
          denom: 'ngm',
          exponent: 6
        }],
      base: 'ibc/E070CE91CC4BD15AEC9B5788C0826755AAD35052A3037E9AC62BE70B4C9A7DBB',
      name: 'e-Money',
      display: 'ngm',
      symbol: 'NGM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg'
      },
      coingecko_id: 'e-money',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ungm',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-202'
          }
        }]
    },
    {
      description: 'e-Money EUR stablecoin. Audited and backed by fiat EUR deposits and government bonds.',
      denom_units: [{
          denom: 'ibc/B93F321238F7BB15AB5B882660AAE72286C8E9035DE34E2B30F60E54C623C63C',
          exponent: 0,
          aliases: ['eeur']
        }, {
          denom: 'eur',
          exponent: 6
        }],
      base: 'ibc/B93F321238F7BB15AB5B882660AAE72286C8E9035DE34E2B30F60E54C623C63C',
      name: 'e-Money EUR',
      display: 'eur',
      symbol: 'EEUR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg'
      },
      coingecko_id: 'e-money-eur',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'eeur',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-202'
          }
        }]
    },
    {
      description: 'e-Money CHF stablecoin. Audited and backed by fiat CHF deposits and government bonds.',
      denom_units: [{
          denom: 'ibc/96344D426100A0885D84F1C588E3C2C2A8CB2A82B446FC8F63B91E4B70BF33EB',
          exponent: 0,
          aliases: ['echf']
        }, {
          denom: 'chf',
          exponent: 6
        }],
      base: 'ibc/96344D426100A0885D84F1C588E3C2C2A8CB2A82B446FC8F63B91E4B70BF33EB',
      name: 'e-Money CHF',
      display: 'chf',
      symbol: 'ECHF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'echf',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-202'
          }
        }]
    },
    {
      description: 'e-Money NOK stablecoin. Audited and backed by fiat NOK deposits and government bonds.',
      denom_units: [{
          denom: 'ibc/F998631ADCB33376AB66126D8BF5212314F15A960C215180D06ECFA9FA7F48E6',
          exponent: 0,
          aliases: ['enok']
        }, {
          denom: 'nok',
          exponent: 6
        }],
      base: 'ibc/F998631ADCB33376AB66126D8BF5212314F15A960C215180D06ECFA9FA7F48E6',
      name: 'e-Money NOK',
      display: 'nok',
      symbol: 'ENOK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'enok',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-202'
          }
        }]
    },
    {
      description: 'e-Money DKK stablecoin. Audited and backed by fiat DKK deposits and government bonds.',
      denom_units: [{
          denom: 'ibc/6EC3B085692C4507A2365E88E82CBCB32DD58E0099056CBC16824D2EE99C5E00',
          exponent: 0,
          aliases: ['edkk']
        }, {
          denom: 'dkk',
          exponent: 6
        }],
      base: 'ibc/6EC3B085692C4507A2365E88E82CBCB32DD58E0099056CBC16824D2EE99C5E00',
      name: 'e-Money DKK',
      display: 'dkk',
      symbol: 'EDKK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'edkk',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-202'
          }
        }]
    },
    {
      description: 'e-Money SEK stablecoin. Audited and backed by fiat SEK deposits and government bonds.',
      denom_units: [{
          denom: 'ibc/178B678FFA6991C1064332FBA0C9A4FC954E3DD66DD5B692761172DB5559F6D2',
          exponent: 0,
          aliases: ['esek']
        }, {
          denom: 'sek',
          exponent: 6
        }],
      base: 'ibc/178B678FFA6991C1064332FBA0C9A4FC954E3DD66DD5B692761172DB5559F6D2',
      name: 'e-Money SEK',
      display: 'sek',
      symbol: 'ESEK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'esek',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-202'
          }
        }]
    },
    {
      description: 'The native staking and governance token of Empower.',
      denom_units: [{
          denom: 'ibc/F58D58F943FC243D4FE0CFE0A9E01DB420DDF994D18C9A7F2939FF1C4C278C31',
          exponent: 0,
          aliases: ['umpwr']
        }, {
          denom: 'mpwr',
          exponent: 6
        }],
      base: 'ibc/F58D58F943FC243D4FE0CFE0A9E01DB420DDF994D18C9A7F2939FF1C4C278C31',
      name: 'MPWR',
      display: 'mpwr',
      symbol: 'MPWR',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg',
          theme: {
            circle: true
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.png',
          theme: {
            circle: false
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'umpwr',
            chain_name: 'empowerchain'
          },
          chain: {
            channel_id: 'channel-621'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Evmos Hub',
      denom_units: [{
          denom: 'ibc/19DD710119533524061885A6F190B18AF28D9537E2BAE37F32A62C1A25979287',
          exponent: 0,
          aliases: ['aevmos']
        }, {
          denom: 'evmos',
          exponent: 18
        }],
      base: 'ibc/19DD710119533524061885A6F190B18AF28D9537E2BAE37F32A62C1A25979287',
      name: 'Evmos',
      display: 'evmos',
      symbol: 'EVMOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
      },
      coingecko_id: 'evmos',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
        }],
      socials: {
        website: 'https://evmos.org/',
        x: 'https://x.com/EvmosOrg'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'aevmos',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-292'
          }
        }]
    },
    {
      description: 'The token of Neokingdom DAO.',
      denom_units: [{
          denom: 'ibc/FCB0126B85D91CCBDF17FC273023372D41DE033B6E6B666EA2E0E30EAECFEFFC',
          exponent: 0,
          aliases: ['erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9']
        }, {
          denom: 'neok',
          exponent: 18
        }],
      base: 'ibc/FCB0126B85D91CCBDF17FC273023372D41DE033B6E6B666EA2E0E30EAECFEFFC',
      name: 'Neokingdom DAO',
      display: 'neok',
      symbol: 'NEOK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
        }],
      socials: {
        website: 'https://www.neokingdom.org/',
        x: 'https://x.com/NEOKingdomDAO'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-292'
          }
        }]
    },
    {
      description: 'The legacy token of Teledisko DAO.',
      denom_units: [{
          denom: 'ibc/AE07DE43C4743BA0CE79576B70B280516F395F2F45B905668B150A022DDA4080',
          exponent: 0,
          aliases: ['erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280']
        }, {
          denom: 'berlin-legacy',
          exponent: 18
        }],
      base: 'ibc/AE07DE43C4743BA0CE79576B70B280516F395F2F45B905668B150A022DDA4080',
      name: 'Teledisko DAO - Legacy',
      display: 'berlin-legacy',
      symbol: 'BERLIN-legacy',
      type_asset: 'erc20',
      address: '0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-292'
          }
        }]
    },
    {
      description: 'The token of Crowdpunk DAO',
      denom_units: [{
          denom: 'ibc/74C4FE1EC3BDD66B02C691496371DDBB86DDE512C5BC072D76262C6C9B4B20D1',
          exponent: 0,
          aliases: ['erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F']
        }, {
          denom: 'crowdp',
          exponent: 18
        }],
      base: 'ibc/74C4FE1EC3BDD66B02C691496371DDBB86DDE512C5BC072D76262C6C9B4B20D1',
      name: 'Crowdpunk DAO',
      display: 'crowdp',
      address: '0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F',
      symbol: 'CROWDP',
      type_asset: 'erc20',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-292'
          }
        }]
    },
    {
      description: 'PUNDIAI is an ERC-20 utility and governance token of Pundi AI ecosystem, including Pundi AI Data Platform, Pundi AI Marketplace, Pundi AIFX Omni Layer and Pundi MM AI Agent Launcher.',
      denom_units: [{
          denom: 'ibc/19EAFC8147E47371620ED2C8EC90B3612C19408FC59A89AAD79033A88ABBF078',
          exponent: 0,
          aliases: ['apundiai']
        }, {
          denom: 'pundiai',
          exponent: 18
        }],
      base: 'ibc/19EAFC8147E47371620ED2C8EC90B3612C19408FC59A89AAD79033A88ABBF078',
      name: 'Pundi AI',
      display: 'pundiai',
      symbol: 'PUNDIAI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/PUNDIAI.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/PUNDIAI.svg'
      },
      coingecko_id: 'pundi-aifx',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/PUNDIAI.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/PUNDIAI.svg'
        }],
      socials: {
        website: 'https://fx.pundi.ai',
        x: 'https://x.com/PundiAI'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'apundiai',
            chain_name: 'fxcore'
          },
          chain: {
            channel_id: 'channel-585'
          }
        }]
    },
    {
      description: 'The native staking token of the Function X',
      denom_units: [{
          denom: 'ibc/4925E6ABA571A44D2BE0286D2D29AF42A294D0FF2BB16490149A1B26EAD33729',
          exponent: 0,
          aliases: ['FX']
        }, {
          denom: 'WFX',
          exponent: 18
        }],
      base: 'ibc/4925E6ABA571A44D2BE0286D2D29AF42A294D0FF2BB16490149A1B26EAD33729',
      name: 'Function X',
      display: 'WFX',
      symbol: 'FX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
      },
      coingecko_id: 'fx-coin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
        }],
      socials: {
        website: 'https://fx.pundi.ai',
        x: 'https://x.com/PundiAI'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'FX',
            chain_name: 'fxcore'
          },
          chain: {
            channel_id: 'channel-585'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Haqq Network',
      denom_units: [{
          denom: 'ibc/5CF697413DE79A9340E8B77A278FEBF6ACD17CB22DAAF758841959A8D69A2859',
          exponent: 0,
          aliases: ['aISLM']
        }, {
          denom: 'ISLM',
          exponent: 18
        }],
      base: 'ibc/5CF697413DE79A9340E8B77A278FEBF6ACD17CB22DAAF758841959A8D69A2859',
      name: 'Islamic Coin',
      display: 'ISLM',
      symbol: 'ISLM',
      coingecko_id: 'islamic-coin',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg'
      },
      socials: {
        website: 'https://islamiccoin.net',
        x: 'https://x.com/islamic_coin'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'aISLM',
            chain_name: 'haqq'
          },
          chain: {
            channel_id: 'channel-632'
          }
        }]
    },
    {
      description: 'Deenar gold-backed stablecoin',
      denom_units: [{
          denom: 'ibc/CE55BE46567E059638E132226A8C7233FF256EE0B5E25BDBC789182DC6CD52B1',
          exponent: 0,
          aliases: ['erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE']
        }, {
          denom: 'DEEN',
          exponent: 6
        }],
      base: 'ibc/CE55BE46567E059638E132226A8C7233FF256EE0B5E25BDBC789182DC6CD52B1',
      name: 'Deenar',
      display: 'DEEN',
      address: '0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE',
      symbol: 'DEEN',
      type_asset: 'erc20',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE',
            chain_name: 'haqq'
          },
          chain: {
            channel_id: 'channel-632'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.svg'
      },
      socials: {
        website: 'https://deenar.com',
        x: 'https://x.com/DeenarGold'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.svg',
          theme: {
            circle: true
          }
        }]
    },
    {
      description: 'The native token of the Internet of Impacts of inter-connected networks, powered by IXO Protocol blockchains.',
      denom_units: [{
          denom: 'ibc/B2B5AEE174062FA7804AC95223D8169852F8F58962C51C66391C272C838258B7',
          exponent: 0,
          aliases: ['uixo']
        }, {
          denom: 'ixo',
          exponent: 6
        }],
      base: 'ibc/B2B5AEE174062FA7804AC95223D8169852F8F58962C51C66391C272C838258B7',
      name: 'IXO',
      display: 'ixo',
      symbol: 'IXO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
      },
      coingecko_id: 'ixo',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uixo',
            chain_name: 'impacthub'
          },
          chain: {
            channel_id: 'channel-204'
          }
        }]
    },
    {
      description: 'Injective is a decentralized exchange protocol that enables fast, secure, and fully decentralized trading of derivatives, futures, and spot markets.',
      denom_units: [{
          denom: 'ibc/6469BDA6F62C4F4B8F76629FA1E72A02A3D1DD9E2B22DDB3C3B2296DEAD29AB8',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/6469BDA6F62C4F4B8F76629FA1E72A02A3D1DD9E2B22DDB3C3B2296DEAD29AB8',
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
            channel_id: 'channel-1',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-220'
          }
        }]
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'ibc/74392C3C1F0A88C62C5FF0C77E444D8BBA11FAE3F7AC337891219BEF76ED0178',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'ibc/74392C3C1F0A88C62C5FF0C77E444D8BBA11FAE3F7AC337891219BEF76ED0178',
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
            channel_id: 'channel-1',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-220'
          }
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'ibc/723426A05EDCE0BAA4FDC47A022881CDA0F0BE8063BDA625155BA3BB424744E0',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'ibc/723426A05EDCE0BAA4FDC47A022881CDA0F0BE8063BDA625155BA3BB424744E0',
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
            channel_id: 'channel-1',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-220'
          }
        }]
    },
    {
      description: 'A receipt token for lent INJ issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/CF2927188866FEF274217FA353B726408815DA0851753321DE7E7F11047A2737',
          exponent: 0,
          aliases: ['inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f']
        }, {
          denom: 'nINJ',
          exponent: 18
        }],
      base: 'ibc/CF2927188866FEF274217FA353B726408815DA0851753321DE7E7F11047A2737',
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
            channel_id: 'channel-1',
            base_denom: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-220'
          }
        }]
    },
    {
      description: 'A receipt token for lent ATOM issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/FEF72C8A43A9A60B15EE7BD44BE87D5C44E9DBD071B7D5517F999B0F6CC2E5EE',
          exponent: 0,
          aliases: ['inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780']
        }, {
          denom: 'nATOM',
          exponent: 6
        }],
      base: 'ibc/FEF72C8A43A9A60B15EE7BD44BE87D5C44E9DBD071B7D5517F999B0F6CC2E5EE',
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
            channel_id: 'channel-1',
            base_denom: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-220'
          }
        }]
    },
    {
      description: 'A receipt token for lent WETH issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/BB027877671118BE5B1424F303B9D58FB500478B5EB7D16909B72A28029D3520',
          exponent: 0,
          aliases: ['inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt']
        }, {
          denom: 'nWETH',
          exponent: 18
        }],
      base: 'ibc/BB027877671118BE5B1424F303B9D58FB500478B5EB7D16909B72A28029D3520',
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
            channel_id: 'channel-1',
            base_denom: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-220'
          }
        }]
    },
    {
      description: 'A receipt token for lent USDT issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/57535F8B5C6B26D4459F48C3622E735DEB1AAB38AE8ABA6F951A782546434AF6',
          exponent: 0,
          aliases: ['inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s']
        }, {
          denom: 'nUSDT',
          exponent: 6
        }],
      base: 'ibc/57535F8B5C6B26D4459F48C3622E735DEB1AAB38AE8ABA6F951A782546434AF6',
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
            channel_id: 'channel-1',
            base_denom: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-220'
          }
        }]
    },
    {
      description: 'A receipt token for lent TIA issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/364AF8695E6F89645850CD93737DF602E34317467B8B6302EC6D71C811007314',
          exponent: 0,
          aliases: ['inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv']
        }, {
          denom: 'nTIA',
          exponent: 6
        }],
      base: 'ibc/364AF8695E6F89645850CD93737DF602E34317467B8B6302EC6D71C811007314',
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
            channel_id: 'channel-1',
            base_denom: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-220'
          }
        }]
    },
    {
      description: 'The native token of INTENTO',
      denom_units: [{
          denom: 'ibc/DC1EF3EA03CD7F2226981D610335C3E62E3DD868A1B83EB017CE294E29C8D473',
          exponent: 0,
          aliases: ['uinto']
        }, {
          denom: 'into',
          exponent: 6
        }],
      base: 'ibc/DC1EF3EA03CD7F2226981D610335C3E62E3DD868A1B83EB017CE294E29C8D473',
      name: 'Intento',
      display: 'into',
      symbol: 'INTO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/intento/images/into.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/intento/images/into.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/intento/images/into.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/intento/images/into.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uinto',
            chain_name: 'intento'
          },
          chain: {
            channel_id: 'channel-1492'
          }
        }]
    },
    {
      description: 'The IRIS token is the native governance token for the IrisNet chain.',
      denom_units: [{
          denom: 'ibc/12DA42304EE1CE96071F712AA4D58186AD11C3165C0DCDA71E017A54F3935E66',
          exponent: 0,
          aliases: ['uiris']
        }, {
          denom: 'iris',
          exponent: 6
        }],
      base: 'ibc/12DA42304EE1CE96071F712AA4D58186AD11C3165C0DCDA71E017A54F3935E66',
      name: 'IRISnet',
      display: 'iris',
      symbol: 'IRIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg'
      },
      coingecko_id: 'iris-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'uiris',
            chain_name: 'irisnet'
          },
          chain: {
            channel_id: 'channel-182'
          }
        }]
    },
    {
      description: 'The native staking and governance token of Joltify',
      denom_units: [{
          denom: 'ibc/9B76DFC21CF8F4DF5B8514CE82D2CCE79415C4F8525E04509BB48B487CB213DE',
          exponent: 0,
          aliases: ['ujolt']
        }, {
          denom: 'jolt',
          exponent: 6
        }],
      base: 'ibc/9B76DFC21CF8F4DF5B8514CE82D2CCE79415C4F8525E04509BB48B487CB213DE',
      name: 'Joltify',
      display: 'jolt',
      symbol: 'JOLT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/joltify/images/jolt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/joltify/images/jolt.svg'
        }],
      coingecko_id: 'joltify',
      keywords: ['staking'],
      socials: {
        website: 'https://www.joltify.io/',
        x: 'https://x.com/joltify_finance'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'ujolt',
            chain_name: 'joltify'
          },
          chain: {
            channel_id: 'channel-866'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/CDAB23DA5495290063363BD1C3499E26189036302DC689985A7E23F8DF8D8DB0',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ibc/CDAB23DA5495290063363BD1C3499E26189036302DC689985A7E23F8DF8D8DB0',
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
            channel_id: 'channel-1',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-207'
          }
        }]
    },
    {
      description: 'Kava is a decentralized finance (DeFi) platform that provides a range of financial services, including lending, borrowing, and stablecoins, leveraging the Cosmos and Ethereum ecosystems.',
      denom_units: [{
          denom: 'ibc/8870C4203CEBF2279BA065E3DE95FC3F8E05A4A93424E7DC707A21514BE353A0',
          exponent: 0,
          aliases: ['ukava']
        }, {
          denom: 'kava',
          exponent: 6
        }],
      base: 'ibc/8870C4203CEBF2279BA065E3DE95FC3F8E05A4A93424E7DC707A21514BE353A0',
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
            channel_id: 'channel-0',
            base_denom: 'ukava',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-277'
          }
        }]
    },
    {
      description: 'Governance token of Kava Lend Protocol',
      denom_units: [{
          denom: 'ibc/752AC6B389EB9F16013C07987A3A04203EABABEB811F0026A24A5A29CF014366',
          exponent: 0,
          aliases: ['hard']
        }, {
          denom: 'HARD',
          exponent: 6
        }],
      base: 'ibc/752AC6B389EB9F16013C07987A3A04203EABABEB811F0026A24A5A29CF014366',
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
            channel_id: 'channel-0',
            base_denom: 'hard',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-277'
          }
        }]
    },
    {
      description: 'Governance token of Kava Swap Protocol',
      denom_units: [{
          denom: 'ibc/58E6660E723E3D6854A1190E2516AF71280F0B20510ABA1A13456F5D204F6D7D',
          exponent: 0,
          aliases: ['swp']
        }, {
          denom: 'SWP',
          exponent: 6
        }],
      base: 'ibc/58E6660E723E3D6854A1190E2516AF71280F0B20510ABA1A13456F5D204F6D7D',
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
            channel_id: 'channel-0',
            base_denom: 'swp',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-277'
          }
        }]
    },
    {
      description: 'The native stablecoin of Kava',
      denom_units: [{
          denom: 'ibc/621EBC891F642B44778FD0E9DACBBC14755280C897DD010AA104889C3FDCED06',
          exponent: 0,
          aliases: ['usdx']
        }, {
          denom: 'USDX',
          exponent: 6
        }],
      base: 'ibc/621EBC891F642B44778FD0E9DACBBC14755280C897DD010AA104889C3FDCED06',
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
            channel_id: 'channel-0',
            base_denom: 'usdx',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-277'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/F04D72CF9B5D9C849BB278B691CDFA2241813327430EC9CDC83F8F4CA4CDC2B0',
          exponent: 0,
          aliases: ['erc20/tether/usdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      base: 'ibc/F04D72CF9B5D9C849BB278B691CDFA2241813327430EC9CDC83F8F4CA4CDC2B0',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      coingecko_id: 'tether',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'erc20/tether/usdt',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-277'
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
      description: 'The native token of Ki Chain',
      denom_units: [{
          denom: 'ibc/533E5FFC606FD11B8DCA309C66AFD6A1F046EF784A73F323A332CF6823F0EA87',
          exponent: 0,
          aliases: ['uxki']
        }, {
          denom: 'xki',
          exponent: 6
        }],
      base: 'ibc/533E5FFC606FD11B8DCA309C66AFD6A1F046EF784A73F323A332CF6823F0EA87',
      name: 'Ki',
      display: 'xki',
      symbol: 'XKI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg'
      },
      coingecko_id: 'ki',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uxki',
            chain_name: 'kichain'
          },
          chain: {
            channel_id: 'channel-223'
          }
        }]
    },
    {
      description: 'The native token of kopi',
      denom_units: [{
          denom: 'ibc/E1BB6871F62146B83074441294F1FECC0829D08D79DC25D86A1962ABAC9B73B8',
          exponent: 0,
          aliases: ['ukopi']
        }, {
          denom: 'XKP',
          exponent: 6
        }],
      base: 'ibc/E1BB6871F62146B83074441294F1FECC0829D08D79DC25D86A1962ABAC9B73B8',
      name: 'XKP',
      display: 'XKP',
      symbol: 'XKP',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/kopi.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/kopi.svg'
        }],
      keywords: [
        'dex',
        'mm',
        'staking',
        'automations'
      ],
      socials: {
        website: 'https://kopi.money/',
        discord: 'https://discord.gg/kopi-money',
        x: 'https://x.com/kopi_money'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'ukopi',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-1351'
          }
        }]
    },
    {
      description: 'A MM deposit receipt of the Stablecoin native to the Kopi blockchain',
      denom_units: [{
          denom: 'ibc/31A8DBF578862EB2AD9458CD0F03510D8BEE8BBA839FE70F4B5C11477B86C599',
          exponent: 0,
          aliases: ['uckusd']
        }, {
          denom: 'ckUSD',
          exponent: 6
        }],
      base: 'ibc/31A8DBF578862EB2AD9458CD0F03510D8BEE8BBA839FE70F4B5C11477B86C599',
      name: 'ckUSD',
      display: 'ckUSD',
      symbol: 'CKUSD',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/ckusd.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/ckusd.svg'
        }],
      keywords: ['dex', 'mm'],
      socials: {
        discord: 'https://discord.gg/kopi-money',
        x: 'https://x.com/kopi_money'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'uckusd',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-1351'
          }
        }]
    },
    {
      description: 'A MM deposit receipt of the Stablecoin USDC from noble Chain',
      denom_units: [{
          denom: 'ibc/42B3BA076434E9BB58ACA07F8C0019857548257F2CFCB1112C059455E87993E0',
          exponent: 0,
          aliases: ['ucusdc']
        }, {
          denom: 'cUSDC',
          exponent: 6
        }],
      base: 'ibc/42B3BA076434E9BB58ACA07F8C0019857548257F2CFCB1112C059455E87993E0',
      name: 'cUSDC',
      display: 'cUSDC',
      symbol: 'CUSDC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/cusdc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/cusdc.svg'
        }],
      keywords: ['dex', 'mm'],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'ucusdc',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-1351'
          }
        }]
    },
    {
      description: 'A MM deposit receipt of the Stablecoin USDT from Injective Chain',
      denom_units: [{
          denom: 'ibc/BC1000468BB8D49034565FE4855DDDDB711ACD319C4A5B8B034618E4CF59C2B8',
          exponent: 0,
          aliases: ['ucusdtinj']
        }, {
          denom: 'cUSDT.inj',
          exponent: 6
        }],
      base: 'ibc/BC1000468BB8D49034565FE4855DDDDB711ACD319C4A5B8B034618E4CF59C2B8',
      name: 'cUSDT.inj',
      display: 'cUSDT.inj',
      symbol: 'cUSDT.inj',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/cusdt.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/cusdt.svg'
        }],
      keywords: ['dex', 'mm'],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'ucusdtinj',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-1351'
          }
        }]
    },
    {
      description: 'arbitrage receipt token of cUSDT',
      denom_units: [{
          denom: 'ibc/DC800105E0C6997C513D5572F4BECB8810C20F5D8BC3FA32F6B86DBAA5F5EC00',
          exponent: 0,
          aliases: ['uasusdtinj']
        }, {
          denom: 'asusdtinj',
          exponent: 6
        }],
      base: 'ibc/DC800105E0C6997C513D5572F4BECB8810C20F5D8BC3FA32F6B86DBAA5F5EC00',
      name: 'asUSDT.inj',
      display: 'asusdtinj',
      symbol: 'asUSDT.inj',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/asusdt.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/asusdt.svg'
        }],
      keywords: ['dex', 'mm'],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'uasusdtinj',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-1351'
          }
        }]
    },
    {
      description: 'arbitrage receipt token of cUSDC',
      denom_units: [{
          denom: 'ibc/0D9438F920A4D000D6FD9D37BCB874D8142BA6E56B9967E33E60D0999C7AD014',
          exponent: 0,
          aliases: ['uasusdc']
        }, {
          denom: 'asUSDC',
          exponent: 6
        }],
      base: 'ibc/0D9438F920A4D000D6FD9D37BCB874D8142BA6E56B9967E33E60D0999C7AD014',
      name: 'asUSDC',
      display: 'asUSDC',
      symbol: 'ASUSDC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/asusdc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/asusdc.svg'
        }],
      keywords: ['dex', 'mm'],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'uasusdc',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-1351'
          }
        }]
    },
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      denom_units: [{
          denom: 'ibc/4CC44260793F84006656DD868E017578F827A492978161DA31D7572BCB3F4289',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/4CC44260793F84006656DD868E017578F827A492978161DA31D7572BCB3F4289',
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
            channel_id: 'channel-0',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-343'
          }
        }]
    },
    {
      description: 'Lava Network is a modular data network designed to provide fast, reliable, and scalable access to blockchain data for developers and users.',
      denom_units: [{
          denom: 'ibc/DA8A15E8BC3962CC433F2B4CA0B3233723DE4A1A68B17DB85C63ECC5B0F83F65',
          exponent: 0,
          aliases: ['ulava']
        }, {
          denom: 'lava',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/DA8A15E8BC3962CC433F2B4CA0B3233723DE4A1A68B17DB85C63ECC5B0F83F65',
      name: 'Lava',
      coingecko_id: 'lava-network',
      display: 'lava',
      symbol: 'LAVA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava.png'
        }],
      keywords: [
        'modular',
        'data',
        'data access',
        'rpc',
        'staking',
        'dual staking',
        'indexing',
        'incentivized public rpc'
      ],
      socials: {
        website: 'https://lavanet.xyz',
        x: 'https://x.com/lavanetxyz'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'ulava',
            chain_name: 'lava'
          },
          chain: {
            channel_id: 'channel-969'
          }
        }]
    },
    {
      description: 'LIKE is the native staking and governance token of LikeCoin chain, a Decentralized Publishing Infrastructure to empower content ownership, authenticity, and provenance.',
      denom_units: [{
          denom: 'ibc/1D5826F7EDE6E3B13009FEF994DC9CAAF15CC24CA7A9FF436FFB2E56FD72F54F',
          exponent: 0,
          aliases: ['nanolike']
        }, {
          denom: 'like',
          exponent: 9
        }],
      base: 'ibc/1D5826F7EDE6E3B13009FEF994DC9CAAF15CC24CA7A9FF436FFB2E56FD72F54F',
      name: 'LikeCoin',
      display: 'like',
      symbol: 'LIKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'nanolike',
            chain_name: 'likecoin'
          },
          chain: {
            channel_id: 'channel-217'
          }
        }]
    },
    {
      description: 'LOM is the native fee token of Lombard Ledger',
      denom_units: [{
          denom: 'ibc/CA894919487EB2CFED8A23618B2291CF014F4DF09E4FD23A574817DC9018EE88',
          exponent: 0,
          aliases: ['ulom']
        }, {
          denom: 'lom',
          exponent: 6
        }],
      base: 'ibc/CA894919487EB2CFED8A23618B2291CF014F4DF09E4FD23A574817DC9018EE88',
      name: 'Lom',
      display: 'lom',
      symbol: 'LOM',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ulom',
            chain_name: 'lombardledger'
          },
          chain: {
            channel_id: 'channel-1340'
          }
        }]
    },
    {
      description: 'ustake is a synthetic token to implement a PoA with BFT features over CometBFT',
      denom_units: [{
          denom: 'ibc/5DB06CF0697F085EA4A630A9635819C5036299E9EFEFAE8402CF36D6014C04E7',
          exponent: 0,
          aliases: ['ustake']
        }],
      base: 'ibc/5DB06CF0697F085EA4A630A9635819C5036299E9EFEFAE8402CF36D6014C04E7',
      name: 'ustake',
      display: 'ustake',
      symbol: 'USTAKE',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ustake',
            chain_name: 'lombardledger'
          },
          chain: {
            channel_id: 'channel-1340'
          }
        }]
    },
    {
      description: 'Native token of the Lum Network',
      denom_units: [{
          denom: 'ibc/3B87FAEE2F62BF291AE771D9EC3A8894A4533F3E2872592F96FEDFDB97680EC1',
          exponent: 0,
          aliases: ['ulum']
        }, {
          denom: 'lum',
          exponent: 6
        }],
      base: 'ibc/3B87FAEE2F62BF291AE771D9EC3A8894A4533F3E2872592F96FEDFDB97680EC1',
      name: 'Lum',
      display: 'lum',
      symbol: 'LUM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg'
      },
      coingecko_id: 'lum-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'ulum',
            chain_name: 'lumnetwork'
          },
          chain: {
            channel_id: 'channel-566'
          }
        }]
    },
    {
      description: 'The native token of MANTRA',
      denom_units: [{
          denom: 'ibc/30DE434D61B6C6F0E3132FE1F2413C76D2EBA63B3E18A211C4CD192A5F5580F1',
          exponent: 0,
          aliases: ['uom']
        }, {
          denom: 'om',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/30DE434D61B6C6F0E3132FE1F2413C76D2EBA63B3E18A211C4CD192A5F5580F1',
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
            channel_id: 'channel-3',
            base_denom: 'uom',
            chain_name: 'mantrachain'
          },
          chain: {
            channel_id: 'channel-1252'
          }
        }]
    },
    {
      description: 'The native token of Namada.',
      denom_units: [{
          denom: 'ibc/0594B847BE2E5B592E0F726E4AC5B73CD1D12AB1D45466B5C798C88D5AD27142',
          exponent: 0,
          aliases: ['unam']
        }, {
          denom: 'nam',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/0594B847BE2E5B592E0F726E4AC5B73CD1D12AB1D45466B5C798C88D5AD27142',
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
            channel_id: 'channel-2',
            base_denom: 'unam',
            chain_name: 'namada'
          },
          chain: {
            channel_id: 'channel-1317'
          }
        }]
    },
    {
      description: 'Neutron is a smart contract blockchain within the Cosmos ecosystem, leveraging the Cosmos Hub\'s security to provide cross-chain DeFi applications.',
      denom_units: [{
          denom: 'ibc/0025F8A87464A471E66B234C4F93AEC5B4DA3D42D7986451A059273426290DD5',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/0025F8A87464A471E66B234C4F93AEC5B4DA3D42D7986451A059273426290DD5',
      name: 'Neutron',
      display: 'ntrn',
      symbol: 'NTRN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
      },
      coingecko_id: 'neutron-3',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://neutron.org/',
        x: 'https://x.com/Neutron_org'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-569'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/47D6FC41B4C45A9F47C045755E07C839EB12F4ACCEB39C74E9959C0C0811EF11',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/47D6FC41B4C45A9F47C045755E07C839EB12F4ACCEB39C74E9959C0C0811EF11',
      name: 'Bitcosmos',
      display: 'bitcosmos',
      symbol: 'BTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-569'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/ABB481A12EADB23AF90AAADF4F722B86E3A87A0D1E8FEBD1720836AD353E703E',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/ABB481A12EADB23AF90AAADF4F722B86E3A87A0D1E8FEBD1720836AD353E703E',
      name: 'wtf',
      display: 'wtf',
      symbol: 'WTF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-569'
          }
        }]
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/BA7024C8DD092F2DDC83D1886BDA94102396C46DF6D7A478CFA0138BAFE811D7',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/BA7024C8DD092F2DDC83D1886BDA94102396C46DF6D7A478CFA0138BAFE811D7',
      name: 'boy',
      display: 'boy',
      symbol: 'BOY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-569'
          }
        }]
    },
    {
      description: 'The permissioned staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/7AED338D55DDE4CECFD35253E6349D7571B66897C590F75B6420C854B20DA692',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/7AED338D55DDE4CECFD35253E6349D7571B66897C590F75B6420C854B20DA692',
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
            channel_id: 'channel-4',
            base_denom: 'ustake',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-536'
          }
        }]
    },
    {
      description: 'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [{
          denom: 'ibc/63B7FB38B505DE63FC5F031B9E4AD6BF9FED63A36655F83E115A86CDEEA66826',
          exponent: 0,
          aliases: ['ufrienzies']
        }, {
          denom: 'frienzies',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/63B7FB38B505DE63FC5F031B9E4AD6BF9FED63A36655F83E115A86CDEEA66826',
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
            channel_id: 'channel-4',
            base_denom: 'ufrienzies',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-536'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/9AD012273BA6B6C2E7B88BFFFA984E58C0447A16877C493C617813634AB833DF',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/9AD012273BA6B6C2E7B88BFFFA984E58C0447A16877C493C617813634AB833DF',
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
            channel_id: 'channel-4',
            base_denom: 'ausdy',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-536'
          }
        }]
    },
    {
      description: 'USDN token',
      denom_units: [{
          denom: 'ibc/4EAD1546F46B1BB2B4D67FCDBFFF0FCD83D53A7A2EA533F1E783727DAA32CF98',
          exponent: 0,
          aliases: ['uusdn']
        }, {
          denom: 'usdn',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/4EAD1546F46B1BB2B4D67FCDBFFF0FCD83D53A7A2EA533F1E783727DAA32CF98',
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
            channel_id: 'channel-4',
            base_denom: 'uusdn',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-536'
          }
        }]
    },
    {
      description: 'OmniFlix is a decentralized media platform that enables content creators to distribute, monetize, and manage their digital content using blockchain technology.',
      denom_units: [{
          denom: 'ibc/15B4D31D457B80DD46CA46F6B89FD6BB15CB92FE7BBF8763947417537C3A4C2E',
          exponent: 0,
          aliases: ['uflix']
        }, {
          denom: 'flix',
          exponent: 6
        }],
      base: 'ibc/15B4D31D457B80DD46CA46F6B89FD6BB15CB92FE7BBF8763947417537C3A4C2E',
      name: 'Flix',
      display: 'flix',
      symbol: 'FLIX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg'
      },
      coingecko_id: 'omniflix-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg'
        }],
      socials: {
        website: 'https://omniflix.network/',
        x: 'https://x.com/OmniFlixNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'uflix',
            chain_name: 'omniflixhub'
          },
          chain: {
            channel_id: 'channel-306'
          }
        }]
    },
    {
      description: 'The native token of Oraichain',
      denom_units: [{
          denom: 'ibc/4846F4382B7843861B6C5051134397359C8C94B547E8EA43EFAFEF4E5F7B7625',
          exponent: 0,
          aliases: ['orai']
        }, {
          denom: 'ORAI',
          exponent: 6
        }],
      base: 'ibc/4846F4382B7843861B6C5051134397359C8C94B547E8EA43EFAFEF4E5F7B7625',
      name: 'Oraichain',
      display: 'ORAI',
      symbol: 'ORAI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-token.svg'
      },
      coingecko_id: 'oraichain-token',
      socials: {
        website: 'https://orai.io/',
        x: 'https://x.com/oraichain'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-token.svg',
          theme: {
            circle: true
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg',
          theme: {
            circle: false,
            dark_mode: true
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.svg',
          theme: {
            circle: false,
            dark_mode: false
          }
        }
      ],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'orai',
            chain_name: 'oraichain'
          },
          chain: {
            channel_id: 'channel-301'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/14F9BC3E44B8A9C1BE1FB08980FAB87034C9905EF17CF2F5008FC085218811CC',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/14F9BC3E44B8A9C1BE1FB08980FAB87034C9905EF17CF2F5008FC085218811CC',
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
            channel_id: 'channel-0',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-141'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/5BB694D466CCF099EF73F165F88472AF51D9C4991EAA42BD1168C5304712CC0D',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/5BB694D466CCF099EF73F165F88472AF51D9C4991EAA42BD1168C5304712CC0D',
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
            channel_id: 'channel-0',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-141'
          }
        }]
    },
    {
      description: 'PAXI is the native token of the Paxi blockchain.',
      denom_units: [{
          denom: 'ibc/9AB9994A232592CCAE28FF4ADA5FF2C62B58C13595372C906EB45999694F0A4E',
          exponent: 0,
          aliases: ['upaxi']
        }, {
          denom: 'PAXI',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/9AB9994A232592CCAE28FF4ADA5FF2C62B58C13595372C906EB45999694F0A4E',
      name: 'Paxi',
      display: 'PAXI',
      symbol: 'PAXI',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/paxi/images/paxi.png',
          theme: {
            circle: false
          }
        }],
      keywords: ['staking'],
      socials: {
        website: 'https://paxinet.io'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'upaxi',
            chain_name: 'paxi'
          },
          chain: {
            channel_id: 'channel-1566'
          }
        }]
    },
    {
      description: 'Persistence One is building a Bitcoin Cross-chain Swaps solution, enabling fast, zero-slippage secure swaps across Bitcoin Layer 2s.',
      denom_units: [{
          denom: 'ibc/81D08BC39FB520EBD948CF017910DD69702D34BF5AC160F76D3B5CFC444EBCE0',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      base: 'ibc/81D08BC39FB520EBD948CF017910DD69702D34BF5AC160F76D3B5CFC444EBCE0',
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
            channel_id: 'channel-24',
            base_denom: 'uxprt',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-190'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Planq Network',
      denom_units: [{
          denom: 'ibc/1452F322F7B459CB7EC111AD5BD2404552B011375002C8C85BA615A95B9121CF',
          exponent: 0,
          aliases: ['aplanq']
        }, {
          denom: 'planq',
          exponent: 18
        }],
      base: 'ibc/1452F322F7B459CB7EC111AD5BD2404552B011375002C8C85BA615A95B9121CF',
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
            channel_id: 'channel-2',
            base_denom: 'aplanq',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-446'
          }
        }]
    },
    {
      description: 'The token of Source Protocol bridged from BSC.',
      denom_units: [{
          denom: 'ibc/E991A98232BC057DF4C466958FC5D4CB89EFC4323525EF791CB53EC597EBF8D1',
          exponent: 0,
          aliases: ['erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09']
        }, {
          denom: 'srcx',
          exponent: 9
        }],
      base: 'ibc/E991A98232BC057DF4C466958FC5D4CB89EFC4323525EF791CB53EC597EBF8D1',
      name: 'Source Token',
      display: 'srcx',
      symbol: 'SRCX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-446'
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
          denom: 'ibc/3312E6687E7D4D8EA712AF24C8789B01266F1E793C833FC4BE611C156BAA2480',
          exponent: 0,
          aliases: ['erc20/0xF630B96760B91f6FCbE8b3C24f2786AcA3D03648']
        }, {
          denom: 'anubi',
          exponent: 18
        }],
      base: 'ibc/3312E6687E7D4D8EA712AF24C8789B01266F1E793C833FC4BE611C156BAA2480',
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
            channel_id: 'channel-2',
            base_denom: 'erc20/0xF630B96760B91f6FCbE8b3C24f2786AcA3D03648',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-446'
          }
        }]
    },
    {
      description: 'The token of Astonic.',
      denom_units: [{
          denom: 'ibc/2D14102B51A74D39B73147C7CCDAE0EF746E9580381269B3D4A8A0C9B59E0299',
          exponent: 0,
          aliases: ['erc20/0x8F4d86ABa1b47832C46f11e0fFD0F7aDa4498345']
        }, {
          denom: 'astonic',
          exponent: 18
        }],
      base: 'ibc/2D14102B51A74D39B73147C7CCDAE0EF746E9580381269B3D4A8A0C9B59E0299',
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
            channel_id: 'channel-2',
            base_denom: 'erc20/0x8F4d86ABa1b47832C46f11e0fFD0F7aDa4498345',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-446'
          }
        }]
    },
    {
      description: 'Astonic USD (aUSD) is a stable asset pegged to the US Dollar.',
      denom_units: [{
          denom: 'ibc/3DBE9FBE803AB0DAF54225C9007CE88821ED4CBB2EAB7407298C8CE7124B7057',
          exponent: 0,
          aliases: ['erc20/0xA2871B267a7d888F830251F6B4D9d3DFf184995a']
        }, {
          denom: 'ausd',
          exponent: 18
        }],
      base: 'ibc/3DBE9FBE803AB0DAF54225C9007CE88821ED4CBB2EAB7407298C8CE7124B7057',
      name: 'Astonic USD',
      display: 'ausd',
      symbol: 'aUSD',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'erc20/0xA2871B267a7d888F830251F6B4D9d3DFf184995a',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-446'
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
          denom: 'ibc/7D36EF3078DC7D02F9406C57FDDC35385DDF9ABB3215CC4C93C6849D07D9D893',
          exponent: 0,
          aliases: ['erc20/0xd5be2932FEbD73019ba1d5d97DFC35E1Ab09E501']
        }, {
          denom: 'aeur',
          exponent: 18
        }],
      base: 'ibc/7D36EF3078DC7D02F9406C57FDDC35385DDF9ABB3215CC4C93C6849D07D9D893',
      name: 'Astonic EUR',
      display: 'aeur',
      symbol: 'aEUR',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'erc20/0xd5be2932FEbD73019ba1d5d97DFC35E1Ab09E501',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-446'
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
          denom: 'ibc/07F46D29F047B6ED8F54EE364466C600E99863B47CE030D3B02EF389C47F79D2',
          exponent: 0,
          aliases: ['erc20/0x240642C6f69878A0b199065f25EDf82023BC59ce']
        }, {
          denom: 'abrl',
          exponent: 18
        }],
      base: 'ibc/07F46D29F047B6ED8F54EE364466C600E99863B47CE030D3B02EF389C47F79D2',
      name: 'Astonic BRL',
      display: 'abrl',
      symbol: 'aBRL',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'erc20/0x240642C6f69878A0b199065f25EDf82023BC59ce',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-446'
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
      description: 'The native governance and staking token of the Point network',
      denom_units: [{
          denom: 'ibc/72132A48050500C99EDE86468719A5CE729A295F5F785E8E40049ACE6DA4F8B9',
          exponent: 0,
          aliases: ['apoint']
        }, {
          denom: 'point',
          exponent: 18
        }],
      base: 'ibc/72132A48050500C99EDE86468719A5CE729A295F5F785E8E40049ACE6DA4F8B9',
      name: 'Point',
      display: 'point',
      symbol: 'POINT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'apoint',
            chain_name: 'point'
          },
          chain: {
            channel_id: 'channel-404'
          }
        }]
    },
    {
      description: 'The native token of PRYZM',
      denom_units: [{
          denom: 'ibc/6157A428CE89ABB9CD524CFA613862AED49BAC4AE104B2B867C4CB1EA506501F',
          exponent: 0,
          aliases: ['upryzm']
        }, {
          denom: 'pryzm',
          exponent: 6
        }],
      base: 'ibc/6157A428CE89ABB9CD524CFA613862AED49BAC4AE104B2B867C4CB1EA506501F',
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
      coingecko_id: 'pryzm',
      socials: {
        website: 'https://pryzm.zone/',
        x: 'https://x.com/Pryzm_Zone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'upryzm',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/36947DC248616ACD40A21D6AFE7B8AF1B676DAA2D2C24B39AAE2C91CB04F8A27',
          exponent: 0,
          aliases: ['p:uatom:30Sep2024']
        }, {
          denom: 'pATOM30Sep2024',
          exponent: 6
        }],
      base: 'ibc/36947DC248616ACD40A21D6AFE7B8AF1B676DAA2D2C24B39AAE2C91CB04F8A27',
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
            channel_id: 'channel-0',
            base_denom: 'p:uatom:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/52DF4EAEAAA0C0DA580336865799D1064B0E93EFE4EA8E862C61466866B2FB63',
          exponent: 0,
          aliases: ['p:uatom:31Dec2024']
        }, {
          denom: 'pATOM31Dec2024',
          exponent: 6
        }],
      base: 'ibc/52DF4EAEAAA0C0DA580336865799D1064B0E93EFE4EA8E862C61466866B2FB63',
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
            channel_id: 'channel-0',
            base_denom: 'p:uatom:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/0D8AD6BE3128DD5B380D59E362059F28A653A1680F37E55656BC6810F7BB918C',
          exponent: 0,
          aliases: ['p:uatom:31Mar2025']
        }, {
          denom: 'pATOM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/0D8AD6BE3128DD5B380D59E362059F28A653A1680F37E55656BC6810F7BB918C',
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
            channel_id: 'channel-0',
            base_denom: 'p:uatom:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/3B4DB1100A8F4FD3C59C5F08FF8B908441ACD4DEE9B41EF85F75E47BCAC65C4A',
          exponent: 0,
          aliases: ['p:uatom:30Jun2025']
        }, {
          denom: 'pATOM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/3B4DB1100A8F4FD3C59C5F08FF8B908441ACD4DEE9B41EF85F75E47BCAC65C4A',
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
            channel_id: 'channel-0',
            base_denom: 'p:uatom:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/73DCC8CFF4A91E1FFFE5B60BF59B56FC4B40D2792C5BA42AAB1204F54521D48D',
          exponent: 0,
          aliases: ['p:uatom:30Sep2025']
        }, {
          denom: 'pATOM30Sep2025',
          exponent: 6
        }],
      base: 'ibc/73DCC8CFF4A91E1FFFE5B60BF59B56FC4B40D2792C5BA42AAB1204F54521D48D',
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
            channel_id: 'channel-0',
            base_denom: 'p:uatom:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/40AAA4B946D382214676FBCFDDD6FC9DF72935F4FCB7584F76FE0476E7851604',
          exponent: 0,
          aliases: ['p:uatom:31Dec2025']
        }, {
          denom: 'pATOM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/40AAA4B946D382214676FBCFDDD6FC9DF72935F4FCB7584F76FE0476E7851604',
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
            channel_id: 'channel-0',
            base_denom: 'p:uatom:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/85E5A32131D32F12CF5F4C99C36DD2960AF8C3A4C4A2F2DE250CD39538BD2C67',
          exponent: 0,
          aliases: ['p:uatom:31Dec2026']
        }, {
          denom: 'pATOM31Dec2026',
          exponent: 6
        }],
      base: 'ibc/85E5A32131D32F12CF5F4C99C36DD2960AF8C3A4C4A2F2DE250CD39538BD2C67',
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
            channel_id: 'channel-0',
            base_denom: 'p:uatom:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/17D05C514F4486B697A79B8FEAF93D29AF78E2B16F675373D8B68F8048BD6AEC',
          exponent: 0,
          aliases: ['p:uosmo:30Sep2024']
        }, {
          denom: 'pOSMO30Sep2024',
          exponent: 6
        }],
      base: 'ibc/17D05C514F4486B697A79B8FEAF93D29AF78E2B16F675373D8B68F8048BD6AEC',
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
            channel_id: 'channel-0',
            base_denom: 'p:uosmo:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/3DBB730F9B8777A6CC46EFAB84CE2A2D29914853229968EA37BD7B5639BBEED9',
          exponent: 0,
          aliases: ['p:uosmo:31Dec2024']
        }, {
          denom: 'pOSMO31Dec2024',
          exponent: 6
        }],
      base: 'ibc/3DBB730F9B8777A6CC46EFAB84CE2A2D29914853229968EA37BD7B5639BBEED9',
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
            channel_id: 'channel-0',
            base_denom: 'p:uosmo:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/04DAD382745B7E21A32FC78943C45FAFF26805FC3D203BBDE677596572D3AAFB',
          exponent: 0,
          aliases: ['p:uosmo:31Mar2025']
        }, {
          denom: 'pOSMO31Mar2025',
          exponent: 6
        }],
      base: 'ibc/04DAD382745B7E21A32FC78943C45FAFF26805FC3D203BBDE677596572D3AAFB',
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
            channel_id: 'channel-0',
            base_denom: 'p:uosmo:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/94363A11FD0BE9E52F0EE1BE23EBFBCCB406B6EECBB0189EE218467E1DE3EDBA',
          exponent: 0,
          aliases: ['p:uosmo:30Jun2025']
        }, {
          denom: 'pOSMO30Jun2025',
          exponent: 6
        }],
      base: 'ibc/94363A11FD0BE9E52F0EE1BE23EBFBCCB406B6EECBB0189EE218467E1DE3EDBA',
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
            channel_id: 'channel-0',
            base_denom: 'p:uosmo:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/6E4A0A17146E39482CDCB741FCC220E55A3396F0E323602AFE14A61D42E3D745',
          exponent: 0,
          aliases: ['p:uosmo:30Sep2025']
        }, {
          denom: 'pOSMO30Sep2025',
          exponent: 6
        }],
      base: 'ibc/6E4A0A17146E39482CDCB741FCC220E55A3396F0E323602AFE14A61D42E3D745',
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
            channel_id: 'channel-0',
            base_denom: 'p:uosmo:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/5D268052990561A49F757B29F67444EDF4B70568118C4020801FC3944DCA2FD7',
          exponent: 0,
          aliases: ['p:uosmo:31Dec2025']
        }, {
          denom: 'pOSMO31Dec2025',
          exponent: 6
        }],
      base: 'ibc/5D268052990561A49F757B29F67444EDF4B70568118C4020801FC3944DCA2FD7',
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
            channel_id: 'channel-0',
            base_denom: 'p:uosmo:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/9C2BF746073A7FF4B5502D5E777BB3F75C570395E36D7F0993AE1100D9A5FDD6',
          exponent: 0,
          aliases: ['p:uosmo:31Dec2026']
        }, {
          denom: 'pOSMO31Dec2026',
          exponent: 6
        }],
      base: 'ibc/9C2BF746073A7FF4B5502D5E777BB3F75C570395E36D7F0993AE1100D9A5FDD6',
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
            channel_id: 'channel-0',
            base_denom: 'p:uosmo:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/1DE3B002B20E17274034238F54B2D5370F3676B1BE16C6C917C63F19F9FC0888',
          exponent: 0,
          aliases: ['p:inj:30Sep2024']
        }, {
          denom: 'pINJ30Sep2024',
          exponent: 18
        }],
      base: 'ibc/1DE3B002B20E17274034238F54B2D5370F3676B1BE16C6C917C63F19F9FC0888',
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
            channel_id: 'channel-0',
            base_denom: 'p:inj:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/D933AF16D237EDDB23838951761A07A1BFF3B73E2F0E453B3C09757BBCE9C77B',
          exponent: 0,
          aliases: ['p:inj:31Dec2024']
        }, {
          denom: 'pINJ31Dec2024',
          exponent: 18
        }],
      base: 'ibc/D933AF16D237EDDB23838951761A07A1BFF3B73E2F0E453B3C09757BBCE9C77B',
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
            channel_id: 'channel-0',
            base_denom: 'p:inj:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/4B4BBFE7FA7FABD4DAE5593AEF5A6204B94EEC848B14E102EE72B6F81617080C',
          exponent: 0,
          aliases: ['p:inj:31Mar2025']
        }, {
          denom: 'pINJ31Mar2025',
          exponent: 18
        }],
      base: 'ibc/4B4BBFE7FA7FABD4DAE5593AEF5A6204B94EEC848B14E102EE72B6F81617080C',
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
            channel_id: 'channel-0',
            base_denom: 'p:inj:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/0D955581BB17CB7EC811D843D14DDE6FFD9F86D659D2A0400D3CCFB74F4AFBE0',
          exponent: 0,
          aliases: ['p:inj:30Jun2025']
        }, {
          denom: 'pINJ30Jun2025',
          exponent: 18
        }],
      base: 'ibc/0D955581BB17CB7EC811D843D14DDE6FFD9F86D659D2A0400D3CCFB74F4AFBE0',
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
            channel_id: 'channel-0',
            base_denom: 'p:inj:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/F73785493A039EA898A43B2D31E5913C5B17C3AD7B66D20A18769646218024D7',
          exponent: 0,
          aliases: ['p:inj:30Sep2025']
        }, {
          denom: 'pINJ30Sep2025',
          exponent: 18
        }],
      base: 'ibc/F73785493A039EA898A43B2D31E5913C5B17C3AD7B66D20A18769646218024D7',
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
            channel_id: 'channel-0',
            base_denom: 'p:inj:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/FE4812DAE2EC04A4A1185002F794F20E33D0995BE97439C1619FB9D41788E87B',
          exponent: 0,
          aliases: ['p:inj:31Dec2025']
        }, {
          denom: 'pINJ31Dec2025',
          exponent: 18
        }],
      base: 'ibc/FE4812DAE2EC04A4A1185002F794F20E33D0995BE97439C1619FB9D41788E87B',
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
            channel_id: 'channel-0',
            base_denom: 'p:inj:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/E5B61AE15B26FF1547D776DD2EFF5A532536A5E63580EE408B6068B65CCE319D',
          exponent: 0,
          aliases: ['p:inj:31Dec2026']
        }, {
          denom: 'pINJ31Dec2026',
          exponent: 18
        }],
      base: 'ibc/E5B61AE15B26FF1547D776DD2EFF5A532536A5E63580EE408B6068B65CCE319D',
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
            channel_id: 'channel-0',
            base_denom: 'p:inj:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/D18973059258C4AA4806A6AD590F7EEFE8F449181EF484978C8378DEDF400BF0',
          exponent: 0,
          aliases: ['p:uluna:30Sep2024']
        }, {
          denom: 'pLUNA30Sep2024',
          exponent: 6
        }],
      base: 'ibc/D18973059258C4AA4806A6AD590F7EEFE8F449181EF484978C8378DEDF400BF0',
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
            channel_id: 'channel-0',
            base_denom: 'p:uluna:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/5050958CB9155020356C4C9E16EF4E2C2D7173C513DC359EEF8894A7212D109A',
          exponent: 0,
          aliases: ['p:uluna:31Dec2024']
        }, {
          denom: 'pLUNA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/5050958CB9155020356C4C9E16EF4E2C2D7173C513DC359EEF8894A7212D109A',
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
            channel_id: 'channel-0',
            base_denom: 'p:uluna:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/11AF79E683E92F357C1B8ED8052DFB4899E41D22B3F8D35FDF41117EAA10694A',
          exponent: 0,
          aliases: ['p:uluna:31Mar2025']
        }, {
          denom: 'pLUNA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/11AF79E683E92F357C1B8ED8052DFB4899E41D22B3F8D35FDF41117EAA10694A',
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
            channel_id: 'channel-0',
            base_denom: 'p:uluna:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/F037223A610D97E487F3948D3A8390B44EC9D4D6B3FC98EC6902DA2AA5FABE4E',
          exponent: 0,
          aliases: ['p:uluna:30Jun2025']
        }, {
          denom: 'pLUNA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/F037223A610D97E487F3948D3A8390B44EC9D4D6B3FC98EC6902DA2AA5FABE4E',
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
            channel_id: 'channel-0',
            base_denom: 'p:uluna:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/F860A8B42A0253DE4F9F123BD2E79629CAF8F25D54CBEE310970F839AF180740',
          exponent: 0,
          aliases: ['p:uluna:30Sep2025']
        }, {
          denom: 'pLUNA30Sep2025',
          exponent: 6
        }],
      base: 'ibc/F860A8B42A0253DE4F9F123BD2E79629CAF8F25D54CBEE310970F839AF180740',
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
            channel_id: 'channel-0',
            base_denom: 'p:uluna:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/A3776F9B36A89585EE98A0CE58E1F0A1D48FBB097D122C31AA14782891535F0B',
          exponent: 0,
          aliases: ['p:uluna:31Dec2025']
        }, {
          denom: 'pLUNA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/A3776F9B36A89585EE98A0CE58E1F0A1D48FBB097D122C31AA14782891535F0B',
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
            channel_id: 'channel-0',
            base_denom: 'p:uluna:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/33F475EF6154CA92660DEAC956975D13EA5FDC83DDA61BFC86E82A01CF2A797E',
          exponent: 0,
          aliases: ['p:uluna:31Dec2026']
        }, {
          denom: 'pLUNA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/33F475EF6154CA92660DEAC956975D13EA5FDC83DDA61BFC86E82A01CF2A797E',
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
            channel_id: 'channel-0',
            base_denom: 'p:uluna:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/0F7AF6447310D5851B28F96305654AFEDC168A6A7CDA528D9AAAB807FDA55F2B',
          exponent: 0,
          aliases: ['p:uauuu:30Sep2024']
        }, {
          denom: 'pAUUU30Sep2024',
          exponent: 6
        }],
      base: 'ibc/0F7AF6447310D5851B28F96305654AFEDC168A6A7CDA528D9AAAB807FDA55F2B',
      name: 'pAuuu (30Sep2024)',
      display: 'pAUUU30Sep2024',
      symbol: 'pAUUU-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'p:uauuu:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/003CF8250CAB3257500FE64DC8932B0357A83A1C6C6DB7FB970034E4D415A555',
          exponent: 0,
          aliases: ['p:uauuu:31Dec2024']
        }, {
          denom: 'pAUUU31Dec2024',
          exponent: 6
        }],
      base: 'ibc/003CF8250CAB3257500FE64DC8932B0357A83A1C6C6DB7FB970034E4D415A555',
      name: 'pAuuu (31Dec2024)',
      display: 'pAUUU31Dec2024',
      symbol: 'pAUUU-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'p:uauuu:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/1EADF4FF736D66B2E335D9F2F67AE738BDC848C587B1B21A5E752456DDB68234',
          exponent: 0,
          aliases: ['p:uauuu:30Jun2025']
        }, {
          denom: 'pAUUU30Jun2025',
          exponent: 6
        }],
      base: 'ibc/1EADF4FF736D66B2E335D9F2F67AE738BDC848C587B1B21A5E752456DDB68234',
      name: 'pAuuu (30Jun2025)',
      display: 'pAUUU30Jun2025',
      symbol: 'pAUUU-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'p:uauuu:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/914A7AD7700C2091223E29C00BFABE04ECF7A29E3E4633CE5F64098FEE11E701',
          exponent: 0,
          aliases: ['p:uauuu:31Dec2025']
        }, {
          denom: 'pAUUU31Dec2025',
          exponent: 6
        }],
      base: 'ibc/914A7AD7700C2091223E29C00BFABE04ECF7A29E3E4633CE5F64098FEE11E701',
      name: 'pAuuu (31Dec2025)',
      display: 'pAUUU31Dec2025',
      symbol: 'pAUUU-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'p:uauuu:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/324997306530394D527693B38D4913AE04AC16069B7FD60C2C206A881C3041DC',
          exponent: 0,
          aliases: ['p:uauuu:31Dec2026']
        }, {
          denom: 'pAUUU31Dec2026',
          exponent: 6
        }],
      base: 'ibc/324997306530394D527693B38D4913AE04AC16069B7FD60C2C206A881C3041DC',
      name: 'pAuuu (31Dec2026)',
      display: 'pAUUU31Dec2026',
      symbol: 'pAUUU-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'p:uauuu:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/3BB788657A85084CBBA603D4F29F1DC38B537381DB61E6F9C215758971FBF3C0',
          exponent: 0,
          aliases: ['p:stutia:30Sep2024']
        }, {
          denom: 'pstTIA30Sep2024',
          exponent: 6
        }],
      base: 'ibc/3BB788657A85084CBBA603D4F29F1DC38B537381DB61E6F9C215758971FBF3C0',
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
            channel_id: 'channel-0',
            base_denom: 'p:stutia:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/7CAF301DB696B13C449D0EE06C2FBD95BE144919677F09D8F946C5DA291F7FCD',
          exponent: 0,
          aliases: ['p:stutia:31Dec2024']
        }, {
          denom: 'pstTIA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/7CAF301DB696B13C449D0EE06C2FBD95BE144919677F09D8F946C5DA291F7FCD',
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
            channel_id: 'channel-0',
            base_denom: 'p:stutia:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/7B76C0EE787B348E4A24A367B895643AA0282F9CE5D2FD87A12BDD09F3900C91',
          exponent: 0,
          aliases: ['p:stutia:31Mar2025']
        }, {
          denom: 'pstTIA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/7B76C0EE787B348E4A24A367B895643AA0282F9CE5D2FD87A12BDD09F3900C91',
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
            channel_id: 'channel-0',
            base_denom: 'p:stutia:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/060F743A84A364797B5CA768F4B3D8E8867AF2664BF9FF5BE6FBC9E2905C0BD2',
          exponent: 0,
          aliases: ['p:stutia:30Jun2025']
        }, {
          denom: 'pstTIA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/060F743A84A364797B5CA768F4B3D8E8867AF2664BF9FF5BE6FBC9E2905C0BD2',
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
            channel_id: 'channel-0',
            base_denom: 'p:stutia:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/8157ACE6349D6C0FD4B91E2F1496E412D22FAA7708B805350C9090F78C5DD59B',
          exponent: 0,
          aliases: ['p:stutia:31Dec2025']
        }, {
          denom: 'pstTIA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/8157ACE6349D6C0FD4B91E2F1496E412D22FAA7708B805350C9090F78C5DD59B',
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
            channel_id: 'channel-0',
            base_denom: 'p:stutia:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/072118121E38B2B036BF4371A701E111087764516981BC89F193053B91CE2A91',
          exponent: 0,
          aliases: ['p:stutia:31Dec2026']
        }, {
          denom: 'pstTIA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/072118121E38B2B036BF4371A701E111087764516981BC89F193053B91CE2A91',
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
            channel_id: 'channel-0',
            base_denom: 'p:stutia:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/7699BA758C8B78C5884AA94E1F93608DA28D2866A9D02B4A4D10E23C5EACDE7F',
          exponent: 0,
          aliases: ['p:stadydx:30Sep2024']
        }, {
          denom: 'pstDYDX30Sep2024',
          exponent: 18
        }],
      base: 'ibc/7699BA758C8B78C5884AA94E1F93608DA28D2866A9D02B4A4D10E23C5EACDE7F',
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
            channel_id: 'channel-0',
            base_denom: 'p:stadydx:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/226384BB7EE4B8879EC96E14CDC1A834E20DF574577094062FAC2B96AD6C92F2',
          exponent: 0,
          aliases: ['p:stadydx:31Dec2024']
        }, {
          denom: 'pstDYDX31Dec2024',
          exponent: 18
        }],
      base: 'ibc/226384BB7EE4B8879EC96E14CDC1A834E20DF574577094062FAC2B96AD6C92F2',
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
            channel_id: 'channel-0',
            base_denom: 'p:stadydx:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/99F427F2047BCC8A26690B3348D708562B8491216D6434FA9EE49784A0031C7E',
          exponent: 0,
          aliases: ['p:stadydx:31Mar2025']
        }, {
          denom: 'pstDYDX31Mar2025',
          exponent: 18
        }],
      base: 'ibc/99F427F2047BCC8A26690B3348D708562B8491216D6434FA9EE49784A0031C7E',
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
            channel_id: 'channel-0',
            base_denom: 'p:stadydx:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/E1E62A0FC68A508C83113EB8398B0FA956582C9C6C56E20BBC09064C50841AA6',
          exponent: 0,
          aliases: ['p:stadydx:30Jun2025']
        }, {
          denom: 'pstDYDX30Jun2025',
          exponent: 18
        }],
      base: 'ibc/E1E62A0FC68A508C83113EB8398B0FA956582C9C6C56E20BBC09064C50841AA6',
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
            channel_id: 'channel-0',
            base_denom: 'p:stadydx:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/E6BAEA0F35B10FA645FFFA1A286DEEF1987583F0632A150AA19DD3BEB96ADF69',
          exponent: 0,
          aliases: ['p:stadydx:31Dec2025']
        }, {
          denom: 'pstDYDX31Dec2025',
          exponent: 18
        }],
      base: 'ibc/E6BAEA0F35B10FA645FFFA1A286DEEF1987583F0632A150AA19DD3BEB96ADF69',
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
            channel_id: 'channel-0',
            base_denom: 'p:stadydx:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/03B81265542BA1FA5017047166D61785E1F1D5DDAA398FA5A9C6AEA982D390BF',
          exponent: 0,
          aliases: ['p:stadydx:31Dec2026']
        }, {
          denom: 'pstDYDX31Dec2026',
          exponent: 18
        }],
      base: 'ibc/03B81265542BA1FA5017047166D61785E1F1D5DDAA398FA5A9C6AEA982D390BF',
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
            channel_id: 'channel-0',
            base_denom: 'p:stadydx:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/34A9D49BFA1F306AFEFD1214C864D91B5455DCDC951014C73ED11856EF75DF26',
          exponent: 0,
          aliases: ['p:udatom:31Dec2024']
        }, {
          denom: 'pdATOM31Dec2024',
          exponent: 6
        }],
      base: 'ibc/34A9D49BFA1F306AFEFD1214C864D91B5455DCDC951014C73ED11856EF75DF26',
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
            channel_id: 'channel-0',
            base_denom: 'p:udatom:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/D01A3F96E28EC9BDBF0C531C9F00518F4684938E4328CA3BA116C7A3D0747863',
          exponent: 0,
          aliases: ['p:udatom:31Mar2025']
        }, {
          denom: 'pdATOM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/D01A3F96E28EC9BDBF0C531C9F00518F4684938E4328CA3BA116C7A3D0747863',
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
            channel_id: 'channel-0',
            base_denom: 'p:udatom:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/F32D62A99E693493A42BC23B1086011A4A8D702DB3108964DBF22ADC6C2B37DE',
          exponent: 0,
          aliases: ['p:udatom:30Jun2025']
        }, {
          denom: 'pdATOM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/F32D62A99E693493A42BC23B1086011A4A8D702DB3108964DBF22ADC6C2B37DE',
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
            channel_id: 'channel-0',
            base_denom: 'p:udatom:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/A3803000AFA033464FE045045AFBD69763E17E217ED65E54D6D92473BEF69D90',
          exponent: 0,
          aliases: ['p:udatom:31Dec2025']
        }, {
          denom: 'pdATOM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/A3803000AFA033464FE045045AFBD69763E17E217ED65E54D6D92473BEF69D90',
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
            channel_id: 'channel-0',
            base_denom: 'p:udatom:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/C5FA16F4FC0D3727A108265AD2B254B693C07F421AF23DBCEAE0CC6E468939F2',
          exponent: 0,
          aliases: ['p:udatom:31Dec2026']
        }, {
          denom: 'pdATOM31Dec2026',
          exponent: 6
        }],
      base: 'ibc/C5FA16F4FC0D3727A108265AD2B254B693C07F421AF23DBCEAE0CC6E468939F2',
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
            channel_id: 'channel-0',
            base_denom: 'p:udatom:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/A6C81EDA32426E6AB33B3DC98ECB3736009AB400255C6BD313E24F14A443A3B0',
          exponent: 0,
          aliases: ['p:utia:31Dec2024']
        }, {
          denom: 'pTIA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/A6C81EDA32426E6AB33B3DC98ECB3736009AB400255C6BD313E24F14A443A3B0',
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
            channel_id: 'channel-0',
            base_denom: 'p:utia:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/09013B7303A9C0A916B783C678FE8ED16E3331649A3745D8C24EB736F43FD1D6',
          exponent: 0,
          aliases: ['p:utia:31Mar2025']
        }, {
          denom: 'pTIA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/09013B7303A9C0A916B783C678FE8ED16E3331649A3745D8C24EB736F43FD1D6',
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
            channel_id: 'channel-0',
            base_denom: 'p:utia:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/E80F054C9F509D6980729A8D39E9976DEB5A7602BFE0BB957B9BB4E532530FC9',
          exponent: 0,
          aliases: ['p:utia:30Jun2025']
        }, {
          denom: 'pTIA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/E80F054C9F509D6980729A8D39E9976DEB5A7602BFE0BB957B9BB4E532530FC9',
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
            channel_id: 'channel-0',
            base_denom: 'p:utia:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/B46819804EA6F36F2108AAE6CD3A5B022B6589531F361B6CEC47E21D0C0DA0A5',
          exponent: 0,
          aliases: ['p:utia:30Sep2025']
        }, {
          denom: 'pTIA30Sep2025',
          exponent: 6
        }],
      base: 'ibc/B46819804EA6F36F2108AAE6CD3A5B022B6589531F361B6CEC47E21D0C0DA0A5',
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
            channel_id: 'channel-0',
            base_denom: 'p:utia:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/85C5EFED282A3CB0CFDBB4EE0FA69BDF9D717F92A501CF873D9B9DFF7D5A60CA',
          exponent: 0,
          aliases: ['p:utia:31Dec2025']
        }, {
          denom: 'pTIA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/85C5EFED282A3CB0CFDBB4EE0FA69BDF9D717F92A501CF873D9B9DFF7D5A60CA',
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
            channel_id: 'channel-0',
            base_denom: 'p:utia:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/A012E42E5AE3390E7EC96F0903077D5D40B2EE5359C2A2C198EC62F18023D291',
          exponent: 0,
          aliases: ['p:utia:31Dec2026']
        }, {
          denom: 'pTIA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/A012E42E5AE3390E7EC96F0903077D5D40B2EE5359C2A2C198EC62F18023D291',
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
            channel_id: 'channel-0',
            base_denom: 'p:utia:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/3673F68B00C1A4A1366012854690E845B4615BAE9D198A3126D8FB3196F70B6E',
          exponent: 0,
          aliases: ['p:ausdy:31Mar2025']
        }, {
          denom: 'pUSDY31Mar2025',
          exponent: 18
        }],
      base: 'ibc/3673F68B00C1A4A1366012854690E845B4615BAE9D198A3126D8FB3196F70B6E',
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
            channel_id: 'channel-0',
            base_denom: 'p:ausdy:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/9378A9C0772D105DDE1ADD7741035CEAEAD3AF158ABEFAFE9BA1FD67C00370BD',
          exponent: 0,
          aliases: ['p:ausdy:30Jun2025']
        }, {
          denom: 'pUSDY30Jun2025',
          exponent: 18
        }],
      base: 'ibc/9378A9C0772D105DDE1ADD7741035CEAEAD3AF158ABEFAFE9BA1FD67C00370BD',
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
            channel_id: 'channel-0',
            base_denom: 'p:ausdy:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/E311F011FC32BC763A52BD54F0837B28E4FC76889D756F6F531DEF9C3685DBBE',
          exponent: 0,
          aliases: ['p:ausdy:30Sep2025']
        }, {
          denom: 'pUSDY30Sep2025',
          exponent: 18
        }],
      base: 'ibc/E311F011FC32BC763A52BD54F0837B28E4FC76889D756F6F531DEF9C3685DBBE',
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
            channel_id: 'channel-0',
            base_denom: 'p:ausdy:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/6AA25DE275C7678F27061D6966EA19884C79C5C494C54CD08CB201DB0CEB7B83',
          exponent: 0,
          aliases: ['p:ausdy:31Dec2025']
        }, {
          denom: 'pUSDY31Dec2025',
          exponent: 18
        }],
      base: 'ibc/6AA25DE275C7678F27061D6966EA19884C79C5C494C54CD08CB201DB0CEB7B83',
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
            channel_id: 'channel-0',
            base_denom: 'p:ausdy:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/4EA48644F78004A456AE1D748A0C1D42A420DDDC41A95AC1A62D22F997893C8E',
          exponent: 0,
          aliases: ['p:ausdy:31Mar2026']
        }, {
          denom: 'pUSDY31Mar2026',
          exponent: 18
        }],
      base: 'ibc/4EA48644F78004A456AE1D748A0C1D42A420DDDC41A95AC1A62D22F997893C8E',
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
            channel_id: 'channel-0',
            base_denom: 'p:ausdy:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/AFA6D4C7F9E0C61D4FAC69256DC83FAFBE3592A85ECFFE0B08C14457ADCE6809',
          exponent: 0,
          aliases: ['p:ausdy:30Jun2026']
        }, {
          denom: 'pUSDY30Jun2026',
          exponent: 18
        }],
      base: 'ibc/AFA6D4C7F9E0C61D4FAC69256DC83FAFBE3592A85ECFFE0B08C14457ADCE6809',
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
            channel_id: 'channel-0',
            base_denom: 'p:ausdy:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/AE5D232080E762E8464777456926D416E5A1BB8A67651A125FF803B3D72C31B1',
          exponent: 0,
          aliases: ['p:upryzm:31Mar2025']
        }, {
          denom: 'pPRYZM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/AE5D232080E762E8464777456926D416E5A1BB8A67651A125FF803B3D72C31B1',
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
            channel_id: 'channel-0',
            base_denom: 'p:upryzm:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/B840FE1E2803B4D4CF622678EFA7D17A77F2E613C6BB21458965527C0CB73C9A',
          exponent: 0,
          aliases: ['p:upryzm:30Jun2025']
        }, {
          denom: 'pPRYZM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/B840FE1E2803B4D4CF622678EFA7D17A77F2E613C6BB21458965527C0CB73C9A',
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
            channel_id: 'channel-0',
            base_denom: 'p:upryzm:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/6EFCA16945CF745E58E26D16B033DE0F691020B8CA892281CE3E7BDA639F0605',
          exponent: 0,
          aliases: ['p:upryzm:30Sep2025']
        }, {
          denom: 'pPRYZM30Sep2025',
          exponent: 6
        }],
      base: 'ibc/6EFCA16945CF745E58E26D16B033DE0F691020B8CA892281CE3E7BDA639F0605',
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
            channel_id: 'channel-0',
            base_denom: 'p:upryzm:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/A71F9EA796B9D1DD49271A934F2050FD7F6078D808ABE7079FCC9145BF5F7532',
          exponent: 0,
          aliases: ['p:upryzm:31Dec2025']
        }, {
          denom: 'pPRYZM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/A71F9EA796B9D1DD49271A934F2050FD7F6078D808ABE7079FCC9145BF5F7532',
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
            channel_id: 'channel-0',
            base_denom: 'p:upryzm:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/D4C0BF06BDA6D406FA7D7043EBF2C5C7860B3EC9D5CD64C415B1EEF901447F4B',
          exponent: 0,
          aliases: ['p:upryzm:31Mar2026']
        }, {
          denom: 'pPRYZM31Mar2026',
          exponent: 6
        }],
      base: 'ibc/D4C0BF06BDA6D406FA7D7043EBF2C5C7860B3EC9D5CD64C415B1EEF901447F4B',
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
            channel_id: 'channel-0',
            base_denom: 'p:upryzm:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/E988166E4A0A2C2F4202023508C187F248A0917D3E5B8423864C9D1DC542DB1B',
          exponent: 0,
          aliases: ['p:upryzm:30Jun2026']
        }, {
          denom: 'pPRYZM30Jun2026',
          exponent: 6
        }],
      base: 'ibc/E988166E4A0A2C2F4202023508C187F248A0917D3E5B8423864C9D1DC542DB1B',
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
            channel_id: 'channel-0',
            base_denom: 'p:upryzm:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for sUSDS with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/4E241EBC8F5FCE219FACE2224CBF9E94325994CBF8F6F6DEDB43ECFD62DAA929',
          exponent: 0,
          aliases: ['p:asusds:30Jun2025']
        }, {
          denom: 'psUSDS30Jun2025',
          exponent: 18
        }],
      base: 'ibc/4E241EBC8F5FCE219FACE2224CBF9E94325994CBF8F6F6DEDB43ECFD62DAA929',
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
            channel_id: 'channel-0',
            base_denom: 'p:asusds:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for sUSDS with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/4168D0FFECE07EF5E1F5D98C6419D006B0E76897B0A5FF7D7A9B35E3508F05A9',
          exponent: 0,
          aliases: ['p:asusds:30Sep2025']
        }, {
          denom: 'psUSDS30Sep2025',
          exponent: 18
        }],
      base: 'ibc/4168D0FFECE07EF5E1F5D98C6419D006B0E76897B0A5FF7D7A9B35E3508F05A9',
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
            channel_id: 'channel-0',
            base_denom: 'p:asusds:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for sUSDS with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/F9BC98E87C74CF002E5D55DAF7B174B9E7F3182C448A9AABF7391C7965F6AA75',
          exponent: 0,
          aliases: ['p:asusds:31Dec2025']
        }, {
          denom: 'psUSDS31Dec2025',
          exponent: 18
        }],
      base: 'ibc/F9BC98E87C74CF002E5D55DAF7B174B9E7F3182C448A9AABF7391C7965F6AA75',
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
            channel_id: 'channel-0',
            base_denom: 'p:asusds:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for sUSDS with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/FA94E9C2C71FCAB3D1DC9F29564B748547A296ABB8539E2CD9D724953722864A',
          exponent: 0,
          aliases: ['p:asusds:31Mar2026']
        }, {
          denom: 'psUSDS31Mar2026',
          exponent: 18
        }],
      base: 'ibc/FA94E9C2C71FCAB3D1DC9F29564B748547A296ABB8539E2CD9D724953722864A',
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
            channel_id: 'channel-0',
            base_denom: 'p:asusds:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for sUSDS with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/0A93CD083733B759E60F5FC98CAC6AD76A6719E641303268757069843BE79CD2',
          exponent: 0,
          aliases: ['p:asusds:30Jun2026']
        }, {
          denom: 'psUSDS30Jun2026',
          exponent: 18
        }],
      base: 'ibc/0A93CD083733B759E60F5FC98CAC6AD76A6719E641303268757069843BE79CD2',
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
            channel_id: 'channel-0',
            base_denom: 'p:asusds:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for mBTC with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/CB508F5319817CCE291F8380970E1C69C22622035B4E5E53605B529BEB619046',
          exponent: 0,
          aliases: ['p:ambtc:30Sep2025']
        }, {
          denom: 'pmBTC30Sep2025',
          exponent: 18
        }],
      base: 'ibc/CB508F5319817CCE291F8380970E1C69C22622035B4E5E53605B529BEB619046',
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
            channel_id: 'channel-0',
            base_denom: 'p:ambtc:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for mBTC with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/AA0ECCEB5AFA314007B0DDD1DE7004B51BDA33A615423F29E90D142D586C796B',
          exponent: 0,
          aliases: ['p:ambtc:31Dec2025']
        }, {
          denom: 'pmBTC31Dec2025',
          exponent: 18
        }],
      base: 'ibc/AA0ECCEB5AFA314007B0DDD1DE7004B51BDA33A615423F29E90D142D586C796B',
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
            channel_id: 'channel-0',
            base_denom: 'p:ambtc:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for mBTC with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/A6C0D273DA5A1C4B5CBBD43BDC80A0077B78A9EC3190C4D99678728EFC26C942',
          exponent: 0,
          aliases: ['p:ambtc:31Mar2026']
        }, {
          denom: 'pmBTC31Mar2026',
          exponent: 18
        }],
      base: 'ibc/A6C0D273DA5A1C4B5CBBD43BDC80A0077B78A9EC3190C4D99678728EFC26C942',
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
            channel_id: 'channel-0',
            base_denom: 'p:ambtc:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for mBTC with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/305E4EB0F1C52E75B04E1B86D4792321DD200B493C80BAF2B7BD189C0A10315B',
          exponent: 0,
          aliases: ['p:ambtc:30Jun2026']
        }, {
          denom: 'pmBTC30Jun2026',
          exponent: 18
        }],
      base: 'ibc/305E4EB0F1C52E75B04E1B86D4792321DD200B493C80BAF2B7BD189C0A10315B',
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
            channel_id: 'channel-0',
            base_denom: 'p:ambtc:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/C86D786359DAD71365E2D95D7801F6BE500C8F911A1B891E8901D65007A7E7E9',
          exponent: 0,
          aliases: ['y:uatom:30Sep2024']
        }, {
          denom: 'yATOM30Sep2024',
          exponent: 6
        }],
      base: 'ibc/C86D786359DAD71365E2D95D7801F6BE500C8F911A1B891E8901D65007A7E7E9',
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
            channel_id: 'channel-0',
            base_denom: 'y:uatom:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/9FD2CB9A779E74F3D36638A1F71D9A06B85A7766AF8EC43EDCA37015D38D8343',
          exponent: 0,
          aliases: ['y:uatom:31Dec2024']
        }, {
          denom: 'yATOM31Dec2024',
          exponent: 6
        }],
      base: 'ibc/9FD2CB9A779E74F3D36638A1F71D9A06B85A7766AF8EC43EDCA37015D38D8343',
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
            channel_id: 'channel-0',
            base_denom: 'y:uatom:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/7DA6E145EDEAA35EFE308064CC8FCB28879C49664E294ADC19BBF2B18A8E80E6',
          exponent: 0,
          aliases: ['y:uatom:31Mar2025']
        }, {
          denom: 'yATOM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/7DA6E145EDEAA35EFE308064CC8FCB28879C49664E294ADC19BBF2B18A8E80E6',
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
            channel_id: 'channel-0',
            base_denom: 'y:uatom:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/1561C147E9B0A0FA8DC9D772397F47947B4E55F8B93B626C054459D7B6FDDFA7',
          exponent: 0,
          aliases: ['y:uatom:30Jun2025']
        }, {
          denom: 'yATOM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/1561C147E9B0A0FA8DC9D772397F47947B4E55F8B93B626C054459D7B6FDDFA7',
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
            channel_id: 'channel-0',
            base_denom: 'y:uatom:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/1700E82000BBFC548C66BA8971B38F9152D32DD62D8C5DF32644CAE036B097C5',
          exponent: 0,
          aliases: ['y:uatom:30Sep2025']
        }, {
          denom: 'yATOM30Sep2025',
          exponent: 6
        }],
      base: 'ibc/1700E82000BBFC548C66BA8971B38F9152D32DD62D8C5DF32644CAE036B097C5',
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
            channel_id: 'channel-0',
            base_denom: 'y:uatom:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/71FF1741C285AB613111516393D0CEE67397BBD24555A0F119E52C5CA8FC4139',
          exponent: 0,
          aliases: ['y:uatom:31Dec2025']
        }, {
          denom: 'yATOM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/71FF1741C285AB613111516393D0CEE67397BBD24555A0F119E52C5CA8FC4139',
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
            channel_id: 'channel-0',
            base_denom: 'y:uatom:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/9391F535B4ECDD0F7DF763C344A9BA092F812A4F08321DA3FE40885EA0F55EAB',
          exponent: 0,
          aliases: ['y:uatom:31Dec2026']
        }, {
          denom: 'yATOM31Dec2026',
          exponent: 6
        }],
      base: 'ibc/9391F535B4ECDD0F7DF763C344A9BA092F812A4F08321DA3FE40885EA0F55EAB',
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
            channel_id: 'channel-0',
            base_denom: 'y:uatom:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/66C55E4EB2589DE26AC51EB3CEEDDEB1A46EB10BD8A746A22A91DA341EF87D45',
          exponent: 0,
          aliases: ['y:uosmo:30Sep2024']
        }, {
          denom: 'yOSMO30Sep2024',
          exponent: 6
        }],
      base: 'ibc/66C55E4EB2589DE26AC51EB3CEEDDEB1A46EB10BD8A746A22A91DA341EF87D45',
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
            channel_id: 'channel-0',
            base_denom: 'y:uosmo:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/DADF7AB51D179EB3711EC8A938F6AA4EAF6239FD453EDF71D3A56FF9EC82AEBD',
          exponent: 0,
          aliases: ['y:uosmo:31Dec2024']
        }, {
          denom: 'yOSMO31Dec2024',
          exponent: 6
        }],
      base: 'ibc/DADF7AB51D179EB3711EC8A938F6AA4EAF6239FD453EDF71D3A56FF9EC82AEBD',
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
            channel_id: 'channel-0',
            base_denom: 'y:uosmo:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/903E2E2F78BEA7BE6DFFA2766F24D0DA56B628F611E45EF6E8FDB840B87986C2',
          exponent: 0,
          aliases: ['y:uosmo:31Mar2025']
        }, {
          denom: 'yOSMO31Mar2025',
          exponent: 6
        }],
      base: 'ibc/903E2E2F78BEA7BE6DFFA2766F24D0DA56B628F611E45EF6E8FDB840B87986C2',
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
            channel_id: 'channel-0',
            base_denom: 'y:uosmo:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/4DB31AA43C2166979000FE8AE6CB5332C49B7300CC1BC2C10B4C63700733F63D',
          exponent: 0,
          aliases: ['y:uosmo:30Jun2025']
        }, {
          denom: 'yOSMO30Jun2025',
          exponent: 6
        }],
      base: 'ibc/4DB31AA43C2166979000FE8AE6CB5332C49B7300CC1BC2C10B4C63700733F63D',
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
            channel_id: 'channel-0',
            base_denom: 'y:uosmo:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/ED92DE221C8E1821E3F9F8E58985034D09D0F9C9A52B125FB2E08EE4F2908FB2',
          exponent: 0,
          aliases: ['y:uosmo:30Sep2025']
        }, {
          denom: 'yOSMO30Sep2025',
          exponent: 6
        }],
      base: 'ibc/ED92DE221C8E1821E3F9F8E58985034D09D0F9C9A52B125FB2E08EE4F2908FB2',
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
            channel_id: 'channel-0',
            base_denom: 'y:uosmo:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/C9F4FB5A83C12D51AAED20942C4719FA243CB11F0DD0F40003A984B30ACA698B',
          exponent: 0,
          aliases: ['y:uosmo:31Dec2025']
        }, {
          denom: 'yOSMO31Dec2025',
          exponent: 6
        }],
      base: 'ibc/C9F4FB5A83C12D51AAED20942C4719FA243CB11F0DD0F40003A984B30ACA698B',
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
            channel_id: 'channel-0',
            base_denom: 'y:uosmo:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/1DC9AFE8E9EEE6426BCE38F71B9BA04AB619EC79FB0ABB5B07203A07B19EADD6',
          exponent: 0,
          aliases: ['y:uosmo:31Dec2026']
        }, {
          denom: 'yOSMO31Dec2026',
          exponent: 6
        }],
      base: 'ibc/1DC9AFE8E9EEE6426BCE38F71B9BA04AB619EC79FB0ABB5B07203A07B19EADD6',
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
            channel_id: 'channel-0',
            base_denom: 'y:uosmo:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/E6C7182A0A54E653C148282BF15D4767C7250C0402FCE7A8BCE02E1E21ACBD6F',
          exponent: 0,
          aliases: ['y:inj:30Sep2024']
        }, {
          denom: 'yINJ30Sep2024',
          exponent: 18
        }],
      base: 'ibc/E6C7182A0A54E653C148282BF15D4767C7250C0402FCE7A8BCE02E1E21ACBD6F',
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
            channel_id: 'channel-0',
            base_denom: 'y:inj:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/326CF424240614B7B5E8906D92290AEFCE171559689709E7B7E09D351BBC5FF1',
          exponent: 0,
          aliases: ['y:inj:31Dec2024']
        }, {
          denom: 'yINJ31Dec2024',
          exponent: 18
        }],
      base: 'ibc/326CF424240614B7B5E8906D92290AEFCE171559689709E7B7E09D351BBC5FF1',
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
            channel_id: 'channel-0',
            base_denom: 'y:inj:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/3C0DC83F509501BD36FD5DFB09EE6D863D48A83D09A131D13C5A71DDF9212311',
          exponent: 0,
          aliases: ['y:inj:31Mar2025']
        }, {
          denom: 'yINJ31Mar2025',
          exponent: 18
        }],
      base: 'ibc/3C0DC83F509501BD36FD5DFB09EE6D863D48A83D09A131D13C5A71DDF9212311',
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
            channel_id: 'channel-0',
            base_denom: 'y:inj:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/61844BB9E2B1F3E6E699133C47C48C42E0B1BC4A2523865CBB1AC13BFB41DC53',
          exponent: 0,
          aliases: ['y:inj:30Jun2025']
        }, {
          denom: 'yINJ30Jun2025',
          exponent: 18
        }],
      base: 'ibc/61844BB9E2B1F3E6E699133C47C48C42E0B1BC4A2523865CBB1AC13BFB41DC53',
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
            channel_id: 'channel-0',
            base_denom: 'y:inj:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/3E80231A30AF68A5E7886CD6196D0111D1DF871E3B9710B0452126C8E9C28454',
          exponent: 0,
          aliases: ['y:inj:30Sep2025']
        }, {
          denom: 'yINJ30Sep2025',
          exponent: 18
        }],
      base: 'ibc/3E80231A30AF68A5E7886CD6196D0111D1DF871E3B9710B0452126C8E9C28454',
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
            channel_id: 'channel-0',
            base_denom: 'y:inj:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/C4D6C0695737912C7B8E579D1C2C599B8B5F1AAF0DC296ADB01308491C8111ED',
          exponent: 0,
          aliases: ['y:inj:31Dec2025']
        }, {
          denom: 'yINJ31Dec2025',
          exponent: 18
        }],
      base: 'ibc/C4D6C0695737912C7B8E579D1C2C599B8B5F1AAF0DC296ADB01308491C8111ED',
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
            channel_id: 'channel-0',
            base_denom: 'y:inj:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/A8964451AB03C42FF92BF64DDEC51399D6994624FA6FBEF0CB4574374A6C370F',
          exponent: 0,
          aliases: ['y:inj:31Dec2026']
        }, {
          denom: 'yINJ31Dec2026',
          exponent: 18
        }],
      base: 'ibc/A8964451AB03C42FF92BF64DDEC51399D6994624FA6FBEF0CB4574374A6C370F',
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
            channel_id: 'channel-0',
            base_denom: 'y:inj:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/E8B4E7115BC55F34318B45EADF32EE1D9AC045880C8B1DDED4148973BB0350C0',
          exponent: 0,
          aliases: ['y:uluna:30Sep2024']
        }, {
          denom: 'yLUNA30Sep2024',
          exponent: 6
        }],
      base: 'ibc/E8B4E7115BC55F34318B45EADF32EE1D9AC045880C8B1DDED4148973BB0350C0',
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
            channel_id: 'channel-0',
            base_denom: 'y:uluna:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/B1C72B4B3A3799F41186A9C15F73D1467EA070EC816D6355068D48B06782F4F3',
          exponent: 0,
          aliases: ['y:uluna:31Dec2024']
        }, {
          denom: 'yLUNA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/B1C72B4B3A3799F41186A9C15F73D1467EA070EC816D6355068D48B06782F4F3',
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
            channel_id: 'channel-0',
            base_denom: 'y:uluna:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/79F121E8FFEB19233292D6C19D852452EDB8EEAE8DFB0ED7DE55ADD7E498F232',
          exponent: 0,
          aliases: ['y:uluna:31Mar2025']
        }, {
          denom: 'yLUNA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/79F121E8FFEB19233292D6C19D852452EDB8EEAE8DFB0ED7DE55ADD7E498F232',
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
            channel_id: 'channel-0',
            base_denom: 'y:uluna:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/833E268674AEAB9FE7F34D4BF046315E887C65540ACBD58CF6A99BFF1358DDE8',
          exponent: 0,
          aliases: ['y:uluna:30Jun2025']
        }, {
          denom: 'yLUNA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/833E268674AEAB9FE7F34D4BF046315E887C65540ACBD58CF6A99BFF1358DDE8',
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
            channel_id: 'channel-0',
            base_denom: 'y:uluna:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/CE1BC8FAA4DD99AEEF70C1A24B4F4B9EFE0665C0E7415F45EB01FF3700014A5C',
          exponent: 0,
          aliases: ['y:uluna:30Sep2025']
        }, {
          denom: 'yLUNA30Sep2025',
          exponent: 6
        }],
      base: 'ibc/CE1BC8FAA4DD99AEEF70C1A24B4F4B9EFE0665C0E7415F45EB01FF3700014A5C',
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
            channel_id: 'channel-0',
            base_denom: 'y:uluna:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/DABE3212D8FB1F1970677F2C5715947FADCDC504CFA13C3319D618B68A29EF3E',
          exponent: 0,
          aliases: ['y:uluna:31Dec2025']
        }, {
          denom: 'yLUNA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/DABE3212D8FB1F1970677F2C5715947FADCDC504CFA13C3319D618B68A29EF3E',
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
            channel_id: 'channel-0',
            base_denom: 'y:uluna:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/F4EC4D9CE8313E7530249553412FC41B1678C97DD49915A4F27935935146ECBC',
          exponent: 0,
          aliases: ['y:uluna:31Dec2026']
        }, {
          denom: 'yLUNA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/F4EC4D9CE8313E7530249553412FC41B1678C97DD49915A4F27935935146ECBC',
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
            channel_id: 'channel-0',
            base_denom: 'y:uluna:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/C8A832BF61C7D42B3E24DD9667B2692B95EF0A4999E8C80EA5DA8CABDF47A899',
          exponent: 0,
          aliases: ['y:uauuu:30Sep2024']
        }, {
          denom: 'yAUUU30Sep2024',
          exponent: 6
        }],
      base: 'ibc/C8A832BF61C7D42B3E24DD9667B2692B95EF0A4999E8C80EA5DA8CABDF47A899',
      name: 'yAuuu (30Sep2024)',
      display: 'yAUUU30Sep2024',
      symbol: 'yAUUU-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'y:uauuu:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/64E9B5A7C8E206285D4E739593E597346D479D687640FFC85B8F73FE064CE6B2',
          exponent: 0,
          aliases: ['y:uauuu:31Dec2024']
        }, {
          denom: 'yAUUU31Dec2024',
          exponent: 6
        }],
      base: 'ibc/64E9B5A7C8E206285D4E739593E597346D479D687640FFC85B8F73FE064CE6B2',
      name: 'yAuuu (31Dec2024)',
      display: 'yAUUU31Dec2024',
      symbol: 'yAUUU-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'y:uauuu:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/B104C4AF5D432D58A8D1BC762B396C1E10104FD35B238638956A39A816BA9724',
          exponent: 0,
          aliases: ['y:uauuu:30Jun2025']
        }, {
          denom: 'yAUUU30Jun2025',
          exponent: 6
        }],
      base: 'ibc/B104C4AF5D432D58A8D1BC762B396C1E10104FD35B238638956A39A816BA9724',
      name: 'yAuuu (30Jun2025)',
      display: 'yAUUU30Jun2025',
      symbol: 'yAUUU-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'y:uauuu:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/2BC3C0F3478BB6E728D913D948268F64B3F6A501B94E0349EC724E0A92EF061C',
          exponent: 0,
          aliases: ['y:uauuu:31Dec2025']
        }, {
          denom: 'yAUUU31Dec2025',
          exponent: 6
        }],
      base: 'ibc/2BC3C0F3478BB6E728D913D948268F64B3F6A501B94E0349EC724E0A92EF061C',
      name: 'yAuuu (31Dec2025)',
      display: 'yAUUU31Dec2025',
      symbol: 'yAUUU-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'y:uauuu:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/C57CDCEFD04AA282BD2C365747CFDA29FBD38E238A2166CFCA689A30E2C04DB5',
          exponent: 0,
          aliases: ['y:uauuu:31Dec2026']
        }, {
          denom: 'yAUUU31Dec2026',
          exponent: 6
        }],
      base: 'ibc/C57CDCEFD04AA282BD2C365747CFDA29FBD38E238A2166CFCA689A30E2C04DB5',
      name: 'yAuuu (31Dec2026)',
      display: 'yAUUU31Dec2026',
      symbol: 'yAUUU-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'y:uauuu:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/2972BE4E9EA58B6E769F900FFAFAAC1A8D1FBBB8D199503C3AEB286AA44528EE',
          exponent: 0,
          aliases: ['y:stutia:30Sep2024']
        }, {
          denom: 'ystTIA30Sep2024',
          exponent: 6
        }],
      base: 'ibc/2972BE4E9EA58B6E769F900FFAFAAC1A8D1FBBB8D199503C3AEB286AA44528EE',
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
            channel_id: 'channel-0',
            base_denom: 'y:stutia:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/F24FE2D4BC8BD616E2B8D9A0D75A18A0C3E16896C8FD54CADC2070EC2DF3F84D',
          exponent: 0,
          aliases: ['y:stutia:31Dec2024']
        }, {
          denom: 'ystTIA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/F24FE2D4BC8BD616E2B8D9A0D75A18A0C3E16896C8FD54CADC2070EC2DF3F84D',
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
            channel_id: 'channel-0',
            base_denom: 'y:stutia:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/CD957A5A225461826A3EE8A16A0F64757E45365CC8F5A39210D52742C37F2F45',
          exponent: 0,
          aliases: ['y:stutia:31Mar2025']
        }, {
          denom: 'ystTIA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/CD957A5A225461826A3EE8A16A0F64757E45365CC8F5A39210D52742C37F2F45',
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
            channel_id: 'channel-0',
            base_denom: 'y:stutia:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/D09F26630A4AF5B7A0D7804D0EE2DEE7BC19A1077D74B1F21B90619799ACA21D',
          exponent: 0,
          aliases: ['y:stutia:30Jun2025']
        }, {
          denom: 'ystTIA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/D09F26630A4AF5B7A0D7804D0EE2DEE7BC19A1077D74B1F21B90619799ACA21D',
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
            channel_id: 'channel-0',
            base_denom: 'y:stutia:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/BFB8342D0534BCA90F99EA82958E2642C598C5FFEABB1B2F1D1A7F56B47F76CB',
          exponent: 0,
          aliases: ['y:stutia:31Dec2025']
        }, {
          denom: 'ystTIA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/BFB8342D0534BCA90F99EA82958E2642C598C5FFEABB1B2F1D1A7F56B47F76CB',
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
            channel_id: 'channel-0',
            base_denom: 'y:stutia:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/4FEBF609E597CB5D951527AD1652A4F4BC0FC5F5C2F6DCCCB3F8198D489CAC08',
          exponent: 0,
          aliases: ['y:stutia:31Dec2026']
        }, {
          denom: 'ystTIA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/4FEBF609E597CB5D951527AD1652A4F4BC0FC5F5C2F6DCCCB3F8198D489CAC08',
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
            channel_id: 'channel-0',
            base_denom: 'y:stutia:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/2B056B252AA51B1F3448B74661E798AE1D380D69601B36A8A852EFA13C9B1E8F',
          exponent: 0,
          aliases: ['y:stadydx:30Sep2024']
        }, {
          denom: 'ystDYDX30Sep2024',
          exponent: 18
        }],
      base: 'ibc/2B056B252AA51B1F3448B74661E798AE1D380D69601B36A8A852EFA13C9B1E8F',
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
            channel_id: 'channel-0',
            base_denom: 'y:stadydx:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/CDF41A8641815AA06C4645493E8891A08E109CE970027E28B2D9D74D7FE0150F',
          exponent: 0,
          aliases: ['y:stadydx:31Dec2024']
        }, {
          denom: 'ystDYDX31Dec2024',
          exponent: 18
        }],
      base: 'ibc/CDF41A8641815AA06C4645493E8891A08E109CE970027E28B2D9D74D7FE0150F',
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
            channel_id: 'channel-0',
            base_denom: 'y:stadydx:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/5AED1325AF0A69EA4FFF5C91B65ECA94525E6EF1574271C37B4994D2736D2152',
          exponent: 0,
          aliases: ['y:stadydx:31Mar2025']
        }, {
          denom: 'ystDYDX31Mar2025',
          exponent: 6
        }],
      base: 'ibc/5AED1325AF0A69EA4FFF5C91B65ECA94525E6EF1574271C37B4994D2736D2152',
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
            channel_id: 'channel-0',
            base_denom: 'y:stadydx:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/DC31ECC4711854457C896067944148212B326D298EC6F761CE69FE7B80AF2D7D',
          exponent: 0,
          aliases: ['y:stadydx:30Jun2025']
        }, {
          denom: 'ystDYDX30Jun2025',
          exponent: 6
        }],
      base: 'ibc/DC31ECC4711854457C896067944148212B326D298EC6F761CE69FE7B80AF2D7D',
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
            channel_id: 'channel-0',
            base_denom: 'y:stadydx:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/0508CFFD553D2E440B8030F4C98A99ADADEC52DA30475BB4F57F4FB74E877773',
          exponent: 0,
          aliases: ['y:stadydx:31Dec2025']
        }, {
          denom: 'ystDYDX31Dec2025',
          exponent: 18
        }],
      base: 'ibc/0508CFFD553D2E440B8030F4C98A99ADADEC52DA30475BB4F57F4FB74E877773',
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
            channel_id: 'channel-0',
            base_denom: 'y:stadydx:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/A1562CB52BDB82F7BC6950B3C9855E2F11AB83D65C91E780CE0670ED59B08FD4',
          exponent: 0,
          aliases: ['y:stadydx:31Dec2026']
        }, {
          denom: 'ystDYDX31Dec2026',
          exponent: 18
        }],
      base: 'ibc/A1562CB52BDB82F7BC6950B3C9855E2F11AB83D65C91E780CE0670ED59B08FD4',
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
            channel_id: 'channel-0',
            base_denom: 'y:stadydx:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/E73E64710FD9874C520EA04AFF7D98E892EF0C79396F723958FE81426377B20E',
          exponent: 0,
          aliases: ['y:udatom:31Dec2024']
        }, {
          denom: 'ydATOM31Dec2024',
          exponent: 6
        }],
      base: 'ibc/E73E64710FD9874C520EA04AFF7D98E892EF0C79396F723958FE81426377B20E',
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
            channel_id: 'channel-0',
            base_denom: 'y:udatom:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/89B9131E9F7F22990217C01E7B9217648EF3019C5FB22BBAA514554C6DD423FD',
          exponent: 0,
          aliases: ['y:udatom:31Mar2025']
        }, {
          denom: 'ydATOM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/89B9131E9F7F22990217C01E7B9217648EF3019C5FB22BBAA514554C6DD423FD',
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
            channel_id: 'channel-0',
            base_denom: 'y:udatom:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/470B9FF85A08BC042B8FE478BCFF6887EA90DB1078C73E5D614B58A40DAB9AC9',
          exponent: 0,
          aliases: ['y:udatom:30Jun2025']
        }, {
          denom: 'ydATOM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/470B9FF85A08BC042B8FE478BCFF6887EA90DB1078C73E5D614B58A40DAB9AC9',
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
            channel_id: 'channel-0',
            base_denom: 'y:udatom:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/D4B3B27B89073E6328EF88E3AC5787994E6EC9239C37E7A7C47E722329E5F1B1',
          exponent: 0,
          aliases: ['y:udatom:31Dec2025']
        }, {
          denom: 'ydATOM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/D4B3B27B89073E6328EF88E3AC5787994E6EC9239C37E7A7C47E722329E5F1B1',
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
            channel_id: 'channel-0',
            base_denom: 'y:udatom:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/186EF279F1DC14B570E8D1CE7FB76FA1B556D51AF39663211A56B9855BC2B6A2',
          exponent: 0,
          aliases: ['y:udatom:31Dec2026']
        }, {
          denom: 'ydATOM31Dec2026',
          exponent: 6
        }],
      base: 'ibc/186EF279F1DC14B570E8D1CE7FB76FA1B556D51AF39663211A56B9855BC2B6A2',
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
            channel_id: 'channel-0',
            base_denom: 'y:udatom:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/B7D0983215A9ED509326F4000EC4662F37BE45221E10DE4D924116612C014C60',
          exponent: 0,
          aliases: ['y:utia:31Dec2024']
        }, {
          denom: 'yTIA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/B7D0983215A9ED509326F4000EC4662F37BE45221E10DE4D924116612C014C60',
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
            channel_id: 'channel-0',
            base_denom: 'y:utia:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/799DE7F3C5010434056B61104E7AB3E1FE33FA18A54A7E9C5534FC6B672DCE1D',
          exponent: 0,
          aliases: ['y:utia:31Mar2025']
        }, {
          denom: 'yTIA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/799DE7F3C5010434056B61104E7AB3E1FE33FA18A54A7E9C5534FC6B672DCE1D',
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
            channel_id: 'channel-0',
            base_denom: 'y:utia:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/98CC1FB2AAB59710E850DA172F81151F144A3069C8EC5C1F48BB930E06A3972D',
          exponent: 0,
          aliases: ['y:utia:30Jun2025']
        }, {
          denom: 'yTIA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/98CC1FB2AAB59710E850DA172F81151F144A3069C8EC5C1F48BB930E06A3972D',
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
            channel_id: 'channel-0',
            base_denom: 'y:utia:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/EE5F23C45921FB947D30B5BBFA56BBAFEDB76A181B985E0DD1B73D2A2D24398A',
          exponent: 0,
          aliases: ['y:utia:30Sep2025']
        }, {
          denom: 'yTIA30Sep2025',
          exponent: 6
        }],
      base: 'ibc/EE5F23C45921FB947D30B5BBFA56BBAFEDB76A181B985E0DD1B73D2A2D24398A',
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
            channel_id: 'channel-0',
            base_denom: 'y:utia:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/725805D787EDE76116D32AB9116B01B24430FB735B0BFAE388BA152C6765728C',
          exponent: 0,
          aliases: ['y:utia:31Dec2025']
        }, {
          denom: 'yTIA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/725805D787EDE76116D32AB9116B01B24430FB735B0BFAE388BA152C6765728C',
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
            channel_id: 'channel-0',
            base_denom: 'y:utia:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/3E7BCD36043D627C1123BE3785C3D13C157BC0C0A747E1281F194997248D4B2C',
          exponent: 0,
          aliases: ['y:utia:31Dec2026']
        }, {
          denom: 'yTIA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/3E7BCD36043D627C1123BE3785C3D13C157BC0C0A747E1281F194997248D4B2C',
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
            channel_id: 'channel-0',
            base_denom: 'y:utia:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/B1A3413AE5E32893BD0BA66FD2981210D2EEF7F6EB0C318CB8E188AD10E2F944',
          exponent: 0,
          aliases: ['y:ausdy:31Mar2025']
        }, {
          denom: 'yUSDY31Mar2025',
          exponent: 18
        }],
      base: 'ibc/B1A3413AE5E32893BD0BA66FD2981210D2EEF7F6EB0C318CB8E188AD10E2F944',
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
            channel_id: 'channel-0',
            base_denom: 'y:ausdy:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/B232505D1681CF712E9CD978B3DA6B35F75CD70D96C64264FAE95C91BA88AF81',
          exponent: 0,
          aliases: ['y:ausdy:30Jun2025']
        }, {
          denom: 'yUSDY30Jun2025',
          exponent: 18
        }],
      base: 'ibc/B232505D1681CF712E9CD978B3DA6B35F75CD70D96C64264FAE95C91BA88AF81',
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
            channel_id: 'channel-0',
            base_denom: 'y:ausdy:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/06CF891EB906FE14C7920239772C07953F3F676E2A67486F45EF85DE7254FEBB',
          exponent: 0,
          aliases: ['y:ausdy:30Sep2025']
        }, {
          denom: 'yUSDY30Sep2025',
          exponent: 18
        }],
      base: 'ibc/06CF891EB906FE14C7920239772C07953F3F676E2A67486F45EF85DE7254FEBB',
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
            channel_id: 'channel-0',
            base_denom: 'y:ausdy:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/AE1B9FDE6BC1868CA098DBFAF20B36537FF0B34B4BC3E8791A48F7C2DAB8505A',
          exponent: 0,
          aliases: ['y:ausdy:31Dec2025']
        }, {
          denom: 'yUSDY31Dec2025',
          exponent: 18
        }],
      base: 'ibc/AE1B9FDE6BC1868CA098DBFAF20B36537FF0B34B4BC3E8791A48F7C2DAB8505A',
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
            channel_id: 'channel-0',
            base_denom: 'y:ausdy:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/8E1D731E6A43AEFABBB8000AB65345D25D99FE134FA5B27CEF8EDC1803D7B63F',
          exponent: 0,
          aliases: ['y:ausdy:31Mar2026']
        }, {
          denom: 'yUSDY31Mar2026',
          exponent: 18
        }],
      base: 'ibc/8E1D731E6A43AEFABBB8000AB65345D25D99FE134FA5B27CEF8EDC1803D7B63F',
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
            channel_id: 'channel-0',
            base_denom: 'y:ausdy:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/D5B32C9DA0528EA8EDAD781E955FEDDA4266F0D58828C77A6130A8AEAC0171FB',
          exponent: 0,
          aliases: ['y:ausdy:30Jun2026']
        }, {
          denom: 'yUSDY30Jun2026',
          exponent: 18
        }],
      base: 'ibc/D5B32C9DA0528EA8EDAD781E955FEDDA4266F0D58828C77A6130A8AEAC0171FB',
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
            channel_id: 'channel-0',
            base_denom: 'y:ausdy:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/48E6E0165D2B0687AD2690F6F389AD1BDE6AA6CF34DC39F76EDB8256EFD27653',
          exponent: 0,
          aliases: ['y:upryzm:31Mar2025']
        }, {
          denom: 'yPRYZM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/48E6E0165D2B0687AD2690F6F389AD1BDE6AA6CF34DC39F76EDB8256EFD27653',
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
            channel_id: 'channel-0',
            base_denom: 'y:upryzm:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/C3A20E52828F148AB3EAAF3B05C8B09E8765BF2BD1E04625411414CED452DED3',
          exponent: 0,
          aliases: ['y:upryzm:30Jun2025']
        }, {
          denom: 'yPRYZM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/C3A20E52828F148AB3EAAF3B05C8B09E8765BF2BD1E04625411414CED452DED3',
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
            channel_id: 'channel-0',
            base_denom: 'y:upryzm:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/4FE601D4E002DA99DC0AC4DEAB5A05B7F28D4E681D8800322F8C729137E5C894',
          exponent: 0,
          aliases: ['y:upryzm:30Sep2025']
        }, {
          denom: 'yPRYZM30Sep2025',
          exponent: 6
        }],
      base: 'ibc/4FE601D4E002DA99DC0AC4DEAB5A05B7F28D4E681D8800322F8C729137E5C894',
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
            channel_id: 'channel-0',
            base_denom: 'y:upryzm:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/3BFCB2E0523C8AC01181F0A9E45D627350A32F891287FDC467D59ECAA1825F15',
          exponent: 0,
          aliases: ['y:upryzm:31Dec2025']
        }, {
          denom: 'yPRYZM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/3BFCB2E0523C8AC01181F0A9E45D627350A32F891287FDC467D59ECAA1825F15',
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
            channel_id: 'channel-0',
            base_denom: 'y:upryzm:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/0E8A726157C499F7AF5CD30FCCD4BBC55711993D149BB779D411CCBD0433A0A9',
          exponent: 0,
          aliases: ['y:upryzm:31Mar2026']
        }, {
          denom: 'yPRYZM31Mar2026',
          exponent: 6
        }],
      base: 'ibc/0E8A726157C499F7AF5CD30FCCD4BBC55711993D149BB779D411CCBD0433A0A9',
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
            channel_id: 'channel-0',
            base_denom: 'y:upryzm:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/2745F58C681FF940CCF98B3CBE2398C66D69A2F95D1FC72500B71D9A1E254439',
          exponent: 0,
          aliases: ['y:upryzm:30Jun2026']
        }, {
          denom: 'yPRYZM30Jun2026',
          exponent: 6
        }],
      base: 'ibc/2745F58C681FF940CCF98B3CBE2398C66D69A2F95D1FC72500B71D9A1E254439',
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
            channel_id: 'channel-0',
            base_denom: 'y:upryzm:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for sUSDS with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/45BC7186F1DC6A9C890E0BABC68804ADCA5B319AE7D5D214B905C50052096EFE',
          exponent: 0,
          aliases: ['y:asusds:30Jun2025']
        }, {
          denom: 'ysUSDS30Jun2025',
          exponent: 18
        }],
      base: 'ibc/45BC7186F1DC6A9C890E0BABC68804ADCA5B319AE7D5D214B905C50052096EFE',
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
            channel_id: 'channel-0',
            base_denom: 'y:asusds:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for sUSDS with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/6D87CFE7EDD9941F45EEDBCFB9CABB92D8E438363B30CB5BE30559609E7E5FC2',
          exponent: 0,
          aliases: ['y:asusds:30Sep2025']
        }, {
          denom: 'ysUSDS30Sep2025',
          exponent: 18
        }],
      base: 'ibc/6D87CFE7EDD9941F45EEDBCFB9CABB92D8E438363B30CB5BE30559609E7E5FC2',
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
            channel_id: 'channel-0',
            base_denom: 'y:asusds:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for sUSDS with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/8A90404CEECD13F09570ED4EE105CBC7AD8311669D47545AC77C2A61529A2A0D',
          exponent: 0,
          aliases: ['y:asusds:31Dec2025']
        }, {
          denom: 'ysUSDS31Dec2025',
          exponent: 18
        }],
      base: 'ibc/8A90404CEECD13F09570ED4EE105CBC7AD8311669D47545AC77C2A61529A2A0D',
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
            channel_id: 'channel-0',
            base_denom: 'y:asusds:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for sUSDS with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/2A7DA3EE052969939AF9FBE9464F00783401CE960B471F060AE3AEEDDE4D6C13',
          exponent: 0,
          aliases: ['y:asusds:31Mar2026']
        }, {
          denom: 'ysUSDS31Mar2026',
          exponent: 18
        }],
      base: 'ibc/2A7DA3EE052969939AF9FBE9464F00783401CE960B471F060AE3AEEDDE4D6C13',
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
            channel_id: 'channel-0',
            base_denom: 'y:asusds:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for sUSDS with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/3355F150AF6824069359A8F072D6496793F758D284C2BD3F083D0C3F34B4ACF4',
          exponent: 0,
          aliases: ['y:asusds:30Jun2026']
        }, {
          denom: 'ysUSDS30Jun2026',
          exponent: 18
        }],
      base: 'ibc/3355F150AF6824069359A8F072D6496793F758D284C2BD3F083D0C3F34B4ACF4',
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
            channel_id: 'channel-0',
            base_denom: 'y:asusds:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for mBTC with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/190E7E4E85A2948FC5AD63867F0A39BBF36BBF729643E8E6E3768D05893BDAC0',
          exponent: 0,
          aliases: ['y:ambtc:30Sep2025']
        }, {
          denom: 'ymBTC30Sep2025',
          exponent: 18
        }],
      base: 'ibc/190E7E4E85A2948FC5AD63867F0A39BBF36BBF729643E8E6E3768D05893BDAC0',
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
            channel_id: 'channel-0',
            base_denom: 'y:ambtc:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for mBTC with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/8363CB64BB478C728F32986083DF8DB41D69487B68EE7DA23A58CFE093B89487',
          exponent: 0,
          aliases: ['y:ambtc:31Dec2025']
        }, {
          denom: 'ymBTC31Dec2025',
          exponent: 18
        }],
      base: 'ibc/8363CB64BB478C728F32986083DF8DB41D69487B68EE7DA23A58CFE093B89487',
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
            channel_id: 'channel-0',
            base_denom: 'y:ambtc:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for mBTC with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/D681BC0D3F76F841B8A1F11BC87A203F6E08CE15C470D4010A6D0034067BDFC6',
          exponent: 0,
          aliases: ['y:ambtc:31Mar2026']
        }, {
          denom: 'ymBTC31Mar2026',
          exponent: 18
        }],
      base: 'ibc/D681BC0D3F76F841B8A1F11BC87A203F6E08CE15C470D4010A6D0034067BDFC6',
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
            channel_id: 'channel-0',
            base_denom: 'y:ambtc:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for mBTC with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/A6E6BF6DA2A643AC905E0384089E26116CF6DDB7555F52C20BA4C11EDDF91725',
          exponent: 0,
          aliases: ['y:ambtc:30Jun2026']
        }, {
          denom: 'ymBTC30Jun2026',
          exponent: 18
        }],
      base: 'ibc/A6E6BF6DA2A643AC905E0384089E26116CF6DDB7555F52C20BA4C11EDDF91725',
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
            channel_id: 'channel-0',
            base_denom: 'y:ambtc:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for USDC / USDC.axl pool',
      denom_units: [{
          denom: 'ibc/0507617EF9EAEA71B0F0B711E201EAAFC254F2EF0DC04EA6A44752F23C1B2F8E',
          exponent: 0,
          aliases: ['lp:6:uusdc.axl-uusdc']
        }, {
          denom: 'lp:6:usdc.axl-usdc',
          exponent: 6
        }],
      base: 'ibc/0507617EF9EAEA71B0F0B711E201EAAFC254F2EF0DC04EA6A44752F23C1B2F8E',
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
            channel_id: 'channel-0',
            base_denom: 'lp:6:uusdc.axl-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for ATOM Yield pool',
      denom_units: [{
          denom: 'ibc/8BE0A8BAA6640A68148880C791B6B7B87458054AD5D9C42540BD02171495CDC5',
          exponent: 0,
          aliases: ['lp:0:uatom']
        }, {
          denom: 'lp:0:atom',
          exponent: 6
        }],
      base: 'ibc/8BE0A8BAA6640A68148880C791B6B7B87458054AD5D9C42540BD02171495CDC5',
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
            channel_id: 'channel-0',
            base_denom: 'lp:0:uatom',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for ATOM Boost pool',
      denom_units: [{
          denom: 'ibc/EE9236959508962737F7178BC179127FD010EF883962FC39A26414EE227C5FEA',
          exponent: 0,
          aliases: ['lp:2:uatomypt-uatom']
        }, {
          denom: 'lp:2:atomypt-atom',
          exponent: 6
        }],
      base: 'ibc/EE9236959508962737F7178BC179127FD010EF883962FC39A26414EE227C5FEA',
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
            channel_id: 'channel-0',
            base_denom: 'lp:2:uatomypt-uatom',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for ATOM / USDC pool',
      denom_units: [{
          denom: 'ibc/237669ACD93DBC13FF4A9C1D32023696685AA52B520A41945E4336746CDE9009',
          exponent: 0,
          aliases: ['lp:3:uatom-uusdc']
        }, {
          denom: 'lp:3:atom-usdc',
          exponent: 6
        }],
      base: 'ibc/237669ACD93DBC13FF4A9C1D32023696685AA52B520A41945E4336746CDE9009',
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
            channel_id: 'channel-0',
            base_denom: 'lp:3:uatom-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for INJ Yield pool',
      denom_units: [{
          denom: 'ibc/28EBA0989B1B0BF15451284757761A130F28E5657068D5CB7C73BA900232FF1D',
          exponent: 0,
          aliases: ['lp:1:inj']
        }, {
          denom: 'lp:1:INJ',
          exponent: 18
        }],
      base: 'ibc/28EBA0989B1B0BF15451284757761A130F28E5657068D5CB7C73BA900232FF1D',
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
            channel_id: 'channel-0',
            base_denom: 'lp:1:inj',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for INJ Boost pool',
      denom_units: [{
          denom: 'ibc/499003A66D3A0A1F9E547FB0AA96A45A42CABB5BEDD6CF55AE835AC6D01A3005',
          exponent: 0,
          aliases: ['lp:4:injypt-inj']
        }, {
          denom: 'lp:4:INJypt-INJ',
          exponent: 18
        }],
      base: 'ibc/499003A66D3A0A1F9E547FB0AA96A45A42CABB5BEDD6CF55AE835AC6D01A3005',
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
            channel_id: 'channel-0',
            base_denom: 'lp:4:injypt-inj',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for INJ / USDC pool',
      denom_units: [{
          denom: 'ibc/3CC6B438B483195F954272E2BF65DE278066AFF3FB8DB15655CB1F78DC4B04F0',
          exponent: 0,
          aliases: ['lp:5:inj-uusdc']
        }, {
          denom: 'lp:5:INJ-usdc',
          exponent: 18
        }],
      base: 'ibc/3CC6B438B483195F954272E2BF65DE278066AFF3FB8DB15655CB1F78DC4B04F0',
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
            channel_id: 'channel-0',
            base_denom: 'lp:5:inj-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for OSMO Yield pool',
      denom_units: [{
          denom: 'ibc/E18B025CA4BC9CDC00F71E799A47D1641B8FD008FDF185CFFF7B5AC2F7D44212',
          exponent: 0,
          aliases: ['lp:8:uosmo']
        }, {
          denom: 'lp:8:osmo',
          exponent: 6
        }],
      base: 'ibc/E18B025CA4BC9CDC00F71E799A47D1641B8FD008FDF185CFFF7B5AC2F7D44212',
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
            channel_id: 'channel-0',
            base_denom: 'lp:8:uosmo',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for OSMO Boost pool',
      denom_units: [{
          denom: 'ibc/336C3DD3F5EF55EC3F6123FD1164E6F61AE1553A83AB63A3E99334DD2E3217AE',
          exponent: 0,
          aliases: ['lp:10:uosmoypt-uosmo']
        }, {
          denom: 'lp:10:osmoypt-osmo',
          exponent: 6
        }],
      base: 'ibc/336C3DD3F5EF55EC3F6123FD1164E6F61AE1553A83AB63A3E99334DD2E3217AE',
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
            channel_id: 'channel-0',
            base_denom: 'lp:10:uosmoypt-uosmo',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for OSMO / USDC pool',
      denom_units: [{
          denom: 'ibc/80BE00D99A33E62F48C14AB4E1609EE881B4C4944E4B5871EA6C76C259EAE94F',
          exponent: 0,
          aliases: ['lp:11:uosmo-uusdc']
        }, {
          denom: 'lp:11:osmo-usdc',
          exponent: 6
        }],
      base: 'ibc/80BE00D99A33E62F48C14AB4E1609EE881B4C4944E4B5871EA6C76C259EAE94F',
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
            channel_id: 'channel-0',
            base_denom: 'lp:11:uosmo-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for LUNA Yield pool',
      denom_units: [{
          denom: 'ibc/CAAC9B8D9AF00BC6E9E5BD9D1B322590E2994F3332280094C889067308EC1955',
          exponent: 0,
          aliases: ['lp:9:uluna']
        }, {
          denom: 'lp:9:luna',
          exponent: 6
        }],
      base: 'ibc/CAAC9B8D9AF00BC6E9E5BD9D1B322590E2994F3332280094C889067308EC1955',
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
            channel_id: 'channel-0',
            base_denom: 'lp:9:uluna',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for LUNA Boost pool',
      denom_units: [{
          denom: 'ibc/7AA986820DBC78F5F85F618535ED954311A29DE67127539557F5BFFEBD00C241',
          exponent: 0,
          aliases: ['lp:12:ulunaypt-uluna']
        }, {
          denom: 'lp:12:lunaypt-luna',
          exponent: 6
        }],
      base: 'ibc/7AA986820DBC78F5F85F618535ED954311A29DE67127539557F5BFFEBD00C241',
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
            channel_id: 'channel-0',
            base_denom: 'lp:12:ulunaypt-uluna',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for LUNA / USDC pool',
      denom_units: [{
          denom: 'ibc/3AC26F0AD6A665E29FEB684E7906442922F6D8EA95F70DCB6C1FA848CD138D98',
          exponent: 0,
          aliases: ['lp:13:uluna-uusdc']
        }, {
          denom: 'lp:13:luna-usdc',
          exponent: 6
        }],
      base: 'ibc/3AC26F0AD6A665E29FEB684E7906442922F6D8EA95F70DCB6C1FA848CD138D98',
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
            channel_id: 'channel-0',
            base_denom: 'lp:13:uluna-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for AUUU Yield pool',
      denom_units: [{
          denom: 'ibc/4942D18869E5DD6F03ABB4A2983C2872E9680145C1F6E1CF1B354D9D77D087D6',
          exponent: 0,
          aliases: ['lp:14:uauuu']
        }, {
          denom: 'lp:14:auuu',
          exponent: 6
        }],
      base: 'ibc/4942D18869E5DD6F03ABB4A2983C2872E9680145C1F6E1CF1B354D9D77D087D6',
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
            channel_id: 'channel-0',
            base_denom: 'lp:14:uauuu',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for AUUU Boost pool',
      denom_units: [{
          denom: 'ibc/8E8641011F7E1BFCC3B00C97495F948B6F60D0F5819DE617A6C4C1FD48451AB2',
          exponent: 0,
          aliases: ['lp:17:uauuuypt-uauuu']
        }, {
          denom: 'lp:17:auuuypt-auuu',
          exponent: 6
        }],
      base: 'ibc/8E8641011F7E1BFCC3B00C97495F948B6F60D0F5819DE617A6C4C1FD48451AB2',
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
            channel_id: 'channel-0',
            base_denom: 'lp:17:uauuuypt-uauuu',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for AUUU / USDC pool',
      denom_units: [{
          denom: 'ibc/C05CEA239733B1842BCB27AE339BEF65E1BFEA548F17E093F91BD25C6ECCC00D',
          exponent: 0,
          aliases: ['lp:7:uauuu-uusdc']
        }, {
          denom: 'lp:7:auuu-usdc',
          exponent: 6
        }],
      base: 'ibc/C05CEA239733B1842BCB27AE339BEF65E1BFEA548F17E093F91BD25C6ECCC00D',
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
            channel_id: 'channel-0',
            base_denom: 'lp:7:uauuu-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for stDYDX Yield pool',
      denom_units: [{
          denom: 'ibc/948EFD1EF89AC2F0FE7D142754E7333BF6C23F661E95C289DD30EA0E2A85980B',
          exponent: 0,
          aliases: ['lp:15:stadydx']
        }, {
          denom: 'lp:15:stdydx',
          exponent: 18
        }],
      base: 'ibc/948EFD1EF89AC2F0FE7D142754E7333BF6C23F661E95C289DD30EA0E2A85980B',
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
            channel_id: 'channel-0',
            base_denom: 'lp:15:stadydx',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for stDYDX Boost pool',
      denom_units: [{
          denom: 'ibc/8E80F0ED98581510570CB135BA41CCA1ADB66E066641466FD2F1FE2F7152AF43',
          exponent: 0,
          aliases: ['lp:18:stadydxypt-adydx']
        }, {
          denom: 'lp:18:stdydxypt-dydx',
          exponent: 18
        }],
      base: 'ibc/8E80F0ED98581510570CB135BA41CCA1ADB66E066641466FD2F1FE2F7152AF43',
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
            channel_id: 'channel-0',
            base_denom: 'lp:18:stadydxypt-adydx',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for DYDX / USDC pool',
      denom_units: [{
          denom: 'ibc/6F70A98DC19BF49E77050C80C49277CB27901A4921DC1F3452E930BEBEDE0A83',
          exponent: 0,
          aliases: ['lp:19:adydx-uusdc']
        }, {
          denom: 'lp:19:dydx-usdc',
          exponent: 18
        }],
      base: 'ibc/6F70A98DC19BF49E77050C80C49277CB27901A4921DC1F3452E930BEBEDE0A83',
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
            channel_id: 'channel-0',
            base_denom: 'lp:19:adydx-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for stTIA Yield pool',
      denom_units: [{
          denom: 'ibc/5E5D85FE8DB8031424E8EAC958D91BAC60386D3C89BAE662B3AD424382F16621',
          exponent: 0,
          aliases: ['lp:16:stutia']
        }, {
          denom: 'lp:16:sttia',
          exponent: 6
        }],
      base: 'ibc/5E5D85FE8DB8031424E8EAC958D91BAC60386D3C89BAE662B3AD424382F16621',
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
            channel_id: 'channel-0',
            base_denom: 'lp:16:stutia',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for stTIA Boost pool',
      denom_units: [{
          denom: 'ibc/2099F3C33852E93467C6A629CAFAC11A9F607F2365EFA256AB400F2C18E9ABAD',
          exponent: 0,
          aliases: ['lp:20:stutiaypt-utia']
        }, {
          denom: 'lp:20:sttiaypt-tia',
          exponent: 6
        }],
      base: 'ibc/2099F3C33852E93467C6A629CAFAC11A9F607F2365EFA256AB400F2C18E9ABAD',
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
            channel_id: 'channel-0',
            base_denom: 'lp:20:stutiaypt-utia',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for TIA Yield pool',
      denom_units: [{
          denom: 'ibc/4053AF4F3FAFAB649E0069D270C4EDAFC698C15F09C00F64E118C66F42A5C73C',
          exponent: 0,
          aliases: ['lp:24:utia']
        }, {
          denom: 'lp:24:tia',
          exponent: 6
        }],
      base: 'ibc/4053AF4F3FAFAB649E0069D270C4EDAFC698C15F09C00F64E118C66F42A5C73C',
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
            channel_id: 'channel-0',
            base_denom: 'lp:24:utia',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for TIA Boost pool',
      denom_units: [{
          denom: 'ibc/B02FE0F36894C39E6091E5533CBA79AABAE21994C40DA682E13DD9FB3F79CB8A',
          exponent: 0,
          aliases: ['lp:25:utiaypt-utia']
        }, {
          denom: 'lp:25:tiaypt-tia',
          exponent: 6
        }],
      base: 'ibc/B02FE0F36894C39E6091E5533CBA79AABAE21994C40DA682E13DD9FB3F79CB8A',
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
            channel_id: 'channel-0',
            base_denom: 'lp:25:utiaypt-utia',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for TIA / USDC pool',
      denom_units: [{
          denom: 'ibc/7B221AA0E1BE50C6C097D7FE1D227755987CE67EF98CE0DCEE6B491E057F5106',
          exponent: 0,
          aliases: ['lp:21:utia-uusdc']
        }, {
          denom: 'lp:21:tia-usdc',
          exponent: 6
        }],
      base: 'ibc/7B221AA0E1BE50C6C097D7FE1D227755987CE67EF98CE0DCEE6B491E057F5106',
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
            channel_id: 'channel-0',
            base_denom: 'lp:21:utia-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for dATOM Yield pool',
      denom_units: [{
          denom: 'ibc/7EFE36A668703C22E1DB8330FD388F6C0E2A877E8ED4DA677C5CE0884070EEAA',
          exponent: 0,
          aliases: ['lp:22:udatom']
        }, {
          denom: 'lp:22:datom',
          exponent: 6
        }],
      base: 'ibc/7EFE36A668703C22E1DB8330FD388F6C0E2A877E8ED4DA677C5CE0884070EEAA',
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
            channel_id: 'channel-0',
            base_denom: 'lp:22:udatom',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for dATOM Boost pool',
      denom_units: [{
          denom: 'ibc/8AFB3FD11B309DA277ABFA64EE74AAB7586A98FA34248283693BE2EA505AD5F1',
          exponent: 0,
          aliases: ['lp:23:udatomypt-uatom']
        }, {
          denom: 'lp:23:datomypt-atom',
          exponent: 6
        }],
      base: 'ibc/8AFB3FD11B309DA277ABFA64EE74AAB7586A98FA34248283693BE2EA505AD5F1',
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
            channel_id: 'channel-0',
            base_denom: 'lp:23:udatomypt-uatom',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for USDY Yield pool',
      denom_units: [{
          denom: 'ibc/39ED5F271E7F15D5D0F3363B0792F5B03D41C0C4C790490D1306EEB819C2FFB7',
          exponent: 0,
          aliases: ['lp:31:ausdy']
        }, {
          denom: 'lp:31:usdy',
          exponent: 18
        }],
      base: 'ibc/39ED5F271E7F15D5D0F3363B0792F5B03D41C0C4C790490D1306EEB819C2FFB7',
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
            channel_id: 'channel-0',
            base_denom: 'lp:31:ausdy',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for USDY Boost pool',
      denom_units: [{
          denom: 'ibc/7FF03618C85501BF543834D7598BE97351BC75413E82B08F61D7E309D33EF8E0',
          exponent: 0,
          aliases: ['lp:32:ausdyypt-uusdc']
        }, {
          denom: 'lp:32:usdyypt-usdc',
          exponent: 18
        }],
      base: 'ibc/7FF03618C85501BF543834D7598BE97351BC75413E82B08F61D7E309D33EF8E0',
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
            channel_id: 'channel-0',
            base_denom: 'lp:32:ausdyypt-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for PRYZM Yield pool',
      denom_units: [{
          denom: 'ibc/EDB6BF9BC748674FDBD12EA1E062161EFE5AA4A455307EAC26AAC21973FC9923',
          exponent: 0,
          aliases: ['lp:33:upryzm']
        }, {
          denom: 'lp:33:pryzm',
          exponent: 6
        }],
      base: 'ibc/EDB6BF9BC748674FDBD12EA1E062161EFE5AA4A455307EAC26AAC21973FC9923',
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
            channel_id: 'channel-0',
            base_denom: 'lp:33:upryzm',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for PRYZM Base pool',
      denom_units: [{
          denom: 'ibc/5647DE5961092E514507570E3290673B509BD9CB99BF629776288D853806B4F9',
          exponent: 0,
          aliases: ['lp:34:upryzmypt-upryzm']
        }, {
          denom: 'lp:34:pryzmypt-pryzm',
          exponent: 6
        }],
      base: 'ibc/5647DE5961092E514507570E3290673B509BD9CB99BF629776288D853806B4F9',
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
            channel_id: 'channel-0',
            base_denom: 'lp:34:upryzmypt-upryzm',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for PRYZM / USDC pool',
      denom_units: [{
          denom: 'ibc/8382BEBD1DB0BECE611DF6486A00DB89AF5E70B04521B285C7D3D93E323AC18D',
          exponent: 0,
          aliases: ['lp:35:upryzm-uusdc']
        }, {
          denom: 'lp:35:pryzm-usdc',
          exponent: 6
        }],
      base: 'ibc/8382BEBD1DB0BECE611DF6486A00DB89AF5E70B04521B285C7D3D93E323AC18D',
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
            channel_id: 'channel-0',
            base_denom: 'lp:35:upryzm-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for sUSDS Yield pool',
      denom_units: [{
          denom: 'ibc/F3AEF8929E29A0A1980A2DE6A6AC6958437A50BF5786F0AFB1250B91E4F42BAB',
          exponent: 0,
          aliases: ['lp:36:asusds']
        }, {
          denom: 'lp:36:susds',
          exponent: 18
        }],
      base: 'ibc/F3AEF8929E29A0A1980A2DE6A6AC6958437A50BF5786F0AFB1250B91E4F42BAB',
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
            channel_id: 'channel-0',
            base_denom: 'lp:36:asusds',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for sUSDS Boost pool',
      denom_units: [{
          denom: 'ibc/9A390770A8F1963E998103D1B20B9A1EE8C22DA4BA1D09E89A971EFA70084DCE',
          exponent: 0,
          aliases: ['lp:37:asusdsypt-uusdc']
        }, {
          denom: 'lp:37:susdsypt-usdc',
          exponent: 18
        }],
      base: 'ibc/9A390770A8F1963E998103D1B20B9A1EE8C22DA4BA1D09E89A971EFA70084DCE',
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
            channel_id: 'channel-0',
            base_denom: 'lp:37:asusdsypt-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for mBTC Yield pool',
      denom_units: [{
          denom: 'ibc/32BB95BC546E4E3CE5409A1DB48976EC05143AFB3963048452A5299CF53133E1',
          exponent: 0,
          aliases: ['lp:38:ambtc']
        }, {
          denom: 'lp:38:mbtc',
          exponent: 18
        }],
      base: 'ibc/32BB95BC546E4E3CE5409A1DB48976EC05143AFB3963048452A5299CF53133E1',
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
            channel_id: 'channel-0',
            base_denom: 'lp:38:ambtc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for mBTC Boost pool',
      denom_units: [{
          denom: 'ibc/A41CB80A88E9A47867F59E414CAF48D12867D93CBD976B5D7578B247FC3B2AF2',
          exponent: 0,
          aliases: ['lp:39:ambtcypt-wsat']
        }, {
          denom: 'lp:39:mbtcypt-wbtc',
          exponent: 18
        }],
      base: 'ibc/A41CB80A88E9A47867F59E414CAF48D12867D93CBD976B5D7578B247FC3B2AF2',
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
            channel_id: 'channel-0',
            base_denom: 'lp:39:ambtcypt-wsat',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for WBTC / USDC pool',
      denom_units: [{
          denom: 'ibc/8DBC947638A0D1680562A9CE29A22A47E1D52A43B8A5DBD8C161AE7211495F7C',
          exponent: 0,
          aliases: ['lp:40:wsat-uusdc']
        }, {
          denom: 'lp:40:wbtc-usdc',
          exponent: 18
        }],
      base: 'ibc/8DBC947638A0D1680562A9CE29A22A47E1D52A43B8A5DBD8C161AE7211495F7C',
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
            channel_id: 'channel-0',
            base_denom: 'lp:40:wsat-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'QCK - native token of Quicksilver',
      denom_units: [{
          denom: 'ibc/BBB8E7A221C42270ACBEAC5DBC0B26C1AE69DB7802D528F3163D1443FE86E357',
          exponent: 0,
          aliases: ['uqck']
        }, {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/BBB8E7A221C42270ACBEAC5DBC0B26C1AE69DB7802D528F3163D1443FE86E357',
      name: 'Quicksilver',
      display: 'qck',
      symbol: 'QCK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
      },
      coingecko_id: 'quicksilver',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
        }],
      socials: {
        website: 'https://quicksilver.zone/',
        x: 'https://x.com/quicksilverzone'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uqck',
            chain_name: 'quicksilver'
          },
          chain: {
            channel_id: 'channel-467'
          }
        }]
    },
    {
      description: 'The native currency of the Realio Network.',
      denom_units: [{
          denom: 'ibc/5ABA00F76E96432A03EACECC47D40BFE42F60B7809FD89DD691E6F40CC8F7AFF',
          exponent: 0,
          aliases: ['ario']
        }, {
          denom: 'rio',
          exponent: 18
        }],
      base: 'ibc/5ABA00F76E96432A03EACECC47D40BFE42F60B7809FD89DD691E6F40CC8F7AFF',
      name: 'Realio Network',
      display: 'rio',
      symbol: 'RIO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg'
      },
      coingecko_id: 'realio-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://realio.network/',
        x: 'https://x.com/realio_network'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'ario',
            chain_name: 'realio'
          },
          chain: {
            channel_id: 'channel-645'
          }
        }]
    },
    {
      description: 'A hybrid equity token that represent ownership of the Realio Ecosystem and provides utility functions on the Network.',
      denom_units: [{
          denom: 'ibc/143B32D7DC3D6734660694CC89F323C2CD0BEA98A12A6BBDD25BC06C2710C267',
          exponent: 0,
          aliases: ['arst']
        }, {
          denom: 'rst',
          exponent: 18
        }],
      base: 'ibc/143B32D7DC3D6734660694CC89F323C2CD0BEA98A12A6BBDD25BC06C2710C267',
      name: 'Realio Security Token',
      display: 'rst',
      symbol: 'RST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rst.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rst.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'arst',
            chain_name: 'realio'
          },
          chain: {
            channel_id: 'channel-645'
          }
        }]
    },
    {
      description: 'REGEN coin is the token for the Regen Network Platform',
      denom_units: [{
          denom: 'ibc/1FBDD58D438B4D04D26CBFB2E722C18984A0F1A52468C4F42F37D102F3D3F399',
          exponent: 0,
          aliases: ['uregen']
        }, {
          denom: 'regen',
          exponent: 6
        }],
      base: 'ibc/1FBDD58D438B4D04D26CBFB2E722C18984A0F1A52468C4F42F37D102F3D3F399',
      name: 'Regen Network',
      display: 'regen',
      symbol: 'REGEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg'
      },
      coingecko_id: 'regen',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg'
        }],
      socials: {
        website: 'https://www.regen.network/',
        x: 'https://x.com/regen_network'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'uregen',
            chain_name: 'regen'
          },
          chain: {
            channel_id: 'channel-185'
          }
        }]
    },
    {
      description: 'Nature Carbon Ton (NCT) is a carbon token standard backed 1:1 by carbon credits issued by Verra, a global leader in the voluntary carbon market. NCT credits on Regen Network have been tokenized by Toucan.earth.',
      denom_units: [{
          denom: 'ibc/7854965E064D606B35FC42E7208A2CF97FE63EB2C539D1FFF12DDC85BCFB7621',
          exponent: 0,
          aliases: ['eco.uC.NCT']
        }, {
          denom: 'nct',
          exponent: 6
        }],
      base: 'ibc/7854965E064D606B35FC42E7208A2CF97FE63EB2C539D1FFF12DDC85BCFB7621',
      name: 'Nature Carbon Ton',
      display: 'nct',
      symbol: 'NCT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg'
      },
      coingecko_id: 'toucan-protocol-nature-carbon-tonne',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'eco.uC.NCT',
            chain_name: 'regen'
          },
          chain: {
            channel_id: 'channel-185'
          }
        }]
    },
    {
      description: 'Secret Network is a privacy-focused blockchain that enables private and secure smart contracts, protecting sensitive data.',
      denom_units: [{
          denom: 'ibc/1542F8DC70E7999691E991E1EDEB1B47E65E3A217B1649D347098EE48ACB580F',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'ibc/1542F8DC70E7999691E991E1EDEB1B47E65E3A217B1649D347098EE48ACB580F',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
      },
      coingecko_id: 'secret',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
        }],
      socials: {
        website: 'https://scrt.network/',
        x: 'https://x.com/SecretNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-235'
          }
        }]
    },
    {
      description: 'The native token of SEDA Chain.',
      denom_units: [{
          denom: 'ibc/D0BD765CF2EC6B97264795351BD75685A7B806F857D7D84633F5AC5E4A9812ED',
          exponent: 0,
          aliases: ['aseda']
        }, {
          denom: 'seda',
          exponent: 18
        }],
      base: 'ibc/D0BD765CF2EC6B97264795351BD75685A7B806F857D7D84633F5AC5E4A9812ED',
      name: 'Seda',
      display: 'seda',
      symbol: 'SEDA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.png'
      },
      coingecko_id: 'seda-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.png'
        }],
      socials: {
        website: 'https://www.seda.xyz/',
        x: 'https://x.com/sedaprotocol'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'aseda',
            chain_name: 'seda'
          },
          chain: {
            channel_id: 'channel-1337'
          }
        }]
    },
    {
      description: 'Sei is a layer-1 blockchain optimized for trading, focusing on providing high throughput, low latency, and efficient execution for decentralized exchanges.',
      denom_units: [{
          denom: 'ibc/261460D72BA2141BC77D439038343CB2B37C87B4148B4D5E30A5168A93E3E1D9',
          exponent: 0,
          aliases: ['usei']
        }, {
          denom: 'sei',
          exponent: 6
        }],
      base: 'ibc/261460D72BA2141BC77D439038343CB2B37C87B4148B4D5E30A5168A93E3E1D9',
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
            channel_id: 'channel-1',
            base_denom: 'usei',
            chain_name: 'sei'
          },
          chain: {
            channel_id: 'channel-584'
          }
        }]
    },
    {
      description: 'OOZARU is a meme token on SEI Network inspired by the iconic transformation in the Dragon Ball series',
      denom_units: [{
          denom: 'ibc/582D087820E10FF09C4F98253878701F659AB423C9E195D7FB913F923FA4398E',
          exponent: 0,
          aliases: ['sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda']
        }, {
          denom: 'oozaru',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda',
      base: 'ibc/582D087820E10FF09C4F98253878701F659AB423C9E195D7FB913F923FA4398E',
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
            channel_id: 'channel-1',
            base_denom: 'sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda',
            chain_name: 'sei'
          },
          chain: {
            channel_id: 'channel-584'
          }
        }]
    },
    {
      description: 'The native staking token of Self Chain.',
      denom_units: [{
          denom: 'ibc/07C1552AD0D5C8FE63F7E9AAD52E0488D5A9C2D2F49C0D9A0EFF940F5034C8FC',
          exponent: 0,
          aliases: ['uslf']
        }, {
          denom: 'slf',
          exponent: 6
        }],
      base: 'ibc/07C1552AD0D5C8FE63F7E9AAD52E0488D5A9C2D2F49C0D9A0EFF940F5034C8FC',
      name: 'Self',
      display: 'slf',
      symbol: 'SLF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/self/images/self.png'
      },
      coingecko_id: 'self-chain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/self/images/self.png'
        }],
      socials: {
        website: 'https://selfchain.xyz',
        x: 'https://x.com/selfchainxyz'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uslf',
            chain_name: 'self'
          },
          chain: {
            channel_id: 'channel-892'
          }
        }]
    },
    {
      description: 'Sentinel is a decentralized VPN (dVPN) network that provides private and secure internet access by leveraging blockchain technology.',
      denom_units: [{
          denom: 'ibc/42E47A5BA708EBE6E0C227006254F2784E209F4DBD3C6BB77EDC4B29EF875E8E',
          exponent: 0,
          aliases: ['udvpn']
        }, {
          denom: 'dvpn',
          exponent: 6
        }],
      base: 'ibc/42E47A5BA708EBE6E0C227006254F2784E209F4DBD3C6BB77EDC4B29EF875E8E',
      name: 'Sentinel',
      display: 'dvpn',
      symbol: 'P2P',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg'
      },
      coingecko_id: 'sentinel',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg'
        }],
      socials: {
        website: 'https://sentinel.co',
        x: 'https://x.com/SentinelP2P'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'udvpn',
            chain_name: 'sentinel'
          },
          chain: {
            channel_id: 'channel-186'
          }
        }]
    },
    {
      description: 'The native token of Side Chain.',
      denom_units: [{
          denom: 'ibc/9D3EF6B74FAFD490E1C0D27CAC87D2B5B3F5A9E889B55299EDAAB51F3DF7C141',
          exponent: 0,
          aliases: ['uside']
        }, {
          denom: 'side',
          exponent: 6
        }],
      base: 'ibc/9D3EF6B74FAFD490E1C0D27CAC87D2B5B3F5A9E889B55299EDAAB51F3DF7C141',
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
            channel_id: 'channel-10',
            base_denom: 'uside',
            chain_name: 'sidechain'
          },
          chain: {
            channel_id: 'channel-1352'
          }
        }]
    },
    {
      description: 'Rowan Token (ROWAN) is the Sifchain Network\'s native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.',
      denom_units: [{
          denom: 'ibc/F5ED5F3DC6F0EF73FA455337C027FE91ABCB375116BF51A228E44C493E020A09',
          exponent: 0,
          aliases: ['rowan']
        }, {
          denom: 'ROWAN',
          exponent: 18
        }],
      base: 'ibc/F5ED5F3DC6F0EF73FA455337C027FE91ABCB375116BF51A228E44C493E020A09',
      name: 'Sifchain',
      display: 'ROWAN',
      symbol: 'ROWAN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
      },
      coingecko_id: 'sifchain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'rowan',
            chain_name: 'sifchain'
          },
          chain: {
            channel_id: 'channel-192'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the StaFi Hub.',
      denom_units: [{
          denom: 'ibc/70406F10D3B62B53729A9DFCC1CADC3F5E32E1767D413D7140C35F75E8476400',
          exponent: 0,
          aliases: ['ufis']
        }, {
          denom: 'fis',
          exponent: 6
        }],
      base: 'ibc/70406F10D3B62B53729A9DFCC1CADC3F5E32E1767D413D7140C35F75E8476400',
      name: 'FIS',
      display: 'fis',
      symbol: 'FIS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
      },
      coingecko_id: 'stafi',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ufis',
            chain_name: 'stafihub'
          },
          chain: {
            channel_id: 'channel-369'
          }
        }]
    },
    {
      description: 'Stargaze is a decentralized blockchain platform designed specifically for non-fungible tokens (NFTs), enabling creators to mint, trade, and interact with NFTs in a fully decentralized environment.',
      denom_units: [{
          denom: 'ibc/F79A876741A3A49DD66421F63CD68FC43A5F92C381EB1415966277BF66C720A7',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ibc/F79A876741A3A49DD66421F63CD68FC43A5F92C381EB1415966277BF66C720A7',
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
            channel_id: 'channel-239',
            base_denom: 'ustars',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-730'
          }
        }]
    },
    {
      description: 'IOV coin is the token for the Starname (IOV) Asset Name Service',
      denom_units: [{
          denom: 'ibc/68A333688E5B07451F95555F8FE510E43EF9D3D44DF0909964F92081EF9BE5A7',
          exponent: 0,
          aliases: ['uiov']
        }, {
          denom: 'iov',
          exponent: 6
        }],
      base: 'ibc/68A333688E5B07451F95555F8FE510E43EF9D3D44DF0909964F92081EF9BE5A7',
      name: 'Starname',
      display: 'iov',
      symbol: 'IOV',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg'
        }],
      socials: {
        website: 'https://app.starname.me/',
        x: 'https://x.com/starname_me'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uiov',
            chain_name: 'starname'
          },
          chain: {
            channel_id: 'channel-158'
          }
        }]
    },
    {
      description: 'Stride is a liquid staking blockchain in the Cosmos ecosystem that allows users to stake any IBC-compatible tokens and receive stTokens in return, providing liquidity while earning staking rewards.',
      denom_units: [{
          denom: 'ibc/6B8A3F5C2AD51CD6171FA41A7E8C35AD594AB69226438DB94450436EA57B3A89',
          exponent: 0,
          aliases: ['ustrd']
        }, {
          denom: 'strd',
          exponent: 6
        }],
      base: 'ibc/6B8A3F5C2AD51CD6171FA41A7E8C35AD594AB69226438DB94450436EA57B3A89',
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
            channel_id: 'channel-0',
            base_denom: 'ustrd',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-391'
          }
        }]
    },
    {
      description: 'The native token of the Sunrise network for staking. This token is non transferrable. This token can be retrieved by providing liquidity.',
      denom_units: [{
          denom: 'ibc/4F1118E9723D1C6913A6FC350DB8DC50A5C7497C52BFA801DED579867788B961',
          exponent: 0,
          aliases: ['uvrise']
        }, {
          denom: 'vrise',
          exponent: 6
        }],
      base: 'ibc/4F1118E9723D1C6913A6FC350DB8DC50A5C7497C52BFA801DED579867788B961',
      name: 'Sunrise vRISE',
      display: 'vrise',
      symbol: 'vRISE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/vrise.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/vrise.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/vrise.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/vrise.png'
        }],
      socials: {
        website: 'https://sunriselayer.io/',
        x: 'https://x.com/SunriseLayer'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uvrise',
            chain_name: 'sunrise'
          },
          chain: {
            channel_id: 'channel-1421'
          }
        }]
    },
    {
      description: 'The native token of the Sunrise network.',
      denom_units: [{
          denom: 'ibc/6B36B4076DDD32AD1707196D454700B391BA94DE845C33EBEA7E8B21FEC64432',
          exponent: 0,
          aliases: ['urise']
        }, {
          denom: 'rise',
          exponent: 6
        }],
      base: 'ibc/6B36B4076DDD32AD1707196D454700B391BA94DE845C33EBEA7E8B21FEC64432',
      name: 'Sunrise RISE',
      display: 'rise',
      symbol: 'RISE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.png'
        }],
      socials: {
        website: 'https://sunriselayer.io/',
        x: 'https://x.com/SunriseLayer'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'urise',
            chain_name: 'sunrise'
          },
          chain: {
            channel_id: 'channel-1421'
          }
        }]
    },
    {
      description: 'The USD stable coin of the Sunrise network for fees.',
      denom_units: [{
          denom: 'ibc/551CA67335E14C0F0D8B2AA24DF575F0E02836540330B20778C826F48ED8DE80',
          exponent: 0,
          aliases: ['uusdrise']
        }, {
          denom: 'usdrise',
          exponent: 6
        }],
      base: 'ibc/551CA67335E14C0F0D8B2AA24DF575F0E02836540330B20778C826F48ED8DE80',
      name: 'Sunrise USDrise',
      display: 'usdrise',
      symbol: 'USDrise',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/usdrise.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/usdrise.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/usdrise.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/usdrise.png'
        }],
      socials: {
        website: 'https://sunriselayer.io/',
        x: 'https://x.com/SunriseLayer'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uusdrise',
            chain_name: 'sunrise'
          },
          chain: {
            channel_id: 'channel-1421'
          }
        }]
    },
    {
      description: 'The native token of Teritori',
      denom_units: [{
          denom: 'ibc/09334FF8B9AD27E39D37E3B80E73F48474289173AEFBB285BAD4D4B256707C46',
          exponent: 0,
          aliases: ['utori']
        }, {
          denom: 'tori',
          exponent: 6
        }],
      base: 'ibc/09334FF8B9AD27E39D37E3B80E73F48474289173AEFBB285BAD4D4B256707C46',
      name: 'Teritori',
      display: 'tori',
      symbol: 'TORI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg'
      },
      coingecko_id: 'teritori',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'utori',
            chain_name: 'teritori'
          },
          chain: {
            channel_id: 'channel-431'
          }
        }]
    },
    {
      description: 'The native staking token of Terra Phoenix.',
      denom_units: [{
          denom: 'ibc/34CEF8B6A6424C45FE3CCC4A02C9DF9BB38BACC323E08DFFEFE9E4B18BB89AC4',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'ibc/34CEF8B6A6424C45FE3CCC4A02C9DF9BB38BACC323E08DFFEFE9E4B18BB89AC4',
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
            channel_id: 'channel-0',
            base_denom: 'uluna',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-339'
          }
        }]
    },
    {
      description: 'The native token of Umee',
      denom_units: [{
          denom: 'ibc/DEC41A02E47658D40FC71E5A35A9C807111F5A6662A3FB5DA84C4E6F53E616B3',
          exponent: 0,
          aliases: ['uumee']
        }, {
          denom: 'umee',
          exponent: 6
        }],
      base: 'ibc/DEC41A02E47658D40FC71E5A35A9C807111F5A6662A3FB5DA84C4E6F53E616B3',
      name: 'Umee',
      display: 'umee',
      symbol: 'UMEE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
      },
      coingecko_id: 'umee',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uumee',
            chain_name: 'umee'
          },
          chain: {
            channel_id: 'channel-288'
          }
        }]
    },
    {
      description: 'The native token of Uptick',
      denom_units: [{
          denom: 'ibc/437D75DE90D857540013EB4BFAA57D600CC78A0D6233FF7C8E3204F066CA0C09',
          exponent: 0,
          aliases: ['auptick']
        }, {
          denom: 'uptick',
          exponent: 18
        }],
      base: 'ibc/437D75DE90D857540013EB4BFAA57D600CC78A0D6233FF7C8E3204F066CA0C09',
      name: 'Uptick',
      display: 'uptick',
      symbol: 'UPTICK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'auptick',
            chain_name: 'uptick'
          },
          chain: {
            channel_id: 'channel-535'
          }
        }]
    },
    {
      description: 'Staked Zig Token by Valdora Finance - Decentralized staking with stZIG',
      denom_units: [{
          denom: 'ibc/F1073E5895A25347EF10A7B50783D3048882726895AEE1176C498C45D0576F2B',
          exponent: 0,
          aliases: ['coin.zig109f7g2rzl2aqee7z6gffn8kfe9cpqx0mjkk7ethmx8m2hq4xpe9snmaam2.stzig']
        }, {
          denom: 'stzig',
          exponent: 6
        }],
      base: 'ibc/F1073E5895A25347EF10A7B50783D3048882726895AEE1176C498C45D0576F2B',
      name: 'Staked Zig',
      display: 'stzig',
      symbol: 'STZIG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/stzig.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/stzig.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/stzig.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/stzig.svg'
        }],
      type_asset: 'sdk.coin',
      socials: {
        website: 'https://valdora.finance',
        telegram: 'https://t.me/ValdoraWarriors',
        discord: 'http://discord.gg/valdora',
        x: 'https://x.com/Valdora_finance'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'coin.zig109f7g2rzl2aqee7z6gffn8kfe9cpqx0mjkk7ethmx8m2hq4xpe9snmaam2.stzig',
            chain_name: 'zigchain'
          },
          chain: {
            channel_id: 'channel-1555'
          }
        }]
    },
    {
      description: 'The native token of Crescent',
      denom_units: [{
          denom: 'ibc/3F18D520CE791A40357D061FAD657CED6B21D023F229EAF131D7FE7CE6F488BD',
          exponent: 0,
          aliases: ['ucre']
        }, {
          denom: 'cre',
          exponent: 6
        }],
      base: 'ibc/3F18D520CE791A40357D061FAD657CED6B21D023F229EAF131D7FE7CE6F488BD',
      name: 'Crescent',
      display: 'cre',
      symbol: 'CRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ucre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-326'
          }
        }]
    },
    {
      description: 'The bonded token of Crescent',
      denom_units: [{
          denom: 'ibc/835EE9D00C35D72128F195B50F8A89EB83E5011C43EA0AA00D16348E2208FEBB',
          exponent: 0,
          aliases: ['ubcre']
        }, {
          denom: 'bcre',
          exponent: 6
        }],
      base: 'ibc/835EE9D00C35D72128F195B50F8A89EB83E5011C43EA0AA00D16348E2208FEBB',
      name: 'Bonded Crescent',
      display: 'bcre',
      symbol: 'bCRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ubcre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-326'
          }
        }]
    },
    {
      description: 'CRO is the native token of the Crypto.org Chain, referred to as Native CRO.',
      denom_units: [{
          denom: 'ibc/C932ADFE2B4216397A4F17458B6E4468499B86C3BC8116180F85D799D6F5CC1B',
          exponent: 0,
          aliases: ['basecro']
        }, {
          denom: 'cro',
          exponent: 8
        }],
      base: 'ibc/C932ADFE2B4216397A4F17458B6E4468499B86C3BC8116180F85D799D6F5CC1B',
      name: 'Cronos',
      display: 'cro',
      symbol: 'CRO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
      },
      coingecko_id: 'crypto-com-chain',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png'
        },
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro_white.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro_white.png',
          theme: {
            dark_mode: true
          }
        }
      ],
      socials: {
        website: 'https://cronos.org/',
        x: 'https://x.com/cronos_chain'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-27',
            base_denom: 'basecro',
            chain_name: 'cryptoorgchain'
          },
          chain: {
            channel_id: 'channel-187'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Theta testnet version of the Dora Vota.',
      denom_units: [{
          denom: 'ibc/AB556501A8873E00928AD9A75245D6178747111913D292ABB269D268950CB8B7',
          exponent: 0,
          aliases: ['peaka']
        }, {
          denom: 'DORA',
          exponent: 18
        }],
      base: 'ibc/AB556501A8873E00928AD9A75245D6178747111913D292ABB269D268950CB8B7',
      name: 'Dora Vota',
      display: 'DORA',
      symbol: 'DORA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/doravota.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'peaka',
            chain_name: 'doravota'
          },
          chain: {
            channel_id: 'channel-750'
          }
        }]
    },
    {
      description: 'Dragon Token is the native staking and governance token of Dungeon Chain, serving as the backbone of the ecosystem. Its primary roles include staking, where users stake Dragon Tokens to secure the network, enhance its functionality, and earn rewards in return; governance, granting token holders voting rights to influence key decisions such as game onboarding, protocol updates, and community-driven initiatives; and ecosystem growth, facilitating transactions, incentivizing developers, and promoting the creation of new interchain games. Dragon Token ensures a decentralized, fair, and community-driven ecosystem, fostering the evolution of blockchain-based gaming. It plays a crucial role in driving the growth of Dungeon Chain by empowering both developers and players to participate actively in the ecosystem\'s governance and success.',
      denom_units: [{
          denom: 'ibc/0F8D3C0F081E126A4E275703DA67165DA5353C81F45E945140D0F961B9F7692A',
          exponent: 0,
          aliases: ['udgn']
        }, {
          denom: 'DGN',
          exponent: 6
        }],
      base: 'ibc/0F8D3C0F081E126A4E275703DA67165DA5353C81F45E945140D0F961B9F7692A',
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
            channel_id: 'channel-5308',
            base_denom: 'udgn',
            chain_name: 'dungeon'
          },
          chain: {
            channel_id: 'channel-1560'
          }
        }]
    },
    {
      description: 'The native governance and staking token of the Dymension Hub',
      denom_units: [{
          denom: 'ibc/49ACCECDED4A6A2B5DD683FA048235F4F66B65F58CD558C9A441195502191D01',
          exponent: 0,
          aliases: ['adym']
        }, {
          denom: 'dym',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/49ACCECDED4A6A2B5DD683FA048235F4F66B65F58CD558C9A441195502191D01',
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
            channel_id: 'channel-1',
            base_denom: 'adym',
            chain_name: 'dymension'
          },
          chain: {
            channel_id: 'channel-794'
          }
        }]
    },
    {
      description: 'The native token of Elys Network',
      denom_units: [
        {
          denom: 'ibc/0872AF0D1B0F6F23BA67631F9A4AFF633F289EE7B390478D7BA4F064A5135162',
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
      base: 'ibc/0872AF0D1B0F6F23BA67631F9A4AFF633F289EE7B390478D7BA4F064A5135162',
      name: 'Elys Network',
      display: 'elys',
      symbol: 'ELYS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/elys/images/elys.png'
      },
      coingecko_id: 'elys-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/elys/images/elys.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uelys',
            chain_name: 'elys'
          },
          chain: {
            channel_id: 'channel-1266'
          }
        }]
    },
    {
      description: 'Eden token definition',
      denom_units: [
        {
          denom: 'ibc/22B6BC43434DE9470B3A8EBC049E67362CAF7F523BE103203405546E6E4AF565',
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
      base: 'ibc/22B6BC43434DE9470B3A8EBC049E67362CAF7F523BE103203405546E6E4AF565',
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
            channel_id: 'channel-1',
            base_denom: 'ueden',
            chain_name: 'elys'
          },
          chain: {
            channel_id: 'channel-1266'
          }
        }]
    },
    {
      description: 'Eden BOOST token definition',
      denom_units: [
        {
          denom: 'ibc/F0280DA924768646FA39E7C08FA6935B4C5A313C3C5BA611095350CE8B45C742',
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
      base: 'ibc/F0280DA924768646FA39E7C08FA6935B4C5A313C3C5BA611095350CE8B45C742',
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
            channel_id: 'channel-1',
            base_denom: 'uedenb',
            chain_name: 'elys'
          },
          chain: {
            channel_id: 'channel-1266'
          }
        }]
    },
    {
      description: 'e-Money NGM staking token. In addition to earning staking rewards the token is bought back and burned based on e-Money stablecoin inflation.',
      denom_units: [{
          denom: 'ibc/E070CE91CC4BD15AEC9B5788C0826755AAD35052A3037E9AC62BE70B4C9A7DBB',
          exponent: 0,
          aliases: ['ungm']
        }, {
          denom: 'ngm',
          exponent: 6
        }],
      base: 'ibc/E070CE91CC4BD15AEC9B5788C0826755AAD35052A3037E9AC62BE70B4C9A7DBB',
      name: 'e-Money',
      display: 'ngm',
      symbol: 'NGM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg'
      },
      coingecko_id: 'e-money',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ungm',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-202'
          }
        }]
    },
    {
      description: 'e-Money EUR stablecoin. Audited and backed by fiat EUR deposits and government bonds.',
      denom_units: [{
          denom: 'ibc/B93F321238F7BB15AB5B882660AAE72286C8E9035DE34E2B30F60E54C623C63C',
          exponent: 0,
          aliases: ['eeur']
        }, {
          denom: 'eur',
          exponent: 6
        }],
      base: 'ibc/B93F321238F7BB15AB5B882660AAE72286C8E9035DE34E2B30F60E54C623C63C',
      name: 'e-Money EUR',
      display: 'eur',
      symbol: 'EEUR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg'
      },
      coingecko_id: 'e-money-eur',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'eeur',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-202'
          }
        }]
    },
    {
      description: 'e-Money CHF stablecoin. Audited and backed by fiat CHF deposits and government bonds.',
      denom_units: [{
          denom: 'ibc/96344D426100A0885D84F1C588E3C2C2A8CB2A82B446FC8F63B91E4B70BF33EB',
          exponent: 0,
          aliases: ['echf']
        }, {
          denom: 'chf',
          exponent: 6
        }],
      base: 'ibc/96344D426100A0885D84F1C588E3C2C2A8CB2A82B446FC8F63B91E4B70BF33EB',
      name: 'e-Money CHF',
      display: 'chf',
      symbol: 'ECHF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'echf',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-202'
          }
        }]
    },
    {
      description: 'e-Money NOK stablecoin. Audited and backed by fiat NOK deposits and government bonds.',
      denom_units: [{
          denom: 'ibc/F998631ADCB33376AB66126D8BF5212314F15A960C215180D06ECFA9FA7F48E6',
          exponent: 0,
          aliases: ['enok']
        }, {
          denom: 'nok',
          exponent: 6
        }],
      base: 'ibc/F998631ADCB33376AB66126D8BF5212314F15A960C215180D06ECFA9FA7F48E6',
      name: 'e-Money NOK',
      display: 'nok',
      symbol: 'ENOK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'enok',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-202'
          }
        }]
    },
    {
      description: 'e-Money DKK stablecoin. Audited and backed by fiat DKK deposits and government bonds.',
      denom_units: [{
          denom: 'ibc/6EC3B085692C4507A2365E88E82CBCB32DD58E0099056CBC16824D2EE99C5E00',
          exponent: 0,
          aliases: ['edkk']
        }, {
          denom: 'dkk',
          exponent: 6
        }],
      base: 'ibc/6EC3B085692C4507A2365E88E82CBCB32DD58E0099056CBC16824D2EE99C5E00',
      name: 'e-Money DKK',
      display: 'dkk',
      symbol: 'EDKK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'edkk',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-202'
          }
        }]
    },
    {
      description: 'e-Money SEK stablecoin. Audited and backed by fiat SEK deposits and government bonds.',
      denom_units: [{
          denom: 'ibc/178B678FFA6991C1064332FBA0C9A4FC954E3DD66DD5B692761172DB5559F6D2',
          exponent: 0,
          aliases: ['esek']
        }, {
          denom: 'sek',
          exponent: 6
        }],
      base: 'ibc/178B678FFA6991C1064332FBA0C9A4FC954E3DD66DD5B692761172DB5559F6D2',
      name: 'e-Money SEK',
      display: 'sek',
      symbol: 'ESEK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'esek',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-202'
          }
        }]
    },
    {
      description: 'The native staking and governance token of Empower.',
      denom_units: [{
          denom: 'ibc/F58D58F943FC243D4FE0CFE0A9E01DB420DDF994D18C9A7F2939FF1C4C278C31',
          exponent: 0,
          aliases: ['umpwr']
        }, {
          denom: 'mpwr',
          exponent: 6
        }],
      base: 'ibc/F58D58F943FC243D4FE0CFE0A9E01DB420DDF994D18C9A7F2939FF1C4C278C31',
      name: 'MPWR',
      display: 'mpwr',
      symbol: 'MPWR',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg',
          theme: {
            circle: true
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.png',
          theme: {
            circle: false
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'umpwr',
            chain_name: 'empowerchain'
          },
          chain: {
            channel_id: 'channel-621'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Evmos Hub',
      denom_units: [{
          denom: 'ibc/19DD710119533524061885A6F190B18AF28D9537E2BAE37F32A62C1A25979287',
          exponent: 0,
          aliases: ['aevmos']
        }, {
          denom: 'evmos',
          exponent: 18
        }],
      base: 'ibc/19DD710119533524061885A6F190B18AF28D9537E2BAE37F32A62C1A25979287',
      name: 'Evmos',
      display: 'evmos',
      symbol: 'EVMOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
      },
      coingecko_id: 'evmos',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
        }],
      socials: {
        website: 'https://evmos.org/',
        x: 'https://x.com/EvmosOrg'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'aevmos',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-292'
          }
        }]
    },
    {
      description: 'The token of Neokingdom DAO.',
      denom_units: [{
          denom: 'ibc/FCB0126B85D91CCBDF17FC273023372D41DE033B6E6B666EA2E0E30EAECFEFFC',
          exponent: 0,
          aliases: ['erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9']
        }, {
          denom: 'neok',
          exponent: 18
        }],
      base: 'ibc/FCB0126B85D91CCBDF17FC273023372D41DE033B6E6B666EA2E0E30EAECFEFFC',
      name: 'Neokingdom DAO',
      display: 'neok',
      symbol: 'NEOK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
        }],
      socials: {
        website: 'https://www.neokingdom.org/',
        x: 'https://x.com/NEOKingdomDAO'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-292'
          }
        }]
    },
    {
      description: 'The legacy token of Teledisko DAO.',
      denom_units: [{
          denom: 'ibc/AE07DE43C4743BA0CE79576B70B280516F395F2F45B905668B150A022DDA4080',
          exponent: 0,
          aliases: ['erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280']
        }, {
          denom: 'berlin-legacy',
          exponent: 18
        }],
      base: 'ibc/AE07DE43C4743BA0CE79576B70B280516F395F2F45B905668B150A022DDA4080',
      name: 'Teledisko DAO - Legacy',
      display: 'berlin-legacy',
      symbol: 'BERLIN-legacy',
      type_asset: 'erc20',
      address: '0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-292'
          }
        }]
    },
    {
      description: 'The token of Crowdpunk DAO',
      denom_units: [{
          denom: 'ibc/74C4FE1EC3BDD66B02C691496371DDBB86DDE512C5BC072D76262C6C9B4B20D1',
          exponent: 0,
          aliases: ['erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F']
        }, {
          denom: 'crowdp',
          exponent: 18
        }],
      base: 'ibc/74C4FE1EC3BDD66B02C691496371DDBB86DDE512C5BC072D76262C6C9B4B20D1',
      name: 'Crowdpunk DAO',
      display: 'crowdp',
      address: '0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F',
      symbol: 'CROWDP',
      type_asset: 'erc20',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-292'
          }
        }]
    },
    {
      description: 'PUNDIAI is an ERC-20 utility and governance token of Pundi AI ecosystem, including Pundi AI Data Platform, Pundi AI Marketplace, Pundi AIFX Omni Layer and Pundi MM AI Agent Launcher.',
      denom_units: [{
          denom: 'ibc/19EAFC8147E47371620ED2C8EC90B3612C19408FC59A89AAD79033A88ABBF078',
          exponent: 0,
          aliases: ['apundiai']
        }, {
          denom: 'pundiai',
          exponent: 18
        }],
      base: 'ibc/19EAFC8147E47371620ED2C8EC90B3612C19408FC59A89AAD79033A88ABBF078',
      name: 'Pundi AI',
      display: 'pundiai',
      symbol: 'PUNDIAI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/PUNDIAI.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/PUNDIAI.svg'
      },
      coingecko_id: 'pundi-aifx',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/PUNDIAI.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/PUNDIAI.svg'
        }],
      socials: {
        website: 'https://fx.pundi.ai',
        x: 'https://x.com/PundiAI'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'apundiai',
            chain_name: 'fxcore'
          },
          chain: {
            channel_id: 'channel-585'
          }
        }]
    },
    {
      description: 'The native staking token of the Function X',
      denom_units: [{
          denom: 'ibc/4925E6ABA571A44D2BE0286D2D29AF42A294D0FF2BB16490149A1B26EAD33729',
          exponent: 0,
          aliases: ['FX']
        }, {
          denom: 'WFX',
          exponent: 18
        }],
      base: 'ibc/4925E6ABA571A44D2BE0286D2D29AF42A294D0FF2BB16490149A1B26EAD33729',
      name: 'Function X',
      display: 'WFX',
      symbol: 'FX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
      },
      coingecko_id: 'fx-coin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
        }],
      socials: {
        website: 'https://fx.pundi.ai',
        x: 'https://x.com/PundiAI'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'FX',
            chain_name: 'fxcore'
          },
          chain: {
            channel_id: 'channel-585'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Haqq Network',
      denom_units: [{
          denom: 'ibc/5CF697413DE79A9340E8B77A278FEBF6ACD17CB22DAAF758841959A8D69A2859',
          exponent: 0,
          aliases: ['aISLM']
        }, {
          denom: 'ISLM',
          exponent: 18
        }],
      base: 'ibc/5CF697413DE79A9340E8B77A278FEBF6ACD17CB22DAAF758841959A8D69A2859',
      name: 'Islamic Coin',
      display: 'ISLM',
      symbol: 'ISLM',
      coingecko_id: 'islamic-coin',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg'
      },
      socials: {
        website: 'https://islamiccoin.net',
        x: 'https://x.com/islamic_coin'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'aISLM',
            chain_name: 'haqq'
          },
          chain: {
            channel_id: 'channel-632'
          }
        }]
    },
    {
      description: 'Deenar gold-backed stablecoin',
      denom_units: [{
          denom: 'ibc/CE55BE46567E059638E132226A8C7233FF256EE0B5E25BDBC789182DC6CD52B1',
          exponent: 0,
          aliases: ['erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE']
        }, {
          denom: 'DEEN',
          exponent: 6
        }],
      base: 'ibc/CE55BE46567E059638E132226A8C7233FF256EE0B5E25BDBC789182DC6CD52B1',
      name: 'Deenar',
      display: 'DEEN',
      address: '0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE',
      symbol: 'DEEN',
      type_asset: 'erc20',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE',
            chain_name: 'haqq'
          },
          chain: {
            channel_id: 'channel-632'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.svg'
      },
      socials: {
        website: 'https://deenar.com',
        x: 'https://x.com/DeenarGold'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.svg',
          theme: {
            circle: true
          }
        }]
    },
    {
      description: 'The native token of the Internet of Impacts of inter-connected networks, powered by IXO Protocol blockchains.',
      denom_units: [{
          denom: 'ibc/B2B5AEE174062FA7804AC95223D8169852F8F58962C51C66391C272C838258B7',
          exponent: 0,
          aliases: ['uixo']
        }, {
          denom: 'ixo',
          exponent: 6
        }],
      base: 'ibc/B2B5AEE174062FA7804AC95223D8169852F8F58962C51C66391C272C838258B7',
      name: 'IXO',
      display: 'ixo',
      symbol: 'IXO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
      },
      coingecko_id: 'ixo',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uixo',
            chain_name: 'impacthub'
          },
          chain: {
            channel_id: 'channel-204'
          }
        }]
    },
    {
      description: 'Injective is a decentralized exchange protocol that enables fast, secure, and fully decentralized trading of derivatives, futures, and spot markets.',
      denom_units: [{
          denom: 'ibc/6469BDA6F62C4F4B8F76629FA1E72A02A3D1DD9E2B22DDB3C3B2296DEAD29AB8',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/6469BDA6F62C4F4B8F76629FA1E72A02A3D1DD9E2B22DDB3C3B2296DEAD29AB8',
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
            channel_id: 'channel-1',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-220'
          }
        }]
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'ibc/74392C3C1F0A88C62C5FF0C77E444D8BBA11FAE3F7AC337891219BEF76ED0178',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'ibc/74392C3C1F0A88C62C5FF0C77E444D8BBA11FAE3F7AC337891219BEF76ED0178',
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
            channel_id: 'channel-1',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-220'
          }
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'ibc/723426A05EDCE0BAA4FDC47A022881CDA0F0BE8063BDA625155BA3BB424744E0',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'ibc/723426A05EDCE0BAA4FDC47A022881CDA0F0BE8063BDA625155BA3BB424744E0',
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
            channel_id: 'channel-1',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-220'
          }
        }]
    },
    {
      description: 'A receipt token for lent INJ issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/CF2927188866FEF274217FA353B726408815DA0851753321DE7E7F11047A2737',
          exponent: 0,
          aliases: ['inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f']
        }, {
          denom: 'nINJ',
          exponent: 18
        }],
      base: 'ibc/CF2927188866FEF274217FA353B726408815DA0851753321DE7E7F11047A2737',
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
            channel_id: 'channel-1',
            base_denom: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-220'
          }
        }]
    },
    {
      description: 'A receipt token for lent ATOM issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/FEF72C8A43A9A60B15EE7BD44BE87D5C44E9DBD071B7D5517F999B0F6CC2E5EE',
          exponent: 0,
          aliases: ['inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780']
        }, {
          denom: 'nATOM',
          exponent: 6
        }],
      base: 'ibc/FEF72C8A43A9A60B15EE7BD44BE87D5C44E9DBD071B7D5517F999B0F6CC2E5EE',
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
            channel_id: 'channel-1',
            base_denom: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-220'
          }
        }]
    },
    {
      description: 'A receipt token for lent WETH issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/BB027877671118BE5B1424F303B9D58FB500478B5EB7D16909B72A28029D3520',
          exponent: 0,
          aliases: ['inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt']
        }, {
          denom: 'nWETH',
          exponent: 18
        }],
      base: 'ibc/BB027877671118BE5B1424F303B9D58FB500478B5EB7D16909B72A28029D3520',
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
            channel_id: 'channel-1',
            base_denom: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-220'
          }
        }]
    },
    {
      description: 'A receipt token for lent USDT issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/57535F8B5C6B26D4459F48C3622E735DEB1AAB38AE8ABA6F951A782546434AF6',
          exponent: 0,
          aliases: ['inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s']
        }, {
          denom: 'nUSDT',
          exponent: 6
        }],
      base: 'ibc/57535F8B5C6B26D4459F48C3622E735DEB1AAB38AE8ABA6F951A782546434AF6',
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
            channel_id: 'channel-1',
            base_denom: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-220'
          }
        }]
    },
    {
      description: 'A receipt token for lent TIA issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/364AF8695E6F89645850CD93737DF602E34317467B8B6302EC6D71C811007314',
          exponent: 0,
          aliases: ['inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv']
        }, {
          denom: 'nTIA',
          exponent: 6
        }],
      base: 'ibc/364AF8695E6F89645850CD93737DF602E34317467B8B6302EC6D71C811007314',
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
            channel_id: 'channel-1',
            base_denom: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-220'
          }
        }]
    },
    {
      description: 'The native token of INTENTO',
      denom_units: [{
          denom: 'ibc/DC1EF3EA03CD7F2226981D610335C3E62E3DD868A1B83EB017CE294E29C8D473',
          exponent: 0,
          aliases: ['uinto']
        }, {
          denom: 'into',
          exponent: 6
        }],
      base: 'ibc/DC1EF3EA03CD7F2226981D610335C3E62E3DD868A1B83EB017CE294E29C8D473',
      name: 'Intento',
      display: 'into',
      symbol: 'INTO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/intento/images/into.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/intento/images/into.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/intento/images/into.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/intento/images/into.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uinto',
            chain_name: 'intento'
          },
          chain: {
            channel_id: 'channel-1492'
          }
        }]
    },
    {
      description: 'The IRIS token is the native governance token for the IrisNet chain.',
      denom_units: [{
          denom: 'ibc/12DA42304EE1CE96071F712AA4D58186AD11C3165C0DCDA71E017A54F3935E66',
          exponent: 0,
          aliases: ['uiris']
        }, {
          denom: 'iris',
          exponent: 6
        }],
      base: 'ibc/12DA42304EE1CE96071F712AA4D58186AD11C3165C0DCDA71E017A54F3935E66',
      name: 'IRISnet',
      display: 'iris',
      symbol: 'IRIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg'
      },
      coingecko_id: 'iris-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'uiris',
            chain_name: 'irisnet'
          },
          chain: {
            channel_id: 'channel-182'
          }
        }]
    },
    {
      description: 'The native staking and governance token of Joltify',
      denom_units: [{
          denom: 'ibc/9B76DFC21CF8F4DF5B8514CE82D2CCE79415C4F8525E04509BB48B487CB213DE',
          exponent: 0,
          aliases: ['ujolt']
        }, {
          denom: 'jolt',
          exponent: 6
        }],
      base: 'ibc/9B76DFC21CF8F4DF5B8514CE82D2CCE79415C4F8525E04509BB48B487CB213DE',
      name: 'Joltify',
      display: 'jolt',
      symbol: 'JOLT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/joltify/images/jolt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/joltify/images/jolt.svg'
        }],
      coingecko_id: 'joltify',
      keywords: ['staking'],
      socials: {
        website: 'https://www.joltify.io/',
        x: 'https://x.com/joltify_finance'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'ujolt',
            chain_name: 'joltify'
          },
          chain: {
            channel_id: 'channel-866'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/CDAB23DA5495290063363BD1C3499E26189036302DC689985A7E23F8DF8D8DB0',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ibc/CDAB23DA5495290063363BD1C3499E26189036302DC689985A7E23F8DF8D8DB0',
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
            channel_id: 'channel-1',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-207'
          }
        }]
    },
    {
      description: 'Kava is a decentralized finance (DeFi) platform that provides a range of financial services, including lending, borrowing, and stablecoins, leveraging the Cosmos and Ethereum ecosystems.',
      denom_units: [{
          denom: 'ibc/8870C4203CEBF2279BA065E3DE95FC3F8E05A4A93424E7DC707A21514BE353A0',
          exponent: 0,
          aliases: ['ukava']
        }, {
          denom: 'kava',
          exponent: 6
        }],
      base: 'ibc/8870C4203CEBF2279BA065E3DE95FC3F8E05A4A93424E7DC707A21514BE353A0',
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
            channel_id: 'channel-0',
            base_denom: 'ukava',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-277'
          }
        }]
    },
    {
      description: 'Governance token of Kava Lend Protocol',
      denom_units: [{
          denom: 'ibc/752AC6B389EB9F16013C07987A3A04203EABABEB811F0026A24A5A29CF014366',
          exponent: 0,
          aliases: ['hard']
        }, {
          denom: 'HARD',
          exponent: 6
        }],
      base: 'ibc/752AC6B389EB9F16013C07987A3A04203EABABEB811F0026A24A5A29CF014366',
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
            channel_id: 'channel-0',
            base_denom: 'hard',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-277'
          }
        }]
    },
    {
      description: 'Governance token of Kava Swap Protocol',
      denom_units: [{
          denom: 'ibc/58E6660E723E3D6854A1190E2516AF71280F0B20510ABA1A13456F5D204F6D7D',
          exponent: 0,
          aliases: ['swp']
        }, {
          denom: 'SWP',
          exponent: 6
        }],
      base: 'ibc/58E6660E723E3D6854A1190E2516AF71280F0B20510ABA1A13456F5D204F6D7D',
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
            channel_id: 'channel-0',
            base_denom: 'swp',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-277'
          }
        }]
    },
    {
      description: 'The native stablecoin of Kava',
      denom_units: [{
          denom: 'ibc/621EBC891F642B44778FD0E9DACBBC14755280C897DD010AA104889C3FDCED06',
          exponent: 0,
          aliases: ['usdx']
        }, {
          denom: 'USDX',
          exponent: 6
        }],
      base: 'ibc/621EBC891F642B44778FD0E9DACBBC14755280C897DD010AA104889C3FDCED06',
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
            channel_id: 'channel-0',
            base_denom: 'usdx',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-277'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/F04D72CF9B5D9C849BB278B691CDFA2241813327430EC9CDC83F8F4CA4CDC2B0',
          exponent: 0,
          aliases: ['erc20/tether/usdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      base: 'ibc/F04D72CF9B5D9C849BB278B691CDFA2241813327430EC9CDC83F8F4CA4CDC2B0',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      coingecko_id: 'tether',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'erc20/tether/usdt',
            chain_name: 'kava'
          },
          chain: {
            channel_id: 'channel-277'
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
      description: 'The native token of Ki Chain',
      denom_units: [{
          denom: 'ibc/533E5FFC606FD11B8DCA309C66AFD6A1F046EF784A73F323A332CF6823F0EA87',
          exponent: 0,
          aliases: ['uxki']
        }, {
          denom: 'xki',
          exponent: 6
        }],
      base: 'ibc/533E5FFC606FD11B8DCA309C66AFD6A1F046EF784A73F323A332CF6823F0EA87',
      name: 'Ki',
      display: 'xki',
      symbol: 'XKI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg'
      },
      coingecko_id: 'ki',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uxki',
            chain_name: 'kichain'
          },
          chain: {
            channel_id: 'channel-223'
          }
        }]
    },
    {
      description: 'The native token of kopi',
      denom_units: [{
          denom: 'ibc/E1BB6871F62146B83074441294F1FECC0829D08D79DC25D86A1962ABAC9B73B8',
          exponent: 0,
          aliases: ['ukopi']
        }, {
          denom: 'XKP',
          exponent: 6
        }],
      base: 'ibc/E1BB6871F62146B83074441294F1FECC0829D08D79DC25D86A1962ABAC9B73B8',
      name: 'XKP',
      display: 'XKP',
      symbol: 'XKP',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/kopi.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/kopi.svg'
        }],
      keywords: [
        'dex',
        'mm',
        'staking',
        'automations'
      ],
      socials: {
        website: 'https://kopi.money/',
        discord: 'https://discord.gg/kopi-money',
        x: 'https://x.com/kopi_money'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'ukopi',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-1351'
          }
        }]
    },
    {
      description: 'A MM deposit receipt of the Stablecoin native to the Kopi blockchain',
      denom_units: [{
          denom: 'ibc/31A8DBF578862EB2AD9458CD0F03510D8BEE8BBA839FE70F4B5C11477B86C599',
          exponent: 0,
          aliases: ['uckusd']
        }, {
          denom: 'ckUSD',
          exponent: 6
        }],
      base: 'ibc/31A8DBF578862EB2AD9458CD0F03510D8BEE8BBA839FE70F4B5C11477B86C599',
      name: 'ckUSD',
      display: 'ckUSD',
      symbol: 'CKUSD',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/ckusd.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/ckusd.svg'
        }],
      keywords: ['dex', 'mm'],
      socials: {
        discord: 'https://discord.gg/kopi-money',
        x: 'https://x.com/kopi_money'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'uckusd',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-1351'
          }
        }]
    },
    {
      description: 'A MM deposit receipt of the Stablecoin USDC from noble Chain',
      denom_units: [{
          denom: 'ibc/42B3BA076434E9BB58ACA07F8C0019857548257F2CFCB1112C059455E87993E0',
          exponent: 0,
          aliases: ['ucusdc']
        }, {
          denom: 'cUSDC',
          exponent: 6
        }],
      base: 'ibc/42B3BA076434E9BB58ACA07F8C0019857548257F2CFCB1112C059455E87993E0',
      name: 'cUSDC',
      display: 'cUSDC',
      symbol: 'CUSDC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/cusdc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/cusdc.svg'
        }],
      keywords: ['dex', 'mm'],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'ucusdc',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-1351'
          }
        }]
    },
    {
      description: 'A MM deposit receipt of the Stablecoin USDT from Injective Chain',
      denom_units: [{
          denom: 'ibc/BC1000468BB8D49034565FE4855DDDDB711ACD319C4A5B8B034618E4CF59C2B8',
          exponent: 0,
          aliases: ['ucusdtinj']
        }, {
          denom: 'cUSDT.inj',
          exponent: 6
        }],
      base: 'ibc/BC1000468BB8D49034565FE4855DDDDB711ACD319C4A5B8B034618E4CF59C2B8',
      name: 'cUSDT.inj',
      display: 'cUSDT.inj',
      symbol: 'cUSDT.inj',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/cusdt.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/cusdt.svg'
        }],
      keywords: ['dex', 'mm'],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'ucusdtinj',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-1351'
          }
        }]
    },
    {
      description: 'arbitrage receipt token of cUSDT',
      denom_units: [{
          denom: 'ibc/DC800105E0C6997C513D5572F4BECB8810C20F5D8BC3FA32F6B86DBAA5F5EC00',
          exponent: 0,
          aliases: ['uasusdtinj']
        }, {
          denom: 'asusdtinj',
          exponent: 6
        }],
      base: 'ibc/DC800105E0C6997C513D5572F4BECB8810C20F5D8BC3FA32F6B86DBAA5F5EC00',
      name: 'asUSDT.inj',
      display: 'asusdtinj',
      symbol: 'asUSDT.inj',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/asusdt.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/asusdt.svg'
        }],
      keywords: ['dex', 'mm'],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'uasusdtinj',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-1351'
          }
        }]
    },
    {
      description: 'arbitrage receipt token of cUSDC',
      denom_units: [{
          denom: 'ibc/0D9438F920A4D000D6FD9D37BCB874D8142BA6E56B9967E33E60D0999C7AD014',
          exponent: 0,
          aliases: ['uasusdc']
        }, {
          denom: 'asUSDC',
          exponent: 6
        }],
      base: 'ibc/0D9438F920A4D000D6FD9D37BCB874D8142BA6E56B9967E33E60D0999C7AD014',
      name: 'asUSDC',
      display: 'asUSDC',
      symbol: 'ASUSDC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/asusdc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/asusdc.svg'
        }],
      keywords: ['dex', 'mm'],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'uasusdc',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-1351'
          }
        }]
    },
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      denom_units: [{
          denom: 'ibc/4CC44260793F84006656DD868E017578F827A492978161DA31D7572BCB3F4289',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/4CC44260793F84006656DD868E017578F827A492978161DA31D7572BCB3F4289',
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
            channel_id: 'channel-0',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-343'
          }
        }]
    },
    {
      description: 'Lava Network is a modular data network designed to provide fast, reliable, and scalable access to blockchain data for developers and users.',
      denom_units: [{
          denom: 'ibc/DA8A15E8BC3962CC433F2B4CA0B3233723DE4A1A68B17DB85C63ECC5B0F83F65',
          exponent: 0,
          aliases: ['ulava']
        }, {
          denom: 'lava',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/DA8A15E8BC3962CC433F2B4CA0B3233723DE4A1A68B17DB85C63ECC5B0F83F65',
      name: 'Lava',
      coingecko_id: 'lava-network',
      display: 'lava',
      symbol: 'LAVA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava.png'
        }],
      keywords: [
        'modular',
        'data',
        'data access',
        'rpc',
        'staking',
        'dual staking',
        'indexing',
        'incentivized public rpc'
      ],
      socials: {
        website: 'https://lavanet.xyz',
        x: 'https://x.com/lavanetxyz'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'ulava',
            chain_name: 'lava'
          },
          chain: {
            channel_id: 'channel-969'
          }
        }]
    },
    {
      description: 'LIKE is the native staking and governance token of LikeCoin chain, a Decentralized Publishing Infrastructure to empower content ownership, authenticity, and provenance.',
      denom_units: [{
          denom: 'ibc/1D5826F7EDE6E3B13009FEF994DC9CAAF15CC24CA7A9FF436FFB2E56FD72F54F',
          exponent: 0,
          aliases: ['nanolike']
        }, {
          denom: 'like',
          exponent: 9
        }],
      base: 'ibc/1D5826F7EDE6E3B13009FEF994DC9CAAF15CC24CA7A9FF436FFB2E56FD72F54F',
      name: 'LikeCoin',
      display: 'like',
      symbol: 'LIKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'nanolike',
            chain_name: 'likecoin'
          },
          chain: {
            channel_id: 'channel-217'
          }
        }]
    },
    {
      description: 'LOM is the native fee token of Lombard Ledger',
      denom_units: [{
          denom: 'ibc/CA894919487EB2CFED8A23618B2291CF014F4DF09E4FD23A574817DC9018EE88',
          exponent: 0,
          aliases: ['ulom']
        }, {
          denom: 'lom',
          exponent: 6
        }],
      base: 'ibc/CA894919487EB2CFED8A23618B2291CF014F4DF09E4FD23A574817DC9018EE88',
      name: 'Lom',
      display: 'lom',
      symbol: 'LOM',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ulom',
            chain_name: 'lombardledger'
          },
          chain: {
            channel_id: 'channel-1340'
          }
        }]
    },
    {
      description: 'ustake is a synthetic token to implement a PoA with BFT features over CometBFT',
      denom_units: [{
          denom: 'ibc/5DB06CF0697F085EA4A630A9635819C5036299E9EFEFAE8402CF36D6014C04E7',
          exponent: 0,
          aliases: ['ustake']
        }],
      base: 'ibc/5DB06CF0697F085EA4A630A9635819C5036299E9EFEFAE8402CF36D6014C04E7',
      name: 'ustake',
      display: 'ustake',
      symbol: 'USTAKE',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ustake',
            chain_name: 'lombardledger'
          },
          chain: {
            channel_id: 'channel-1340'
          }
        }]
    },
    {
      description: 'Native token of the Lum Network',
      denom_units: [{
          denom: 'ibc/3B87FAEE2F62BF291AE771D9EC3A8894A4533F3E2872592F96FEDFDB97680EC1',
          exponent: 0,
          aliases: ['ulum']
        }, {
          denom: 'lum',
          exponent: 6
        }],
      base: 'ibc/3B87FAEE2F62BF291AE771D9EC3A8894A4533F3E2872592F96FEDFDB97680EC1',
      name: 'Lum',
      display: 'lum',
      symbol: 'LUM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg'
      },
      coingecko_id: 'lum-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'ulum',
            chain_name: 'lumnetwork'
          },
          chain: {
            channel_id: 'channel-566'
          }
        }]
    },
    {
      description: 'The native token of MANTRA',
      denom_units: [{
          denom: 'ibc/30DE434D61B6C6F0E3132FE1F2413C76D2EBA63B3E18A211C4CD192A5F5580F1',
          exponent: 0,
          aliases: ['uom']
        }, {
          denom: 'om',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/30DE434D61B6C6F0E3132FE1F2413C76D2EBA63B3E18A211C4CD192A5F5580F1',
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
            channel_id: 'channel-3',
            base_denom: 'uom',
            chain_name: 'mantrachain'
          },
          chain: {
            channel_id: 'channel-1252'
          }
        }]
    },
    {
      description: 'Neutron is a smart contract blockchain within the Cosmos ecosystem, leveraging the Cosmos Hub\'s security to provide cross-chain DeFi applications.',
      denom_units: [{
          denom: 'ibc/0025F8A87464A471E66B234C4F93AEC5B4DA3D42D7986451A059273426290DD5',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/0025F8A87464A471E66B234C4F93AEC5B4DA3D42D7986451A059273426290DD5',
      name: 'Neutron',
      display: 'ntrn',
      symbol: 'NTRN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
      },
      coingecko_id: 'neutron-3',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://neutron.org/',
        x: 'https://x.com/Neutron_org'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-569'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/47D6FC41B4C45A9F47C045755E07C839EB12F4ACCEB39C74E9959C0C0811EF11',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/47D6FC41B4C45A9F47C045755E07C839EB12F4ACCEB39C74E9959C0C0811EF11',
      name: 'Bitcosmos',
      display: 'bitcosmos',
      symbol: 'BTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-569'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/ABB481A12EADB23AF90AAADF4F722B86E3A87A0D1E8FEBD1720836AD353E703E',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/ABB481A12EADB23AF90AAADF4F722B86E3A87A0D1E8FEBD1720836AD353E703E',
      name: 'wtf',
      display: 'wtf',
      symbol: 'WTF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-569'
          }
        }]
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/BA7024C8DD092F2DDC83D1886BDA94102396C46DF6D7A478CFA0138BAFE811D7',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/BA7024C8DD092F2DDC83D1886BDA94102396C46DF6D7A478CFA0138BAFE811D7',
      name: 'boy',
      display: 'boy',
      symbol: 'BOY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-569'
          }
        }]
    },
    {
      description: 'The permissioned staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/7AED338D55DDE4CECFD35253E6349D7571B66897C590F75B6420C854B20DA692',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/7AED338D55DDE4CECFD35253E6349D7571B66897C590F75B6420C854B20DA692',
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
            channel_id: 'channel-4',
            base_denom: 'ustake',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-536'
          }
        }]
    },
    {
      description: 'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [{
          denom: 'ibc/63B7FB38B505DE63FC5F031B9E4AD6BF9FED63A36655F83E115A86CDEEA66826',
          exponent: 0,
          aliases: ['ufrienzies']
        }, {
          denom: 'frienzies',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/63B7FB38B505DE63FC5F031B9E4AD6BF9FED63A36655F83E115A86CDEEA66826',
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
            channel_id: 'channel-4',
            base_denom: 'ufrienzies',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-536'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/9AD012273BA6B6C2E7B88BFFFA984E58C0447A16877C493C617813634AB833DF',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/9AD012273BA6B6C2E7B88BFFFA984E58C0447A16877C493C617813634AB833DF',
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
            channel_id: 'channel-4',
            base_denom: 'ausdy',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-536'
          }
        }]
    },
    {
      description: 'USDN token',
      denom_units: [{
          denom: 'ibc/4EAD1546F46B1BB2B4D67FCDBFFF0FCD83D53A7A2EA533F1E783727DAA32CF98',
          exponent: 0,
          aliases: ['uusdn']
        }, {
          denom: 'usdn',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/4EAD1546F46B1BB2B4D67FCDBFFF0FCD83D53A7A2EA533F1E783727DAA32CF98',
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
            channel_id: 'channel-4',
            base_denom: 'uusdn',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-536'
          }
        }]
    },
    {
      description: 'OmniFlix is a decentralized media platform that enables content creators to distribute, monetize, and manage their digital content using blockchain technology.',
      denom_units: [{
          denom: 'ibc/15B4D31D457B80DD46CA46F6B89FD6BB15CB92FE7BBF8763947417537C3A4C2E',
          exponent: 0,
          aliases: ['uflix']
        }, {
          denom: 'flix',
          exponent: 6
        }],
      base: 'ibc/15B4D31D457B80DD46CA46F6B89FD6BB15CB92FE7BBF8763947417537C3A4C2E',
      name: 'Flix',
      display: 'flix',
      symbol: 'FLIX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg'
      },
      coingecko_id: 'omniflix-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg'
        }],
      socials: {
        website: 'https://omniflix.network/',
        x: 'https://x.com/OmniFlixNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'uflix',
            chain_name: 'omniflixhub'
          },
          chain: {
            channel_id: 'channel-306'
          }
        }]
    },
    {
      description: 'The native token of Oraichain',
      denom_units: [{
          denom: 'ibc/4846F4382B7843861B6C5051134397359C8C94B547E8EA43EFAFEF4E5F7B7625',
          exponent: 0,
          aliases: ['orai']
        }, {
          denom: 'ORAI',
          exponent: 6
        }],
      base: 'ibc/4846F4382B7843861B6C5051134397359C8C94B547E8EA43EFAFEF4E5F7B7625',
      name: 'Oraichain',
      display: 'ORAI',
      symbol: 'ORAI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-token.svg'
      },
      coingecko_id: 'oraichain-token',
      socials: {
        website: 'https://orai.io/',
        x: 'https://x.com/oraichain'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-token.svg',
          theme: {
            circle: true
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg',
          theme: {
            circle: false,
            dark_mode: true
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.svg',
          theme: {
            circle: false,
            dark_mode: false
          }
        }
      ],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'orai',
            chain_name: 'oraichain'
          },
          chain: {
            channel_id: 'channel-301'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/14F9BC3E44B8A9C1BE1FB08980FAB87034C9905EF17CF2F5008FC085218811CC',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/14F9BC3E44B8A9C1BE1FB08980FAB87034C9905EF17CF2F5008FC085218811CC',
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
            channel_id: 'channel-0',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-141'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/5BB694D466CCF099EF73F165F88472AF51D9C4991EAA42BD1168C5304712CC0D',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/5BB694D466CCF099EF73F165F88472AF51D9C4991EAA42BD1168C5304712CC0D',
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
            channel_id: 'channel-0',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-141'
          }
        }]
    },
    {
      description: 'PAXI is the native token of the Paxi blockchain.',
      denom_units: [{
          denom: 'ibc/9AB9994A232592CCAE28FF4ADA5FF2C62B58C13595372C906EB45999694F0A4E',
          exponent: 0,
          aliases: ['upaxi']
        }, {
          denom: 'PAXI',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/9AB9994A232592CCAE28FF4ADA5FF2C62B58C13595372C906EB45999694F0A4E',
      name: 'Paxi',
      display: 'PAXI',
      symbol: 'PAXI',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/paxi/images/paxi.png',
          theme: {
            circle: false
          }
        }],
      keywords: ['staking'],
      socials: {
        website: 'https://paxinet.io'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'upaxi',
            chain_name: 'paxi'
          },
          chain: {
            channel_id: 'channel-1566'
          }
        }]
    },
    {
      description: 'Persistence One is building a Bitcoin Cross-chain Swaps solution, enabling fast, zero-slippage secure swaps across Bitcoin Layer 2s.',
      denom_units: [{
          denom: 'ibc/81D08BC39FB520EBD948CF017910DD69702D34BF5AC160F76D3B5CFC444EBCE0',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      base: 'ibc/81D08BC39FB520EBD948CF017910DD69702D34BF5AC160F76D3B5CFC444EBCE0',
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
            channel_id: 'channel-24',
            base_denom: 'uxprt',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-190'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Planq Network',
      denom_units: [{
          denom: 'ibc/1452F322F7B459CB7EC111AD5BD2404552B011375002C8C85BA615A95B9121CF',
          exponent: 0,
          aliases: ['aplanq']
        }, {
          denom: 'planq',
          exponent: 18
        }],
      base: 'ibc/1452F322F7B459CB7EC111AD5BD2404552B011375002C8C85BA615A95B9121CF',
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
            channel_id: 'channel-2',
            base_denom: 'aplanq',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-446'
          }
        }]
    },
    {
      description: 'The token of Source Protocol bridged from BSC.',
      denom_units: [{
          denom: 'ibc/E991A98232BC057DF4C466958FC5D4CB89EFC4323525EF791CB53EC597EBF8D1',
          exponent: 0,
          aliases: ['erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09']
        }, {
          denom: 'srcx',
          exponent: 9
        }],
      base: 'ibc/E991A98232BC057DF4C466958FC5D4CB89EFC4323525EF791CB53EC597EBF8D1',
      name: 'Source Token',
      display: 'srcx',
      symbol: 'SRCX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-446'
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
          denom: 'ibc/3312E6687E7D4D8EA712AF24C8789B01266F1E793C833FC4BE611C156BAA2480',
          exponent: 0,
          aliases: ['erc20/0xF630B96760B91f6FCbE8b3C24f2786AcA3D03648']
        }, {
          denom: 'anubi',
          exponent: 18
        }],
      base: 'ibc/3312E6687E7D4D8EA712AF24C8789B01266F1E793C833FC4BE611C156BAA2480',
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
            channel_id: 'channel-2',
            base_denom: 'erc20/0xF630B96760B91f6FCbE8b3C24f2786AcA3D03648',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-446'
          }
        }]
    },
    {
      description: 'The token of Astonic.',
      denom_units: [{
          denom: 'ibc/2D14102B51A74D39B73147C7CCDAE0EF746E9580381269B3D4A8A0C9B59E0299',
          exponent: 0,
          aliases: ['erc20/0x8F4d86ABa1b47832C46f11e0fFD0F7aDa4498345']
        }, {
          denom: 'astonic',
          exponent: 18
        }],
      base: 'ibc/2D14102B51A74D39B73147C7CCDAE0EF746E9580381269B3D4A8A0C9B59E0299',
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
            channel_id: 'channel-2',
            base_denom: 'erc20/0x8F4d86ABa1b47832C46f11e0fFD0F7aDa4498345',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-446'
          }
        }]
    },
    {
      description: 'Astonic USD (aUSD) is a stable asset pegged to the US Dollar.',
      denom_units: [{
          denom: 'ibc/3DBE9FBE803AB0DAF54225C9007CE88821ED4CBB2EAB7407298C8CE7124B7057',
          exponent: 0,
          aliases: ['erc20/0xA2871B267a7d888F830251F6B4D9d3DFf184995a']
        }, {
          denom: 'ausd',
          exponent: 18
        }],
      base: 'ibc/3DBE9FBE803AB0DAF54225C9007CE88821ED4CBB2EAB7407298C8CE7124B7057',
      name: 'Astonic USD',
      display: 'ausd',
      symbol: 'aUSD',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'erc20/0xA2871B267a7d888F830251F6B4D9d3DFf184995a',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-446'
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
          denom: 'ibc/7D36EF3078DC7D02F9406C57FDDC35385DDF9ABB3215CC4C93C6849D07D9D893',
          exponent: 0,
          aliases: ['erc20/0xd5be2932FEbD73019ba1d5d97DFC35E1Ab09E501']
        }, {
          denom: 'aeur',
          exponent: 18
        }],
      base: 'ibc/7D36EF3078DC7D02F9406C57FDDC35385DDF9ABB3215CC4C93C6849D07D9D893',
      name: 'Astonic EUR',
      display: 'aeur',
      symbol: 'aEUR',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'erc20/0xd5be2932FEbD73019ba1d5d97DFC35E1Ab09E501',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-446'
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
          denom: 'ibc/07F46D29F047B6ED8F54EE364466C600E99863B47CE030D3B02EF389C47F79D2',
          exponent: 0,
          aliases: ['erc20/0x240642C6f69878A0b199065f25EDf82023BC59ce']
        }, {
          denom: 'abrl',
          exponent: 18
        }],
      base: 'ibc/07F46D29F047B6ED8F54EE364466C600E99863B47CE030D3B02EF389C47F79D2',
      name: 'Astonic BRL',
      display: 'abrl',
      symbol: 'aBRL',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'erc20/0x240642C6f69878A0b199065f25EDf82023BC59ce',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-446'
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
      description: 'The native governance and staking token of the Point network',
      denom_units: [{
          denom: 'ibc/72132A48050500C99EDE86468719A5CE729A295F5F785E8E40049ACE6DA4F8B9',
          exponent: 0,
          aliases: ['apoint']
        }, {
          denom: 'point',
          exponent: 18
        }],
      base: 'ibc/72132A48050500C99EDE86468719A5CE729A295F5F785E8E40049ACE6DA4F8B9',
      name: 'Point',
      display: 'point',
      symbol: 'POINT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'apoint',
            chain_name: 'point'
          },
          chain: {
            channel_id: 'channel-404'
          }
        }]
    },
    {
      description: 'The native token of PRYZM',
      denom_units: [{
          denom: 'ibc/6157A428CE89ABB9CD524CFA613862AED49BAC4AE104B2B867C4CB1EA506501F',
          exponent: 0,
          aliases: ['upryzm']
        }, {
          denom: 'pryzm',
          exponent: 6
        }],
      base: 'ibc/6157A428CE89ABB9CD524CFA613862AED49BAC4AE104B2B867C4CB1EA506501F',
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
      coingecko_id: 'pryzm',
      socials: {
        website: 'https://pryzm.zone/',
        x: 'https://x.com/Pryzm_Zone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'upryzm',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/36947DC248616ACD40A21D6AFE7B8AF1B676DAA2D2C24B39AAE2C91CB04F8A27',
          exponent: 0,
          aliases: ['p:uatom:30Sep2024']
        }, {
          denom: 'pATOM30Sep2024',
          exponent: 6
        }],
      base: 'ibc/36947DC248616ACD40A21D6AFE7B8AF1B676DAA2D2C24B39AAE2C91CB04F8A27',
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
            channel_id: 'channel-0',
            base_denom: 'p:uatom:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/52DF4EAEAAA0C0DA580336865799D1064B0E93EFE4EA8E862C61466866B2FB63',
          exponent: 0,
          aliases: ['p:uatom:31Dec2024']
        }, {
          denom: 'pATOM31Dec2024',
          exponent: 6
        }],
      base: 'ibc/52DF4EAEAAA0C0DA580336865799D1064B0E93EFE4EA8E862C61466866B2FB63',
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
            channel_id: 'channel-0',
            base_denom: 'p:uatom:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/0D8AD6BE3128DD5B380D59E362059F28A653A1680F37E55656BC6810F7BB918C',
          exponent: 0,
          aliases: ['p:uatom:31Mar2025']
        }, {
          denom: 'pATOM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/0D8AD6BE3128DD5B380D59E362059F28A653A1680F37E55656BC6810F7BB918C',
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
            channel_id: 'channel-0',
            base_denom: 'p:uatom:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/3B4DB1100A8F4FD3C59C5F08FF8B908441ACD4DEE9B41EF85F75E47BCAC65C4A',
          exponent: 0,
          aliases: ['p:uatom:30Jun2025']
        }, {
          denom: 'pATOM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/3B4DB1100A8F4FD3C59C5F08FF8B908441ACD4DEE9B41EF85F75E47BCAC65C4A',
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
            channel_id: 'channel-0',
            base_denom: 'p:uatom:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/73DCC8CFF4A91E1FFFE5B60BF59B56FC4B40D2792C5BA42AAB1204F54521D48D',
          exponent: 0,
          aliases: ['p:uatom:30Sep2025']
        }, {
          denom: 'pATOM30Sep2025',
          exponent: 6
        }],
      base: 'ibc/73DCC8CFF4A91E1FFFE5B60BF59B56FC4B40D2792C5BA42AAB1204F54521D48D',
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
            channel_id: 'channel-0',
            base_denom: 'p:uatom:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/40AAA4B946D382214676FBCFDDD6FC9DF72935F4FCB7584F76FE0476E7851604',
          exponent: 0,
          aliases: ['p:uatom:31Dec2025']
        }, {
          denom: 'pATOM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/40AAA4B946D382214676FBCFDDD6FC9DF72935F4FCB7584F76FE0476E7851604',
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
            channel_id: 'channel-0',
            base_denom: 'p:uatom:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/85E5A32131D32F12CF5F4C99C36DD2960AF8C3A4C4A2F2DE250CD39538BD2C67',
          exponent: 0,
          aliases: ['p:uatom:31Dec2026']
        }, {
          denom: 'pATOM31Dec2026',
          exponent: 6
        }],
      base: 'ibc/85E5A32131D32F12CF5F4C99C36DD2960AF8C3A4C4A2F2DE250CD39538BD2C67',
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
            channel_id: 'channel-0',
            base_denom: 'p:uatom:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/17D05C514F4486B697A79B8FEAF93D29AF78E2B16F675373D8B68F8048BD6AEC',
          exponent: 0,
          aliases: ['p:uosmo:30Sep2024']
        }, {
          denom: 'pOSMO30Sep2024',
          exponent: 6
        }],
      base: 'ibc/17D05C514F4486B697A79B8FEAF93D29AF78E2B16F675373D8B68F8048BD6AEC',
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
            channel_id: 'channel-0',
            base_denom: 'p:uosmo:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/3DBB730F9B8777A6CC46EFAB84CE2A2D29914853229968EA37BD7B5639BBEED9',
          exponent: 0,
          aliases: ['p:uosmo:31Dec2024']
        }, {
          denom: 'pOSMO31Dec2024',
          exponent: 6
        }],
      base: 'ibc/3DBB730F9B8777A6CC46EFAB84CE2A2D29914853229968EA37BD7B5639BBEED9',
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
            channel_id: 'channel-0',
            base_denom: 'p:uosmo:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/04DAD382745B7E21A32FC78943C45FAFF26805FC3D203BBDE677596572D3AAFB',
          exponent: 0,
          aliases: ['p:uosmo:31Mar2025']
        }, {
          denom: 'pOSMO31Mar2025',
          exponent: 6
        }],
      base: 'ibc/04DAD382745B7E21A32FC78943C45FAFF26805FC3D203BBDE677596572D3AAFB',
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
            channel_id: 'channel-0',
            base_denom: 'p:uosmo:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/94363A11FD0BE9E52F0EE1BE23EBFBCCB406B6EECBB0189EE218467E1DE3EDBA',
          exponent: 0,
          aliases: ['p:uosmo:30Jun2025']
        }, {
          denom: 'pOSMO30Jun2025',
          exponent: 6
        }],
      base: 'ibc/94363A11FD0BE9E52F0EE1BE23EBFBCCB406B6EECBB0189EE218467E1DE3EDBA',
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
            channel_id: 'channel-0',
            base_denom: 'p:uosmo:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/6E4A0A17146E39482CDCB741FCC220E55A3396F0E323602AFE14A61D42E3D745',
          exponent: 0,
          aliases: ['p:uosmo:30Sep2025']
        }, {
          denom: 'pOSMO30Sep2025',
          exponent: 6
        }],
      base: 'ibc/6E4A0A17146E39482CDCB741FCC220E55A3396F0E323602AFE14A61D42E3D745',
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
            channel_id: 'channel-0',
            base_denom: 'p:uosmo:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/5D268052990561A49F757B29F67444EDF4B70568118C4020801FC3944DCA2FD7',
          exponent: 0,
          aliases: ['p:uosmo:31Dec2025']
        }, {
          denom: 'pOSMO31Dec2025',
          exponent: 6
        }],
      base: 'ibc/5D268052990561A49F757B29F67444EDF4B70568118C4020801FC3944DCA2FD7',
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
            channel_id: 'channel-0',
            base_denom: 'p:uosmo:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/9C2BF746073A7FF4B5502D5E777BB3F75C570395E36D7F0993AE1100D9A5FDD6',
          exponent: 0,
          aliases: ['p:uosmo:31Dec2026']
        }, {
          denom: 'pOSMO31Dec2026',
          exponent: 6
        }],
      base: 'ibc/9C2BF746073A7FF4B5502D5E777BB3F75C570395E36D7F0993AE1100D9A5FDD6',
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
            channel_id: 'channel-0',
            base_denom: 'p:uosmo:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/1DE3B002B20E17274034238F54B2D5370F3676B1BE16C6C917C63F19F9FC0888',
          exponent: 0,
          aliases: ['p:inj:30Sep2024']
        }, {
          denom: 'pINJ30Sep2024',
          exponent: 18
        }],
      base: 'ibc/1DE3B002B20E17274034238F54B2D5370F3676B1BE16C6C917C63F19F9FC0888',
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
            channel_id: 'channel-0',
            base_denom: 'p:inj:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/D933AF16D237EDDB23838951761A07A1BFF3B73E2F0E453B3C09757BBCE9C77B',
          exponent: 0,
          aliases: ['p:inj:31Dec2024']
        }, {
          denom: 'pINJ31Dec2024',
          exponent: 18
        }],
      base: 'ibc/D933AF16D237EDDB23838951761A07A1BFF3B73E2F0E453B3C09757BBCE9C77B',
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
            channel_id: 'channel-0',
            base_denom: 'p:inj:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/4B4BBFE7FA7FABD4DAE5593AEF5A6204B94EEC848B14E102EE72B6F81617080C',
          exponent: 0,
          aliases: ['p:inj:31Mar2025']
        }, {
          denom: 'pINJ31Mar2025',
          exponent: 18
        }],
      base: 'ibc/4B4BBFE7FA7FABD4DAE5593AEF5A6204B94EEC848B14E102EE72B6F81617080C',
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
            channel_id: 'channel-0',
            base_denom: 'p:inj:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/0D955581BB17CB7EC811D843D14DDE6FFD9F86D659D2A0400D3CCFB74F4AFBE0',
          exponent: 0,
          aliases: ['p:inj:30Jun2025']
        }, {
          denom: 'pINJ30Jun2025',
          exponent: 18
        }],
      base: 'ibc/0D955581BB17CB7EC811D843D14DDE6FFD9F86D659D2A0400D3CCFB74F4AFBE0',
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
            channel_id: 'channel-0',
            base_denom: 'p:inj:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/F73785493A039EA898A43B2D31E5913C5B17C3AD7B66D20A18769646218024D7',
          exponent: 0,
          aliases: ['p:inj:30Sep2025']
        }, {
          denom: 'pINJ30Sep2025',
          exponent: 18
        }],
      base: 'ibc/F73785493A039EA898A43B2D31E5913C5B17C3AD7B66D20A18769646218024D7',
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
            channel_id: 'channel-0',
            base_denom: 'p:inj:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/FE4812DAE2EC04A4A1185002F794F20E33D0995BE97439C1619FB9D41788E87B',
          exponent: 0,
          aliases: ['p:inj:31Dec2025']
        }, {
          denom: 'pINJ31Dec2025',
          exponent: 18
        }],
      base: 'ibc/FE4812DAE2EC04A4A1185002F794F20E33D0995BE97439C1619FB9D41788E87B',
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
            channel_id: 'channel-0',
            base_denom: 'p:inj:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/E5B61AE15B26FF1547D776DD2EFF5A532536A5E63580EE408B6068B65CCE319D',
          exponent: 0,
          aliases: ['p:inj:31Dec2026']
        }, {
          denom: 'pINJ31Dec2026',
          exponent: 18
        }],
      base: 'ibc/E5B61AE15B26FF1547D776DD2EFF5A532536A5E63580EE408B6068B65CCE319D',
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
            channel_id: 'channel-0',
            base_denom: 'p:inj:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/D18973059258C4AA4806A6AD590F7EEFE8F449181EF484978C8378DEDF400BF0',
          exponent: 0,
          aliases: ['p:uluna:30Sep2024']
        }, {
          denom: 'pLUNA30Sep2024',
          exponent: 6
        }],
      base: 'ibc/D18973059258C4AA4806A6AD590F7EEFE8F449181EF484978C8378DEDF400BF0',
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
            channel_id: 'channel-0',
            base_denom: 'p:uluna:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/5050958CB9155020356C4C9E16EF4E2C2D7173C513DC359EEF8894A7212D109A',
          exponent: 0,
          aliases: ['p:uluna:31Dec2024']
        }, {
          denom: 'pLUNA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/5050958CB9155020356C4C9E16EF4E2C2D7173C513DC359EEF8894A7212D109A',
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
            channel_id: 'channel-0',
            base_denom: 'p:uluna:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/11AF79E683E92F357C1B8ED8052DFB4899E41D22B3F8D35FDF41117EAA10694A',
          exponent: 0,
          aliases: ['p:uluna:31Mar2025']
        }, {
          denom: 'pLUNA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/11AF79E683E92F357C1B8ED8052DFB4899E41D22B3F8D35FDF41117EAA10694A',
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
            channel_id: 'channel-0',
            base_denom: 'p:uluna:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/F037223A610D97E487F3948D3A8390B44EC9D4D6B3FC98EC6902DA2AA5FABE4E',
          exponent: 0,
          aliases: ['p:uluna:30Jun2025']
        }, {
          denom: 'pLUNA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/F037223A610D97E487F3948D3A8390B44EC9D4D6B3FC98EC6902DA2AA5FABE4E',
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
            channel_id: 'channel-0',
            base_denom: 'p:uluna:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/F860A8B42A0253DE4F9F123BD2E79629CAF8F25D54CBEE310970F839AF180740',
          exponent: 0,
          aliases: ['p:uluna:30Sep2025']
        }, {
          denom: 'pLUNA30Sep2025',
          exponent: 6
        }],
      base: 'ibc/F860A8B42A0253DE4F9F123BD2E79629CAF8F25D54CBEE310970F839AF180740',
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
            channel_id: 'channel-0',
            base_denom: 'p:uluna:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/A3776F9B36A89585EE98A0CE58E1F0A1D48FBB097D122C31AA14782891535F0B',
          exponent: 0,
          aliases: ['p:uluna:31Dec2025']
        }, {
          denom: 'pLUNA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/A3776F9B36A89585EE98A0CE58E1F0A1D48FBB097D122C31AA14782891535F0B',
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
            channel_id: 'channel-0',
            base_denom: 'p:uluna:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/33F475EF6154CA92660DEAC956975D13EA5FDC83DDA61BFC86E82A01CF2A797E',
          exponent: 0,
          aliases: ['p:uluna:31Dec2026']
        }, {
          denom: 'pLUNA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/33F475EF6154CA92660DEAC956975D13EA5FDC83DDA61BFC86E82A01CF2A797E',
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
            channel_id: 'channel-0',
            base_denom: 'p:uluna:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/0F7AF6447310D5851B28F96305654AFEDC168A6A7CDA528D9AAAB807FDA55F2B',
          exponent: 0,
          aliases: ['p:uauuu:30Sep2024']
        }, {
          denom: 'pAUUU30Sep2024',
          exponent: 6
        }],
      base: 'ibc/0F7AF6447310D5851B28F96305654AFEDC168A6A7CDA528D9AAAB807FDA55F2B',
      name: 'pAuuu (30Sep2024)',
      display: 'pAUUU30Sep2024',
      symbol: 'pAUUU-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'p:uauuu:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/003CF8250CAB3257500FE64DC8932B0357A83A1C6C6DB7FB970034E4D415A555',
          exponent: 0,
          aliases: ['p:uauuu:31Dec2024']
        }, {
          denom: 'pAUUU31Dec2024',
          exponent: 6
        }],
      base: 'ibc/003CF8250CAB3257500FE64DC8932B0357A83A1C6C6DB7FB970034E4D415A555',
      name: 'pAuuu (31Dec2024)',
      display: 'pAUUU31Dec2024',
      symbol: 'pAUUU-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'p:uauuu:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/1EADF4FF736D66B2E335D9F2F67AE738BDC848C587B1B21A5E752456DDB68234',
          exponent: 0,
          aliases: ['p:uauuu:30Jun2025']
        }, {
          denom: 'pAUUU30Jun2025',
          exponent: 6
        }],
      base: 'ibc/1EADF4FF736D66B2E335D9F2F67AE738BDC848C587B1B21A5E752456DDB68234',
      name: 'pAuuu (30Jun2025)',
      display: 'pAUUU30Jun2025',
      symbol: 'pAUUU-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'p:uauuu:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/914A7AD7700C2091223E29C00BFABE04ECF7A29E3E4633CE5F64098FEE11E701',
          exponent: 0,
          aliases: ['p:uauuu:31Dec2025']
        }, {
          denom: 'pAUUU31Dec2025',
          exponent: 6
        }],
      base: 'ibc/914A7AD7700C2091223E29C00BFABE04ECF7A29E3E4633CE5F64098FEE11E701',
      name: 'pAuuu (31Dec2025)',
      display: 'pAUUU31Dec2025',
      symbol: 'pAUUU-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'p:uauuu:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/324997306530394D527693B38D4913AE04AC16069B7FD60C2C206A881C3041DC',
          exponent: 0,
          aliases: ['p:uauuu:31Dec2026']
        }, {
          denom: 'pAUUU31Dec2026',
          exponent: 6
        }],
      base: 'ibc/324997306530394D527693B38D4913AE04AC16069B7FD60C2C206A881C3041DC',
      name: 'pAuuu (31Dec2026)',
      display: 'pAUUU31Dec2026',
      symbol: 'pAUUU-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'p:uauuu:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/3BB788657A85084CBBA603D4F29F1DC38B537381DB61E6F9C215758971FBF3C0',
          exponent: 0,
          aliases: ['p:stutia:30Sep2024']
        }, {
          denom: 'pstTIA30Sep2024',
          exponent: 6
        }],
      base: 'ibc/3BB788657A85084CBBA603D4F29F1DC38B537381DB61E6F9C215758971FBF3C0',
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
            channel_id: 'channel-0',
            base_denom: 'p:stutia:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/7CAF301DB696B13C449D0EE06C2FBD95BE144919677F09D8F946C5DA291F7FCD',
          exponent: 0,
          aliases: ['p:stutia:31Dec2024']
        }, {
          denom: 'pstTIA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/7CAF301DB696B13C449D0EE06C2FBD95BE144919677F09D8F946C5DA291F7FCD',
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
            channel_id: 'channel-0',
            base_denom: 'p:stutia:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/7B76C0EE787B348E4A24A367B895643AA0282F9CE5D2FD87A12BDD09F3900C91',
          exponent: 0,
          aliases: ['p:stutia:31Mar2025']
        }, {
          denom: 'pstTIA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/7B76C0EE787B348E4A24A367B895643AA0282F9CE5D2FD87A12BDD09F3900C91',
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
            channel_id: 'channel-0',
            base_denom: 'p:stutia:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/060F743A84A364797B5CA768F4B3D8E8867AF2664BF9FF5BE6FBC9E2905C0BD2',
          exponent: 0,
          aliases: ['p:stutia:30Jun2025']
        }, {
          denom: 'pstTIA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/060F743A84A364797B5CA768F4B3D8E8867AF2664BF9FF5BE6FBC9E2905C0BD2',
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
            channel_id: 'channel-0',
            base_denom: 'p:stutia:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/8157ACE6349D6C0FD4B91E2F1496E412D22FAA7708B805350C9090F78C5DD59B',
          exponent: 0,
          aliases: ['p:stutia:31Dec2025']
        }, {
          denom: 'pstTIA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/8157ACE6349D6C0FD4B91E2F1496E412D22FAA7708B805350C9090F78C5DD59B',
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
            channel_id: 'channel-0',
            base_denom: 'p:stutia:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/072118121E38B2B036BF4371A701E111087764516981BC89F193053B91CE2A91',
          exponent: 0,
          aliases: ['p:stutia:31Dec2026']
        }, {
          denom: 'pstTIA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/072118121E38B2B036BF4371A701E111087764516981BC89F193053B91CE2A91',
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
            channel_id: 'channel-0',
            base_denom: 'p:stutia:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/7699BA758C8B78C5884AA94E1F93608DA28D2866A9D02B4A4D10E23C5EACDE7F',
          exponent: 0,
          aliases: ['p:stadydx:30Sep2024']
        }, {
          denom: 'pstDYDX30Sep2024',
          exponent: 18
        }],
      base: 'ibc/7699BA758C8B78C5884AA94E1F93608DA28D2866A9D02B4A4D10E23C5EACDE7F',
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
            channel_id: 'channel-0',
            base_denom: 'p:stadydx:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/226384BB7EE4B8879EC96E14CDC1A834E20DF574577094062FAC2B96AD6C92F2',
          exponent: 0,
          aliases: ['p:stadydx:31Dec2024']
        }, {
          denom: 'pstDYDX31Dec2024',
          exponent: 18
        }],
      base: 'ibc/226384BB7EE4B8879EC96E14CDC1A834E20DF574577094062FAC2B96AD6C92F2',
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
            channel_id: 'channel-0',
            base_denom: 'p:stadydx:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/99F427F2047BCC8A26690B3348D708562B8491216D6434FA9EE49784A0031C7E',
          exponent: 0,
          aliases: ['p:stadydx:31Mar2025']
        }, {
          denom: 'pstDYDX31Mar2025',
          exponent: 18
        }],
      base: 'ibc/99F427F2047BCC8A26690B3348D708562B8491216D6434FA9EE49784A0031C7E',
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
            channel_id: 'channel-0',
            base_denom: 'p:stadydx:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/E1E62A0FC68A508C83113EB8398B0FA956582C9C6C56E20BBC09064C50841AA6',
          exponent: 0,
          aliases: ['p:stadydx:30Jun2025']
        }, {
          denom: 'pstDYDX30Jun2025',
          exponent: 18
        }],
      base: 'ibc/E1E62A0FC68A508C83113EB8398B0FA956582C9C6C56E20BBC09064C50841AA6',
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
            channel_id: 'channel-0',
            base_denom: 'p:stadydx:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/E6BAEA0F35B10FA645FFFA1A286DEEF1987583F0632A150AA19DD3BEB96ADF69',
          exponent: 0,
          aliases: ['p:stadydx:31Dec2025']
        }, {
          denom: 'pstDYDX31Dec2025',
          exponent: 18
        }],
      base: 'ibc/E6BAEA0F35B10FA645FFFA1A286DEEF1987583F0632A150AA19DD3BEB96ADF69',
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
            channel_id: 'channel-0',
            base_denom: 'p:stadydx:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/03B81265542BA1FA5017047166D61785E1F1D5DDAA398FA5A9C6AEA982D390BF',
          exponent: 0,
          aliases: ['p:stadydx:31Dec2026']
        }, {
          denom: 'pstDYDX31Dec2026',
          exponent: 18
        }],
      base: 'ibc/03B81265542BA1FA5017047166D61785E1F1D5DDAA398FA5A9C6AEA982D390BF',
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
            channel_id: 'channel-0',
            base_denom: 'p:stadydx:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/34A9D49BFA1F306AFEFD1214C864D91B5455DCDC951014C73ED11856EF75DF26',
          exponent: 0,
          aliases: ['p:udatom:31Dec2024']
        }, {
          denom: 'pdATOM31Dec2024',
          exponent: 6
        }],
      base: 'ibc/34A9D49BFA1F306AFEFD1214C864D91B5455DCDC951014C73ED11856EF75DF26',
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
            channel_id: 'channel-0',
            base_denom: 'p:udatom:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/D01A3F96E28EC9BDBF0C531C9F00518F4684938E4328CA3BA116C7A3D0747863',
          exponent: 0,
          aliases: ['p:udatom:31Mar2025']
        }, {
          denom: 'pdATOM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/D01A3F96E28EC9BDBF0C531C9F00518F4684938E4328CA3BA116C7A3D0747863',
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
            channel_id: 'channel-0',
            base_denom: 'p:udatom:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/F32D62A99E693493A42BC23B1086011A4A8D702DB3108964DBF22ADC6C2B37DE',
          exponent: 0,
          aliases: ['p:udatom:30Jun2025']
        }, {
          denom: 'pdATOM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/F32D62A99E693493A42BC23B1086011A4A8D702DB3108964DBF22ADC6C2B37DE',
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
            channel_id: 'channel-0',
            base_denom: 'p:udatom:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/A3803000AFA033464FE045045AFBD69763E17E217ED65E54D6D92473BEF69D90',
          exponent: 0,
          aliases: ['p:udatom:31Dec2025']
        }, {
          denom: 'pdATOM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/A3803000AFA033464FE045045AFBD69763E17E217ED65E54D6D92473BEF69D90',
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
            channel_id: 'channel-0',
            base_denom: 'p:udatom:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/C5FA16F4FC0D3727A108265AD2B254B693C07F421AF23DBCEAE0CC6E468939F2',
          exponent: 0,
          aliases: ['p:udatom:31Dec2026']
        }, {
          denom: 'pdATOM31Dec2026',
          exponent: 6
        }],
      base: 'ibc/C5FA16F4FC0D3727A108265AD2B254B693C07F421AF23DBCEAE0CC6E468939F2',
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
            channel_id: 'channel-0',
            base_denom: 'p:udatom:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/A6C81EDA32426E6AB33B3DC98ECB3736009AB400255C6BD313E24F14A443A3B0',
          exponent: 0,
          aliases: ['p:utia:31Dec2024']
        }, {
          denom: 'pTIA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/A6C81EDA32426E6AB33B3DC98ECB3736009AB400255C6BD313E24F14A443A3B0',
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
            channel_id: 'channel-0',
            base_denom: 'p:utia:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/09013B7303A9C0A916B783C678FE8ED16E3331649A3745D8C24EB736F43FD1D6',
          exponent: 0,
          aliases: ['p:utia:31Mar2025']
        }, {
          denom: 'pTIA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/09013B7303A9C0A916B783C678FE8ED16E3331649A3745D8C24EB736F43FD1D6',
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
            channel_id: 'channel-0',
            base_denom: 'p:utia:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/E80F054C9F509D6980729A8D39E9976DEB5A7602BFE0BB957B9BB4E532530FC9',
          exponent: 0,
          aliases: ['p:utia:30Jun2025']
        }, {
          denom: 'pTIA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/E80F054C9F509D6980729A8D39E9976DEB5A7602BFE0BB957B9BB4E532530FC9',
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
            channel_id: 'channel-0',
            base_denom: 'p:utia:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/B46819804EA6F36F2108AAE6CD3A5B022B6589531F361B6CEC47E21D0C0DA0A5',
          exponent: 0,
          aliases: ['p:utia:30Sep2025']
        }, {
          denom: 'pTIA30Sep2025',
          exponent: 6
        }],
      base: 'ibc/B46819804EA6F36F2108AAE6CD3A5B022B6589531F361B6CEC47E21D0C0DA0A5',
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
            channel_id: 'channel-0',
            base_denom: 'p:utia:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/85C5EFED282A3CB0CFDBB4EE0FA69BDF9D717F92A501CF873D9B9DFF7D5A60CA',
          exponent: 0,
          aliases: ['p:utia:31Dec2025']
        }, {
          denom: 'pTIA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/85C5EFED282A3CB0CFDBB4EE0FA69BDF9D717F92A501CF873D9B9DFF7D5A60CA',
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
            channel_id: 'channel-0',
            base_denom: 'p:utia:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/A012E42E5AE3390E7EC96F0903077D5D40B2EE5359C2A2C198EC62F18023D291',
          exponent: 0,
          aliases: ['p:utia:31Dec2026']
        }, {
          denom: 'pTIA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/A012E42E5AE3390E7EC96F0903077D5D40B2EE5359C2A2C198EC62F18023D291',
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
            channel_id: 'channel-0',
            base_denom: 'p:utia:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/3673F68B00C1A4A1366012854690E845B4615BAE9D198A3126D8FB3196F70B6E',
          exponent: 0,
          aliases: ['p:ausdy:31Mar2025']
        }, {
          denom: 'pUSDY31Mar2025',
          exponent: 18
        }],
      base: 'ibc/3673F68B00C1A4A1366012854690E845B4615BAE9D198A3126D8FB3196F70B6E',
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
            channel_id: 'channel-0',
            base_denom: 'p:ausdy:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/9378A9C0772D105DDE1ADD7741035CEAEAD3AF158ABEFAFE9BA1FD67C00370BD',
          exponent: 0,
          aliases: ['p:ausdy:30Jun2025']
        }, {
          denom: 'pUSDY30Jun2025',
          exponent: 18
        }],
      base: 'ibc/9378A9C0772D105DDE1ADD7741035CEAEAD3AF158ABEFAFE9BA1FD67C00370BD',
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
            channel_id: 'channel-0',
            base_denom: 'p:ausdy:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/E311F011FC32BC763A52BD54F0837B28E4FC76889D756F6F531DEF9C3685DBBE',
          exponent: 0,
          aliases: ['p:ausdy:30Sep2025']
        }, {
          denom: 'pUSDY30Sep2025',
          exponent: 18
        }],
      base: 'ibc/E311F011FC32BC763A52BD54F0837B28E4FC76889D756F6F531DEF9C3685DBBE',
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
            channel_id: 'channel-0',
            base_denom: 'p:ausdy:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/6AA25DE275C7678F27061D6966EA19884C79C5C494C54CD08CB201DB0CEB7B83',
          exponent: 0,
          aliases: ['p:ausdy:31Dec2025']
        }, {
          denom: 'pUSDY31Dec2025',
          exponent: 18
        }],
      base: 'ibc/6AA25DE275C7678F27061D6966EA19884C79C5C494C54CD08CB201DB0CEB7B83',
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
            channel_id: 'channel-0',
            base_denom: 'p:ausdy:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/4EA48644F78004A456AE1D748A0C1D42A420DDDC41A95AC1A62D22F997893C8E',
          exponent: 0,
          aliases: ['p:ausdy:31Mar2026']
        }, {
          denom: 'pUSDY31Mar2026',
          exponent: 18
        }],
      base: 'ibc/4EA48644F78004A456AE1D748A0C1D42A420DDDC41A95AC1A62D22F997893C8E',
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
            channel_id: 'channel-0',
            base_denom: 'p:ausdy:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/AFA6D4C7F9E0C61D4FAC69256DC83FAFBE3592A85ECFFE0B08C14457ADCE6809',
          exponent: 0,
          aliases: ['p:ausdy:30Jun2026']
        }, {
          denom: 'pUSDY30Jun2026',
          exponent: 18
        }],
      base: 'ibc/AFA6D4C7F9E0C61D4FAC69256DC83FAFBE3592A85ECFFE0B08C14457ADCE6809',
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
            channel_id: 'channel-0',
            base_denom: 'p:ausdy:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/AE5D232080E762E8464777456926D416E5A1BB8A67651A125FF803B3D72C31B1',
          exponent: 0,
          aliases: ['p:upryzm:31Mar2025']
        }, {
          denom: 'pPRYZM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/AE5D232080E762E8464777456926D416E5A1BB8A67651A125FF803B3D72C31B1',
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
            channel_id: 'channel-0',
            base_denom: 'p:upryzm:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/B840FE1E2803B4D4CF622678EFA7D17A77F2E613C6BB21458965527C0CB73C9A',
          exponent: 0,
          aliases: ['p:upryzm:30Jun2025']
        }, {
          denom: 'pPRYZM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/B840FE1E2803B4D4CF622678EFA7D17A77F2E613C6BB21458965527C0CB73C9A',
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
            channel_id: 'channel-0',
            base_denom: 'p:upryzm:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/6EFCA16945CF745E58E26D16B033DE0F691020B8CA892281CE3E7BDA639F0605',
          exponent: 0,
          aliases: ['p:upryzm:30Sep2025']
        }, {
          denom: 'pPRYZM30Sep2025',
          exponent: 6
        }],
      base: 'ibc/6EFCA16945CF745E58E26D16B033DE0F691020B8CA892281CE3E7BDA639F0605',
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
            channel_id: 'channel-0',
            base_denom: 'p:upryzm:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/A71F9EA796B9D1DD49271A934F2050FD7F6078D808ABE7079FCC9145BF5F7532',
          exponent: 0,
          aliases: ['p:upryzm:31Dec2025']
        }, {
          denom: 'pPRYZM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/A71F9EA796B9D1DD49271A934F2050FD7F6078D808ABE7079FCC9145BF5F7532',
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
            channel_id: 'channel-0',
            base_denom: 'p:upryzm:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/D4C0BF06BDA6D406FA7D7043EBF2C5C7860B3EC9D5CD64C415B1EEF901447F4B',
          exponent: 0,
          aliases: ['p:upryzm:31Mar2026']
        }, {
          denom: 'pPRYZM31Mar2026',
          exponent: 6
        }],
      base: 'ibc/D4C0BF06BDA6D406FA7D7043EBF2C5C7860B3EC9D5CD64C415B1EEF901447F4B',
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
            channel_id: 'channel-0',
            base_denom: 'p:upryzm:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/E988166E4A0A2C2F4202023508C187F248A0917D3E5B8423864C9D1DC542DB1B',
          exponent: 0,
          aliases: ['p:upryzm:30Jun2026']
        }, {
          denom: 'pPRYZM30Jun2026',
          exponent: 6
        }],
      base: 'ibc/E988166E4A0A2C2F4202023508C187F248A0917D3E5B8423864C9D1DC542DB1B',
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
            channel_id: 'channel-0',
            base_denom: 'p:upryzm:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for sUSDS with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/4E241EBC8F5FCE219FACE2224CBF9E94325994CBF8F6F6DEDB43ECFD62DAA929',
          exponent: 0,
          aliases: ['p:asusds:30Jun2025']
        }, {
          denom: 'psUSDS30Jun2025',
          exponent: 18
        }],
      base: 'ibc/4E241EBC8F5FCE219FACE2224CBF9E94325994CBF8F6F6DEDB43ECFD62DAA929',
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
            channel_id: 'channel-0',
            base_denom: 'p:asusds:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for sUSDS with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/4168D0FFECE07EF5E1F5D98C6419D006B0E76897B0A5FF7D7A9B35E3508F05A9',
          exponent: 0,
          aliases: ['p:asusds:30Sep2025']
        }, {
          denom: 'psUSDS30Sep2025',
          exponent: 18
        }],
      base: 'ibc/4168D0FFECE07EF5E1F5D98C6419D006B0E76897B0A5FF7D7A9B35E3508F05A9',
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
            channel_id: 'channel-0',
            base_denom: 'p:asusds:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for sUSDS with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/F9BC98E87C74CF002E5D55DAF7B174B9E7F3182C448A9AABF7391C7965F6AA75',
          exponent: 0,
          aliases: ['p:asusds:31Dec2025']
        }, {
          denom: 'psUSDS31Dec2025',
          exponent: 18
        }],
      base: 'ibc/F9BC98E87C74CF002E5D55DAF7B174B9E7F3182C448A9AABF7391C7965F6AA75',
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
            channel_id: 'channel-0',
            base_denom: 'p:asusds:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for sUSDS with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/FA94E9C2C71FCAB3D1DC9F29564B748547A296ABB8539E2CD9D724953722864A',
          exponent: 0,
          aliases: ['p:asusds:31Mar2026']
        }, {
          denom: 'psUSDS31Mar2026',
          exponent: 18
        }],
      base: 'ibc/FA94E9C2C71FCAB3D1DC9F29564B748547A296ABB8539E2CD9D724953722864A',
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
            channel_id: 'channel-0',
            base_denom: 'p:asusds:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for sUSDS with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/0A93CD083733B759E60F5FC98CAC6AD76A6719E641303268757069843BE79CD2',
          exponent: 0,
          aliases: ['p:asusds:30Jun2026']
        }, {
          denom: 'psUSDS30Jun2026',
          exponent: 18
        }],
      base: 'ibc/0A93CD083733B759E60F5FC98CAC6AD76A6719E641303268757069843BE79CD2',
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
            channel_id: 'channel-0',
            base_denom: 'p:asusds:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for mBTC with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/CB508F5319817CCE291F8380970E1C69C22622035B4E5E53605B529BEB619046',
          exponent: 0,
          aliases: ['p:ambtc:30Sep2025']
        }, {
          denom: 'pmBTC30Sep2025',
          exponent: 18
        }],
      base: 'ibc/CB508F5319817CCE291F8380970E1C69C22622035B4E5E53605B529BEB619046',
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
            channel_id: 'channel-0',
            base_denom: 'p:ambtc:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for mBTC with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/AA0ECCEB5AFA314007B0DDD1DE7004B51BDA33A615423F29E90D142D586C796B',
          exponent: 0,
          aliases: ['p:ambtc:31Dec2025']
        }, {
          denom: 'pmBTC31Dec2025',
          exponent: 18
        }],
      base: 'ibc/AA0ECCEB5AFA314007B0DDD1DE7004B51BDA33A615423F29E90D142D586C796B',
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
            channel_id: 'channel-0',
            base_denom: 'p:ambtc:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for mBTC with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/A6C0D273DA5A1C4B5CBBD43BDC80A0077B78A9EC3190C4D99678728EFC26C942',
          exponent: 0,
          aliases: ['p:ambtc:31Mar2026']
        }, {
          denom: 'pmBTC31Mar2026',
          exponent: 18
        }],
      base: 'ibc/A6C0D273DA5A1C4B5CBBD43BDC80A0077B78A9EC3190C4D99678728EFC26C942',
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
            channel_id: 'channel-0',
            base_denom: 'p:ambtc:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for mBTC with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/305E4EB0F1C52E75B04E1B86D4792321DD200B493C80BAF2B7BD189C0A10315B',
          exponent: 0,
          aliases: ['p:ambtc:30Jun2026']
        }, {
          denom: 'pmBTC30Jun2026',
          exponent: 18
        }],
      base: 'ibc/305E4EB0F1C52E75B04E1B86D4792321DD200B493C80BAF2B7BD189C0A10315B',
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
            channel_id: 'channel-0',
            base_denom: 'p:ambtc:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/C86D786359DAD71365E2D95D7801F6BE500C8F911A1B891E8901D65007A7E7E9',
          exponent: 0,
          aliases: ['y:uatom:30Sep2024']
        }, {
          denom: 'yATOM30Sep2024',
          exponent: 6
        }],
      base: 'ibc/C86D786359DAD71365E2D95D7801F6BE500C8F911A1B891E8901D65007A7E7E9',
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
            channel_id: 'channel-0',
            base_denom: 'y:uatom:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/9FD2CB9A779E74F3D36638A1F71D9A06B85A7766AF8EC43EDCA37015D38D8343',
          exponent: 0,
          aliases: ['y:uatom:31Dec2024']
        }, {
          denom: 'yATOM31Dec2024',
          exponent: 6
        }],
      base: 'ibc/9FD2CB9A779E74F3D36638A1F71D9A06B85A7766AF8EC43EDCA37015D38D8343',
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
            channel_id: 'channel-0',
            base_denom: 'y:uatom:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/7DA6E145EDEAA35EFE308064CC8FCB28879C49664E294ADC19BBF2B18A8E80E6',
          exponent: 0,
          aliases: ['y:uatom:31Mar2025']
        }, {
          denom: 'yATOM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/7DA6E145EDEAA35EFE308064CC8FCB28879C49664E294ADC19BBF2B18A8E80E6',
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
            channel_id: 'channel-0',
            base_denom: 'y:uatom:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/1561C147E9B0A0FA8DC9D772397F47947B4E55F8B93B626C054459D7B6FDDFA7',
          exponent: 0,
          aliases: ['y:uatom:30Jun2025']
        }, {
          denom: 'yATOM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/1561C147E9B0A0FA8DC9D772397F47947B4E55F8B93B626C054459D7B6FDDFA7',
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
            channel_id: 'channel-0',
            base_denom: 'y:uatom:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/1700E82000BBFC548C66BA8971B38F9152D32DD62D8C5DF32644CAE036B097C5',
          exponent: 0,
          aliases: ['y:uatom:30Sep2025']
        }, {
          denom: 'yATOM30Sep2025',
          exponent: 6
        }],
      base: 'ibc/1700E82000BBFC548C66BA8971B38F9152D32DD62D8C5DF32644CAE036B097C5',
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
            channel_id: 'channel-0',
            base_denom: 'y:uatom:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/71FF1741C285AB613111516393D0CEE67397BBD24555A0F119E52C5CA8FC4139',
          exponent: 0,
          aliases: ['y:uatom:31Dec2025']
        }, {
          denom: 'yATOM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/71FF1741C285AB613111516393D0CEE67397BBD24555A0F119E52C5CA8FC4139',
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
            channel_id: 'channel-0',
            base_denom: 'y:uatom:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/9391F535B4ECDD0F7DF763C344A9BA092F812A4F08321DA3FE40885EA0F55EAB',
          exponent: 0,
          aliases: ['y:uatom:31Dec2026']
        }, {
          denom: 'yATOM31Dec2026',
          exponent: 6
        }],
      base: 'ibc/9391F535B4ECDD0F7DF763C344A9BA092F812A4F08321DA3FE40885EA0F55EAB',
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
            channel_id: 'channel-0',
            base_denom: 'y:uatom:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/66C55E4EB2589DE26AC51EB3CEEDDEB1A46EB10BD8A746A22A91DA341EF87D45',
          exponent: 0,
          aliases: ['y:uosmo:30Sep2024']
        }, {
          denom: 'yOSMO30Sep2024',
          exponent: 6
        }],
      base: 'ibc/66C55E4EB2589DE26AC51EB3CEEDDEB1A46EB10BD8A746A22A91DA341EF87D45',
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
            channel_id: 'channel-0',
            base_denom: 'y:uosmo:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/DADF7AB51D179EB3711EC8A938F6AA4EAF6239FD453EDF71D3A56FF9EC82AEBD',
          exponent: 0,
          aliases: ['y:uosmo:31Dec2024']
        }, {
          denom: 'yOSMO31Dec2024',
          exponent: 6
        }],
      base: 'ibc/DADF7AB51D179EB3711EC8A938F6AA4EAF6239FD453EDF71D3A56FF9EC82AEBD',
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
            channel_id: 'channel-0',
            base_denom: 'y:uosmo:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/903E2E2F78BEA7BE6DFFA2766F24D0DA56B628F611E45EF6E8FDB840B87986C2',
          exponent: 0,
          aliases: ['y:uosmo:31Mar2025']
        }, {
          denom: 'yOSMO31Mar2025',
          exponent: 6
        }],
      base: 'ibc/903E2E2F78BEA7BE6DFFA2766F24D0DA56B628F611E45EF6E8FDB840B87986C2',
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
            channel_id: 'channel-0',
            base_denom: 'y:uosmo:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/4DB31AA43C2166979000FE8AE6CB5332C49B7300CC1BC2C10B4C63700733F63D',
          exponent: 0,
          aliases: ['y:uosmo:30Jun2025']
        }, {
          denom: 'yOSMO30Jun2025',
          exponent: 6
        }],
      base: 'ibc/4DB31AA43C2166979000FE8AE6CB5332C49B7300CC1BC2C10B4C63700733F63D',
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
            channel_id: 'channel-0',
            base_denom: 'y:uosmo:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/ED92DE221C8E1821E3F9F8E58985034D09D0F9C9A52B125FB2E08EE4F2908FB2',
          exponent: 0,
          aliases: ['y:uosmo:30Sep2025']
        }, {
          denom: 'yOSMO30Sep2025',
          exponent: 6
        }],
      base: 'ibc/ED92DE221C8E1821E3F9F8E58985034D09D0F9C9A52B125FB2E08EE4F2908FB2',
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
            channel_id: 'channel-0',
            base_denom: 'y:uosmo:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/C9F4FB5A83C12D51AAED20942C4719FA243CB11F0DD0F40003A984B30ACA698B',
          exponent: 0,
          aliases: ['y:uosmo:31Dec2025']
        }, {
          denom: 'yOSMO31Dec2025',
          exponent: 6
        }],
      base: 'ibc/C9F4FB5A83C12D51AAED20942C4719FA243CB11F0DD0F40003A984B30ACA698B',
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
            channel_id: 'channel-0',
            base_denom: 'y:uosmo:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/1DC9AFE8E9EEE6426BCE38F71B9BA04AB619EC79FB0ABB5B07203A07B19EADD6',
          exponent: 0,
          aliases: ['y:uosmo:31Dec2026']
        }, {
          denom: 'yOSMO31Dec2026',
          exponent: 6
        }],
      base: 'ibc/1DC9AFE8E9EEE6426BCE38F71B9BA04AB619EC79FB0ABB5B07203A07B19EADD6',
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
            channel_id: 'channel-0',
            base_denom: 'y:uosmo:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/E6C7182A0A54E653C148282BF15D4767C7250C0402FCE7A8BCE02E1E21ACBD6F',
          exponent: 0,
          aliases: ['y:inj:30Sep2024']
        }, {
          denom: 'yINJ30Sep2024',
          exponent: 18
        }],
      base: 'ibc/E6C7182A0A54E653C148282BF15D4767C7250C0402FCE7A8BCE02E1E21ACBD6F',
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
            channel_id: 'channel-0',
            base_denom: 'y:inj:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/326CF424240614B7B5E8906D92290AEFCE171559689709E7B7E09D351BBC5FF1',
          exponent: 0,
          aliases: ['y:inj:31Dec2024']
        }, {
          denom: 'yINJ31Dec2024',
          exponent: 18
        }],
      base: 'ibc/326CF424240614B7B5E8906D92290AEFCE171559689709E7B7E09D351BBC5FF1',
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
            channel_id: 'channel-0',
            base_denom: 'y:inj:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/3C0DC83F509501BD36FD5DFB09EE6D863D48A83D09A131D13C5A71DDF9212311',
          exponent: 0,
          aliases: ['y:inj:31Mar2025']
        }, {
          denom: 'yINJ31Mar2025',
          exponent: 18
        }],
      base: 'ibc/3C0DC83F509501BD36FD5DFB09EE6D863D48A83D09A131D13C5A71DDF9212311',
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
            channel_id: 'channel-0',
            base_denom: 'y:inj:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/61844BB9E2B1F3E6E699133C47C48C42E0B1BC4A2523865CBB1AC13BFB41DC53',
          exponent: 0,
          aliases: ['y:inj:30Jun2025']
        }, {
          denom: 'yINJ30Jun2025',
          exponent: 18
        }],
      base: 'ibc/61844BB9E2B1F3E6E699133C47C48C42E0B1BC4A2523865CBB1AC13BFB41DC53',
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
            channel_id: 'channel-0',
            base_denom: 'y:inj:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/3E80231A30AF68A5E7886CD6196D0111D1DF871E3B9710B0452126C8E9C28454',
          exponent: 0,
          aliases: ['y:inj:30Sep2025']
        }, {
          denom: 'yINJ30Sep2025',
          exponent: 18
        }],
      base: 'ibc/3E80231A30AF68A5E7886CD6196D0111D1DF871E3B9710B0452126C8E9C28454',
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
            channel_id: 'channel-0',
            base_denom: 'y:inj:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/C4D6C0695737912C7B8E579D1C2C599B8B5F1AAF0DC296ADB01308491C8111ED',
          exponent: 0,
          aliases: ['y:inj:31Dec2025']
        }, {
          denom: 'yINJ31Dec2025',
          exponent: 18
        }],
      base: 'ibc/C4D6C0695737912C7B8E579D1C2C599B8B5F1AAF0DC296ADB01308491C8111ED',
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
            channel_id: 'channel-0',
            base_denom: 'y:inj:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/A8964451AB03C42FF92BF64DDEC51399D6994624FA6FBEF0CB4574374A6C370F',
          exponent: 0,
          aliases: ['y:inj:31Dec2026']
        }, {
          denom: 'yINJ31Dec2026',
          exponent: 18
        }],
      base: 'ibc/A8964451AB03C42FF92BF64DDEC51399D6994624FA6FBEF0CB4574374A6C370F',
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
            channel_id: 'channel-0',
            base_denom: 'y:inj:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/E8B4E7115BC55F34318B45EADF32EE1D9AC045880C8B1DDED4148973BB0350C0',
          exponent: 0,
          aliases: ['y:uluna:30Sep2024']
        }, {
          denom: 'yLUNA30Sep2024',
          exponent: 6
        }],
      base: 'ibc/E8B4E7115BC55F34318B45EADF32EE1D9AC045880C8B1DDED4148973BB0350C0',
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
            channel_id: 'channel-0',
            base_denom: 'y:uluna:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/B1C72B4B3A3799F41186A9C15F73D1467EA070EC816D6355068D48B06782F4F3',
          exponent: 0,
          aliases: ['y:uluna:31Dec2024']
        }, {
          denom: 'yLUNA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/B1C72B4B3A3799F41186A9C15F73D1467EA070EC816D6355068D48B06782F4F3',
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
            channel_id: 'channel-0',
            base_denom: 'y:uluna:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/79F121E8FFEB19233292D6C19D852452EDB8EEAE8DFB0ED7DE55ADD7E498F232',
          exponent: 0,
          aliases: ['y:uluna:31Mar2025']
        }, {
          denom: 'yLUNA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/79F121E8FFEB19233292D6C19D852452EDB8EEAE8DFB0ED7DE55ADD7E498F232',
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
            channel_id: 'channel-0',
            base_denom: 'y:uluna:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/833E268674AEAB9FE7F34D4BF046315E887C65540ACBD58CF6A99BFF1358DDE8',
          exponent: 0,
          aliases: ['y:uluna:30Jun2025']
        }, {
          denom: 'yLUNA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/833E268674AEAB9FE7F34D4BF046315E887C65540ACBD58CF6A99BFF1358DDE8',
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
            channel_id: 'channel-0',
            base_denom: 'y:uluna:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/CE1BC8FAA4DD99AEEF70C1A24B4F4B9EFE0665C0E7415F45EB01FF3700014A5C',
          exponent: 0,
          aliases: ['y:uluna:30Sep2025']
        }, {
          denom: 'yLUNA30Sep2025',
          exponent: 6
        }],
      base: 'ibc/CE1BC8FAA4DD99AEEF70C1A24B4F4B9EFE0665C0E7415F45EB01FF3700014A5C',
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
            channel_id: 'channel-0',
            base_denom: 'y:uluna:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/DABE3212D8FB1F1970677F2C5715947FADCDC504CFA13C3319D618B68A29EF3E',
          exponent: 0,
          aliases: ['y:uluna:31Dec2025']
        }, {
          denom: 'yLUNA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/DABE3212D8FB1F1970677F2C5715947FADCDC504CFA13C3319D618B68A29EF3E',
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
            channel_id: 'channel-0',
            base_denom: 'y:uluna:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/F4EC4D9CE8313E7530249553412FC41B1678C97DD49915A4F27935935146ECBC',
          exponent: 0,
          aliases: ['y:uluna:31Dec2026']
        }, {
          denom: 'yLUNA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/F4EC4D9CE8313E7530249553412FC41B1678C97DD49915A4F27935935146ECBC',
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
            channel_id: 'channel-0',
            base_denom: 'y:uluna:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/C8A832BF61C7D42B3E24DD9667B2692B95EF0A4999E8C80EA5DA8CABDF47A899',
          exponent: 0,
          aliases: ['y:uauuu:30Sep2024']
        }, {
          denom: 'yAUUU30Sep2024',
          exponent: 6
        }],
      base: 'ibc/C8A832BF61C7D42B3E24DD9667B2692B95EF0A4999E8C80EA5DA8CABDF47A899',
      name: 'yAuuu (30Sep2024)',
      display: 'yAUUU30Sep2024',
      symbol: 'yAUUU-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'y:uauuu:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/64E9B5A7C8E206285D4E739593E597346D479D687640FFC85B8F73FE064CE6B2',
          exponent: 0,
          aliases: ['y:uauuu:31Dec2024']
        }, {
          denom: 'yAUUU31Dec2024',
          exponent: 6
        }],
      base: 'ibc/64E9B5A7C8E206285D4E739593E597346D479D687640FFC85B8F73FE064CE6B2',
      name: 'yAuuu (31Dec2024)',
      display: 'yAUUU31Dec2024',
      symbol: 'yAUUU-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'y:uauuu:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/B104C4AF5D432D58A8D1BC762B396C1E10104FD35B238638956A39A816BA9724',
          exponent: 0,
          aliases: ['y:uauuu:30Jun2025']
        }, {
          denom: 'yAUUU30Jun2025',
          exponent: 6
        }],
      base: 'ibc/B104C4AF5D432D58A8D1BC762B396C1E10104FD35B238638956A39A816BA9724',
      name: 'yAuuu (30Jun2025)',
      display: 'yAUUU30Jun2025',
      symbol: 'yAUUU-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'y:uauuu:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/2BC3C0F3478BB6E728D913D948268F64B3F6A501B94E0349EC724E0A92EF061C',
          exponent: 0,
          aliases: ['y:uauuu:31Dec2025']
        }, {
          denom: 'yAUUU31Dec2025',
          exponent: 6
        }],
      base: 'ibc/2BC3C0F3478BB6E728D913D948268F64B3F6A501B94E0349EC724E0A92EF061C',
      name: 'yAuuu (31Dec2025)',
      display: 'yAUUU31Dec2025',
      symbol: 'yAUUU-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'y:uauuu:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/C57CDCEFD04AA282BD2C365747CFDA29FBD38E238A2166CFCA689A30E2C04DB5',
          exponent: 0,
          aliases: ['y:uauuu:31Dec2026']
        }, {
          denom: 'yAUUU31Dec2026',
          exponent: 6
        }],
      base: 'ibc/C57CDCEFD04AA282BD2C365747CFDA29FBD38E238A2166CFCA689A30E2C04DB5',
      name: 'yAuuu (31Dec2026)',
      display: 'yAUUU31Dec2026',
      symbol: 'yAUUU-31Dec2026',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'y:uauuu:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/2972BE4E9EA58B6E769F900FFAFAAC1A8D1FBBB8D199503C3AEB286AA44528EE',
          exponent: 0,
          aliases: ['y:stutia:30Sep2024']
        }, {
          denom: 'ystTIA30Sep2024',
          exponent: 6
        }],
      base: 'ibc/2972BE4E9EA58B6E769F900FFAFAAC1A8D1FBBB8D199503C3AEB286AA44528EE',
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
            channel_id: 'channel-0',
            base_denom: 'y:stutia:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/F24FE2D4BC8BD616E2B8D9A0D75A18A0C3E16896C8FD54CADC2070EC2DF3F84D',
          exponent: 0,
          aliases: ['y:stutia:31Dec2024']
        }, {
          denom: 'ystTIA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/F24FE2D4BC8BD616E2B8D9A0D75A18A0C3E16896C8FD54CADC2070EC2DF3F84D',
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
            channel_id: 'channel-0',
            base_denom: 'y:stutia:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/CD957A5A225461826A3EE8A16A0F64757E45365CC8F5A39210D52742C37F2F45',
          exponent: 0,
          aliases: ['y:stutia:31Mar2025']
        }, {
          denom: 'ystTIA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/CD957A5A225461826A3EE8A16A0F64757E45365CC8F5A39210D52742C37F2F45',
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
            channel_id: 'channel-0',
            base_denom: 'y:stutia:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/D09F26630A4AF5B7A0D7804D0EE2DEE7BC19A1077D74B1F21B90619799ACA21D',
          exponent: 0,
          aliases: ['y:stutia:30Jun2025']
        }, {
          denom: 'ystTIA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/D09F26630A4AF5B7A0D7804D0EE2DEE7BC19A1077D74B1F21B90619799ACA21D',
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
            channel_id: 'channel-0',
            base_denom: 'y:stutia:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/BFB8342D0534BCA90F99EA82958E2642C598C5FFEABB1B2F1D1A7F56B47F76CB',
          exponent: 0,
          aliases: ['y:stutia:31Dec2025']
        }, {
          denom: 'ystTIA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/BFB8342D0534BCA90F99EA82958E2642C598C5FFEABB1B2F1D1A7F56B47F76CB',
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
            channel_id: 'channel-0',
            base_denom: 'y:stutia:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/4FEBF609E597CB5D951527AD1652A4F4BC0FC5F5C2F6DCCCB3F8198D489CAC08',
          exponent: 0,
          aliases: ['y:stutia:31Dec2026']
        }, {
          denom: 'ystTIA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/4FEBF609E597CB5D951527AD1652A4F4BC0FC5F5C2F6DCCCB3F8198D489CAC08',
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
            channel_id: 'channel-0',
            base_denom: 'y:stutia:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/2B056B252AA51B1F3448B74661E798AE1D380D69601B36A8A852EFA13C9B1E8F',
          exponent: 0,
          aliases: ['y:stadydx:30Sep2024']
        }, {
          denom: 'ystDYDX30Sep2024',
          exponent: 18
        }],
      base: 'ibc/2B056B252AA51B1F3448B74661E798AE1D380D69601B36A8A852EFA13C9B1E8F',
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
            channel_id: 'channel-0',
            base_denom: 'y:stadydx:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/CDF41A8641815AA06C4645493E8891A08E109CE970027E28B2D9D74D7FE0150F',
          exponent: 0,
          aliases: ['y:stadydx:31Dec2024']
        }, {
          denom: 'ystDYDX31Dec2024',
          exponent: 18
        }],
      base: 'ibc/CDF41A8641815AA06C4645493E8891A08E109CE970027E28B2D9D74D7FE0150F',
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
            channel_id: 'channel-0',
            base_denom: 'y:stadydx:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/5AED1325AF0A69EA4FFF5C91B65ECA94525E6EF1574271C37B4994D2736D2152',
          exponent: 0,
          aliases: ['y:stadydx:31Mar2025']
        }, {
          denom: 'ystDYDX31Mar2025',
          exponent: 6
        }],
      base: 'ibc/5AED1325AF0A69EA4FFF5C91B65ECA94525E6EF1574271C37B4994D2736D2152',
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
            channel_id: 'channel-0',
            base_denom: 'y:stadydx:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/DC31ECC4711854457C896067944148212B326D298EC6F761CE69FE7B80AF2D7D',
          exponent: 0,
          aliases: ['y:stadydx:30Jun2025']
        }, {
          denom: 'ystDYDX30Jun2025',
          exponent: 6
        }],
      base: 'ibc/DC31ECC4711854457C896067944148212B326D298EC6F761CE69FE7B80AF2D7D',
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
            channel_id: 'channel-0',
            base_denom: 'y:stadydx:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/0508CFFD553D2E440B8030F4C98A99ADADEC52DA30475BB4F57F4FB74E877773',
          exponent: 0,
          aliases: ['y:stadydx:31Dec2025']
        }, {
          denom: 'ystDYDX31Dec2025',
          exponent: 18
        }],
      base: 'ibc/0508CFFD553D2E440B8030F4C98A99ADADEC52DA30475BB4F57F4FB74E877773',
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
            channel_id: 'channel-0',
            base_denom: 'y:stadydx:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/A1562CB52BDB82F7BC6950B3C9855E2F11AB83D65C91E780CE0670ED59B08FD4',
          exponent: 0,
          aliases: ['y:stadydx:31Dec2026']
        }, {
          denom: 'ystDYDX31Dec2026',
          exponent: 18
        }],
      base: 'ibc/A1562CB52BDB82F7BC6950B3C9855E2F11AB83D65C91E780CE0670ED59B08FD4',
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
            channel_id: 'channel-0',
            base_denom: 'y:stadydx:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/E73E64710FD9874C520EA04AFF7D98E892EF0C79396F723958FE81426377B20E',
          exponent: 0,
          aliases: ['y:udatom:31Dec2024']
        }, {
          denom: 'ydATOM31Dec2024',
          exponent: 6
        }],
      base: 'ibc/E73E64710FD9874C520EA04AFF7D98E892EF0C79396F723958FE81426377B20E',
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
            channel_id: 'channel-0',
            base_denom: 'y:udatom:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/89B9131E9F7F22990217C01E7B9217648EF3019C5FB22BBAA514554C6DD423FD',
          exponent: 0,
          aliases: ['y:udatom:31Mar2025']
        }, {
          denom: 'ydATOM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/89B9131E9F7F22990217C01E7B9217648EF3019C5FB22BBAA514554C6DD423FD',
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
            channel_id: 'channel-0',
            base_denom: 'y:udatom:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/470B9FF85A08BC042B8FE478BCFF6887EA90DB1078C73E5D614B58A40DAB9AC9',
          exponent: 0,
          aliases: ['y:udatom:30Jun2025']
        }, {
          denom: 'ydATOM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/470B9FF85A08BC042B8FE478BCFF6887EA90DB1078C73E5D614B58A40DAB9AC9',
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
            channel_id: 'channel-0',
            base_denom: 'y:udatom:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/D4B3B27B89073E6328EF88E3AC5787994E6EC9239C37E7A7C47E722329E5F1B1',
          exponent: 0,
          aliases: ['y:udatom:31Dec2025']
        }, {
          denom: 'ydATOM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/D4B3B27B89073E6328EF88E3AC5787994E6EC9239C37E7A7C47E722329E5F1B1',
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
            channel_id: 'channel-0',
            base_denom: 'y:udatom:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/186EF279F1DC14B570E8D1CE7FB76FA1B556D51AF39663211A56B9855BC2B6A2',
          exponent: 0,
          aliases: ['y:udatom:31Dec2026']
        }, {
          denom: 'ydATOM31Dec2026',
          exponent: 6
        }],
      base: 'ibc/186EF279F1DC14B570E8D1CE7FB76FA1B556D51AF39663211A56B9855BC2B6A2',
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
            channel_id: 'channel-0',
            base_denom: 'y:udatom:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/B7D0983215A9ED509326F4000EC4662F37BE45221E10DE4D924116612C014C60',
          exponent: 0,
          aliases: ['y:utia:31Dec2024']
        }, {
          denom: 'yTIA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/B7D0983215A9ED509326F4000EC4662F37BE45221E10DE4D924116612C014C60',
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
            channel_id: 'channel-0',
            base_denom: 'y:utia:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/799DE7F3C5010434056B61104E7AB3E1FE33FA18A54A7E9C5534FC6B672DCE1D',
          exponent: 0,
          aliases: ['y:utia:31Mar2025']
        }, {
          denom: 'yTIA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/799DE7F3C5010434056B61104E7AB3E1FE33FA18A54A7E9C5534FC6B672DCE1D',
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
            channel_id: 'channel-0',
            base_denom: 'y:utia:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/98CC1FB2AAB59710E850DA172F81151F144A3069C8EC5C1F48BB930E06A3972D',
          exponent: 0,
          aliases: ['y:utia:30Jun2025']
        }, {
          denom: 'yTIA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/98CC1FB2AAB59710E850DA172F81151F144A3069C8EC5C1F48BB930E06A3972D',
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
            channel_id: 'channel-0',
            base_denom: 'y:utia:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/EE5F23C45921FB947D30B5BBFA56BBAFEDB76A181B985E0DD1B73D2A2D24398A',
          exponent: 0,
          aliases: ['y:utia:30Sep2025']
        }, {
          denom: 'yTIA30Sep2025',
          exponent: 6
        }],
      base: 'ibc/EE5F23C45921FB947D30B5BBFA56BBAFEDB76A181B985E0DD1B73D2A2D24398A',
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
            channel_id: 'channel-0',
            base_denom: 'y:utia:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/725805D787EDE76116D32AB9116B01B24430FB735B0BFAE388BA152C6765728C',
          exponent: 0,
          aliases: ['y:utia:31Dec2025']
        }, {
          denom: 'yTIA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/725805D787EDE76116D32AB9116B01B24430FB735B0BFAE388BA152C6765728C',
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
            channel_id: 'channel-0',
            base_denom: 'y:utia:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/3E7BCD36043D627C1123BE3785C3D13C157BC0C0A747E1281F194997248D4B2C',
          exponent: 0,
          aliases: ['y:utia:31Dec2026']
        }, {
          denom: 'yTIA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/3E7BCD36043D627C1123BE3785C3D13C157BC0C0A747E1281F194997248D4B2C',
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
            channel_id: 'channel-0',
            base_denom: 'y:utia:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/B1A3413AE5E32893BD0BA66FD2981210D2EEF7F6EB0C318CB8E188AD10E2F944',
          exponent: 0,
          aliases: ['y:ausdy:31Mar2025']
        }, {
          denom: 'yUSDY31Mar2025',
          exponent: 18
        }],
      base: 'ibc/B1A3413AE5E32893BD0BA66FD2981210D2EEF7F6EB0C318CB8E188AD10E2F944',
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
            channel_id: 'channel-0',
            base_denom: 'y:ausdy:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/B232505D1681CF712E9CD978B3DA6B35F75CD70D96C64264FAE95C91BA88AF81',
          exponent: 0,
          aliases: ['y:ausdy:30Jun2025']
        }, {
          denom: 'yUSDY30Jun2025',
          exponent: 18
        }],
      base: 'ibc/B232505D1681CF712E9CD978B3DA6B35F75CD70D96C64264FAE95C91BA88AF81',
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
            channel_id: 'channel-0',
            base_denom: 'y:ausdy:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/06CF891EB906FE14C7920239772C07953F3F676E2A67486F45EF85DE7254FEBB',
          exponent: 0,
          aliases: ['y:ausdy:30Sep2025']
        }, {
          denom: 'yUSDY30Sep2025',
          exponent: 18
        }],
      base: 'ibc/06CF891EB906FE14C7920239772C07953F3F676E2A67486F45EF85DE7254FEBB',
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
            channel_id: 'channel-0',
            base_denom: 'y:ausdy:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/AE1B9FDE6BC1868CA098DBFAF20B36537FF0B34B4BC3E8791A48F7C2DAB8505A',
          exponent: 0,
          aliases: ['y:ausdy:31Dec2025']
        }, {
          denom: 'yUSDY31Dec2025',
          exponent: 18
        }],
      base: 'ibc/AE1B9FDE6BC1868CA098DBFAF20B36537FF0B34B4BC3E8791A48F7C2DAB8505A',
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
            channel_id: 'channel-0',
            base_denom: 'y:ausdy:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/8E1D731E6A43AEFABBB8000AB65345D25D99FE134FA5B27CEF8EDC1803D7B63F',
          exponent: 0,
          aliases: ['y:ausdy:31Mar2026']
        }, {
          denom: 'yUSDY31Mar2026',
          exponent: 18
        }],
      base: 'ibc/8E1D731E6A43AEFABBB8000AB65345D25D99FE134FA5B27CEF8EDC1803D7B63F',
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
            channel_id: 'channel-0',
            base_denom: 'y:ausdy:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/D5B32C9DA0528EA8EDAD781E955FEDDA4266F0D58828C77A6130A8AEAC0171FB',
          exponent: 0,
          aliases: ['y:ausdy:30Jun2026']
        }, {
          denom: 'yUSDY30Jun2026',
          exponent: 18
        }],
      base: 'ibc/D5B32C9DA0528EA8EDAD781E955FEDDA4266F0D58828C77A6130A8AEAC0171FB',
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
            channel_id: 'channel-0',
            base_denom: 'y:ausdy:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/48E6E0165D2B0687AD2690F6F389AD1BDE6AA6CF34DC39F76EDB8256EFD27653',
          exponent: 0,
          aliases: ['y:upryzm:31Mar2025']
        }, {
          denom: 'yPRYZM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/48E6E0165D2B0687AD2690F6F389AD1BDE6AA6CF34DC39F76EDB8256EFD27653',
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
            channel_id: 'channel-0',
            base_denom: 'y:upryzm:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/C3A20E52828F148AB3EAAF3B05C8B09E8765BF2BD1E04625411414CED452DED3',
          exponent: 0,
          aliases: ['y:upryzm:30Jun2025']
        }, {
          denom: 'yPRYZM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/C3A20E52828F148AB3EAAF3B05C8B09E8765BF2BD1E04625411414CED452DED3',
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
            channel_id: 'channel-0',
            base_denom: 'y:upryzm:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/4FE601D4E002DA99DC0AC4DEAB5A05B7F28D4E681D8800322F8C729137E5C894',
          exponent: 0,
          aliases: ['y:upryzm:30Sep2025']
        }, {
          denom: 'yPRYZM30Sep2025',
          exponent: 6
        }],
      base: 'ibc/4FE601D4E002DA99DC0AC4DEAB5A05B7F28D4E681D8800322F8C729137E5C894',
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
            channel_id: 'channel-0',
            base_denom: 'y:upryzm:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/3BFCB2E0523C8AC01181F0A9E45D627350A32F891287FDC467D59ECAA1825F15',
          exponent: 0,
          aliases: ['y:upryzm:31Dec2025']
        }, {
          denom: 'yPRYZM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/3BFCB2E0523C8AC01181F0A9E45D627350A32F891287FDC467D59ECAA1825F15',
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
            channel_id: 'channel-0',
            base_denom: 'y:upryzm:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/0E8A726157C499F7AF5CD30FCCD4BBC55711993D149BB779D411CCBD0433A0A9',
          exponent: 0,
          aliases: ['y:upryzm:31Mar2026']
        }, {
          denom: 'yPRYZM31Mar2026',
          exponent: 6
        }],
      base: 'ibc/0E8A726157C499F7AF5CD30FCCD4BBC55711993D149BB779D411CCBD0433A0A9',
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
            channel_id: 'channel-0',
            base_denom: 'y:upryzm:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/2745F58C681FF940CCF98B3CBE2398C66D69A2F95D1FC72500B71D9A1E254439',
          exponent: 0,
          aliases: ['y:upryzm:30Jun2026']
        }, {
          denom: 'yPRYZM30Jun2026',
          exponent: 6
        }],
      base: 'ibc/2745F58C681FF940CCF98B3CBE2398C66D69A2F95D1FC72500B71D9A1E254439',
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
            channel_id: 'channel-0',
            base_denom: 'y:upryzm:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for sUSDS with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/45BC7186F1DC6A9C890E0BABC68804ADCA5B319AE7D5D214B905C50052096EFE',
          exponent: 0,
          aliases: ['y:asusds:30Jun2025']
        }, {
          denom: 'ysUSDS30Jun2025',
          exponent: 18
        }],
      base: 'ibc/45BC7186F1DC6A9C890E0BABC68804ADCA5B319AE7D5D214B905C50052096EFE',
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
            channel_id: 'channel-0',
            base_denom: 'y:asusds:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for sUSDS with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/6D87CFE7EDD9941F45EEDBCFB9CABB92D8E438363B30CB5BE30559609E7E5FC2',
          exponent: 0,
          aliases: ['y:asusds:30Sep2025']
        }, {
          denom: 'ysUSDS30Sep2025',
          exponent: 18
        }],
      base: 'ibc/6D87CFE7EDD9941F45EEDBCFB9CABB92D8E438363B30CB5BE30559609E7E5FC2',
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
            channel_id: 'channel-0',
            base_denom: 'y:asusds:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for sUSDS with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/8A90404CEECD13F09570ED4EE105CBC7AD8311669D47545AC77C2A61529A2A0D',
          exponent: 0,
          aliases: ['y:asusds:31Dec2025']
        }, {
          denom: 'ysUSDS31Dec2025',
          exponent: 18
        }],
      base: 'ibc/8A90404CEECD13F09570ED4EE105CBC7AD8311669D47545AC77C2A61529A2A0D',
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
            channel_id: 'channel-0',
            base_denom: 'y:asusds:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for sUSDS with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/2A7DA3EE052969939AF9FBE9464F00783401CE960B471F060AE3AEEDDE4D6C13',
          exponent: 0,
          aliases: ['y:asusds:31Mar2026']
        }, {
          denom: 'ysUSDS31Mar2026',
          exponent: 18
        }],
      base: 'ibc/2A7DA3EE052969939AF9FBE9464F00783401CE960B471F060AE3AEEDDE4D6C13',
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
            channel_id: 'channel-0',
            base_denom: 'y:asusds:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for sUSDS with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/3355F150AF6824069359A8F072D6496793F758D284C2BD3F083D0C3F34B4ACF4',
          exponent: 0,
          aliases: ['y:asusds:30Jun2026']
        }, {
          denom: 'ysUSDS30Jun2026',
          exponent: 18
        }],
      base: 'ibc/3355F150AF6824069359A8F072D6496793F758D284C2BD3F083D0C3F34B4ACF4',
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
            channel_id: 'channel-0',
            base_denom: 'y:asusds:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for mBTC with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/190E7E4E85A2948FC5AD63867F0A39BBF36BBF729643E8E6E3768D05893BDAC0',
          exponent: 0,
          aliases: ['y:ambtc:30Sep2025']
        }, {
          denom: 'ymBTC30Sep2025',
          exponent: 18
        }],
      base: 'ibc/190E7E4E85A2948FC5AD63867F0A39BBF36BBF729643E8E6E3768D05893BDAC0',
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
            channel_id: 'channel-0',
            base_denom: 'y:ambtc:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for mBTC with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/8363CB64BB478C728F32986083DF8DB41D69487B68EE7DA23A58CFE093B89487',
          exponent: 0,
          aliases: ['y:ambtc:31Dec2025']
        }, {
          denom: 'ymBTC31Dec2025',
          exponent: 18
        }],
      base: 'ibc/8363CB64BB478C728F32986083DF8DB41D69487B68EE7DA23A58CFE093B89487',
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
            channel_id: 'channel-0',
            base_denom: 'y:ambtc:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for mBTC with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/D681BC0D3F76F841B8A1F11BC87A203F6E08CE15C470D4010A6D0034067BDFC6',
          exponent: 0,
          aliases: ['y:ambtc:31Mar2026']
        }, {
          denom: 'ymBTC31Mar2026',
          exponent: 18
        }],
      base: 'ibc/D681BC0D3F76F841B8A1F11BC87A203F6E08CE15C470D4010A6D0034067BDFC6',
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
            channel_id: 'channel-0',
            base_denom: 'y:ambtc:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for mBTC with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/A6E6BF6DA2A643AC905E0384089E26116CF6DDB7555F52C20BA4C11EDDF91725',
          exponent: 0,
          aliases: ['y:ambtc:30Jun2026']
        }, {
          denom: 'ymBTC30Jun2026',
          exponent: 18
        }],
      base: 'ibc/A6E6BF6DA2A643AC905E0384089E26116CF6DDB7555F52C20BA4C11EDDF91725',
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
            channel_id: 'channel-0',
            base_denom: 'y:ambtc:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for USDC / USDC.axl pool',
      denom_units: [{
          denom: 'ibc/0507617EF9EAEA71B0F0B711E201EAAFC254F2EF0DC04EA6A44752F23C1B2F8E',
          exponent: 0,
          aliases: ['lp:6:uusdc.axl-uusdc']
        }, {
          denom: 'lp:6:usdc.axl-usdc',
          exponent: 6
        }],
      base: 'ibc/0507617EF9EAEA71B0F0B711E201EAAFC254F2EF0DC04EA6A44752F23C1B2F8E',
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
            channel_id: 'channel-0',
            base_denom: 'lp:6:uusdc.axl-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for ATOM Yield pool',
      denom_units: [{
          denom: 'ibc/8BE0A8BAA6640A68148880C791B6B7B87458054AD5D9C42540BD02171495CDC5',
          exponent: 0,
          aliases: ['lp:0:uatom']
        }, {
          denom: 'lp:0:atom',
          exponent: 6
        }],
      base: 'ibc/8BE0A8BAA6640A68148880C791B6B7B87458054AD5D9C42540BD02171495CDC5',
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
            channel_id: 'channel-0',
            base_denom: 'lp:0:uatom',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for ATOM Boost pool',
      denom_units: [{
          denom: 'ibc/EE9236959508962737F7178BC179127FD010EF883962FC39A26414EE227C5FEA',
          exponent: 0,
          aliases: ['lp:2:uatomypt-uatom']
        }, {
          denom: 'lp:2:atomypt-atom',
          exponent: 6
        }],
      base: 'ibc/EE9236959508962737F7178BC179127FD010EF883962FC39A26414EE227C5FEA',
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
            channel_id: 'channel-0',
            base_denom: 'lp:2:uatomypt-uatom',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for ATOM / USDC pool',
      denom_units: [{
          denom: 'ibc/237669ACD93DBC13FF4A9C1D32023696685AA52B520A41945E4336746CDE9009',
          exponent: 0,
          aliases: ['lp:3:uatom-uusdc']
        }, {
          denom: 'lp:3:atom-usdc',
          exponent: 6
        }],
      base: 'ibc/237669ACD93DBC13FF4A9C1D32023696685AA52B520A41945E4336746CDE9009',
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
            channel_id: 'channel-0',
            base_denom: 'lp:3:uatom-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for INJ Yield pool',
      denom_units: [{
          denom: 'ibc/28EBA0989B1B0BF15451284757761A130F28E5657068D5CB7C73BA900232FF1D',
          exponent: 0,
          aliases: ['lp:1:inj']
        }, {
          denom: 'lp:1:INJ',
          exponent: 18
        }],
      base: 'ibc/28EBA0989B1B0BF15451284757761A130F28E5657068D5CB7C73BA900232FF1D',
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
            channel_id: 'channel-0',
            base_denom: 'lp:1:inj',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for INJ Boost pool',
      denom_units: [{
          denom: 'ibc/499003A66D3A0A1F9E547FB0AA96A45A42CABB5BEDD6CF55AE835AC6D01A3005',
          exponent: 0,
          aliases: ['lp:4:injypt-inj']
        }, {
          denom: 'lp:4:INJypt-INJ',
          exponent: 18
        }],
      base: 'ibc/499003A66D3A0A1F9E547FB0AA96A45A42CABB5BEDD6CF55AE835AC6D01A3005',
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
            channel_id: 'channel-0',
            base_denom: 'lp:4:injypt-inj',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for INJ / USDC pool',
      denom_units: [{
          denom: 'ibc/3CC6B438B483195F954272E2BF65DE278066AFF3FB8DB15655CB1F78DC4B04F0',
          exponent: 0,
          aliases: ['lp:5:inj-uusdc']
        }, {
          denom: 'lp:5:INJ-usdc',
          exponent: 18
        }],
      base: 'ibc/3CC6B438B483195F954272E2BF65DE278066AFF3FB8DB15655CB1F78DC4B04F0',
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
            channel_id: 'channel-0',
            base_denom: 'lp:5:inj-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for OSMO Yield pool',
      denom_units: [{
          denom: 'ibc/E18B025CA4BC9CDC00F71E799A47D1641B8FD008FDF185CFFF7B5AC2F7D44212',
          exponent: 0,
          aliases: ['lp:8:uosmo']
        }, {
          denom: 'lp:8:osmo',
          exponent: 6
        }],
      base: 'ibc/E18B025CA4BC9CDC00F71E799A47D1641B8FD008FDF185CFFF7B5AC2F7D44212',
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
            channel_id: 'channel-0',
            base_denom: 'lp:8:uosmo',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for OSMO Boost pool',
      denom_units: [{
          denom: 'ibc/336C3DD3F5EF55EC3F6123FD1164E6F61AE1553A83AB63A3E99334DD2E3217AE',
          exponent: 0,
          aliases: ['lp:10:uosmoypt-uosmo']
        }, {
          denom: 'lp:10:osmoypt-osmo',
          exponent: 6
        }],
      base: 'ibc/336C3DD3F5EF55EC3F6123FD1164E6F61AE1553A83AB63A3E99334DD2E3217AE',
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
            channel_id: 'channel-0',
            base_denom: 'lp:10:uosmoypt-uosmo',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for OSMO / USDC pool',
      denom_units: [{
          denom: 'ibc/80BE00D99A33E62F48C14AB4E1609EE881B4C4944E4B5871EA6C76C259EAE94F',
          exponent: 0,
          aliases: ['lp:11:uosmo-uusdc']
        }, {
          denom: 'lp:11:osmo-usdc',
          exponent: 6
        }],
      base: 'ibc/80BE00D99A33E62F48C14AB4E1609EE881B4C4944E4B5871EA6C76C259EAE94F',
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
            channel_id: 'channel-0',
            base_denom: 'lp:11:uosmo-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for LUNA Yield pool',
      denom_units: [{
          denom: 'ibc/CAAC9B8D9AF00BC6E9E5BD9D1B322590E2994F3332280094C889067308EC1955',
          exponent: 0,
          aliases: ['lp:9:uluna']
        }, {
          denom: 'lp:9:luna',
          exponent: 6
        }],
      base: 'ibc/CAAC9B8D9AF00BC6E9E5BD9D1B322590E2994F3332280094C889067308EC1955',
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
            channel_id: 'channel-0',
            base_denom: 'lp:9:uluna',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for LUNA Boost pool',
      denom_units: [{
          denom: 'ibc/7AA986820DBC78F5F85F618535ED954311A29DE67127539557F5BFFEBD00C241',
          exponent: 0,
          aliases: ['lp:12:ulunaypt-uluna']
        }, {
          denom: 'lp:12:lunaypt-luna',
          exponent: 6
        }],
      base: 'ibc/7AA986820DBC78F5F85F618535ED954311A29DE67127539557F5BFFEBD00C241',
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
            channel_id: 'channel-0',
            base_denom: 'lp:12:ulunaypt-uluna',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for LUNA / USDC pool',
      denom_units: [{
          denom: 'ibc/3AC26F0AD6A665E29FEB684E7906442922F6D8EA95F70DCB6C1FA848CD138D98',
          exponent: 0,
          aliases: ['lp:13:uluna-uusdc']
        }, {
          denom: 'lp:13:luna-usdc',
          exponent: 6
        }],
      base: 'ibc/3AC26F0AD6A665E29FEB684E7906442922F6D8EA95F70DCB6C1FA848CD138D98',
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
            channel_id: 'channel-0',
            base_denom: 'lp:13:uluna-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for AUUU Yield pool',
      denom_units: [{
          denom: 'ibc/4942D18869E5DD6F03ABB4A2983C2872E9680145C1F6E1CF1B354D9D77D087D6',
          exponent: 0,
          aliases: ['lp:14:uauuu']
        }, {
          denom: 'lp:14:auuu',
          exponent: 6
        }],
      base: 'ibc/4942D18869E5DD6F03ABB4A2983C2872E9680145C1F6E1CF1B354D9D77D087D6',
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
            channel_id: 'channel-0',
            base_denom: 'lp:14:uauuu',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for AUUU Boost pool',
      denom_units: [{
          denom: 'ibc/8E8641011F7E1BFCC3B00C97495F948B6F60D0F5819DE617A6C4C1FD48451AB2',
          exponent: 0,
          aliases: ['lp:17:uauuuypt-uauuu']
        }, {
          denom: 'lp:17:auuuypt-auuu',
          exponent: 6
        }],
      base: 'ibc/8E8641011F7E1BFCC3B00C97495F948B6F60D0F5819DE617A6C4C1FD48451AB2',
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
            channel_id: 'channel-0',
            base_denom: 'lp:17:uauuuypt-uauuu',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for AUUU / USDC pool',
      denom_units: [{
          denom: 'ibc/C05CEA239733B1842BCB27AE339BEF65E1BFEA548F17E093F91BD25C6ECCC00D',
          exponent: 0,
          aliases: ['lp:7:uauuu-uusdc']
        }, {
          denom: 'lp:7:auuu-usdc',
          exponent: 6
        }],
      base: 'ibc/C05CEA239733B1842BCB27AE339BEF65E1BFEA548F17E093F91BD25C6ECCC00D',
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
            channel_id: 'channel-0',
            base_denom: 'lp:7:uauuu-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for stDYDX Yield pool',
      denom_units: [{
          denom: 'ibc/948EFD1EF89AC2F0FE7D142754E7333BF6C23F661E95C289DD30EA0E2A85980B',
          exponent: 0,
          aliases: ['lp:15:stadydx']
        }, {
          denom: 'lp:15:stdydx',
          exponent: 18
        }],
      base: 'ibc/948EFD1EF89AC2F0FE7D142754E7333BF6C23F661E95C289DD30EA0E2A85980B',
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
            channel_id: 'channel-0',
            base_denom: 'lp:15:stadydx',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for stDYDX Boost pool',
      denom_units: [{
          denom: 'ibc/8E80F0ED98581510570CB135BA41CCA1ADB66E066641466FD2F1FE2F7152AF43',
          exponent: 0,
          aliases: ['lp:18:stadydxypt-adydx']
        }, {
          denom: 'lp:18:stdydxypt-dydx',
          exponent: 18
        }],
      base: 'ibc/8E80F0ED98581510570CB135BA41CCA1ADB66E066641466FD2F1FE2F7152AF43',
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
            channel_id: 'channel-0',
            base_denom: 'lp:18:stadydxypt-adydx',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for DYDX / USDC pool',
      denom_units: [{
          denom: 'ibc/6F70A98DC19BF49E77050C80C49277CB27901A4921DC1F3452E930BEBEDE0A83',
          exponent: 0,
          aliases: ['lp:19:adydx-uusdc']
        }, {
          denom: 'lp:19:dydx-usdc',
          exponent: 18
        }],
      base: 'ibc/6F70A98DC19BF49E77050C80C49277CB27901A4921DC1F3452E930BEBEDE0A83',
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
            channel_id: 'channel-0',
            base_denom: 'lp:19:adydx-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for stTIA Yield pool',
      denom_units: [{
          denom: 'ibc/5E5D85FE8DB8031424E8EAC958D91BAC60386D3C89BAE662B3AD424382F16621',
          exponent: 0,
          aliases: ['lp:16:stutia']
        }, {
          denom: 'lp:16:sttia',
          exponent: 6
        }],
      base: 'ibc/5E5D85FE8DB8031424E8EAC958D91BAC60386D3C89BAE662B3AD424382F16621',
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
            channel_id: 'channel-0',
            base_denom: 'lp:16:stutia',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for stTIA Boost pool',
      denom_units: [{
          denom: 'ibc/2099F3C33852E93467C6A629CAFAC11A9F607F2365EFA256AB400F2C18E9ABAD',
          exponent: 0,
          aliases: ['lp:20:stutiaypt-utia']
        }, {
          denom: 'lp:20:sttiaypt-tia',
          exponent: 6
        }],
      base: 'ibc/2099F3C33852E93467C6A629CAFAC11A9F607F2365EFA256AB400F2C18E9ABAD',
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
            channel_id: 'channel-0',
            base_denom: 'lp:20:stutiaypt-utia',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for TIA Yield pool',
      denom_units: [{
          denom: 'ibc/4053AF4F3FAFAB649E0069D270C4EDAFC698C15F09C00F64E118C66F42A5C73C',
          exponent: 0,
          aliases: ['lp:24:utia']
        }, {
          denom: 'lp:24:tia',
          exponent: 6
        }],
      base: 'ibc/4053AF4F3FAFAB649E0069D270C4EDAFC698C15F09C00F64E118C66F42A5C73C',
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
            channel_id: 'channel-0',
            base_denom: 'lp:24:utia',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for TIA Boost pool',
      denom_units: [{
          denom: 'ibc/B02FE0F36894C39E6091E5533CBA79AABAE21994C40DA682E13DD9FB3F79CB8A',
          exponent: 0,
          aliases: ['lp:25:utiaypt-utia']
        }, {
          denom: 'lp:25:tiaypt-tia',
          exponent: 6
        }],
      base: 'ibc/B02FE0F36894C39E6091E5533CBA79AABAE21994C40DA682E13DD9FB3F79CB8A',
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
            channel_id: 'channel-0',
            base_denom: 'lp:25:utiaypt-utia',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for TIA / USDC pool',
      denom_units: [{
          denom: 'ibc/7B221AA0E1BE50C6C097D7FE1D227755987CE67EF98CE0DCEE6B491E057F5106',
          exponent: 0,
          aliases: ['lp:21:utia-uusdc']
        }, {
          denom: 'lp:21:tia-usdc',
          exponent: 6
        }],
      base: 'ibc/7B221AA0E1BE50C6C097D7FE1D227755987CE67EF98CE0DCEE6B491E057F5106',
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
            channel_id: 'channel-0',
            base_denom: 'lp:21:utia-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for dATOM Yield pool',
      denom_units: [{
          denom: 'ibc/7EFE36A668703C22E1DB8330FD388F6C0E2A877E8ED4DA677C5CE0884070EEAA',
          exponent: 0,
          aliases: ['lp:22:udatom']
        }, {
          denom: 'lp:22:datom',
          exponent: 6
        }],
      base: 'ibc/7EFE36A668703C22E1DB8330FD388F6C0E2A877E8ED4DA677C5CE0884070EEAA',
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
            channel_id: 'channel-0',
            base_denom: 'lp:22:udatom',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for dATOM Boost pool',
      denom_units: [{
          denom: 'ibc/8AFB3FD11B309DA277ABFA64EE74AAB7586A98FA34248283693BE2EA505AD5F1',
          exponent: 0,
          aliases: ['lp:23:udatomypt-uatom']
        }, {
          denom: 'lp:23:datomypt-atom',
          exponent: 6
        }],
      base: 'ibc/8AFB3FD11B309DA277ABFA64EE74AAB7586A98FA34248283693BE2EA505AD5F1',
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
            channel_id: 'channel-0',
            base_denom: 'lp:23:udatomypt-uatom',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for USDY Yield pool',
      denom_units: [{
          denom: 'ibc/39ED5F271E7F15D5D0F3363B0792F5B03D41C0C4C790490D1306EEB819C2FFB7',
          exponent: 0,
          aliases: ['lp:31:ausdy']
        }, {
          denom: 'lp:31:usdy',
          exponent: 18
        }],
      base: 'ibc/39ED5F271E7F15D5D0F3363B0792F5B03D41C0C4C790490D1306EEB819C2FFB7',
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
            channel_id: 'channel-0',
            base_denom: 'lp:31:ausdy',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for USDY Boost pool',
      denom_units: [{
          denom: 'ibc/7FF03618C85501BF543834D7598BE97351BC75413E82B08F61D7E309D33EF8E0',
          exponent: 0,
          aliases: ['lp:32:ausdyypt-uusdc']
        }, {
          denom: 'lp:32:usdyypt-usdc',
          exponent: 18
        }],
      base: 'ibc/7FF03618C85501BF543834D7598BE97351BC75413E82B08F61D7E309D33EF8E0',
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
            channel_id: 'channel-0',
            base_denom: 'lp:32:ausdyypt-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for PRYZM Yield pool',
      denom_units: [{
          denom: 'ibc/EDB6BF9BC748674FDBD12EA1E062161EFE5AA4A455307EAC26AAC21973FC9923',
          exponent: 0,
          aliases: ['lp:33:upryzm']
        }, {
          denom: 'lp:33:pryzm',
          exponent: 6
        }],
      base: 'ibc/EDB6BF9BC748674FDBD12EA1E062161EFE5AA4A455307EAC26AAC21973FC9923',
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
            channel_id: 'channel-0',
            base_denom: 'lp:33:upryzm',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for PRYZM Base pool',
      denom_units: [{
          denom: 'ibc/5647DE5961092E514507570E3290673B509BD9CB99BF629776288D853806B4F9',
          exponent: 0,
          aliases: ['lp:34:upryzmypt-upryzm']
        }, {
          denom: 'lp:34:pryzmypt-pryzm',
          exponent: 6
        }],
      base: 'ibc/5647DE5961092E514507570E3290673B509BD9CB99BF629776288D853806B4F9',
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
            channel_id: 'channel-0',
            base_denom: 'lp:34:upryzmypt-upryzm',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for PRYZM / USDC pool',
      denom_units: [{
          denom: 'ibc/8382BEBD1DB0BECE611DF6486A00DB89AF5E70B04521B285C7D3D93E323AC18D',
          exponent: 0,
          aliases: ['lp:35:upryzm-uusdc']
        }, {
          denom: 'lp:35:pryzm-usdc',
          exponent: 6
        }],
      base: 'ibc/8382BEBD1DB0BECE611DF6486A00DB89AF5E70B04521B285C7D3D93E323AC18D',
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
            channel_id: 'channel-0',
            base_denom: 'lp:35:upryzm-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for sUSDS Yield pool',
      denom_units: [{
          denom: 'ibc/F3AEF8929E29A0A1980A2DE6A6AC6958437A50BF5786F0AFB1250B91E4F42BAB',
          exponent: 0,
          aliases: ['lp:36:asusds']
        }, {
          denom: 'lp:36:susds',
          exponent: 18
        }],
      base: 'ibc/F3AEF8929E29A0A1980A2DE6A6AC6958437A50BF5786F0AFB1250B91E4F42BAB',
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
            channel_id: 'channel-0',
            base_denom: 'lp:36:asusds',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for sUSDS Boost pool',
      denom_units: [{
          denom: 'ibc/9A390770A8F1963E998103D1B20B9A1EE8C22DA4BA1D09E89A971EFA70084DCE',
          exponent: 0,
          aliases: ['lp:37:asusdsypt-uusdc']
        }, {
          denom: 'lp:37:susdsypt-usdc',
          exponent: 18
        }],
      base: 'ibc/9A390770A8F1963E998103D1B20B9A1EE8C22DA4BA1D09E89A971EFA70084DCE',
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
            channel_id: 'channel-0',
            base_denom: 'lp:37:asusdsypt-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for mBTC Yield pool',
      denom_units: [{
          denom: 'ibc/32BB95BC546E4E3CE5409A1DB48976EC05143AFB3963048452A5299CF53133E1',
          exponent: 0,
          aliases: ['lp:38:ambtc']
        }, {
          denom: 'lp:38:mbtc',
          exponent: 18
        }],
      base: 'ibc/32BB95BC546E4E3CE5409A1DB48976EC05143AFB3963048452A5299CF53133E1',
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
            channel_id: 'channel-0',
            base_denom: 'lp:38:ambtc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for mBTC Boost pool',
      denom_units: [{
          denom: 'ibc/A41CB80A88E9A47867F59E414CAF48D12867D93CBD976B5D7578B247FC3B2AF2',
          exponent: 0,
          aliases: ['lp:39:ambtcypt-wsat']
        }, {
          denom: 'lp:39:mbtcypt-wbtc',
          exponent: 18
        }],
      base: 'ibc/A41CB80A88E9A47867F59E414CAF48D12867D93CBD976B5D7578B247FC3B2AF2',
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
            channel_id: 'channel-0',
            base_denom: 'lp:39:ambtcypt-wsat',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for WBTC / USDC pool',
      denom_units: [{
          denom: 'ibc/8DBC947638A0D1680562A9CE29A22A47E1D52A43B8A5DBD8C161AE7211495F7C',
          exponent: 0,
          aliases: ['lp:40:wsat-uusdc']
        }, {
          denom: 'lp:40:wbtc-usdc',
          exponent: 18
        }],
      base: 'ibc/8DBC947638A0D1680562A9CE29A22A47E1D52A43B8A5DBD8C161AE7211495F7C',
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
            channel_id: 'channel-0',
            base_denom: 'lp:40:wsat-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-859'
          }
        }]
    },
    {
      description: 'QCK - native token of Quicksilver',
      denom_units: [{
          denom: 'ibc/BBB8E7A221C42270ACBEAC5DBC0B26C1AE69DB7802D528F3163D1443FE86E357',
          exponent: 0,
          aliases: ['uqck']
        }, {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/BBB8E7A221C42270ACBEAC5DBC0B26C1AE69DB7802D528F3163D1443FE86E357',
      name: 'Quicksilver',
      display: 'qck',
      symbol: 'QCK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
      },
      coingecko_id: 'quicksilver',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
        }],
      socials: {
        website: 'https://quicksilver.zone/',
        x: 'https://x.com/quicksilverzone'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uqck',
            chain_name: 'quicksilver'
          },
          chain: {
            channel_id: 'channel-467'
          }
        }]
    },
    {
      description: 'The native currency of the Realio Network.',
      denom_units: [{
          denom: 'ibc/5ABA00F76E96432A03EACECC47D40BFE42F60B7809FD89DD691E6F40CC8F7AFF',
          exponent: 0,
          aliases: ['ario']
        }, {
          denom: 'rio',
          exponent: 18
        }],
      base: 'ibc/5ABA00F76E96432A03EACECC47D40BFE42F60B7809FD89DD691E6F40CC8F7AFF',
      name: 'Realio Network',
      display: 'rio',
      symbol: 'RIO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg'
      },
      coingecko_id: 'realio-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://realio.network/',
        x: 'https://x.com/realio_network'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'ario',
            chain_name: 'realio'
          },
          chain: {
            channel_id: 'channel-645'
          }
        }]
    },
    {
      description: 'A hybrid equity token that represent ownership of the Realio Ecosystem and provides utility functions on the Network.',
      denom_units: [{
          denom: 'ibc/143B32D7DC3D6734660694CC89F323C2CD0BEA98A12A6BBDD25BC06C2710C267',
          exponent: 0,
          aliases: ['arst']
        }, {
          denom: 'rst',
          exponent: 18
        }],
      base: 'ibc/143B32D7DC3D6734660694CC89F323C2CD0BEA98A12A6BBDD25BC06C2710C267',
      name: 'Realio Security Token',
      display: 'rst',
      symbol: 'RST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rst.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rst.png'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'arst',
            chain_name: 'realio'
          },
          chain: {
            channel_id: 'channel-645'
          }
        }]
    },
    {
      description: 'REGEN coin is the token for the Regen Network Platform',
      denom_units: [{
          denom: 'ibc/1FBDD58D438B4D04D26CBFB2E722C18984A0F1A52468C4F42F37D102F3D3F399',
          exponent: 0,
          aliases: ['uregen']
        }, {
          denom: 'regen',
          exponent: 6
        }],
      base: 'ibc/1FBDD58D438B4D04D26CBFB2E722C18984A0F1A52468C4F42F37D102F3D3F399',
      name: 'Regen Network',
      display: 'regen',
      symbol: 'REGEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg'
      },
      coingecko_id: 'regen',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg'
        }],
      socials: {
        website: 'https://www.regen.network/',
        x: 'https://x.com/regen_network'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'uregen',
            chain_name: 'regen'
          },
          chain: {
            channel_id: 'channel-185'
          }
        }]
    },
    {
      description: 'Nature Carbon Ton (NCT) is a carbon token standard backed 1:1 by carbon credits issued by Verra, a global leader in the voluntary carbon market. NCT credits on Regen Network have been tokenized by Toucan.earth.',
      denom_units: [{
          denom: 'ibc/7854965E064D606B35FC42E7208A2CF97FE63EB2C539D1FFF12DDC85BCFB7621',
          exponent: 0,
          aliases: ['eco.uC.NCT']
        }, {
          denom: 'nct',
          exponent: 6
        }],
      base: 'ibc/7854965E064D606B35FC42E7208A2CF97FE63EB2C539D1FFF12DDC85BCFB7621',
      name: 'Nature Carbon Ton',
      display: 'nct',
      symbol: 'NCT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg'
      },
      coingecko_id: 'toucan-protocol-nature-carbon-tonne',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'eco.uC.NCT',
            chain_name: 'regen'
          },
          chain: {
            channel_id: 'channel-185'
          }
        }]
    },
    {
      description: 'Secret Network is a privacy-focused blockchain that enables private and secure smart contracts, protecting sensitive data.',
      denom_units: [{
          denom: 'ibc/1542F8DC70E7999691E991E1EDEB1B47E65E3A217B1649D347098EE48ACB580F',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'ibc/1542F8DC70E7999691E991E1EDEB1B47E65E3A217B1649D347098EE48ACB580F',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
      },
      coingecko_id: 'secret',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
        }],
      socials: {
        website: 'https://scrt.network/',
        x: 'https://x.com/SecretNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-235'
          }
        }]
    },
    {
      description: 'The native token of SEDA Chain.',
      denom_units: [{
          denom: 'ibc/D0BD765CF2EC6B97264795351BD75685A7B806F857D7D84633F5AC5E4A9812ED',
          exponent: 0,
          aliases: ['aseda']
        }, {
          denom: 'seda',
          exponent: 18
        }],
      base: 'ibc/D0BD765CF2EC6B97264795351BD75685A7B806F857D7D84633F5AC5E4A9812ED',
      name: 'Seda',
      display: 'seda',
      symbol: 'SEDA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.png'
      },
      coingecko_id: 'seda-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.png'
        }],
      socials: {
        website: 'https://www.seda.xyz/',
        x: 'https://x.com/sedaprotocol'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'aseda',
            chain_name: 'seda'
          },
          chain: {
            channel_id: 'channel-1337'
          }
        }]
    },
    {
      description: 'Sei is a layer-1 blockchain optimized for trading, focusing on providing high throughput, low latency, and efficient execution for decentralized exchanges.',
      denom_units: [{
          denom: 'ibc/261460D72BA2141BC77D439038343CB2B37C87B4148B4D5E30A5168A93E3E1D9',
          exponent: 0,
          aliases: ['usei']
        }, {
          denom: 'sei',
          exponent: 6
        }],
      base: 'ibc/261460D72BA2141BC77D439038343CB2B37C87B4148B4D5E30A5168A93E3E1D9',
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
            channel_id: 'channel-1',
            base_denom: 'usei',
            chain_name: 'sei'
          },
          chain: {
            channel_id: 'channel-584'
          }
        }]
    },
    {
      description: 'OOZARU is a meme token on SEI Network inspired by the iconic transformation in the Dragon Ball series',
      denom_units: [{
          denom: 'ibc/582D087820E10FF09C4F98253878701F659AB423C9E195D7FB913F923FA4398E',
          exponent: 0,
          aliases: ['sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda']
        }, {
          denom: 'oozaru',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda',
      base: 'ibc/582D087820E10FF09C4F98253878701F659AB423C9E195D7FB913F923FA4398E',
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
            channel_id: 'channel-1',
            base_denom: 'sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda',
            chain_name: 'sei'
          },
          chain: {
            channel_id: 'channel-584'
          }
        }]
    },
    {
      description: 'The native staking token of Self Chain.',
      denom_units: [{
          denom: 'ibc/07C1552AD0D5C8FE63F7E9AAD52E0488D5A9C2D2F49C0D9A0EFF940F5034C8FC',
          exponent: 0,
          aliases: ['uslf']
        }, {
          denom: 'slf',
          exponent: 6
        }],
      base: 'ibc/07C1552AD0D5C8FE63F7E9AAD52E0488D5A9C2D2F49C0D9A0EFF940F5034C8FC',
      name: 'Self',
      display: 'slf',
      symbol: 'SLF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/self/images/self.png'
      },
      coingecko_id: 'self-chain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/self/images/self.png'
        }],
      socials: {
        website: 'https://selfchain.xyz',
        x: 'https://x.com/selfchainxyz'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uslf',
            chain_name: 'self'
          },
          chain: {
            channel_id: 'channel-892'
          }
        }]
    },
    {
      description: 'Sentinel is a decentralized VPN (dVPN) network that provides private and secure internet access by leveraging blockchain technology.',
      denom_units: [{
          denom: 'ibc/42E47A5BA708EBE6E0C227006254F2784E209F4DBD3C6BB77EDC4B29EF875E8E',
          exponent: 0,
          aliases: ['udvpn']
        }, {
          denom: 'dvpn',
          exponent: 6
        }],
      base: 'ibc/42E47A5BA708EBE6E0C227006254F2784E209F4DBD3C6BB77EDC4B29EF875E8E',
      name: 'Sentinel',
      display: 'dvpn',
      symbol: 'P2P',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg'
      },
      coingecko_id: 'sentinel',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg'
        }],
      socials: {
        website: 'https://sentinel.co',
        x: 'https://x.com/SentinelP2P'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'udvpn',
            chain_name: 'sentinel'
          },
          chain: {
            channel_id: 'channel-186'
          }
        }]
    },
    {
      description: 'The native token of Side Chain.',
      denom_units: [{
          denom: 'ibc/9D3EF6B74FAFD490E1C0D27CAC87D2B5B3F5A9E889B55299EDAAB51F3DF7C141',
          exponent: 0,
          aliases: ['uside']
        }, {
          denom: 'side',
          exponent: 6
        }],
      base: 'ibc/9D3EF6B74FAFD490E1C0D27CAC87D2B5B3F5A9E889B55299EDAAB51F3DF7C141',
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
            channel_id: 'channel-10',
            base_denom: 'uside',
            chain_name: 'sidechain'
          },
          chain: {
            channel_id: 'channel-1352'
          }
        }]
    },
    {
      description: 'Rowan Token (ROWAN) is the Sifchain Network\'s native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.',
      denom_units: [{
          denom: 'ibc/F5ED5F3DC6F0EF73FA455337C027FE91ABCB375116BF51A228E44C493E020A09',
          exponent: 0,
          aliases: ['rowan']
        }, {
          denom: 'ROWAN',
          exponent: 18
        }],
      base: 'ibc/F5ED5F3DC6F0EF73FA455337C027FE91ABCB375116BF51A228E44C493E020A09',
      name: 'Sifchain',
      display: 'ROWAN',
      symbol: 'ROWAN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
      },
      coingecko_id: 'sifchain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'rowan',
            chain_name: 'sifchain'
          },
          chain: {
            channel_id: 'channel-192'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the StaFi Hub.',
      denom_units: [{
          denom: 'ibc/70406F10D3B62B53729A9DFCC1CADC3F5E32E1767D413D7140C35F75E8476400',
          exponent: 0,
          aliases: ['ufis']
        }, {
          denom: 'fis',
          exponent: 6
        }],
      base: 'ibc/70406F10D3B62B53729A9DFCC1CADC3F5E32E1767D413D7140C35F75E8476400',
      name: 'FIS',
      display: 'fis',
      symbol: 'FIS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
      },
      coingecko_id: 'stafi',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'ufis',
            chain_name: 'stafihub'
          },
          chain: {
            channel_id: 'channel-369'
          }
        }]
    },
    {
      description: 'Stargaze is a decentralized blockchain platform designed specifically for non-fungible tokens (NFTs), enabling creators to mint, trade, and interact with NFTs in a fully decentralized environment.',
      denom_units: [{
          denom: 'ibc/F79A876741A3A49DD66421F63CD68FC43A5F92C381EB1415966277BF66C720A7',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ibc/F79A876741A3A49DD66421F63CD68FC43A5F92C381EB1415966277BF66C720A7',
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
            channel_id: 'channel-239',
            base_denom: 'ustars',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-730'
          }
        }]
    },
    {
      description: 'IOV coin is the token for the Starname (IOV) Asset Name Service',
      denom_units: [{
          denom: 'ibc/68A333688E5B07451F95555F8FE510E43EF9D3D44DF0909964F92081EF9BE5A7',
          exponent: 0,
          aliases: ['uiov']
        }, {
          denom: 'iov',
          exponent: 6
        }],
      base: 'ibc/68A333688E5B07451F95555F8FE510E43EF9D3D44DF0909964F92081EF9BE5A7',
      name: 'Starname',
      display: 'iov',
      symbol: 'IOV',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg'
        }],
      socials: {
        website: 'https://app.starname.me/',
        x: 'https://x.com/starname_me'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uiov',
            chain_name: 'starname'
          },
          chain: {
            channel_id: 'channel-158'
          }
        }]
    },
    {
      description: 'Stride is a liquid staking blockchain in the Cosmos ecosystem that allows users to stake any IBC-compatible tokens and receive stTokens in return, providing liquidity while earning staking rewards.',
      denom_units: [{
          denom: 'ibc/6B8A3F5C2AD51CD6171FA41A7E8C35AD594AB69226438DB94450436EA57B3A89',
          exponent: 0,
          aliases: ['ustrd']
        }, {
          denom: 'strd',
          exponent: 6
        }],
      base: 'ibc/6B8A3F5C2AD51CD6171FA41A7E8C35AD594AB69226438DB94450436EA57B3A89',
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
            channel_id: 'channel-0',
            base_denom: 'ustrd',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-391'
          }
        }]
    },
    {
      description: 'The native token of the Sunrise network for staking. This token is non transferrable. This token can be retrieved by providing liquidity.',
      denom_units: [{
          denom: 'ibc/4F1118E9723D1C6913A6FC350DB8DC50A5C7497C52BFA801DED579867788B961',
          exponent: 0,
          aliases: ['uvrise']
        }, {
          denom: 'vrise',
          exponent: 6
        }],
      base: 'ibc/4F1118E9723D1C6913A6FC350DB8DC50A5C7497C52BFA801DED579867788B961',
      name: 'Sunrise vRISE',
      display: 'vrise',
      symbol: 'vRISE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/vrise.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/vrise.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/vrise.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/vrise.png'
        }],
      socials: {
        website: 'https://sunriselayer.io/',
        x: 'https://x.com/SunriseLayer'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uvrise',
            chain_name: 'sunrise'
          },
          chain: {
            channel_id: 'channel-1421'
          }
        }]
    },
    {
      description: 'The native token of the Sunrise network.',
      denom_units: [{
          denom: 'ibc/6B36B4076DDD32AD1707196D454700B391BA94DE845C33EBEA7E8B21FEC64432',
          exponent: 0,
          aliases: ['urise']
        }, {
          denom: 'rise',
          exponent: 6
        }],
      base: 'ibc/6B36B4076DDD32AD1707196D454700B391BA94DE845C33EBEA7E8B21FEC64432',
      name: 'Sunrise RISE',
      display: 'rise',
      symbol: 'RISE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.png'
        }],
      socials: {
        website: 'https://sunriselayer.io/',
        x: 'https://x.com/SunriseLayer'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'urise',
            chain_name: 'sunrise'
          },
          chain: {
            channel_id: 'channel-1421'
          }
        }]
    },
    {
      description: 'The USD stable coin of the Sunrise network for fees.',
      denom_units: [{
          denom: 'ibc/551CA67335E14C0F0D8B2AA24DF575F0E02836540330B20778C826F48ED8DE80',
          exponent: 0,
          aliases: ['uusdrise']
        }, {
          denom: 'usdrise',
          exponent: 6
        }],
      base: 'ibc/551CA67335E14C0F0D8B2AA24DF575F0E02836540330B20778C826F48ED8DE80',
      name: 'Sunrise USDrise',
      display: 'usdrise',
      symbol: 'USDrise',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/usdrise.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/usdrise.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/usdrise.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/usdrise.png'
        }],
      socials: {
        website: 'https://sunriselayer.io/',
        x: 'https://x.com/SunriseLayer'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uusdrise',
            chain_name: 'sunrise'
          },
          chain: {
            channel_id: 'channel-1421'
          }
        }]
    },
    {
      description: 'The native token of Teritori',
      denom_units: [{
          denom: 'ibc/09334FF8B9AD27E39D37E3B80E73F48474289173AEFBB285BAD4D4B256707C46',
          exponent: 0,
          aliases: ['utori']
        }, {
          denom: 'tori',
          exponent: 6
        }],
      base: 'ibc/09334FF8B9AD27E39D37E3B80E73F48474289173AEFBB285BAD4D4B256707C46',
      name: 'Teritori',
      display: 'tori',
      symbol: 'TORI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg'
      },
      coingecko_id: 'teritori',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'utori',
            chain_name: 'teritori'
          },
          chain: {
            channel_id: 'channel-431'
          }
        }]
    },
    {
      description: 'The native staking token of Terra Phoenix.',
      denom_units: [{
          denom: 'ibc/34CEF8B6A6424C45FE3CCC4A02C9DF9BB38BACC323E08DFFEFE9E4B18BB89AC4',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'ibc/34CEF8B6A6424C45FE3CCC4A02C9DF9BB38BACC323E08DFFEFE9E4B18BB89AC4',
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
            channel_id: 'channel-0',
            base_denom: 'uluna',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-339'
          }
        }]
    },
    {
      description: 'The native token of Umee',
      denom_units: [{
          denom: 'ibc/DEC41A02E47658D40FC71E5A35A9C807111F5A6662A3FB5DA84C4E6F53E616B3',
          exponent: 0,
          aliases: ['uumee']
        }, {
          denom: 'umee',
          exponent: 6
        }],
      base: 'ibc/DEC41A02E47658D40FC71E5A35A9C807111F5A6662A3FB5DA84C4E6F53E616B3',
      name: 'Umee',
      display: 'umee',
      symbol: 'UMEE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
      },
      coingecko_id: 'umee',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uumee',
            chain_name: 'umee'
          },
          chain: {
            channel_id: 'channel-288'
          }
        }]
    },
    {
      description: 'The native token of Uptick',
      denom_units: [{
          denom: 'ibc/437D75DE90D857540013EB4BFAA57D600CC78A0D6233FF7C8E3204F066CA0C09',
          exponent: 0,
          aliases: ['auptick']
        }, {
          denom: 'uptick',
          exponent: 18
        }],
      base: 'ibc/437D75DE90D857540013EB4BFAA57D600CC78A0D6233FF7C8E3204F066CA0C09',
      name: 'Uptick',
      display: 'uptick',
      symbol: 'UPTICK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'auptick',
            chain_name: 'uptick'
          },
          chain: {
            channel_id: 'channel-535'
          }
        }]
    },
    {
      description: 'Staked Zig Token by Valdora Finance - Decentralized staking with stZIG',
      denom_units: [{
          denom: 'ibc/F1073E5895A25347EF10A7B50783D3048882726895AEE1176C498C45D0576F2B',
          exponent: 0,
          aliases: ['coin.zig109f7g2rzl2aqee7z6gffn8kfe9cpqx0mjkk7ethmx8m2hq4xpe9snmaam2.stzig']
        }, {
          denom: 'stzig',
          exponent: 6
        }],
      base: 'ibc/F1073E5895A25347EF10A7B50783D3048882726895AEE1176C498C45D0576F2B',
      name: 'Staked Zig',
      display: 'stzig',
      symbol: 'STZIG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/stzig.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/stzig.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/stzig.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/stzig.svg'
        }],
      type_asset: 'sdk.coin',
      socials: {
        website: 'https://valdora.finance',
        telegram: 'https://t.me/ValdoraWarriors',
        discord: 'http://discord.gg/valdora',
        x: 'https://x.com/Valdora_finance'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'coin.zig109f7g2rzl2aqee7z6gffn8kfe9cpqx0mjkk7ethmx8m2hq4xpe9snmaam2.stzig',
            chain_name: 'zigchain'
          },
          chain: {
            channel_id: 'channel-1555'
          }
        }]
    },
    {
      description: 'The native token cw20 for SIENNA on Secret Network',
      denom_units: [{
          denom: 'ibc/EC8423815DED6FA71DF13F64F583B7BC09FA7852F22481C46F2A3DDF739CA371',
          exponent: 0,
          aliases: ['cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4']
        }, {
          denom: 'sienna',
          exponent: 18
        }],
      type_asset: 'snip20',
      address: 'secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
      base: 'ibc/EC8423815DED6FA71DF13F64F583B7BC09FA7852F22481C46F2A3DDF739CA371',
      name: 'SIENNA',
      display: 'sienna',
      symbol: 'SIENNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
      },
      coingecko_id: 'sienna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-187',
            base_denom: 'cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1355'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/CC6EEF34CA5C007F93EA7062FFDB11537AD3563E5D05A11B36A8D58D91768150',
          exponent: 0,
          aliases: ['cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip20',
      address: 'secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
      base: 'ibc/CC6EEF34CA5C007F93EA7062FFDB11537AD3563E5D05A11B36A8D58D91768150',
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
            channel_id: 'channel-187',
            base_denom: 'cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1355'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/9D150EE1A1338AA07726EEAA80B322FE8251446E15150E9A44554D1BF64EC907',
          exponent: 0,
          aliases: ['cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip25',
      address: 'secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
      base: 'ibc/9D150EE1A1338AA07726EEAA80B322FE8251446E15150E9A44554D1BF64EC907',
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
            channel_id: 'channel-187',
            base_denom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1355'
          }
        }]
    },
    {
      description: 'The native token cw20 for Silk on Secret Network',
      denom_units: [{
          denom: 'ibc/69E0457BF0F05FA95DB825B827DA60CEEB159F7CB6258E249978C6A813C86A59',
          exponent: 0,
          aliases: ['cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd']
        }, {
          denom: 'silk',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
      base: 'ibc/69E0457BF0F05FA95DB825B827DA60CEEB159F7CB6258E249978C6A813C86A59',
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
            channel_id: 'channel-187',
            base_denom: 'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1355'
          }
        }]
    },
    {
      description: 'The native token cw20 for dSilk on Secret Network',
      denom_units: [{
          denom: 'ibc/25C3C76BB102453BF59D9EC518E102315842D49C1D6BD6B5EFF78462CFC854DA',
          exponent: 0,
          aliases: ['cw20:secret1apxywjp2h8vet54xzyfc96htlt9qqgrh7gawhw']
        }, {
          denom: 'dsilk',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret1apxywjp2h8vet54xzyfc96htlt9qqgrh7gawhw',
      base: 'ibc/25C3C76BB102453BF59D9EC518E102315842D49C1D6BD6B5EFF78462CFC854DA',
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
            channel_id: 'channel-187',
            base_denom: 'cw20:secret1apxywjp2h8vet54xzyfc96htlt9qqgrh7gawhw',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1355'
          }
        }]
    },
    {
      description: 'The native token cw20 for xSilk on Secret Network',
      denom_units: [{
          denom: 'ibc/EE892F929C3FD46F733EB757752DF078C3DAF28DBACC5BDF12E566611EA6B521',
          exponent: 0,
          aliases: ['cw20:secret1lqt2u3ntzrkjev8z5m6ennu4n3zl3trx67ck82']
        }, {
          denom: 'xsilk',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret1lqt2u3ntzrkjev8z5m6ennu4n3zl3trx67ck82',
      base: 'ibc/EE892F929C3FD46F733EB757752DF078C3DAF28DBACC5BDF12E566611EA6B521',
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
            channel_id: 'channel-187',
            base_denom: 'cw20:secret1lqt2u3ntzrkjev8z5m6ennu4n3zl3trx67ck82',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1355'
          }
        }]
    },
    {
      description: 'The native token cw20 for SCRT Staking Derivatives on Secret Network',
      denom_units: [{
          denom: 'ibc/AABC0E3A736ECFF77A12B5AE0E7185981E09CD8C76F377BE23A4E4C275CFA934',
          exponent: 0,
          aliases: ['cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4']
        }, {
          denom: 'stkd-scrt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
      base: 'ibc/AABC0E3A736ECFF77A12B5AE0E7185981E09CD8C76F377BE23A4E4C275CFA934',
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
            channel_id: 'channel-187',
            base_denom: 'cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1355'
          }
        }]
    },
    {
      description: 'The native token cw20 for Button on Secret Network',
      denom_units: [{
          denom: 'ibc/248063F3CF16769D393BF4621F1038B9A0AE881D62D4E7D721D7FB397C4FA024',
          exponent: 0,
          aliases: ['cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt']
        }, {
          denom: 'butt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
      base: 'ibc/248063F3CF16769D393BF4621F1038B9A0AE881D62D4E7D721D7FB397C4FA024',
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
            channel_id: 'channel-187',
            base_denom: 'cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1355'
          }
        }]
    },
    {
      description: 'The native token cw20 for Alter on Secret Network',
      denom_units: [{
          denom: 'ibc/DD5E9911385A876A4CBFD368FE1C86EDE54500BDD62244BC594B19B44C876C60',
          exponent: 0,
          aliases: ['cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej']
        }, {
          denom: 'alter',
          exponent: 6
        }],
      base: 'ibc/DD5E9911385A876A4CBFD368FE1C86EDE54500BDD62244BC594B19B44C876C60',
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
            channel_id: 'channel-187',
            base_denom: 'cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1355'
          }
        }]
    },
    {
      description: 'The native token cw20 for Amber on Secret Network',
      denom_units: [{
          denom: 'ibc/EB1C426C9EF9E6C6D090B19B18182CC7773D38A04C9B924E3A6EF061DB4FC36B',
          exponent: 0,
          aliases: ['cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852']
        }, {
          denom: 'amber',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
      base: 'ibc/EB1C426C9EF9E6C6D090B19B18182CC7773D38A04C9B924E3A6EF061DB4FC36B',
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
            channel_id: 'channel-187',
            base_denom: 'cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1355'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shill on Secret Network',
      denom_units: [{
          denom: 'ibc/53793A16C43B043E27A66111AFF54CA559899671899701E19C0C1316AC1AEF06',
          exponent: 0,
          aliases: ['cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse']
        }, {
          denom: 'shill',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
      base: 'ibc/53793A16C43B043E27A66111AFF54CA559899671899701E19C0C1316AC1AEF06',
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
            channel_id: 'channel-187',
            base_denom: 'cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1355'
          }
        }]
    },
    {
      description: 'The native token cw20 for SIENNA on Secret Network',
      denom_units: [{
          denom: 'ibc/EC8423815DED6FA71DF13F64F583B7BC09FA7852F22481C46F2A3DDF739CA371',
          exponent: 0,
          aliases: ['cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4']
        }, {
          denom: 'sienna',
          exponent: 18
        }],
      type_asset: 'snip20',
      address: 'secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
      base: 'ibc/EC8423815DED6FA71DF13F64F583B7BC09FA7852F22481C46F2A3DDF739CA371',
      name: 'SIENNA',
      display: 'sienna',
      symbol: 'SIENNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
      },
      coingecko_id: 'sienna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-187',
            base_denom: 'cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1355'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/CC6EEF34CA5C007F93EA7062FFDB11537AD3563E5D05A11B36A8D58D91768150',
          exponent: 0,
          aliases: ['cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip20',
      address: 'secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
      base: 'ibc/CC6EEF34CA5C007F93EA7062FFDB11537AD3563E5D05A11B36A8D58D91768150',
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
            channel_id: 'channel-187',
            base_denom: 'cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1355'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/9D150EE1A1338AA07726EEAA80B322FE8251446E15150E9A44554D1BF64EC907',
          exponent: 0,
          aliases: ['cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip25',
      address: 'secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
      base: 'ibc/9D150EE1A1338AA07726EEAA80B322FE8251446E15150E9A44554D1BF64EC907',
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
            channel_id: 'channel-187',
            base_denom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1355'
          }
        }]
    },
    {
      description: 'The native token cw20 for Silk on Secret Network',
      denom_units: [{
          denom: 'ibc/69E0457BF0F05FA95DB825B827DA60CEEB159F7CB6258E249978C6A813C86A59',
          exponent: 0,
          aliases: ['cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd']
        }, {
          denom: 'silk',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
      base: 'ibc/69E0457BF0F05FA95DB825B827DA60CEEB159F7CB6258E249978C6A813C86A59',
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
            channel_id: 'channel-187',
            base_denom: 'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1355'
          }
        }]
    },
    {
      description: 'The native token cw20 for dSilk on Secret Network',
      denom_units: [{
          denom: 'ibc/25C3C76BB102453BF59D9EC518E102315842D49C1D6BD6B5EFF78462CFC854DA',
          exponent: 0,
          aliases: ['cw20:secret1apxywjp2h8vet54xzyfc96htlt9qqgrh7gawhw']
        }, {
          denom: 'dsilk',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret1apxywjp2h8vet54xzyfc96htlt9qqgrh7gawhw',
      base: 'ibc/25C3C76BB102453BF59D9EC518E102315842D49C1D6BD6B5EFF78462CFC854DA',
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
            channel_id: 'channel-187',
            base_denom: 'cw20:secret1apxywjp2h8vet54xzyfc96htlt9qqgrh7gawhw',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1355'
          }
        }]
    },
    {
      description: 'The native token cw20 for xSilk on Secret Network',
      denom_units: [{
          denom: 'ibc/EE892F929C3FD46F733EB757752DF078C3DAF28DBACC5BDF12E566611EA6B521',
          exponent: 0,
          aliases: ['cw20:secret1lqt2u3ntzrkjev8z5m6ennu4n3zl3trx67ck82']
        }, {
          denom: 'xsilk',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret1lqt2u3ntzrkjev8z5m6ennu4n3zl3trx67ck82',
      base: 'ibc/EE892F929C3FD46F733EB757752DF078C3DAF28DBACC5BDF12E566611EA6B521',
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
            channel_id: 'channel-187',
            base_denom: 'cw20:secret1lqt2u3ntzrkjev8z5m6ennu4n3zl3trx67ck82',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1355'
          }
        }]
    },
    {
      description: 'The native token cw20 for SCRT Staking Derivatives on Secret Network',
      denom_units: [{
          denom: 'ibc/AABC0E3A736ECFF77A12B5AE0E7185981E09CD8C76F377BE23A4E4C275CFA934',
          exponent: 0,
          aliases: ['cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4']
        }, {
          denom: 'stkd-scrt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
      base: 'ibc/AABC0E3A736ECFF77A12B5AE0E7185981E09CD8C76F377BE23A4E4C275CFA934',
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
            channel_id: 'channel-187',
            base_denom: 'cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1355'
          }
        }]
    },
    {
      description: 'The native token cw20 for Button on Secret Network',
      denom_units: [{
          denom: 'ibc/248063F3CF16769D393BF4621F1038B9A0AE881D62D4E7D721D7FB397C4FA024',
          exponent: 0,
          aliases: ['cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt']
        }, {
          denom: 'butt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
      base: 'ibc/248063F3CF16769D393BF4621F1038B9A0AE881D62D4E7D721D7FB397C4FA024',
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
            channel_id: 'channel-187',
            base_denom: 'cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1355'
          }
        }]
    },
    {
      description: 'The native token cw20 for Alter on Secret Network',
      denom_units: [{
          denom: 'ibc/DD5E9911385A876A4CBFD368FE1C86EDE54500BDD62244BC594B19B44C876C60',
          exponent: 0,
          aliases: ['cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej']
        }, {
          denom: 'alter',
          exponent: 6
        }],
      base: 'ibc/DD5E9911385A876A4CBFD368FE1C86EDE54500BDD62244BC594B19B44C876C60',
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
            channel_id: 'channel-187',
            base_denom: 'cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1355'
          }
        }]
    },
    {
      description: 'The native token cw20 for Amber on Secret Network',
      denom_units: [{
          denom: 'ibc/EB1C426C9EF9E6C6D090B19B18182CC7773D38A04C9B924E3A6EF061DB4FC36B',
          exponent: 0,
          aliases: ['cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852']
        }, {
          denom: 'amber',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
      base: 'ibc/EB1C426C9EF9E6C6D090B19B18182CC7773D38A04C9B924E3A6EF061DB4FC36B',
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
            channel_id: 'channel-187',
            base_denom: 'cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1355'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shill on Secret Network',
      denom_units: [{
          denom: 'ibc/53793A16C43B043E27A66111AFF54CA559899671899701E19C0C1316AC1AEF06',
          exponent: 0,
          aliases: ['cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse']
        }, {
          denom: 'shill',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
      base: 'ibc/53793A16C43B043E27A66111AFF54CA559899671899701E19C0C1316AC1AEF06',
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
            channel_id: 'channel-187',
            base_denom: 'cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-1355'
          }
        }]
    }
  ]
};
export default assets;
    