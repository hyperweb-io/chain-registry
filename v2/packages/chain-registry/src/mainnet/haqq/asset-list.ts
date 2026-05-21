import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'haqq',
  assets: [
    {
      description: 'The native EVM, governance and staking token of the Haqq Network',
      denomUnits: [{
          denom: 'aISLM',
          exponent: 0
        }, {
          denom: 'ISLM',
          exponent: 18
        }],
      base: 'aISLM',
      name: 'Islamic Coin',
      display: 'ISLM',
      symbol: 'ISLM',
      coingeckoId: 'islamic-coin',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg'
      },
      socials: {
        website: 'https://islamiccoin.net',
        x: 'https://x.com/islamic_coin'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Deenar gold-backed stablecoin',
      extendedDescription: 'Deenar Gold (DEEN) is a 1:1 gold-backed halal stablecoin with the ability to physically deliver gold. 1 DEEN = 1 gram of gold.',
      denomUnits: [{
          denom: 'erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE',
          exponent: 0
        }, {
          denom: 'DEEN',
          exponent: 6
        }],
      base: 'erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE',
      name: 'Deenar',
      display: 'DEEN',
      address: '0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE',
      symbol: 'DEEN',
      typeAsset: 'erc20',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'comex',
            baseDenom: 'XAU'
          },
          provider: 'Deenar'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.svg'
      },
      socials: {
        website: 'https://deenar.com',
        x: 'https://x.com/DeenarGold'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.svg',
          theme: {
            circle: true
          }
        }]
    },
    {
      description: 'HAQQ is the ecosystem token of the Haqq ecosystem',
      extendedDescription: 'HAQQ is the ecosystem participation token of the Haqq ecosystem, designed to connect product activity, users, and value into a unified economic layer',
      denomUnits: [{
          denom: 'aHAQQ',
          exponent: 0
        }, {
          denom: 'HAQQ',
          exponent: 18
        }],
      base: 'aHAQQ',
      name: 'HAQQ Token',
      display: 'HAQQ',
      address: '0x3af1695e3354Ec35F892b3d0880D4f7E12F4A172',
      symbol: 'HAQQ',
      typeAsset: 'sdk.coin',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/haqq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/haqq.svg'
      },
      socials: {
        website: 'https://ethiq.network',
        x: 'https://x.com/The_HaqqNetwork'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/haqq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/haqq.svg',
          theme: {
            circle: true
          }
        }]
    }
  ]
};
export default info;