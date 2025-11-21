import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'agoricdevnet',
      chain_id: 'agoricdev-25',
      client_id: '07-tendermint-13',
      connection_id: 'connection-13'
    },
    chain_2: {
      chain_name: 'nobletestnet',
      chain_id: 'grand-1',
      client_id: '07-tendermint-432',
      connection_id: 'connection-196'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-337',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'babylontestnet',
      chain_id: 'bbn-test-5',
      client_id: '07-tendermint-11',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'nobletestnet',
      chain_id: 'grand-1',
      client_id: '07-tendermint-420',
      connection_id: 'connection-386'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-329',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'bitwaydevnet',
      chain_id: 'bitway-devnet-1',
      client_id: '07-tendermint-4',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'nobletestnet',
      chain_id: 'grand-1',
      client_id: '07-tendermint-592',
      connection_id: 'connection-537'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-774',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'elystestnet',
      chain_id: 'elysicstestnet-1',
      client_id: '07-tendermint-9',
      connection_id: 'connection-12'
    },
    chain_2: {
      chain_name: 'nobletestnet',
      chain_id: 'grand-1',
      client_id: '07-tendermint-28',
      connection_id: 'connection-26'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-12',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-19',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'int3facetestnet',
      chain_id: 'int3-test-2',
      client_id: '07-tendermint-12',
      connection_id: 'connection-8'
    },
    chain_2: {
      chain_name: 'nobletestnet',
      chain_id: 'grand-1',
      client_id: '07-tendermint-529',
      connection_id: 'connection-491'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-537',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'mantrachaintestnet',
      chain_id: 'mantra-hongbai-1',
      client_id: '07-tendermint-6',
      connection_id: 'connection-6'
    },
    chain_2: {
      chain_name: 'nobletestnet',
      chain_id: 'grand-1',
      client_id: '07-tendermint-294',
      connection_id: 'connection-247'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-6',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-209',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'mantrachaintestnet2',
      chain_id: 'mantra-dukong-1',
      client_id: '07-tendermint-2',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'nobletestnet',
      chain_id: 'grand-1',
      client_id: '07-tendermint-341',
      connection_id: 'connection-290'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-237',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'neutrontestnet',
      chain_id: 'pion-1',
      client_id: '07-tendermint-191',
      connection_id: 'connection-156'
    },
    chain_2: {
      chain_name: 'nobletestnet',
      chain_id: 'grand-1',
      client_id: '07-tendermint-70',
      connection_id: 'connection-61'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-496',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-43',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nobletestnet',
      chain_id: 'grand-1',
      client_id: '07-tendermint-42',
      connection_id: 'connection-31'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-1374',
      connection_id: 'connection-1275'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-22',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4280',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nobletestnet',
      chain_id: 'grand-1',
      client_id: '07-tendermint-6',
      connection_id: 'connection-6'
    },
    chain_2: {
      chain_name: 'osmosistestnet4',
      chain_id: 'osmo-test-4',
      client_id: '07-tendermint-4504',
      connection_id: 'connection-3905'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-3651',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nobletestnet',
      chain_id: 'grand-1',
      client_id: '07-tendermint-319',
      connection_id: 'connection-269'
    },
    chain_2: {
      chain_name: 'prysmdevnet',
      chain_id: 'prysm-devnet-1',
      client_id: '07-tendermint-2',
      connection_id: 'connection-0'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-222',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nobletestnet',
      chain_id: 'grand-1',
      client_id: '07-tendermint-44',
      connection_id: 'connection-32'
    },
    chain_2: {
      chain_name: 'seitestnet2',
      chain_id: 'atlantic-2',
      client_id: '07-tendermint-127',
      connection_id: 'connection-107'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-23',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-75',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nobletestnet',
      chain_id: 'grand-1',
      client_id: '07-tendermint-293',
      connection_id: 'connection-246'
    },
    chain_2: {
      chain_name: 'titantestnet',
      chain_id: 'titan_18889-1',
      client_id: '07-tendermint-9',
      connection_id: 'connection-7'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-208',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-7',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nobletestnet',
      chain_id: 'grand-1',
      client_id: '07-tendermint-224',
      connection_id: 'connection-176'
    },
    chain_2: {
      chain_name: 'xiontestnet1',
      chain_id: 'xion-testnet-1',
      client_id: '07-tendermint-120',
      connection_id: 'connection-56'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-147',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-489',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nobletestnet',
      chain_id: 'grand-1',
      client_id: '07-tendermint-423',
      connection_id: 'connection-390'
    },
    chain_2: {
      chain_name: 'xiontestnet2',
      chain_id: 'xion-testnet-2',
      client_id: '07-tendermint-3',
      connection_id: 'connection-3'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-333',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-3',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nobletestnet',
      chain_id: 'grand-1',
      client_id: '07-tendermint-572',
      connection_id: 'connection-520'
    },
    chain_2: {
      chain_name: 'zigchaintestnet',
      chain_id: 'zig-test-2',
      client_id: '07-tendermint-84',
      connection_id: 'connection-62'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-704',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-44',
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