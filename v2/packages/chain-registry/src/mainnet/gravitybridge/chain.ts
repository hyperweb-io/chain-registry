import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'gravitybridge',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.gravitybridge.net/',
  prettyName: 'Gravity Bridge',
  chainType: 'cosmos',
  chainId: 'gravity-bridge-3',
  bech32Prefix: 'gravity',
  daemonName: 'gravity',
  nodeHome: '$HOME/.gravity',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [
      {
        denom: 'ugraviton',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0,
        highGasPrice: 0.035
      },
      {
        denom: 'gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        lowGasPrice: 0.0002,
        averageGasPrice: 0.0005,
        highGasPrice: 0.0008
      },
      {
        denom: 'gravity0xdAC17F958D2ee523a2206206994597C13D831ec7',
        lowGasPrice: 0.0002,
        averageGasPrice: 0.0005,
        highGasPrice: 0.0008
      }
    ]
  },
  staking: {
    stakingTokens: [{
        denom: 'ugraviton'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Gravity-Bridge/Gravity-Bridge',
    recommendedVersion: 'v1.11.1',
    compatibleVersions: ['v1.11.1'],
    binaries: {
      "linux/amd64": 'https://github.com/Gravity-Bridge/Gravity-Bridge/releases/download/v1.11.1/gravity-linux-amd64'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/Gravity-Bridge/Gravity-Docs/main/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg'
  },
  description: 'An open, decentralized bridge that unlocks the power of interoperability & liquidity between blockchain ecosystems.',
  apis: {
    rpc: [
      {
        address: 'https://gravitychain.io:26657',
        provider: 'althea'
      },
      {
        address: 'http://gravity-bridge-1-08.nodes.amhost.net:26657',
        provider: 'amhost'
      },
      {
        address: 'https://gravity-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc-gravitybridge-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/gravitybridge',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc.gravity.bh.rocks/',
        provider: 'BlockHunters 🎯'
      },
      {
        address: 'https://gravity-rpc.ramuchi.tech',
        provider: 'ramuchi.tech'
      },
      {
        address: 'https://rpc-gravity-bridge-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://gravity-rpc.staketab.org:443',
        provider: 'Staketab'
      },
      {
        address: 'https://gravity-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://rpc.g-bridge.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://rpc.gravity-bridge-3.gravity.aviaone.com:443',
        provider: 'AviaOne 🟢'
      }
    ],
    rest: [
      {
        address: 'https://gravitychain.io:1317',
        provider: 'althea'
      },
      {
        address: 'https://api-gravitybridge-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://gravity-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rest.lavenderfive.com:443/gravitybridge',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://api.gravity.bh.rocks/',
        provider: 'BlockHunters 🎯'
      },
      {
        address: 'https://gravity-api.ramuchi.tech',
        provider: 'ramuchi.tech'
      },
      {
        address: 'https://api-gravity-bridge-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://gravity-rest.staketab.org',
        provider: 'Staketab'
      },
      {
        address: 'https://gravity-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://lcd.g-bridge.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://api.gravity-bridge-3.gravity.aviaone.com',
        provider: 'AviaOne 🟢'
      }
    ],
    grpc: [
      {
        address: 'gravity-bridge-1-08.nodes.amhost.net:9090',
        provider: 'amhost'
      },
      {
        address: 'grpc-gravitybridge-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'gravity-grpc.polkachu.com:14290',
        provider: 'Polkachu'
      },
      {
        address: 'gravitybridge.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://gravity-grpc.ramuchi.tech:10090',
        provider: 'ramuchi.tech'
      },
      {
        address: 'grpc-gravity-bridge-01.stakeflow.io:1302',
        provider: 'Stakeflow'
      },
      {
        address: 'services.staketab.com:9017',
        provider: 'Staketab'
      },
      {
        address: 'gravity-grpc.w3coins.io:14290',
        provider: 'w3coins'
      },
      {
        address: 'https://grpc.g-bridge.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'grpc.gravity-bridge-3.gravity.aviaone.com:9200',
        provider: 'AviaOne 🟢'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/gravitybridge',
      txPage: 'https://ezstaking.app/gravitybridge/txs/${txHash}',
      accountPage: 'https://ezstaking.app/gravitybridge/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/gravity-bridge',
      txPage: 'https://www.mintscan.io/gravity-bridge/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/gravity-bridge/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/gravity-bridge',
      txPage: 'https://ping.pub/gravity-bridge/tx/${txHash}'
    },
    {
      kind: 'explorers.guru',
      url: 'https://gravity.explorers.guru',
      txPage: 'https://gravity.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/gravity-bridge',
      txPage: 'https://atomscan.com/gravity-bridge/transactions/${txHash}',
      accountPage: 'https://atomscan.com/gravity-bridge/accounts/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/gravitybridge',
      txPage: 'https://explorer.tcnetwork.io/gravitybridge/transaction/${txHash}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/gravity-bridge',
      accountPage: 'https://stakeflow.io/gravity-bridge/accounts/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/GravityBridge',
      txPage: 'https://explorer.stavr.tech/GravityBridge/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/GravityBridge/accounts/${accountAddress}'
    },
    {
      kind: 'AviaOne 🟢',
      url: 'https://mainnet.explorer.aviaone.com/gravity-bridge',
      txPage: 'https://mainnet.explorer.aviaone.com/gravity-bridge/tx/${txHash}',
      accountPage: 'https://mainnet.explorer.aviaone.com/gravity-bridge/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg',
      theme: {
        primaryColorHex: '#042ca4'
      }
    }]
};
export default info;