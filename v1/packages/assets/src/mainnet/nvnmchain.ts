import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'nvnmchain',
  assets: [
    {
      description: 'The native token of MANTRA',
      denom_units: [{
          denom: 'ibc/5F4B5CA93AEF7604997725F3CD016F8B6CB2F709E919EF21A854416EEB04991F',
          exponent: 0,
          aliases: ['amantra']
        }, {
          denom: 'mantra',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/5F4B5CA93AEF7604997725F3CD016F8B6CB2F709E919EF21A854416EEB04991F',
      name: 'MANTRA Chain',
      display: 'mantra',
      symbol: 'MANTRA',
      coingecko_id: 'mantra',
      keywords: [
        'rwa',
        'wasm',
        'staking'
      ],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg',
          theme: {
            circle: true
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Darkmatt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Darkmatt.svg',
          theme: {
            dark_mode: true,
            circle: true
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-WHT.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-WHT.svg',
          theme: {
            dark_mode: false,
            circle: true
          }
        }
      ],
      socials: {
        website: 'https://www.mantrachain.io/',
        x: 'https://x.com/MANTRA_Chain'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'amantra',
            chain_name: 'mantrachain'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'Wrapped mantraUSD, an ERC20 on MANTRA Chain used as the gas token on NVNM Chain.',
      denom_units: [{
          denom: 'ibc/93575DF9D4BC5B2C85D967DE020E5DEA1863FDD108AD509A36DA6C83E3398227',
          exponent: 0,
          aliases: ['erc20:0x5EB619e3dcA586c321Bb83282D2916577B5c383d']
        }, {
          denom: 'wmantrausd',
          exponent: 18
        }],
      type_asset: 'erc20',
      address: '0x5EB619e3dcA586c321Bb83282D2916577B5c383d',
      base: 'ibc/93575DF9D4BC5B2C85D967DE020E5DEA1863FDD108AD509A36DA6C83E3398227',
      name: 'Wrapped mantraUSD',
      display: 'wmantrausd',
      symbol: 'wmantraUSD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/wmantraUSD-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/wmantraUSD-token.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/wmantraUSD-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/wmantraUSD-token.svg',
          theme: {
            circle: true
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'erc20:0x5EB619e3dcA586c321Bb83282D2916577B5c383d',
            chain_name: 'mantrachain'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'The native token of MANTRA',
      denom_units: [{
          denom: 'ibc/5F4B5CA93AEF7604997725F3CD016F8B6CB2F709E919EF21A854416EEB04991F',
          exponent: 0,
          aliases: ['amantra']
        }, {
          denom: 'mantra',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/5F4B5CA93AEF7604997725F3CD016F8B6CB2F709E919EF21A854416EEB04991F',
      name: 'MANTRA Chain',
      display: 'mantra',
      symbol: 'MANTRA',
      coingecko_id: 'mantra',
      keywords: [
        'rwa',
        'wasm',
        'staking'
      ],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg',
          theme: {
            circle: true
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Darkmatt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Darkmatt.svg',
          theme: {
            dark_mode: true,
            circle: true
          }
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-WHT.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-WHT.svg',
          theme: {
            dark_mode: false,
            circle: true
          }
        }
      ],
      socials: {
        website: 'https://www.mantrachain.io/',
        x: 'https://x.com/MANTRA_Chain'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'amantra',
            chain_name: 'mantrachain'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'Wrapped mantraUSD, an ERC20 on MANTRA Chain used as the gas token on NVNM Chain.',
      denom_units: [{
          denom: 'ibc/93575DF9D4BC5B2C85D967DE020E5DEA1863FDD108AD509A36DA6C83E3398227',
          exponent: 0,
          aliases: ['erc20:0x5EB619e3dcA586c321Bb83282D2916577B5c383d']
        }, {
          denom: 'wmantrausd',
          exponent: 18
        }],
      type_asset: 'erc20',
      address: '0x5EB619e3dcA586c321Bb83282D2916577B5c383d',
      base: 'ibc/93575DF9D4BC5B2C85D967DE020E5DEA1863FDD108AD509A36DA6C83E3398227',
      name: 'Wrapped mantraUSD',
      display: 'wmantrausd',
      symbol: 'wmantraUSD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/wmantraUSD-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/wmantraUSD-token.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/wmantraUSD-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/wmantraUSD-token.svg',
          theme: {
            circle: true
          }
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-9',
            base_denom: 'erc20:0x5EB619e3dcA586c321Bb83282D2916577B5c383d',
            chain_name: 'mantrachain'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    }
  ]
};
export default assets;
    