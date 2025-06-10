import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'cosmoshubtestnet',
  chainType: 'cosmos',
  chainId: 'theta-testnet-001',
  prettyName: '[DEPRECATED] Cosmos Hub Public Testnet, will be sunset 2024-12-01',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'cosmos',
  daemonName: 'gaiad',
  nodeHome: '$HOME/.gaia',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uatom',
        fixedMinGasPrice: 0.005,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uatom'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/cosmos/gaia',
    recommendedVersion: 'v14.1.0',
    compatibleVersions: ['v14.1.0-rc0', 'v14.1.0'],
    binaries: {
      "linux/amd64": 'https://github.com/cosmos/gaia/releases/download/v14.1.0/gaiad-v14.1.0-linux-amd64',
      "linux/arm64": 'https://github.com/cosmos/gaia/releases/download/v14.1.0/gaiad-v14.1.0-linux-arm64',
      "darwin/amd64": 'https://github.com/cosmos/gaia/releases/download/v14.1.0/gaiad-v14.1.0-darwin-amd64',
      "darwin/arm64": 'https://github.com/cosmos/gaia/releases/download/v14.1.0/gaiad-v14.1.0-darwin-arm64',
      "windows/amd64": 'https://github.com/cosmos/gaia/releases/download/v14.1.0/gaiad-v14.1.0-windows-amd64.exe',
      "windows/arm64": 'https://github.com/cosmos/gaia/releases/download/v14.1.0/gaiad-v14.1.0-windows-arm64.exe'
    },
    genesis: {
      genesisUrl: 'https://github.com/cosmos/testnets/raw/master/public/genesis.json.gz'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://cosmoshubt.tendermintrpc.lava.build:443',
        provider: 'Lava'
      },
      {
        address: 'https://rpc.sentry-01.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rpc.sentry-02.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rpc.state-sync-01.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rpc.state-sync-02.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://public-cosmos-theta.w3node.com',
        provider: 'Interchain.FM'
      },
      {
        address: 'https://rpc-theta.osmotest5.osmosis.zone/',
        provider: 'Osmosis'
      }
    ],
    rest: [
      {
        address: 'https://cosmoshubt.lava.build',
        provider: 'Lava'
      },
      {
        address: 'https://rest.sentry-01.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rest.sentry-02.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rest.state-sync-01.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rest.state-sync-02.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://public-cosmos-theta.w3node.com/rest/',
        provider: 'Interchain.FM'
      },
      {
        address: 'https://lcd-theta.osmotest5.osmosis.zone/',
        provider: 'Osmosis'
      }
    ],
    grpc: [
      {
        address: 'cosmoshubt.grpc.lava.build',
        provider: 'Lava'
      },
      {
        address: 'https://grpc.sentry-01.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://grpc.sentry-02.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://grpc.state-sync-01.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://grpc.state-sync-02.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      }
    ]
  },
  explorers: [{
      kind: 'Mintscan',
      url: 'https://mintscan.io/cosmoshub-testnet',
      txPage: 'https://mintscan.io/cosmoshub-testnet/txs/${txHash}'
    }, {
      kind: 'Big Dipper',
      url: 'https://explorer.theta-testnet.polypore.xyz/',
      txPage: 'https://explorer.theta-testnet.polypore.xyz/transactions/${txHash}'
    }]
};
export default info;