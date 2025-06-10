import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'bitcannadevnet',
  assets: [{
      description: 'The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.',
      denomUnits: [{
          denom: 'ubcna',
          exponent: 0
        }, {
          denom: 'bcna',
          exponent: 6
        }],
      base: 'ubcna',
      display: 'bcna',
      name: 'BitCanna',
      symbol: 'BCNA',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'bitcanna',
            baseDenom: 'ubcna'
          },
          provider: 'Bitcanna'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bitcannadevnet/images/bcna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bitcannadevnet/images/bcna.svg'
      },
      coingeckoId: 'bitcanna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bitcannadevnet/images/bcna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bitcannadevnet/images/bcna.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;