import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'wardenprotocoltestnet',
  assets: [{
      description: 'Temporary staking token for Warden Protocol',
      denom_units: [{
          denom: 'wSTAKE',
          exponent: 0
        }],
      base: 'wSTAKE',
      name: 'wSTAKE',
      display: 'wSTAKE',
      symbol: 'wSTAKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/wardenprotocol/images/ward.svg'
        }],
      type_asset: 'sdk.coin'
    }, {
      description: 'IBC token from Cosmos Provider network to Warden Protocol Testnet',
      denom_units: [{
          denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
      name: 'IBC atom',
      display: 'atom',
      symbol: 'ATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'cosmoshubtestnet',
            base_denom: 'uatom',
            channel_id: 'channel-373'
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/uatom'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'cosmoshubtestnet',
            base_denom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
          theme: {
            primary_color_hex: '#272d45'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      coingecko_id: 'cosmos'
    }]
};
export default info;