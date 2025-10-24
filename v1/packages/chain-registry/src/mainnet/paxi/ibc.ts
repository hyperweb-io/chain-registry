import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      chain_id: 'cosmoshub-4',
      client_id: '07-tendermint-1442',
      connection_id: 'connection-1182'
    },
    chain_2: {
      chain_name: 'paxi',
      chain_id: 'paxi-mainnet',
      client_id: '07-tendermint-4',
      connection_id: 'connection-3'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-1566',
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
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-188',
      connection_id: 'connection-181'
    },
    chain_2: {
      chain_name: 'paxi',
      chain_id: 'paxi-mainnet',
      client_id: '07-tendermint-8',
      connection_id: 'connection-4'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-205',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
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
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      chain_id: 'osmosis-1',
      client_id: '07-tendermint-3611',
      connection_id: 'connection-10963'
    },
    chain_2: {
      chain_name: 'paxi',
      chain_id: 'paxi-mainnet',
      client_id: '07-tendermint-3',
      connection_id: 'connection-2'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-107354',
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
  }
];
export default info;