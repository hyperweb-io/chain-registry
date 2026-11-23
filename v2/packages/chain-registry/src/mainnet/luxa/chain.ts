import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'luxa',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://luxaecosystem.xyz',
  prettyName: 'LUXA Network',
  chainType: 'cosmos',
  chainId: 'luxa-1',
  bech32Prefix: 'luxa',
  daemonName: 'luxad',
  nodeHome: '$HOME/.luxa',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uluxa',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uluxa'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/luxaecosystem/luxa-chain',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    genesis: {
      genesisUrl: 'https://luxaecosystem.xyz/genesis.json'
    },
    consensus: {
      type: 'cometbft',
      version: '0.38.12'
    },
    sdk: {
      type: 'cosmos',
      version: '0.50.10'
    },
    cosmwasm: {
      version: 'v0.50.0',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/luxa/images/luxa.png'
  },
  apis: {
    rpc: [
      {
        address: 'https://luxa-rpc.validatorsg.com',
        provider: 'ValidatorSG'
      },
      {
        address: 'https://luxa-rpc.onenov.xyz',
        provider: 'OneNov'
      },
      {
        address: 'https://rpc.nodesafe-app.xyz/luxa/',
        provider: 'NodeSafe'
      },
      {
        address: 'https://luxa.rpc.m.anode.team',
        provider: 'AlxVoy ⚡ ANODE.TEAM'
      }
    ],
    rest: [
      {
        address: 'https://luxa-api.validatorsg.com',
        provider: 'ValidatorSG'
      },
      {
        address: 'https://luxa-api.onenov.xyz',
        provider: 'OneNov'
      },
      {
        address: 'https://api.nodesafe-app.xyz/luxa',
        provider: 'NodeSafe'
      },
      {
        address: 'https://luxa.api.m.anode.team',
        provider: 'AlxVoy ⚡ ANODE.TEAM'
      }
    ],
    grpc: [{
        address: 'grpc-luxa.nodesafe-app.xyz:443',
        provider: 'NodeSafe'
      }, {
        address: 'luxa.grpc.m.anode.team:443',
        provider: 'AlxVoy ⚡ ANODE.TEAM'
      }]
  },
  explorers: [
    {
      kind: 'OneNov Explorer',
      url: 'https://explorer.onenov.xyz/luxa',
      txPage: 'https://explorer.onenov.xyz/luxa/tx/${txHash}',
      accountPage: 'https://explorer.onenov.xyz/luxa/account/${accountAddress}'
    },
    {
      kind: 'utsa',
      url: 'https://explorer.utsa.tech/networks/luxa-mainnet',
      accountPage: 'https://explorer.utsa.tech/networks/luxa-mainnet/accounts/${accountAddress}'
    },
    {
      kind: 'AlxVoy ⚡ ANODE.TEAM',
      url: 'https://explorer.anode.team/main/luxa',
      txPage: 'https://explorer.anode.team/main/luxa/tx/${txHash}',
      accountPage: 'https://explorer.anode.team/main/luxa/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/luxa/images/luxa.png',
      theme: {
        circle: true
      }
    }]
};
export default info;