import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'celestia',
      chain_id: 'celestia',
      client_id: '07-tendermint-105',
      connection_id: 'connection-72'
    },
    chain_2: {
      chain_name: 'namada',
      chain_id: 'namada.5f5de2dd1b88cba30586420',
      client_id: '07-tendermint-4',
      connection_id: 'connection-3'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-73',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      chain_id: 'cosmoshub-4',
      client_id: '07-tendermint-1351',
      connection_id: 'connection-1089'
    },
    chain_2: {
      chain_name: 'namada',
      chain_id: 'namada.5f5de2dd1b88cba30586420',
      client_id: '07-tendermint-3',
      connection_id: 'connection-2'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-1317',
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
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'namada',
      chain_id: 'namada.5f5de2dd1b88cba30586420',
      client_id: '07-tendermint-11',
      connection_id: 'connection-8'
    },
    chain_2: {
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-168',
      connection_id: 'connection-128'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-7024',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'namada',
      chain_id: 'namada.5f5de2dd1b88cba30586420',
      client_id: '07-tendermint-8',
      connection_id: 'connection-6'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-153',
      connection_id: 'connection-143'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-136',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'namada',
      chain_id: 'namada.5f5de2dd1b88cba30586420',
      client_id: '07-tendermint-10',
      connection_id: 'connection-7'
    },
    chain_2: {
      chain_name: 'nyx',
      chain_id: 'nyx',
      client_id: '07-tendermint-20',
      connection_id: 'connection-10'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-6',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-13',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'namada',
      chain_id: 'namada.5f5de2dd1b88cba30586420',
      client_id: '07-tendermint-2',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'osmosis',
      chain_id: 'osmosis-1',
      client_id: '07-tendermint-3433',
      connection_id: 'connection-10590'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-98451',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'namada',
      chain_id: 'namada.5f5de2dd1b88cba30586420',
      client_id: '07-tendermint-6',
      connection_id: 'connection-4'
    },
    chain_2: {
      chain_name: 'penumbra',
      chain_id: 'penumbra-1',
      client_id: '07-tendermint-18',
      connection_id: 'connection-14'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-13',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'namada',
      chain_id: 'namada.5f5de2dd1b88cba30586420',
      client_id: '07-tendermint-1',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'stride',
      chain_id: 'stride-1',
      client_id: '07-tendermint-154',
      connection_id: 'connection-157'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-308',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  }
];
export default info;