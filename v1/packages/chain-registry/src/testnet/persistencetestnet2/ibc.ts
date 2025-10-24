import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelartestnet',
      chain_id: 'axelar-testnet-lisbon-3',
      client_id: '07-tendermint-522',
      connection_id: 'connection-372'
    },
    chain_2: {
      chain_name: 'persistencetestnet2',
      chain_id: 'test-core-2',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-261',
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
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshubtestnet',
      chain_id: 'theta-testnet-001',
      client_id: '07-tendermint-2100',
      connection_id: 'connection-2447'
    },
    chain_2: {
      chain_name: 'persistencetestnet2',
      chain_id: 'test-core-2',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-2777',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
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
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-595',
      connection_id: 'connection-529'
    },
    chain_2: {
      chain_name: 'persistencetestnet2',
      chain_id: 'test-core-2',
      client_id: '07-tendermint-3',
      connection_id: 'connection-2'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-1037',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-7',
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