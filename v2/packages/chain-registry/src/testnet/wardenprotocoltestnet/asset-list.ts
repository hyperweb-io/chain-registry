import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'wardenprotocoltestnet',
  assets: [{
      description: 'Temporary staking token for Warden Protocol',
      denomUnits: [{
          denom: 'wSTAKE',
          exponent: 0
        }],
      base: 'wSTAKE',
      name: 'wSTAKE',
      display: 'wSTAKE',
      symbol: 'wSTAKE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.svg'
        }],
      typeAsset: 'sdk.coin'
    }, {
      description: 'IBC token from Cosmos Provider network to Warden Protocol Testnet',
      denomUnits: [{
          denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
      name: 'IBC atom',
      display: 'atom',
      symbol: 'ATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cosmoshubtestnet',
            baseDenom: 'uatom',
            channelId: 'channel-373'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/uatom'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'cosmoshubtestnet',
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
    }]
};
export default info;