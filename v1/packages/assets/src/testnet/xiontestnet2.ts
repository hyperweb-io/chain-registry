import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'xiontestnet2',
  assets: [
    {
      description: 'The controlled staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/0CC1485F7DF4F335F6F416C46EDB77B09557EC7E5B7215BED40EB741D45FD6C8',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      base: 'ibc/0CC1485F7DF4F335F6F416C46EDB77B09557EC7E5B7215BED40EB741D45FD6C8',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-333',
            base_denom: 'ustake',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'Love is a test tokenfactory asset controlled by the Strangelove Team',
      denom_units: [{
          denom: 'ibc/A4DB4D17B664D8D4EE8FEE7C4B94CBA11BE6C2220CFD17D38B177623B4405144',
          exponent: 0,
          aliases: ['ulove']
        }, {
          denom: 'love',
          exponent: 6
        }],
      base: 'ibc/A4DB4D17B664D8D4EE8FEE7C4B94CBA11BE6C2220CFD17D38B177623B4405144',
      display: 'love',
      name: 'Love',
      symbol: 'LOVE',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-333',
            base_denom: 'ulove',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/441C99C902014BEFAB273290871973B8C0EAEAC141CD6574FCBD9232774C7EA5',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/441C99C902014BEFAB273290871973B8C0EAEAC141CD6574FCBD9232774C7EA5',
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
            channel_id: 'channel-333',
            base_denom: 'ausdy',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'The controlled staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/0CC1485F7DF4F335F6F416C46EDB77B09557EC7E5B7215BED40EB741D45FD6C8',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      base: 'ibc/0CC1485F7DF4F335F6F416C46EDB77B09557EC7E5B7215BED40EB741D45FD6C8',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-333',
            base_denom: 'ustake',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'Love is a test tokenfactory asset controlled by the Strangelove Team',
      denom_units: [{
          denom: 'ibc/A4DB4D17B664D8D4EE8FEE7C4B94CBA11BE6C2220CFD17D38B177623B4405144',
          exponent: 0,
          aliases: ['ulove']
        }, {
          denom: 'love',
          exponent: 6
        }],
      base: 'ibc/A4DB4D17B664D8D4EE8FEE7C4B94CBA11BE6C2220CFD17D38B177623B4405144',
      display: 'love',
      name: 'Love',
      symbol: 'LOVE',
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-333',
            base_denom: 'ulove',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/441C99C902014BEFAB273290871973B8C0EAEAC141CD6574FCBD9232774C7EA5',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/441C99C902014BEFAB273290871973B8C0EAEAC141CD6574FCBD9232774C7EA5',
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
            channel_id: 'channel-333',
            base_denom: 'ausdy',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-3'
          }
        }]
    }
  ]
};
export default assets;
    