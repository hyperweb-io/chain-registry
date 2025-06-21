import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'qubetics',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.qubetics.com/',
  pretty_name: 'Qubetics',
  chain_type: 'cosmos',
  chain_id: 'qubetics_9030-1',
  bech32_prefix: 'qubetics',
  node_home: '$HOME/.qubeticsd',
  daemon_name: 'qubeticsd',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'tics',
        fixed_min_gas_price: 250000000,
        low_gas_price: 20000000000,
        average_gas_price: 25000000000,
        high_gas_price: 40000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'tics'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/Qubetics/qubetics-chain',
    recommended_version: 'v1.0.0',
    compatible_versions: ['v1.0.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.37.9'
    },
    binaries: {
      "linux/amd64": 'https://github.com/Qubetics/qubetics-mainnetnode-script/tree/main/ubuntu22.04build/qubeticsd'
    },
    genesis: {
      genesis_url: 'https://github.com/Qubetics/qubetics-mainnetnode-script/blob/main/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.47.12'
    },
    ibc: {
      type: 'go',
      version: 'v7.6.0'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qubetics/images/qubetics.png'
  },
  description: 'Developers use qubetics as the Ethereum Chain to deploy applications of the future. Get all the functionalities of Ethereum with the power of IBC and Interchain composability.',
  apis: {
    rpc: [{
        address: 'https://tendermint.qubetics.com',
        provider: 'Qubetics'
      }],
    rest: [{
        address: 'https://swagger.qubetics.com',
        provider: 'Qubetics'
      }],
    grpc: [{
        address: 'https://grpc.qubetics.com',
        provider: 'Qubetics'
      }],
    "evm-http-jsonrpc": [{
        address: 'https://rpc.qubetics.com',
        provider: 'Qubetics'
      }]
  },
  explorers: [{
      kind: 'qubetics',
      url: 'https://ticsscan.com',
      tx_page: 'https://ticsscan.com/tx/${txHash}',
      account_page: 'https://ticsscan.com/address/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qubetics/images/qubetics.png',
      theme: {
        primary_color_hex: '#046ffc'
      }
    }]
};
export default info;