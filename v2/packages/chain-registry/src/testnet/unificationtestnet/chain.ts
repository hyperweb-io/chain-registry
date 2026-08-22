import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'unificationtestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://unification.com/',
  prettyName: 'Unification Testnet',
  chainType: 'cosmos',
  chainId: 'FUND-TestNet-2',
  bech32Prefix: 'und',
  daemonName: 'und',
  nodeHome: '$HOME/.und_mainchain',
  keyAlgos: ['secp256k1'],
  slip44: 5555,
  fees: {
    feeTokens: [{
        denom: 'nund',
        fixedMinGasPrice: 25,
        lowGasPrice: 100,
        averageGasPrice: 200,
        highGasPrice: 300
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'nund'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/unification-com/mainchain',
    recommendedVersion: 'v1.13.4',
    compatibleVersions: ['v1.13.4'],
    binaries: {
      "linux/amd64": 'https://github.com/unification-com/mainchain/releases/download/v1.13.4/und_v1.13.4_linux_x86_64.tar.gz',
      "linux/arm64": 'https://github.com/unification-com/mainchain/releases/download/v1.13.4/und_v1.13.4_linux_arm64.tar.gz',
      "darwin/amd64": 'https://github.com/unification-com/mainchain/releases/download/v1.13.4/und_v1.13.4_darwin_x86_64.tar.gz',
      "darwin/arm64": 'https://github.com/unification-com/mainchain/releases/download/v1.13.4/und_v1.13.4_darwin_arm64.tar.gz',
      "windows/amd64": 'https://github.com/unification-com/mainchain/releases/download/v1.13.4/und_v1.13.4_windows_x86_64.tar.gz',
      "windows/arm64": 'https://github.com/unification-com/mainchain/releases/download/v1.13.4/und_v1.13.4_windows_arm64.tar.gz'
    },
    consensus: {
      type: 'cometbft',
      version: '0.38.17'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/unification-com/testnet/master/latest/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.53.4'
    },
    ibc: {
      type: 'go',
      version: '10.3.0'
    },
    cosmwasm: {
      enabled: false
    },
    tag: 'v1.12.0'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg'
    }],
  apis: {
    rpc: [{
        address: 'https://rpc-testnet.unification.io:443',
        provider: 'Unification'
      }],
    rest: [{
        address: 'https://rest-testnet.unification.io',
        provider: 'Unification'
      }],
    wss: [{
        address: 'wss://wss-testnet.unification.io',
        provider: 'Unification'
      }],
    grpc: [{
        address: 'grpc-testnet.unification.io:443',
        provider: 'Unification'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://explorer-testnet.unification.io/u',
      txPage: 'https://explorer-testnet.unification.io/u/tx/${txHash}',
      accountPage: 'https://explorer-testnet.unification.io/u/account/${accountAddress}'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg'
  }
};
export default info;