import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'sunrise',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://sunriselayer.io/',
  prettyName: 'Sunrise',
  chainType: 'cosmos',
  chainId: 'sunrise-1',
  bech32Prefix: 'sunrise',
  daemonName: 'sunrised',
  nodeHome: '$HOME/.sunrise',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uusdrise',
        fixedMinGasPrice: 0.002,
        lowGasPrice: 0.01,
        averageGasPrice: 0.02,
        highGasPrice: 0.1
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uvrise'
      }],
    lockDuration: {
      time: '1814400s'
    }
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
        address: 'https://a.consensus.sunrise-1.sunriselayer.io',
        provider: 'Sunrise Team'
      }],
    rest: [{
        address: 'https://a.consensus.sunrise-1.sunriselayer.io:1318',
        provider: 'Sunrise Team'
      }],
    grpc: [{
        address: 'https://a.consensus.sunrise-1.sunriselayer.io:9092',
        provider: 'Sunrise Team'
      }]
  },
  explorers: [{
      kind: 'Risescan',
      url: 'https://risescan.sunriselayer.io',
      txPage: 'https://risescan.sunriselayer.io/txs/${txHash}',
      accountPage: 'https://risescan.sunriselayer.io/accounts/${accountAddress}'
    }],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg',
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.png',
      theme: {
        primaryColorHex: '#ecbc64'
      }
    }]
};
export default info;