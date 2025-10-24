import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'dydxtestnet',
      chain_id: 'dydx-testnet-4',
      client_id: '07-tendermint-53',
      connection_id: 'connection-49'
    },
    chain_2: {
      chain_name: 'int3facetestnet',
      chain_id: 'int3-test-2',
      client_id: '07-tendermint-13',
      connection_id: 'connection-9'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-86',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'int3facetestnet',
      chain_id: 'int3-test-2',
      client_id: '07-tendermint-12',
      connection_id: 'connection-8'
    },
    chain_2: {
      chain_name: 'nobletestnet',
      chain_id: 'grand-1',
      client_id: '07-tendermint-529',
      connection_id: 'connection-491'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-537',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'int3facetestnet',
      chain_id: 'int3-test-2',
      client_id: '07-tendermint-3',
      connection_id: 'connection-3'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-4231',
      connection_id: 'connection-3694'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-9755',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  }
];
export default info;