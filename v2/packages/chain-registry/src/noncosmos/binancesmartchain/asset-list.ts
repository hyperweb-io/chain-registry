import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'binancesmartchain',
  assets: [
    {
      description: 'BNB is the native cryptocurrency of the Binance exchange, used to pay for transaction fees and participate in various features and services within the Binance ecosystem.',
      extendedDescription: 'BNB, or Binance Coin, is the native cryptocurrency of the Binance exchange, one of the largest cryptocurrency exchanges in the world. Initially launched as an ERC-20 token on the Ethereum blockchain in 2017, BNB has since migrated to Binance\'s own blockchain, the Binance Chain. BNB was created to facilitate various operations on the Binance platform, such as reducing transaction fees for traders when paid with BNB, participating in token sales on Binance Launchpad, and more. Over time, the utility of BNB has expanded beyond the Binance platform, with it being used in a variety of applications including payment for goods and services, online and offline, and even for booking travel arrangements through partners.\n\nIn addition to its wide range of uses, BNB has a unique deflationary mechanism known as coin burns. Binance commits to using 20% of its profits each quarter to buy back and burn BNB, effectively reducing the total supply over time and increasing its scarcity. This mechanism is aimed at boosting the value of BNB by controlling its supply. The ongoing development of the Binance Smart Chain (BSC), a parallel blockchain that runs smart contracts and is compatible with the Ethereum Virtual Machine (EVM), further enhances BNB\'s utility by supporting decentralized finance (DeFi) applications and other blockchain-based projects. BNB\'s role in both the Binance ecosystem and the broader crypto market continues to grow, making it a significant asset in the cryptocurrency space.',
      denomUnits: [{
          denom: 'wei',
          exponent: 0
        }, {
          denom: 'bnb',
          exponent: 18
        }],
      typeAsset: 'evm-base',
      base: 'wei',
      name: 'Binance Coin',
      display: 'bnb',
      symbol: 'BNB',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg'
      },
      coingeckoId: 'binancecoin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg',
          theme: {
            primaryColorHex: '#f3bb0c'
          }
        }]
    },
    {
      description: 'Wrapped BNB. As the native coin of Binance Chain, BNB has multiple use cases: fueling transactions on the Chain, paying for transaction fees on Binance Exchange, making in-store payments, and many more.',
      typeAsset: 'erc20',
      address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      denomUnits: [{
          denom: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
          exponent: 0
        }, {
          denom: 'wbnb',
          exponent: 18
        }],
      base: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      name: 'Wrapped BNB',
      display: 'wbnb',
      symbol: 'WBNB',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chainName: 'binancesmartchain',
            baseDenom: 'wei'
          },
          chain: {
            contract: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
          },
          provider: 'Binance'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg'
      },
      coingeckoId: 'wbnb',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg',
          theme: {
            primaryColorHex: '#f3bb0c'
          }
        }]
    },
    {
      description: 'BUSD is a 1:1 USD-backed stablecoin approved by NYDFS and issued by Paxos on Ethereum. Binance provides Binance-Peg BUSD on other chains by locking an equivalent amount of assets on Ethereum. Note that Binance-Peg BUSD is provided by Binance, which is not issued by Paxos nor regulated by the NYDFS.',
      denomUnits: [{
          denom: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
          exponent: 0
        }, {
          denom: 'busd',
          exponent: 18
        }],
      typeAsset: 'erc20',
      address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      base: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      name: 'Binance-Peg BUSD Token',
      display: 'busd',
      symbol: 'BUSD',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Binance'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png',
          theme: {
            primaryColorHex: '#f3bb0c'
          }
        }]
    },
    {
      description: 'USD Coin (known by its ticker USDC) is a stablecoin that is pegged to the U.S. dollar on a 1:1 basis.',
      denomUnits: [{
          denom: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
          exponent: 0
        }, {
          denom: 'usdc',
          exponent: 18
        }],
      typeAsset: 'erc20',
      address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
      base: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
      name: 'Binance-Peg USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x4fabb145d64652a948d72533023f6e7a623c7c53'
          },
          provider: 'Binance'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }]
    },
    {
      description: 'PURSE Token',
      denomUnits: [{
          denom: '0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C',
          exponent: 0
        }, {
          denom: 'PURSE',
          exponent: 18
        }],
      typeAsset: 'erc20',
      address: '0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C',
      base: '0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C',
      name: 'PURSE Token',
      display: 'PURSE',
      symbol: 'PURSE',
      coingeckoId: 'pundi-x-purse',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.svg',
          theme: {
            primaryColorHex: '#1c1c1b'
          }
        }]
    },
    {
      description: 'The SRCX token of Source Protocol.',
      denomUnits: [{
          denom: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae',
          exponent: 0
        }, {
          denom: 'srcx',
          exponent: 9
        }],
      typeAsset: 'erc20',
      address: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae',
      base: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae',
      name: 'Source Token',
      display: 'srcx',
      symbol: 'SRCX',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png',
          theme: {
            primaryColorHex: '#7f22bc'
          }
        }]
    },
    {
      description: 'BUSD-T gives you the joint benefits of open blockchain technology and traditional currency by converting your cash into a stable digital currency equivalent.',
      typeAsset: 'erc20',
      address: '0x55d398326f99059fF775485246999027B3197955',
      denomUnits: [{
          denom: '0x55d398326f99059fF775485246999027B3197955',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      base: '0x55d398326f99059fF775485246999027B3197955',
      name: 'Binance Bridged USDT',
      display: 'usdt',
      symbol: 'USDT',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Binance Bridge'
        }],
      coingeckoId: 'binance-bridged-usdt-bnb-smart-chain',
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primaryColorHex: '#009393',
            backgroundColorHex: '#009393'
          }
        }]
    }
  ]
};
export default info;