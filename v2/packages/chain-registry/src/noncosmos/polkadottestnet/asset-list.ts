import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../../assetlist.schema.json',
  chainName: 'polkadottestnet',
  assets: [{
      description: 'The native fee, governance, staking, and bonding token of the Polkadot platform.',
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
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'polkadot',
            baseDenom: 'Planck'
          },
          provider: 'Polkadot'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
      },
      coingeckoId: 'polkadot',
      images: [{
          imageSync: {
            chainName: 'polkadot',
            baseDenom: 'Planck'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
        }]
    }]
};
export default info;