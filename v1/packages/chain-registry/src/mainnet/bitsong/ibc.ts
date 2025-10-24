import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'archway',
      chain_id: 'archway-1',
      client_id: '07-tendermint-92',
      connection_id: 'connection-90'
    },
    chain_2: {
      chain_name: 'bitsong',
      chain_id: 'bitsong-2b',
      client_id: '07-tendermint-80',
      connection_id: 'connection-55'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-124',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-29',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      chain_id: 'axelar-dojo-1',
      client_id: '07-tendermint-207',
      connection_id: 'connection-188'
    },
    chain_2: {
      chain_name: 'bitsong',
      chain_id: 'bitsong-2b',
      client_id: '07-tendermint-81',
      connection_id: 'connection-56'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-145',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-30',
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
      chain_name: 'bitcanna',
      chain_id: 'bitcanna-1',
      client_id: '07-tendermint-0',
      connection_id: 'connection-19'
    },
    chain_2: {
      chain_name: 'bitsong',
      chain_id: 'bitsong-2b',
      client_id: '07-tendermint-1237',
      connection_id: 'connection-1132'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-0',
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
      chain_name: 'bitsong',
      chain_id: 'bitsong-2b',
      client_id: '07-tendermint-1',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'cosmoshub',
      chain_id: 'cosmoshub-4',
      client_id: '07-tendermint-481',
      connection_id: 'connection-395'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-229',
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
      chain_name: 'bitsong',
      chain_id: 'bitsong-2b',
      client_id: '07-tendermint-9',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'juno',
      chain_id: 'juno-1',
      client_id: '07-tendermint-33',
      connection_id: 'connection-26'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-17',
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
      chain_name: 'bitsong',
      chain_id: 'bitsong-2b',
      client_id: '07-tendermint-83',
      connection_id: 'connection-58'
    },
    chain_2: {
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-182',
      connection_id: 'connection-136'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-39',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-7232',
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
      chain_name: 'bitsong',
      chain_id: 'bitsong-2b',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosis',
      chain_id: 'osmosis-1',
      client_id: '07-tendermint-1551',
      connection_id: 'connection-1216'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-73',
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