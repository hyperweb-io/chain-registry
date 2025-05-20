import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'neutrontestnet',
  assets: [
    {
      description: 'The native staking token of Babylon.',
      denom_units: [{
          denom: 'ibc/6EE6B25F18B695CF13D211B084904B1F27B9B469F9B90617699CECD67563F305',
          exponent: 0,
          aliases: ['ubbn']
        }, {
          denom: 'BABY',
          exponent: 6
        }],
      base: 'ibc/6EE6B25F18B695CF13D211B084904B1F27B9B469F9B90617699CECD67563F305',
      name: 'Babylon Testnet',
      display: 'BABY',
      symbol: 'BABY',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ubbn',
            chain_name: 'babylontestnet'
          },
          chain: {
            channel_id: 'channel-1651'
          }
        }]
    },
    {
      description: 'The native staking token of Babylon.',
      denom_units: [{
          denom: 'ibc/6EE6B25F18B695CF13D211B084904B1F27B9B469F9B90617699CECD67563F305',
          exponent: 0,
          aliases: ['ubbn']
        }, {
          denom: 'BABY',
          exponent: 6
        }],
      base: 'ibc/6EE6B25F18B695CF13D211B084904B1F27B9B469F9B90617699CECD67563F305',
      name: 'Babylon Testnet',
      display: 'BABY',
      symbol: 'BABY',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ubbn',
            chain_name: 'babylontestnet'
          },
          chain: {
            channel_id: 'channel-1651'
          }
        }]
    },
    {
      description: 'The controlled staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/C1CCDE2852D142DCDD5760DAB22163D4C2B22E6C54417265AC9C6CA3642CFD1B',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      base: 'ibc/C1CCDE2852D142DCDD5760DAB22163D4C2B22E6C54417265AC9C6CA3642CFD1B',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-43',
            base_denom: 'ustake',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-496'
          }
        }]
    },
    {
      description: 'Love is a test tokenfactory asset controlled by the Strangelove Team',
      denom_units: [{
          denom: 'ibc/94EB4409DEB59D927FF3CA044B3E1058604A2928EE4AF7CF360FB0148D4DA4A9',
          exponent: 0,
          aliases: ['ulove']
        }, {
          denom: 'love',
          exponent: 6
        }],
      base: 'ibc/94EB4409DEB59D927FF3CA044B3E1058604A2928EE4AF7CF360FB0148D4DA4A9',
      display: 'love',
      name: 'Love',
      symbol: 'LOVE',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-43',
            base_denom: 'ulove',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-496'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/6AFBF88ABC99033E07C6486C85E2E6D953FB67C4FA6ED7062D46ECF748205DAB',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/6AFBF88ABC99033E07C6486C85E2E6D953FB67C4FA6ED7062D46ECF748205DAB',
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
            channel_id: 'channel-43',
            base_denom: 'ausdy',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-496'
          }
        }]
    },
    {
      description: 'The native token of Nois',
      denom_units: [{
          denom: 'ibc/26139E488F510BDA8DDE5614D358A38502BDA061954B8D10ADEFC4EAA58552FF',
          exponent: 0,
          aliases: ['unois']
        }, {
          denom: 'nois',
          exponent: 6
        }],
      base: 'ibc/26139E488F510BDA8DDE5614D358A38502BDA061954B8D10ADEFC4EAA58552FF',
      name: 'Nois',
      display: 'nois',
      symbol: 'NOIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
      },
      keywords: [
        'nois',
        'randomness',
        'drand',
        'wasm'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-40',
            base_denom: 'unois',
            chain_name: 'noistestnet'
          },
          chain: {
            channel_id: 'channel-133'
          }
        }]
    },
    {
      description: 'The native token of Nolus chain',
      denom_units: [{
          denom: 'ibc/E808FAAE7ADDA37453A8F0F67D74669F6580CBA5EF0F7889D46FB02D282098E3',
          exponent: 0,
          aliases: ['unls']
        }, {
          denom: 'nls',
          exponent: 6
        }],
      base: 'ibc/E808FAAE7ADDA37453A8F0F67D74669F6580CBA5EF0F7889D46FB02D282098E3',
      name: 'Nolus',
      display: 'nls',
      symbol: 'NLS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'unls',
            chain_name: 'nolustestnet'
          },
          chain: {
            channel_id: 'channel-1061'
          }
        }]
    },
    {
      description: 'The controlled staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/C1CCDE2852D142DCDD5760DAB22163D4C2B22E6C54417265AC9C6CA3642CFD1B',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      base: 'ibc/C1CCDE2852D142DCDD5760DAB22163D4C2B22E6C54417265AC9C6CA3642CFD1B',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-43',
            base_denom: 'ustake',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-496'
          }
        }]
    },
    {
      description: 'Love is a test tokenfactory asset controlled by the Strangelove Team',
      denom_units: [{
          denom: 'ibc/94EB4409DEB59D927FF3CA044B3E1058604A2928EE4AF7CF360FB0148D4DA4A9',
          exponent: 0,
          aliases: ['ulove']
        }, {
          denom: 'love',
          exponent: 6
        }],
      base: 'ibc/94EB4409DEB59D927FF3CA044B3E1058604A2928EE4AF7CF360FB0148D4DA4A9',
      display: 'love',
      name: 'Love',
      symbol: 'LOVE',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-43',
            base_denom: 'ulove',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-496'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/6AFBF88ABC99033E07C6486C85E2E6D953FB67C4FA6ED7062D46ECF748205DAB',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/6AFBF88ABC99033E07C6486C85E2E6D953FB67C4FA6ED7062D46ECF748205DAB',
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
            channel_id: 'channel-43',
            base_denom: 'ausdy',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-496'
          }
        }]
    },
    {
      description: 'The native token of Nois',
      denom_units: [{
          denom: 'ibc/26139E488F510BDA8DDE5614D358A38502BDA061954B8D10ADEFC4EAA58552FF',
          exponent: 0,
          aliases: ['unois']
        }, {
          denom: 'nois',
          exponent: 6
        }],
      base: 'ibc/26139E488F510BDA8DDE5614D358A38502BDA061954B8D10ADEFC4EAA58552FF',
      name: 'Nois',
      display: 'nois',
      symbol: 'NOIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
      },
      keywords: [
        'nois',
        'randomness',
        'drand',
        'wasm'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-40',
            base_denom: 'unois',
            chain_name: 'noistestnet'
          },
          chain: {
            channel_id: 'channel-133'
          }
        }]
    },
    {
      description: 'The native token of Nolus chain',
      denom_units: [{
          denom: 'ibc/E808FAAE7ADDA37453A8F0F67D74669F6580CBA5EF0F7889D46FB02D282098E3',
          exponent: 0,
          aliases: ['unls']
        }, {
          denom: 'nls',
          exponent: 6
        }],
      base: 'ibc/E808FAAE7ADDA37453A8F0F67D74669F6580CBA5EF0F7889D46FB02D282098E3',
      name: 'Nolus',
      display: 'nls',
      symbol: 'NLS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'unls',
            chain_name: 'nolustestnet'
          },
          chain: {
            channel_id: 'channel-1061'
          }
        }]
    }
  ]
};
export default assets;
    