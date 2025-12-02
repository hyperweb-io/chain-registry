import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'cheqd',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.cheqd.io/',
  pretty_name: 'Cheqd',
  chain_type: 'cosmos',
  chain_id: 'cheqd-mainnet-1',
  bech32_prefix: 'cheqd',
  daemon_name: 'cheqd-noded',
  node_home: '$HOME/.cheqdnode',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ncheq',
        fixed_min_gas_price: 5000,
        low_gas_price: 5000,
        average_gas_price: 7500,
        high_gas_price: 10000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ncheq'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/cheqd/cheqd-node',
    recommended_version: 'v4.1.6',
    compatible_versions: ['v4.1.6'],
    binaries: {
      "linux/amd64": 'https://github.com/cheqd/cheqd-node/releases/download/v4.1.6/cheqd-noded-4.1.6-linux-amd64.tar.gz',
      "linux/arm64": 'https://github.com/cheqd/cheqd-node/releases/download/v4.1.6/cheqd-noded-4.1.6-linux-arm64.tar.gz',
      "darwin/amd64": 'https://github.com/cheqd/cheqd-node/releases/download/v4.1.6/cheqd-noded-4.1.6-darwin-amd64.tar.gz',
      "darwin/arm64": 'https://github.com/cheqd/cheqd-node/releases/download/v4.1.6/cheqd-noded-4.1.6-darwin-arm64.tar.gz'
    },
    consensus: {
      type: 'cometbft',
      version: '0.38.19'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/cheqd/cheqd-node/main/networks/mainnet/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/cheqd/cosmos-sdk',
      version: 'v0.50.14',
      tag: 'v0.50.14-height-mismatch-iavl'
    },
    ibc: {
      type: 'go',
      version: 'v8.7.0'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.cheqd.net',
        provider: 'cheqd'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/cheqd',
        provider: 'Lavender.Five Nodes'
      },
      {
        address: 'https://cheqd.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc-cheqd-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://rpc.cheqd.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://rpc-cheqd.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://cheqd-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc-cheqd.blockval.io',
        provider: 'Blockval'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/cheqd/rpc',
        provider: 'Stakewolle'
      },
      {
        address: 'https://cheq-rpc.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://cheqd.srvs.vnodesv.net/rpc',
        provider: 'vNodes[V] Ser[V]ices'
      },
      {
        address: 'https://cheqd-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    rest: [
      {
        address: 'https://api.cheqd.net',
        provider: 'cheqd'
      },
      {
        address: 'https://rest.lavenderfive.com:443/cheqd',
        provider: 'Lavender.Five Nodes'
      },
      {
        address: 'https://cheqd.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api-cheqd-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://cheqd-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://api.cheqd.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://lcd-cheqd.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://api-cheqd.blockval.io',
        provider: 'Blockval'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/cheqd/rest',
        provider: 'Stakewolle'
      },
      {
        address: 'https://cheq-api.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://cheqd.srvs.vnodesv.net/rest',
        provider: 'vNodes[V] Ser[V]ices'
      },
      {
        address: 'https://cheqd-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    grpc: [
      {
        address: 'grpc.cheqd.net:443',
        provider: 'cheqd'
      },
      {
        address: 'cheqd.grpc.m.stavr.tech:9337',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'cheqd.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'cheqd-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc-cheqd-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'grpc.cheqd.nodestake.org:443',
        provider: 'NodeStake'
      },
      {
        address: 'grpc-cheqd.blockval.io:9290',
        provider: 'Blockval'
      },
      {
        address: 'https://cheqd.srvs.vnodesv.net/grpc',
        provider: 'vNodes[V] Ser[V]ices'
      },
      {
        address: 'cheqd-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ]
  },
  explorers: [
    {
      kind: 'Chainroot',
      url: 'https://explorer.chainroot.io/cheqd',
      tx_page: 'https://explorer.chainroot.io/cheqd/transactions/${txHash}',
      account_page: 'https://explorer.chainroot.io/cheqd/accounts/${accountAddress}'
    },
    {
      kind: 'bigdipper',
      url: 'https://explorer.cheqd.io',
      tx_page: 'https://explorer.cheqd.io/transactions/${txHash}',
      account_page: 'https://explorer.cheqd.io/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/cheqd',
      tx_page: 'https://ping.pub/cheqd/tx/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/cheqd',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=cheqd&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=cheqd&addr=${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Cheqd-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Cheqd-Mainnet/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/cheqd',
      tx_page: 'https://atomscan.com/cheqd/transactions/${txHash}',
      account_page: 'https://atomscan.com/cheqd/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/cheqd',
      tx_page: 'https://ezstaking.app/cheqd/txs/${txHash}',
      account_page: 'https://ezstaking.app/cheqd/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://look.chillvalidation.com/cheqd',
      tx_page: 'https://look.chillvalidation.com/cheqd/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.wildsage.io/cheqd',
      tx_page: 'https://ping.wildsage.io/cheqd/tx/${txHash}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/cheqd',
      tx_page: 'https://mainnet.whispernode.com/cheqd/tx/${txHash}',
      account_page: 'https://mainnet.whispernode.com/cheqd/account/${accountAddress}'
    }
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
    }]
};
export default info;