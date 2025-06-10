import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'evmos',
      clientId: '07-tendermint-119',
      connectionId: 'connection-77'
    },
    chain2: {
      chainName: 'gateway',
      clientId: '07-tendermint-10',
      connectionId: 'connection-6'
    },
    channels: [{
        chain1: {
          channelId: 'channel-94',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-5',
          portId: 'transfer'
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
    chain1: {
      chainName: 'gateway',
      clientId: '07-tendermint-18',
      connectionId: 'connection-13'
    },
    chain2: {
      chainName: 'injective',
      clientId: '07-tendermint-248',
      connectionId: 'connection-241'
    },
    channels: [{
        chain1: {
          channelId: 'channel-13',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-183',
          portId: 'transfer'
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
    chain1: {
      chainName: 'gateway',
      clientId: '07-tendermint-13',
      connectionId: 'connection-9'
    },
    chain2: {
      chainName: 'kujira',
      clientId: '07-tendermint-153',
      connectionId: 'connection-117'
    },
    channels: [{
        chain1: {
          channelId: 'channel-9',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-113',
          portId: 'transfer'
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
    chain1: {
      chainName: 'gateway',
      clientId: '07-tendermint-21',
      connectionId: 'connection-16'
    },
    chain2: {
      chainName: 'noble',
      clientId: '07-tendermint-143',
      connectionId: 'connection-137'
    },
    channels: [{
        chain1: {
          channelId: 'channel-16',
          portId: 'wasm.wormhole1wkwy0xh89ksdgj9hr347dyd2dw7zesmtrue6kfzyml4vdtz6e5ws2y050r'
        },
        chain2: {
          channelId: 'channel-128',
          portId: 'wormhole'
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
    chain1: {
      chainName: 'gateway',
      clientId: '07-tendermint-8',
      connectionId: 'connection-4'
    },
    chain2: {
      chainName: 'osmosis',
      clientId: '07-tendermint-2927',
      connectionId: 'connection-2424'
    },
    channels: [{
        chain1: {
          channelId: 'channel-3',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2186',
          portId: 'transfer'
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
    chain1: {
      chainName: 'gateway',
      clientId: '07-tendermint-16',
      connectionId: 'connection-12'
    },
    chain2: {
      chainName: 'stargaze',
      clientId: '07-tendermint-354',
      connectionId: 'connection-290'
    },
    channels: [{
        chain1: {
          channelId: 'channel-12',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-278',
          portId: 'transfer'
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