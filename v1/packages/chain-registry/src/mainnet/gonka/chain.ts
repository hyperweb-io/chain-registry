import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'gonka',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Gonka',
  chain_type: 'cosmos',
  chain_id: 'gonka-mainnet',
  bech32_prefix: 'gonka',
  daemon_name: 'inferenced',
  node_home: '$HOME/.inference',
  key_algos: ['secp256k1'],
  slip44: 1200,
  fees: {
    fee_tokens: [{
        denom: 'ngonka',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ngonka'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/gonka-ai/gonka',
    recommended_version: 'v0.2.0',
    genesis: {
      genesis_url: 'https://github.com/gonka-ai/gonka/blob/main/genesis/genesis.json'
    }
  },
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gonka/images/gonka_logo.svg',
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gonka/images/gonka_logo.png',
      theme: {
        circle: true
      }
    }],
  logo_URIs: {
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
      tx_page: 'http://47.236.19.22:18000/dashboard/gonka/txs/${txHash}',
      account_page: 'http://47.236.19.22:18000/dashboard/gonka/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'http://gonka.spv.re:8000/dashboard',
      tx_page: 'http://gonka.spv.re:8000/dashboard/gonka/txs/${txHash}',
      account_page: 'http://gonka.spv.re:8000/dashboard/gonka/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'http://185.216.21.98:8000/dashboard',
      tx_page: 'http://185.216.21.98:8000/dashboard/gonka/txs/${txHash}',
      account_page: 'http://185.216.21.98:8000/dashboard/gonka/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'http://93.119.168.58:8000/dashboard',
      tx_page: 'http://93.119.168.58:8000/dashboard/gonka/txs/${txHash}',
      account_page: 'http://93.119.168.58:8000/dashboard/gonka/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'http://node1.gonka.ai:8000/dashboard',
      tx_page: 'http://node1.gonka.ai:8000/dashboard/gonka/txs/${txHash}',
      account_page: 'http://node1.gonka.ai:8000/dashboard/gonka/account/${accountAddress}'
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