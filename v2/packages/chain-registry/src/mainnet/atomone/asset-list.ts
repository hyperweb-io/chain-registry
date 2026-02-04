import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'atomone',
  assets: [
    {
      description: 'The native staking and governance token of AtomOne',
      denomUnits: [{
          denom: 'uatone',
          exponent: 0
        }, {
          denom: 'atone',
          exponent: 6
        }],
      base: 'uatone',
      name: 'Atone',
      display: 'atone',
      symbol: 'ATONE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.svg'
        }],
      typeAsset: 'sdk.coin',
      socials: {
        website: 'https://atom.one',
        x: 'https://x.com/_atomone'
      },
      coingeckoId: 'atomone'
    },
    {
      description: 'The fee token of AtomOne',
      denomUnits: [{
          denom: 'uphoton',
          exponent: 0
        }, {
          denom: 'photon',
          exponent: 6
        }],
      base: 'uphoton',
      name: 'Photon',
      display: 'photon',
      symbol: 'PHOTON',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/photon.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/photon.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/photon.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/photon.svg'
        }],
      typeAsset: 'sdk.coin',
      socials: {
        website: 'https://atom.one',
        x: 'https://x.com/_atomone'
      },
      coingeckoId: 'photon-2'
    },
    {
      description: 'Dragon Token is the native staking and governance token of Dungeon Chain, serving as the backbone of the ecosystem. Its primary roles include staking, where users stake Dragon Tokens to secure the network, enhance its functionality, and earn rewards in return; governance, granting token holders voting rights to influence key decisions such as game onboarding, protocol updates, and community-driven initiatives; and ecosystem growth, facilitating transactions, incentivizing developers, and promoting the creation of new interchain games. Dragon Token ensures a decentralized, fair, and community-driven ecosystem, fostering the evolution of blockchain-based gaming. It plays a crucial role in driving the growth of Dungeon Chain by empowering both developers and players to participate actively in the ecosystem\'s governance and success.',
      denomUnits: [{
          denom: 'ibc/4C62CEBBAF56E4ABF334B05FF487F39065060666AFF5695230AD99E2B6AF3C91',
          exponent: 0,
          aliases: ['udgn']
        }, {
          denom: 'DGN',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/4C62CEBBAF56E4ABF334B05FF487F39065060666AFF5695230AD99E2B6AF3C91',
      name: 'Dragon Coin',
      display: 'DGN',
      symbol: 'DGN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'dungeon',
            baseDenom: 'udgn',
            channelId: 'channel-5310'
          },
          chain: {
            channelId: 'channel-9',
            path: 'transfer/channel-9/udgn'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dungeon/images/DGN.png'
      },
      images: [{
          imageSync: {
            chainName: 'dungeon',
            baseDenom: 'udgn'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dungeon/images/DGN.png',
          theme: {
            circle: true
          }
        }],
      coingeckoId: 'dragon-coin-2'
    }
  ]
};
export default info;