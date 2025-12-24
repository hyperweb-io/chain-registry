import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'mirage',
  assets: [{
      description: 'The native token of Mirage. A social platform for true discourse. Decentralized. Unstoppable.',
      extendedDescription: 'MIRAGE powers Mirage, a social platform where communities own their conversations. No corporate gatekeepers, no censorship, no single point of control. True discourse. Decentralized. Unstoppable.',
      denomUnits: [{
          denom: 'umirage',
          exponent: 0
        }, {
          denom: 'mirage',
          exponent: 6
        }],
      base: 'umirage',
      name: 'Mirage',
      display: 'mirage',
      symbol: 'MIRAGE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mirage/images/mirage.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mirage/images/mirage.png'
        }],
      socials: {
        website: 'https://mirage.foundation',
        x: 'https://x.com/getmirage'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;