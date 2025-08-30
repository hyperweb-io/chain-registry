import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'uptick',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://uptick.network/',
  prettyName: 'Uptick',
  chainType: 'cosmos',
  chainId: 'uptick_117-1',
  bech32Prefix: 'uptick',
  daemonName: 'uptickd',
  nodeHome: '$HOME/.uptickd',
  keyAlgos: ['secp256k1'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'auptick',
        fixedMinGasPrice: 13000000000,
        lowGasPrice: 13000000000,
        averageGasPrice: 16000000000,
        highGasPrice: 20000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'auptick'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/UptickNetwork/uptick',
    recommendedVersion: 'v0.3.0',
    compatibleVersions: ['v0.3.0'],
    binaries: {
      "linux/amd64": 'https://raw.githubusercontent.com/UptickNetwork/uptick-mainnet/main/uptick_117-1/lib/uptickd-linux-amd64-v0.3.0.tar.gz?checksum=ceedede0f5016906fadc688cc69fb5c378832c661decba199bcb2a66507d0f76',
      "linux/arm64": 'https://raw.githubusercontent.com/UptickNetwork/uptick-mainnet/main/uptick_117-1/lib/uptickd-linux-arm64-v0.3.0.tar.gz?checksum=b11fae7b3633a4a050d8e8b3d4f12e54efdb29755d206e70b48e158f582cf0aa'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.17'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/UptickNetwork/uptick-mainnet/refs/heads/main/uptick_117-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.11'
    },
    cosmwasm: {
      version: 'v0.53.3',
      enabled: true
    },
    ibc: {
      type: 'go',
      version: 'v8.7.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.uptick.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'http://uptick.rpc.m.stavr.tech:3157',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://m-uptick.rpc.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀'
      },
      {
        address: 'https://uptick-mainnet-rpc.itrocket.net:443',
        provider: 'itrocket'
      },
      {
        address: 'https://uptick.rpc.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://uptick-rpc.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://rpc-uptick.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://uptick-rpc.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    rest: [
      {
        address: 'https://api.uptick.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://uptick.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://m-uptick.api.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀'
      },
      {
        address: 'https://uptick-mainnet-api.itrocket.net:443',
        provider: 'itrocket'
      },
      {
        address: 'https://uptick.api.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://uptick-rest.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://api-uptick.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://uptick-api.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.uptick.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'uptick.grpc.nodersteam.com:9211',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'uptick.grpc.m.stavr.tech:1901',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'uptick-mainnet-grpc.itrocket.net:443',
        provider: 'itrocket'
      },
      {
        address: 'https://uptick.grpc.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'uptick-grpc.stakerhouse.com:443',
        provider: 'StakerHouse'
      },
      {
        address: 'https://grpc-uptick.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'uptick-grpc.noders.services:24090',
        provider: '[NODERS]TEAM'
      }
    ],
    evmHttpJsonrpc: [
      {
        address: 'https://jsonrpc.uptick.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://uptick.jsonrpc.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://evm-uptick.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://uptick-jsonrpc.noders.services',
        provider: '[NODERS]TEAM'
      }
    ]
  },
  explorers: [
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/uptick',
      txPage: 'https://staking-explorer.com/transaction.php?chain=uptick&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=uptick&addr=${accountAddress}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.org/uptick',
      txPage: 'https://explorer.nodestake.org/uptick/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/uptick-mainnet',
      txPage: 'https://explorer.stavr.tech/uptick-mainnet/tx/${txHash}'
    },
    {
      kind: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀 Explorer',
      url: 'https://exp.utsa.tech/uptick',
      txPage: 'https://exp.utsa.tech/uptick/tx/${txHash}'
    },
    {
      kind: 'cosmotracker',
      url: 'https://cosmotracker.com/uptick',
      txPage: 'https://cosmotracker.com/uptick/tx/${txHash}'
    },
    {
      kind: 'Upscan',
      url: 'https://upscan.xyz/',
      txPage: 'https://upscan.xyz/uptick_117-1/tx/${txHash}'
    },
    {
      kind: 'Sr20de',
      url: 'https://explorer.sr20de.xyz/uptick',
      txPage: 'https://explorer.sr20de.xyz/uptick/tx/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.svg'
    }]
};
export default info;