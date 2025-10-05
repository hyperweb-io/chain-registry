import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'seitestnet2',
  assets: [{
      description: 'The native staking and governance token of the Atlantic testnet version of Sei.',
      denomUnits: [{
          denom: 'usei',
          exponent: 0
        }, {
          denom: 'sei',
          exponent: 6
        }],
      base: 'usei',
      name: 'Sei',
      display: 'sei',
      symbol: 'SEI',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'sei',
            baseDenom: 'usei'
          },
          provider: 'Sei'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
      },
      images: [{
          imageSync: {
            chainName: 'sei',
            baseDenom: 'usei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;