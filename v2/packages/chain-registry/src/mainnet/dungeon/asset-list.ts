import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'dungeon',
  assets: [
    {
      description: 'Dragon Token is the native staking and governance token of Dungeon Chain, serving as the backbone of the ecosystem. Its primary roles include staking, where users stake Dragon Tokens to secure the network, enhance its functionality, and earn rewards in return; governance, granting token holders voting rights to influence key decisions such as game onboarding, protocol updates, and community-driven initiatives; and ecosystem growth, facilitating transactions, incentivizing developers, and promoting the creation of new interchain games. Dragon Token ensures a decentralized, fair, and community-driven ecosystem, fostering the evolution of blockchain-based gaming. It plays a crucial role in driving the growth of Dungeon Chain by empowering both developers and players to participate actively in the ecosystem\'s governance and success.',
      extendedDescription: 'Dungeon Chain is a groundbreaking, permissioned blockchain designed specifically for interchain gaming. Launched as the first permissionless ICS (Interchain Security) chain, Dungeon Chain empowers developers and players to participate in a seamless gaming ecosystem that bridges multiple blockchains. By leveraging ICS technology, it ensures robust security, scalability, and interoperability across gaming projects. Dungeon Chain features an interchain gaming platform that allows games to interact across multiple blockchains, enabling shared assets, gameplay mechanics, and player data. It is permissioned yet inclusive, offering a streamlined, transparent process for developers to onboard games while maintaining quality and security. With high transaction throughput and low latency, it provides scalability for gamers, ensuring a smooth experience even during peak usage. Additionally, its developer-friendly ecosystem includes tools, SDKs, and documentation to facilitate the creation and integration of games into the platform. Dungeon Chain\'s vision is to redefine how games interact with blockchain technology by creating a secure, scalable, and specialized environment for interchain games, unlocking new possibilities for player ownership, collaboration, and innovation in gaming.',
      denomUnits: [{
          denom: 'udgn',
          exponent: 0
        }, {
          denom: 'DGN',
          exponent: 6
        }],
      base: 'udgn',
      name: 'Dragon Coin',
      display: 'DGN',
      coingeckoId: 'dragon-coin-2',
      symbol: 'DGN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dungeon/images/DGN.png'
      },
      socials: {
        website: 'https://www.cryptodungeon.org',
        x: 'https://x.com/cryptodungeonma'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dungeon/images/DGN.png',
          theme: {
            circle: true
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The native staking and governance token of the Cosmos Hub.',
      denomUnits: [{
          denom: 'ibc/C3988DBA4BA195F3514EA2E02497B9F66019CE53EFB96D4982CE95CA6A51BBCE',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C3988DBA4BA195F3514EA2E02497B9F66019CE53EFB96D4982CE95CA6A51BBCE',
      name: 'Cosmos Hub',
      display: 'atom',
      symbol: 'ATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom',
            channelId: 'channel-1560'
          },
          chain: {
            channelId: 'channel-5308',
            path: 'transfer/channel-5308/uatom'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      images: [{
          imageSync: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }],
      coingeckoId: 'cosmos'
    },
    {
      description: 'The native staking and governance token of the Osmosis.',
      denomUnits: [{
          denom: 'ibc/AC72F1D0BF72A358CD9D7E3AC8F868F96EDA9042DE00A72DB4AEA859065B7EB5',
          exponent: 0
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/AC72F1D0BF72A358CD9D7E3AC8F868F96EDA9042DE00A72DB4AEA859065B7EB5',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'uosmo',
            channelId: 'channel-101249'
          },
          chain: {
            channelId: 'channel-5305',
            path: 'transfer/channel-5305/uosmo'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'uosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      coingeckoId: 'osmosis'
    },
    {
      description: 'AtomOne native coin',
      denomUnits: [{
          denom: 'ibc/295196BD505E32B9679BA0CFDB70B4FF2AADE80A3B73A2F234284D7A709844DA',
          exponent: 0,
          aliases: ['uatone']
        }, {
          denom: 'atone',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/295196BD505E32B9679BA0CFDB70B4FF2AADE80A3B73A2F234284D7A709844DA',
      name: 'Atone',
      display: 'atone',
      symbol: 'ATONE',
      coingeckoId: 'atomone',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'atomone',
            baseDenom: 'uatone',
            channelId: 'channel-9'
          },
          chain: {
            channelId: 'channel-5310',
            path: 'transfer/channel-5310/uatone'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'atomone',
            baseDenom: 'uatone'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.svg'
      }
    },
    {
      description: 'The fee token of AtomOne',
      denomUnits: [{
          denom: 'ibc/BD2C670DB4465BCB862F988EF4FD7595C56AE2ECB9CC9EF14AF7A776091E88AE',
          exponent: 0
        }, {
          denom: 'photon',
          exponent: 6
        }],
      base: 'ibc/BD2C670DB4465BCB862F988EF4FD7595C56AE2ECB9CC9EF14AF7A776091E88AE',
      name: 'Photon',
      display: 'photon',
      symbol: 'PHOTON',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/photon.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/photon.svg'
      },
      images: [{
          imageSync: {
            chainName: 'atomone',
            baseDenom: 'uphoton'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/photon.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/photon.svg'
        }],
      socials: {
        website: 'https://atom.one',
        x: 'https://x.com/_atomone'
      },
      coingeckoId: 'photon-2',
      typeAsset: 'ics20',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'atomone',
            baseDenom: 'uphoton',
            channelId: 'channel-9'
          },
          chain: {
            channelId: 'channel-5310',
            path: 'transfer/channel-5310/uphoton'
          }
        }]
    },
    {
      description: 'USDC from Noble',
      denomUnits: [{
          denom: 'ibc/489C406A3029B50486F991E468CB8A7D5F039757327A40B0684C530BFF96C543',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/489C406A3029B50486F991E468CB8A7D5F039757327A40B0684C530BFF96C543',
      name: 'USDC',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdc',
            channelId: 'channel-150'
          },
          chain: {
            channelId: 'channel-5307',
            path: 'transfer/channel-5307/uusdc'
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
            circle: true
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      coingeckoId: 'usd-coin'
    }
  ]
};
export default info;