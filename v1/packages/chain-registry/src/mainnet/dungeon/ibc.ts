import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      chain_id: 'cosmoshub-4',
      client_id: '07-tendermint-1441',
      connection_id: 'connection-1179'
    },
    chain_2: {
      chain_name: 'dungeon',
      chain_id: 'dungeon-1',
      client_id: '07-tendermint-24',
      connection_id: 'connection-8631'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-1560',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-5308',
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
      chain_name: 'dungeon',
      chain_id: 'dungeon-1',
      client_id: '07-tendermint-32',
      connection_id: 'connection-8634'
    },
    chain_2: {
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-188',
      connection_id: 'connection-149'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-5309',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-7358',
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
      chain_name: 'dungeon',
      chain_id: 'dungeon-1',
      client_id: '07-tendermint-22',
      connection_id: 'connection-8630'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-163',
      connection_id: 'connection-157'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-5307',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-150',
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
      chain_name: 'dungeon',
      chain_id: 'dungeon-1',
      client_id: '07-tendermint-18',
      connection_id: 'connection-8628'
    },
    chain_2: {
      chain_name: 'osmosis',
      chain_id: 'osmosis-1',
      client_id: '07-tendermint-3456',
      connection_id: 'connection-10614'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-5305',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-101249',
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