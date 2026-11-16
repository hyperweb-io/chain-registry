import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'bitcanna',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.bitcanna.network/',
  prettyName: 'BitCanna',
  chainType: 'cosmos',
  chainId: 'bitcanna-1',
  bech32Prefix: 'bcna',
  daemonName: 'bcnad',
  nodeHome: '$HOME/.bcna',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ubcna',
        fixedMinGasPrice: 0.001,
        lowGasPrice: 0.001,
        averageGasPrice: 0.0025,
        highGasPrice: 0.01
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ubcna'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/BitCanna-Network/bcna',
    recommendedVersion: 'v4.0.4',
    compatibleVersions: [
      'v4.0.0',
      'v4.0.1',
      'v4.0.2',
      'v4.0.3',
      'v4.0.4'
    ],
    binaries: {
      "linux/amd64": 'https://github.com/BitCanna-Network/bcna/releases/download/v4.0.4/bcnad_linux_amd64.tar.gz',
      "linux/arm64": 'https://github.com/BitCanna-Network/bcna/releases/download/v4.0.4/bcnad_linux_arm64.tar.gz'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.18'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/BitCanna-Network/bcna/main/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.13'
    },
    ibc: {
      type: 'go',
      version: 'v8.7.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.bitcanna.network/',
        provider: 'bitcanna'
      },
      {
        address: 'https://bitcanna.rpc.m.anode.team/',
        provider: 'AlxVoy ⚡ ANODE.TEAM'
      },
      {
        address: 'https://bcna.rpc.arcturian.tech/',
        provider: 'Arcturian Tech'
      },
      {
        address: 'https://bitcanna-rpc.bluestake.net',
        provider: 'BlueStake'
      }
    ],
    grpc: [{
        address: 'grpc.bitcanna.network:443',
        provider: 'bitcanna'
      }, {
        address: 'bitcanna.grpc.m.anode.team:443',
        provider: 'AlxVoy ⚡ ANODE.TEAM'
      }],
    rest: [
      {
        address: 'https://api.bitcanna.network',
        provider: 'bitcanna'
      },
      {
        address: 'https://bitcanna.api.m.anode.team',
        provider: 'AlxVoy ⚡ ANODE.TEAM'
      },
      {
        address: 'https://bcna.api.arcturian.tech/',
        provider: 'Arcturian Tech'
      },
      {
        address: 'https://bitcanna-api.bluestake.net',
        provider: 'BlueStake'
      }
    ]
  },
  explorers: [
    {
      kind: 'AlxVoy ⚡ ANODE.TEAM',
      url: 'https://main.anode.team/bitcanna',
      txPage: 'https://main.anode.team/bitcanna/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/bitcanna',
      txPage: 'https://atomscan.com/bitcanna/transactions/${txHash}'
    },
    {
      kind: 'Valopers',
      url: 'https://bitcanna.valopers.com/',
      txPage: 'https://bitcanna.valopers.com/transactions/${txHash}',
      accountPage: 'https://bitcanna.valopers.com/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
    }]
};
export default info;