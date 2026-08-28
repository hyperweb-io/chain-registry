import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'hickorytestnet',
  assets: [{
      description: 'The native staking, governance and utility token of the Hickory Blockchain testnet.',
      denomUnits: [{
          denom: 'uhic',
          exponent: 0
        }, {
          denom: 'HIC',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'uhic',
      name: 'Hickory',
      display: 'HIC',
      symbol: 'HIC',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hickorytestnet/images/hic.png',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://hickoryblockchain.com',
        x: 'https://x.com/HickoryDevelop1',
        telegram: 'https://t.me/HickoryBlockchain'
      }
    }]
};
export default info;