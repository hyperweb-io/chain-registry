import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'unification',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://unification.com/',
  pretty_name: 'Unification',
  chain_type: 'cosmos',
  chain_id: 'FUND-MainNet-2',
  bech32_prefix: 'und',
  daemon_name: 'und',
  node_home: '$HOME/.und_mainchain',
  key_algos: ['secp256k1'],
  slip44: 5555,
  fees: {
    fee_tokens: [{
        denom: 'nund',
        fixed_min_gas_price: 25,
        low_gas_price: 100,
        average_gas_price: 200,
        high_gas_price: 300
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'nund'
      }],
    lock_duration: {
      time: '1814400s'
    }
  },
  codebase: {
    git_repo: 'https://github.com/unification-com/mainchain',
    recommended_version: 'v1.11.0',
    compatible_versions: ['v1.11.0'],
    binaries: {
      "linux/amd64": 'https://github.com/unification-com/mainchain/releases/download/v1.11.0/und_v1.11.0_linux_x86_64.tar.gz',
      "darwin/amd64": 'https://github.com/unification-com/mainchain/releases/download/v1.11.0/und_v1.11.0_darwin_x86_64.tar.gz',
      "windows/amd64": 'https://github.com/unification-com/mainchain/releases/download/v1.11.0/und_v1.11.0_windows_x86_64.tar.gz'
    },
    consensus: {
      type: 'cometbft',
      version: '0.38.12'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/unification-com/mainnet/master/latest/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.50.13'
    },
    ibc: {
      type: 'go',
      version: '8.7.0'
    },
    cosmwasm: {
      enabled: false
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg',
      theme: {
        primary_color_hex: '#2279c0'
      }
    }],
  apis: {
    rpc: [{
        address: 'https://rpc.unification.io:443',
        provider: 'Unification'
      }, {
        address: 'https://rpc.unification.chainmasters.ninja/',
        provider: 'Chainmasters'
      }],
    rest: [{
        address: 'https://rest.unification.io',
        provider: 'Unification'
      }, {
        address: 'https://rest.unification.chainmasters.ninja/',
        provider: 'Chainmasters'
      }],
    wss: [{
        address: 'wss://wss.unification.io',
        provider: 'Unification'
      }],
    grpc: [{
        address: 'grpc.unification.io:443',
        provider: 'Unification'
      }, {
        address: 'grpc.unification.chainmasters.info',
        provider: 'Chainmasters'
      }]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://explorer.unification.io/u',
      tx_page: 'https://explorer.unification.io/u/tx/${txHash}',
      account_page: 'https://explorer.unification.io/u/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.unification.chainmasters.ninja/unification',
      tx_page: 'https://explorer.unification.chainmasters.ninja/unification/tx/${txHash}',
      account_page: 'https://explorer.unification.chainmasters.ninja/Unification/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/unification',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=unification&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=unification&addr=${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/unification',
      tx_page: 'https://atomscan.com/unification/transactions/${txHash}',
      account_page: 'https://atomscan.com/unification/accounts/${accountAddress}'
    }
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg'
  }
};
export default info;