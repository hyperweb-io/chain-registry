import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'filecoin',
  assets: [{
      description: 'Filecoin is a decentralized storage network designed to turn cloud storage into an algorithmic market. The network facilitates open markets for storing and retrieving data, where users pay to store their files on storage miners. Filecoin is built on top of the InterPlanetary File System (IPFS), a peer-to-peer storage network. Filecoin aims to store data in a decentralized manner, unlike traditional cloud storage providers.\n\nParticipants in the Filecoin network are incentivized to act honestly and store as much data as possible because they earn the Filecoin cryptocurrency (FIL) in exchange for their storage services. This setup ensures the integrity and accessibility of data stored. Filecoin\'s model allows for a variety of storage options, including long-term archival storage and more rapid retrieval services, making it a versatile solution for decentralized data storage. The project, developed by Protocol Labs, also focuses on ensuring that data is stored reliably and efficiently.',
      denomUnits: [{
          denom: 'attoFIL',
          exponent: 0,
          aliases: ['fil-wei']
        }, {
          denom: 'fil',
          exponent: 18
        }],
      typeAsset: 'evm-base',
      base: 'attoFIL',
      name: 'Filecoin',
      display: 'fil',
      symbol: 'FIL',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.svg'
      },
      coingeckoId: 'filecoin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.svg'
        }]
    }, {
      description: 'Wrapped Filecoin, ERC20 Wrapper over Filecoin',
      address: '0x60E1773636CF5E4A227d9AC24F20fEca034ee25A',
      denomUnits: [{
          denom: '0x60E1773636CF5E4A227d9AC24F20fEca034ee25A',
          exponent: 0,
          aliases: ['wfil-wei']
        }, {
          denom: 'wfil',
          exponent: 18
        }],
      typeAsset: 'erc20',
      base: '0x60E1773636CF5E4A227d9AC24F20fEca034ee25A',
      name: 'Wrapped FIL',
      display: 'wfil',
      symbol: 'WFIL',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chainName: 'filecoin',
            baseDenom: 'attoFIL'
          },
          provider: 'Filecoin'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/wfil.svg'
        }]
    }]
};
export default info;