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
        address: 'http://47.236.19.22:18000/chain-rpc/',
        provider: '6block'
      },
      {
        address: 'http://gonka.spv.re:8000/chain-rpc/',
        provider: 'Hyperfusion'
      },
      {
        address: 'http://185.216.21.98:8000/chain-rpc/',
        provider: 'HardYaka'
      },
      {
        address: 'http://93.119.168.58:8000/chain-rpc/',
        provider: 'GCore'
      },
      {
        address: 'http:// :8000/chain-rpc/',
        provider: 'PS on Nebius'
      }
    ],
    rest: [
      {
        address: 'http://47.236.19.22:18000/chain-api/',
        provider: '6block'
      },
      {
        address: 'http://gonka.spv.re:8000/chain-api/',
        provider: 'Hyperfusion'
      },
      {
        address: 'http://185.216.21.98:8000/chain-api/',
        provider: 'HardYaka'
      },
      {
        address: 'http://93.119.168.58:8000/chain-api/',
        provider: 'GCore'
      },
      {
        address: 'http://node1.gonka.ai:8000/chain-api/',
        provider: 'PS on Nebius'
      }
    ],
    grpc: [
      {
        address: 'http://47.236.19.22:18000/chain-grpc/',
        provider: '6block'
      },
      {
        address: 'http://gonka.spv.re:8000/chain-grpc/',
        provider: 'Hyperfusion'
      },
      {
        address: 'http://185.216.21.98:8000/chain-grpc/',
        provider: 'HardYaka'
      },
      {
        address: 'http://93.119.168.58:8000/chain-grpc/',
        provider: 'GCore'
      },
      {
        address: 'http://node1.gonka.ai:8000/chain-grpc/',
        provider: 'PS on Nebius'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'http://47.236.19.22:18000/dashboard',
      txPage: 'http://47.236.19.22:18000/dashboard/gonka/txs/${txHash}',
      accountPage: 'http://47.236.19.22:18000/dashboard/gonka/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'http://gonka.spv.re:8000/dashboard',
      txPage: 'http://gonka.spv.re:8000/dashboard/gonka/txs/${txHash}',
      accountPage: 'http://gonka.spv.re:8000/dashboard/gonka/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'http://185.216.21.98:8000/dashboard',
      txPage: 'http://185.216.21.98:8000/dashboard/gonka/txs/${txHash}',
      accountPage: 'http://185.216.21.98:8000/dashboard/gonka/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'http://93.119.168.58:8000/dashboard',
      txPage: 'http://93.119.168.58:8000/dashboard/gonka/txs/${txHash}',
      accountPage: 'http://93.119.168.58:8000/dashboard/gonka/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'http://node1.gonka.ai:8000/dashboard',
      txPage: 'http://node1.gonka.ai:8000/dashboard/gonka/txs/${txHash}',
      accountPage: 'http://node1.gonka.ai:8000/dashboard/gonka/account/${accountAddress}'
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