import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'lumiwaveprotocoltestnet',
  assets: [{
      description: 'The native token of LumiWave Protocol.',
      denomUnits: [{
          denom: 'ulwp',
          exponent: 0
        }, {
          denom: 'LWP',
          exponent: 6
        }],
      base: 'ulwp',
      name: 'LumiWave Protocol',
      display: 'LWP',
      symbol: 'LWP',
      typeAsset: 'sdk.coin',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'lumiwaveprotocol',
            baseDenom: 'ulwp'
          },
          provider: 'LumiWave Protocol'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumiwaveprotocol/images/lumiwave.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumiwaveprotocol/images/lumiwave.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumiwaveprotocol/images/lumiwave.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumiwaveprotocol/images/lumiwave.svg',
          imageSync: {
            chainName: 'lumiwaveprotocol',
            baseDenom: 'ulwp'
          }
        }]
    }]
};
export default info;