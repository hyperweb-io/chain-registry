import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'arkeo',
  status: 'live',
  website: 'https://arkeo.network/',
  networkType: 'mainnet',
  chainType: 'cosmos',
  prettyName: 'Arkeo',
  chainId: 'arkeo-main-v1',
  bech32Prefix: 'arkeo',
  daemonName: 'arkeod',
  nodeHome: '$HOME/.arkeo',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uarkeo',
        fixedMinGasPrice: 0.001,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uarkeo'
      }],
    lockDuration: {
      time: '1209600s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/arkeonetwork/arkeo',
    genesis: {
      name: 'v1',
      genesisUrl: 'https://github.com/arkeonetwork/arkeo/blob/master/networks/mainnet/arkeo-main-v1/genesis.mainnet.json.gz'
    },
    recommendedVersion: 'v1.0.9'
  },
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkeo/images/arkeo.svg',
      theme: {
        circle: true,
        primaryColorHex: '#3BE0FF'
      }
    }],
  apis: {
    rpc: [
      {
        address: 'https://rpc-seed.arkeo.network',
        provider: 'Arkeo'
      },
      {
        address: 'https://arkeo-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc.arkeo.roomit.xyz',
        provider: 'Roomit'
      }
    ],
    rest: [
      {
        address: 'https://rest-seed.arkeo.network',
        provider: 'Arkeo'
      },
      {
        address: 'https://arkeo-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://api.arkeo.roomit.xyz',
        provider: 'Roomit'
      }
    ],
    grpc: [{
        address: 'grpc.arkeo.roomit.xyz:8443',
        provider: 'Roomit'
      }]
  },
  explorers: [
    {
      kind: 'stakevillage',
      url: 'https://exp.stakevillage.net/arkeo-mainnet',
      txPage: 'https://exp.stakevillage.net/arkeo-mainnet/tx/${txHash}',
      accountPage: 'https://exp.stakevillage.net/arkeo-mainnet/account/${accountAddress}'
    },
    {
      kind: 'Valopers',
      url: 'https://arkeo.valopers.com/',
      txPage: 'https://arkeo.valopers.com/transactions/${txHash}',
      accountPage: 'https://arkeo.valopers.com/account/${accountAddress}'
    },
    {
      kind: 'Roomit',
      url: 'https://explorer.tendermint.roomit.xyz/arkeo-mainnet',
      txPage: 'https://explorer.tendermint.roomit.xyz/arkeo-mainnet/transactions/${txHash}',
      accountPage: 'https://explorer.tendermint.roomit.xyz/arkeo-mainnet/account/${accountAddress}'
    }
  ],
  keywords: [
    'validator',
    'node',
    'api',
    'data',
    'oracle',
    'marketplace'
  ]
};
export default info;