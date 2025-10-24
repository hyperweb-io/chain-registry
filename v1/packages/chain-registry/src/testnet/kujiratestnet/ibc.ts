import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [{
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshubtestnet',
      chain_id: 'theta-testnet-001',
      client_id: '7-tendermint-3407',
      connection_id: 'connection-3519'
    },
    chain_2: {
      chain_name: 'kujiratestnet',
      chain_id: 'harpoon-4',
      client_id: '07-tendermint-72',
      connection_id: 'connection-47'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-4004',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-51',
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
      chain_name: 'kujiratestnet',
      chain_id: 'harpoon-4',
      client_id: '07-tendermint-73',
      connection_id: 'connection-48'
    },
    chain_2: {
      chain_name: 'terra2testnet',
      chain_id: 'pisco-1',
      client_id: '7-tendermint-568',
      connection_id: 'connection-508'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-73',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-541',
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