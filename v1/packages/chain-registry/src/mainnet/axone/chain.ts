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
      tx_page: 'https://axone.valopers.com/transactions/${txHash}',
      account_page: 'https://axone.valopers.com/account/${accountAddress}'
    }, {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/axone',
      tx_page: 'https://explorer.nodestake.org/axone/tx/${txHash}',
      account_page: 'https://explorer.nodestake.org/axone/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axone/images/chain.png'
    }],
  description: 'Axone is a layer-1 designed for collaborative AI training, governance and monetization at scale.'
};
export default info;