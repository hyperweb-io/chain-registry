import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'coreum',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://tx.org/',
  pretty_name: 'TX',
  chain_type: 'cosmos',
  chain_id: 'coreum-mainnet-1',
  bech32_prefix: 'core',
  daemon_name: 'txd',
  node_home: '$HOME/.core/coreum-mainnet-1',
  key_algos: ['secp256k1'],
  slip44: 990,
  fees: {
    fee_tokens: [{
        denom: 'ucore',
        fixed_min_gas_price: 0.03125,
        low_gas_price: 0.0625,
        average_gas_price: 0.0625,
        high_gas_price: 62.5
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ucore'
      }],
    lock_duration: {
      time: '168h'
    }
  },
  codebase: {
    git_repo: 'https://github.com/tokenize-x/tx-chain',
    recommended_version: 'v6.0.1',
    compatible_versions: ['v6.0.1'],
    binaries: {
      "linux/amd64": 'https://github.com/tokenize-x/tx-chain/releases/download/v6.0.1/txd-linux-amd64?checksum=sha256:5865d0351b5c6c084ec8e0501104f5acc441820981dab6debf4b9a8c6df61703',
      "linux/arm64": 'https://github.com/tokenize-x/tx-chain/releases/download/v6.0.1/txd-linux-arm64?checksum=sha256:f7edeb470e3f1952fd8c516cd08a973012c94d9f6a6c92ca902bf56402b32d86'
    },
    consensus: {
      type: 'cometbft',
      version: '0.38'
    },
    genesis: {
      name: 'v1',
      genesis_url: 'https://raw.githubusercontent.com/CoreumFoundation/coreum/master/genesis/coreum-mainnet-1.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.50'
    },
    cosmwasm: {
      version: '0.54',
      enabled: true
    },
    tag: 'v5.0.0'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/tx.png'
    }, {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/tx.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/tx.svg'
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/tx.png'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-01.mainnet-1.tx.org/',
        provider: 'TX Foundation'
      },
      {
        address: 'https://rpc-02.mainnet-1.tx.org/',
        provider: 'TX Foundation'
      },
      {
        address: 'https://archive.rpc.mainnet-1.tx.org/',
        provider: 'TX Foundation'
      },
      {
        address: 'https://rpc-coreum.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://coreum.rpc.silknodes.io',
        provider: 'Silk Nodes'
      },
      {
        address: 'https://coreum-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rpc.m.core.solonation.io',
        provider: '#SoloNation'
      },
      {
        address: 'https://coreum-rpc.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://coreum.ibs.team:443/rpc',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/coreum/rpc',
        provider: 'Stakewolle'
      },
      {
        address: 'https://coreum-rpc.chainroot.io',
        provider: 'Chainroot'
      }
    ],
    grpc: [
      {
        address: 'https://grpc-01.mainnet-1.tx.org',
        provider: 'TX Foundation'
      },
      {
        address: 'https://grpc-02.mainnet-1.tx.org',
        provider: 'TX Foundation'
      },
      {
        address: 'https://archive.grpc.mainnet-1.tx.org',
        provider: 'TX Foundation'
      },
      {
        address: 'https://grpc.coreum.nodexcapital.com:444',
        provider: 'NodeX Validator'
      },
      {
        address: 'coreum-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'coreum-grpc.genznodes.dev:35090',
        provider: 'genznodes'
      },
      {
        address: 'coreum-grpc.chainroot.io:443',
        provider: 'Chainroot'
      }
    ],
    rest: [
      {
        address: 'https://rest-01.mainnet-1.tx.org/',
        provider: 'TX Foundation'
      },
      {
        address: 'https://rest-02.mainnet-1.tx.org/',
        provider: 'TX Foundation'
      },
      {
        address: 'https://archive.rest.mainnet-1.tx.org/',
        provider: 'TX Foundation'
      },
      {
        address: 'https://rest-coreum.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://coreum.api.silknodes.io',
        provider: 'Silk Nodes'
      },
      {
        address: 'https://coreum-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://api.m.core.solonation.io',
        provider: '#SoloNation'
      },
      {
        address: 'https://coreum-api.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://coreum.ibs.team:443/api',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/coreum/rest',
        provider: 'Stakewolle'
      },
      {
        address: 'https://coreum-api.chainroot.io',
        provider: 'Chainroot'
      }
    ]
  },
  explorers: [
    {
      kind: 'TX',
      url: 'https://explorer.tx.org/tx',
      tx_page: 'https://explorer.tx.org/tx/transactions/${txHash}',
      account_page: 'https://explorer.tx.org/tx/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/coreum',
      tx_page: 'https://www.mintscan.io/coreum/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/coreum/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/coreum',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=coreum&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=coreum&addr=${accountAddress}'
    },
    {
      kind: 'NODEXPLORER',
      url: 'https://explorer.nodexcapital.com/coreum',
      tx_page: 'https://explorer.nodexcapital.com/coreum/txs/${txHash}',
      account_page: 'https://explorer.nodexcapital.com/coreum/account/${accountAddress}'
    },
    {
      kind: 'Silk Nodes',
      url: 'https://explorer.silknodes.io/coreum',
      tx_page: 'https://explorer.silknodes.io/coreum/tx/${txHash}',
      account_page: 'https://explorer.silknodes.io/coreum/account/${accountAddress}'
    },
    {
      kind: '#SoloNation',
      url: 'https://explorer.solonation.io/core-main',
      tx_page: 'https://explorer.solonation.io/core-main/tx/${txHash}',
      account_page: 'https://explorer.solonation.io/core-main/account/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/coreum',
      tx_page: 'https://explorer.tcnetwork.io/coreum/transaction/${txHash}',
      account_page: 'https://explorer.tcnetwork.io/coreum/account/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/coreum',
      tx_page: 'https://ezstaking.app/coreum/txs/${txHash}',
      account_page: 'https://ezstaking.app/coreum/account/${accountAddress}'
    }
  ],
  keywords: [
    'L1',
    'RWA',
    'RWA Protocol',
    'RWA Marketplace',
    'tokenization'
  ]
};
export default info;