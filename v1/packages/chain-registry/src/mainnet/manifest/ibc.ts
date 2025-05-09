import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [{
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'manifest',
      client_id: '07-tendermint-0',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-3448',
      connection_id: 'connection-10605'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer',
          client_id: '07-tendermint-0',
          connection_id: 'connection-1'
        },
        chain_2: {
          channel_id: 'channel-100418',
          port_id: 'transfer',
          client_id: '07-tendermint-3448',
          connection_id: 'connection-10605'
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