import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'injectivetestnet',
  assets: [
    {
      description: 'The INJ token is the native governance token for the Injective chain.',
      denomUnits: [{
          denom: 'inj',
          exponent: 0
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'inj',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'inj'
          },
          provider: 'Injective'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      },
      coingeckoId: 'injective-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'USDC is a USD-pegged stablecoin available on the Injective testnet.',
      denomUnits: [{
          denom: 'factory/inj17vytdwqczqz72j65saukplrktd4gyfme5agf6c/usdc',
          exponent: 0
        }, {
          denom: 'USDC',
          exponent: 6
        }],
      base: 'factory/inj17vytdwqczqz72j65saukplrktd4gyfme5agf6c/usdc',
      name: 'USD Coin',
      display: 'USDC',
      symbol: 'USDC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      coingeckoId: 'usd-coin',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chainName: 'ethereumtestnet',
            baseDenom: '0x254d06f33bDc5b8ee05b2ea472107E300226659A'
          },
          provider: 'Circle'
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'OSMO is the native token of the Osmosis blockchain, bridged over to the Injective testnet.',
      denomUnits: [{
          denom: 'ibc/FA130DEB2B506FA0A7258B46A6B72DE12370B25E474E6679F054D95277164186',
          exponent: 0
        }, {
          denom: 'OSMO',
          exponent: 6
        }],
      base: 'ibc/FA130DEB2B506FA0A7258B46A6B72DE12370B25E474E6679F054D95277164186',
      name: 'Osmosis',
      display: 'OSMO',
      symbol: 'OSMO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png'
      },
      coingeckoId: 'osmosis',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosistestnet',
            baseDenom: 'uosmo',
            channelId: 'channel-10092'
          },
          chain: {
            channelId: 'channel-77026',
            path: 'transfer/channel-77026/uosmo'
          }
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png'
        }],
      typeAsset: 'ics20'
    },
    {
      description: 'USDT is a USD-pegged stablecoin available on the Injective testnet.',
      denomUnits: [{
          denom: 'peggy0x87aB3B4C8661e07D6372361211B96ed4Dc36B1B5',
          exponent: 0
        }, {
          denom: 'USDT',
          exponent: 6
        }],
      base: 'peggy0x87aB3B4C8661e07D6372361211B96ed4Dc36B1B5',
      name: 'Tether',
      display: 'USDT',
      symbol: 'USDT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereumtestnet',
            baseDenom: '0xaA8E23Fb1079EA71e0a56F48a2aA51851D8433D0'
          },
          provider: 'Peggy'
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }],
      typeAsset: 'sdk.coin'
    }
  ]
};
export default info;