import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'celestiatestnet3',
  assets: [{
      description: 'The native token of Prysm',
      denom_units: [{
          denom: 'ibc/60F5B6B8840579F08E79709765492C91C9118A55BDEB6FFEB2FEA2AE9910DB36',
          exponent: 0,
          aliases: ['uprysm']
        }, {
          denom: 'prysm',
          exponent: 6
        }],
      base: 'ibc/60F5B6B8840579F08E79709765492C91C9118A55BDEB6FFEB2FEA2AE9910DB36',
      display: 'prysm',
      name: 'Prysm',
      symbol: 'PRYSM',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/prysmdevnet/images/prysm.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://www.prysm.network/',
        x: 'https://x.com/PrysmNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'uprysm',
            chain_name: 'prysmdevnet'
          },
          chain: {
            channel_id: 'channel-138'
          }
        }]
    }, {
      description: 'The native token of Prysm',
      denom_units: [{
          denom: 'ibc/60F5B6B8840579F08E79709765492C91C9118A55BDEB6FFEB2FEA2AE9910DB36',
          exponent: 0,
          aliases: ['uprysm']
        }, {
          denom: 'prysm',
          exponent: 6
        }],
      base: 'ibc/60F5B6B8840579F08E79709765492C91C9118A55BDEB6FFEB2FEA2AE9910DB36',
      display: 'prysm',
      name: 'Prysm',
      symbol: 'PRYSM',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/prysmdevnet/images/prysm.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://www.prysm.network/',
        x: 'https://x.com/PrysmNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'uprysm',
            chain_name: 'prysmdevnet'
          },
          chain: {
            channel_id: 'channel-138'
          }
        }]
    }]
};
export default assets;
    