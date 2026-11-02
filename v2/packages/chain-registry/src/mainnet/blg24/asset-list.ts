import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'blg24',
  assets: [{
      description: 'The native token of BLG24, a sovereign Layer 1 blockchain built on Cosmos SDK.',
      denomUnits: [{
          denom: 'ug24',
          exponent: 0
        }, {
          denom: 'g24',
          exponent: 6
        }],
      base: 'ug24',
      name: 'Gold24Coin',
      display: 'g24',
      symbol: 'G24',
      typeAsset: 'sdk.coin',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/blg24/images/g24.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/blg24/images/g24.png'
        }]
    }, {
      description: 'The native staking and governance token of Celestia.',
      denomUnits: [{
          denom: 'ibc/EB7702F7862428669576938CD8DD19FBF39F6516F1F94A1B02AC8CBAFF06858B',
          exponent: 0
        }, {
          denom: 'tia',
          exponent: 6
        }],
      base: 'ibc/EB7702F7862428669576938CD8DD19FBF39F6516F1F94A1B02AC8CBAFF06858B',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      typeAsset: 'ics20',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877',
            channelId: 'channel-111099'
          },
          chain: {
            channelId: 'channel-1',
            path: 'transfer/channel-1/transfer/channel-6994/utia'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'celestia',
            baseDenom: 'utia'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png'
      },
      coingeckoId: 'celestia'
    }]
};
export default info;