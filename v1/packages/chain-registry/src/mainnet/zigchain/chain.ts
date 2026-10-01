import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'zigchain',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://zigchain.com/',
  pretty_name: 'ZIGChain',
  chain_type: 'cosmos',
  chain_id: 'zigchain-1',
  bech32_prefix: 'zig',
  daemon_name: 'zigchaind',
  node_home: '$HOME/.zigchain',
  key_algos: ['secp256k1'],
  slip44: 118,
  description: 'ZIGChain (ZIG) is a Layer 1 blockchain focused on unlocking financial opportunities for everyone - regardless of their income, location, or level of knowledge.',
  fees: {
    fee_tokens: [{
        denom: 'azig',
        fixed_min_gas_price: 2500000000,
        low_gas_price: 2500000000,
        average_gas_price: 25000000000,
        high_gas_price: 50000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'azig'
      }],
    lock_duration: {
      time: '1814400s'
    }
  },
  codebase: {
    git_repo: 'https://github.com/ZIGChain/zigchain',
    recommended_version: '5.1.0',
    compatible_versions: ['5.1.0'],
    consensus: {
      type: 'cometbft',
      version: '0.38.25'
    },
    sdk: {
      type: 'cosmos',
      version: '0.53.8'
    },
    ibc: {
      type: 'go',
      version: '10.5.0'
    },
    cosmwasm: {
      version: '0.60.9',
      enabled: true
    },
    genesis: {
      genesis_url: 'https://github.com/ZIGChain/networks/raw/main/zigchain-1/genesis.json'
    },
    binaries: {
      "linux/amd64": 'https://github.com/ZIGChain/networks/raw/refs/heads/main/binaries/v5.1.0/zigchaind-v5.1.0-linux-amd64.tar.gz?checksum=sha256:93f2be769ebafb369ed6fee03a0159ee6699e5aaae27d5ca165bc2b88b42d914'
    },
    tag: 'v5.1.0',
    language: {
      type: 'go',
      version: '1.25.13'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/zigchain.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/zigchain.svg'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/zigchain.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zigchain/images/zigchain.svg'
    }],
  apis: {
    rpc: [
      {
        address: 'https://public-zigchain-rpc.numia.xyz/',
        provider: 'Numia'
      },
      {
        address: 'https://rpc.zigchain.com',
        provider: 'ZIGCHAIN'
      },
      {
        address: 'https://zigchain-rpc.polkachu.com:443',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc.zigchain.nodestake.org:443',
        provider: 'NodeStake'
      },
      {
        address: 'https://zigchain-rpc.stakeandrelax.net',
        provider: 'Stake and Relax'
      }
    ],
    rest: [
      {
        address: 'https://public-zigchain-lcd.numia.xyz/',
        provider: 'Numia'
      },
      {
        address: 'https://api.zigchain.com',
        provider: 'ZIGCHAIN'
      },
      {
        address: 'https://zigchain-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://api.zigchain.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://zigchain-api.stakeandrelax.net',
        provider: 'Stake and Relax'
      }
    ],
    grpc: [
      {
        address: 'grpc.zigchain.com:9090',
        provider: 'ZIGCHAIN'
      },
      {
        address: 'zigchain-grpc.polkachu.com:32890',
        provider: 'Polkachu'
      },
      {
        address: 'grpc.zigchain.nodestake.org:443',
        provider: 'NodeStake'
      }
    ]
  },
  explorers: [
    {
      kind: 'range',
      url: 'https://app.range.org/address/zigchain/zigchain',
      tx_page: 'https://app.range.org/tx/zigchain/${txHash}',
      account_page: 'https://app.range.org/address/zigchain/${accountAddress}'
    },
    {
      kind: 'zigscan',
      url: 'https://www.zigscan.org/',
      tx_page: 'https://www.zigscan.org/tx/${txHash}',
      account_page: 'https://www.zigscan.org/address/${accountAddress}'
    },
    {
      kind: 'nodestake',
      url: 'https://explorer.nodestake.org/zigchain',
      tx_page: 'https://explorer.nodestake.org/zigchain/tx/${txHash}',
      account_page: 'https://explorer.nodestake.org/zigchain/account/${accountAddress}'
    },
    {
      kind: 'stakeandrelax',
      url: 'https://explorer.stakeandrelax.net/zigchain',
      tx_page: 'https://explorer.stakeandrelax.net/zigchain/tx/${txHash}',
      account_page: 'https://explorer.stakeandrelax.net/zigchain/account/${accountAddress}'
    }
  ],
  keywords: [
    'zigchain',
    'rwa',
    'wealth generation infrastructure',
    'wasm'
  ],
  snapshots: [{
      url: 'https://polkachu.com/tendermint_snapshots/zigchain',
      type: 'pruned',
      compression: 'lz4',
      checksum_available: false,
      provider: 'Polkachu'
    }]
};
export default info;