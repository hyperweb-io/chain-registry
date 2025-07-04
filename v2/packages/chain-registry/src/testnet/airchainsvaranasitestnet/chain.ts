import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'airchainsvaranasitestnet',
  status: 'live',
  website: 'https://airchains.io/',
  networkType: 'testnet',
  prettyName: 'Airchains Varanasi Testnet',
  chainType: 'cosmos',
  chainId: 'varanasi-1',
  bech32Prefix: 'air',
  daemonName: 'junctiond',
  nodeHome: '$HOME/.junctiond',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uamf',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.00025,
        averageGasPrice: 0.005,
        highGasPrice: 0.01
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uamf'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/airchains-network/junction',
    recommendedVersion: 'v0.3.1',
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/airchains-network/junction-resources/refs/heads/main/varanasi-testnet/genesis/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.50.9'
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/airchainsvaranasitestnet/images/airchains-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/airchainsvaranasitestnet/images/airchains-logo.svg'
    }],
  description: 'Airchains',
  apis: {
    rpc: [
      {
        address: 'https://rpc1.airchains.t.cosmostaking.com/',
        provider: 'Cosmostaking'
      },
      {
        address: 'https://airchains-testnet-rpc.mekonglabs.tech/',
        provider: 'MeKongLabs'
      },
      {
        address: 'https://airchains-testnet-rpc.validator247.com/',
        provider: 'Validator247'
      },
      {
        address: 'https://airchains-rpc.node9x.com/',
        provider: 'Node9x'
      },
      {
        address: 'https://airchains-testnet-rpc.bonynode.online/',
        provider: 'BonyNode'
      },
      {
        address: 'https://airchains-testnet-rpc.validotgo.com/',
        provider: 'Validotgo'
      },
      {
        address: 'https://airchains-var-rpc.apollo-sync.com/',
        provider: 'ApolloSYNC'
      },
      {
        address: 'https://junction-testnet-rpc.nodesync.top/',
        provider: 'NodeSync'
      },
      {
        address: 'https://t-airchains.rpc.utsa.tech/',
        provider: 'UTSA'
      },
      {
        address: 'https://junction-rpc.kzvn.xyz/',
        provider: 'KenZ | DragonVN'
      },
      {
        address: 'https://rpc.synergynodes.com/',
        provider: 'Synergy Nodes'
      },
      {
        address: 'https://airchains-rpc.itrocket.net/',
        provider: 'ITRocket'
      },
      {
        address: 'https://airchains-testnet-rpc.nodesphere.net/',
        provider: 'NodeSphere'
      },
      {
        address: 'https://airchains-testnet-rpc.stakevillage.net/',
        provider: 'Stake Village'
      },
      {
        address: 'https://rpc1.airchains.t.cosmostaking.com/',
        provider: 'Cosmostaking'
      }
    ],
    rest: [
      {
        address: 'https://airchains-testnet-api.mekonglabs.tech/',
        provider: 'MeKongLabs'
      },
      {
        address: 'https://airchains-testnet-api.validator247.com/',
        provider: 'Validator247'
      },
      {
        address: 'https://airchains-api.node9x.com/',
        provider: 'Node9x'
      },
      {
        address: 'https://airchains-testnet-api.bonynode.online/',
        provider: 'BonyNode'
      },
      {
        address: 'https://airchains-testnet-api.validotgo.com/',
        provider: 'Validotgo'
      },
      {
        address: 'https://airchains-var-api.apollo-sync.com/',
        provider: 'ApolloSYNC'
      },
      {
        address: 'https://junction-testnet-api.nodesync.top/',
        provider: 'NodeSync'
      },
      {
        address: 'https://t-airchains.api.utsa.tech/',
        provider: 'UTSA'
      },
      {
        address: 'https://junction-api.kzvn.xyz/',
        provider: 'KenZ | DragonVN'
      },
      {
        address: 'https://api.synergynodes.com/',
        provider: 'Synergy Nodes'
      },
      {
        address: 'https://airchains-api.itrocket.net/',
        provider: 'ITRocket'
      },
      {
        address: 'https://airchains-testnet-api.nodesphere.net/',
        provider: 'NodeSphere'
      },
      {
        address: 'https://airchains-testnet.api.stakevillage.net/',
        provider: 'Stake Village'
      },
      {
        address: 'https://airchains-testnet-rest.cosmonautstakes.com/',
        provider: 'Cosmonaut Stakes'
      },
      {
        address: 'https://rest1.airchains.t.cosmostaking.com/',
        provider: 'Cosmostaking'
      }
    ],
    grpc: [
      {
        address: 'airchains-testnet-grpc.cosmonautstakes.com:14190',
        provider: 'Cosmonaut Stakes'
      },
      {
        address: 'airchains-testnet.grpc.stakevillage.net:443',
        provider: 'Stake Village'
      },
      {
        address: 'grpc1.airchains.t.cosmostaking.com:43090',
        provider: 'Cosmostaking'
      }
    ]
  },
  explorers: [
    {
      kind: 'Nodes.guru',
      url: 'https://testnet.junction.explorers.guru/',
      txPage: 'https://testnet.junction.explorers.guru/transaction/${txHash}',
      accountPage: 'https://testnet.junction.explorers.guru/account/${accountAddress}'
    },
    {
      kind: 'Validator VN ',
      url: 'https://explorer.validatorvn.com/Airchains-Testnet',
      txPage: 'https://explorer.validatorvn.com/Airchains-Testnet/tx/${txHash}',
      accountPage: 'https://explorer.validatorvn.com/Airchains-Testnet/account/${accountAddress}'
    },
    {
      kind: 'StakeMe',
      url: 'https://airchains.exploreme.pro/',
      txPage: 'https://airchains.exploreme.pro/transactions/${txHash}',
      accountPage: 'https://airchains.exploreme.pro/account/${accountAddress}'
    }
  ]
};
export default info;