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
    recommendedVersion: 'v2.0.1',
    compatibleVersions: ['v2.0.1'],
    binaries: {
      "linux/amd64": 'https://github.com/liftedinit/manifest-ledger/releases/download/v2.0.1/manifest-ledger-v2.0.1-linux-amd64.tar.gz'
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
      txPage: 'https://testnet.manifest.explorers.guru/transaction/${txHash}',
      accountPage: 'https://testnet.manifest.explorers.guru/account/${accountAddress}'
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
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/manifest/images/manifest.svg'
    }]
};
export default info;