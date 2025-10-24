import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      chain_id: 'axelar-dojo-1',
      client_id: '07-tendermint-188',
      connection_id: 'connection-166'
    },
    chain_2: {
      chain_name: 'fxcore',
      chain_id: 'fxcore',
      client_id: '07-tendermint-24',
      connection_id: 'connection-23'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-128',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-20',
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
      chain_name: 'cosmoshub',
      chain_id: 'cosmoshub-4',
      client_id: '07-tendermint-1141',
      connection_id: 'connection-829'
    },
    chain_2: {
      chain_name: 'fxcore',
      chain_id: 'fxcore',
      client_id: '07-tendermint-13',
      connection_id: 'connection-13'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-585',
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
      chain_name: 'fxcore',
      chain_id: 'fxcore',
      client_id: '07-tendermint-23',
      connection_id: 'connection-22'
    },
    chain_2: {
      chain_name: 'osmosis',
      chain_id: 'osmosis-1',
      client_id: '07-tendermint-2961',
      connection_id: 'connection-2456'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-19',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2716',
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
      chain_name: 'fxcore',
      chain_id: 'fxcore',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'pundix',
      chain_id: 'PUNDIX',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-0',
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