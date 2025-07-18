import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'lumera',
  chain_type: 'cosmos',
  chain_id: 'lumera-mainnet-1',
  pretty_name: 'Lumera',
  website: 'https://lumera.protocol',
  network_type: 'mainnet',
  status: 'live',
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
    tag: 'v1.5.0',
    recommended_version: 'v1.5.0',
    language: {
      type: 'go',
      version: 'v1.24'
    },
    binaries: {
      "linux/amd64": 'https://github.com/LumeraProtocol/lumera/releases/download/v1.5.0/lumera_v1.5.0_linux_amd64.tar.gz?checksum=sha256:3d33c600ad35b94c72acf4ce81247f6171b79169f5b84a6e415df1ec30d690dc'
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
      genesis_url: 'https://raw.githubusercontent.com/LumeraProtocol/lumera-networks/refs/heads/master/mainnet/genesis.json'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.lumera.io:443',
        provider: 'LumeraProtocol'
      }],
    rest: [{
        address: 'https://lcd.lumera.io:443',
        provider: 'LumeraProtocol'
      }],
    grpc: [{
        address: 'https://grpc.lumera.io:443',
        provider: 'LumeraProtocol'
      }]
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