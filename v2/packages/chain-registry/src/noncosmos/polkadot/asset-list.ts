import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'polkadot',
  assets: [{
      description: 'Polkadot is a multi-chain blockchain platform that enables interoperability between different blockchains, allowing them to share information and security.',
      extendedDescription: 'Polkadot is a next-generation blockchain platform that facilitates interoperability between multiple blockchains, allowing them to operate seamlessly together. Developed by the Web3 Foundation and led by Dr. Gavin Wood, Polkadot\'s architecture includes a central relay chain that coordinates consensus and communication among connected parachains. These parachains can be customized for various use cases, providing flexibility and scalability. The native token, DOT, is used for governance, staking, and bonding on the network. Polkadot\'s mission is to create a decentralized web where diverse blockchains can share information and security, enabling a new era of innovation and collaboration.',
      denomUnits: [
        {
          denom: 'Planck',
          exponent: 0,
          aliases: ['planck']
        },
        {
          denom: 'uDOT',
          exponent: 4,
          aliases: [
            'udot',
            'microdot',
            'Microdot'
          ]
        },
        {
          denom: 'mDOT',
          exponent: 7,
          aliases: ['millidot', 'Millidot']
        },
        {
          denom: 'DOT',
          exponent: 10,
          aliases: [
            'dot',
            'New DOT',
            'new dot'
          ]
        },
        {
          denom: 'DOT (old)',
          exponent: 12
        },
        {
          denom: 'MDOT',
          exponent: 16,
          aliases: ['million', 'Million']
        }
      ],
      typeAsset: 'substrate',
      base: 'Planck',
      name: 'Polkadot',
      display: 'DOT',
      symbol: 'DOT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
      },
      coingeckoId: 'polkadot',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg',
          theme: {
            primaryColorHex: '#e4047c'
          }
        }]
    }]
};
export default info;