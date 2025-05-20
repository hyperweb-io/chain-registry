import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'junotestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Juno Testnet',
  chainType: 'cosmos',
  chainId: 'uni-7',
  bech32Prefix: 'juno',
  daemonName: 'junod',
  nodeHome: '$HOME/.juno',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ujunox',
        lowGasPrice: 0.003,
        averageGasPrice: 0.0045,
        highGasPrice: 0.006
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ujunox'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/CosmosContracts/juno',
    recommendedVersion: 'v27.0.0',
    compatibleVersions: ['v27.0.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.37.8'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/CosmosContracts/testnets/main/uni-7/genesis.zip'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.47.15'
    },
    ibc: {
      type: 'go',
      version: 'v7.6.0'
    },
    cosmwasm: {
      version: 'v0.46',
      enabled: true
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://juno-testnet-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc-uni.junonetwork.io',
        provider: 'Juno Network'
      },
      {
        address: 'https://junotestnet-rpc.kleomedes.network',
        provider: 'Kleomedes'
      }
    ],
    rest: [
      {
        address: 'https://juno-testnet-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://lcd-uni.junonetwork.io',
        provider: 'Juno Network'
      },
      {
        address: 'https://junotestnet-api.kleomedes.network',
        provider: 'Kleomedes'
      }
    ],
    grpc: [{
        address: 'juno-testnet-grpc.polkachu.com:12690',
        provider: 'Polkachu'
      }, {
        address: 'junotestnet.gprc.kleomedes.network',
        provider: 'Kleomedes'
      }]
  },
  explorers: [{
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Juno-Testnet',
      txPage: 'https://explorer.stavr.tech/Juno-Testnet/txs/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Juno-Testnet/account/${accountAddress}'
    }, {
      kind: 'Stake Hub by Kleomedes',
      url: 'https://www.stake-hub.xyz/junotestnet'
    }]
};
export default info;