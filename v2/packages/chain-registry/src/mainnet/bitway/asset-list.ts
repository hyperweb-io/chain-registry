import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'bitway',
  assets: [
    {
      description: 'The native token of Bitway.',
      denomUnits: [{
          denom: 'ubtw',
          exponent: 0
        }, {
          denom: 'btw',
          exponent: 6
        }],
      base: 'ubtw',
      name: 'Bitway native token',
      display: 'btw',
      symbol: 'BTW',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitway/images/btw.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitway/images/btw.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitway/images/btw.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitway/images/btw.svg'
        }],
      socials: {
        website: 'https://bitway.com',
        x: 'https://x.com/BitwayOfficial'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'BTC-pegged token on Bitway.',
      extendedDescription: 'BTCT is the native token of the Bitway, fully pegged 1:1 to BTC held in a vault secured by 21 TSS signers on the Bitcoin mainnet. As a synthetic asset, BTCT enables Bitcoin liquidity to seamlessly flow into the Bitway and the broader Cosmos ecosystem.',
      denomUnits: [{
          denom: 'sat',
          exponent: 0
        }, {
          denom: 'BTCT',
          exponent: 8
        }],
      base: 'sat',
      name: 'Bitway Bitcoin',
      display: 'BTCT',
      symbol: 'BTCT',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'Bitway'
        }],
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitway/images/BTCT.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitway/images/BTCT.png'
        }],
      socials: {
        website: 'https://bitway.com',
        x: 'https://x.com/BitwayOfficial'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Noble USDC on Bitway.',
      denomUnits: [{
          denom: 'ibc/B9E4FD154C92D3A23BEA029906C4C5FF2FE74CB7E3A058290B77197A263CF88B',
          exponent: 0
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/B9E4FD154C92D3A23BEA029906C4C5FF2FE74CB7E3A058290B77197A263CF88B',
      name: 'Noble USDC',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdc',
            channelId: 'channel-172'
          },
          chain: {
            channelId: 'channel-13',
            path: 'transfer/channel-13/uusdc'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'noble',
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
      },
      coingeckoId: 'usd-coin'
    }
  ]
};
export default info;