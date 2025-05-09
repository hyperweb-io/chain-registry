import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'evmos',
      client_id: '07-tendermint-119',
      connection_id: 'connection-77'
    },
    chain_2: {
      chain_name: 'gateway',
      client_id: '07-tendermint-10',
      connection_id: 'connection-6'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-94',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'gateway',
      client_id: '07-tendermint-18',
      connection_id: 'connection-13'
    },
    chain_2: {
      chain_name: 'injective',
      client_id: '07-tendermint-248',
      connection_id: 'connection-241'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-13',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-183',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'gateway',
      client_id: '07-tendermint-13',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'kujira',
      client_id: '07-tendermint-153',
      connection_id: 'connection-117'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-113',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'gateway',
      client_id: '07-tendermint-21',
      connection_id: 'connection-16'
    },
    chain_2: {
      chain_name: 'noble',
      client_id: '07-tendermint-143',
      connection_id: 'connection-137'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-16',
          port_id: 'wasm.wormhole1wkwy0xh89ksdgj9hr347dyd2dw7zesmtrue6kfzyml4vdtz6e5ws2y050r'
        },
        chain_2: {
          channel_id: 'channel-128',
          port_id: 'wormhole'
        },
        ordering: 'unordered',
        version: 'ibc-wormhole-v1',
        tags: {
          status: 'live'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'gateway',
      client_id: '07-tendermint-8',
      connection_id: 'connection-4'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2927',
      connection_id: 'connection-2424'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2186',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'gateway',
      client_id: '07-tendermint-16',
      connection_id: 'connection-12'
    },
    chain_2: {
      chain_name: 'stargaze',
      client_id: '07-tendermint-354',
      connection_id: 'connection-290'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-12',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-278',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  }
];
export default info;