import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'lumiwaveprotocol',
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
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumiwaveprotocol/images/lumiwave.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumiwaveprotocol/images/lumiwave.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumiwaveprotocol/images/lumiwave.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumiwaveprotocol/images/lumiwave.svg'
        }]
    }]
};
export default info;