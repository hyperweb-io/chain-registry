import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [{
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      chain_id: 'cosmoshub-4',
      client_id: '07-tendermint-1120',
      connection_id: 'connection-807'
    },
    chain_2: {
      chain_name: 'lumnetwork',
      chain_id: 'lum-network-1',
      client_id: '07-tendermint-21',
      connection_id: 'connection-22'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-566',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-12',
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
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'lumnetwork',
      chain_id: 'lum-network-1',
      client_id: '07-tendermint-7',
      connection_id: 'connection-5'
    },
    chain_2: {
      chain_name: 'osmosis',
      chain_id: 'osmosis-1',
      client_id: '07-tendermint-1668',
      connection_id: 'connection-1280'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-115',
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