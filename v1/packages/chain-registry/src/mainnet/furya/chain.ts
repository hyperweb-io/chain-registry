import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'furya',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://furya.xyz/',
  pretty_name: 'furya',
  chain_type: 'cosmos',
  chain_id: 'furya-1',
  daemon_name: 'furyad',
  node_home: '$HOME/.furyad',
  bech32_prefix: 'furya',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ufury',
        low_gas_price: 0.1,
        average_gas_price: 0.25,
        high_gas_price: 0.5
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ufury'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/furysport/furya-chain',
    recommended_version: 'v2.0.0',
    compatible_versions: ['v2.0.0'],
    genesis: {
      genesis_url: 'https://github.com/furysport/furya-chain/blob/main/network/mainnet/genesis.json'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/chain.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/chain.svg'
  },
  apis: {
    rpc: [{
        address: 'https://furya-rpc.synergynodes.com',
        provider: 'synergynodes'
      }],
    rest: [{
        address: 'https://furya.api.nodeshub.online',
        provider: 'synergynodes'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'Furya Explorer',
      url: 'https://explorer.furya.network/furya-1/',
      tx_page: 'https://explorer.furya.network/furya-1/tx/${txHash}',
      account_page: 'https://explorer.furya.network/furya-1/account/${accountAddress}'
    }, {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/furya',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=furya&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=furya&addr=${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/chain.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/chain.svg',
      theme: {
        primary_color_hex: '#040404'
      }
    }]
};
export default info;