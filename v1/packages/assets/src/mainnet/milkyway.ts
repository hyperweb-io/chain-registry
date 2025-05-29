import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'milkyway',
  assets: [
    {
      description: 'The native token of Babylon Genesis.',
      denom_units: [{
          denom: 'ibc/B0BEE773CEF718E8B6D2892A27D57FEFB00BD8B2E698367B5CC96A4F36148726',
          exponent: 0,
          aliases: ['ubbn']
        }, {
          denom: 'BABY',
          exponent: 6
        }],
      base: 'ibc/B0BEE773CEF718E8B6D2892A27D57FEFB00BD8B2E698367B5CC96A4F36148726',
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
        twitter: 'https://x.com/babylonlabs_io'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'ubbn',
            chain_name: 'babylon'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }]
    },
    {
      description: 'Celestia is a modular blockchain network focused on data availability, allowing developers to deploy their own customizable blockchains with ease.',
      denom_units: [{
          denom: 'ibc/F1183DB3D428313A6FD329DF18219F9D6B83257D07D292EA9EC1D877E89EC2B0',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      base: 'ibc/F1183DB3D428313A6FD329DF18219F9D6B83257D07D292EA9EC1D877E89EC2B0',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
          theme: {
            primary_color_hex: '#7c2cfb'
          }
        }],
      socials: {
        website: 'https://celestia.org/',
        twitter: 'https://twitter.com/CelestiaOrg'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-49',
            base_denom: 'utia',
            chain_name: 'celestia'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'The native token of Initia',
      denom_units: [{
          denom: 'ibc/FF1404DE8D24A4E1E07A7C85ADD9575FCA11D951CAED401E17EE12796816EC76',
          exponent: 0,
          aliases: ['uinit']
        }, {
          denom: 'INIT',
          exponent: 6
        }],
      base: 'ibc/FF1404DE8D24A4E1E07A7C85ADD9575FCA11D951CAED401E17EE12796816EC76',
      display: 'INIT',
      name: 'Initia',
      symbol: 'INIT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/initia/images/INIT.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/initia/images/INIT.svg',
          theme: {
            circle: true,
            primary_color_hex: '#040404'
          }
        }],
      socials: {
        website: 'https://initia.xyz/',
        twitter: 'https://twitter.com/initiaFDN'
      },
      type_asset: 'sdk.coin',
      coingecko_id: 'initia',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-80',
            base_denom: 'uinit',
            chain_name: 'initia'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'The native token of Babylon Genesis.',
      denom_units: [{
          denom: 'ibc/B0BEE773CEF718E8B6D2892A27D57FEFB00BD8B2E698367B5CC96A4F36148726',
          exponent: 0,
          aliases: ['ubbn']
        }, {
          denom: 'BABY',
          exponent: 6
        }],
      base: 'ibc/B0BEE773CEF718E8B6D2892A27D57FEFB00BD8B2E698367B5CC96A4F36148726',
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
        twitter: 'https://x.com/babylonlabs_io'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'ubbn',
            chain_name: 'babylon'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }]
    },
    {
      description: 'Celestia is a modular blockchain network focused on data availability, allowing developers to deploy their own customizable blockchains with ease.',
      denom_units: [{
          denom: 'ibc/F1183DB3D428313A6FD329DF18219F9D6B83257D07D292EA9EC1D877E89EC2B0',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      base: 'ibc/F1183DB3D428313A6FD329DF18219F9D6B83257D07D292EA9EC1D877E89EC2B0',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
          theme: {
            primary_color_hex: '#7c2cfb'
          }
        }],
      socials: {
        website: 'https://celestia.org/',
        twitter: 'https://twitter.com/CelestiaOrg'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-49',
            base_denom: 'utia',
            chain_name: 'celestia'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'The native token of Initia',
      denom_units: [{
          denom: 'ibc/FF1404DE8D24A4E1E07A7C85ADD9575FCA11D951CAED401E17EE12796816EC76',
          exponent: 0,
          aliases: ['uinit']
        }, {
          denom: 'INIT',
          exponent: 6
        }],
      base: 'ibc/FF1404DE8D24A4E1E07A7C85ADD9575FCA11D951CAED401E17EE12796816EC76',
      display: 'INIT',
      name: 'Initia',
      symbol: 'INIT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/initia/images/INIT.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/initia/images/INIT.svg',
          theme: {
            circle: true,
            primary_color_hex: '#040404'
          }
        }],
      socials: {
        website: 'https://initia.xyz/',
        twitter: 'https://twitter.com/initiaFDN'
      },
      type_asset: 'sdk.coin',
      coingecko_id: 'initia',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-80',
            base_denom: 'uinit',
            chain_name: 'initia'
          },
          chain: {
            channel_id: 'channel-5'
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
            channel_id: 'channel-89298',
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
            channel_id: 'channel-89298',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
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
            channel_id: 'channel-89298',
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
            channel_id: 'channel-89298',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    }
  ]
};
export default assets;
    