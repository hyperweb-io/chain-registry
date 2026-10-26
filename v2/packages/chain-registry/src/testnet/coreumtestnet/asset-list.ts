import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'coreumtestnet',
  assets: [{
      description: 'The native token of TX',
      denomUnits: [{
          denom: 'utestcore',
          exponent: 0
        }, {
          denom: 'testtx',
          exponent: 6
        }],
      base: 'utestcore',
      name: 'TX',
      display: 'testtx',
      symbol: 'TESTTX',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'coreum',
            baseDenom: 'ucore'
          },
          provider: 'TX'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/tx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/tx.svg'
      },
      coingeckoId: 'tx',
      keywords: [
        'L1',
        'RWA',
        'RWA Protocol',
        'RWA Marketplace',
        'tokenization'
      ],
      images: [{
          imageSync: {
            chainName: 'coreum',
            baseDenom: 'ucore'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/tx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/tx.svg'
        }],
      typeAsset: 'sdk.coin'
    }, {
      description: 'USD-backed stablecoin issued by Brale',
      denomUnits: [{
          denom: 'uustx-testcore1dy5l3teqsvnwr6reeg9jm6f7mpcr45jy7fqgsr',
          exponent: 0
        }, {
          denom: 'ustx',
          exponent: 6
        }],
      base: 'uustx-testcore1dy5l3teqsvnwr6reeg9jm6f7mpcr45jy7fqgsr',
      name: 'USTX',
      display: 'ustx',
      symbol: 'USTX',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'coreum',
            baseDenom: 'uustx-core1rfxrg75fzuq5hgnnymjgsxj70d9w9cs8xuza7x'
          },
          provider: 'Brale'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/ustx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/ustx.svg'
      },
      keywords: [
        'stablecoin',
        'usd',
        'rwa'
      ],
      images: [{
          imageSync: {
            chainName: 'coreum',
            baseDenom: 'uustx-core1rfxrg75fzuq5hgnnymjgsxj70d9w9cs8xuza7x'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/ustx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/ustx.svg'
        }],
      socials: {
        website: 'https://tx.org/',
        x: 'https://x.com/txEcosystem',
        telegram: 'https://t.me/+q0fGCpknxeRjMTVh',
        discord: 'https://discord.gg/4Qr2jpMVCY',
        medium: 'https://medium.com/@txEcosystem'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;