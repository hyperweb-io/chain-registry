import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'furya',
      chain_id: 'furya-1',
      client_id: '07-tendermint-3',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'juno',
      chain_id: 'juno-1',
      client_id: '07-tendermint-501',
      connection_id: 'connection-505'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-417',
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
      chain_name: 'furya',
      chain_id: 'furya-1',
      client_id: '07-tendermint-1',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-160',
      connection_id: 'connection-123'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-119',
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
      chain_name: 'furya',
      chain_id: 'furya-1',
      client_id: '07-tendermint-5',
      connection_id: 'connection-4'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-67',
      connection_id: 'connection-64'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-42',
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
      chain_name: 'furya',
      chain_id: 'furya-1',
      client_id: '07-tendermint-10',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'osmosis',
      chain_id: 'osmosis-1',
      client_id: '07-tendermint-3201',
      connection_id: 'connection-2658'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-8',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-74222',
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
      chain_name: 'furya',
      chain_id: 'furya-1',
      client_id: '07-tendermint-14',
      connection_id: 'connection-10'
    },
    chain_2: {
      chain_name: 'terra2',
      chain_id: 'phoenix-1',
      client_id: '07-tendermint-422',
      connection_id: 'connection-436'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-495',
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