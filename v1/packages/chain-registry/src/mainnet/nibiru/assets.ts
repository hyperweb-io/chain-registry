import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'nibiru',
  assets: [
    {
      name: 'Nibiru',
      description: 'The native token of Nibiru blockchain',
      extended_description: 'Nibiru is a smart contract ecosystem with a high-performance, EVM-equivalent execution layer. Nibiru is engineered to meet the growing demand for versatile, scalable, and easy-to-use Web3 applications.',
      socials: {
        website: 'https://nibiru.fi',
        twitter: 'https://twitter.com/nibiruchain'
      },
      denom_units: [
        {
          denom: 'unibi',
          exponent: 0
        },
        {
          denom: 'nibi',
          exponent: 6
        },
        {
          denom: 'attonibi',
          exponent: 18
        }
      ],
      base: 'unibi',
      display: 'nibi',
      symbol: 'NIBI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg'
      },
      coingecko_id: 'nibiru',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg',
          theme: {
            primary_color_hex: '#14c0ce'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      name: 'Liquid Staked Nibiru (Eris)',
      description: 'Liquid Staked Nibiru (Eris)',
      extended_description: 'Liquid Staked Nibiru, powered by Eris Protocol\'s amplifier contracts. Nibiru is a smart contract ecosystem with a high-performance, EVM-equivalent execution layer. Nibiru is engineered to meet the growing demand for versatile, scalable, and easy-to-use Web3 applications.',
      socials: {
        website: 'https://nibiru.fi/docs/learn/liquid-stake/',
        twitter: 'https://x.com/eris_protocol'
      },
      denom_units: [{
          denom: 'tf/nibi1udqqx30cw8nwjxtl4l28ym9hhrp933zlq8dqxfjzcdhvl8y24zcqpzmh8m/ampNIBI',
          exponent: 0
        }, {
          denom: 'stNIBI',
          exponent: 6
        }],
      base: 'tf/nibi1udqqx30cw8nwjxtl4l28ym9hhrp933zlq8dqxfjzcdhvl8y24zcqpzmh8m/ampNIBI',
      display: 'stNIBI',
      symbol: 'stNIBI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/stnibi-logo-circle-500x500.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/stnibi-logo-circle-500x500.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/stnibi-logo-circle-500x500.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/stnibi-logo-circle-500x500.svg',
          theme: {
            primary_color_hex: '#14c0ce'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'nibiru',
            base_denom: 'unibi'
          },
          provider: 'Eris Protocol'
        }]
    },
    {
      name: 'Noble USDC',
      description: 'Noble USDC on Nibiru',
      denom_units: [{
          denom: 'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
          exponent: 0
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      base: 'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
      display: 'usdc',
      symbol: 'USDC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          theme: {
            circle: true,
            primary_color_hex: '#2775CA'
          },
          image_sync: {
            chain_name: 'noble',
            base_denom: 'uusdc'
          }
        }],
      type_asset: 'ics20',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'noble',
            base_denom: 'uusdc',
            channel_id: 'channel-67'
          },
          chain: {
            channel_id: 'channel-2',
            path: 'transfer/channel-2/uusdc'
          }
        }],
      coingecko_id: 'usd-coin'
    },
    {
      name: 'Astrovault token',
      description: 'AXV',
      extended_description: 'AXV is the Astrovault token.',
      socials: {
        website: 'https://astrovault.io/',
        twitter: 'https://x.com/axvdex'
      },
      denom_units: [{
          denom: 'tf/nibi1vetfuua65frvf6f458xgtjerf0ra7wwjykrdpuyn0jur5x07awxsfka0ga/axv',
          exponent: 0
        }, {
          denom: 'AXV',
          exponent: 6
        }],
      base: 'tf/nibi1vetfuua65frvf6f458xgtjerf0ra7wwjykrdpuyn0jur5x07awxsfka0ga/axv',
      display: 'AXV',
      symbol: 'AXV',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/axv.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/axv.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/axv.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/axv.svg',
          image_sync: {
            chain_name: 'neutron',
            base_denom: 'cw20:neutron10dxyft3nv4vpxh5vrpn0xw8geej8dw3g39g7nqp8mrm307ypssksau29af'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      name: 'Astrovault Nibiru LST (xNIBI)',
      description: 'Astrovault Nibiru LST (xNIBI)',
      address: 'nibi1cehpv50vl90g9qkwwny8mw7txw79zs6f7wsfe8ey7dgp238gpy4qhdqjhm',
      extended_description: 'xNIBI is a liquid staking derivative for NIBI created by Astrovault.',
      socials: {
        website: 'https://astrovault.io/',
        twitter: 'https://x.com/axvdex'
      },
      denom_units: [{
          denom: 'cw20:nibi1cehpv50vl90g9qkwwny8mw7txw79zs6f7wsfe8ey7dgp238gpy4qhdqjhm',
          exponent: 0
        }, {
          denom: 'xNIBI',
          exponent: 6
        }],
      base: 'cw20:nibi1cehpv50vl90g9qkwwny8mw7txw79zs6f7wsfe8ey7dgp238gpy4qhdqjhm',
      display: 'xNIBI',
      symbol: 'xNIBI',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/0004_astrovault-xnibi.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/0004_astrovault-xnibi.svg'
        }],
      type_asset: 'cw20'
    },
    {
      name: 'uoprek',
      description: 'uoprek',
      denom_units: [{
          denom: 'tf/nibi149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qkyhy0t/uoprek',
          exponent: 0
        }],
      base: 'tf/nibi149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qkyhy0t/uoprek',
      display: 'tf/nibi149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qkyhy0t/uoprek',
      symbol: 'UOPREK',
      type_asset: 'sdk.coin'
    },
    {
      name: 'utestate',
      description: 'utestate',
      denom_units: [{
          denom: 'tf/nibi1lp28kx3gz0prsztl024z730ufkg3alahaq3e7a6gae22nk0dqdvsyrrgqw/utestate',
          exponent: 0
        }],
      base: 'tf/nibi1lp28kx3gz0prsztl024z730ufkg3alahaq3e7a6gae22nk0dqdvsyrrgqw/utestate',
      display: 'tf/nibi1lp28kx3gz0prsztl024z730ufkg3alahaq3e7a6gae22nk0dqdvsyrrgqw/utestate',
      symbol: 'UTESTATE',
      type_asset: 'sdk.coin'
    },
    {
      name: 'npp',
      description: 'npp',
      denom_units: [{
          denom: 'tf/nibi1xpp7yn0tce62ffattws3gpd6v0tah0mlevef3ej3r4pnfvsehcgqk3jvxq/NPP',
          exponent: 0
        }],
      base: 'tf/nibi1xpp7yn0tce62ffattws3gpd6v0tah0mlevef3ej3r4pnfvsehcgqk3jvxq/NPP',
      display: 'tf/nibi1xpp7yn0tce62ffattws3gpd6v0tah0mlevef3ej3r4pnfvsehcgqk3jvxq/NPP',
      symbol: 'NPP',
      type_asset: 'sdk.coin'
    }
  ]
};
export default info;