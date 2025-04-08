import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'arkeo',
  assets: [{
      description: 'Arkeo is a decentralized marketplace that connects API providers with consumers, bringing web2 data on-chain in a secure and incentivized manner.',
      extendedDescription: 'Arkeo Protocol is a decentralized network designed to provide a marketplace for indexed node data and API services. It enables developers to access off-chain data in a trustless, permissionless, and censorship-resistant environment. Arkeo bridges the gap between traditional web services and blockchain applications by creating an open market for API providers and consumers.\n\nWith Arkeo, API providers can monetize their services directly while consumers get reliable access to the data they need without centralized intermediaries. The protocol implements a unique incentive structure and reputation system to ensure quality of service and reliability. Arkeo allows nodes to offer different tiers of service on an on-chain contract basis between application and node providers, including free tiers, making it an open and transparent platform for the community to utilize and contribute to.',
      denomUnits: [{
          denom: 'uarkeo',
          exponent: 0
        }, {
          denom: 'arkeo',
          exponent: 8
        }],
      base: 'uarkeo',
      name: 'Arkeo',
      display: 'arkeo',
      symbol: 'ARKEO',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkeo/images/arkeo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkeo/images/arkeo.svg',
          theme: {
            primaryColorHex: '#3BE0FF'
          }
        }],
      socials: {
        website: 'https://arkeo.network/',
        twitter: 'https://twitter.com/ArkeoNetwork'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;