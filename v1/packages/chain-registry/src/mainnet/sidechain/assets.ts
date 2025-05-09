import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'sidechain',
  assets: [
    {
      description: 'The native token of Side Chain.',
      denom_units: [{
          denom: 'uside',
          exponent: 0
        }, {
          denom: 'side',
          exponent: 6
        }],
      base: 'uside',
      name: 'Side Chain native token',
      display: 'side',
      symbol: 'SIDE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/side.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/side.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/side.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/side.svg',
          theme: {
            primary_color_hex: '#f7771a'
          }
        }],
      socials: {
        website: 'https://side.one',
        twitter: 'https://x.com/SideProtocol'
      },
      type_asset: 'sdk.coin'
    },
    {
      description: 'BTC-pegged token on Side Chain.',
      extended_description: 'sBTC is the native token of the Side Chain, fully pegged 1:1 to BTC held in a vault secured by 21 TSS signers on the Bitcoin mainnet. As a synthetic asset, sBTC enables Bitcoin liquidity to seamlessly flow into the Side Chain and the broader Cosmos ecosystem.',
      denom_units: [{
          denom: 'sat',
          exponent: 0
        }, {
          denom: 'sBTC',
          exponent: 8
        }],
      base: 'sat',
      name: 'Side Bitcoin',
      display: 'sBTC',
      symbol: 'sBTC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          provider: 'Side Chain'
        }],
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/sBTC.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/sBTC.png',
          theme: {
            primary_color_hex: '#f7771a'
          }
        }],
      socials: {
        website: 'https://side.one',
        twitter: 'https://x.com/SideProtocol'
      },
      type_asset: 'sdk.coin'
    },
    {
      description: 'Noble USDC on Side Chain.',
      denom_units: [{
          denom: 'ibc/65D0BEC6DAD96C7F5043D1E54E54B6BB5D5B3AEC3FF6CEBB75B9E059F3580EA3',
          exponent: 0
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/65D0BEC6DAD96C7F5043D1E54E54B6BB5D5B3AEC3FF6CEBB75B9E059F3580EA3',
      name: 'Noble USDC',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'noble',
            base_denom: 'uusdc',
            channel_id: 'channel-123'
          },
          chain: {
            channel_id: 'channel-1',
            path: 'transfer/channel-1/uusdc'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'noble',
            base_denom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          theme: {
            circle: true,
            primary_color_hex: '#2775CA'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      coingecko_id: 'usd-coin'
    }
  ]
};
export default info;