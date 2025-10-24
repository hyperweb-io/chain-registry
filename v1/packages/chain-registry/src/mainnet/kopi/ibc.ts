import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      chain_id: 'cosmoshub-4',
      client_id: '07-tendermint-1382',
      connection_id: 'connection-1105'
    },
    chain_2: {
      chain_name: 'kopi',
      chain_id: 'luwak-1',
      client_id: '07-tendermint-19',
      connection_id: 'connection-43'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-1351',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-15',
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
      chain_name: 'elys',
      chain_id: 'elys-1',
      client_id: '07-tendermint-55',
      connection_id: 'connection-36'
    },
    chain_2: {
      chain_name: 'kopi',
      chain_id: 'luwak-1',
      client_id: '07-tendermint-24',
      connection_id: 'connection-45'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-25',
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
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-278',
      connection_id: 'connection-281'
    },
    chain_2: {
      chain_name: 'kopi',
      chain_id: 'luwak-1',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-376',
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
      chain_name: 'kopi',
      chain_id: 'luwak-1',
      client_id: '07-tendermint-0',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-140',
      connection_id: 'connection-135'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-122',
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
      client_id: '07-tendermint-12',
      connection_id: 'connection-36'
    },
    chain_2: {
      chain_name: 'osmosis',
      chain_id: 'osmosis-1',
      client_id: '07-tendermint-3422',
      connection_id: 'connection-10584'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-97998',
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
      chain_name: 'kopi',
      chain_id: 'luwak-1',
      client_id: '07-tendermint-26',
      connection_id: 'connection-46'
    },
    chain_2: {
      chain_name: 'stride',
      chain_id: 'stride-1',
      client_id: '07-tendermint-161',
      connection_id: 'connection-170'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-18',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-322',
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
      client_id: '07-tendermint-2',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'terra2',
      chain_id: 'phoenix-1',
      client_id: '07-tendermint-426',
      connection_id: 'connection-440'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-586',
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