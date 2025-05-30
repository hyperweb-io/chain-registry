import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [{
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'dungeon',
      client_id: '07-tendermint-22',
      connection_id: 'connection-8630'
    },
    chain_2: {
      chain_name: 'noble',
      client_id: '07-tendermint-163',
      connection_id: 'connection-157'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-5307',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-150',
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
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'dungeon',
      client_id: '07-tendermint-18',
      connection_id: 'connection-8628'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-3456',
      connection_id: 'connection-10614'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-5305',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-101249',
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
  }];
export default info;