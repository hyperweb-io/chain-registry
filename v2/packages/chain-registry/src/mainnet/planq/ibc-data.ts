import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'archway',
      chainId: 'archway-1',
      clientId: '07-tendermint-82',
      connectionId: 'connection-83'
    },
    chain2: {
      chainName: 'planq',
      chainId: 'planq_7070-2',
      clientId: '07-tendermint-561',
      connectionId: 'connection-486'
    },
    channels: [{
        chain1: {
          channelId: 'channel-112',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-62',
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
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-994',
      connectionId: 'connection-693'
    },
    chain2: {
      chainName: 'planq',
      chainId: 'planq_7070-2',
      clientId: '07-tendermint-5',
      connectionId: 'connection-3'
    },
    channels: [{
        chain1: {
          channelId: 'channel-446',
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
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'gravitybridge',
      chainId: 'gravity-bridge-3',
      clientId: '07-tendermint-195',
      connectionId: 'connection-165'
    },
    chain2: {
      chainName: 'planq',
      chainId: 'planq_7070-2',
      clientId: '07-tendermint-1',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-102',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-0',
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
      chainName: 'kopi',
      chainId: 'luwak-1',
      clientId: '07-tendermint-22',
      connectionId: 'connection-44'
    },
    chain2: {
      chainName: 'planq',
      chainId: 'planq_7070-2',
      clientId: '07-tendermint-573',
      connectionId: 'connection-492'
    },
    channels: [{
        chain1: {
          channelId: 'channel-16',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-65',
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
      chainName: 'kujira',
      chainId: 'kaiyo-1',
      clientId: '07-tendermint-70',
      connectionId: 'connection-46'
    },
    chain2: {
      chainName: 'planq',
      chainId: 'planq_7070-2',
      clientId: '07-tendermint-144',
      connectionId: 'connection-151'
    },
    channels: [{
        chain1: {
          channelId: 'channel-51',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-23',
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
      chainName: 'noble',
      chainId: 'noble-1',
      clientId: '07-tendermint-103',
      connectionId: 'connection-95'
    },
    chain2: {
      chainName: 'planq',
      chainId: 'planq_7070-2',
      clientId: '07-tendermint-567',
      connectionId: 'connection-490'
    },
    channels: [{
        chain1: {
          channelId: 'channel-82',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-63',
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
      chainName: 'osmosis',
      chainId: 'osmosis-1',
      clientId: '07-tendermint-2318',
      connectionId: 'connection-1815'
    },
    chain2: {
      chainName: 'planq',
      chainId: 'planq_7070-2',
      clientId: '07-tendermint-3',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-492',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
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
      chainName: 'planq',
      chainId: 'planq_7070-2',
      clientId: '07-tendermint-545',
      connectionId: 'connection-477'
    },
    chain2: {
      chainName: 'sei',
      chainId: 'pacific-1',
      clientId: '07-tendermint-21',
      connectionId: 'connection-12'
    },
    channels: [{
        chain1: {
          channelId: 'channel-59',
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
      chainName: 'planq',
      chainId: 'planq_7070-2',
      clientId: '07-tendermint-558',
      connectionId: 'connection-483'
    },
    chain2: {
      chainName: 'source',
      chainId: 'source-1',
      clientId: '07-tendermint-10',
      connectionId: 'connection-5'
    },
    channels: [{
        chain1: {
          channelId: 'channel-61',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
          portId: 'transfer'
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