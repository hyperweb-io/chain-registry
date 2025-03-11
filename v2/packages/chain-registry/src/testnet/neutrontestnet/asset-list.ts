import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'neutrontestnet',
  assets: [
    {
      description: 'The native token of Neutron chain',
      denomUnits: [{
          denom: 'untrn',
          exponent: 0
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'untrn',
      name: 'Neutron Testnet',
      display: 'ntrn',
      symbol: 'NTRN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The yield token for ATOM denominated vaults on Amulet Protocol',
      denomUnits: [{
          denom: 'factory/neutron15lku24mqhvy4v4gryrqs4662n9v9q4ux9tayn89cmdzldjcgawushxvm76/amatom',
          exponent: 0
        }, {
          denom: 'amATOM',
          exponent: 6
        }],
      base: 'factory/neutron15lku24mqhvy4v4gryrqs4662n9v9q4ux9tayn89cmdzldjcgawushxvm76/amatom',
      name: 'amATOM (Testnet)',
      display: 'amATOM',
      symbol: 'amATOM',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/amATOM.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/amATOM.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/amATOM.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/amATOM.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      typeAsset: 'sdk.coin',
      denomUnits: [{
          denom: 'factory/neutron1r3slyjlf7g76mz3na6gh7c8ek62rhssrzf60uh0emyw3x94rppyqfcs0pk/uarena',
          exponent: 0,
          aliases: ['uarena']
        }, {
          denom: 'arena',
          exponent: 6
        }],
      base: 'factory/neutron1r3slyjlf7g76mz3na6gh7c8ek62rhssrzf60uh0emyw3x94rppyqfcs0pk/uarena',
      name: 'Arena Token',
      display: 'arena',
      symbol: 'ARENA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/arena_dao.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/arena_dao.svg'
      },
      images: [{
          imageSync: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron129ukd5cwahcjkccujz87rjemjukff7jf6sau72qrhva677xgz9gs4m4jeq/uarena'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/arena_dao.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/arena_dao.svg',
          theme: {
            circle: true,
            primaryColorHex: '#FF8000'
          }
        }],
      description: 'The governance token of the Arena DAO on Neutron testnet',
      socials: {
        twitter: 'https://x.com/ArenaDAO',
        website: 'https://testnet.arenadao.org/'
      }
    },
    {
      description: 'Test Token 1',
      denomUnits: [{
          denom: 'factory/neutron1aphhmsv5lglvvycldlveckjq8zcgwvg34cn0cs/test-token-1',
          exponent: 0
        }, {
          denom: 'TEST1',
          exponent: 18
        }],
      base: 'factory/neutron1aphhmsv5lglvvycldlveckjq8zcgwvg34cn0cs/test-token-1',
      name: 'Test Token 1',
      display: 'TEST1',
      symbol: 'TEST1',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Test Token 2',
      denomUnits: [{
          denom: 'factory/neutron1aphhmsv5lglvvycldlveckjq8zcgwvg34cn0cs/test-token-2',
          exponent: 0
        }, {
          denom: 'TEST2',
          exponent: 6
        }],
      base: 'factory/neutron1aphhmsv5lglvvycldlveckjq8zcgwvg34cn0cs/test-token-2',
      name: 'Test Token 2',
      display: 'TEST2',
      symbol: 'TEST2',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Test Token 3',
      denomUnits: [{
          denom: 'factory/neutron1aphhmsv5lglvvycldlveckjq8zcgwvg34cn0cs/test-token-3',
          exponent: 0
        }, {
          denom: 'TEST3',
          exponent: 18
        }],
      base: 'factory/neutron1aphhmsv5lglvvycldlveckjq8zcgwvg34cn0cs/test-token-3',
      name: 'Test Token 3',
      display: 'TEST3',
      symbol: 'TEST3',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Test Token 4',
      denomUnits: [{
          denom: 'factory/neutron1aphhmsv5lglvvycldlveckjq8zcgwvg34cn0cs/test-token-4',
          exponent: 0
        }, {
          denom: 'TEST4',
          exponent: 18
        }],
      base: 'factory/neutron1aphhmsv5lglvvycldlveckjq8zcgwvg34cn0cs/test-token-4',
      name: 'Test Token 4',
      display: 'TEST4',
      symbol: 'TEST4',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Test Token 5',
      denomUnits: [{
          denom: 'factory/neutron1aphhmsv5lglvvycldlveckjq8zcgwvg34cn0cs/test-token-5',
          exponent: 0
        }, {
          denom: 'TEST5',
          exponent: 6
        }],
      base: 'factory/neutron1aphhmsv5lglvvycldlveckjq8zcgwvg34cn0cs/test-token-5',
      name: 'Test Token 5',
      display: 'TEST5',
      symbol: 'TEST5',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Test Token 6',
      denomUnits: [{
          denom: 'factory/neutron1aphhmsv5lglvvycldlveckjq8zcgwvg34cn0cs/test-token-6',
          exponent: 0
        }, {
          denom: 'TEST6',
          exponent: 6
        }],
      base: 'factory/neutron1aphhmsv5lglvvycldlveckjq8zcgwvg34cn0cs/test-token-6',
      name: 'Test Token 6',
      display: 'TEST6',
      symbol: 'TEST6',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
        }],
      typeAsset: 'sdk.coin'
    }
  ]
};
export default info;