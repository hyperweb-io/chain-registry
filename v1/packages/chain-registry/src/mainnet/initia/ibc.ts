import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'initia',
      client_id: '07-tendermint-42',
      connection_id: 'connection-40'
    },
    chain_2: {
      chain_name: 'milkyway',
      client_id: '07-tendermint-7',
      connection_id: 'connection-5'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-80',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-5',
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
      chain_name: 'initia',
      client_id: '07-tendermint-20',
      connection_id: 'connection-20'
    },
    chain_2: {
      chain_name: 'neutron',
      client_id: '07-tendermint-161',
      connection_id: 'connection-118'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-37',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-6885',
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
      chain_name: 'initia',
      client_id: '07-tendermint-36',
      connection_id: 'connection-36'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-3477',
      connection_id: 'connection-10713'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-68',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-102122',
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