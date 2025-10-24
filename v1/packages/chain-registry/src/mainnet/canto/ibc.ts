import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'canto',
      chain_id: 'canto_7700-1',
      client_id: '07-tendermint-10',
      connection_id: 'connection-10'
    },
    chain_2: {
      chain_name: 'carbon',
      chain_id: 'carbon-1',
      client_id: '07-tendermint-40',
      connection_id: 'connection-23'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-6',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-18',
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
      chain_name: 'canto',
      chain_id: 'canto_7700-1',
      client_id: '07-tendermint-38',
      connection_id: 'connection-32'
    },
    chain_2: {
      chain_name: 'composable',
      chain_id: 'centauri-1',
      client_id: '07-tendermint-50',
      connection_id: 'connection-19'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-23',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-12',
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
      chain_name: 'canto',
      chain_id: 'canto_7700-1',
      client_id: '07-tendermint-1',
      connection_id: 'connection-3'
    },
    chain_2: {
      chain_name: 'cosmoshub',
      chain_id: 'cosmoshub-4',
      client_id: '07-tendermint-873',
      connection_id: 'connection-604'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-358',
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
      chain_name: 'canto',
      chain_id: 'canto_7700-1',
      client_id: '07-tendermint-0',
      connection_id: '07-tendermint-0'
    },
    chain_2: {
      chain_name: 'gravitybridge',
      chain_id: 'gravity-bridge-3',
      client_id: '07-tendermint-156',
      connection_id: 'connection-150'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-88',
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
      chain_name: 'canto',
      chain_id: 'canto_7700-1',
      client_id: '07-tendermint-9',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'osmosis',
      chain_id: 'osmosis-1',
      client_id: '07-tendermint-2481',
      connection_id: 'connection-2017'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-550',
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
      chain_name: 'canto',
      chain_id: 'canto_7700-1',
      client_id: '07-tendermint-24',
      connection_id: 'connection-16'
    },
    chain_2: {
      chain_name: 'sommelier',
      chain_id: 'sommelier-3',
      client_id: '07-tendermint-10',
      connection_id: 'connection-6'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
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