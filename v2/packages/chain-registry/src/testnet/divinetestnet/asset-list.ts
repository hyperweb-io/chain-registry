import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'divinetestnet',
  assets: [{
      description: 'Divine Ray Chain (DRC) powers a public-permissioned blockchain designed for conscious creators and community networks. DRC is the native asset used to secure the chain, enable transactions, reward participation, and support the emerging divine digital economy.',
      denomUnits: [{
          denom: 'uDRC',
          exponent: 0,
          aliases: ['microDRC']
        }, {
          denom: 'DRC',
          exponent: 6
        }],
      base: 'uDRC',
      name: 'Divine Testnet',
      display: 'DRC',
      symbol: 'DRC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/divine/images/udrc.png'
      },
      images: [{
          imageSync: {
            chainName: 'divine',
            baseDenom: 'uDRC'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/divine/images/udrc.png'
        }],
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'divine',
            baseDenom: 'uDRC'
          },
          provider: 'DivineRay'
        }],
      socials: {
        website: 'https://divineray.ca/',
        telegram: 'https://t.me/+WF9GmuVpuOFmOTEx'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;