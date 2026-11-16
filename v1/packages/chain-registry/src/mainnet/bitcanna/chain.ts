import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'bitcanna',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.bitcanna.network/',
  pretty_name: 'BitCanna',
  chain_type: 'cosmos',
  chain_id: 'bitcanna-1',
  bech32_prefix: 'bcna',
  daemon_name: 'bcnad',
  node_home: '$HOME/.bcna',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ubcna',
        fixed_min_gas_price: 0.001,
        low_gas_price: 0.001,
        average_gas_price: 0.0025,
        high_gas_price: 0.01
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ubcna'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/BitCanna-Network/bcna',
    recommended_version: 'v4.0.4',
    compatible_versions: [
      'v4.0.0',
      'v4.0.1',
      'v4.0.2',
      'v4.0.3',
      'v4.0.4'
    ],
    binaries: {
      "linux/amd64": 'https://github.com/BitCanna-Network/bcna/releases/download/v4.0.4/bcnad_linux_amd64.tar.gz',
      "linux/arm64": 'https://github.com/BitCanna-Network/bcna/releases/download/v4.0.4/bcnad_linux_arm64.tar.gz'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.18'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/BitCanna-Network/bcna/main/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.13'
    },
    ibc: {
      type: 'go',
      version: 'v8.7.0'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.bitcanna.network/',
        provider: 'bitcanna'
      },
      {
        address: 'https://bitcanna.rpc.m.anode.team/',
        provider: 'AlxVoy ⚡ ANODE.TEAM'
      },
      {
        address: 'https://bcna.rpc.arcturian.tech/',
        provider: 'Arcturian Tech'
      },
      {
        address: 'https://bitcanna-rpc.bluestake.net',
        provider: 'BlueStake'
      }
    ],
    grpc: [{
        address: 'grpc.bitcanna.network:443',
        provider: 'bitcanna'
      }, {
        address: 'bitcanna.grpc.m.anode.team:443',
        provider: 'AlxVoy ⚡ ANODE.TEAM'
      }],
    rest: [
      {
        address: 'https://api.bitcanna.network',
        provider: 'bitcanna'
      },
      {
        address: 'https://bitcanna.api.m.anode.team',
        provider: 'AlxVoy ⚡ ANODE.TEAM'
      },
      {
        address: 'https://bcna.api.arcturian.tech/',
        provider: 'Arcturian Tech'
      },
      {
        address: 'https://bitcanna-api.bluestake.net',
        provider: 'BlueStake'
      }
    ]
  },
  explorers: [
    {
      kind: 'AlxVoy ⚡ ANODE.TEAM',
      url: 'https://main.anode.team/bitcanna',
      tx_page: 'https://main.anode.team/bitcanna/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/bitcanna',
      tx_page: 'https://atomscan.com/bitcanna/transactions/${txHash}'
    },
    {
      kind: 'Valopers',
      url: 'https://bitcanna.valopers.com/',
      tx_page: 'https://bitcanna.valopers.com/transactions/${txHash}',
      account_page: 'https://bitcanna.valopers.com/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
    }]
};
export default info;