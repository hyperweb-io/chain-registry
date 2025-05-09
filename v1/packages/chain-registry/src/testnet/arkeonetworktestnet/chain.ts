import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'arkeonetworktestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Arkeo Network',
  chain_type: 'cosmos',
  chain_id: 'arkeo',
  bech32_prefix: 'tarkeo',
  daemon_name: 'arkeod',
  node_home: '$HOME/.arkeo',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uarkeo'
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uarkeo'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/arkeonetwork/arkeo'
  },
  apis: {
    rpc: [
      {
        address: 'https://arkeonetwork-testnet.nodejumper.io:26657',
        provider: 'NODEJUMPER'
      },
      {
        address: 'https://test-arkeo-rpc.kynraze.com',
        provider: 'kynraze'
      },
      {
        address: 'https://testnet-arkeo-rpc.lavenderfive.com',
        provider: 'lavenderfive'
      },
      {
        address: 'https://arkeo-rpc.siriusnodes.uk',
        provider: 'siriusnodes'
      },
      {
        address: 'http://seed.arkeo.network:26657',
        provider: 'arkeo'
      }
    ],
    rest: [
      {
        address: 'https://arkeonetwork-testnet.nodejumper.io:1317',
        provider: 'NODEJUMPER'
      },
      {
        address: 'https://test-arkeo-api.kynraze.com',
        provider: 'kynraze'
      },
      {
        address: 'https://testnet-arkeo-api.lavenderfive.com',
        provider: 'lavenderfive'
      },
      {
        address: 'https://arkeo-api.siriusnodes.uk',
        provider: 'siriusnodes'
      },
      {
        address: 'http://seed.arkeo.network:1317',
        provider: 'arkeo'
      }
    ],
    grpc: [{
        address: 'https://arkeonetwork-testnet.nodejumper.io:9090/',
        provider: 'NODEJUMPER'
      }]
  },
  explorers: [{
      url: 'https://explorer.nodexcapital.com/arkeo',
      tx_page: 'https://explorer.nodexcapital.com/arkeo/tx/${txHash}'
    }]
};
export default info;