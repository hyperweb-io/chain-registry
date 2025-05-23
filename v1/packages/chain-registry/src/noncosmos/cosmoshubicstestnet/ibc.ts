import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [{
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
          status: 'live',
          preferred: true
        }
      }]
  }];
export default info;