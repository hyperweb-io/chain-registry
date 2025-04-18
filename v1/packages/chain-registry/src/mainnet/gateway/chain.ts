import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'gateway',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://wormhole.com',
  pretty_name: 'Wormhole Gateway',
  chain_type: 'cosmos',
  chain_id: 'wormchain',
  bech32_prefix: 'wormhole',
  daemon_name: 'wormchaind',
  node_home: '$HOME/.wormchaind',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'utest',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0
      }]
  },
  codebase: {
    git_repo: 'https://github.com/wormhole-foundation/wormhole',
    recommended_version: 'v2.23.0',
    consensus: {
      type: 'tendermint',
      version: 'v0.34.24',
      repo: 'https://github.com/tendermint/tendermint'
    },
    genesis: {
      name: 'v1',
      genesis_url: 'https://github.com/wormhole-foundation/wormhole/blob/main/wormchain/mainnet/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/wormhole-foundation/cosmos-sdk',
      version: 'v0.45.9',
      tag: 'v0.45.9-wormhole-2'
    },
    ibc: {
      type: 'go',
      version: '4.2.2',
      ics_enabled: ['ics20-1']
    },
    cosmwasm: {
      repo: 'https://github.com/wormhole-foundation/wasmd',
      version: 'v0.30.0',
      tag: 'v0.30.0-wormchain-2',
      enabled: true
    }
  },
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gateway/images/wormhole_icon.svg',
      theme: {
        background_color_hex: '#231b3b',
        primary_color_hex: '#231b3b',
        circle: false
      }
    }, {
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gateway/images/wormhole_circle.svg',
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gateway/images/wormhole_circle.png',
      theme: {
        background_color_hex: '#231b3b',
        primary_color_hex: '#231b3b',
        circle: true
      }
    }],
  logo_URIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gateway/images/wormhole_icon.svg'
  },
  apis: {
    rpc: [{
        address: 'http://wormchain-mainnet-1-full.tm.p2p.org/',
        provider: 'P2P'
      }, {
        address: 'https://wormchain-rpc.quickapi.com/',
        provider: 'ChainLayer'
      }],
    rest: [{
        address: 'http://wormchain-mainnet-1-full-rest.tm.p2p.org/',
        provider: 'P2P'
      }, {
        address: 'https://wormchain-lcd.quickapi.com/',
        provider: 'ChainLayer'
      }],
    grpc: [{
        address: 'http://wormchain-mainnet-1-full-grpc.tm.p2p.org',
        provider: 'P2P'
      }]
  },
  explorers: [{
      kind: 'bigdipper',
      url: 'https://bigdipper.live/wormhole',
      tx_page: 'https://bigdipper.live/wormhole/transactions/${txHash}',
      account_page: 'https://bigdipper.live/wormhole/accounts/${accountAddress}'
    }],
  keywords: ['bridge']
};
export default info;