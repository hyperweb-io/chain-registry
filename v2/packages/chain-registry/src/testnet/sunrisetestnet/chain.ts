import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'sunrisetestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Sunrise Testnet',
  chainType: 'cosmos',
  chainId: 'dawn-1',
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
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    binaries: {
      "linux/amd64": 'https://github.com/sunriselayer/sunrise/releases/download/v1.0.0/sunrised-linux-amd64'
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
      version: 'v10.3.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg'
  },
  apis: {
    rpc: [{
        address: 'https://sunrise-dawn-1.cauchye.com',
        provider: 'CauchyE'
      }],
    rest: [{
        address: 'https://sunrise-dawn-1.cauchye.com:1318',
        provider: 'CauchyE'
      }],
    grpc: [{
        address: 'https://sunrise-dawn-1.cauchye.com:9092',
        provider: 'CauchyE'
      }]
  },
  explorers: [{
      kind: 'Risescan',
      url: 'https://dawn-1.risescan.sunriselayer.io',
      txPage: 'https://dawn-1.risescan.sunriselayer.io/txs/${txHash}',
      accountPage: 'https://dawn-1.risescan.sunriselayer.io/accounts/${accountAddress}'
    }],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg',
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.png'
    }]
};
export default info;