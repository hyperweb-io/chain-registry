import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: '0l',
  assets: [{
      description: 'The native token of 0L Network',
      extendedDescription: 'Libra Coin is a fork from Facebook\'s Diem (Libra) blockchain that was announced in 2019. Libra Coin operates on its own high-performance Layer 1 blockchain, known as the 0L Network. In October 2021, Libra Coin began mining.\n\n Like Bitcoin, there were no pre-mined coins or dedicated token allocation to any parties; all coins were minted through a mining process. Unlike Bitcoin, which undergoes continuous issuance, Libra Coin has a fixed supply. By December 2023, all the Libra Coin had been issued, establishing a capped supply and making the coin permanently deflationary.\n\n Fiercely independent, the project has a long-term view because it is unburdened by venture capital funding, labs entities, a foundation, and the influence of other blockchain ecosystems. Carpe diem.',
      denomUnits: [{
          denom: 'microlibra',
          exponent: 0
        }, {
          denom: 'libra',
          exponent: 6
        }],
      typeAsset: 'unknown',
      base: 'microlibra',
      name: 'Libra Coin',
      display: 'libra',
      symbol: 'LIBRA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/0l/images/libra.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/0l/images/libra.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/0l/images/libra.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/0l/images/libra.svg',
          theme: {
            primaryColorHex: '#e45c5c'
          }
        }],
      coingeckoId: 'libra-3',
      socials: {
        website: 'https://0l.network/',
        twitter: 'https://twitter.com/0LNetwork'
      }
    }]
};
export default info;