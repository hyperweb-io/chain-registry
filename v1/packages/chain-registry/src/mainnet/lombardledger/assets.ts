import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'lombardledger',
  assets: [
    {
      description: 'LOM is the native fee token of Lombard Ledger',
      denom_units: [{
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
      type_asset: 'sdk.coin'
    },
    {
      description: 'LBTC is liquid Bitcoin; it\'s yield-bearing, cross-chain, and 1:1 backed by BTC. LBTC enables yield-bearing BTC to move cross-chain without fragmenting liquidity, and is designed to seamlessly integrate Bitcoin into the decentralized finance (DeFi) ecosystem while maintaining the security and integrity of the underlying asset',
      denom_units: [{
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
      type_asset: 'sdk.coin',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x8236a87084f8B84306f72007F36F2618A5634494'
          },
          provider: 'Lombard'
        }]
    },
    {
      description: 'ustake is a synthetic token to implement a PoA with BFT features over CometBFT',
      denom_units: [{
          denom: 'ustake',
          exponent: 0
        }],
      base: 'ustake',
      name: 'ustake',
      display: 'ustake',
      symbol: 'USTAKE',
      type_asset: 'sdk.coin'
    }
  ]
};
export default info;