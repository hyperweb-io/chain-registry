import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'dydxtestnet',
  assets: [{
      description: 'Int3face Testnet blockchain native token',
      denom_units: [{
          denom: 'ibc/012680D73D291EA10EE78216BF59CD2C3097ACBB412291D69E293ADE87DA160E',
          exponent: 0,
          aliases: ['uint3']
        }, {
          denom: 'int3',
          exponent: 6
        }],
      base: 'ibc/012680D73D291EA10EE78216BF59CD2C3097ACBB412291D69E293ADE87DA160E',
      name: 'Int3face Testnet Token',
      display: 'int3',
      symbol: 'INT3',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3.png'
        }],
      socials: {
        website: 'https://testnet.app.int3face.zone/',
        x: 'https://x.com/_Bitfrost_'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'uint3',
            chain_name: 'int3facetestnet'
          },
          chain: {
            channel_id: 'channel-86'
          }
        }]
    }, {
      description: 'Int3face Testnet blockchain native token',
      denom_units: [{
          denom: 'ibc/012680D73D291EA10EE78216BF59CD2C3097ACBB412291D69E293ADE87DA160E',
          exponent: 0,
          aliases: ['uint3']
        }, {
          denom: 'int3',
          exponent: 6
        }],
      base: 'ibc/012680D73D291EA10EE78216BF59CD2C3097ACBB412291D69E293ADE87DA160E',
      name: 'Int3face Testnet Token',
      display: 'int3',
      symbol: 'INT3',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3.png'
        }],
      socials: {
        website: 'https://testnet.app.int3face.zone/',
        x: 'https://x.com/_Bitfrost_'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'uint3',
            chain_name: 'int3facetestnet'
          },
          chain: {
            channel_id: 'channel-86'
          }
        }]
    }]
};
export default assets;
    