import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'pundix',
  assets: [
    {
      description: 'PUNDIAI is an ERC-20 utility and governance token of Pundi AI ecosystem, including Pundi AI Data Platform, Pundi AI Marketplace, Pundi AIFX Omni Layer and Pundi MM AI Agent Launcher.',
      denom_units: [{
          denom: 'ibc/4A23AED13A2A8B2F06C51893B04BD2B28736CE5D1D44A1C3310D8B1D8980675E',
          exponent: 0,
          aliases: ['apundiai']
        }, {
          denom: 'pundiai',
          exponent: 18
        }],
      base: 'ibc/4A23AED13A2A8B2F06C51893B04BD2B28736CE5D1D44A1C3310D8B1D8980675E',
      name: 'Pundi AI',
      display: 'pundiai',
      symbol: 'PUNDIAI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/PUNDIAI.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/PUNDIAI.svg'
      },
      coingecko_id: 'pundi-aifx',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/PUNDIAI.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/PUNDIAI.svg'
        }],
      socials: {
        website: 'https://fx.pundi.ai',
        x: 'https://x.com/PundiAI'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'apundiai',
            chain_name: 'fxcore'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'The native staking token of the Function X',
      denom_units: [{
          denom: 'ibc/37CA072246C3BCBB445AEC196645F5AAB7876C456D76BC96141D3A0D6E615D2E',
          exponent: 0,
          aliases: ['FX']
        }, {
          denom: 'WFX',
          exponent: 18
        }],
      base: 'ibc/37CA072246C3BCBB445AEC196645F5AAB7876C456D76BC96141D3A0D6E615D2E',
      name: 'Function X',
      display: 'WFX',
      symbol: 'FX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
        }],
      socials: {
        website: 'https://fx.pundi.ai',
        x: 'https://x.com/PundiAI'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'FX',
            chain_name: 'fxcore'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }],
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      socials: {
        website: 'https://osmosis.zone',
        x: 'https://x.com/osmosis'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12618',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D',
      name: 'Ion DAO',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
        }],
      coingecko_id: 'ion',
      keywords: ['memecoin', 'defi'],
      socials: {
        website: 'https://ion.wtf',
        x: 'https://x.com/_IONDAO'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12618',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'PUNDIAI is an ERC-20 utility and governance token of Pundi AI ecosystem, including Pundi AI Data Platform, Pundi AI Marketplace, Pundi AIFX Omni Layer and Pundi MM AI Agent Launcher.',
      denom_units: [{
          denom: 'ibc/4A23AED13A2A8B2F06C51893B04BD2B28736CE5D1D44A1C3310D8B1D8980675E',
          exponent: 0,
          aliases: ['apundiai']
        }, {
          denom: 'pundiai',
          exponent: 18
        }],
      base: 'ibc/4A23AED13A2A8B2F06C51893B04BD2B28736CE5D1D44A1C3310D8B1D8980675E',
      name: 'Pundi AI',
      display: 'pundiai',
      symbol: 'PUNDIAI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/PUNDIAI.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/PUNDIAI.svg'
      },
      coingecko_id: 'pundi-aifx',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/PUNDIAI.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/PUNDIAI.svg'
        }],
      socials: {
        website: 'https://fx.pundi.ai',
        x: 'https://x.com/PundiAI'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'apundiai',
            chain_name: 'fxcore'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'The native staking token of the Function X',
      denom_units: [{
          denom: 'ibc/37CA072246C3BCBB445AEC196645F5AAB7876C456D76BC96141D3A0D6E615D2E',
          exponent: 0,
          aliases: ['FX']
        }, {
          denom: 'WFX',
          exponent: 18
        }],
      base: 'ibc/37CA072246C3BCBB445AEC196645F5AAB7876C456D76BC96141D3A0D6E615D2E',
      name: 'Function X',
      display: 'WFX',
      symbol: 'FX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
        }],
      socials: {
        website: 'https://fx.pundi.ai',
        x: 'https://x.com/PundiAI'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'FX',
            chain_name: 'fxcore'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }],
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      socials: {
        website: 'https://osmosis.zone',
        x: 'https://x.com/osmosis'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12618',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D',
      name: 'Ion DAO',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
        }],
      coingecko_id: 'ion',
      keywords: ['memecoin', 'defi'],
      socials: {
        website: 'https://ion.wtf',
        x: 'https://x.com/_IONDAO'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12618',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    }
  ]
};
export default assets;
    