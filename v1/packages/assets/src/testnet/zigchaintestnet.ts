import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'zigchaintestnet',
  assets: [
    {
      description: 'The controlled staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/EA033D3F393DF62365465263D1E22611DC052720EF62DAC2F7A0ABA41A235E0E',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      base: 'ibc/EA033D3F393DF62365465263D1E22611DC052720EF62DAC2F7A0ABA41A235E0E',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-664',
            base_denom: 'ustake',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-35'
          }
        }]
    },
    {
      description: 'Love is a test tokenfactory asset controlled by the Strangelove Team',
      denom_units: [{
          denom: 'ibc/5B3B61D7EACB8A8CB10E51476849B0C79B1A9C9EBA90B0DE4FB85DACF7431478',
          exponent: 0,
          aliases: ['ulove']
        }, {
          denom: 'love',
          exponent: 6
        }],
      base: 'ibc/5B3B61D7EACB8A8CB10E51476849B0C79B1A9C9EBA90B0DE4FB85DACF7431478',
      display: 'love',
      name: 'Love',
      symbol: 'LOVE',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-664',
            base_denom: 'ulove',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-35'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/E15FB403FE7A861FC2C8F117F6576B7316EDEB7DA61B24A6867ED3DEF376111F',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/E15FB403FE7A861FC2C8F117F6576B7316EDEB7DA61B24A6867ED3DEF376111F',
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
            channel_id: 'channel-664',
            base_denom: 'ausdy',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-35'
          }
        }]
    },
    {
      description: 'The controlled staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/EA033D3F393DF62365465263D1E22611DC052720EF62DAC2F7A0ABA41A235E0E',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      base: 'ibc/EA033D3F393DF62365465263D1E22611DC052720EF62DAC2F7A0ABA41A235E0E',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-664',
            base_denom: 'ustake',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-35'
          }
        }]
    },
    {
      description: 'Love is a test tokenfactory asset controlled by the Strangelove Team',
      denom_units: [{
          denom: 'ibc/5B3B61D7EACB8A8CB10E51476849B0C79B1A9C9EBA90B0DE4FB85DACF7431478',
          exponent: 0,
          aliases: ['ulove']
        }, {
          denom: 'love',
          exponent: 6
        }],
      base: 'ibc/5B3B61D7EACB8A8CB10E51476849B0C79B1A9C9EBA90B0DE4FB85DACF7431478',
      display: 'love',
      name: 'Love',
      symbol: 'LOVE',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-664',
            base_denom: 'ulove',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-35'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/E15FB403FE7A861FC2C8F117F6576B7316EDEB7DA61B24A6867ED3DEF376111F',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/E15FB403FE7A861FC2C8F117F6576B7316EDEB7DA61B24A6867ED3DEF376111F',
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
            channel_id: 'channel-664',
            base_denom: 'ausdy',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-35'
          }
        }]
    }
  ]
};
export default assets;
    