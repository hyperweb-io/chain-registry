import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'stride',
  assets: [
    {
      description: 'The native token of Namada.',
      denom_units: [{
          denom: 'ibc/471489A5C2B7206341FFB2F40DB011116F0E1E7D305DF7E10E587676F10C515E',
          exponent: 0,
          aliases: ['unam']
        }, {
          denom: 'nam',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/471489A5C2B7206341FFB2F40DB011116F0E1E7D305DF7E10E587676F10C515E',
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
            channel_id: 'channel-0',
            base_denom: 'unam',
            chain_name: 'namada'
          },
          chain: {
            channel_id: 'channel-308'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Acrechain',
      denom_units: [{
          denom: 'ibc/D54D8A7843F08148FEEFA1DDCC7C9EAF94A4FC4F7E42EE90BBB18E157A31FDF1',
          exponent: 0,
          aliases: ['aacre']
        }, {
          denom: 'acre',
          exponent: 18
        }],
      base: 'ibc/D54D8A7843F08148FEEFA1DDCC7C9EAF94A4FC4F7E42EE90BBB18E157A31FDF1',
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
            channel_id: 'channel-13',
            base_denom: 'aacre',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-57'
          }
        }]
    },
    {
      description: 'Overcollateralized stable coin for Arable derivatives v1',
      denom_units: [{
          denom: 'ibc/C4EA2B68F8B0B61A71063695CF69D831D9088AB6872AC8B2F35B0D74610FA932',
          exponent: 0,
          aliases: ['erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c']
        }, {
          denom: 'arusd',
          exponent: 18
        }],
      base: 'ibc/C4EA2B68F8B0B61A71063695CF69D831D9088AB6872AC8B2F35B0D74610FA932',
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
            channel_id: 'channel-13',
            base_denom: 'erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-57'
          }
        }]
    },
    {
      description: 'Ciento Exchange Token',
      denom_units: [{
          denom: 'ibc/DFAE6C8B4F9BC2FE094442BF3BD7F94551BE9C337EFA6A24B0DD6CF54AEED093',
          exponent: 0,
          aliases: ['erc20/0xAE6D3334989a22A65228732446731438672418F2']
        }, {
          denom: 'cnto',
          exponent: 18
        }],
      base: 'ibc/DFAE6C8B4F9BC2FE094442BF3BD7F94551BE9C337EFA6A24B0DD6CF54AEED093',
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
            channel_id: 'channel-13',
            base_denom: 'erc20/0xAE6D3334989a22A65228732446731438672418F2',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-57'
          }
        }]
    },
    {
      description: 'Agoric is a smart contract platform that uses JavaScript to enable developers to build secure and scalable decentralized applications (dApps) easily.',
      denom_units: [{
          denom: 'ibc/E0C66F1D94163602FF5A3799290350E85BF40F8E2C7A7BA94B9DF694A564158E',
          exponent: 0,
          aliases: ['ubld']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      base: 'ibc/E0C66F1D94163602FF5A3799290350E85BF40F8E2C7A7BA94B9DF694A564158E',
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
            channel_id: 'channel-59',
            base_denom: 'ubld',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-148'
          }
        }]
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [{
          denom: 'ibc/38973850FD27F86A3453C37C11FF0C4A2BC4C0A24E29446EA7D043D014148470',
          exponent: 0,
          aliases: ['uist']
        }, {
          denom: 'ist',
          exponent: 6
        }],
      base: 'ibc/38973850FD27F86A3453C37C11FF0C4A2BC4C0A24E29446EA7D043D014148470',
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
            channel_id: 'channel-59',
            base_denom: 'uist',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-148'
          }
        }]
    },
    {
      description: 'Axelar is a decentralized interoperability network connecting multiple blockchain ecosystems, enabling seamless cross-chain communication and value transfer.',
      denom_units: [{
          denom: 'ibc/896A939C98D421F2E06EFC46E88E1DBBE10657CB1BE5018BF4D6FAC92FE758DB',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/896A939C98D421F2E06EFC46E88E1DBBE10657CB1BE5018BF4D6FAC92FE758DB',
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
            channel_id: 'channel-64',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-69'
          }
        }]
    },
    {
      description: 'The native token of BandChain',
      denom_units: [{
          denom: 'ibc/AC11D57A5FBC0DF322615027DB86FAA602283F1801ED71FDDAA26117C41256D7',
          exponent: 0,
          aliases: ['uband']
        }, {
          denom: 'band',
          exponent: 6
        }],
      base: 'ibc/AC11D57A5FBC0DF322615027DB86FAA602283F1801ED71FDDAA26117C41256D7',
      display: 'band',
      name: 'Band Protocol',
      symbol: 'BAND',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg'
      },
      coingecko_id: 'band-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg'
        }],
      socials: {
        website: 'https://www.bandprotocol.com/',
        x: 'https://x.com/BandProtocol'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-161',
            base_denom: 'uband',
            chain_name: 'bandchain'
          },
          chain: {
            channel_id: 'channel-258'
          }
        }]
    },
    {
      description: 'The native governance token of Carbon',
      denom_units: [{
          denom: 'ibc/5D9C9AD9C09F2D78F99DE11C7F7A86934A6034E7CA777B954A6FC16F31B0B015',
          exponent: 0,
          aliases: ['swth']
        }, {
          denom: 'dswth',
          exponent: 8,
          aliases: ['SWTH']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/5D9C9AD9C09F2D78F99DE11C7F7A86934A6034E7CA777B954A6FC16F31B0B015',
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
            channel_id: 'channel-8',
            base_denom: 'swth',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-47'
          }
        }]
    },
    {
      description: 'The native stablecoin of Carbon',
      denom_units: [{
          denom: 'ibc/5ED5F8462A935BF4DB8B13625904A38E99751D929BB49D47FEF3E2F12B8048D0',
          exponent: 0,
          aliases: ['usc']
        }, {
          denom: 'dusc',
          exponent: 8,
          aliases: ['USC']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/5ED5F8462A935BF4DB8B13625904A38E99751D929BB49D47FEF3E2F12B8048D0',
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
            channel_id: 'channel-8',
            base_denom: 'usc',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-47'
          }
        }]
    },
    {
      description: 'Grouped USD on Carbon',
      denom_units: [{
          denom: 'ibc/2883F0836B56903DDF4E528B6F4B930A9BFA3C81C00636DD144862D34E6934CD',
          exponent: 0,
          aliases: ['cgt/1']
        }, {
          denom: 'usd',
          exponent: 18,
          aliases: ['USD']
        }],
      base: 'ibc/2883F0836B56903DDF4E528B6F4B930A9BFA3C81C00636DD144862D34E6934CD',
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
            channel_id: 'channel-8',
            base_denom: 'cgt/1',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-47'
          }
        }]
    },
    {
      description: 'Celestia is a modular blockchain network focused on data availability, allowing developers to deploy their own customizable blockchains with ease.',
      denom_units: [{
          denom: 'ibc/BF3B4F53F3694B66E13C23107C84B6485BD2B96296BB7EC680EA77BBA75B4801',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      base: 'ibc/BF3B4F53F3694B66E13C23107C84B6485BD2B96296BB7EC680EA77BBA75B4801',
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
            channel_id: 'channel-4',
            base_denom: 'utia',
            chain_name: 'celestia'
          },
          chain: {
            channel_id: 'channel-162'
          }
        }]
    },
    {
      description: 'Native Token of Comdex Protocol',
      denom_units: [{
          denom: 'ibc/EB66980014602E6BD50A1CB9FFB8FA694DC3EC10A48D2C1C649D732954F88D4A',
          exponent: 0,
          aliases: ['ucmdx']
        }, {
          denom: 'cmdx',
          exponent: 6
        }],
      base: 'ibc/EB66980014602E6BD50A1CB9FFB8FA694DC3EC10A48D2C1C649D732954F88D4A',
      name: 'Comdex',
      display: 'cmdx',
      symbol: 'CMDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
      },
      coingecko_id: 'comdex',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-45',
            base_denom: 'ucmdx',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }]
    },
    {
      description: 'Governance Token of Harbor protocol on Comdex network',
      denom_units: [{
          denom: 'ibc/91AC6268E78DF87CFB9CAB34BD162035D76E1F9E02D2D92EB80915B5D08ECA87',
          exponent: 0,
          aliases: ['uharbor']
        }, {
          denom: 'harbor',
          exponent: 6
        }],
      base: 'ibc/91AC6268E78DF87CFB9CAB34BD162035D76E1F9E02D2D92EB80915B5D08ECA87',
      name: 'Harbor',
      display: 'harbor',
      symbol: 'HARBOR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-45',
            base_denom: 'uharbor',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }]
    },
    {
      description: 'Stable Token of Harbor protocol on Comdex network',
      denom_units: [{
          denom: 'ibc/7E15C9B719E27B9EC2C6049D3A7DC4E4BC3DCE82FC97653ED6163419C3F9EBF8',
          exponent: 0,
          aliases: ['ucmst']
        }, {
          denom: 'cmst',
          exponent: 6
        }],
      base: 'ibc/7E15C9B719E27B9EC2C6049D3A7DC4E4BC3DCE82FC97653ED6163419C3F9EBF8',
      name: 'CMST',
      display: 'cmst',
      symbol: 'CMST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
      },
      coingecko_id: 'composite',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-45',
            base_denom: 'ucmst',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }]
    },
    {
      description: 'ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.',
      denom_units: [{
          denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
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
            channel_id: 'channel-391',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'The native token of Crescent',
      denom_units: [{
          denom: 'ibc/892B184DE49984FEA412E6BB8B9F2FA35E707E29DD5E9ADB515EB99B11E40837',
          exponent: 0,
          aliases: ['ucre']
        }, {
          denom: 'cre',
          exponent: 6
        }],
      base: 'ibc/892B184DE49984FEA412E6BB8B9F2FA35E707E29DD5E9ADB515EB99B11E40837',
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
            channel_id: 'channel-29',
            base_denom: 'ucre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-51'
          }
        }]
    },
    {
      description: 'The bonded token of Crescent',
      denom_units: [{
          denom: 'ibc/7811A811C1EBD001CA3DB637DDD7F9254E6FC0D5EFCC26163C94FBA299F77D31',
          exponent: 0,
          aliases: ['ubcre']
        }, {
          denom: 'bcre',
          exponent: 6
        }],
      base: 'ibc/7811A811C1EBD001CA3DB637DDD7F9254E6FC0D5EFCC26163C94FBA299F77D31',
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
            channel_id: 'channel-29',
            base_denom: 'ubcre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-51'
          }
        }]
    },
    {
      description: 'DYDX is a decentralized trading platform focused on derivatives and perpetual contracts, offering a secure and efficient trading experience without intermediaries.',
      denom_units: [{
          denom: 'ibc/561C70B20188A047BFDE6F9946BDDC5D8AC172B9BE04FF868DFABF819E5A9CCE',
          exponent: 0,
          aliases: ['adydx']
        }, {
          denom: 'dydx',
          exponent: 18
        }],
      base: 'ibc/561C70B20188A047BFDE6F9946BDDC5D8AC172B9BE04FF868DFABF819E5A9CCE',
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
            channel_id: 'channel-1',
            base_denom: 'adydx',
            chain_name: 'dydx'
          },
          chain: {
            channel_id: 'channel-160'
          }
        }]
    },
    {
      description: 'The native governance and staking token of the Dymension Hub',
      denom_units: [{
          denom: 'ibc/E1C22332C083574F3418481359733BA8887D171E76C80AD9237422AEABB66018',
          exponent: 0,
          aliases: ['adym']
        }, {
          denom: 'dym',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/E1C22332C083574F3418481359733BA8887D171E76C80AD9237422AEABB66018',
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
            channel_id: 'channel-0',
            base_denom: 'adym',
            chain_name: 'dymension'
          },
          chain: {
            channel_id: 'channel-197'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Evmos Hub',
      denom_units: [{
          denom: 'ibc/4B322204B4F59D770680FE4D7A565DDC3F37BFF035474B717476C66A4F83DD72',
          exponent: 0,
          aliases: ['aevmos']
        }, {
          denom: 'evmos',
          exponent: 18
        }],
      base: 'ibc/4B322204B4F59D770680FE4D7A565DDC3F37BFF035474B717476C66A4F83DD72',
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
            channel_id: 'channel-25',
            base_denom: 'aevmos',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'The token of Neokingdom DAO.',
      denom_units: [{
          denom: 'ibc/BAF1536E0B82CCC983271430A2F709D486F4758EA80D4FC3EFF4638DDBDD7647',
          exponent: 0,
          aliases: ['erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9']
        }, {
          denom: 'neok',
          exponent: 18
        }],
      base: 'ibc/BAF1536E0B82CCC983271430A2F709D486F4758EA80D4FC3EFF4638DDBDD7647',
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
            channel_id: 'channel-25',
            base_denom: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'The legacy token of Teledisko DAO.',
      denom_units: [{
          denom: 'ibc/A4EC4992CC6942ED4E799E40679FF436FDB20A3C89946A1948A29D51F233488E',
          exponent: 0,
          aliases: ['erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280']
        }, {
          denom: 'berlin-legacy',
          exponent: 18
        }],
      base: 'ibc/A4EC4992CC6942ED4E799E40679FF436FDB20A3C89946A1948A29D51F233488E',
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
            channel_id: 'channel-25',
            base_denom: 'erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'The token of Crowdpunk DAO',
      denom_units: [{
          denom: 'ibc/4BBAAF3202C9D75042AA62AA4189CA4FA68D81B6DCFAB94501FA6CF379DE706D',
          exponent: 0,
          aliases: ['erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F']
        }, {
          denom: 'crowdp',
          exponent: 18
        }],
      base: 'ibc/4BBAAF3202C9D75042AA62AA4189CA4FA68D81B6DCFAB94501FA6CF379DE706D',
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
            channel_id: 'channel-25',
            base_denom: 'erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Haqq Network',
      denom_units: [{
          denom: 'ibc/255BEB856BFBC1B75A3C349CF769E9FADEB595804F4FC688A72D651576B9180E',
          exponent: 0,
          aliases: ['aISLM']
        }, {
          denom: 'ISLM',
          exponent: 18
        }],
      base: 'ibc/255BEB856BFBC1B75A3C349CF769E9FADEB595804F4FC688A72D651576B9180E',
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
            channel_id: 'channel-7',
            base_denom: 'aISLM',
            chain_name: 'haqq'
          },
          chain: {
            channel_id: 'channel-240'
          }
        }]
    },
    {
      description: 'Deenar gold-backed stablecoin',
      denom_units: [{
          denom: 'ibc/3973C5943C3BA56C227AAF71D072DB915FA53FBDD2D5CA648E44D3FD234922BA',
          exponent: 0,
          aliases: ['erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE']
        }, {
          denom: 'DEEN',
          exponent: 6
        }],
      base: 'ibc/3973C5943C3BA56C227AAF71D072DB915FA53FBDD2D5CA648E44D3FD234922BA',
      name: 'Deenar',
      display: 'DEEN',
      address: '0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE',
      symbol: 'DEEN',
      type_asset: 'erc20',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE',
            chain_name: 'haqq'
          },
          chain: {
            channel_id: 'channel-240'
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
      description: 'Injective is a decentralized exchange protocol that enables fast, secure, and fully decentralized trading of derivatives, futures, and spot markets.',
      denom_units: [{
          denom: 'ibc/A7454562FF29FE068F42F9DE4805ABEF54F599D1720B345D6518D9B5C64EA6D2',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/A7454562FF29FE068F42F9DE4805ABEF54F599D1720B345D6518D9B5C64EA6D2',
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
            channel_id: 'channel-89',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'ibc/6CAD45BB3451E22333CB4F007039453CECFD20E029D7D04E36A8B5DA8D774D6F',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'ibc/6CAD45BB3451E22333CB4F007039453CECFD20E029D7D04E36A8B5DA8D774D6F',
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
            channel_id: 'channel-89',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'ibc/23B904F99D373071AAFD204D0C6637FE19591CF7296835FE604D389A6B2B3599',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'ibc/23B904F99D373071AAFD204D0C6637FE19591CF7296835FE604D389A6B2B3599',
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
            channel_id: 'channel-89',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'A receipt token for lent INJ issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/65526CF8D213EAAF861AB2833732DA80F00D2EFFE397096B572BF6ADBB2ACD06',
          exponent: 0,
          aliases: ['inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f']
        }, {
          denom: 'nINJ',
          exponent: 18
        }],
      base: 'ibc/65526CF8D213EAAF861AB2833732DA80F00D2EFFE397096B572BF6ADBB2ACD06',
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
            channel_id: 'channel-89',
            base_denom: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'A receipt token for lent ATOM issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/E4A64E69000189624D4B0C40B398275B988695CFD37B787B8B45B96216E01DBF',
          exponent: 0,
          aliases: ['inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780']
        }, {
          denom: 'nATOM',
          exponent: 6
        }],
      base: 'ibc/E4A64E69000189624D4B0C40B398275B988695CFD37B787B8B45B96216E01DBF',
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
            channel_id: 'channel-89',
            base_denom: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'A receipt token for lent WETH issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/F0F2987EECAA2EC79240AC860263AC94DAA375809B7002C82D1A23A22AD6FC85',
          exponent: 0,
          aliases: ['inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt']
        }, {
          denom: 'nWETH',
          exponent: 18
        }],
      base: 'ibc/F0F2987EECAA2EC79240AC860263AC94DAA375809B7002C82D1A23A22AD6FC85',
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
            channel_id: 'channel-89',
            base_denom: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'A receipt token for lent USDT issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/77F61677C5605837984D8B4D07662CBBF0106B0FCCF08228A000FFA715DB6EE5',
          exponent: 0,
          aliases: ['inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s']
        }, {
          denom: 'nUSDT',
          exponent: 6
        }],
      base: 'ibc/77F61677C5605837984D8B4D07662CBBF0106B0FCCF08228A000FFA715DB6EE5',
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
            channel_id: 'channel-89',
            base_denom: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'A receipt token for lent TIA issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/C2DD09C1C9B4DFEDC08C0088E8F62A01C1BFC731C7A90953B040817DE58FB5E3',
          exponent: 0,
          aliases: ['inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv']
        }, {
          denom: 'nTIA',
          exponent: 6
        }],
      base: 'ibc/C2DD09C1C9B4DFEDC08C0088E8F62A01C1BFC731C7A90953B040817DE58FB5E3',
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
            channel_id: 'channel-89',
            base_denom: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/DA356E369C3E5CF6A9F1DCD99CE8ED55FBD595E676A5CF033CE784C060492D5A',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ibc/DA356E369C3E5CF6A9F1DCD99CE8ED55FBD595E676A5CF033CE784C060492D5A',
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
            channel_id: 'channel-139',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-24'
          }
        }]
    },
    {
      description: 'The native token of kopi',
      denom_units: [{
          denom: 'ibc/5813FA53CD99E89E2339252C34E5093C9D1D118EA4DFA04C269C1D0E516D3A86',
          exponent: 0,
          aliases: ['ukopi']
        }, {
          denom: 'XKP',
          exponent: 6
        }],
      base: 'ibc/5813FA53CD99E89E2339252C34E5093C9D1D118EA4DFA04C269C1D0E516D3A86',
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
            channel_id: 'channel-18',
            base_denom: 'ukopi',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-322'
          }
        }]
    },
    {
      description: 'A MM deposit receipt of the Stablecoin native to the Kopi blockchain',
      denom_units: [{
          denom: 'ibc/3DAC6AAC5A8477737601C7213982253EDB15DBD2D9CCA7D53A5065174584F61A',
          exponent: 0,
          aliases: ['uckusd']
        }, {
          denom: 'ckUSD',
          exponent: 6
        }],
      base: 'ibc/3DAC6AAC5A8477737601C7213982253EDB15DBD2D9CCA7D53A5065174584F61A',
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
            channel_id: 'channel-18',
            base_denom: 'uckusd',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-322'
          }
        }]
    },
    {
      description: 'A MM deposit receipt of the Stablecoin USDC from noble Chain',
      denom_units: [{
          denom: 'ibc/9C42368562ECFA257088167E5F573485E6B17846082FE35B5DF315CD5DD9A76B',
          exponent: 0,
          aliases: ['ucusdc']
        }, {
          denom: 'cUSDC',
          exponent: 6
        }],
      base: 'ibc/9C42368562ECFA257088167E5F573485E6B17846082FE35B5DF315CD5DD9A76B',
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
            channel_id: 'channel-18',
            base_denom: 'ucusdc',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-322'
          }
        }]
    },
    {
      description: 'A MM deposit receipt of the Stablecoin USDT from Injective Chain',
      denom_units: [{
          denom: 'ibc/FBC94481F3D00C623E84991F953E73BB96BC6908A4B652F39E8B4C6B5052031C',
          exponent: 0,
          aliases: ['ucusdtinj']
        }, {
          denom: 'cUSDT.inj',
          exponent: 6
        }],
      base: 'ibc/FBC94481F3D00C623E84991F953E73BB96BC6908A4B652F39E8B4C6B5052031C',
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
            channel_id: 'channel-18',
            base_denom: 'ucusdtinj',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-322'
          }
        }]
    },
    {
      description: 'arbitrage receipt token of cUSDT',
      denom_units: [{
          denom: 'ibc/0BD1E07BA990DF055A21516F45F75EFCB382A41CAADFC108245382F1DF4EA6C0',
          exponent: 0,
          aliases: ['uasusdtinj']
        }, {
          denom: 'asusdtinj',
          exponent: 6
        }],
      base: 'ibc/0BD1E07BA990DF055A21516F45F75EFCB382A41CAADFC108245382F1DF4EA6C0',
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
            channel_id: 'channel-18',
            base_denom: 'uasusdtinj',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-322'
          }
        }]
    },
    {
      description: 'arbitrage receipt token of cUSDC',
      denom_units: [{
          denom: 'ibc/81DC330BC51858FC9851CC157439F5136092F80FDEAA39AAA1AB1014C37C298F',
          exponent: 0,
          aliases: ['uasusdc']
        }, {
          denom: 'asUSDC',
          exponent: 6
        }],
      base: 'ibc/81DC330BC51858FC9851CC157439F5136092F80FDEAA39AAA1AB1014C37C298F',
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
            channel_id: 'channel-18',
            base_denom: 'uasusdc',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-322'
          }
        }]
    },
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      denom_units: [{
          denom: 'ibc/EF4222BF77971A75F4E655E2AD2AFDDC520CE428EF938A1C91157E9DFBFF32A3',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/EF4222BF77971A75F4E655E2AD2AFDDC520CE428EF938A1C91157E9DFBFF32A3',
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
            channel_id: 'channel-32',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-8'
          }
        }]
    },
    {
      description: 'Neutron is a smart contract blockchain within the Cosmos ecosystem, leveraging the Cosmos Hub\'s security to provide cross-chain DeFi applications.',
      denom_units: [{
          denom: 'ibc/8777F3C6E49CA66F9779ABA1749C12E032C2AC437F151F6DC74AB8C1A240DCFD',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/8777F3C6E49CA66F9779ABA1749C12E032C2AC437F151F6DC74AB8C1A240DCFD',
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
            channel_id: 'channel-8',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-123'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/0291025A297B1DFF732780AC408F9EF9583E726A568453065862E3EA6868120F',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/0291025A297B1DFF732780AC408F9EF9583E726A568453065862E3EA6868120F',
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
            channel_id: 'channel-8',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-123'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/D131195B03C2D4ECDD72AD69373B9B2AACECDDE1D69D8297D60B513FC4C0E8ED',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/D131195B03C2D4ECDD72AD69373B9B2AACECDDE1D69D8297D60B513FC4C0E8ED',
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
            channel_id: 'channel-8',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-123'
          }
        }]
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/31E7A80EA551015C5C3AA73AF67B7B5BED0DF35968656F8B667FED8E22290E92',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/31E7A80EA551015C5C3AA73AF67B7B5BED0DF35968656F8B667FED8E22290E92',
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
            channel_id: 'channel-8',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-123'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/D24B4564BCD51D3D02D9987D92571EAC5915676A9BD6D9B0C1D0254CB8A5EA34',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/D24B4564BCD51D3D02D9987D92571EAC5915676A9BD6D9B0C1D0254CB8A5EA34',
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
            channel_id: 'channel-326',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/07F71BEE7FA84450268B4F6895417F12FBCD1792B57C98431F5210E42117B206',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/07F71BEE7FA84450268B4F6895417F12FBCD1792B57C98431F5210E42117B206',
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
            channel_id: 'channel-326',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'Persistence One is building a Bitcoin Cross-chain Swaps solution, enabling fast, zero-slippage secure swaps across Bitcoin Layer 2s.',
      denom_units: [{
          denom: 'ibc/33B47BAFB13393321709116BB1E0B968D655ABCB68EC8D254EAC957F740C6415',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      base: 'ibc/33B47BAFB13393321709116BB1E0B968D655ABCB68EC8D254EAC957F740C6415',
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
            channel_id: 'channel-67',
            base_denom: 'uxprt',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-53'
          }
        }]
    },
    {
      description: 'The native token of PRYZM',
      denom_units: [{
          denom: 'ibc/1E0EFAC20BCF1D7B409655DC2D44B24F17FFA92A2A55905567D2A50AED22FCA2',
          exponent: 0,
          aliases: ['upryzm']
        }, {
          denom: 'pryzm',
          exponent: 6
        }],
      base: 'ibc/1E0EFAC20BCF1D7B409655DC2D44B24F17FFA92A2A55905567D2A50AED22FCA2',
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
            channel_id: 'channel-23',
            base_denom: 'upryzm',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/FDC505A06D97468B8CC029BFDB78DC70E65C422859A011FEA642EAE93440C295',
          exponent: 0,
          aliases: ['p:uatom:30Sep2024']
        }, {
          denom: 'pATOM30Sep2024',
          exponent: 6
        }],
      base: 'ibc/FDC505A06D97468B8CC029BFDB78DC70E65C422859A011FEA642EAE93440C295',
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
            channel_id: 'channel-23',
            base_denom: 'p:uatom:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/55B4101CAE99F87511088D1F3A2F76F2395A8530D5CC4812274DD44E8476E057',
          exponent: 0,
          aliases: ['p:uatom:31Dec2024']
        }, {
          denom: 'pATOM31Dec2024',
          exponent: 6
        }],
      base: 'ibc/55B4101CAE99F87511088D1F3A2F76F2395A8530D5CC4812274DD44E8476E057',
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
            channel_id: 'channel-23',
            base_denom: 'p:uatom:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/2F042D64EFA7F4BB4AB581F922332507C2DCE01896FECEEC6F1F7356E1D55D9A',
          exponent: 0,
          aliases: ['p:uatom:31Mar2025']
        }, {
          denom: 'pATOM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/2F042D64EFA7F4BB4AB581F922332507C2DCE01896FECEEC6F1F7356E1D55D9A',
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
            channel_id: 'channel-23',
            base_denom: 'p:uatom:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/253EA3B5D7A1A5D514A4AE516DF4D44918C9B0DA338B6FEBD2BFA56470908A2F',
          exponent: 0,
          aliases: ['p:uatom:30Jun2025']
        }, {
          denom: 'pATOM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/253EA3B5D7A1A5D514A4AE516DF4D44918C9B0DA338B6FEBD2BFA56470908A2F',
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
            channel_id: 'channel-23',
            base_denom: 'p:uatom:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/AA156824072F48C5E6840E3F35B0A086A7D02312DB84EF79E252F90759D152A9',
          exponent: 0,
          aliases: ['p:uatom:30Sep2025']
        }, {
          denom: 'pATOM30Sep2025',
          exponent: 6
        }],
      base: 'ibc/AA156824072F48C5E6840E3F35B0A086A7D02312DB84EF79E252F90759D152A9',
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
            channel_id: 'channel-23',
            base_denom: 'p:uatom:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/6158EE7FCC761925E37FBF07C722714E32A4916D414CA1908BBCACA57DFC227E',
          exponent: 0,
          aliases: ['p:uatom:31Dec2025']
        }, {
          denom: 'pATOM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/6158EE7FCC761925E37FBF07C722714E32A4916D414CA1908BBCACA57DFC227E',
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
            channel_id: 'channel-23',
            base_denom: 'p:uatom:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/810AAF2E4A0B8A1FD39C17AD16415414885F86169476496AF9698A9CAAB4F5E6',
          exponent: 0,
          aliases: ['p:uatom:31Dec2026']
        }, {
          denom: 'pATOM31Dec2026',
          exponent: 6
        }],
      base: 'ibc/810AAF2E4A0B8A1FD39C17AD16415414885F86169476496AF9698A9CAAB4F5E6',
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
            channel_id: 'channel-23',
            base_denom: 'p:uatom:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/E3EF332B89028A4096DC0F3EC4AC0615557AAABC9C99FFA4898F9F2F01C603CB',
          exponent: 0,
          aliases: ['p:uosmo:30Sep2024']
        }, {
          denom: 'pOSMO30Sep2024',
          exponent: 6
        }],
      base: 'ibc/E3EF332B89028A4096DC0F3EC4AC0615557AAABC9C99FFA4898F9F2F01C603CB',
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
            channel_id: 'channel-23',
            base_denom: 'p:uosmo:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/50310E48B6968CF92830666B91EA7C89E885CD583B85819CFDAD1662AD1FB276',
          exponent: 0,
          aliases: ['p:uosmo:31Dec2024']
        }, {
          denom: 'pOSMO31Dec2024',
          exponent: 6
        }],
      base: 'ibc/50310E48B6968CF92830666B91EA7C89E885CD583B85819CFDAD1662AD1FB276',
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
            channel_id: 'channel-23',
            base_denom: 'p:uosmo:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/EFF462661AE1C257F08A7CE72C23AB79D1AF6A5EE0F7AA22AFC73E8709EBB340',
          exponent: 0,
          aliases: ['p:uosmo:31Mar2025']
        }, {
          denom: 'pOSMO31Mar2025',
          exponent: 6
        }],
      base: 'ibc/EFF462661AE1C257F08A7CE72C23AB79D1AF6A5EE0F7AA22AFC73E8709EBB340',
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
            channel_id: 'channel-23',
            base_denom: 'p:uosmo:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/01A6A42305BB3A518DCFEF21C0DE20FD51A7C3526BD83C2752772A187CC24BF6',
          exponent: 0,
          aliases: ['p:uosmo:30Jun2025']
        }, {
          denom: 'pOSMO30Jun2025',
          exponent: 6
        }],
      base: 'ibc/01A6A42305BB3A518DCFEF21C0DE20FD51A7C3526BD83C2752772A187CC24BF6',
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
            channel_id: 'channel-23',
            base_denom: 'p:uosmo:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/E735630523990C95DB77C8CE0B5574AF23DACD02C10CC330EF2B4A74DD7D6526',
          exponent: 0,
          aliases: ['p:uosmo:30Sep2025']
        }, {
          denom: 'pOSMO30Sep2025',
          exponent: 6
        }],
      base: 'ibc/E735630523990C95DB77C8CE0B5574AF23DACD02C10CC330EF2B4A74DD7D6526',
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
            channel_id: 'channel-23',
            base_denom: 'p:uosmo:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/4E031D2FFB8B4E7251A234E377E6CB48019DE207B606FFF0281BF96FF6188297',
          exponent: 0,
          aliases: ['p:uosmo:31Dec2025']
        }, {
          denom: 'pOSMO31Dec2025',
          exponent: 6
        }],
      base: 'ibc/4E031D2FFB8B4E7251A234E377E6CB48019DE207B606FFF0281BF96FF6188297',
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
            channel_id: 'channel-23',
            base_denom: 'p:uosmo:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/AB07D130ECC4DD781C9E96BAF6DB21155E38BE17927CF2269566B79FDCD44C7C',
          exponent: 0,
          aliases: ['p:uosmo:31Dec2026']
        }, {
          denom: 'pOSMO31Dec2026',
          exponent: 6
        }],
      base: 'ibc/AB07D130ECC4DD781C9E96BAF6DB21155E38BE17927CF2269566B79FDCD44C7C',
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
            channel_id: 'channel-23',
            base_denom: 'p:uosmo:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/7F6E1E08071BF0A4ED409DD15BF0B136C68B207EA19D9ADD3167DB682CEA4110',
          exponent: 0,
          aliases: ['p:inj:30Sep2024']
        }, {
          denom: 'pINJ30Sep2024',
          exponent: 18
        }],
      base: 'ibc/7F6E1E08071BF0A4ED409DD15BF0B136C68B207EA19D9ADD3167DB682CEA4110',
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
            channel_id: 'channel-23',
            base_denom: 'p:inj:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/7C1E9F339063A8CC4532242FCD6D051777CDDD4997BCD73430E0CD747784DCEE',
          exponent: 0,
          aliases: ['p:inj:31Dec2024']
        }, {
          denom: 'pINJ31Dec2024',
          exponent: 18
        }],
      base: 'ibc/7C1E9F339063A8CC4532242FCD6D051777CDDD4997BCD73430E0CD747784DCEE',
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
            channel_id: 'channel-23',
            base_denom: 'p:inj:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/066F65BE987FF88A682CBA23C73C231F1768CFFCBA783BE220553617B7A7627B',
          exponent: 0,
          aliases: ['p:inj:31Mar2025']
        }, {
          denom: 'pINJ31Mar2025',
          exponent: 18
        }],
      base: 'ibc/066F65BE987FF88A682CBA23C73C231F1768CFFCBA783BE220553617B7A7627B',
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
            channel_id: 'channel-23',
            base_denom: 'p:inj:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/28DD432E0477B2E6841466DABFB07345E415F7B6C7E194F13E79147344271FF2',
          exponent: 0,
          aliases: ['p:inj:30Jun2025']
        }, {
          denom: 'pINJ30Jun2025',
          exponent: 18
        }],
      base: 'ibc/28DD432E0477B2E6841466DABFB07345E415F7B6C7E194F13E79147344271FF2',
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
            channel_id: 'channel-23',
            base_denom: 'p:inj:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/EE16AC56ED514DEF9A63E2A9900B0C60055DCA63DF8EE554DD94EF7221B0BD0D',
          exponent: 0,
          aliases: ['p:inj:30Sep2025']
        }, {
          denom: 'pINJ30Sep2025',
          exponent: 18
        }],
      base: 'ibc/EE16AC56ED514DEF9A63E2A9900B0C60055DCA63DF8EE554DD94EF7221B0BD0D',
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
            channel_id: 'channel-23',
            base_denom: 'p:inj:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/657B68E59B32E981D5E00A555042474060BD7E5A9E273BE01D08EB12C30FB581',
          exponent: 0,
          aliases: ['p:inj:31Dec2025']
        }, {
          denom: 'pINJ31Dec2025',
          exponent: 18
        }],
      base: 'ibc/657B68E59B32E981D5E00A555042474060BD7E5A9E273BE01D08EB12C30FB581',
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
            channel_id: 'channel-23',
            base_denom: 'p:inj:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/09D33AF02EA43147AC808E83FF61C2AE22D3E51C24A26D7B4A1F9607EBFE13E8',
          exponent: 0,
          aliases: ['p:inj:31Dec2026']
        }, {
          denom: 'pINJ31Dec2026',
          exponent: 18
        }],
      base: 'ibc/09D33AF02EA43147AC808E83FF61C2AE22D3E51C24A26D7B4A1F9607EBFE13E8',
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
            channel_id: 'channel-23',
            base_denom: 'p:inj:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/3BB480F5CB383B417D0CC736424A72AA5E2FD1659150623ECF6CCA2B6CCDFE8E',
          exponent: 0,
          aliases: ['p:uluna:30Sep2024']
        }, {
          denom: 'pLUNA30Sep2024',
          exponent: 6
        }],
      base: 'ibc/3BB480F5CB383B417D0CC736424A72AA5E2FD1659150623ECF6CCA2B6CCDFE8E',
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
            channel_id: 'channel-23',
            base_denom: 'p:uluna:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/16FE78C4FFAD147A4B992336FBD6337E30CCD504BF980C8110FB7623785F10B5',
          exponent: 0,
          aliases: ['p:uluna:31Dec2024']
        }, {
          denom: 'pLUNA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/16FE78C4FFAD147A4B992336FBD6337E30CCD504BF980C8110FB7623785F10B5',
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
            channel_id: 'channel-23',
            base_denom: 'p:uluna:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/14D736AD0862CBF59318775DB6FAADBF3A775D6EA68D8EACC70BD03A548DA822',
          exponent: 0,
          aliases: ['p:uluna:31Mar2025']
        }, {
          denom: 'pLUNA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/14D736AD0862CBF59318775DB6FAADBF3A775D6EA68D8EACC70BD03A548DA822',
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
            channel_id: 'channel-23',
            base_denom: 'p:uluna:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/9246B2C3C20ABD522B31C8C7C72E0A865ED0367B7AE7DE82E9F0D495A30BD005',
          exponent: 0,
          aliases: ['p:uluna:30Jun2025']
        }, {
          denom: 'pLUNA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/9246B2C3C20ABD522B31C8C7C72E0A865ED0367B7AE7DE82E9F0D495A30BD005',
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
            channel_id: 'channel-23',
            base_denom: 'p:uluna:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/F4FA8E70672E1AAD4CD4D7CCE274ACA711AED9D1AB51960E7D614E28AFC06E5A',
          exponent: 0,
          aliases: ['p:uluna:30Sep2025']
        }, {
          denom: 'pLUNA30Sep2025',
          exponent: 6
        }],
      base: 'ibc/F4FA8E70672E1AAD4CD4D7CCE274ACA711AED9D1AB51960E7D614E28AFC06E5A',
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
            channel_id: 'channel-23',
            base_denom: 'p:uluna:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/E5E39C5A2C4B4195B54E2174C2C105BE296DAC988AF7F1B9F084F8179B32C9FD',
          exponent: 0,
          aliases: ['p:uluna:31Dec2025']
        }, {
          denom: 'pLUNA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/E5E39C5A2C4B4195B54E2174C2C105BE296DAC988AF7F1B9F084F8179B32C9FD',
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
            channel_id: 'channel-23',
            base_denom: 'p:uluna:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/A7489C24FB6625AF5B2AF7A0B9D505AD32DA93C1812188BF00D1EC4B52D614A2',
          exponent: 0,
          aliases: ['p:uluna:31Dec2026']
        }, {
          denom: 'pLUNA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/A7489C24FB6625AF5B2AF7A0B9D505AD32DA93C1812188BF00D1EC4B52D614A2',
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
            channel_id: 'channel-23',
            base_denom: 'p:uluna:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/5603267A3558B92C84054629757339521426C66C3B7E6E881684902EF1D58862',
          exponent: 0,
          aliases: ['p:uauuu:30Sep2024']
        }, {
          denom: 'pAUUU30Sep2024',
          exponent: 6
        }],
      base: 'ibc/5603267A3558B92C84054629757339521426C66C3B7E6E881684902EF1D58862',
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
            channel_id: 'channel-23',
            base_denom: 'p:uauuu:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/B4583BB652D057B0853006E556CCCA1CE3FF80DD18D2FD92A25F61D533FD9740',
          exponent: 0,
          aliases: ['p:uauuu:31Dec2024']
        }, {
          denom: 'pAUUU31Dec2024',
          exponent: 6
        }],
      base: 'ibc/B4583BB652D057B0853006E556CCCA1CE3FF80DD18D2FD92A25F61D533FD9740',
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
            channel_id: 'channel-23',
            base_denom: 'p:uauuu:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/968F19C3B6F61E2CCAE70EC1E0BB9A9F6E83D43045CF59EA48D74CBF766D02D3',
          exponent: 0,
          aliases: ['p:uauuu:30Jun2025']
        }, {
          denom: 'pAUUU30Jun2025',
          exponent: 6
        }],
      base: 'ibc/968F19C3B6F61E2CCAE70EC1E0BB9A9F6E83D43045CF59EA48D74CBF766D02D3',
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
            channel_id: 'channel-23',
            base_denom: 'p:uauuu:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/03E2989EADA6F6CB28F04AF448B29926F93660DC5A7CB8BC90D7994720AAFA3F',
          exponent: 0,
          aliases: ['p:uauuu:31Dec2025']
        }, {
          denom: 'pAUUU31Dec2025',
          exponent: 6
        }],
      base: 'ibc/03E2989EADA6F6CB28F04AF448B29926F93660DC5A7CB8BC90D7994720AAFA3F',
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
            channel_id: 'channel-23',
            base_denom: 'p:uauuu:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/3B05B8787CE3ED430585A149237A52E1408F66C637996EDD095F4FB524898A21',
          exponent: 0,
          aliases: ['p:uauuu:31Dec2026']
        }, {
          denom: 'pAUUU31Dec2026',
          exponent: 6
        }],
      base: 'ibc/3B05B8787CE3ED430585A149237A52E1408F66C637996EDD095F4FB524898A21',
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
            channel_id: 'channel-23',
            base_denom: 'p:uauuu:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/8EA0D87D9AD84A182AD2187228D1FE7686917E97BEB81C416EF6283E5A08AD16',
          exponent: 0,
          aliases: ['p:stutia:30Sep2024']
        }, {
          denom: 'pstTIA30Sep2024',
          exponent: 6
        }],
      base: 'ibc/8EA0D87D9AD84A182AD2187228D1FE7686917E97BEB81C416EF6283E5A08AD16',
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
            channel_id: 'channel-23',
            base_denom: 'p:stutia:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/96834D0E2859D571EFB82B21547A0E00F306CBCEFCBFEC1D3B183FBCBA47319E',
          exponent: 0,
          aliases: ['p:stutia:31Dec2024']
        }, {
          denom: 'pstTIA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/96834D0E2859D571EFB82B21547A0E00F306CBCEFCBFEC1D3B183FBCBA47319E',
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
            channel_id: 'channel-23',
            base_denom: 'p:stutia:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/421555677E59D606EC931E1576BB99E04A70EC028A5588B9224820C76319CF32',
          exponent: 0,
          aliases: ['p:stutia:31Mar2025']
        }, {
          denom: 'pstTIA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/421555677E59D606EC931E1576BB99E04A70EC028A5588B9224820C76319CF32',
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
            channel_id: 'channel-23',
            base_denom: 'p:stutia:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/53DE0B48EB8F4286CEDC6E8ADB6002478C4E2A6A63F3114E8646F782F52E96E0',
          exponent: 0,
          aliases: ['p:stutia:30Jun2025']
        }, {
          denom: 'pstTIA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/53DE0B48EB8F4286CEDC6E8ADB6002478C4E2A6A63F3114E8646F782F52E96E0',
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
            channel_id: 'channel-23',
            base_denom: 'p:stutia:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/BBE35E47418AA3A1608C3BC7D53E7AA78E1AB0AD823E1D16BFFAF245BDA2483F',
          exponent: 0,
          aliases: ['p:stutia:31Dec2025']
        }, {
          denom: 'pstTIA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/BBE35E47418AA3A1608C3BC7D53E7AA78E1AB0AD823E1D16BFFAF245BDA2483F',
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
            channel_id: 'channel-23',
            base_denom: 'p:stutia:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/2840098D5785B2EBE0A1946E991DCDFB5B2F2D1E3DA728D48D0F85CD5828AD87',
          exponent: 0,
          aliases: ['p:stutia:31Dec2026']
        }, {
          denom: 'pstTIA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/2840098D5785B2EBE0A1946E991DCDFB5B2F2D1E3DA728D48D0F85CD5828AD87',
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
            channel_id: 'channel-23',
            base_denom: 'p:stutia:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/28F36AB3DF33A62BEA4369A0AA730E56798D96348F16DD80FB3D2ED32701500A',
          exponent: 0,
          aliases: ['p:stadydx:30Sep2024']
        }, {
          denom: 'pstDYDX30Sep2024',
          exponent: 18
        }],
      base: 'ibc/28F36AB3DF33A62BEA4369A0AA730E56798D96348F16DD80FB3D2ED32701500A',
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
            channel_id: 'channel-23',
            base_denom: 'p:stadydx:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/7DDC1927108B96790173F1E060BE389DBBFF03DE44D5CCCD035459BABD4E05EE',
          exponent: 0,
          aliases: ['p:stadydx:31Dec2024']
        }, {
          denom: 'pstDYDX31Dec2024',
          exponent: 18
        }],
      base: 'ibc/7DDC1927108B96790173F1E060BE389DBBFF03DE44D5CCCD035459BABD4E05EE',
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
            channel_id: 'channel-23',
            base_denom: 'p:stadydx:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/3B719E7E5298395A72AF68FCF5164D25DA42A0F78658BA446E79C3F3058BFA0A',
          exponent: 0,
          aliases: ['p:stadydx:31Mar2025']
        }, {
          denom: 'pstDYDX31Mar2025',
          exponent: 18
        }],
      base: 'ibc/3B719E7E5298395A72AF68FCF5164D25DA42A0F78658BA446E79C3F3058BFA0A',
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
            channel_id: 'channel-23',
            base_denom: 'p:stadydx:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/1D6E3E43B08479B785BFDD00448613223064977507AD2B5131C7194DDB2E211C',
          exponent: 0,
          aliases: ['p:stadydx:30Jun2025']
        }, {
          denom: 'pstDYDX30Jun2025',
          exponent: 18
        }],
      base: 'ibc/1D6E3E43B08479B785BFDD00448613223064977507AD2B5131C7194DDB2E211C',
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
            channel_id: 'channel-23',
            base_denom: 'p:stadydx:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/FA1313F1ED08F5C2DC65528FC3F792CA0ACC0062A22FCEE12E068086B7004292',
          exponent: 0,
          aliases: ['p:stadydx:31Dec2025']
        }, {
          denom: 'pstDYDX31Dec2025',
          exponent: 18
        }],
      base: 'ibc/FA1313F1ED08F5C2DC65528FC3F792CA0ACC0062A22FCEE12E068086B7004292',
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
            channel_id: 'channel-23',
            base_denom: 'p:stadydx:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/83E39E1F642E3D001898F78C8C68862316DC896004E875E2E106D2C80091FBDF',
          exponent: 0,
          aliases: ['p:stadydx:31Dec2026']
        }, {
          denom: 'pstDYDX31Dec2026',
          exponent: 18
        }],
      base: 'ibc/83E39E1F642E3D001898F78C8C68862316DC896004E875E2E106D2C80091FBDF',
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
            channel_id: 'channel-23',
            base_denom: 'p:stadydx:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/1E7C8E1E24029105A717D6AD40D8A09E5492D710393898442C3CECEF215DBCD1',
          exponent: 0,
          aliases: ['p:udatom:31Dec2024']
        }, {
          denom: 'pdATOM31Dec2024',
          exponent: 6
        }],
      base: 'ibc/1E7C8E1E24029105A717D6AD40D8A09E5492D710393898442C3CECEF215DBCD1',
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
            channel_id: 'channel-23',
            base_denom: 'p:udatom:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/FFEA306531922A10F3D7A986F7E9F7E90729ADDBC8A47FE60602985C94D8C2A6',
          exponent: 0,
          aliases: ['p:udatom:31Mar2025']
        }, {
          denom: 'pdATOM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/FFEA306531922A10F3D7A986F7E9F7E90729ADDBC8A47FE60602985C94D8C2A6',
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
            channel_id: 'channel-23',
            base_denom: 'p:udatom:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/D2AD5F7D1E91A8B1FABD1F0F247EB76D8AD7FB43B208ED94D24C024175E88B18',
          exponent: 0,
          aliases: ['p:udatom:30Jun2025']
        }, {
          denom: 'pdATOM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/D2AD5F7D1E91A8B1FABD1F0F247EB76D8AD7FB43B208ED94D24C024175E88B18',
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
            channel_id: 'channel-23',
            base_denom: 'p:udatom:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/118EBB600B3034B5E20F377A789154955ED52AB8274F59C8D392744F16E763AF',
          exponent: 0,
          aliases: ['p:udatom:31Dec2025']
        }, {
          denom: 'pdATOM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/118EBB600B3034B5E20F377A789154955ED52AB8274F59C8D392744F16E763AF',
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
            channel_id: 'channel-23',
            base_denom: 'p:udatom:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/AE129F0BCE94A9E37707436B59D4262E2099121F9584742255BFBBCDE63FEA53',
          exponent: 0,
          aliases: ['p:udatom:31Dec2026']
        }, {
          denom: 'pdATOM31Dec2026',
          exponent: 6
        }],
      base: 'ibc/AE129F0BCE94A9E37707436B59D4262E2099121F9584742255BFBBCDE63FEA53',
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
            channel_id: 'channel-23',
            base_denom: 'p:udatom:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/C7A36ED16833B185422AA7F9C5088D2244D3D272FCF643DCB22A533A381F7539',
          exponent: 0,
          aliases: ['p:utia:31Dec2024']
        }, {
          denom: 'pTIA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/C7A36ED16833B185422AA7F9C5088D2244D3D272FCF643DCB22A533A381F7539',
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
            channel_id: 'channel-23',
            base_denom: 'p:utia:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/F82942E32BCF3C3DD8ADE4A65330FE790D6FCC8EE95F1A6B340CC576B38EBAE2',
          exponent: 0,
          aliases: ['p:utia:31Mar2025']
        }, {
          denom: 'pTIA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/F82942E32BCF3C3DD8ADE4A65330FE790D6FCC8EE95F1A6B340CC576B38EBAE2',
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
            channel_id: 'channel-23',
            base_denom: 'p:utia:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/895ECA6E18E37E7A41AB34312D80DFE0179BFB77950E826278517F1ED85C355B',
          exponent: 0,
          aliases: ['p:utia:30Jun2025']
        }, {
          denom: 'pTIA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/895ECA6E18E37E7A41AB34312D80DFE0179BFB77950E826278517F1ED85C355B',
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
            channel_id: 'channel-23',
            base_denom: 'p:utia:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/BDC5F288181F8F15277079225F38BA75895F4FE7B7A8B6E930DCB3915D0731A4',
          exponent: 0,
          aliases: ['p:utia:30Sep2025']
        }, {
          denom: 'pTIA30Sep2025',
          exponent: 6
        }],
      base: 'ibc/BDC5F288181F8F15277079225F38BA75895F4FE7B7A8B6E930DCB3915D0731A4',
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
            channel_id: 'channel-23',
            base_denom: 'p:utia:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/63643B075255500EB8D5783C7D94B773B1CEE7B469A53769765B4E6E7AEA960E',
          exponent: 0,
          aliases: ['p:utia:31Dec2025']
        }, {
          denom: 'pTIA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/63643B075255500EB8D5783C7D94B773B1CEE7B469A53769765B4E6E7AEA960E',
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
            channel_id: 'channel-23',
            base_denom: 'p:utia:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/CB4DD6A20F08AD539BF5D15948F409710533CC45703C9F90D91134DE9E71DADE',
          exponent: 0,
          aliases: ['p:utia:31Dec2026']
        }, {
          denom: 'pTIA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/CB4DD6A20F08AD539BF5D15948F409710533CC45703C9F90D91134DE9E71DADE',
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
            channel_id: 'channel-23',
            base_denom: 'p:utia:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/ADFCE3A83A0A7C9D2C4E0133067B1375272F4A77ED2E88B0B41867F017D9EC77',
          exponent: 0,
          aliases: ['p:ausdy:31Mar2025']
        }, {
          denom: 'pUSDY31Mar2025',
          exponent: 18
        }],
      base: 'ibc/ADFCE3A83A0A7C9D2C4E0133067B1375272F4A77ED2E88B0B41867F017D9EC77',
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
            channel_id: 'channel-23',
            base_denom: 'p:ausdy:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/E22062934100F447CF960408520C57A271B5367EA6A132731FA90259530BCDDF',
          exponent: 0,
          aliases: ['p:ausdy:30Jun2025']
        }, {
          denom: 'pUSDY30Jun2025',
          exponent: 18
        }],
      base: 'ibc/E22062934100F447CF960408520C57A271B5367EA6A132731FA90259530BCDDF',
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
            channel_id: 'channel-23',
            base_denom: 'p:ausdy:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/1D1E49A0D3DE01EB62C66A43724EA37785B81392FB998004E9BD008E59CD154F',
          exponent: 0,
          aliases: ['p:ausdy:30Sep2025']
        }, {
          denom: 'pUSDY30Sep2025',
          exponent: 18
        }],
      base: 'ibc/1D1E49A0D3DE01EB62C66A43724EA37785B81392FB998004E9BD008E59CD154F',
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
            channel_id: 'channel-23',
            base_denom: 'p:ausdy:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/1437ECEBA179BFB8CDDA7BAA946C3FAD2130E0F65210D4F780C1D91183757937',
          exponent: 0,
          aliases: ['p:ausdy:31Dec2025']
        }, {
          denom: 'pUSDY31Dec2025',
          exponent: 18
        }],
      base: 'ibc/1437ECEBA179BFB8CDDA7BAA946C3FAD2130E0F65210D4F780C1D91183757937',
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
            channel_id: 'channel-23',
            base_denom: 'p:ausdy:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/9AE212E39181C27FEE97511034214E9D181430D2472E074800560F15E1BCE1D5',
          exponent: 0,
          aliases: ['p:ausdy:31Mar2026']
        }, {
          denom: 'pUSDY31Mar2026',
          exponent: 18
        }],
      base: 'ibc/9AE212E39181C27FEE97511034214E9D181430D2472E074800560F15E1BCE1D5',
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
            channel_id: 'channel-23',
            base_denom: 'p:ausdy:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/DF24BBE1FA83ACA94F2B5EAF930BF217B4000D7536766D9BED34F6564571211F',
          exponent: 0,
          aliases: ['p:ausdy:30Jun2026']
        }, {
          denom: 'pUSDY30Jun2026',
          exponent: 18
        }],
      base: 'ibc/DF24BBE1FA83ACA94F2B5EAF930BF217B4000D7536766D9BED34F6564571211F',
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
            channel_id: 'channel-23',
            base_denom: 'p:ausdy:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/708A9066DC938C3832693BD5EE975484DA7A1F31E43B373D3B56D5439B56B004',
          exponent: 0,
          aliases: ['p:upryzm:31Mar2025']
        }, {
          denom: 'pPRYZM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/708A9066DC938C3832693BD5EE975484DA7A1F31E43B373D3B56D5439B56B004',
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
            channel_id: 'channel-23',
            base_denom: 'p:upryzm:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/CC90CE4431B59A8B28451E0BE2329F4C5FCB50E24CBA271A67A21141DD09877A',
          exponent: 0,
          aliases: ['p:upryzm:30Jun2025']
        }, {
          denom: 'pPRYZM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/CC90CE4431B59A8B28451E0BE2329F4C5FCB50E24CBA271A67A21141DD09877A',
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
            channel_id: 'channel-23',
            base_denom: 'p:upryzm:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/ABE837E6D2C74F5981245CC3B03EECA7BB2B5D4AC128A971DBAF1C4A485427ED',
          exponent: 0,
          aliases: ['p:upryzm:30Sep2025']
        }, {
          denom: 'pPRYZM30Sep2025',
          exponent: 6
        }],
      base: 'ibc/ABE837E6D2C74F5981245CC3B03EECA7BB2B5D4AC128A971DBAF1C4A485427ED',
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
            channel_id: 'channel-23',
            base_denom: 'p:upryzm:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/249B682A950759969C3A001944B0FB102FB8376965EE6CBB67A4374C9E9F5655',
          exponent: 0,
          aliases: ['p:upryzm:31Dec2025']
        }, {
          denom: 'pPRYZM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/249B682A950759969C3A001944B0FB102FB8376965EE6CBB67A4374C9E9F5655',
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
            channel_id: 'channel-23',
            base_denom: 'p:upryzm:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/67F9DF2BFDF95E31C9A7A6CFB9EF178FAB608E8CC89779E6913894F18CE77ED0',
          exponent: 0,
          aliases: ['p:upryzm:31Mar2026']
        }, {
          denom: 'pPRYZM31Mar2026',
          exponent: 6
        }],
      base: 'ibc/67F9DF2BFDF95E31C9A7A6CFB9EF178FAB608E8CC89779E6913894F18CE77ED0',
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
            channel_id: 'channel-23',
            base_denom: 'p:upryzm:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/D5F81651CEC98016DB007BF7C55A1CBB00C82F38B775A0A9B1E69A0EC105DA45',
          exponent: 0,
          aliases: ['p:upryzm:30Jun2026']
        }, {
          denom: 'pPRYZM30Jun2026',
          exponent: 6
        }],
      base: 'ibc/D5F81651CEC98016DB007BF7C55A1CBB00C82F38B775A0A9B1E69A0EC105DA45',
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
            channel_id: 'channel-23',
            base_denom: 'p:upryzm:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for sUSDS with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/E09C8AE65B6600ADDEDC6B723B30F501FE2697413B96DF4106825D676802D31D',
          exponent: 0,
          aliases: ['p:asusds:30Jun2025']
        }, {
          denom: 'psUSDS30Jun2025',
          exponent: 18
        }],
      base: 'ibc/E09C8AE65B6600ADDEDC6B723B30F501FE2697413B96DF4106825D676802D31D',
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
            channel_id: 'channel-23',
            base_denom: 'p:asusds:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for sUSDS with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/EB17DC26F62892D32F1ACFC9E723FBAA12B08922480ACC810A0B86BCBFA80C45',
          exponent: 0,
          aliases: ['p:asusds:30Sep2025']
        }, {
          denom: 'psUSDS30Sep2025',
          exponent: 18
        }],
      base: 'ibc/EB17DC26F62892D32F1ACFC9E723FBAA12B08922480ACC810A0B86BCBFA80C45',
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
            channel_id: 'channel-23',
            base_denom: 'p:asusds:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for sUSDS with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/BB20589B1526F0A6453CD6250AA3902DD0DEB23973DE8F63DA1081EE7F6222F7',
          exponent: 0,
          aliases: ['p:asusds:31Dec2025']
        }, {
          denom: 'psUSDS31Dec2025',
          exponent: 18
        }],
      base: 'ibc/BB20589B1526F0A6453CD6250AA3902DD0DEB23973DE8F63DA1081EE7F6222F7',
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
            channel_id: 'channel-23',
            base_denom: 'p:asusds:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for sUSDS with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/E638774CDD4FB6EC9AC9C81DB223C86DB0BC5FA9BF6E7EDB1105612B0CFFA51F',
          exponent: 0,
          aliases: ['p:asusds:31Mar2026']
        }, {
          denom: 'psUSDS31Mar2026',
          exponent: 18
        }],
      base: 'ibc/E638774CDD4FB6EC9AC9C81DB223C86DB0BC5FA9BF6E7EDB1105612B0CFFA51F',
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
            channel_id: 'channel-23',
            base_denom: 'p:asusds:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for sUSDS with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/884C3D93A392DDADD5672AABA1A3CE4B7A614C073E42C6FB29712E4235D10A03',
          exponent: 0,
          aliases: ['p:asusds:30Jun2026']
        }, {
          denom: 'psUSDS30Jun2026',
          exponent: 18
        }],
      base: 'ibc/884C3D93A392DDADD5672AABA1A3CE4B7A614C073E42C6FB29712E4235D10A03',
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
            channel_id: 'channel-23',
            base_denom: 'p:asusds:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for mBTC with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/139A1B00CE8497C9F34EFA4430F74E98B54110DE92E260B7E240E8D4060044F7',
          exponent: 0,
          aliases: ['p:ambtc:30Sep2025']
        }, {
          denom: 'pmBTC30Sep2025',
          exponent: 18
        }],
      base: 'ibc/139A1B00CE8497C9F34EFA4430F74E98B54110DE92E260B7E240E8D4060044F7',
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
            channel_id: 'channel-23',
            base_denom: 'p:ambtc:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for mBTC with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/23B6FC05C94C194DC6C2B8B082891331D7BF1BFCCF5A67ACBDFABBD33AAE887A',
          exponent: 0,
          aliases: ['p:ambtc:31Dec2025']
        }, {
          denom: 'pmBTC31Dec2025',
          exponent: 18
        }],
      base: 'ibc/23B6FC05C94C194DC6C2B8B082891331D7BF1BFCCF5A67ACBDFABBD33AAE887A',
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
            channel_id: 'channel-23',
            base_denom: 'p:ambtc:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for mBTC with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/DC611BFD5D52B67F9B05DA8ABD6B544C44F7F248E6337E1E21F987BEE62B3C3C',
          exponent: 0,
          aliases: ['p:ambtc:31Mar2026']
        }, {
          denom: 'pmBTC31Mar2026',
          exponent: 18
        }],
      base: 'ibc/DC611BFD5D52B67F9B05DA8ABD6B544C44F7F248E6337E1E21F987BEE62B3C3C',
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
            channel_id: 'channel-23',
            base_denom: 'p:ambtc:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for mBTC with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/3B25C19BA6F81FCB7D2EC0EC718577A3C78FB3CE63A9E2A1FC59DB00615CA000',
          exponent: 0,
          aliases: ['p:ambtc:30Jun2026']
        }, {
          denom: 'pmBTC30Jun2026',
          exponent: 18
        }],
      base: 'ibc/3B25C19BA6F81FCB7D2EC0EC718577A3C78FB3CE63A9E2A1FC59DB00615CA000',
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
            channel_id: 'channel-23',
            base_denom: 'p:ambtc:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/035E33EE1605A89305FBA6F62539631FC861056CA8C09ED92203F4382621F515',
          exponent: 0,
          aliases: ['y:uatom:30Sep2024']
        }, {
          denom: 'yATOM30Sep2024',
          exponent: 6
        }],
      base: 'ibc/035E33EE1605A89305FBA6F62539631FC861056CA8C09ED92203F4382621F515',
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
            channel_id: 'channel-23',
            base_denom: 'y:uatom:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/10A1623A63932C7CF907E401B9457CCD6F3ED72C93346109C0E9183772CAF32F',
          exponent: 0,
          aliases: ['y:uatom:31Dec2024']
        }, {
          denom: 'yATOM31Dec2024',
          exponent: 6
        }],
      base: 'ibc/10A1623A63932C7CF907E401B9457CCD6F3ED72C93346109C0E9183772CAF32F',
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
            channel_id: 'channel-23',
            base_denom: 'y:uatom:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/14CAAF787CBC1584F4A5338E0B82C9618866F86B7DF870BE85EB49ACC369B3DD',
          exponent: 0,
          aliases: ['y:uatom:31Mar2025']
        }, {
          denom: 'yATOM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/14CAAF787CBC1584F4A5338E0B82C9618866F86B7DF870BE85EB49ACC369B3DD',
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
            channel_id: 'channel-23',
            base_denom: 'y:uatom:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/1925F5E360325007022E282CFA75A39B3A4E6274BE2D8B51DE7709AB617F3CCC',
          exponent: 0,
          aliases: ['y:uatom:30Jun2025']
        }, {
          denom: 'yATOM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/1925F5E360325007022E282CFA75A39B3A4E6274BE2D8B51DE7709AB617F3CCC',
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
            channel_id: 'channel-23',
            base_denom: 'y:uatom:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/716AC64366830299CD4E6D26B4A0151BCD5280053FD530C66E9B88E630B73C64',
          exponent: 0,
          aliases: ['y:uatom:30Sep2025']
        }, {
          denom: 'yATOM30Sep2025',
          exponent: 6
        }],
      base: 'ibc/716AC64366830299CD4E6D26B4A0151BCD5280053FD530C66E9B88E630B73C64',
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
            channel_id: 'channel-23',
            base_denom: 'y:uatom:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/9AB71D1EA2BEFA63DD81EC24825BDA75CA82C1604A345E19929BD1EDE155AC42',
          exponent: 0,
          aliases: ['y:uatom:31Dec2025']
        }, {
          denom: 'yATOM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/9AB71D1EA2BEFA63DD81EC24825BDA75CA82C1604A345E19929BD1EDE155AC42',
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
            channel_id: 'channel-23',
            base_denom: 'y:uatom:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/700802223AD760B3F1B9904CC3971C3EBA33349C6FCC547920CD1BD3C9181DF4',
          exponent: 0,
          aliases: ['y:uatom:31Dec2026']
        }, {
          denom: 'yATOM31Dec2026',
          exponent: 6
        }],
      base: 'ibc/700802223AD760B3F1B9904CC3971C3EBA33349C6FCC547920CD1BD3C9181DF4',
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
            channel_id: 'channel-23',
            base_denom: 'y:uatom:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/0B186F37520FB87B8243A35F5B8C1619A71103F7A51990971183E1F61C02B05E',
          exponent: 0,
          aliases: ['y:uosmo:30Sep2024']
        }, {
          denom: 'yOSMO30Sep2024',
          exponent: 6
        }],
      base: 'ibc/0B186F37520FB87B8243A35F5B8C1619A71103F7A51990971183E1F61C02B05E',
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
            channel_id: 'channel-23',
            base_denom: 'y:uosmo:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/B4F7E0B83F2E5E22F9EE79400CE129D6F4D06FCC98DC6781A6B6675B2D6C866E',
          exponent: 0,
          aliases: ['y:uosmo:31Dec2024']
        }, {
          denom: 'yOSMO31Dec2024',
          exponent: 6
        }],
      base: 'ibc/B4F7E0B83F2E5E22F9EE79400CE129D6F4D06FCC98DC6781A6B6675B2D6C866E',
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
            channel_id: 'channel-23',
            base_denom: 'y:uosmo:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/B90472F39CE5DBCE833AF960932A8019B082FB1FBD58FF3622A46A850CDB39BC',
          exponent: 0,
          aliases: ['y:uosmo:31Mar2025']
        }, {
          denom: 'yOSMO31Mar2025',
          exponent: 6
        }],
      base: 'ibc/B90472F39CE5DBCE833AF960932A8019B082FB1FBD58FF3622A46A850CDB39BC',
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
            channel_id: 'channel-23',
            base_denom: 'y:uosmo:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/4A60159F07C77AD241F2EB697BFE0C6E46AA4DDBA4E22865DBF0EB4DDD89D2B0',
          exponent: 0,
          aliases: ['y:uosmo:30Jun2025']
        }, {
          denom: 'yOSMO30Jun2025',
          exponent: 6
        }],
      base: 'ibc/4A60159F07C77AD241F2EB697BFE0C6E46AA4DDBA4E22865DBF0EB4DDD89D2B0',
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
            channel_id: 'channel-23',
            base_denom: 'y:uosmo:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/FE1F74B575A20B51C0240BC6C3A3CC3353AA49E65876ACDE203D99F6169374E4',
          exponent: 0,
          aliases: ['y:uosmo:30Sep2025']
        }, {
          denom: 'yOSMO30Sep2025',
          exponent: 6
        }],
      base: 'ibc/FE1F74B575A20B51C0240BC6C3A3CC3353AA49E65876ACDE203D99F6169374E4',
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
            channel_id: 'channel-23',
            base_denom: 'y:uosmo:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/5E0A07BD099240211E6521CF8936C077B08D9B2F763E8B3985274CC6E7D2CAC2',
          exponent: 0,
          aliases: ['y:uosmo:31Dec2025']
        }, {
          denom: 'yOSMO31Dec2025',
          exponent: 6
        }],
      base: 'ibc/5E0A07BD099240211E6521CF8936C077B08D9B2F763E8B3985274CC6E7D2CAC2',
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
            channel_id: 'channel-23',
            base_denom: 'y:uosmo:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/3E013A6A3C2FAAB6C78799DFD0E6CF7D7E8DD3BC68C9D73BA5C9A71ABAA09902',
          exponent: 0,
          aliases: ['y:uosmo:31Dec2026']
        }, {
          denom: 'yOSMO31Dec2026',
          exponent: 6
        }],
      base: 'ibc/3E013A6A3C2FAAB6C78799DFD0E6CF7D7E8DD3BC68C9D73BA5C9A71ABAA09902',
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
            channel_id: 'channel-23',
            base_denom: 'y:uosmo:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/1752371D9E79C8825CB436236F328632D39BF5271FDB8381F61F68EF383166E2',
          exponent: 0,
          aliases: ['y:inj:30Sep2024']
        }, {
          denom: 'yINJ30Sep2024',
          exponent: 18
        }],
      base: 'ibc/1752371D9E79C8825CB436236F328632D39BF5271FDB8381F61F68EF383166E2',
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
            channel_id: 'channel-23',
            base_denom: 'y:inj:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/8A0FAB5FC3A1745DBB1DCF7B153D97D47E6FA4EFA9B552895BAA6EA500525268',
          exponent: 0,
          aliases: ['y:inj:31Dec2024']
        }, {
          denom: 'yINJ31Dec2024',
          exponent: 18
        }],
      base: 'ibc/8A0FAB5FC3A1745DBB1DCF7B153D97D47E6FA4EFA9B552895BAA6EA500525268',
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
            channel_id: 'channel-23',
            base_denom: 'y:inj:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/D3B34BD506DB1AE446C85842768D6FAD64BEB218E36703979D4D22B892A83B6A',
          exponent: 0,
          aliases: ['y:inj:31Mar2025']
        }, {
          denom: 'yINJ31Mar2025',
          exponent: 18
        }],
      base: 'ibc/D3B34BD506DB1AE446C85842768D6FAD64BEB218E36703979D4D22B892A83B6A',
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
            channel_id: 'channel-23',
            base_denom: 'y:inj:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/482416436843E381BEEB164685C6805075BE18FB5D2D144533B13CF8C56BF5BB',
          exponent: 0,
          aliases: ['y:inj:30Jun2025']
        }, {
          denom: 'yINJ30Jun2025',
          exponent: 18
        }],
      base: 'ibc/482416436843E381BEEB164685C6805075BE18FB5D2D144533B13CF8C56BF5BB',
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
            channel_id: 'channel-23',
            base_denom: 'y:inj:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/B0E544135FF483C38B1503B56FEF26EE9454A263D0B2A5BBB60C9DE15A934EAA',
          exponent: 0,
          aliases: ['y:inj:30Sep2025']
        }, {
          denom: 'yINJ30Sep2025',
          exponent: 18
        }],
      base: 'ibc/B0E544135FF483C38B1503B56FEF26EE9454A263D0B2A5BBB60C9DE15A934EAA',
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
            channel_id: 'channel-23',
            base_denom: 'y:inj:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/5041C5134CC92B289C69A387F693CB48E1FCA53AF52DBF9C77B4D17EFF80C061',
          exponent: 0,
          aliases: ['y:inj:31Dec2025']
        }, {
          denom: 'yINJ31Dec2025',
          exponent: 18
        }],
      base: 'ibc/5041C5134CC92B289C69A387F693CB48E1FCA53AF52DBF9C77B4D17EFF80C061',
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
            channel_id: 'channel-23',
            base_denom: 'y:inj:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/21881AA0B58A48F6F3A28ECE31C59CD4973638FE5A45D1D2B03CB18E9766689D',
          exponent: 0,
          aliases: ['y:inj:31Dec2026']
        }, {
          denom: 'yINJ31Dec2026',
          exponent: 18
        }],
      base: 'ibc/21881AA0B58A48F6F3A28ECE31C59CD4973638FE5A45D1D2B03CB18E9766689D',
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
            channel_id: 'channel-23',
            base_denom: 'y:inj:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/B5BBEF3ABE37A272D5533591247320EFE242ABEB4C92A57B0ABD83D963AF3EFA',
          exponent: 0,
          aliases: ['y:uluna:30Sep2024']
        }, {
          denom: 'yLUNA30Sep2024',
          exponent: 6
        }],
      base: 'ibc/B5BBEF3ABE37A272D5533591247320EFE242ABEB4C92A57B0ABD83D963AF3EFA',
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
            channel_id: 'channel-23',
            base_denom: 'y:uluna:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/95F170C4048DCDD1965F2410E1591CDD527F70735645002B94DFD7E721B1BC8C',
          exponent: 0,
          aliases: ['y:uluna:31Dec2024']
        }, {
          denom: 'yLUNA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/95F170C4048DCDD1965F2410E1591CDD527F70735645002B94DFD7E721B1BC8C',
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
            channel_id: 'channel-23',
            base_denom: 'y:uluna:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/785259DA3B08E5DD9610792200F3BA26F246421DB0C6AB0882B93AB42433427D',
          exponent: 0,
          aliases: ['y:uluna:31Mar2025']
        }, {
          denom: 'yLUNA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/785259DA3B08E5DD9610792200F3BA26F246421DB0C6AB0882B93AB42433427D',
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
            channel_id: 'channel-23',
            base_denom: 'y:uluna:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/C0EF52927F547F0E29AC3EDBE04A86C2D52DD6D564FA33D91CE26B90BEA0949F',
          exponent: 0,
          aliases: ['y:uluna:30Jun2025']
        }, {
          denom: 'yLUNA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/C0EF52927F547F0E29AC3EDBE04A86C2D52DD6D564FA33D91CE26B90BEA0949F',
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
            channel_id: 'channel-23',
            base_denom: 'y:uluna:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/25F632582B89C95DB8D71D3A8CB8EE4BE8CF29BEF208EBDCA4A84C5351142093',
          exponent: 0,
          aliases: ['y:uluna:30Sep2025']
        }, {
          denom: 'yLUNA30Sep2025',
          exponent: 6
        }],
      base: 'ibc/25F632582B89C95DB8D71D3A8CB8EE4BE8CF29BEF208EBDCA4A84C5351142093',
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
            channel_id: 'channel-23',
            base_denom: 'y:uluna:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/719CC9FF883F781BD8974CC78A41A015716B5FAB13BFE0D47348ECCFB0BF859E',
          exponent: 0,
          aliases: ['y:uluna:31Dec2025']
        }, {
          denom: 'yLUNA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/719CC9FF883F781BD8974CC78A41A015716B5FAB13BFE0D47348ECCFB0BF859E',
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
            channel_id: 'channel-23',
            base_denom: 'y:uluna:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/2FFF53F8EB635694DF84A1C445FC8E5B1DE1428728C8141E67CFA65DB14340DB',
          exponent: 0,
          aliases: ['y:uluna:31Dec2026']
        }, {
          denom: 'yLUNA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/2FFF53F8EB635694DF84A1C445FC8E5B1DE1428728C8141E67CFA65DB14340DB',
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
            channel_id: 'channel-23',
            base_denom: 'y:uluna:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/C18E4901AA77CA5F4BF49A3D96A3D029C293B446B45EA2E41BB3AFE340A5C32F',
          exponent: 0,
          aliases: ['y:uauuu:30Sep2024']
        }, {
          denom: 'yAUUU30Sep2024',
          exponent: 6
        }],
      base: 'ibc/C18E4901AA77CA5F4BF49A3D96A3D029C293B446B45EA2E41BB3AFE340A5C32F',
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
            channel_id: 'channel-23',
            base_denom: 'y:uauuu:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/4418FDCF1E8154522108C73AB23E29BE792BFA9177FDD396951DF90095678776',
          exponent: 0,
          aliases: ['y:uauuu:31Dec2024']
        }, {
          denom: 'yAUUU31Dec2024',
          exponent: 6
        }],
      base: 'ibc/4418FDCF1E8154522108C73AB23E29BE792BFA9177FDD396951DF90095678776',
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
            channel_id: 'channel-23',
            base_denom: 'y:uauuu:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/04DE8538E36C0C525F4A44BBBA5B3F590DACC6C7DE2DD9B204F8615DEAECBB9C',
          exponent: 0,
          aliases: ['y:uauuu:30Jun2025']
        }, {
          denom: 'yAUUU30Jun2025',
          exponent: 6
        }],
      base: 'ibc/04DE8538E36C0C525F4A44BBBA5B3F590DACC6C7DE2DD9B204F8615DEAECBB9C',
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
            channel_id: 'channel-23',
            base_denom: 'y:uauuu:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/88D982060E28A4A2F5A6777C94FE46A42079471DE67285648B18A383F14B9BB2',
          exponent: 0,
          aliases: ['y:uauuu:31Dec2025']
        }, {
          denom: 'yAUUU31Dec2025',
          exponent: 6
        }],
      base: 'ibc/88D982060E28A4A2F5A6777C94FE46A42079471DE67285648B18A383F14B9BB2',
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
            channel_id: 'channel-23',
            base_denom: 'y:uauuu:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/D01C482A1C077F603925A12C047BD1DCB488B4AE27CD73B08DAE4773A0E1A916',
          exponent: 0,
          aliases: ['y:uauuu:31Dec2026']
        }, {
          denom: 'yAUUU31Dec2026',
          exponent: 6
        }],
      base: 'ibc/D01C482A1C077F603925A12C047BD1DCB488B4AE27CD73B08DAE4773A0E1A916',
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
            channel_id: 'channel-23',
            base_denom: 'y:uauuu:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/F5FFAFF2C1A01846D425F48B8A0A30A1AD0FF92CDDE9D05A8394E17E42D57F79',
          exponent: 0,
          aliases: ['y:stutia:30Sep2024']
        }, {
          denom: 'ystTIA30Sep2024',
          exponent: 6
        }],
      base: 'ibc/F5FFAFF2C1A01846D425F48B8A0A30A1AD0FF92CDDE9D05A8394E17E42D57F79',
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
            channel_id: 'channel-23',
            base_denom: 'y:stutia:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/C882D59D6FDD5A055F5C87219808D6BA559EE30B5D5D856A9F7F401FF9D12976',
          exponent: 0,
          aliases: ['y:stutia:31Dec2024']
        }, {
          denom: 'ystTIA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/C882D59D6FDD5A055F5C87219808D6BA559EE30B5D5D856A9F7F401FF9D12976',
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
            channel_id: 'channel-23',
            base_denom: 'y:stutia:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/3B91B6DD5DE15986C587752D7C2365768CBF0C6B7A93A4DF8CFD052C76CE9E6E',
          exponent: 0,
          aliases: ['y:stutia:31Mar2025']
        }, {
          denom: 'ystTIA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/3B91B6DD5DE15986C587752D7C2365768CBF0C6B7A93A4DF8CFD052C76CE9E6E',
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
            channel_id: 'channel-23',
            base_denom: 'y:stutia:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/3DA72581434954123D138C3BA7094C6344ED81E7D1DE6D3AEC4F909355D8E805',
          exponent: 0,
          aliases: ['y:stutia:30Jun2025']
        }, {
          denom: 'ystTIA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/3DA72581434954123D138C3BA7094C6344ED81E7D1DE6D3AEC4F909355D8E805',
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
            channel_id: 'channel-23',
            base_denom: 'y:stutia:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/5C3E03B6D334E87684B0DC94033B279FE6DDC657268715AD8B2ACAEC2510E769',
          exponent: 0,
          aliases: ['y:stutia:31Dec2025']
        }, {
          denom: 'ystTIA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/5C3E03B6D334E87684B0DC94033B279FE6DDC657268715AD8B2ACAEC2510E769',
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
            channel_id: 'channel-23',
            base_denom: 'y:stutia:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/8762A151A22E5556D4E030AF766ED5DAC57DBB3534FEF9AE55416B135F6C2578',
          exponent: 0,
          aliases: ['y:stutia:31Dec2026']
        }, {
          denom: 'ystTIA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/8762A151A22E5556D4E030AF766ED5DAC57DBB3534FEF9AE55416B135F6C2578',
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
            channel_id: 'channel-23',
            base_denom: 'y:stutia:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/834CE656F8C56B23DF08B14CDB637DE4548E0594C5476F9E763F28D0DC323654',
          exponent: 0,
          aliases: ['y:stadydx:30Sep2024']
        }, {
          denom: 'ystDYDX30Sep2024',
          exponent: 18
        }],
      base: 'ibc/834CE656F8C56B23DF08B14CDB637DE4548E0594C5476F9E763F28D0DC323654',
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
            channel_id: 'channel-23',
            base_denom: 'y:stadydx:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/D642E4D1DDBC86EDC8E0D5B9962375F4C326BAD27946977606D3F808D34CF7C2',
          exponent: 0,
          aliases: ['y:stadydx:31Dec2024']
        }, {
          denom: 'ystDYDX31Dec2024',
          exponent: 18
        }],
      base: 'ibc/D642E4D1DDBC86EDC8E0D5B9962375F4C326BAD27946977606D3F808D34CF7C2',
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
            channel_id: 'channel-23',
            base_denom: 'y:stadydx:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/8D726646063536529D99F51A146A61680D390775DBA74FA2291821B47FAC09CF',
          exponent: 0,
          aliases: ['y:stadydx:31Mar2025']
        }, {
          denom: 'ystDYDX31Mar2025',
          exponent: 6
        }],
      base: 'ibc/8D726646063536529D99F51A146A61680D390775DBA74FA2291821B47FAC09CF',
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
            channel_id: 'channel-23',
            base_denom: 'y:stadydx:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/9B225BD1C3CB8DB05D57BCFA65A2BA4A40ED7AC660BBB98370EB7157CD42936A',
          exponent: 0,
          aliases: ['y:stadydx:30Jun2025']
        }, {
          denom: 'ystDYDX30Jun2025',
          exponent: 6
        }],
      base: 'ibc/9B225BD1C3CB8DB05D57BCFA65A2BA4A40ED7AC660BBB98370EB7157CD42936A',
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
            channel_id: 'channel-23',
            base_denom: 'y:stadydx:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/2028D925D2C1410EEF4223450C3E06A77FC9F18E4C31E9758DE015616AD97DD5',
          exponent: 0,
          aliases: ['y:stadydx:31Dec2025']
        }, {
          denom: 'ystDYDX31Dec2025',
          exponent: 18
        }],
      base: 'ibc/2028D925D2C1410EEF4223450C3E06A77FC9F18E4C31E9758DE015616AD97DD5',
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
            channel_id: 'channel-23',
            base_denom: 'y:stadydx:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/A0D3227FE8904233A8B6C221DE98FAC53A3CF2CBC2DD8384DFEEE8597D528526',
          exponent: 0,
          aliases: ['y:stadydx:31Dec2026']
        }, {
          denom: 'ystDYDX31Dec2026',
          exponent: 18
        }],
      base: 'ibc/A0D3227FE8904233A8B6C221DE98FAC53A3CF2CBC2DD8384DFEEE8597D528526',
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
            channel_id: 'channel-23',
            base_denom: 'y:stadydx:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/1C2A34E5C1E68510752B42378C50E5B6DF6866AD93ABF6379BEFAE02B1678BA3',
          exponent: 0,
          aliases: ['y:udatom:31Dec2024']
        }, {
          denom: 'ydATOM31Dec2024',
          exponent: 6
        }],
      base: 'ibc/1C2A34E5C1E68510752B42378C50E5B6DF6866AD93ABF6379BEFAE02B1678BA3',
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
            channel_id: 'channel-23',
            base_denom: 'y:udatom:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/2D88B0DB5D1712F39985E57C91F486B9D084CD8094743CFBA2ABE827C751E138',
          exponent: 0,
          aliases: ['y:udatom:31Mar2025']
        }, {
          denom: 'ydATOM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/2D88B0DB5D1712F39985E57C91F486B9D084CD8094743CFBA2ABE827C751E138',
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
            channel_id: 'channel-23',
            base_denom: 'y:udatom:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/E9D0FE1D218956A59ED837F00BE917E3133FA8239B34B6D07643FBF6A8D0A5E3',
          exponent: 0,
          aliases: ['y:udatom:30Jun2025']
        }, {
          denom: 'ydATOM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/E9D0FE1D218956A59ED837F00BE917E3133FA8239B34B6D07643FBF6A8D0A5E3',
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
            channel_id: 'channel-23',
            base_denom: 'y:udatom:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/D754B59C6D0131F4D4DFD2B7E603815C109E78D994D46841BC18E6BCDBFAA141',
          exponent: 0,
          aliases: ['y:udatom:31Dec2025']
        }, {
          denom: 'ydATOM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/D754B59C6D0131F4D4DFD2B7E603815C109E78D994D46841BC18E6BCDBFAA141',
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
            channel_id: 'channel-23',
            base_denom: 'y:udatom:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/12F96BA6B120207664671FED4E7F0FE138C695DDAA074F97D7F11C501CFBF89F',
          exponent: 0,
          aliases: ['y:udatom:31Dec2026']
        }, {
          denom: 'ydATOM31Dec2026',
          exponent: 6
        }],
      base: 'ibc/12F96BA6B120207664671FED4E7F0FE138C695DDAA074F97D7F11C501CFBF89F',
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
            channel_id: 'channel-23',
            base_denom: 'y:udatom:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/5C9276C4F1AB3FC1CFB1E1AC4F585C20BFF3537AC5E0D1D4F145C2580A20D6AD',
          exponent: 0,
          aliases: ['y:utia:31Dec2024']
        }, {
          denom: 'yTIA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/5C9276C4F1AB3FC1CFB1E1AC4F585C20BFF3537AC5E0D1D4F145C2580A20D6AD',
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
            channel_id: 'channel-23',
            base_denom: 'y:utia:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/847950234BB9220FECB1329A11E733C708B07870D5F46477D71464EF9928DA96',
          exponent: 0,
          aliases: ['y:utia:31Mar2025']
        }, {
          denom: 'yTIA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/847950234BB9220FECB1329A11E733C708B07870D5F46477D71464EF9928DA96',
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
            channel_id: 'channel-23',
            base_denom: 'y:utia:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/6AF410F051F251D0560CACB6F45AA9E1063854F0452A4DD249BFD82939D76D56',
          exponent: 0,
          aliases: ['y:utia:30Jun2025']
        }, {
          denom: 'yTIA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/6AF410F051F251D0560CACB6F45AA9E1063854F0452A4DD249BFD82939D76D56',
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
            channel_id: 'channel-23',
            base_denom: 'y:utia:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/3A9E82F8B655D13400F6EB17E0FD732F28E2BFFB0C1C0E099B27BC4265040E26',
          exponent: 0,
          aliases: ['y:utia:30Sep2025']
        }, {
          denom: 'yTIA30Sep2025',
          exponent: 6
        }],
      base: 'ibc/3A9E82F8B655D13400F6EB17E0FD732F28E2BFFB0C1C0E099B27BC4265040E26',
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
            channel_id: 'channel-23',
            base_denom: 'y:utia:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/573748CD799CCDEF43A87D6FC41B6B9E090E653B1596979DB957FF111D899A32',
          exponent: 0,
          aliases: ['y:utia:31Dec2025']
        }, {
          denom: 'yTIA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/573748CD799CCDEF43A87D6FC41B6B9E090E653B1596979DB957FF111D899A32',
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
            channel_id: 'channel-23',
            base_denom: 'y:utia:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/D6219A7BE78D3209BD82E8C26AD10BD4AA1D1BDDDB3727F009F11F67B4B82DB1',
          exponent: 0,
          aliases: ['y:utia:31Dec2026']
        }, {
          denom: 'yTIA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/D6219A7BE78D3209BD82E8C26AD10BD4AA1D1BDDDB3727F009F11F67B4B82DB1',
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
            channel_id: 'channel-23',
            base_denom: 'y:utia:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/3D2F7525A28B624EC2F284FF94B39DF0BB21BEF24BAE52072FD42CFEB7115E7B',
          exponent: 0,
          aliases: ['y:ausdy:31Mar2025']
        }, {
          denom: 'yUSDY31Mar2025',
          exponent: 18
        }],
      base: 'ibc/3D2F7525A28B624EC2F284FF94B39DF0BB21BEF24BAE52072FD42CFEB7115E7B',
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
            channel_id: 'channel-23',
            base_denom: 'y:ausdy:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/ABC0511D51DE6195E0C16C0B50CC3A12FBF2A4E51DED2B8AEFDA3884DBE9393E',
          exponent: 0,
          aliases: ['y:ausdy:30Jun2025']
        }, {
          denom: 'yUSDY30Jun2025',
          exponent: 18
        }],
      base: 'ibc/ABC0511D51DE6195E0C16C0B50CC3A12FBF2A4E51DED2B8AEFDA3884DBE9393E',
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
            channel_id: 'channel-23',
            base_denom: 'y:ausdy:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/8A02D3FFF1DCF5797C2697B166EB8E122781B9B797446479AE1D92D5C8080422',
          exponent: 0,
          aliases: ['y:ausdy:30Sep2025']
        }, {
          denom: 'yUSDY30Sep2025',
          exponent: 18
        }],
      base: 'ibc/8A02D3FFF1DCF5797C2697B166EB8E122781B9B797446479AE1D92D5C8080422',
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
            channel_id: 'channel-23',
            base_denom: 'y:ausdy:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/277064327A83D047A5432B678F38ADEADAAFE87CA8EEA526A9CE51E7CB01A4F0',
          exponent: 0,
          aliases: ['y:ausdy:31Dec2025']
        }, {
          denom: 'yUSDY31Dec2025',
          exponent: 18
        }],
      base: 'ibc/277064327A83D047A5432B678F38ADEADAAFE87CA8EEA526A9CE51E7CB01A4F0',
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
            channel_id: 'channel-23',
            base_denom: 'y:ausdy:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/1AD94940D5E3387DF71AF51FA140B059803662C4F397B858E74ADF7F770EA14A',
          exponent: 0,
          aliases: ['y:ausdy:31Mar2026']
        }, {
          denom: 'yUSDY31Mar2026',
          exponent: 18
        }],
      base: 'ibc/1AD94940D5E3387DF71AF51FA140B059803662C4F397B858E74ADF7F770EA14A',
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
            channel_id: 'channel-23',
            base_denom: 'y:ausdy:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/BE8CDA0A29AC281791718A1F09CD2B00D0755CC9F84AE39A5761E9742DF73D13',
          exponent: 0,
          aliases: ['y:ausdy:30Jun2026']
        }, {
          denom: 'yUSDY30Jun2026',
          exponent: 18
        }],
      base: 'ibc/BE8CDA0A29AC281791718A1F09CD2B00D0755CC9F84AE39A5761E9742DF73D13',
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
            channel_id: 'channel-23',
            base_denom: 'y:ausdy:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/BF233AC4B563B6E6333DF755B9C65880E5CE5D225F6F6B20B8FD2120261C4C34',
          exponent: 0,
          aliases: ['y:upryzm:31Mar2025']
        }, {
          denom: 'yPRYZM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/BF233AC4B563B6E6333DF755B9C65880E5CE5D225F6F6B20B8FD2120261C4C34',
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
            channel_id: 'channel-23',
            base_denom: 'y:upryzm:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/D8B6ED003DFB5666C2CCB882C789E179F4D93F6F9998EC93376E34E6E1D6B9F7',
          exponent: 0,
          aliases: ['y:upryzm:30Jun2025']
        }, {
          denom: 'yPRYZM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/D8B6ED003DFB5666C2CCB882C789E179F4D93F6F9998EC93376E34E6E1D6B9F7',
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
            channel_id: 'channel-23',
            base_denom: 'y:upryzm:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/BFF3227D38AA1E04C260EC12C5740A4067018C6F81F6FB8CDB009DA67213C52E',
          exponent: 0,
          aliases: ['y:upryzm:30Sep2025']
        }, {
          denom: 'yPRYZM30Sep2025',
          exponent: 6
        }],
      base: 'ibc/BFF3227D38AA1E04C260EC12C5740A4067018C6F81F6FB8CDB009DA67213C52E',
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
            channel_id: 'channel-23',
            base_denom: 'y:upryzm:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/3A0062B7B41F63C5C4B120681EEC83F675193AA2C13471FD0BD61E4137D42F5B',
          exponent: 0,
          aliases: ['y:upryzm:31Dec2025']
        }, {
          denom: 'yPRYZM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/3A0062B7B41F63C5C4B120681EEC83F675193AA2C13471FD0BD61E4137D42F5B',
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
            channel_id: 'channel-23',
            base_denom: 'y:upryzm:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/8800A35E58CBA24927A15CE074A3BFCA9122C999D1013C32BB6630BEB395CE2C',
          exponent: 0,
          aliases: ['y:upryzm:31Mar2026']
        }, {
          denom: 'yPRYZM31Mar2026',
          exponent: 6
        }],
      base: 'ibc/8800A35E58CBA24927A15CE074A3BFCA9122C999D1013C32BB6630BEB395CE2C',
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
            channel_id: 'channel-23',
            base_denom: 'y:upryzm:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/D2D9F2EF81F2E4AD33C81EC6EAF4122FB1376437C801E4B1C7221A31EC95EAD9',
          exponent: 0,
          aliases: ['y:upryzm:30Jun2026']
        }, {
          denom: 'yPRYZM30Jun2026',
          exponent: 6
        }],
      base: 'ibc/D2D9F2EF81F2E4AD33C81EC6EAF4122FB1376437C801E4B1C7221A31EC95EAD9',
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
            channel_id: 'channel-23',
            base_denom: 'y:upryzm:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for sUSDS with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/6E8B0C8FE6F2BC9CE204EBEA2AD1073EB372524DFD30605335F4C9E97ABC57D9',
          exponent: 0,
          aliases: ['y:asusds:30Jun2025']
        }, {
          denom: 'ysUSDS30Jun2025',
          exponent: 18
        }],
      base: 'ibc/6E8B0C8FE6F2BC9CE204EBEA2AD1073EB372524DFD30605335F4C9E97ABC57D9',
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
            channel_id: 'channel-23',
            base_denom: 'y:asusds:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for sUSDS with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/1B4FC75D682BB9A3282938E78C2702DD5D58B2A855FFB38FC4017E75130C4255',
          exponent: 0,
          aliases: ['y:asusds:30Sep2025']
        }, {
          denom: 'ysUSDS30Sep2025',
          exponent: 18
        }],
      base: 'ibc/1B4FC75D682BB9A3282938E78C2702DD5D58B2A855FFB38FC4017E75130C4255',
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
            channel_id: 'channel-23',
            base_denom: 'y:asusds:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for sUSDS with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/12FD27ED8433BBB899162A6E8C434A449BD0B888092625279F01727CD4037954',
          exponent: 0,
          aliases: ['y:asusds:31Dec2025']
        }, {
          denom: 'ysUSDS31Dec2025',
          exponent: 18
        }],
      base: 'ibc/12FD27ED8433BBB899162A6E8C434A449BD0B888092625279F01727CD4037954',
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
            channel_id: 'channel-23',
            base_denom: 'y:asusds:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for sUSDS with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/2C6F03930F7F2FDD7D35A35DBCBFFC19C3613EB8BE17FB68F99E71C9D257D9D5',
          exponent: 0,
          aliases: ['y:asusds:31Mar2026']
        }, {
          denom: 'ysUSDS31Mar2026',
          exponent: 18
        }],
      base: 'ibc/2C6F03930F7F2FDD7D35A35DBCBFFC19C3613EB8BE17FB68F99E71C9D257D9D5',
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
            channel_id: 'channel-23',
            base_denom: 'y:asusds:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for sUSDS with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/4771EB138C686B4101E0C08BE8A6F17E0F70A2F84C6952BDE2878752B79C3035',
          exponent: 0,
          aliases: ['y:asusds:30Jun2026']
        }, {
          denom: 'ysUSDS30Jun2026',
          exponent: 18
        }],
      base: 'ibc/4771EB138C686B4101E0C08BE8A6F17E0F70A2F84C6952BDE2878752B79C3035',
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
            channel_id: 'channel-23',
            base_denom: 'y:asusds:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for mBTC with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/DEB78F0E17E4690191234855E02F27A7132134E2FBC4879201EA98AF32CAB51C',
          exponent: 0,
          aliases: ['y:ambtc:30Sep2025']
        }, {
          denom: 'ymBTC30Sep2025',
          exponent: 18
        }],
      base: 'ibc/DEB78F0E17E4690191234855E02F27A7132134E2FBC4879201EA98AF32CAB51C',
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
            channel_id: 'channel-23',
            base_denom: 'y:ambtc:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for mBTC with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/0EA6CBA78F153A1060D52BBD38F92478731BB2F608C5FD0093F279744B6C1C49',
          exponent: 0,
          aliases: ['y:ambtc:31Dec2025']
        }, {
          denom: 'ymBTC31Dec2025',
          exponent: 18
        }],
      base: 'ibc/0EA6CBA78F153A1060D52BBD38F92478731BB2F608C5FD0093F279744B6C1C49',
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
            channel_id: 'channel-23',
            base_denom: 'y:ambtc:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for mBTC with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/8844D2B44C123878E74F194599599DD00785CCC0EB8979EBDAEF964D16216218',
          exponent: 0,
          aliases: ['y:ambtc:31Mar2026']
        }, {
          denom: 'ymBTC31Mar2026',
          exponent: 18
        }],
      base: 'ibc/8844D2B44C123878E74F194599599DD00785CCC0EB8979EBDAEF964D16216218',
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
            channel_id: 'channel-23',
            base_denom: 'y:ambtc:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for mBTC with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/8F0129D7D4FC6A0787D277CAEB343790E9CC3E4D027C515FD135AB9CA4C9C16B',
          exponent: 0,
          aliases: ['y:ambtc:30Jun2026']
        }, {
          denom: 'ymBTC30Jun2026',
          exponent: 18
        }],
      base: 'ibc/8F0129D7D4FC6A0787D277CAEB343790E9CC3E4D027C515FD135AB9CA4C9C16B',
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
            channel_id: 'channel-23',
            base_denom: 'y:ambtc:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for USDC / USDC.axl pool',
      denom_units: [{
          denom: 'ibc/49177641DCA86AF9013F76460DC33DF61C9C8784B8A2CD9F79104C09E05F1430',
          exponent: 0,
          aliases: ['lp:6:uusdc.axl-uusdc']
        }, {
          denom: 'lp:6:usdc.axl-usdc',
          exponent: 6
        }],
      base: 'ibc/49177641DCA86AF9013F76460DC33DF61C9C8784B8A2CD9F79104C09E05F1430',
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
            channel_id: 'channel-23',
            base_denom: 'lp:6:uusdc.axl-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for ATOM Yield pool',
      denom_units: [{
          denom: 'ibc/260ABAF6E433883983E25A0B286FDC03C60EF36B8AF62ABDA45805248E34DB95',
          exponent: 0,
          aliases: ['lp:0:uatom']
        }, {
          denom: 'lp:0:atom',
          exponent: 6
        }],
      base: 'ibc/260ABAF6E433883983E25A0B286FDC03C60EF36B8AF62ABDA45805248E34DB95',
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
            channel_id: 'channel-23',
            base_denom: 'lp:0:uatom',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for ATOM Boost pool',
      denom_units: [{
          denom: 'ibc/2F704A284B3505AEBD71CC96CE055185B53C596A96B339FC219EF9BA81B46019',
          exponent: 0,
          aliases: ['lp:2:uatomypt-uatom']
        }, {
          denom: 'lp:2:atomypt-atom',
          exponent: 6
        }],
      base: 'ibc/2F704A284B3505AEBD71CC96CE055185B53C596A96B339FC219EF9BA81B46019',
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
            channel_id: 'channel-23',
            base_denom: 'lp:2:uatomypt-uatom',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for ATOM / USDC pool',
      denom_units: [{
          denom: 'ibc/5C8B44DBB5DB8CF4EBA8212E19216BC744BC3D096F1D75A594B58412F59B1D76',
          exponent: 0,
          aliases: ['lp:3:uatom-uusdc']
        }, {
          denom: 'lp:3:atom-usdc',
          exponent: 6
        }],
      base: 'ibc/5C8B44DBB5DB8CF4EBA8212E19216BC744BC3D096F1D75A594B58412F59B1D76',
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
            channel_id: 'channel-23',
            base_denom: 'lp:3:uatom-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for INJ Yield pool',
      denom_units: [{
          denom: 'ibc/BEB863ED84CDA30B65B4EBC315CFE452B5E2F85D55A51D848ED5033C5B1B2C0F',
          exponent: 0,
          aliases: ['lp:1:inj']
        }, {
          denom: 'lp:1:INJ',
          exponent: 18
        }],
      base: 'ibc/BEB863ED84CDA30B65B4EBC315CFE452B5E2F85D55A51D848ED5033C5B1B2C0F',
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
            channel_id: 'channel-23',
            base_denom: 'lp:1:inj',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for INJ Boost pool',
      denom_units: [{
          denom: 'ibc/46F8988E34B088C5A75612FA60128B905AA559D1014FFC1E0EE16EF42DD7AB9F',
          exponent: 0,
          aliases: ['lp:4:injypt-inj']
        }, {
          denom: 'lp:4:INJypt-INJ',
          exponent: 18
        }],
      base: 'ibc/46F8988E34B088C5A75612FA60128B905AA559D1014FFC1E0EE16EF42DD7AB9F',
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
            channel_id: 'channel-23',
            base_denom: 'lp:4:injypt-inj',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for INJ / USDC pool',
      denom_units: [{
          denom: 'ibc/26EF028A47F05A81AAD4D29D80BAABCCD2AFFFB7E5DEF5D3FE4166173F5587D4',
          exponent: 0,
          aliases: ['lp:5:inj-uusdc']
        }, {
          denom: 'lp:5:INJ-usdc',
          exponent: 18
        }],
      base: 'ibc/26EF028A47F05A81AAD4D29D80BAABCCD2AFFFB7E5DEF5D3FE4166173F5587D4',
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
            channel_id: 'channel-23',
            base_denom: 'lp:5:inj-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for OSMO Yield pool',
      denom_units: [{
          denom: 'ibc/E5804BE751CAF0F1D4F329408E0B3DAD727F6E26990F97207ADEA84332BBDA40',
          exponent: 0,
          aliases: ['lp:8:uosmo']
        }, {
          denom: 'lp:8:osmo',
          exponent: 6
        }],
      base: 'ibc/E5804BE751CAF0F1D4F329408E0B3DAD727F6E26990F97207ADEA84332BBDA40',
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
            channel_id: 'channel-23',
            base_denom: 'lp:8:uosmo',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for OSMO Boost pool',
      denom_units: [{
          denom: 'ibc/D912B9482EC27489E000F7008A16CE710B0DF44BBD0EB713FB54C6BC3967BBE6',
          exponent: 0,
          aliases: ['lp:10:uosmoypt-uosmo']
        }, {
          denom: 'lp:10:osmoypt-osmo',
          exponent: 6
        }],
      base: 'ibc/D912B9482EC27489E000F7008A16CE710B0DF44BBD0EB713FB54C6BC3967BBE6',
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
            channel_id: 'channel-23',
            base_denom: 'lp:10:uosmoypt-uosmo',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for OSMO / USDC pool',
      denom_units: [{
          denom: 'ibc/DF4A29C07188E937F1B03D7DD12FB42EC7A77F6C62458B815C0942FFA6A100B3',
          exponent: 0,
          aliases: ['lp:11:uosmo-uusdc']
        }, {
          denom: 'lp:11:osmo-usdc',
          exponent: 6
        }],
      base: 'ibc/DF4A29C07188E937F1B03D7DD12FB42EC7A77F6C62458B815C0942FFA6A100B3',
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
            channel_id: 'channel-23',
            base_denom: 'lp:11:uosmo-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for LUNA Yield pool',
      denom_units: [{
          denom: 'ibc/29C3232BECA2F779CAE5C58EFC8ECBED37D502649B94341995F72C3923B22246',
          exponent: 0,
          aliases: ['lp:9:uluna']
        }, {
          denom: 'lp:9:luna',
          exponent: 6
        }],
      base: 'ibc/29C3232BECA2F779CAE5C58EFC8ECBED37D502649B94341995F72C3923B22246',
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
            channel_id: 'channel-23',
            base_denom: 'lp:9:uluna',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for LUNA Boost pool',
      denom_units: [{
          denom: 'ibc/740FE54D01F253EFAA10F021926F874362AEBA48FA5F5C5845A53150D996E72A',
          exponent: 0,
          aliases: ['lp:12:ulunaypt-uluna']
        }, {
          denom: 'lp:12:lunaypt-luna',
          exponent: 6
        }],
      base: 'ibc/740FE54D01F253EFAA10F021926F874362AEBA48FA5F5C5845A53150D996E72A',
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
            channel_id: 'channel-23',
            base_denom: 'lp:12:ulunaypt-uluna',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for LUNA / USDC pool',
      denom_units: [{
          denom: 'ibc/405A5EF5769E50B44A1E626B7C1588C506ACE1A879E23CC1FDB3702ABD4F151E',
          exponent: 0,
          aliases: ['lp:13:uluna-uusdc']
        }, {
          denom: 'lp:13:luna-usdc',
          exponent: 6
        }],
      base: 'ibc/405A5EF5769E50B44A1E626B7C1588C506ACE1A879E23CC1FDB3702ABD4F151E',
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
            channel_id: 'channel-23',
            base_denom: 'lp:13:uluna-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for AUUU Yield pool',
      denom_units: [{
          denom: 'ibc/09A8054AE00B2760314D08430490C083F02BF1129866C30B435D005D3EAD10D4',
          exponent: 0,
          aliases: ['lp:14:uauuu']
        }, {
          denom: 'lp:14:auuu',
          exponent: 6
        }],
      base: 'ibc/09A8054AE00B2760314D08430490C083F02BF1129866C30B435D005D3EAD10D4',
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
            channel_id: 'channel-23',
            base_denom: 'lp:14:uauuu',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for AUUU Boost pool',
      denom_units: [{
          denom: 'ibc/69B045A68BAE69FD11750305E6AB3491E8DE83151BF21B6E26E92A3798A17647',
          exponent: 0,
          aliases: ['lp:17:uauuuypt-uauuu']
        }, {
          denom: 'lp:17:auuuypt-auuu',
          exponent: 6
        }],
      base: 'ibc/69B045A68BAE69FD11750305E6AB3491E8DE83151BF21B6E26E92A3798A17647',
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
            channel_id: 'channel-23',
            base_denom: 'lp:17:uauuuypt-uauuu',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for AUUU / USDC pool',
      denom_units: [{
          denom: 'ibc/657441DCCFD0CFDAD1382814BEED21243EFB6BF57A1BC78A52FD9E06BC3EF38E',
          exponent: 0,
          aliases: ['lp:7:uauuu-uusdc']
        }, {
          denom: 'lp:7:auuu-usdc',
          exponent: 6
        }],
      base: 'ibc/657441DCCFD0CFDAD1382814BEED21243EFB6BF57A1BC78A52FD9E06BC3EF38E',
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
            channel_id: 'channel-23',
            base_denom: 'lp:7:uauuu-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for stDYDX Yield pool',
      denom_units: [{
          denom: 'ibc/10A19AC2D0FD5A52327A1302551C346429E2FBE4E57FE93D3221A504343CAE4D',
          exponent: 0,
          aliases: ['lp:15:stadydx']
        }, {
          denom: 'lp:15:stdydx',
          exponent: 18
        }],
      base: 'ibc/10A19AC2D0FD5A52327A1302551C346429E2FBE4E57FE93D3221A504343CAE4D',
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
            channel_id: 'channel-23',
            base_denom: 'lp:15:stadydx',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for stDYDX Boost pool',
      denom_units: [{
          denom: 'ibc/4C73184669F7DA2332E4F106B9C02DACBBE14E4A7D37E0CE1FAEE5A7CD352FD1',
          exponent: 0,
          aliases: ['lp:18:stadydxypt-adydx']
        }, {
          denom: 'lp:18:stdydxypt-dydx',
          exponent: 18
        }],
      base: 'ibc/4C73184669F7DA2332E4F106B9C02DACBBE14E4A7D37E0CE1FAEE5A7CD352FD1',
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
            channel_id: 'channel-23',
            base_denom: 'lp:18:stadydxypt-adydx',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for DYDX / USDC pool',
      denom_units: [{
          denom: 'ibc/95A72AADCA84A49D77DE1F9B846A9A5588EAA73204750B495445DA700E295202',
          exponent: 0,
          aliases: ['lp:19:adydx-uusdc']
        }, {
          denom: 'lp:19:dydx-usdc',
          exponent: 18
        }],
      base: 'ibc/95A72AADCA84A49D77DE1F9B846A9A5588EAA73204750B495445DA700E295202',
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
            channel_id: 'channel-23',
            base_denom: 'lp:19:adydx-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for stTIA Yield pool',
      denom_units: [{
          denom: 'ibc/6D973AAEA3E87AC9CA9F7765B8E563BDA4E4B464926D255CE78EB9AFAE9FFA35',
          exponent: 0,
          aliases: ['lp:16:stutia']
        }, {
          denom: 'lp:16:sttia',
          exponent: 6
        }],
      base: 'ibc/6D973AAEA3E87AC9CA9F7765B8E563BDA4E4B464926D255CE78EB9AFAE9FFA35',
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
            channel_id: 'channel-23',
            base_denom: 'lp:16:stutia',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for stTIA Boost pool',
      denom_units: [{
          denom: 'ibc/9C955CBD7348589132C1368235B2BD7B2195BD863EE1DB3A4FA12C30944F4DA6',
          exponent: 0,
          aliases: ['lp:20:stutiaypt-utia']
        }, {
          denom: 'lp:20:sttiaypt-tia',
          exponent: 6
        }],
      base: 'ibc/9C955CBD7348589132C1368235B2BD7B2195BD863EE1DB3A4FA12C30944F4DA6',
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
            channel_id: 'channel-23',
            base_denom: 'lp:20:stutiaypt-utia',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for TIA Yield pool',
      denom_units: [{
          denom: 'ibc/5C947F21F5013627A8BDBCFB4969BCD9830A7EBA955AE087F14E2D23AE0B2822',
          exponent: 0,
          aliases: ['lp:24:utia']
        }, {
          denom: 'lp:24:tia',
          exponent: 6
        }],
      base: 'ibc/5C947F21F5013627A8BDBCFB4969BCD9830A7EBA955AE087F14E2D23AE0B2822',
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
            channel_id: 'channel-23',
            base_denom: 'lp:24:utia',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for TIA Boost pool',
      denom_units: [{
          denom: 'ibc/6429C0408A39FAC03910FB32D673A1D63092CEDC1F1E0BDFDBADF1646A7738A9',
          exponent: 0,
          aliases: ['lp:25:utiaypt-utia']
        }, {
          denom: 'lp:25:tiaypt-tia',
          exponent: 6
        }],
      base: 'ibc/6429C0408A39FAC03910FB32D673A1D63092CEDC1F1E0BDFDBADF1646A7738A9',
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
            channel_id: 'channel-23',
            base_denom: 'lp:25:utiaypt-utia',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for TIA / USDC pool',
      denom_units: [{
          denom: 'ibc/697F540FCDA31AD7D72ED0D00A20958D243BAE2F8E748709F944BF6DB5E98752',
          exponent: 0,
          aliases: ['lp:21:utia-uusdc']
        }, {
          denom: 'lp:21:tia-usdc',
          exponent: 6
        }],
      base: 'ibc/697F540FCDA31AD7D72ED0D00A20958D243BAE2F8E748709F944BF6DB5E98752',
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
            channel_id: 'channel-23',
            base_denom: 'lp:21:utia-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for dATOM Yield pool',
      denom_units: [{
          denom: 'ibc/C19D7F43EA7FCB972582FE20D42C7EDD0D8444A23E4C6567FD9C01E00855A794',
          exponent: 0,
          aliases: ['lp:22:udatom']
        }, {
          denom: 'lp:22:datom',
          exponent: 6
        }],
      base: 'ibc/C19D7F43EA7FCB972582FE20D42C7EDD0D8444A23E4C6567FD9C01E00855A794',
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
            channel_id: 'channel-23',
            base_denom: 'lp:22:udatom',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for dATOM Boost pool',
      denom_units: [{
          denom: 'ibc/C1A755D3E5C127D4AC9E9DE7A659F85906331B71C14F3BC21091400E63AFF211',
          exponent: 0,
          aliases: ['lp:23:udatomypt-uatom']
        }, {
          denom: 'lp:23:datomypt-atom',
          exponent: 6
        }],
      base: 'ibc/C1A755D3E5C127D4AC9E9DE7A659F85906331B71C14F3BC21091400E63AFF211',
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
            channel_id: 'channel-23',
            base_denom: 'lp:23:udatomypt-uatom',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for USDY Yield pool',
      denom_units: [{
          denom: 'ibc/6904CC68AA2B634715BCCC39CA43C627208249B7B33F08439938D567768402EE',
          exponent: 0,
          aliases: ['lp:31:ausdy']
        }, {
          denom: 'lp:31:usdy',
          exponent: 18
        }],
      base: 'ibc/6904CC68AA2B634715BCCC39CA43C627208249B7B33F08439938D567768402EE',
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
            channel_id: 'channel-23',
            base_denom: 'lp:31:ausdy',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for USDY Boost pool',
      denom_units: [{
          denom: 'ibc/E36EE0E2FE6C9DD56DF53C965D02C852E0EDE8233BCD3CC81A8E7EF28F88ADE7',
          exponent: 0,
          aliases: ['lp:32:ausdyypt-uusdc']
        }, {
          denom: 'lp:32:usdyypt-usdc',
          exponent: 18
        }],
      base: 'ibc/E36EE0E2FE6C9DD56DF53C965D02C852E0EDE8233BCD3CC81A8E7EF28F88ADE7',
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
            channel_id: 'channel-23',
            base_denom: 'lp:32:ausdyypt-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for PRYZM Yield pool',
      denom_units: [{
          denom: 'ibc/3A45DCE979AB737E026955D4DB2938F32564B4F72B4E1E25039DDE7BC3FA7950',
          exponent: 0,
          aliases: ['lp:33:upryzm']
        }, {
          denom: 'lp:33:pryzm',
          exponent: 6
        }],
      base: 'ibc/3A45DCE979AB737E026955D4DB2938F32564B4F72B4E1E25039DDE7BC3FA7950',
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
            channel_id: 'channel-23',
            base_denom: 'lp:33:upryzm',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for PRYZM Base pool',
      denom_units: [{
          denom: 'ibc/16FE4C8035679C4ABDA9A7D94A6130041A65AE31EDA06229587E6176ACAB2D7B',
          exponent: 0,
          aliases: ['lp:34:upryzmypt-upryzm']
        }, {
          denom: 'lp:34:pryzmypt-pryzm',
          exponent: 6
        }],
      base: 'ibc/16FE4C8035679C4ABDA9A7D94A6130041A65AE31EDA06229587E6176ACAB2D7B',
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
            channel_id: 'channel-23',
            base_denom: 'lp:34:upryzmypt-upryzm',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for PRYZM / USDC pool',
      denom_units: [{
          denom: 'ibc/5BBE58431CE0DAC6FE661B8EC2C0BAC01311592CE57CE9A87C5272A2300A6148',
          exponent: 0,
          aliases: ['lp:35:upryzm-uusdc']
        }, {
          denom: 'lp:35:pryzm-usdc',
          exponent: 6
        }],
      base: 'ibc/5BBE58431CE0DAC6FE661B8EC2C0BAC01311592CE57CE9A87C5272A2300A6148',
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
            channel_id: 'channel-23',
            base_denom: 'lp:35:upryzm-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for sUSDS Yield pool',
      denom_units: [{
          denom: 'ibc/E74D4DE295D27C03E576E0CDE269E16BFCE5B536E7BF2E55FD0F4F4C3A394632',
          exponent: 0,
          aliases: ['lp:36:asusds']
        }, {
          denom: 'lp:36:susds',
          exponent: 18
        }],
      base: 'ibc/E74D4DE295D27C03E576E0CDE269E16BFCE5B536E7BF2E55FD0F4F4C3A394632',
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
            channel_id: 'channel-23',
            base_denom: 'lp:36:asusds',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for sUSDS Boost pool',
      denom_units: [{
          denom: 'ibc/E35C491D9B88BA7BE545CA9BFEC8040088EBC3E63057D6B844CC70A635640518',
          exponent: 0,
          aliases: ['lp:37:asusdsypt-uusdc']
        }, {
          denom: 'lp:37:susdsypt-usdc',
          exponent: 18
        }],
      base: 'ibc/E35C491D9B88BA7BE545CA9BFEC8040088EBC3E63057D6B844CC70A635640518',
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
            channel_id: 'channel-23',
            base_denom: 'lp:37:asusdsypt-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for mBTC Yield pool',
      denom_units: [{
          denom: 'ibc/C47A08A08D4173EE9FE3FCB4F6EBE512DA5CCA67DF0AD502941A58F097FC7527',
          exponent: 0,
          aliases: ['lp:38:ambtc']
        }, {
          denom: 'lp:38:mbtc',
          exponent: 18
        }],
      base: 'ibc/C47A08A08D4173EE9FE3FCB4F6EBE512DA5CCA67DF0AD502941A58F097FC7527',
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
            channel_id: 'channel-23',
            base_denom: 'lp:38:ambtc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for mBTC Boost pool',
      denom_units: [{
          denom: 'ibc/9EFBFACC2F3B962AF95434EC074615517208D1C4130CBF5A6ED013FB182BCF29',
          exponent: 0,
          aliases: ['lp:39:ambtcypt-wsat']
        }, {
          denom: 'lp:39:mbtcypt-wbtc',
          exponent: 18
        }],
      base: 'ibc/9EFBFACC2F3B962AF95434EC074615517208D1C4130CBF5A6ED013FB182BCF29',
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
            channel_id: 'channel-23',
            base_denom: 'lp:39:ambtcypt-wsat',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for WBTC / USDC pool',
      denom_units: [{
          denom: 'ibc/7FDD5A19037D67E8975885F20009616EB8979A74CEF179434FCACBF958ACF9E8',
          exponent: 0,
          aliases: ['lp:40:wsat-uusdc']
        }, {
          denom: 'lp:40:wbtc-usdc',
          exponent: 18
        }],
      base: 'ibc/7FDD5A19037D67E8975885F20009616EB8979A74CEF179434FCACBF958ACF9E8',
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
            channel_id: 'channel-23',
            base_denom: 'lp:40:wsat-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Saga is a blockchain platform focused on providing customizable blockchain solutions with a strong emphasis on security and scalability.',
      denom_units: [{
          denom: 'ibc/520D9C4509027DE66C737A1D6A6021915A3071E30DBA8F758B46532B060D7AA5',
          exponent: 0,
          aliases: ['usaga']
        }, {
          denom: 'saga',
          exponent: 6
        }],
      base: 'ibc/520D9C4509027DE66C737A1D6A6021915A3071E30DBA8F758B46532B060D7AA5',
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
            channel_id: 'channel-0',
            base_denom: 'usaga',
            chain_name: 'saga'
          },
          chain: {
            channel_id: 'channel-213'
          }
        }]
    },
    {
      description: 'Secret Network is a privacy-focused blockchain that enables private and secure smart contracts, protecting sensitive data.',
      denom_units: [{
          denom: 'ibc/563C6CB7E0423BE8B9FD1DAB9EAC201A6C2413D96F73618240B114CE4896734C',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'ibc/563C6CB7E0423BE8B9FD1DAB9EAC201A6C2413D96F73618240B114CE4896734C',
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
            channel_id: 'channel-37',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-40'
          }
        }]
    },
    {
      description: 'Sei is a layer-1 blockchain optimized for trading, focusing on providing high throughput, low latency, and efficient execution for decentralized exchanges.',
      denom_units: [{
          denom: 'ibc/AB7D2FCED9DEBF4988CB2ED41F527FD025C35665429C48703A0ECB856DE4C8AE',
          exponent: 0,
          aliases: ['usei']
        }, {
          denom: 'sei',
          exponent: 6
        }],
      base: 'ibc/AB7D2FCED9DEBF4988CB2ED41F527FD025C35665429C48703A0ECB856DE4C8AE',
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
            channel_id: 'channel-11',
            base_denom: 'usei',
            chain_name: 'sei'
          },
          chain: {
            channel_id: 'channel-149'
          }
        }]
    },
    {
      description: 'OOZARU is a meme token on SEI Network inspired by the iconic transformation in the Dragon Ball series',
      denom_units: [{
          denom: 'ibc/C19E6B6212A5DCF8293D3CD440D5C8F9EA05E559834AB21E71A3BDBAB907994C',
          exponent: 0,
          aliases: ['sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda']
        }, {
          denom: 'oozaru',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda',
      base: 'ibc/C19E6B6212A5DCF8293D3CD440D5C8F9EA05E559834AB21E71A3BDBAB907994C',
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
            channel_id: 'channel-11',
            base_denom: 'sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda',
            chain_name: 'sei'
          },
          chain: {
            channel_id: 'channel-149'
          }
        }]
    },
    {
      description: 'Somm Token (SOMM) is the native staking token of the Sommelier Chain',
      denom_units: [
        {
          denom: 'ibc/B86EFF6D227E3E33D7E3B5E65D0C1BB5BD79CCB56D35A9D824F0DD5D52CA43BA',
          exponent: 0,
          aliases: ['usomm']
        },
        {
          denom: 'msomm',
          exponent: 3,
          aliases: ['millisomm']
        },
        {
          denom: 'somm',
          exponent: 6
        }
      ],
      base: 'ibc/B86EFF6D227E3E33D7E3B5E65D0C1BB5BD79CCB56D35A9D824F0DD5D52CA43BA',
      name: 'Sommelier',
      display: 'somm',
      symbol: 'SOMM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg'
      },
      coingecko_id: 'sommelier',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg'
        }],
      socials: {
        website: 'https://www.sommelier.finance/',
        x: 'https://x.com/sommfinance'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-71',
            base_denom: 'usomm',
            chain_name: 'sommelier'
          },
          chain: {
            channel_id: 'channel-150'
          }
        }]
    },
    {
      description: 'Stargaze is a decentralized blockchain platform designed specifically for non-fungible tokens (NFTs), enabling creators to mint, trade, and interact with NFTs in a fully decentralized environment.',
      denom_units: [{
          denom: 'ibc/7EAE5BEF3A26B64AFBD89828AFDDB1DC7024A0276D22745201632C40E6E634D0',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ibc/7EAE5BEF3A26B64AFBD89828AFDDB1DC7024A0276D22745201632C40E6E634D0',
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
            channel_id: 'channel-106',
            base_denom: 'ustars',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-19'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Acrechain',
      denom_units: [{
          denom: 'ibc/D54D8A7843F08148FEEFA1DDCC7C9EAF94A4FC4F7E42EE90BBB18E157A31FDF1',
          exponent: 0,
          aliases: ['aacre']
        }, {
          denom: 'acre',
          exponent: 18
        }],
      base: 'ibc/D54D8A7843F08148FEEFA1DDCC7C9EAF94A4FC4F7E42EE90BBB18E157A31FDF1',
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
            channel_id: 'channel-13',
            base_denom: 'aacre',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-57'
          }
        }]
    },
    {
      description: 'Overcollateralized stable coin for Arable derivatives v1',
      denom_units: [{
          denom: 'ibc/C4EA2B68F8B0B61A71063695CF69D831D9088AB6872AC8B2F35B0D74610FA932',
          exponent: 0,
          aliases: ['erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c']
        }, {
          denom: 'arusd',
          exponent: 18
        }],
      base: 'ibc/C4EA2B68F8B0B61A71063695CF69D831D9088AB6872AC8B2F35B0D74610FA932',
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
            channel_id: 'channel-13',
            base_denom: 'erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-57'
          }
        }]
    },
    {
      description: 'Ciento Exchange Token',
      denom_units: [{
          denom: 'ibc/DFAE6C8B4F9BC2FE094442BF3BD7F94551BE9C337EFA6A24B0DD6CF54AEED093',
          exponent: 0,
          aliases: ['erc20/0xAE6D3334989a22A65228732446731438672418F2']
        }, {
          denom: 'cnto',
          exponent: 18
        }],
      base: 'ibc/DFAE6C8B4F9BC2FE094442BF3BD7F94551BE9C337EFA6A24B0DD6CF54AEED093',
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
            channel_id: 'channel-13',
            base_denom: 'erc20/0xAE6D3334989a22A65228732446731438672418F2',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-57'
          }
        }]
    },
    {
      description: 'Agoric is a smart contract platform that uses JavaScript to enable developers to build secure and scalable decentralized applications (dApps) easily.',
      denom_units: [{
          denom: 'ibc/E0C66F1D94163602FF5A3799290350E85BF40F8E2C7A7BA94B9DF694A564158E',
          exponent: 0,
          aliases: ['ubld']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      base: 'ibc/E0C66F1D94163602FF5A3799290350E85BF40F8E2C7A7BA94B9DF694A564158E',
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
            channel_id: 'channel-59',
            base_denom: 'ubld',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-148'
          }
        }]
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [{
          denom: 'ibc/38973850FD27F86A3453C37C11FF0C4A2BC4C0A24E29446EA7D043D014148470',
          exponent: 0,
          aliases: ['uist']
        }, {
          denom: 'ist',
          exponent: 6
        }],
      base: 'ibc/38973850FD27F86A3453C37C11FF0C4A2BC4C0A24E29446EA7D043D014148470',
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
            channel_id: 'channel-59',
            base_denom: 'uist',
            chain_name: 'agoric'
          },
          chain: {
            channel_id: 'channel-148'
          }
        }]
    },
    {
      description: 'Axelar is a decentralized interoperability network connecting multiple blockchain ecosystems, enabling seamless cross-chain communication and value transfer.',
      denom_units: [{
          denom: 'ibc/896A939C98D421F2E06EFC46E88E1DBBE10657CB1BE5018BF4D6FAC92FE758DB',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/896A939C98D421F2E06EFC46E88E1DBBE10657CB1BE5018BF4D6FAC92FE758DB',
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
            channel_id: 'channel-64',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-69'
          }
        }]
    },
    {
      description: 'The native token of BandChain',
      denom_units: [{
          denom: 'ibc/AC11D57A5FBC0DF322615027DB86FAA602283F1801ED71FDDAA26117C41256D7',
          exponent: 0,
          aliases: ['uband']
        }, {
          denom: 'band',
          exponent: 6
        }],
      base: 'ibc/AC11D57A5FBC0DF322615027DB86FAA602283F1801ED71FDDAA26117C41256D7',
      display: 'band',
      name: 'Band Protocol',
      symbol: 'BAND',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg'
      },
      coingecko_id: 'band-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg'
        }],
      socials: {
        website: 'https://www.bandprotocol.com/',
        x: 'https://x.com/BandProtocol'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-161',
            base_denom: 'uband',
            chain_name: 'bandchain'
          },
          chain: {
            channel_id: 'channel-258'
          }
        }]
    },
    {
      description: 'The native governance token of Carbon',
      denom_units: [{
          denom: 'ibc/5D9C9AD9C09F2D78F99DE11C7F7A86934A6034E7CA777B954A6FC16F31B0B015',
          exponent: 0,
          aliases: ['swth']
        }, {
          denom: 'dswth',
          exponent: 8,
          aliases: ['SWTH']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/5D9C9AD9C09F2D78F99DE11C7F7A86934A6034E7CA777B954A6FC16F31B0B015',
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
            channel_id: 'channel-8',
            base_denom: 'swth',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-47'
          }
        }]
    },
    {
      description: 'The native stablecoin of Carbon',
      denom_units: [{
          denom: 'ibc/5ED5F8462A935BF4DB8B13625904A38E99751D929BB49D47FEF3E2F12B8048D0',
          exponent: 0,
          aliases: ['usc']
        }, {
          denom: 'dusc',
          exponent: 8,
          aliases: ['USC']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/5ED5F8462A935BF4DB8B13625904A38E99751D929BB49D47FEF3E2F12B8048D0',
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
            channel_id: 'channel-8',
            base_denom: 'usc',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-47'
          }
        }]
    },
    {
      description: 'Grouped USD on Carbon',
      denom_units: [{
          denom: 'ibc/2883F0836B56903DDF4E528B6F4B930A9BFA3C81C00636DD144862D34E6934CD',
          exponent: 0,
          aliases: ['cgt/1']
        }, {
          denom: 'usd',
          exponent: 18,
          aliases: ['USD']
        }],
      base: 'ibc/2883F0836B56903DDF4E528B6F4B930A9BFA3C81C00636DD144862D34E6934CD',
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
            channel_id: 'channel-8',
            base_denom: 'cgt/1',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-47'
          }
        }]
    },
    {
      description: 'Celestia is a modular blockchain network focused on data availability, allowing developers to deploy their own customizable blockchains with ease.',
      denom_units: [{
          denom: 'ibc/BF3B4F53F3694B66E13C23107C84B6485BD2B96296BB7EC680EA77BBA75B4801',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      base: 'ibc/BF3B4F53F3694B66E13C23107C84B6485BD2B96296BB7EC680EA77BBA75B4801',
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
            channel_id: 'channel-4',
            base_denom: 'utia',
            chain_name: 'celestia'
          },
          chain: {
            channel_id: 'channel-162'
          }
        }]
    },
    {
      description: 'Native Token of Comdex Protocol',
      denom_units: [{
          denom: 'ibc/EB66980014602E6BD50A1CB9FFB8FA694DC3EC10A48D2C1C649D732954F88D4A',
          exponent: 0,
          aliases: ['ucmdx']
        }, {
          denom: 'cmdx',
          exponent: 6
        }],
      base: 'ibc/EB66980014602E6BD50A1CB9FFB8FA694DC3EC10A48D2C1C649D732954F88D4A',
      name: 'Comdex',
      display: 'cmdx',
      symbol: 'CMDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
      },
      coingecko_id: 'comdex',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-45',
            base_denom: 'ucmdx',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }]
    },
    {
      description: 'Governance Token of Harbor protocol on Comdex network',
      denom_units: [{
          denom: 'ibc/91AC6268E78DF87CFB9CAB34BD162035D76E1F9E02D2D92EB80915B5D08ECA87',
          exponent: 0,
          aliases: ['uharbor']
        }, {
          denom: 'harbor',
          exponent: 6
        }],
      base: 'ibc/91AC6268E78DF87CFB9CAB34BD162035D76E1F9E02D2D92EB80915B5D08ECA87',
      name: 'Harbor',
      display: 'harbor',
      symbol: 'HARBOR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-45',
            base_denom: 'uharbor',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }]
    },
    {
      description: 'Stable Token of Harbor protocol on Comdex network',
      denom_units: [{
          denom: 'ibc/7E15C9B719E27B9EC2C6049D3A7DC4E4BC3DCE82FC97653ED6163419C3F9EBF8',
          exponent: 0,
          aliases: ['ucmst']
        }, {
          denom: 'cmst',
          exponent: 6
        }],
      base: 'ibc/7E15C9B719E27B9EC2C6049D3A7DC4E4BC3DCE82FC97653ED6163419C3F9EBF8',
      name: 'CMST',
      display: 'cmst',
      symbol: 'CMST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
      },
      coingecko_id: 'composite',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-45',
            base_denom: 'ucmst',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }]
    },
    {
      description: 'ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.',
      denom_units: [{
          denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
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
            channel_id: 'channel-391',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'The native token of Crescent',
      denom_units: [{
          denom: 'ibc/892B184DE49984FEA412E6BB8B9F2FA35E707E29DD5E9ADB515EB99B11E40837',
          exponent: 0,
          aliases: ['ucre']
        }, {
          denom: 'cre',
          exponent: 6
        }],
      base: 'ibc/892B184DE49984FEA412E6BB8B9F2FA35E707E29DD5E9ADB515EB99B11E40837',
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
            channel_id: 'channel-29',
            base_denom: 'ucre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-51'
          }
        }]
    },
    {
      description: 'The bonded token of Crescent',
      denom_units: [{
          denom: 'ibc/7811A811C1EBD001CA3DB637DDD7F9254E6FC0D5EFCC26163C94FBA299F77D31',
          exponent: 0,
          aliases: ['ubcre']
        }, {
          denom: 'bcre',
          exponent: 6
        }],
      base: 'ibc/7811A811C1EBD001CA3DB637DDD7F9254E6FC0D5EFCC26163C94FBA299F77D31',
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
            channel_id: 'channel-29',
            base_denom: 'ubcre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-51'
          }
        }]
    },
    {
      description: 'DYDX is a decentralized trading platform focused on derivatives and perpetual contracts, offering a secure and efficient trading experience without intermediaries.',
      denom_units: [{
          denom: 'ibc/561C70B20188A047BFDE6F9946BDDC5D8AC172B9BE04FF868DFABF819E5A9CCE',
          exponent: 0,
          aliases: ['adydx']
        }, {
          denom: 'dydx',
          exponent: 18
        }],
      base: 'ibc/561C70B20188A047BFDE6F9946BDDC5D8AC172B9BE04FF868DFABF819E5A9CCE',
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
            channel_id: 'channel-1',
            base_denom: 'adydx',
            chain_name: 'dydx'
          },
          chain: {
            channel_id: 'channel-160'
          }
        }]
    },
    {
      description: 'The native governance and staking token of the Dymension Hub',
      denom_units: [{
          denom: 'ibc/E1C22332C083574F3418481359733BA8887D171E76C80AD9237422AEABB66018',
          exponent: 0,
          aliases: ['adym']
        }, {
          denom: 'dym',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/E1C22332C083574F3418481359733BA8887D171E76C80AD9237422AEABB66018',
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
            channel_id: 'channel-0',
            base_denom: 'adym',
            chain_name: 'dymension'
          },
          chain: {
            channel_id: 'channel-197'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Evmos Hub',
      denom_units: [{
          denom: 'ibc/4B322204B4F59D770680FE4D7A565DDC3F37BFF035474B717476C66A4F83DD72',
          exponent: 0,
          aliases: ['aevmos']
        }, {
          denom: 'evmos',
          exponent: 18
        }],
      base: 'ibc/4B322204B4F59D770680FE4D7A565DDC3F37BFF035474B717476C66A4F83DD72',
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
            channel_id: 'channel-25',
            base_denom: 'aevmos',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'The token of Neokingdom DAO.',
      denom_units: [{
          denom: 'ibc/BAF1536E0B82CCC983271430A2F709D486F4758EA80D4FC3EFF4638DDBDD7647',
          exponent: 0,
          aliases: ['erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9']
        }, {
          denom: 'neok',
          exponent: 18
        }],
      base: 'ibc/BAF1536E0B82CCC983271430A2F709D486F4758EA80D4FC3EFF4638DDBDD7647',
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
            channel_id: 'channel-25',
            base_denom: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'The legacy token of Teledisko DAO.',
      denom_units: [{
          denom: 'ibc/A4EC4992CC6942ED4E799E40679FF436FDB20A3C89946A1948A29D51F233488E',
          exponent: 0,
          aliases: ['erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280']
        }, {
          denom: 'berlin-legacy',
          exponent: 18
        }],
      base: 'ibc/A4EC4992CC6942ED4E799E40679FF436FDB20A3C89946A1948A29D51F233488E',
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
            channel_id: 'channel-25',
            base_denom: 'erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'The token of Crowdpunk DAO',
      denom_units: [{
          denom: 'ibc/4BBAAF3202C9D75042AA62AA4189CA4FA68D81B6DCFAB94501FA6CF379DE706D',
          exponent: 0,
          aliases: ['erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F']
        }, {
          denom: 'crowdp',
          exponent: 18
        }],
      base: 'ibc/4BBAAF3202C9D75042AA62AA4189CA4FA68D81B6DCFAB94501FA6CF379DE706D',
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
            channel_id: 'channel-25',
            base_denom: 'erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Haqq Network',
      denom_units: [{
          denom: 'ibc/255BEB856BFBC1B75A3C349CF769E9FADEB595804F4FC688A72D651576B9180E',
          exponent: 0,
          aliases: ['aISLM']
        }, {
          denom: 'ISLM',
          exponent: 18
        }],
      base: 'ibc/255BEB856BFBC1B75A3C349CF769E9FADEB595804F4FC688A72D651576B9180E',
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
            channel_id: 'channel-7',
            base_denom: 'aISLM',
            chain_name: 'haqq'
          },
          chain: {
            channel_id: 'channel-240'
          }
        }]
    },
    {
      description: 'Deenar gold-backed stablecoin',
      denom_units: [{
          denom: 'ibc/3973C5943C3BA56C227AAF71D072DB915FA53FBDD2D5CA648E44D3FD234922BA',
          exponent: 0,
          aliases: ['erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE']
        }, {
          denom: 'DEEN',
          exponent: 6
        }],
      base: 'ibc/3973C5943C3BA56C227AAF71D072DB915FA53FBDD2D5CA648E44D3FD234922BA',
      name: 'Deenar',
      display: 'DEEN',
      address: '0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE',
      symbol: 'DEEN',
      type_asset: 'erc20',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE',
            chain_name: 'haqq'
          },
          chain: {
            channel_id: 'channel-240'
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
      description: 'Injective is a decentralized exchange protocol that enables fast, secure, and fully decentralized trading of derivatives, futures, and spot markets.',
      denom_units: [{
          denom: 'ibc/A7454562FF29FE068F42F9DE4805ABEF54F599D1720B345D6518D9B5C64EA6D2',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/A7454562FF29FE068F42F9DE4805ABEF54F599D1720B345D6518D9B5C64EA6D2',
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
            channel_id: 'channel-89',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'ibc/6CAD45BB3451E22333CB4F007039453CECFD20E029D7D04E36A8B5DA8D774D6F',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'ibc/6CAD45BB3451E22333CB4F007039453CECFD20E029D7D04E36A8B5DA8D774D6F',
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
            channel_id: 'channel-89',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'ibc/23B904F99D373071AAFD204D0C6637FE19591CF7296835FE604D389A6B2B3599',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'ibc/23B904F99D373071AAFD204D0C6637FE19591CF7296835FE604D389A6B2B3599',
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
            channel_id: 'channel-89',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'A receipt token for lent INJ issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/65526CF8D213EAAF861AB2833732DA80F00D2EFFE397096B572BF6ADBB2ACD06',
          exponent: 0,
          aliases: ['inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f']
        }, {
          denom: 'nINJ',
          exponent: 18
        }],
      base: 'ibc/65526CF8D213EAAF861AB2833732DA80F00D2EFFE397096B572BF6ADBB2ACD06',
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
            channel_id: 'channel-89',
            base_denom: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'A receipt token for lent ATOM issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/E4A64E69000189624D4B0C40B398275B988695CFD37B787B8B45B96216E01DBF',
          exponent: 0,
          aliases: ['inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780']
        }, {
          denom: 'nATOM',
          exponent: 6
        }],
      base: 'ibc/E4A64E69000189624D4B0C40B398275B988695CFD37B787B8B45B96216E01DBF',
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
            channel_id: 'channel-89',
            base_denom: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'A receipt token for lent WETH issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/F0F2987EECAA2EC79240AC860263AC94DAA375809B7002C82D1A23A22AD6FC85',
          exponent: 0,
          aliases: ['inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt']
        }, {
          denom: 'nWETH',
          exponent: 18
        }],
      base: 'ibc/F0F2987EECAA2EC79240AC860263AC94DAA375809B7002C82D1A23A22AD6FC85',
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
            channel_id: 'channel-89',
            base_denom: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'A receipt token for lent USDT issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/77F61677C5605837984D8B4D07662CBBF0106B0FCCF08228A000FFA715DB6EE5',
          exponent: 0,
          aliases: ['inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s']
        }, {
          denom: 'nUSDT',
          exponent: 6
        }],
      base: 'ibc/77F61677C5605837984D8B4D07662CBBF0106B0FCCF08228A000FFA715DB6EE5',
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
            channel_id: 'channel-89',
            base_denom: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'A receipt token for lent TIA issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/C2DD09C1C9B4DFEDC08C0088E8F62A01C1BFC731C7A90953B040817DE58FB5E3',
          exponent: 0,
          aliases: ['inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv']
        }, {
          denom: 'nTIA',
          exponent: 6
        }],
      base: 'ibc/C2DD09C1C9B4DFEDC08C0088E8F62A01C1BFC731C7A90953B040817DE58FB5E3',
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
            channel_id: 'channel-89',
            base_denom: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/DA356E369C3E5CF6A9F1DCD99CE8ED55FBD595E676A5CF033CE784C060492D5A',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ibc/DA356E369C3E5CF6A9F1DCD99CE8ED55FBD595E676A5CF033CE784C060492D5A',
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
            channel_id: 'channel-139',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-24'
          }
        }]
    },
    {
      description: 'The native token of kopi',
      denom_units: [{
          denom: 'ibc/5813FA53CD99E89E2339252C34E5093C9D1D118EA4DFA04C269C1D0E516D3A86',
          exponent: 0,
          aliases: ['ukopi']
        }, {
          denom: 'XKP',
          exponent: 6
        }],
      base: 'ibc/5813FA53CD99E89E2339252C34E5093C9D1D118EA4DFA04C269C1D0E516D3A86',
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
            channel_id: 'channel-18',
            base_denom: 'ukopi',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-322'
          }
        }]
    },
    {
      description: 'A MM deposit receipt of the Stablecoin native to the Kopi blockchain',
      denom_units: [{
          denom: 'ibc/3DAC6AAC5A8477737601C7213982253EDB15DBD2D9CCA7D53A5065174584F61A',
          exponent: 0,
          aliases: ['uckusd']
        }, {
          denom: 'ckUSD',
          exponent: 6
        }],
      base: 'ibc/3DAC6AAC5A8477737601C7213982253EDB15DBD2D9CCA7D53A5065174584F61A',
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
            channel_id: 'channel-18',
            base_denom: 'uckusd',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-322'
          }
        }]
    },
    {
      description: 'A MM deposit receipt of the Stablecoin USDC from noble Chain',
      denom_units: [{
          denom: 'ibc/9C42368562ECFA257088167E5F573485E6B17846082FE35B5DF315CD5DD9A76B',
          exponent: 0,
          aliases: ['ucusdc']
        }, {
          denom: 'cUSDC',
          exponent: 6
        }],
      base: 'ibc/9C42368562ECFA257088167E5F573485E6B17846082FE35B5DF315CD5DD9A76B',
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
            channel_id: 'channel-18',
            base_denom: 'ucusdc',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-322'
          }
        }]
    },
    {
      description: 'A MM deposit receipt of the Stablecoin USDT from Injective Chain',
      denom_units: [{
          denom: 'ibc/FBC94481F3D00C623E84991F953E73BB96BC6908A4B652F39E8B4C6B5052031C',
          exponent: 0,
          aliases: ['ucusdtinj']
        }, {
          denom: 'cUSDT.inj',
          exponent: 6
        }],
      base: 'ibc/FBC94481F3D00C623E84991F953E73BB96BC6908A4B652F39E8B4C6B5052031C',
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
            channel_id: 'channel-18',
            base_denom: 'ucusdtinj',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-322'
          }
        }]
    },
    {
      description: 'arbitrage receipt token of cUSDT',
      denom_units: [{
          denom: 'ibc/0BD1E07BA990DF055A21516F45F75EFCB382A41CAADFC108245382F1DF4EA6C0',
          exponent: 0,
          aliases: ['uasusdtinj']
        }, {
          denom: 'asusdtinj',
          exponent: 6
        }],
      base: 'ibc/0BD1E07BA990DF055A21516F45F75EFCB382A41CAADFC108245382F1DF4EA6C0',
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
            channel_id: 'channel-18',
            base_denom: 'uasusdtinj',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-322'
          }
        }]
    },
    {
      description: 'arbitrage receipt token of cUSDC',
      denom_units: [{
          denom: 'ibc/81DC330BC51858FC9851CC157439F5136092F80FDEAA39AAA1AB1014C37C298F',
          exponent: 0,
          aliases: ['uasusdc']
        }, {
          denom: 'asUSDC',
          exponent: 6
        }],
      base: 'ibc/81DC330BC51858FC9851CC157439F5136092F80FDEAA39AAA1AB1014C37C298F',
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
            channel_id: 'channel-18',
            base_denom: 'uasusdc',
            chain_name: 'kopi'
          },
          chain: {
            channel_id: 'channel-322'
          }
        }]
    },
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      denom_units: [{
          denom: 'ibc/EF4222BF77971A75F4E655E2AD2AFDDC520CE428EF938A1C91157E9DFBFF32A3',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/EF4222BF77971A75F4E655E2AD2AFDDC520CE428EF938A1C91157E9DFBFF32A3',
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
            channel_id: 'channel-32',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-8'
          }
        }]
    },
    {
      description: 'The native token of Namada.',
      denom_units: [{
          denom: 'ibc/471489A5C2B7206341FFB2F40DB011116F0E1E7D305DF7E10E587676F10C515E',
          exponent: 0,
          aliases: ['unam']
        }, {
          denom: 'nam',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/471489A5C2B7206341FFB2F40DB011116F0E1E7D305DF7E10E587676F10C515E',
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
            channel_id: 'channel-0',
            base_denom: 'unam',
            chain_name: 'namada'
          },
          chain: {
            channel_id: 'channel-308'
          }
        }]
    },
    {
      description: 'Neutron is a smart contract blockchain within the Cosmos ecosystem, leveraging the Cosmos Hub\'s security to provide cross-chain DeFi applications.',
      denom_units: [{
          denom: 'ibc/8777F3C6E49CA66F9779ABA1749C12E032C2AC437F151F6DC74AB8C1A240DCFD',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/8777F3C6E49CA66F9779ABA1749C12E032C2AC437F151F6DC74AB8C1A240DCFD',
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
            channel_id: 'channel-8',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-123'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/0291025A297B1DFF732780AC408F9EF9583E726A568453065862E3EA6868120F',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/0291025A297B1DFF732780AC408F9EF9583E726A568453065862E3EA6868120F',
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
            channel_id: 'channel-8',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-123'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/D131195B03C2D4ECDD72AD69373B9B2AACECDDE1D69D8297D60B513FC4C0E8ED',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/D131195B03C2D4ECDD72AD69373B9B2AACECDDE1D69D8297D60B513FC4C0E8ED',
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
            channel_id: 'channel-8',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-123'
          }
        }]
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/31E7A80EA551015C5C3AA73AF67B7B5BED0DF35968656F8B667FED8E22290E92',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/31E7A80EA551015C5C3AA73AF67B7B5BED0DF35968656F8B667FED8E22290E92',
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
            channel_id: 'channel-8',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-123'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/D24B4564BCD51D3D02D9987D92571EAC5915676A9BD6D9B0C1D0254CB8A5EA34',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/D24B4564BCD51D3D02D9987D92571EAC5915676A9BD6D9B0C1D0254CB8A5EA34',
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
            channel_id: 'channel-326',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/07F71BEE7FA84450268B4F6895417F12FBCD1792B57C98431F5210E42117B206',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/07F71BEE7FA84450268B4F6895417F12FBCD1792B57C98431F5210E42117B206',
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
            channel_id: 'channel-326',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'Persistence One is building a Bitcoin Cross-chain Swaps solution, enabling fast, zero-slippage secure swaps across Bitcoin Layer 2s.',
      denom_units: [{
          denom: 'ibc/33B47BAFB13393321709116BB1E0B968D655ABCB68EC8D254EAC957F740C6415',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      base: 'ibc/33B47BAFB13393321709116BB1E0B968D655ABCB68EC8D254EAC957F740C6415',
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
            channel_id: 'channel-67',
            base_denom: 'uxprt',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-53'
          }
        }]
    },
    {
      description: 'The native token of PRYZM',
      denom_units: [{
          denom: 'ibc/1E0EFAC20BCF1D7B409655DC2D44B24F17FFA92A2A55905567D2A50AED22FCA2',
          exponent: 0,
          aliases: ['upryzm']
        }, {
          denom: 'pryzm',
          exponent: 6
        }],
      base: 'ibc/1E0EFAC20BCF1D7B409655DC2D44B24F17FFA92A2A55905567D2A50AED22FCA2',
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
            channel_id: 'channel-23',
            base_denom: 'upryzm',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/FDC505A06D97468B8CC029BFDB78DC70E65C422859A011FEA642EAE93440C295',
          exponent: 0,
          aliases: ['p:uatom:30Sep2024']
        }, {
          denom: 'pATOM30Sep2024',
          exponent: 6
        }],
      base: 'ibc/FDC505A06D97468B8CC029BFDB78DC70E65C422859A011FEA642EAE93440C295',
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
            channel_id: 'channel-23',
            base_denom: 'p:uatom:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/55B4101CAE99F87511088D1F3A2F76F2395A8530D5CC4812274DD44E8476E057',
          exponent: 0,
          aliases: ['p:uatom:31Dec2024']
        }, {
          denom: 'pATOM31Dec2024',
          exponent: 6
        }],
      base: 'ibc/55B4101CAE99F87511088D1F3A2F76F2395A8530D5CC4812274DD44E8476E057',
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
            channel_id: 'channel-23',
            base_denom: 'p:uatom:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/2F042D64EFA7F4BB4AB581F922332507C2DCE01896FECEEC6F1F7356E1D55D9A',
          exponent: 0,
          aliases: ['p:uatom:31Mar2025']
        }, {
          denom: 'pATOM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/2F042D64EFA7F4BB4AB581F922332507C2DCE01896FECEEC6F1F7356E1D55D9A',
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
            channel_id: 'channel-23',
            base_denom: 'p:uatom:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/253EA3B5D7A1A5D514A4AE516DF4D44918C9B0DA338B6FEBD2BFA56470908A2F',
          exponent: 0,
          aliases: ['p:uatom:30Jun2025']
        }, {
          denom: 'pATOM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/253EA3B5D7A1A5D514A4AE516DF4D44918C9B0DA338B6FEBD2BFA56470908A2F',
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
            channel_id: 'channel-23',
            base_denom: 'p:uatom:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/AA156824072F48C5E6840E3F35B0A086A7D02312DB84EF79E252F90759D152A9',
          exponent: 0,
          aliases: ['p:uatom:30Sep2025']
        }, {
          denom: 'pATOM30Sep2025',
          exponent: 6
        }],
      base: 'ibc/AA156824072F48C5E6840E3F35B0A086A7D02312DB84EF79E252F90759D152A9',
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
            channel_id: 'channel-23',
            base_denom: 'p:uatom:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/6158EE7FCC761925E37FBF07C722714E32A4916D414CA1908BBCACA57DFC227E',
          exponent: 0,
          aliases: ['p:uatom:31Dec2025']
        }, {
          denom: 'pATOM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/6158EE7FCC761925E37FBF07C722714E32A4916D414CA1908BBCACA57DFC227E',
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
            channel_id: 'channel-23',
            base_denom: 'p:uatom:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/810AAF2E4A0B8A1FD39C17AD16415414885F86169476496AF9698A9CAAB4F5E6',
          exponent: 0,
          aliases: ['p:uatom:31Dec2026']
        }, {
          denom: 'pATOM31Dec2026',
          exponent: 6
        }],
      base: 'ibc/810AAF2E4A0B8A1FD39C17AD16415414885F86169476496AF9698A9CAAB4F5E6',
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
            channel_id: 'channel-23',
            base_denom: 'p:uatom:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/E3EF332B89028A4096DC0F3EC4AC0615557AAABC9C99FFA4898F9F2F01C603CB',
          exponent: 0,
          aliases: ['p:uosmo:30Sep2024']
        }, {
          denom: 'pOSMO30Sep2024',
          exponent: 6
        }],
      base: 'ibc/E3EF332B89028A4096DC0F3EC4AC0615557AAABC9C99FFA4898F9F2F01C603CB',
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
            channel_id: 'channel-23',
            base_denom: 'p:uosmo:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/50310E48B6968CF92830666B91EA7C89E885CD583B85819CFDAD1662AD1FB276',
          exponent: 0,
          aliases: ['p:uosmo:31Dec2024']
        }, {
          denom: 'pOSMO31Dec2024',
          exponent: 6
        }],
      base: 'ibc/50310E48B6968CF92830666B91EA7C89E885CD583B85819CFDAD1662AD1FB276',
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
            channel_id: 'channel-23',
            base_denom: 'p:uosmo:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/EFF462661AE1C257F08A7CE72C23AB79D1AF6A5EE0F7AA22AFC73E8709EBB340',
          exponent: 0,
          aliases: ['p:uosmo:31Mar2025']
        }, {
          denom: 'pOSMO31Mar2025',
          exponent: 6
        }],
      base: 'ibc/EFF462661AE1C257F08A7CE72C23AB79D1AF6A5EE0F7AA22AFC73E8709EBB340',
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
            channel_id: 'channel-23',
            base_denom: 'p:uosmo:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/01A6A42305BB3A518DCFEF21C0DE20FD51A7C3526BD83C2752772A187CC24BF6',
          exponent: 0,
          aliases: ['p:uosmo:30Jun2025']
        }, {
          denom: 'pOSMO30Jun2025',
          exponent: 6
        }],
      base: 'ibc/01A6A42305BB3A518DCFEF21C0DE20FD51A7C3526BD83C2752772A187CC24BF6',
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
            channel_id: 'channel-23',
            base_denom: 'p:uosmo:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/E735630523990C95DB77C8CE0B5574AF23DACD02C10CC330EF2B4A74DD7D6526',
          exponent: 0,
          aliases: ['p:uosmo:30Sep2025']
        }, {
          denom: 'pOSMO30Sep2025',
          exponent: 6
        }],
      base: 'ibc/E735630523990C95DB77C8CE0B5574AF23DACD02C10CC330EF2B4A74DD7D6526',
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
            channel_id: 'channel-23',
            base_denom: 'p:uosmo:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/4E031D2FFB8B4E7251A234E377E6CB48019DE207B606FFF0281BF96FF6188297',
          exponent: 0,
          aliases: ['p:uosmo:31Dec2025']
        }, {
          denom: 'pOSMO31Dec2025',
          exponent: 6
        }],
      base: 'ibc/4E031D2FFB8B4E7251A234E377E6CB48019DE207B606FFF0281BF96FF6188297',
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
            channel_id: 'channel-23',
            base_denom: 'p:uosmo:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/AB07D130ECC4DD781C9E96BAF6DB21155E38BE17927CF2269566B79FDCD44C7C',
          exponent: 0,
          aliases: ['p:uosmo:31Dec2026']
        }, {
          denom: 'pOSMO31Dec2026',
          exponent: 6
        }],
      base: 'ibc/AB07D130ECC4DD781C9E96BAF6DB21155E38BE17927CF2269566B79FDCD44C7C',
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
            channel_id: 'channel-23',
            base_denom: 'p:uosmo:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/7F6E1E08071BF0A4ED409DD15BF0B136C68B207EA19D9ADD3167DB682CEA4110',
          exponent: 0,
          aliases: ['p:inj:30Sep2024']
        }, {
          denom: 'pINJ30Sep2024',
          exponent: 18
        }],
      base: 'ibc/7F6E1E08071BF0A4ED409DD15BF0B136C68B207EA19D9ADD3167DB682CEA4110',
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
            channel_id: 'channel-23',
            base_denom: 'p:inj:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/7C1E9F339063A8CC4532242FCD6D051777CDDD4997BCD73430E0CD747784DCEE',
          exponent: 0,
          aliases: ['p:inj:31Dec2024']
        }, {
          denom: 'pINJ31Dec2024',
          exponent: 18
        }],
      base: 'ibc/7C1E9F339063A8CC4532242FCD6D051777CDDD4997BCD73430E0CD747784DCEE',
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
            channel_id: 'channel-23',
            base_denom: 'p:inj:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/066F65BE987FF88A682CBA23C73C231F1768CFFCBA783BE220553617B7A7627B',
          exponent: 0,
          aliases: ['p:inj:31Mar2025']
        }, {
          denom: 'pINJ31Mar2025',
          exponent: 18
        }],
      base: 'ibc/066F65BE987FF88A682CBA23C73C231F1768CFFCBA783BE220553617B7A7627B',
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
            channel_id: 'channel-23',
            base_denom: 'p:inj:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/28DD432E0477B2E6841466DABFB07345E415F7B6C7E194F13E79147344271FF2',
          exponent: 0,
          aliases: ['p:inj:30Jun2025']
        }, {
          denom: 'pINJ30Jun2025',
          exponent: 18
        }],
      base: 'ibc/28DD432E0477B2E6841466DABFB07345E415F7B6C7E194F13E79147344271FF2',
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
            channel_id: 'channel-23',
            base_denom: 'p:inj:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/EE16AC56ED514DEF9A63E2A9900B0C60055DCA63DF8EE554DD94EF7221B0BD0D',
          exponent: 0,
          aliases: ['p:inj:30Sep2025']
        }, {
          denom: 'pINJ30Sep2025',
          exponent: 18
        }],
      base: 'ibc/EE16AC56ED514DEF9A63E2A9900B0C60055DCA63DF8EE554DD94EF7221B0BD0D',
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
            channel_id: 'channel-23',
            base_denom: 'p:inj:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/657B68E59B32E981D5E00A555042474060BD7E5A9E273BE01D08EB12C30FB581',
          exponent: 0,
          aliases: ['p:inj:31Dec2025']
        }, {
          denom: 'pINJ31Dec2025',
          exponent: 18
        }],
      base: 'ibc/657B68E59B32E981D5E00A555042474060BD7E5A9E273BE01D08EB12C30FB581',
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
            channel_id: 'channel-23',
            base_denom: 'p:inj:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/09D33AF02EA43147AC808E83FF61C2AE22D3E51C24A26D7B4A1F9607EBFE13E8',
          exponent: 0,
          aliases: ['p:inj:31Dec2026']
        }, {
          denom: 'pINJ31Dec2026',
          exponent: 18
        }],
      base: 'ibc/09D33AF02EA43147AC808E83FF61C2AE22D3E51C24A26D7B4A1F9607EBFE13E8',
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
            channel_id: 'channel-23',
            base_denom: 'p:inj:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/3BB480F5CB383B417D0CC736424A72AA5E2FD1659150623ECF6CCA2B6CCDFE8E',
          exponent: 0,
          aliases: ['p:uluna:30Sep2024']
        }, {
          denom: 'pLUNA30Sep2024',
          exponent: 6
        }],
      base: 'ibc/3BB480F5CB383B417D0CC736424A72AA5E2FD1659150623ECF6CCA2B6CCDFE8E',
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
            channel_id: 'channel-23',
            base_denom: 'p:uluna:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/16FE78C4FFAD147A4B992336FBD6337E30CCD504BF980C8110FB7623785F10B5',
          exponent: 0,
          aliases: ['p:uluna:31Dec2024']
        }, {
          denom: 'pLUNA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/16FE78C4FFAD147A4B992336FBD6337E30CCD504BF980C8110FB7623785F10B5',
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
            channel_id: 'channel-23',
            base_denom: 'p:uluna:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/14D736AD0862CBF59318775DB6FAADBF3A775D6EA68D8EACC70BD03A548DA822',
          exponent: 0,
          aliases: ['p:uluna:31Mar2025']
        }, {
          denom: 'pLUNA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/14D736AD0862CBF59318775DB6FAADBF3A775D6EA68D8EACC70BD03A548DA822',
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
            channel_id: 'channel-23',
            base_denom: 'p:uluna:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/9246B2C3C20ABD522B31C8C7C72E0A865ED0367B7AE7DE82E9F0D495A30BD005',
          exponent: 0,
          aliases: ['p:uluna:30Jun2025']
        }, {
          denom: 'pLUNA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/9246B2C3C20ABD522B31C8C7C72E0A865ED0367B7AE7DE82E9F0D495A30BD005',
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
            channel_id: 'channel-23',
            base_denom: 'p:uluna:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/F4FA8E70672E1AAD4CD4D7CCE274ACA711AED9D1AB51960E7D614E28AFC06E5A',
          exponent: 0,
          aliases: ['p:uluna:30Sep2025']
        }, {
          denom: 'pLUNA30Sep2025',
          exponent: 6
        }],
      base: 'ibc/F4FA8E70672E1AAD4CD4D7CCE274ACA711AED9D1AB51960E7D614E28AFC06E5A',
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
            channel_id: 'channel-23',
            base_denom: 'p:uluna:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/E5E39C5A2C4B4195B54E2174C2C105BE296DAC988AF7F1B9F084F8179B32C9FD',
          exponent: 0,
          aliases: ['p:uluna:31Dec2025']
        }, {
          denom: 'pLUNA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/E5E39C5A2C4B4195B54E2174C2C105BE296DAC988AF7F1B9F084F8179B32C9FD',
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
            channel_id: 'channel-23',
            base_denom: 'p:uluna:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/A7489C24FB6625AF5B2AF7A0B9D505AD32DA93C1812188BF00D1EC4B52D614A2',
          exponent: 0,
          aliases: ['p:uluna:31Dec2026']
        }, {
          denom: 'pLUNA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/A7489C24FB6625AF5B2AF7A0B9D505AD32DA93C1812188BF00D1EC4B52D614A2',
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
            channel_id: 'channel-23',
            base_denom: 'p:uluna:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/5603267A3558B92C84054629757339521426C66C3B7E6E881684902EF1D58862',
          exponent: 0,
          aliases: ['p:uauuu:30Sep2024']
        }, {
          denom: 'pAUUU30Sep2024',
          exponent: 6
        }],
      base: 'ibc/5603267A3558B92C84054629757339521426C66C3B7E6E881684902EF1D58862',
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
            channel_id: 'channel-23',
            base_denom: 'p:uauuu:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/B4583BB652D057B0853006E556CCCA1CE3FF80DD18D2FD92A25F61D533FD9740',
          exponent: 0,
          aliases: ['p:uauuu:31Dec2024']
        }, {
          denom: 'pAUUU31Dec2024',
          exponent: 6
        }],
      base: 'ibc/B4583BB652D057B0853006E556CCCA1CE3FF80DD18D2FD92A25F61D533FD9740',
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
            channel_id: 'channel-23',
            base_denom: 'p:uauuu:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/968F19C3B6F61E2CCAE70EC1E0BB9A9F6E83D43045CF59EA48D74CBF766D02D3',
          exponent: 0,
          aliases: ['p:uauuu:30Jun2025']
        }, {
          denom: 'pAUUU30Jun2025',
          exponent: 6
        }],
      base: 'ibc/968F19C3B6F61E2CCAE70EC1E0BB9A9F6E83D43045CF59EA48D74CBF766D02D3',
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
            channel_id: 'channel-23',
            base_denom: 'p:uauuu:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/03E2989EADA6F6CB28F04AF448B29926F93660DC5A7CB8BC90D7994720AAFA3F',
          exponent: 0,
          aliases: ['p:uauuu:31Dec2025']
        }, {
          denom: 'pAUUU31Dec2025',
          exponent: 6
        }],
      base: 'ibc/03E2989EADA6F6CB28F04AF448B29926F93660DC5A7CB8BC90D7994720AAFA3F',
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
            channel_id: 'channel-23',
            base_denom: 'p:uauuu:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/3B05B8787CE3ED430585A149237A52E1408F66C637996EDD095F4FB524898A21',
          exponent: 0,
          aliases: ['p:uauuu:31Dec2026']
        }, {
          denom: 'pAUUU31Dec2026',
          exponent: 6
        }],
      base: 'ibc/3B05B8787CE3ED430585A149237A52E1408F66C637996EDD095F4FB524898A21',
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
            channel_id: 'channel-23',
            base_denom: 'p:uauuu:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/8EA0D87D9AD84A182AD2187228D1FE7686917E97BEB81C416EF6283E5A08AD16',
          exponent: 0,
          aliases: ['p:stutia:30Sep2024']
        }, {
          denom: 'pstTIA30Sep2024',
          exponent: 6
        }],
      base: 'ibc/8EA0D87D9AD84A182AD2187228D1FE7686917E97BEB81C416EF6283E5A08AD16',
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
            channel_id: 'channel-23',
            base_denom: 'p:stutia:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/96834D0E2859D571EFB82B21547A0E00F306CBCEFCBFEC1D3B183FBCBA47319E',
          exponent: 0,
          aliases: ['p:stutia:31Dec2024']
        }, {
          denom: 'pstTIA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/96834D0E2859D571EFB82B21547A0E00F306CBCEFCBFEC1D3B183FBCBA47319E',
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
            channel_id: 'channel-23',
            base_denom: 'p:stutia:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/421555677E59D606EC931E1576BB99E04A70EC028A5588B9224820C76319CF32',
          exponent: 0,
          aliases: ['p:stutia:31Mar2025']
        }, {
          denom: 'pstTIA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/421555677E59D606EC931E1576BB99E04A70EC028A5588B9224820C76319CF32',
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
            channel_id: 'channel-23',
            base_denom: 'p:stutia:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/53DE0B48EB8F4286CEDC6E8ADB6002478C4E2A6A63F3114E8646F782F52E96E0',
          exponent: 0,
          aliases: ['p:stutia:30Jun2025']
        }, {
          denom: 'pstTIA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/53DE0B48EB8F4286CEDC6E8ADB6002478C4E2A6A63F3114E8646F782F52E96E0',
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
            channel_id: 'channel-23',
            base_denom: 'p:stutia:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/BBE35E47418AA3A1608C3BC7D53E7AA78E1AB0AD823E1D16BFFAF245BDA2483F',
          exponent: 0,
          aliases: ['p:stutia:31Dec2025']
        }, {
          denom: 'pstTIA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/BBE35E47418AA3A1608C3BC7D53E7AA78E1AB0AD823E1D16BFFAF245BDA2483F',
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
            channel_id: 'channel-23',
            base_denom: 'p:stutia:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/2840098D5785B2EBE0A1946E991DCDFB5B2F2D1E3DA728D48D0F85CD5828AD87',
          exponent: 0,
          aliases: ['p:stutia:31Dec2026']
        }, {
          denom: 'pstTIA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/2840098D5785B2EBE0A1946E991DCDFB5B2F2D1E3DA728D48D0F85CD5828AD87',
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
            channel_id: 'channel-23',
            base_denom: 'p:stutia:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/28F36AB3DF33A62BEA4369A0AA730E56798D96348F16DD80FB3D2ED32701500A',
          exponent: 0,
          aliases: ['p:stadydx:30Sep2024']
        }, {
          denom: 'pstDYDX30Sep2024',
          exponent: 18
        }],
      base: 'ibc/28F36AB3DF33A62BEA4369A0AA730E56798D96348F16DD80FB3D2ED32701500A',
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
            channel_id: 'channel-23',
            base_denom: 'p:stadydx:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/7DDC1927108B96790173F1E060BE389DBBFF03DE44D5CCCD035459BABD4E05EE',
          exponent: 0,
          aliases: ['p:stadydx:31Dec2024']
        }, {
          denom: 'pstDYDX31Dec2024',
          exponent: 18
        }],
      base: 'ibc/7DDC1927108B96790173F1E060BE389DBBFF03DE44D5CCCD035459BABD4E05EE',
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
            channel_id: 'channel-23',
            base_denom: 'p:stadydx:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/3B719E7E5298395A72AF68FCF5164D25DA42A0F78658BA446E79C3F3058BFA0A',
          exponent: 0,
          aliases: ['p:stadydx:31Mar2025']
        }, {
          denom: 'pstDYDX31Mar2025',
          exponent: 18
        }],
      base: 'ibc/3B719E7E5298395A72AF68FCF5164D25DA42A0F78658BA446E79C3F3058BFA0A',
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
            channel_id: 'channel-23',
            base_denom: 'p:stadydx:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/1D6E3E43B08479B785BFDD00448613223064977507AD2B5131C7194DDB2E211C',
          exponent: 0,
          aliases: ['p:stadydx:30Jun2025']
        }, {
          denom: 'pstDYDX30Jun2025',
          exponent: 18
        }],
      base: 'ibc/1D6E3E43B08479B785BFDD00448613223064977507AD2B5131C7194DDB2E211C',
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
            channel_id: 'channel-23',
            base_denom: 'p:stadydx:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/FA1313F1ED08F5C2DC65528FC3F792CA0ACC0062A22FCEE12E068086B7004292',
          exponent: 0,
          aliases: ['p:stadydx:31Dec2025']
        }, {
          denom: 'pstDYDX31Dec2025',
          exponent: 18
        }],
      base: 'ibc/FA1313F1ED08F5C2DC65528FC3F792CA0ACC0062A22FCEE12E068086B7004292',
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
            channel_id: 'channel-23',
            base_denom: 'p:stadydx:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/83E39E1F642E3D001898F78C8C68862316DC896004E875E2E106D2C80091FBDF',
          exponent: 0,
          aliases: ['p:stadydx:31Dec2026']
        }, {
          denom: 'pstDYDX31Dec2026',
          exponent: 18
        }],
      base: 'ibc/83E39E1F642E3D001898F78C8C68862316DC896004E875E2E106D2C80091FBDF',
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
            channel_id: 'channel-23',
            base_denom: 'p:stadydx:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/1E7C8E1E24029105A717D6AD40D8A09E5492D710393898442C3CECEF215DBCD1',
          exponent: 0,
          aliases: ['p:udatom:31Dec2024']
        }, {
          denom: 'pdATOM31Dec2024',
          exponent: 6
        }],
      base: 'ibc/1E7C8E1E24029105A717D6AD40D8A09E5492D710393898442C3CECEF215DBCD1',
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
            channel_id: 'channel-23',
            base_denom: 'p:udatom:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/FFEA306531922A10F3D7A986F7E9F7E90729ADDBC8A47FE60602985C94D8C2A6',
          exponent: 0,
          aliases: ['p:udatom:31Mar2025']
        }, {
          denom: 'pdATOM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/FFEA306531922A10F3D7A986F7E9F7E90729ADDBC8A47FE60602985C94D8C2A6',
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
            channel_id: 'channel-23',
            base_denom: 'p:udatom:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/D2AD5F7D1E91A8B1FABD1F0F247EB76D8AD7FB43B208ED94D24C024175E88B18',
          exponent: 0,
          aliases: ['p:udatom:30Jun2025']
        }, {
          denom: 'pdATOM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/D2AD5F7D1E91A8B1FABD1F0F247EB76D8AD7FB43B208ED94D24C024175E88B18',
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
            channel_id: 'channel-23',
            base_denom: 'p:udatom:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/118EBB600B3034B5E20F377A789154955ED52AB8274F59C8D392744F16E763AF',
          exponent: 0,
          aliases: ['p:udatom:31Dec2025']
        }, {
          denom: 'pdATOM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/118EBB600B3034B5E20F377A789154955ED52AB8274F59C8D392744F16E763AF',
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
            channel_id: 'channel-23',
            base_denom: 'p:udatom:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/AE129F0BCE94A9E37707436B59D4262E2099121F9584742255BFBBCDE63FEA53',
          exponent: 0,
          aliases: ['p:udatom:31Dec2026']
        }, {
          denom: 'pdATOM31Dec2026',
          exponent: 6
        }],
      base: 'ibc/AE129F0BCE94A9E37707436B59D4262E2099121F9584742255BFBBCDE63FEA53',
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
            channel_id: 'channel-23',
            base_denom: 'p:udatom:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/C7A36ED16833B185422AA7F9C5088D2244D3D272FCF643DCB22A533A381F7539',
          exponent: 0,
          aliases: ['p:utia:31Dec2024']
        }, {
          denom: 'pTIA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/C7A36ED16833B185422AA7F9C5088D2244D3D272FCF643DCB22A533A381F7539',
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
            channel_id: 'channel-23',
            base_denom: 'p:utia:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/F82942E32BCF3C3DD8ADE4A65330FE790D6FCC8EE95F1A6B340CC576B38EBAE2',
          exponent: 0,
          aliases: ['p:utia:31Mar2025']
        }, {
          denom: 'pTIA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/F82942E32BCF3C3DD8ADE4A65330FE790D6FCC8EE95F1A6B340CC576B38EBAE2',
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
            channel_id: 'channel-23',
            base_denom: 'p:utia:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/895ECA6E18E37E7A41AB34312D80DFE0179BFB77950E826278517F1ED85C355B',
          exponent: 0,
          aliases: ['p:utia:30Jun2025']
        }, {
          denom: 'pTIA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/895ECA6E18E37E7A41AB34312D80DFE0179BFB77950E826278517F1ED85C355B',
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
            channel_id: 'channel-23',
            base_denom: 'p:utia:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/BDC5F288181F8F15277079225F38BA75895F4FE7B7A8B6E930DCB3915D0731A4',
          exponent: 0,
          aliases: ['p:utia:30Sep2025']
        }, {
          denom: 'pTIA30Sep2025',
          exponent: 6
        }],
      base: 'ibc/BDC5F288181F8F15277079225F38BA75895F4FE7B7A8B6E930DCB3915D0731A4',
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
            channel_id: 'channel-23',
            base_denom: 'p:utia:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/63643B075255500EB8D5783C7D94B773B1CEE7B469A53769765B4E6E7AEA960E',
          exponent: 0,
          aliases: ['p:utia:31Dec2025']
        }, {
          denom: 'pTIA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/63643B075255500EB8D5783C7D94B773B1CEE7B469A53769765B4E6E7AEA960E',
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
            channel_id: 'channel-23',
            base_denom: 'p:utia:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/CB4DD6A20F08AD539BF5D15948F409710533CC45703C9F90D91134DE9E71DADE',
          exponent: 0,
          aliases: ['p:utia:31Dec2026']
        }, {
          denom: 'pTIA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/CB4DD6A20F08AD539BF5D15948F409710533CC45703C9F90D91134DE9E71DADE',
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
            channel_id: 'channel-23',
            base_denom: 'p:utia:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/ADFCE3A83A0A7C9D2C4E0133067B1375272F4A77ED2E88B0B41867F017D9EC77',
          exponent: 0,
          aliases: ['p:ausdy:31Mar2025']
        }, {
          denom: 'pUSDY31Mar2025',
          exponent: 18
        }],
      base: 'ibc/ADFCE3A83A0A7C9D2C4E0133067B1375272F4A77ED2E88B0B41867F017D9EC77',
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
            channel_id: 'channel-23',
            base_denom: 'p:ausdy:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/E22062934100F447CF960408520C57A271B5367EA6A132731FA90259530BCDDF',
          exponent: 0,
          aliases: ['p:ausdy:30Jun2025']
        }, {
          denom: 'pUSDY30Jun2025',
          exponent: 18
        }],
      base: 'ibc/E22062934100F447CF960408520C57A271B5367EA6A132731FA90259530BCDDF',
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
            channel_id: 'channel-23',
            base_denom: 'p:ausdy:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/1D1E49A0D3DE01EB62C66A43724EA37785B81392FB998004E9BD008E59CD154F',
          exponent: 0,
          aliases: ['p:ausdy:30Sep2025']
        }, {
          denom: 'pUSDY30Sep2025',
          exponent: 18
        }],
      base: 'ibc/1D1E49A0D3DE01EB62C66A43724EA37785B81392FB998004E9BD008E59CD154F',
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
            channel_id: 'channel-23',
            base_denom: 'p:ausdy:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/1437ECEBA179BFB8CDDA7BAA946C3FAD2130E0F65210D4F780C1D91183757937',
          exponent: 0,
          aliases: ['p:ausdy:31Dec2025']
        }, {
          denom: 'pUSDY31Dec2025',
          exponent: 18
        }],
      base: 'ibc/1437ECEBA179BFB8CDDA7BAA946C3FAD2130E0F65210D4F780C1D91183757937',
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
            channel_id: 'channel-23',
            base_denom: 'p:ausdy:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/9AE212E39181C27FEE97511034214E9D181430D2472E074800560F15E1BCE1D5',
          exponent: 0,
          aliases: ['p:ausdy:31Mar2026']
        }, {
          denom: 'pUSDY31Mar2026',
          exponent: 18
        }],
      base: 'ibc/9AE212E39181C27FEE97511034214E9D181430D2472E074800560F15E1BCE1D5',
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
            channel_id: 'channel-23',
            base_denom: 'p:ausdy:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for USDY with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/DF24BBE1FA83ACA94F2B5EAF930BF217B4000D7536766D9BED34F6564571211F',
          exponent: 0,
          aliases: ['p:ausdy:30Jun2026']
        }, {
          denom: 'pUSDY30Jun2026',
          exponent: 18
        }],
      base: 'ibc/DF24BBE1FA83ACA94F2B5EAF930BF217B4000D7536766D9BED34F6564571211F',
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
            channel_id: 'channel-23',
            base_denom: 'p:ausdy:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/708A9066DC938C3832693BD5EE975484DA7A1F31E43B373D3B56D5439B56B004',
          exponent: 0,
          aliases: ['p:upryzm:31Mar2025']
        }, {
          denom: 'pPRYZM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/708A9066DC938C3832693BD5EE975484DA7A1F31E43B373D3B56D5439B56B004',
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
            channel_id: 'channel-23',
            base_denom: 'p:upryzm:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/CC90CE4431B59A8B28451E0BE2329F4C5FCB50E24CBA271A67A21141DD09877A',
          exponent: 0,
          aliases: ['p:upryzm:30Jun2025']
        }, {
          denom: 'pPRYZM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/CC90CE4431B59A8B28451E0BE2329F4C5FCB50E24CBA271A67A21141DD09877A',
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
            channel_id: 'channel-23',
            base_denom: 'p:upryzm:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/ABE837E6D2C74F5981245CC3B03EECA7BB2B5D4AC128A971DBAF1C4A485427ED',
          exponent: 0,
          aliases: ['p:upryzm:30Sep2025']
        }, {
          denom: 'pPRYZM30Sep2025',
          exponent: 6
        }],
      base: 'ibc/ABE837E6D2C74F5981245CC3B03EECA7BB2B5D4AC128A971DBAF1C4A485427ED',
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
            channel_id: 'channel-23',
            base_denom: 'p:upryzm:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/249B682A950759969C3A001944B0FB102FB8376965EE6CBB67A4374C9E9F5655',
          exponent: 0,
          aliases: ['p:upryzm:31Dec2025']
        }, {
          denom: 'pPRYZM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/249B682A950759969C3A001944B0FB102FB8376965EE6CBB67A4374C9E9F5655',
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
            channel_id: 'channel-23',
            base_denom: 'p:upryzm:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/67F9DF2BFDF95E31C9A7A6CFB9EF178FAB608E8CC89779E6913894F18CE77ED0',
          exponent: 0,
          aliases: ['p:upryzm:31Mar2026']
        }, {
          denom: 'pPRYZM31Mar2026',
          exponent: 6
        }],
      base: 'ibc/67F9DF2BFDF95E31C9A7A6CFB9EF178FAB608E8CC89779E6913894F18CE77ED0',
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
            channel_id: 'channel-23',
            base_denom: 'p:upryzm:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for PRYZM with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/D5F81651CEC98016DB007BF7C55A1CBB00C82F38B775A0A9B1E69A0EC105DA45',
          exponent: 0,
          aliases: ['p:upryzm:30Jun2026']
        }, {
          denom: 'pPRYZM30Jun2026',
          exponent: 6
        }],
      base: 'ibc/D5F81651CEC98016DB007BF7C55A1CBB00C82F38B775A0A9B1E69A0EC105DA45',
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
            channel_id: 'channel-23',
            base_denom: 'p:upryzm:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for sUSDS with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/E09C8AE65B6600ADDEDC6B723B30F501FE2697413B96DF4106825D676802D31D',
          exponent: 0,
          aliases: ['p:asusds:30Jun2025']
        }, {
          denom: 'psUSDS30Jun2025',
          exponent: 18
        }],
      base: 'ibc/E09C8AE65B6600ADDEDC6B723B30F501FE2697413B96DF4106825D676802D31D',
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
            channel_id: 'channel-23',
            base_denom: 'p:asusds:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for sUSDS with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/EB17DC26F62892D32F1ACFC9E723FBAA12B08922480ACC810A0B86BCBFA80C45',
          exponent: 0,
          aliases: ['p:asusds:30Sep2025']
        }, {
          denom: 'psUSDS30Sep2025',
          exponent: 18
        }],
      base: 'ibc/EB17DC26F62892D32F1ACFC9E723FBAA12B08922480ACC810A0B86BCBFA80C45',
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
            channel_id: 'channel-23',
            base_denom: 'p:asusds:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for sUSDS with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/BB20589B1526F0A6453CD6250AA3902DD0DEB23973DE8F63DA1081EE7F6222F7',
          exponent: 0,
          aliases: ['p:asusds:31Dec2025']
        }, {
          denom: 'psUSDS31Dec2025',
          exponent: 18
        }],
      base: 'ibc/BB20589B1526F0A6453CD6250AA3902DD0DEB23973DE8F63DA1081EE7F6222F7',
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
            channel_id: 'channel-23',
            base_denom: 'p:asusds:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for sUSDS with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/E638774CDD4FB6EC9AC9C81DB223C86DB0BC5FA9BF6E7EDB1105612B0CFFA51F',
          exponent: 0,
          aliases: ['p:asusds:31Mar2026']
        }, {
          denom: 'psUSDS31Mar2026',
          exponent: 18
        }],
      base: 'ibc/E638774CDD4FB6EC9AC9C81DB223C86DB0BC5FA9BF6E7EDB1105612B0CFFA51F',
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
            channel_id: 'channel-23',
            base_denom: 'p:asusds:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for sUSDS with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/884C3D93A392DDADD5672AABA1A3CE4B7A614C073E42C6FB29712E4235D10A03',
          exponent: 0,
          aliases: ['p:asusds:30Jun2026']
        }, {
          denom: 'psUSDS30Jun2026',
          exponent: 18
        }],
      base: 'ibc/884C3D93A392DDADD5672AABA1A3CE4B7A614C073E42C6FB29712E4235D10A03',
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
            channel_id: 'channel-23',
            base_denom: 'p:asusds:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for mBTC with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/139A1B00CE8497C9F34EFA4430F74E98B54110DE92E260B7E240E8D4060044F7',
          exponent: 0,
          aliases: ['p:ambtc:30Sep2025']
        }, {
          denom: 'pmBTC30Sep2025',
          exponent: 18
        }],
      base: 'ibc/139A1B00CE8497C9F34EFA4430F74E98B54110DE92E260B7E240E8D4060044F7',
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
            channel_id: 'channel-23',
            base_denom: 'p:ambtc:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for mBTC with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/23B6FC05C94C194DC6C2B8B082891331D7BF1BFCCF5A67ACBDFABBD33AAE887A',
          exponent: 0,
          aliases: ['p:ambtc:31Dec2025']
        }, {
          denom: 'pmBTC31Dec2025',
          exponent: 18
        }],
      base: 'ibc/23B6FC05C94C194DC6C2B8B082891331D7BF1BFCCF5A67ACBDFABBD33AAE887A',
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
            channel_id: 'channel-23',
            base_denom: 'p:ambtc:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for mBTC with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/DC611BFD5D52B67F9B05DA8ABD6B544C44F7F248E6337E1E21F987BEE62B3C3C',
          exponent: 0,
          aliases: ['p:ambtc:31Mar2026']
        }, {
          denom: 'pmBTC31Mar2026',
          exponent: 18
        }],
      base: 'ibc/DC611BFD5D52B67F9B05DA8ABD6B544C44F7F248E6337E1E21F987BEE62B3C3C',
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
            channel_id: 'channel-23',
            base_denom: 'p:ambtc:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted principal token for mBTC with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/3B25C19BA6F81FCB7D2EC0EC718577A3C78FB3CE63A9E2A1FC59DB00615CA000',
          exponent: 0,
          aliases: ['p:ambtc:30Jun2026']
        }, {
          denom: 'pmBTC30Jun2026',
          exponent: 18
        }],
      base: 'ibc/3B25C19BA6F81FCB7D2EC0EC718577A3C78FB3CE63A9E2A1FC59DB00615CA000',
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
            channel_id: 'channel-23',
            base_denom: 'p:ambtc:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/035E33EE1605A89305FBA6F62539631FC861056CA8C09ED92203F4382621F515',
          exponent: 0,
          aliases: ['y:uatom:30Sep2024']
        }, {
          denom: 'yATOM30Sep2024',
          exponent: 6
        }],
      base: 'ibc/035E33EE1605A89305FBA6F62539631FC861056CA8C09ED92203F4382621F515',
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
            channel_id: 'channel-23',
            base_denom: 'y:uatom:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/10A1623A63932C7CF907E401B9457CCD6F3ED72C93346109C0E9183772CAF32F',
          exponent: 0,
          aliases: ['y:uatom:31Dec2024']
        }, {
          denom: 'yATOM31Dec2024',
          exponent: 6
        }],
      base: 'ibc/10A1623A63932C7CF907E401B9457CCD6F3ED72C93346109C0E9183772CAF32F',
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
            channel_id: 'channel-23',
            base_denom: 'y:uatom:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/14CAAF787CBC1584F4A5338E0B82C9618866F86B7DF870BE85EB49ACC369B3DD',
          exponent: 0,
          aliases: ['y:uatom:31Mar2025']
        }, {
          denom: 'yATOM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/14CAAF787CBC1584F4A5338E0B82C9618866F86B7DF870BE85EB49ACC369B3DD',
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
            channel_id: 'channel-23',
            base_denom: 'y:uatom:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/1925F5E360325007022E282CFA75A39B3A4E6274BE2D8B51DE7709AB617F3CCC',
          exponent: 0,
          aliases: ['y:uatom:30Jun2025']
        }, {
          denom: 'yATOM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/1925F5E360325007022E282CFA75A39B3A4E6274BE2D8B51DE7709AB617F3CCC',
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
            channel_id: 'channel-23',
            base_denom: 'y:uatom:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/716AC64366830299CD4E6D26B4A0151BCD5280053FD530C66E9B88E630B73C64',
          exponent: 0,
          aliases: ['y:uatom:30Sep2025']
        }, {
          denom: 'yATOM30Sep2025',
          exponent: 6
        }],
      base: 'ibc/716AC64366830299CD4E6D26B4A0151BCD5280053FD530C66E9B88E630B73C64',
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
            channel_id: 'channel-23',
            base_denom: 'y:uatom:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/9AB71D1EA2BEFA63DD81EC24825BDA75CA82C1604A345E19929BD1EDE155AC42',
          exponent: 0,
          aliases: ['y:uatom:31Dec2025']
        }, {
          denom: 'yATOM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/9AB71D1EA2BEFA63DD81EC24825BDA75CA82C1604A345E19929BD1EDE155AC42',
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
            channel_id: 'channel-23',
            base_denom: 'y:uatom:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/700802223AD760B3F1B9904CC3971C3EBA33349C6FCC547920CD1BD3C9181DF4',
          exponent: 0,
          aliases: ['y:uatom:31Dec2026']
        }, {
          denom: 'yATOM31Dec2026',
          exponent: 6
        }],
      base: 'ibc/700802223AD760B3F1B9904CC3971C3EBA33349C6FCC547920CD1BD3C9181DF4',
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
            channel_id: 'channel-23',
            base_denom: 'y:uatom:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/0B186F37520FB87B8243A35F5B8C1619A71103F7A51990971183E1F61C02B05E',
          exponent: 0,
          aliases: ['y:uosmo:30Sep2024']
        }, {
          denom: 'yOSMO30Sep2024',
          exponent: 6
        }],
      base: 'ibc/0B186F37520FB87B8243A35F5B8C1619A71103F7A51990971183E1F61C02B05E',
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
            channel_id: 'channel-23',
            base_denom: 'y:uosmo:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/B4F7E0B83F2E5E22F9EE79400CE129D6F4D06FCC98DC6781A6B6675B2D6C866E',
          exponent: 0,
          aliases: ['y:uosmo:31Dec2024']
        }, {
          denom: 'yOSMO31Dec2024',
          exponent: 6
        }],
      base: 'ibc/B4F7E0B83F2E5E22F9EE79400CE129D6F4D06FCC98DC6781A6B6675B2D6C866E',
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
            channel_id: 'channel-23',
            base_denom: 'y:uosmo:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/B90472F39CE5DBCE833AF960932A8019B082FB1FBD58FF3622A46A850CDB39BC',
          exponent: 0,
          aliases: ['y:uosmo:31Mar2025']
        }, {
          denom: 'yOSMO31Mar2025',
          exponent: 6
        }],
      base: 'ibc/B90472F39CE5DBCE833AF960932A8019B082FB1FBD58FF3622A46A850CDB39BC',
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
            channel_id: 'channel-23',
            base_denom: 'y:uosmo:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/4A60159F07C77AD241F2EB697BFE0C6E46AA4DDBA4E22865DBF0EB4DDD89D2B0',
          exponent: 0,
          aliases: ['y:uosmo:30Jun2025']
        }, {
          denom: 'yOSMO30Jun2025',
          exponent: 6
        }],
      base: 'ibc/4A60159F07C77AD241F2EB697BFE0C6E46AA4DDBA4E22865DBF0EB4DDD89D2B0',
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
            channel_id: 'channel-23',
            base_denom: 'y:uosmo:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/FE1F74B575A20B51C0240BC6C3A3CC3353AA49E65876ACDE203D99F6169374E4',
          exponent: 0,
          aliases: ['y:uosmo:30Sep2025']
        }, {
          denom: 'yOSMO30Sep2025',
          exponent: 6
        }],
      base: 'ibc/FE1F74B575A20B51C0240BC6C3A3CC3353AA49E65876ACDE203D99F6169374E4',
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
            channel_id: 'channel-23',
            base_denom: 'y:uosmo:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/5E0A07BD099240211E6521CF8936C077B08D9B2F763E8B3985274CC6E7D2CAC2',
          exponent: 0,
          aliases: ['y:uosmo:31Dec2025']
        }, {
          denom: 'yOSMO31Dec2025',
          exponent: 6
        }],
      base: 'ibc/5E0A07BD099240211E6521CF8936C077B08D9B2F763E8B3985274CC6E7D2CAC2',
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
            channel_id: 'channel-23',
            base_denom: 'y:uosmo:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/3E013A6A3C2FAAB6C78799DFD0E6CF7D7E8DD3BC68C9D73BA5C9A71ABAA09902',
          exponent: 0,
          aliases: ['y:uosmo:31Dec2026']
        }, {
          denom: 'yOSMO31Dec2026',
          exponent: 6
        }],
      base: 'ibc/3E013A6A3C2FAAB6C78799DFD0E6CF7D7E8DD3BC68C9D73BA5C9A71ABAA09902',
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
            channel_id: 'channel-23',
            base_denom: 'y:uosmo:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/1752371D9E79C8825CB436236F328632D39BF5271FDB8381F61F68EF383166E2',
          exponent: 0,
          aliases: ['y:inj:30Sep2024']
        }, {
          denom: 'yINJ30Sep2024',
          exponent: 18
        }],
      base: 'ibc/1752371D9E79C8825CB436236F328632D39BF5271FDB8381F61F68EF383166E2',
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
            channel_id: 'channel-23',
            base_denom: 'y:inj:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/8A0FAB5FC3A1745DBB1DCF7B153D97D47E6FA4EFA9B552895BAA6EA500525268',
          exponent: 0,
          aliases: ['y:inj:31Dec2024']
        }, {
          denom: 'yINJ31Dec2024',
          exponent: 18
        }],
      base: 'ibc/8A0FAB5FC3A1745DBB1DCF7B153D97D47E6FA4EFA9B552895BAA6EA500525268',
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
            channel_id: 'channel-23',
            base_denom: 'y:inj:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/D3B34BD506DB1AE446C85842768D6FAD64BEB218E36703979D4D22B892A83B6A',
          exponent: 0,
          aliases: ['y:inj:31Mar2025']
        }, {
          denom: 'yINJ31Mar2025',
          exponent: 18
        }],
      base: 'ibc/D3B34BD506DB1AE446C85842768D6FAD64BEB218E36703979D4D22B892A83B6A',
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
            channel_id: 'channel-23',
            base_denom: 'y:inj:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/482416436843E381BEEB164685C6805075BE18FB5D2D144533B13CF8C56BF5BB',
          exponent: 0,
          aliases: ['y:inj:30Jun2025']
        }, {
          denom: 'yINJ30Jun2025',
          exponent: 18
        }],
      base: 'ibc/482416436843E381BEEB164685C6805075BE18FB5D2D144533B13CF8C56BF5BB',
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
            channel_id: 'channel-23',
            base_denom: 'y:inj:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/B0E544135FF483C38B1503B56FEF26EE9454A263D0B2A5BBB60C9DE15A934EAA',
          exponent: 0,
          aliases: ['y:inj:30Sep2025']
        }, {
          denom: 'yINJ30Sep2025',
          exponent: 18
        }],
      base: 'ibc/B0E544135FF483C38B1503B56FEF26EE9454A263D0B2A5BBB60C9DE15A934EAA',
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
            channel_id: 'channel-23',
            base_denom: 'y:inj:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/5041C5134CC92B289C69A387F693CB48E1FCA53AF52DBF9C77B4D17EFF80C061',
          exponent: 0,
          aliases: ['y:inj:31Dec2025']
        }, {
          denom: 'yINJ31Dec2025',
          exponent: 18
        }],
      base: 'ibc/5041C5134CC92B289C69A387F693CB48E1FCA53AF52DBF9C77B4D17EFF80C061',
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
            channel_id: 'channel-23',
            base_denom: 'y:inj:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/21881AA0B58A48F6F3A28ECE31C59CD4973638FE5A45D1D2B03CB18E9766689D',
          exponent: 0,
          aliases: ['y:inj:31Dec2026']
        }, {
          denom: 'yINJ31Dec2026',
          exponent: 18
        }],
      base: 'ibc/21881AA0B58A48F6F3A28ECE31C59CD4973638FE5A45D1D2B03CB18E9766689D',
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
            channel_id: 'channel-23',
            base_denom: 'y:inj:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/B5BBEF3ABE37A272D5533591247320EFE242ABEB4C92A57B0ABD83D963AF3EFA',
          exponent: 0,
          aliases: ['y:uluna:30Sep2024']
        }, {
          denom: 'yLUNA30Sep2024',
          exponent: 6
        }],
      base: 'ibc/B5BBEF3ABE37A272D5533591247320EFE242ABEB4C92A57B0ABD83D963AF3EFA',
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
            channel_id: 'channel-23',
            base_denom: 'y:uluna:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/95F170C4048DCDD1965F2410E1591CDD527F70735645002B94DFD7E721B1BC8C',
          exponent: 0,
          aliases: ['y:uluna:31Dec2024']
        }, {
          denom: 'yLUNA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/95F170C4048DCDD1965F2410E1591CDD527F70735645002B94DFD7E721B1BC8C',
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
            channel_id: 'channel-23',
            base_denom: 'y:uluna:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/785259DA3B08E5DD9610792200F3BA26F246421DB0C6AB0882B93AB42433427D',
          exponent: 0,
          aliases: ['y:uluna:31Mar2025']
        }, {
          denom: 'yLUNA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/785259DA3B08E5DD9610792200F3BA26F246421DB0C6AB0882B93AB42433427D',
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
            channel_id: 'channel-23',
            base_denom: 'y:uluna:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/C0EF52927F547F0E29AC3EDBE04A86C2D52DD6D564FA33D91CE26B90BEA0949F',
          exponent: 0,
          aliases: ['y:uluna:30Jun2025']
        }, {
          denom: 'yLUNA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/C0EF52927F547F0E29AC3EDBE04A86C2D52DD6D564FA33D91CE26B90BEA0949F',
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
            channel_id: 'channel-23',
            base_denom: 'y:uluna:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/25F632582B89C95DB8D71D3A8CB8EE4BE8CF29BEF208EBDCA4A84C5351142093',
          exponent: 0,
          aliases: ['y:uluna:30Sep2025']
        }, {
          denom: 'yLUNA30Sep2025',
          exponent: 6
        }],
      base: 'ibc/25F632582B89C95DB8D71D3A8CB8EE4BE8CF29BEF208EBDCA4A84C5351142093',
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
            channel_id: 'channel-23',
            base_denom: 'y:uluna:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/719CC9FF883F781BD8974CC78A41A015716B5FAB13BFE0D47348ECCFB0BF859E',
          exponent: 0,
          aliases: ['y:uluna:31Dec2025']
        }, {
          denom: 'yLUNA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/719CC9FF883F781BD8974CC78A41A015716B5FAB13BFE0D47348ECCFB0BF859E',
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
            channel_id: 'channel-23',
            base_denom: 'y:uluna:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/2FFF53F8EB635694DF84A1C445FC8E5B1DE1428728C8141E67CFA65DB14340DB',
          exponent: 0,
          aliases: ['y:uluna:31Dec2026']
        }, {
          denom: 'yLUNA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/2FFF53F8EB635694DF84A1C445FC8E5B1DE1428728C8141E67CFA65DB14340DB',
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
            channel_id: 'channel-23',
            base_denom: 'y:uluna:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/C18E4901AA77CA5F4BF49A3D96A3D029C293B446B45EA2E41BB3AFE340A5C32F',
          exponent: 0,
          aliases: ['y:uauuu:30Sep2024']
        }, {
          denom: 'yAUUU30Sep2024',
          exponent: 6
        }],
      base: 'ibc/C18E4901AA77CA5F4BF49A3D96A3D029C293B446B45EA2E41BB3AFE340A5C32F',
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
            channel_id: 'channel-23',
            base_denom: 'y:uauuu:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/4418FDCF1E8154522108C73AB23E29BE792BFA9177FDD396951DF90095678776',
          exponent: 0,
          aliases: ['y:uauuu:31Dec2024']
        }, {
          denom: 'yAUUU31Dec2024',
          exponent: 6
        }],
      base: 'ibc/4418FDCF1E8154522108C73AB23E29BE792BFA9177FDD396951DF90095678776',
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
            channel_id: 'channel-23',
            base_denom: 'y:uauuu:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/04DE8538E36C0C525F4A44BBBA5B3F590DACC6C7DE2DD9B204F8615DEAECBB9C',
          exponent: 0,
          aliases: ['y:uauuu:30Jun2025']
        }, {
          denom: 'yAUUU30Jun2025',
          exponent: 6
        }],
      base: 'ibc/04DE8538E36C0C525F4A44BBBA5B3F590DACC6C7DE2DD9B204F8615DEAECBB9C',
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
            channel_id: 'channel-23',
            base_denom: 'y:uauuu:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/88D982060E28A4A2F5A6777C94FE46A42079471DE67285648B18A383F14B9BB2',
          exponent: 0,
          aliases: ['y:uauuu:31Dec2025']
        }, {
          denom: 'yAUUU31Dec2025',
          exponent: 6
        }],
      base: 'ibc/88D982060E28A4A2F5A6777C94FE46A42079471DE67285648B18A383F14B9BB2',
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
            channel_id: 'channel-23',
            base_denom: 'y:uauuu:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/D01C482A1C077F603925A12C047BD1DCB488B4AE27CD73B08DAE4773A0E1A916',
          exponent: 0,
          aliases: ['y:uauuu:31Dec2026']
        }, {
          denom: 'yAUUU31Dec2026',
          exponent: 6
        }],
      base: 'ibc/D01C482A1C077F603925A12C047BD1DCB488B4AE27CD73B08DAE4773A0E1A916',
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
            channel_id: 'channel-23',
            base_denom: 'y:uauuu:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/F5FFAFF2C1A01846D425F48B8A0A30A1AD0FF92CDDE9D05A8394E17E42D57F79',
          exponent: 0,
          aliases: ['y:stutia:30Sep2024']
        }, {
          denom: 'ystTIA30Sep2024',
          exponent: 6
        }],
      base: 'ibc/F5FFAFF2C1A01846D425F48B8A0A30A1AD0FF92CDDE9D05A8394E17E42D57F79',
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
            channel_id: 'channel-23',
            base_denom: 'y:stutia:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/C882D59D6FDD5A055F5C87219808D6BA559EE30B5D5D856A9F7F401FF9D12976',
          exponent: 0,
          aliases: ['y:stutia:31Dec2024']
        }, {
          denom: 'ystTIA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/C882D59D6FDD5A055F5C87219808D6BA559EE30B5D5D856A9F7F401FF9D12976',
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
            channel_id: 'channel-23',
            base_denom: 'y:stutia:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/3B91B6DD5DE15986C587752D7C2365768CBF0C6B7A93A4DF8CFD052C76CE9E6E',
          exponent: 0,
          aliases: ['y:stutia:31Mar2025']
        }, {
          denom: 'ystTIA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/3B91B6DD5DE15986C587752D7C2365768CBF0C6B7A93A4DF8CFD052C76CE9E6E',
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
            channel_id: 'channel-23',
            base_denom: 'y:stutia:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/3DA72581434954123D138C3BA7094C6344ED81E7D1DE6D3AEC4F909355D8E805',
          exponent: 0,
          aliases: ['y:stutia:30Jun2025']
        }, {
          denom: 'ystTIA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/3DA72581434954123D138C3BA7094C6344ED81E7D1DE6D3AEC4F909355D8E805',
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
            channel_id: 'channel-23',
            base_denom: 'y:stutia:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/5C3E03B6D334E87684B0DC94033B279FE6DDC657268715AD8B2ACAEC2510E769',
          exponent: 0,
          aliases: ['y:stutia:31Dec2025']
        }, {
          denom: 'ystTIA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/5C3E03B6D334E87684B0DC94033B279FE6DDC657268715AD8B2ACAEC2510E769',
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
            channel_id: 'channel-23',
            base_denom: 'y:stutia:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/8762A151A22E5556D4E030AF766ED5DAC57DBB3534FEF9AE55416B135F6C2578',
          exponent: 0,
          aliases: ['y:stutia:31Dec2026']
        }, {
          denom: 'ystTIA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/8762A151A22E5556D4E030AF766ED5DAC57DBB3534FEF9AE55416B135F6C2578',
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
            channel_id: 'channel-23',
            base_denom: 'y:stutia:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 30Sep2024',
      denom_units: [{
          denom: 'ibc/834CE656F8C56B23DF08B14CDB637DE4548E0594C5476F9E763F28D0DC323654',
          exponent: 0,
          aliases: ['y:stadydx:30Sep2024']
        }, {
          denom: 'ystDYDX30Sep2024',
          exponent: 18
        }],
      base: 'ibc/834CE656F8C56B23DF08B14CDB637DE4548E0594C5476F9E763F28D0DC323654',
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
            channel_id: 'channel-23',
            base_denom: 'y:stadydx:30Sep2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/D642E4D1DDBC86EDC8E0D5B9962375F4C326BAD27946977606D3F808D34CF7C2',
          exponent: 0,
          aliases: ['y:stadydx:31Dec2024']
        }, {
          denom: 'ystDYDX31Dec2024',
          exponent: 18
        }],
      base: 'ibc/D642E4D1DDBC86EDC8E0D5B9962375F4C326BAD27946977606D3F808D34CF7C2',
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
            channel_id: 'channel-23',
            base_denom: 'y:stadydx:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/8D726646063536529D99F51A146A61680D390775DBA74FA2291821B47FAC09CF',
          exponent: 0,
          aliases: ['y:stadydx:31Mar2025']
        }, {
          denom: 'ystDYDX31Mar2025',
          exponent: 6
        }],
      base: 'ibc/8D726646063536529D99F51A146A61680D390775DBA74FA2291821B47FAC09CF',
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
            channel_id: 'channel-23',
            base_denom: 'y:stadydx:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/9B225BD1C3CB8DB05D57BCFA65A2BA4A40ED7AC660BBB98370EB7157CD42936A',
          exponent: 0,
          aliases: ['y:stadydx:30Jun2025']
        }, {
          denom: 'ystDYDX30Jun2025',
          exponent: 6
        }],
      base: 'ibc/9B225BD1C3CB8DB05D57BCFA65A2BA4A40ED7AC660BBB98370EB7157CD42936A',
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
            channel_id: 'channel-23',
            base_denom: 'y:stadydx:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/2028D925D2C1410EEF4223450C3E06A77FC9F18E4C31E9758DE015616AD97DD5',
          exponent: 0,
          aliases: ['y:stadydx:31Dec2025']
        }, {
          denom: 'ystDYDX31Dec2025',
          exponent: 18
        }],
      base: 'ibc/2028D925D2C1410EEF4223450C3E06A77FC9F18E4C31E9758DE015616AD97DD5',
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
            channel_id: 'channel-23',
            base_denom: 'y:stadydx:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/A0D3227FE8904233A8B6C221DE98FAC53A3CF2CBC2DD8384DFEEE8597D528526',
          exponent: 0,
          aliases: ['y:stadydx:31Dec2026']
        }, {
          denom: 'ystDYDX31Dec2026',
          exponent: 18
        }],
      base: 'ibc/A0D3227FE8904233A8B6C221DE98FAC53A3CF2CBC2DD8384DFEEE8597D528526',
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
            channel_id: 'channel-23',
            base_denom: 'y:stadydx:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/1C2A34E5C1E68510752B42378C50E5B6DF6866AD93ABF6379BEFAE02B1678BA3',
          exponent: 0,
          aliases: ['y:udatom:31Dec2024']
        }, {
          denom: 'ydATOM31Dec2024',
          exponent: 6
        }],
      base: 'ibc/1C2A34E5C1E68510752B42378C50E5B6DF6866AD93ABF6379BEFAE02B1678BA3',
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
            channel_id: 'channel-23',
            base_denom: 'y:udatom:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/2D88B0DB5D1712F39985E57C91F486B9D084CD8094743CFBA2ABE827C751E138',
          exponent: 0,
          aliases: ['y:udatom:31Mar2025']
        }, {
          denom: 'ydATOM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/2D88B0DB5D1712F39985E57C91F486B9D084CD8094743CFBA2ABE827C751E138',
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
            channel_id: 'channel-23',
            base_denom: 'y:udatom:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/E9D0FE1D218956A59ED837F00BE917E3133FA8239B34B6D07643FBF6A8D0A5E3',
          exponent: 0,
          aliases: ['y:udatom:30Jun2025']
        }, {
          denom: 'ydATOM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/E9D0FE1D218956A59ED837F00BE917E3133FA8239B34B6D07643FBF6A8D0A5E3',
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
            channel_id: 'channel-23',
            base_denom: 'y:udatom:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/D754B59C6D0131F4D4DFD2B7E603815C109E78D994D46841BC18E6BCDBFAA141',
          exponent: 0,
          aliases: ['y:udatom:31Dec2025']
        }, {
          denom: 'ydATOM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/D754B59C6D0131F4D4DFD2B7E603815C109E78D994D46841BC18E6BCDBFAA141',
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
            channel_id: 'channel-23',
            base_denom: 'y:udatom:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/12F96BA6B120207664671FED4E7F0FE138C695DDAA074F97D7F11C501CFBF89F',
          exponent: 0,
          aliases: ['y:udatom:31Dec2026']
        }, {
          denom: 'ydATOM31Dec2026',
          exponent: 6
        }],
      base: 'ibc/12F96BA6B120207664671FED4E7F0FE138C695DDAA074F97D7F11C501CFBF89F',
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
            channel_id: 'channel-23',
            base_denom: 'y:udatom:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'ibc/5C9276C4F1AB3FC1CFB1E1AC4F585C20BFF3537AC5E0D1D4F145C2580A20D6AD',
          exponent: 0,
          aliases: ['y:utia:31Dec2024']
        }, {
          denom: 'yTIA31Dec2024',
          exponent: 6
        }],
      base: 'ibc/5C9276C4F1AB3FC1CFB1E1AC4F585C20BFF3537AC5E0D1D4F145C2580A20D6AD',
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
            channel_id: 'channel-23',
            base_denom: 'y:utia:31Dec2024',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/847950234BB9220FECB1329A11E733C708B07870D5F46477D71464EF9928DA96',
          exponent: 0,
          aliases: ['y:utia:31Mar2025']
        }, {
          denom: 'yTIA31Mar2025',
          exponent: 6
        }],
      base: 'ibc/847950234BB9220FECB1329A11E733C708B07870D5F46477D71464EF9928DA96',
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
            channel_id: 'channel-23',
            base_denom: 'y:utia:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/6AF410F051F251D0560CACB6F45AA9E1063854F0452A4DD249BFD82939D76D56',
          exponent: 0,
          aliases: ['y:utia:30Jun2025']
        }, {
          denom: 'yTIA30Jun2025',
          exponent: 6
        }],
      base: 'ibc/6AF410F051F251D0560CACB6F45AA9E1063854F0452A4DD249BFD82939D76D56',
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
            channel_id: 'channel-23',
            base_denom: 'y:utia:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/3A9E82F8B655D13400F6EB17E0FD732F28E2BFFB0C1C0E099B27BC4265040E26',
          exponent: 0,
          aliases: ['y:utia:30Sep2025']
        }, {
          denom: 'yTIA30Sep2025',
          exponent: 6
        }],
      base: 'ibc/3A9E82F8B655D13400F6EB17E0FD732F28E2BFFB0C1C0E099B27BC4265040E26',
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
            channel_id: 'channel-23',
            base_denom: 'y:utia:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/573748CD799CCDEF43A87D6FC41B6B9E090E653B1596979DB957FF111D899A32',
          exponent: 0,
          aliases: ['y:utia:31Dec2025']
        }, {
          denom: 'yTIA31Dec2025',
          exponent: 6
        }],
      base: 'ibc/573748CD799CCDEF43A87D6FC41B6B9E090E653B1596979DB957FF111D899A32',
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
            channel_id: 'channel-23',
            base_denom: 'y:utia:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Dec2026',
      denom_units: [{
          denom: 'ibc/D6219A7BE78D3209BD82E8C26AD10BD4AA1D1BDDDB3727F009F11F67B4B82DB1',
          exponent: 0,
          aliases: ['y:utia:31Dec2026']
        }, {
          denom: 'yTIA31Dec2026',
          exponent: 6
        }],
      base: 'ibc/D6219A7BE78D3209BD82E8C26AD10BD4AA1D1BDDDB3727F009F11F67B4B82DB1',
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
            channel_id: 'channel-23',
            base_denom: 'y:utia:31Dec2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/3D2F7525A28B624EC2F284FF94B39DF0BB21BEF24BAE52072FD42CFEB7115E7B',
          exponent: 0,
          aliases: ['y:ausdy:31Mar2025']
        }, {
          denom: 'yUSDY31Mar2025',
          exponent: 18
        }],
      base: 'ibc/3D2F7525A28B624EC2F284FF94B39DF0BB21BEF24BAE52072FD42CFEB7115E7B',
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
            channel_id: 'channel-23',
            base_denom: 'y:ausdy:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/ABC0511D51DE6195E0C16C0B50CC3A12FBF2A4E51DED2B8AEFDA3884DBE9393E',
          exponent: 0,
          aliases: ['y:ausdy:30Jun2025']
        }, {
          denom: 'yUSDY30Jun2025',
          exponent: 18
        }],
      base: 'ibc/ABC0511D51DE6195E0C16C0B50CC3A12FBF2A4E51DED2B8AEFDA3884DBE9393E',
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
            channel_id: 'channel-23',
            base_denom: 'y:ausdy:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/8A02D3FFF1DCF5797C2697B166EB8E122781B9B797446479AE1D92D5C8080422',
          exponent: 0,
          aliases: ['y:ausdy:30Sep2025']
        }, {
          denom: 'yUSDY30Sep2025',
          exponent: 18
        }],
      base: 'ibc/8A02D3FFF1DCF5797C2697B166EB8E122781B9B797446479AE1D92D5C8080422',
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
            channel_id: 'channel-23',
            base_denom: 'y:ausdy:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/277064327A83D047A5432B678F38ADEADAAFE87CA8EEA526A9CE51E7CB01A4F0',
          exponent: 0,
          aliases: ['y:ausdy:31Dec2025']
        }, {
          denom: 'yUSDY31Dec2025',
          exponent: 18
        }],
      base: 'ibc/277064327A83D047A5432B678F38ADEADAAFE87CA8EEA526A9CE51E7CB01A4F0',
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
            channel_id: 'channel-23',
            base_denom: 'y:ausdy:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/1AD94940D5E3387DF71AF51FA140B059803662C4F397B858E74ADF7F770EA14A',
          exponent: 0,
          aliases: ['y:ausdy:31Mar2026']
        }, {
          denom: 'yUSDY31Mar2026',
          exponent: 18
        }],
      base: 'ibc/1AD94940D5E3387DF71AF51FA140B059803662C4F397B858E74ADF7F770EA14A',
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
            channel_id: 'channel-23',
            base_denom: 'y:ausdy:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for USDY with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/BE8CDA0A29AC281791718A1F09CD2B00D0755CC9F84AE39A5761E9742DF73D13',
          exponent: 0,
          aliases: ['y:ausdy:30Jun2026']
        }, {
          denom: 'yUSDY30Jun2026',
          exponent: 18
        }],
      base: 'ibc/BE8CDA0A29AC281791718A1F09CD2B00D0755CC9F84AE39A5761E9742DF73D13',
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
            channel_id: 'channel-23',
            base_denom: 'y:ausdy:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 31Mar2025',
      denom_units: [{
          denom: 'ibc/BF233AC4B563B6E6333DF755B9C65880E5CE5D225F6F6B20B8FD2120261C4C34',
          exponent: 0,
          aliases: ['y:upryzm:31Mar2025']
        }, {
          denom: 'yPRYZM31Mar2025',
          exponent: 6
        }],
      base: 'ibc/BF233AC4B563B6E6333DF755B9C65880E5CE5D225F6F6B20B8FD2120261C4C34',
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
            channel_id: 'channel-23',
            base_denom: 'y:upryzm:31Mar2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/D8B6ED003DFB5666C2CCB882C789E179F4D93F6F9998EC93376E34E6E1D6B9F7',
          exponent: 0,
          aliases: ['y:upryzm:30Jun2025']
        }, {
          denom: 'yPRYZM30Jun2025',
          exponent: 6
        }],
      base: 'ibc/D8B6ED003DFB5666C2CCB882C789E179F4D93F6F9998EC93376E34E6E1D6B9F7',
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
            channel_id: 'channel-23',
            base_denom: 'y:upryzm:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/BFF3227D38AA1E04C260EC12C5740A4067018C6F81F6FB8CDB009DA67213C52E',
          exponent: 0,
          aliases: ['y:upryzm:30Sep2025']
        }, {
          denom: 'yPRYZM30Sep2025',
          exponent: 6
        }],
      base: 'ibc/BFF3227D38AA1E04C260EC12C5740A4067018C6F81F6FB8CDB009DA67213C52E',
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
            channel_id: 'channel-23',
            base_denom: 'y:upryzm:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/3A0062B7B41F63C5C4B120681EEC83F675193AA2C13471FD0BD61E4137D42F5B',
          exponent: 0,
          aliases: ['y:upryzm:31Dec2025']
        }, {
          denom: 'yPRYZM31Dec2025',
          exponent: 6
        }],
      base: 'ibc/3A0062B7B41F63C5C4B120681EEC83F675193AA2C13471FD0BD61E4137D42F5B',
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
            channel_id: 'channel-23',
            base_denom: 'y:upryzm:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/8800A35E58CBA24927A15CE074A3BFCA9122C999D1013C32BB6630BEB395CE2C',
          exponent: 0,
          aliases: ['y:upryzm:31Mar2026']
        }, {
          denom: 'yPRYZM31Mar2026',
          exponent: 6
        }],
      base: 'ibc/8800A35E58CBA24927A15CE074A3BFCA9122C999D1013C32BB6630BEB395CE2C',
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
            channel_id: 'channel-23',
            base_denom: 'y:upryzm:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for PRYZM with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/D2D9F2EF81F2E4AD33C81EC6EAF4122FB1376437C801E4B1C7221A31EC95EAD9',
          exponent: 0,
          aliases: ['y:upryzm:30Jun2026']
        }, {
          denom: 'yPRYZM30Jun2026',
          exponent: 6
        }],
      base: 'ibc/D2D9F2EF81F2E4AD33C81EC6EAF4122FB1376437C801E4B1C7221A31EC95EAD9',
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
            channel_id: 'channel-23',
            base_denom: 'y:upryzm:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for sUSDS with maturity of 30Jun2025',
      denom_units: [{
          denom: 'ibc/6E8B0C8FE6F2BC9CE204EBEA2AD1073EB372524DFD30605335F4C9E97ABC57D9',
          exponent: 0,
          aliases: ['y:asusds:30Jun2025']
        }, {
          denom: 'ysUSDS30Jun2025',
          exponent: 18
        }],
      base: 'ibc/6E8B0C8FE6F2BC9CE204EBEA2AD1073EB372524DFD30605335F4C9E97ABC57D9',
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
            channel_id: 'channel-23',
            base_denom: 'y:asusds:30Jun2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for sUSDS with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/1B4FC75D682BB9A3282938E78C2702DD5D58B2A855FFB38FC4017E75130C4255',
          exponent: 0,
          aliases: ['y:asusds:30Sep2025']
        }, {
          denom: 'ysUSDS30Sep2025',
          exponent: 18
        }],
      base: 'ibc/1B4FC75D682BB9A3282938E78C2702DD5D58B2A855FFB38FC4017E75130C4255',
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
            channel_id: 'channel-23',
            base_denom: 'y:asusds:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for sUSDS with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/12FD27ED8433BBB899162A6E8C434A449BD0B888092625279F01727CD4037954',
          exponent: 0,
          aliases: ['y:asusds:31Dec2025']
        }, {
          denom: 'ysUSDS31Dec2025',
          exponent: 18
        }],
      base: 'ibc/12FD27ED8433BBB899162A6E8C434A449BD0B888092625279F01727CD4037954',
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
            channel_id: 'channel-23',
            base_denom: 'y:asusds:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for sUSDS with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/2C6F03930F7F2FDD7D35A35DBCBFFC19C3613EB8BE17FB68F99E71C9D257D9D5',
          exponent: 0,
          aliases: ['y:asusds:31Mar2026']
        }, {
          denom: 'ysUSDS31Mar2026',
          exponent: 18
        }],
      base: 'ibc/2C6F03930F7F2FDD7D35A35DBCBFFC19C3613EB8BE17FB68F99E71C9D257D9D5',
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
            channel_id: 'channel-23',
            base_denom: 'y:asusds:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for sUSDS with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/4771EB138C686B4101E0C08BE8A6F17E0F70A2F84C6952BDE2878752B79C3035',
          exponent: 0,
          aliases: ['y:asusds:30Jun2026']
        }, {
          denom: 'ysUSDS30Jun2026',
          exponent: 18
        }],
      base: 'ibc/4771EB138C686B4101E0C08BE8A6F17E0F70A2F84C6952BDE2878752B79C3035',
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
            channel_id: 'channel-23',
            base_denom: 'y:asusds:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for mBTC with maturity of 30Sep2025',
      denom_units: [{
          denom: 'ibc/DEB78F0E17E4690191234855E02F27A7132134E2FBC4879201EA98AF32CAB51C',
          exponent: 0,
          aliases: ['y:ambtc:30Sep2025']
        }, {
          denom: 'ymBTC30Sep2025',
          exponent: 18
        }],
      base: 'ibc/DEB78F0E17E4690191234855E02F27A7132134E2FBC4879201EA98AF32CAB51C',
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
            channel_id: 'channel-23',
            base_denom: 'y:ambtc:30Sep2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for mBTC with maturity of 31Dec2025',
      denom_units: [{
          denom: 'ibc/0EA6CBA78F153A1060D52BBD38F92478731BB2F608C5FD0093F279744B6C1C49',
          exponent: 0,
          aliases: ['y:ambtc:31Dec2025']
        }, {
          denom: 'ymBTC31Dec2025',
          exponent: 18
        }],
      base: 'ibc/0EA6CBA78F153A1060D52BBD38F92478731BB2F608C5FD0093F279744B6C1C49',
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
            channel_id: 'channel-23',
            base_denom: 'y:ambtc:31Dec2025',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for mBTC with maturity of 31Mar2026',
      denom_units: [{
          denom: 'ibc/8844D2B44C123878E74F194599599DD00785CCC0EB8979EBDAEF964D16216218',
          exponent: 0,
          aliases: ['y:ambtc:31Mar2026']
        }, {
          denom: 'ymBTC31Mar2026',
          exponent: 18
        }],
      base: 'ibc/8844D2B44C123878E74F194599599DD00785CCC0EB8979EBDAEF964D16216218',
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
            channel_id: 'channel-23',
            base_denom: 'y:ambtc:31Mar2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s refracted yield token for mBTC with maturity of 30Jun2026',
      denom_units: [{
          denom: 'ibc/8F0129D7D4FC6A0787D277CAEB343790E9CC3E4D027C515FD135AB9CA4C9C16B',
          exponent: 0,
          aliases: ['y:ambtc:30Jun2026']
        }, {
          denom: 'ymBTC30Jun2026',
          exponent: 18
        }],
      base: 'ibc/8F0129D7D4FC6A0787D277CAEB343790E9CC3E4D027C515FD135AB9CA4C9C16B',
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
            channel_id: 'channel-23',
            base_denom: 'y:ambtc:30Jun2026',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for USDC / USDC.axl pool',
      denom_units: [{
          denom: 'ibc/49177641DCA86AF9013F76460DC33DF61C9C8784B8A2CD9F79104C09E05F1430',
          exponent: 0,
          aliases: ['lp:6:uusdc.axl-uusdc']
        }, {
          denom: 'lp:6:usdc.axl-usdc',
          exponent: 6
        }],
      base: 'ibc/49177641DCA86AF9013F76460DC33DF61C9C8784B8A2CD9F79104C09E05F1430',
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
            channel_id: 'channel-23',
            base_denom: 'lp:6:uusdc.axl-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for ATOM Yield pool',
      denom_units: [{
          denom: 'ibc/260ABAF6E433883983E25A0B286FDC03C60EF36B8AF62ABDA45805248E34DB95',
          exponent: 0,
          aliases: ['lp:0:uatom']
        }, {
          denom: 'lp:0:atom',
          exponent: 6
        }],
      base: 'ibc/260ABAF6E433883983E25A0B286FDC03C60EF36B8AF62ABDA45805248E34DB95',
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
            channel_id: 'channel-23',
            base_denom: 'lp:0:uatom',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for ATOM Boost pool',
      denom_units: [{
          denom: 'ibc/2F704A284B3505AEBD71CC96CE055185B53C596A96B339FC219EF9BA81B46019',
          exponent: 0,
          aliases: ['lp:2:uatomypt-uatom']
        }, {
          denom: 'lp:2:atomypt-atom',
          exponent: 6
        }],
      base: 'ibc/2F704A284B3505AEBD71CC96CE055185B53C596A96B339FC219EF9BA81B46019',
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
            channel_id: 'channel-23',
            base_denom: 'lp:2:uatomypt-uatom',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for ATOM / USDC pool',
      denom_units: [{
          denom: 'ibc/5C8B44DBB5DB8CF4EBA8212E19216BC744BC3D096F1D75A594B58412F59B1D76',
          exponent: 0,
          aliases: ['lp:3:uatom-uusdc']
        }, {
          denom: 'lp:3:atom-usdc',
          exponent: 6
        }],
      base: 'ibc/5C8B44DBB5DB8CF4EBA8212E19216BC744BC3D096F1D75A594B58412F59B1D76',
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
            channel_id: 'channel-23',
            base_denom: 'lp:3:uatom-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for INJ Yield pool',
      denom_units: [{
          denom: 'ibc/BEB863ED84CDA30B65B4EBC315CFE452B5E2F85D55A51D848ED5033C5B1B2C0F',
          exponent: 0,
          aliases: ['lp:1:inj']
        }, {
          denom: 'lp:1:INJ',
          exponent: 18
        }],
      base: 'ibc/BEB863ED84CDA30B65B4EBC315CFE452B5E2F85D55A51D848ED5033C5B1B2C0F',
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
            channel_id: 'channel-23',
            base_denom: 'lp:1:inj',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for INJ Boost pool',
      denom_units: [{
          denom: 'ibc/46F8988E34B088C5A75612FA60128B905AA559D1014FFC1E0EE16EF42DD7AB9F',
          exponent: 0,
          aliases: ['lp:4:injypt-inj']
        }, {
          denom: 'lp:4:INJypt-INJ',
          exponent: 18
        }],
      base: 'ibc/46F8988E34B088C5A75612FA60128B905AA559D1014FFC1E0EE16EF42DD7AB9F',
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
            channel_id: 'channel-23',
            base_denom: 'lp:4:injypt-inj',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for INJ / USDC pool',
      denom_units: [{
          denom: 'ibc/26EF028A47F05A81AAD4D29D80BAABCCD2AFFFB7E5DEF5D3FE4166173F5587D4',
          exponent: 0,
          aliases: ['lp:5:inj-uusdc']
        }, {
          denom: 'lp:5:INJ-usdc',
          exponent: 18
        }],
      base: 'ibc/26EF028A47F05A81AAD4D29D80BAABCCD2AFFFB7E5DEF5D3FE4166173F5587D4',
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
            channel_id: 'channel-23',
            base_denom: 'lp:5:inj-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for OSMO Yield pool',
      denom_units: [{
          denom: 'ibc/E5804BE751CAF0F1D4F329408E0B3DAD727F6E26990F97207ADEA84332BBDA40',
          exponent: 0,
          aliases: ['lp:8:uosmo']
        }, {
          denom: 'lp:8:osmo',
          exponent: 6
        }],
      base: 'ibc/E5804BE751CAF0F1D4F329408E0B3DAD727F6E26990F97207ADEA84332BBDA40',
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
            channel_id: 'channel-23',
            base_denom: 'lp:8:uosmo',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for OSMO Boost pool',
      denom_units: [{
          denom: 'ibc/D912B9482EC27489E000F7008A16CE710B0DF44BBD0EB713FB54C6BC3967BBE6',
          exponent: 0,
          aliases: ['lp:10:uosmoypt-uosmo']
        }, {
          denom: 'lp:10:osmoypt-osmo',
          exponent: 6
        }],
      base: 'ibc/D912B9482EC27489E000F7008A16CE710B0DF44BBD0EB713FB54C6BC3967BBE6',
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
            channel_id: 'channel-23',
            base_denom: 'lp:10:uosmoypt-uosmo',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for OSMO / USDC pool',
      denom_units: [{
          denom: 'ibc/DF4A29C07188E937F1B03D7DD12FB42EC7A77F6C62458B815C0942FFA6A100B3',
          exponent: 0,
          aliases: ['lp:11:uosmo-uusdc']
        }, {
          denom: 'lp:11:osmo-usdc',
          exponent: 6
        }],
      base: 'ibc/DF4A29C07188E937F1B03D7DD12FB42EC7A77F6C62458B815C0942FFA6A100B3',
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
            channel_id: 'channel-23',
            base_denom: 'lp:11:uosmo-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for LUNA Yield pool',
      denom_units: [{
          denom: 'ibc/29C3232BECA2F779CAE5C58EFC8ECBED37D502649B94341995F72C3923B22246',
          exponent: 0,
          aliases: ['lp:9:uluna']
        }, {
          denom: 'lp:9:luna',
          exponent: 6
        }],
      base: 'ibc/29C3232BECA2F779CAE5C58EFC8ECBED37D502649B94341995F72C3923B22246',
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
            channel_id: 'channel-23',
            base_denom: 'lp:9:uluna',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for LUNA Boost pool',
      denom_units: [{
          denom: 'ibc/740FE54D01F253EFAA10F021926F874362AEBA48FA5F5C5845A53150D996E72A',
          exponent: 0,
          aliases: ['lp:12:ulunaypt-uluna']
        }, {
          denom: 'lp:12:lunaypt-luna',
          exponent: 6
        }],
      base: 'ibc/740FE54D01F253EFAA10F021926F874362AEBA48FA5F5C5845A53150D996E72A',
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
            channel_id: 'channel-23',
            base_denom: 'lp:12:ulunaypt-uluna',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for LUNA / USDC pool',
      denom_units: [{
          denom: 'ibc/405A5EF5769E50B44A1E626B7C1588C506ACE1A879E23CC1FDB3702ABD4F151E',
          exponent: 0,
          aliases: ['lp:13:uluna-uusdc']
        }, {
          denom: 'lp:13:luna-usdc',
          exponent: 6
        }],
      base: 'ibc/405A5EF5769E50B44A1E626B7C1588C506ACE1A879E23CC1FDB3702ABD4F151E',
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
            channel_id: 'channel-23',
            base_denom: 'lp:13:uluna-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for AUUU Yield pool',
      denom_units: [{
          denom: 'ibc/09A8054AE00B2760314D08430490C083F02BF1129866C30B435D005D3EAD10D4',
          exponent: 0,
          aliases: ['lp:14:uauuu']
        }, {
          denom: 'lp:14:auuu',
          exponent: 6
        }],
      base: 'ibc/09A8054AE00B2760314D08430490C083F02BF1129866C30B435D005D3EAD10D4',
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
            channel_id: 'channel-23',
            base_denom: 'lp:14:uauuu',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for AUUU Boost pool',
      denom_units: [{
          denom: 'ibc/69B045A68BAE69FD11750305E6AB3491E8DE83151BF21B6E26E92A3798A17647',
          exponent: 0,
          aliases: ['lp:17:uauuuypt-uauuu']
        }, {
          denom: 'lp:17:auuuypt-auuu',
          exponent: 6
        }],
      base: 'ibc/69B045A68BAE69FD11750305E6AB3491E8DE83151BF21B6E26E92A3798A17647',
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
            channel_id: 'channel-23',
            base_denom: 'lp:17:uauuuypt-uauuu',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for AUUU / USDC pool',
      denom_units: [{
          denom: 'ibc/657441DCCFD0CFDAD1382814BEED21243EFB6BF57A1BC78A52FD9E06BC3EF38E',
          exponent: 0,
          aliases: ['lp:7:uauuu-uusdc']
        }, {
          denom: 'lp:7:auuu-usdc',
          exponent: 6
        }],
      base: 'ibc/657441DCCFD0CFDAD1382814BEED21243EFB6BF57A1BC78A52FD9E06BC3EF38E',
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
            channel_id: 'channel-23',
            base_denom: 'lp:7:uauuu-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for stDYDX Yield pool',
      denom_units: [{
          denom: 'ibc/10A19AC2D0FD5A52327A1302551C346429E2FBE4E57FE93D3221A504343CAE4D',
          exponent: 0,
          aliases: ['lp:15:stadydx']
        }, {
          denom: 'lp:15:stdydx',
          exponent: 18
        }],
      base: 'ibc/10A19AC2D0FD5A52327A1302551C346429E2FBE4E57FE93D3221A504343CAE4D',
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
            channel_id: 'channel-23',
            base_denom: 'lp:15:stadydx',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for stDYDX Boost pool',
      denom_units: [{
          denom: 'ibc/4C73184669F7DA2332E4F106B9C02DACBBE14E4A7D37E0CE1FAEE5A7CD352FD1',
          exponent: 0,
          aliases: ['lp:18:stadydxypt-adydx']
        }, {
          denom: 'lp:18:stdydxypt-dydx',
          exponent: 18
        }],
      base: 'ibc/4C73184669F7DA2332E4F106B9C02DACBBE14E4A7D37E0CE1FAEE5A7CD352FD1',
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
            channel_id: 'channel-23',
            base_denom: 'lp:18:stadydxypt-adydx',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for DYDX / USDC pool',
      denom_units: [{
          denom: 'ibc/95A72AADCA84A49D77DE1F9B846A9A5588EAA73204750B495445DA700E295202',
          exponent: 0,
          aliases: ['lp:19:adydx-uusdc']
        }, {
          denom: 'lp:19:dydx-usdc',
          exponent: 18
        }],
      base: 'ibc/95A72AADCA84A49D77DE1F9B846A9A5588EAA73204750B495445DA700E295202',
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
            channel_id: 'channel-23',
            base_denom: 'lp:19:adydx-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for stTIA Yield pool',
      denom_units: [{
          denom: 'ibc/6D973AAEA3E87AC9CA9F7765B8E563BDA4E4B464926D255CE78EB9AFAE9FFA35',
          exponent: 0,
          aliases: ['lp:16:stutia']
        }, {
          denom: 'lp:16:sttia',
          exponent: 6
        }],
      base: 'ibc/6D973AAEA3E87AC9CA9F7765B8E563BDA4E4B464926D255CE78EB9AFAE9FFA35',
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
            channel_id: 'channel-23',
            base_denom: 'lp:16:stutia',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for stTIA Boost pool',
      denom_units: [{
          denom: 'ibc/9C955CBD7348589132C1368235B2BD7B2195BD863EE1DB3A4FA12C30944F4DA6',
          exponent: 0,
          aliases: ['lp:20:stutiaypt-utia']
        }, {
          denom: 'lp:20:sttiaypt-tia',
          exponent: 6
        }],
      base: 'ibc/9C955CBD7348589132C1368235B2BD7B2195BD863EE1DB3A4FA12C30944F4DA6',
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
            channel_id: 'channel-23',
            base_denom: 'lp:20:stutiaypt-utia',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for TIA Yield pool',
      denom_units: [{
          denom: 'ibc/5C947F21F5013627A8BDBCFB4969BCD9830A7EBA955AE087F14E2D23AE0B2822',
          exponent: 0,
          aliases: ['lp:24:utia']
        }, {
          denom: 'lp:24:tia',
          exponent: 6
        }],
      base: 'ibc/5C947F21F5013627A8BDBCFB4969BCD9830A7EBA955AE087F14E2D23AE0B2822',
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
            channel_id: 'channel-23',
            base_denom: 'lp:24:utia',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for TIA Boost pool',
      denom_units: [{
          denom: 'ibc/6429C0408A39FAC03910FB32D673A1D63092CEDC1F1E0BDFDBADF1646A7738A9',
          exponent: 0,
          aliases: ['lp:25:utiaypt-utia']
        }, {
          denom: 'lp:25:tiaypt-tia',
          exponent: 6
        }],
      base: 'ibc/6429C0408A39FAC03910FB32D673A1D63092CEDC1F1E0BDFDBADF1646A7738A9',
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
            channel_id: 'channel-23',
            base_denom: 'lp:25:utiaypt-utia',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for TIA / USDC pool',
      denom_units: [{
          denom: 'ibc/697F540FCDA31AD7D72ED0D00A20958D243BAE2F8E748709F944BF6DB5E98752',
          exponent: 0,
          aliases: ['lp:21:utia-uusdc']
        }, {
          denom: 'lp:21:tia-usdc',
          exponent: 6
        }],
      base: 'ibc/697F540FCDA31AD7D72ED0D00A20958D243BAE2F8E748709F944BF6DB5E98752',
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
            channel_id: 'channel-23',
            base_denom: 'lp:21:utia-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for dATOM Yield pool',
      denom_units: [{
          denom: 'ibc/C19D7F43EA7FCB972582FE20D42C7EDD0D8444A23E4C6567FD9C01E00855A794',
          exponent: 0,
          aliases: ['lp:22:udatom']
        }, {
          denom: 'lp:22:datom',
          exponent: 6
        }],
      base: 'ibc/C19D7F43EA7FCB972582FE20D42C7EDD0D8444A23E4C6567FD9C01E00855A794',
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
            channel_id: 'channel-23',
            base_denom: 'lp:22:udatom',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for dATOM Boost pool',
      denom_units: [{
          denom: 'ibc/C1A755D3E5C127D4AC9E9DE7A659F85906331B71C14F3BC21091400E63AFF211',
          exponent: 0,
          aliases: ['lp:23:udatomypt-uatom']
        }, {
          denom: 'lp:23:datomypt-atom',
          exponent: 6
        }],
      base: 'ibc/C1A755D3E5C127D4AC9E9DE7A659F85906331B71C14F3BC21091400E63AFF211',
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
            channel_id: 'channel-23',
            base_denom: 'lp:23:udatomypt-uatom',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for USDY Yield pool',
      denom_units: [{
          denom: 'ibc/6904CC68AA2B634715BCCC39CA43C627208249B7B33F08439938D567768402EE',
          exponent: 0,
          aliases: ['lp:31:ausdy']
        }, {
          denom: 'lp:31:usdy',
          exponent: 18
        }],
      base: 'ibc/6904CC68AA2B634715BCCC39CA43C627208249B7B33F08439938D567768402EE',
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
            channel_id: 'channel-23',
            base_denom: 'lp:31:ausdy',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for USDY Boost pool',
      denom_units: [{
          denom: 'ibc/E36EE0E2FE6C9DD56DF53C965D02C852E0EDE8233BCD3CC81A8E7EF28F88ADE7',
          exponent: 0,
          aliases: ['lp:32:ausdyypt-uusdc']
        }, {
          denom: 'lp:32:usdyypt-usdc',
          exponent: 18
        }],
      base: 'ibc/E36EE0E2FE6C9DD56DF53C965D02C852E0EDE8233BCD3CC81A8E7EF28F88ADE7',
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
            channel_id: 'channel-23',
            base_denom: 'lp:32:ausdyypt-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for PRYZM Yield pool',
      denom_units: [{
          denom: 'ibc/3A45DCE979AB737E026955D4DB2938F32564B4F72B4E1E25039DDE7BC3FA7950',
          exponent: 0,
          aliases: ['lp:33:upryzm']
        }, {
          denom: 'lp:33:pryzm',
          exponent: 6
        }],
      base: 'ibc/3A45DCE979AB737E026955D4DB2938F32564B4F72B4E1E25039DDE7BC3FA7950',
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
            channel_id: 'channel-23',
            base_denom: 'lp:33:upryzm',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for PRYZM Base pool',
      denom_units: [{
          denom: 'ibc/16FE4C8035679C4ABDA9A7D94A6130041A65AE31EDA06229587E6176ACAB2D7B',
          exponent: 0,
          aliases: ['lp:34:upryzmypt-upryzm']
        }, {
          denom: 'lp:34:pryzmypt-pryzm',
          exponent: 6
        }],
      base: 'ibc/16FE4C8035679C4ABDA9A7D94A6130041A65AE31EDA06229587E6176ACAB2D7B',
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
            channel_id: 'channel-23',
            base_denom: 'lp:34:upryzmypt-upryzm',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for PRYZM / USDC pool',
      denom_units: [{
          denom: 'ibc/5BBE58431CE0DAC6FE661B8EC2C0BAC01311592CE57CE9A87C5272A2300A6148',
          exponent: 0,
          aliases: ['lp:35:upryzm-uusdc']
        }, {
          denom: 'lp:35:pryzm-usdc',
          exponent: 6
        }],
      base: 'ibc/5BBE58431CE0DAC6FE661B8EC2C0BAC01311592CE57CE9A87C5272A2300A6148',
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
            channel_id: 'channel-23',
            base_denom: 'lp:35:upryzm-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for sUSDS Yield pool',
      denom_units: [{
          denom: 'ibc/E74D4DE295D27C03E576E0CDE269E16BFCE5B536E7BF2E55FD0F4F4C3A394632',
          exponent: 0,
          aliases: ['lp:36:asusds']
        }, {
          denom: 'lp:36:susds',
          exponent: 18
        }],
      base: 'ibc/E74D4DE295D27C03E576E0CDE269E16BFCE5B536E7BF2E55FD0F4F4C3A394632',
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
            channel_id: 'channel-23',
            base_denom: 'lp:36:asusds',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for sUSDS Boost pool',
      denom_units: [{
          denom: 'ibc/E35C491D9B88BA7BE545CA9BFEC8040088EBC3E63057D6B844CC70A635640518',
          exponent: 0,
          aliases: ['lp:37:asusdsypt-uusdc']
        }, {
          denom: 'lp:37:susdsypt-usdc',
          exponent: 18
        }],
      base: 'ibc/E35C491D9B88BA7BE545CA9BFEC8040088EBC3E63057D6B844CC70A635640518',
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
            channel_id: 'channel-23',
            base_denom: 'lp:37:asusdsypt-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for mBTC Yield pool',
      denom_units: [{
          denom: 'ibc/C47A08A08D4173EE9FE3FCB4F6EBE512DA5CCA67DF0AD502941A58F097FC7527',
          exponent: 0,
          aliases: ['lp:38:ambtc']
        }, {
          denom: 'lp:38:mbtc',
          exponent: 18
        }],
      base: 'ibc/C47A08A08D4173EE9FE3FCB4F6EBE512DA5CCA67DF0AD502941A58F097FC7527',
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
            channel_id: 'channel-23',
            base_denom: 'lp:38:ambtc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for mBTC Boost pool',
      denom_units: [{
          denom: 'ibc/9EFBFACC2F3B962AF95434EC074615517208D1C4130CBF5A6ED013FB182BCF29',
          exponent: 0,
          aliases: ['lp:39:ambtcypt-wsat']
        }, {
          denom: 'lp:39:mbtcypt-wbtc',
          exponent: 18
        }],
      base: 'ibc/9EFBFACC2F3B962AF95434EC074615517208D1C4130CBF5A6ED013FB182BCF29',
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
            channel_id: 'channel-23',
            base_denom: 'lp:39:ambtcypt-wsat',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Pryzm\'s LP token for WBTC / USDC pool',
      denom_units: [{
          denom: 'ibc/7FDD5A19037D67E8975885F20009616EB8979A74CEF179434FCACBF958ACF9E8',
          exponent: 0,
          aliases: ['lp:40:wsat-uusdc']
        }, {
          denom: 'lp:40:wbtc-usdc',
          exponent: 18
        }],
      base: 'ibc/7FDD5A19037D67E8975885F20009616EB8979A74CEF179434FCACBF958ACF9E8',
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
            channel_id: 'channel-23',
            base_denom: 'lp:40:wsat-uusdc',
            chain_name: 'pryzm'
          },
          chain: {
            channel_id: 'channel-257'
          }
        }]
    },
    {
      description: 'Saga is a blockchain platform focused on providing customizable blockchain solutions with a strong emphasis on security and scalability.',
      denom_units: [{
          denom: 'ibc/520D9C4509027DE66C737A1D6A6021915A3071E30DBA8F758B46532B060D7AA5',
          exponent: 0,
          aliases: ['usaga']
        }, {
          denom: 'saga',
          exponent: 6
        }],
      base: 'ibc/520D9C4509027DE66C737A1D6A6021915A3071E30DBA8F758B46532B060D7AA5',
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
            channel_id: 'channel-0',
            base_denom: 'usaga',
            chain_name: 'saga'
          },
          chain: {
            channel_id: 'channel-213'
          }
        }]
    },
    {
      description: 'Secret Network is a privacy-focused blockchain that enables private and secure smart contracts, protecting sensitive data.',
      denom_units: [{
          denom: 'ibc/563C6CB7E0423BE8B9FD1DAB9EAC201A6C2413D96F73618240B114CE4896734C',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'ibc/563C6CB7E0423BE8B9FD1DAB9EAC201A6C2413D96F73618240B114CE4896734C',
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
            channel_id: 'channel-37',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-40'
          }
        }]
    },
    {
      description: 'Sei is a layer-1 blockchain optimized for trading, focusing on providing high throughput, low latency, and efficient execution for decentralized exchanges.',
      denom_units: [{
          denom: 'ibc/AB7D2FCED9DEBF4988CB2ED41F527FD025C35665429C48703A0ECB856DE4C8AE',
          exponent: 0,
          aliases: ['usei']
        }, {
          denom: 'sei',
          exponent: 6
        }],
      base: 'ibc/AB7D2FCED9DEBF4988CB2ED41F527FD025C35665429C48703A0ECB856DE4C8AE',
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
            channel_id: 'channel-11',
            base_denom: 'usei',
            chain_name: 'sei'
          },
          chain: {
            channel_id: 'channel-149'
          }
        }]
    },
    {
      description: 'OOZARU is a meme token on SEI Network inspired by the iconic transformation in the Dragon Ball series',
      denom_units: [{
          denom: 'ibc/C19E6B6212A5DCF8293D3CD440D5C8F9EA05E559834AB21E71A3BDBAB907994C',
          exponent: 0,
          aliases: ['sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda']
        }, {
          denom: 'oozaru',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda',
      base: 'ibc/C19E6B6212A5DCF8293D3CD440D5C8F9EA05E559834AB21E71A3BDBAB907994C',
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
            channel_id: 'channel-11',
            base_denom: 'sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda',
            chain_name: 'sei'
          },
          chain: {
            channel_id: 'channel-149'
          }
        }]
    },
    {
      description: 'Somm Token (SOMM) is the native staking token of the Sommelier Chain',
      denom_units: [
        {
          denom: 'ibc/B86EFF6D227E3E33D7E3B5E65D0C1BB5BD79CCB56D35A9D824F0DD5D52CA43BA',
          exponent: 0,
          aliases: ['usomm']
        },
        {
          denom: 'msomm',
          exponent: 3,
          aliases: ['millisomm']
        },
        {
          denom: 'somm',
          exponent: 6
        }
      ],
      base: 'ibc/B86EFF6D227E3E33D7E3B5E65D0C1BB5BD79CCB56D35A9D824F0DD5D52CA43BA',
      name: 'Sommelier',
      display: 'somm',
      symbol: 'SOMM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg'
      },
      coingecko_id: 'sommelier',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg'
        }],
      socials: {
        website: 'https://www.sommelier.finance/',
        x: 'https://x.com/sommfinance'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-71',
            base_denom: 'usomm',
            chain_name: 'sommelier'
          },
          chain: {
            channel_id: 'channel-150'
          }
        }]
    },
    {
      description: 'Stargaze is a decentralized blockchain platform designed specifically for non-fungible tokens (NFTs), enabling creators to mint, trade, and interact with NFTs in a fully decentralized environment.',
      denom_units: [{
          denom: 'ibc/7EAE5BEF3A26B64AFBD89828AFDDB1DC7024A0276D22745201632C40E6E634D0',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ibc/7EAE5BEF3A26B64AFBD89828AFDDB1DC7024A0276D22745201632C40E6E634D0',
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
            channel_id: 'channel-106',
            base_denom: 'ustars',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-19'
          }
        }]
    },
    {
      description: 'The native staking token of Terra Phoenix.',
      denom_units: [{
          denom: 'ibc/E61BCB1126F42A2ED73B4CEA2221C9635BC2102F0417543C38071779F991942E',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'ibc/E61BCB1126F42A2ED73B4CEA2221C9635BC2102F0417543C38071779F991942E',
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
            channel_id: 'channel-46',
            base_denom: 'uluna',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'The native token of Umee',
      denom_units: [{
          denom: 'ibc/1A2271226209D309902AFF4F21BD21237CB514DD24EA2EE0423BF74C6135D8B8',
          exponent: 0,
          aliases: ['uumee']
        }, {
          denom: 'umee',
          exponent: 6
        }],
      base: 'ibc/1A2271226209D309902AFF4F21BD21237CB514DD24EA2EE0423BF74C6135D8B8',
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
            channel_id: 'channel-34',
            base_denom: 'uumee',
            chain_name: 'umee'
          },
          chain: {
            channel_id: 'channel-29'
          }
        }]
    },
    {
      description: 'The native staking token of Terra Phoenix.',
      denom_units: [{
          denom: 'ibc/E61BCB1126F42A2ED73B4CEA2221C9635BC2102F0417543C38071779F991942E',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'ibc/E61BCB1126F42A2ED73B4CEA2221C9635BC2102F0417543C38071779F991942E',
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
            channel_id: 'channel-46',
            base_denom: 'uluna',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'The native token of Umee',
      denom_units: [{
          denom: 'ibc/1A2271226209D309902AFF4F21BD21237CB514DD24EA2EE0423BF74C6135D8B8',
          exponent: 0,
          aliases: ['uumee']
        }, {
          denom: 'umee',
          exponent: 6
        }],
      base: 'ibc/1A2271226209D309902AFF4F21BD21237CB514DD24EA2EE0423BF74C6135D8B8',
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
            channel_id: 'channel-34',
            base_denom: 'uumee',
            chain_name: 'umee'
          },
          chain: {
            channel_id: 'channel-29'
          }
        }]
    }
  ]
};
export default assets;
    