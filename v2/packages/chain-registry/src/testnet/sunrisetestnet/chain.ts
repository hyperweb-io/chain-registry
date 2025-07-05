import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'sunrisetestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Sunrise Testnet',
  chainType: 'cosmos',
  chainId: 'sunrise-test-da-5',
  bech32Prefix: 'sunrise',
  daemonName: 'sunrised',
  nodeHome: '$HOME/.sunrise',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uusdrise',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.0025,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uvrise'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/sunriselayer/sunrise',
    recommendedVersion: 'v0.6.0',
    compatibleVersions: ['v0.6.0'],
    binaries: {
      "linux/amd64": 'https://github.com/sunriselayer/sunrise/releases/download/v0.6.0/sunrised'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.17'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.53.2'
    },
    ibc: {
      type: 'go',
      version: 'v10.2.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg'
  },
  apis: {
    rpc: [{
        address: 'https://sunrise-test-da-5.cauchye.net',
        provider: 'CauchyE'
      }],
    rest: [{
        address: 'https://sunrise-test-da-5.cauchye.net:1318',
        provider: 'CauchyE'
      }],
    grpc: [{
        address: 'https://sunrise-test-da-5.cauchye.net:9092',
        provider: 'CauchyE'
      }]
  },
  explorers: [],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg',
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.png'
    }]
};
export default info;