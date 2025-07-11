import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'sei',
  assets: [
    {
      description: 'Sei is a layer-1 blockchain optimized for trading, focusing on providing high throughput, low latency, and efficient execution for decentralized exchanges.',
      extendedDescription: 'Sei is a layer-1 blockchain designed specifically for trading applications, offering a high-performance environment for decentralized exchanges (DEXs). It focuses on providing high throughput, low latency, and efficient order execution. Sei\'s architecture includes features like parallel processing and a unique consensus mechanism to achieve fast and reliable transaction processing. The native token, SEI, is used for transaction fees, staking, and governance within the network. Sei aims to create an optimal infrastructure for trading, addressing the needs of traders and developers in the DeFi space.',
      denomUnits: [{
          denom: 'usei',
          exponent: 0
        }, {
          denom: 'sei',
          exponent: 6
        }],
      base: 'usei',
      name: 'Sei',
      display: 'sei',
      symbol: 'SEI',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
      },
      coingeckoId: 'sei-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg',
          theme: {
            primaryColorHex: '#9c1c1c'
          }
        }],
      socials: {
        website: 'https://www.sei.io/',
        twitter: 'https://twitter.com/SeiNetwork'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'OIN Token ($OIN) is a groundbreaking digital asset developed on the $SEI Blockchain. It transcends being merely a cryptocurrency; $OIN stands as a robust store of value, symbolizing the future of decentralized finance and its potential to reshape the crypto landscape.',
      denomUnits: [{
          denom: 'factory/sei1thgp6wamxwqt7rthfkeehktmq0ujh5kspluw6w/OIN',
          exponent: 0
        }, {
          denom: 'oin',
          exponent: 6
        }],
      address: 'sei1thgp6wamxwqt7rthfkeehktmq0ujh5kspluw6w',
      base: 'factory/sei1thgp6wamxwqt7rthfkeehktmq0ujh5kspluw6w/OIN',
      name: 'OIN STORE OF VALUE',
      display: 'oin',
      symbol: 'OIN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oin.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oin.png',
          theme: {
            primaryColorHex: '#6cdbac'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'ERIS liquid staked SEI',
      denomUnits: [{
          denom: 'factory/sei1x2fgaaqecvk8kwuqkjqcj27clw5p5g99uawdzy9sc4rku8avumcq3cky4k/ampSEI',
          exponent: 0
        }, {
          denom: 'ampSEI',
          exponent: 6
        }],
      base: 'factory/sei1x2fgaaqecvk8kwuqkjqcj27clw5p5g99uawdzy9sc4rku8avumcq3cky4k/ampSEI',
      name: 'ERIS Amplified SEI',
      display: 'ampSEI',
      symbol: 'ampSEI',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/ampsei.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/ampsei.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Popeye the Seilor',
      denomUnits: [{
          denom: 'factory/sei1fl8pg59wfsgw2wp4aruk38zqccfnc2g8ptrm24/popeye',
          exponent: 0
        }, {
          denom: 'popeye',
          exponent: 6
        }],
      base: 'factory/sei1fl8pg59wfsgw2wp4aruk38zqccfnc2g8ptrm24/popeye',
      name: 'Popeye',
      display: 'popeye',
      symbol: 'POPEYE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/popeye.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/popeye.png',
          theme: {
            primaryColorHex: '#04040a'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'A wise dog and a marshal arts master',
      denomUnits: [{
          denom: 'factory/sei1ta5rkr6y2qlkj7px8w2cvear7m2822q4f4ea0m/sensei',
          exponent: 0
        }, {
          denom: 'sensei',
          exponent: 6
        }],
      base: 'factory/sei1ta5rkr6y2qlkj7px8w2cvear7m2822q4f4ea0m/sensei',
      name: 'Sensei Dog',
      display: 'sensei',
      symbol: 'SENSEI',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/SenseiDog.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/SenseiDog.png',
          theme: {
            primaryColorHex: '#d4d0c7'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'OOZARU is a meme token on SEI Network inspired by the iconic transformation in the Dragon Ball series',
      denomUnits: [{
          denom: 'sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda',
          exponent: 0
        }, {
          denom: 'oozaru',
          exponent: 6
        }],
      typeAsset: 'cw20',
      address: 'sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda',
      base: 'sei1wlf9j5uv50rcg0u5j6xk00px5tflptzprj39keck27eg8g7qd7hqq6kvda',
      name: 'Oozaru',
      display: 'oozaru',
      symbol: 'OOZARU',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oozaru.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oozaru.png',
          theme: {
            primaryColorHex: '#2b1619'
          }
        }]
    },
    {
      description: 'The Original Meme Coin of SEI Network',
      typeAsset: 'cw20',
      address: 'sei1hrndqntlvtmx2kepr0zsfgr7nzjptcc72cr4ppk4yav58vvy7v3s4er8ed',
      denomUnits: [{
          denom: 'cw20:sei1hrndqntlvtmx2kepr0zsfgr7nzjptcc72cr4ppk4yav58vvy7v3s4er8ed',
          exponent: 0
        }, {
          denom: 'SEIYAN',
          exponent: 6
        }],
      base: 'cw20:sei1hrndqntlvtmx2kepr0zsfgr7nzjptcc72cr4ppk4yav58vvy7v3s4er8ed',
      name: 'SEIYAN',
      display: 'SEIYAN',
      symbol: 'SEIYAN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/SEIYAN.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/SEIYAN.png',
          theme: {
            primaryColorHex: '#db1f22'
          }
        }]
    },
    {
      description: 'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
      denomUnits: [{
          denom: 'ibc/063F4461F7317CFF10F50AB044E44932D22AAD84FA7107082744946E6DB7B7A8',
          exponent: 0,
          aliases: ['uastro']
        }, {
          denom: 'astro',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/063F4461F7317CFF10F50AB044E44932D22AAD84FA7107082744946E6DB7B7A8',
      name: 'Astroport token',
      display: 'astro',
      symbol: 'ASTRO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro',
            channelId: 'channel-2016'
          },
          chain: {
            channelId: 'channel-66',
            path: 'transfer/channel-177/factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.svg',
          theme: {
            primaryColorHex: '#4056e9'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.svg'
      },
      coingeckoId: 'astroport-fi'
    }
  ]
};
export default info;