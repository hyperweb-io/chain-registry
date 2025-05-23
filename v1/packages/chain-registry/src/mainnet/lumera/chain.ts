import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'lumera',
  chain_type: 'cosmos',
  chain_id: 'lumera-mainnet-1',
  pretty_name: 'Lumera',
  website: 'https://lumera.protocol',
  network_type: 'mainnet',
  status: 'upcoming',
  bech32_prefix: 'lumera',
  bech32_config: {
    bech32PrefixAccAddr: 'lumera',
    bech32PrefixAccPub: 'lumerapub',
    bech32PrefixValAddr: 'lumeravaloper',
    bech32PrefixValPub: 'lumeravaloperpub',
    bech32PrefixConsAddr: 'lumeravalcons',
    bech32PrefixConsPub: 'lumeravalconspub'
  },
  daemon_name: 'lumerad',
  node_home: '$HOME/.lumera',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ulume',
        fixed_min_gas_price: 0.025,
        low_gas_price: 0.025,
        average_gas_price: 0.025,
        high_gas_price: 0.025
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ulume'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/LumeraProtocol/lumera',
    tag: 'v1.0.0',
    recommended_version: 'v1.0.0',
    language: {
      type: 'go',
      version: 'v1.24'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.13'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.12'
    },
    cosmwasm: {
      version: 'v0.53.0',
      enabled: true
    },
    ibc: {
      type: 'go',
      version: 'v8.5.1'
    },
    genesis: {
      genesis_url: 'https://github.com/LumeraProtocol/lumera-networks/tree/master/mainnet'
    }
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://portal.lumera.io/lumera-mainnet-1/',
      tx_page: 'https://portal.lumera.io/lumera-mainnet-1/tx/${txHash}',
      account_page: 'https://portal.lumera.io/lumera-mainnet-1/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumera/images/lumera.png'
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumera/images/lumera.png'
  },
  keywords: [
    'lumera',
    'lume',
    'mainnet',
    'pastel'
  ]
};
export default info;