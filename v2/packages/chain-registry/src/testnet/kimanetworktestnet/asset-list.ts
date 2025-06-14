import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'kimanetworktestnet',
  assets: [{
      description: 'Kima is an asset-agnostic interoperability infrastructure that connects blockchain networks and legacy financial systems, enabling secure, scalable cross-chain transactions and seamless communication across ecosystems.',
      extendedDescription: 'Kima is an asset-agnostic interoperability infrastructure designed to bridge the gap between blockchain networks and traditional financial systems. By providing a unified platform for secure and scalable cross-ecosystem  transactions, Kima enables seamless transfers across different ecosystems, including digital assets and legacy financial systems. Its patent-pending architecture eliminates vulnerabilities associated with smart contracts and key management, ensuring a secure environment for high-volume transactions. Kima’s innovative approach provides financial institutions and developers with the tools needed to create interoperable solutions that operate across both traditional and blockchain-based systems, driving the future of decentralized finance and financial services.',
      denomUnits: [{
          denom: 'uKIMA',
          exponent: 0
        }, {
          denom: 'KIMA',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'uKIMA',
      name: 'KIMA',
      display: 'KIMA',
      symbol: 'KIMA',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'kimanetwork',
            baseDenom: 'uKIMA'
          },
          provider: 'Kima Network'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kimanetwork/images/kima.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kimanetwork/images/kima.svg'
      },
      images: [{
          imageSync: {
            chainName: 'kimanetwork',
            baseDenom: 'uKIMA'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kimanetwork/images/kima.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kimanetwork/images/kima.svg'
        }],
      socials: {
        github: 'https://github.com/kima-finance',
        medium: 'https://medium.com/@kima_finance',
        telegram: 'https://t.me/kimanetwork',
        twitter: 'https://x.com/KimaNetwork',
        website: 'https://www.kima.network/'
      }
    }]
};
export default info;