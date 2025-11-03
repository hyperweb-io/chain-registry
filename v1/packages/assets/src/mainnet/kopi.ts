import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'kopi',
  assets: [
    {
      description: 'ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.',
      denom_units: [{
          denom: 'ibc/A2E2EEC9057A4A1C2C0A6A4C78B0239118DF5F278830F50B4A6BDD7A66506B78',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/A2E2EEC9057A4A1C2C0A6A4C78B0239118DF5F278830F50B4A6BDD7A66506B78',
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
            channel_id: 'channel-1351',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-15'
          }
        }]
    },
    {
      description: 'The native token of Elys Network',
      denom_units: [
        {
          denom: 'ibc/59835A81EC09E6A0A46E13514E38F77230FD377E53AA0AB7CFAE60795AC634EE',
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
      base: 'ibc/59835A81EC09E6A0A46E13514E38F77230FD377E53AA0AB7CFAE60795AC634EE',
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
            channel_id: 'channel-25',
            base_denom: 'uelys',
            chain_name: 'elys'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }]
    },
    {
      description: 'Eden token definition',
      denom_units: [
        {
          denom: 'ibc/7FBC4A481A8E1A63B759F3F2D291CF40867D88ED90DAC6DBBA7ECFD5523F989A',
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
      base: 'ibc/7FBC4A481A8E1A63B759F3F2D291CF40867D88ED90DAC6DBBA7ECFD5523F989A',
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
            channel_id: 'channel-25',
            base_denom: 'ueden',
            chain_name: 'elys'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }]
    },
    {
      description: 'Eden BOOST token definition',
      denom_units: [
        {
          denom: 'ibc/2E5F93C9D24C92EC704A7FD1E81071C3CE4A21049BDF9E764B0414BE3BC0F1BD',
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
      base: 'ibc/2E5F93C9D24C92EC704A7FD1E81071C3CE4A21049BDF9E764B0414BE3BC0F1BD',
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
            channel_id: 'channel-25',
            base_denom: 'uedenb',
            chain_name: 'elys'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }]
    },
    {
      description: 'Injective is a decentralized exchange protocol that enables fast, secure, and fully decentralized trading of derivatives, futures, and spot markets.',
      denom_units: [{
          denom: 'ibc/DE63D8AC34B752FB7D4CAA7594145EDE1C9FC256AC6D4043D0F12310EB8FC255',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/DE63D8AC34B752FB7D4CAA7594145EDE1C9FC256AC6D4043D0F12310EB8FC255',
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
            channel_id: 'channel-376',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'ibc/37DF584DA9DEA8EAF6050079CE400AD33428C43BF10BA7C3F49EF625AFA6DC0A',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'ibc/37DF584DA9DEA8EAF6050079CE400AD33428C43BF10BA7C3F49EF625AFA6DC0A',
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
            channel_id: 'channel-376',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'ibc/26784288775E27733B0722E9242E6381ED7FB6D436E681C9128BAE805A93E32A',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'ibc/26784288775E27733B0722E9242E6381ED7FB6D436E681C9128BAE805A93E32A',
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
            channel_id: 'channel-376',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'A receipt token for lent INJ issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/2DD68E619FDE9490114A4E7E6E2F1D1F79EBFDFFDBF4C790BD95AF7F59D1B322',
          exponent: 0,
          aliases: ['inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f']
        }, {
          denom: 'nINJ',
          exponent: 18
        }],
      base: 'ibc/2DD68E619FDE9490114A4E7E6E2F1D1F79EBFDFFDBF4C790BD95AF7F59D1B322',
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
            channel_id: 'channel-376',
            base_denom: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'A receipt token for lent ATOM issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/B85B4DDA4E47FF501EB1A0B7517F1359913C7BC5905426F6380AF7ECFD6D69DB',
          exponent: 0,
          aliases: ['inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780']
        }, {
          denom: 'nATOM',
          exponent: 6
        }],
      base: 'ibc/B85B4DDA4E47FF501EB1A0B7517F1359913C7BC5905426F6380AF7ECFD6D69DB',
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
            channel_id: 'channel-376',
            base_denom: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'A receipt token for lent WETH issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/FD91EC269C81A2869D878B0A38CF1ABF01C57E9F417094F6D644F9865B22F5AC',
          exponent: 0,
          aliases: ['inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt']
        }, {
          denom: 'nWETH',
          exponent: 18
        }],
      base: 'ibc/FD91EC269C81A2869D878B0A38CF1ABF01C57E9F417094F6D644F9865B22F5AC',
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
            channel_id: 'channel-376',
            base_denom: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'A receipt token for lent USDT issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/DCE00658CECC0E2CA722BC0AE0A715961E3B2FFE15CCC87046AB18752C190122',
          exponent: 0,
          aliases: ['inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s']
        }, {
          denom: 'nUSDT',
          exponent: 6
        }],
      base: 'ibc/DCE00658CECC0E2CA722BC0AE0A715961E3B2FFE15CCC87046AB18752C190122',
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
            channel_id: 'channel-376',
            base_denom: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'A receipt token for lent TIA issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/170D5016E4ED5B5591E8E717CCF3CE988EC12306B8135BCB4F37D85B74E7BCF7',
          exponent: 0,
          aliases: ['inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv']
        }, {
          denom: 'nTIA',
          exponent: 6
        }],
      base: 'ibc/170D5016E4ED5B5591E8E717CCF3CE988EC12306B8135BCB4F37D85B74E7BCF7',
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
            channel_id: 'channel-376',
            base_denom: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.',
      denom_units: [{
          denom: 'ibc/A2E2EEC9057A4A1C2C0A6A4C78B0239118DF5F278830F50B4A6BDD7A66506B78',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/A2E2EEC9057A4A1C2C0A6A4C78B0239118DF5F278830F50B4A6BDD7A66506B78',
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
            channel_id: 'channel-1351',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-15'
          }
        }]
    },
    {
      description: 'The native token of Elys Network',
      denom_units: [
        {
          denom: 'ibc/59835A81EC09E6A0A46E13514E38F77230FD377E53AA0AB7CFAE60795AC634EE',
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
      base: 'ibc/59835A81EC09E6A0A46E13514E38F77230FD377E53AA0AB7CFAE60795AC634EE',
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
            channel_id: 'channel-25',
            base_denom: 'uelys',
            chain_name: 'elys'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }]
    },
    {
      description: 'Eden token definition',
      denom_units: [
        {
          denom: 'ibc/7FBC4A481A8E1A63B759F3F2D291CF40867D88ED90DAC6DBBA7ECFD5523F989A',
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
      base: 'ibc/7FBC4A481A8E1A63B759F3F2D291CF40867D88ED90DAC6DBBA7ECFD5523F989A',
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
            channel_id: 'channel-25',
            base_denom: 'ueden',
            chain_name: 'elys'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }]
    },
    {
      description: 'Eden BOOST token definition',
      denom_units: [
        {
          denom: 'ibc/2E5F93C9D24C92EC704A7FD1E81071C3CE4A21049BDF9E764B0414BE3BC0F1BD',
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
      base: 'ibc/2E5F93C9D24C92EC704A7FD1E81071C3CE4A21049BDF9E764B0414BE3BC0F1BD',
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
            channel_id: 'channel-25',
            base_denom: 'uedenb',
            chain_name: 'elys'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }]
    },
    {
      description: 'Injective is a decentralized exchange protocol that enables fast, secure, and fully decentralized trading of derivatives, futures, and spot markets.',
      denom_units: [{
          denom: 'ibc/DE63D8AC34B752FB7D4CAA7594145EDE1C9FC256AC6D4043D0F12310EB8FC255',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/DE63D8AC34B752FB7D4CAA7594145EDE1C9FC256AC6D4043D0F12310EB8FC255',
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
            channel_id: 'channel-376',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'ibc/37DF584DA9DEA8EAF6050079CE400AD33428C43BF10BA7C3F49EF625AFA6DC0A',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'ibc/37DF584DA9DEA8EAF6050079CE400AD33428C43BF10BA7C3F49EF625AFA6DC0A',
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
            channel_id: 'channel-376',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'ibc/26784288775E27733B0722E9242E6381ED7FB6D436E681C9128BAE805A93E32A',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'ibc/26784288775E27733B0722E9242E6381ED7FB6D436E681C9128BAE805A93E32A',
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
            channel_id: 'channel-376',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'A receipt token for lent INJ issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/2DD68E619FDE9490114A4E7E6E2F1D1F79EBFDFFDBF4C790BD95AF7F59D1B322',
          exponent: 0,
          aliases: ['inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f']
        }, {
          denom: 'nINJ',
          exponent: 18
        }],
      base: 'ibc/2DD68E619FDE9490114A4E7E6E2F1D1F79EBFDFFDBF4C790BD95AF7F59D1B322',
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
            channel_id: 'channel-376',
            base_denom: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'A receipt token for lent ATOM issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/B85B4DDA4E47FF501EB1A0B7517F1359913C7BC5905426F6380AF7ECFD6D69DB',
          exponent: 0,
          aliases: ['inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780']
        }, {
          denom: 'nATOM',
          exponent: 6
        }],
      base: 'ibc/B85B4DDA4E47FF501EB1A0B7517F1359913C7BC5905426F6380AF7ECFD6D69DB',
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
            channel_id: 'channel-376',
            base_denom: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'A receipt token for lent WETH issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/FD91EC269C81A2869D878B0A38CF1ABF01C57E9F417094F6D644F9865B22F5AC',
          exponent: 0,
          aliases: ['inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt']
        }, {
          denom: 'nWETH',
          exponent: 18
        }],
      base: 'ibc/FD91EC269C81A2869D878B0A38CF1ABF01C57E9F417094F6D644F9865B22F5AC',
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
            channel_id: 'channel-376',
            base_denom: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'A receipt token for lent USDT issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/DCE00658CECC0E2CA722BC0AE0A715961E3B2FFE15CCC87046AB18752C190122',
          exponent: 0,
          aliases: ['inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s']
        }, {
          denom: 'nUSDT',
          exponent: 6
        }],
      base: 'ibc/DCE00658CECC0E2CA722BC0AE0A715961E3B2FFE15CCC87046AB18752C190122',
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
            channel_id: 'channel-376',
            base_denom: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'A receipt token for lent TIA issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/170D5016E4ED5B5591E8E717CCF3CE988EC12306B8135BCB4F37D85B74E7BCF7',
          exponent: 0,
          aliases: ['inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv']
        }, {
          denom: 'nTIA',
          exponent: 6
        }],
      base: 'ibc/170D5016E4ED5B5591E8E717CCF3CE988EC12306B8135BCB4F37D85B74E7BCF7',
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
            channel_id: 'channel-376',
            base_denom: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'The permissioned staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/64332FEC2E9CD57D3289247C3AE47D5CB0F517A8247963F5025F31F32E3AA501',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/64332FEC2E9CD57D3289247C3AE47D5CB0F517A8247963F5025F31F32E3AA501',
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
            channel_id: 'channel-122',
            base_denom: 'ustake',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [{
          denom: 'ibc/1B6E81A75E2EFE2D93DC37781644ADBE08B01D1383E9474392516469DDD49F5D',
          exponent: 0,
          aliases: ['ufrienzies']
        }, {
          denom: 'frienzies',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/1B6E81A75E2EFE2D93DC37781644ADBE08B01D1383E9474392516469DDD49F5D',
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
            channel_id: 'channel-122',
            base_denom: 'ufrienzies',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/99A9155EE18328A8114851A52C4E62C12A5177B79B81D6160BB051F8CB5F99FF',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/99A9155EE18328A8114851A52C4E62C12A5177B79B81D6160BB051F8CB5F99FF',
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
            channel_id: 'channel-122',
            base_denom: 'ausdy',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'USDN token',
      denom_units: [{
          denom: 'ibc/E4A6D3FBA3C89333A411CE5675AA149808F8259BE3749D16FB139484C3355ECC',
          exponent: 0,
          aliases: ['uusdn']
        }, {
          denom: 'usdn',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/E4A6D3FBA3C89333A411CE5675AA149808F8259BE3749D16FB139484C3355ECC',
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
            channel_id: 'channel-122',
            base_denom: 'uusdn',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-9'
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
        x: 'https://x.com/osmosiszone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-97998',
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
            channel_id: 'channel-97998',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Planq Network',
      denom_units: [{
          denom: 'ibc/3CD1507C56174EBB6D32F43764A8A14C464D124D86EDB10EA292F3A1284F20D5',
          exponent: 0,
          aliases: ['aplanq']
        }, {
          denom: 'planq',
          exponent: 18
        }],
      base: 'ibc/3CD1507C56174EBB6D32F43764A8A14C464D124D86EDB10EA292F3A1284F20D5',
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
            channel_id: 'channel-65',
            base_denom: 'aplanq',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'The token of Source Protocol bridged from BSC.',
      denom_units: [{
          denom: 'ibc/0E4B2613D5050B4BFCD237ED70BDCEF475ADC0D5A949D01FF26B27D4BBEB7BCB',
          exponent: 0,
          aliases: ['erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09']
        }, {
          denom: 'srcx',
          exponent: 9
        }],
      base: 'ibc/0E4B2613D5050B4BFCD237ED70BDCEF475ADC0D5A949D01FF26B27D4BBEB7BCB',
      name: 'Source Token',
      display: 'srcx',
      symbol: 'SRCX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-65',
            base_denom: 'erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-16'
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
          denom: 'ibc/3B9D8C616D786CD0C9E22DB9DF707BDC2E6DAF74698C60E501D857E4E4868090',
          exponent: 0,
          aliases: ['erc20/0xF630B96760B91f6FCbE8b3C24f2786AcA3D03648']
        }, {
          denom: 'anubi',
          exponent: 18
        }],
      base: 'ibc/3B9D8C616D786CD0C9E22DB9DF707BDC2E6DAF74698C60E501D857E4E4868090',
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
            channel_id: 'channel-65',
            base_denom: 'erc20/0xF630B96760B91f6FCbE8b3C24f2786AcA3D03648',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'The token of Astonic.',
      denom_units: [{
          denom: 'ibc/0B08271E0F3D73DA32D0D1411F702F6043C02E3D15DA2588FC7DC8D477BB9343',
          exponent: 0,
          aliases: ['erc20/0x8F4d86ABa1b47832C46f11e0fFD0F7aDa4498345']
        }, {
          denom: 'astonic',
          exponent: 18
        }],
      base: 'ibc/0B08271E0F3D73DA32D0D1411F702F6043C02E3D15DA2588FC7DC8D477BB9343',
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
            channel_id: 'channel-65',
            base_denom: 'erc20/0x8F4d86ABa1b47832C46f11e0fFD0F7aDa4498345',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'Astonic USD (aUSD) is a stable asset pegged to the US Dollar.',
      denom_units: [{
          denom: 'ibc/468260AAEE4212C3300E72E7F96E30A7BE4DD556950368121E9A658EC9074C29',
          exponent: 0,
          aliases: ['erc20/0xA2871B267a7d888F830251F6B4D9d3DFf184995a']
        }, {
          denom: 'ausd',
          exponent: 18
        }],
      base: 'ibc/468260AAEE4212C3300E72E7F96E30A7BE4DD556950368121E9A658EC9074C29',
      name: 'Astonic USD',
      display: 'ausd',
      symbol: 'aUSD',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-65',
            base_denom: 'erc20/0xA2871B267a7d888F830251F6B4D9d3DFf184995a',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-16'
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
          denom: 'ibc/2917E2C18917A30542AA02F00DF25A17347F85794B7568638632CF338891501F',
          exponent: 0,
          aliases: ['erc20/0xd5be2932FEbD73019ba1d5d97DFC35E1Ab09E501']
        }, {
          denom: 'aeur',
          exponent: 18
        }],
      base: 'ibc/2917E2C18917A30542AA02F00DF25A17347F85794B7568638632CF338891501F',
      name: 'Astonic EUR',
      display: 'aeur',
      symbol: 'aEUR',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-65',
            base_denom: 'erc20/0xd5be2932FEbD73019ba1d5d97DFC35E1Ab09E501',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-16'
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
          denom: 'ibc/D14015EDB722935261CB29BD3039640E5A28F957A261007232A118DF4A526425',
          exponent: 0,
          aliases: ['erc20/0x240642C6f69878A0b199065f25EDf82023BC59ce']
        }, {
          denom: 'abrl',
          exponent: 18
        }],
      base: 'ibc/D14015EDB722935261CB29BD3039640E5A28F957A261007232A118DF4A526425',
      name: 'Astonic BRL',
      display: 'abrl',
      symbol: 'aBRL',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-65',
            base_denom: 'erc20/0x240642C6f69878A0b199065f25EDf82023BC59ce',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-16'
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
      description: 'Stride is a liquid staking blockchain in the Cosmos ecosystem that allows users to stake any IBC-compatible tokens and receive stTokens in return, providing liquidity while earning staking rewards.',
      denom_units: [{
          denom: 'ibc/68930779653E62D66440AE801EE3394E9A29C4222930CBB20EC3EE179DE69E34',
          exponent: 0,
          aliases: ['ustrd']
        }, {
          denom: 'strd',
          exponent: 6
        }],
      base: 'ibc/68930779653E62D66440AE801EE3394E9A29C4222930CBB20EC3EE179DE69E34',
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
            channel_id: 'channel-322',
            base_denom: 'ustrd',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-18'
          }
        }]
    },
    {
      description: 'The native staking token of Terra Phoenix.',
      denom_units: [{
          denom: 'ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986',
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
            channel_id: 'channel-586',
            base_denom: 'uluna',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'The permissioned staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/64332FEC2E9CD57D3289247C3AE47D5CB0F517A8247963F5025F31F32E3AA501',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/64332FEC2E9CD57D3289247C3AE47D5CB0F517A8247963F5025F31F32E3AA501',
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
            channel_id: 'channel-122',
            base_denom: 'ustake',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [{
          denom: 'ibc/1B6E81A75E2EFE2D93DC37781644ADBE08B01D1383E9474392516469DDD49F5D',
          exponent: 0,
          aliases: ['ufrienzies']
        }, {
          denom: 'frienzies',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/1B6E81A75E2EFE2D93DC37781644ADBE08B01D1383E9474392516469DDD49F5D',
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
            channel_id: 'channel-122',
            base_denom: 'ufrienzies',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/99A9155EE18328A8114851A52C4E62C12A5177B79B81D6160BB051F8CB5F99FF',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/99A9155EE18328A8114851A52C4E62C12A5177B79B81D6160BB051F8CB5F99FF',
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
            channel_id: 'channel-122',
            base_denom: 'ausdy',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'USDN token',
      denom_units: [{
          denom: 'ibc/E4A6D3FBA3C89333A411CE5675AA149808F8259BE3749D16FB139484C3355ECC',
          exponent: 0,
          aliases: ['uusdn']
        }, {
          denom: 'usdn',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/E4A6D3FBA3C89333A411CE5675AA149808F8259BE3749D16FB139484C3355ECC',
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
            channel_id: 'channel-122',
            base_denom: 'uusdn',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-9'
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
        x: 'https://x.com/osmosiszone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-97998',
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
            channel_id: 'channel-97998',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Planq Network',
      denom_units: [{
          denom: 'ibc/3CD1507C56174EBB6D32F43764A8A14C464D124D86EDB10EA292F3A1284F20D5',
          exponent: 0,
          aliases: ['aplanq']
        }, {
          denom: 'planq',
          exponent: 18
        }],
      base: 'ibc/3CD1507C56174EBB6D32F43764A8A14C464D124D86EDB10EA292F3A1284F20D5',
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
            channel_id: 'channel-65',
            base_denom: 'aplanq',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'The token of Source Protocol bridged from BSC.',
      denom_units: [{
          denom: 'ibc/0E4B2613D5050B4BFCD237ED70BDCEF475ADC0D5A949D01FF26B27D4BBEB7BCB',
          exponent: 0,
          aliases: ['erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09']
        }, {
          denom: 'srcx',
          exponent: 9
        }],
      base: 'ibc/0E4B2613D5050B4BFCD237ED70BDCEF475ADC0D5A949D01FF26B27D4BBEB7BCB',
      name: 'Source Token',
      display: 'srcx',
      symbol: 'SRCX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-65',
            base_denom: 'erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-16'
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
          denom: 'ibc/3B9D8C616D786CD0C9E22DB9DF707BDC2E6DAF74698C60E501D857E4E4868090',
          exponent: 0,
          aliases: ['erc20/0xF630B96760B91f6FCbE8b3C24f2786AcA3D03648']
        }, {
          denom: 'anubi',
          exponent: 18
        }],
      base: 'ibc/3B9D8C616D786CD0C9E22DB9DF707BDC2E6DAF74698C60E501D857E4E4868090',
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
            channel_id: 'channel-65',
            base_denom: 'erc20/0xF630B96760B91f6FCbE8b3C24f2786AcA3D03648',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'The token of Astonic.',
      denom_units: [{
          denom: 'ibc/0B08271E0F3D73DA32D0D1411F702F6043C02E3D15DA2588FC7DC8D477BB9343',
          exponent: 0,
          aliases: ['erc20/0x8F4d86ABa1b47832C46f11e0fFD0F7aDa4498345']
        }, {
          denom: 'astonic',
          exponent: 18
        }],
      base: 'ibc/0B08271E0F3D73DA32D0D1411F702F6043C02E3D15DA2588FC7DC8D477BB9343',
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
            channel_id: 'channel-65',
            base_denom: 'erc20/0x8F4d86ABa1b47832C46f11e0fFD0F7aDa4498345',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'Astonic USD (aUSD) is a stable asset pegged to the US Dollar.',
      denom_units: [{
          denom: 'ibc/468260AAEE4212C3300E72E7F96E30A7BE4DD556950368121E9A658EC9074C29',
          exponent: 0,
          aliases: ['erc20/0xA2871B267a7d888F830251F6B4D9d3DFf184995a']
        }, {
          denom: 'ausd',
          exponent: 18
        }],
      base: 'ibc/468260AAEE4212C3300E72E7F96E30A7BE4DD556950368121E9A658EC9074C29',
      name: 'Astonic USD',
      display: 'ausd',
      symbol: 'aUSD',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-65',
            base_denom: 'erc20/0xA2871B267a7d888F830251F6B4D9d3DFf184995a',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-16'
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
          denom: 'ibc/2917E2C18917A30542AA02F00DF25A17347F85794B7568638632CF338891501F',
          exponent: 0,
          aliases: ['erc20/0xd5be2932FEbD73019ba1d5d97DFC35E1Ab09E501']
        }, {
          denom: 'aeur',
          exponent: 18
        }],
      base: 'ibc/2917E2C18917A30542AA02F00DF25A17347F85794B7568638632CF338891501F',
      name: 'Astonic EUR',
      display: 'aeur',
      symbol: 'aEUR',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-65',
            base_denom: 'erc20/0xd5be2932FEbD73019ba1d5d97DFC35E1Ab09E501',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-16'
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
          denom: 'ibc/D14015EDB722935261CB29BD3039640E5A28F957A261007232A118DF4A526425',
          exponent: 0,
          aliases: ['erc20/0x240642C6f69878A0b199065f25EDf82023BC59ce']
        }, {
          denom: 'abrl',
          exponent: 18
        }],
      base: 'ibc/D14015EDB722935261CB29BD3039640E5A28F957A261007232A118DF4A526425',
      name: 'Astonic BRL',
      display: 'abrl',
      symbol: 'aBRL',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-65',
            base_denom: 'erc20/0x240642C6f69878A0b199065f25EDf82023BC59ce',
            chain_name: 'planq'
          },
          chain: {
            channel_id: 'channel-16'
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
      description: 'Stride is a liquid staking blockchain in the Cosmos ecosystem that allows users to stake any IBC-compatible tokens and receive stTokens in return, providing liquidity while earning staking rewards.',
      denom_units: [{
          denom: 'ibc/68930779653E62D66440AE801EE3394E9A29C4222930CBB20EC3EE179DE69E34',
          exponent: 0,
          aliases: ['ustrd']
        }, {
          denom: 'strd',
          exponent: 6
        }],
      base: 'ibc/68930779653E62D66440AE801EE3394E9A29C4222930CBB20EC3EE179DE69E34',
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
            channel_id: 'channel-322',
            base_denom: 'ustrd',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-18'
          }
        }]
    },
    {
      description: 'The native staking token of Terra Phoenix.',
      denom_units: [{
          denom: 'ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986',
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
            channel_id: 'channel-586',
            base_denom: 'uluna',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }]
    }
  ]
};
export default assets;
    