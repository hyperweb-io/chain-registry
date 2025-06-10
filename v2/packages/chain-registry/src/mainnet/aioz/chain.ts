import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'aioz',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://aioz.network/',
  prettyName: 'AIOZ Network',
  chainType: 'cosmos',
  chainId: 'aioz_168-1',
  bech32Prefix: 'aioz',
  daemonName: 'aiozd',
  nodeHome: '$HOME/.aioz',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'attoaioz',
        fixedMinGasPrice: 7000000000,
        lowGasPrice: 7000000000,
        averageGasPrice: 7000000000,
        highGasPrice: 10000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'attoaioz'
      }],
    lockDuration: {
      time: '2419200s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/AIOZNetwork/go-aioz',
    recommendedVersion: 'v1.5.0',
    compatibleVersions: ['v1.5.0'],
    binaries: {
      "linux/amd64": 'https://archive.aioz.network/aiozd-v1.5.0-linux-amd64',
      "darwin/amd64": 'https://archive.aioz.network/aiozd-v1.5.0-darwin-amd64',
      "windows/amd64": 'https://archive.aioz.network/aiozd-v1.5.0-windows-amd64.exe'
    },
    genesis: {
      genesisUrl: 'https://archive.aioz.network/aioz_168-1/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.svg'
  },
  description: 'AIOZ Network is a DePIN for Web3 AI, Storage and Streaming.\n\nAIOZ empowers a faster, secure and decentralized future.\n\nPowered by a global network of DePINs, AIOZ rewards you for sharing your computational resources for storing, transcoding, and streaming digital media content and powering decentralized AI computation.',
  apis: {
    evmHttpJsonrpc: [{
        address: 'https://eth-dataseed.aioz.network',
        provider: 'AIOZ Network'
      }],
    rpc: [{
        address: 'https://rpc-dataseed.aioz.network:443',
        provider: 'AIOZ Network'
      }],
    rest: [{
        address: 'https://lcd-dataseed.aioz.network',
        provider: 'AIOZ Network'
      }],
    grpc: [{
        address: 'grpc-dataseed.aioz.network:443',
        provider: 'AIOZ Network'
      }]
  },
  explorers: [{
      kind: 'aioz',
      url: 'https://explorer.aioz.network',
      txPage: 'https://explorer.aioz.network/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.svg',
      theme: {
        primaryColorHex: '#24241c'
      }
    }]
};
export default info;