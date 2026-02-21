import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'divine',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://divineray.ca/',
  prettyName: 'Divine',
  chainType: 'cosmos',
  chainId: 'divine-1',
  bech32Prefix: 'divine',
  daemonName: 'divined',
  nodeHome: '$HOME/.divine',
  slip44: 118,
  staking: {
    stakingTokens: [{
        denom: 'uDRC'
      }],
    lockDuration: {
      time: '2592000s'
    }
  },
  fees: {
    feeTokens: [{
        denom: 'uDRC',
        lowGasPrice: 0.0025,
        averageGasPrice: 0.005,
        highGasPrice: 0.05
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Divine-Ray-Coin/divinechain.git',
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/Divine-Ray-Coin/divinechain/refs/heads/main/genesis/genesis.json'
    },
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.17'
    },
    cosmwasm: {
      enabled: false
    },
    language: {
      type: 'go',
      version: '1.24.5'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.53.3'
    },
    ibc: {
      type: 'go',
      version: 'v10.2.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/divine/images/udrc.png'
  },
  description: 'Divine Ray Chain (DRC) powers a public-permissioned blockchain designed for conscious creators and community networks. DRC is the native asset used to secure the chain, enable transactions, reward participation, and support the emerging divine digital economy.',
  apis: {
    rpc: [
      {
        address: 'https://rpc-mainnet.divineray.ca:443',
        provider: 'divineRay'
      },
      {
        address: 'https://rpc-mainnet-node2.divineray.ca:443',
        provider: 'divineRay'
      },
      {
        address: 'https://rpc-mainnet-node3.divineray.ca:443',
        provider: 'divineRay'
      }
    ],
    rest: [
      {
        address: 'https://rest-mainnet.divineray.ca:443',
        provider: 'divineRay'
      },
      {
        address: 'https://rest-mainnet-node2.divineray.ca:443',
        provider: 'divineRay'
      },
      {
        address: 'https://rest-mainnet-node3.divineray.ca:443',
        provider: 'divineRay'
      }
    ],
    grpc: [
      {
        address: 'grpc-mainnet.divineray.ca:443',
        provider: 'divineRay'
      },
      {
        address: 'grpc-mainnet-node2.divineray.ca:443',
        provider: 'divineRay'
      },
      {
        address: 'grpc-mainnet-node3.divineray.ca:443',
        provider: 'divineRay'
      }
    ]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://ping.pub/divine',
      txPage: 'https://ping.pub/divine/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/divine/images/udrc.png'
    }]
};
export default info;