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
    },
    {
      description: 'Tether USD via Eureka',
      denomUnits: [{
          denom: 'ibc/F03F09579E9B70EBE7801B6541502C6BC71609ED2642E69FB5FE59CCC56D7BF1',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F03F09579E9B70EBE7801B6541502C6BC71609ED2642E69FB5FE59CCC56D7BF1',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7',
            channelId: 'channel-0'
          },
          chain: {
            channelId: '08-wasm-1369',
            path: 'transfer/08-wasm-1369/0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Eureka'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'ibc/E7E51FFF94A8B55BE84CEB0345E5CAF0A5DAEB374C6806CE908098B8996C7782',
            channelId: 'channel-1556'
          },
          chain: {
            channelId: 'channel-14',
            path: 'transfer/channel-14/transfer/08-wasm-1369/0xdac17f958d2ee523a2206206994597c13d831ec7'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          theme: {
            circle: true
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      description: 'Ether via Eureka',
      denomUnits: [{
          denom: 'ibc/5F5E7D25BBAD0BB09FCE567C75EC8527590CA8AC5F947BAF8E533FBF7E270A44',
          exponent: 0
        }, {
          denom: 'eth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/5F5E7D25BBAD0BB09FCE567C75EC8527590CA8AC5F947BAF8E533FBF7E270A44',
      name: 'Ethereum',
      display: 'eth',
      symbol: 'ETH',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            channelId: 'channel-0'
          },
          chain: {
            channelId: '08-wasm-1369',
            path: 'transfer/08-wasm-1369/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          provider: 'Eureka'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'ibc/C0B53D3D23827AE38058BED0BDCD554229278AF530A8D265FCF6DFF7C4B2ADFF',
            channelId: 'channel-1556'
          },
          chain: {
            channelId: 'channel-14',
            path: 'transfer/channel-14/transfer/08-wasm-1369/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
      }
    }
  ]
};
export default info;