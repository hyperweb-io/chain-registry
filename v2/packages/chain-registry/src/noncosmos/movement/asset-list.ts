import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'movement',
  assets: [{
      description: 'The native currency of Movement Network',
      extendedDescription: 'Movement Network is an ecosystem of Modular Move-Based Blockchains that enables developers to build secure, performant, and interoperable blockchain applications, bridging the gap between Move and EVM ecosystems. Movement Network is the first Move-EVM L2 for Ethereum, alongside open-source tooling and protocols to facilitate the adoption of the Move programming language across blockchain ecosystems.',
      typeAsset: 'erc20',
      address: '0xa',
      denomUnits: [{
          denom: '0xa',
          exponent: 0,
          aliases: ['octa']
        }, {
          denom: 'move',
          exponent: 8
        }],
      base: '0xa',
      name: 'Movement',
      display: 'move',
      symbol: 'MOVE',
      coingeckoId: 'movement',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/movement/images/move.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/movement/images/move.png',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://www.movementnetwork.xyz/',
        twitter: 'https://twitter.com/movementfdn'
      }
    }]
};
export default info;