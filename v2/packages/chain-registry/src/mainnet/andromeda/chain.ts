import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'andromeda',
  chainType: 'cosmos',
  chainId: 'andromeda-1',
  preForkChainName: 'andromeda1',
  prettyName: 'Andromeda',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'andr',
  daemonName: 'andromedad',
  nodeHome: '$HOME/.andromeda',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uandr',
        lowGasPrice: 0.03,
        averageGasPrice: 0.05,
        highGasPrice: 0.075
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uandr'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/andromedaprotocol/andromedad',
    recommendedVersion: 'v0.1.1-patch',
    compatibleVersions: ['v0.1.1-patch'],
    consensus: {
      type: 'cometbft',
      version: 'v0.37.4'
    },
    genesis: {
      genesisUrl: 'https://snapshots.lavenderfive.com/genesis/andromeda/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.47.8'
    },
    ibc: {
      type: 'go',
      version: 'v7.4.0'
    },
    cosmwasm: {
      version: 'v0.41.0',
      enabled: true
    },
    tag: 'v0.1.1-patch'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.andromeda-1.andromeda.aviaone.com',
        provider: 'AviaOne 🟢'
      },
      {
        address: 'https://andromeda.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://andromeda.rpc.nodex.one',
        provider: 'nodex'
      },
      {
        address: 'https://andro.rpc.m.stavr.tech/',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/andromeda',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://andromeda-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://andromeda-rpc.stakerhouse.com:443',
        provider: 'StakerHouse'
      },
      {
        address: 'https://andromeda-rpc.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://andromeda.rpc.kjnodes.com',
        provider: 'kjnodes.com 🦄'
      },
      {
        address: 'andromeda-rpc.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://andromeda.rpc.liveraven.net',
        provider: 'LiveRaveN'
      }
    ],
    rest: [
      {
        address: 'https://api.andromeda-1.andromeda.aviaone.com',
        provider: 'AviaOne 🟢'
      },
      {
        address: 'https://andromeda.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://andromeda.api.nodex.one',
        provider: 'nodex'
      },
      {
        address: 'https://andro.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rest.lavenderfive.com:443/andromeda',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://andromeda-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://andromeda-rest.stakerhouse.com:443',
        provider: 'StakerHouse'
      },
      {
        address: 'https://andromeda-api.genznodes.dev',
        provider: 'genznodes'
      },
      {
        address: 'https://andromeda.api.kjnodes.com',
        provider: 'kjnodes.com 🦄'
      },
      {
        address: 'andromeda-api.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://andromeda.api.liveraven.net',
        provider: 'LiveRaveN'
      }
    ],
    grpc: [
      {
        address: 'andromeda.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://grpc.andromeda-1.andromeda.aviaone.com:9108',
        provider: 'AviaOne 🟢'
      },
      {
        address: 'andromeda.grpc.kjnodes.com:443',
        provider: 'kjnodes'
      },
      {
        address: 'andromeda-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://andromeda.grpc.nodex.one:443',
        provider: 'nodex'
      },
      {
        address: 'http://andromedad.grpc.t.stavr.tech:132',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'andromeda-grpc.stakerhouse.com:443',
        provider: 'StakerHouse'
      },
      {
        address: 'andromeda-grpc.genznodes.dev:27090',
        provider: 'genznodes'
      },
      {
        address: 'andromeda.grpc.kjnodes.com:443',
        provider: 'kjnodes.com 🦄'
      },
      {
        address: 'andromeda-grpc.noders.services:34090',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'andromeda.grpc.liveraven.net:443',
        provider: 'LiveRaveN'
      }
    ]
  },
  explorers: [
    {
      kind: 'Chainroot',
      url: 'https://explorer.chainroot.io/andromeda',
      txPage: 'https://explorer.chainroot.io/andromeda/transactions/${txHash}',
      accountPage: 'https://explorer.chainroot.io/andromeda/accounts/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/Andromeda-Mainnet',
      txPage: 'https://explorer.stavr.tech/Andromeda-Mainnet/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Andromeda-Mainnet/account/${accountAddress}'
    },
    {
      kind: 'exploreme.pro',
      url: 'https://andromeda.exploreme.pro',
      txPage: 'https://andromeda.exploreme.pro/transaction/${txHash}',
      accountPage: 'https://andromeda.exploreme.pro/account/${accountAddress}'
    },
    {
      kind: 'Cosmotracker',
      url: 'https://cosmotracker.com/andromeda',
      txPage: 'https://cosmotracker.com/andromeda/tx/${txHash}',
      accountPage: 'https://cosmotracker.com/andromeda/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/andromeda',
      txPage: 'https://ping.pub/andromeda/tx/${txHash}'
    },
    {
      kind: 'AviaOne Explorer 🟢',
      url: 'https://mainnet.explorer.aviaone.com/andromeda',
      txPage: 'https://mainnet.explorer.aviaone.com/andromeda/tx/${txHash}'
    }
  ],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/andromeda/images/andromeda-logo.png'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/andromeda/images/andromeda-logo.png'
    }]
};
export default info;