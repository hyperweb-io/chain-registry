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
      chain_name: 'agoricdevnet',
      chain_id: 'agoricdev-25',
      client_id: '07-tendermint-21',
      connection_id: 'connection-18'
    },
    chain_2: {
      chain_name: 'celestiatestnet',
      chain_id: 'blockspacerace-0',
      client_id: '07-tendermint-611',
      connection_id: 'connection-662'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-129',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-399',
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
      chain_name: 'agoricdevnet',
      chain_id: 'agoricdev-25',
      client_id: '07-tendermint-18',
      connection_id: 'connection-17'
    },
    chain_2: {
      chain_name: 'cosmosicsprovidertestnet',
      chain_id: 'provider',
      client_id: '07-tendermint-311',
      connection_id: 'connection-224'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-25',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-388',
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
      chain_name: 'agoricdevnet',
      chain_id: 'agoricdev-25',
      client_id: '07-tendermint-16',
      connection_id: 'connection-16'
    },
    chain_2: {
      chain_name: 'elystestnet',
      chain_id: 'elysicstestnet-1',
      client_id: '07-tendermint-17',
      connection_id: 'connection-10'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-23',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-11',
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
      chain_name: 'agoricdevnet',
      chain_id: 'agoricdev-25',
      client_id: '07-tendermint-9',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'neutrontestnet',
      chain_id: 'pion-1',
      client_id: '07-tendermint-602',
      connection_id: 'connection-558'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1748',
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
      chain_name: 'agoricdevnet',
      chain_id: 'agoricdev-25',
      client_id: '07-tendermint-6',
      connection_id: 'connection-6'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-4596',
      connection_id: 'connection-3957'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-10293',
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
      chain_name: 'agoricdevnet',
      chain_id: 'agoricdev-25',
      client_id: '07-tendermint-15',
      connection_id: 'connection-15'
    },
    chain_2: {
      chain_name: 'stridetestnet',
      chain_id: 'stride-internal-1',
      client_id: '07-tendermint-68',
      connection_id: 'connection-44'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-13',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-60',
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