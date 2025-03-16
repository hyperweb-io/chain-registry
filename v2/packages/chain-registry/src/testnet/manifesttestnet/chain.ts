import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'manifesttestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://manifestai.org/',
  prettyName: 'Manifest Testnet',
  chainId: 'manifest-ledger-testnet',
  chainType: 'cosmos',
  bech32Prefix: 'manifest',
  daemonName: 'manifest',
  nodeHome: '$HOME/.manifest',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'umfx',
        fixedMinGasPrice: 0.05,
        lowGasPrice: 0.5,
        averageGasPrice: 1,
        highGasPrice: 5
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'upoa'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/liftedinit/manifest-ledger',
    recommendedVersion: 'v0.0.1-rc.1',
    compatibleVersions: ['v0.0.1-rc.1'],
    binaries: {
      "linux/amd64": 'https://github.com/liftedinit/manifest-ledger/releases/download/v0.0.1-rc.1/manifest-ledger-v0.0.1-rc.1-linux-amd64.tar.gz'
    },
    genesis: {
      genesisUrl: 'https://github.com/liftedinit/manifest-ledger/blob/main/network/manifest-1/manifest-1_genesis.json'
    }
  },
  apis: {
    rpc: [{
        address: 'https://nodes.liftedinit.tech/manifest/testnet/rpc',
        provider: 'The Lifted Initiative'
      }],
    rest: [{
        address: 'https://nodes.liftedinit.tech/manifest/testnet/api',
        provider: 'The Lifted Initiative'
      }],
    grpc: [{
        address: 'https://manifest-testnet-grpc.liftedinit.tech',
        provider: 'The Lifted Initiative'
      }]
  },
  explorers: [{
      kind: 'Default Explorer',
      url: 'https://testnet.manifest.explorers.guru/',
      txPage: 'https://testnet.manifest.explorers.guru/transactions'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
  },
  images: [{
      imageSync: {
        chainName: 'manifesttestnet'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg',
      theme: {
        primaryColorHex: '#A087FF'
      }
    }]
};
export default info;