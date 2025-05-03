import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'planq',
  assets: [
    {
      description: 'The native EVM, governance and staking token of the Planq Network',
      extendedDescription: 'Planq is the very first cryptocurrency project to keep mobile platform usability at heart, taking a step away from dependency on desktop services. By focusing on easy accessibility and close integration of other blockchains via easy to use bridges, Planq will push Web 3 adoption in the mobile space to the next level.',
      denomUnits: [{
          denom: 'aplanq',
          exponent: 0
        }, {
          denom: 'planq',
          exponent: 18
        }],
      base: 'aplanq',
      name: 'Planq',
      display: 'planq',
      symbol: 'PLQ',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
      },
      coingeckoId: 'planq',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg',
          theme: {
            primaryColorHex: '#d4f3fb'
          }
        }],
      socials: {
        website: 'https://planq.network',
        twitter: 'https://twitter.com/planqfoundation'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The token of Source Protocol bridged from BSC.',
      denomUnits: [{
          denom: 'erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09',
          exponent: 0
        }, {
          denom: 'srcx',
          exponent: 9
        }],
      base: 'erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09',
      name: 'Source Token',
      display: 'srcx',
      symbol: 'SRCX',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'binancesmartchain',
            baseDenom: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae',
            contract: '0xC891aBa0b42818fb4c975Bf6461033c62BCE75ff'
          },
          chain: {
            contract: '0xC891aBa0b42818fb4c975Bf6461033c62BCE75ff'
          },
          provider: 'DeltaSwap.io'
        }],
      images: [{
          imageSync: {
            chainName: 'binancesmartchain',
            baseDenom: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png',
          theme: {
            primaryColorHex: '#7f22bc'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'nRide Token',
      extendedDescription: 'nRide is developing a uber-like ride-hailing protocol, leveraging cosmwasm smart-contracts for payment, driver registration and text-messaging between the rider and the driver, to create a trustless public transportation environment for any cab or taxi company to use.',
      denomUnits: [{
          denom: 'ibc/26B4B4BBF3C8D5DB1ADE993CCD865A7CC608B2BAEF20E0166F18B84E32184F63',
          exponent: 0,
          aliases: ['cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq', 'ibc/E750D31033DC1CF4A044C3AA0A8117401316DC918FBEBC4E3D34F91B09D5F54C']
        }, {
          denom: 'nride',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/26B4B4BBF3C8D5DB1ADE993CCD865A7CC608B2BAEF20E0166F18B84E32184F63',
      name: 'nRide Token',
      display: 'nride',
      symbol: 'NRIDE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'ibc/E750D31033DC1CF4A044C3AA0A8117401316DC918FBEBC4E3D34F91B09D5F54C',
            channelId: 'channel-492'
          },
          chain: {
            channelId: 'channel-1',
            path: 'transfer/channel-1/transfer/channel-169/cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg',
          theme: {
            primaryColorHex: '#050505'
          }
        }]
    },
    {
      description: 'The token of Anubis.',
      extendedDescription: 'Anubis is a Meme coin created via the Physica launchpad.',
      denomUnits: [{
          denom: 'erc20/0xF630B96760B91f6FCbE8b3C24f2786AcA3D03648',
          exponent: 0
        }, {
          denom: 'anubi',
          exponent: 18
        }],
      base: 'erc20/0xF630B96760B91f6FCbE8b3C24f2786AcA3D03648',
      name: 'Anubis',
      display: 'anubi',
      symbol: 'ANUBI',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/anubis.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/anubis.png'
        }],
      socials: {
        twitter: 'https://x.com/Anubis_Phy'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The token of Astonic.',
      extendedDescription: 'Astonic is a decentralized and transparent protocol powering the next generation of stable value digital assets.',
      denomUnits: [{
          denom: 'erc20/0x8F4d86ABa1b47832C46f11e0fFD0F7aDa4498345',
          exponent: 0
        }, {
          denom: 'astonic',
          exponent: 18
        }],
      base: 'erc20/0x8F4d86ABa1b47832C46f11e0fFD0F7aDa4498345',
      name: 'Astonic',
      display: 'astonic',
      symbol: 'ATC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/atc.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/atc.png'
        }],
      socials: {
        twitter: 'https://x.com/astonic_xyz',
        telegram: 'https://t.me/astonic_io'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Astonic USD (aUSD) is a stable asset pegged to the US Dollar.',
      extendedDescription: 'Astonic USD (aUSD) is a stable asset pegged to the US Dollar. With aUSD, you can transfer money more quickly, affordably, and easily using your mobile phone.',
      denomUnits: [{
          denom: 'erc20/0xA2871B267a7d888F830251F6B4D9d3DFf184995a',
          exponent: 0
        }, {
          denom: 'ausd',
          exponent: 18
        }],
      base: 'erc20/0xA2871B267a7d888F830251F6B4D9d3DFf184995a',
      name: 'Astonic USD',
      display: 'ausd',
      symbol: 'aUSD',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Astonic'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/ausd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/ausd.png'
        }],
      socials: {
        twitter: 'https://x.com/astonic_xyz',
        telegram: 'https://t.me/astonic_io'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Astonic EUR (aEUR) is a stable asset pegged to the Euro.',
      extendedDescription: 'Astonic EUR (aEUR) is a stable asset pegged to the Euro. With aEUR, you can transfer money more quickly, affordably, and easily using your mobile phone.',
      denomUnits: [{
          denom: 'erc20/0xd5be2932FEbD73019ba1d5d97DFC35E1Ab09E501',
          exponent: 0
        }, {
          denom: 'aeur',
          exponent: 18
        }],
      base: 'erc20/0xd5be2932FEbD73019ba1d5d97DFC35E1Ab09E501',
      name: 'Astonic EUR',
      display: 'aeur',
      symbol: 'aEUR',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'EUR'
          },
          provider: 'Astonic'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/aeur.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/aeur.png'
        }],
      socials: {
        twitter: 'https://x.com/astonic_xyz',
        telegram: 'https://t.me/astonic_io'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Astonic BRL (aBRL) is a stable asset pegged to the Brazilian Real.',
      extendedDescription: 'Astonic BRL (aBRL) is a stable asset pegged to the Brazilian Real. With aBRL, you can transfer money more quickly, affordably, and easily using your mobile phone.',
      denomUnits: [{
          denom: 'erc20/0x240642C6f69878A0b199065f25EDf82023BC59ce',
          exponent: 0
        }, {
          denom: 'abrl',
          exponent: 18
        }],
      base: 'erc20/0x240642C6f69878A0b199065f25EDf82023BC59ce',
      name: 'Astonic BRL',
      display: 'abrl',
      symbol: 'aBRL',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'BRL'
          },
          provider: 'Astonic'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/abrl.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/abrl.png'
        }],
      socials: {
        twitter: 'https://x.com/astonic_xyz',
        telegram: 'https://t.me/astonic_io'
      },
      typeAsset: 'sdk.coin'
    }
  ]
};
export default info;