import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'comdex',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://comdex.one/',
  pretty_name: 'Comdex',
  chain_type: 'cosmos',
  chain_id: 'comdex-1',
  bech32_prefix: 'comdex',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ucmdx',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ucmdx'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/comdex-official/comdex',
    recommended_version: 'v14.1.0',
    compatible_versions: ['v14.1.0'],
    binaries: {
      "linux/amd64": 'https://github.com/comdex-official/comdex/releases/download/v14.1.0/comdex-linux-amd64.tar.gz',
      "darwin/arm64": 'https://github.com/comdex-official/comdex/releases/download/v14.1.0/comdex-darwin-arm64.tar.gz'
    },
    consensus: {
      type: 'cometbft',
      version: '0.37.5'
    },
    genesis: {
      genesis_url: 'https://comdex-mainnet-genesis.s3.ap-southeast-1.amazonaws.com/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.47.9'
    },
    ibc: {
      type: 'go',
      version: 'v7.4.0'
    },
    cosmwasm: {
      version: 'v0.45.0',
      enabled: true
    }
  },
  daemon_name: 'comdex',
  node_home: '$HOME/.comdex',
  key_algos: ['secp256k1'],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.comdex.one',
        provider: 'comdex'
      },
      {
        address: 'https://comdex-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://comdex.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/comdex',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc-comdex.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://comdex-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://comdex-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://comdex-rpc.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://comdex-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rpc-comdex-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://comdex-rpc.validatornode.com',
        provider: 'ValidatorNode'
      },
      {
        address: 'https://rpc-comdex.blockval.io',
        provider: 'Blockval'
      },
      {
        address: 'https://comdex-rpc.bluestake.net:443',
        provider: 'BlueStake 🚀'
      },
      {
        address: 'https://comdex-rpc.chainroot.io',
        provider: 'Chainroot'
      }
    ],
    rest: [
      {
        address: 'https://rest.comdex.one',
        provider: 'comdex'
      },
      {
        address: 'https://comdex-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://comdex.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rest.lavenderfive.com:443/comdex',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://api-comdex.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://comdex-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://comdex-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://comdex-rest.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://comdex-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://api-comdex-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://comdex-api.validatornode.com',
        provider: 'ValidatorNode'
      },
      {
        address: 'https://api-comdex.blockval.io',
        provider: 'Blockval'
      },
      {
        address: 'https://comdex-api.bluestake.net',
        provider: 'BlueStake 🚀'
      },
      {
        address: 'https://comdex-api.chainroot.io',
        provider: 'Chainroot'
      }
    ],
    grpc: [
      {
        address: 'grpc-comdex-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'comdex-grpc.polkachu.com:13190',
        provider: 'Polkachu'
      },
      {
        address: 'comdex.grpc.m.stavr.tech:104',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'grpc-comdex.cosmos-spaces.cloud:2300',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'comdex.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'comdex-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'comdex-grpc.w3coins.io:13190',
        provider: 'w3coins'
      },
      {
        address: 'comdex-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'grpc-comdex-01.stakeflow.io:10002',
        provider: 'Stakeflow'
      },
      {
        address: 'comdex-grpc.stakerhouse.com:443',
        provider: 'StakerHouse'
      },
      {
        address: 'https://grpc-comdex.blockval.io:443',
        provider: 'Blockval'
      },
      {
        address: 'comdex-grpc.chainroot.io:443',
        provider: 'Chainroot'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/comdex',
      tx_page: 'https://ezstaking.app/comdex/txs/${txHash}',
      account_page: 'https://ezstaking.app/comdex/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/comdex',
      tx_page: 'https://www.mintscan.io/comdex/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/comdex/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/comdex',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=comdex&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=comdex&addr=${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Comdex-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Comdex-Mainnet/txs/${txHash}',
      account_page: 'https://explorer.stavr.tech/Comdex-Mainnet/accounts/${accountAddress}'
    },
    {
      kind: 'aneka',
      url: 'https://comdex.aneka.io/',
      tx_page: 'https://comdex.aneka.io/txs/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/comdex',
      tx_page: 'https://ping.pub/comdex/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/comdex',
      tx_page: 'https://atomscan.com/comdex/transactions/${txHash}',
      account_page: 'https://atomscan.com/comdex/accounts/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/comdex',
      account_page: 'https://stakeflow.io/comdex/accounts/${accountAddress}'
    },
    {
      kind: 'ValidatorNode',
      url: 'https://explorer.validatornode.com/comdex',
      tx_page: 'https://explorer.validatornode.com/comdex/tx/${txHash}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/comdex',
      tx_page: 'https://mainnet.whispernode.com/comdex/tx/${txHash}',
      account_page: 'https://mainnet.whispernode.com/comdex/account/${accountAddress}'
    },
    {
      kind: 'Chainroot',
      url: 'https://explorer.chainroot.io/comdex',
      tx_page: 'https://explorer.chainroot.io/comdex/transactions/${txHash}',
      account_page: 'https://explorer.chainroot.io/comdex/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg',
      theme: {
        primary_color_hex: '#fc4454'
      }
    }]
};
export default info;