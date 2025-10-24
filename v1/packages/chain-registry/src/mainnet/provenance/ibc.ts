import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      chain_id: 'axelar-dojo-1',
      client_id: '07-tendermint-175',
      connection_id: 'connection-153'
    },
    chain_2: {
      chain_name: 'provenance',
      chain_id: 'pio-mainnet-1',
      client_id: '07-tendermint-35',
      connection_id: 'connection-12'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-116',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-9',
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
      client_id: '07-tendermint-30',
      connection_id: 'connection-37'
    },
    chain_2: {
      chain_name: 'provenance',
      chain_id: 'pio-mainnet-1',
      client_id: '07-tendermint-36',
      connection_id: 'connection-13'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-20',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-10',
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
      client_id: '07-tendermint-1899',
      connection_id: 'connection-1472'
    },
    chain_2: {
      chain_name: 'provenance',
      chain_id: 'pio-mainnet-1',
      client_id: '07-tendermint-31',
      connection_id: 'connection-9'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-222',
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