import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'agoric',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://agoric.com/',
  pretty_name: 'Agoric',
  chain_type: 'cosmos',
  chain_id: 'agoric-3',
  bech32_prefix: 'agoric',
  daemon_name: 'agd',
  node_home: '$HOME/.agoric',
  slip44: 564,
  alternative_slip44s: [118],
  fees: {
    fee_tokens: [{
        denom: 'ubld',
        low_gas_price: 0.03,
        average_gas_price: 0.05,
        high_gas_price: 0.07
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ubld'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/Agoric/agoric-sdk/',
    genesis: {
      genesis_url: 'https://main.agoric.net/genesis.json'
    },
    recommended_version: 'agoric-upgrade-21',
    compatible_versions: ['agoric-upgrade-21'],
    consensus: {
      type: 'cometbft',
      version: 'v0.37.15',
      repo: 'https://github.com/agoric-labs/cometbft',
      tag: 'v0.37.15-alpha.agoric.1'
    },
    cosmwasm: {
      enabled: false
    },
    language: {
      type: 'go',
      version: '1.22.12'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/agoric-labs/cosmos-sdk',
      version: 'v0.47.17',
      tag: 'v0.47.17-alpha.agoric.1'
    },
    ibc: {
      type: 'go',
      version: 'v7.10.0',
      repo: 'https://github.com/agoric-labs/ibc-go',
      tag: 'v7.10.0-alpha.agoric.2',
      ics_enabled: ['ics20-1']
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/Agoric-logo-color.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/Agoric-logo-color.svg'
  },
  description: 'The Agoric platform makes it safe and seamless to build decentralized apps using your existing JavaScript knowledge.',
  apis: {
    rpc: [
      {
        address: 'https://main.rpc.agoric.net:443'
      },
      {
        address: 'https://agoric-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://agoric.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://agoric-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc-agoric-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://agoric-rpc.0base.dev',
        provider: '0base.vc'
      },
      {
        address: 'https://agoric-rpc.stakeangle.com',
        provider: 'StakeAngle'
      },
      {
        address: 'https://agoric-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://rpc.agoric.stakewith.us',
        provider: 'StakeWithUs'
      },
      {
        address: 'https://rpc-agoric-ia.cosmosia.notional.ventures',
        provider: 'Notional'
      },
      {
        address: 'https://agoric-rpc.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://rpc.agoric.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }
    ],
    rest: [
      {
        address: 'https://main.api.agoric.net:443'
      },
      {
        address: 'https://agoric-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://agoric.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://agoric-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://api-agoric-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://agoric-rest.0base.dev',
        provider: '0base.vc'
      },
      {
        address: 'https://agoric-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://agoric.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api.agoric.stakewith.us',
        provider: 'StakeWithUs'
      },
      {
        address: 'https://api-agoric-ia.cosmosia.notional.ventures',
        provider: 'Notional'
      },
      {
        address: 'https://agoric-api.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://lcd.agoric.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }
    ],
    grpc: [
      {
        address: 'agoric-grpc.polkachu.com:14490',
        provider: 'Polkachu'
      },
      {
        address: 'agoric-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'agoric.grpc.kjnodes.com:12790',
        provider: 'kjnodes'
      },
      {
        address: 'grpc-agoric-01.stakeflow.io:2202',
        provider: 'Stakeflow'
      },
      {
        address: 'agoric.mellifera.network:9090',
        provider: 'MELLIFERA'
      },
      {
        address: 'agoric-grpc.w3coins.io:14490',
        provider: 'w3coins'
      },
      {
        address: 'https://grpc.agoric.stakewith.us',
        provider: 'StakeWithUs'
      },
      {
        address: 'grpc-agoric-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'agoric-grpc.stakeandrelax.net:14490',
        provider: 'Stake&Relax 🦥'
      },
      {
        address: 'https://grpc.agoric.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }
    ]
  },
  explorers: [
    {
      kind: 'Chainroot',
      url: 'https://explorer.chainroot.io/agoric',
      tx_page: 'https://explorer.chainroot.io/agoric/transactions/${txHash}',
      account_page: 'https://explorer.chainroot.io/agoric/accounts/${accountAddress}'
    },
    {
      kind: 'explorers.guru',
      url: 'https://agoric.explorers.guru',
      tx_page: 'https://agoric.explorers.guru/transaction/${txHash}',
      account_page: 'https://agoric.explorers.guru/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/agoric',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=agoric&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=agoric&addr=${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/agoric/',
      tx_page: 'https://atomscan.com/agoric/transactions/${txHash}',
      account_page: 'https://atomscan.com/agoric/accounts/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/agoric',
      account_page: 'https://stakeflow.io/agoric/accounts/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Agoric',
      tx_page: 'https://explorer.stavr.tech/Agoric/tx/${txHash}',
      account_page: 'https://explorer.stavr.tech/Agoric/account/${accountAddress}'
    },
    {
      kind: 'Valopers',
      url: 'https://agoric.valopers.com/',
      tx_page: 'https://agoric.valopers.com/transactions/${txHash}',
      account_page: 'https://agoric.valopers.com/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/Agoric-logo-color.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/Agoric-logo-color.svg',
      theme: {
        primary_color_hex: '#bc2c44'
      }
    }]
};
export default info;