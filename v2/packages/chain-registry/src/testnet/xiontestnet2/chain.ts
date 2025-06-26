import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'xiontestnet2',
  chainType: 'cosmos',
  chainId: 'xion-testnet-2',
  prettyName: 'Xion Testnet',
  website: 'https://xion.burnt.com',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'xion',
  bech32Config: {
    bech32PrefixAccAddr: 'xion',
    bech32PrefixAccPub: 'xionpub',
    bech32PrefixValAddr: 'xionvaloper',
    bech32PrefixValPub: 'xionvaloperpub',
    bech32PrefixConsAddr: 'xionvalcons',
    bech32PrefixConsPub: 'xionvalconspub'
  },
  daemonName: 'xiond',
  nodeHome: '$HOME/.xiond',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uxion',
        fixedMinGasPrice: 0.001,
        lowGasPrice: 0.001,
        averageGasPrice: 0.001,
        highGasPrice: 0.01
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uxion'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/burnt-labs/xion',
    tag: 'v19.0.2',
    recommendedVersion: 'v19.0.2',
    language: {
      type: 'go',
      version: 'v1.23'
    },
    binaries: {
      "darwin/amd64": 'https://github.com/burnt-labs/xion/releases/download/v19.0.2/xiond_19.0.2_darwin_amd64.tar.gz?checksum=sha256:edda13aec2274f1eceb933874a885d055b14acbbe0de21ba61ed9c25c64813d6',
      "darwin/arm64": 'https://github.com/burnt-labs/xion/releases/download/v19.0.2/xiond_19.0.2_darwin_arm64.tar.gz?checksum=sha256:7b94d2fdf1baa1d3dff4f947858a2bac684257be27f8bf179fb973ee8dd4fdb8',
      "linux/amd64": 'https://github.com/burnt-labs/xion/releases/download/v19.0.2/xiond_19.0.2_linux_amd64.tar.gz?checksum=sha256:6072ce81d08f77f98e2d2ae7726007eca18579ea2b1690b5f76b4df782690dcb',
      "linux/arm64": 'https://github.com/burnt-labs/xion/releases/download/v19.0.2/xiond_19.0.2_linux_arm64.tar.gz?checksum=sha256:0a55360653b596da5ace43c3b4a3fef6c9785bfe0e73405f591768b449af0e70'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.53.0'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.17'
    },
    cosmwasm: {
      version: 'v0.54.0',
      enabled: true
    },
    ibc: {
      type: 'go',
      version: 'v8.7.0'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/burnt-labs/xion-testnet-2/main/config/genesis.json'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.xion-testnet-2.burnt.com:443',
        provider: '🔥BurntLabs🔥'
      },
      {
        address: 'https://testnet-2-rpc.xion-api.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://xion-testnet-rpc.polkachu.com:443',
        provider: 'Polkachu'
      },
      {
        address: 'https://burnt-testnet-rpc.itrocket.net:443',
        provider: 'ITRocket'
      }
    ],
    rest: [
      {
        address: 'https://api.xion-testnet-2.burnt.com',
        provider: '🔥BurntLabs🔥'
      },
      {
        address: 'https://testnet-2-api.xion-api.com',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://xion-testnet-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://burnt-testnet-api.itrocket.net',
        provider: 'ITRocket'
      }
    ],
    grpc: [
      {
        address: 'grpc.xion-testnet-2.burnt.com:443',
        provider: '🔥BurntLabs🔥'
      },
      {
        address: 'testnet-2-grpc.xion-api.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'xion-testnet-grpc.polkachu.com:22390',
        provider: 'Polkachu'
      },
      {
        address: 'burnt-testnet-grpc.itrocket.net:443',
        provider: 'ITRocket'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/xion-testnet',
      txPage: 'https://www.mintscan.io/xion-testnet/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/xion-testnet/accounts/${accountAddress}'
    },
    {
      url: 'https://explorer.burnt.com/xion-testnet-2',
      txPage: 'https://explorer.burnt.com/xion-testnet-2/tx/${txHash}',
      accountPage: 'https://explorer.burnt.com/xion-testnet-2/account/${accountAddress}'
    },
    {
      kind: 'ITRocket',
      url: 'https://testnet.itrocket.net/burnt',
      txPage: 'https://testnet.itrocket.net/burnt/tx/${txHash}',
      accountPage: 'https://testnet.itrocket.net/burnt/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt.png'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt.png'
  },
  description: 'XION is the first walletless L1 blockchain purpose built for consumer adoption through chain abstraction.',
  keywords: [
    'xion',
    'burnt',
    'testnet'
  ]
};
export default info;