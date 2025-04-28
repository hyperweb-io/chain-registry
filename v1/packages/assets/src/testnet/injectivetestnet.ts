import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'injectivetestnet',
  assets: [
    {
      description: 'The native token of Nois',
      denom_units: [{
          denom: 'ibc/A190CF3FC762D25A46A49E7CB0E998F4A494C7F64A356DA17C25A2D8B0069D3B',
          exponent: 0,
          aliases: ['unois']
        }, {
          denom: 'nois',
          exponent: 6
        }],
      base: 'ibc/A190CF3FC762D25A46A49E7CB0E998F4A494C7F64A356DA17C25A2D8B0069D3B',
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
            channel_id: 'channel-33',
            base_denom: 'unois',
            chain_name: 'noistestnet'
          },
          chain: {
            channel_id: 'channel-74'
          }
        }]
    },
    {
      description: 'The native token of XRPL EVM Testnet',
      denom_units: [{
          denom: 'ibc/F9EEDC0E75CD67E8A72314B287BE7A221C365DE0F3D19D3E3272F07332ED8C1E',
          exponent: 0,
          aliases: ['axrp']
        }, {
          denom: 'XRP',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/F9EEDC0E75CD67E8A72314B287BE7A221C365DE0F3D19D3E3272F07332ED8C1E',
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
            channel_id: 'channel-4',
            base_denom: 'axrp',
            chain_name: 'xrplevmtestnet'
          },
          chain: {
            channel_id: 'channel-77038'
          }
        }]
    },
    {
      description: 'The native token of Nois',
      denom_units: [{
          denom: 'ibc/A190CF3FC762D25A46A49E7CB0E998F4A494C7F64A356DA17C25A2D8B0069D3B',
          exponent: 0,
          aliases: ['unois']
        }, {
          denom: 'nois',
          exponent: 6
        }],
      base: 'ibc/A190CF3FC762D25A46A49E7CB0E998F4A494C7F64A356DA17C25A2D8B0069D3B',
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
            channel_id: 'channel-33',
            base_denom: 'unois',
            chain_name: 'noistestnet'
          },
          chain: {
            channel_id: 'channel-74'
          }
        }]
    },
    {
      description: 'The native token of XRPL EVM Testnet',
      denom_units: [{
          denom: 'ibc/F9EEDC0E75CD67E8A72314B287BE7A221C365DE0F3D19D3E3272F07332ED8C1E',
          exponent: 0,
          aliases: ['axrp']
        }, {
          denom: 'XRP',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/F9EEDC0E75CD67E8A72314B287BE7A221C365DE0F3D19D3E3272F07332ED8C1E',
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
            channel_id: 'channel-4',
            base_denom: 'axrp',
            chain_name: 'xrplevmtestnet'
          },
          chain: {
            channel_id: 'channel-77038'
          }
        }]
    }
  ]
};
export default assets;
    