import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'kyvetestnet',
  chain_type: 'cosmos',
  chain_id: 'kaon-1',
  pretty_name: 'KYVE Kaon',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'kyve',
  daemon_name: 'kyved',
  node_home: '$HOME/.kyve',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'tkyve',
        fixed_min_gas_price: 0.02,
        low_gas_price: 0.02,
        average_gas_price: 0.03,
        high_gas_price: 0.06
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'tkyve'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/KYVENetwork/chain',
    recommended_version: 'v1.5.0',
    compatible_versions: ['v1.0.0-rc0', 'v1.5.0'],
    binaries: {
      "linux/amd64": 'https://github.com/KYVENetwork/chain/releases/download/v1.5.0/kyved_kaon_linux_amd64',
      "linux/arm64": 'https://github.com/KYVENetwork/chain/releases/download/v1.5.0/kyved_kaon_linux_arm64',
      "darwin/amd64": 'https://github.com/KYVENetwork/chain/releases/download/v1.5.0/kyved_kaon_darwin_amd64',
      "darwin/arm64": 'https://github.com/KYVENetwork/chain/releases/download/v1.5.0/kyved_kaon_darwin_arm64'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/KYVENetwork/networks/main/kaon-1/genesis.json'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.kaon.kyve.network',
        provider: 'kyve'
      },
      {
        address: 'https://rpc-kyve-test.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://kyve-testnet-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ],
    rest: [
      {
        address: 'https://api.kaon.kyve.network',
        provider: 'kyve'
      },
      {
        address: 'https://rest-kyve-test.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://kyve-testnet-api.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ]
  },
  explorers: [{
      kind: 'mintscan',
      url: 'https://mintscan.io/kyve-testnet',
      tx_page: 'https://mintscan.io/kyve-testnet/txs/${txHash}',
      account_page: 'https://mintscan.io/kyve-testnet/account/${accountAddress}'
    }, {
      kind: 'KYVE Explorer',
      url: 'https://explorer.kyve.network/kaon',
      tx_page: 'https://explorer.kyve.network/kaon/tx/${txHash}',
      account_page: 'https://explorer.kyve.network/kaon/account/${accountAddress}'
    }]
};
export default info;