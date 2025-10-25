import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'agoricdevnet',
      chain_id: 'agoricdev-25',
      client_id: '07-tendermint-22',
      connection_id: 'connection-19'
    },
    chain_2: {
      chain_name: 'axelartestnet',
      chain_id: 'axelar-testnet-lisbon-3',
      client_id: '07-tendermint-1193',
      connection_id: 'connection-942'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-315',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-623',
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
      chain_name: 'archwaytestnet',
      chain_id: 'constantine-3',
      client_id: '07-tendermint-70',
      connection_id: 'connection-60'
    },
    chain_2: {
      chain_name: 'axelartestnet',
      chain_id: 'axelar-testnet-lisbon-3',
      client_id: '07-tendermint-603',
      connection_id: 'connection-418'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-50',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-305',
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
      chain_name: 'atomonetestnet',
      chain_id: 'atomone-testnet-1',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'axelartestnet',
      chain_id: 'axelar-testnet-lisbon-3',
      client_id: '07-tendermint-1197',
      connection_id: 'connection-948'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-629',
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
      chain_name: 'axelartestnet',
      chain_id: 'axelar-testnet-lisbon-3',
      client_id: '07-tendermint-1106',
      connection_id: 'connection-862'
    },
    chain_2: {
      chain_name: 'babylontestnet',
      chain_id: 'bbn-test-5',
      client_id: '07-tendermint-17',
      connection_id: 'connection-15'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-598',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelartestnet',
      chain_id: 'axelar-testnet-lisbon-3',
      client_id: '07-tendermint-594',
      connection_id: 'connection-410'
    },
    chain_2: {
      chain_name: 'dydxtestnet',
      chain_id: 'dydx-testnet-4',
      client_id: '07-tendermint-6',
      connection_id: 'connection-4'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-297',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4',
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
      chain_name: 'axelartestnet',
      chain_id: 'axelar-testnet-lisbon-3',
      client_id: '07-tendermint-855',
      connection_id: 'connection-659'
    },
    chain_2: {
      chain_name: 'lavatestnet',
      chain_id: 'lava-testnet-2',
      client_id: '07-tendermint-10',
      connection_id: 'connection-10'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-444',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4',
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
      chain_name: 'axelartestnet',
      chain_id: 'axelar-testnet-lisbon-3',
      client_id: '07-tendermint-1090',
      connection_id: 'connection-847'
    },
    chain_2: {
      chain_name: 'manifesttestnet',
      chain_id: 'manifest-ledger-testnet',
      client_id: '07-tendermint-9',
      connection_id: 'connection-10'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-594',
          port_id: 'transfer',
          client_id: '07-tendermint-1090',
          connection_id: 'connection-847'
        },
        chain_2: {
          channel_id: 'channel-6',
          port_id: 'transfer',
          client_id: '07-tendermint-9',
          connection_id: 'connection-10'
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
      chain_name: 'axelartestnet',
      chain_id: 'axelar-testnet-lisbon-3',
      client_id: '07-tendermint-1009',
      connection_id: 'connection-783'
    },
    chain_2: {
      chain_name: 'mantrachaintestnet',
      chain_id: 'mantra-hongbai-1',
      client_id: '07-tendermint-7',
      connection_id: 'connection-7'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-540',
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
      chain_name: 'axelartestnet',
      chain_id: 'axelar-testnet-lisbon-3',
      client_id: '07-tendermint-685',
      connection_id: 'connection-538'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-1270',
      connection_id: 'connection-1169'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-339',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4170',
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
      chain_name: 'axelartestnet',
      chain_id: 'axelar-testnet-lisbon-3',
      client_id: '07-tendermint-213',
      connection_id: 'connection-151'
    },
    chain_2: {
      chain_name: 'osmosistestnet4',
      chain_id: 'osmo-test-4',
      client_id: '07-tendermint-3319',
      connection_id: 'connection-2807'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-135',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1946',
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
      chain_name: 'axelartestnet',
      chain_id: 'axelar-testnet-lisbon-3',
      client_id: '07-tendermint-522',
      connection_id: 'connection-372'
    },
    chain_2: {
      chain_name: 'persistencetestnet2',
      chain_id: 'test-core-2',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-261',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelartestnet',
      chain_id: 'axelar-testnet-lisbon-3',
      client_id: '07-tendermint-1045',
      connection_id: 'connection-806'
    },
    chain_2: {
      chain_name: 'prysmdevnet',
      chain_id: 'prysm-devnet-1',
      client_id: '07-tendermint-4',
      connection_id: 'connection-2'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-564',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelartestnet',
      chain_id: 'axelar-testnet-lisbon-3',
      client_id: '07-tendermint-1047',
      connection_id: 'connection-808'
    },
    chain_2: {
      chain_name: 'sagatestnet',
      chain_id: 'ssc-testnet-2',
      client_id: '07-tendermint-2',
      connection_id: 'connection-3'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-566',
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
      chain_name: 'axelartestnet',
      chain_id: 'axelar-testnet-lisbon-3',
      client_id: '07-tendermint-1001',
      connection_id: 'connection-780'
    },
    chain_2: {
      chain_name: 'titantestnet',
      chain_id: 'titan_18889-1',
      client_id: '07-tendermint-6',
      connection_id: 'connection-4'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-537',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelartestnet',
      chain_id: 'axelar-testnet-lisbon-3',
      client_id: '07-tendermint-970',
      connection_id: 'connection-752'
    },
    chain_2: {
      chain_name: 'xiontestnet1',
      chain_id: 'xion-testnet-1',
      client_id: '07-tendermint-127',
      connection_id: 'connection-64'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-521',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-225057',
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
      chain_name: 'axelartestnet',
      chain_id: 'axelar-testnet-lisbon-3',
      client_id: '07-tendermint-1163',
      connection_id: 'connection-916'
    },
    chain_2: {
      chain_name: 'zigchaintestnet',
      chain_id: 'zig-test-2',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-612',
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
  }
];
export default info;