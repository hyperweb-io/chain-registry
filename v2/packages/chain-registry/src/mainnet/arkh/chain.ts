import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'arkh',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://arkhadian.com/',
  prettyName: 'Arkhadian',
  chainType: 'cosmos',
  chainId: 'arkh',
  bech32Prefix: 'arkh',
  daemonName: 'arkhd',
  nodeHome: '$HOME/.arkh',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'arkh',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'arkh'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/vincadian/arkh-blockchain',
    recommendedVersion: 'v2.0.0',
    compatibleVersions: ['v2.0.0'],
    binaries: {
      "linux/amd64": 'https://github.com/vincadian/arkh-blockchain/releases/download/latest/arkh-blockchain_latest_linux_amd64.tar.gz',
      "darwin/amd64": 'https://github.com/vincadian/arkh-blockchain/releases/download/latest/arkh-blockchain_latest_darwin_amd64.tar.gz'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/vincadian/arkh-blockchain/master/genesis/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg'
  },
  apis: {
    rpc: [{
        address: 'https://arkhadian-mainnet-rpc.bonynode.online/',
        provider: 'arkhnetwork'
      }, {
        address: 'http://arkh.rpc.wellnode.net:26657/',
        provider: 'wellnode'
      }],
    rest: [{
        address: 'https://arkhadian-mainnet-api.bonynode.online/',
        provider: 'arkhnetwork'
      }],
    grpc: [{
        address: 'https://arkhadian-mainnet-grpc.bonynode.online/',
        provider: 'arkhnetwork'
      }]
  },
  explorers: [{
      kind: 'BonyNode Explorer',
      url: 'https://explorer.bonynode.online/arkhadian',
      txPage: 'https://explorer.bonynode.online/arkhadian/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg',
      theme: {
        primaryColorHex: '#bdbb82'
      }
    }]
};
export default info;