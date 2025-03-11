import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'sedatestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://www.seda.xyz/',
  pretty_name: 'SEDA',
  chain_type: 'cosmos',
  chain_id: 'seda-1-testnet',
  bech32_prefix: 'seda',
  daemon_name: 'sedad',
  node_home: '$HOME/.sedad',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'aseda',
        fixed_min_gas_price: 10000000000,
        low_gas_price: 10000000000,
        average_gas_price: 10000000000,
        high_gas_price: 14000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'aseda'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/sedaprotocol/seda-chain',
    recommended_version: 'v0.1.9',
    compatible_versions: ['v0.1.7', 'v0.1.9'],
    binaries: {
      "linux/amd64": 'https://github.com/sedaprotocol/seda-chain/releases/download/v0.1.9/sedad-amd64',
      "linux/arm64": 'https://github.com/sedaprotocol/seda-chain/releases/download/v0.1.9/sedad-arm64'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/sedaprotocol/seda-networks/main/mainnet/genesis.json'
    },
    language: {
      type: 'go',
      version: '1.22.11'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.17'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.12'
    },
    cosmwasm: {
      version: '0.50.0',
      repo: 'https://github.com/CosmWasm/wasmd',
      enabled: true
    },
    ibc: {
      type: 'go',
      version: 'v8.6.1'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.svg'
  },
  description: 'SEDA is a standard for modular data transport and querying. Any data type, for all networks.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.testnet.seda.xyz/',
        provider: 'SEDA'
      },
      {
        address: 'https://seda-testnet-rpc.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://seda-testnet.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://seda-testnet-rpc.synergynodes.com/',
        provider: 'Synergy Nodes'
      }
    ],
    rest: [
      {
        address: 'https://lcd.testnet.seda.xyz/',
        provider: 'SEDA'
      },
      {
        address: 'https://seda-testnet-api.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://seda-testnet.api.kjnodes.com',
        provider: 'kjnodes'
      }
    ],
    grpc: [{
        address: 'seda-testnet-grpc.polkachu.com:25890',
        provider: 'Polkachu'
      }]
  },
  explorers: [{
      kind: 'sedaexplorer',
      url: 'https://testnet.explorer.seda.xyz/',
      tx_page: 'https://testnet.explorer.seda.xyz/txs/${txHash}',
      account_page: 'https://testnet.explorer.seda.xyz/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.svg',
      theme: {
        primary_color_hex: '#8178d1'
      }
    }]
};
export default info;