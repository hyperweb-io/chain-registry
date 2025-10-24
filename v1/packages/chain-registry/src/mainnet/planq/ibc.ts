import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'archway',
      chain_id: 'archway-1',
      client_id: '07-tendermint-82',
      connection_id: 'connection-83'
    },
    chain_2: {
      chain_name: 'planq',
      chain_id: 'planq_7070-2',
      client_id: '07-tendermint-561',
      connection_id: 'connection-486'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-112',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-62',
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
      chain_name: 'cosmoshub',
      chain_id: 'cosmoshub-4',
      client_id: '07-tendermint-994',
      connection_id: 'connection-693'
    },
    chain_2: {
      chain_name: 'planq',
      chain_id: 'planq_7070-2',
      client_id: '07-tendermint-5',
      connection_id: 'connection-3'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-446',
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
      chain_name: 'gravitybridge',
      chain_id: 'gravity-bridge-3',
      client_id: '07-tendermint-195',
      connection_id: 'connection-165'
    },
    chain_2: {
      chain_name: 'planq',
      chain_id: 'planq_7070-2',
      client_id: '07-tendermint-1',
      connection_id: 'connection-0'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-102',
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
      chain_name: 'kopi',
      chain_id: 'luwak-1',
      client_id: '07-tendermint-22',
      connection_id: 'connection-44'
    },
    chain_2: {
      chain_name: 'planq',
      chain_id: 'planq_7070-2',
      client_id: '07-tendermint-573',
      connection_id: 'connection-492'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-16',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-65',
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
      client_id: '07-tendermint-70',
      connection_id: 'connection-46'
    },
    chain_2: {
      chain_name: 'planq',
      chain_id: 'planq_7070-2',
      client_id: '07-tendermint-144',
      connection_id: 'connection-151'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-51',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-23',
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
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-103',
      connection_id: 'connection-95'
    },
    chain_2: {
      chain_name: 'planq',
      chain_id: 'planq_7070-2',
      client_id: '07-tendermint-567',
      connection_id: 'connection-490'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-82',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-63',
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
      client_id: '07-tendermint-2318',
      connection_id: 'connection-1815'
    },
    chain_2: {
      chain_name: 'planq',
      chain_id: 'planq_7070-2',
      client_id: '07-tendermint-3',
      connection_id: 'connection-2'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-492',
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
      chain_name: 'planq',
      chain_id: 'planq_7070-2',
      client_id: '07-tendermint-545',
      connection_id: 'connection-477'
    },
    chain_2: {
      chain_name: 'sei',
      chain_id: 'pacific-1',
      client_id: '07-tendermint-21',
      connection_id: 'connection-12'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-59',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-13',
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
      chain_name: 'planq',
      chain_id: 'planq_7070-2',
      client_id: '07-tendermint-558',
      connection_id: 'connection-483'
    },
    chain_2: {
      chain_name: 'source',
      chain_id: 'source-1',
      client_id: '07-tendermint-10',
      connection_id: 'connection-5'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-61',
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
  }
];
export default info;