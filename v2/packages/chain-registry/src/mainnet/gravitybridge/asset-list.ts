import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'gravitybridge',
  assets: [
    {
      description: 'The native token of Gravity Bridge',
      denomUnits: [{
          denom: 'ugraviton',
          exponent: 0
        }, {
          denom: 'graviton',
          exponent: 6
        }],
      base: 'ugraviton',
      name: 'Graviton',
      display: 'graviton',
      symbol: 'GRAV',
      coingeckoId: 'graviton',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg',
          theme: {
            primaryColorHex: '#042ca4'
          }
        }],
      socials: {
        website: 'https://www.gravitybridge.net/',
        twitter: 'https://twitter.com/gravity_bridge'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.',
      denomUnits: [{
          denom: 'gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
          exponent: 0
        }, {
          denom: 'pstake',
          exponent: 18
        }],
      base: 'gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
      name: 'pSTAKE Finance',
      display: 'pstake',
      symbol: 'PSTAKE',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'persistence',
            baseDenom: 'uxprt'
          },
          provider: 'Persistence'
        }, {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
          },
          provider: 'Gravity Bridge'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg',
          theme: {
            primaryColorHex: '#050505'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Gravity Bridge WETH',
      denomUnits: [{
          denom: 'gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
          exponent: 0
        }, {
          denom: 'gweth',
          exponent: 18
        }],
      base: 'gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      name: 'Wrapped Ethereum',
      display: 'gweth',
      symbol: 'WETH',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
      },
      traces: [{
          type: 'wrapped',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Ethereum'
        }, {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          provider: 'Gravity Bridge'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Gravity Bridge USDC',
      denomUnits: [{
          denom: 'gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
          exponent: 0
        }, {
          denom: 'gusdc',
          exponent: 6
        }],
      base: 'gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      name: 'USD Coin',
      display: 'gusdc',
      symbol: 'USDC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Circle'
        }, {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Gravity Bridge'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          theme: {
            circle: true,
            primaryColorHex: '#2775CA'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Gravity Bridge USDT',
      denomUnits: [{
          denom: 'gravity0xdAC17F958D2ee523a2206206994597C13D831ec7',
          exponent: 0
        }, {
          denom: 'gusdt',
          exponent: 6
        }],
      base: 'gravity0xdAC17F958D2ee523a2206206994597C13D831ec7',
      name: 'Tether USD',
      display: 'gusdt',
      symbol: 'USDT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Tether'
        }, {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Gravity Bridge'
        }],
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
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Gravity Bridge WBTC',
      denomUnits: [{
          denom: 'gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
          exponent: 0
        }, {
          denom: 'gwbtc',
          exponent: 8
        }],
      base: 'gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      name: 'Wrapped Bitcoin',
      display: 'gwbtc',
      symbol: 'WBTC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
      },
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'BitGo, Kyber, and Ren'
        }, {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          provider: 'Gravity Bridge'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg',
          theme: {
            primaryColorHex: '#f39444'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Gravity Bridge DAI',
      denomUnits: [{
          denom: 'gravity0x6B175474E89094C44Da98b954EedeAC495271d0F',
          exponent: 0
        }, {
          denom: 'gdai',
          exponent: 18
        }],
      base: 'gravity0x6B175474E89094C44Da98b954EedeAC495271d0F',
      name: 'Dai Stablecoin',
      display: 'gdai',
      symbol: 'DAI',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
      },
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'MakerDAO'
        }, {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x6b175474e89094c44da98b954eedeac495271d0f'
          },
          provider: 'Gravity Bridge'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x6b175474e89094c44da98b954eedeac495271d0f'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Gravity Bridge sDAI',
      denomUnits: [{
          denom: 'gravity0x83F20F44975D03b1b09e64809B757c47f942BEeA',
          exponent: 0
        }, {
          denom: 'gsdai',
          exponent: 18
        }],
      base: 'gravity0x83F20F44975D03b1b09e64809B757c47f942BEeA',
      name: 'Savings Dai',
      display: 'gsdai',
      symbol: 'sDAI',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sdai.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sdai.svg'
      },
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x83F20F44975D03b1b09e64809B757c47f942BEeA'
          },
          provider: 'Gravity Bridge'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x83F20F44975D03b1b09e64809B757c47f942BEeA'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sdai.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sdai.svg',
          theme: {
            primaryColorHex: '#7ec231'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Gravity Bridge OCC',
      denomUnits: [{
          denom: 'gravity0x2F109021aFe75B949429fe30523Ee7C0D5B27207',
          exponent: 0
        }, {
          denom: 'gocc',
          exponent: 18
        }],
      base: 'gravity0x2F109021aFe75B949429fe30523Ee7C0D5B27207',
      name: 'OccamFi',
      display: 'gocc',
      symbol: 'OCC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/occamfi.png'
      },
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x2F109021aFe75B949429fe30523Ee7C0D5B27207'
          },
          provider: 'Gravity Bridge'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x2F109021aFe75B949429fe30523Ee7C0D5B27207'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/occamfi.png',
          theme: {
            primaryColorHex: '#313648'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The PAGE token is used for actions in the PageDAO NFT literary ecosystem and for DAO governance.',
      denomUnits: [{
          denom: 'gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e',
          exponent: 0
        }, {
          denom: 'page',
          exponent: 8
        }],
      base: 'gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e',
      name: 'Page',
      display: 'page',
      symbol: 'PAGE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg'
      },
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e'
          },
          provider: 'Gravity Bridge'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg',
          theme: {
            primaryColorHex: '#ebb324'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Gravity Bridge Paxos Gold',
      denomUnits: [{
          denom: 'gravity0x45804880De22913dAFE09f4980848ECE6EcbAf78',
          exponent: 0
        }, {
          denom: 'gpaxg',
          exponent: 18
        }],
      base: 'gravity0x45804880De22913dAFE09f4980848ECE6EcbAf78',
      name: 'Paxos Gold',
      display: 'gpaxg',
      symbol: 'PAXG',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/paxg.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/paxg.svg'
      },
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x45804880De22913dAFE09f4980848ECE6EcbAf78'
          },
          provider: 'Gravity Bridge'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x45804880De22913dAFE09f4980848ECE6EcbAf78'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/paxg.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/paxg.svg',
          theme: {
            primaryColorHex: '#ebe60e'
          }
        }],
      typeAsset: 'sdk.coin'
    }
  ]
};
export default info;