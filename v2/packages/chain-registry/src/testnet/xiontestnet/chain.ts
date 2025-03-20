import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'xiontestnet',
  chainType: 'cosmos',
  chainId: 'xion-testnet-1',
  prettyName: 'Xion Testnet 1',
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
    tag: 'v17.1.0',
    recommendedVersion: 'v17.1.0',
    language: {
      type: 'go',
      version: 'v1.23'
    },
    binaries: {
      "darwin/amd64": 'https://github.com/burnt-labs/xion/releases/download/v17.1.0/xiond_17.1.0_darwin_amd64.zip?checksum=sha256:4ea876e3d083314d208fa6f42086bef257898638ed1e0a1f5247f407e3bce517',
      "darwin/arm64": 'https://github.com/burnt-labs/xion/releases/download/v17.1.0/xiond_17.1.0_darwin_arm64.zip?checksum=sha256:aa73852b76389abf5dd2667a6bc8a187429a79dc2eb5d350b2fea4ebe2faf608',
      "linux/amd64": 'https://github.com/burnt-labs/xion/releases/download/v17.1.0/xiond_17.1.0_linux_amd64.zip?checksum=sha256:80a3d3c434b9f6948c63d866635ed20f1ffdc47c297c55b70b73c23950bfe230',
      "linux/arm64": 'https://github.com/burnt-labs/xion/releases/download/v17.1.0/xiond_17.1.0_linux_arm64.zip?checksum=sha256:71f5860ad34cdd07bc00257438ee494cda6c7eb9a3ce7024b99afa8e6c2a8a17'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.13'
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
      genesisUrl: 'https://raw.githubusercontent.com/burnt-labs/burnt-networks/main/testnets/xion-testnet-1/genesis.json'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.xion-testnet-1.burnt.com:443',
        provider: '🔥BurntLabs🔥'
      },
      {
        address: 'https://testnet-burnt-rpc.lavenderfive.com:443',
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
        address: 'https://api.xion-testnet-1.burnt.com',
        provider: '🔥BurntLabs🔥'
      },
      {
        address: 'https://testnet-burnt-api.lavenderfive.com',
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
        address: 'grpc.xion-testnet-1.burnt.com:443',
        provider: '🔥BurntLabs🔥'
      },
      {
        address: 'testnet-burnt-grpc.lavenderfive.com:443',
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
      url: 'https://explorer.burnt.com/xion-testnet-1',
      txPage: 'https://explorer.burnt.com/xion-testnet-1/tx/${txHash}',
      accountPage: 'https://explorer.burnt.com/xion-testnet-1/account/${accountAddress}'
    },
    {
      kind: 'ITRocket',
      url: 'https://testnet.itrocket.net/burnt',
      txPage: 'https://testnet.itrocket.net/burnt/tx/${txHash}',
      accountPage: 'https://testnet.itrocket.net/burnt/account/${accountAddress}'
    },
    {
      kind: 'Nodes.Guru',
      url: 'https://testnet.xion.explorers.guru',
      txPage: 'https://testnet.xion.explorers.guru/transactions/${txHash}',
      accountPage: 'https://testnet.xion.explorers.guru//account/${accountAddress}'
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