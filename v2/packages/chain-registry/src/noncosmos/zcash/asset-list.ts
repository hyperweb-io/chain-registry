import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'zcash',
  assets: [{
      description: 'Zcash is a privacy-focused cryptocurrency that uses advanced cryptography to provide enhanced transaction privacy.',
      extendedDescription: 'Zcash (ZEC) is a decentralized cryptocurrency focused on privacy and selective transparency of transactions. It uses zero-knowledge proofs (zk-SNARKs) to enable users to transact privately while maintaining a secure blockchain. Zcash offers users the choice between transparent transactions (similar to Bitcoin) and shielded transactions that hide sender, receiver, and amount information.',
      denomUnits: [{
          denom: 'zatoshi',
          exponent: 0
        }, {
          denom: 'zec',
          exponent: 8
        }],
      typeAsset: 'bitcoin-like',
      base: 'zatoshi',
      name: 'Zcash',
      display: 'zec',
      symbol: 'ZEC',
      coingeckoId: 'zcash',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/zcash/images/zec.png',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://z.cash/',
        x: 'https://x.com/zcash'
      }
    }]
};
export default info;