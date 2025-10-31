import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'soarchaintestnet',
  assets: [{
      description: 'The native staking coin of the Soarchain-core.',
      denomUnits: [{
          denom: 'utsoar',
          exponent: 0,
          aliases: ['microtsoar']
        }, {
          denom: 'tsoar',
          exponent: 6
        }],
      base: 'utsoar',
      display: 'tsoar',
      name: 'tsoar',
      symbol: 'tsoar',
      keywords: ['DePin'],
      socials: {
        website: 'https://www.soarchain.com',
        x: 'https://x.com/soar_chain'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/soarchaintestnet/images/soarchain.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/soarchaintestnet/images/soarchain.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;