import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'nyx',
  assets: [
    {
      description: 'The native token of Namada.',
      denom_units: [{
          denom: 'ibc/E78E1960B5564E01ADB27EC0A77A016E0B912489D3490D9B46A4676D7486AC54',
          exponent: 0,
          aliases: ['unam']
        }, {
          denom: 'nam',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/E78E1960B5564E01ADB27EC0A77A016E0B912489D3490D9B46A4676D7486AC54',
      name: 'Namada',
      display: 'nam',
      symbol: 'NAM',
      address: 'tnam1q9gr66cvu4hrzm0sd5kmlnjje82gs3xlfg3v6nu7',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/namada/images/namada.svg'
      },
      socials: {
        website: 'https://namada.net/',
        twitter: 'https://x.com/namada'
      },
      coingecko_id: 'namada',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'unam',
            chain_name: 'namada'
          },
          chain: {
            channel_id: 'channel-13'
          }
        }]
    },
    {
      description: 'Axelar is a decentralized interoperability network connecting multiple blockchain ecosystems, enabling seamless cross-chain communication and value transfer.',
      denom_units: [{
          denom: 'ibc/2253DE2F950B35D9AB9B403F58F30B970ABDFE1A35AD23E9AB20AE575C68984A',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/2253DE2F950B35D9AB9B403F58F30B970ABDFE1A35AD23E9AB20AE575C68984A',
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
            channel_id: 'channel-177',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-14'
          }
        }]
    },
    {
      description: 'The native token of Gravity Bridge',
      denom_units: [{
          denom: 'ibc/FC9D92EC12BC974E8B6179D411351524CD5C2EBC3CE29D5BA856414FEFA47093',
          exponent: 0,
          aliases: ['ugraviton']
        }, {
          denom: 'graviton',
          exponent: 6
        }],
      base: 'ibc/FC9D92EC12BC974E8B6179D411351524CD5C2EBC3CE29D5BA856414FEFA47093',
      name: 'Graviton',
      display: 'graviton',
      symbol: 'GRAV',
      coingecko_id: 'graviton',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg',
          theme: {
            primary_color_hex: '#042ca4'
          }
        }],
      socials: {
        website: 'https://www.gravitybridge.net/',
        twitter: 'https://twitter.com/gravity_bridge'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'ugraviton',
            chain_name: 'gravitybridge'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'Axelar is a decentralized interoperability network connecting multiple blockchain ecosystems, enabling seamless cross-chain communication and value transfer.',
      denom_units: [{
          denom: 'ibc/2253DE2F950B35D9AB9B403F58F30B970ABDFE1A35AD23E9AB20AE575C68984A',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/2253DE2F950B35D9AB9B403F58F30B970ABDFE1A35AD23E9AB20AE575C68984A',
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
            channel_id: 'channel-177',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-14'
          }
        }]
    },
    {
      description: 'The native token of Gravity Bridge',
      denom_units: [{
          denom: 'ibc/FC9D92EC12BC974E8B6179D411351524CD5C2EBC3CE29D5BA856414FEFA47093',
          exponent: 0,
          aliases: ['ugraviton']
        }, {
          denom: 'graviton',
          exponent: 6
        }],
      base: 'ibc/FC9D92EC12BC974E8B6179D411351524CD5C2EBC3CE29D5BA856414FEFA47093',
      name: 'Graviton',
      display: 'graviton',
      symbol: 'GRAV',
      coingecko_id: 'graviton',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg',
          theme: {
            primary_color_hex: '#042ca4'
          }
        }],
      socials: {
        website: 'https://www.gravitybridge.net/',
        twitter: 'https://twitter.com/gravity_bridge'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'ugraviton',
            chain_name: 'gravitybridge'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'The native token of Namada.',
      denom_units: [{
          denom: 'ibc/E78E1960B5564E01ADB27EC0A77A016E0B912489D3490D9B46A4676D7486AC54',
          exponent: 0,
          aliases: ['unam']
        }, {
          denom: 'nam',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/E78E1960B5564E01ADB27EC0A77A016E0B912489D3490D9B46A4676D7486AC54',
      name: 'Namada',
      display: 'nam',
      symbol: 'NAM',
      address: 'tnam1q9gr66cvu4hrzm0sd5kmlnjje82gs3xlfg3v6nu7',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/namada/images/namada.svg'
      },
      socials: {
        website: 'https://namada.net/',
        twitter: 'https://x.com/namada'
      },
      coingecko_id: 'namada',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'unam',
            chain_name: 'namada'
          },
          chain: {
            channel_id: 'channel-13'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/92E0120F15D037353CFB73C14651FC8930ADC05B93100FD7754D3A689E53B333',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/92E0120F15D037353CFB73C14651FC8930ADC05B93100FD7754D3A689E53B333',
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
            channel_id: 'channel-15464',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-8'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/1B2D7E4261A7E2130E8E3506058E3081D3154998413F0DB2F82B04035B3FE676',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/1B2D7E4261A7E2130E8E3506058E3081D3154998413F0DB2F82B04035B3FE676',
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
            channel_id: 'channel-15464',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-8'
          }
        }]
    },
    {
      description: 'Secret Network is a privacy-focused blockchain that enables private and secure smart contracts, protecting sensitive data.',
      denom_units: [{
          denom: 'ibc/5B0968D76C6250F0824BD0BB4317DB34E884A14B345C83FB8256809855AC7CA7',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'ibc/5B0968D76C6250F0824BD0BB4317DB34E884A14B345C83FB8256809855AC7CA7',
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
        twitter: 'https://twitter.com/SecretNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-174',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/92E0120F15D037353CFB73C14651FC8930ADC05B93100FD7754D3A689E53B333',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/92E0120F15D037353CFB73C14651FC8930ADC05B93100FD7754D3A689E53B333',
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
            channel_id: 'channel-15464',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-8'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/1B2D7E4261A7E2130E8E3506058E3081D3154998413F0DB2F82B04035B3FE676',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/1B2D7E4261A7E2130E8E3506058E3081D3154998413F0DB2F82B04035B3FE676',
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
            channel_id: 'channel-15464',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-8'
          }
        }]
    },
    {
      description: 'Secret Network is a privacy-focused blockchain that enables private and secure smart contracts, protecting sensitive data.',
      denom_units: [{
          denom: 'ibc/5B0968D76C6250F0824BD0BB4317DB34E884A14B345C83FB8256809855AC7CA7',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'ibc/5B0968D76C6250F0824BD0BB4317DB34E884A14B345C83FB8256809855AC7CA7',
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
        twitter: 'https://twitter.com/SecretNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-174',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }]
    }
  ]
};
export default assets;
    