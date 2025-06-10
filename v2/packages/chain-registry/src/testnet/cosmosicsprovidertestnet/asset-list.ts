import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'cosmosicsprovidertestnet',
  assets: [{
      description: 'The native staking and governance token for the Cosmos ICS Provider Testnet.',
      denomUnits: [{
          denom: 'uatom',
          exponent: 0
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'uatom',
      name: 'Cosmos',
      display: 'atom',
      symbol: 'ATOM',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;