import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'composable',
      client_id: '08-wasm-5',
      connection_id: 'connection-5'
    },
    chain_2: {
      chain_name: 'picasso',
      client_id: '07-tendermint-32',
      connection_id: 'connection-26'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-17',
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
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'composablepolkadot',
      client_id: '10-grandpa-28',
      connection_id: 'connection-23'
    },
    chain_2: {
      chain_name: 'picasso',
      client_id: '10-grandpa-28',
      connection_id: 'connection-23'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-15',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-15',
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
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'passage',
      client_id: '07-tendermint-8',
      connection_id: 'connection-8'
    },
    chain_2: {
      chain_name: 'picasso',
      client_id: '07-tendermint-225',
      connection_id: 'connection-118'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-80',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  }
];
export default info;