import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'forex',
  assets: [
    {
      typeAsset: 'unknown',
      denomUnits: [{
          denom: 'USD',
          exponent: 0
        }],
      base: 'USD',
      display: 'USD',
      name: 'United States Dollar',
      symbol: 'USD'
    },
    {
      typeAsset: 'unknown',
      denomUnits: [{
          denom: 'EUR',
          exponent: 0
        }],
      base: 'EUR',
      display: 'EUR',
      name: 'Euro',
      symbol: 'EUR'
    },
    {
      typeAsset: 'unknown',
      denomUnits: [{
          denom: 'BRL',
          exponent: 0
        }],
      base: 'BRL',
      display: 'BRL',
      name: 'Brazilian Real',
      symbol: 'BRL'
    }
  ]
};
export default info;