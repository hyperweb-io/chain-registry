import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'gonka',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Gonka',
  chainType: 'cosmos',
  chainId: 'gonka-mainnet',
  bech32Prefix: 'gonka',
  daemonName: 'inferenced',
  nodeHome: '$HOME/.inference',
  keyAlgos: ['secp256k1'],
  slip44: 1200,
  fees: {
    feeTokens: [{
        denom: 'ngonka',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0,
        highGasPrice: 0
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ngonka'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/gonka-ai/gonka',
    recommendedVersion: 'v0.2.0',
    genesis: {
      genesisUrl: 'https://github.com/gonka-ai/gonka/blob/main/genesis/genesis.json'
    },
    compatibleVersions: ['v0.2.0'],
    tag: 'release/v0.2.0',
    language: {
      type: 'go',
      version: '1.23.2'
    },
    binaries: {
      "darwin/amd64": 'https://github.com/gonka-ai/gonka/releases/download/release%2Fv0.2.0/inferenced-darwin-amd64.zip?checksum=sha256:740f0667d813432494d8aee65794e3e552c5a84e67c837b5e47e8daca14ae961',
      "darwin/arm64": 'https://github.com/gonka-ai/gonka/releases/download/release%2Fv0.2.0/inferenced-darwin-arm64.zip?checksum=sha256:258fdf9a9faee08202c907034084626d221097c84d317283f0e4b4c6c7aecefc1',
      "linux/amd64": 'https://github.com/gonka-ai/gonka/releases/download/release%2Fv0.2.0/inferenced-linux-amd64.zip?checksum=sha256:24d4481bee27573b5a852265cf0672e1603e405ae1f1f9fba15a7a986feca569',
      "linux/arm64": 'https://github.com/gonka-ai/gonka/releases/download/release%2Fv0.2.0/inferenced-linux-arm64.zip?checksum=sha256:37909cbd65616f9575a328f95a1fd1a8941a9e5385d116fb507c35bc686a9949'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.53.3',
      repo: 'https://github.com/product-science/cosmos-sdk',
      tag: 'v0.53.3-ps5'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.17',
      repo: 'https://github.com/cometbft/cometbft'
    },
    cosmwasm: {
      version: 'v0.50.0',
      repo: 'https://github.com/CosmWasm/wasmd',
      enabled: true
    },
    ibc: {
      type: 'go',
      version: 'v8.2.0',
      repo: 'https://github.com/cosmos/ibc-go',
      icsEnabled: ['ics20-1']
    }
  },
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gonka/images/gonka_logo.svg',
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gonka/images/gonka_logo.png',
      theme: {
        circle: true
      }
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gonka/images/gonka_logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gonka/images/gonka_logo.svg'
  },
  description: 'Gonka is a decentralized AI infrastructure designed to optimize computational power for AI model training and inference, offering an alternative to monopolistic, high-cost, centralized cloud providers. As AI models become increasingly complex, their computational demands surge, presenting significant challenges for developers and businesses that rely on costly, centralized resources.',
  apis: {
    rpc: [
      {
        address: 'https://gonka04.6block.com:8443/chain-rpc/',
        provider: '6block'
      },
      {
        address: 'https://gonka03.6block.com:8443',
        provider: '6block'
      },
      {
        address: 'https://node1.gonka.ai:8443/chain-rpc/',
        provider: 'PS on Nebius'
      },
      {
        address: 'https://node2.gonka.ai:8443/chain-rpc/',
        provider: 'PS on Nebius'
      }
    ],
    rest: [
      {
        address: 'https://gonka04.6block.com:8443/chain-api/',
        provider: '6block'
      },
      {
        address: 'https://gonka03.6block.com:8443',
        provider: '6block'
      },
      {
        address: 'https://node1.gonka.ai:8443/chain-api/',
        provider: 'PS on Nebius'
      },
      {
        address: 'https://node2.gonka.ai:8443/chain-api/',
        provider: 'PS on Nebius'
      }
    ],
    grpc: [
      {
        address: 'https://gonka04.6block.com:8443/chain-grpc/',
        provider: '6block'
      },
      {
        address: 'https://gonka03.6block.com:8443/chain-grpc/',
        provider: '6block'
      },
      {
        address: 'https://node1.gonka.ai:8443/chain-grpc/',
        provider: 'PS on Nebius'
      },
      {
        address: 'https://node2.gonka.ai:8443/chain-grpc/',
        provider: 'PS on Nebius'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://gonka04.6block.com:8443/dashboard',
      txPage: 'https://gonka04.6block.com:8443/dashboard/gonka/txs/${txHash}',
      accountPage: 'https://gonka04.6block.com:8443/dashboard/gonka/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://gonka03.6block.com:8443/dashboard',
      txPage: 'https://gonka03.6block.com:8443/dashboard/gonka/txs/${txHash}',
      accountPage: 'https://gonka03.6block.com:8443/dashboard/gonka/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://node1.gonka.ai:8443/dashboard',
      txPage: 'https://node1.gonka.ai:8443/dashboard/gonka/txs/${txHash}',
      accountPage: 'https://node1.gonka.ai:8443/dashboard/gonka/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://node2.gonka.ai:8443/dashboard',
      txPage: 'https://node2.gonka.ai:8443/dashboard/gonka/txs/${txHash}',
      accountPage: 'https://node2.gonka.ai:8443/dashboard/gonka/account/${accountAddress}'
    }
  ],
  keywords: [
    'gonka',
    'inference',
    'training',
    'compute'
  ]
};
export default info;