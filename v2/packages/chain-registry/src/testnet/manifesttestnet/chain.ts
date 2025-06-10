import { Chain } from '@chain-registry/types';
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
        fixedMinGasPrice: 1,
        lowGasPrice: 1.05,
        averageGasPrice: 1.1,
        highGasPrice: 3
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'upoa'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/liftedinit/manifest-ledger',
    recommendedVersion: 'v1.0.3',
    compatibleVersions: ['v1.0.3'],
    binaries: {
      "linux/amd64": 'https://github.com/liftedinit/manifest-ledger/releases/download/v1.0.3/manifest-ledger-v1.0.3-linux-amd64.tar.gz'
    },
    genesis: {
      genesisUrl: 'https://nodes.liftedinit.tech/manifest/testnet/rpc/genesis?'
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