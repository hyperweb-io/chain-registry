import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'nibiru',
  assets: [
    {
      name: 'Nibiru',
      description: 'The native token of Nibiru blockchain',
      extendedDescription: 'Nibiru is a smart contract ecosystem with a high-performance, EVM-equivalent execution layer. Nibiru is engineered to meet the growing demand for versatile, scalable, and easy-to-use Web3 applications.',
      socials: {
        website: 'https://nibiru.fi',
        twitter: 'https://twitter.com/nibiruchain'
      },
      denomUnits: [
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
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg'
      },
      coingeckoId: 'nibiru',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg',
          theme: {
            primaryColorHex: '#14c0ce'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      name: 'Liquid Staked Nibiru (Eris)',
      description: 'Liquid Staked Nibiru (Eris)',
      extendedDescription: 'Liquid Staked Nibiru, powered by Eris Protocol\'s amplifier contracts. Nibiru is a smart contract ecosystem with a high-performance, EVM-equivalent execution layer. Nibiru is engineered to meet the growing demand for versatile, scalable, and easy-to-use Web3 applications.',
      socials: {
        website: 'https://nibiru.fi/docs/learn/liquid-stake/',
        twitter: 'https://x.com/eris_protocol'
      },
      denomUnits: [{
          denom: 'tf/nibi1udqqx30cw8nwjxtl4l28ym9hhrp933zlq8dqxfjzcdhvl8y24zcqpzmh8m/ampNIBI',
          exponent: 0
        }, {
          denom: 'stNIBI',
          exponent: 6
        }],
      base: 'tf/nibi1udqqx30cw8nwjxtl4l28ym9hhrp933zlq8dqxfjzcdhvl8y24zcqpzmh8m/ampNIBI',
      display: 'stNIBI',
      symbol: 'stNIBI',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/stnibi-logo-circle-500x500.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/stnibi-logo-circle-500x500.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/stnibi-logo-circle-500x500.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/stnibi-logo-circle-500x500.svg',
          theme: {
            primaryColorHex: '#14c0ce'
          }
        }],
      typeAsset: 'sdk.coin',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'nibiru',
            baseDenom: 'unibi'
          },
          provider: 'Eris Protocol'
        }]
    },
    {
      name: 'Noble USDC',
      description: 'Noble USDC on Nibiru',
      denomUnits: [{
          denom: 'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
          exponent: 0
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      base: 'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
      display: 'usdc',
      symbol: 'USDC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          theme: {
            circle: true,
            primaryColorHex: '#2775CA'
          },
          imageSync: {
            chainName: 'noble',
            baseDenom: 'uusdc'
          }
        }],
      typeAsset: 'ics20',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdc',
            channelId: 'channel-67'
          },
          chain: {
            channelId: 'channel-2',
            path: 'transfer/channel-2/uusdc'
          }
        }],
      coingeckoId: 'usd-coin'
    },
    {
      name: 'Astrovault token',
      description: 'AXV',
      extendedDescription: 'AXV is the Astrovault token.',
      socials: {
        website: 'https://astrovault.io/',
        twitter: 'https://x.com/axvdex'
      },
      denomUnits: [{
          denom: 'tf/nibi1vetfuua65frvf6f458xgtjerf0ra7wwjykrdpuyn0jur5x07awxsfka0ga/axv',
          exponent: 0
        }, {
          denom: 'AXV',
          exponent: 6
        }],
      base: 'tf/nibi1vetfuua65frvf6f458xgtjerf0ra7wwjykrdpuyn0jur5x07awxsfka0ga/axv',
      display: 'AXV',
      symbol: 'AXV',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/axv.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/axv.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/axv.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/axv.svg',
          imageSync: {
            chainName: 'neutron',
            baseDenom: 'cw20:neutron10dxyft3nv4vpxh5vrpn0xw8geej8dw3g39g7nqp8mrm307ypssksau29af'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      name: 'Astrovault Nibiru LST (xNIBI)',
      description: 'Astrovault Nibiru LST (xNIBI)',
      address: 'nibi1cehpv50vl90g9qkwwny8mw7txw79zs6f7wsfe8ey7dgp238gpy4qhdqjhm',
      extendedDescription: 'xNIBI is a liquid staking derivative for NIBI created by Astrovault.',
      socials: {
        website: 'https://astrovault.io/',
        twitter: 'https://x.com/axvdex'
      },
      denomUnits: [{
          denom: 'cw20:nibi1cehpv50vl90g9qkwwny8mw7txw79zs6f7wsfe8ey7dgp238gpy4qhdqjhm',
          exponent: 0
        }, {
          denom: 'xNIBI',
          exponent: 6
        }],
      base: 'cw20:nibi1cehpv50vl90g9qkwwny8mw7txw79zs6f7wsfe8ey7dgp238gpy4qhdqjhm',
      display: 'xNIBI',
      symbol: 'xNIBI',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/0004_astrovault-xnibi.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/0004_astrovault-xnibi.svg'
        }],
      typeAsset: 'cw20'
    },
    {
      name: 'uoprek',
      description: 'uoprek',
      denomUnits: [{
          denom: 'tf/nibi149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qkyhy0t/uoprek',
          exponent: 0
        }],
      base: 'tf/nibi149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qkyhy0t/uoprek',
      display: 'tf/nibi149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qkyhy0t/uoprek',
      symbol: 'UOPREK',
      typeAsset: 'sdk.coin'
    },
    {
      name: 'utestate',
      description: 'utestate',
      denomUnits: [{
          denom: 'tf/nibi1lp28kx3gz0prsztl024z730ufkg3alahaq3e7a6gae22nk0dqdvsyrrgqw/utestate',
          exponent: 0
        }],
      base: 'tf/nibi1lp28kx3gz0prsztl024z730ufkg3alahaq3e7a6gae22nk0dqdvsyrrgqw/utestate',
      display: 'tf/nibi1lp28kx3gz0prsztl024z730ufkg3alahaq3e7a6gae22nk0dqdvsyrrgqw/utestate',
      symbol: 'UTESTATE',
      typeAsset: 'sdk.coin'
    },
    {
      name: 'npp',
      description: 'npp',
      denomUnits: [{
          denom: 'tf/nibi1xpp7yn0tce62ffattws3gpd6v0tah0mlevef3ej3r4pnfvsehcgqk3jvxq/NPP',
          exponent: 0
        }],
      base: 'tf/nibi1xpp7yn0tce62ffattws3gpd6v0tah0mlevef3ej3r4pnfvsehcgqk3jvxq/NPP',
      display: 'tf/nibi1xpp7yn0tce62ffattws3gpd6v0tah0mlevef3ej3r4pnfvsehcgqk3jvxq/NPP',
      symbol: 'NPP',
      typeAsset: 'sdk.coin'
    }
  ]
};
export default info;