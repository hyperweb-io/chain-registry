import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'moo',
  assets: [{
      description: 'MilkyWay\'s Liquid Staked INIT',
      denomUnits: [{
          denom: 'factory/init17p9rzwnnfxcjp32un9ug7yhhzgtkhvl9jfksztgw5uh69wac2pgsj6uxxj/umilkINIT',
          exponent: 0
        }, {
          denom: 'milkINIT',
          exponent: 6
        }],
      base: 'factory/init17p9rzwnnfxcjp32un9ug7yhhzgtkhvl9jfksztgw5uh69wac2pgsj6uxxj/umilkINIT',
      name: 'milkINIT',
      display: 'milkINIT',
      symbol: 'milkINIT',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'initia',
            baseDenom: 'uinit'
          },
          provider: 'MilkyWay'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/moo/images/milkINIT.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/moo/images/milkINIT.png'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;