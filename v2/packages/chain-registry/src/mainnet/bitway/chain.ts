import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'bitway',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://bitway.com/',
  prettyName: 'Bitway',
  chainType: 'cosmos',
  chainId: 'bitway-1',
  bech32Prefix: 'bc',
  daemonName: 'bitwayd',
  nodeHome: '$HOME/.bitway',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ubtw',
        fixedMinGasPrice: 0.0006,
        lowGasPrice: 0.0006,
        averageGasPrice: 0.0008,
        highGasPrice: 0.001
      }, {
        denom: 'sat',
        fixedMinGasPrice: 0.000001,
        lowGasPrice: 0.000001,
        averageGasPrice: 0.0000015,
        highGasPrice: 0.000002
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ubtw'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/bitwaylabs/bitway',
    recommendedVersion: 'v2.0.0',
    compatibleVersions: ['v2.0.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.12'
    },
    genesis: {
      genesisUrl: 'https://github.com/bitwaylabs/networks/raw/main/mainnet/bitway-1/genesis.tar.gz'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.14'
    },
    ibc: {
      type: 'go',
      version: 'v8.5.3'
    },
    cosmwasm: {
      version: 'v0.53.0',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitway/images/btw.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitway/images/btw.svg'
  },
  description: 'A fully Bitcoin-Compatible L1 blockchain for the BTCFi',
  apis: {
    rpc: [
      {
        address: 'https://rpc.bitway.com',
        provider: 'Bitway Labs'
      },
      {
        address: 'https://rpc.bitway.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://bitway-rpc.synergynodes.com/',
        provider: 'Synergy Nodes'
      },
      {
        address: 'https://bitway.publicnode.com/',
        provider: 'Allnodes'
      },
      {
        address: 'https://bitway.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://bitway-mainnet-rpc.itrocket.net',
        provider: 'ITRocket'
      },
      {
        address: 'https://bitway.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥'
      }
    ],
    rest: [
      {
        address: 'https://rest.bitway.com',
        provider: 'Bitway Labs'
      },
      {
        address: 'https://api.bitway.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://bitway-api.synergynodes.com',
        provider: 'Synergy Nodes'
      },
      {
        address: 'https://bitway-rest.publicnode.com',
        provider: 'Allnodes'
      },
      {
        address: 'https://bitway.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://bitway-mainnet-api.itrocket.net',
        provider: 'ITRocket'
      },
      {
        address: 'https://bitway.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      }
    ],
    grpc: [
      {
        address: 'grpc.bitway.com:443',
        provider: 'Bitway Labs'
      },
      {
        address: 'https://grpc.bitway.nodestake.org:443',
        provider: 'NodeStake'
      },
      {
        address: 'bitway-grpc.synergynodes.com:443',
        provider: 'Synergy Nodes'
      },
      {
        address: 'bitway-grpc.publicnode.com:443',
        provider: 'Allnodes'
      },
      {
        address: 'bitway.grpc.kjnodes.com:443',
        provider: 'kjnodes'
      },
      {
        address: 'bitway-mainnet-grpc.itrocket.net:443',
        provider: 'ITRocket'
      }
    ]
  },
  explorers: [
    {
      kind: 'Ping Pub',
      url: 'https://explorer.nodestake.org/bitway',
      txPage: 'https://explorer.nodestake.org/bitway/tx/${txHash}',
      accountPage: 'https://explorer.nodestake.org/bitway/account/${accountAddress}'
    },
    {
      kind: 'Ping Pub',
      url: 'https://cosmosrun.info/bitway',
      txPage: 'https://cosmosrun.info/bitway/tx/${txHash}',
      accountPage: 'https://cosmosrun.info/bitway/account/${accountAddress}'
    },
    {
      kind: 'Ping Pub',
      url: 'https://explorer.kjnodes.com/bitway',
      txPage: 'https://explorer.kjnodes.com/bitway/tx/${txHash}',
      accountPage: 'https://explorer.kjnodes.com/bitway/account/${accountAddress}'
    },
    {
      kind: 'Ping Pub',
      url: 'https://explorer.stavr.tech/Bitway-Mainnet',
      txPage: 'https://explorer.stavr.tech/Bitway-Mainnet/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Bitway-Mainnet/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitway/images/btw.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitway/images/btw.svg'
    }]
};
export default info;