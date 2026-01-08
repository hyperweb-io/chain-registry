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
    },
    tag: 'v12.0.0',
    binaries: {
      "linux/amd64": 'https://github.com/axone-protocol/axoned/releases/download/v12.0.0/axoned-12.0.0-linux-amd64',
      "linux/arm64": 'https://github.com/axone-protocol/axoned/releases/download/v12.0.0/axoned-12.0.0-linux-arm64'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.13'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.17'
    },
    cosmwasm: {
      version: 'v0.53.0',
      path: '$HOME/.axoned/wasm',
      enabled: true
    },
    ibc: {
      type: 'go',
      version: 'v8.4.0'
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
      },
      {
        address: 'https://rpc.cros-nest.com:443/axone',
        provider: 'crosnest'
      },
      {
        address: 'https://rpc.axone.citizenweb3.com',
        provider: 'Citizen Web3'
      },
      {
        address: 'https://rpc.axone-archive.citizenweb3.com',
        provider: 'Citizen Web3'
      },
      {
        address: 'https://axone-mainnet-rpc.shazoes.xyz',
        provider: 'Shazoes'
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
      },
      {
        address: 'https://rest.cros-nest.com:443/axone',
        provider: 'crosnest'
      },
      {
        address: 'https://api.axone.citizenweb3.com',
        provider: 'Citizen Web3'
      },
      {
        address: 'https://api.axone-archive.citizenweb3.com',
        provider: 'Citizen Web3'
      },
      {
        address: 'https://axone-mainnet-api.shazoes.xyz',
        provider: 'Shazoes'
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
      },
      {
        address: 'grpc.axone.citizenweb3.com:443',
        provider: 'Citizen Web3'
      },
      {
        address: 'grpc.axone-archive.citizenweb3.com:443',
        provider: 'Citizen Web3'
      },
      {
        address: 'axone-mainnet-grpc.shazoes.xyz:30490',
        provider: 'Shazoes'
      }
    ]
  },
  explorers: [
    {
      kind: 'valopers',
      url: 'https://axone.valopers.com/',
      txPage: 'https://axone.valopers.com/transactions/${txHash}',
      accountPage: 'https://axone.valopers.com/account/${accountAddress}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/axone',
      txPage: 'https://explorer.nodestake.org/axone/tx/${txHash}',
      accountPage: 'https://explorer.nodestake.org/axone/account/${accountAddress}'
    },
    {
      kind: 'Validatorinfo',
      url: 'https://validatorinfo.com/networks/axone/overview',
      validatorPage: 'https://validatorinfo.com/networks/axone/validators',
      proposalPage: 'https://validatorinfo.com/networks/axone/governance'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axone/images/chain.png'
    }],
  description: 'Axone is a layer-1 designed for collaborative AI training, governance and monetization at scale.'
};
export default info;