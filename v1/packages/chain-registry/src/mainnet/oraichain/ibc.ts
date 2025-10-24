import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'acrechain',
      chain_id: 'acre_9052-1',
      client_id: '07-tendermint-12',
      connection_id: 'connection-13'
    },
    chain_2: {
      chain_name: 'oraichain',
      chain_id: 'Oraichain',
      client_id: '07-tendermint-74',
      connection_id: 'connection-42'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-33',
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
      client_id: '07-tendermint-651',
      connection_id: 'connection-497'
    },
    chain_2: {
      chain_name: 'oraichain',
      chain_id: 'Oraichain',
      client_id: '07-tendermint-47',
      connection_id: 'connection-22'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-301',
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
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-211',
      connection_id: 'connection-194'
    },
    chain_2: {
      chain_name: 'oraichain',
      chain_id: 'Oraichain',
      client_id: '07-tendermint-105',
      connection_id: 'connection-82'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-147',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-146',
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
      client_id: '07-tendermint-60',
      connection_id: 'connection-58'
    },
    chain_2: {
      chain_name: 'oraichain',
      chain_id: 'Oraichain',
      client_id: '07-tendermint-106',
      connection_id: 'connection-83'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-34',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-147',
          port_id: 'wasm.orai195269awwnt5m6c843q6w7hp8rt0k7syfu9de4h0wz384slshuzps8y7ccm'
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
      chain_name: 'oraichain',
      chain_id: 'Oraichain',
      client_id: '07-tendermint-49',
      connection_id: 'connection-21'
    },
    chain_2: {
      chain_name: 'osmosis',
      chain_id: 'osmosis-1',
      client_id: '07-tendermint-1882',
      connection_id: 'connection-1464'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-13',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-216',
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
      chain_name: 'oraichain',
      chain_id: 'Oraichain',
      client_id: '07-tendermint-178',
      connection_id: 'connection-142'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      chain_id: 'secret-4',
      client_id: '07-tendermint-195',
      connection_id: 'connection-190'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-135',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-217',
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
          channel_id: 'channel-140',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-222',
          port_id: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4'
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