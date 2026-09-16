import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'terpnetwork',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Terp-Network',
  chainType: 'cosmos',
  chainId: 'morocco-1',
  bech32Prefix: 'terp',
  slip44: 118,
  daemonName: 'terpd',
  nodeHome: '$HOME/.terpd',
  codebase: {
    gitRepo: 'https://github.com/terpnetwork/terp-core.git',
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/terpnetwork/networks/main/mainnet/morocco-1/genesis.json'
    },
    recommendedVersion: 'v6.2.0',
    compatibleVersions: ['v6.2.0'],
    consensus: {
      type: 'cometbft',
      version: '0.40.0'
    },
    sdk: {
      type: 'cosmos',
      version: '0.55.0'
    },
    ibc: {
      type: 'go',
      version: 'v11.2.0'
    },
    cosmwasm: {
      version: '0.70.3',
      enabled: true,
      path: '$HOME/.terpd/data/wasm'
    },
    binaries: {
      "linux/amd64": 'https://s3.terp.network/releases/terp-core/v6.2.0/terpd-6.2.0-linux-amd64.tar.gz?checksum=sha256:38c15e1f54bc8234d07883c05e665ded68fdc0434c1c9db08de796d15ef491f6',
      "linux/arm64": 'https://s3.terp.network/releases/terp-core/v6.2.0/terpd-6.2.0-linux-arm64.tar.gz?checksum=sha256:148eedb6e8f1dd97e2436bc1b36dfebdbc915d23c14e6bad483924b0a4052c3d',
      "darwin/arm64": 'https://s3.terp.network/releases/terp-core/v6.2.0/terpd-6.2.0-darwin-arm64.tar.gz?checksum=sha256:f6953962782df3178ef99852054144106622df6763bbbf3d72679f30aace8de0'
    },
    tag: 'v6.2.0'
  },
  fees: {
    feeTokens: [{
        denom: 'uthiol',
        fixedMinGasPrice: 0.05
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uterp'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/terp.png'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-mainnet.terp.network:443',
        provider: 'TerpNet Foundation'
      },
      {
        address: 'https://terp-mainnet-rpc.itrocket.net:443',
        provider: 'itrocket.net'
      },
      {
        address: 'https://terp.rpc.nodex.one:443',
        provider: 'nodex.one'
      }
    ],
    rest: [
      {
        address: 'https://api-mainnet.terp.network.io:443',
        provider: 'ZenChainLabs'
      },
      {
        address: 'https://terp-mainnet-api.itrocket.net:443',
        provider: 'itrocket.net'
      },
      {
        address: 'https://terp.api.nodex.one:443',
        provider: 'nodex.one'
      },
      {
        address: 'https://terp.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      }
    ],
    grpc: [
      {
        address: 'grpc-mainnet.terp.network.io:443',
        provider: 'TerpNet Foundation'
      },
      {
        address: 'https://grpc.terp.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'terp-mainnet-grpc.itrocket.net:13090',
        provider: 'itrocket.net'
      },
      {
        address: 'https://terp.grpc.nodex.one:443',
        provider: 'nodex.one'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/terp',
      txPage: 'https://ping.pub/terp/tx/${txHash}',
      accountPage: 'https://ping.pub/terp/account/{$accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.nodestake.top',
      txPage: 'https://explorer.nodestake.top/terp/tx/${txHash}',
      accountPage: 'https://explorer.nodestake.top/terp/account/{$accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Terp-Mainnet',
      txPage: 'https://explorer.stavr.tech/Terp-Mainnet/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Terp-Mainnet/account/{$accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/terp.png'
    }]
};
export default info;