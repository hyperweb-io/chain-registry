import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-1353',
      connectionId: 'connection-1090'
    },
    chain2: {
      chainName: 'sidechain',
      clientId: '07-tendermint-12',
      connectionId: 'connection-3'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1318',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2',
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
      clientId: '07-tendermint-293',
      connectionId: 'connection-299'
    },
    chain2: {
      chainName: 'sidechain',
      clientId: '07-tendermint-17',
      connectionId: 'connection-5'
    },
    channels: [{
        chain1: {
          channelId: 'channel-429',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4',
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
      clientId: '07-tendermint-156',
      connectionId: 'connection-116'
    },
    chain2: {
      chainName: 'sidechain',
      clientId: '07-tendermint-16',
      connectionId: 'connection-4'
    },
    channels: [{
        chain1: {
          channelId: 'channel-6561',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3',
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