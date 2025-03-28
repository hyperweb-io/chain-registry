import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'hedgetestnet',
  chain_type: 'cosmos',
  chain_id: 'berberis-1',
  pretty_name: 'Hedge Testnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://hedgeblock.io',
  bech32_prefix: 'hedge',
  daemon_name: 'hedged',
  node_home: '$HOME/.hedge',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uhedge',
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.03
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uhedge'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/hedgeblock/hedge'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hedgetestnet/images/hedge.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hedgetestnet/images/hedge.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc-berberis.hedgeblock.io',
        provider: 'Hedge'
      }],
    rest: [{
        address: 'https://lcd-berberis.hedgeblock.io',
        provider: 'Hedge'
      }]
  },
  explorers: [{
      kind: 'hedgescan',
      url: 'https://berberis.hedgescan.io',
      tx_page: 'https://berberis.hedgescan.io/txs/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hedgetestnet/images/hedge.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hedgetestnet/images/hedge.svg'
    }]
};
export default info;