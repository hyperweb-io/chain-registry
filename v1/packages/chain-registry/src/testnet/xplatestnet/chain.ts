import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'xplatestnet',
  status: 'live',
  website: 'https://conx.xyz',
  network_type: 'testnet',
  pretty_name: 'CONX Testnet',
  chain_type: 'cosmos',
  chain_id: 'cube_47-5',
  bech32_prefix: 'xpla',
  daemon_name: 'xplad',
  node_home: '$HOME/.xpla',
  key_algos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'axpla',
        fixed_min_gas_price: 1200000000000,
        low_gas_price: 1200000000000,
        average_gas_price: 1200000000000,
        high_gas_price: 1200000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'axpla'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/xpladev/xpla',
    recommended_version: 'v1.14.0',
    compatible_versions: ['v1.14.0-rc5', 'v1.14.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.21'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/xpladev/testnets/main/cube_47-5/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/xpladev/cosmos-sdk',
      version: 'v0.53.6',
      tag: 'v0.53.6-xpla-2'
    },
    ibc: {
      type: 'go',
      version: 'v10.5.0'
    },
    cosmwasm: {
      version: 'v0.60.9'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg'
  },
  apis: {
    rpc: [{
        address: 'https://cube-rpc.xpla.dev',
        provider: 'Holdings'
      }],
    rest: [{
        address: 'https://cube-lcd.xpla.dev',
        provider: 'Holdings'
      }],
    "evm-http-jsonrpc": [{
        address: 'https://cube-evm-rpc.xpla.dev',
        provider: 'Holdings'
      }]
  },
  explorers: [{
      kind: 'explorer.conx',
      url: 'https://explorer.conx.xyz/testnet',
      tx_page: 'https://explorer.conx.xyz/testnet/tx/${txHash}'
    }, {
      kind: 'finder',
      url: 'https://finder.xpla.io/testnet',
      tx_page: 'https://finder.xpla.io/testnet/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg'
    }]
};
export default info;