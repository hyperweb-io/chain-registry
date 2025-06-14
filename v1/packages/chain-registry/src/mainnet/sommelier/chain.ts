import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'sommelier',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://sommelier.finance/',
  pretty_name: 'Sommelier',
  chain_type: 'cosmos',
  chain_id: 'sommelier-3',
  bech32_prefix: 'somm',
  daemon_name: 'sommelier',
  node_home: '$HOME/.sommelier',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'usomm',
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'usomm'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/PeggyJV/sommelier',
    recommended_version: 'v7.0.1',
    compatible_versions: ['v7.0.0', 'v7.0.1'],
    binaries: {
      "linux/amd64": 'https://github.com/PeggyJV/sommelier/releases/download/v7.0.1/sommelier_7.0.1_linux_amd64.tar.gz',
      "linux/arm64": 'https://github.com/PeggyJV/sommelier/releases/download/v7.0.1/sommelier_7.0.1_linux_arm64.tar.gz',
      "darwin/amd64": 'https://github.com/PeggyJV/sommelier/releases/download/v7.0.1/sommelier_7.0.1_darwin_amd64.tar.gz',
      "darwin/arm64": 'https://github.com/PeggyJV/sommelier/releases/download/v7.0.1/sommelier_7.0.1_darwin_arm64.tar.gz',
      "windows/amd64": 'https://github.com/PeggyJV/sommelier/releases/download/v7.0.1/sommelier_7.0.1_windows_amd64.tar.gz'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.34.28'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/PeggyJV/sommelier/main/contrib/mainnet/sommelier-3/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.46.14'
    },
    ibc: {
      type: 'go',
      version: 'v6.2.0'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg'
  },
  description: 'Automated vaults find best-in-class yields while mitigating risk.',
  apis: {
    rpc: [
      {
        address: 'https://sommelier-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc-sommelier.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://somm.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/sommelier',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://sommelier-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://somm-rpc.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://sommelier-rpc.w3coins.io',
        provider: 'w3coins'
      }
    ],
    rest: [
      {
        address: 'https://api-sommelier.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://sommelier-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://som.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rest.lavenderfive.com:443/sommelier',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://sommelier-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://somm-api.kleomedes.network',
        provider: 'Kleomedes'
      }
    ],
    grpc: [
      {
        address: 'sommelier-grpc.polkachu.com:14190',
        provider: 'Polkachu'
      },
      {
        address: 'somm.grpc.m.stavr.tech:114',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'sommelier.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'sommelier-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://grpc.sommelier.nodexcapital.com',
        provider: '⚡NodeX Validator⚡'
      },
      {
        address: 'sommelier-grpc.w3coins.io:14190',
        provider: 'w3coins'
      },
      {
        address: 'grpc.sommelier.validatus.com',
        provider: 'Validatus'
      }
    ]
  },
  explorers: [
    {
      kind: 'Chainroot',
      url: 'https://explorer.chainroot.io/sommelier',
      tx_page: 'https://explorer.chainroot.io/sommelier/transactions/${txHash}',
      account_page: 'https://explorer.chainroot.io/sommelier/accounts/${accountAddress}'
    },
    {
      kind: 'sommscan',
      url: 'https://sommscan.io',
      tx_page: 'https://sommscan.io'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/sommelier',
      tx_page: 'https://www.mintscan.io/sommelier/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/sommelier/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/sommelier',
      tx_page: 'https://ezstaking.app/sommelier/txs/${txHash}',
      account_page: 'https://ezstaking.app/sommelier/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/sommelier',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=sommelier&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=sommelier&addr=${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Sommelier-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Sommelier-Mainnet/tx/${txHash}',
      account_page: 'https://explorer.stavr.tech/Sommelier-Mainnet/account/${accountAddress}'
    },
    {
      kind: 'NODEXPLORER',
      url: 'https://explorer.nodexcapital.com/sommelier',
      tx_page: 'https://explorer.nodexcapital.com/sommelier/tx/${txHash}',
      account_page: 'https://explorer.nodexcapital.com/sommelier/account/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/sommelier',
      tx_page: 'https://atomscan.com/sommelier/transactions/${txHash}',
      account_page: 'https://atomscan.com/sommelier/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg',
      theme: {
        primary_color_hex: '#f36353'
      }
    }]
};
export default info;