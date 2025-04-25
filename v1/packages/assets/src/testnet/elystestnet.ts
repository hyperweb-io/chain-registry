import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'elystestnet',
  assets: [
    {
      description: 'The native staking and governance token of the Theta testnet version of the Cosmos Hub.',
      denom_units: [{
          denom: 'ibc/E2D2F6ADCC68AA3384B2F5DFACCA437923D137C14E86FB8A10207CF3BED0C8D4',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/E2D2F6ADCC68AA3384B2F5DFACCA437923D137C14E86FB8A10207CF3BED0C8D4',
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
            channel_id: 'channel-3302',
            base_denom: 'uatom',
            chain_name: 'cosmoshubtestnet'
          },
          chain: {
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Theta testnet version of the Cosmos Hub.',
      denom_units: [{
          denom: 'ibc/E2D2F6ADCC68AA3384B2F5DFACCA437923D137C14E86FB8A10207CF3BED0C8D4',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/E2D2F6ADCC68AA3384B2F5DFACCA437923D137C14E86FB8A10207CF3BED0C8D4',
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
            channel_id: 'channel-3302',
            base_denom: 'uatom',
            chain_name: 'cosmoshubtestnet'
          },
          chain: {
            channel_id: 'channel-16'
          }
        }]
    },
    {
      description: 'The controlled staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/6F68FCA68B0C4AF34D0C9875541BB993A395D6BAF40A56DB1B105D09C180EB33',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      base: 'ibc/6F68FCA68B0C4AF34D0C9875541BB993A395D6BAF40A56DB1B105D09C180EB33',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'ustake',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }]
    },
    {
      description: 'Love is a test tokenfactory asset controlled by the Strangelove Team',
      denom_units: [{
          denom: 'ibc/3BEEAE00FEA32C78523A0D118CF6C05068CF6FF0537325E7297A2187D6C2FCAF',
          exponent: 0,
          aliases: ['ulove']
        }, {
          denom: 'love',
          exponent: 6
        }],
      base: 'ibc/3BEEAE00FEA32C78523A0D118CF6C05068CF6FF0537325E7297A2187D6C2FCAF',
      display: 'love',
      name: 'Love',
      symbol: 'LOVE',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'ulove',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/3F2D5DD627DB6531052E8D3D4765293F87C1D92C4ABB23B2EF19B385BB3A48A5',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/3F2D5DD627DB6531052E8D3D4765293F87C1D92C4ABB23B2EF19B385BB3A48A5',
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
            channel_id: 'channel-19',
            base_denom: 'ausdy',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }]
    },
    {
      description: 'The native token of Prysm',
      denom_units: [{
          denom: 'ibc/7DBB3E2B6FCB2E6887DF77B0ED32CC659B95D6044C0C97E148811EA44746CA60',
          exponent: 0,
          aliases: ['uprysm']
        }, {
          denom: 'prysm',
          exponent: 6
        }],
      base: 'ibc/7DBB3E2B6FCB2E6887DF77B0ED32CC659B95D6044C0C97E148811EA44746CA60',
      display: 'prysm',
      name: 'Prysm',
      symbol: 'PRYSM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/prysmdevnet/images/prysm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/prysmdevnet/images/prysm.svg',
          theme: {
            circle: true,
            primary_color_hex: '#cf654f'
          }
        }],
      socials: {
        website: 'https://www.prysm.network/',
        twitter: 'https://twitter.com/PrysmNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'uprysm',
            chain_name: 'prysmdevnet'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'The native token of XRPL EVM Testnet',
      denom_units: [{
          denom: 'ibc/E925EC46A2F4B84815DB7218ADF272989DADD18372C779F68DB31A6BC4F91B7D',
          exponent: 0,
          aliases: ['axrp']
        }, {
          denom: 'XRP',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/E925EC46A2F4B84815DB7218ADF272989DADD18372C779F68DB31A6BC4F91B7D',
      name: 'XRP',
      display: 'XRP',
      symbol: 'XRP',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      keywords: [
        'xrpl',
        'evm',
        'testnet',
        'sidechain',
        'ripple',
        'peersyst',
        'cosmos',
        'evmos',
        'axelar',
        'xrp',
        'xrplevm'
      ],
      socials: {
        website: 'https://xrplevm.org',
        twitter: 'https://twitter.com/Peersyst'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'axrp',
            chain_name: 'xrplevmtestnet'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'The controlled staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/6F68FCA68B0C4AF34D0C9875541BB993A395D6BAF40A56DB1B105D09C180EB33',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      base: 'ibc/6F68FCA68B0C4AF34D0C9875541BB993A395D6BAF40A56DB1B105D09C180EB33',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'ustake',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }]
    },
    {
      description: 'Love is a test tokenfactory asset controlled by the Strangelove Team',
      denom_units: [{
          denom: 'ibc/3BEEAE00FEA32C78523A0D118CF6C05068CF6FF0537325E7297A2187D6C2FCAF',
          exponent: 0,
          aliases: ['ulove']
        }, {
          denom: 'love',
          exponent: 6
        }],
      base: 'ibc/3BEEAE00FEA32C78523A0D118CF6C05068CF6FF0537325E7297A2187D6C2FCAF',
      display: 'love',
      name: 'Love',
      symbol: 'LOVE',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'ulove',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/3F2D5DD627DB6531052E8D3D4765293F87C1D92C4ABB23B2EF19B385BB3A48A5',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/3F2D5DD627DB6531052E8D3D4765293F87C1D92C4ABB23B2EF19B385BB3A48A5',
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
            channel_id: 'channel-19',
            base_denom: 'ausdy',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }]
    },
    {
      description: 'The native token of XRPL EVM Testnet',
      denom_units: [{
          denom: 'ibc/E925EC46A2F4B84815DB7218ADF272989DADD18372C779F68DB31A6BC4F91B7D',
          exponent: 0,
          aliases: ['axrp']
        }, {
          denom: 'XRP',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/E925EC46A2F4B84815DB7218ADF272989DADD18372C779F68DB31A6BC4F91B7D',
      name: 'XRP',
      display: 'XRP',
      symbol: 'XRP',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      keywords: [
        'xrpl',
        'evm',
        'testnet',
        'sidechain',
        'ripple',
        'peersyst',
        'cosmos',
        'evmos',
        'axelar',
        'xrp',
        'xrplevm'
      ],
      socials: {
        website: 'https://xrplevm.org',
        twitter: 'https://twitter.com/Peersyst'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'axrp',
            chain_name: 'xrplevmtestnet'
          },
          chain: {
            channel_id: 'channel-10'
          }
        }]
    },
    {
      description: 'The native token of Prysm',
      denom_units: [{
          denom: 'ibc/7DBB3E2B6FCB2E6887DF77B0ED32CC659B95D6044C0C97E148811EA44746CA60',
          exponent: 0,
          aliases: ['uprysm']
        }, {
          denom: 'prysm',
          exponent: 6
        }],
      base: 'ibc/7DBB3E2B6FCB2E6887DF77B0ED32CC659B95D6044C0C97E148811EA44746CA60',
      display: 'prysm',
      name: 'Prysm',
      symbol: 'PRYSM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/prysmdevnet/images/prysm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/prysmdevnet/images/prysm.svg',
          theme: {
            circle: true,
            primary_color_hex: '#cf654f'
          }
        }],
      socials: {
        website: 'https://www.prysm.network/',
        twitter: 'https://twitter.com/PrysmNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'uprysm',
            chain_name: 'prysmdevnet'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    }
  ]
};
export default assets;
    