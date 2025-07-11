import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'terpnettestnet',
  assets: [{
      description: 'Terp Token (TERP) is the Terp Network\'s native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.',
      denomUnits: [{
          denom: 'uterpx',
          exponent: 0
        }, {
          denom: 'terpx',
          exponent: 6
        }],
      base: 'uterpx',
      name: 'Terp Testnet Token',
      display: 'terpx',
      symbol: 'TERPX',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/terp.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/terp.png'
        }],
      typeAsset: 'sdk.coin'
    }, {
      description: 'Persy Gas Token (Persy) is the Terp Network\'s native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.',
      denomUnits: [{
          denom: 'uthiolx',
          exponent: 0
        }, {
          denom: 'thiolx',
          exponent: 6
        }],
      base: 'uthiolx',
      name: 'Thiol Testnet Gas Token',
      display: 'thiolx',
      symbol: 'THIOLX',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/thiol.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/thiol.png'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;