import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'zigchain',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://zigchain.com/',
  prettyName: 'ZIGChain',
  chainType: 'cosmos',
  chainId: 'zigchain-1',
  bech32Prefix: 'zig',
  daemonName: 'zigchaind',
  nodeHome: '$HOME/.zigchain',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  description: 'ZIGChain (ZIG) is a Layer 1 blockchain focused on unlocking financial opportunities for everyone - regardless of their income, location, or level of knowledge.',
  fees: {
    feeTokens: [{
        denom: 'azig',
        fixedMinGasPrice: 2500000000,
        lowGasPrice: 2500000000,
        averageGasPrice: 25000000000,
        highGasPrice: 50000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'azig'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/ZIGChain/zigchain',
    recommendedVersion: '5.1.0',
    compatibleVersions: ['5.1.0'],
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
      genesisUrl: 'https://github.com/ZIGChain/networks/raw/main/zigchain-1/genesis.json'
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
  logoURIs: {
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
      txPage: 'https://app.range.org/tx/zigchain/${txHash}',
      accountPage: 'https://app.range.org/address/zigchain/${accountAddress}'
    },
    {
      kind: 'zigscan',
      url: 'https://www.zigscan.org/',
      txPage: 'https://www.zigscan.org/tx/${txHash}',
      accountPage: 'https://www.zigscan.org/address/${accountAddress}'
    },
    {
      kind: 'nodestake',
      url: 'https://explorer.nodestake.org/zigchain',
      txPage: 'https://explorer.nodestake.org/zigchain/tx/${txHash}',
      accountPage: 'https://explorer.nodestake.org/zigchain/account/${accountAddress}'
    },
    {
      kind: 'stakeandrelax',
      url: 'https://explorer.stakeandrelax.net/zigchain',
      txPage: 'https://explorer.stakeandrelax.net/zigchain/tx/${txHash}',
      accountPage: 'https://explorer.stakeandrelax.net/zigchain/account/${accountAddress}'
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
      checksumAvailable: false,
      provider: 'Polkachu'
    }]
};
export default info;