import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'manifest',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://manifestai.org/',
  prettyName: 'Manifest',
  chainId: 'manifest-ledger-mainnet',
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
      }, {
        denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwr',
        fixedMinGasPrice: 0.37,
        lowGasPrice: 0.4,
        averageGasPrice: 0.5,
        highGasPrice: 1
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'upoa'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/liftedinit/manifest-ledger',
    recommendedVersion: 'v1.0.14',
    compatibleVersions: ['v1.0.14'],
    binaries: {
      "linux/amd64": 'https://github.com/liftedinit/manifest-ledger/releases/download/v1.0.14/manifest-ledger-v1.0.14-linux-amd64.tar.gz'
    },
    genesis: {
      genesisUrl: 'https://nodes.liftedinit.app/manifest/rpc/genesis?'
    }
  },
  apis: {
    rpc: [{
        address: 'https://nodes.liftedinit.app/manifest/rpc',
        provider: 'The Lifted Initiative'
      }, {
        address: 'https://manifest-rpc.liftedinit.app',
        provider: 'The Lifted Initiative'
      }],
    rest: [{
        address: 'https://nodes.liftedinit.app/manifest/api',
        provider: 'The Lifted Initiative'
      }, {
        address: 'https://manifest-rest.liftedinit.app',
        provider: 'The Lifted Initiative'
      }],
    grpc: [{
        address: 'https://manifest-grpc.liftedinit.app',
        provider: 'The Lifted Initiative'
      }]
  },
  explorers: [{
      kind: 'Default Explorer',
      url: 'https://explorer.manifest.network/',
      txPage: 'https://explorer.manifest.network/transaction/${txHash}',
      accountPage: 'https://explorer.manifest.network/account/${accountAddress}'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
  },
  images: [{
      imageSync: {
        chainName: 'manifest'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
    }]
};
export default info;