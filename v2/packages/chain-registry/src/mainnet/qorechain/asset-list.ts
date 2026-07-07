import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'qorechain',
  assets: [{
      description: 'QOR is the native staking, gas and governance token of QoreChain, a quantum-safe Layer 1 with hybrid post-quantum (ML-DSA-87 plus secp256k1) transaction signing and unified EVM/SVM execution.',
      denomUnits: [{
          denom: 'uqor',
          exponent: 0
        }, {
          denom: 'qor',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'uqor',
      name: 'QoreChain',
      display: 'qor',
      symbol: 'QOR',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qorechain/images/qorechain.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qorechain/images/qorechain.png'
        }]
    }]
};
export default info;