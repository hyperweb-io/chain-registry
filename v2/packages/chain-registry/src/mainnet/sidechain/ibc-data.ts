import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'axelar',
      clientId: '07-tendermint-242',
      connectionId: 'connection-232'
    },
    chain2: {
      chainName: 'sidechain',
      clientId: '07-tendermint-20',
      connectionId: 'connection-7'
    },
    channels: [{
        chain1: {
          channelId: 'channel-174',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-6',
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
      chainName: 'cosmoshub',
      clientId: '07-tendermint-1362',
      connectionId: 'connection-1097'
    },
    chain2: {
      chainName: 'sidechain',
      clientId: '07-tendermint-22',
      connectionId: 'connection-8'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1335',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-7',
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
      chainName: 'injective',
      clientId: '07-tendermint-298',
      connectionId: 'connection-301'
    },
    chain2: {
      chainName: 'sidechain',
      clientId: '07-tendermint-24',
      connectionId: 'connection-10'
    },
    channels: [{
        chain1: {
          channelId: 'channel-431',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-9',
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
      chainName: 'neutron',
      clientId: '07-tendermint-160',
      connectionId: 'connection-117'
    },
    chain2: {
      chainName: 'sidechain',
      clientId: '07-tendermint-23',
      connectionId: 'connection-9'
    },
    channels: [{
        chain1: {
          channelId: 'channel-6852',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-8',
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
      chainName: 'noble',
      clientId: '07-tendermint-141',
      connectionId: 'connection-136'
    },
    chain2: {
      chainName: 'sidechain',
      clientId: '07-tendermint-7',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-123',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
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
      chainName: 'osmosis',
      clientId: '07-tendermint-3425',
      connectionId: 'connection-10585'
    },
    chain2: {
      chainName: 'sidechain',
      clientId: '07-tendermint-5',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-98081',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-0',
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