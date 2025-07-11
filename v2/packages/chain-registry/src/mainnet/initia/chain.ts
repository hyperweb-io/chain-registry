import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'initia',
  chainId: 'interwoven-1',
  chainType: 'cosmos',
  website: 'https://initia.xyz',
  prettyName: 'Initia',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'init',
  daemonName: 'initiad',
  nodeHome: '$HOME/.initia',
  keyAlgos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'uinit',
        fixedMinGasPrice: 0.015,
        lowGasPrice: 0.015,
        averageGasPrice: 0.015,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uinit'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/initia-labs/initia',
    recommendedVersion: 'v1.0.0-rc.1',
    compatibleVersions: ['v1.0.0-rc.1'],
    binaries: {
      "linux/amd64": 'https://github.com/initia-labs/initia/releases/download/v1.0.0-rc.1/initia_v1.0.0-rc.1_Linux_x86_64.tar.gz',
      "linux/arm64": 'https://github.com/initia-labs/initia/releases/download/v1.0.0-rc.1/initia_v1.0.0-rc.1_Linux_aarch64.tar.gz',
      "darwin/amd64": 'https://github.com/initia-labs/initia/releases/download/v1.0.0-rc.1/initia_v1.0.0-rc.1_Darwin_x86_64.tar.gz',
      "darwin/arm64": 'https://github.com/initia-labs/initia/releases/download/v1.0.0-rc.1/initia_v1.0.0-rc.1_Darwin_aarch64.tar.gz'
    },
    genesis: {
      genesisUrl: 'https://storage.googleapis.com/init-common-genesis/interwoven-1/genesis.json'
    }
  },
  description: 'Initia L1 is a Layer 1 blockchain designed to serve as the coordination layer and central hub for all Initia rollups. This layer provides essential services to Rollups, including: Network Security, Governance, Liquidity Solutions, Bridging and Interoperability.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.initia.xyz',
        provider: 'Initia Labs'
      },
      {
        address: 'https://initia.rpc.quasarstaking.ai:443',
        provider: 'Quasar'
      },
      {
        address: 'https://initia-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ],
    rest: [
      {
        address: 'https://rest.initia.xyz',
        provider: 'Initia Labs'
      },
      {
        address: 'https://initia.api.quasarstaking.ai:443',
        provider: 'Quasar'
      },
      {
        address: 'https://initia-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ],
    grpc: [
      {
        address: 'grpc.initia.xyz:443',
        provider: 'Initia Labs'
      },
      {
        address: 'initia.grpc.quasarstaking.ai:80',
        provider: 'Quasar'
      },
      {
        address: 'initia-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ]
  },
  explorers: [{
      kind: 'initia scan',
      url: 'https://scan.initia.xyz/interwoven-1',
      txPage: 'https://scan.initia.xyz/interwoven-1/txs/${txHash}',
      accountPage: 'https://scan.initia.xyz/interwoven-1/accounts/${accountAddress}'
    }],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/initia/images/INIT.svg',
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/initia/images/INIT.png',
      theme: {
        circle: true
      }
    }],
  logoURIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/initia/images/INIT.svg',
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/initia/images/INIT.png'
  }
};
export default info;