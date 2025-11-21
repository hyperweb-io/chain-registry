import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'bitwaydevnet',
  assets: [
    {
      description: 'The native token of Bitway Devnet.',
      denomUnits: [{
          denom: 'ubtw',
          exponent: 0
        }, {
          denom: 'btw',
          exponent: 6
        }],
      base: 'ubtw',
      name: 'Bitway Devnet native token',
      display: 'btw',
      symbol: 'BTW',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitway/images/btw.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitway/images/btw.svg'
      },
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'bitway',
            baseDenom: 'ubtw'
          },
          provider: 'Bitway'
        }],
      images: [{
          imageSync: {
            chainName: 'bitway',
            baseDenom: 'ubtw'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitway/images/btw.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitway/images/btw.svg'
        }],
      socials: {
        website: 'https://devnet.bitway.com',
        x: 'https://x.com/BitwayOfficial'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'BTC-pegged token on Bitway Devnet.',
      extendedDescription: 'BTCT is the native token of the Bitway Devnet, fully pegged 1:1 to BTC held in a vault secured by 21 TSS signers on the Bitcoin testnet. As a synthetic asset, BTCT enables Bitcoin liquidity to seamlessly flow into the Bitway and the broader Cosmos ecosystem.',
      denomUnits: [{
          denom: 'sat',
          exponent: 0
        }, {
          denom: 'BTCT',
          exponent: 8
        }],
      base: 'sat',
      name: 'Bitway Devnet Bitcoin',
      display: 'BTCT',
      symbol: 'BTCT',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'bitcointestnet',
            baseDenom: 'sat'
          },
          provider: 'Bitway'
        }],
      images: [{
          imageSync: {
            chainName: 'bitway',
            baseDenom: 'sat'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitway/images/BTCT.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitway/images/BTCT.png'
        }],
      socials: {
        website: 'https://devnet.bitway.com',
        x: 'https://x.com/BitwayOfficial'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Noble Testnet USDC on Bitway Devnet.',
      denomUnits: [{
          denom: 'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
          exponent: 0
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
      name: 'Noble Testnet USDC',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'nobletestnet',
            baseDenom: 'uusdc',
            channelId: 'channel-774'
          },
          chain: {
            channelId: 'channel-2',
            path: 'transfer/channel-2/uusdc'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'nobletestnet',
            baseDenom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          theme: {
            circle: true
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      }
    }
  ]
};
export default info;