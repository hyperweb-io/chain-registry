import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      chain_id: 'axelar-dojo-1',
      client_id: '07-tendermint-109',
      connection_id: 'connection-96'
    },
    chain_2: {
      chain_name: 'sommelier',
      chain_id: 'sommelier-3',
      client_id: '07-tendermint-13',
      connection_id: 'connection-10'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-72',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics-20',
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
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-135',
      connection_id: 'connection-108'
    },
    chain_2: {
      chain_name: 'sommelier',
      chain_id: 'sommelier-3',
      client_id: '07-tendermint-4',
      connection_id: 'connection-1'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-93',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
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
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-107',
      connection_id: 'connection-77'
    },
    chain_2: {
      chain_name: 'sommelier',
      chain_id: 'sommelier-3',
      client_id: '07-tendermint-12',
      connection_id: 'connection-8'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-69',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      chain_id: 'osmosis-1',
      client_id: '07-tendermint-1745',
      connection_id: 'connection-1348'
    },
    chain_2: {
      chain_name: 'sommelier',
      chain_id: 'sommelier-3',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-165',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
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
      chain_name: 'quicksilver',
      chain_id: 'quicksilver-2',
      client_id: '07-tendermint-79',
      connection_id: 'connection-54'
    },
    chain_2: {
      chain_name: 'sommelier',
      chain_id: 'sommelier-3',
      client_id: '07-tendermint-57',
      connection_id: 'connection-59'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-101',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-59',
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
      chain_name: 'sommelier',
      chain_id: 'sommelier-3',
      client_id: '07-tendermint-60',
      connection_id: 'connection-75'
    },
    chain_2: {
      chain_name: 'stride',
      chain_id: 'stride-1',
      client_id: '07-tendermint-131',
      connection_id: 'connection-122'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-71',
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
  }
];
export default info;