import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'buycex',
  chainId: 'bcx_323-1',
  prettyName: 'BuyCex Infinity Chain',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://infinity.buycex.com',
  bech32Prefix: 'bcx',
  daemonName: 'bcxd',
  nodeHome: '$HOME/.bcxd',
  chainType: 'cosmos',
  slip44: 60,
  codebase: {
    genesis: {
      genesisUrl: 'https://buycex.net/genesis.json'
    },
    gitRepo: 'https://github.com/cosvmlabs/buycex-chain',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    sdk: {
      type: 'cosmos',
      version: 'v0.45.16'
    },
    binaries: {
      "linux/amd64": 'https://buycex.net/bcxd-v1.0.0-linux-amd64.tar.gz'
    }
  },
  apis: {
    rpc: [{
        address: 'https://endpoint.buycex.net',
        provider: 'buycex'
      }],
    rest: [{
        address: 'https://api.buycex.net',
        provider: 'buycex'
      }],
    grpc: [{
        address: 'https://grpc.buycex.net',
        provider: 'buycex'
      }]
  },
  explorers: [{
      kind: 'pingpub',
      url: 'https://cosmos.buycex.net',
      txPage: 'https://cosmos.buycex.net/tx/${txHash}'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/buycex/images/bcx.png'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/buycex/images/bcx.png'
    }]
};
export default info;