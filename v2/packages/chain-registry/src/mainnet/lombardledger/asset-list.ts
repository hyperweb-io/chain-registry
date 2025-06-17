import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'lombardledger',
  assets: [
    {
      description: 'LOM is the native fee token of Lombard Ledger',
      denomUnits: [{
          denom: 'ulom',
          exponent: 0
        }, {
          denom: 'lom',
          exponent: 6
        }],
      base: 'ulom',
      name: 'Lom',
      display: 'lom',
      symbol: 'LOM',
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LBTC is liquid Bitcoin; it\'s yield-bearing, cross-chain, and 1:1 backed by BTC. LBTC enables yield-bearing BTC to move cross-chain without fragmenting liquidity, and is designed to seamlessly integrate Bitcoin into the decentralized finance (DeFi) ecosystem while maintaining the security and integrity of the underlying asset',
      denomUnits: [{
          denom: 'uclbtc',
          exponent: 0
        }, {
          denom: 'lbtc',
          exponent: 8
        }],
      base: 'uclbtc',
      name: 'Liquid Bitcoin',
      display: 'lbtc',
      symbol: 'LBTC',
      typeAsset: 'sdk.coin',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x8236a87084f8B84306f72007F36F2618A5634494'
          },
          provider: 'Lombard'
        }]
    },
    {
      description: 'ustake is a synthetic token to implement a PoA with BFT features over CometBFT',
      denomUnits: [{
          denom: 'ustake',
          exponent: 0
        }],
      base: 'ustake',
      name: 'ustake',
      display: 'ustake',
      symbol: 'USTAKE',
      typeAsset: 'sdk.coin'
    }
  ]
};
export default info;