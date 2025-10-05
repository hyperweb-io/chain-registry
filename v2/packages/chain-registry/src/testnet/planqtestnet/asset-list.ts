import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'planqtestnet',
  assets: [{
      description: 'The native EVM, governance and staking token of the Planq Network',
      denomUnits: [{
          denom: 'atplanq',
          exponent: 0
        }, {
          denom: 'tplanq',
          exponent: 18
        }],
      base: 'atplanq',
      name: 'Planq Atlas Testnet',
      display: 'tplanq',
      symbol: 'tPLQ',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'planq',
            baseDenom: 'aplanq'
          },
          provider: 'Planq'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
      },
      images: [{
          imageSync: {
            chainName: 'planq',
            baseDenom: 'aplanq'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;