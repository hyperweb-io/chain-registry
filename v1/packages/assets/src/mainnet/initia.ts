import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'initia',
  assets: [
    {
      description: 'Injective is a decentralized exchange protocol that enables fast, secure, and fully decentralized trading of derivatives, futures, and spot markets.',
      denom_units: [{
          denom: 'ibc/5B990949E1B8F2B7D0F79B93D02845A6CDA73193D5A4A01CA994007BC9F622AD',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/5B990949E1B8F2B7D0F79B93D02845A6CDA73193D5A4A01CA994007BC9F622AD',
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
        x: 'https://x.com/Injective',
        telegram: 'https://t.me/joininjective',
        discord: 'https://discord.com/invite/injective',
        reddit: 'https://www.reddit.com/r/injective/'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-488',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-113'
          }
        }]
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'ibc/F83B65E232B7C3930C090DFB60713D788FA7E800F6E2D555BA12B6205B6ABF2F',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'ibc/F83B65E232B7C3930C090DFB60713D788FA7E800F6E2D555BA12B6205B6ABF2F',
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
            channel_id: 'channel-488',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-113'
          }
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'ibc/B3981B061B7876B557C1882F12048DD8BAEFB2CBE7B888674F979DC3D5837B86',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'ibc/B3981B061B7876B557C1882F12048DD8BAEFB2CBE7B888674F979DC3D5837B86',
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
            channel_id: 'channel-488',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-113'
          }
        }]
    },
    {
      description: 'A receipt token for lent INJ issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/D58BCB14F403F53042FE38982AA264D69765B4E4EB1F3D506AFCB0DBC6EEA2C4',
          exponent: 0,
          aliases: ['inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f']
        }, {
          denom: 'nINJ',
          exponent: 18
        }],
      base: 'ibc/D58BCB14F403F53042FE38982AA264D69765B4E4EB1F3D506AFCB0DBC6EEA2C4',
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
            channel_id: 'channel-488',
            base_denom: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-113'
          }
        }]
    },
    {
      description: 'A receipt token for lent ATOM issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/04D9CF429A8447348F1EDC03F572F1FB290BAEA3ED8637C29C08AC1A56F9CFDE',
          exponent: 0,
          aliases: ['inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780']
        }, {
          denom: 'nATOM',
          exponent: 6
        }],
      base: 'ibc/04D9CF429A8447348F1EDC03F572F1FB290BAEA3ED8637C29C08AC1A56F9CFDE',
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
            channel_id: 'channel-488',
            base_denom: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-113'
          }
        }]
    },
    {
      description: 'A receipt token for lent WETH issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/03C70D26030DE99FCC30575F8E517FEEE7662B97A4B6F3E290E3D22582106F2E',
          exponent: 0,
          aliases: ['inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt']
        }, {
          denom: 'nWETH',
          exponent: 18
        }],
      base: 'ibc/03C70D26030DE99FCC30575F8E517FEEE7662B97A4B6F3E290E3D22582106F2E',
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
            channel_id: 'channel-488',
            base_denom: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-113'
          }
        }]
    },
    {
      description: 'A receipt token for lent USDT issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/C5948B1C992B0DC4E076BBE3078AC3A27A07786EABBB4E86CF8ACB26CE6A064F',
          exponent: 0,
          aliases: ['inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s']
        }, {
          denom: 'nUSDT',
          exponent: 6
        }],
      base: 'ibc/C5948B1C992B0DC4E076BBE3078AC3A27A07786EABBB4E86CF8ACB26CE6A064F',
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
            channel_id: 'channel-488',
            base_denom: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-113'
          }
        }]
    },
    {
      description: 'A receipt token for lent TIA issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/A1E4972A825731BB0047ED618319F2396A0D14263555EF3603BE524FFA8DDBC4',
          exponent: 0,
          aliases: ['inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv']
        }, {
          denom: 'nTIA',
          exponent: 6
        }],
      base: 'ibc/A1E4972A825731BB0047ED618319F2396A0D14263555EF3603BE524FFA8DDBC4',
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
            channel_id: 'channel-488',
            base_denom: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-113'
          }
        }]
    },
    {
      description: 'Neutron is a smart contract blockchain within the Cosmos ecosystem, leveraging the Cosmos Hub\'s security to provide cross-chain DeFi applications.',
      denom_units: [{
          denom: 'ibc/E1B86EFC3474070FD47C02F17C84BD573AA8E17C5A8824F293D5B99D6E5F9C09',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/E1B86EFC3474070FD47C02F17C84BD573AA8E17C5A8824F293D5B99D6E5F9C09',
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
            channel_id: 'channel-6885',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-37'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/170131A39F79E19220ECB0DD44729A6608FE1F356868528C57B62B1D5C4A0D90',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/170131A39F79E19220ECB0DD44729A6608FE1F356868528C57B62B1D5C4A0D90',
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
            channel_id: 'channel-6885',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-37'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/0AB0CF1B815AB771CD55088F52CDE960BA7D2802CD5DF81F53DE5C65A37CB403',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/0AB0CF1B815AB771CD55088F52CDE960BA7D2802CD5DF81F53DE5C65A37CB403',
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
            channel_id: 'channel-6885',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-37'
          }
        }]
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/777E6CC2E8A1AB1AD59A16EB1140C46890525449D9376C3BBE7526794FFFAEB3',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/777E6CC2E8A1AB1AD59A16EB1140C46890525449D9376C3BBE7526794FFFAEB3',
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
            channel_id: 'channel-6885',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-37'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/F0BA0597CB395041949DA261E44CE5F5A0D934E477E545E6E76CDDC27759632D',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/F0BA0597CB395041949DA261E44CE5F5A0D934E477E545E6E76CDDC27759632D',
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
            channel_id: 'channel-102122',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-68'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/F4A661CBE4DE0C7438EFAD035F4835E5FDBF0F005FAA2460A5689D5C33C07CD5',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/F4A661CBE4DE0C7438EFAD035F4835E5FDBF0F005FAA2460A5689D5C33C07CD5',
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
            channel_id: 'channel-102122',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-68'
          }
        }]
    },
    {
      description: 'Injective is a decentralized exchange protocol that enables fast, secure, and fully decentralized trading of derivatives, futures, and spot markets.',
      denom_units: [{
          denom: 'ibc/5B990949E1B8F2B7D0F79B93D02845A6CDA73193D5A4A01CA994007BC9F622AD',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/5B990949E1B8F2B7D0F79B93D02845A6CDA73193D5A4A01CA994007BC9F622AD',
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
        x: 'https://x.com/Injective',
        telegram: 'https://t.me/joininjective',
        discord: 'https://discord.com/invite/injective',
        reddit: 'https://www.reddit.com/r/injective/'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-488',
            base_denom: 'inj',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-113'
          }
        }]
    },
    {
      description: 'The second meme coin on Injective.',
      denom_units: [{
          denom: 'ibc/F83B65E232B7C3930C090DFB60713D788FA7E800F6E2D555BA12B6205B6ABF2F',
          exponent: 0,
          aliases: ['inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88']
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'ibc/F83B65E232B7C3930C090DFB60713D788FA7E800F6E2D555BA12B6205B6ABF2F',
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
            channel_id: 'channel-488',
            base_denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-113'
          }
        }]
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denom_units: [{
          denom: 'ibc/B3981B061B7876B557C1882F12048DD8BAEFB2CBE7B888674F979DC3D5837B86',
          exponent: 0,
          aliases: ['inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h']
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'ibc/B3981B061B7876B557C1882F12048DD8BAEFB2CBE7B888674F979DC3D5837B86',
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
            channel_id: 'channel-488',
            base_denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-113'
          }
        }]
    },
    {
      description: 'A receipt token for lent INJ issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/D58BCB14F403F53042FE38982AA264D69765B4E4EB1F3D506AFCB0DBC6EEA2C4',
          exponent: 0,
          aliases: ['inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f']
        }, {
          denom: 'nINJ',
          exponent: 18
        }],
      base: 'ibc/D58BCB14F403F53042FE38982AA264D69765B4E4EB1F3D506AFCB0DBC6EEA2C4',
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
            channel_id: 'channel-488',
            base_denom: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-113'
          }
        }]
    },
    {
      description: 'A receipt token for lent ATOM issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/04D9CF429A8447348F1EDC03F572F1FB290BAEA3ED8637C29C08AC1A56F9CFDE',
          exponent: 0,
          aliases: ['inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780']
        }, {
          denom: 'nATOM',
          exponent: 6
        }],
      base: 'ibc/04D9CF429A8447348F1EDC03F572F1FB290BAEA3ED8637C29C08AC1A56F9CFDE',
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
            channel_id: 'channel-488',
            base_denom: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-113'
          }
        }]
    },
    {
      description: 'A receipt token for lent WETH issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/03C70D26030DE99FCC30575F8E517FEEE7662B97A4B6F3E290E3D22582106F2E',
          exponent: 0,
          aliases: ['inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt']
        }, {
          denom: 'nWETH',
          exponent: 18
        }],
      base: 'ibc/03C70D26030DE99FCC30575F8E517FEEE7662B97A4B6F3E290E3D22582106F2E',
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
            channel_id: 'channel-488',
            base_denom: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-113'
          }
        }]
    },
    {
      description: 'A receipt token for lent USDT issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/C5948B1C992B0DC4E076BBE3078AC3A27A07786EABBB4E86CF8ACB26CE6A064F',
          exponent: 0,
          aliases: ['inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s']
        }, {
          denom: 'nUSDT',
          exponent: 6
        }],
      base: 'ibc/C5948B1C992B0DC4E076BBE3078AC3A27A07786EABBB4E86CF8ACB26CE6A064F',
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
            channel_id: 'channel-488',
            base_denom: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-113'
          }
        }]
    },
    {
      description: 'A receipt token for lent TIA issued by the Neptune Protocol.',
      denom_units: [{
          denom: 'ibc/A1E4972A825731BB0047ED618319F2396A0D14263555EF3603BE524FFA8DDBC4',
          exponent: 0,
          aliases: ['inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv']
        }, {
          denom: 'nTIA',
          exponent: 6
        }],
      base: 'ibc/A1E4972A825731BB0047ED618319F2396A0D14263555EF3603BE524FFA8DDBC4',
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
            channel_id: 'channel-488',
            base_denom: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
            chain_name: 'injective'
          },
          chain: {
            channel_id: 'channel-113'
          }
        }]
    },
    {
      description: 'Neutron is a smart contract blockchain within the Cosmos ecosystem, leveraging the Cosmos Hub\'s security to provide cross-chain DeFi applications.',
      denom_units: [{
          denom: 'ibc/E1B86EFC3474070FD47C02F17C84BD573AA8E17C5A8824F293D5B99D6E5F9C09',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/E1B86EFC3474070FD47C02F17C84BD573AA8E17C5A8824F293D5B99D6E5F9C09',
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
            channel_id: 'channel-6885',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-37'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/170131A39F79E19220ECB0DD44729A6608FE1F356868528C57B62B1D5C4A0D90',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/170131A39F79E19220ECB0DD44729A6608FE1F356868528C57B62B1D5C4A0D90',
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
            channel_id: 'channel-6885',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-37'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/0AB0CF1B815AB771CD55088F52CDE960BA7D2802CD5DF81F53DE5C65A37CB403',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/0AB0CF1B815AB771CD55088F52CDE960BA7D2802CD5DF81F53DE5C65A37CB403',
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
            channel_id: 'channel-6885',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-37'
          }
        }]
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/777E6CC2E8A1AB1AD59A16EB1140C46890525449D9376C3BBE7526794FFFAEB3',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/777E6CC2E8A1AB1AD59A16EB1140C46890525449D9376C3BBE7526794FFFAEB3',
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
            channel_id: 'channel-6885',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-37'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/F0BA0597CB395041949DA261E44CE5F5A0D934E477E545E6E76CDDC27759632D',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/F0BA0597CB395041949DA261E44CE5F5A0D934E477E545E6E76CDDC27759632D',
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
            channel_id: 'channel-102122',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-68'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/F4A661CBE4DE0C7438EFAD035F4835E5FDBF0F005FAA2460A5689D5C33C07CD5',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/F4A661CBE4DE0C7438EFAD035F4835E5FDBF0F005FAA2460A5689D5C33C07CD5',
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
            channel_id: 'channel-102122',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-68'
          }
        }]
    }
  ]
};
export default assets;
    