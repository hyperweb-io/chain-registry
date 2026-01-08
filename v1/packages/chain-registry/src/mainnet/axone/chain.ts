import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'axone',
  status: 'live',
  website: 'http://axone.xyz/',
  network_type: 'mainnet',
  pretty_name: 'Axone',
  chain_type: 'cosmos',
  chain_id: 'axone-1',
  bech32_prefix: 'axone',
  slip44: 118,
  daemon_name: 'axoned',
  node_home: '$HOME/.axoned',
  key_algos: ['secp256k1'],
  fees: {
    fee_tokens: [{
        denom: 'uaxone',
        low_gas_price: 0.001,
        average_gas_price: 0.005,
        high_gas_price: 0.01
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uaxone'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/axone-protocol/axoned',
    recommended_version: 'v12.0.0',
    compatible_versions: ['v12.0.0'],
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/axone-protocol/networks/refs/heads/main/chains/1/genesis.json'
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
  logo_URIs: {
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
      tx_page: 'https://axone.valopers.com/transactions/${txHash}',
      account_page: 'https://axone.valopers.com/account/${accountAddress}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/axone',
      tx_page: 'https://explorer.nodestake.org/axone/tx/${txHash}',
      account_page: 'https://explorer.nodestake.org/axone/account/${accountAddress}'
    },
    {
      kind: 'Validatorinfo',
      url: 'https://validatorinfo.com/networks/axone/overview',
      validator_page: 'https://validatorinfo.com/networks/axone/validators',
      proposal_page: 'https://validatorinfo.com/networks/axone/governance'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axone/images/chain.png'
    }],
  description: 'Axone is a layer-1 designed for collaborative AI training, governance and monetization at scale.'
};
export default info;