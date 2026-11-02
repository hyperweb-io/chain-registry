import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'blockmaze',
  chain_type: 'cosmos',
  chain_id: 'blockmaze_6165-1',
  pretty_name: 'Blockmaze',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://blockmaze.com',
  bech32_prefix: 'bmz',
  daemon_name: 'blockmazed',
  node_home: '$HOME/.blockmazed',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'Rho18',
        fixed_min_gas_price: 150000000000,
        low_gas_price: 150000000000,
        average_gas_price: 175000000000,
        high_gas_price: 200000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'Rho18'
      }],
    lock_duration: {
      time: '604800s'
    }
  },
  codebase: {
    recommended_version: 'v1.0.0',
    compatible_versions: ['v1.0.0'],
    tag: 'v1.0.0',
    consensus: {
      type: 'cometbft',
      version: 'v0.38.21'
    },
    binaries: {
      "linux/amd64": 'https://github.com/NodeNavigator/blockmaze-mainnet-script/releases/download/blockmazed/blockmazed'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/NodeNavigator/blockmaze-mainnet-script/main/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.53.4'
    },
    ibc: {
      type: 'go',
      version: 'v8.5.2'
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/blockmaze/images/bmz.png'
    }],
  description: 'Blockmaze is a Layer 1 blockchain for regulated real-world assets (RWAs). It is EVM-compatible and built on the Cosmos SDK, with BMZ as its native staking and gas token.',
  apis: {
    rpc: [{
        address: 'https://native-rpc.blockmaze.org',
        provider: 'Blockmaze'
      }],
    rest: [{
        address: 'https://api.blockmaze.org',
        provider: 'Blockmaze'
      }],
    wss: [{
        address: 'wss://native-rpc.blockmaze.org/websocket',
        provider: 'Blockmaze'
      }],
    "evm-http-jsonrpc": [{
        address: 'https://rpc.blockmaze.org',
        provider: 'Blockmaze'
      }]
  },
  explorers: [{
      kind: 'bmzscan',
      url: 'https://bmzscan.com',
      tx_page: 'https://bmzscan.com/native/tx/${txHash}',
      account_page: 'https://bmzscan.com/native/address/${accountAddress}'
    }]
};
export default info;