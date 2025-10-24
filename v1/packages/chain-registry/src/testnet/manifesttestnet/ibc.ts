import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [{
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelartestnet',
      chain_id: 'axelar-testnet-lisbon-3',
      client_id: '07-tendermint-1090',
      connection_id: 'connection-847'
    },
    chain_2: {
      chain_name: 'manifesttestnet',
      chain_id: 'manifest-ledger-testnet',
      client_id: '07-tendermint-9',
      connection_id: 'connection-10'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-594',
          port_id: 'transfer',
          client_id: '07-tendermint-1090',
          connection_id: 'connection-847'
        },
        chain_2: {
          channel_id: 'channel-6',
          port_id: 'transfer',
          client_id: '07-tendermint-9',
          connection_id: 'connection-10'
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
      chain_name: 'manifesttestnet',
      chain_id: 'manifest-ledger-testnet',
      client_id: '07-tendermint-8',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      chain_id: 'osmo-test-5',
      client_id: '07-tendermint-4456',
      connection_id: 'connection-3898'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer',
          client_id: '07-tendermint-8',
          connection_id: 'connection-9'
        },
        chain_2: {
          channel_id: 'channel-10183',
          port_id: 'transfer',
          client_id: '07-tendermint-4456',
          connection_id: 'connection-3898'
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