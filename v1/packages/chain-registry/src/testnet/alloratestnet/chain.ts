import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'alloratestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://allora.network',
  pretty_name: 'Allora Testnet',
  chain_type: 'cosmos',
  chain_id: 'allora-testnet-1',
  bech32_prefix: 'allo',
  daemon_name: 'allorad',
  node_home: '$HOME/.allorad',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uallo',
        fixed_min_gas_price: 10,
        low_gas_price: 10,
        average_gas_price: 10,
        high_gas_price: 12
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uallo'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/allora-network/allora-chain',
    recommended_version: 'v0.8.0',
    compatible_versions: ['v0.8.0'],
    binaries: {
      "linux/amd64": 'https://github.com/allora-network/allora-chain/releases/download/v0.8.0/allorad_linux_amd64',
      "linux/arm64": 'https://github.com/allora-network/allora-chain/releases/download/v0.8.0/allorad_linux_arm64',
      "darwin/amd64": 'https://github.com/allora-network/allora-chain/releases/download/v0.8.0/allorad_darwin_amd64',
      "darwin/arm64": 'https://github.com/allora-network/allora-chain/releases/download/v0.8.0/allorad_darwin_arm64',
      "windows/amd64": 'https://github.com/allora-network/allora-chain/releases/download/v0.8.0/allorad_windows_amd64.exe',
      "windows/arm64": 'https://github.com/allora-network/allora-chain/releases/download/v0.8.0/allorad_windows_arm64.exe'
    },
    genesis: {
      genesis_url: 'https://github.com/allora-network/networks/blob/main/allora-testnet-1/genesis.json'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/allora/images/allora.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/allora/images/allora.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://allora-rpc.testnet.allora.network',
        provider: 'allora'
      },
      {
        address: 'https://rpc.ankr.com/allora_testnet',
        provider: 'ankr'
      },
      {
        address: 'https://allora-testnet-rpc.polkachu.com',
        provider: 'polkachu'
      },
      {
        address: 'https://allora-rpc.sh.moonlet.cloud/public',
        provider: 'moonlet'
      }
    ],
    rest: [
      {
        address: 'https://allora-api.testnet.allora.network',
        provider: 'allora'
      },
      {
        address: 'https://allora-testnet-api.polkachu.com',
        provider: 'polkachu'
      },
      {
        address: 'https://testnet-allora-api.lavenderfive.com',
        provider: 'lavenderfive'
      },
      {
        address: 'https://rpc.ankr.com/http/allora_testnet',
        provider: 'ankr'
      }
    ],
    grpc: [{
        address: 'allora-grpc.testnet.allora.network:443',
        provider: 'allora'
      }, {
        address: 'allora-testnet-grpc.polkachu.com:26790',
        provider: 'polkachu'
      }]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://explorer.testnet.allora.network',
      tx_page: 'https://explorer.testnet.allora.network/allora-testnet-1/tx/${txHash}',
      account_page: 'https://explorer.testnet.allora.network/allora-testnet-1/account/${accountAddress}'
    },
    {
      kind: 'Allora Studio',
      url: 'https://explorer.testnet-1.allora.network',
      tx_page: 'https://explorer.testnet-1.allora.network/explorer/transactions/${txHash}',
      account_page: 'https://explorer.testnet-1.allora.network/profile/${accountAddress}'
    },
    {
      kind: 'Moonlet',
      url: 'https://explorer.moonlet.cloud/allora',
      tx_page: 'https://explorer.moonlet.cloud/allora/tx/${txHash}',
      account_page: 'https://explorer.moonlet.cloud/allora/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/allora/images/allora.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/allora/images/allora.svg'
    }]
};
export default info;