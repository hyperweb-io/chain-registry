import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelartestnet',
      client_id: '07-tendermint-1106',
      connection_id: 'connection-862'
    },
    chain_2: {
      chain_name: 'babylontestnet',
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
      chain_name: 'babylontestnet',
      client_id: '07-tendermint-12',
      connection_id: 'connection-11'
    },
    chain_2: {
      chain_name: 'cosmoshubicstestnet',
      client_id: '07-tendermint-248',
      connection_id: 'connection-179'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-8',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-347',
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
      client_id: '07-tendermint-2',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'neutrontestnet',
      client_id: '07-tendermint-582',
      connection_id: 'connection-522'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1651',
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
      chain_name: 'babylontestnet',
      client_id: '07-tendermint-11',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'nobletestnet',
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
      chain_name: 'babylontestnet',
      client_id: '07-tendermint-31',
      connection_id: 'connection-29'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-4636',
      connection_id: 'connection-3994'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-21',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-10366',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }, {
        chain_1: {
          channel_id: 'channel-22',
          port_id: 'wasm.bbn17tu5q57xdf3u4m0u8j4mnjlcwe9kt4n87fmc4cdnrkf9zungn7wsjfhts0'
        },
        chain_2: {
          channel_id: 'channel-10367',
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