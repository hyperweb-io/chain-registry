import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'nvnmchaintestnet',
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
      name: 'MANTRA Chain Dukong',
      display: 'mantra',
      symbol: 'MANTRA',
      keywords: [
        'rwa',
        'wasm',
        'staking',
        'testnet'
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg'
      },
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
            channel_id: 'channel-13',
            base_denom: 'amantra',
            chain_name: 'mantrachaintestnet2'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'Wrapped mantraUSD, an ERC20 on MANTRA Dukong testnet used as the gas token on NVNM Chain Testnet.',
      denom_units: [{
          denom: 'ibc/00E24F149F01782E2C423BDB114C98D6C657DFC583124389192187BF8DC3A1AD',
          exponent: 0,
          aliases: ['erc20:0x36A28B8C8FFD00bEE440dB8273D57451FBeAf767']
        }, {
          denom: 'wmantrausd',
          exponent: 18
        }],
      type_asset: 'erc20',
      address: '0x36A28B8C8FFD00bEE440dB8273D57451FBeAf767',
      base: 'ibc/00E24F149F01782E2C423BDB114C98D6C657DFC583124389192187BF8DC3A1AD',
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
            channel_id: 'channel-13',
            base_denom: 'erc20:0x36A28B8C8FFD00bEE440dB8273D57451FBeAf767',
            chain_name: 'mantrachaintestnet2'
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
      name: 'MANTRA Chain Dukong',
      display: 'mantra',
      symbol: 'MANTRA',
      keywords: [
        'rwa',
        'wasm',
        'staking',
        'testnet'
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg'
      },
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
            channel_id: 'channel-13',
            base_denom: 'amantra',
            chain_name: 'mantrachaintestnet2'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'Wrapped mantraUSD, an ERC20 on MANTRA Dukong testnet used as the gas token on NVNM Chain Testnet.',
      denom_units: [{
          denom: 'ibc/00E24F149F01782E2C423BDB114C98D6C657DFC583124389192187BF8DC3A1AD',
          exponent: 0,
          aliases: ['erc20:0x36A28B8C8FFD00bEE440dB8273D57451FBeAf767']
        }, {
          denom: 'wmantrausd',
          exponent: 18
        }],
      type_asset: 'erc20',
      address: '0x36A28B8C8FFD00bEE440dB8273D57451FBeAf767',
      base: 'ibc/00E24F149F01782E2C423BDB114C98D6C657DFC583124389192187BF8DC3A1AD',
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
            channel_id: 'channel-13',
            base_denom: 'erc20:0x36A28B8C8FFD00bEE440dB8273D57451FBeAf767',
            chain_name: 'mantrachaintestnet2'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    }
  ]
};
export default assets;
    