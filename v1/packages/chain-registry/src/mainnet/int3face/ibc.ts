import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'int3face',
      client_id: '07-tendermint-3',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'neutron',
      client_id: '07-tendermint-151',
      connection_id: 'connection-111'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-6455',
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
      chain_name: 'int3face',
      client_id: '07-tendermint-4',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'noble',
      client_id: '07-tendermint-179',
      connection_id: 'connection-172'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-165',
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
      chain_name: 'int3face',
      client_id: '07-tendermint-1',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-3258',
      connection_id: 'connection-2746'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-82819',
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