import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'akash',
      clientId: '07-tendermint-183',
      connectionId: 'connection-171'
    },
    chain2: {
      chainName: 'doravota',
      clientId: '07-tendermint-17',
      connectionId: 'connection-11'
    },
    channels: [{
        chain1: {
          channelId: 'channel-125',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-7',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'INACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'archway',
      clientId: '07-tendermint-113',
      connectionId: 'connection-106'
    },
    chain2: {
      chainName: 'doravota',
      clientId: '07-tendermint-22',
      connectionId: 'connection-28'
    },
    channels: [{
        chain1: {
          channelId: 'channel-146',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-13',
          portId: 'transfer'
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
    chain1: {
      chainName: 'coreum',
      clientId: '07-tendermint-12',
      connectionId: 'connection-12'
    },
    chain2: {
      chainName: 'doravota',
      clientId: '07-tendermint-12',
      connectionId: 'connection-4'
    },
    channels: [{
        chain1: {
          channelId: 'channel-10',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'INACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-1191',
      connectionId: 'connection-920'
    },
    chain2: {
      chainName: 'doravota',
      clientId: '07-tendermint-14',
      connectionId: 'connection-8'
    },
    channels: [{
        chain1: {
          channelId: 'channel-750',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4',
          portId: 'transfer'
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
    chain1: {
      chainName: 'doravota',
      clientId: '07-tendermint-16',
      connectionId: 'connection-10'
    },
    chain2: {
      chainName: 'dydx',
      clientId: '07-tendermint-15',
      connectionId: 'connection-21'
    },
    channels: [{
        chain1: {
          channelId: 'channel-6',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-15',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'INACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'doravota',
      clientId: '07-tendermint-15',
      connectionId: 'connection-9'
    },
    chain2: {
      chainName: 'injective',
      clientId: '07-tendermint-245',
      connectionId: 'connection-239'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-182',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'INACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'doravota',
      clientId: '07-tendermint-23',
      connectionId: 'connection-29'
    },
    chain2: {
      chainName: 'noble',
      clientId: '07-tendermint-111',
      connectionId: 'connection-106'
    },
    channels: [{
        chain1: {
          channelId: 'channel-14',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-94',
          portId: 'transfer'
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
    chain1: {
      chainName: 'doravota',
      clientId: '07-tendermint-13',
      connectionId: 'connection-5'
    },
    chain2: {
      chainName: 'nolus',
      clientId: '07-tendermint-14',
      connectionId: 'connection-12'
    },
    channels: [{
        chain1: {
          channelId: 'channel-3',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4092',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'INACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'doravota',
      clientId: '07-tendermint-0',
      connectionId: 'connection-1'
    },
    chain2: {
      chainName: 'osmosis',
      clientId: '07-tendermint-2959',
      connectionId: 'connection-2454'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2694',
          portId: 'transfer'
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
    chain1: {
      chainName: 'doravota',
      clientId: '07-tendermint-21',
      connectionId: 'connection-27'
    },
    chain2: {
      chainName: 'sei',
      clientId: '07-tendermint-109',
      connectionId: 'connection-153'
    },
    channels: [{
        chain1: {
          channelId: 'channel-12',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-64',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'INACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'doravota',
      clientId: '07-tendermint-24',
      connectionId: 'connection-30'
    },
    chain2: {
      chainName: 'stargaze',
      clientId: '07-tendermint-368',
      connectionId: 'connection-318'
    },
    channels: [{
        chain1: {
          channelId: 'channel-15',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-394',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }, {
        chain1: {
          channelId: 'channel-16',
          portId: 'wasm.dora1q09v79ar0w99av6hlut0nhkstqt6up5mv3gmnut53t7jzxu4plyqt268vu'
        },
        chain2: {
          channelId: 'channel-397',
          portId: 'wasm.stars1r0a8ygvnjfaegy4n5z9325e0ew9uy2s7rn4vt7qf4ltv49fj4tnsk6pvtv'
        },
        ordering: 'unordered',
        version: 'ics721-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  }
];
export default info;