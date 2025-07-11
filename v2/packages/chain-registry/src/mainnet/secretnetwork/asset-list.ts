import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'secretnetwork',
  assets: [
    {
      description: 'Secret Network is a privacy-focused blockchain that enables private and secure smart contracts, protecting sensitive data.',
      extendedDescription: 'Secret Network is a blockchain platform that focuses on privacy and security by enabling private smart contracts, known as Secret Contracts. These contracts allow developers to create decentralized applications (dApps) that can utilize sensitive data without exposing it on the blockchain. By incorporating privacy-preserving technologies, Secret Network ensures that data remains confidential while still enabling complex computations and interactions. The native token, SCRT, is used for transaction fees, staking, and governance, empowering users to participate in the network\'s operations and decision-making processes. Secret Network aims to enhance the privacy and functionality of blockchain applications, making it suitable for use cases where data confidentiality is paramount.',
      denomUnits: [{
          denom: 'uscrt',
          exponent: 0
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'uscrt',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
      },
      coingeckoId: 'secret',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
        }],
      socials: {
        website: 'https://scrt.network/',
        twitter: 'https://twitter.com/SecretNetwork'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The native token cw20 for SIENNA on Secret Network',
      denomUnits: [{
          denom: 'cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
          exponent: 0
        }, {
          denom: 'sienna',
          exponent: 18
        }],
      typeAsset: 'snip20',
      address: 'secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
      base: 'cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
      name: 'SIENNA',
      display: 'sienna',
      symbol: 'SIENNA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
      },
      coingeckoId: 'sienna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg',
          theme: {
            primaryColorHex: '#2c2c2c'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denomUnits: [{
          denom: 'cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
          exponent: 0
        }, {
          denom: 'shd',
          exponent: 8
        }],
      typeAsset: 'snip20',
      address: 'secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
      base: 'cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
      name: 'Shade (old)',
      display: 'shd',
      symbol: 'SHD(old)',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denomUnits: [{
          denom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
          exponent: 0
        }, {
          denom: 'shd',
          exponent: 8
        }],
      typeAsset: 'snip25',
      address: 'secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
      base: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
      name: 'Shade',
      display: 'shd',
      symbol: 'SHD',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
      },
      coingeckoId: 'shade-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg',
          theme: {
            primaryColorHex: '#342c52'
          }
        }]
    },
    {
      description: 'The native token cw20 for Silk on Secret Network',
      denomUnits: [{
          denom: 'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
          exponent: 0
        }, {
          denom: 'silk',
          exponent: 6
        }],
      typeAsset: 'snip25',
      address: 'secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
      base: 'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
      name: 'Silk',
      display: 'silk',
      symbol: 'SILK',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
      },
      coingeckoId: 'silk-bcec1136-561c-4706-a42c-8b67d0d7f7d2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg',
          theme: {
            primaryColorHex: '#3142fc'
          }
        }]
    },
    {
      description: 'The native token cw20 for dSilk on Secret Network',
      denomUnits: [{
          denom: 'cw20:secret1apxywjp2h8vet54xzyfc96htlt9qqgrh7gawhw',
          exponent: 0
        }, {
          denom: 'dsilk',
          exponent: 6
        }],
      typeAsset: 'snip25',
      address: 'secret1apxywjp2h8vet54xzyfc96htlt9qqgrh7gawhw',
      base: 'cw20:secret1apxywjp2h8vet54xzyfc96htlt9qqgrh7gawhw',
      name: 'dSilk',
      display: 'dsilk',
      symbol: 'dSILK',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/dsilk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/dsilk.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/dsilk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/dsilk.svg',
          theme: {
            primaryColorHex: '#3142fc'
          }
        }]
    },
    {
      description: 'The native token cw20 for xSilk on Secret Network',
      denomUnits: [{
          denom: 'cw20:secret1lqt2u3ntzrkjev8z5m6ennu4n3zl3trx67ck82',
          exponent: 0
        }, {
          denom: 'xsilk',
          exponent: 6
        }],
      typeAsset: 'snip25',
      address: 'secret1lqt2u3ntzrkjev8z5m6ennu4n3zl3trx67ck82',
      base: 'cw20:secret1lqt2u3ntzrkjev8z5m6ennu4n3zl3trx67ck82',
      name: 'xSilk',
      display: 'xsilk',
      symbol: 'xSILK',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg',
          theme: {
            primaryColorHex: '#3142fc'
          }
        }]
    },
    {
      description: 'The native token cw20 for SCRT Staking Derivatives on Secret Network',
      denomUnits: [{
          denom: 'cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
          exponent: 0
        }, {
          denom: 'stkd-scrt',
          exponent: 6
        }],
      typeAsset: 'snip20',
      address: 'secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
      base: 'cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
      name: 'SCRT Staking Derivatives',
      display: 'stkd-scrt',
      symbol: 'stkd-SCRT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg'
      },
      coingeckoId: 'stkd-scrt',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg',
          theme: {
            primaryColorHex: '#b8a2dc'
          }
        }]
    },
    {
      description: 'The native token cw20 for Button on Secret Network',
      denomUnits: [{
          denom: 'cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
          exponent: 0
        }, {
          denom: 'butt',
          exponent: 6
        }],
      typeAsset: 'snip20',
      address: 'secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
      base: 'cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
      name: 'Button',
      display: 'butt',
      symbol: 'BUTT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg',
          theme: {
            primaryColorHex: '#7b04eb'
          }
        }]
    },
    {
      description: 'The native token cw20 for Alter on Secret Network',
      denomUnits: [{
          denom: 'cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
          exponent: 0
        }, {
          denom: 'alter',
          exponent: 6
        }],
      base: 'cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
      typeAsset: 'snip20',
      address: 'secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
      name: 'Alter',
      display: 'alter',
      symbol: 'ALTER',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg',
          theme: {
            primaryColorHex: '#694c90'
          }
        }],
      socials: {
        website: 'http://alter.network/',
        twitter: 'https://twitter.com/AlterDapp'
      }
    },
    {
      description: 'The native token cw20 for Amber on Secret Network',
      denomUnits: [{
          denom: 'cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
          exponent: 0
        }, {
          denom: 'amber',
          exponent: 6
        }],
      typeAsset: 'snip20',
      address: 'secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
      base: 'cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
      name: 'Amber',
      display: 'amber',
      symbol: 'AMBER',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg',
          theme: {
            primaryColorHex: '#f2b854'
          }
        }],
      socials: {
        website: 'http://amber.money/',
        twitter: 'https://twitter.com/AmberDAO_'
      }
    },
    {
      description: 'The native token cw20 for Shill on Secret Network',
      denomUnits: [{
          denom: 'cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
          exponent: 0
        }, {
          denom: 'shill',
          exponent: 6
        }],
      typeAsset: 'snip25',
      address: 'secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
      base: 'cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
      name: 'Shill',
      display: 'shill',
      symbol: 'SHILL',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.svg',
          theme: {
            primaryColorHex: '#c49df3'
          }
        }]
    }
  ]
};
export default info;