import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'bfhevmtestnet',
  assets: [{
      description: 'BFH-EVM is a blockchain platform developed by BFH Fintech Innovations Ltd., designed to support DeFi, NFTs, and decentralized applications with fast and low-cost transactions.',
      extendedDescription: 'BFHEVM is a blockchain platform developed by BFH Fintech Innovations Ltd. to facilitate the creation and operation of decentralized applications (dApps), decentralized finance (DeFi) protocols, and non-fungible tokens (NFTs). By utilizing the Tendermint consensus engine and the Cosmos SDK, BFHEVM offers fast and low-cost transactions while ensuring high security and scalability. The platform is EVM-compatible, allowing developers to easily port their Ethereum-based dApps to BFHEVM. The native token, BFH, is used for transaction fees, staking, and governance, providing incentives for users to contribute to the network\'s security and participate in its governance. BFHEVM aims to accelerate the adoption of DeFi and NFTs by providing a robust and efficient blockchain infrastructure.',
      denomUnits: [{
          denom: 'abfh',
          exponent: 0
        }, {
          denom: 'bfh',
          exponent: 18
        }],
      base: 'abfh',
      name: 'BFH',
      display: 'bfh',
      symbol: 'BFH',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bfhevmtestnet/images/bfhevm.png'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bfhevmtestnet/images/bfhevm.png'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;