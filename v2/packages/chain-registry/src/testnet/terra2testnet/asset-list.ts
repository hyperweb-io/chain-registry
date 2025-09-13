import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'terra2testnet',
  assets: [{
      description: 'The native staking token of Terra.',
      denomUnits: [{
          denom: 'uluna',
          exponent: 0
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'uluna',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'terra2',
            baseDenom: 'uluna'
          },
          provider: 'Terra'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      },
      coingeckoId: 'terra-luna-2',
      images: [{
          imageSync: {
            chainName: 'terra2',
            baseDenom: 'uluna'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;