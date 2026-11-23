import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'celestia',
  assets: [
    {
      description: 'Celestia is a modular blockchain network focused on data availability, allowing developers to deploy their own customizable blockchains with ease.',
      extendedDescription: 'Celestia is a pioneering blockchain platform that aims to address the scalability and interoperability challenges faced by current blockchain networks. It introduces a modular architecture that separates consensus and data availability from execution, allowing developers to create highly customizable and scalable blockchains. By decoupling these functions, Celestia enables independent blockchains to interact seamlessly while maintaining high throughput and security.\n\nCelestia\'s unique approach includes a consensus and data availability layer that supports multiple execution environments, facilitating a diverse range of decentralized applications (dApps). This design allows for greater flexibility and efficiency, as developers can choose the best execution environment for their specific use case. Celestia\'s focus on modularity and interoperability has the potential to significantly enhance the blockchain ecosystem by enabling more scalable and adaptable solutions.',
      denomUnits: [{
          denom: 'utia',
          exponent: 0
        }, {
          denom: 'tia',
          exponent: 6
        }],
      base: 'utia',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      coingeckoId: 'celestia',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
        }],
      socials: {
        website: 'https://celestia.org/',
        x: 'https://x.com/CelestiaOrg'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Stride Staked TIA on Celestia',
      denomUnits: [{
          denom: 'ibc/EADAE1AEE456C91C72D4FD4F8C3103C287909BF2929B4CE7A1B5123EA9B85AEA',
          exponent: 0
        }, {
          denom: 'stTIA',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/EADAE1AEE456C91C72D4FD4F8C3103C287909BF2929B4CE7A1B5123EA9B85AEA',
      name: 'Stride Staked TIA',
      display: 'stTIA',
      symbol: 'stTIA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stutia',
            channelId: 'channel-162'
          },
          chain: {
            channelId: 'channel-4',
            path: 'transfer/channel-4/stutia'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stride',
            baseDenom: 'stutia'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg'
        }]
    },
    {
      description: 'The native sovereign currency and governance token of the LUXA Layer 1 blockchain.',
      denomUnits: [{
          denom: 'ibc/1A7C0CB0CE5A46EDFDABB16940EE8F2CA355AF8D48C37ECF52AD2EC669355549',
          exponent: 0,
          aliases: ['uluxa']
        }, {
          denom: 'LUXA',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/1A7C0CB0CE5A46EDFDABB16940EE8F2CA355AF8D48C37ECF52AD2EC669355549',
      name: 'LUXA',
      display: 'LUXA',
      symbol: 'LUXA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'luxa',
            baseDenom: 'uluxa',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-709',
            path: 'transfer/channel-709/uluxa'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/luxa/images/luxa.png'
      },
      images: [{
          imageSync: {
            chainName: 'luxa',
            baseDenom: 'uluxa'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/luxa/images/luxa.png',
          theme: {
            circle: true
          }
        }]
    },
    {
      description: 'The utility and energy token of the LUXA Network ecosystem.',
      denomUnits: [{
          denom: 'ibc/7E059C08D71CF19E9B545986EE87C2DD4F616467D638B940E7B4861A9EB83A18',
          exponent: 0,
          aliases: ['ushard']
        }, {
          denom: 'SHARD',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/7E059C08D71CF19E9B545986EE87C2DD4F616467D638B940E7B4861A9EB83A18',
      name: 'LUXA Shard',
      display: 'SHARD',
      symbol: 'SHARD',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'luxa',
            baseDenom: 'ushard',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-709',
            path: 'transfer/channel-709/ushard'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/luxa/images/ushard.png'
      },
      images: [{
          imageSync: {
            chainName: 'luxa',
            baseDenom: 'ushard'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/luxa/images/ushard.png',
          theme: {
            circle: true
          }
        }]
    }
  ]
};
export default info;