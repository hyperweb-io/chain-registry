import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'prysmdevnet',
  assets: [
    {
      denom_units: [{
          denom: 'ibc/45D6B52CAD911A15BD9C2F5FFDA80E26AFCB05C7CD520070790ABC86D2B24229',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      base: 'ibc/45D6B52CAD911A15BD9C2F5FFDA80E26AFCB05C7CD520070790ABC86D2B24229',
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
            channel_id: 'channel-138',
            base_denom: 'utia',
            chain_name: 'celestiatestnet3'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Composable testnet.',
      denom_units: [{
          denom: 'ibc/A358A3D2C0DEF2F2C0FEAD5CE3F19D437E7356F54850D1ACF4828CF630FFFC7D',
          exponent: 0,
          aliases: ['ppica']
        }, {
          denom: 'pica',
          exponent: 12
        }],
      base: 'ibc/A358A3D2C0DEF2F2C0FEAD5CE3F19D437E7356F54850D1ACF4828CF630FFFC7D',
      name: 'Pica',
      display: 'pica',
      symbol: 'PICA',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-50',
            base_denom: 'ppica',
            chain_name: 'composabletestnet'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Theta testnet version of the Cosmos Hub.',
      denom_units: [{
          denom: 'ibc/25418646C017D377ADF3202FF1E43590D0DAE3346E594E8D78176A139A928F88',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/25418646C017D377ADF3202FF1E43590D0DAE3346E594E8D78176A139A928F88',
      name: 'Cosmos',
      display: 'atom',
      symbol: 'ATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4366',
            base_denom: 'uatom',
            chain_name: 'cosmoshubtestnet'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'Eden token definition',
      denom_units: [
        {
          denom: 'ibc/AC910FF5DC8816CA6C92C7DCE84655FAF81D4E70A218C2BC048A29D66D85F91A',
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
      base: 'ibc/AC910FF5DC8816CA6C92C7DCE84655FAF81D4E70A218C2BC048A29D66D85F91A',
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
            channel_id: 'channel-52',
            base_denom: 'ueden',
            chain_name: 'elystestnet'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'The controlled staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/9B5FB81FDBC0A3A2F707A4B3C217B4E7FF7CB24830F4502D9410D5EA475097D4',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      base: 'ibc/9B5FB81FDBC0A3A2F707A4B3C217B4E7FF7CB24830F4502D9410D5EA475097D4',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-222',
            base_denom: 'ustake',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'Love is a test tokenfactory asset controlled by the Strangelove Team',
      denom_units: [{
          denom: 'ibc/F94A6898C5451A2C79CD168A40E63D6FF280DF46704B571E68CE3EDAE59C65F6',
          exponent: 0,
          aliases: ['ulove']
        }, {
          denom: 'love',
          exponent: 6
        }],
      base: 'ibc/F94A6898C5451A2C79CD168A40E63D6FF280DF46704B571E68CE3EDAE59C65F6',
      display: 'love',
      name: 'Love',
      symbol: 'LOVE',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-222',
            base_denom: 'ulove',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/AAF322A78A0E34B76CDA05BA9AE96DC1521F9E103EC576AB9931116B2AB8C26B',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/AAF322A78A0E34B76CDA05BA9AE96DC1521F9E103EC576AB9931116B2AB8C26B',
      display: 'usdy',
      name: 'Ondo US Dollar Yield',
      symbol: 'USDY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-222',
            base_denom: 'ausdy',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/45D6B52CAD911A15BD9C2F5FFDA80E26AFCB05C7CD520070790ABC86D2B24229',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      base: 'ibc/45D6B52CAD911A15BD9C2F5FFDA80E26AFCB05C7CD520070790ABC86D2B24229',
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
            channel_id: 'channel-138',
            base_denom: 'utia',
            chain_name: 'celestiatestnet3'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Composable testnet.',
      denom_units: [{
          denom: 'ibc/A358A3D2C0DEF2F2C0FEAD5CE3F19D437E7356F54850D1ACF4828CF630FFFC7D',
          exponent: 0,
          aliases: ['ppica']
        }, {
          denom: 'pica',
          exponent: 12
        }],
      base: 'ibc/A358A3D2C0DEF2F2C0FEAD5CE3F19D437E7356F54850D1ACF4828CF630FFFC7D',
      name: 'Pica',
      display: 'pica',
      symbol: 'PICA',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-50',
            base_denom: 'ppica',
            chain_name: 'composabletestnet'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Theta testnet version of the Cosmos Hub.',
      denom_units: [{
          denom: 'ibc/25418646C017D377ADF3202FF1E43590D0DAE3346E594E8D78176A139A928F88',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/25418646C017D377ADF3202FF1E43590D0DAE3346E594E8D78176A139A928F88',
      name: 'Cosmos',
      display: 'atom',
      symbol: 'ATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4366',
            base_denom: 'uatom',
            chain_name: 'cosmoshubtestnet'
          },
          chain: {
            channel_id: 'channel-7'
          }
        }]
    },
    {
      description: 'Eden token definition',
      denom_units: [
        {
          denom: 'ibc/AC910FF5DC8816CA6C92C7DCE84655FAF81D4E70A218C2BC048A29D66D85F91A',
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
      base: 'ibc/AC910FF5DC8816CA6C92C7DCE84655FAF81D4E70A218C2BC048A29D66D85F91A',
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
            channel_id: 'channel-52',
            base_denom: 'ueden',
            chain_name: 'elystestnet'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'The controlled staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/9B5FB81FDBC0A3A2F707A4B3C217B4E7FF7CB24830F4502D9410D5EA475097D4',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      base: 'ibc/9B5FB81FDBC0A3A2F707A4B3C217B4E7FF7CB24830F4502D9410D5EA475097D4',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-222',
            base_denom: 'ustake',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'Love is a test tokenfactory asset controlled by the Strangelove Team',
      denom_units: [{
          denom: 'ibc/F94A6898C5451A2C79CD168A40E63D6FF280DF46704B571E68CE3EDAE59C65F6',
          exponent: 0,
          aliases: ['ulove']
        }, {
          denom: 'love',
          exponent: 6
        }],
      base: 'ibc/F94A6898C5451A2C79CD168A40E63D6FF280DF46704B571E68CE3EDAE59C65F6',
      display: 'love',
      name: 'Love',
      symbol: 'LOVE',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-222',
            base_denom: 'ulove',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/AAF322A78A0E34B76CDA05BA9AE96DC1521F9E103EC576AB9931116B2AB8C26B',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/AAF322A78A0E34B76CDA05BA9AE96DC1521F9E103EC576AB9931116B2AB8C26B',
      display: 'usdy',
      name: 'Ondo US Dollar Yield',
      symbol: 'USDY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdy.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-222',
            base_denom: 'ausdy',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    }
  ]
};
export default assets;
    