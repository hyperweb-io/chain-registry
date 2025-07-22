import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'axone',
  status: 'live',
  website: 'http://axone.xyz/',
  networkType: 'mainnet',
  prettyName: 'Axone',
  chainType: 'cosmos',
  chainId: 'axone-1',
  bech32Prefix: 'axone',
  slip44: 118,
  daemonName: 'axoned',
  nodeHome: '$HOME/.axoned',
  keyAlgos: ['secp256k1'],
  fees: {
    feeTokens: [{
        denom: 'uaxone',
        lowGasPrice: 0.001,
        averageGasPrice: 0.005,
        highGasPrice: 0.01
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uaxone'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/axone-protocol/axoned',
    recommendedVersion: 'v12.0.0',
    compatibleVersions: ['v12.0.0'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/axone-protocol/networks/refs/heads/main/chains/1/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axone/images/chain.png'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.axone.cumulo.com.es',
        provider: 'cumulo'
      },
      {
        address: 'https://axone.rpc.bccnodes.com',
        provider: 'BccNodes'
      },
      {
        address: 'https://axone-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://rpc.axone.nodestake.org',
        provider: 'NodeStake'
      }
    ],
    rest: [
      {
        address: 'https://api.axone.cumulo.com.es',
        provider: 'cumulo'
      },
      {
        address: 'https://axone.lcd.bccnodes.com',
        provider: 'BccNodes'
      },
      {
        address: 'https://axone-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://api.axone.nodestake.org',
        provider: 'NodeStake'
      }
    ],
    grpc: [
      {
        address: 'grpc.axone.cumulo.com.es:443',
        provider: 'cumulo'
      },
      {
        address: 'axone.grpc.bccnodes.com:443',
        provider: 'BccNodes'
      },
      {
        address: 'https://axone-grpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'grpc.axone.nodestake.org:443',
        provider: 'NodeStake'
      }
    ]
  },
  explorers: [{
      kind: 'valopers',
      url: 'https://axone.valopers.com/',
      txPage: 'https://axone.valopers.com/transactions/${txHash}',
      accountPage: 'https://axone.valopers.com/account/${accountAddress}'
    }, {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/axone',
      txPage: 'https://explorer.nodestake.org/axone/tx/${txHash}',
      accountPage: 'https://explorer.nodestake.org/axone/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axone/images/chain.png'
    }],
  description: 'Axone is a layer-1 designed for collaborative AI training, governance and monetization at scale.'
};
export default info;