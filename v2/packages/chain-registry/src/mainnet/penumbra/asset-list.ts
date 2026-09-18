import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'penumbra',
  assets: [
    {
      description: 'The native token of Penumbra.',
      extendedDescription: 'A fully private, cross-chain proof-of-stake network and decentralized exchange for the Cosmos and beyond.',
      denomUnits: [{
          denom: 'upenumbra',
          exponent: 0
        }, {
          denom: 'penumbra',
          exponent: 6
        }],
      typeAsset: 'unknown',
      base: 'upenumbra',
      display: 'penumbra',
      symbol: 'UM',
      name: 'Penumbra',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/penumbra/images/um.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/penumbra/images/um.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://penumbra.zone/',
        x: 'https://x.com/penumbrazone'
      }
    },
    {
      description: 'USD Coin issued natively on Injective by Circle',
      denomUnits: [{
          denom: 'ibc/9E96EAFF6558A4A32385E199934FB9236BA4FF13FFAB9D13358F557CD9B9CE50',
          exponent: 0,
          aliases: ['transfer/channel-18/erc20:0xa00C59fF5a080D2b954d0c75e46E22a0c371235a']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/9E96EAFF6558A4A32385E199934FB9236BA4FF13FFAB9D13358F557CD9B9CE50',
      name: 'Injective USDC',
      display: 'usdc',
      symbol: 'USDC.inj',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'erc20:0xa00C59fF5a080D2b954d0c75e46E22a0c371235a',
            channelId: 'channel-494'
          },
          chain: {
            channelId: 'channel-18',
            path: 'transfer/channel-18/erc20:0xa00C59fF5a080D2b954d0c75e46E22a0c371235a'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'injective',
            baseDenom: 'erc20:0xa00C59fF5a080D2b954d0c75e46E22a0c371235a'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          theme: {
            circle: true
          }
        }],
      coingeckoId: 'usd-coin'
    },
    {
      description: 'The INJ token is the native governance token for the Injective chain.',
      denomUnits: [{
          denom: 'ibc/730F417E438B1D2EBAD8DEAAE29C31B0C777D013A1F084A7D9C262E4A565B24C',
          exponent: 0,
          aliases: ['transfer/channel-18/inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/730F417E438B1D2EBAD8DEAAE29C31B0C777D013A1F084A7D9C262E4A565B24C',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'inj',
            channelId: 'channel-494'
          },
          chain: {
            channelId: 'channel-18',
            path: 'transfer/channel-18/inj'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      },
      images: [{
          imageSync: {
            chainName: 'injective',
            baseDenom: 'inj'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
        }],
      coingeckoId: 'injective-protocol'
    },
    {
      description: 'Agora USD Coin',
      denomUnits: [{
          denom: 'ibc/1CD4D5717C466464C86B0BBE7B18F992581163527D568D0170579008B27CC306',
          exponent: 0,
          aliases: ['transfer/channel-18/factory/inj1n636d9gzrqggdk66n2f97th0x8yuhfrtx520e7/ausd']
        }, {
          denom: 'AUSD',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/1CD4D5717C466464C86B0BBE7B18F992581163527D568D0170579008B27CC306',
      name: 'Agora USD',
      display: 'AUSD',
      symbol: 'AUSD',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'factory/inj1n636d9gzrqggdk66n2f97th0x8yuhfrtx520e7/ausd',
            channelId: 'channel-494'
          },
          chain: {
            channelId: 'channel-18',
            path: 'transfer/channel-18/factory/inj1n636d9gzrqggdk66n2f97th0x8yuhfrtx520e7/ausd'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ausd.png'
      },
      images: [{
          imageSync: {
            chainName: 'injective',
            baseDenom: 'factory/inj1n636d9gzrqggdk66n2f97th0x8yuhfrtx520e7/ausd'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ausd.png'
        }]
    },
    {
      description: 'Tether USDt from Ethereum via Peggy bridge.',
      denomUnits: [{
          denom: 'ibc/AE88803F9EC053E34EABD4677D85612CD6ACE84036805630C7369978455D3B0D',
          exponent: 0,
          aliases: ['transfer/channel-18/peggy0xdAC17F958D2ee523a2206206994597C13D831ec7']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/AE88803F9EC053E34EABD4677D85612CD6ACE84036805630C7369978455D3B0D',
      name: 'Tether USDT',
      display: 'usdt',
      symbol: 'USDT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'peggy0xdAC17F958D2ee523a2206206994597C13D831ec7',
            channelId: 'channel-494'
          },
          chain: {
            channelId: 'channel-18',
            path: 'transfer/channel-18/peggy0xdAC17F958D2ee523a2206206994597C13D831ec7'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      images: [{
          imageSync: {
            chainName: 'injective',
            baseDenom: 'peggy0xdAC17F958D2ee523a2206206994597C13D831ec7'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          theme: {
            circle: true
          }
        }]
    }
  ]
};
export default info;