import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'symphony',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Symphony',
  chain_type: 'cosmos',
  chain_id: 'symphony-1',
  bech32_prefix: 'symphony',
  daemon_name: 'symphonyd',
  node_home: '$HOME/.symphonyd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'note',
        fixed_min_gas_price: 0,
        low_gas_price: 0.00025,
        average_gas_price: 0.0025,
        high_gas_price: 0.004
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'note'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/Orchestra-Labs/symphony',
    recommended_version: 'v1.0.0',
    compatible_versions: ['v1.0.0'],
    consensus: {
      type: 'cometbft',
      version: '0.38.11'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/Orchestra-Labs/symphony/refs/heads/main/networks/symphony-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.50.9'
    },
    cosmwasm: {
      version: '0.53.0',
      enabled: true
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://symphony.rpc.nodeshub.online/',
        provider: 'Nodes Hub'
      },
      {
        address: 'https://symphony-rpc.cogwheel.zone/',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'https://rpc-main-symphony.vinjan.xyz',
        provider: 'Vinjan.Inc'
      }
    ],
    rest: [
      {
        address: 'https://symphony.api.nodeshub.online/',
        provider: 'Nodes Hub'
      },
      {
        address: 'https://symphony-api.cogwheel.zone/',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'https://api-main-symphony.vinjan.xyz',
        provider: 'Vinjan.Inc'
      }
    ],
    grpc: [
      {
        address: 'https://symphony.grpc.nodeshub.online/',
        provider: 'Nodes Hub'
      },
      {
        address: 'https://symphony-grpc.cogwheel.zone:443',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'grpc-main-symphony.vinjan.xyz:21090',
        provider: 'Vinjan.Inc'
      }
    ]
  },
  explorers: [{
      kind: 'VinjanXplorer',
      url: 'https://xplorer.vinjan.xyz/symphony',
      tx_page: 'https://xplorer.vinjan.xyz/symphony/tx/${txHash}',
      account_page: 'https://xplorer.vinjan.xyz/symphony/account/${accountAddress}'
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/symphony/images/symphony_logo.png'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/symphony/images/symphony_logo.png'
    }]
};
export default info;