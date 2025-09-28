import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'desmostestnet',
  assets: [{
      description: 'The native token of Desmos',
      denomUnits: [{
          denom: 'udaric',
          exponent: 0
        }, {
          denom: 'daric',
          exponent: 6
        }],
      base: 'udaric',
      name: 'Desmos Testnet',
      display: 'daric',
      symbol: 'DARIC',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'desmos',
            baseDenom: 'udsm'
          },
          provider: 'Desmos'
        }],
      coingeckoId: 'desmos',
      typeAsset: 'sdk.coin',
      images: [{
          imageSync: {
            chainName: 'desmos',
            baseDenom: 'udsm'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg'
        }]
    }]
};
export default info;