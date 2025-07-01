import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'symphonytestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Symphony Testnet',
  chain_type: 'cosmos',
  chain_id: 'symphony-testnet-4',
  bech32_prefix: 'symphony',
  daemon_name: 'symphonyd',
  node_home: '$HOME/.symphonyd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'note',
        fixed_min_gas_price: 0,
        low_gas_price: 0.0025,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'note'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/Orchestra-Labs/symphony',
    recommended_version: 'v0.4.1',
    compatible_versions: ['v0.4.1'],
    consensus: {
      type: 'cometbft',
      version: '0.38.11'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/Orchestra-Labs/symphony/refs/heads/main/networks/symphony-testnet-4/genesis.json'
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
        address: 'https://symphony.test.rpc.nodeshub.online/',
        provider: 'Nodes Hub'
      },
      {
        address: 'https://symphony-testnet-rpc.cogwheel.zone/',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'https://rpc-symphonyd.vinjan.xyz',
        provider: 'Vinjan.Inc'
      }
    ],
    rest: [
      {
        address: 'https://symphony.test.api.nodeshub.online/',
        provider: 'Nodes Hub'
      },
      {
        address: 'https://symphony-testnet-api.cogwheel.zone/',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'https://api-symphonyd.vinjan.xyz',
        provider: 'Vinjan.Inc'
      }
    ],
    grpc: [{
        address: 'https://symphony.test.grpc.nodeshub.online/',
        provider: 'Nodes Hub'
      }, {
        address: 'https://symphony-testnet-grpc.cogwheel.zone:443',
        provider: 'Cogwheel ⚙️'
      }]
  },
  explorers: [{
      kind: 'VinjanXplorer',
      url: 'https://xplorer.vinjan.xyz/symphony-testnet',
      tx_page: 'https://xplorer.vinjan.xyz/symphony-testnet/tx/${txHash}',
      account_page: 'https://xplorer.vinjan.xyz/symphony-testnet/account/${accountAddress}'
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/symphony/images/symphony_logo.png'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/symphony/images/symphony_logo.png'
    }]
};
export default info;