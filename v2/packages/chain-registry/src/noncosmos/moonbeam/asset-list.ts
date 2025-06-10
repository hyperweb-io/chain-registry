import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'moonbeam',
  assets: [
    {
      description: 'Glimmer (GLMR) is the utility token of the Moonbeam Network, Moonbeam’s primary deployment on the Polkadot network that serves as a developer-friendly parachain.',
      denomUnits: [{
          denom: 'Wei',
          exponent: 0,
          aliases: ['wei']
        }, {
          denom: 'GLMR',
          exponent: 18,
          aliases: ['glmr']
        }],
      typeAsset: 'substrate',
      base: 'Wei',
      name: 'Glimmer',
      display: 'GLMR',
      symbol: 'GLMR',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
      },
      coingeckoId: 'moonbeam',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg',
          theme: {
            primaryColorHex: '#e4147c'
          }
        }]
    },
    {
      description: 'An ERC-20 representation of GLMR, the native token of Moonbeam.',
      typeAsset: 'erc20',
      address: '0xacc15dc74880c9944775448304b263d191c6077f',
      denomUnits: [{
          denom: '0xacc15dc74880c9944775448304b263d191c6077f',
          exponent: 0,
          aliases: ['wglmr-wei']
        }, {
          denom: 'wglmr',
          exponent: 18
        }],
      base: '0xacc15dc74880c9944775448304b263d191c6077f',
      name: 'Wrapped Moonbeam',
      display: 'wglmr',
      symbol: 'WGLMR',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chainName: 'moonbeam',
            baseDenom: 'Wei'
          },
          provider: 'Moonbeam'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
      },
      coingeckoId: 'wrapped-moonbeam',
      images: [{
          imageSync: {
            chainName: 'moonbeam',
            baseDenom: 'Wei'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png',
          theme: {
            primaryColorHex: '#e4147c'
          }
        }]
    },
    {
      description: 'Polkadot is a blockchain network designed to support various interconnected, application-specific sub-chains. Each chain built within Polkadot uses Parity Technologies\' Substrate modular framework, which allows developers to select specific components that suit their application-specific chain best.',
      typeAsset: 'erc20',
      address: '0xffffffff1fcacbd218edc0eba20fc2308c778080',
      denomUnits: [{
          denom: '0xffffffff1fcacbd218edc0eba20fc2308c778080',
          exponent: 0,
          aliases: ['dot-planck']
        }, {
          denom: 'xcdot',
          exponent: 10
        }],
      base: '0xffffffff1fcacbd218edc0eba20fc2308c778080',
      name: 'Wrapped Polkadot',
      display: 'xcdot',
      symbol: 'xcDOT',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'polkadot',
            baseDenom: 'Planck'
          },
          provider: 'Polkadot Parachain'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
      },
      images: [{
          imageSync: {
            chainName: 'polkadot',
            baseDenom: 'Planck'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg',
          theme: {
            primaryColorHex: '#e4047c'
          }
        }]
    },
    {
      description: 'Multi-Collateral Dai, brings a lot of new and exciting features, such as support for new CDP collateral types and Dai Savings Rate.',
      typeAsset: 'erc20',
      address: '0x14df360966a1c4582d2b18edbdae432ea0a27575',
      denomUnits: [{
          denom: '0x14df360966a1c4582d2b18edbdae432ea0a27575',
          exponent: 0,
          aliases: ['dai-wei']
        }, {
          denom: 'axldai',
          exponent: 18
        }],
      base: '0x14df360966a1c4582d2b18edbdae432ea0a27575',
      name: 'Axelar Wrapped Dai Stablecoin',
      display: 'axldai',
      symbol: 'axlDAI',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'dai-wei'
          },
          provider: 'Axelar'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        }]
    },
    {
      description: 'Frax is a fractional-algorithmic stablecoin protocol. It aims to provide a highly scalable, decentralized, algorithmic money in place of fixed-supply assets like BTC. Additionally, FXS is the value accrual and governance token of the entire Frax ecosystem.',
      typeAsset: 'erc20',
      address: '0x61C82805453a989E99B544DFB7031902e9bac448',
      denomUnits: [{
          denom: '0x61C82805453a989E99B544DFB7031902e9bac448',
          exponent: 0,
          aliases: ['frax-wei']
        }, {
          denom: 'axlfrax',
          exponent: 18
        }],
      base: '0x61C82805453a989E99B544DFB7031902e9bac448',
      name: 'Axelar Wrapped Frax',
      display: 'axlfrax',
      symbol: 'axlFRAX',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'frax-wei'
          },
          provider: 'Axelar'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
      },
      images: [{
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'frax-wei'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
        }]
    },
    {
      description: 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      typeAsset: 'erc20',
      address: '0xca01a1d0993565291051daff390892518acfad3a',
      denomUnits: [{
          denom: '0xca01a1d0993565291051daff390892518acfad3a',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'axlusdc',
          exponent: 6
        }],
      base: '0xca01a1d0993565291051daff390892518acfad3a',
      name: 'Axelar Wrapped USD Coin',
      display: 'axlusdc',
      symbol: 'axlUSDC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'uusdc'
          },
          provider: 'Axelar'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }]
    },
    {
      description: 'Tether gives you the joint benefits of open blockchain technology and traditional currency by converting your cash into a stable digital currency equivalent.',
      typeAsset: 'erc20',
      address: '0xdfd74af792bc6d45d1803f425ce62dd16f8ae038',
      denomUnits: [{
          denom: '0xdfd74af792bc6d45d1803f425ce62dd16f8ae038',
          exponent: 0,
          aliases: ['uusdt']
        }, {
          denom: 'axlusdt',
          exponent: 6
        }],
      base: '0xdfd74af792bc6d45d1803f425ce62dd16f8ae038',
      name: 'Axelar Wrapped Tether USD',
      display: 'axlusdt',
      symbol: 'axlUSDT',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'uusdt'
          },
          provider: 'Axelar'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      images: [{
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'uusdt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
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