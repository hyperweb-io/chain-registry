import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'hipercapital',
  assets: [{
      description: 'HIP is the native governance and gas token of the HiperCapital sovereign chain (hipcf_7777-1).',
      typeAsset: 'sdk.coin',
      denomUnits: [{
          denom: 'ahip',
          exponent: 0,
          aliases: ['attoahip']
        }, {
          denom: 'hip',
          exponent: 18
        }],
      base: 'ahip',
      name: 'HiperCapital Governance',
      display: 'hip',
      symbol: 'HIP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/hipercapital/images/hip.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/hipercapital/images/hip.png'
        }]
    }]
};
export default info;