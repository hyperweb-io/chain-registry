import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injectivetestnet',
      client_id: '07-tendermint-123',
      connection_id: 'connection-98'
    },
    chain_2: {
      chain_name: 'noistestnet',
      client_id: '07-tendermint-26',
      connection_id: 'connection-13'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-74',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-33',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }, {
        chain_1: {
          channel_id: 'channel-77',
          port_id: 'wasm.inj14nendtsz0c40n7xtzwkjmdc8dkuz835jdydxhn'
        },
        chain_2: {
          channel_id: 'channel-36',
          port_id: 'wasm.nois1xwde9rzqk5u36fke0r9ddmtwvh43n4fv53c5vc462wz8xlnqjhls6d90xc'
        },
        ordering: 'unordered',
        version: 'nois-v7',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injectivetestnet',
      client_id: '07-tendermint-305',
      connection_id: 'connection-272'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-4379',
      connection_id: 'connection-3814'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-77026',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-10092',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injectivetestnet',
      client_id: '07-tendermint-239',
      connection_id: 'connection-220'
    },
    chain_2: {
      chain_name: 'xiontestnet',
      client_id: '07-tendermint-119',
      connection_id: 'connection-55'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-489',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-487',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injectivetestnet',
      client_id: '07-tendermint-321',
      connection_id: 'connection-281'
    },
    chain_2: {
      chain_name: 'xrplevmtestnet',
      client_id: '07-tendermint-24',
      connection_id: 'connection-4'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-77038',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }]
  }
];
export default info;