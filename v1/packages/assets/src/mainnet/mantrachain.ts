import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'mantrachain',
  assets: [
    {
      description: 'Axelar is a decentralized interoperability network connecting multiple blockchain ecosystems, enabling seamless cross-chain communication and value transfer.',
      denom_units: [{
          denom: 'ibc/3E35008738AC049C9C1A1E37F785E947A8DAA9811B3EA3B25580664294056151',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/3E35008738AC049C9C1A1E37F785E947A8DAA9811B3EA3B25580664294056151',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      socials: {
        website: 'https://axelar.network/',
        twitter: 'https://twitter.com/axelarnetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-170',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.',
      denom_units: [{
          denom: 'ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
          theme: {
            primary_color_hex: '#272d45'
          }
        }],
      socials: {
        website: 'https://cosmos.network',
        twitter: 'https://twitter.com/cosmoshub'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1252',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'Injective is a decentralized exchange protocol that enables fast, secure, and fully decentralized trading of derivatives, futures, and spot markets.',
      denom_units: [{
          denom: 'ibc/8EC25D1E0297C50477D9A2FB586A005D1CC92CB21E685CE3344FF4DC03D787D2',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/8EC25D1E0297C50477D9A2FB586A005D1CC92CB21E685CE3344FF4DC03D787D2',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg',
          theme: {
            primary_color_hex: '#04a2fc'
          }
        }],
      socials: {
        website: 'https://injective.com/',
        twitter: 'https://twitter.com/Injective_'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-363',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'ibc/24276F4C13131704B60B137DD366F13DAF12A670F88EBDE2FCE545990112EA46',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'ibc/24276F4C13131704B60B137DD366F13DAF12A670F88EBDE2FCE545990112EA46',
      name: 'Ninpo',
      display: 'NINPO',
      symbol: 'NINPO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png',
          theme: {
            primary_color_hex: '#31292a'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-363',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'ibc/6455D3682FE24284E9537FAB0BE0A9FB880B73F88EE937D15E1C18CDBA889952',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'ibc/6455D3682FE24284E9537FAB0BE0A9FB880B73F88EE937D15E1C18CDBA889952',
      name: 'Judo',
      display: 'JUDO',
      symbol: 'JUDO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png',
          theme: {
            primary_color_hex: '#18120f'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-363',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'A receipt token for lent INJ issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/16EAF6DD66E548F12FB434DB5DF7F7FCC88168DAE7783A69DB4E70944DEBF108',
          exponent: 0,
          aliases: ['inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f']
        }, {
          denom: 'nINJ',
          exponent: 18
        }],
      base: 'ibc/16EAF6DD66E548F12FB434DB5DF7F7FCC88168DAE7783A69DB4E70944DEBF108',
      name: 'Neptune Receipt INJ',
      display: 'nINJ',
      symbol: 'nINJ',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninj.png',
          theme: {
            primary_color_hex: '#293a6f'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-363',
            base_denom: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'A receipt token for lent ATOM issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/F1B91C4E9633EAA690D4F2F203A93F13A57892E6D3DC1AE8A562348A7EDBA39E',
          exponent: 0,
          aliases: ['inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780']
        }, {
          denom: 'nATOM',
          exponent: 6
        }],
      base: 'ibc/F1B91C4E9633EAA690D4F2F203A93F13A57892E6D3DC1AE8A562348A7EDBA39E',
      name: 'Neptune Receipt ATOM',
      display: 'nATOM',
      symbol: 'nATOM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/natom.png',
          theme: {
            primary_color_hex: '#272f4b'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-363',
            base_denom: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'A receipt token for lent WETH issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/E2226BD808AE24E16F6E4E7C354D8F68104C5C660954C5746496D7E07E930F2C',
          exponent: 0,
          aliases: ['inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt']
        }, {
          denom: 'nWETH',
          exponent: 18
        }],
      base: 'ibc/E2226BD808AE24E16F6E4E7C354D8F68104C5C660954C5746496D7E07E930F2C',
      name: 'Neptune Receipt WETH',
      display: 'nWETH',
      symbol: 'nWETH',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nweth.png',
          theme: {
            primary_color_hex: '#2a303f'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-363',
            base_denom: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'A receipt token for lent USDT issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/D433602B1B51D97F44BBBE12133CBD87CD3126447F11B19149E064B2B4FF6F90',
          exponent: 0,
          aliases: ['inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s']
        }, {
          denom: 'nUSDT',
          exponent: 6
        }],
      base: 'ibc/D433602B1B51D97F44BBBE12133CBD87CD3126447F11B19149E064B2B4FF6F90',
      name: 'Neptune Receipt USDT',
      display: 'nUSDT',
      symbol: 'nUSDT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nusdt.png',
          theme: {
            primary_color_hex: '#54ac94'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-363',
            base_denom: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'A receipt token for lent TIA issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/D0AF49484490257763565E9D609725C1BF893BD4A3C023CA1E85B2B99856A163',
          exponent: 0,
          aliases: ['inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv']
        }, {
          denom: 'nTIA',
          exponent: 6
        }],
      base: 'ibc/D0AF49484490257763565E9D609725C1BF893BD4A3C023CA1E85B2B99856A163',
      name: 'Neptune Receipt TIA',
      display: 'nTIA',
      symbol: 'nTIA',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ntia.png',
          theme: {
            primary_color_hex: '#7931f9'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-363',
            base_denom: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'Axelar is a decentralized interoperability network connecting multiple blockchain ecosystems, enabling seamless cross-chain communication and value transfer.',
      denom_units: [{
          denom: 'ibc/3E35008738AC049C9C1A1E37F785E947A8DAA9811B3EA3B25580664294056151',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/3E35008738AC049C9C1A1E37F785E947A8DAA9811B3EA3B25580664294056151',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      socials: {
        website: 'https://axelar.network/',
        twitter: 'https://twitter.com/axelarnetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-170',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-6'
          }
        }]
    },
    {
      description: 'ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.',
      denom_units: [{
          denom: 'ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
          theme: {
            primary_color_hex: '#272d45'
          }
        }],
      socials: {
        website: 'https://cosmos.network',
        twitter: 'https://twitter.com/cosmoshub'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1252',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'Injective is a decentralized exchange protocol that enables fast, secure, and fully decentralized trading of derivatives, futures, and spot markets.',
      denom_units: [{
          denom: 'ibc/8EC25D1E0297C50477D9A2FB586A005D1CC92CB21E685CE3344FF4DC03D787D2',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/8EC25D1E0297C50477D9A2FB586A005D1CC92CB21E685CE3344FF4DC03D787D2',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg',
          theme: {
            primary_color_hex: '#04a2fc'
          }
        }],
      socials: {
        website: 'https://injective.com/',
        twitter: 'https://twitter.com/Injective_'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-363',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'ibc/24276F4C13131704B60B137DD366F13DAF12A670F88EBDE2FCE545990112EA46',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'ibc/24276F4C13131704B60B137DD366F13DAF12A670F88EBDE2FCE545990112EA46',
      name: 'Ninpo',
      display: 'NINPO',
      symbol: 'NINPO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png',
          theme: {
            primary_color_hex: '#31292a'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-363',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'ibc/6455D3682FE24284E9537FAB0BE0A9FB880B73F88EE937D15E1C18CDBA889952',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'ibc/6455D3682FE24284E9537FAB0BE0A9FB880B73F88EE937D15E1C18CDBA889952',
      name: 'Judo',
      display: 'JUDO',
      symbol: 'JUDO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png',
          theme: {
            primary_color_hex: '#18120f'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-363',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'A receipt token for lent INJ issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/16EAF6DD66E548F12FB434DB5DF7F7FCC88168DAE7783A69DB4E70944DEBF108',
          exponent: 0,
          aliases: ['inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f']
        }, {
          denom: 'nINJ',
          exponent: 18
        }],
      base: 'ibc/16EAF6DD66E548F12FB434DB5DF7F7FCC88168DAE7783A69DB4E70944DEBF108',
      name: 'Neptune Receipt INJ',
      display: 'nINJ',
      symbol: 'nINJ',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninj.png',
          theme: {
            primary_color_hex: '#293a6f'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-363',
            base_denom: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'A receipt token for lent ATOM issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/F1B91C4E9633EAA690D4F2F203A93F13A57892E6D3DC1AE8A562348A7EDBA39E',
          exponent: 0,
          aliases: ['inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780']
        }, {
          denom: 'nATOM',
          exponent: 6
        }],
      base: 'ibc/F1B91C4E9633EAA690D4F2F203A93F13A57892E6D3DC1AE8A562348A7EDBA39E',
      name: 'Neptune Receipt ATOM',
      display: 'nATOM',
      symbol: 'nATOM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/natom.png',
          theme: {
            primary_color_hex: '#272f4b'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-363',
            base_denom: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'A receipt token for lent WETH issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/E2226BD808AE24E16F6E4E7C354D8F68104C5C660954C5746496D7E07E930F2C',
          exponent: 0,
          aliases: ['inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt']
        }, {
          denom: 'nWETH',
          exponent: 18
        }],
      base: 'ibc/E2226BD808AE24E16F6E4E7C354D8F68104C5C660954C5746496D7E07E930F2C',
      name: 'Neptune Receipt WETH',
      display: 'nWETH',
      symbol: 'nWETH',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nweth.png',
          theme: {
            primary_color_hex: '#2a303f'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-363',
            base_denom: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'A receipt token for lent USDT issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/D433602B1B51D97F44BBBE12133CBD87CD3126447F11B19149E064B2B4FF6F90',
          exponent: 0,
          aliases: ['inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s']
        }, {
          denom: 'nUSDT',
          exponent: 6
        }],
      base: 'ibc/D433602B1B51D97F44BBBE12133CBD87CD3126447F11B19149E064B2B4FF6F90',
      name: 'Neptune Receipt USDT',
      display: 'nUSDT',
      symbol: 'nUSDT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nusdt.png',
          theme: {
            primary_color_hex: '#54ac94'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-363',
            base_denom: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'A receipt token for lent TIA issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/D0AF49484490257763565E9D609725C1BF893BD4A3C023CA1E85B2B99856A163',
          exponent: 0,
          aliases: ['inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv']
        }, {
          denom: 'nTIA',
          exponent: 6
        }],
      base: 'ibc/D0AF49484490257763565E9D609725C1BF893BD4A3C023CA1E85B2B99856A163',
      name: 'Neptune Receipt TIA',
      display: 'nTIA',
      symbol: 'nTIA',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ntia.png',
          theme: {
            primary_color_hex: '#7931f9'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-363',
            base_denom: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    },
    {
      description: 'Neutron is a smart contract blockchain within the Cosmos ecosystem, leveraging the Cosmos Hub\'s security to provide cross-chain DeFi applications.',
      denom_units: [{
          denom: 'ibc/B41472B80833CADC12B2F50F2AB9E279AAC181022BA9581813EE804D7DAB11F6',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/B41472B80833CADC12B2F50F2AB9E279AAC181022BA9581813EE804D7DAB11F6',
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
            primary_color_hex: '#040404',
            background_color_hex: '#000000',
            circle: true
          }
        }],
      socials: {
        website: 'https://neutron.org/',
        twitter: 'https://twitter.com/Neutron_org'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6964',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/BD97C4278E154025E8B1C7255FA17A86C89750F8061D7A18681E7D748A513C55',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/BD97C4278E154025E8B1C7255FA17A86C89750F8061D7A18681E7D748A513C55',
      name: 'Bitcosmos',
      display: 'bitcosmos',
      symbol: 'BTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png',
          theme: {
            primary_color_hex: '#1b0847'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6964',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/5C68119A9BC5234B0A088A5FF95F3BA6318943E0568267DBA58B521E4113E9C2',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/5C68119A9BC5234B0A088A5FF95F3BA6318943E0568267DBA58B521E4113E9C2',
      name: 'wtf',
      display: 'wtf',
      symbol: 'WTF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png',
          theme: {
            primary_color_hex: '#dcd5ab'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6964',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/7CDE818635F6F9E735BE46660EB412C581232900721DEE47CD28EE0B8B3FF385',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/7CDE818635F6F9E735BE46660EB412C581232900721DEE47CD28EE0B8B3FF385',
      name: 'boy',
      display: 'boy',
      symbol: 'BOY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png',
          theme: {
            primary_color_hex: '#333333'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6964',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'The permissioned staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/6A61F05E85E8EED6B50B6F197E70001A297962BF646549BF4B99DD77E81D52DB',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/6A61F05E85E8EED6B50B6F197E70001A297962BF646549BF4B99DD77E81D52DB',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg',
          theme: {
            primary_color_hex: '#a8bbfb'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-101',
            base_denom: 'ustake',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [{
          denom: 'ibc/AE8475CF1E64C5EC37897E8C1DA8339BD046EFF42BEC7D840359DE66084F1CCD',
          exponent: 0,
          aliases: ['ufrienzies']
        }, {
          denom: 'frienzies',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/AE8475CF1E64C5EC37897E8C1DA8339BD046EFF42BEC7D840359DE66084F1CCD',
      display: 'frienzies',
      name: 'Frienzies',
      symbol: 'FRNZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg',
          theme: {
            primary_color_hex: '#04041c'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-101',
            base_denom: 'ufrienzies',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/6749D16BC09F419C090C330FC751FFF1C96143DB7A4D2FCAEC2F348A3E17618A',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/6749D16BC09F419C090C330FC751FFF1C96143DB7A4D2FCAEC2F348A3E17618A',
      display: 'usdy',
      name: 'Ondo US Dollar Yield',
      symbol: 'USDY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.svg',
          theme: {
            primary_color_hex: '#142c5c'
          }
        }],
      coingecko_id: 'ondo-us-dollar-yield',
      socials: {
        website: 'https://ondo.finance/usdy',
        twitter: 'https://x.com/OndoFinance'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-101',
            base_denom: 'ausdy',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'USDN token',
      denom_units: [{
          denom: 'ibc/DEF63053872AFF04509EDA37BFCB1D890BAA55D47FEC36DBBD19FF55A537D8B3',
          exponent: 0,
          aliases: ['uusdn']
        }, {
          denom: 'usdn',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/DEF63053872AFF04509EDA37BFCB1D890BAA55D47FEC36DBBD19FF55A537D8B3',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDN.svg',
          theme: {
            primary_color_hex: '#2E8564'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-101',
            base_denom: 'uusdn',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-1'
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
          theme: {
            primary_color_hex: '#760dbb'
          }
        }],
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      socials: {
        website: 'https://osmosis.zone',
        twitter: 'https://twitter.com/osmosiszone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85077',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg',
          theme: {
            primary_color_hex: '#4453c7'
          }
        }],
      coingecko_id: 'ion',
      keywords: ['memecoin', 'defi'],
      socials: {
        website: 'https://ion.wtf',
        twitter: 'https://twitter.com/_IONDAO'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85077',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'Stargaze is a decentralized blockchain platform designed specifically for non-fungible tokens (NFTs), enabling creators to mint, trade, and interact with NFTs in a fully decentralized environment.',
      denom_units: [{
          denom: 'ibc/16E817E682AD1A73FD748BC989574B2702E109C4105550498086531FA3D6B050',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ibc/16E817E682AD1A73FD748BC989574B2702E109C4105550498086531FA3D6B050',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg',
          theme: {
            primary_color_hex: '#db2777'
          }
        }],
      socials: {
        website: 'https://www.stargaze.zone/',
        twitter: 'https://twitter.com/StargazeZone'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-406',
            base_denom: 'ustars',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }]
    },
    {
      description: 'Neutron is a smart contract blockchain within the Cosmos ecosystem, leveraging the Cosmos Hub\'s security to provide cross-chain DeFi applications.',
      denom_units: [{
          denom: 'ibc/B41472B80833CADC12B2F50F2AB9E279AAC181022BA9581813EE804D7DAB11F6',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/B41472B80833CADC12B2F50F2AB9E279AAC181022BA9581813EE804D7DAB11F6',
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
            primary_color_hex: '#040404',
            background_color_hex: '#000000',
            circle: true
          }
        }],
      socials: {
        website: 'https://neutron.org/',
        twitter: 'https://twitter.com/Neutron_org'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6964',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/BD97C4278E154025E8B1C7255FA17A86C89750F8061D7A18681E7D748A513C55',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/BD97C4278E154025E8B1C7255FA17A86C89750F8061D7A18681E7D748A513C55',
      name: 'Bitcosmos',
      display: 'bitcosmos',
      symbol: 'BTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png',
          theme: {
            primary_color_hex: '#1b0847'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6964',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/5C68119A9BC5234B0A088A5FF95F3BA6318943E0568267DBA58B521E4113E9C2',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/5C68119A9BC5234B0A088A5FF95F3BA6318943E0568267DBA58B521E4113E9C2',
      name: 'wtf',
      display: 'wtf',
      symbol: 'WTF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png',
          theme: {
            primary_color_hex: '#dcd5ab'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6964',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/7CDE818635F6F9E735BE46660EB412C581232900721DEE47CD28EE0B8B3FF385',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/7CDE818635F6F9E735BE46660EB412C581232900721DEE47CD28EE0B8B3FF385',
      name: 'boy',
      display: 'boy',
      symbol: 'BOY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png',
          theme: {
            primary_color_hex: '#333333'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6964',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'The permissioned staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/6A61F05E85E8EED6B50B6F197E70001A297962BF646549BF4B99DD77E81D52DB',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/6A61F05E85E8EED6B50B6F197E70001A297962BF646549BF4B99DD77E81D52DB',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg',
          theme: {
            primary_color_hex: '#a8bbfb'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-101',
            base_denom: 'ustake',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [{
          denom: 'ibc/AE8475CF1E64C5EC37897E8C1DA8339BD046EFF42BEC7D840359DE66084F1CCD',
          exponent: 0,
          aliases: ['ufrienzies']
        }, {
          denom: 'frienzies',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/AE8475CF1E64C5EC37897E8C1DA8339BD046EFF42BEC7D840359DE66084F1CCD',
      display: 'frienzies',
      name: 'Frienzies',
      symbol: 'FRNZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg',
          theme: {
            primary_color_hex: '#04041c'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-101',
            base_denom: 'ufrienzies',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/6749D16BC09F419C090C330FC751FFF1C96143DB7A4D2FCAEC2F348A3E17618A',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/6749D16BC09F419C090C330FC751FFF1C96143DB7A4D2FCAEC2F348A3E17618A',
      display: 'usdy',
      name: 'Ondo US Dollar Yield',
      symbol: 'USDY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.svg',
          theme: {
            primary_color_hex: '#142c5c'
          }
        }],
      coingecko_id: 'ondo-us-dollar-yield',
      socials: {
        website: 'https://ondo.finance/usdy',
        twitter: 'https://x.com/OndoFinance'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-101',
            base_denom: 'ausdy',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'USDN token',
      denom_units: [{
          denom: 'ibc/DEF63053872AFF04509EDA37BFCB1D890BAA55D47FEC36DBBD19FF55A537D8B3',
          exponent: 0,
          aliases: ['uusdn']
        }, {
          denom: 'usdn',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/DEF63053872AFF04509EDA37BFCB1D890BAA55D47FEC36DBBD19FF55A537D8B3',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDN.svg',
          theme: {
            primary_color_hex: '#2E8564'
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-101',
            base_denom: 'uusdn',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-1'
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
          theme: {
            primary_color_hex: '#760dbb'
          }
        }],
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      socials: {
        website: 'https://osmosis.zone',
        twitter: 'https://twitter.com/osmosiszone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85077',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg',
          theme: {
            primary_color_hex: '#4453c7'
          }
        }],
      coingecko_id: 'ion',
      keywords: ['memecoin', 'defi'],
      socials: {
        website: 'https://ion.wtf',
        twitter: 'https://twitter.com/_IONDAO'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-85077',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'Stargaze is a decentralized blockchain platform designed specifically for non-fungible tokens (NFTs), enabling creators to mint, trade, and interact with NFTs in a fully decentralized environment.',
      denom_units: [{
          denom: 'ibc/16E817E682AD1A73FD748BC989574B2702E109C4105550498086531FA3D6B050',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ibc/16E817E682AD1A73FD748BC989574B2702E109C4105550498086531FA3D6B050',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg',
          theme: {
            primary_color_hex: '#db2777'
          }
        }],
      socials: {
        website: 'https://www.stargaze.zone/',
        twitter: 'https://twitter.com/StargazeZone'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-406',
            base_denom: 'ustars',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }]
    }
  ]
};
export default assets;
    