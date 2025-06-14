import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [{
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nobletestnet',
      client_id: '07-tendermint-423',
      connection_id: 'connection-390'
    },
    chain_2: {
      chain_name: 'xiontestnet2',
      client_id: '07-tendermint-3',
      connection_id: 'connection-3'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-333',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  }, {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-4492',
      connection_id: 'connection-3926'
    },
    chain_2: {
      chain_name: 'xiontestnet2',
      client_id: '07-tendermint-2',
      connection_id: 'connection-2'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-10231',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
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
          channel_id: 'channel-10381',
          port_id: 'icqhost'
        },
        chain_2: {
          channel_id: 'channel-10',
          port_id: 'feeabs'
        },
        ordering: 'unordered',
        version: 'icq-1',
        tags: {
          status: 'live'
        }
      }]
  }];
export default info;