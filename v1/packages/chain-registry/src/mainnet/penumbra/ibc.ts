import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'namada',
      chain_id: 'namada.5f5de2dd1b88cba30586420',
      client_id: '07-tendermint-6',
      connection_id: 'connection-4'
    },
    chain_2: {
      chain_name: 'penumbra',
      chain_id: 'penumbra-1',
      client_id: '07-tendermint-18',
      connection_id: 'connection-14'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-13',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-137',
      connection_id: 'connection-98'
    },
    chain_2: {
      chain_name: 'penumbra',
      chain_id: 'penumbra-1',
      client_id: '07-tendermint-9',
      connection_id: 'connection-7'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-4886',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-6',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      chain_id: 'osmosis-1',
      client_id: '07-tendermint-3242',
      connection_id: 'connection-2730'
    },
    chain_2: {
      chain_name: 'penumbra',
      chain_id: 'penumbra-1',
      client_id: '07-tendermint-4',
      connection_id: 'connection-4'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-79703',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  }
];
export default info;