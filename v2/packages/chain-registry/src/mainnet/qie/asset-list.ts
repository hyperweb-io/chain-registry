import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'qie',
  assets: [{
      description: 'QIE is the native gas and staking token of the QIE Blockchain, a high-performance Layer-1 EVM-compatible Cosmos SDK chain',
      extendedDescription: 'QIE Blockchain V3 is a next-generation Layer 1 protocol with EVM and Cosmos interoperability. The QIE token powers transactions, smart contract execution, and network security. It can be used as both a Cosmos-native coin (denom: aqie) and as an ERC-20 token on the chain\'s EVM layer through an automatic ERC-20 conversion precompile at address 0xD4949664cD82660AaE99bEdc034a0deA8A0bd517.',
      denomUnits: [{
          denom: 'aqie',
          exponent: 0,
          aliases: ['attoqie']
        }, {
          denom: 'qie',
          exponent: 18
        }],
      typeAsset: 'evm-base',
      base: 'aqie',
      name: 'QIE',
      display: 'qie',
      symbol: 'QIE',
      coingeckoId: 'qie',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qie/images/qie.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qie/images/qie.png'
        }],
      socials: {
        website: 'https://qie.digital'
      }
    }]
};
export default info;