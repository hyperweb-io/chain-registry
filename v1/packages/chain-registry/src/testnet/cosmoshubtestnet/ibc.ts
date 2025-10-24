import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'celestiatestnet3',
      chain_id: 'mocha-4',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'cosmoshubtestnet',
      chain_id: 'theta-testnet-001',
      client_id: '07-tendermint-2382',
      connection_id: 'connection-2727'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-3152',
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
      chain_name: 'cosmoshubtestnet',
      chain_id: 'theta-testnet-001',
      client_id: '07-tendermint-2522',
      connection_id: 'connection-2881'
    },
    chain_2: {
      chain_name: 'elystestnet',
      chain_id: 'elysicstestnet-1',
      client_id: '07-tendermint-19',
      connection_id: 'connection-17'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-3302',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-16',
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
      chain_name: 'cosmoshubtestnet',
      chain_id: 'theta-testnet-001',
      client_id: '07-tendermint-2073',
      connection_id: 'connection-2418'
    },
    chain_2: {
      chain_name: 'empowertestnet',
      chain_id: 'circulus-1',
      client_id: '07-tendermint-3',
      connection_id: 'connection-2'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-2765',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshubtestnet',
      chain_id: 'theta-testnet-001',
      client_id: '7-tendermint-3407',
      connection_id: 'connection-3519'
    },
    chain_2: {
      chain_name: 'kujiratestnet',
      chain_id: 'harpoon-4',
      client_id: '07-tendermint-72',
      connection_id: 'connection-47'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-4004',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-51',
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
      chain_name: 'cosmoshubtestnet',
      chain_id: 'theta-testnet-001',
      client_id: '07-tendermint-2528',
      connection_id: 'connection-2886'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-1262',
      connection_id: 'connection-1157'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-3306',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4156',
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
      chain_name: 'cosmoshubtestnet',
      chain_id: 'theta-testnet-001',
      client_id: '07-tendermint-2100',
      connection_id: 'connection-2447'
    },
    chain_2: {
      chain_name: 'persistencetestnet2',
      chain_id: 'test-core-2',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-2777',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshubtestnet',
      chain_id: 'theta-testnet-001',
      client_id: '07-tendermint-3805',
      connection_id: 'connection-3845'
    },
    chain_2: {
      chain_name: 'prysmdevnet',
      chain_id: 'prysm-devnet-1',
      client_id: '07-tendermint-18',
      connection_id: 'connection-11'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-4366',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshubtestnet',
      chain_id: 'theta-testnet-001',
      client_id: '07-tendermint-160',
      connection_id: 'connection-108'
    },
    chain_2: {
      chain_name: 'symphonytestnet',
      chain_id: 'symphony-testnet-4',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-242',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
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
      chain_name: 'cosmoshubtestnet',
      chain_id: 'theta-testnet-001',
      client_id: '07-tendermint-3237',
      connection_id: 'connection-3407'
    },
    chain_2: {
      chain_name: 'titantestnet',
      chain_id: 'titan_18889-1',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-3910',
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
          status: 'INACTIVE'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshubtestnet',
      chain_id: 'theta-testnet-001',
      client_id: '07-tendermint-289',
      connection_id: 'connection-207'
    },
    chain_2: {
      chain_name: 'wardenprotocoltestnet',
      chain_id: 'docas_10100-1',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-373',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'ACTIVE'
        }
      }]
  }
];
export default info;