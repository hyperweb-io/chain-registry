import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'kujira',
  assets: [
    {
      description: 'Kujira is a decentralized finance (DeFi) platform offering a suite of tools and services for managing and optimizing digital assets and investments.',
      extendedDescription: 'Kujira provides a comprehensive DeFi platform that includes tools for lending, borrowing, and yield farming, leveraging blockchain technology to offer a transparent, secure, and efficient user experience. The native token, KUJI, is central to the ecosystem, used for transaction fees, staking, and governance. Kujira\'s user-centric design and innovative features make it a popular choice in the DeFi space, enabling users to maximize their returns and effectively manage their digital assets.',
      denomUnits: [{
          denom: 'ukuji',
          exponent: 0
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ukuji',
      name: 'Kujira',
      display: 'kuji',
      symbol: 'KUJI',
      coingeckoId: 'kujira',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg',
          theme: {
            primaryColorHex: '#e33b34'
          }
        }],
      socials: {
        website: 'https://kujira.network/',
        twitter: 'https://twitter.com/TeamKujira'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The native over-collateralized stablecoin from the Kujira chain.',
      denomUnits: [{
          denom: 'factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk',
          exponent: 0
        }, {
          denom: 'usk',
          exponent: 6
        }],
      base: 'factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk',
      name: 'USK',
      display: 'usk',
      symbol: 'USK',
      coingeckoId: 'usk',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.svg',
          theme: {
            primaryColorHex: '#2e363f'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Quark\'s auto-compounding KUJI derivative',
      denomUnits: [{
          denom: 'factory/kujira1m96ucsfpt2yy72w09z2rxjdj38y5qd8lqx5jtggnejmdua2ynpnsxyvjex/urcpt',
          exponent: 0
        }, {
          denom: 'qcKUJI',
          exponent: 6
        }],
      base: 'factory/kujira1m96ucsfpt2yy72w09z2rxjdj38y5qd8lqx5jtggnejmdua2ynpnsxyvjex/urcpt',
      name: 'qcKUJI',
      display: 'qcKUJI',
      symbol: 'qcKUJI',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qckuji.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qckuji.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'ampKUJI',
      denomUnits: [{
          denom: 'factory/kujira1n3fr5f56r2ce0s37wdvwrk98yhhq3unnxgcqus8nzsfxvllk0yxquurqty/ampKUJI',
          exponent: 0
        }, {
          denom: 'ampKUJI',
          exponent: 6
        }],
      base: 'factory/kujira1n3fr5f56r2ce0s37wdvwrk98yhhq3unnxgcqus8nzsfxvllk0yxquurqty/ampKUJI',
      name: 'ampKUJI',
      display: 'ampKUJI',
      symbol: 'ampKUJI',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampkuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampkuji.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampkuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampkuji.svg',
          theme: {
            primaryColorHex: '#4b7bbb'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'MantaDAO Governance Token',
      denomUnits: [{
          denom: 'factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta',
          exponent: 0
        }, {
          denom: 'mnta',
          exponent: 6
        }],
      base: 'factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta',
      name: 'MantaDAO',
      display: 'mnta',
      symbol: 'MNTA',
      coingeckoId: 'mantadao',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg',
          theme: {
            primaryColorHex: '#0c141c'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Quark\'s auto-compounding MNTA derivative',
      denomUnits: [{
          denom: 'factory/kujira1qzu3up50auxhqyzfq56znuj8n38q2ra7daaf9ef7vg8gu66jh4fqd2wd2y/urcpt',
          exponent: 0
        }, {
          denom: 'qcMNTA',
          exponent: 6
        }],
      base: 'factory/kujira1qzu3up50auxhqyzfq56znuj8n38q2ra7daaf9ef7vg8gu66jh4fqd2wd2y/urcpt',
      name: 'qcMNTA',
      display: 'qcMNTA',
      symbol: 'qcMNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qcmnta.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qcmnta.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'ERIS Liquid Staked MNTA',
      denomUnits: [{
          denom: 'factory/kujira175yatpvkpgw07w0chhzuks3zrrae9z9g2y6r7u5pzqesyau4x9eqqyv0rr/ampMNTA',
          exponent: 0
        }, {
          denom: 'ampMNTA',
          exponent: 6
        }],
      base: 'factory/kujira175yatpvkpgw07w0chhzuks3zrrae9z9g2y6r7u5pzqesyau4x9eqqyv0rr/ampMNTA',
      name: 'ERIS Amplified MNTA',
      display: 'ampMNTA',
      symbol: 'ampMNTA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampmnta.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampmnta.png',
          theme: {
            primaryColorHex: '#618bc8'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The content house of Kujira',
      denomUnits: [{
          denom: 'factory/kujira12cjjeytrqcj25uv349thltcygnp9k0kukpct0e/uwink',
          exponent: 0
        }, {
          denom: 'wink',
          exponent: 6
        }],
      base: 'factory/kujira12cjjeytrqcj25uv349thltcygnp9k0kukpct0e/uwink',
      name: 'WINK',
      display: 'wink',
      symbol: 'WINK',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/wink.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/wink.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/wink.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/wink.svg',
          theme: {
            primaryColorHex: '#fc7991'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Blend Token',
      denomUnits: [{
          denom: 'factory/kujira1slueerjz7mx9jp45u3y0rjwtvhcf8a68wf2mjt/ublend',
          exponent: 0
        }, {
          denom: 'blend',
          exponent: 6
        }],
      base: 'factory/kujira1slueerjz7mx9jp45u3y0rjwtvhcf8a68wf2mjt/ublend',
      name: 'BLEND',
      display: 'blend',
      symbol: 'BLEND',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/blend.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/blend.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Tether USDt on Kujira',
      denomUnits: [{
          denom: 'ibc/20014F963CC9E6488B299622F87B60C6DE71632864859EC08B4753478DAB2BB8',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/20014F963CC9E6488B299622F87B60C6DE71632864859EC08B4753478DAB2BB8',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kava',
            baseDenom: 'erc20/tether/usdt',
            channelId: 'channel-116'
          },
          chain: {
            channelId: 'channel-95',
            path: 'transfer/channel-95/erc20/tether/usdt'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'kava',
            baseDenom: 'erc20/tether/usdt'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primaryColorHex: '#009393',
            backgroundColorHex: '#009393'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      coingeckoId: 'tether'
    },
    {
      description: 'The staking and governance token of Fuzion',
      denomUnits: [{
          denom: 'factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/ufuzn',
          exponent: 0
        }, {
          denom: 'fuzn',
          exponent: 6
        }],
      base: 'factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/ufuzn',
      name: 'Fuzion',
      display: 'fuzn',
      symbol: 'FUZN',
      coingeckoId: 'fuzion',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzion.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzion.svg',
          theme: {
            primaryColorHex: '#f05d8d'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The receipt token of Fuzion',
      denomUnits: [{
          denom: 'factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/urfuzn',
          exponent: 0
        }, {
          denom: 'rfuzn',
          exponent: 6
        }],
      base: 'factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/urfuzn',
      name: 'Fuzion Receipt',
      display: 'rfuzn',
      symbol: 'rFUZN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzionr.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzionr.png',
          theme: {
            primaryColorHex: '#949494'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The yield token of Fuzion',
      denomUnits: [{
          denom: 'factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/uyfuzn',
          exponent: 0
        }, {
          denom: 'yfuzn',
          exponent: 6
        }],
      base: 'factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/uyfuzn',
      name: 'Fuzion Yield',
      display: 'yfuzn',
      symbol: 'yFUZN',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuziony.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuziony.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Quark\'s auto-compounding FUZN derivative',
      denomUnits: [{
          denom: 'factory/kujira1l04ged98c7a7s9tllu62ld09ztylwf442qgm4thfgmadrvngeumsz4zrh2/urcpt',
          exponent: 0
        }, {
          denom: 'qcFUZN',
          exponent: 6
        }],
      base: 'factory/kujira1l04ged98c7a7s9tllu62ld09ztylwf442qgm4thfgmadrvngeumsz4zrh2/urcpt',
      name: 'qcFUZN',
      display: 'qcFUZN',
      symbol: 'qcFUZN',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qcfuzn.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qcfuzn.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Quark\'s auto-compounding AQLA derivative',
      denomUnits: [{
          denom: 'factory/kujira1d9fmsgvu3yvvppvqech2s3dhrqdm5ukngcf82ghcl70edfpwcrlsu6yr0u/urcpt',
          exponent: 0
        }, {
          denom: 'qcAQLA',
          exponent: 6
        }],
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            baseDenom: 'factory/kujira1xe0awk5planmtsmjel5xtx2hzhqdw5p8z66yqd/uaqla',
            chainName: 'kujira'
          },
          provider: 'Quark Protocol',
          chain: {
            contract: 'kujira1d9fmsgvu3yvvppvqech2s3dhrqdm5ukngcf82ghcl70edfpwcrlsu6yr0u'
          }
        }],
      base: 'factory/kujira1d9fmsgvu3yvvppvqech2s3dhrqdm5ukngcf82ghcl70edfpwcrlsu6yr0u/urcpt',
      name: 'qcAQLA',
      display: 'qcAQLA',
      symbol: 'qcAQLA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qcaqla.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qcaqla.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The Aqualibre project\'s token',
      denomUnits: [{
          denom: 'factory/kujira1xe0awk5planmtsmjel5xtx2hzhqdw5p8z66yqd/uaqla',
          exponent: 0
        }, {
          denom: 'AQLA',
          exponent: 6
        }],
      base: 'factory/kujira1xe0awk5planmtsmjel5xtx2hzhqdw5p8z66yqd/uaqla',
      name: 'AQLA',
      display: 'AQLA',
      symbol: 'AQLA',
      coingeckoId: 'aqualibre',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/aqla.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/aqla.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The Revenue & Governance token of Unstake.fi',
      denomUnits: [{
          denom: 'factory/kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh/unstk',
          exponent: 0
        }, {
          denom: 'nstk',
          exponent: 6
        }],
      base: 'factory/kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh/unstk',
      name: 'Unstake Fi',
      display: 'nstk',
      symbol: 'NSTK',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nstk.svg'
      },
      coingeckoId: 'unstake-fi',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nstk.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Local Money',
      denomUnits: [{
          denom: 'factory/kujira1swkuyt08z74n5jl7zr6hx0ru5sa2yev5v896p6/local',
          exponent: 0
        }, {
          denom: 'local',
          exponent: 6
        }],
      base: 'factory/kujira1swkuyt08z74n5jl7zr6hx0ru5sa2yev5v896p6/local',
      name: 'LOCAL',
      display: 'local',
      symbol: 'LOCAL',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/local.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/local.png',
          theme: {
            primaryColorHex: '#242424'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Food for whales',
      denomUnits: [{
          denom: 'factory/kujira166ysf07ze5suazfzj0r05tv8amk2yn8zvsfuu7/uplnk',
          exponent: 0
        }, {
          denom: 'PLNK',
          exponent: 6
        }],
      base: 'factory/kujira166ysf07ze5suazfzj0r05tv8amk2yn8zvsfuu7/uplnk',
      name: 'Plankton',
      display: 'PLNK',
      symbol: 'PLNK',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/PLNK_drk.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/PLNK_drk.png',
          theme: {
            primaryColorHex: '#c87ae9'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      denomUnits: [{
          denom: 'ibc/E5CA126979E2FFB4C70C072F8094D07ECF27773B37623AD2BF7582AD0726F0F3',
          exponent: 0
        }, {
          denom: 'sol',
          exponent: 8
        }],
      typeAsset: 'ics20',
      base: 'ibc/E5CA126979E2FFB4C70C072F8094D07ECF27773B37623AD2BF7582AD0726F0F3',
      name: 'Wormhole Solana',
      display: 'sol',
      symbol: 'SOL.wh',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'gateway',
            baseDenom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA',
            channelId: 'channel-9'
          },
          chain: {
            channelId: 'channel-113',
            path: 'transfer/channel-113/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'gateway',
            baseDenom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.png',
          theme: {
            circle: true,
            backgroundColorHex: '#000000'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.svg'
      }
    },
    {
      denomUnits: [{
          denom: 'ibc/F3AA7EF362EC5E791FE78A0F4CCC69FEE1F9A7485EB1A8CAB3F6601C00522F10',
          exponent: 0
        }, {
          denom: 'evmos',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/F3AA7EF362EC5E791FE78A0F4CCC69FEE1F9A7485EB1A8CAB3F6601C00522F10',
      name: 'Evmos',
      display: 'evmos',
      symbol: 'EVMOS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'evmos',
            baseDenom: 'aevmos',
            channelId: 'channel-18'
          },
          chain: {
            channelId: 'channel-23',
            path: 'transfer/channel-23/aevmos'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'evmos',
            baseDenom: 'aevmos'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg',
          theme: {
            primaryColorHex: '#ec4c34'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
      },
      coingeckoId: 'evmos'
    },
    {
      denomUnits: [{
          denom: 'ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2',
          exponent: 0
        }, {
          denom: 'avax',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2',
      name: 'Axelar Wrapped AVAX',
      display: 'avax',
      symbol: 'wAVAX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'wavax-wei',
            channelId: 'channel-14'
          },
          chain: {
            channelId: 'channel-9',
            path: 'transfer/channel-9/wavax-wei'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'wavax-wei'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
      }
    },
    {
      denomUnits: [{
          denom: 'ibc/FE98AAD68F02F03565E9FA39A5E627946699B2B07115889ED812D8BA639576A9',
          exponent: 0
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/FE98AAD68F02F03565E9FA39A5E627946699B2B07115889ED812D8BA639576A9',
      name: 'Noble USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdc',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-62',
            path: 'transfer/channel-62/uusdc'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'noble',
            baseDenom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          theme: {
            circle: true,
            primaryColorHex: '#2775CA'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      coingeckoId: 'usd-coin'
    },
    {
      denomUnits: [{
          denom: 'ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23',
          exponent: 0
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'uosmo',
            channelId: 'channel-259'
          },
          chain: {
            channelId: 'channel-3',
            path: 'transfer/channel-3/uosmo'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'uosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
          theme: {
            primaryColorHex: '#760dbb'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      coingeckoId: 'osmosis'
    },
    {
      denomUnits: [{
          denom: 'ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F',
          exponent: 0
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F',
      name: 'Axelar USD Coin',
      display: 'usdc',
      symbol: 'axlUSDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'uusdc',
            channelId: 'channel-14'
          },
          chain: {
            channelId: 'channel-9',
            path: 'transfer/channel-9/uusdc'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg',
          theme: {
            primaryColorHex: '#2474cc'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
      },
      coingeckoId: 'axlusdc'
    },
    {
      denomUnits: [{
          denom: 'ibc/3607EB5B5E64DD1C0E12E07F077FF470D5BC4706AFCBC98FE1BA960E5AE4CE07',
          exponent: 0
        }, {
          denom: 'cmdx',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/3607EB5B5E64DD1C0E12E07F077FF470D5BC4706AFCBC98FE1BA960E5AE4CE07',
      name: 'Comdex',
      display: 'cmdx',
      symbol: 'CMDX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'comdex',
            baseDenom: 'ucmdx',
            channelId: 'channel-31'
          },
          chain: {
            channelId: 'channel-18',
            path: 'transfer/channel-18/ucmdx'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'comdex',
            baseDenom: 'ucmdx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg',
          theme: {
            primaryColorHex: '#fc4454'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
      },
      coingeckoId: 'comdex'
    },
    {
      denomUnits: [{
          denom: 'ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5',
          exponent: 0
        }, {
          denom: 'juno',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'ujuno',
            channelId: 'channel-87'
          },
          chain: {
            channelId: 'channel-1',
            path: 'transfer/channel-1/ujuno'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'ujuno'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg',
          theme: {
            primaryColorHex: '#fa7b7b'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
      },
      coingeckoId: 'juno-network'
    },
    {
      denomUnits: [{
          denom: 'ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7',
          exponent: 0
        }, {
          denom: 'weth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7',
      name: 'Axelar Wrapped Ether',
      display: 'weth',
      symbol: 'wETH.axl',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'weth-wei',
            channelId: 'channel-14'
          },
          chain: {
            channelId: 'channel-9',
            path: 'transfer/channel-9/weth-wei'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'weth-wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png',
          theme: {
            primaryColorHex: '#3a3444'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png'
      },
      coingeckoId: 'axlweth'
    },
    {
      denomUnits: [{
          denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
          exponent: 0
        }, {
          denom: 'atom',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
      name: 'Cosmos Hub Atom',
      display: 'atom',
      symbol: 'ATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom',
            channelId: 'channel-343'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/uatom'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
          theme: {
            primaryColorHex: '#272d45'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      coingeckoId: 'cosmos'
    },
    {
      denomUnits: [{
          denom: 'ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986',
          exponent: 0
        }, {
          denom: 'luna',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'terra2',
            baseDenom: 'uluna',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-5',
            path: 'transfer/channel-5/uluna'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'terra2',
            baseDenom: 'uluna'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg',
          theme: {
            primaryColorHex: '#f4de6f'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      },
      coingeckoId: 'terra-luna-2'
    },
    {
      denomUnits: [{
          denom: 'ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602',
          exponent: 0
        }, {
          denom: 'stars',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'stargaze',
            baseDenom: 'ustars',
            channelId: 'channel-49'
          },
          chain: {
            channelId: 'channel-7',
            path: 'transfer/channel-7/ustars'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'stargaze',
            baseDenom: 'ustars'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg',
          theme: {
            primaryColorHex: '#db2777'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
      },
      coingeckoId: 'stargaze'
    },
    {
      denomUnits: [{
          denom: 'ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5',
          exponent: 0
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'secretnetwork',
            baseDenom: 'uscrt',
            channelId: 'channel-22'
          },
          chain: {
            channelId: 'channel-10',
            path: 'transfer/channel-10/uscrt'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'secretnetwork',
            baseDenom: 'uscrt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg',
          theme: {
            primaryColorHex: '#040404'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
      },
      coingeckoId: 'secret'
    },
    {
      denomUnits: [{
          denom: 'ibc/086C1B2E9E611F23D3C9159C858D3F4C6A911D348DFB916A11AE306A865A77A8',
          exponent: 0,
          aliases: ['stk/uatom']
        }, {
          denom: 'stkatom',
          exponent: 6,
          aliases: ['stk/atom']
        }],
      typeAsset: 'ics20',
      base: 'ibc/086C1B2E9E611F23D3C9159C858D3F4C6A911D348DFB916A11AE306A865A77A8',
      name: 'PSTAKE staked ATOM',
      display: 'stkatom',
      symbol: 'stkATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'persistence',
            baseDenom: 'stk/uatom',
            channelId: 'channel-152'
          },
          chain: {
            channelId: 'channel-158',
            path: 'transfer/channel-158/stk/uatom'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'persistence',
            baseDenom: 'stk/uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg',
          theme: {
            primaryColorHex: '#c4444c'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
      },
      coingeckoId: 'stkatom'
    },
    {
      description: 'BackBone Labs Liquid Staked KUJI',
      denomUnits: [{
          denom: 'factory/kujira15e8q5wzlk5k38gjxlhse3vu6vqnafysncx2ltexd6y9gx50vuj2qpt7dgv/boneKuji',
          exponent: 0
        }, {
          denom: 'bKUJI',
          exponent: 6
        }],
      base: 'factory/kujira15e8q5wzlk5k38gjxlhse3vu6vqnafysncx2ltexd6y9gx50vuj2qpt7dgv/boneKuji',
      name: 'BackBone Labs Liquid Staked KUJI',
      display: 'bKUJI',
      symbol: 'bKUJI',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bKUJI.png'
      },
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'kujira',
            baseDenom: 'ukuji'
          },
          provider: 'BackBoneLabs'
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bKUJI.png',
          theme: {
            primaryColorHex: '#cc3533'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      denomUnits: [{
          denom: 'ibc/82B298F9E74A9A211C55C67C7AB0C790836BD43672D5DD830F7AE2C5D010AD7D',
          exponent: 0,
          aliases: ['factory/migaloo1d0uma9qzcts4fzt7ml39xp44aut5k6qyjfzz4asalnecppppr3rsl52vvv/rstk']
        }, {
          denom: 'rstk',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/82B298F9E74A9A211C55C67C7AB0C790836BD43672D5DD830F7AE2C5D010AD7D',
      name: 'Restake DAO Token',
      display: 'rstk',
      symbol: 'RSTK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'migaloo',
            baseDenom: 'factory/migaloo1d0uma9qzcts4fzt7ml39xp44aut5k6qyjfzz4asalnecppppr3rsl52vvv/rstk',
            channelId: 'channel-8'
          },
          chain: {
            channelId: 'channel-58',
            path: 'transfer/channel-58/factory/migaloo1d0uma9qzcts4fzt7ml39xp44aut5k6qyjfzz4asalnecppppr3rsl52vvv/rstk'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'migaloo',
            baseDenom: 'factory/migaloo1d0uma9qzcts4fzt7ml39xp44aut5k6qyjfzz4asalnecppppr3rsl52vvv/rstk'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rstk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rstk.svg',
          theme: {
            primaryColorHex: '#3ccc64'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rstk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rstk.svg'
      }
    },
    {
      description: 'Ghost Vault USK',
      denomUnits: [{
          denom: 'factory/kujira1w4yaama77v53fp0f9343t9w2f932z526vj970n2jv5055a7gt92sxgwypf/urcpt',
          exponent: 0
        }, {
          denom: 'xusk',
          exponent: 6
        }],
      base: 'factory/kujira1w4yaama77v53fp0f9343t9w2f932z526vj970n2jv5055a7gt92sxgwypf/urcpt',
      name: 'Ghost Vault USK',
      display: 'xusk',
      symbol: 'xUSK',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/xusk.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/xusk.png',
          theme: {
            primaryColorHex: '#303741'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Ghost Vault MNTA',
      denomUnits: [{
          denom: 'factory/kujira1ya42knfcsvy6eztegsn3hz7zpjvhzn05ge85xa2dy2zrjeul9hnspp3c06/urcpt',
          exponent: 0
        }, {
          denom: 'xmnta',
          exponent: 6
        }],
      base: 'factory/kujira1ya42knfcsvy6eztegsn3hz7zpjvhzn05ge85xa2dy2zrjeul9hnspp3c06/urcpt',
      name: 'Ghost Vault MNTA',
      display: 'xmnta',
      symbol: 'xMNTA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/xmnta.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/xmnta.png',
          theme: {
            primaryColorHex: '#0f151f'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Stride staked ATOM',
      denomUnits: [{
          denom: 'ibc/0306D6B66EAA2EDBB7EAD23C0EC9DDFC69BB43E80B398035E90FBCFEF3FD1A87',
          exponent: 0
        }, {
          denom: 'statom',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/0306D6B66EAA2EDBB7EAD23C0EC9DDFC69BB43E80B398035E90FBCFEF3FD1A87',
      name: 'stATOM',
      display: 'statom',
      symbol: 'stATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stuatom',
            channelId: 'channel-8'
          },
          chain: {
            channelId: 'channel-32',
            path: 'transfer/channel-32/stuatom'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stride',
            baseDenom: 'stuatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }],
      coingeckoId: 'stride-staked-atom'
    },
    {
      description: 'Stride staked OSMO',
      denomUnits: [{
          denom: 'ibc/F97BDCE220CCB52139C73066E36C45EC7EDCEEF1DAFF891A34F4FBA195A2E6E8',
          exponent: 0
        }, {
          denom: 'stosmo',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F97BDCE220CCB52139C73066E36C45EC7EDCEEF1DAFF891A34F4FBA195A2E6E8',
      name: 'Stride staked OSMO',
      display: 'stosmo',
      symbol: 'stOSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stuosmo',
            channelId: 'channel-8'
          },
          chain: {
            channelId: 'channel-32',
            path: 'transfer/channel-32/stuosmo'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stride',
            baseDenom: 'stuosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }],
      coingeckoId: 'stride-staked-osmo'
    },
    {
      description: 'LP Bow: DOT.axl-MNTA',
      denomUnits: [{
          denom: 'factory/kujira10qyzrqaza0f593cmnl4sc3p3nhqqakn9j56d899u723pznxpn8us6cypuw/ulp',
          exponent: 0
        }, {
          denom: 'lp-dot-mnta',
          exponent: 6
        }],
      base: 'factory/kujira10qyzrqaza0f593cmnl4sc3p3nhqqakn9j56d899u723pznxpn8us6cypuw/ulp',
      name: 'LP Bow: DOT.axl-MNTA',
      display: 'lp-dot-mnta',
      symbol: 'LP DOT.axl-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: SHD-MNTA',
      denomUnits: [{
          denom: 'factory/kujira12tpc335t72qtrjh64ccdydzsr9qtswkqn72cyvfj4d5hmtgynphsv4xjtu/ulp',
          exponent: 0
        }, {
          denom: 'lp-shd-mnta',
          exponent: 6
        }],
      base: 'factory/kujira12tpc335t72qtrjh64ccdydzsr9qtswkqn72cyvfj4d5hmtgynphsv4xjtu/ulp',
      name: 'LP Bow: SHD-MNTA',
      display: 'lp-shd-mnta',
      symbol: 'LP SHD-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: DYDX-MNTA',
      denomUnits: [{
          denom: 'factory/kujira13g2eelkf9q4md4xx52ylqvlgpccn50f2vyu05eazufd2g4jatmhq2425pq/ulp',
          exponent: 0
        }, {
          denom: 'lp-dydx-mnta',
          exponent: 6
        }],
      base: 'factory/kujira13g2eelkf9q4md4xx52ylqvlgpccn50f2vyu05eazufd2g4jatmhq2425pq/ulp',
      name: 'LP Bow: DYDX-MNTA',
      display: 'lp-dydx-mnta',
      symbol: 'LP DYDX-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: wAVAX.axl-MNTA',
      denomUnits: [{
          denom: 'factory/kujira15pk8c09vcsgsdq4xlh2qfqxtu2r8pgdy7nggkqj8p3h2phke80pqwnvtzk/ulp',
          exponent: 0
        }, {
          denom: 'lp-wavax-mnta',
          exponent: 6
        }],
      base: 'factory/kujira15pk8c09vcsgsdq4xlh2qfqxtu2r8pgdy7nggkqj8p3h2phke80pqwnvtzk/ulp',
      name: 'LP Bow: wAVAX.axl-MNTA',
      display: 'lp-wavax-mnta',
      symbol: 'LP wAVAX.axl-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: CHEQ-MNTA',
      denomUnits: [{
          denom: 'factory/kujira15w6jhxsv924mn9cfr0qg9z36hltmw4rzd68x40d9re6hzyhslumqjw9zqd/ulp',
          exponent: 0
        }, {
          denom: 'lp-cheq-mnta',
          exponent: 6
        }],
      base: 'factory/kujira15w6jhxsv924mn9cfr0qg9z36hltmw4rzd68x40d9re6hzyhslumqjw9zqd/ulp',
      name: 'LP Bow: CHEQ-MNTA',
      display: 'lp-cheq-mnta',
      symbol: 'LP CHEQ-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: FUZN-MNTA',
      denomUnits: [{
          denom: 'factory/kujira1622xuv8unv22xzazljvqh8uukcdz3yzmrp6axgerh7vxg4kum5tqcwcqmv/ulp',
          exponent: 0
        }, {
          denom: 'lp-fuzn-mnta',
          exponent: 6
        }],
      base: 'factory/kujira1622xuv8unv22xzazljvqh8uukcdz3yzmrp6axgerh7vxg4kum5tqcwcqmv/ulp',
      name: 'LP Bow: FUZN-MNTA',
      display: 'lp-fuzn-mnta',
      symbol: 'LP FUZN-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: SOMM-MNTA',
      denomUnits: [{
          denom: 'factory/kujira17djzq5x5e5zm9q9zlp6dtxdt9p8q2zvj0qtmjs0wrxm5g9e2vf5q9d6y2t/ulp',
          exponent: 0
        }, {
          denom: 'lp-somm-mnta',
          exponent: 6
        }],
      base: 'factory/kujira17djzq5x5e5zm9q9zlp6dtxdt9p8q2zvj0qtmjs0wrxm5g9e2vf5q9d6y2t/ulp',
      name: 'LP Bow: SOMM-MNTA',
      display: 'lp-somm-mnta',
      symbol: 'LP SOMM-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: wETH.axl-MNTA',
      denomUnits: [{
          denom: 'factory/kujira17x2v39aut0paj5d6wc5jxvqqxrdhy9kvca4y5xn6vsfpsxkgc6gq7n4tg0/ulp',
          exponent: 0
        }, {
          denom: 'lp-weth-mnta',
          exponent: 6
        }],
      base: 'factory/kujira17x2v39aut0paj5d6wc5jxvqqxrdhy9kvca4y5xn6vsfpsxkgc6gq7n4tg0/ulp',
      name: 'LP Bow: wETH.axl-MNTA',
      display: 'lp-weth-mnta',
      symbol: 'LP wETH.axl-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: NTRN-MNTA',
      denomUnits: [{
          denom: 'factory/kujira18lhugzap20ndlqr5j2p86yk4pxpe9jjuac05z0ypxuwn3mm5vjhsjh4etr/ulp',
          exponent: 0
        }, {
          denom: 'lp-ntrn-mnta',
          exponent: 6
        }],
      base: 'factory/kujira18lhugzap20ndlqr5j2p86yk4pxpe9jjuac05z0ypxuwn3mm5vjhsjh4etr/ulp',
      name: 'LP Bow: NTRN-MNTA',
      display: 'lp-ntrn-mnta',
      symbol: 'LP NTRN-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: wFTM.axl-MNTA',
      denomUnits: [{
          denom: 'factory/kujira18mveas6xseaqu3fmukwv2ac6mp4hszk08lvyamedytjs0kxm42yqs9v89x/ulp',
          exponent: 0
        }, {
          denom: 'lp-wftm-mnta',
          exponent: 6
        }],
      base: 'factory/kujira18mveas6xseaqu3fmukwv2ac6mp4hszk08lvyamedytjs0kxm42yqs9v89x/ulp',
      name: 'LP Bow: wFTM.axl-MNTA',
      display: 'lp-wftm-mnta',
      symbol: 'LP wFTM.axl-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: STARS-MNTA',
      denomUnits: [{
          denom: 'factory/kujira1av284rnqh6s0l2lwdqgpgz8wuva3wh9lkmlsupjd9escn5v4fels6kwc7v/ulp',
          exponent: 0
        }, {
          denom: 'lp-stars-mnta',
          exponent: 6
        }],
      base: 'factory/kujira1av284rnqh6s0l2lwdqgpgz8wuva3wh9lkmlsupjd9escn5v4fels6kwc7v/ulp',
      name: 'LP Bow: STARS-MNTA',
      display: 'lp-stars-mnta',
      symbol: 'LP STARS-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: TIA-MNTA',
      denomUnits: [{
          denom: 'factory/kujira1cpdyhrkwdnz38u45el3zq7007at9dm6h05tc36zpxvs6vrdwzrrskt0tgg/ulp',
          exponent: 0
        }, {
          denom: 'lp-tia-mnta',
          exponent: 6
        }],
      base: 'factory/kujira1cpdyhrkwdnz38u45el3zq7007at9dm6h05tc36zpxvs6vrdwzrrskt0tgg/ulp',
      name: 'LP Bow: TIA-MNTA',
      display: 'lp-tia-mnta',
      symbol: 'LP TIA-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: SOL.wh-MNTA',
      denomUnits: [{
          denom: 'factory/kujira1eqd96322ec258w7k9n9cfqkusrlvzwv38jkph3qs720egdv0epmq70j2zl/ulp',
          exponent: 0
        }, {
          denom: 'lp-sol-mnta',
          exponent: 6
        }],
      base: 'factory/kujira1eqd96322ec258w7k9n9cfqkusrlvzwv38jkph3qs720egdv0epmq70j2zl/ulp',
      name: 'LP Bow: SOL.wh-MNTA',
      display: 'lp-sol-mnta',
      symbol: 'LP SOL.wh-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: DYM-MNTA',
      denomUnits: [{
          denom: 'factory/kujira1fg7wmsde7ygw3pm6hqmd29cdvp947anajmunsvk0guvjta3md25qdqk4fw/ulp',
          exponent: 0
        }, {
          denom: 'lp-dym-mnta',
          exponent: 6
        }],
      base: 'factory/kujira1fg7wmsde7ygw3pm6hqmd29cdvp947anajmunsvk0guvjta3md25qdqk4fw/ulp',
      name: 'LP Bow: DYM-MNTA',
      display: 'lp-dym-mnta',
      symbol: 'LP DYM-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: AKT-MNTA',
      denomUnits: [{
          denom: 'factory/kujira1gnftck9586x0nhsqsj99k9zednl6tx4kezu9hpph0u6jtqnafpyqxha3me/ulp',
          exponent: 0
        }, {
          denom: 'lp-akt-mnta',
          exponent: 6
        }],
      base: 'factory/kujira1gnftck9586x0nhsqsj99k9zednl6tx4kezu9hpph0u6jtqnafpyqxha3me/ulp',
      name: 'LP Bow: AKT-MNTA',
      display: 'lp-akt-mnta',
      symbol: 'LP AKT-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: LINK.axl-MNTA',
      denomUnits: [{
          denom: 'factory/kujira1gnvja05kkmpeh9dnxl0c2p4sde7fpsy2r44njzyqgpsf72nqs78q3gzpzc/ulp',
          exponent: 0
        }, {
          denom: 'lp-link-mnta',
          exponent: 6
        }],
      base: 'factory/kujira1gnvja05kkmpeh9dnxl0c2p4sde7fpsy2r44njzyqgpsf72nqs78q3gzpzc/ulp',
      name: 'LP Bow: LINK.axl-MNTA',
      display: 'lp-link-mnta',
      symbol: 'LP LINK.axl-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: wTAO.grv-MNTA',
      denomUnits: [{
          denom: 'factory/kujira1gz2kvfw7hpds9fvygwkj64znl3a9pw697g77cspcq5y4vj3ru45s7qc0rd/ulp',
          exponent: 0
        }, {
          denom: 'lp-wtao-mnta',
          exponent: 6
        }],
      base: 'factory/kujira1gz2kvfw7hpds9fvygwkj64znl3a9pw697g77cspcq5y4vj3ru45s7qc0rd/ulp',
      name: 'LP Bow: wTAO.grv-MNTA',
      display: 'lp-wtao-mnta',
      symbol: 'LP wTAO.grv-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: MNTA-KUJI',
      denomUnits: [{
          denom: 'factory/kujira1h75predtjdm2e7u8cuvqs3usc6xs2mxlkcr20zsshvw3qap25frsr4z949/ulp',
          exponent: 0
        }, {
          denom: 'lp-mnta-kuji',
          exponent: 6
        }],
      base: 'factory/kujira1h75predtjdm2e7u8cuvqs3usc6xs2mxlkcr20zsshvw3qap25frsr4z949/ulp',
      name: 'LP Bow: MNTA-KUJI',
      display: 'lp-mnta-kuji',
      symbol: 'LP MNTA-KUJI',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: AXL-MNTA',
      denomUnits: [{
          denom: 'factory/kujira1h929g9e9vxhc5y8v7uexdrncacxdatjupr67velewafwepfyfaaq6s7l3v/ulp',
          exponent: 0
        }, {
          denom: 'lp-axl-mnta',
          exponent: 6
        }],
      base: 'factory/kujira1h929g9e9vxhc5y8v7uexdrncacxdatjupr67velewafwepfyfaaq6s7l3v/ulp',
      name: 'LP Bow: AXL-MNTA',
      display: 'lp-axl-mnta',
      symbol: 'LP AXL-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: ATOM-MNTA',
      denomUnits: [{
          denom: 'factory/kujira1h9f3k54j060pzlnea8ep8qfymsmwl5yhwc5hqept5p2esqzve7tq2ghnm4/ulp',
          exponent: 0
        }, {
          denom: 'lp-atom-mnta',
          exponent: 6
        }],
      base: 'factory/kujira1h9f3k54j060pzlnea8ep8qfymsmwl5yhwc5hqept5p2esqzve7tq2ghnm4/ulp',
      name: 'LP Bow: ATOM-MNTA',
      display: 'lp-atom-mnta',
      symbol: 'LP ATOM-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: ARB-MNTA',
      denomUnits: [{
          denom: 'factory/kujira1kc90tgn4ucvdv4c9xycktanwz2lna0nfel6244ylqjvhaetfntusnmyu3d/ulp',
          exponent: 0
        }, {
          denom: 'lp-arb-mnta',
          exponent: 6
        }],
      base: 'factory/kujira1kc90tgn4ucvdv4c9xycktanwz2lna0nfel6244ylqjvhaetfntusnmyu3d/ulp',
      name: 'LP Bow: ARB-MNTA',
      display: 'lp-arb-mnta',
      symbol: 'LP ARB-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: WHALE-MNTA',
      denomUnits: [{
          denom: 'factory/kujira1jsjygyj8hwa4f0p9wwgct4yzmzzexe5x5u6l40l7ty2qzwwwsemqavhk3x/ulp',
          exponent: 0
        }, {
          denom: 'lp-whale-mnta',
          exponent: 6
        }],
      base: 'factory/kujira1jsjygyj8hwa4f0p9wwgct4yzmzzexe5x5u6l40l7ty2qzwwwsemqavhk3x/ulp',
      name: 'LP Bow: WHALE-MNTA',
      display: 'lp-whale-mnta',
      symbol: 'LP WHALE-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: SCRT-MNTA',
      denomUnits: [{
          denom: 'factory/kujira1p7w9ncnnme9yzzhrvzv0hnsa5u5ga06v0ckt7lq9yfap04hc5k9sn2vf6w/ulp',
          exponent: 0
        }, {
          denom: 'lp-scrt-mnta',
          exponent: 6
        }],
      base: 'factory/kujira1p7w9ncnnme9yzzhrvzv0hnsa5u5ga06v0ckt7lq9yfap04hc5k9sn2vf6w/ulp',
      name: 'LP Bow: SCRT-MNTA',
      display: 'lp-scrt-mnta',
      symbol: 'LP SCRT-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: wstETH.axl-MNTA',
      denomUnits: [{
          denom: 'factory/kujira1qx3hcr297qmgjt5f6u9peldf4phxqufvmew8d3eey3ns29e8qp3snj6jfu/ulp',
          exponent: 0
        }, {
          denom: 'lp-wsteth-mnta',
          exponent: 6
        }],
      base: 'factory/kujira1qx3hcr297qmgjt5f6u9peldf4phxqufvmew8d3eey3ns29e8qp3snj6jfu/ulp',
      name: 'LP Bow: wstETH.axl-MNTA',
      display: 'lp-wsteth-mnta',
      symbol: 'LP wstETH.axl-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: wMATIC.axl-MNTA',
      denomUnits: [{
          denom: 'factory/kujira1smfdnww47xav4nn849xphku3gk3xp7a24fk533dce8masnsz4v8quklajx/ulp',
          exponent: 0
        }, {
          denom: 'lp-wmatic-mnta',
          exponent: 6
        }],
      base: 'factory/kujira1smfdnww47xav4nn849xphku3gk3xp7a24fk533dce8masnsz4v8quklajx/ulp',
      name: 'LP Bow: wMATIC.axl-MNTA',
      display: 'lp-wmatic-mnta',
      symbol: 'LP wMATIC.axl-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: UNI.axl-MNTA',
      denomUnits: [{
          denom: 'factory/kujira1t4mr2xt4ky4mfwcy752chzlquam3hzs44mt8vwyec8mvypmzxu5s90vamt/ulp',
          exponent: 0
        }, {
          denom: 'lp-uni-mnta',
          exponent: 6
        }],
      base: 'factory/kujira1t4mr2xt4ky4mfwcy752chzlquam3hzs44mt8vwyec8mvypmzxu5s90vamt/ulp',
      name: 'LP Bow: UNI.axl-MNTA',
      display: 'lp-uni-mnta',
      symbol: 'LP UNI.axl-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: yieldETH.axl-MNTA',
      denomUnits: [{
          denom: 'factory/kujira1u8dluwa4a83q7anz0cgpmma605r07a06f0789ajcl8l0xjrplqss005cgn/ulp',
          exponent: 0
        }, {
          denom: 'lp-yieldeth-mnta',
          exponent: 6
        }],
      base: 'factory/kujira1u8dluwa4a83q7anz0cgpmma605r07a06f0789ajcl8l0xjrplqss005cgn/ulp',
      name: 'LP Bow: yieldETH.axl-MNTA',
      display: 'lp-yieldeth-mnta',
      symbol: 'LP yieldETH.axl-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: wBTC.axl-MNTA',
      denomUnits: [{
          denom: 'factory/kujira1vj39mdwekxznxxa97fv5gt957cghfdqhwju8fdv5ysu0x6vsyhps4zmqjl/ulp',
          exponent: 0
        }, {
          denom: 'lp-wbtc-mnta',
          exponent: 6
        }],
      base: 'factory/kujira1vj39mdwekxznxxa97fv5gt957cghfdqhwju8fdv5ysu0x6vsyhps4zmqjl/ulp',
      name: 'LP Bow: wBTC.axl-MNTA',
      display: 'lp-wbtc-mnta',
      symbol: 'LP wBTC.axl-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: PAXG.grv-MNTA',
      denomUnits: [{
          denom: 'factory/kujira1vqdyup9zxxl9gqy5hwh593vvuc84lstldj7qzt7fylf3q3e3uemqlwpg9y/ulp',
          exponent: 0
        }, {
          denom: 'lp-paxg-mnta',
          exponent: 6
        }],
      base: 'factory/kujira1vqdyup9zxxl9gqy5hwh593vvuc84lstldj7qzt7fylf3q3e3uemqlwpg9y/ulp',
      name: 'LP Bow: PAXG.grv-MNTA',
      display: 'lp-paxg-mnta',
      symbol: 'LP PAXG.grv-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: wBNB.axl-MNTA',
      denomUnits: [{
          denom: 'factory/kujira1y24jwsv84lnuv5j78qeqz5ujjpd058qsft7wfc0nk9jvycugm32sqnq53d/ulp',
          exponent: 0
        }, {
          denom: 'lp-wbnb-mnta',
          exponent: 6
        }],
      base: 'factory/kujira1y24jwsv84lnuv5j78qeqz5ujjpd058qsft7wfc0nk9jvycugm32sqnq53d/ulp',
      name: 'LP Bow: wBNB.axl-MNTA',
      display: 'lp-wbnb-mnta',
      symbol: 'LP wBNB.axl-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: OSMO-MNTA',
      denomUnits: [{
          denom: 'factory/kujira1ygperwf0dc9ng2jffj0pwnnray3rscn9el6d78qjtt25qwgqukqszmdwtv/ulp',
          exponent: 0
        }, {
          denom: 'lp-osmo-mnta',
          exponent: 6
        }],
      base: 'factory/kujira1ygperwf0dc9ng2jffj0pwnnray3rscn9el6d78qjtt25qwgqukqszmdwtv/ulp',
      name: 'LP Bow: OSMO-MNTA',
      display: 'lp-osmo-mnta',
      symbol: 'LP OSMO-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: INJ-MNTA',
      denomUnits: [{
          denom: 'factory/kujira1znx048dcc6arqfw6kpckl0k4ts2h7cdx20nk22wz2cxh5vle3wxqknk238/ulp',
          exponent: 0
        }, {
          denom: 'lp-inj-mnta',
          exponent: 6
        }],
      base: 'factory/kujira1znx048dcc6arqfw6kpckl0k4ts2h7cdx20nk22wz2cxh5vle3wxqknk238/ulp',
      name: 'LP Bow: INJ-MNTA',
      display: 'lp-inj-mnta',
      symbol: 'LP INJ-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: stOSMO-OSMO',
      denomUnits: [{
          denom: 'factory/kujira18sek950cg92gd0kvpj67dfg6p7kee6hzw92etcf2jgufr3mttvaslt5sal/ulp',
          exponent: 0
        }, {
          denom: 'lp-stosmo-osmo',
          exponent: 6
        }],
      base: 'factory/kujira18sek950cg92gd0kvpj67dfg6p7kee6hzw92etcf2jgufr3mttvaslt5sal/ulp',
      name: 'LP Bow: stOSMO-OSMO',
      display: 'lp-stosmo-osmo',
      symbol: 'LP stOSMO-OSMO',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: wstETH.axl-wETH.axl',
      denomUnits: [{
          denom: 'factory/kujira1lyyeyuw4qgan6nz45thw2m0nmxa457uz7cp9dqw5d9a0h7ccek7qavkm6g/ulp',
          exponent: 0
        }, {
          denom: 'lp-wsteth-weth',
          exponent: 6
        }],
      base: 'factory/kujira1lyyeyuw4qgan6nz45thw2m0nmxa457uz7cp9dqw5d9a0h7ccek7qavkm6g/ulp',
      name: 'LP Bow: wstETH.axl-wETH.axl',
      display: 'lp-wsteth-weth',
      symbol: 'LP wstETH.axl-wETH.axl',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: qcMNTA-MNTA',
      denomUnits: [{
          denom: 'factory/kujira1ul00h0a2kgcg9x2yfa86wj9qguhyv7jmpjpw6ztt24j9mn9xjw3slawyc8/ulp',
          exponent: 0
        }, {
          denom: 'lp-qcmnta-mnta',
          exponent: 6
        }],
      base: 'factory/kujira1ul00h0a2kgcg9x2yfa86wj9qguhyv7jmpjpw6ztt24j9mn9xjw3slawyc8/ulp',
      name: 'LP Bow: qcMNTA-MNTA',
      display: 'lp-qcmnta-mnta',
      symbol: 'LP qcMNTA-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: ampMNTA-MNTA',
      denomUnits: [{
          denom: 'factory/kujira1vj36ntsqd3msc69lxldcv9dd50jngknmael9e07rz4fpn5kyq0jsglvz2m/ulp',
          exponent: 0
        }, {
          denom: 'lp-ampmnta-mnta',
          exponent: 6
        }],
      base: 'factory/kujira1vj36ntsqd3msc69lxldcv9dd50jngknmael9e07rz4fpn5kyq0jsglvz2m/ulp',
      name: 'LP Bow: ampMNTA-MNTA',
      display: 'lp-ampmnta-mnta',
      symbol: 'LP ampMNTA-MNTA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: wETH.axl-USK',
      denomUnits: [{
          denom: 'factory/kujira1n648rfqqvjxm6c7zgfnfqay85rkapgg0z7da9pnmjazz5m5d7l0qxdtq90/ulp',
          exponent: 0
        }, {
          denom: 'lp-weth-usk',
          exponent: 6
        }],
      base: 'factory/kujira1n648rfqqvjxm6c7zgfnfqay85rkapgg0z7da9pnmjazz5m5d7l0qxdtq90/ulp',
      name: 'LP Bow: wETH.axl-USK',
      display: 'lp-weth-usk',
      symbol: 'LP wETH.axl-USK',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The token of NAMI',
      denomUnits: [{
          denom: 'factory/kujira13x2l25mpkhwnwcwdzzd34cr8fyht9jlj7xu9g4uffe36g3fmln8qkvm3qn/unami',
          exponent: 0
        }, {
          denom: 'nami',
          exponent: 6
        }],
      base: 'factory/kujira13x2l25mpkhwnwcwdzzd34cr8fyht9jlj7xu9g4uffe36g3fmln8qkvm3qn/unami',
      name: 'NAMI',
      display: 'nami',
      symbol: 'NAMI',
      coingeckoId: 'nami-protocol',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nami.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nami.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nami.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nami.svg',
          theme: {
            primaryColorHex: '#1a1b1b'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The receipt token of NAMI Protocol',
      denomUnits: [{
          denom: 'factory/kujira18thffdpuz8tm3mwwun4uhks8a2v7ye0jmw3fllqhklma82lqkpms20gh9c/unausd',
          exponent: 0
        }, {
          denom: 'nausd',
          exponent: 6
        }],
      base: 'factory/kujira18thffdpuz8tm3mwwun4uhks8a2v7ye0jmw3fllqhklma82lqkpms20gh9c/unausd',
      name: 'NAUSD',
      display: 'nausd',
      symbol: 'NAUSD',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nausd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nausd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nausd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nausd.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The token of MCTest',
      denomUnits: [{
          denom: 'factory/kujira1mn2pgkggquqm2m44zqlaq29jxwtad53qkv4xy4/MCTest',
          exponent: 0
        }, {
          denom: 'mctest',
          exponent: 6
        }],
      base: 'factory/kujira1mn2pgkggquqm2m44zqlaq29jxwtad53qkv4xy4/MCTest',
      name: 'MCTEST',
      display: 'mctest',
      symbol: 'MC01',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mctest.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mctest.png',
          theme: {
            primaryColorHex: '#1a1b1b'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The token of AUTO',
      denomUnits: [{
          denom: 'factory/kujira13x2l25mpkhwnwcwdzzd34cr8fyht9jlj7xu9g4uffe36g3fmln8qkvm3qn/uauto',
          exponent: 0
        }, {
          denom: 'auto',
          exponent: 6
        }],
      base: 'factory/kujira13x2l25mpkhwnwcwdzzd34cr8fyht9jlj7xu9g4uffe36g3fmln8qkvm3qn/uauto',
      name: 'AUTO',
      display: 'auto',
      symbol: 'AUTO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/auto.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/auto.png',
          theme: {
            primaryColorHex: '#1a1b1b'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Quark\'s auto-compounding DYDX derivative',
      denomUnits: [{
          denom: 'factory/kujira1seqq2ekz47uqayshqkg5wqx5vcyrmtwcl9vscnwy2gjh7mz5aapsdfxsd5/urcpt',
          exponent: 0
        }, {
          denom: 'qcDYDX',
          exponent: 18
        }],
      base: 'factory/kujira1seqq2ekz47uqayshqkg5wqx5vcyrmtwcl9vscnwy2gjh7mz5aapsdfxsd5/urcpt',
      name: 'qcDYDX',
      display: 'qcDYDX',
      symbol: 'qcDYDX',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qcdydx.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qcdydx.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The Kujira Recovery Token',
      denomUnits: [{
          denom: 'factory/kujira1tsekaqv9vmem0zwskmf90gpf0twl6k57e8vdnq/urkuji',
          exponent: 0
        }, {
          denom: 'rkuji',
          exponent: 6
        }],
      base: 'factory/kujira1tsekaqv9vmem0zwskmf90gpf0twl6k57e8vdnq/urkuji',
      name: 'rKUJI',
      display: 'rkuji',
      symbol: 'rKUJI',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/rkuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/rkuji.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/rkuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/rkuji.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: ATOM-USK',
      denomUnits: [{
          denom: 'factory/kujira1yncutssgh2vj9scaymtteg949hwcft07c6qmgarxnaf04yesq3jsn6g2uv/ulp',
          exponent: 0
        }, {
          denom: 'lp-atom-usk',
          exponent: 6
        }],
      base: 'factory/kujira1yncutssgh2vj9scaymtteg949hwcft07c6qmgarxnaf04yesq3jsn6g2uv/ulp',
      name: 'LP Bow: ATOM-USK',
      display: 'lp-atom-usk',
      symbol: 'LP ATOM-USK',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: wETH.axl-USK',
      denomUnits: [{
          denom: 'factory/kujira1xwvvjq5w0887v2vz4e83kcu38s0jq8q8lqa3z5hxm295q7y4uejqp24la7/ulp',
          exponent: 0
        }, {
          denom: 'lp-weth-usk',
          exponent: 6
        }],
      base: 'factory/kujira1xwvvjq5w0887v2vz4e83kcu38s0jq8q8lqa3z5hxm295q7y4uejqp24la7/ulp',
      name: 'LP Bow: wETH.axl-USK',
      display: 'lp-weth-usk',
      symbol: 'LP wETH.axl-USK',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: SOL.wh-USK',
      denomUnits: [{
          denom: 'factory/kujira1vcmh95lje5dln782pxckma65eujs4sv960w22whgsp7a2ajsc6lsvnlhgd/ulp',
          exponent: 0
        }, {
          denom: 'lp-sol-usk',
          exponent: 6
        }],
      base: 'factory/kujira1vcmh95lje5dln782pxckma65eujs4sv960w22whgsp7a2ajsc6lsvnlhgd/ulp',
      name: 'LP Bow: SOL.wh-USK',
      display: 'lp-sol-usk',
      symbol: 'LP SOL.wh-USK',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: wETH.axl-USDC',
      denomUnits: [{
          denom: 'factory/kujira1n4jfv39hzv2dtshzv6gj4hp8rkdy5rrsr7l84lc3x9cahz4v0umq24q3lu/ulp',
          exponent: 0
        }, {
          denom: 'lp-weth-usdc',
          exponent: 6
        }],
      base: 'factory/kujira1n4jfv39hzv2dtshzv6gj4hp8rkdy5rrsr7l84lc3x9cahz4v0umq24q3lu/ulp',
      name: 'LP Bow: wETH.axl-USDC',
      display: 'lp-weth-usdc',
      symbol: 'LP wETH.axl-USDC',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: DYDX-USK',
      denomUnits: [{
          denom: 'factory/kujira1lctu7hy65466fxw3tcqf8w45zwrpwgd9chvjqpgyfgcr73k774nsv4ya6t/ulp',
          exponent: 0
        }, {
          denom: 'lp-dydx-usk',
          exponent: 6
        }],
      base: 'factory/kujira1lctu7hy65466fxw3tcqf8w45zwrpwgd9chvjqpgyfgcr73k774nsv4ya6t/ulp',
      name: 'LP Bow: DYDX-USK',
      display: 'lp-dydx-usk',
      symbol: 'LP DYDX-USK',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: AKT-USDC',
      denomUnits: [{
          denom: 'factory/kujira1g5st8p6qdyf23zzerjcxgpr2r7a9wzdyaymu79ngg6ve3m9v3n4sdetv4e/ulp',
          exponent: 0
        }, {
          denom: 'lp-akt-usdc',
          exponent: 6
        }],
      base: 'factory/kujira1g5st8p6qdyf23zzerjcxgpr2r7a9wzdyaymu79ngg6ve3m9v3n4sdetv4e/ulp',
      name: 'LP Bow: AKT-USDC',
      display: 'lp-akt-usdc',
      symbol: 'LP AKT-USDC',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: wBTC-USK',
      denomUnits: [{
          denom: 'factory/kujira1d7jt9zwlnpvf7sskfm57c77pm9mtwczqre75t9k80ees0v523kasss9htj/ulp',
          exponent: 0
        }, {
          denom: 'lp-wbtc-usk',
          exponent: 6
        }],
      base: 'factory/kujira1d7jt9zwlnpvf7sskfm57c77pm9mtwczqre75t9k80ees0v523kasss9htj/ulp',
      name: 'LP Bow: wBTC-USK',
      display: 'lp-wbtc-usk',
      symbol: 'LP wBTC-USK',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: wBTC.axl-wBTC',
      denomUnits: [{
          denom: 'factory/kujira1c4e2zk4z0anrufjh64gxtse6e4s5g52fe2ja8ke3r9e0pvpd0z0qws8zsp/ulp',
          exponent: 0
        }, {
          denom: 'lp-wbtc-wbtc',
          exponent: 8
        }],
      base: 'factory/kujira1c4e2zk4z0anrufjh64gxtse6e4s5g52fe2ja8ke3r9e0pvpd0z0qws8zsp/ulp',
      name: 'LP Bow: wBTC.axl-wBTC',
      display: 'lp-wbtc-wbtc',
      symbol: 'LP wBTC.axl-wBTC',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: INJ-USDC',
      denomUnits: [{
          denom: 'factory/kujira14jwhlsg3az20f7keav2axxj205fyv5j8mp6rv5svqwwll3ls9slq6zwleg/ulp',
          exponent: 0
        }, {
          denom: 'lp-inj-usdc',
          exponent: 6
        }],
      base: 'factory/kujira14jwhlsg3az20f7keav2axxj205fyv5j8mp6rv5svqwwll3ls9slq6zwleg/ulp',
      name: 'LP Bow: INJ-USDC',
      display: 'lp-inj-usdc',
      symbol: 'LP INJ-USDC',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: ATOM-USDC',
      denomUnits: [{
          denom: 'factory/kujira13my0qtm2a8jp0wg8uzg49tyn4zcea8scy3dc7ghn8z9eys08yzls49ymdm/ulp',
          exponent: 0
        }, {
          denom: 'lp-atom-usdc',
          exponent: 6
        }],
      base: 'factory/kujira13my0qtm2a8jp0wg8uzg49tyn4zcea8scy3dc7ghn8z9eys08yzls49ymdm/ulp',
      name: 'LP Bow: ATOM-USDC',
      display: 'lp-atom-usdc',
      symbol: 'LP ATOM-USDC',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: MNTA-USDC',
      denomUnits: [{
          denom: 'factory/kujira1742pe93mxm0cwqjxgxh6th9sspdrluqvw9pha9q69eeatue4x5xs0wdq2d/ulp',
          exponent: 0
        }, {
          denom: 'lp-mnta-usdc',
          exponent: 6
        }],
      base: 'factory/kujira1742pe93mxm0cwqjxgxh6th9sspdrluqvw9pha9q69eeatue4x5xs0wdq2d/ulp',
      name: 'LP Bow: MNTA-USDC',
      display: 'lp-mnta-usdc',
      symbol: 'LP MNTA-USDC',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LP Bow: MNTA-USK',
      denomUnits: [{
          denom: 'factory/kujira1xtaadmh06s8u3z5mypp8qayhrnxgga5wr88s7raram4rz8zu37hquf82wk/ulp',
          exponent: 0
        }, {
          denom: 'lp-mnta-usk',
          exponent: 6
        }],
      base: 'factory/kujira1xtaadmh06s8u3z5mypp8qayhrnxgga5wr88s7raram4rz8zu37hquf82wk/ulp',
      name: 'LP Bow: MNTA-USK',
      display: 'lp-mnta-usk',
      symbol: 'LP MNTA-USK',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bow.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The token that fuels the Boon app',
      denomUnits: [{
          denom: 'factory/kujira1gewwffxhaygxe8tacd3z9h4uyvpd2h7v9qtfmaw8jjhwalxxpd7qlqld4m/boon',
          exponent: 0
        }, {
          denom: 'boon',
          exponent: 6
        }],
      base: 'factory/kujira1gewwffxhaygxe8tacd3z9h4uyvpd2h7v9qtfmaw8jjhwalxxpd7qlqld4m/boon',
      name: 'Boon',
      display: 'boon',
      symbol: 'BOON',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/boon.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/boon.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/boon.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/boon.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      typeAsset: 'ics20',
      denomUnits: [{
          denom: 'ibc/507BE7E33F06026652F519AD4D36716251F2D34DF04514A905D3B19A7D8130F7',
          exponent: 0,
          aliases: ['yum-wei']
        }, {
          denom: 'yum',
          exponent: 18
        }],
      base: 'ibc/507BE7E33F06026652F519AD4D36716251F2D34DF04514A905D3B19A7D8130F7',
      name: 'Axelar Wrapped YUM',
      socials: {
        website: 'https://cacaoswap.app',
        twitter: 'https://x.com/CacaoSwap'
      },
      display: 'yum',
      symbol: 'YUM.axl',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xcE682c89C63d2850Cb2ca898E44D6c7c30d897a6'
          },
          provider: 'Axelar'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'yum-wei',
            channelId: 'channel-14'
          },
          chain: {
            channelId: 'channel-9',
            path: 'transfer/channel-9/yum-wei'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xcE682c89C63d2850Cb2ca898E44D6c7c30d897a6'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yum.png',
          theme: {
            primaryColorHex: '#33a6e7'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yum.png'
      }
    }
  ]
};
export default info;