import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'lumen',
  assets: [{
      description: 'BeeZee network native coin',
      denom_units: [{
          denom: 'ibc/6AA21C523710EDE9DA80B4296821F1A3216579F77359EDC9D91C9039E4FFAF8F',
          exponent: 0,
          aliases: ['ubze']
        }, {
          denom: 'bze',
          exponent: 6
        }],
      base: 'ibc/6AA21C523710EDE9DA80B4296821F1A3216579F77359EDC9D91C9039E4FFAF8F',
      name: 'BeeZee',
      display: 'bze',
      symbol: 'BZE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg'
      },
      coingecko_id: 'bzedge',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg'
        }],
      type_asset: 'sdk.coin',
      socials: {
        website: 'https://getbze.com/',
        x: 'https://x.com/BZEdgeCoin'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'ubze',
            chain_name: 'beezee'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    }, {
      description: 'BeeZee network native coin',
      denom_units: [{
          denom: 'ibc/6AA21C523710EDE9DA80B4296821F1A3216579F77359EDC9D91C9039E4FFAF8F',
          exponent: 0,
          aliases: ['ubze']
        }, {
          denom: 'bze',
          exponent: 6
        }],
      base: 'ibc/6AA21C523710EDE9DA80B4296821F1A3216579F77359EDC9D91C9039E4FFAF8F',
      name: 'BeeZee',
      display: 'bze',
      symbol: 'BZE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg'
      },
      coingecko_id: 'bzedge',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg'
        }],
      type_asset: 'sdk.coin',
      socials: {
        website: 'https://getbze.com/',
        x: 'https://x.com/BZEdgeCoin'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'ubze',
            chain_name: 'beezee'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    }]
};
export default assets;
    