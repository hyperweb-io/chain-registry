import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'gonka',
  assets: [{
      description: 'Coins for the Gonka network.',
      extendedDescription: 'Gonka is a decentralized AI infrastructure designed to optimize computational power specifically for AI model training and inference, offering a competitive alternative to traditional centralized cloud providers. Centralized systems are often expensive, monopolistic, and carry risks of censorship, whereas existing decentralized networks frequently waste resources on non-productive tasks, such as network security.\n\nWe introduce an innovative consensus mechanism that ensures nearly 100% of computational resources are used for meaningful AI tasks, maximizing efficiency and minimizing operational costs.',
      denomUnits: [
        {
          denom: 'ngonka',
          exponent: 0,
          aliases: ['nanogonka']
        },
        {
          denom: 'ugonka',
          exponent: 3,
          aliases: ['microgonka']
        },
        {
          denom: 'mgonka',
          exponent: 6,
          aliases: ['milligonka']
        },
        {
          denom: 'gonka',
          exponent: 9
        }
      ],
      base: 'ngonka',
      name: 'Gonka',
      display: 'gonka',
      symbol: 'GNK',
      typeAsset: 'sdk.coin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gonka/images/gonka_logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gonka/images/gonka_logo.svg'
        }],
      socials: {
        x: 'https://x.com/gonka_ai',
        discord: 'https://discord.com/invite/RADwCT2U6R'
      }
    }]
};
export default info;