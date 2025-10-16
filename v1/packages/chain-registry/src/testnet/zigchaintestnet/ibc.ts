import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [{
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelartestnet',
      client_id: '07-tendermint-1163',
      connection_id: 'connection-916'
    },
    chain_2: {
      chain_name: 'zigchaintestnet',
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
  }, {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nobletestnet',
      client_id: '07-tendermint-572',
      connection_id: 'connection-520'
    },
    chain_2: {
      chain_name: 'zigchaintestnet',
      client_id: '07-tendermint-84',
      connection_id: 'connection-62'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-704',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-44',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  }];
export default info;