import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'lumeratestnet',
  assets: [{
      denom_units: [{
          denom: 'ulume',
          exponent: 0,
          aliases: ['microlume']
        }, {
          denom: 'LUME',
          exponent: 6,
          aliases: ['lume']
        }],
      base: 'ulume',
      display: 'LUME',
      name: 'lume',
      symbol: 'LUME',
      type_asset: 'sdk.coin',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumera/images/lumera.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumera/images/lumera.png'
        }],
      socials: {
        github: 'https://github.com/LumeraProtocol/lumera',
        discord: 'https://discord.gg/lumeraprotocol',
        telegram: 'https://t.me/lumeraprotocol',
        website: 'https://lumera.io'
      }
    }]
};
export default info;